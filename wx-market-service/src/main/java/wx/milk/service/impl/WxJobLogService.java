package wx.milk.service.impl;

import com.framework.core.base.domain.IRepository;
import com.framework.service.impl.BaseService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
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
