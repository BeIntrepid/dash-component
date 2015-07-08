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
                                }

                                BaseAreaLoader.prototype.loadAreaConfiguration = function loadAreaConfiguration(id) {
                                        var mockAreaResponse = new AreaConfiguration();

                                        mockAreaResponse.areaLayout = new AreaLayout();
                                        mockAreaResponse.areaLayout.viewModel = 'dash-component/layouts/floatLayout/floatLayout';

                                        var layoutConfig = new LayoutConfiguration();
                                        layoutConfig.viewModel = 'dash-component/layouts/floatLayout/floatLayout';
                                        layoutConfig.componentsForCompose = [{ id: 1, viewModel: 'dash-github/components/singleValueComponent/gitSingleValueComponent' }, { id: 1, viewModel: 'dash-github/components/imageGrid/imageGrid' }];

                                        mockAreaResponse.layouts.push(layoutConfig);

                                        layoutConfig = new LayoutConfiguration();
                                        layoutConfig.viewModel = 'dash-component/layouts/floatLayout/floatLayout';
                                        layoutConfig.componentsForCompose = [{ id: 1, viewModel: 'components/testComponent/testComponent' }, { id: 1, viewModel: 'components/testComponent/testComponent' }, { id: 1, viewModel: 'components/testComponent/testComponent' }, { id: 1, viewModel: 'components/testComponent/testComponent' }, { id: 1, viewModel: 'components/testComponent/testComponent' }, { id: 1, viewModel: 'components/testComponent/testComponent' }, { id: 1, viewModel: 'components/testComponent/testComponent' }, { id: 1, viewModel: 'components/testComponent/testComponent' }, { id: 1, viewModel: 'components/testComponent/testComponent' }, { id: 1, viewModel: 'components/testComponent/testComponent' }, { id: 1, viewModel: 'components/testComponent/testComponent' }];

                                        mockAreaResponse.layouts.push(layoutConfig);

                                        return Promise.resolve(mockAreaResponse);
                                };

                                return BaseAreaLoader;
                        })();

                        _export('BaseAreaLoader', BaseAreaLoader);
                }
        };
});