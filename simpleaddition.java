import java.util.*;
import java.lang.*;
import java.io.*;
import java.math.*;

public class Solution {
    public static void main(String[] args) {
        
        Scanner sc = new Scanner(System.in);
        String x = sc.next();
        String y = sc.next();
        
        // well this was fun, thanks java
        BigInteger a = new BigInteger(x);
        BigInteger b = new BigInteger(y);
        
        System.out.println(b.add(a).toString());
        
    }
}
