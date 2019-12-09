document.getElementById('profilename').innerHTML = Cookies.get("realname");
document.getElementById('age').innerHTML = Cookies.get("age");
document.getElementById('birthday').innerHTML = Cookies.get("birthday");
var interests = "";
var interestData = Cookies.get("interests");
if (interestData.charAt(0) == "1")
{
  interests += "Cooking, "
}
if (interestData.charAt(1) == "1")
{
  interests += "Art, "
}
if (interestData.charAt(2) == "1")
{
  interests += "Technology, "
}
if (interestData.charAt(3) == "1")
{
  interests += "Travel, "
}
if (interestData.charAt(4) == "1")
{
  interests += "News, "
}
if (interests.length > 0)
{
  //remove comma and space
  interests = interests.slice(0, -2);
}
document.getElementById('interests').innerHTML = interests;
document.getElementById('yourFirstPost').innerHTML = Cookies.get("realname")+ ' gained 7 social points for creating an account on ' + new Date(2022, 5, 10).toISOString().substring(0, 10);

if (getProgressValue() == "goingtoprofile")
{
	revealTooltip("yourprofiletooltip");
}

if (getProgressValue() == "welcome")
{
	revealTooltip("introductiontooltip");
}

// first popup Page:
var firstPagePoppedUp = false;
function firstPopupButton() {
	// Display a popup page if it hasn't been displayed yet
	if(firstPagePoppedUp === false) {
		// If the interest is art...X
		if (interestData.charAt(1) == "1") {
		  	window.open("https://www.greatbigcanvas.com/?msclkid=d31fb218331716f65729eff5fe762874&utm_source=bing&utm_medium=cpc&utm_campaign=Remarketing&utm_term=large%20canvas&utm_content=Remarketing");
		}
		// If the interest is technology...X
		else if (interestData.charAt(2) == "1") {
		  	window.open("https://www.google.com/glass/start/");
		}
		// If the interest is travel...X
		else if (interestData.charAt(3) == "1") {
		  	window.open("https://www.trivago.ca/?iGeoDistanceItem=6575742&sem_keyword=trivago&sem_creativeid=76278734417948&sem_matchtype=bb&sem_network=o&sem_device=c&sem_campaignid=367238172&sem_adgroupid=1220458265353772&sem_targetid=dat-2328078432900206%3Aloc-32&cip=1070902545&msclkid=83e2cfa8bb9e10740ad9924577675faf&utm_source=bing&utm_medium=cpc&utm_campaign=CA_en_DSA_Desktop_Catch-All&utm_term=trivago&utm_content=CA_en_DSA_Desktop_Catch-All_Catch-All");
		}
		// If the interest is news...X
		else if (interestData.charAt(4) == "1") {
		  	window.open("https://www.newyorker.com/humor/borowitz-report/pence-calls-space-force-necessary-to-protect-us-from-gay-aliens");
		}
    // If the interest is cooking... X
    else if (interestData.charAt(0) == "1") {
        window.open("https://www.ikea.com/us/en/cat/kitchen-utensils-20647/");
     }
		firstPagePoppedUp = true;
	}
	// If a page already popped up, give the button its regular function
	else if(firstPagePoppedUp === true){
		transitionTooltip('yourprofiletooltip2', 'yourprofiletooltip3')
	}
}

// second popup Page:
var secondPagePoppedUp = false;
function secondPopupButton() {
	// Display a popup page if it hasn't been displayed yet
	if(secondPagePoppedUp === false) {
		// If the interest is technology...X
		if (interestData.charAt(2) == "1") {
		  	window.open("https://www.bestbuy.ca/fr-ca/collection/techno-pret-a-porter-en-solde/59069?icmp=home_offers_wearables_gifts_onsale");
		}
		// If the interest is travel...X
		else if (interestData.charAt(3) == "1") {
		  	window.open("https://ca.travelgenio.com/Search.aspx?CultureCode=en-CA&CobrandedID=256&AffiliateCode=6FUf6zCA&msclkid=d357be6bde571839781de38612aeb844");
		}
		// If the interest is news...X
		else if (interestData.charAt(4) == "1") {
		  	window.open("http://www.newsmutiny.com/Index.html");
		}
    // If the interest is cooking...X
		else if (interestData.charAt(0) == "1") {
		  	window.open("https://www.crateandbarrel.com/kitchen-and-food/cooking-utensils/1");
		 }
		// If the interest is art...X
		else if (interestData.charAt(1) == "1") {
		  	window.open("https://www.artbrokerage.com/help/selling-art");
		}
		secondPagePoppedUp = true;
	}
	// If a page already popped up, give the button its regular function
	else if(secondPagePoppedUp === true){
		progressAndCloseTooltip('yourprofiletooltip3', 'goingtogame');
    window.location.href = 'Clicker/clicker.html';
	}
}
