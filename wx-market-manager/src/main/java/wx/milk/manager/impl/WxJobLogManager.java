package wx.milk.manager.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import wx.base.service.IService;
import wx.milk.manager.IWxJobLogManager;
import wx.milk.model.WxJobLog;
import wx.milk.service.IWxJobLogService;


@Service
public class WxJobLogManager extends BaseManager<WxJobLog, String> implements IWxJobLogManager {

	@Autowired
	private IWxJobLogService service;

	@Override
	protected IService<WxJobLog, String> getService() {
		return service;
	}

}
