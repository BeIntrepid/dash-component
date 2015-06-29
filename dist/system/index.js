System.register(['dash-core', './componentLoader', './componentModelLoader', './chromeComponentInfo', './componentLibrary', './components/baseComponent/BaseComponent', './components/chromeComponent/ChromeComponent', './layouts/baseLayout/baseLayout', './layouts/floatLayout/floatLayout'], function (_export) {
    'use strict';

    var ServiceLocator, ComponentLoader, ComponentModelLoader, ChromeComponentInfo;

    _export('configure', configure);

    function configure(aurelia) {}

    return {
        setters: [function (_dashCore) {
            ServiceLocator = _dashCore.ServiceLocator;
        }, function (_componentLoader) {
            ComponentLoader = _componentLoader.ComponentLoader;

            _export('ComponentLoader', _componentLoader.ComponentLoader);
        }, function (_componentModelLoader) {
            ComponentModelLoader = _componentModelLoader.ComponentModelLoader;

            _export('ComponentModelLoader', _componentModelLoader.ComponentModelLoader);
        }, function (_chromeComponentInfo) {
            ChromeComponentInfo = _chromeComponentInfo.ChromeComponentInfo;
        }, function (_componentLibrary) {
            _export('ComponentLibrary', _componentLibrary.ComponentLibrary);
        }, function (_componentsBaseComponentBaseComponent) {
            _export('BaseComponent', _componentsBaseComponentBaseComponent.BaseComponent);
        }, function (_componentsChromeComponentChromeComponent) {
            _export('ChromeComponent', _componentsChromeComponentChromeComponent.ChromeComponent);
        }, function (_layoutsBaseLayoutBaseLayout) {
            _export('BaseLayout', _layoutsBaseLayoutBaseLayout.BaseLayout);
        }, function (_layoutsFloatLayoutFloatLayout) {
            _export('FloatLayout', _layoutsFloatLayoutFloatLayout.FloatLayout);
        }],
        execute: function () {

            ServiceLocator.services.componentLoader = new ComponentLoader();
            ServiceLocator.services.componentModelLoader = new ComponentModelLoader();
            ServiceLocator.services.chromeComponentInfo = new ChromeComponentInfo();
        }
    };
});