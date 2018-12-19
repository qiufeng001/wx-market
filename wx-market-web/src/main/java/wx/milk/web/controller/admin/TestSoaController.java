package wx.milk.web.controller.admin;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import wx.base.controller.BaseController;
import wx.base.manager.IManager;
import wx.base.service.IService;
import wx.milk.manager.impl.BaseManager;
import wx.milk.model.Dictions;
import wx.milk.web.utils.UserUtils;
import wx.security.User;

import javax.servlet.http.HttpServletRequest;

@Controller
@RequestMapping(value = "/soa/*")
public class TestSoaController extends BaseController<Dictions, String > {

    @Override
    protected IManager<Dictions, String> getManager() {
        return null;
    }

    @Override
    protected String getTemplateFolder() {
        return "/file";
    }

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
