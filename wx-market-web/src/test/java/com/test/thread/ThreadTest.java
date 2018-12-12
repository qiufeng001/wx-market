package com.test.thread;

import redis.clients.jedis.JedisCommands;
import wx.milk.web.base.redis.WxJedisCommands;
import wx.milk.web.base.redis.WxRedisClient;

/**
 * auther: kiven on 2018/8/15/015 23:10
 * try it bast!
 */
public class ThreadTest {
    public static void main(String[] args) {
        WxJedisCommands commonJedis = WxRedisClient.getCommonJedis();
        commonJedis.set("projectId", "123");
        ProduceAndConsume p = new ProduceAndConsume();
        Thread t = new Thread(p);
        t.start();
        System.out.println("单线程！");
    }
}
