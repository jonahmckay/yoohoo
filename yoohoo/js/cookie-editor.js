var expiryTime = 600000;

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

function getProgressValue()
{
	return Cookies.get("progress");
}


function makeNewAccount(username, realname, birthday, age, interests)
{
	Cookies.set("username", username, {expires: expiryTime});
	Cookies.set("realname", realname, {expires: expiryTime});
	Cookies.set("birthday", birthday, {expires: expiryTime});
	Cookies.set("age", age, {expires: expiryTime});
	Cookies.set("interests", interests, {expires: expiryTime});
	setProgress("welcome");
}

function setProgress(value)
{
	Cookies.set("progress", value, {expires: expiryTime});
}
