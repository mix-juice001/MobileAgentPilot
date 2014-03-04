function EmailDialog(address) {
	this.address = address;
}

EmailDialog.prototype.build = function() {
	if (this.address != null) {
		var emailDialog = Titanium.UI.createEmailDialog();

		// 題名の初期値をセットします
		emailDialog.setSubject('題名');
		
		// To, Cc, Bccについては文字列配列として引き渡します。
		emailDialog.setToRecipients([this.address]);
		emailDialog.setCcRecipients(['bar@yahoo.com']);
		emailDialog.setBccRecipients(['hoge@yahoo.com']);
		
		// 本文と添付(ここではすでにimageというオブジェクトがある前提)を初期設定します。
		// emailDialog.setMessageBody('this is a test message');
		// emailDialog.addAttachment(image);
		
		// ツールバー色を指定して画面を開きます。
		//emailDialog.setBarColor('#336699');
		emailDialog.open();
	}
};

module.exports = EmailDialog;