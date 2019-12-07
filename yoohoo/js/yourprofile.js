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
alert(interestData);
document.getElementById('interests').innerHTML = interests;
document.getElementById('yourFirstPost').innerHTML = Cookies.get("realname")+ ' gained 7 social points for creating an account on ' + Date();
