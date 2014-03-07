var args = arguments[0] || {};
var tabindex = args.tab;

$.tabGroup.setActiveTab(tabindex);
activateIcon(tabindex);

function activateIcon(tabindex) {
	activate($.tabGroup.getTabs()[tabindex]);
}

function activate(tab) {
	$.watch.icon = "/images/tabIconWatchDisable.png";
	$.park.icon = "/images/tabIconParkDisable.png";
	$.crossing.icon = "/images/tabIconCrossingDisable.png";
	
	if ($.watch.active) {
		$.watch.icon = "/images/tabIconWatch.png";
		return;
	}
	if ($.park.active) {
		$.park.icon = "/images/tabIconPark.png";
		return;
	}
	if ($.crossing.active) {
		$.crossing.icon = "/images/tabIconCrossing.png";
		return;
	}
}

function activateIcon(e) {
	activate($.tabGroup.activeTab);
}
