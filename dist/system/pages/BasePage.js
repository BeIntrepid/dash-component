System.register(['dash-core'], function (_export) {
    'use strict';

    var ServiceLocator, BasePage;

    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

    return {
        setters: [function (_dashCore) {
            ServiceLocator = _dashCore.ServiceLocator;
        }],
        execute: function () {
            BasePage = (function () {
                function BasePage() {
                    _classCallCheck(this, BasePage);

                    this.layout = {};
                }

                BasePage.prototype.attached = function attached() {
                    var _this = this;

                    var areaLoader = ServiceLocator.services.areaLoader;
                    areaLoader.loadAreaConfiguration('IDNOTWORKINGYET').then(function (areaConfig) {
                        _this.layout.path = areaConfig.areaLayout.viewModel;
                        _this.layout.model = areaConfig;
                    });
                };

                return BasePage;
            })();

            _export('BasePage', BasePage);
        }
    };
});