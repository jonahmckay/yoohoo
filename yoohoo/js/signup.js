var dayElement = document.getElementById("day");
var monthElement = document.getElementById("month");
var yearElement = document.getElementById("year");

function populateDateDropdowns()
{

	for (var i = 1; i <= 31; i++)
	{
		dayElement.innerHTML += "<option value=" + i + ">" + i + "</option>";
	}
	var monthValues = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

	for (var i = 0; i < 12; i++)
	{
		monthElement.innerHTML += "<option value=" + i + ">" + monthValues[i] + "</option>";
	}

	for (var i = 2022; i > 1909; i--)
	{
		yearElement.innerHTML += "<option value=" + i + ">" + i + "</option>"
	}
}

function calculateAge()
{
	var currentDate = new Date(2022, 5, 10);
	var birthDate = getDateOfBirth();
	var y = currentDate.getFullYear()-birthDate.getFullYear();
	var m = currentDate.getMonth()-birthDate.getMonth();
	var d = currentDate.getMonth()-birthDate.getMonth();

	var age = y;

	if (m < 0)
	{
		age--;
	}
	return age;
}

function getDateOfBirth()
{
	return new Date(parseInt(yearElement.value), parseInt(monthElement.value), parseInt(dayElement.value));

}

function register()
{
	if (calculateAge() < 14)
	{
		alert("You must be over 13 to use YooHoo! Ask your parents permission to lie about your age, or wait for YooHoo Kids: coming in 2024!");
		return;
	}
	else if (isNaN(calculateAge()))
	{
		alert("Invalid date of birth");
	}
	else
	{
		if (document.getElementById('usernameInput').value != "")
		{
			//Scary ternary operators! Simply converts checkbox into a "1" or "0"
			//for true or false respectively to be stored in a cookie.
			var inCook = document.getElementById("interestCooking").checked ? "1" : "0";
			var inArt = document.getElementById("interestArt").checked ? "1" : "0";
			var inTech = document.getElementById("interestTechnology").checked ? "1" : "0";
			var inTravel = document.getElementById("interestTravel").checked ? "1" : "0";
			var inNews = document.getElementById("interestNews").checked ? "1" : "0";
			var interestString = inCook + inArt + inTech + inTravel + inNews;
			alert(interestString);
			var birthday = getDateOfBirth().toISOString().substring(0, 10);
			makeNewAccount(document.getElementById('usernameInput').value, document.getElementById('nameInput').value, birthday, calculateAge(), interestString);
			window.location.href = 'feed.html';
		}
		else
		{
			alert("Invalid username")
		}
	}
}
populateDateDropdowns();
