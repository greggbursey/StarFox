using InterviewExercise.Data;
using InterviewExercise.Methods;
using System;

namespace InterviewExercise
{
    class Program
    {
        static void Main(string[] args)
        {
            WorkWithWKT();
        }

        private static void WorkWithWKT()
        {
            string directory = Directory.directory;
            // clear file
            var fm = new FileManipulation();
            fm.ClearFile(directory);
            // write initial line
            fm.WriteToFile(directory, WKT.wkt1);
            // thing to add
            var newPolygon = @"(0,0) (0,1) (1,1) (1,0) (0,0)";
            // add new line
            fm.WriteToFile(directory, newPolygon);
            // read the file
            string[] updatedLines = fm.ReadFile(directory);
            // write every line
            foreach (var line in updatedLines)
                Console.WriteLine(line);
        }
    }
}
