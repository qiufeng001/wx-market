package wx.milk.manager.dubbo.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import wx.milk.manager.dubbo.IDubboManager;
import wx.milk.manager.dubbo.ITestDubboManager;
import wx.milk.manager.dubbo.IUserDubboManager;
import wx.query.Query;
import wx.security.User;

@Service
public class DubboManagerImpl implements IDubboManager {

    @Autowired
    private ITestDubboManager testDubboManager;
    @Autowired
    private IUserDubboManager userDubboManager;

    @Override
    public String getStr(String val) {
        return testDubboManager.getStr(val);
    }

    @Override
    public User findByParam(Query query) {
        return userDubboManager.findByParam(query);
    }
}
