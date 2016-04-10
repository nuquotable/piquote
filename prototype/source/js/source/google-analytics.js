/*	Google Analytics
	Google Analytics: don't mess with this stuff
	named tracker notes from https://developers.google.com/analytics/devguides/collection/gajs/
	multi-domain tracking notes from https://developers.google.com/analytics/devguides/collection/gajs/gaTrackingSite
================================================== */
var _gaq = _gaq || [];
_gaq.push(
	function() {
		var pageTracker = _gat._createTracker('UA-27829802-1', 'knightlabTracker');
	 },
	['knightlabTracker._setDomainName', 'knightlab.com'] // DON'T CHANGE THIS FOR SUBDOMAINS
	['knightlabTracker._setAllowLinker', true],
	['knightlabTracker._trackPageview']
);
(function() {
	var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
	ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
	var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
})();