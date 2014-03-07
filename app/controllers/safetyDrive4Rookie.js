var args = arguments[0] || {};
var tabindex = args.tab;

$.tabGroup.setActiveTab(tabindex);
activateIcon(tabindex);

function activateIcon(tabindex) {
	activate($.tabGroup.getTabs()[tabindex]);
}

function activate(tab) {
	$.collision.icon = "/images/tabIconCollisionDisable.png";
	$.speedup.icon = "/images/tabIconSpeedUpDisable.png";
	$.steering.icon = "/images/tabIconSteeringDisable.png";
	
	if ($.collision.active) {
		$.collision.icon = "/images/tabIconCollision.png";
		return;
	}
	if ($.speedup.active) {
		$.speedup.icon = "/images/tabIconSpeedUp.png";
		return;
	}
	if ($.steering.active) {
		$.steering.icon = "/images/tabIconSteering.png";
		return;
	}
}

function activateIcon(e) {
	activate($.tabGroup.activeTab);
}
