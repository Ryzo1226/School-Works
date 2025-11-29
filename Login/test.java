import java.util.Scanner;
public class test {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        long minutes,totaldays,years,days;
        System.out.println("Enter Minutes: ");
        minutes = 2131313312; //sc.nextLong();

        final int hour = 60;
        final int day = 24;
        final int year = 365;


        totaldays = minutes /(hour * day);
        years = totaldays / year;
        days = totaldays % year;

        System.out.println("Result: "+years+" years "+days+" days");

        sc.close();
    }
}
