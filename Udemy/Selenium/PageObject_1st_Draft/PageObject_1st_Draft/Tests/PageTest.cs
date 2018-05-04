using System.IO;
using System.Reflection;
using NUnit.Framework;
using OpenQA.Selenium;
using OpenQA.Selenium.Chrome;
using PageObject_1st_Draft.Pages;

namespace PageObject_1st_Draft.Tests
{
    [TestFixture]
    [Category("Where is this showing up")]
    public class PageTest
    {
        [SetUp]
        public IWebDriver GetDriver()
        {
            var outputDir = Path.GetDirectoryName(Assembly.GetExecutingAssembly().Location);
            return new ChromeDriver(outputDir);
        }

        [TearDown]

        [Test]
        // 1 - go to main qa site
        // 2 - search for complicated page
        // 3 - assert you're on the right page
        public void TestMethod1()
        {
            var x = new MainQaPage(GetDriver());
        }
    }
}
