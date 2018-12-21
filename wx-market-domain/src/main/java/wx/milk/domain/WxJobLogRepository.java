package wx.milk.domain;

import com.framework.core.base.domain.IRepository;
import org.apache.ibatis.annotations.Mapper;
import wx.milk.model.WxJobLog;

/**
 * Created by Administrator on 2018/6/14/014.
 */
@Mapper
public interface WxJobLogRepository extends IRepository<WxJobLog, String> {

}
