import java.util.Scanner;
public class OddEvenChecker {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        while (true) {
            System.out.println("Enter Number: ");
            int i = sc.nextInt();
            if (i % 2 == 0) {
                System.out.println("Your number is Even");
            } else {
                System.out.println("Your number is Odd");
            }
        }
    }
}
