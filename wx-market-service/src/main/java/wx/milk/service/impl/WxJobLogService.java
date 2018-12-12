package wx.milk.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import wx.base.domain.IRepository;
import wx.base.service.IService;
import wx.base.service.impl.BaseService;
import wx.milk.domain.WxJobLogRepository;
import wx.milk.model.WxJobLog;
import wx.milk.service.IWxJobLogService;

@Service
public class WxJobLogService extends BaseService<WxJobLog, String> implements IWxJobLogService {

	@Autowired
	private WxJobLogRepository repository;

	@Override
	protected IRepository getRepository() {
		return repository;
	}

}
