
import java.util.*;

public class oct16 {

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n1, n2, n3, n4;
        System.out.println("Enter num 1");
        n1 = sc.nextInt();
        System.out.println("Enter num 2");
        n2 = sc.nextInt();
        System.out.println("Enter num 3");
        n3 = sc.nextInt();
        System.out.println("Enter num 4");
        n4 = sc.nextInt();

        if (n1 >= n2) {
            if (n1 >= n3) {
                if (n1 >= n4) {
                    System.out.println("Highest is " + n1);
                } else {
                    if (n4 >= n2) {
                        if (n4 >= n3) {
                            System.out.println("Highest is " + n4);
                        }
                    } else {
                        if (n2 >= n3) {
                            System.out.println("HIghest is " + n2);
                        }
                    }
                }
            } else {
                if (n3 >= n2) {
                    if (n3 >= n4) {
                        System.out.println("Highest is " + n3);
                    } else {
                        System.out.println("Highest is " + n4);
                    }
                } else {
                    if (n2 >= n4) {
                        System.out.println("Highest is " + n2);
                    }
                }
            }
        } else {
            if (n2 >= n3) {
                if (n2 >= n4) {
                    System.out.println("Highest is " + n2);
                } else {
                    System.out.println("Highest is " + n4);
                }
            } else {
                if (n3 >= n4) {
                    System.out.println("Highest is " + n3);
                } else {
                    System.out.println("Highest is " + n4);
                }
            }
        }
    }
}
