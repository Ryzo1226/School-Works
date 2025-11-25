
import java.util.*;

public class ATM {

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        int b = 1000;
        int a, c;
        boolean t = true;
        System.out.println("Welcome To ATM");
        System.out.println("Option 1: Check balance");
        System.out.println("Option 2: Widraw balance");
        System.out.println("Option 3: Deposit balance");
        System.out.println("Option 4: Exit");
        System.out.print("Choose Option: ");
        a = sc.nextInt();
       while (t) {
            switch (a) {
                case 1:
                    System.out.println("Current Ballance: " + b + "$");
                    break;
                case 2:
                    System.out.print("Widraw: ");
                    c = sc.nextInt();
                    if (c >= 0) {
                        b = b - c;
                        System.out.println("Current Ballance: " + b + "$");
                        System.out.print("Choose Option: ");
                        a = sc.nextInt();
                        break;
                    } else {
                        System.out.println("Invalid");
                    }
                case 3:
                    System.out.print("Widraw: ");
                    c = sc.nextInt();
                    if (c >= 0) {
                        b = b + c;
                        System.out.println("Current Ballance: " + b + "$");
                        System.out.print("Choose Option: ");
                        a = sc.nextInt();
                        break;
                    } else {
                        System.out.println("Invalid");
                    }
                case 4:
                    t = false;

            }
        }
    }
}
