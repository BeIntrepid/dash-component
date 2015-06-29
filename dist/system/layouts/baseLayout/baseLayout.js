System.register(['dash-core'], function (_export) {
    'use strict';

    var ServiceLocator, BaseLayout;

    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

    return {
        setters: [function (_dashCore) {
            ServiceLocator = _dashCore.ServiceLocator;
        }],
        execute: function () {
            BaseLayout = (function () {
                function BaseLayout() {
                    _classCallCheck(this, BaseLayout);

                    this.components = [];
                }

                BaseLayout.prototype.activate = function activate(dataContext) {
                    var _this = this;

                    this.dataContext = dataContext;

                    var modelLoader = ServiceLocator.services.componentLoader;
                    modelLoader.loadComponentsForCompose(this.dataContext.componentsForCompose).then(function (c) {
                        c.forEach(function (com) {
                            _this.components.push(com);
                        });
                    });
                };

                return BaseLayout;
            })();

            _export('BaseLayout', BaseLayout);
        }
    };
});