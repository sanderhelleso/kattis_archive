import java.io.*;
import java.util.*;

public class Akcija {
    
    public static void main(String[] args) throws Exception {
        
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        
        int nums = Integer.parseInt(br.readLine());
        int arr[] = new int[nums];
        
        for(int i = 0; i < nums; i++) arr[i] = Integer.parseInt(br.readLine());   
        Arrays.sort(arr); 
        
        int totalPrice = 0;
        for (int i = nums - 1; i > nums % 3; i -= 3){
            totalPrice += arr[i];
            totalPrice += arr[i - 1];
        }
        
        for(int i = 0; i < nums % 3; i++) totalPrice += arr[i];
        
        System.out.println(totalPrice);
    }
}