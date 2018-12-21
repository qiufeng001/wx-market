package wx.milk.configuration;

import org.mybatis.spring.annotation.MapperScan;
import org.springframework.context.annotation.Configuration;
import wx.milk.domain.WxJobLogRepository;

@Configuration
@MapperScan(basePackageClasses = { WxJobLogRepository.class })
/*@ComponentScan(basePackages = {
			"warwolf.administrator.domain.service",
			"warwolf.administrator.domain.manager"			
			})*/
public class AdminDomainAutoConfig {
	public AdminDomainAutoConfig() {
		System.out.println("init domain...");
	}
}