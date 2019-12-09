if (getProgressValue() == "goingtogame")
{
	revealTooltip("gametooltip");
}


// first popup Page:
var interestData = Cookies.get("interests");
var firstPagePoppedUp = false;
function popupButton() {
	// Display a popup page if it hasn't been displayed yet
	if(firstPagePoppedUp === false) {
		// If the interest is travel...X
		if (interestData.charAt(3) == "1") {
		  	window.open("http://www.voyagesinternet.ca/en/");
		}
		// If the interest is news...X
		else if (interestData.charAt(4) == "1") {
		  	window.open("http://dailybuzzlive.com/");
		}
    // If the interest is cooking...X
    else if (interestData.charAt(0) == "1") {
        window.open("https://www.kitchenaid.ca/en_ca/countertop-appliances/food-processors/choppers/p.KFC3516IC.html?cmp=kad:shopping:google:ps:txt:txt:cpc:na&gclid=CjwKCAiA27LvBRB0EiwAPc8XWfSQWg5xQCetngQp9plvytFdEzFpuaDYj_ecRHy0zEMO2_Grq0tKyRoCSm4QAvD_BwE");
     }
		 // If the interest is art...X
 		else if (interestData.charAt(1) == "1") {
 		  	window.open("https://www.dickblick.com/?gclid=CjwKCAiA27LvBRB0EiwAPc8XWSQFayXRR8xJkCXLKODaBEzYLZhxk-nprY7LnKRSUZMnC2QsYXcKHxoCvtsQAvD_BwE");
 		}
 		// If the interest is technology...X
 		else if (interestData.charAt(2) == "1") {
 		  	window.open("https://www.hexoskin.com/");
 		}
		firstPagePoppedUp = true;
	}
	// If a page already popped up, activate the second popup
	else if(firstPagePoppedUp === true){
		secondPopupButton();
	}
}

// second popup Page:
var secondPagePoppedUp = false;
function secondPopupButton() {
	// Display a popup page if it hasn't been displayed yet
	if(secondPagePoppedUp === false) {
		// If the interest is news...X
		if (interestData.charAt(4) == "1") {
		  	window.open("http://www.thespoof.com");
		}
    // If the interest is cooking...X
		else if (interestData.charAt(0) == "1") {
		  	window.open("https://www.fairkitchens.com/en.html");
		 }
		// If the interest is art...X
		else if (interestData.charAt(1) == "1") {
		  	window.open("https://www.art.com/");
		}
		// If the interest is technology...X
		else if (interestData.charAt(2) == "1") {
		  	window.open("https://www.bestproducts.com/tech/g864/cool-tech-products-you-need/");
		}
		// If the interest is travel...X
		else if (interestData.charAt(3) == "1") {
		  	window.open("https://www.magiktours.com/");
		}
		secondPagePoppedUp = true;
	}
	// If a second page already popped up, activate the third popup
	else if(secondPagePoppedUp === true){
		thirdPopupButton();
	}
}

// third popup Page:
var thirdPagePoppedUp = false;
function thirdPopupButton() {
	// Display a popup page if it hasn't been displayed yet
	if(thirdPagePoppedUp === false) {
    // If the interest is cooking...X
		if (interestData.charAt(0) == "1") {
		  	window.open("https://thehomeandkitchenstore.ca/collections/kitchen-utensils-gadgets?gclid=CjwKCAiA27LvBRB0EiwAPc8XWSPAeQmrgULJBUP_MrRWLUXd5tUHrfOgy-9d-A-1NuYNAsfN8U8etBoCF98QAvD_BwE");
		 }
		// If the interest is art...X
		else if (interestData.charAt(1) == "1") {
		  	window.open("https://canada.michaels.com/en/classes");
		}
		// If the interest is technology...X
		else if (interestData.charAt(2) == "1") {
		  	window.open("https://store.google.com/ca/config/google_home_mini?sku=_google_home_mini_charcoal&gclid=CjwKCAiA27LvBRB0EiwAPc8XWYhG4x0oCduTCJJZyOUzMsjmbvSp0HSblTlJwnOFYjZp2ikJqMQeHhoCjIcQAvD_BwE&gclsrc=aw.ds");
		}
		// If the interest is travel...X
		else if (interestData.charAt(3) == "1") {
		  	window.open("https://www.clubvoyages.com/en/travel-agencies/montreal/8485-rue-saint-denis-42819");
		}
		// If the interest is news...X
		else if (interestData.charAt(4) == "1") {
		  	window.open("http://bizstandardnews.com/");
		}
		thirdPagePoppedUp = true;
	}
	// If a page already popped up, give the button its regular function
	else if(thirdPagePoppedUp === true){
		transitionTooltip('gametooltip2', 'gametooltip3');
	}
}

// last popup pages:
var lastPagesPoppedUp = false;
function lastPopupButton() {
	// Display popup pages if they haven't been displayed yet
	if(lastPagesPoppedUp === false) {
    // If the interest is cooking...X
		if (interestData.charAt(0) == "1") {
		  	window.open("https://www.wayfair.ca/fr/cuisine/cat/ustensiles-de-cuisine-c417516.html");
		 }
		// If the interest is art...X
		if (interestData.charAt(1) == "1") {
		  	window.open("https://www.currys.com/");
		}
		// If the interest is technology...X
		if (interestData.charAt(2) == "1") {
		  	window.open("https://www.robotshop.com/ca/en/hexa-hexapod-robot.html?gclid=CjwKCAiA27LvBRB0EiwAPc8XWbRxPLoGJTBQu0X5gTk0MjMTFApRRXxhCo-06zZLvTZrX1X8Lv1XRxoCxwsQAvD_BwE");
		}
		// If the interest is travel...X
		if (interestData.charAt(3) == "1") {
		  	window.open("https://www.aircanada.com/en-ca/");
		}
		// If the interest is news...X
		if (interestData.charAt(4) == "1") {
		  	window.open("https://empirenews.net/");
		}
		lastPagesPoppedUp = true;
	}
	// If a pages already popped up, give the button its regular function
	else if(lastPagesPoppedUp === true){
		progressAndCloseTooltip('gametooltip3', 'finishedgame');
	}
}
