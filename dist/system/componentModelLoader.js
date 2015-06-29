System.register(['./componentLibrary', 'dash-core'], function (_export) {
    'use strict';

    var ComponentLibrary, ServiceLocator, ComponentModelLoader;

    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

    return {
        setters: [function (_componentLibrary) {
            ComponentLibrary = _componentLibrary.ComponentLibrary;
        }, function (_dashCore) {
            ServiceLocator = _dashCore.ServiceLocator;
        }],
        execute: function () {
            ComponentModelLoader = (function () {
                function ComponentModelLoader() {
                    _classCallCheck(this, ComponentModelLoader);

                    this.models = {};
                }

                ComponentModelLoader.prototype.loadComponentModel = function loadComponentModel(componentConfig) {
                    var p = new Promise(function (res, rej) {
                        res(models[componentConfig.id]);
                    });

                    return p;
                };

                ComponentModelLoader.prototype.loadComponentModels = function loadComponentModels(componentConfigs) {
                    var _this = this;

                    var p = new Promise(function (res, rej) {

                        var modelsToReturn = [];

                        componentConfigs.forEach(function (c) {
                            modelsToReturn.push({ config: c, model: _this.models[c.id] });
                        });
                        res(modelsToReturn);
                    });

                    return p;
                };

                return ComponentModelLoader;
            })();

            _export('ComponentModelLoader', ComponentModelLoader);
        }
    };
});