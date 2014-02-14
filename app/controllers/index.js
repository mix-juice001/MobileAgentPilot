function doClick(e) {
    alert($.label.text);
}
function toContactList() {
	Alloy.createController('newContact').getView().open();
}
function toSmartAccident() {
	Alloy.createController('smartAccident').getView().open();
}
function toSmartRoadAssist() {
	Alloy.createController('smartRoadAssist').getView().open();
}
function toTokioMarineHomePage() {
	Ti.Platform.openURL("http://www.tokiomarine-nichido.co.jp");
}
function toOnedayInsurance() {
	Ti.Platform.openURL("http://tyoinori.jp/qr.do?cd=123456&to=023");
}
function toNamazu() {
    var sha1 = require('alloy/sha1');
	var sha1Digest = sha1.hex_sha1("namazu" + getCurrentTime());
	//alert(sha1Digest);
	Ti.Platform.openURL("http://nmz.tokiomarine-nichido.co.jp/index.php?apuri=" + sha1Digest);
}
function getCurrentTime() {
	var d = new Date();
	return d.getMonth() + d.getDay() + d.getHours() + d.getSeconds();
}

$.index.open();
