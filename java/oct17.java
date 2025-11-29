
import java.util.*;

public class oct17 {

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int j;
        System.out.println("Enter final grade in Java: ");
        j = sc.nextInt();
        System.out.print("DESCRIPTOR: ");

        if (j <= 100) {
            System.out.println("OUTSTANDING");
            if (j <= 59) {
                System.out.println("INVALID GRADE");
            } else {
                if (j <= 74) {
                    System.out.println("FAILED");
                } else {
                    if (j <= 79) {
                        System.out.println("FAIRLY SATISFACTORY");
                    } else {
                        if (j <= 84) {
                            System.out.println("SATISFACTORY");
                        } else {
                            if (j <= 89) {
                                System.out.println("VERY SATISFACTORY");
                            }
                        }
                    }
                }
            }
        } else {
            System.out.println("INVALID GRADE");
        }
    }
}
