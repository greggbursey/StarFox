using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Section6_Lecture55
{
    public class Name
    {
        public static void Reverse()
        {
            Console.Write("What's your name? ");
            var name = Console.ReadLine();
            var reversedName = ReverseString(name);
            Console.WriteLine("Reversed name: " + reversed);
        }

        public static string ReverseString(string input)
        {
            var array = new char[name.Length];

            for (var i = name.Length; i > 0; i--)
                array[name.Length - i] = name[i - 1];

            return new string(array);
        }
    }
}
