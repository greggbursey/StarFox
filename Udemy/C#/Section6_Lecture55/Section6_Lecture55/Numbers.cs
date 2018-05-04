using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Section6_Lecture55
{
    public class Numbers
    {
        public static void RunPreviouslyEnteredNumbers()
        {
            List<int> numsEntered = new List<int>();

            while (numsEntered.Count < 5)
            {
                Console.WriteLine("Enter 5 numbers");
                var input = Console.ReadLine();

                int numInput;
                int.TryParse(input, out numInput);

                if (numsEntered.Contains(numInput))//already entered
                {
                    Console.WriteLine("Error: number already entered, try again");
                    continue;
                }
                else
                {
                    numsEntered.Add(numInput);
                }

                numsEntered.Sort();

                foreach (var num in numsEntered)
                {
                    Console.WriteLine(num);
                }
            }
        }

        public static void UniqueNumbers()
        {
            List<int> numsEntered = new List<int>();

            while (true)
            {
                Console.WriteLine("Enter a number, or type 'Quit' to exit");

                var input = Console.ReadLine();

                if (input.ToLower().Trim() == "quit")
                {
                    break;
                }
                else
                {
                    int numInput;
                    int.TryParse(input, out numInput);

                    numsEntered.Add(numInput);

                    numsEntered = numsEntered.Distinct().ToList();

                    foreach (var num in numsEntered)
                    {
                        Console.WriteLine(num);
                    }
                }
            }
        }

        public static void CommaSeparatedNums()
        {
            Console.WriteLine("Enter a list of comma separated numbers");
            var input = Console.ReadLine();
            var strNums = input.Split(',');
            List<int> nums = new List<int>();

            foreach (var num in strNums)
            {
                int numInput;
                int.TryParse(num, out numInput);

                nums.Add(numInput);
            }

            if (nums == null || nums.Count < 5)
            {
                Console.WriteLine("Invalid List, please retry.");
            }
            else
            {
                nums.Sort();
                for (var i = 0; i < nums.Count; i++)
                {
                    if (i > 2)
                    {
                        break;
                    }

                    Console.WriteLine(nums[i]);
                }
            }
            
            Console.ReadLine();
        }
    }
}
