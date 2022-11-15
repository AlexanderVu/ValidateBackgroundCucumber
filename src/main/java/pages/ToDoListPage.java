package pages;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.Color;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;

public class ToDoListPage {
	WebDriver driver;

	public ToDoListPage(WebDriver driver) {
		this.driver = driver;
	}

	// Element Library
	@FindBy(how = How.XPATH, using = "//button[@type = 'button' and contains(text(), 'Set SkyBlue Background')]")
	WebElement setSkyBlueButton;
	@FindBy(how = How.XPATH, using = "//button[@type = 'button' and contains(text(), 'Set White Background')]")
	WebElement setWhiteButton;
	@FindBy(how = How.XPATH, using = "//body")
	WebElement backGroundColorElement;

	// Corresponding Methods
	public void navigatetoURL() {
		driver.get("https://techfios.com/test/101/index.php");

	}

	public boolean skybluebutton_exist() {
		System.out.println("Does Set Sky Blue Button Exist?");
		return setSkyBlueButton.isDisplayed();
	}

	public boolean whitebutton_exist() {
		System.out.println("Does Set White Button Exist?");
		return setWhiteButton.isDisplayed();

	}

	public void clickwhitebutton() {
		setWhiteButton.click();
	}

	public void clickskybluebutton() {
		setSkyBlueButton.click();
	}

	public void backGroundColor() {
		String skyblueAsHex = "#87ceeb";
		String whiteAsHex = "#ffffff";
		String colorname = backGroundColorElement.getCssValue("background-color");
		String bgColorActual = Color.fromString(colorname).asHex();
		if (skyblueAsHex.equals(bgColorActual)) {
			System.out.println("Background color is Matching");
		} else if (whiteAsHex.equals(bgColorActual)) {
			System.out.println("Background color is Matching");

		} else {
			System.out.println("Colors are not Matching");
		}
	}

	public void teardown() {
		driver.close();
		driver.quit();
	}

}
