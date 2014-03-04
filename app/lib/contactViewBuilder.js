exports.build = function(agency) {
	var view = Ti.UI.createView({
		layout:"vertical"
	});
	
	var agencyInfo = Ti.UI.createView({
		height:Ti.UI.SIZE,
	});
	
	var agencyImage = Ti.UI.createImageView({
		"image":agency.get("image"),
		left:"60dp"
	});
	var agencyName = Ti.UI.createLabel({
		left:"130dp",
		top:"10dp",
		text:agency.get("agency"),
		color:"#000000",
		font:{
			size:"40dp"
		}
	});
	var representative = Ti.UI.createLabel({
		left:"130dp",
		top:"40dp",
		text:agency.get("representative"),
		color:"#000000",
		font:{
			size:"40dp"
		}
	});
	agencyInfo.add(agencyImage);
	agencyInfo.add(agencyName);
	agencyInfo.add(representative);
	
	view.add(agencyInfo);
	
	var tel1View = Ti.UI.createView({
		backgroundColor:"white",
		height:"40dp",
		width:"300dp",
		top:"5dp",
	});
	
	var tel1Label = Ti.UI.createLabel({
		left:"10dp",
		color:"#191970",//midnightblue
		font:{
			size:"50dp",
		},
		text:"電話①"
	});
	
	var tel1 = Ti.UI.createLabel({
		left:"60dp",
		color:"#000000",//black
		font:{
			size:"50dp"
		},
		text:agency.get("tel1")
	});
	
	var tel1Image = Ti.UI.createImageView({
		"image":"/images/contactTelephone.png",
		left:"270dp"
	});
	tel1Label.addEventListener("click", function() {
		if (agency.get("tel1") != null) {
			Ti.Platform.openURL("tel:" + agency.get("tel1"));
		}
	});
	tel1.addEventListener("click", function() {
		if (agency.get("tel1") != null) {
			Ti.Platform.openURL("tel:" + agency.get("tel1"));
		}
	});
	tel1Image.addEventListener("click", function() {
		if (agency.get("tel1") != null) {
			Ti.Platform.openURL("tel:" + agency.get("tel1"));
		}
	});
	tel1View.add(tel1Label);
	tel1View.add(tel1);
	tel1View.add(tel1Image);
	view.add(tel1View);
	
	
	var tel2View = Ti.UI.createView({
		backgroundColor:"white",
		height:"40dp",
		width:"300dp",
		top:"5dp",
	});
	
	var tel2Label = Ti.UI.createLabel({
		left:"10dp",
		color:"#191970",//midnightblue
		font:{
			size:"50dp",
		},
		text:"電話②"
	});
	
	var tel2 = Ti.UI.createLabel({
		left:"60dp",
		color:"#000000",//black
		font:{
			size:"50dp"
		},
		text:agency.get("tel2")
	});
	
	var tel2Image = Ti.UI.createImageView({
		"image":"/images/contactTelephone.png",
		left:"270dp"
	});
	tel2Label.addEventListener("click", function() {
		if (agency.get("tel2") != null) {
			Ti.Platform.openURL("tel:" + agency.get("tel2"));
		}
	});
	tel2.addEventListener("click", function() {
		if (agency.get("tel2") != null) {
			Ti.Platform.openURL("tel:" + agency.get("tel2"));
		}
	});
	tel2Image.addEventListener("click", function() {
		if (agency.get("tel2") != null) {
			Ti.Platform.openURL("tel:" + agency.get("tel2"));
		}
	});
	tel2View.add(tel2Label);
	tel2View.add(tel2);
	tel2View.add(tel2Image);
	view.add(tel2View);
	
	
	var mailView = Ti.UI.createView({
		backgroundColor:"white",
		height:"40dp",
		width:"300dp",
		top:"5dp",
	});
	
	var mailLabel = Ti.UI.createLabel({
		left:"10dp",
		color:"#191970",//midnightblue
		font:{
			size:"50dp",
		},
		text:"メール"
	});
	
	var mail = Ti.UI.createLabel({
		left:"60dp",
		color:"#000000",//black
		font:{
			size:"50dp"
		},
		text:agency.get("mail")
	});
	
	var mailImage = Ti.UI.createImageView({
		"image":"/images/contactMail.png",
		left:"270dp"
	});
	
	var EmailDialog = require("EmailDialog");
	var emailBuilder = new EmailDialog(agency.get("mail"));
	mailLabel.addEventListener("click", emailBuilder.build);
	mail.addEventListener("click", emailBuilder.build);
	mailImage.addEventListener("click", emailBuilder.build);
	
	mailView.add(mailLabel);
	mailView.add(mail);
	mailView.add(mailImage);
	view.add(mailView);
	
	
	var urlView = Ti.UI.createView({
		backgroundColor:"white",
		height:"40dp",
		width:"300dp",
		top:"5dp",
	});
	
	var urlLabel = Ti.UI.createLabel({
		left:"10dp",
		color:"#191970",//midnightblue
		font:{
			size:"50dp",
		},
		text:"URL"
	});
	
	var url = Ti.UI.createLabel({
		left:"60dp",
		color:"#000000",//black
		font:{
			size:"50dp"
		},
		text:agency.get("url")
	});
	
	var urlImage = Ti.UI.createImageView({
		"image":"/images/contactHP.png",
		left:"270dp"
	});
	//tel2Image.addEventListener("onClick", )
	urlView.add(urlLabel);
	urlView.add(url);
	urlView.add(urlImage);
	view.add(urlView);
	
	var memoView = Ti.UI.createView({
		backgroundColor:"white",
		height:"40dp",
		width:"300dp",
		top:"5dp",
	});
	
	var memo = Ti.UI.createLabel({
		left:"30dp",
		color:"#000000",//black
		font:{
			size:"40dp"
		},
		text:agency.get("memo")
	});
	
	var memoDetailImage = Ti.UI.createImageView({
		"image":"/images/contactArrowRightDisable.png",
		left:"270dp"
	});
	//tel2Image.addEventListener("onClick", )
	memoView.add(memo);
	memoView.add(memoDetailImage);
	view.add(memoView);
	
	var priorityView = Ti.UI.createView({
		backgroundColor:"white",
		height:"40dp",
		width:"300dp",
		top:"5dp",
	});
	
	var message = Ti.UI.createLabel({
		left:"30dp",
		color:"#000000",//black
		font:{
			size:"40dp"
		},
		text:"事故時の優先連絡先\nに設定する。"
	});
	
	var priority = Ti.UI.createSwitch({
		value : agency.get("prior"),
		left:"240dp",
	});
	//tel2Image.addEventListener("onClick", )
	priorityView.add(message);
	priorityView.add(priority);
	view.add(priorityView);
	
	return view;
	
};
