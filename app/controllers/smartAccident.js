function toAgency() {
	Alloy.createController('smartAccidentAgency').getView().open();
}

function toTokiomarine() {
	Alloy.createController('smartAccidentTokioMarine').getView().open();
}
function toHP() {
	Ti.Platform.openURL("https://ecom.tokiomarine-nichido.co.jp/HT081/002/jiko");
}
function toWhenIncidentHappens() {
	Alloy.createController('whenIncidentHappens').getView().open();
}
function toSafetyDriveNavi() {
	Alloy.createController('safetyDriveNavi').getView().open();
}

$.win.addEventListener("focus", function(e1){
	Titanium.Geolocation.getCurrentPosition(function(e){
	    // エラー時はコールバック関数の引数のerrorプロパティがセットされます
	    if(e.error){
	    	alert("erroe");
	        Ti.API.error(e.error);
	        return;
	    }
	    // 状態取得時の処理
	    var coords = e.coords;
	    
	    lng = e.coords.longitude;
        lat = e.coords.latitude;
    
		Titanium.Geolocation.reverseGeocoder(lat, lng , function(a){
			$.address.text = "〈現在地〉\n" + a.places[0].address;
		});
	});
});
//$.smartAccident.open();
