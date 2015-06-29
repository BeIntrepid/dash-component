System.register(["dash-core"], function (_export) {
    "use strict";

    var ServiceLocator, BaseComponent;

    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

    return {
        setters: [function (_dashCore) {
            ServiceLocator = _dashCore.ServiceLocator;
        }],
        execute: function () {
            BaseComponent = (function () {
                function BaseComponent() {
                    _classCallCheck(this, BaseComponent);

                    this.configurationProperties = {};
                    this.layoutInfo = null;

                    this.componentConfigurationSaver = new ServiceLocator().getServices()["componentConfigurationSaver"];
                }

                BaseComponent.prototype.activate = function activate(model) {
                    this.model = model;
                };

                return BaseComponent;
            })();

            _export("BaseComponent", BaseComponent);
        }
    };
});