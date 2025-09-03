import java.util.Scanner;

public class adw {
    public static void main(String[] args) {
    Scanner sc = new Scanner(System.in);
        int input,n1,n2,n3;
        System.out.println("Enter 3-Digit Even number: ");
        input = sc.nextInt();

        n1 = input/100%10;
        n2 = input/10%10;
        n3 = input%10;

        System.out.println(n1+" "+n2+" "+n3+" ");

    }
}