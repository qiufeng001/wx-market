package wx.milk.web.netty.echo;

import io.netty.channel.ChannelInboundHandlerAdapter;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import wx.milk.web.netty.server.MarketNettyServer;

public class MarketEchoClientHandler extends ChannelInboundHandlerAdapter {
    private final static Logger log = LoggerFactory.getLogger(MarketNettyServer.class);

}
