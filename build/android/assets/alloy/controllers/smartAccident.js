function Controller() {
    function doClick() {
        alert($.address.text);
    }
    function toAgency() {
        Alloy.createController("smartAccidentAgency").getView().open();
    }
    function toTokiomarine() {
        Alloy.createController("smartAccidentTokioMarine").getView().open();
    }
    function toHP() {
        Ti.Platform.openURL("https://ecom.tokiomarine-nichido.co.jp/HT081/002/jiko");
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "smartAccident";
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
    doClick ? $.__views.smartAccidentLogo.addEventListener("cLick", doClick) : __defers["$.__views.smartAccidentLogo!cLick!doClick"] = true;
    $.__views.buttonView = Ti.UI.createView({
        width: "100%",
        height: Ti.UI.SIZE,
        layout: "vertical",
        top: "60dp",
        id: "buttonView"
    });
    $.__views.top.add($.__views.buttonView);
    $.__views.contact2Agency = Ti.UI.createImageView({
        image: "/images/smartAccident_contactAgencyButton.png",
        id: "contact2Agency"
    });
    $.__views.buttonView.add($.__views.contact2Agency);
    toAgency ? $.__views.contact2Agency.addEventListener("click", toAgency) : __defers["$.__views.contact2Agency!click!toAgency"] = true;
    $.__views.contact2Tokiomarine = Ti.UI.createImageView({
        image: "/images/smartAccident_contactTokiomarine.png",
        top: "20dp",
        id: "contact2Tokiomarine"
    });
    $.__views.buttonView.add($.__views.contact2Tokiomarine);
    toTokiomarine ? $.__views.contact2Tokiomarine.addEventListener("click", toTokiomarine) : __defers["$.__views.contact2Tokiomarine!click!toTokiomarine"] = true;
    $.__views.contact2HP = Ti.UI.createImageView({
        image: "/images/smartAccident_contactHomepage.png",
        top: "20dp",
        id: "contact2HP"
    });
    $.__views.buttonView.add($.__views.contact2HP);
    toHP ? $.__views.contact2HP.addEventListener("click", toHP) : __defers["$.__views.contact2HP!click!toHP"] = true;
    $.__views.hp_msg = Ti.UI.createLabel({
        top: "10dp",
        color: "#919191",
        textAlign: "center",
        text: "〈聴覚障がい者のお客様へ〉\nホームページから事故をご連絡いただけます。",
        id: "hp_msg"
    });
    $.__views.top.add($.__views.hp_msg);
    $.__views.address = Ti.UI.createLabel({
        top: "20dp",
        text: "address",
        id: "address"
    });
    $.__views.top.add($.__views.address);
    $.__views.footer = Ti.UI.createView({
        width: "100%",
        height: Ti.UI.SIZE,
        layout: "horizontal",
        bottom: "0dp",
        id: "footer"
    });
    $.__views.win.add($.__views.footer);
    $.__views.incident = Ti.UI.createImageView({
        image: "/images/smartAccident_incident.png",
        id: "incident"
    });
    $.__views.footer.add($.__views.incident);
    $.__views.memo = Ti.UI.createImageView({
        image: "/images/smartAccident_memo.png",
        id: "memo"
    });
    $.__views.footer.add($.__views.memo);
    $.__views.navi = Ti.UI.createImageView({
        image: "/images/smartAccident_navi.png",
        id: "navi"
    });
    $.__views.footer.add($.__views.navi);
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.win.addEventListener("focus", function() {
        Titanium.Geolocation.getCurrentPosition(function(e) {
            if (e.error) {
                alert("erroe");
                Ti.API.error(e.error);
                return;
            }
            e.coords;
            lng = e.coords.longitude;
            lat = e.coords.latitude;
            Titanium.Geolocation.reverseGeocoder(lat, lng, function(a) {
                $.address.text = "〈現在地〉\n" + a.places[0].address;
            });
        });
    });
    __defers["$.__views.smartAccidentLogo!cLick!doClick"] && $.__views.smartAccidentLogo.addEventListener("cLick", doClick);
    __defers["$.__views.contact2Agency!click!toAgency"] && $.__views.contact2Agency.addEventListener("click", toAgency);
    __defers["$.__views.contact2Tokiomarine!click!toTokiomarine"] && $.__views.contact2Tokiomarine.addEventListener("click", toTokiomarine);
    __defers["$.__views.contact2HP!click!toHP"] && $.__views.contact2HP.addEventListener("click", toHP);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;