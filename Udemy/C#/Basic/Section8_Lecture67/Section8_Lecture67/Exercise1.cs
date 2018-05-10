using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Section8_Lecture67
{
    public class Exercise1
    {
        public static void AreNumbersConsecutive()
        {
            Console.WriteLine("Enter some numbers separated by a hyphen.");

            var input = Console.ReadLine();
            var charArrInput = input.Split('-');
            List<int> numList = new List<int>();

            foreach (var num in charArrInput)
            {
                int outputtedInt;
                int.TryParse(num, out outputtedInt);

                numList.Add(outputtedInt);
            }

            if (NumsAreConsecutive(numList))
            {
                Console.WriteLine("Consecutive");
            }
            else
            {
                Console.WriteLine("Not Consecutive");
            }
            Console.ReadLine();
        }

        private static bool NumsAreConsecutive(List<int> nums)
        {
            for (var i = 1; i < nums.Count; i++)
            {
                if (nums[i] != nums[i - 1] + 1)
                {
                    return false;
                }
            }
            return true;
        }

        //private static bool NumsAscendInValue(List<int> nums)
        //{
        //    int num = int.MinValue;

        //    for (var i = 0; i < nums.Count; i++)
        //    {
        //        if (nums[i] > num)
        //        {
        //            num = nums[i];
        //            continue;
        //        }
        //        return false;
        //    }
        //    return true;
        //}
    }
}
