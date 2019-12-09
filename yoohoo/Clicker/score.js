	var score = 0;
	var multiplier = 1;
	var multiplierCost = 20;
	var autoclickCost = 100;
	var statusName = "Noob";
	var popupCount = 0;
	
	
	function updateScore()
	{
		score += multiplier;
		displayScore();
		
		displayStatus();
		openPopup();
		
	}
	
	function upgrade(){
		if(score >= multiplierCost){
			multiplier ++;
			displayMultiplier();
			
			score -= multiplierCost;
			displayScore();
			
			multiplierCost = multiplierCost * 2;
			document.getElementById("upgrade").innerHTML = "Upgrade " + multiplierCost;
		}
	}
	
	function buyAutoclick(){
		if(score >= autoclickCost) {
			score -= autoclickCost;
			autoclick();
			
			autoclickCost = autoclickCost * 2;
			document.getElementById("auto").innerHTML = "Autoclick " + autoclickCost;
		}
	}
	
	function autoclick(){
		updateScore();
		setTimeout(autoclick, 1000);
	}
	
	function displayScore() {
		document.getElementById("scoreVal").innerHTML = "Score: " + score + " points";
	}
	
	function displayMultiplier() {
		document.getElementById("multi").innerHTML = "Multiplier: x" + multiplier;
	}
	
	function displayStatus() {
		scoreStatus();
		document.getElementById("myStatus").innerHTML = statusName;		
	}
	
	function scoreStatus() {
		if(score>= 10000) {
			statusName = "Legend";
		}
		else if(score>= 7500) {
			statusName = "Boss";
		}
		else if(score>= 5000) {
			statusName = "Thug";
		}
		else if(score>= 2000) {
			statusName = "Not Bad";
		}
		else if(score>= 500) {
			statusName = "Meh";
		}
		else if(score>= 0) {
			statusName = "Noob";
		}
	}
	
	function openPopup() {
		if(score >= 60 && popupCount < 1) {
		document.getElementById("pop1").style.visibility = 'visible';
		popupCount ++;
		}
			if(score >= 120 && popupCount < 2) {
			document.getElementById("pop2").style.visibility = 'visible';
			popupCount ++;
			}
				if(score >= 300 && popupCount < 3) {
				document.getElementById("pop3").style.visibility = 'visible';
				popupCount ++;
				}
	}
	
	function closePopup() {
		document.getElementById("pop1").style.visibility = 'hidden';
		document.getElementById("pop2").style.visibility = 'hidden';
		document.getElementById("pop3").style.visibility = 'hidden';
	}