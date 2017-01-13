(function ($) {
    "use strict";

    $(document).ready(function() {

        $(".switch-btn").on("click", function () {
            var e = this.io ^= 1;
            $(".switcher").animate({right: e ? 0 : -180}, "medium");
        });

        /*Color sheets Switching
         * -----------------------------------------------------------------------------------------------------------*/
        $("#c-red").on('click', function() {
            $("#color-switcher").attr('href','assets/stylesheets/style-red.css');
        });

        $("#c-pink").on('click', function() {
            $("#color-switcher").attr('href','assets/stylesheets/style-pink.css');
        });

        $("#c-indigo").on('click', function() {
            $("#color-switcher").attr('href','assets/stylesheets/style-indigo.css');
        });

        $("#c-blue").on('click', function() {
            $("#color-switcher").attr('href','assets/stylesheets/style-blue.css');
        });

        $("#c-cyan").on('click', function() {
            $("#color-switcher").attr('href','assets/stylesheets/style-cyan.css');
        });

        $("#c-green").on('click', function() {
            $("#color-switcher").attr('href','assets/stylesheets/style-green.css');
        });

        $("#c-amber").on('click', function() {
            $("#color-switcher").attr('href','assets/stylesheets/style-amber.css');
        });
        $("#c-orange").on('click', function() {
            $("#color-switcher").attr('href','assets/stylesheets/style-orange.css');
        });

    });

})(jQuery);