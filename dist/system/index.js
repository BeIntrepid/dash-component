System.register(['./componentLibrary', './componentLoader', './componentModelLoader', './components/baseComponent/baseComponent'], function (_export) {
  'use strict';

  return {
    setters: [function (_componentLibrary) {
      _export('componentLibrary', _componentLibrary.componentLibrary);
    }, function (_componentLoader) {
      _export('componentLoader', _componentLoader.componentLoader);
    }, function (_componentModelLoader) {
      _export('componentModelLoader', _componentModelLoader.componentModelLoader);
    }, function (_componentsBaseComponentBaseComponent) {
      _export('baseComponent', _componentsBaseComponentBaseComponent.baseComponent);
    }],
    execute: function () {}
  };
});