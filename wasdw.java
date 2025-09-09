public class wasdw {
    public static void main(String[] args) {
                int x = 2;
                int y = 3;
                StringBuilder output = new StringBuilder();
                output.append(x).append(" ");

                for (int i = 0; i < 5; i++) {
                    x += y + i; // Increment x by y (3) plus the current loop index (0,1,2,3,4)
                    output.append(x).append(" ");
                }

                System.out.println(output.toString().trim());
            }
        }