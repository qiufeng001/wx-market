package wx.milk.web.controller.admin;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import wx.milk.web.utils.UserUtils;
import wx.security.User;

import javax.servlet.http.HttpServletRequest;

@Controller
public class TestSoaController {

    @RequestMapping("/test_soa")
    @ResponseBody
    public User test(HttpServletRequest request) {
        return UserUtils.getUser(request);
    }


    @RequestMapping("/test_nginx")
    @ResponseBody
    public String testNginx(HttpServletRequest request) {
        return "111111";
    }
}
