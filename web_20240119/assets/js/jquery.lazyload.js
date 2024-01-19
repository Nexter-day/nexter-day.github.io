/*!
 * Lazy Load - jQuery plugin for lazy loading images
 *
 * Copyright (c) 2007-2015 Mika Tuupola
 *
 * Licensed under the MIT license:
 *   http://www.opensource.org/licenses/mit-license.php
 *
 * Project home:
 *   http://www.appelsiini.net/projects/lazyload
 *
 * Version:  1.9.7
 *
 */

(function($, window, document, undefined) {
    var $window = $(window);

    $.fn.lazyload = function(options) {
        var elements = this;
        var $container;
        var settings = {
            threshold       : 0,
            failure_limit   : 0,
            event           : "scroll",
            effect          : "show",
            container       : window,
            data_attribute  : "original",
            skip_invisible  : false,
            appear          : null,
            load            : null,
            placeholder     : "data:image/gif;base64,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"
            // placeholder     : "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAANSURBVBhXYzh8+PB/AAffA0nNPuCLAAAAAElFTkSuQmCC"
        };

        function update() {
            var counter = 0;

            elements.each(function() {
                var $this = $(this);
                if (settings.skip_invisible && !$this.is(":visible")) {
                    return;
                }
                if ($.abovethetop(this, settings) ||
                    $.leftofbegin(this, settings)) {
                        /* Nothing. */
                } else if (!$.belowthefold(this, settings) &&
                    !$.rightoffold(this, settings)) {
                        $this.trigger("appear");
                        /* if we found an image we'll load, reset the counter */
                        counter = 0;
                } else {
                    if (++counter > settings.failure_limit) {
                        return false;
                    }
                }
            });

        }

        if(options) {
            /* Maintain BC for a couple of versions. */
            if (undefined !== options.failurelimit) {
                options.failure_limit = options.failurelimit;
                delete options.failurelimit;
            }
            if (undefined !== options.effectspeed) {
                options.effect_speed = options.effectspeed;
                delete options.effectspeed;
            }

            $.extend(settings, options);
        }

        /* Cache container as jQuery as object. */
        $container = (settings.container === undefined ||
                      settings.container === window) ? $window : $(settings.container);

        /* Fire one scroll event per scroll. Not one scroll event per image. */
        if (0 === settings.event.indexOf("scroll")) {
            $container.on(settings.event, function() {
                return update();
            });
        }

        this.each(function() {
            var self = this;
            var $self = $(self);

            self.loaded = false;

            /* If no src attribute given use data:uri. */
            if ($self.attr("src") === undefined || $self.attr("src") === false) {
                if ($self.is("img")) {
                    $self.attr("src", settings.placeholder);
                }
            }

            /* When appear is triggered load original image. */
            $self.one("appear", function() {
                if (!this.loaded) {
                    if (settings.appear) {
                        var elements_left = elements.length;
                        settings.appear.call(self, elements_left, settings);
                    }
                    $("<img />")
                        .one("load", function() {
                            var original = $self.attr("data-" + settings.data_attribute);
                            $self.hide();
                            if ($self.is("img")) {
                                $self.attr("src", original);
                            } else {
                                $self.css("background-image", "url('" + original + "')");
                            }
                            $self[settings.effect](settings.effect_speed);

                            self.loaded = true;

                            /* Remove image from array so it is not looped next time. */
                            var temp = $.grep(elements, function(element) {
                                return !element.loaded;
                            });
                            elements = $(temp);

                            if (settings.load) {
                                var elements_left = elements.length;
                                settings.load.call(self, elements_left, settings);
                            }
                        })
                        .attr("src", $self.attr("data-" + settings.data_attribute));
                }
            });

            /* When wanted event is triggered load original image */
            /* by triggering appear.                              */
            if (0 !== settings.event.indexOf("scroll")) {
                $self.on(settings.event, function() {
                    if (!self.loaded) {
                        $self.trigger("appear");
                    }
                });
            }
        });

        /* Check if something appears when window is resized. */
        $window.on("resize", function() {
            update();
        });

        /* With IOS5 force loading images when navigating with back button. */
        /* Non optimal workaround. */
        if ((/(?:iphone|ipod|ipad).*os 5/gi).test(navigator.appVersion)) {
            $window.on("pageshow", function(event) {
                if (event.originalEvent && event.originalEvent.persisted) {
                    elements.each(function() {
                        $(this).trigger("appear");
                    });
                }
            });
        }

        /* Force initial check if images should appear. */
        $(document).ready(function() {
            update();
        });

        return this;
    };

    /* Convenience methods in jQuery namespace.           */
    /* Use as  $.belowthefold(element, {threshold : 100, container : window}) */

    $.belowthefold = function(element, settings) {
        var fold;

        if (settings.container === undefined || settings.container === window) {
            fold = (window.innerHeight ? window.innerHeight : $window.height()) + $window.scrollTop();
        } else {
            fold = $(settings.container).offset().top + $(settings.container).height();
        }

        return fold <= $(element).offset().top - settings.threshold;
    };

    $.rightoffold = function(element, settings) {
        var fold;

        if (settings.container === undefined || settings.container === window) {
            fold = $window.width() + $window.scrollLeft();
        } else {
            fold = $(settings.container).offset().left + $(settings.container).width();
        }

        return fold <= $(element).offset().left - settings.threshold;
    };

    $.abovethetop = function(element, settings) {
        var fold;

        if (settings.container === undefined || settings.container === window) {
            fold = $window.scrollTop();
        } else {
            fold = $(settings.container).offset().top;
        }

        return fold >= $(element).offset().top + settings.threshold  + $(element).height();
    };

    $.leftofbegin = function(element, settings) {
        var fold;

        if (settings.container === undefined || settings.container === window) {
            fold = $window.scrollLeft();
        } else {
            fold = $(settings.container).offset().left;
        }

        return fold >= $(element).offset().left + settings.threshold + $(element).width();
    };

    $.inviewport = function(element, settings) {
         return !$.rightoffold(element, settings) && !$.leftofbegin(element, settings) &&
                !$.belowthefold(element, settings) && !$.abovethetop(element, settings);
     };

    /* Custom selectors for your convenience.   */
    /* Use as $("img:below-the-fold").something() or */
    /* $("img").filter(":below-the-fold").something() which is faster */

    $.extend($.expr[":"], {
        "below-the-fold" : function(a) { return $.belowthefold(a, {threshold : 0}); },
        "above-the-top"  : function(a) { return !$.belowthefold(a, {threshold : 0}); },
        "right-of-screen": function(a) { return $.rightoffold(a, {threshold : 0}); },
        "left-of-screen" : function(a) { return !$.rightoffold(a, {threshold : 0}); },
        "in-viewport"    : function(a) { return $.inviewport(a, {threshold : 0}); },
        /* Maintain BC for couple of versions. */
        "above-the-fold" : function(a) { return !$.belowthefold(a, {threshold : 0}); },
        "right-of-fold"  : function(a) { return $.rightoffold(a, {threshold : 0}); },
        "left-of-fold"   : function(a) { return !$.rightoffold(a, {threshold : 0}); }
    });

})(jQuery, window, document);
