package wx.milk.manager.dubbo.impl;

import com.alibaba.dubbo.config.annotation.Reference;
import org.springframework.stereotype.Service;
import wx.milk.api.server.IUserDubboProvider;
import wx.milk.manager.dubbo.IUserDubboManager;
import wx.query.Query;
import wx.security.IUser;
import wx.security.User;

@Service
public class UserDubboManagerImpl implements IUserDubboManager {

    @Reference
    private IUserDubboProvider provider;

    @Override
    public User findByParam(Query query) {
        return provider.findByParam(query);
    }
}
