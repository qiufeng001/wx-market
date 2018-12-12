package wx.milk.manager.file;

import org.apache.poi.ss.usermodel.IconMultiStateFormatting;
import wx.base.manager.IManager;
import wx.milk.model.service.WxFile;

import java.io.IOException;

/**
 * auther: kiven on 2018/8/17/017 23:00
 * try it bast!
 */
public interface IFileServerManager extends IManager<WxFile, String> {

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
