function toSafetyDrive4Rookie(tabindex) {
	Alloy.createController('safetyDrive4Rookie',{
		tab:tabindex
	}).getView().open();
}
function toSafetyDrive4RookieCollisionTab() {
	toSafetyDrive4Rookie(0);
}
function toSafetyDrive4RookieSpeedUpTab() {
	toSafetyDrive4Rookie(1);
}
function toSafetyDrive4RookieSteeringTab() {
	toSafetyDrive4Rookie(2);
}
function toSafetyDrive4Veteran(tabindex) {
	Alloy.createController('safetyDrive4Veteran',{
		tab:tabindex
	}).getView().open();
}
function toSafetyDrive4VeteranWatchTab() {
	toSafetyDrive4Veteran(0);
}
function toSafetyDrive4VeteranParkTab() {
	toSafetyDrive4Veteran(1);
}
function toSafetyDrive4VeteranCrossingTab() {
	toSafetyDrive4Veteran(2);
}
