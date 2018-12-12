package wx.milk.web.utils;

import wx.milk.web.base.redis.WxJedisCommands;
import wx.milk.web.base.redis.WxRedisClient;
import wx.security.User;
import wx.util.JsonUtils;

import javax.servlet.http.HttpServletRequest;

public class UserUtils {

    /**
     * redis中获取登录用户
     * @param request
     * @return
     */
    public static User getUser(HttpServletRequest request) {
        WxJedisCommands commonJedis = WxRedisClient.getCommonJedis();
        User user = JsonUtils.fromJson(commonJedis.get(CookieUtils.getLoginCookie(request)), User.class);
        return user;
    }
}
