function cancel() {
	$.win.close();
}

function retrieveAgency() {

	var xhr = Ti.Network.createHTTPClient();
	
	xhr.onload = function(e) {
		//handle response, which at minimum will be an HTTP status code

        // var fileSavingPath = Titanium.Filesystem.getFile(Titanium.Filesystem.applicationDataDirectory,"/images.png");
		// fileSavingPath.write(xhr.responseData);
		
		var string = require('alloy/string');
		Titanium.API.debug("debug…");
		Alloy.createController('contactDetailInfo',{
			agency: Titanium.Network.decodeURIComponent(this.getResponseHeader("agentName")),
			person: Titanium.Network.decodeURIComponent(this.getResponseHeader("boshuninName")),
			telno1: $.telno4search.value,
			telno2: Titanium.Network.decodeURIComponent(this.getResponseHeader("telNo2")),
			mail: Titanium.Network.decodeURIComponent(this.getResponseHeader("mailAddress")),
			url: Titanium.Network.decodeURIComponent(this.getResponseHeader("url")),
			memo: Titanium.Network.decodeURIComponent(this.getResponseHeader("message")),
			imageBlob: this.responseData,
			agencyCode: Titanium.Network.decodeURIComponent(this.getResponseHeader("choinoriCode")),
			updateDate: Titanium.Network.decodeURIComponent(this.getResponseHeader("updateDate")),//代理店更新日付
			statusCode: Titanium.Network.decodeURIComponent(this.getResponseHeader("statusCode")),
			newOkuraNo: Titanium.Network.decodeURIComponent(this.getResponseHeader("newOkuraNo")),
			// path: fileSavingPath
		}).getView().open();
		$.win.close();
	};
	
	xhr.open('POST','https://doc-req.tokiomarine-nichido.co.jp/ht1713/HT171311Servlet');
	xhr.send({
		telNo1:$.telno4search.value,
		osFlg:'2' // 2 means Android
	});
}