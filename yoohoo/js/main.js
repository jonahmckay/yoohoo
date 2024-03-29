function revealTooltip(tooltipId)
{
	var tooltip = document.getElementById(tooltipId);

	tooltip.style.visibility = "visible";
	tooltip.style.zIndex = 1;
}

function hideTooltip(tooltipId)
{
	var tooltip = document.getElementById(tooltipId);
	tooltip.style.visibility = "hidden";
	tooltip.style.zIndex = -1;
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
