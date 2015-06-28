System.register(['dash-core'], function (_export) {
    'use strict';

    var serviceLocator, baseLayout;

    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

    return {
        setters: [function (_dashCore) {
            serviceLocator = _dashCore.serviceLocator;
        }],
        execute: function () {
            baseLayout = (function () {
                function baseLayout() {
                    _classCallCheck(this, baseLayout);

                    this.components = [];
                }

                baseLayout.prototype.activate = function activate(dataContext) {
                    var _this = this;

                    this.dataContext = dataContext;

                    var modelLoader = serviceLocator.services.componentLoader;
                    modelLoader.loadComponentsForCompose(this.dataContext.componentsForCompose).then(function (c) {
                        c.forEach(function (com) {
                            _this.components.push(com);
                        });
                    });
                };

                return baseLayout;
            })();

            _export('baseLayout', baseLayout);
        }
    };
});