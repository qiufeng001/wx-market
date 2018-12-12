package wx.milk.web.controller.service;

import com.fasterxml.jackson.core.JsonGenerationException;
import com.fasterxml.jackson.databind.JsonMappingException;
import org.apache.commons.io.FileUtils;
import org.apache.commons.lang.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.multipart.MultipartFile;
import wx.base.controller.BaseController;
import wx.base.manager.IManager;
import wx.milk.model.service.WxFile;
import wx.milk.service.service.IFileServerService;
import wx.milk.web.utils.WxFileUtils;
import wx.query.Pagenation;
import wx.query.Query;
import wx.security.JsonResult;
import wx.util.PropertiesUtils;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.*;
import java.util.*;

/**
 * auther: kiven on 2018/7/26/026 21:00
 * try it bast!
 */
@Controller
@RequestMapping(value = "/*/file/*")
public class FileServerController extends BaseController<WxFile, String> {
    @Autowired
    private IFileServerService service;

    @Override
    protected IManager<WxFile, String> getManager() {
        return null;
    }

    @Override
    protected String getTemplateFolder() {
        return "/file";
    }

    @ResponseBody
    @RequestMapping("/filePath")
    public List<WxFile> getFiles(HttpServletRequest request, Query query, Pagenation page) {
        List<WxFile> list = service.selectByPage(query, page);

        List<WxFile> result = new ArrayList<>();
        for(WxFile file : list) {
            String filePath = service.getFilePath(file);
            file.setFilePath(filePath);
            result.add(file);
        }
        return result;
    }

    @ResponseBody
    @RequestMapping("/upload")
    public JsonResult<Map<String, String>> uploadFile(@RequestParam(value = "uploadFile") MultipartFile multipartFile,
                                                      HttpServletRequest request)
            throws IOException {

        try {
            WxFile peFile = new WxFile();
            Map<String, String> values = new HashMap<>();
            setFileAttribute(multipartFile, peFile);
            peFile.setFileSize(multipartFile.getSize());
            service.storageFile(peFile, multipartFile.getBytes());
            String filePath = service.getFilePath(peFile.getId());
            values.put("path", filePath);

            values.put("fileId", peFile.getId());
            return new JsonResult<>(true, "上传成功", values);
        } catch (Exception ex) {
            logger.error(ex);
            return new JsonResult<>(false, ex.getMessage());
        }
    }

    /**
     * 对上传的文件进行验证
     *
     * @param multipartFile 文件的对象
     * @param wxFile        用于存储文件相关的信息
     * @return 返回验证的结果
     */
    private void setFileAttribute(MultipartFile multipartFile, WxFile wxFile) {
        String fileName = multipartFile.getOriginalFilename();
        wxFile.setFileName(fileName);
        String fileSuffix = WxFileUtils.getFileSuffix(fileName);

        if (StringUtils.isNotBlank(fileSuffix)) {
            String lowerCasefileSuffix = fileSuffix.toLowerCase();
            wxFile.setSuffix(lowerCasefileSuffix);
            //peFile.setProcessorType(PeFile.ProcessorType.VIDEO);
            // 设置文件类型
            WxFileUtils.setFileType(wxFile, lowerCasefileSuffix);
        }
        if (null == wxFile.getFsType()) {
            wxFile.setFsType(WxFile.FsType.COMMON);
        }

        if (null == wxFile.getTemplateType()) {
            wxFile.setTemplateType(WxFile.TemplateType.USER);
        }

        long fileSize = multipartFile.getSize();
        wxFile.setFileSize(fileSize);
    }

