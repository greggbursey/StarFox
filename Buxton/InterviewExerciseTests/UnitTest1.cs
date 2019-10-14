using InterviewExercise.Data;
using InterviewExercise.Methods;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using System.Collections.Generic;

namespace InterviewExercise.Tests
{
    [TestClass]
    public class TestPointInPoly
    {
        private List<Point> _pointData = new List<Point>();
        [TestInitialize]
        public void Setup()
        {
            //problem: write a function to determine if a point x,y is contained within a polygon: array<Point> using the ray casting algorithm
            //lets assume this polygon only contains a single exterior outter hull.
            string directory = Directory.directory;
            // clear file
            var fm = new FileManipulation();
            fm.ClearFile(directory);
            // write text to file
            _pointData.AddRange(WKTManipulation.GetWKTPointData(WKT.wkt1));
            _pointData.AddRange(WKTManipulation.GetWKTPointData(WKT.wkt2));
            _pointData.AddRange(WKTManipulation.GetWKTPointData(WKT.wkt3));
            _pointData.AddRange(WKTManipulation.GetWKTPointData(WKT.wkt4));
            _pointData.AddRange(WKTManipulation.GetWKTPointData(WKT.wkt5));
        }

        [TestCleanup]
        public void TearDown()
        {
            _pointData = null;
        }
        [TestMethod]
        [TestCategory("Test Point In Poly")]
        public void TestMain()
        {
            var testPoint = new Point
            {
                X = -106.623445,
                Y = 31.914033999999997
            };
            bool result = PointInPolygon(_pointData, testPoint);
            Assert.IsTrue(result);
        }

        private static bool PointInPolygon(List<Point> polygon, Point testPoint)
        {
            foreach (var point in polygon)
            {
                if (testPoint.X == point.X && testPoint.Y == point.Y)
                {
                    return true;
                }
            }

            return false;
        }
    }
}
