var expiryTime = 600000;

function setTempUsername(nameGiven)
{
	Cookies.set("Tempusername", nameGiven, {expires: 6000 });
}

function checkValidLogin(nameGiven)
{
	if (Cookies.get("username") != null)
	{
		if (nameGiven == Cookies.get("username"))
		{
			return true;
		}
	}
	return false;
}

function setUsernameFromTemp()
{
	Cookies.set("username", Cookies.get("Tempusername"), {expires: expiryTime});
}

function makeNewAccount(realName, age, interests)
{
	setUsernameFromTemp();
	Cookies.set("age", age, {expires: expiryTime});
	Cookies.set("interests", interests, {expires: expiryTime});
	setProgress("welcome");
}

function setProgress(value)
{
	Cookies.set("progress", value, {expires: expiryTime});
}