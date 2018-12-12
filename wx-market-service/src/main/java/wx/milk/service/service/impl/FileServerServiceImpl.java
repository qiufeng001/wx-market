package wx.milk.service.service.impl;

import org.apache.commons.io.IOUtils;
import org.apache.commons.lang.ArrayUtils;
import org.apache.commons.lang.StringUtils;
import org.apache.commons.logging.LogFactory;
import org.apache.shiro.SecurityUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Isolation;
import org.springframework.transaction.annotation.Transactional;
import wx.base.domain.IRepository;
import wx.base.service.impl.BaseService;
import wx.contants.WxConstant;
import wx.milk.domain.service.FileServerRepository;
import wx.security.User;
import wx.milk.model.service.WxFile;
import wx.milk.service.service.IFileServerService;
import wx.security.BaseEntity;
import wx.util.PropertiesUtils;
import wx.util.UUIDUtils;
import wx.util.WxDateUtils;

import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.OutputStream;
import java.util.Date;

/**
 * file server service
 *
 * @author LiYanCheng@HF
 * @version 1.0.0
 * @since 2016年10月10日10:29:26
 */
@Service
public class FileServerServiceImpl extends BaseService<WxFile, String> implements IFileServerService {

    protected org.apache.commons.logging.Log logger = LogFactory.getLog(getClass());

    @Autowired
    private FileServerRepository respontory;

    @Override
    protected IRepository<WxFile, String> getRepository() {
        return respontory;
    }

    @Override
    @Transactional(isolation = Isolation.READ_COMMITTED)
    public WxFile storageFile(WxFile file, byte[] data) throws IOException {
        if (file == null || file.getFsType() == null || StringUtils.isBlank(file.getSuffix()) ||
                ArrayUtils.isEmpty(data) || file.getProcessorType() == null ||
                file.getTemplateType() == null) {
            throw new IllegalArgumentException("Parameters is not valid!");
        }
        initEntry(file);
        respontory.insert(file);
        return upload(file, data);
    }

    @Override
    public WxFile upload(WxFile wxFile, byte[] data) throws IOException {
        if (wxFile == null || wxFile.getFsType() == null || StringUtils.isBlank(wxFile.getId()) ||
                StringUtils.isBlank(wxFile.getSuffix()) || ArrayUtils.isEmpty(data) || wxFile.getProcessorType() == null ||
                wxFile.getTemplateType() == null) {
            throw new IllegalArgumentException("Parameters is not valid!");
        }

      //  String storageRootPath = PropertiesUtils.getEnvProp().getProperty("root.file.upload.path");
        String filePath = getStoragePath(wxFile);

       // File file = new File(storageRootPath + WxConstant.BACKSLASH + filePath);
        File file = new File(filePath);
        if (!file.getParentFile().exists()) {
            file.getParentFile().mkdirs();
        }

        OutputStream outputStream = null;
        try {
            outputStream = new FileOutputStream(file);
            outputStream.write(data);
            // filePath = PropertiesUtils.getEnvProp().getProperty("file.access.path") + WxConstant.BACKSLASH + filePath;
            wxFile.setFilePath(filePath);
        } finally {
            IOUtils.closeQuietly(outputStream);
        }

        return wxFile;
    }

    @Override
    public String getTemplatePath(WxFile.TemplateType templateType, WxFile.ProcessorType processorType) {
        if (processorType == null || templateType == null) {
            throw new IllegalArgumentException("Parameters is not valid!");
        }

        WxFile wxFile = new WxFile();
        wxFile.setProcessorType(processorType);
        wxFile.setTemplateType(templateType);
        wxFile.setFsType(WxFile.FsType.TEMPLATE);
        return getStoragePath(wxFile);
    }

