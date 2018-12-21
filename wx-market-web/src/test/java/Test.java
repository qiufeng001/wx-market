import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

/**
 * Created by Administrator on 2018/6/29/029.
 */
public class Test {


    public void testHeap(){
        for(;;){
            ArrayList list = new ArrayList (2000);
            //System.out.println("1");
        }
    }
    static int num=1;
    public void testStack(){
        num++;
        System.out.println(num);
        this.testStack();
    }

    public static void main(String[] args) {

        /*List<? extends Father> list = new LinkedList<Father>();*/
        //list.add(new Son());

        /*Test  t  = new Test ();
        t.testHeap();
        t.testStack();
        System.out.println("最后" + num);*/


        ///////////////
        String strs[] = {"1", "2"};
        String[] str = {"3", "4"};

        /*System.out.println("最后" + strs.toString());
        System.out.println("最后" + str.toString());*/
        List list = Arrays.asList(1, 7, 3, 2);
        Object arr = list.toArray();
        System.out.println(arr.toString());
        list.forEach ((i) -> System.out.println(i));
    }

}

class Person { }

class Father extends Person { }

class Son extends Father { }

class Faker extends Son { }

class ZhongH extends Son { }