
import java.util.*;

public class oct13 {

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        while (true){
        int month, year;
        System.out.println("Enter Month");
        month = sc.nextInt();
        System.out.println("Enter Year");
        year = sc.nextInt();

        switch (month){
            case 1,2,3,4,5,6,7,8,9,10,11,12 ->
                System.out.println("This month is valid");
            default ->
                System.out.println("This month is invalid");
            }
            if (year % 4 == 0 ){
                System.out.println("This year is a leap year");
            }
            if (year >=1 ){
                System.out.println("This year is valid");
            }
            if (year <=0 ){
                System.out.println("This year is invalid");
                System.out.println(" ");
                System.out.println(" ");
                System.out.println(" ");
                
            }
        }
    }
}
