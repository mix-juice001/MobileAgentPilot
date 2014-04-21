function back() {
	$.win.close();
}
function remove() {
	var dialogs = require('alloy/dialogs');
	dialogs.confirm({
		title:"削除",
		message:"削除しますか？",
		yes:"はい",
		no:"いいえ",
		callback:removeAgency
	});
}
function removeAgency() {
	var agencies = Alloy.createCollection("agency");
	var id = agency.get("id");
	agencies.fetch({
		query:"SELECT * FROM agency WHERE ID = " + id
	});
	agencies.map(function(agency) {
		agency.destroy();
	});
	agencies.fetch({
		query:"SELECT * FROM agency WHERE ID > " + id
	});
	
	agencies.map(function(agency) {
		agency.set({
			id:agency.get("id") -1
		});
		agency.save();
	});
	Alloy.createController('index').getView().open();
}

var args = arguments[0] || {};
var agency = args.agency;
$.agencyImage.image = agency.get("image");
$.agency.text = agency.get("agency");
$.representative.text = agency.get("representative");
$.telno1.text = agency.get("tel1");
$.telno2.text = agency.get("tel2");
$.mail.text = agency.get("mail");
$.url.text = agency.get("url");
$.memo.text = agency.get("memo");
