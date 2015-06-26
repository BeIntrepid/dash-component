System.register(['./componentLibrary', 'dash-core'], function (_export) {
    'use strict';

    var componentLibrary, systemComponentLibrary, serviceLocator, componentLoader;

    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

    return {
        setters: [function (_componentLibrary) {
            componentLibrary = _componentLibrary.componentLibrary;
            systemComponentLibrary = _componentLibrary.systemComponentLibrary;
        }, function (_dashCore) {
            serviceLocator = _dashCore.serviceLocator;
        }],
        execute: function () {
            componentLoader = (function () {
                function componentLoader() {
                    _classCallCheck(this, componentLoader);

                    this.library = new componentLibrary();
                }

                componentLoader.prototype.getComponent = function getComponent(name) {
                    return this.library.getComponent(name);
                };

                componentLoader.prototype.loadComponentsForCompose = function loadComponentsForCompose(componentList) {

                    var p = new Promise(function (res, rej) {

                        var modelLoader = serviceLocator.services.componentModelLoader;

                        modelLoader.loadComponentModels(componentList).then(function (modelLoadResult) {
                            var composeResult = [];

                            modelLoadResult.forEach(function (m) {
                                composeResult.push({ viewModel: m.config.viewModel, model: m.model });
                            });

                            res(composeResult);
                        });
                    });

                    return p;
                };

                componentLoader.prototype.loadComponent = function loadComponent(componentConfig) {
                    var _this = this;

                    var p = new Promise(function (res, rej) {

                        _this.library.getComponent(componentConfig.type).then(function (module) {
                            var component = new module[componentConfig.name]();
                            res(component);
                        });
                    });

                    return p;
                };

                return componentLoader;
            })();

            _export('componentLoader', componentLoader);
        }
    };
});