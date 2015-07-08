System.register([], function (_export) {
    "use strict";

    var AreaConfiguration, AreaLayout, LayoutConfiguration;

    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

    return {
        setters: [],
        execute: function () {
            AreaConfiguration = function AreaConfiguration() {
                _classCallCheck(this, AreaConfiguration);

                this.areaLayout = null;
                this.layouts = [];
            };

            _export("AreaConfiguration", AreaConfiguration);

            AreaLayout = function AreaLayout() {
                _classCallCheck(this, AreaLayout);

                this.configuration = null;
                this.viewModel = null;
            };

            _export("AreaLayout", AreaLayout);

            LayoutConfiguration = function LayoutConfiguration() {
                _classCallCheck(this, LayoutConfiguration);

                this.dataContext = null;
                this.viewModel = null;
                this.componentsForCompose = [];
            };

            _export("LayoutConfiguration", LayoutConfiguration);
        }
    };
});