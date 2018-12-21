package wx.milk.model.shop;

import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.framework.core.security.BasicEntity;
import com.framework.core.util.bigdecimal.JsonBigDecimalSerializer$2;

import java.math.BigDecimal;

public class OrderPay extends BasicEntity {

    /* 支付金额 */
    @JsonSerialize(using = JsonBigDecimalSerializer$2.class)
    private BigDecimal payment;

}
