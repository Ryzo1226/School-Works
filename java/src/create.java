
import java.util.*;

public class create {

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        while (true) {
            int a;
            System.out.print("Enter Number: ");
            a = sc.nextInt();

            if (a >= 1) {
                if (a <= 10) {
                    System.out.print("num is in 1 and 10 ");
                } else {
                    System.out.print("num is not in 1 and 10 ");
                }
            }
            if (a % 2 == 0) {
                System.out.println("and Even");
            } else {
                System.out.println("and Odd");
            }
        }
    }
}
