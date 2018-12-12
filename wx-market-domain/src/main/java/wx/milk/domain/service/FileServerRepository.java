package wx.milk.domain.service;

import org.apache.ibatis.annotations.Mapper;
import wx.base.domain.IRepository;
import wx.milk.model.service.WxFile;

/**
 * auther: kiven on 2018/7/26/026 17:47
 * try it bast!
 */
@Mapper
public interface FileServerRepository extends IRepository<WxFile, String> {

}
