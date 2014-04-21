function scroll() {
	if ($.scrollableView.currentPage == 0) {
		$.arrowLeft.image = "/images/contactArrowLeftDisable.png";
	} else {
		//左矢印を活性化
		$.arrowLeft.image = "/images/contactArrowLeft.png";	
	}
	if ($.scrollableView.currentPage == agencies.size() - 1) {
		//右矢印を活性化
		$.arrowRight.image = "/images/contactArrowRightDisable.png";
	} else {
		//右矢印を活性化
		$.arrowRight.image = "/images/contactArrowRight.png";
	}
}

function back() {
	$.win.close();
}
function addContact(e) {
	console.log(e);
	Alloy.createController('contactSearchDialog').getView().open();
}
function editContact(e) {
	console.log(e);
	Ti.API.info(e);
	Alloy.createController('contactEdit', {
		agency:agencies.at($.scrollableView.currentPage)
	}).getView().open();
}
function tel1() {
	if ($.telno1.text != null) {
		Ti.Platform.openURL("tel:" + $.telno1.text);
	}
}

function tel2() {
	if ($.telno2.text != null) {
		Ti.Platform.openURL("tel:" + $.telno2.text);
	}
}

function mail() {
	if ($.mail.text != null) {
		var emailDialog = Titanium.UI.createEmailDialog();

		// 題名の初期値をセットします
		emailDialog.setSubject('題名');
		
		// To, Cc, Bccについては文字列配列として引き渡します。
		emailDialog.setToRecipients([$.mail.text]);
		emailDialog.setCcRecipients(['bar@yahoo.com']);
		emailDialog.setBccRecipients(['hoge@yahoo.com']);
		
		// 本文と添付(ここではすでにimageというオブジェクトがある前提)を初期設定します。
		// emailDialog.setMessageBody('this is a test message');
		// emailDialog.addAttachment(image);
		
		// ツールバー色を指定して画面を開きます。
		//emailDialog.setBarColor('#336699');
		emailDialog.open();
	}
}

function hp() {
	if ($.url.text != null) {
		Ti.Platform.openURL($.url.text);
	}
}
var args = arguments[0] || {};
var agencies = args.agencyList;
var agency = args.agency;//specifyAgency(agencies);
// $.agencyImage.image = agency.get("image");
// $.agencyName.text = agency.get("agency");
// $.representative.text = agency.get("representative");
// $.telno1.text = agency.get("tel1");
// $.telno2.text = agency.get("tel2");
// $.mail.text = agency.get("mail");
// $.url.text = agency.get("url");
// $.memo.text = agency.get("memo");
// $.priority.value = agency.get("prior");
// 
// if (agency.get("id") != 0) {
	// //左矢印を活性化
	// $.arrowLeft.image = "/images/contactArrowLeft.png";
// }
// if (agency.get("id") != agencies.size() - 1) {
	// //右矢印活性化
	// $.arrowRight.image = "/images/contactArrowRight.png";
// }

var builder = require("contactViewBuilder");
agencies.map(function(each) {
	Ti.API.info(each);
	$.scrollableView.addView(builder.build(each));
});

scroll();

function previous() {
	$.scrollableView.movePrevious();
}

function next(e) {
	$.scrollableView.moveNext();
}


function prioritize() {
	Ti.API.info(agency.get("id"));
	var aegncies = Alloy.createCollection("agency");
	agencies.fetch({
		query:"SELECT * FROM agency WHERE ID = " + agency.get("id")
	});
	agencies.map(function(agency) {
		agency.set({
			prior:$.priority.value
		});
		agency.save();
	});
}

	// var aaa = agencies.where({
		// tel1 : "1"
	// });
// agencies.map(function(agency) {
	// $.telno1.text = agency.get("tel1");
	// $.telno2.text = agency.get("tel2");
	// $.mail.text = agency.get("mail");
	// $.url.text = agency.get("url");
// });


// profiles.map(function(profile) {
	// $.cellphone.value = profile.get("cellphone");
	// $.homephone.value = profile.get("homephone");
	// break;
// });
