exports.postLocationAndCell = function() {
	
	Ti.API.info("***commonHTTPClient.postLocation()");

	var xhr = Ti.Network.createHTTPClient();
	
	xhr.onload = function(e) {
		//handle response, which at minimum will be an HTTP status code

		var string = require('alloy/string');
		Titanium.API.debug("debug…");
	};
	
	xhr.open('POST','https://mobile.millea.jp/roadservice-phone/LocationRegister.do');
	xhr.send({
		mobile:"xxxxx",
		home:"xxxxxx",
		latitude:"xxxxxx",
		longitude:"xxxxxxx",
		country:"xxxx",
		prefecture:"xxxxx",
		address:"xxxxxxx"
	});
};

	// protected void onPreExecute() {
// 		
		// // レスポンスハンドラを生成
		// responseHandler = new ResponseHandler<Void>() {
// 
			// // HTTPレスポンスから，受信文字列をエンコードして文字列として返す
			// @Override
			// public Void handleResponse(HttpResponse response) throws IOException {
			// // コード判定
				// switch (response.getStatusLine().getStatusCode()) {
				// // ステータスコードが200(通信成功)
				// case HttpStatus.SC_OK:
					// // レスポンスデータをエンコード済みの文字列として取得する。
					// SPCONBX0_HttpPostTask.this.httpResponseMsg = EntityUtils.toString(
							// response.getEntity(),
							// SPCONBX0_HttpPostTask.this.RESPONSE_ENCODING);
					// break;
// 
				// default:
					// // エラーメッセージを設定
					// SPCONBX0_HttpPostTask.this.httpErrorMsg = activity.getString(R.string.NETWORK_SERVER_ERROR);
				// }
				// return null;
			// }
		// };
	// }
