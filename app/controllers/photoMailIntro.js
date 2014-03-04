function next() {
	$.scrollableView.moveNext();
}
function takePhoto() {
	Alloy.createController('photoMail').getView().open();
}

function scroll(e) {
	Ti.API.info(e.currentPage);
	if (e.currentPage == 0) {
		$.actionButton.image = "/images/photoMail_nextButton.png";
		$.page.image = "/images/photoMail_page1.png";
		return;
	}
	$.actionButton.image = "/images/photoMail_takeButton.png";
	$.page.image = "/images/photoMail_page2.png";
	
}
function action(e) {
	if ($.scrollableView.getCurrentPage() == 0) {
		next();
		return;
	}
	takePhoto();
}

var profiles = Alloy.createCollection("profile");
profiles.fetch({
	query:"SELECT * FROM profile"
});
Titanium.API.info(profiles.length);
if (profiles.size() != 0) {
	var profile = profiles.first();
	$.telno.value = profile.get("cellphone");
}
