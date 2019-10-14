using InterviewExercise.Data;
using System;
using System.IO;

namespace InterviewExercise.Methods
{
    public class FileManipulation
    {
        public void ClearFile(string directory)
        {
            File.WriteAllText(directory, string.Empty);
        }

        public void WriteToFile(string directory, string data)
        {
            var text = File.ReadAllText(directory);

            if (string.IsNullOrWhiteSpace(text))
                File.WriteAllText(directory, WKT.wkt1);
            else
            {
                File.AppendAllText(directory, Environment.NewLine);
                // add the text
                File.AppendAllText(directory, data);
            }
        }

        public string[] ReadFile(string directory)
        {
            return File.ReadAllLines(directory);
        }
    }
}
