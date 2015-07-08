System.register(['dash-core', '../../areas/AreaConfiguration'], function (_export) {
    'use strict';

    var ServiceLocator, AreaConfiguration, LayoutConfiguration, BaseLayout;

    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

    return {
        setters: [function (_dashCore) {
            ServiceLocator = _dashCore.ServiceLocator;
        }, function (_areasAreaConfiguration) {
            AreaConfiguration = _areasAreaConfiguration.AreaConfiguration;
            LayoutConfiguration = _areasAreaConfiguration.LayoutConfiguration;
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

                    if (dataContext instanceof AreaConfiguration) {
                        dataContext.layouts.forEach(function (com) {
                            _this.components.push({ viewModel: com.viewModel, model: com });
                        });
                        return;
                    }

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