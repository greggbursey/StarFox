using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Section8_Lecture67
{
    public class Exercise3
    {
        public static void CheckTimeValidation()
        {
            Console.WriteLine("Enter a time value in the 24-hour format (ex - 19:00)");

            var input = Console.ReadLine();

            if (string.IsNullOrWhiteSpace(input))
            {
                Console.WriteLine("Time is empty");
                Console.ReadLine();
                return;
            }
            else if (!input.Contains(':'))
            {
                Console.WriteLine("Invalid Time Format");
                Console.ReadLine();
                return;
            }
            else
            {
                var formattedInput = input.Split(':');
                var hour = Convert.ToInt32(formattedInput[0]);
                var minute = Convert.ToInt32(formattedInput[1]);

                if (hour > 23 && minute > 59 || hour < 0 || minute < 0)
                {
                    Console.WriteLine("Invalid Time");
                    Console.ReadLine();
                }
                else
                {
                    Console.WriteLine("Valid Time: {0}", hour + ":" + minute);
                    Console.ReadLine();
                }
            }
        }
    }
}
