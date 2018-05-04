using System.Diagnostics;
using Microsoft.VisualStudio.TestTools.UnitTesting;

namespace UnitTest_PRACTICE
{
    [TestClass]
    public class UnitTest1
    {
        [TestMethod]
        public void LoopsQuiz1()
        {
        }
        [TestMethod]
        public void LoopsQuiz2()
        {
            int x = 0;
            while (x < 10)
            {
                Trace.WriteLine(x);
                x++;
            }
        }
    }
}
