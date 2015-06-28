System.register(['dash-core', './componentLoader', './componentModelLoader', './chromeComponentInfo', './componentLibrary', './components/baseComponent/baseComponent', './components/chromeComponent/chromeComponent', './layouts/baseLayout/baseLayout', './layouts/floatLayout/floatLayout'], function (_export) {
    'use strict';

    var serviceLocator, componentLoader, componentModelLoader, chromeComponentInfo;

    _export('configure', configure);

    function configure(aurelia) {}

    return {
        setters: [function (_dashCore) {
            serviceLocator = _dashCore.serviceLocator;
        }, function (_componentLoader) {
            componentLoader = _componentLoader.componentLoader;

            _export('componentLoader', _componentLoader.componentLoader);
        }, function (_componentModelLoader) {
            componentModelLoader = _componentModelLoader.componentModelLoader;

            _export('componentModelLoader', _componentModelLoader.componentModelLoader);
        }, function (_chromeComponentInfo) {
            chromeComponentInfo = _chromeComponentInfo.chromeComponentInfo;
        }, function (_componentLibrary) {
            _export('componentLibrary', _componentLibrary.componentLibrary);
        }, function (_componentsBaseComponentBaseComponent) {
            _export('baseComponent', _componentsBaseComponentBaseComponent.baseComponent);
        }, function (_componentsChromeComponentChromeComponent) {
            _export('chromeComponent', _componentsChromeComponentChromeComponent.chromeComponent);
        }, function (_layoutsBaseLayoutBaseLayout) {
            _export('baseLayout', _layoutsBaseLayoutBaseLayout.baseLayout);
        }, function (_layoutsFloatLayoutFloatLayout) {
            _export('floatLayout', _layoutsFloatLayoutFloatLayout.floatLayout);
        }],
        execute: function () {

            serviceLocator.services.componentLoader = new componentLoader();
            serviceLocator.services.componentModelLoader = new componentModelLoader();
            serviceLocator.services.chromeComponentInfo = new chromeComponentInfo();
        }
    };
});