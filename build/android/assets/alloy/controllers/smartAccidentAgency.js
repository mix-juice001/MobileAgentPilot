function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "smartAccidentAgency";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.win = Ti.UI.createWindow({
        id: "win",
        fullscreen: "true"
    });
    $.__views.win && $.addTopLevelView($.__views.win);
    $.__views.top = Ti.UI.createView({
        id: "top"
    });
    $.__views.win.add($.__views.top);
    $.__views.header = Ti.UI.createView({
        id: "header"
    });
    $.__views.top.add($.__views.header);
    $.__views.smartAccidentLogo = Ti.UI.createImageView({
        id: "smartAccidentLogo"
    });
    $.__views.header.add($.__views.smartAccidentLogo);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;