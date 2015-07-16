System.register(['./areas/AreaConfiguration'], function (_export) {
    'use strict';

    var AreaConfiguration, AreaLayout, LayoutConfiguration, BaseAreaLoader;

    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

    return {
        setters: [function (_areasAreaConfiguration) {
            AreaConfiguration = _areasAreaConfiguration.AreaConfiguration;
            AreaLayout = _areasAreaConfiguration.AreaLayout;
            LayoutConfiguration = _areasAreaConfiguration.LayoutConfiguration;
        }],
        execute: function () {
            BaseAreaLoader = (function () {
                function BaseAreaLoader() {
                    _classCallCheck(this, BaseAreaLoader);

                    this._areaConfigurations = {};
                }

                BaseAreaLoader.prototype.addAreaConfiguration = function addAreaConfiguration(id, areaConfig) {
                    this._areaConfigurations[id] = areaConfig;
                };

                BaseAreaLoader.prototype.loadAreaConfiguration = function loadAreaConfiguration(id) {
                    return Promise.resolve(this._areaConfigurations[id]);
                };

                return BaseAreaLoader;
            })();

            _export('BaseAreaLoader', BaseAreaLoader);
        }
    };
});