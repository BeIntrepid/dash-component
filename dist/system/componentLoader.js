System.register(['./componentLibrary', 'dash-core'], function (_export) {
    'use strict';

    var ComponentLibrary, ServiceLocator, ComponentLoader;

    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

    return {
        setters: [function (_componentLibrary) {
            ComponentLibrary = _componentLibrary.ComponentLibrary;
        }, function (_dashCore) {
            ServiceLocator = _dashCore.ServiceLocator;
        }],
        execute: function () {
            ComponentLoader = (function () {
                function ComponentLoader() {
                    _classCallCheck(this, ComponentLoader);

                    this.library = new ComponentLibrary();
                }

                ComponentLoader.prototype.getComponent = function getComponent(name) {
                    return this.library.getComponent(name);
                };

                ComponentLoader.prototype.wrapComponentInChrome = function wrapComponentInChrome(innerComponent) {
                    return { viewModel: ServiceLocator.services.chromeComponentInfo.path, model: innerComponent };
                };

                ComponentLoader.prototype.loadComponentsForCompose = function loadComponentsForCompose(componentList) {
                    var _this = this;

                    var p = new Promise(function (res, rej) {

                        var modelLoader = ServiceLocator.services.componentModelLoader;

                        modelLoader.loadComponentModels(componentList).then(function (modelLoadResult) {
                            var composeResult = [];

                            modelLoadResult.forEach(function (m) {
                                composeResult.push(_this.wrapComponentInChrome({ viewModel: m.config.viewModel, model: m.model }));
                            });

                            res(composeResult);
                        });
                    });

                    return p;
                };

                return ComponentLoader;
            })();

            _export('ComponentLoader', ComponentLoader);
        }
    };
});