System.register(['dash-core', '../../layouts/baseLayout/baseLayout', '../../styles/dash-Component.css!css', '../../styles/floatLayout.css!css'], function (_export) {
    'use strict';

    var ServiceLocator, BaseLayout, Componentcss, FloatLayoutCss, FloatLayout;

    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

    function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

    return {
        setters: [function (_dashCore) {
            ServiceLocator = _dashCore.ServiceLocator;
        }, function (_layoutsBaseLayoutBaseLayout) {
            BaseLayout = _layoutsBaseLayoutBaseLayout.BaseLayout;
        }, function (_stylesDashComponentCssCss) {
            Componentcss = _stylesDashComponentCssCss.Componentcss;
        }, function (_stylesFloatLayoutCssCss) {
            FloatLayoutCss = _stylesFloatLayoutCssCss.FloatLayoutCss;
        }],
        execute: function () {
            FloatLayout = (function (_BaseLayout) {
                function FloatLayout() {
                    _classCallCheck(this, FloatLayout);

                    _BaseLayout.call(this);
                }

                _inherits(FloatLayout, _BaseLayout);

                FloatLayout.prototype.activate = function activate(dataContext) {
                    _BaseLayout.prototype.activate.call(this, dataContext);
                };

                return FloatLayout;
            })(BaseLayout);

            _export('FloatLayout', FloatLayout);
        }
    };
});