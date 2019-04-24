import java.util.*;
import java.lang.*;
import java.io.*;

public class Solution {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        
        while(sc.hasNextLine()) {
            Boolean has = sc.nextLine().toLowerCase().contains("problem");
            System.out.println(has ? "yes" : "no");
        }  
    }
}
