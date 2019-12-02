function login()
{
	if (document.getElementById("email").value == Cookies.get("username") && document.getElementById("email").value != null)
	{
		document.location.href = "feed.html";
	}
	else
	{
		alert("Incorrect username.");
	}
}