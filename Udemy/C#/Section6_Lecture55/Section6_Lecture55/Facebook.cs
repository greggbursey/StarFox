using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Section6_Lecture55
{
    public class Facebook
    {
        /*
         * Write a program and continuously ask the user to enter different names, until the user presses Enter (without supplying a name). Depending on the number of names provided, display a message based on the above pattern.
         */
         public static void NameLiker()
        {
            List<string> friends = new List<string>();

            while (true)
            {
                Console.WriteLine("Enter a name.");
                string input = Console.ReadLine();

                if (string.IsNullOrWhiteSpace(input))
                {
                    break;
                }

                friends.Add(input);
            }

            if (friends.Count == 1)
            {
                Console.WriteLine(friends.First() + " likes your post.");

            } else if (friends.Count == 2)
            {
                Console.WriteLine(friends.First() + " and " + friends.Last() + " likes your post.");
            } else
            {
                Console.WriteLine(friends.First() + " and " + friends.Last() + " and others like your post.");
            }

            Console.ReadLine();
        }
    }
}