    /**
     * @param multipartFile 上传的
     * @param chunks
     * @param chunk
     * @return
     * @throws IOException io异常
     */
    @RequestMapping(value = "/chunks/upload", method = {RequestMethod.POST})
    @ResponseBody
    public JsonResult upload(MultipartFile multipartFile, String chunks, String chunk) throws IOException {
        JsonResult jsonResult = new JsonResult();
        if (multipartFile.getSize() <= 0) {
            return new JsonResult(false, JsonResult.FAILED, "file is null！");
        }

        String fileName = multipartFile.getName();
        long fileSize = multipartFile.getSize();
        String tempPath = (String) PropertiesUtils.getEnvProp().get("temp.file.upload.path");
        String rootPath = (String) PropertiesUtils.getEnvProp().get("file.upload.path");
        try {
            if (null != multipartFile) {
                //判断上传的文件是否被分片（小于1M的不会分片）
                if (null == chunks && null == chunk) {
                    File file = new File(rootPath, multipartFile.getName());
                    multipartFile.transferTo(file);
                    file.createNewFile();
                    return new JsonResult(false, JsonResult.FAILED, "文件过小，不建议使用分片上传！");
                }

                String tempFileDir = tempPath + File.separator + fileName;
                File tempDir = new File(tempFileDir);
                if (!tempDir.exists()) {
                    tempDir.mkdirs();
                }

                File f = new File(tempFileDir + File.separator + fileName + "_" + chunk + ".part");
                multipartFile.transferTo(f);
                f.createNewFile();

                // 是否全部上传完成
                // 所有分片都存在才说明整个文件上传完成
                boolean uploadDone = true;
                for (int i = 0; i < Integer.parseInt(chunks); i++) {
                    File partFile = new File(tempFileDir, fileName + "_" + i + ".part");
                    if (!partFile.exists()) {
                        uploadDone = false;
                        jsonResult.setData(uploadDone);
                        return jsonResult;
                    }
                }
                // 所有分片文件都上传完成
                // 将所有分片文件合并到一个文件中
                if (uploadDone) {
                    synchronized (this) {
                        File destTempFile = new File(rootPath, fileName);
                        for (int i = 0; i < Integer.parseInt(chunks); i++) {
                            File partFile = new File(tempFileDir, fileName + "_" + i + ".part");
                            FileOutputStream fos = new FileOutputStream(destTempFile, true);
                            FileUtils.copyFile(partFile, fos);
                            fos.close();
                        }
                        FileUtils.deleteDirectory(tempDir);
                    }
                }
                return jsonResult;
            }

        } catch (Exception e) {
            logger.error("upload file failure :", e);
        }
        return new JsonResult(true, JsonResult.SUCCESS, "");
    }

    @SuppressWarnings("resource")
    @RequestMapping(value = "/chunk/upload", produces = "text/plain;charset=UTF-8")
    @ResponseBody
    public String sync(
            @RequestParam(value = "file", required = false) MultipartFile file,
            HttpServletRequest request, HttpServletResponse response)
            throws JsonGenerationException, JsonMappingException, IOException {


        if (request.getParameter("chunk") == null) {

            String realPath = request.getSession().getServletContext()
                    .getRealPath("/Upload/");
            String fileName = file.getOriginalFilename();

            File targetFile = new File(realPath, fileName);
            if (!targetFile.exists()) {
                targetFile.mkdirs();
            }
            file.transferTo(targetFile); // 小文件，直接拷贝

            return "";
        } else {
            int chunk = Integer.parseInt(request.getParameter("chunk")); // 当前分片
            int chunks = Integer.parseInt(request.getParameter("chunks")); // 分片总计

            String realPath = request.getSession().getServletContext()
                    .getRealPath("/Upload/");

            String Ogfilename = file.getOriginalFilename();

            File tempFile = new File(realPath, Ogfilename);
            OutputStream outputStream = new FileOutputStream(tempFile, true);
            InputStream inputStream = file.getInputStream();

            byte buffer[] = new byte[1024];
            int len = 0;
            while ((len = inputStream.read(buffer)) > 0) {
                outputStream.write(buffer, 0, len);
            }
            inputStream.close();
            outputStream.close();

            return "";
        }

    }
}
