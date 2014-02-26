var args = arguments[0] || {};

$.agency.text = args.agency;
$.person.text = args.person;
$.telno1.text = args.telno1;
$.telno2.text = args.telno2;
$.mail.text = args.mail;
$.url.text = args.url;
$.memo.text = args.memo;
$.imageAgency.image = args.imageBlob.imageWithAlpha();
//$.imageAgency.image = args.path; 

function onClickRegister() {
	var dialogs = require('alloy/dialogs');
	dialogs.confirm({
		title:"登録確認",
		message:"この情報を登録しますか？",
		yes:"はい",
		no:"いいえ",
		callback:registerAgency
	});
}

function registerAgency() {
	Titanium.API.info("registering...");
	//$ alloy generate model agency sql id:INTEGER agency:TEXT representative:TEXT tel1:TEXT tel2:TEXT mail:TEXT url:TEXT image:BLOB memo:TEXT prior:boolean agencyCode:TEXT updateDate:TEXT newOkuraNo:TEXT   
	var agencies = Alloy.createCollection("agency");
	agencies.fetch({
		query:"SELECT * FROM agency"
	});
	var agency = Alloy.createModel("agency", {
		id:agencies.size(),
		agency:$.agency.text,
		representative:$.person.text,
		tel1:$.telno1.text,
		tel2:$.telno2.text,
		mail:$.mail.text,
		url:$.url.text,
		image:$.imageAgency.image,
		memo:$.memo.text,
		prior:false,
		agencyCode: args.agencyCode,
		updateDate: args.updateDate,
		newOkuraNo: args.newOkuraNo
	});
	agency.save();
	Alloy.createController('index').getView().open();
	//$.win.close();
}
