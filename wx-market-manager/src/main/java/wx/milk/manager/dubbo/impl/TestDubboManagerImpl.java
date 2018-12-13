package wx.milk.manager.dubbo.impl;

import com.alibaba.dubbo.config.annotation.Reference;
import org.springframework.stereotype.Service;
import wx.milk.api.server.IAdministratorDubboProvider;
import wx.milk.manager.dubbo.ITestDubboManager;

@Service
public class TestDubboManagerImpl implements ITestDubboManager {

    @Reference
    private IAdministratorDubboProvider administratorDubboProvider;

    @Override
    public String getStr(String val) {
        return administratorDubboProvider.getStr(val);
    }
}
