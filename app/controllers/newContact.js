function registerContact() {
	var dialogs = require('alloy/dialogs');
	dialogs.confirm({
		title:" ",
		message:"代理店の電話番号をハイフン\n（―）なしで入力してください。",
		yes:"OK",
		no:"キャンセル",
		callback:retrieveAgency
	});
}

function retrieveAgency() {

	var xhr = Ti.Network.createHTTPClient();
	
	xhr.onload = function(e) {
		//handle response, which at minimum will be an HTTP status code

		var string = require('alloy/string');

		Alloy.createController('contactDetailInfo',{
			agency: Titanium.Network.decodeURIComponent(this.getResponseHeader("agentName")),
			person: Titanium.Network.decodeURIComponent(this.getResponseHeader("boshuninName")),
			telno1: "1",
			telno2: Titanium.Network.decodeURIComponent(this.getResponseHeader("telNo2")),
			mail: Titanium.Network.decodeURIComponent(this.getResponseHeader("mailAddress")),
			url: Titanium.Network.decodeURIComponent(this.getResponseHeader("url")),
			memo: Titanium.Network.decodeURIComponent(this.getResponseHeader("message")),
		}).getView().open();
		
	};
	
	xhr.open('POST','https://doc-req.tokiomarine-nichido.co.jp/ht1713/HT171311Servlet');
	xhr.send({
		telNo1:'1',
		osFlg:'2'
	});
	
	

}
