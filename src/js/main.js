(function($) {

    'use strict';

    var App = {

        /**
         * Init
         */
        init: function() {
            App.feature();
        },

        /**
         * Feature
         */
        feature: function() {
            $.i18n.properties({
                name: 'Messages',
                path: 'bundle/',
                mode: 'both',
                language: 'vi',
                callback: function() {
                    $("#lWelcome").text($.i18n.prop('lWelcome'));
                    $("#lSelLang").text($.i18n.prop('lSelLang', 'vi'));
                    $('#txtlb').text($.i18n.prop('txtlb'));
                }
            });
            //mobile menu toggling
            $("#menu_icon").click(function() {
                $("header nav ul").toggleClass("show_menu");
                $("#menu_icon").toggleClass("close_menu");
                return false;
            });

            //Tooltip
            $("a").mouseover(function() {

                var attr_title = $(this).attr("data-title");
                if (attr_title === undefined || attr_title === '') { return false; }

                $(this).after('<span class="tooltip"></span>');

                var tooltip = $(".tooltip");
                tooltip.append($(this).data('title'));


                var tipwidth = tooltip.outerWidth();
                var a_width = $(this).width();
                var a_hegiht = $(this).height() + 3 + 4;

                //if the tooltip width is smaller than the a/link/parent width
                if (tipwidth < a_width) {
                    tipwidth = a_width;
                    $('.tooltip').outerWidth(tipwidth);
                }

                tipwidth = '-' + (tipwidth - a_width) / 2;
                $('.tooltip').css({
                    'left': tipwidth + 'px',
                    'bottom': a_hegiht + 'px'
                }).stop().animate({
                    opacity: 1
                }, 200);
            });
            $("a").mouseout(function() {
                var tooltip = $(".tooltip");
                tooltip.remove();
            });
            // Scroll Events
            var windowHeight = document.body.clientHeight;
            var gridTop = windowHeight * 0.1;
            var gridBottom = windowHeight * 2;
            $(window).on('scroll', function() {
                $('button').each(function() {
                    var thisTop = $(this).offset().top - $(window).scrollTop();
                    if (thisTop >= gridTop && (thisTop + $(this).height()) <= gridBottom) {
                        $(this).addClass('animated');
                    } else {
                        $(this).removeClass('animated');
                    }
                });
            });
            $(window).trigger('scroll');

        }

    };
    $(function() {
        App.init();
    });

})(jQuery);