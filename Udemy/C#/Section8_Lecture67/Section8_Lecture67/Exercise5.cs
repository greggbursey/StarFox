using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Section8_Lecture67
{
    public class Exercise5
    {
        public static void VowelCounter()
        {
            Console.WriteLine("Enter a word.");

            var input = Console.ReadLine();
            //var vowels = new List<char>(new char[] { 'a', 'e', 'i', 'o', 'u' });
            var vowels = new List<char>();
            vowels.Add('a');
            vowels.Add('e');
            vowels.Add('i');
            vowels.Add('o');
            vowels.Add('u');

            var vowelCount = 0;

            foreach (var character in input)
            {
                if (vowels.Contains(character))
                {
                    vowelCount++;
                }
            }

            Console.WriteLine("Number of vowels: {0}", vowelCount);
            Console.ReadLine();
        }
    }
}
