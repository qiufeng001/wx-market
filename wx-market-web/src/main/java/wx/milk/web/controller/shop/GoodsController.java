package wx.milk.web.controller.shop;

import com.framework.manager.IManager;
import com.framework.web.controller.BaseController;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import wx.milk.model.shop.Goods;

/**
 * 商品处理相关
 * @author zhong.h
 */
@Controller
@RequestMapping(value = "/goods/*")
public class GoodsController extends BaseController<Goods, String> {

    @Override
    protected IManager<Goods, String> getManager() {
        return null;
    }

    @Override
    protected String getTemplateFolder() {
        return null;
    }


}
