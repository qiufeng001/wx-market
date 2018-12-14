package wx.milk.manager.dubbo.impl;

import com.alibaba.dubbo.config.annotation.Reference;
import org.springframework.stereotype.Service;
import wx.milk.api.server.ITestDubboProvider;

@Service
public class TestDubboManagerImpl implements ITestDubboProvider {

    @Reference
    private ITestDubboProvider testDubboProvider;

    @Override
    public String getStr(String val) {
        return testDubboProvider.getStr(val);
    }
}
