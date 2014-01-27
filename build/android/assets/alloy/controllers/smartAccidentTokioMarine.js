function Controller() {
    function clickRunnable() {
        $.runnable.image = "/images/smartAccident_runnableChecked.png";
        $.notRunnable.image = "/images/smartAccident_notRunnable.png";
    }
    function clickNotRunnable() {
        $.notRunnable.image = "/images/smartAccident_notRunnableChecked.png";
        $.runnable.image = "/images/smartAccident_runnable.png";
    }
    function onCall() {
        Titanium.Platform.openURL("tel:0120119110");
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "smartAccidentTokioMarine";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.win = Ti.UI.createWindow({
        backgroundColor: "#FFFFFF",
        id: "win",
        fullscreen: "true"
    });
    $.__views.win && $.addTopLevelView($.__views.win);
    $.__views.top = Ti.UI.createView({
        layout: "vertical",
        width: "100%",
        height: Ti.UI.SIZE,
        top: "0dp",
        id: "top"
    });
    $.__views.win.add($.__views.top);
    $.__views.header = Ti.UI.createView({
        width: "100%",
        height: Ti.UI.SIZE,
        top: "0dp",
        id: "header"
    });
    $.__views.top.add($.__views.header);
    $.__views.smartAccidentLogo = Ti.UI.createImageView({
        image: "/images/smartAccidentLogo.png",
        id: "smartAccidentLogo"
    });
    $.__views.header.add($.__views.smartAccidentLogo);
    $.__views.carStatus = Ti.UI.createImageView({
        image: "/images/smartAccident_selectCarStatus.png",
        top: "10dp",
        id: "carStatus"
    });
    $.__views.top.add($.__views.carStatus);
    $.__views.buttonView = Ti.UI.createView({
        width: "100%",
        height: Ti.UI.SIZE,
        layout: "vertical",
        top: "0dp",
        id: "buttonView"
    });
    $.__views.top.add($.__views.buttonView);
    $.__views.runnable = Ti.UI.createImageView({
        image: "/images/smartAccident_runnable.png",
        top: "20dp",
        id: "runnable"
    });
    $.__views.buttonView.add($.__views.runnable);
    clickRunnable ? $.__views.runnable.addEventListener("click", clickRunnable) : __defers["$.__views.runnable!click!clickRunnable"] = true;
    $.__views.notRunnable = Ti.UI.createImageView({
        image: "/images/smartAccident_notRunnable.png",
        top: "20dp",
        id: "notRunnable"
    });
    $.__views.buttonView.add($.__views.notRunnable);
    clickNotRunnable ? $.__views.notRunnable.addEventListener("click", clickNotRunnable) : __defers["$.__views.notRunnable!click!clickNotRunnable"] = true;
    $.__views.arrow = Ti.UI.createImageView({
        image: "/images/arrow.png",
        top: "10dp",
        id: "arrow"
    });
    $.__views.top.add($.__views.arrow);
    $.__views.cellPhone = Ti.UI.createImageView({
        image: "/images/smartAccident_cellPhone.png",
        top: "10dp",
        id: "cellPhone"
    });
    $.__views.top.add($.__views.cellPhone);
    $.__views.number = Ti.UI.createView({
        height: Ti.UI.SIZE,
        top: "0dp",
        id: "number"
    });
    $.__views.top.add($.__views.number);
    $.__views.phoneNumberImage = Ti.UI.createImageView({
        image: "/images/smartAccident_phoneNumber.png",
        id: "phoneNumberImage"
    });
    $.__views.number.add($.__views.phoneNumberImage);
    $.__views.cellNumber = Ti.UI.createTextField({
        hintText: "09012345678",
        width: "170dp",
        left: "110dp",
        maxLength: "20",
        borderStyle: Ti.UI.INPUT_BORDERSTYLE_NONE,
        id: "cellNumber"
    });
    $.__views.number.add($.__views.cellNumber);
    $.__views.arrow = Ti.UI.createImageView({
        image: "/images/arrow.png",
        top: "10dp",
        id: "arrow"
    });
    $.__views.top.add($.__views.arrow);
    $.__views.call = Ti.UI.createImageView({
        image: "/images/smart_call.png",
        top: "10dp",
        id: "call"
    });
    $.__views.top.add($.__views.call);
    onCall ? $.__views.call.addEventListener("click", onCall) : __defers["$.__views.call!click!onCall"] = true;
    exports.destroy = function() {};
    _.extend($, $.__views);
    __defers["$.__views.runnable!click!clickRunnable"] && $.__views.runnable.addEventListener("click", clickRunnable);
    __defers["$.__views.notRunnable!click!clickNotRunnable"] && $.__views.notRunnable.addEventListener("click", clickNotRunnable);
    __defers["$.__views.call!click!onCall"] && $.__views.call.addEventListener("click", onCall);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;