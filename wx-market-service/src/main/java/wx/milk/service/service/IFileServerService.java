package wx.milk.service.service;

import org.springframework.data.domain.Page;
import wx.base.service.IService;
import wx.milk.model.service.WxFile;

import java.io.IOException;
import java.util.List;
import java.util.Map;

/**
 * 文件服务器接口
 *
 * @author LiYanCheng@HF
 * @version 1.0.0
 * @since 2016年9月1日09:42:19
 */
public interface IFileServerService extends IService<WxFile, String> {

    /**
     * 上传文件
     *
     * @param file 上传文件类型
     *
     * @param data   字节信息
     * @return 返回信息
     * <ul>
     * <li>{@linkplain WxFile#id 主键}</li>
     * <li>{@linkplain WxFile#filePath 文件路径}</li>
     * </ul>
     * @since 2017年3月13日19:33:03
     */
    WxFile storageFile(WxFile file, byte[] data) throws IOException;

    /**
     * 上传文件不保存数据库
     *
     * @param file 上传文件类型
     *
     * @param data   字节信息
     * @return 返回信息
     * <ul>
     * <li>{@linkplain WxFile#id UUID}</li>
     * <li>{@linkplain WxFile#filePath 文件路径}</li>
     * </ul>
     * @since 2017年3月13日19:33:03
     */
    WxFile upload(WxFile file, byte[] data) throws IOException;

    /**
     * 【获取模板地址】
     *
     * @param templateType  模板类型
     * @param processorType 文件类型
     * @return 模板路径
     * @since 2017年6月21日12:22:42
     */
    String getTemplatePath(WxFile.TemplateType templateType, WxFile.ProcessorType processorType);

    /**
     * 通过fileId 获取文件路径
     *
     * @param fileId 文件索引
     * @return file path
     * @since 2016年9月2日14:10:03
     */
    String getFilePath(String fileId);

    /**
     * 获取文件路径
     *
     * @param peFile 文件
     * @return file path
     * @since 2016年9月2日14:10:03
     */
    String getFilePath(WxFile peFile);
}