    private String getStoragePath(WxFile wxFile) {
        String storagePath = PropertiesUtils.getEnvProp().getProperty("root.file.upload.path") + WxConstant.BACKSLASH;
        switch (wxFile.getFsType()) {
            case COMMON:
                String timeStr = WxDateUtils.format(wxFile.getCreateTime(), "yyMM");
                storagePath = storagePath + WxFile.FsType.COMMON.getText() + WxConstant.BACKSLASH + timeStr
                        + WxConstant.BACKSLASH;
                if (StringUtils.isNotBlank(wxFile.getReferId())) {
                    storagePath += wxFile.getReferId() + WxConstant.BACKSLASH;
                }

                switch (wxFile.getProcessorType()) {
                    case IMAGE:
                        return storagePath + wxFile.getId() + WxConstant.BACKSLASH + WxFile.IMAGE_NAME + WxConstant.POINT + wxFile.getSuffix();
                    default:
                        return storagePath + wxFile.getId() + WxConstant.POINT + wxFile.getSuffix();
                }

            case VIDEO:
                timeStr = WxDateUtils.format(wxFile.getCreateTime(), "yyMM");
                storagePath = storagePath + WxFile.FsType.VIDEO.getText() + WxConstant.BACKSLASH + timeStr + WxConstant.BACKSLASH;
                if (StringUtils.isNotBlank(wxFile.getExamId()) && StringUtils.isNotBlank(wxFile.getArrangeId())) {
                    storagePath = storagePath + wxFile.getExamId() + WxConstant.BACKSLASH + wxFile.getArrangeId() + WxConstant.BACKSLASH;
                }

                switch (wxFile.getProcessorType()) {
                    case IMAGE:
                        storagePath += wxFile.getCreateUser() + WxConstant.BACKSLASH;
                        return storagePath + "images" + WxConstant.BACKSLASH + wxFile.getId() + WxConstant.POINT + wxFile.getSuffix();
                    case PRINT_IMAGE:
                        storagePath += wxFile.getReferId() + WxConstant.BACKSLASH;
                        return storagePath + "printImage" + WxConstant.BACKSLASH + wxFile.getId() + WxConstant.POINT + wxFile.getSuffix();
                    default:
                        storagePath += wxFile.getCreateUser() + WxConstant.BACKSLASH;
                        return storagePath + wxFile.getId() + WxConstant.POINT + wxFile.getSuffix();
                }

            case THUMB:
                return storagePath + WxFile.THUMB + WxConstant.BACKSLASH
                        + wxFile.getId() + WxConstant.POINT + wxFile.getSuffix();

            default:
        }
        return null;
    }

    @Override
    @Transactional(readOnly = true)
    public String getFilePath(String fileId) {
        if (StringUtils.isBlank(fileId)) {
            logger.error("File id is blank!");
        }

        WxFile WxFile = respontory.findByPrimaryKey(fileId);
        if (WxFile == null) {
            return null;
        }

        return getFilePath(WxFile);
    }

    @Override
    public String getFilePath(WxFile WxFile) {
        if (WxFile == null || StringUtils.isBlank(WxFile.getId()) || WxFile.getFsType() == null ||
                StringUtils.isBlank(WxFile.getSuffix()) || WxFile.getProcessorType() == null ||
                WxFile.getTemplateType() == null) {
            throw new IllegalArgumentException("Parameters is not valid!");
        }

        String filePath = getStoragePath(WxFile);
        return /*PropertiesUtils.getEnvProp().getProperty("file.access.path") + WxConstant.BACKSLASH + */filePath;
    }

    @SuppressWarnings({ "unchecked" })
    protected void initEntry(WxFile entry) {
        BaseEntity<String> item = (BaseEntity<String>) entry;
        Date d = new Date();
        User user = (User) SecurityUtils.getSubject().getPrincipal();
        if (user != null && item.getCreateTime() == null) {
            item.setCreateTime(d);
            item.setCreateUser(user.getName());
            item.setUpdateTime(d);
            item.setUpdateUser(item.getCreateUser());
            item.setId(UUIDUtils.getUUID());
        }
    }

}
