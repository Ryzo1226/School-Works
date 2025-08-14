import java.util.Scanner;
public class aug14 {

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        String fname, lname;
        double height,weight,BMI,square;
        String choice;

        do {
            System.out.println("Enter First name: ");
            fname = sc.nextLine();
            System.out.println("Enter Last name: ");
            lname = sc.nextLine();
            System.out.println("Enter Height(m): ");
            height = sc.nextDouble();
            System.out.println("Enter Weight(kg): ");
            weight = sc.nextDouble();
            System.out.println("Hello "+fname+" "+lname);
            square = height*height;
            BMI = weight/square;
            System.out.println("Your BMI is "+BMI);
            //sc.nextLine();
            System.out.println("Do you want to continue? (yes/no)");
            choice = sc.next();
        } while (choice.equalsIgnoreCase("yes"));

        System.out.println("Goodbye!");
        sc.close();
    }
}
