var args = arguments[0] || {};
var photoImage = args.photoImage;
Ti.API.info(photoImage.id);
var imageid = photoImage.id;
var original = args.original;
var callback = args.callback;
Ti.API.info(original);

function cancel() {
	$.win.close();
}
function bootCamera() {
	Titanium.Media.showCamera({
	    // JSON形式の引数です
	    success:function(event){
	        // cropRectにはx,y,height,widthといったデータがはいる。
	        var cropRect = event.cropRect;
	        var image    = event.media;
	
	        // 撮影されたデータが写真ならばImageViewとしてWindowに貼り付ける
	        if (event.mediaType == Ti.Media.MEDIA_TYPE_PHOTO) {
	        	photoImage.image = event.media.imageAsResized(photoImage.size.width, photoImage.size.height);
	        }
	        $.win.close();
	        callback();
	    },
	    cancel:function(){
	        // ...
	    },
	    error:function(error){
	        // errorとしてカメラがデバイスにないようなケース(iPod touchなどがそうでしょうか)では
	        // error.code が Titanium.Media.NO_CAMERA として返ります。
	    },
	    // 撮影データのフォトギャラリーへの保存
	    saveToPhotoGallery:true,
	    // 撮影直後に拡大縮小移動をするか否かのフラグ
	    allowEditing:true,
	    // 撮影可能なメディア種別を配列で指定
	    mediaTypes:[Ti.Media.MEDIA_TYPE_VIDEO,Ti.Media.MEDIA_TYPE_PHOTO],
	});
}
function bootGallery() {
	Titanium.Media.openPhotoGallery({
	    success: function(event) {
	    	// カメラロールで写真を選択した時の挙動(カメラと同様)
	    	photoImage.image = event.media.imageAsResized(photoImage.size.width, photoImage.size.height);
	        
	        $.win.close();
	        callback();
	    },
	    error: function(error) {
	        // notify(e.message);
	    },
	    cancel: function() {
	        // キャンセル時の挙動
	    },
	    // 選択直後に拡大縮小移動をするか否かのフラグ
	    allowEditing: true
	    // 選択可能なメディア種別を配列で指定
	    //mediaTypes:[Ti.Media.MEDIA_TYPE_VIDEO,Ti.Media.MEDIA_TYPE_PHOTO],
	});
}
function clearPhoto() {
	Ti.API.info("clearPhoto...");
	if (imageid == "carImage") {
		photoImage.image = "/images/photMail_car.png";
		callback();
		return;
	}
	if (imageid == "situationImage") {
		photoImage.image = "/images/photoMail_situation.png";
		callback();
		return;
	}
	if (imageid == "otherInfoImage") {
		photoImage.image = "/images/photoMail_otherInfo.png";
		callback();
		return;
	}


}
function itemClick(e) {
	Ti.API.info(e.itemIndex);
	Ti.API.info(e.sectionIndex );
	Ti.API.info(e.bindId );
	if (e.itemIndex == 0) {
		bootCamera();
		return;
	}
	if (e.itemIndex == 1) {
		bootGallery();
		return;
	}
	if (e.itemIndex == 2) {
		clearPhoto();
		$.win.close();
		return;
	}
}

if (original) {
	$.listSection.deleteItemsAt(2, 1);
	$.win.height = "175dp";
}

// //var data = [{properties:{itemId:message},template:'myCell',mainLabel:{text:insertCount+' Insert at '+itemIndex+' in Section '+sectionIndex},childLabel:{text:'Insert '+message}}];
// 
// var data = [{
    // properties: {
        // title: '写真をクリア',
        // subtitle: 'Subtitle',
        // //image: 'KS_nav_views.png', // not used by this template
        // accessoryType: Ti.UI.LIST_ACCESSORY_TYPE_NONE,
        // itemId : "delete"
    // },
// }];
// $.listSection.insertItemsAt(2, data);
// //$.listSection.appendItems(data);
// 
// //$.listSection.getItemAt(2).text = "写真をクリア";

//$.win.height = "175dp";

