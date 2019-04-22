
import java.util.ArrayList;
import java.util.HashMap;
import java.util.Scanner;

public class Solution {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        
        ArrayList <String[]> inputLines = new ArrayList <String[]>();
        while (sc.hasNextLine()){
            String line = sc.nextLine();
            if (!line.equals("end")) inputLines.add(line.split(""));
            else break;
        }
        
        sc.close();
        
        HashMap<String, String> ascii = new HashMap<String ,String>();
        ascii.put("0", "+---+\n|   |\n|   |\n+   +\n|   |\n|   |\n+---+");
        ascii.put("1", "    +\n    |\n    |\n    +\n    |\n    |\n    +");
        ascii.put("2", "+---+\n    |\n    |\n+---+\n|    \n|    \n+---+");
        ascii.put("3", "+---+\n    |\n    |\n+---+\n    |\n    |\n+---+");
        ascii.put("4", "+   +\n|   |\n|   |\n+---+\n    |\n    |\n    +");
        ascii.put("5", "+---+\n|    \n|    \n+---+\n    |\n    |\n+---+");
        ascii.put("6", "+---+\n|    \n|    \n+---+\n|   |\n|   |\n+---+");
        ascii.put("7", "+---+\n    |\n    |\n    +\n    |\n    |\n    +");
        ascii.put("8", "+---+\n|   |\n|   |\n+---+\n|   |\n|   |\n+---+");
        ascii.put("9", "+---+\n|   |\n|   |\n+---+\n    |\n    |\n+---+");
        ascii.put(":", " \n \no\n \no\n \n ");
        
        for(String[] s : inputLines) {
            StringBuilder output = null;
            for(int i = 0; i < s.length; i++){
                if (i == 0) output = new StringBuilder(ascii.get(s[i]));
                else {
                    String[] outtmp = output.toString().split("\n");
                    String[] newtmp = ascii.get(s[i]).split("\n");

                    output = new StringBuilder();
                    for (int j = 0; j < 7; j++){
                        output.append(outtmp[j]);
                        output.append("  ");
                        output.append(newtmp[j] + "\n");
                    }
                }
                
                if (i == s.length -1) System.out.println(output + "\n");
            }
        }
        
        System.out.println("end");
    }
}
