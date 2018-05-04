using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Section9_Lecture75
{
    public class TextFile
    {
        public static void NumberOfWordsFromFile(string path)
        {
            try
            {
                var allText = File.ReadAllText(path);
                string[] words = allText.Split(' ');

                Console.WriteLine("Number of words in this file: " + words.Length);
            }
            catch (Exception e)
            {
                Console.WriteLine(e);
            }
            Console.ReadLine();
        }

        public static void LongestWordInFile(string path)
        {
            try
            {
                var allText = File.ReadAllText(path);
                string[] words = allText.Split(' ');
                int longestWordCount = 0;
                string longestWord = "";

                foreach (var word in words)
                {
                    if (word.Length > longestWordCount)
                    {
                        longestWordCount = word.Length;
                        longestWord = word.Replace(",", "");
                    }
                }

                Console.WriteLine("The longest word in this file is {0}, and it has {1} letters", longestWord, longestWordCount);
            }
            catch (Exception e)
            {
                Console.WriteLine(e);
            }

            Console.ReadLine();
        }

        public static void DeleteFile(string path)
        {
            try
            {
                File.Delete(path);
            }
            catch (Exception e)
            {
                Console.WriteLine(e);
            }

            Console.WriteLine("File deleted (it was here): {0}", path);
            Console.ReadLine();
        }
    }
}
