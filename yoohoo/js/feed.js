
if (getProgressValue() == "welcome")
{
	revealTooltip("introductiontooltip");
}

// Popup Page:
var pagePoppedUp = false;
var interestData = Cookies.get("interests");
function popupButton() {
	// Display a popup page if it hasn't been displayed yet
	if(pagePoppedUp === false) {
		// If the interest is cooking...
		if (interestData.charAt(0) == "1") {
		  	window.open("https://www.starfrit.com/fr/starfrit-melangeur-personnel-electrique-0243030040000");
		 }
		// If the interest is art...
		else if (interestData.charAt(1) == "1") {
		  	window.open("https://www.deserres.ca/en/art-graphic/paintbrushes");
		}
		// If the interest is technology...
		else if (interestData.charAt(2) == "1") {
		  	window.open("https://www.tesla.com");
		}
		// If the interest is travel...
		else if (interestData.charAt(3) == "1") {
		  	window.open("https://www.booking.com/index.fr.html?label=gen173nr-1BCAEoggI46AdIM1gEaCeIAQGYAQ24AQfIAQ3YAQHoAQGIAgGoAgO4Ap3stu8FwAIB;sid=df0176d592266b017eee80a212030aed;keep_landing=1&sb_price_type=total&");
		}
		// If the interest is news...
		else if (interestData.charAt(4) == "1") {
		  	window.open("http://www.theonion.com");
		}
		pagePoppedUp = true;
	}
	// If a page already popped up, give the button its regular function
	else if(pagePoppedUp === true){
		progressAndCloseTooltip('introductiontooltip3', 'goingtoprofile');
		window.location.href = 'yourprofile.html';
	}
}
