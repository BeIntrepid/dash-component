System.register(['./componentLibrary', 'dash-core'], function (_export) {
    'use strict';

    var componentLibrary, systemComponentLibrary, serviceLocator, componentModelLoader;

    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

    return {
        setters: [function (_componentLibrary) {
            componentLibrary = _componentLibrary.componentLibrary;
            systemComponentLibrary = _componentLibrary.systemComponentLibrary;
        }, function (_dashCore) {
            serviceLocator = _dashCore.serviceLocator;
        }],
        execute: function () {
            componentModelLoader = (function () {
                function componentModelLoader() {
                    _classCallCheck(this, componentModelLoader);

                    this.models = {};
                }

                componentModelLoader.prototype.loadComponentModel = function loadComponentModel(componentConfig) {
                    var p = new Promise(function (res, rej) {
                        res(models[componentConfig.id]);
                    });

                    return p;
                };

                componentModelLoader.prototype.loadComponentModels = function loadComponentModels(componentConfigs) {
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

                return componentModelLoader;
            })();

            _export('componentModelLoader', componentModelLoader);
        }
    };
});