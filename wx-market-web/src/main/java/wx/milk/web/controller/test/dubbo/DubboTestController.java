package wx.milk.web.controller.test.dubbo;

import com.framework.core.query.Query;
import com.framework.core.query.Statement;
import com.framework.core.security.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import wx.milk.manager.dubbo.IDubboManager;

@SuppressWarnings("ALL")
@Controller
public class DubboTestController {

    @Autowired
    private IDubboManager dubboManager;

    @RequestMapping("/test_dubbo")
    @ResponseBody
    public String testDubbo() {
        return dubboManager.getStr("test_dubbo");
    }

    @RequestMapping("/test_user")
    @ResponseBody
    public User testUser(Query query) {
        Statement statement = new Statement();
        statement.setName("account");
        statement.setValue("faker");
        query.and(statement);
        return dubboManager.findByParam(query);
    }
}
