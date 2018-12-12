package com.test.jdk8newcharacter;

import org.apache.commons.collections.ArrayStack;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

public class LambdaTest {

    public static void test1() {
        String[] strs = {"1", "2", "3", "4", "5", "6", "7", "8", "9", "6"};

        List<String> list = Arrays.asList(strs);

        for (String str : list) {
            System.out.print("value: " + str + ";");
        }
        System.out.println();
        list.forEach((string) -> System.out.print("lambda_value: " + string + ";"));

    }

    public static void main(String[] args) {
        test1();
    }
}
