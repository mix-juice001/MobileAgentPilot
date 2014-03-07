function toContactList() {
	var agencies = Alloy.createCollection("agency");
	agencies.fetch({
		query:"SELECT * FROM agency"
	});
	Titanium.API.info(agencies.size());
	if (agencies.size() == 0) {
		Alloy.createController('newContact').getView().open();
		return;
	}
	Alloy.createController('contactList', {
		agencyList:agencies,
		agency:specifyAgency(agencies)
	}).getView().open();
}

function specifyAgency(agencies) {
	var priorAgency = agencies.filter(function(agency) {
		return agency.get("prior") == true;
	});
	
	if (priorAgency.length != 0) {
		return  priorAgency[0];
	} 
	return agency = agencies.at(0);
}

function toMyPage() {
	Alloy.createController('myPage').getView().open();
}
function toSmartAccident() {
	Alloy.createController('smartAccident').getView().open();
}
function toSmartRoadAssist() {
	Alloy.createController('smartRoadAssist').getView().open();
}
function toSmartPhotoMail() {
	Alloy.createController('photoMailIntro').getView().open();
}
function toSmartCheck() {
	Alloy.createController('myPage', {check:true}).getView().open();
}
function toTokioMarineHomePage() {
	Ti.Platform.openURL("http://www.tokiomarine-nichido.co.jp");
}
function toOnedayInsurance() {
	var agencies = Alloy.createCollection("agency");
	agencies.fetch({
		query:"SELECT * FROM agency"
	});
	if (agencies.size() != 0) {
		var agencyCoed = agencies.at(0).get("agencyCode");
		Ti.API.info(agencyCoed);
		if (agencyCoed == null || agencyCoed =="") {
			Ti.Platform.openURL("http://tyoinori.jp/qr.do?to=024");
			return;
		}
		Ti.Platform.openURL("http://tyoinori.jp/qr.do?cd=" + agencies.at(0).get("agencyCode") +"&to=023");
		return;
	}
	//代理店登録dialog表示modelWindow
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
function toProfile() {
	Alloy.createController('profileRegister').getView().open();
}
function toInfo() {
	Alloy.createController('information').getView().open();
}

//profile登録されている場合は画像を差し替える
var profiles = Alloy.createCollection("profile");
profiles.fetch({
	query:"SELECT * FROM profile"
});
if (profiles.length != 0) {
	$.profile.image = "/images/menu_profile.png";
}
$.index.open();
