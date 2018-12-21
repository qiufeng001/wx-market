package wx.milk.manager.dubbo;

import com.framework.core.query.Query;
import com.framework.core.security.User;

public interface IDubboManager {
    String getStr(String val);
    User findByParam(Query query);
}
