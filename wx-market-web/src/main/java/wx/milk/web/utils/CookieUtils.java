package wx.milk.web.utils;

import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;

/**
 * 对Cookie进行操作
 * Created by Administrator on 2018/6/14/014.
 */
public class CookieUtils {

    /**
     * 获取cookie中的sessionId
     * @param request request请求域名
     * @return sessionId
     */
    public static String getValue(HttpServletRequest request) {
        Cookie[] cookies = request.getCookies();
        String sessionId = "";
        for(Cookie cookie : cookies){
            if(cookie.getName().equals("JSESSIONID")){
                sessionId = cookie.getValue();
            }
        }
        return sessionId;
    }

    public static String getLoginCookie(HttpServletRequest request) {
        Cookie[] cookies = request.getCookies();
        String token = "";
        for(Cookie cookie : cookies){
            if(cookie.getName().equals("wx_redis_cookie")){
                token = cookie.getValue();
            }
        }
        return token;
    }
}
