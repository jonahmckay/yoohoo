function revealTooltip(tooltipId)
{
	var tooltip = document.getElementById(tooltipId);
    tooltip.style.position = "absolute";
    tooltip.style.bottom = "100%";
    tooltip.style.left = "50%";

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