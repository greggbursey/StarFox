using InterviewExercise.Data;
using System.Collections.Generic;

namespace InterviewExercise.Methods
{
    public static class WKTManipulation
    {
        public static List<Point> GetWKTPointData(string wkt)
        {
            var characters = wkt;
            characters = characters.Replace("(", string.Empty);
            characters = characters.Replace(")", string.Empty);

            var split = characters.Split(",");
            var pointList = new List<Point>();

            foreach (var item in split)
            {
                var pointSplit = item.Split(" ");

                var x = 0.0;
                var y = 0.0;

                double.TryParse(pointSplit[0], out x);
                double.TryParse(pointSplit[1], out y);

                var point = new Point
                {
                    X = x,
                    Y = y
                };

                pointList.Add(point);
            }

            return pointList;
        }
    }
}
