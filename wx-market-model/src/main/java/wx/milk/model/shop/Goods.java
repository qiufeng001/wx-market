package wx.milk.model.shop;

import com.framework.core.security.BasicEntity;

public class Goods extends BasicEntity {
    private String name;
    private GoodsType goodsType;
    private String number;

    public enum GoodsType {

        COMMODITY("日用品", "commodity"),
        COURSE("课程类", "course");

        private String description;

        private String text;

        private GoodsType(String description, String text) {
            this.text = text;
            this.description = description;
        }

        public String getText() {
            return text;
        }

        public String getDescription() {
            return description;
        }
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public GoodsType getGoodsType() {
        return goodsType;
    }

    public void setGoodsType(GoodsType goodsType) {
        this.goodsType = goodsType;
    }

    public String getNumber() {
        return number;
    }

    public void setNumber(String number) {
        this.number = number;
    }
}
