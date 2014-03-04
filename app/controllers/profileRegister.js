function activateButton() {
	if ($.cellphone.hasText() || $.homephone.hasText()) {
		$.registerButton.image = '/images/profileRegisterButton.png';
		return;
	}
	$.registerButton.image = '/images/profileRegisterButtonDisable.png';
}
function register() {
	if (!$.cellphone.hasText() && !$.homephone.hasText()) {
		return;
	}

	var profiles = Alloy.createCollection("profile");
	profiles.fetch({query:"SELECT * FROM profile"});
	profiles.map(function(profile){
			profile.destroy();
		});
	
	var profile = Alloy.createModel("profile");
	profile.set({
		cellphone:$.cellphone.value,
		homephone:$.homephone.value
	});
	profile.save();
	//$.win.close();
	Alloy.createController('index').getView().open();
}

var profiles = Alloy.createCollection("profile");
profiles.fetch({
	query:"SELECT * FROM profile"
});
Titanium.API.info(profiles.length);
if (profiles.size() != 0) {
	var profile = profiles.first();
	$.cellphone.value = profile.get("cellphone");
	$.homephone.value = profile.get("homephone");
}
// profiles.map(function(profile) {
	// $.cellphone.value = profile.get("cellphone");
	// $.homephone.value = profile.get("homephone");
	// break;
// });
$.win.open();
