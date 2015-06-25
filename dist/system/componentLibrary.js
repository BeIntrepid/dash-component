System.register([], function (_export) {
    'use strict';

    var componentLibrary, systemComponentLibrary;

    var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

    return {
        setters: [],
        execute: function () {
            componentLibrary = (function () {
                function componentLibrary() {
                    _classCallCheck(this, componentLibrary);
                }

                componentLibrary.prototype.getComponent = function getComponent(name) {
                    return componentLibrary.components[name];
                };

                _createClass(componentLibrary, null, [{
                    key: 'components',
                    value: {},
                    enumerable: true
                }]);

                return componentLibrary;
            })();

            _export('componentLibrary', componentLibrary);

            systemComponentLibrary = (function () {
                function systemComponentLibrary() {
                    _classCallCheck(this, systemComponentLibrary);
                }

                systemComponentLibrary.prototype.getComponent = function getComponent(name) {
                    return System['import'](name);
                };

                return systemComponentLibrary;
            })();

            _export('systemComponentLibrary', systemComponentLibrary);
        }
    };
});