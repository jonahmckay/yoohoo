function populateDateDropdowns()
{
	var dayElement = document.getElementById("day");
	var monthElement = document.getElementById("month");
	var yearElement = document.getElementById("year");
	
	for (var i = 1; i <= 31; i++)
	{
		dayElement.innerHTML += "<option value=" + i + ">" + i + "</option>";
	}
	var monthValues = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
	
	for (var i = 0; i < 12; i++)
	{
		monthElement.innerHTML += "<option value=" + i+1 + ">" + monthValues[i] + "</option>";
	}
	
	for (var i = 2022; i > 1909; i--)
	{
		yearElement.innerHTML += "<option value=" + i + ">" + i + "</option>"
	}
}

function calculateAge()
{
	var currentDate = Date(2022, 5, 10);
	var dateOfBirth =
}
function getDateOfBirth()
{
	return Date(yearElement.value, monthElement.value, dayElement.value);
}
populateDateDropdowns();