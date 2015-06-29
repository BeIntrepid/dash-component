System.register([], function (_export) {
    "use strict";

    var ComponentLibrary;

    var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

    return {
        setters: [],
        execute: function () {
            ComponentLibrary = (function () {
                function ComponentLibrary() {
                    _classCallCheck(this, ComponentLibrary);
                }

                ComponentLibrary.prototype.getComponent = function getComponent(name) {
                    return Promise.resolve(componentLibrary.components[name]);
                };

                _createClass(ComponentLibrary, null, [{
                    key: "collections",
                    value: {},
                    enumerable: true
                }]);

                return ComponentLibrary;
            })();

            _export("ComponentLibrary", ComponentLibrary);
        }
    };
});