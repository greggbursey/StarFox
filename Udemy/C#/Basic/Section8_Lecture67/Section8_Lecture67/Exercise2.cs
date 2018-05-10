using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Section8_Lecture67
{
    public static class Exercise2
    {
        public static void CheckDuplicatesInInput()
        {
            Console.WriteLine("Enter some numbers separated by a hyphen");

            var input = Console.ReadLine();

            if (string.IsNullOrWhiteSpace(input))
            {
                return;
            }
            else
            {
                var numInput = input.Split('-');

                List<int> nums = new List<int>();

                foreach (var num in numInput)
                {
                    int outputtedNum;
                    int.TryParse(num, out outputtedNum);

                    nums.Add(outputtedNum);
                }

                List<int> dupeNums = nums.Distinct().ToList();

                if (nums.Count > dupeNums.Count)
                {
                    Console.WriteLine("Duplicates exist");
                }
            }

            Console.ReadLine();
        }
    }
}
