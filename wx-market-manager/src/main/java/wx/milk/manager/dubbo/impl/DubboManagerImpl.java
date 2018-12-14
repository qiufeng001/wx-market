package wx.milk.manager.dubbo.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import wx.milk.api.server.ITestDubboProvider;
import wx.milk.api.server.IUserDubboProvider;
import wx.milk.manager.dubbo.IDubboManager;
import wx.query.Query;
import wx.security.User;

@Service
public class DubboManagerImpl implements IDubboManager {

    @Autowired
    private ITestDubboProvider testDubboProvider;
    @Autowired
    private IUserDubboProvider userDubboProvider;

    @Override
    public String getStr(String val) {
        return testDubboProvider.getStr(val);
    }

    @Override
    public User findByParam(Query query) {
        return userDubboProvider.findByParam(query);
    }
}
