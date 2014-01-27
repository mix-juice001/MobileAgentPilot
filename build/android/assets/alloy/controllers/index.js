function Controller() {
    function toSmartAccident() {
        Alloy.createController("smartAccident").getView().open();
    }
    function toTokioMarineHomePage() {
        Ti.Platform.openURL("http://www.tokiomarine-nichido.co.jp");
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "index";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.index = Ti.UI.createWindow({
        backgroundImage: "/images/img_background.png",
        layout: "vertical",
        fullscreen: "true",
        id: "index"
    });
    $.__views.index && $.addTopLevelView($.__views.index);
    $.__views.view_header = Ti.UI.createView({
        width: "100%",
        height: Ti.UI.SIZE,
        top: "10dp",
        left: "10dp",
        id: "view_header"
    });
    $.__views.index.add($.__views.view_header);
    $.__views.header = Ti.UI.createImageView({
        image: "/images/img_moileAgent_String.png",
        id: "header"
    });
    $.__views.view_header.add($.__views.header);
    $.__views.__alloyId0 = Ti.UI.createView({
        width: "100%",
        height: Ti.UI.SIZE,
        top: "10dp",
        layout: "horizontal",
        id: "__alloyId0"
    });
    $.__views.index.add($.__views.__alloyId0);
    $.__views.contact = Ti.UI.createImageView({
        image: "/images/img_menu_contact.png",
        width: "50%",
        id: "contact"
    });
    $.__views.__alloyId0.add($.__views.contact);
    $.__views.smartAccident = Ti.UI.createImageView({
        image: "/images/img_menu_accident.png",
        width: "50%",
        id: "smartAccident"
    });
    $.__views.__alloyId0.add($.__views.smartAccident);
    toSmartAccident ? $.__views.smartAccident.addEventListener("click", toSmartAccident) : __defers["$.__views.smartAccident!click!toSmartAccident"] = true;
    $.__views.__alloyId1 = Ti.UI.createView({
        width: "100%",
        height: Ti.UI.SIZE,
        top: "10dp",
        layout: "horizontal",
        id: "__alloyId1"
    });
    $.__views.index.add($.__views.__alloyId1);
    $.__views.mypage = Ti.UI.createImageView({
        image: "/images/img_menu_mypage.png",
        width: "50%",
        id: "mypage"
    });
    $.__views.__alloyId1.add($.__views.mypage);
    $.__views.roadservice = Ti.UI.createImageView({
        image: "/images/img_menu_roadservice.png",
        width: "50%",
        id: "roadservice"
    });
    $.__views.__alloyId1.add($.__views.roadservice);
    $.__views.__alloyId2 = Ti.UI.createView({
        width: "100%",
        height: Ti.UI.SIZE,
        top: "10dp",
        layout: "horizontal",
        id: "__alloyId2"
    });
    $.__views.index.add($.__views.__alloyId2);
    $.__views.oneday = Ti.UI.createImageView({
        image: "/images/img_menu_oneday_insurance.png",
        width: "50%",
        id: "oneday"
    });
    $.__views.__alloyId2.add($.__views.oneday);
    $.__views.photo = Ti.UI.createImageView({
        image: "/images/img_menu_photo.png",
        width: "50%",
        id: "photo"
    });
    $.__views.__alloyId2.add($.__views.photo);
    $.__views.__alloyId3 = Ti.UI.createView({
        width: "100%",
        height: Ti.UI.SIZE,
        top: "10dp",
        layout: "horizontal",
        id: "__alloyId3"
    });
    $.__views.index.add($.__views.__alloyId3);
    $.__views.quake = Ti.UI.createImageView({
        image: "/images/img_menu_quakecheck.png",
        width: "50%",
        id: "quake"
    });
    $.__views.__alloyId3.add($.__views.quake);
    $.__views.note = Ti.UI.createImageView({
        image: "/images/img_menu_note.png",
        width: "50%",
        id: "note"
    });
    $.__views.__alloyId3.add($.__views.note);
    $.__views.__alloyId4 = Ti.UI.createView({
        width: "100%",
        height: Ti.UI.SIZE,
        top: "10dp",
        layout: "horizontal",
        id: "__alloyId4"
    });
    $.__views.index.add($.__views.__alloyId4);
    $.__views.profile = Ti.UI.createImageView({
        image: "/images/img_profile_none.png",
        width: "25%",
        id: "profile"
    });
    $.__views.__alloyId4.add($.__views.profile);
    $.__views.logo = Ti.UI.createImageView({
        image: "/images/img_tokiomarine_logo.png",
        width: "50%",
        id: "logo"
    });
    $.__views.__alloyId4.add($.__views.logo);
    toTokioMarineHomePage ? $.__views.logo.addEventListener("click", toTokioMarineHomePage) : __defers["$.__views.logo!click!toTokioMarineHomePage"] = true;
    $.__views.info = Ti.UI.createImageView({
        image: "/images/img_information.png",
        width: "25%",
        id: "info"
    });
    $.__views.__alloyId4.add($.__views.info);
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.index.open();
    __defers["$.__views.smartAccident!click!toSmartAccident"] && $.__views.smartAccident.addEventListener("click", toSmartAccident);
    __defers["$.__views.logo!click!toTokioMarineHomePage"] && $.__views.logo.addEventListener("click", toTokioMarineHomePage);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;