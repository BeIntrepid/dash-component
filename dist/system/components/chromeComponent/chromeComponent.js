System.register(['dash-core', '../../styles/dash-Component.css!css'], function (_export) {
    'use strict';

    var ServiceLocator, DashComponentCss, ChromeComponent;

    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

    return {
        setters: [function (_dashCore) {
            ServiceLocator = _dashCore.ServiceLocator;
        }, function (_stylesDashComponentCssCss) {
            DashComponentCss = _stylesDashComponentCssCss.DashComponentCss;
        }],
        execute: function () {
            ChromeComponent = (function () {
                function ChromeComponent() {
                    _classCallCheck(this, ChromeComponent);
                }

                ChromeComponent.prototype.activate = function activate(model) {
                    this.model = model;
                };

                return ChromeComponent;
            })();

            _export('ChromeComponent', ChromeComponent);
        }
    };
});