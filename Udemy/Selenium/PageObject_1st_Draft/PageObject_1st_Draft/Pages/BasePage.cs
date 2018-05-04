using OpenQA.Selenium;

namespace PageObject_1st_Draft.Pages
{
    public class BasePage
    {
        public BasePage(IWebDriver driver)
        {
            Driver = driver;
        }
        public IWebDriver Driver { get; set; }
    }
}
