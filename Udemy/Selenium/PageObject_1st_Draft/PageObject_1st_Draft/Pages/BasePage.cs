using OpenQA.Selenium;

namespace PageObject_1st_Draft.Pages
{
    public class BasePage
    {
        protected IWebDriver Driver { get; set; }

        public BasePage(IWebDriver driver)
        {
            Driver = driver;
        }
    }
}
