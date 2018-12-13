package wx.milk.manager.dubbo;

import wx.query.Query;
import wx.security.User;

public interface IDubboManager {
    String getStr(String val);
    User findByParam(Query query);
}
