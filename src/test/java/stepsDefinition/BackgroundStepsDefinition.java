package stepsDefinition;

import org.openqa.selenium.support.PageFactory;

import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import pages.TestBase;
import pages.ToDoListPage;

public class BackgroundStepsDefinition extends TestBase {

	ToDoListPage todolistpage;

	@Before
	public void setUp() {
		initDriver();
		todolistpage = PageFactory.initElements(driver, ToDoListPage.class);
	}

	@Given("^\"([^\"]*)\" button exist$")
	public void button_exist(String color) {
		todolistpage.navigatetoURL();
		switch (color) {
		case "skyblue":
			System.out.println(todolistpage.skybluebutton_exist());
			break;
		case "white":
			System.out.println(todolistpage.whitebutton_exist());
			break;
		}

	}

	@When("^I click on the \"([^\"]*)\"$")
	public void i_click_on_the_button(String button) {
		switch (button) {
		case "skyblue":
			todolistpage.clickskybluebutton();
			break;
		case "white":
			todolistpage.clickwhitebutton();
			break;
		}
	}

	@Then("^the background color will change to \"([^\"]*)\"$")

	public void the_background_color_will_change_to_sky_blue(String bgColor) {
		switch (bgColor) {
		case "skyblue":
			todolistpage.backGroundColor();
			break;
		case "white": {
			todolistpage.backGroundColor();
			break;
		}
		}

	}
	@After
	public void teardown() {
		todolistpage.teardown();
	}
}
