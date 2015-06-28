System.register(['dash-core'], function (_export) {
    'use strict';

    var serviceLocator, chromeComponent;

    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

    return {
        setters: [function (_dashCore) {
            serviceLocator = _dashCore.serviceLocator;
        }],
        execute: function () {
            chromeComponent = function chromeComponent() {
                _classCallCheck(this, chromeComponent);
            };

            _export('chromeComponent', chromeComponent);
        }
    };
});