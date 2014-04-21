function onCall() {
	//send via http
	Titanium.Platform.openURL("tel:0120225382");
}
function back() {
	$.win.close();
}