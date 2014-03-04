
function mail() {
	var emailDialog = Titanium.UI.createEmailDialog();

	// 題名の初期値をセットします
	emailDialog.setSubject('スマートフォトメール');
	
	// To, Cc, Bccについては文字列配列として引き渡します。
	emailDialog.setToRecipients(['takuma.setoguchi@grp.tmnf.jp']);
	//emailDialog.setToRecipients(['gw6789012345@cs.tmnf.jp']);
	
	// 本文と添付(ここではすでにimageというオブジェクトがある前提)を初期設定します。
	// emailDialog.setMessageBody('this is a test message');
	// emailDialog.addAttachment(image);
	
	// ツールバー色を指定して画面を開きます。
	//emailDialog.setBarColor('#336699');
	emailDialog.open();
}
function callback(e) {
	var updateCarImage = ($.carImage.image != "/images/photMail_car.png");
	var updateSituationImage = ($.situationImage.image != "/images/photoMail_situation.png");
	var updateOtherInfoImage = ($.otherInfoImage.image != "/images/photoMail_otherInfo.png");
	if (updateCarImage || updateSituationImage || updateOtherInfoImage) {
		$.mailButton.image = "/images/photoMail_mail.png";
		$.mailButton.addEventListener('click', mail);
	} else {
		$.mailButton.image = "/images/photoMail_mailDisable.png";
		$.mailButton.removeEventListener('click', mail);
	}
	
	$.carLabel.image = "/images/photoMail_carComment.png";
	$.situationLabel.image = "/images/photoMail_situationLabel.png";
	$.otherInfoLabel.image = "/images/photoMail_otherInfoLabel.png";
	
	if (updateCarImage) {
		$.carLabel.image = "/images/photoMail_carLabel.png";
	} else {
		$.carLabel.image = "/images/photoMail_carComment.png";
		return;
	}
	if (updateSituationImage) {
		$.situationLabel.image = "/images/photoMail_situationLabel.png";
	} else {
		$.situationLabel.image = "/images/photoMail_situationComment.png";
		return;
	}
	if (updateOtherInfoImage) {
		$.otherInfoLabel.image = "/images/photoMail_otherInfoLabel.png";
	} else {
		$.otherInfoLabel.image = "/images/photoMail_otherInfoComment.png";
		return;
	}
}
function selectHow(e) {
	Ti.API.info(e.source);
	Ti.API.info($);
	Ti.API.info($.carImage);
	Ti.API.info(e.source.image);
	Alloy.createController('SelectHowToChoosePhotoDialog', {
		//parent:$
		photoImage:e.source,
		callback:callback,
		original:(e.source.image == "/images/photMail_car.png" || e.source.image == "/images/photoMail_situation.png" || e.source.image == "/images/photoMail_otherInfo.png")
	}).getView().open();
}
function selectHowByLabel() {
	Alloy.createController('SelectHowToChoosePhotoDialog', {
		//parent:$
		photoImage:$.carImage,
		callback:callback,
		original:$.carImage.image == "/images/photMail_car.png"
	}).getView().open();
}



