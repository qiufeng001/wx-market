package wx.milk.web.base.elasticsearch;

import org.elasticsearch.client.transport.TransportClient;
import org.elasticsearch.common.settings.Settings;
import org.elasticsearch.common.transport.InetSocketTransportAddress;
import org.elasticsearch.transport.client.PreBuiltTransportClient;
import wx.util.PropertiesUtils;

import java.net.InetAddress;
import java.net.UnknownHostException;

public class ElasticSearchClient {

//    private final static String host = PropertiesUtils.getEnvProp().getProperty("elastic_search_ip");
//    private final static int port = Integer.valueOf(PropertiesUtils.getEnvProp().getProperty("elastic_search_port"));

    private final static String host = "192.168.182.131";
    private final static int port = 9200;


    private ElasticSearchClient() {
    }

    public static TransportClient getInstance() {
        return ElasticSearch.instance();
    }

    private static class ElasticSearch {

        private static TransportClient instance() {
            TransportClient instance = null;
            try {
                instance = new PreBuiltTransportClient(Settings.EMPTY)
                        .addTransportAddress(new InetSocketTransportAddress(InetAddress.getByName(host), port));
            } catch (UnknownHostException e) {
                e.printStackTrace();
            }
            return instance;
        }

    }
}
