
import java.util.Scanner;
public class minutescalculator {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        long minutes,totaldays,years,days;
        System.out.print("Enter minutes: ");
        minutes = scanner.nextLong();

        totaldays = minutes/1440;
        years = totaldays/365;
        days = totaldays%365;
        System.out.println("Result: "+years+" years "+days+" days");
    }
}


