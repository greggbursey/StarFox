using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Section8_Lecture67
{
    public class Exercise4
    {
        public static void ConvertToPascalCase()
        {
            Console.WriteLine("Enter a few words (separated by a space)");

            var input = Console.ReadLine();

            if (string.IsNullOrWhiteSpace(input))
            {
                Console.WriteLine("Empty");
                return;
            }

            var words = input.Split(' ');
            var variableNm = "";

            foreach (var word in words)
            {
                var wordWithPC = word[0].ToString().ToUpper() + word.ToLower().Substring(1);
                variableNm += wordWithPC;
            }

            Console.WriteLine(variableNm);
            Console.ReadLine();
        }
    }
}
