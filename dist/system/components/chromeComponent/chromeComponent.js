System.register(['dash-core', '../../styles/dash-Component.css!css'], function (_export) {
    'use strict';

    var serviceLocator, dashComponentCss, chromeComponent;

    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

    return {
        setters: [function (_dashCore) {
            serviceLocator = _dashCore.serviceLocator;
        }, function (_stylesDashComponentCssCss) {
            dashComponentCss = _stylesDashComponentCssCss.dashComponentCss;
        }],
        execute: function () {
            chromeComponent = (function () {
                function chromeComponent() {
                    _classCallCheck(this, chromeComponent);
                }

                chromeComponent.prototype.activate = function activate(model) {
                    this.model = model;
                };

                return chromeComponent;
            })();

            _export('chromeComponent', chromeComponent);
        }
    };
});