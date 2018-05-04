using OpenQA.Selenium;

namespace PageObject_1st_Draft.Pages
{
    public class MainQaPage : BasePage
    {   
        public MainQaPage(IWebDriver driver) : base(driver)
        {
        }

        public void GoTo()
        {
            Driver.Navigate().GoToUrl("http://courses.ultimateqa.com");
        }

        public void ClickSignInLink()
        {

        }
    }
}