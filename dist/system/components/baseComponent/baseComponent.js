System.register(["dash-core"], function (_export) {
    "use strict";

    var serviceLocator, baseComponent;

    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

    return {
        setters: [function (_dashCore) {
            serviceLocator = _dashCore.serviceLocator;
        }],
        execute: function () {
            baseComponent = (function () {
                function baseComponent() {
                    _classCallCheck(this, baseComponent);

                    this.ConfigurationProperties = {};
                    this.LayoutInfo = null;

                    this.componentConfigurationSaver = new serviceLocator().getServices()["componentConfigurationSaver"];
                }

                baseComponent.prototype.activate = function activate(model) {
                    this.model = model;
                };

                return baseComponent;
            })();

            _export("baseComponent", baseComponent);
        }
    };
});