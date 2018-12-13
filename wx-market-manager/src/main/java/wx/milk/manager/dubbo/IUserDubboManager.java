package wx.milk.manager.dubbo;

import com.alibaba.dubbo.config.annotation.Service;
import org.springframework.beans.factory.annotation.Autowired;
import wx.milk.api.server.IUserDubboProvider;
import wx.query.Query;
import wx.security.User;

@Service
public interface IUserDubboManager{

    public User findByParam(Query query);
}
