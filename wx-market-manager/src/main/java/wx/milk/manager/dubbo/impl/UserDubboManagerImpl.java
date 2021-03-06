package wx.milk.manager.dubbo.impl;

import com.alibaba.dubbo.config.annotation.Reference;
import com.framework.core.query.Query;
import com.framework.core.security.User;
import org.springframework.stereotype.Service;
import wx.milk.api.server.IUserDubboProvider;

@Service
public class UserDubboManagerImpl implements IUserDubboProvider {

    @Reference
    private IUserDubboProvider provider;

    @Override
    public User findByParam(Query query) {
        return provider.findByParam(query);
    }
}
