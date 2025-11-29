
import java.util.*;

public class calculator {

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        double a, b;
        String o;
        char c;
        boolean t = true;
        System.out.println("Welcome to Alphine's Calculator");
        while (t) {
            System.out.print("Enter 1st Number: ");
            a = sc.nextDouble();
            System.out.print("Enter 2nd Number: ");
            b = sc.nextDouble();
            System.out.print("Enter Opertor (+,-,*,/): ");
            o = sc.next();
            System.out.print("Result: ");
            switch (o) {
                case "+":
                    System.out.print(a + " + " + b + " = ");
                    System.out.println(a + b);
                    break;
                case "-":
                    System.out.print(a + " - " + b + " = ");
                    System.out.println(a - b);
                    break;
                case "*":
                    System.out.print(a + " * " + b + " = ");
                    System.out.println(a * b);
                    break;
                case "/":
                    if (b == 0) {
                        System.out.println("Undefined");
                        break;
                    }
                    System.out.print(a + " / " + b + " = ");
                    System.out.println(a / b);
                    break;
                default:
                    System.out.println("Invalid");
                    break;
            }
            System.out.print("Do you want to restart?(y/n): ");
            c = sc.next().charAt(0);
            if (c == 'n') {
                t = false;
            }

        }
    }

}
