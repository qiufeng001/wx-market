package wx.milk.web.controller.admin;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import wx.base.controller.BaseController;
import wx.base.manager.IManager;
import wx.milk.manager.admin.IDictionsManager;
import wx.milk.model.Dictions;

import java.util.ArrayList;

/**
 *
 *
 * @author Kevin
 *         <p>
 *         try it,do it best!
 */
@SuppressWarnings("ALL")
@Controller
@RequestMapping("/dictions/*")
public class DictionsController extends BaseController<Dictions, String> {

    @Autowired
    private IDictionsManager manager;

    @Override
    protected IManager<Dictions, String> getManager() {
        return manager;
    }

    @Override
    protected String getTemplateFolder() {
        return "/admin/dictions/index";
    }

    private void t() {
        ArrayList<String> list = new ArrayList<String>();
        list.add("1");
    }
}
