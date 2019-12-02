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
	
	for (var i = 1; i < 12; i++)
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
		window.location.href = 'explorepage.html';
	}
}
populateDateDropdowns();