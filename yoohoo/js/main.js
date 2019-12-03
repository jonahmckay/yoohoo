function revealTooltip(tooltipId)
{
	var tooltip = document.getElementById(tooltipId);

	tooltip.style.visibility = "visible";
}

function hideTooltip(tooltipId)
{
	var tooltip = document.getElementById(tooltipId);
	tooltip.style.visibility = "hidden";
}

function transitionTooltip(tooltipToClose, tooltipToOpen)
{
	hideTooltip(tooltipToClose);
	revealTooltip(tooltipToOpen);
}

function progressAndCloseTooltip(tooltipToClose, progressId)
{
	hideTooltip(tooltipToClose);
	setProgress(progressId);
}