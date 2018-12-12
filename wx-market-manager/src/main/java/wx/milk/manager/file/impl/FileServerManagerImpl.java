package wx.milk.manager.file.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import wx.base.service.IService;
import wx.exception.manager.ManagerException;
import wx.milk.manager.file.IFileServerManager;
import wx.milk.manager.impl.BaseManager;
import wx.milk.model.service.WxFile;
import wx.milk.service.service.IFileServerService;

import java.io.File;
import java.io.IOException;

/**
 * auther: kiven on 2018/8/17/017 23:01
 * try it bast!
 */
@Service
public class FileServerManagerImpl extends BaseManager<WxFile, String> implements IFileServerManager  {

    @Autowired
    private IFileServerService service;

    @Override
    protected IService<WxFile, String> getService() {
        return service;
    }


    @Override
    public WxFile storageFile(WxFile file, byte[] data) throws IOException {
        return null;
    }

    @Override
    public WxFile upload(WxFile file, byte[] data) throws IOException {
        return service.upload(file, data);
    }

    @Override
    public String getTemplatePath(WxFile.TemplateType templateType, WxFile.ProcessorType processorType) {
        return service.getTemplatePath(templateType, processorType);
    }

    @Override
    public String getFilePath(String fileId) {
        return service.getFilePath(fileId);
    }

    @Override
    public String getFilePath(WxFile peFile) {
        return getFilePath(peFile);
    }

    @Override
    public Integer deleteByPrimaryKey(String id) throws ManagerException {
        try {
            deleteStoreFile(service.getFilePath(id));
            return getService().deleteByPrimaryKey(id);
        } catch (Exception e) {
            throw new ManagerException(e);
        }
    }

    private void deleteStoreFile(String filePath)    {
        File file = new File(filePath);
        if(file.isFile() && file.exists()){
            file.delete();
        }
    }
}
