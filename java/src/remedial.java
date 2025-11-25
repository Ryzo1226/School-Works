
import java.util.*;

public class remedial {
    
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n1;
        System.out.println("Enter number: ");
        n1 = sc.nextInt();
        if (n1 >= 1) {
            if (n1 <= 10) {
                if (n1 % 2 == 0) {
                    System.out.println("The number is between 1 and 10 and even");
                }else   {
                    System.out.println("The number is between 1 and 10 and odd");
                }
            }else {
                System.out.println("The number is not between 1 and 10 and odd");
            }
        }else   System.out.println("The number is between 1 and 10 and odd");
    }
}
