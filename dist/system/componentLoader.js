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

                    this.library = new systemComponentLibrary();
                }

                componentLoader.prototype.getComponent = function getComponent(name) {
                    return this.library.getComponent(name);
                };

                return componentLoader;
            })();

            _export('componentLoader', componentLoader);
        }
    };
});