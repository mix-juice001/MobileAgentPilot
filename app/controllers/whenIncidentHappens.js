function scroll(e) {
	var page = e.currentPage + 1;
	$.step.image = "/images/pageStep" + page + ".png";
}
function previous() {
	$.scrollableView.movePrevious();
}
function next() {
	$.scrollableView.moveNext();
}

Ti.API.info(Ti.Platform.displayCaps.platformHeight);
Ti.API.info(Ti.Platform.displayCaps.platformWidth);

$.scrollableView.width = Ti.Platform.displayCaps.platformWidth;
$.scrollableView.contentWidth = Ti.Platform.displayCaps.platformWidth;
$.scrollableView.height = Ti.Platform.displayCaps.platformHeight - 180;
