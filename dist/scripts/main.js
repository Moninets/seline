"use strict";!function(e){!function(){function n(){var n=e("#banner-slider .slick-current").data("slick-index")+1;e("#banner-slider .ba-current-position").text("0"+n)}e(window).on("load",function(){e("#banner-slider").slick({slide:".ba-slide",prevArrow:"#banner-slider .ba-slider__arrow--left",nextArrow:"#banner-slider .ba-slider__arrow--right",dots:!0}),n(),e("#banner-slider").on("afterChange",function(){n()})})}()}(jQuery);
//# sourceMappingURL=main.js.map