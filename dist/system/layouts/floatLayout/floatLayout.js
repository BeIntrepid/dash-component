System.register(['dash-core', '../../layouts/baseLayout/baseLayout'], function (_export) {
    'use strict';

    var serviceLocator, baseLayout, floatLayout;

    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

    function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

    return {
        setters: [function (_dashCore) {
            serviceLocator = _dashCore.serviceLocator;
        }, function (_layoutsBaseLayoutBaseLayout) {
            baseLayout = _layoutsBaseLayoutBaseLayout.baseLayout;
        }],
        execute: function () {
            floatLayout = (function (_baseLayout) {
                function floatLayout() {
                    _classCallCheck(this, floatLayout);

                    _baseLayout.call(this);
                }

                _inherits(floatLayout, _baseLayout);

                floatLayout.prototype.activate = function activate(dataContext) {
                    _baseLayout.prototype.activate.call(this, dataContext);
                };

                return floatLayout;
            })(baseLayout);

            _export('floatLayout', floatLayout);
        }
    };
});