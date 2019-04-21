import java.util.Scanner;
import java.util.Arrays;
import java.util.Comparator;

class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int size = scanner.nextInt();
        String[] names = new String[size];
        String thrash = scanner.nextLine();
        for (int i = 0; i <= size; i++) {
            if (i == size) {
                Arrays.sort(names, Comparator.comparing(name -> name.substring(0, 2)));
                for (String name : names) System.out.println(name);
                System.out.println();
                size = Integer.parseInt(scanner.nextLine());
                names = new String[size];
                i = 0;
            }
            if (scanner.hasNextLine()) names[i] = scanner.nextLine();
        } 
    }
}
