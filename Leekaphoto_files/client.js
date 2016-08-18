function FastClick(a) {
    "use strict";
    var b, c = this;
    if (this.trackingClick = !1, this.trackingClickStart = 0, this.targetElement = null, this.touchStartX = 0, this.touchStartY = 0, this.lastTouchIdentifier = 0, this.touchBoundary = 10, this.layer = a, !a || !a.nodeType) throw new TypeError("Layer must be a document node");
    this.onClick = function() {
        return FastClick.prototype.onClick.apply(c, arguments)
    }, this.onMouse = function() {
        return FastClick.prototype.onMouse.apply(c, arguments)
    }, this.onTouchStart = function() {
        return FastClick.prototype.onTouchStart.apply(c, arguments)
    }, this.onTouchMove = function() {
        return FastClick.prototype.onTouchMove.apply(c, arguments)
    }, this.onTouchEnd = function() {
        return FastClick.prototype.onTouchEnd.apply(c, arguments)
    }, this.onTouchCancel = function() {
        return FastClick.prototype.onTouchCancel.apply(c, arguments)
    }, FastClick.notNeeded(a) || (this.deviceIsAndroid && (a.addEventListener("mouseover", this.onMouse, !0), a.addEventListener("mousedown", this.onMouse, !0), a.addEventListener("mouseup", this.onMouse, !0)), a.addEventListener("click", this.onClick, !0), a.addEventListener("touchstart", this.onTouchStart, !1), a.addEventListener("touchmove", this.onTouchMove, !1), a.addEventListener("touchend", this.onTouchEnd, !1), a.addEventListener("touchcancel", this.onTouchCancel, !1), Event.prototype.stopImmediatePropagation || (a.removeEventListener = function(b, c, d) {
        var e = Node.prototype.removeEventListener;
        "click" === b ? e.call(a, b, c.hijacked || c, d) : e.call(a, b, c, d)
    }, a.addEventListener = function(b, c, d) {
        var e = Node.prototype.addEventListener;
        "click" === b ? e.call(a, b, c.hijacked || (c.hijacked = function(a) {
            a.propagationStopped || c(a)
        }), d) : e.call(a, b, c, d)
    }), "function" == typeof a.onclick && (b = a.onclick, a.addEventListener("click", function(a) {
        b(a)
    }, !1), a.onclick = null))
}

function getHiddenProp() {
    var a = ["webkit", "moz", "ms", "o"];
    if ("hidden" in document) return "hidden";
    for (var b = 0; b < a.length; b++)
        if (a[b] + "Hidden" in document) return a[b] + "Hidden";
    return null
}

function isHidden() {
    var a = getHiddenProp();
    return a ? document[a] : !1
}! function() {
    for (var a, b = function() {}, c = ["assert", "clear", "count", "debug", "dir", "dirxml", "error", "exception", "group", "groupCollapsed", "groupEnd", "info", "log", "markTimeline", "profile", "profileEnd", "table", "time", "timeEnd", "timeStamp", "trace", "warn"], d = c.length, e = window.console = window.console || {}; d--;) a = c[d], e[a] || (e[a] = b)
}(), ! function(a) {
    "use strict";
    a(function() {
        a.support.transition = function() {
            var a = function() {
                var a, b = document.createElement("bootstrap"),
                    c = {
                        WebkitTransition: "webkitTransitionEnd",
                        MozTransition: "transitionend",
                        OTransition: "oTransitionEnd otransitionend",
                        transition: "transitionend"
                    };
                for (a in c)
                    if (void 0 !== b.style[a]) return c[a]
            }();
            return a && {
                end: a
            }
        }()
    })
}(window.jQuery), ! function(a) {
    "use strict";
    var b = '[data-dismiss="alert"]',
        c = function(c) {
            a(c).on("click", b, this.close)
        };
    c.prototype.close = function(b) {
        function c() {
            d.trigger("closed").remove()
        }
        var d, e = a(this),
            f = e.attr("data-target");
        f || (f = e.attr("href"), f = f && f.replace(/.*(?=#[^\s]*$)/, "")), d = a(f), b && b.preventDefault(), d.length || (d = e.hasClass("alert") ? e : e.parent()), d.trigger(b = a.Event("close")), b.isDefaultPrevented() || (d.removeClass("in"), a.support.transition && d.hasClass("fade") ? d.on(a.support.transition.end, c) : c())
    };
    var d = a.fn.alert;
    a.fn.alert = function(b) {
        return this.each(function() {
            var d = a(this),
                e = d.data("alert");
            e || d.data("alert", e = new c(this)), "string" == typeof b && e[b].call(d)
        })
    }, a.fn.alert.Constructor = c, a.fn.alert.noConflict = function() {
        return a.fn.alert = d, this
    }, a(document).on("click.alert.data-api", b, c.prototype.close)
}(window.jQuery), ! function(a) {
    "use strict";
    var b = function(b, c) {
        this.$element = a(b), this.options = a.extend({}, a.fn.button.defaults, c)
    };
    b.prototype.setState = function(a) {
        var b = "disabled",
            c = this.$element,
            d = c.data(),
            e = c.is("input") ? "val" : "html";
        a += "Text", d.resetText || c.data("resetText", c[e]()), c[e](d[a] || this.options[a]), setTimeout(function() {
            "loadingText" == a ? c.addClass(b).attr(b, b) : c.removeClass(b).removeAttr(b)
        }, 0)
    }, b.prototype.toggle = function() {
        var a = this.$element.closest('[data-toggle="buttons-radio"]');
        a && a.find(".active").removeClass("active"), this.$element.toggleClass("active")
    };
    var c = a.fn.button;
    a.fn.button = function(c) {
        return this.each(function() {
            var d = a(this),
                e = d.data("button"),
                f = "object" == typeof c && c;
            e || d.data("button", e = new b(this, f)), "toggle" == c ? e.toggle() : c && e.setState(c)
        })
    }, a.fn.button.defaults = {
        loadingText: "loading..."
    }, a.fn.button.Constructor = b, a.fn.button.noConflict = function() {
        return a.fn.button = c, this
    }, a(document).on("click.button.data-api", "[data-toggle^=button]", function(b) {
        var c = a(b.target);
        c.hasClass("btn") || (c = c.closest(".btn")), c.button("toggle")
    })
}(window.jQuery), ! function(a) {
    "use strict";
    var b = function(b, c) {
        this.$element = a(b), this.$indicators = this.$element.find(".carousel-indicators"), this.options = c, "hover" == this.options.pause && this.$element.on("mouseenter", a.proxy(this.pause, this)).on("mouseleave", a.proxy(this.cycle, this))
    };
    b.prototype = {
        cycle: function(b) {
            return b || (this.paused = !1), this.interval && clearInterval(this.interval), this.options.interval && !this.paused && (this.interval = setInterval(a.proxy(this.next, this), this.options.interval)), this
        },
        getActiveIndex: function() {
            return this.$active = this.$element.find(".item.active"), this.$items = this.$active.parent().children(), this.$items.index(this.$active)
        },
        to: function(b) {
            var c = this.getActiveIndex(),
                d = this;
            if (!(b > this.$items.length - 1 || 0 > b)) return this.sliding ? this.$element.one("slid", function() {
                d.to(b)
            }) : c == b ? this.pause().cycle() : this.slide(b > c ? "next" : "prev", a(this.$items[b]))
        },
        pause: function(b) {
            return b || (this.paused = !0), this.$element.find(".next, .prev").length && a.support.transition.end && (this.$element.trigger(a.support.transition.end), this.cycle(!0)), clearInterval(this.interval), this.interval = null, this
        },
        next: function() {
            return this.sliding ? void 0 : this.slide("next")
        },
        prev: function() {
            return this.sliding ? void 0 : this.slide("prev")
        },
        slide: function(b, c) {
            var d, e = this.$element.find(".item.active"),
                f = c || e[b](),
                g = this.interval,
                h = "next" == b ? "left" : "right",
                i = "next" == b ? "first" : "last",
                j = this;
            if (this.sliding = !0, g && this.pause(), f = f.length ? f : this.$element.find(".item")[i](), d = a.Event("slide", {
                    relatedTarget: f[0],
                    direction: h
                }), !f.hasClass("active")) {
                if (this.$indicators.length && (this.$indicators.find(".active").removeClass("active"), this.$element.one("slid", function() {
                        var b = a(j.$indicators.children()[j.getActiveIndex()]);
                        b && b.addClass("active")
                    })), a.support.transition && this.$element.hasClass("slide")) {
                    if (this.$element.trigger(d), d.isDefaultPrevented()) return;
                    f.addClass(b), f[0].offsetWidth, e.addClass(h), f.addClass(h), this.$element.one(a.support.transition.end, function() {
                        f.removeClass([b, h].join(" ")).addClass("active"), e.removeClass(["active", h].join(" ")), j.sliding = !1, setTimeout(function() {
                            j.$element.trigger("slid")
                        }, 0)
                    })
                } else {
                    if (this.$element.trigger(d), d.isDefaultPrevented()) return;
                    e.removeClass("active"), f.addClass("active"), this.sliding = !1, this.$element.trigger("slid")
                }
                return g && this.cycle(), this
            }
        }
    };
    var c = a.fn.carousel;
    a.fn.carousel = function(c) {
        return this.each(function() {
            var d = a(this),
                e = d.data("carousel"),
                f = a.extend({}, a.fn.carousel.defaults, "object" == typeof c && c),
                g = "string" == typeof c ? c : f.slide;
            e || d.data("carousel", e = new b(this, f)), "number" == typeof c ? e.to(c) : g ? e[g]() : f.interval && e.pause().cycle()
        })
    }, a.fn.carousel.defaults = {
        interval: 5e3,
        pause: "hover"
    }, a.fn.carousel.Constructor = b, a.fn.carousel.noConflict = function() {
        return a.fn.carousel = c, this
    }, a(document).on("click.carousel.data-api", "[data-slide], [data-slide-to]", function(b) {
        var c, d, e = a(this),
            f = a(e.attr("data-target") || (c = e.attr("href")) && c.replace(/.*(?=#[^\s]+$)/, "")),
            g = a.extend({}, f.data(), e.data());
        f.carousel(g), (d = e.attr("data-slide-to")) && f.data("carousel").pause().to(d).cycle(), b.preventDefault()
    })
}(window.jQuery), ! function(a) {
    "use strict";
    var b = function(b, c) {
        this.$element = a(b), this.options = a.extend({}, a.fn.collapse.defaults, c), this.options.parent && (this.$parent = a(this.options.parent)), this.options.toggle && this.toggle()
    };
    b.prototype = {
        constructor: b,
        dimension: function() {
            var a = this.$element.hasClass("width");
            return a ? "width" : "height"
        },
        show: function() {
            var b, c, d, e;
            if (!this.transitioning && !this.$element.hasClass("in")) {
                if (b = this.dimension(), c = a.camelCase(["scroll", b].join("-")), d = this.$parent && this.$parent.find("> .accordion-group > .in"), d && d.length) {
                    if (e = d.data("collapse"), e && e.transitioning) return;
                    d.collapse("hide"), e || d.data("collapse", null)
                }
                this.$element[b](0), this.transition("addClass", a.Event("show"), "shown"), a.support.transition && this.$element[b](this.$element[0][c])
            }
        },
        hide: function() {
            var b;
            !this.transitioning && this.$element.hasClass("in") && (b = this.dimension(), this.reset(this.$element[b]()), this.transition("removeClass", a.Event("hide"), "hidden"), this.$element[b](0))
        },
        reset: function(a) {
            var b = this.dimension();
            return this.$element.removeClass("collapse")[b](a || "auto")[0].offsetWidth, this.$element[null !== a ? "addClass" : "removeClass"]("collapse"), this
        },
        transition: function(b, c, d) {
            var e = this,
                f = function() {
                    "show" == c.type && e.reset(), e.transitioning = 0, e.$element.trigger(d)
                };
            this.$element.trigger(c), c.isDefaultPrevented() || (this.transitioning = 1, this.$element[b]("in"), a.support.transition && this.$element.hasClass("collapse") ? this.$element.one(a.support.transition.end, f) : f())
        },
        toggle: function() {
            this[this.$element.hasClass("in") ? "hide" : "show"]()
        }
    };
    var c = a.fn.collapse;
    a.fn.collapse = function(c) {
        return this.each(function() {
            var d = a(this),
                e = d.data("collapse"),
                f = a.extend({}, a.fn.collapse.defaults, d.data(), "object" == typeof c && c);
            e || d.data("collapse", e = new b(this, f)), "string" == typeof c && e[c]()
        })
    }, a.fn.collapse.defaults = {
        toggle: !0
    }, a.fn.collapse.Constructor = b, a.fn.collapse.noConflict = function() {
        return a.fn.collapse = c, this
    }, a(document).on("click.collapse.data-api", "[data-toggle=collapse]", function(b) {
        var c, d = a(this),
            e = d.attr("data-target") || b.preventDefault() || (c = d.attr("href")) && c.replace(/.*(?=#[^\s]+$)/, ""),
            f = a(e).data("collapse") ? "toggle" : d.data();
        d[a(e).hasClass("in") ? "addClass" : "removeClass"]("collapsed"), a(e).collapse(f)
    })
}(window.jQuery), ! function(a) {
    "use strict";

    function b() {
        a(".dropdown-backdrop").remove(), a(d).each(function() {
            c(a(this)).removeClass("open")
        })
    }

    function c(b) {
        var c, d = b.attr("data-target");
        return d || (d = b.attr("href"), d = d && /#/.test(d) && d.replace(/.*(?=#[^\s]*$)/, "")), c = d && a(d), c && c.length || (c = b.parent()), c
    }
    var d = "[data-toggle=dropdown]",
        e = function(b) {
            var c = a(b).on("click.dropdown.data-api", this.toggle);
            a("html").on("click.dropdown.data-api", function() {
                c.parent().removeClass("open")
            })
        };
    e.prototype = {
        constructor: e,
        toggle: function() {
            var d, e, f = a(this);
            if (!f.is(".disabled, :disabled")) return d = c(f), e = d.hasClass("open"), b(), e || ("ontouchstart" in document.documentElement && a('<div class="dropdown-backdrop"/>').insertBefore(a(this)).on("click", b), d.toggleClass("open")), f.focus(), !1
        },
        keydown: function(b) {
            var e, f, g, h, i;
            if (/(38|40|27)/.test(b.keyCode) && (e = a(this), b.preventDefault(), b.stopPropagation(), !e.is(".disabled, :disabled"))) {
                if (g = c(e), h = g.hasClass("open"), !h || h && 27 == b.keyCode) return 27 == b.which && g.find(d).focus(), e.click();
                f = a("[role=menu] li:not(.divider):visible a", g), f.length && (i = f.index(f.filter(":focus")), 38 == b.keyCode && i > 0 && i--, 40 == b.keyCode && i < f.length - 1 && i++, ~i || (i = 0), f.eq(i).focus())
            }
        }
    };
    var f = a.fn.dropdown;
    a.fn.dropdown = function(b) {
        return this.each(function() {
            var c = a(this),
                d = c.data("dropdown");
            d || c.data("dropdown", d = new e(this)), "string" == typeof b && d[b].call(c)
        })
    }, a.fn.dropdown.Constructor = e, a.fn.dropdown.noConflict = function() {
        return a.fn.dropdown = f, this
    }, a(document).on("click.dropdown.data-api", b).on("click.dropdown.data-api", ".dropdown form", function(a) {
        a.stopPropagation()
    }).on("click.dropdown.data-api", d, e.prototype.toggle).on("keydown.dropdown.data-api", d + ", [role=menu]", e.prototype.keydown)
}(window.jQuery), ! function(a) {
    "use strict";
    var b = function(b, c) {
        this.options = c, this.$element = a(b).delegate('[data-dismiss="modal"]', "click.dismiss.modal", a.proxy(this.hide, this)), this.options.remote && this.$element.find(".modal-body").load(this.options.remote)
    };
    b.prototype = {
        constructor: b,
        toggle: function() {
            return this[this.isShown ? "hide" : "show"]()
        },
        show: function() {
            var b = this,
                c = a.Event("show");
            this.$element.trigger(c), this.isShown || c.isDefaultPrevented() || (this.isShown = !0, this.escape(), this.backdrop(function() {
                var c = a.support.transition && b.$element.hasClass("fade");
                b.$element.parent().length || b.$element.appendTo(document.body), b.$element.show(), c && b.$element[0].offsetWidth, b.$element.addClass("in").attr("aria-hidden", !1), b.enforceFocus(), c ? b.$element.one(a.support.transition.end, function() {
                    b.$element.focus().trigger("shown")
                }) : b.$element.focus().trigger("shown")
            }))
        },
        hide: function(b) {
            b && b.preventDefault();
            b = a.Event("hide"), this.$element.trigger(b), this.isShown && !b.isDefaultPrevented() && (this.isShown = !1, this.escape(), a(document).off("focusin.modal"), this.$element.removeClass("in").attr("aria-hidden", !0), a.support.transition && this.$element.hasClass("fade") ? this.hideWithTransition() : this.hideModal())
        },
        enforceFocus: function() {
            var b = this;
            a(document).on("focusin.modal", function(a) {
                b.$element[0] !== a.target && !b.$element.has(a.target).length && b.$element.focus()
            })
        },
        escape: function() {
            var a = this;
            this.isShown && this.options.keyboard ? this.$element.on("keyup.dismiss.modal", function(b) {
                27 == b.which && a.hide()
            }) : this.isShown || this.$element.off("keyup.dismiss.modal")
        },
        hideWithTransition: function() {
            var b = this,
                c = setTimeout(function() {
                    b.$element.off(a.support.transition.end), b.hideModal()
                }, 500);
            this.$element.one(a.support.transition.end, function() {
                clearTimeout(c), b.hideModal()
            })
        },
        hideModal: function() {
            var a = this;
            this.$element.hide(), this.backdrop(function() {
                a.removeBackdrop(), a.$element.trigger("hidden")
            })
        },
        removeBackdrop: function() {
            this.$backdrop && this.$backdrop.remove(), this.$backdrop = null
        },
        backdrop: function(b) {
            var c = this.$element.hasClass("fade") ? "fade" : "";
            if (this.isShown && this.options.backdrop) {
                var d = a.support.transition && c;
                if (this.$backdrop = a('<div class="modal-backdrop ' + c + '" />').appendTo(document.body), this.$backdrop.click("static" == this.options.backdrop ? a.proxy(this.$element[0].focus, this.$element[0]) : a.proxy(this.hide, this)), d && this.$backdrop[0].offsetWidth, this.$backdrop.addClass("in"), !b) return;
                d ? this.$backdrop.one(a.support.transition.end, b) : b()
            } else !this.isShown && this.$backdrop ? (this.$backdrop.removeClass("in"), a.support.transition && this.$element.hasClass("fade") ? this.$backdrop.one(a.support.transition.end, b) : b()) : b && b()
        }
    };
    var c = a.fn.modal;
    a.fn.modal = function(c) {
        return this.each(function() {
            var d = a(this),
                e = d.data("modal"),
                f = a.extend({}, a.fn.modal.defaults, d.data(), "object" == typeof c && c);
            e || d.data("modal", e = new b(this, f)), "string" == typeof c ? e[c]() : f.show && e.show()
        })
    }, a.fn.modal.defaults = {
        backdrop: !0,
        keyboard: !0,
        show: !0
    }, a.fn.modal.Constructor = b, a.fn.modal.noConflict = function() {
        return a.fn.modal = c, this
    }, a(document).on("click.modal.data-api", '[data-toggle="modal"]', function(b) {
        var c = a(this),
            d = c.attr("href"),
            e = a(c.attr("data-target") || d && d.replace(/.*(?=#[^\s]+$)/, "")),
            f = e.data("modal") ? "toggle" : a.extend({
                remote: !/#/.test(d) && d
            }, e.data(), c.data());
        b.preventDefault(), e.modal(f).one("hide", function() {
            c.focus()
        })
    })
}(window.jQuery), ! function(a) {
    "use strict";
    var b = function(a, b) {
        this.init("tooltip", a, b)
    };
    b.prototype = {
        constructor: b,
        init: function(b, c, d) {
            var e, f, g, h, i;
            for (this.type = b, this.$element = a(c), this.options = this.getOptions(d), this.enabled = !0, g = this.options.trigger.split(" "), i = g.length; i--;) h = g[i], "click" == h ? this.$element.on("click." + this.type, this.options.selector, a.proxy(this.toggle, this)) : "manual" != h && (e = "hover" == h ? "mouseenter" : "focus", f = "hover" == h ? "mouseleave" : "blur", this.$element.on(e + "." + this.type, this.options.selector, a.proxy(this.enter, this)), this.$element.on(f + "." + this.type, this.options.selector, a.proxy(this.leave, this)));
            this.options.selector ? this._options = a.extend({}, this.options, {
                trigger: "manual",
                selector: ""
            }) : this.fixTitle()
        },
        getOptions: function(b) {
            return b = a.extend({}, a.fn[this.type].defaults, this.$element.data(), b), b.delay && "number" == typeof b.delay && (b.delay = {
                show: b.delay,
                hide: b.delay
            }), b
        },
        enter: function(b) {
            var c, d = a.fn[this.type].defaults,
                e = {};
            return this._options && a.each(this._options, function(a, b) {
                d[a] != b && (e[a] = b)
            }, this), c = a(b.currentTarget)[this.type](e).data(this.type), c.options.delay && c.options.delay.show ? (clearTimeout(this.timeout), c.hoverState = "in", this.timeout = setTimeout(function() {
                "in" == c.hoverState && c.show()
            }, c.options.delay.show), void 0) : c.show()
        },
        leave: function(b) {
            var c = a(b.currentTarget)[this.type](this._options).data(this.type);
            return this.timeout && clearTimeout(this.timeout), c.options.delay && c.options.delay.hide ? (c.hoverState = "out", void(this.timeout = setTimeout(function() {
                "out" == c.hoverState && c.hide()
            }, c.options.delay.hide))) : c.hide()
        },
        show: function() {
            var b, c, d, e, f, g, h = a.Event("show");
            if (this.hasContent() && this.enabled) {
                if (this.$element.trigger(h), h.isDefaultPrevented()) return;
                switch (b = this.tip(), this.setContent(), this.options.animation && b.addClass("fade"), f = "function" == typeof this.options.placement ? this.options.placement.call(this, b[0], this.$element[0]) : this.options.placement, b.detach().css({
                    top: 0,
                    left: 0,
                    display: "block"
                }), this.options.container ? b.appendTo(this.options.container) : b.insertAfter(this.$element), c = this.getPosition(), d = b[0].offsetWidth, e = b[0].offsetHeight, f) {
                    case "bottom":
                        g = {
                            top: c.top + c.height,
                            left: c.left + c.width / 2 - d / 2
                        };
                        break;
                    case "top":
                        g = {
                            top: c.top - e,
                            left: c.left + c.width / 2 - d / 2
                        };
                        break;
                    case "left":
                        g = {
                            top: c.top + c.height / 2 - e / 2,
                            left: c.left - d
                        };
                        break;
                    case "right":
                        g = {
                            top: c.top + c.height / 2 - e / 2,
                            left: c.left + c.width
                        }
                }
                this.applyPlacement(g, f), this.$element.trigger("shown")
            }
        },
        applyPlacement: function(a, b) {
            var c, d, e, f, g = this.tip(),
                h = g[0].offsetWidth,
                i = g[0].offsetHeight;
            g.offset(a).addClass(b).addClass("in"), c = g[0].offsetWidth, d = g[0].offsetHeight, "top" == b && d != i && (a.top = a.top + i - d, f = !0), "bottom" == b || "top" == b ? (e = 0, a.left < 0 && (e = -2 * a.left, a.left = 0, g.offset(a), c = g[0].offsetWidth, d = g[0].offsetHeight), this.replaceArrow(e - h + c, c, "left")) : this.replaceArrow(d - i, d, "top"), f && g.offset(a)
        },
        replaceArrow: function(a, b, c) {
            this.arrow().css(c, a ? 50 * (1 - a / b) + "%" : "")
        },
        setContent: function() {
            var a = this.tip(),
                b = this.getTitle();
            a.find(".tooltip-inner")[this.options.html ? "html" : "text"](b), a.removeClass("fade in top bottom left right")
        },
        hide: function() {
            function b() {
                var b = setTimeout(function() {
                    c.off(a.support.transition.end).detach()
                }, 500);
                c.one(a.support.transition.end, function() {
                    clearTimeout(b), c.detach()
                })
            }
            var c = this.tip(),
                d = a.Event("hide");
            return this.$element.trigger(d), d.isDefaultPrevented() ? void 0 : (c.removeClass("in"), a.support.transition && this.$tip.hasClass("fade") ? b() : c.detach(), this.$element.trigger("hidden"), this)
        },
        fixTitle: function() {
            var a = this.$element;
            (a.attr("title") || "string" != typeof a.attr("data-original-title")) && a.attr("data-original-title", a.attr("title") || "").attr("title", "")
        },
        hasContent: function() {
            return this.getTitle()
        },
        getPosition: function() {
            var b = this.$element[0];
            return a.extend({}, "function" == typeof b.getBoundingClientRect ? b.getBoundingClientRect() : {
                width: b.offsetWidth,
                height: b.offsetHeight
            }, this.$element.offset())
        },
        getTitle: function() {
            var a, b = this.$element,
                c = this.options;
            return a = b.attr("data-original-title") || ("function" == typeof c.title ? c.title.call(b[0]) : c.title)
        },
        tip: function() {
            return this.$tip = this.$tip || a(this.options.template)
        },
        arrow: function() {
            return this.$arrow = this.$arrow || this.tip().find(".tooltip-arrow")
        },
        validate: function() {
            this.$element[0].parentNode || (this.hide(), this.$element = null, this.options = null)
        },
        enable: function() {
            this.enabled = !0
        },
        disable: function() {
            this.enabled = !1
        },
        toggleEnabled: function() {
            this.enabled = !this.enabled
        },
        toggle: function(b) {
            var c = b ? a(b.currentTarget)[this.type](this._options).data(this.type) : this;
            c.tip().hasClass("in") ? c.hide() : c.show()
        },
        destroy: function() {
            this.hide().$element.off("." + this.type).removeData(this.type)
        }
    };
    var c = a.fn.tooltip;
    a.fn.tooltip = function(c) {
        return this.each(function() {
            var d = a(this),
                e = d.data("tooltip"),
                f = "object" == typeof c && c;
            e || d.data("tooltip", e = new b(this, f)), "string" == typeof c && e[c]()
        })
    }, a.fn.tooltip.Constructor = b, a.fn.tooltip.defaults = {
        animation: !0,
        placement: "top",
        selector: !1,
        template: '<div class="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
        trigger: "hover focus",
        title: "",
        delay: 0,
        html: !1,
        container: !1
    }, a.fn.tooltip.noConflict = function() {
        return a.fn.tooltip = c, this
    }
}(window.jQuery), ! function(a) {
    "use strict";
    var b = function(a, b) {
        this.init("popover", a, b)
    };
    b.prototype = a.extend({}, a.fn.tooltip.Constructor.prototype, {
        constructor: b,
        setContent: function() {
            var a = this.tip(),
                b = this.getTitle(),
                c = this.getContent();
            a.find(".popover-title")[this.options.html ? "html" : "text"](b), a.find(".popover-content")[this.options.html ? "html" : "text"](c), a.removeClass("fade top bottom left right in")
        },
        hasContent: function() {
            return this.getTitle() || this.getContent()
        },
        getContent: function() {
            var a, b = this.$element,
                c = this.options;
            return a = ("function" == typeof c.content ? c.content.call(b[0]) : c.content) || b.attr("data-content")
        },
        tip: function() {
            return this.$tip || (this.$tip = a(this.options.template)), this.$tip
        },
        destroy: function() {
            this.hide().$element.off("." + this.type).removeData(this.type)
        }
    });
    var c = a.fn.popover;
    a.fn.popover = function(c) {
        return this.each(function() {
            var d = a(this),
                e = d.data("popover"),
                f = "object" == typeof c && c;
            e || d.data("popover", e = new b(this, f)), "string" == typeof c && e[c]()
        })
    }, a.fn.popover.Constructor = b, a.fn.popover.defaults = a.extend({}, a.fn.tooltip.defaults, {
        placement: "right",
        trigger: "click",
        content: "",
        template: '<div class="popover"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'
    }), a.fn.popover.noConflict = function() {
        return a.fn.popover = c, this
    }
}(window.jQuery), ! function(a) {
    "use strict";

    function b(b, c) {
        var d, e = a.proxy(this.process, this),
            f = a(a(b).is("body") ? window : b);
        this.options = a.extend({}, a.fn.scrollspy.defaults, c), this.$scrollElement = f.on("scroll.scroll-spy.data-api", e), this.selector = (this.options.target || (d = a(b).attr("href")) && d.replace(/.*(?=#[^\s]+$)/, "") || "") + " .nav li > a", this.$body = a("body"), this.refresh(), this.process()
    }
    b.prototype = {
        constructor: b,
        refresh: function() {
            var b, c = this;
            this.offsets = a([]), this.targets = a([]), b = this.$body.find(this.selector).map(function() {
                var b = a(this),
                    d = b.data("target") || b.attr("href"),
                    e = /^#\w/.test(d) && a(d);
                return e && e.length && [
                    [e.position().top + (!a.isWindow(c.$scrollElement.get(0)) && c.$scrollElement.scrollTop()), d]
                ] || null
            }).sort(function(a, b) {
                return a[0] - b[0]
            }).each(function() {
                c.offsets.push(this[0]), c.targets.push(this[1])
            })
        },
        process: function() {
            var a, b = this.$scrollElement.scrollTop() + this.options.offset,
                c = this.$scrollElement[0].scrollHeight || this.$body[0].scrollHeight,
                d = c - this.$scrollElement.height(),
                e = this.offsets,
                f = this.targets,
                g = this.activeTarget;
            if (b >= d) return g != (a = f.last()[0]) && this.activate(a);
            for (a = e.length; a--;) g != f[a] && b >= e[a] && (!e[a + 1] || b <= e[a + 1]) && this.activate(f[a])
        },
        activate: function(b) {
            var c, d;
            this.activeTarget = b, a(this.selector).parent(".active").removeClass("active"), d = this.selector + '[data-target="' + b + '"],' + this.selector + '[href="' + b + '"]', c = a(d).parent("li").addClass("active"), c.parent(".dropdown-menu").length && (c = c.closest("li.dropdown").addClass("active")), c.trigger("activate")
        }
    };
    var c = a.fn.scrollspy;
    a.fn.scrollspy = function(c) {
        return this.each(function() {
            var d = a(this),
                e = d.data("scrollspy"),
                f = "object" == typeof c && c;
            e || d.data("scrollspy", e = new b(this, f)), "string" == typeof c && e[c]()
        })
    }, a.fn.scrollspy.Constructor = b, a.fn.scrollspy.defaults = {
        offset: 10
    }, a.fn.scrollspy.noConflict = function() {
        return a.fn.scrollspy = c, this
    }, a(window).on("load", function() {
        a('[data-spy="scroll"]').each(function() {
            var b = a(this);
            b.scrollspy(b.data())
        })
    })
}(window.jQuery), ! function(a) {
    "use strict";
    var b = function(b) {
        this.element = a(b)
    };
    b.prototype = {
        constructor: b,
        show: function() {
            var b, c, d, e = this.element,
                f = e.closest("ul:not(.dropdown-menu)"),
                g = e.attr("data-target");
            g || (g = e.attr("href"), g = g && g.replace(/.*(?=#[^\s]*$)/, "")), e.parent("li").hasClass("active") || (b = f.find(".active:last a")[0], d = a.Event("show", {
                relatedTarget: b
            }), e.trigger(d), d.isDefaultPrevented() || (c = a(g), this.activate(e.parent("li"), f), this.activate(c, c.parent(), function() {
                e.trigger({
                    type: "shown",
                    relatedTarget: b
                })
            })))
        },
        activate: function(b, c, d) {
            function e() {
                f.removeClass("active").find("> .dropdown-menu > .active").removeClass("active"), b.addClass("active"), g ? (b[0].offsetWidth, b.addClass("in")) : b.removeClass("fade"), b.parent(".dropdown-menu") && b.closest("li.dropdown").addClass("active"), d && d()
            }
            var f = c.find("> .active"),
                g = d && a.support.transition && f.hasClass("fade");
            g ? f.one(a.support.transition.end, e) : e(), f.removeClass("in")
        }
    };
    var c = a.fn.tab;
    a.fn.tab = function(c) {
        return this.each(function() {
            var d = a(this),
                e = d.data("tab");
            e || d.data("tab", e = new b(this)), "string" == typeof c && e[c]()
        })
    }, a.fn.tab.Constructor = b, a.fn.tab.noConflict = function() {
        return a.fn.tab = c, this
    }, a(document).on("click.tab.data-api", '[data-toggle="tab"], [data-toggle="pill"]', function(b) {
        b.preventDefault(), a(this).tab("show")
    })
}(window.jQuery), ! function(a) {
    "use strict";
    var b = function(b, c) {
        this.$element = a(b), this.options = a.extend({}, a.fn.typeahead.defaults, c), this.matcher = this.options.matcher || this.matcher, this.sorter = this.options.sorter || this.sorter, this.highlighter = this.options.highlighter || this.highlighter, this.updater = this.options.updater || this.updater, this.source = this.options.source, this.$menu = a(this.options.menu), this.shown = !1, this.listen()
    };
    b.prototype = {
        constructor: b,
        select: function() {
            var a = this.$menu.find(".active").attr("data-value");
            return this.$element.val(this.updater(a)).change(), this.hide()
        },
        updater: function(a) {
            return a
        },
        show: function() {
            var b = a.extend({}, this.$element.position(), {
                height: this.$element[0].offsetHeight
            });
            return this.$menu.insertAfter(this.$element).css({
                top: b.top + b.height,
                left: b.left
            }).show(), this.shown = !0, this
        },
        hide: function() {
            return this.$menu.hide(), this.shown = !1, this
        },
        lookup: function() {
            var b;
            return this.query = this.$element.val(), !this.query || this.query.length < this.options.minLength ? this.shown ? this.hide() : this : (b = a.isFunction(this.source) ? this.source(this.query, a.proxy(this.process, this)) : this.source, b ? this.process(b) : this)
        },
        process: function(b) {
            var c = this;
            return b = a.grep(b, function(a) {
                return c.matcher(a)
            }), b = this.sorter(b), b.length ? this.render(b.slice(0, this.options.items)).show() : this.shown ? this.hide() : this
        },
        matcher: function(a) {
            return ~a.toLowerCase().indexOf(this.query.toLowerCase())
        },
        sorter: function(a) {
            for (var b, c = [], d = [], e = []; b = a.shift();) b.toLowerCase().indexOf(this.query.toLowerCase()) ? ~b.indexOf(this.query) ? d.push(b) : e.push(b) : c.push(b);
            return c.concat(d, e)
        },
        highlighter: function(a) {
            var b = this.query.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&");
            return a.replace(new RegExp("(" + b + ")", "ig"), function(a, b) {
                return "<strong>" + b + "</strong>"
            })
        },
        render: function(b) {
            var c = this;
            return b = a(b).map(function(b, d) {
                return b = a(c.options.item).attr("data-value", d), b.find("a").html(c.highlighter(d)), b[0]
            }), b.first().addClass("active"), this.$menu.html(b), this
        },
        next: function() {
            var b = this.$menu.find(".active").removeClass("active"),
                c = b.next();
            c.length || (c = a(this.$menu.find("li")[0])), c.addClass("active")
        },
        prev: function() {
            var a = this.$menu.find(".active").removeClass("active"),
                b = a.prev();
            b.length || (b = this.$menu.find("li").last()), b.addClass("active")
        },
        listen: function() {
            this.$element.on("focus", a.proxy(this.focus, this)).on("blur", a.proxy(this.blur, this)).on("keypress", a.proxy(this.keypress, this)).on("keyup", a.proxy(this.keyup, this)), this.eventSupported("keydown") && this.$element.on("keydown", a.proxy(this.keydown, this)), this.$menu.on("click", a.proxy(this.click, this)).on("mouseenter", "li", a.proxy(this.mouseenter, this)).on("mouseleave", "li", a.proxy(this.mouseleave, this))
        },
        eventSupported: function(a) {
            var b = a in this.$element;
            return b || (this.$element.setAttribute(a, "return;"), b = "function" == typeof this.$element[a]), b
        },
        move: function(a) {
            if (this.shown) {
                switch (a.keyCode) {
                    case 9:
                    case 13:
                    case 27:
                        a.preventDefault();
                        break;
                    case 38:
                        a.preventDefault(), this.prev();
                        break;
                    case 40:
                        a.preventDefault(), this.next()
                }
                a.stopPropagation()
            }
        },
        keydown: function(b) {
            this.suppressKeyPressRepeat = ~a.inArray(b.keyCode, [40, 38, 9, 13, 27]), this.move(b)
        },
        keypress: function(a) {
            this.suppressKeyPressRepeat || this.move(a)
        },
        keyup: function(a) {
            switch (a.keyCode) {
                case 40:
                case 38:
                case 16:
                case 17:
                case 18:
                    break;
                case 9:
                case 13:
                    if (!this.shown) return;
                    this.select();
                    break;
                case 27:
                    if (!this.shown) return;
                    this.hide();
                    break;
                default:
                    this.lookup()
            }
            a.stopPropagation(), a.preventDefault()
        },
        focus: function() {
            this.focused = !0
        },
        blur: function() {
            this.focused = !1, !this.mousedover && this.shown && this.hide()
        },
        click: function(a) {
            a.stopPropagation(), a.preventDefault(), this.select(), this.$element.focus()
        },
        mouseenter: function(b) {
            this.mousedover = !0, this.$menu.find(".active").removeClass("active"), a(b.currentTarget).addClass("active")
        },
        mouseleave: function() {
            this.mousedover = !1, !this.focused && this.shown && this.hide()
        }
    };
    var c = a.fn.typeahead;
    a.fn.typeahead = function(c) {
        return this.each(function() {
            var d = a(this),
                e = d.data("typeahead"),
                f = "object" == typeof c && c;
            e || d.data("typeahead", e = new b(this, f)), "string" == typeof c && e[c]()
        })
    }, a.fn.typeahead.defaults = {
        source: [],
        items: 8,
        menu: '<ul class="typeahead dropdown-menu"></ul>',
        item: '<li><a href="#"></a></li>',
        minLength: 1
    }, a.fn.typeahead.Constructor = b, a.fn.typeahead.noConflict = function() {
        return a.fn.typeahead = c, this
    }, a(document).on("focus.typeahead.data-api", '[data-provide="typeahead"]', function() {
        var b = a(this);
        b.data("typeahead") || b.typeahead(b.data())
    })
}(window.jQuery), ! function(a) {
    "use strict";
    var b = function(b, c) {
        this.options = a.extend({}, a.fn.affix.defaults, c), this.$window = a(window).on("scroll.affix.data-api", a.proxy(this.checkPosition, this)).on("click.affix.data-api", a.proxy(function() {
            setTimeout(a.proxy(this.checkPosition, this), 1)
        }, this)), this.$element = a(b), this.checkPosition()
    };
    b.prototype.checkPosition = function() {
        if (this.$element.is(":visible")) {
            var b, c = a(document).height(),
                d = this.$window.scrollTop(),
                e = this.$element.offset(),
                f = this.options.offset,
                g = f.bottom,
                h = f.top,
                i = "affix affix-top affix-bottom";
            "object" != typeof f && (g = h = f), "function" == typeof h && (h = f.top()), "function" == typeof g && (g = f.bottom()), b = null != this.unpin && d + this.unpin <= e.top ? !1 : null != g && e.top + this.$element.height() >= c - g ? "bottom" : null != h && h >= d ? "top" : !1, this.affixed !== b && (this.affixed = b, this.unpin = "bottom" == b ? e.top - d : null, this.$element.removeClass(i).addClass("affix" + (b ? "-" + b : "")))
        }
    };
    var c = a.fn.affix;
    a.fn.affix = function(c) {
        return this.each(function() {
            var d = a(this),
                e = d.data("affix"),
                f = "object" == typeof c && c;
            e || d.data("affix", e = new b(this, f)), "string" == typeof c && e[c]()
        })
    }, a.fn.affix.Constructor = b, a.fn.affix.defaults = {
        offset: 0
    }, a.fn.affix.noConflict = function() {
        return a.fn.affix = c, this
    }, a(window).on("load", function() {
        a('[data-spy="affix"]').each(function() {
            var b = a(this),
                c = b.data();
            c.offset = c.offset || {}, c.offsetBottom && (c.offset.bottom = c.offsetBottom), c.offsetTop && (c.offset.top = c.offsetTop), b.affix(c)
        })
    })
}(window.jQuery), ! function(a, b) {
    "use strict";
    "undefined" != typeof exports ? exports.Mediator = b() : "function" == typeof define && define.amd ? define("mediator-js", [], function() {
        return a.Mediator = b(), a.Mediator
    }) : a.Mediator = b()
}(this, function() {
    "use strict";

    function a() {
        var a = function() {
            return (0 | 65536 * (1 + Math.random())).toString(16).substring(1)
        };
        return a() + a() + "-" + a() + "-" + a() + "-" + a() + "-" + a() + a() + a()
    }

    function b(c, d, e) {
        return this instanceof b ? (this.id = a(), this.fn = c, this.options = d, this.context = e, void(this.channel = null)) : new b(c, d, e)
    }

    function c(a, b) {
        return this instanceof c ? (this.namespace = a || "", this._subscribers = [], this._channels = [], this._parent = b, void(this.stopped = !1)) : new c(a)
    }

    function d() {
        return this instanceof d ? void(this._channels = new c("")) : new d
    }
    return b.prototype = {
        update: function(a) {
            a && (this.fn = a.fn || this.fn, this.context = a.context || this.context, this.options = a.options || this.options, this.channel && this.options && void 0 !== this.options.priority && this.channel.setPriority(this.id, this.options.priority))
        }
    }, c.prototype = {
        addSubscriber: function(a, c, d) {
            var e = new b(a, c, d);
            return c && void 0 !== c.priority ? (c.priority = c.priority >> 0, c.priority < 0 && (c.priority = 0), c.priority >= this._subscribers.length && (c.priority = this._subscribers.length - 1), this._subscribers.splice(c.priority, 0, e)) : this._subscribers.push(e), e.channel = this, e
        },
        stopPropagation: function() {
            this.stopped = !0
        },
        getSubscriber: function(a) {
            var b = 0,
                c = this._subscribers.length;
            for (c; c > b; b++)
                if (this._subscribers[b].id === a || this._subscribers[b].fn === a) return this._subscribers[b]
        },
        setPriority: function(a, b) {
            var c, d, e, f, g = 0,
                h = 0;
            for (h = 0, f = this._subscribers.length; f > h && this._subscribers[h].id !== a && this._subscribers[h].fn !== a; h++) g++;
            c = this._subscribers[g], d = this._subscribers.slice(0, g), e = this._subscribers.slice(g + 1), this._subscribers = d.concat(e), this._subscribers.splice(b, 0, c)
        },
        addChannel: function(a) {
            this._channels[a] = new c((this.namespace ? this.namespace + ":" : "") + a, this)
        },
        hasChannel: function(a) {
            return this._channels.hasOwnProperty(a)
        },
        returnChannel: function(a) {
            return this._channels[a]
        },
        removeSubscriber: function(a) {
            var b = this._subscribers.length - 1;
            if (!a) return void(this._subscribers = []);
            for (b; b >= 0; b--)(this._subscribers[b].fn === a || this._subscribers[b].id === a) && (this._subscribers[b].channel = null, this._subscribers.splice(b, 1))
        },
        publish: function(a) {
            var b, c, d, e = 0,
                f = this._subscribers.length,
                g = !1;
            for (f; f > e; e++) this.stopped || (b = this._subscribers[e], void 0 !== b.options && "function" == typeof b.options.predicate ? b.options.predicate.apply(b.context, a) && (b.fn.apply(b.context, a), g = !0) : (c = this._subscribers.length, b.fn.apply(b.context, a), d = this._subscribers.length, f = d, d === c - 1 && e--, g = !0)), g && b.options && void 0 !== b.options && (b.options.calls--, b.options.calls < 1 && (this.removeSubscriber(b.id), f--, e--));
            this._parent && this._parent.publish(a), this.stopped = !1
        }
    }, d.prototype = {
        getChannel: function(a) {
            var b = this._channels,
                c = a.split(":"),
                d = 0,
                e = c.length;
            if ("" === a) return b;
            if (c.length > 0)
                for (e; e > d; d++) b.hasChannel(c[d]) || b.addChannel(c[d]), b = b.returnChannel(c[d]);
            return b
        },
        subscribe: function(a, b, c, d) {
            var e = this.getChannel(a);
            return c = c || {}, d = d || {}, e.addSubscriber(b, c, d)
        },
        once: function(a, b, c, d) {
            return c = c || {}, c.calls = 1, this.subscribe(a, b, c, d)
        },
        getSubscriber: function(a, b) {
            return this.getChannel(b || "").getSubscriber(a)
        },
        remove: function(a, b) {
            this.getChannel(a).removeSubscriber(b)
        },
        publish: function(a) {
            var b = Array.prototype.slice.call(arguments, 1),
                c = this.getChannel(a);
            b.push(c), this.getChannel(a).publish(b)
        }
    }, d.prototype.on = d.prototype.subscribe, d.prototype.bind = d.prototype.subscribe, d.prototype.emit = d.prototype.publish, d.prototype.trigger = d.prototype.publish, d.prototype.off = d.prototype.remove, d.Channel = c, d.Subscriber = b, d.version = "0.9.6", d
}),
function(a) {
    function b(b, c) {
        var d = document.createElementNS("http://www.w3.org/2000/svg", b || "svg");
        return c && a.each(c, function(a, b) {
            d.setAttributeNS(null, a, b)
        }), a(d)
    }
    a.fn.activity = function(b) {
        return this.each(function() {
            var e = a(this),
                f = e.data("activity");
            if (f && (clearInterval(f.data("interval")), f.remove(), e.removeData("activity")), b !== !1) {
                b = a.extend({
                    color: e.css("color")
                }, a.fn.activity.defaults, b), f = c(e, b).css("position", "absolute").prependTo(b.outside ? "body" : e);
                var g = e.outerHeight() - f.height(),
                    h = e.outerWidth() - f.width(),
                    i = {
                        top: "top" == b.valign ? b.padding : "bottom" == b.valign ? g - b.padding : Math.floor(g / 2),
                        left: "left" == b.align ? b.padding : "right" == b.align ? h - b.padding : Math.floor(h / 2)
                    },
                    j = e.offset();
                b.outside ? f.css({
                    top: j.top + "px",
                    left: j.left + "px"
                }) : (i.top -= f.offset().top - j.top, i.left -= f.offset().left - j.left), f.css({
                    marginTop: i.top + "px",
                    marginLeft: i.left + "px"
                }), d(f, b.segments, Math.round(10 / b.speed) / 10), e.data("activity", f)
            }
        }), this
    }, a.fn.activity.defaults = {
        segments: 12,
        space: 3,
        length: 7,
        width: 4,
        speed: 1.2,
        align: "center",
        valign: "center",
        padding: 4
    }, a.fn.activity.getOpacity = function(a, b) {
        var c = a.steps || a.segments - 1,
            d = void 0 !== a.opacity ? a.opacity : 1 / c;
        return 1 - Math.min(b, c) * (1 - d) / c
    };
    var c = function() {
            return a("<div>").addClass("busy")
        },
        d = function() {};
    if (document.createElementNS && document.createElementNS("http://www.w3.org/2000/svg", "svg").createSVGRect)
        if (c = function(c, d) {
                for (var e = 2 * d.width + d.space, f = e + d.length + Math.ceil(d.width / 2) + 1, g = b().width(2 * f).height(2 * f), h = b("g", {
                        "stroke-width": d.width,
                        "stroke-linecap": "round",
                        stroke: d.color
                    }).appendTo(b("g", {
                        transform: "translate(" + f + "," + f + ")"
                    }).appendTo(g)), i = 0; i < d.segments; i++) h.append(b("line", {
                    x1: 0,
                    y1: e,
                    x2: 0,
                    y2: e + d.length,
                    transform: "rotate(" + 360 / d.segments * i + ", 0, 0)",
                    opacity: a.fn.activity.getOpacity(d, i)
                }));
                return a("<div>").append(g).width(2 * f).height(2 * f)
            }, void 0 !== document.createElement("div").style.WebkitAnimationName) {
            var e = {};
            d = function(a, b, c) {
                if (!e[b]) {
                    for (var d = "spin" + b, f = "@-webkit-keyframes " + d + " {", g = 0; b > g; g++) {
                        var h = Math.round(1e5 / b * g) / 1e3,
                            i = Math.round(1e5 / b * (g + 1) - 1) / 1e3,
                            j = "% { -webkit-transform:rotate(" + Math.round(360 / b * g) + "deg); }\n";
                        f += h + j + i + j
                    }
                    f += "100% { -webkit-transform:rotate(100deg); }\n}", document.styleSheets[0].insertRule(f, 0), e[b] = d
                }
                a.css("-webkit-animation", e[b] + " " + c + "s linear infinite")
            }
        } else d = function(a, b, c) {
            var d = 0,
                e = a.find("g g").get(0);
            a.data("interval", setInterval(function() {
                e.setAttributeNS(null, "transform", "rotate(" + ++d % b * (360 / b) + ")")
            }, 1e3 * c / b))
        };
    else {
        var f = a("<shape>").css("behavior", "url(#default#VML)");
        if (a("body").append(f), f.get(0).adj) {
            var g = document.createStyleSheet();
            a.each(["group", "shape", "stroke"], function() {
                g.addRule(this, "behavior:url(#default#VML);")
            }), c = function(b, c) {
                for (var d = 2 * c.width + c.space, e = d + c.length + Math.ceil(c.width / 2) + 1, f = 2 * e, g = -Math.ceil(f / 2), h = a("<group>", {
                        coordsize: f + " " + f,
                        coordorigin: g + " " + g
                    }).css({
                        top: g,
                        left: g,
                        width: f,
                        height: f
                    }), i = 0; i < c.segments; i++) h.append(a("<shape>", {
                    path: "m " + d + ",0  l " + (d + c.length) + ",0"
                }).css({
                    width: f,
                    height: f,
                    rotation: 360 / c.segments * i + "deg"
                }).append(a("<stroke>", {
                    color: c.color,
                    weight: c.width + "px",
                    endcap: "round",
                    opacity: a.fn.activity.getOpacity(c, i)
                })));
                return a("<group>", {
                    coordsize: f + " " + f
                }).css({
                    width: f,
                    height: f,
                    overflow: "hidden"
                }).append(h)
            }, d = function(a, b, c) {
                var d = 0,
                    e = a.get(0);
                a.data("interval", setInterval(function() {
                    e.style.rotation = ++d % b * (360 / b)
                }, 1e3 * c / b))
            }
        }
        a(f).remove()
    }
}(jQuery),
function(a) {
    var b, c, d, e, f, g, h, i = "Close",
        j = "BeforeClose",
        k = "AfterClose",
        l = "BeforeAppend",
        m = "MarkupParse",
        n = "Open",
        o = "Change",
        p = "mfp",
        q = "." + p,
        r = "mfp-ready",
        s = "mfp-removing",
        t = "mfp-prevent-close",
        u = function() {},
        v = !!window.jQuery,
        w = a(window),
        x = function(a, c) {
            b.ev.on(p + a + q, c)
        },
        y = function(b, c, d, e) {
            var f = document.createElement("div");
            return f.className = "mfp-" + b, d && (f.innerHTML = d), e ? c && c.appendChild(f) : (f = a(f), c && f.appendTo(c)), f
        },
        z = function(c, d) {
            b.ev.triggerHandler(p + c, d), b.st.callbacks && (c = c.charAt(0).toLowerCase() + c.slice(1), b.st.callbacks[c] && b.st.callbacks[c].apply(b, a.isArray(d) ? d : [d]))
        },
        A = function(c) {
            return c === h && b.currTemplate.closeBtn || (b.currTemplate.closeBtn = a(b.st.closeMarkup.replace("%title%", b.st.tClose)), h = c), b.currTemplate.closeBtn
        },
        B = function() {
            a.magnificPopup.instance || (b = new u, b.init(), a.magnificPopup.instance = b)
        },
        C = function() {
            var a = document.createElement("p").style,
                b = ["ms", "O", "Moz", "Webkit"];
            if (void 0 !== a.transition) return !0;
            for (; b.length;)
                if (b.pop() + "Transition" in a) return !0;
            return !1
        };
    u.prototype = {
        constructor: u,
        init: function() {
            var c = navigator.appVersion;
            b.isIE7 = -1 !== c.indexOf("MSIE 7."), b.isIE8 = -1 !== c.indexOf("MSIE 8."), b.isLowIE = b.isIE7 || b.isIE8, b.isAndroid = /android/gi.test(c), b.isIOS = /iphone|ipad|ipod/gi.test(c), b.supportsTransition = C(), b.probablyMobile = b.isAndroid || b.isIOS || /(Opera Mini)|Kindle|webOS|BlackBerry|(Opera Mobi)|(Windows Phone)|IEMobile/i.test(navigator.userAgent), e = a(document), b.popupsCache = {}
        },
        open: function(c) {
            d || (d = a(document.body));
            var f;
            if (c.isObj === !1) {
                b.items = c.items.toArray(), b.index = 0;
                var h, i = c.items;
                for (f = 0; i.length > f; f++)
                    if (h = i[f], h.parsed && (h = h.el[0]), h === c.el[0]) {
                        b.index = f;
                        break
                    }
            } else b.items = a.isArray(c.items) ? c.items : [c.items], b.index = c.index || 0;
            if (b.isOpen) return void b.updateItemHTML();
            b.types = [], g = "", b.ev = c.mainEl && c.mainEl.length ? c.mainEl.eq(0) : e, c.key ? (b.popupsCache[c.key] || (b.popupsCache[c.key] = {}), b.currTemplate = b.popupsCache[c.key]) : b.currTemplate = {}, b.st = a.extend(!0, {}, a.magnificPopup.defaults, c), b.fixedContentPos = "auto" === b.st.fixedContentPos ? !b.probablyMobile : b.st.fixedContentPos, b.st.modal && (b.st.closeOnContentClick = !1, b.st.closeOnBgClick = !1, b.st.showCloseBtn = !1, b.st.enableEscapeKey = !1), b.bgOverlay || (b.bgOverlay = y("bg").on("click" + q, function() {
                b.close()
            }), b.wrap = y("wrap").attr("tabindex", -1).on("click" + q, function(a) {
                b._checkIfClose(a.target) && b.close()
            }), b.container = y("container", b.wrap)), b.contentContainer = y("content"), b.st.preloader && (b.preloader = y("preloader", b.container, b.st.tLoading));
            var j = a.magnificPopup.modules;
            for (f = 0; j.length > f; f++) {
                var k = j[f];
                k = k.charAt(0).toUpperCase() + k.slice(1), b["init" + k].call(b)
            }
            z("BeforeOpen"), b.st.showCloseBtn && (b.st.closeBtnInside ? (x(m, function(a, b, c, d) {
                c.close_replaceWith = A(d.type)
            }), g += " mfp-close-btn-in") : b.wrap.append(A())), b.st.alignTop && (g += " mfp-align-top"), b.wrap.css(b.fixedContentPos ? {
                overflow: b.st.overflowY,
                overflowX: "hidden",
                overflowY: b.st.overflowY
            } : {
                top: w.scrollTop(),
                position: "absolute"
            }), (b.st.fixedBgPos === !1 || "auto" === b.st.fixedBgPos && !b.fixedContentPos) && b.bgOverlay.css({
                height: e.height(),
                position: "absolute"
            }), b.st.enableEscapeKey && e.on("keyup" + q, function(a) {
                27 === a.keyCode && b.close()
            }), w.on("resize" + q, function() {
                b.updateSize()
            }), b.st.closeOnContentClick || (g += " mfp-auto-cursor"), g && b.wrap.addClass(g);
            var l = b.wH = w.height(),
                o = {};
            if (b.fixedContentPos && b._hasScrollBar(l)) {
                var p = b._getScrollbarSize();
                p && (o.marginRight = p)
            }
            b.fixedContentPos && (b.isIE7 ? a("body, html").css("overflow", "hidden") : o.overflow = "hidden");
            var s = b.st.mainClass;
            return b.isIE7 && (s += " mfp-ie7"), s && b._addClassToMFP(s), b.updateItemHTML(), z("BuildControls"), a("html").css(o), b.bgOverlay.add(b.wrap).prependTo(b.st.prependTo || d), b._lastFocusedEl = document.activeElement, setTimeout(function() {
                b.content ? (b._addClassToMFP(r), b._setFocus()) : b.bgOverlay.addClass(r), e.on("focusin" + q, b._onFocusIn)
            }, 16), b.isOpen = !0, b.updateSize(l), z(n), c
        },
        close: function() {
            b.isOpen && (z(j), b.isOpen = !1, b.st.removalDelay && !b.isLowIE && b.supportsTransition ? (b._addClassToMFP(s), setTimeout(function() {
                b._close()
            }, b.st.removalDelay)) : b._close())
        },
        _close: function() {
            z(i);
            var c = s + " " + r + " ";
            if (b.bgOverlay.detach(), b.wrap.detach(), b.container.empty(), b.st.mainClass && (c += b.st.mainClass + " "), b._removeClassFromMFP(c), b.fixedContentPos) {
                var d = {
                    marginRight: ""
                };
                b.isIE7 ? a("body, html").css("overflow", "") : d.overflow = "", a("html").css(d)
            }
            e.off("keyup" + q + " focusin" + q), b.ev.off(q), b.wrap.attr("class", "mfp-wrap").removeAttr("style"), b.bgOverlay.attr("class", "mfp-bg"), b.container.attr("class", "mfp-container"), !b.st.showCloseBtn || b.st.closeBtnInside && b.currTemplate[b.currItem.type] !== !0 || b.currTemplate.closeBtn && b.currTemplate.closeBtn.detach(), b._lastFocusedEl && a(b._lastFocusedEl).focus(), b.currItem = null, b.content = null, b.currTemplate = null, b.prevHeight = 0, z(k)
        },
        updateSize: function(a) {
            if (b.isIOS) {
                var c = document.documentElement.clientWidth / window.innerWidth,
                    d = window.innerHeight * c;
                b.wrap.css("height", d), b.wH = d
            } else b.wH = a || w.height();
            b.fixedContentPos || b.wrap.css("height", b.wH), z("Resize")
        },
        updateItemHTML: function() {
            var c = b.items[b.index];
            b.contentContainer.detach(), b.content && b.content.detach(), c.parsed || (c = b.parseEl(b.index));
            var d = c.type;
            if (z("BeforeChange", [b.currItem ? b.currItem.type : "", d]), b.currItem = c, !b.currTemplate[d]) {
                var e = b.st[d] ? b.st[d].markup : !1;
                z("FirstMarkupParse", e), b.currTemplate[d] = e ? a(e) : !0
            }
            f && f !== c.type && b.container.removeClass("mfp-" + f + "-holder");
            var g = b["get" + d.charAt(0).toUpperCase() + d.slice(1)](c, b.currTemplate[d]);
            b.appendContent(g, d), c.preloaded = !0, z(o, c), f = c.type, b.container.prepend(b.contentContainer), z("AfterChange")
        },
        appendContent: function(a, c) {
            b.content = a, a ? b.st.showCloseBtn && b.st.closeBtnInside && b.currTemplate[c] === !0 ? b.content.find(".mfp-close").length || b.content.append(A()) : b.content = a : b.content = "", z(l), b.container.addClass("mfp-" + c + "-holder"), b.contentContainer.append(b.content)
        },
        parseEl: function(c) {
            var d, e = b.items[c];
            if (e.tagName ? e = {
                    el: a(e)
                } : (d = e.type, e = {
                    data: e,
                    src: e.src
                }), e.el) {
                for (var f = b.types, g = 0; f.length > g; g++)
                    if (e.el.hasClass("mfp-" + f[g])) {
                        d = f[g];
                        break
                    }
                e.src = e.el.attr("data-mfp-src"), e.src || (e.src = e.el.attr("href"))
            }
            return e.type = d || b.st.type || "inline", e.index = c, e.parsed = !0, b.items[c] = e, z("ElementParse", e), b.items[c]
        },
        addGroup: function(a, c) {
            var d = function(d) {
                d.mfpEl = this, b._openClick(d, a, c)
            };
            c || (c = {});
            var e = "click.magnificPopup";
            c.mainEl = a, c.items ? (c.isObj = !0, a.off(e).on(e, d)) : (c.isObj = !1, c.delegate ? a.off(e).on(e, c.delegate, d) : (c.items = a, a.off(e).on(e, d)))
        },
        _openClick: function(c, d, e) {
            var f = void 0 !== e.midClick ? e.midClick : a.magnificPopup.defaults.midClick;
            if (f || 2 !== c.which && !c.ctrlKey && !c.metaKey) {
                var g = void 0 !== e.disableOn ? e.disableOn : a.magnificPopup.defaults.disableOn;
                if (g)
                    if (a.isFunction(g)) {
                        if (!g.call(b)) return !0
                    } else if (g > w.width()) return !0;
                c.type && (c.preventDefault(), b.isOpen && c.stopPropagation()), e.el = a(c.mfpEl), e.delegate && (e.items = d.find(e.delegate)), b.open(e)
            }
        },
        updateStatus: function(a, d) {
            if (b.preloader) {
                c !== a && b.container.removeClass("mfp-s-" + c), d || "loading" !== a || (d = b.st.tLoading);
                var e = {
                    status: a,
                    text: d
                };
                z("UpdateStatus", e), a = e.status, d = e.text, b.preloader.html(d), b.preloader.find("a").on("click", function(a) {
                    a.stopImmediatePropagation()
                }), b.container.addClass("mfp-s-" + a), c = a
            }
        },
        _checkIfClose: function(c) {
            if (!a(c).hasClass(t)) {
                var d = b.st.closeOnContentClick,
                    e = b.st.closeOnBgClick;
                if (d && e) return !0;
                if (!b.content || a(c).hasClass("mfp-close") || b.preloader && c === b.preloader[0]) return !0;
                if (c === b.content[0] || a.contains(b.content[0], c)) {
                    if (d) return !0
                } else if (e && a.contains(document, c)) return !0;
                return !1
            }
        },
        _addClassToMFP: function(a) {
            b.bgOverlay.addClass(a), b.wrap.addClass(a)
        },
        _removeClassFromMFP: function(a) {
            this.bgOverlay.removeClass(a), b.wrap.removeClass(a)
        },
        _hasScrollBar: function(a) {
            return (b.isIE7 ? e.height() : document.body.scrollHeight) > (a || w.height())
        },
        _setFocus: function() {
            (b.st.focus ? b.content.find(b.st.focus).eq(0) : b.wrap).focus()
        },
        _onFocusIn: function(c) {
            return c.target === b.wrap[0] || a.contains(b.wrap[0], c.target) ? void 0 : (b._setFocus(), !1)
        },
        _parseMarkup: function(b, c, d) {
            var e;
            d.data && (c = a.extend(d.data, c)), z(m, [b, c, d]), a.each(c, function(a, c) {
                if (void 0 === c || c === !1) return !0;
                if (e = a.split("_"), e.length > 1) {
                    var d = b.find(q + "-" + e[0]);
                    if (d.length > 0) {
                        var f = e[1];
                        "replaceWith" === f ? d[0] !== c[0] && d.replaceWith(c) : "img" === f ? d.is("img") ? d.attr("src", c) : d.replaceWith('<img src="' + c + '" class="' + d.attr("class") + '" />') : d.attr(e[1], c)
                    }
                } else b.find(q + "-" + a).html(c)
            })
        },
        _getScrollbarSize: function() {
            if (void 0 === b.scrollbarSize) {
                var a = document.createElement("div");
                a.id = "mfp-sbm", a.style.cssText = "width: 99px; height: 99px; overflow: scroll; position: absolute; top: -9999px;", document.body.appendChild(a), b.scrollbarSize = a.offsetWidth - a.clientWidth, document.body.removeChild(a)
            }
            return b.scrollbarSize
        }
    }, a.magnificPopup = {
        instance: null,
        proto: u.prototype,
        modules: [],
        open: function(b, c) {
            return B(), b = b ? a.extend(!0, {}, b) : {}, b.isObj = !0, b.index = c || 0, this.instance.open(b)
        },
        close: function() {
            return a.magnificPopup.instance && a.magnificPopup.instance.close()
        },
        registerModule: function(b, c) {
            c.options && (a.magnificPopup.defaults[b] = c.options), a.extend(this.proto, c.proto), this.modules.push(b)
        },
        defaults: {
            disableOn: 0,
            key: null,
            midClick: !1,
            mainClass: "",
            preloader: !0,
            focus: "",
            closeOnContentClick: !1,
            closeOnBgClick: !0,
            closeBtnInside: !0,
            showCloseBtn: !0,
            enableEscapeKey: !0,
            modal: !1,
            alignTop: !1,
            removalDelay: 0,
            prependTo: null,
            fixedContentPos: "auto",
            fixedBgPos: "auto",
            overflowY: "auto",
            closeMarkup: '<button title="%title%" type="button" class="mfp-close">&times;</button>',
            tClose: "Close (Esc)",
            tLoading: "Loading..."
        }
    }, a.fn.magnificPopup = function(c) {
        B();
        var d = a(this);
        if ("string" == typeof c)
            if ("open" === c) {
                var e, f = v ? d.data("magnificPopup") : d[0].magnificPopup,
                    g = parseInt(arguments[1], 10) || 0;
                f.items ? e = f.items[g] : (e = d, f.delegate && (e = e.find(f.delegate)), e = e.eq(g)), b._openClick({
                    mfpEl: e
                }, d, f)
            } else b.isOpen && b[c].apply(b, Array.prototype.slice.call(arguments, 1));
        else c = a.extend(!0, {}, c), v ? d.data("magnificPopup", c) : d[0].magnificPopup = c, b.addGroup(d, c);
        return d
    };
    var D, E, F, G = "inline",
        H = function() {
            F && (E.after(F.addClass(D)).detach(), F = null)
        };
    a.magnificPopup.registerModule(G, {
        options: {
            hiddenClass: "hide",
            markup: "",
            tNotFound: "Content not found"
        },
        proto: {
            initInline: function() {
                b.types.push(G), x(i + "." + G, function() {
                    H()
                })
            },
            getInline: function(c, d) {
                if (H(), c.src) {
                    var e = b.st.inline,
                        f = a(c.src);
                    if (f.length) {
                        var g = f[0].parentNode;
                        g && g.tagName && (E || (D = e.hiddenClass, E = y(D), D = "mfp-" + D), F = f.after(E).detach().removeClass(D)), b.updateStatus("ready")
                    } else b.updateStatus("error", e.tNotFound), f = a("<div>");
                    return c.inlineElement = f, f
                }
                return b.updateStatus("ready"), b._parseMarkup(d, {}, c), d
            }
        }
    });
    var I, J = "ajax",
        K = function() {
            I && d.removeClass(I)
        },
        L = function() {
            K(), b.req && b.req.abort()
        };
    a.magnificPopup.registerModule(J, {
        options: {
            settings: null,
            cursor: "mfp-ajax-cur",
            tError: '<a href="%url%">The content</a> could not be loaded.'
        },
        proto: {
            initAjax: function() {
                b.types.push(J), I = b.st.ajax.cursor, x(i + "." + J, L), x("BeforeChange." + J, L)
            },
            getAjax: function(c) {
                I && d.addClass(I), b.updateStatus("loading");
                var e = a.extend({
                    url: c.src,
                    success: function(d, e, f) {
                        var g = {
                            data: d,
                            xhr: f
                        };
                        z("ParseAjax", g), b.appendContent(a(g.data), J), c.finished = !0, K(), b._setFocus(), setTimeout(function() {
                            b.wrap.addClass(r)
                        }, 16), b.updateStatus("ready"), z("AjaxContentAdded")
                    },
                    error: function() {
                        K(), c.finished = c.loadError = !0, b.updateStatus("error", b.st.ajax.tError.replace("%url%", c.src))
                    }
                }, b.st.ajax.settings);
                return b.req = a.ajax(e), ""
            }
        }
    });
    var M, N = function(c) {
        if (c.data && void 0 !== c.data.title) return c.data.title;
        var d = b.st.image.titleSrc;
        if (d) {
            if (a.isFunction(d)) return d.call(b, c);
            if (c.el) return c.el.attr(d) || ""
        }
        return ""
    };
    a.magnificPopup.registerModule("image", {
        options: {
            markup: '<div class="mfp-figure"><div class="mfp-close"></div><figure><div class="mfp-img"></div><figcaption><div class="mfp-bottom-bar"><div class="mfp-title"></div><div class="mfp-counter"></div></div></figcaption></figure></div>',
            cursor: "mfp-zoom-out-cur",
            titleSrc: "title",
            verticalFit: !0,
            tError: '<a href="%url%">The image</a> could not be loaded.'
        },
        proto: {
            initImage: function() {
                var a = b.st.image,
                    c = ".image";
                b.types.push("image"), x(n + c, function() {
                    "image" === b.currItem.type && a.cursor && d.addClass(a.cursor)
                }), x(i + c, function() {
                    a.cursor && d.removeClass(a.cursor), w.off("resize" + q)
                }), x("Resize" + c, b.resizeImage), b.isLowIE && x("AfterChange", b.resizeImage)
            },
            resizeImage: function() {
                var a = b.currItem;
                if (a && a.img && b.st.image.verticalFit) {
                    var c = 0;
                    b.isLowIE && (c = parseInt(a.img.css("padding-top"), 10) + parseInt(a.img.css("padding-bottom"), 10)), a.img.css("max-height", b.wH - c)
                }
            },
            _onImageHasSize: function(a) {
                a.img && (a.hasSize = !0, M && clearInterval(M), a.isCheckingImgSize = !1, z("ImageHasSize", a), a.imgHidden && (b.content && b.content.removeClass("mfp-loading"), a.imgHidden = !1))
            },
            findImageSize: function(a) {
                var c = 0,
                    d = a.img[0],
                    e = function(f) {
                        M && clearInterval(M), M = setInterval(function() {
                            return d.naturalWidth > 0 ? void b._onImageHasSize(a) : (c > 200 && clearInterval(M), c++, void(3 === c ? e(10) : 40 === c ? e(50) : 100 === c && e(500)))
                        }, f)
                    };
                e(1)
            },
            getImage: function(c, d) {
                var e = 0,
                    f = function() {
                        c && (c.img[0].complete ? (c.img.off(".mfploader"), c === b.currItem && (b._onImageHasSize(c), b.updateStatus("ready")), c.hasSize = !0, c.loaded = !0, z("ImageLoadComplete")) : (e++, 200 > e ? setTimeout(f, 100) : g()))
                    },
                    g = function() {
                        c && (c.img.off(".mfploader"), c === b.currItem && (b._onImageHasSize(c), b.updateStatus("error", h.tError.replace("%url%", c.src))), c.hasSize = !0, c.loaded = !0, c.loadError = !0)
                    },
                    h = b.st.image,
                    i = d.find(".mfp-img");
                if (i.length) {
                    var j = document.createElement("img");
                    j.className = "mfp-img", c.img = a(j).on("load.mfploader", f).on("error.mfploader", g), j.src = c.src, i.is("img") && (c.img = c.img.clone()), j = c.img[0], j.naturalWidth > 0 ? c.hasSize = !0 : j.width || (c.hasSize = !1)
                }
                return b._parseMarkup(d, {
                    title: N(c),
                    img_replaceWith: c.img
                }, c), b.resizeImage(), c.hasSize ? (M && clearInterval(M), c.loadError ? (d.addClass("mfp-loading"), b.updateStatus("error", h.tError.replace("%url%", c.src))) : (d.removeClass("mfp-loading"), b.updateStatus("ready")), d) : (b.updateStatus("loading"), c.loading = !0, c.hasSize || (c.imgHidden = !0, d.addClass("mfp-loading"), b.findImageSize(c)), d)
            }
        }
    });
    var O, P = function() {
        return void 0 === O && (O = void 0 !== document.createElement("p").style.MozTransform), O
    };
    a.magnificPopup.registerModule("zoom", {
        options: {
            enabled: !1,
            easing: "ease-in-out",
            duration: 300,
            opener: function(a) {
                return a.is("img") ? a : a.find("img")
            }
        },
        proto: {
            initZoom: function() {
                var a, c = b.st.zoom,
                    d = ".zoom";
                if (c.enabled && b.supportsTransition) {
                    var e, f, g = c.duration,
                        h = function(a) {
                            var b = a.clone().removeAttr("style").removeAttr("class").addClass("mfp-animated-image"),
                                d = "all " + c.duration / 1e3 + "s " + c.easing,
                                e = {
                                    position: "fixed",
                                    zIndex: 9999,
                                    left: 0,
                                    top: 0,
                                    "-webkit-backface-visibility": "hidden"
                                },
                                f = "transition";
                            return e["-webkit-" + f] = e["-moz-" + f] = e["-o-" + f] = e[f] = d, b.css(e), b
                        },
                        k = function() {
                            b.content.css("visibility", "visible")
                        };
                    x("BuildControls" + d, function() {
                        if (b._allowZoom()) {
                            if (clearTimeout(e), b.content.css("visibility", "hidden"), a = b._getItemToZoom(), !a) return void k();
                            f = h(a), f.css(b._getOffset()), b.wrap.append(f), e = setTimeout(function() {
                                f.css(b._getOffset(!0)), e = setTimeout(function() {
                                    k(), setTimeout(function() {
                                        f.remove(), a = f = null, z("ZoomAnimationEnded")
                                    }, 16)
                                }, g)
                            }, 16)
                        }
                    }), x(j + d, function() {
                        if (b._allowZoom()) {
                            if (clearTimeout(e), b.st.removalDelay = g, !a) {
                                if (a = b._getItemToZoom(), !a) return;
                                f = h(a)
                            }
                            f.css(b._getOffset(!0)), b.wrap.append(f), b.content.css("visibility", "hidden"), setTimeout(function() {
                                f.css(b._getOffset())
                            }, 16)
                        }
                    }), x(i + d, function() {
                        b._allowZoom() && (k(), f && f.remove(), a = null)
                    })
                }
            },
            _allowZoom: function() {
                return "image" === b.currItem.type
            },
            _getItemToZoom: function() {
                return b.currItem.hasSize ? b.currItem.img : !1
            },
            _getOffset: function(c) {
                var d;
                d = c ? b.currItem.img : b.st.zoom.opener(b.currItem.el || b.currItem);
                var e = d.offset(),
                    f = parseInt(d.css("padding-top"), 10),
                    g = parseInt(d.css("padding-bottom"), 10);
                e.top -= a(window).scrollTop() - f;
                var h = {
                    width: d.width(),
                    height: (v ? d.innerHeight() : d[0].offsetHeight) - g - f
                };
                return P() ? h["-moz-transform"] = h.transform = "translate(" + e.left + "px," + e.top + "px)" : (h.left = e.left, h.top = e.top), h
            }
        }
    });
    var Q = "iframe",
        R = "//about:blank",
        S = function(a) {
            if (b.currTemplate[Q]) {
                var c = b.currTemplate[Q].find("iframe");
                c.length && (a || (c[0].src = R), b.isIE8 && c.css("display", a ? "block" : "none"))
            }
        };
    a.magnificPopup.registerModule(Q, {
        options: {
            markup: '<div class="mfp-iframe-scaler"><div class="mfp-close"></div><iframe class="mfp-iframe" src="//about:blank" frameborder="0" allowfullscreen></iframe></div>',
            srcAction: "iframe_src",
            patterns: {
                youtube: {
                    index: "youtube.com",
                    id: "v=",
                    src: "//www.youtube.com/embed/%id%?autoplay=1"
                },
                vimeo: {
                    index: "vimeo.com/",
                    id: "/",
                    src: "//player.vimeo.com/video/%id%?autoplay=1"
                },
                gmaps: {
                    index: "//maps.google.",
                    src: "%id%&output=embed"
                }
            }
        },
        proto: {
            initIframe: function() {
                b.types.push(Q), x("BeforeChange", function(a, b, c) {
                    b !== c && (b === Q ? S() : c === Q && S(!0))
                }), x(i + "." + Q, function() {
                    S()
                })
            },
            getIframe: function(c, d) {
                var e = c.src,
                    f = b.st.iframe;
                a.each(f.patterns, function() {
                    return e.indexOf(this.index) > -1 ? (this.id && (e = "string" == typeof this.id ? e.substr(e.lastIndexOf(this.id) + this.id.length, e.length) : this.id.call(this, e)), e = this.src.replace("%id%", e), !1) : void 0
                });
                var g = {};
                return f.srcAction && (g[f.srcAction] = e), b._parseMarkup(d, g, c), b.updateStatus("ready"), d
            }
        }
    });
    var T = function(a) {
            var c = b.items.length;
            return a > c - 1 ? a - c : 0 > a ? c + a : a
        },
        U = function(a, b, c) {
            return a.replace(/%curr%/gi, b + 1).replace(/%total%/gi, c)
        };
    a.magnificPopup.registerModule("gallery", {
        options: {
            enabled: !1,
            arrowMarkup: '<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>',
            preload: [0, 2],
            navigateByImgClick: !0,
            arrows: !0,
            tPrev: "Previous (Left arrow key)",
            tNext: "Next (Right arrow key)",
            tCounter: "%curr% of %total%"
        },
        proto: {
            initGallery: function() {
                var c = b.st.gallery,
                    d = ".mfp-gallery",
                    f = Boolean(a.fn.mfpFastClick);
                return b.direction = !0, c && c.enabled ? (g += " mfp-gallery", x(n + d, function() {
                    c.navigateByImgClick && b.wrap.on("click" + d, ".mfp-img", function() {
                        return b.items.length > 1 ? (b.next(), !1) : void 0
                    }), e.on("keydown" + d, function(a) {
                        37 === a.keyCode ? b.prev() : 39 === a.keyCode && b.next()
                    })
                }), x("UpdateStatus" + d, function(a, c) {
                    c.text && (c.text = U(c.text, b.currItem.index, b.items.length))
                }), x(m + d, function(a, d, e, f) {
                    var g = b.items.length;
                    e.counter = g > 1 ? U(c.tCounter, f.index, g) : ""
                }), x("BuildControls" + d, function() {
                    if (b.items.length > 1 && c.arrows && !b.arrowLeft) {
                        var d = c.arrowMarkup,
                            e = b.arrowLeft = a(d.replace(/%title%/gi, c.tPrev).replace(/%dir%/gi, "left")).addClass(t),
                            g = b.arrowRight = a(d.replace(/%title%/gi, c.tNext).replace(/%dir%/gi, "right")).addClass(t),
                            h = f ? "mfpFastClick" : "click";
                        e[h](function() {
                            b.prev()
                        }), g[h](function() {
                            b.next()
                        }), b.isIE7 && (y("b", e[0], !1, !0), y("a", e[0], !1, !0), y("b", g[0], !1, !0), y("a", g[0], !1, !0)), b.container.append(e.add(g))
                    }
                }), x(o + d, function() {
                    b._preloadTimeout && clearTimeout(b._preloadTimeout), b._preloadTimeout = setTimeout(function() {
                        b.preloadNearbyImages(), b._preloadTimeout = null
                    }, 16)
                }), void x(i + d, function() {
                    e.off(d), b.wrap.off("click" + d), b.arrowLeft && f && b.arrowLeft.add(b.arrowRight).destroyMfpFastClick(), b.arrowRight = b.arrowLeft = null
                })) : !1
            },
            next: function() {
                b.direction = !0, b.index = T(b.index + 1), b.updateItemHTML()
            },
            prev: function() {
                b.direction = !1, b.index = T(b.index - 1), b.updateItemHTML()
            },
            goTo: function(a) {
                b.direction = a >= b.index, b.index = a, b.updateItemHTML()
            },
            preloadNearbyImages: function() {
                var a, c = b.st.gallery.preload,
                    d = Math.min(c[0], b.items.length),
                    e = Math.min(c[1], b.items.length);
                for (a = 1;
                    (b.direction ? e : d) >= a; a++) b._preloadItem(b.index + a);
                for (a = 1;
                    (b.direction ? d : e) >= a; a++) b._preloadItem(b.index - a)
            },
            _preloadItem: function(c) {
                if (c = T(c), !b.items[c].preloaded) {
                    var d = b.items[c];
                    d.parsed || (d = b.parseEl(c)), z("LazyLoad", d), "image" === d.type && (d.img = a('<img class="mfp-img" />').on("load.mfploader", function() {
                        d.hasSize = !0
                    }).on("error.mfploader", function() {
                        d.hasSize = !0, d.loadError = !0, z("LazyLoadError", d)
                    }).attr("src", d.src)), d.preloaded = !0
                }
            }
        }
    });
    var V = "retina";
    a.magnificPopup.registerModule(V, {
            options: {
                replaceSrc: function(a) {
                    return a.src.replace(/\.\w+$/, function(a) {
                        return "@2x" + a
                    })
                },
                ratio: 1
            },
            proto: {
                initRetina: function() {
                    if (window.devicePixelRatio > 1) {
                        var a = b.st.retina,
                            c = a.ratio;
                        c = isNaN(c) ? c() : c, c > 1 && (x("ImageHasSize." + V, function(a, b) {
                            b.img.css({
                                "max-width": b.img[0].naturalWidth / c,
                                width: "100%"
                            })
                        }), x("ElementParse." + V, function(b, d) {
                            d.src = a.replaceSrc(d, c)
                        }))
                    }
                }
            }
        }),
        function() {
            var b = 1e3,
                c = "ontouchstart" in window,
                d = function() {
                    w.off("touchmove" + f + " touchend" + f)
                },
                e = "mfpFastClick",
                f = "." + e;
            a.fn.mfpFastClick = function(e) {
                return a(this).each(function() {
                    var g, h = a(this);
                    if (c) {
                        var i, j, k, l, m, n;
                        h.on("touchstart" + f, function(a) {
                            l = !1, n = 1, m = a.originalEvent ? a.originalEvent.touches[0] : a.touches[0], j = m.clientX, k = m.clientY, w.on("touchmove" + f, function(a) {
                                m = a.originalEvent ? a.originalEvent.touches : a.touches, n = m.length, m = m[0], (Math.abs(m.clientX - j) > 10 || Math.abs(m.clientY - k) > 10) && (l = !0, d())
                            }).on("touchend" + f, function(a) {
                                d(), l || n > 1 || (g = !0, a.preventDefault(), clearTimeout(i), i = setTimeout(function() {
                                    g = !1
                                }, b), e())
                            })
                        })
                    }
                    h.on("click" + f, function() {
                        g || e()
                    })
                })
            }, a.fn.destroyMfpFastClick = function() {
                a(this).off("touchstart" + f + " click" + f), c && w.off("touchmove" + f + " touchend" + f)
            }
        }(), B()
}(window.jQuery || window.Zepto),
function(a) {
    function b(b, c) {
        var d, e = this,
            f = window.navigator,
            g = f.userAgent.toLowerCase();
        e.uid = a.rsModules.uid++, e.ns = ".rs" + e.uid;
        var h, i = document.createElement("div").style,
            j = ["webkit", "Moz", "ms", "O"],
            k = "",
            l = 0;
        for (d = 0; d < j.length; d++) h = j[d], !k && h + "Transform" in i && (k = h), h = h.toLowerCase(), window.requestAnimationFrame || (window.requestAnimationFrame = window[h + "RequestAnimationFrame"], window.cancelAnimationFrame = window[h + "CancelAnimationFrame"] || window[h + "CancelRequestAnimationFrame"]);
        window.requestAnimationFrame || (window.requestAnimationFrame = function(a) {
            var b = (new Date).getTime(),
                c = Math.max(0, 16 - (b - l)),
                d = window.setTimeout(function() {
                    a(b + c)
                }, c);
            return l = b + c, d
        }), window.cancelAnimationFrame || (window.cancelAnimationFrame = function(a) {
            clearTimeout(a)
        }), e.isIPAD = g.match(/(ipad)/), e.isIOS = e.isIPAD || g.match(/(iphone|ipod)/), d = function(a) {
            return a = /(chrome)[ \/]([\w.]+)/.exec(a) || /(webkit)[ \/]([\w.]+)/.exec(a) || /(opera)(?:.*version|)[ \/]([\w.]+)/.exec(a) || /(msie) ([\w.]+)/.exec(a) || 0 > a.indexOf("compatible") && /(mozilla)(?:.*? rv:([\w.]+)|)/.exec(a) || [], {
                browser: a[1] || "",
                version: a[2] || "0"
            }
        }(g), j = {}, d.browser && (j[d.browser] = !0, j.version = d.version), j.chrome && (j.webkit = !0), e._a = j, e.isAndroid = -1 < g.indexOf("android"), e.slider = a(b), e.ev = a(e), e._b = a(document), e.st = a.extend({}, a.fn.royalSlider.defaults, c), e._c = e.st.transitionSpeed, e._d = 0, !e.st.allowCSS3 || j.webkit && !e.st.allowCSS3OnWebkit || (d = k + (k ? "T" : "t"), e._e = d + "ransform" in i && d + "ransition" in i, e._e && (e._f = k + (k ? "P" : "p") + "erspective" in i)), k = k.toLowerCase(), e._g = "-" + k + "-", e._h = "vertical" === e.st.slidesOrientation ? !1 : !0, e._i = e._h ? "left" : "top", e._j = e._h ? "width" : "height", e._k = -1, e._l = "fade" === e.st.transitionType ? !1 : !0, e._l || (e.st.sliderDrag = !1, e._m = 10), e._n = "z-index:0; display:none; opacity:0;", e._o = 0, e._p = 0, e._q = 0, a.each(a.rsModules, function(a, b) {
            "uid" !== a && b.call(e)
        }), e.slides = [], e._r = 0, (e.st.slides ? a(e.st.slides) : e.slider.children().detach()).each(function() {
            e._s(this, !0)
        }), e.st.randomizeSlides && e.slides.sort(function() {
            return .5 - Math.random()
        }), e.numSlides = e.slides.length, e._t(), e.st.startSlideId ? e.st.startSlideId > e.numSlides - 1 && (e.st.startSlideId = e.numSlides - 1) : e.st.startSlideId = 0, e._o = e.staticSlideId = e.currSlideId = e._u = e.st.startSlideId, e.currSlide = e.slides[e.currSlideId], e._v = 0, e.pointerMultitouch = !1, e.slider.addClass((e._h ? "rsHor" : "rsVer") + (e._l ? "" : " rsFade")), i = '<div class="rsOverflow"><div class="rsContainer">', e.slidesSpacing = e.st.slidesSpacing, e._w = (e._h ? e.slider.width() : e.slider.height()) + e.st.slidesSpacing, e._x = Boolean(0 < e._y), 1 >= e.numSlides && (e._z = !1), e._a1 = e._z && e._l ? 2 === e.numSlides ? 1 : 2 : 0, e._b1 = 6 > e.numSlides ? e.numSlides : 6, e._c1 = 0, e._d1 = 0, e.slidesJQ = [];
        for (d = 0; d < e.numSlides; d++) e.slidesJQ.push(a('<div style="' + (e._l ? "" : d !== e.currSlideId ? e._n : "z-index:0;") + '" class="rsSlide "></div>'));
        e._e1 = i = a(i + "</div></div>");
        var m = e.ns,
            k = function(a, b, c, d, f) {
                e._j1 = a + b + m, e._k1 = a + c + m, e._l1 = a + d + m, f && (e._m1 = a + f + m)
            };
        d = f.pointerEnabled, e.pointerEnabled = d || f.msPointerEnabled, e.pointerEnabled ? (e.hasTouch = !1, e._n1 = .2, e.pointerMultitouch = Boolean(1 < f[(d ? "m" : "msM") + "axTouchPoints"]), d ? k("pointer", "down", "move", "up", "cancel") : k("MSPointer", "Down", "Move", "Up", "Cancel")) : (e.isIOS ? e._j1 = e._k1 = e._l1 = e._m1 = "" : k("mouse", "down", "move", "up"), "ontouchstart" in window || "createTouch" in document ? (e.hasTouch = !0, e._j1 += " touchstart" + m, e._k1 += " touchmove" + m, e._l1 += " touchend" + m, e._m1 += " touchcancel" + m, e._n1 = .5, e.st.sliderTouch && (e._f1 = !0)) : (e.hasTouch = !1, e._n1 = .2)), e.st.sliderDrag && (e._f1 = !0, j.msie || j.opera ? e._g1 = e._h1 = "move" : j.mozilla ? (e._g1 = "-moz-grab", e._h1 = "-moz-grabbing") : j.webkit && -1 != f.platform.indexOf("Mac") && (e._g1 = "-webkit-grab", e._h1 = "-webkit-grabbing"), e._i1()), e.slider.html(i), e._o1 = e.st.controlsInside ? e._e1 : e.slider, e._p1 = e._e1.children(".rsContainer"), e.pointerEnabled && e._p1.css((d ? "" : "-ms-") + "touch-action", e._h ? "pan-y" : "pan-x"), e._q1 = a('<div class="rsPreloader"></div>'), f = e._p1.children(".rsSlide"), e._r1 = e.slidesJQ[e.currSlideId], e._s1 = 0, e._e ? (e._t1 = "transition-property", e._u1 = "transition-duration", e._v1 = "transition-timing-function", e._w1 = e._x1 = e._g + "transform", e._f ? (j.webkit && !j.chrome && e.slider.addClass("rsWebkit3d"), e._y1 = "translate3d(", e._z1 = "px, ", e._a2 = "px, 0px)") : (e._y1 = "translate(", e._z1 = "px, ", e._a2 = "px)"), e._l ? e._p1[e._g + e._t1] = e._g + "transform" : (j = {}, j[e._g + e._t1] = "opacity", j[e._g + e._u1] = e.st.transitionSpeed + "ms", j[e._g + e._v1] = e.st.css3easeInOut, f.css(j))) : (e._x1 = "left", e._w1 = "top");
        var n;
        a(window).on("resize" + e.ns, function() {
            n && clearTimeout(n), n = setTimeout(function() {
                e.updateSliderSize()
            }, 50)
        }), e.ev.trigger("rsAfterPropsSetup"), e.updateSliderSize(), e.st.keyboardNavEnabled && e._b2(), e.st.arrowsNavHideOnTouch && (e.hasTouch || e.pointerMultitouch) && (e.st.arrowsNav = !1), e.st.arrowsNav && (f = e._o1, a('<div class="rsArrow rsArrowLeft"><div class="rsArrowIcn"></div></div><div class="rsArrow rsArrowRight"><div class="rsArrowIcn"></div></div>').appendTo(f), e._c2 = f.children(".rsArrowLeft").click(function(a) {
            a.preventDefault(), e.prev()
        }), e._d2 = f.children(".rsArrowRight").click(function(a) {
            a.preventDefault(), e.next()
        }), e.st.arrowsNavAutoHide && !e.hasTouch && (e._c2.addClass("rsHidden"), e._d2.addClass("rsHidden"), f.one("mousemove.arrowshover", function() {
            e._c2.removeClass("rsHidden"), e._d2.removeClass("rsHidden")
        }), f.hover(function() {
            e._e2 || (e._c2.removeClass("rsHidden"), e._d2.removeClass("rsHidden"))
        }, function() {
            e._e2 || (e._c2.addClass("rsHidden"), e._d2.addClass("rsHidden"))
        })), e.ev.on("rsOnUpdateNav", function() {
            e._f2()
        }), e._f2()), e._f1 ? e._p1.on(e._j1, function(a) {
            e._g2(a)
        }) : e.dragSuccess = !1;
        var o = ["rsPlayBtnIcon", "rsPlayBtn", "rsCloseVideoBtn", "rsCloseVideoIcn"];
        e._p1.click(function(b) {
            if (!e.dragSuccess) {
                var c = a(b.target).attr("class");
                if (-1 !== a.inArray(c, o) && e.toggleVideo()) return !1;
                if (e.st.navigateByClick && !e._h2) {
                    if (a(b.target).closest(".rsNoDrag", e._r1).length) return !0;
                    e._i2(b)
                }
                e.ev.trigger("rsSlideClick", b)
            }
        }).on("click.rs", "a", function() {
            return e.dragSuccess ? !1 : (e._h2 = !0, void setTimeout(function() {
                e._h2 = !1
            }, 3))
        }), e.ev.trigger("rsAfterInit")
    }
    a.rsModules || (a.rsModules = {
        uid: 0
    }), b.prototype = {
        constructor: b,
        _i2: function(a) {
            a = a[this._h ? "pageX" : "pageY"] - this._j2, a >= this._q ? this.next() : 0 > a && this.prev()
        },
        _t: function() {
            var a;
            a = this.st.numImagesToPreload, (this._z = this.st.loop) && (2 === this.numSlides ? (this._z = !1, this.st.loopRewind = !0) : 2 > this.numSlides && (this.st.loopRewind = this._z = !1)), this._z && a > 0 && (4 >= this.numSlides ? a = 1 : this.st.numImagesToPreload > (this.numSlides - 1) / 2 && (a = Math.floor((this.numSlides - 1) / 2))), this._y = a
        },
        _s: function(b, c) {
            function d(a, b) {
                if (h.images.push(b ? a.attr(b) : a.text()), i) {
                    i = !1, h.caption = "src" === b ? a.attr("alt") : a.contents(), h.image = h.images[0], h.videoURL = a.attr("data-rsVideo");
                    var c = a.attr("data-rsw"),
                        d = a.attr("data-rsh");
                    "undefined" != typeof c && !1 !== c && "undefined" != typeof d && !1 !== d ? (h.iW = parseInt(c, 10), h.iH = parseInt(d, 10)) : g.st.imgWidth && g.st.imgHeight && (h.iW = g.st.imgWidth, h.iH = g.st.imgHeight)
                }
            }
            var e, f, g = this,
                h = {},
                i = !0;
            return b = a(b), g._k2 = b, g.ev.trigger("rsBeforeParseNode", [b, h]), h.stopParsing ? void 0 : (b = g._k2, h.id = g._r, h.contentAdded = !1, g._r++, h.images = [], h.isBig = !1, h.hasCover || (b.hasClass("rsImg") ? (f = b, e = !0) : (f = b.find(".rsImg"), f.length && (e = !0)), e ? (h.bigImage = f.eq(0).attr("data-rsBigImg"), f.each(function() {
                var b = a(this);
                b.is("a") ? d(b, "href") : b.is("img") ? d(b, "src") : d(b)
            })) : b.is("img") && (b.addClass("rsImg rsMainSlideImage"), d(b, "src"))), f = b.find(".rsCaption"), f.length && (h.caption = f.remove()), h.content = b, g.ev.trigger("rsAfterParseNode", [b, h]), c && g.slides.push(h), 0 === h.images.length && (h.isLoaded = !0, h.isRendered = !1, h.isLoading = !1, h.images = null), h)
        },
        _b2: function() {
            var a, b, c = this,
                d = function(a) {
                    37 === a ? c.prev() : 39 === a && c.next()
                };
            c._b.on("keydown" + c.ns, function(e) {
                c._l2 || (b = e.keyCode, 37 !== b && 39 !== b || a || (d(b), a = setInterval(function() {
                    d(b)
                }, 700)))
            }).on("keyup" + c.ns, function() {
                a && (clearInterval(a), a = null)
            })
        },
        goTo: function(a, b) {
            a !== this.currSlideId && this._m2(a, this.st.transitionSpeed, !0, !b)
        },
        destroy: function(b) {
            this.ev.trigger("rsBeforeDestroy"), this._b.off("keydown" + this.ns + " keyup" + this.ns + " " + this._k1 + " " + this._l1), this._p1.off(this._j1 + " click"), this.slider.data("royalSlider", null), a.removeData(this.slider, "royalSlider"), a(window).off("resize" + this.ns), this.loadingTimeout && clearTimeout(this.loadingTimeout), b && this.slider.remove(), this.ev = this.slider = this.slides = null
        },
        _n2: function(b, c) {
            function d(c, d, g) {
                c.isAdded ? (e(d, c), f(d, c)) : (g || (g = j.slidesJQ[d]), c.holder ? g = c.holder : (g = j.slidesJQ[d] = a(g), c.holder = g), c.appendOnLoaded = !1, f(d, c, g), e(d, c), j._p2(c, g, b), c.isAdded = !0)
            }

            function e(a, c) {
                c.contentAdded || (j.setItemHtml(c, b), b || (c.contentAdded = !0))
            }

            function f(a, b, c) {
                j._l && (c || (c = j.slidesJQ[a]), c.css(j._i, (a + j._d1 + m) * j._w))
            }

            function g(a) {
                if (k) {
                    if (a > l - 1) return g(a - l);
                    if (0 > a) return g(l + a)
                }
                return a
            }
            var h, i, j = this,
                k = j._z,
                l = j.numSlides;
            if (!isNaN(c)) return g(c);
            var m, n, o = j.currSlideId,
                p = b ? Math.abs(j._o2 - j.currSlideId) >= j.numSlides - 1 ? 0 : 1 : j._y,
                q = Math.min(2, p),
                r = !1,
                s = !1;
            for (i = o; o + 1 + q > i; i++)
                if (n = g(i), (h = j.slides[n]) && (!h.isAdded || !h.positionSet)) {
                    r = !0;
                    break
                }
            for (i = o - 1; i > o - 1 - q; i--)
                if (n = g(i), (h = j.slides[n]) && (!h.isAdded || !h.positionSet)) {
                    s = !0;
                    break
                }
            if (r)
                for (i = o; o + p + 1 > i; i++) n = g(i), m = Math.floor((j._u - (o - i)) / j.numSlides) * j.numSlides, (h = j.slides[n]) && d(h, n);
            if (s)
                for (i = o - 1; i > o - 1 - p; i--) n = g(i), m = Math.floor((j._u - (o - i)) / l) * l, (h = j.slides[n]) && d(h, n);
            if (!b)
                for (q = g(o - p), o = g(o + p), p = q > o ? 0 : q, i = 0; l > i; i++) q > o && i > q - 1 || !(p > i || i > o) || (h = j.slides[i]) && h.holder && (h.holder.detach(), h.isAdded = !1)
        },
        setItemHtml: function(b, c) {
            var d = this,
                e = function() {
                    if (b.images) {
                        if (!b.isLoading) {
                            var c, e;
                            if (b.content.hasClass("rsImg") ? (c = b.content, e = !0) : c = b.content.find(".rsImg:not(img)"), c && !c.is("img") && c.each(function() {
                                    var c = a(this),
                                        d = '<img class="rsImg" src="' + (c.is("a") ? c.attr("href") : c.text()) + '" />';
                                    e ? b.content = a(d) : c.replaceWith(d)
                                }), c = e ? b.content : b.content.find("img.rsImg"), j(), c.eq(0).addClass("rsMainSlideImage"), b.iW && b.iH && (b.isLoaded || d._q2(b), h()), b.isLoading = !0, b.isBig) a("<img />").on("load.rs error.rs", function() {
                                a(this).off("load.rs error.rs"), f([this], !0)
                            }).attr("src", b.image);
                            else {
                                b.loaded = [], b.numStartedLoad = 0, c = function() {
                                    a(this).off("load.rs error.rs"), b.loaded.push(this), b.loaded.length === b.numStartedLoad && f(b.loaded, !1)
                                };
                                for (var g = 0; g < b.images.length; g++) {
                                    var i = a("<img />");
                                    b.numStartedLoad++, i.on("load.rs error.rs", c).attr("src", b.images[g])
                                }
                            }
                        }
                    } else b.isRendered = !0, b.isLoaded = !0, b.isLoading = !1, h(!0)
                },
                f = function(a, c) {
                    if (a.length) {
                        var d = a[0];
                        if (c !== b.isBig)(d = b.holder.children()) && 1 < d.length && k();
                        else if (b.iW && b.iH) g();
                        else if (b.iW = d.width, b.iH = d.height, b.iW && b.iH) g();
                        else {
                            var e = new Image;
                            e.onload = function() {
                                e.width ? (b.iW = e.width, b.iH = e.height, g()) : setTimeout(function() {
                                    e.width && (b.iW = e.width, b.iH = e.height), g()
                                }, 1e3)
                            }, e.src = d.src
                        }
                    } else g()
                },
                g = function() {
                    b.isLoaded = !0, b.isLoading = !1, h(), k(), i()
                },
                h = function() {
                    if (!b.isAppended && d.ev) {
                        var a = d.st.visibleNearby,
                            e = b.id - d._o;
                        c || b.appendOnLoaded || !d.st.fadeinLoadedSlide || 0 !== e && (!(a || d._r2 || d._l2) || -1 !== e && 1 !== e) || (a = {
                            visibility: "visible",
                            opacity: 0
                        }, a[d._g + "transition"] = "opacity 400ms ease-in-out", b.content.css(a), setTimeout(function() {
                            b.content.css("opacity", 1)
                        }, 16)), b.holder.find(".rsPreloader").length ? b.holder.append(b.content) : b.holder.html(b.content), b.isAppended = !0, b.isLoaded && (d._q2(b), i()), b.sizeReady || (b.sizeReady = !0, setTimeout(function() {
                            d.ev.trigger("rsMaybeSizeReady", b)
                        }, 100))
                    }
                },
                i = function() {
                    !b.loadedTriggered && d.ev && (b.isLoaded = b.loadedTriggered = !0, b.holder.trigger("rsAfterContentSet"), d.ev.trigger("rsAfterContentSet", b))
                },
                j = function() {
                    d.st.usePreloader && b.holder.html(d._q1.clone())
                },
                k = function(a) {
                    d.st.usePreloader && (a = b.holder.find(".rsPreloader"), a.length && a.remove())
                };
            b.isLoaded ? h() : c ? !d._l && b.images && b.iW && b.iH ? e() : (b.holder.isWaiting = !0, j(), b.holder.slideId = -99) : e()
        },
        _p2: function(a) {
            this._p1.append(a.holder), a.appendOnLoaded = !1
        },
        _g2: function(b, c) {
            var d, e = this,
                f = "touchstart" === b.type;
            if (e._s2 = f, e.ev.trigger("rsDragStart"), a(b.target).closest(".rsNoDrag", e._r1).length) return e.dragSuccess = !1, !0;
            if (!c && e._r2 && (e._t2 = !0, e._u2()), e.dragSuccess = !1, e._l2) f && (e._v2 = !0);
            else {
                if (f && (e._v2 = !1), e._w2(), f) {
                    var g = b.originalEvent.touches;
                    if (!(g && 0 < g.length)) return;
                    d = g[0], 1 < g.length && (e._v2 = !0)
                } else b.preventDefault(), d = b, e.pointerEnabled && (d = d.originalEvent);
                e._l2 = !0, e._b.on(e._k1, function(a) {
                    e._x2(a, c)
                }).on(e._l1, function(a) {
                    e._y2(a, c)
                }), e._z2 = "", e._a3 = !1, e._b3 = d.pageX, e._c3 = d.pageY, e._d3 = e._v = (c ? e._e3 : e._h) ? d.pageX : d.pageY, e._f3 = 0, e._g3 = 0, e._h3 = c ? e._i3 : e._p, e._j3 = (new Date).getTime(), f && e._e1.on(e._m1, function(a) {
                    e._y2(a, c)
                })
            }
        },
        _k3: function(a, b) {
            if (this._l3) {
                var c = this._m3,
                    d = a.pageX - this._b3,
                    e = a.pageY - this._c3,
                    f = this._h3 + d,
                    g = this._h3 + e,
                    h = b ? this._e3 : this._h,
                    f = h ? f : g,
                    g = this._z2;
                this._a3 = !0, this._b3 = a.pageX, this._c3 = a.pageY, "x" === g && 0 !== d ? this._f3 = d > 0 ? 1 : -1 : "y" === g && 0 !== e && (this._g3 = e > 0 ? 1 : -1), g = h ? this._b3 : this._c3, d = h ? d : e, b ? f > this._n3 ? f = this._h3 + d * this._n1 : f < this._o3 && (f = this._h3 + d * this._n1) : this._z || (0 >= this.currSlideId && 0 < g - this._d3 && (f = this._h3 + d * this._n1), this.currSlideId >= this.numSlides - 1 && 0 > g - this._d3 && (f = this._h3 + d * this._n1)), this._h3 = f, 200 < c - this._j3 && (this._j3 = c, this._v = g), b ? this._q3(this._h3) : this._l && this._p3(this._h3)
            }
        },
        _x2: function(a, b) {
            var c, d = this,
                e = "touchmove" === a.type;
            if (!d._s2 || e) {
                if (e) {
                    if (d._r3) return;
                    var f = a.originalEvent.touches;
                    if (!f) return;
                    if (1 < f.length) return;
                    c = f[0]
                } else c = a, d.pointerEnabled && (c = c.originalEvent);
                if (d._a3 || (d._e && (b ? d._s3 : d._p1).css(d._g + d._u1, "0s"), function g() {
                        d._l2 && (d._t3 = requestAnimationFrame(g), d._u3 && d._k3(d._u3, b))
                    }()), d._l3) a.preventDefault(), d._m3 = (new Date).getTime(), d._u3 = c;
                else if (f = b ? d._e3 : d._h, c = Math.abs(c.pageX - d._b3) - Math.abs(c.pageY - d._c3) - (f ? -7 : 7), c > 7) {
                    if (f) a.preventDefault(), d._z2 = "x";
                    else if (e) return void d._v3(a);
                    d._l3 = !0
                } else if (-7 > c) {
                    if (f) {
                        if (e) return void d._v3(a)
                    } else a.preventDefault(), d._z2 = "y";
                    d._l3 = !0
                }
            }
        },
        _v3: function(a) {
            this._r3 = !0, this._a3 = this._l2 = !1, this._y2(a)
        },
        _y2: function(b, c) {
            function d(a) {
                return 100 > a ? 100 : a > 500 ? 500 : a
            }

            function e(a, b) {
                (j._l || c) && (h = (-j._u - j._d1) * j._w, i = Math.abs(j._p - h), j._c = i / b, a && (j._c += 250), j._c = d(j._c), j._x3(h, !1))
            }
            var f, g, h, i, j = this;
            if (f = -1 < b.type.indexOf("touch"), !j._s2 || f)
                if (j._s2 = !1, j.ev.trigger("rsDragRelease"), j._u3 = null, j._l2 = !1, j._r3 = !1, j._l3 = !1, j._m3 = 0, cancelAnimationFrame(j._t3), j._a3 && (c ? j._q3(j._h3) : j._l && j._p3(j._h3)), j._b.off(j._k1).off(j._l1), f && j._e1.off(j._m1), j._i1(), !j._a3 && !j._v2 && c && j._w3) {
                    var k = a(b.target).closest(".rsNavItem");
                    k.length && j.goTo(k.index())
                } else {
                    if (g = c ? j._e3 : j._h, !j._a3 || "y" === j._z2 && g || "x" === j._z2 && !g) {
                        if (c || !j._t2) return j._t2 = !1, void(j.dragSuccess = !1);
                        if (j._t2 = !1, j.st.navigateByClick) return j._i2(j.pointerEnabled ? b.originalEvent : b), void(j.dragSuccess = !0);
                        j.dragSuccess = !0
                    } else j.dragSuccess = !0;
                    j._t2 = !1, j._z2 = "";
                    var l = j.st.minSlideOffset;
                    f = f ? b.originalEvent.changedTouches[0] : j.pointerEnabled ? b.originalEvent : b;
                    var m = g ? f.pageX : f.pageY,
                        n = j._d3;
                    f = j._v;
                    var o = j.currSlideId,
                        p = j.numSlides,
                        q = g ? j._f3 : j._g3,
                        r = j._z;
                    if (Math.abs(m - n), f = m - f, g = (new Date).getTime() - j._j3, g = Math.abs(f) / g, 0 === q || 1 >= p) e(!0, g);
                    else {
                        if (!r && !c)
                            if (0 >= o) {
                                if (q > 0) return void e(!0, g)
                            } else if (o >= p - 1 && 0 > q) return void e(!0, g);
                        if (c) {
                            if (h = j._i3, h > j._n3) h = j._n3;
                            else if (h < j._o3) h = j._o3;
                            else {
                                if (m = g * g / .006, k = -j._i3, n = j._y3 - j._z3 + j._i3, f > 0 && m > k ? (k += j._z3 / (15 / (m / g * .003)), g = g * k / m, m = k) : 0 > f && m > n && (n += j._z3 / (15 / (m / g * .003)), g = g * n / m, m = n), k = Math.max(Math.round(g / .003), 50), h += m * (0 > f ? -1 : 1), h > j._n3) return void j._a4(h, k, !0, j._n3, 200);
                                if (h < j._o3) return void j._a4(h, k, !0, j._o3, 200)
                            }
                            j._a4(h, k, !0)
                        } else k = function(a) {
                            var b = Math.floor(a / j._w);
                            return a - b * j._w > l && b++, b
                        }, m > n + l ? 0 > q ? e(!1, g) : (k = k(m - n), j._m2(j.currSlideId - k, d(Math.abs(j._p - (-j._u - j._d1 + k) * j._w) / g), !1, !0, !0)) : n - l > m ? q > 0 ? e(!1, g) : (k = k(n - m), j._m2(j.currSlideId + k, d(Math.abs(j._p - (-j._u - j._d1 - k) * j._w) / g), !1, !0, !0)) : e(!1, g)
                    }
                }
        },
        _p3: function(a) {
            a = this._p = a, this._e ? this._p1.css(this._x1, this._y1 + (this._h ? a + this._z1 + 0 : 0 + this._z1 + a) + this._a2) : this._p1.css(this._h ? this._x1 : this._w1, a)
        },
        updateSliderSize: function(a) {
            var b, c;
            if (this.st.autoScaleSlider) {
                var d = this.st.autoScaleSliderWidth,
                    e = this.st.autoScaleSliderHeight;
                this.st.autoScaleHeight ? (b = this.slider.width(), b != this.width && (this.slider.css("height", e / d * b), b = this.slider.width()), c = this.slider.height()) : (c = this.slider.height(), c != this.height && (this.slider.css("width", d / e * c), c = this.slider.height()), b = this.slider.width())
            } else b = this.slider.width(), c = this.slider.height();
            if (a || b != this.width || c != this.height) {
                for (this.width = b, this.height = c, this._b4 = b, this._c4 = c, this.ev.trigger("rsBeforeSizeSet"), this.ev.trigger("rsAfterSizePropSet"), this._e1.css({
                        width: this._b4,
                        height: this._c4
                    }), this._w = (this._h ? this._b4 : this._c4) + this.st.slidesSpacing, this._d4 = this.st.imageScalePadding, b = 0; b < this.slides.length; b++) a = this.slides[b], a.positionSet = !1, a && a.images && a.isLoaded && (a.isRendered = !1, this._q2(a));
                if (this._e4)
                    for (b = 0; b < this._e4.length; b++) a = this._e4[b], a.holder.css(this._i, (a.id + this._d1) * this._w);
                this._n2(), this._l && (this._e && this._p1.css(this._g + "transition-duration", "0s"), this._p3((-this._u - this._d1) * this._w)), this.ev.trigger("rsOnUpdateNav")
            }
            this._j2 = this._e1.offset(), this._j2 = this._j2[this._i]
        },
        appendSlide: function(b, c) {
            var d = this._s(b);
            (isNaN(c) || c > this.numSlides) && (c = this.numSlides), this.slides.splice(c, 0, d), this.slidesJQ.splice(c, 0, a('<div style="' + (this._l ? "position:absolute;" : this._n) + '" class="rsSlide"></div>')), c < this.currSlideId && this.currSlideId++, this.ev.trigger("rsOnAppendSlide", [d, c]), this._f4(c), c === this.currSlideId && this.ev.trigger("rsAfterSlideChange")
        },
        removeSlide: function(a) {
            var b = this.slides[a];
            b && (b.holder && b.holder.remove(), a < this.currSlideId && this.currSlideId--, this.slides.splice(a, 1), this.slidesJQ.splice(a, 1), this.ev.trigger("rsOnRemoveSlide", [a]), this._f4(a), a === this.currSlideId && this.ev.trigger("rsAfterSlideChange"))
        },
        _f4: function(a) {
            var b = this;
            for (a = b.numSlides, a = 0 >= b._u ? 0 : Math.floor(b._u / a), b.numSlides = b.slides.length, 0 === b.numSlides ? (b.currSlideId = b._d1 = b._u = 0, b.currSlide = b._g4 = null) : b._u = a * b.numSlides + b.currSlideId, a = 0; a < b.numSlides; a++) b.slides[a].id = a;
            b.currSlide = b.slides[b.currSlideId], b._r1 = b.slidesJQ[b.currSlideId], b.currSlideId >= b.numSlides ? b.goTo(b.numSlides - 1) : 0 > b.currSlideId && b.goTo(0), b._t(), b._l && b._z && b._p1.css(b._g + b._u1, "0ms"), b._h4 && clearTimeout(b._h4), b._h4 = setTimeout(function() {
                b._l && b._p3((-b._u - b._d1) * b._w), b._n2(), b._l || b._r1.css({
                    display: "block",
                    opacity: 1
                })
            }, 14), b.ev.trigger("rsOnUpdateNav")
        },
        _i1: function() {
            this._f1 && this._l && (this._g1 ? this._e1.css("cursor", this._g1) : (this._e1.removeClass("grabbing-cursor"), this._e1.addClass("grab-cursor")))
        },
        _w2: function() {
            this._f1 && this._l && (this._h1 ? this._e1.css("cursor", this._h1) : (this._e1.removeClass("grab-cursor"), this._e1.addClass("grabbing-cursor")))
        },
        next: function(a) {
            this._m2("next", this.st.transitionSpeed, !0, !a)
        },
        prev: function(a) {
            this._m2("prev", this.st.transitionSpeed, !0, !a)
        },
        _m2: function(a, b, c, d, e) {
            var f, g, h, i = this;
            if (i.ev.trigger("rsBeforeMove", [a, d]), h = "next" === a ? i.currSlideId + 1 : "prev" === a ? i.currSlideId - 1 : a = parseInt(a, 10), !i._z) {
                if (0 > h) return void i._i4("left", !d);
                if (h >= i.numSlides) return void i._i4("right", !d)
            }
            i._r2 && (i._u2(!0), c = !1), g = h - i.currSlideId, h = i._o2 = i.currSlideId;
            var j = i.currSlideId + g;
            d = i._u;
            var k;
            i._z ? (j = i._n2(!1, j), d += g) : d = j, i._o = j, i._g4 = i.slidesJQ[i.currSlideId], i._u = d, i.currSlideId = i._o, i.currSlide = i.slides[i.currSlideId], i._r1 = i.slidesJQ[i.currSlideId];
            var j = i.st.slidesDiff,
                l = Boolean(g > 0);
            g = Math.abs(g);
            var m = Math.floor(h / i._y),
                n = Math.floor((h + (l ? j : -j)) / i._y),
                m = (l ? Math.max(m, n) : Math.min(m, n)) * i._y + (l ? i._y - 1 : 0);
            if (m > i.numSlides - 1 ? m = i.numSlides - 1 : 0 > m && (m = 0), h = l ? m - h : h - m, h > i._y && (h = i._y), g > h + j)
                for (i._d1 += (g - (h + j)) * (l ? -1 : 1), b *= 1.4, h = 0; h < i.numSlides; h++) i.slides[h].positionSet = !1;
            i._c = b, i._n2(!0), e || (k = !0), f = (-d - i._d1) * i._w, k ? setTimeout(function() {
                i._j4 = !1, i._x3(f, a, !1, c), i.ev.trigger("rsOnUpdateNav")
            }, 0) : (i._x3(f, a, !1, c), i.ev.trigger("rsOnUpdateNav"))
        },
        _f2: function() {
            this.st.arrowsNav && (1 >= this.numSlides ? (this._c2.css("display", "none"), this._d2.css("display", "none")) : (this._c2.css("display", "block"), this._d2.css("display", "block"), this._z || this.st.loopRewind || (0 === this.currSlideId ? this._c2.addClass("rsArrowDisabled") : this._c2.removeClass("rsArrowDisabled"), this.currSlideId === this.numSlides - 1 ? this._d2.addClass("rsArrowDisabled") : this._d2.removeClass("rsArrowDisabled"))))
        },
        _x3: function(b, c, d, e, f) {
            function g() {
                var a;
                h && (a = h.data("rsTimeout")) && (h !== i && h.css({
                    opacity: 0,
                    display: "none",
                    zIndex: 0
                }), clearTimeout(a), h.data("rsTimeout", "")), (a = i.data("rsTimeout")) && (clearTimeout(a), i.data("rsTimeout", ""))
            }
            var h, i, j = this,
                k = {};
            isNaN(j._c) && (j._c = 400), j._p = j._h3 = b, j.ev.trigger("rsBeforeAnimStart"), j._e ? j._l ? (j._c = parseInt(j._c, 10), d = j._g + j._v1, k[j._g + j._u1] = j._c + "ms", k[d] = e ? a.rsCSS3Easing[j.st.easeInOut] : a.rsCSS3Easing[j.st.easeOut], j._p1.css(k), e || !j.hasTouch ? setTimeout(function() {
                j._p3(b)
            }, 5) : j._p3(b)) : (j._c = j.st.transitionSpeed, h = j._g4, i = j._r1, i.data("rsTimeout") && i.css("opacity", 0), g(), h && h.data("rsTimeout", setTimeout(function() {
                k[j._g + j._u1] = "0ms", k.zIndex = 0, k.display = "none", h.data("rsTimeout", ""), h.css(k), setTimeout(function() {
                    h.css("opacity", 0)
                }, 16)
            }, j._c + 60)), k.display = "block", k.zIndex = j._m, k.opacity = 0, k[j._g + j._u1] = "0ms", k[j._g + j._v1] = a.rsCSS3Easing[j.st.easeInOut], i.css(k), i.data("rsTimeout", setTimeout(function() {
                i.css(j._g + j._u1, j._c + "ms"), i.data("rsTimeout", setTimeout(function() {
                    i.css("opacity", 1), i.data("rsTimeout", "")
                }, 20))
            }, 20))) : j._l ? (k[j._h ? j._x1 : j._w1] = b + "px", j._p1.animate(k, j._c, e ? j.st.easeInOut : j.st.easeOut)) : (h = j._g4, i = j._r1, i.stop(!0, !0).css({
                opacity: 0,
                display: "block",
                zIndex: j._m
            }), j._c = j.st.transitionSpeed, i.animate({
                opacity: 1
            }, j._c, j.st.easeInOut), g(), h && h.data("rsTimeout", setTimeout(function() {
                h.stop(!0, !0).css({
                    opacity: 0,
                    display: "none",
                    zIndex: 0
                })
            }, j._c + 60))), j._r2 = !0, j.loadingTimeout && clearTimeout(j.loadingTimeout), j.loadingTimeout = f ? setTimeout(function() {
                j.loadingTimeout = null, f.call()
            }, j._c + 60) : setTimeout(function() {
                j.loadingTimeout = null, j._k4(c)
            }, j._c + 60)
        },
        _u2: function(a) {
            if (this._r2 = !1, clearTimeout(this.loadingTimeout), this._l)
                if (this._e) {
                    if (!a) {
                        a = this._p;
                        var b = this._h3 = this._l4();
                        this._p1.css(this._g + this._u1, "0ms"), a !== b && this._p3(b)
                    }
                } else this._p1.stop(!0), this._p = parseInt(this._p1.css(this._x1), 10);
            else 20 < this._m ? this._m = 10 : this._m++
        },
        _l4: function() {
            var a = window.getComputedStyle(this._p1.get(0), null).getPropertyValue(this._g + "transform").replace(/^matrix\(/i, "").split(/, |\)$/g),
                b = 0 === a[0].indexOf("matrix3d");
            return parseInt(a[this._h ? b ? 12 : 4 : b ? 13 : 5], 10)
        },
        _m4: function(a, b) {
            return this._e ? this._y1 + (b ? a + this._z1 + 0 : 0 + this._z1 + a) + this._a2 : a
        },
        _k4: function() {
            this._l || (this._r1.css("z-index", 0), this._m = 10), this._r2 = !1, this.staticSlideId = this.currSlideId, this._n2(), this._n4 = !1, this.ev.trigger("rsAfterSlideChange")
        },
        _i4: function(a, b) {
            var c = this,
                d = (-c._u - c._d1) * c._w;
            if (0 !== c.numSlides && !c._r2)
                if (c.st.loopRewind) c.goTo("left" === a ? c.numSlides - 1 : 0, b);
                else if (c._l) {
                c._c = 200;
                var e = function() {
                    c._r2 = !1
                };
                c._x3(d + ("left" === a ? 30 : -30), "", !1, !0, function() {
                    c._r2 = !1, c._x3(d, "", !1, !0, e)
                })
            }
        },
        _q2: function(a) {
            if (!a.isRendered) {
                var b, c, d = a.content,
                    e = "rsMainSlideImage",
                    f = this.st.imageAlignCenter,
                    g = this.st.imageScaleMode;
                if (a.videoURL && (e = "rsVideoContainer", "fill" !== g ? b = !0 : (c = d, c.hasClass(e) || (c = c.find("." + e)), c.css({
                        width: "100%",
                        height: "100%"
                    }), e = "rsMainSlideImage")), d.hasClass(e) || (d = d.find("." + e)), d) {
                    var h = a.iW,
                        i = a.iH;
                    if (a.isRendered = !0, "none" !== g || f) {
                        e = "fill" !== g ? this._d4 : 0, c = this._b4 - 2 * e;
                        var j, k, l = this._c4 - 2 * e,
                            m = {};
                        "fit-if-smaller" === g && (h > c || i > l) && (g = "fit"), ("fill" === g || "fit" === g) && (j = c / h, k = l / i, j = "fill" == g ? j > k ? j : k : "fit" == g ? k > j ? j : k : 1, h = Math.ceil(h * j, 10), i = Math.ceil(i * j, 10)), "none" !== g && (m.width = h, m.height = i, b && d.find(".rsImg").css({
                            width: "100%",
                            height: "100%"
                        })), f && (m.marginLeft = Math.floor((c - h) / 2) + e, m.marginTop = Math.floor((l - i) / 2) + e), d.css(m)
                    }
                }
            }
        }
    }, a.rsProto = b.prototype, a.fn.royalSlider = function(c) {
        var d = arguments;
        return this.each(function() {
            var e = a(this);
            if ("object" != typeof c && c) {
                if ((e = e.data("royalSlider")) && e[c]) return e[c].apply(e, Array.prototype.slice.call(d, 1))
            } else e.data("royalSlider") || e.data("royalSlider", new b(e, c))
        })
    }, a.fn.royalSlider.defaults = {
        slidesSpacing: 8,
        startSlideId: 0,
        loop: !1,
        loopRewind: !1,
        numImagesToPreload: 4,
        fadeinLoadedSlide: !0,
        slidesOrientation: "horizontal",
        transitionType: "move",
        transitionSpeed: 600,
        controlNavigation: "bullets",
        controlsInside: !0,
        arrowsNav: !0,
        arrowsNavAutoHide: !0,
        navigateByClick: !0,
        randomizeSlides: !1,
        sliderDrag: !0,
        sliderTouch: !0,
        keyboardNavEnabled: !1,
        fadeInAfterLoaded: !0,
        allowCSS3: !0,
        allowCSS3OnWebkit: !0,
        addActiveClass: !1,
        autoHeight: !1,
        easeOut: "easeOutSine",
        easeInOut: "easeInOutSine",
        minSlideOffset: 10,
        imageScaleMode: "fit-if-smaller",
        imageAlignCenter: !0,
        imageScalePadding: 4,
        usePreloader: !0,
        autoScaleSlider: !1,
        autoScaleSliderWidth: 800,
        autoScaleSliderHeight: 400,
        autoScaleHeight: !0,
        arrowsNavHideOnTouch: !1,
        globalCaption: !1,
        slidesDiff: 2
    }, a.rsCSS3Easing = {
        easeOutSine: "cubic-bezier(0.390, 0.575, 0.565, 1.000)",
        easeInOutSine: "cubic-bezier(0.445, 0.050, 0.550, 0.950)"
    }, a.extend(jQuery.easing, {
        easeInOutSine: function(a, b, c, d, e) {
            return -d / 2 * (Math.cos(Math.PI * b / e) - 1) + c
        },
        easeOutSine: function(a, b, c, d, e) {
            return d * Math.sin(b / e * (Math.PI / 2)) + c
        },
        easeOutCubic: function(a, b, c, d, e) {
            return d * ((b = b / e - 1) * b * b + 1) + c
        }
    })
}(jQuery, window),
function(a) {
    a.extend(a.rsProto, {
        _i5: function() {
            var b = this;
            "bullets" === b.st.controlNavigation && (b.ev.one("rsAfterPropsSetup", function() {
                b._j5 = !0, b.slider.addClass("rsWithBullets");
                for (var c = '<div class="rsNav rsBullets">', d = 0; d < b.numSlides; d++) c += '<div class="rsNavItem rsBullet"><span></span></div>';
                b._k5 = c = a(c + "</div>"), b._l5 = c.appendTo(b.slider).children(), b._k5.on("click.rs", ".rsNavItem", function() {
                    b._m5 || b.goTo(a(this).index())
                })
            }), b.ev.on("rsOnAppendSlide", function(a, c, d) {
                d >= b.numSlides ? b._k5.append('<div class="rsNavItem rsBullet"><span></span></div>') : b._l5.eq(d).before('<div class="rsNavItem rsBullet"><span></span></div>'), b._l5 = b._k5.children()
            }), b.ev.on("rsOnRemoveSlide", function(a, c) {
                var d = b._l5.eq(c);
                d && d.length && (d.remove(), b._l5 = b._k5.children())
            }), b.ev.on("rsOnUpdateNav", function() {
                var a = b.currSlideId;
                b._n5 && b._n5.removeClass("rsNavSelected"), a = b._l5.eq(a), a.addClass("rsNavSelected"), b._n5 = a
            }))
        }
    }), a.rsModules.bullets = a.rsProto._i5
}(jQuery),
function(a) {
    a.extend(a.rsProto, {
        _h6: function() {
            var b = this;
            "thumbnails" === b.st.controlNavigation && (b._i6 = {
                drag: !0,
                touch: !0,
                orientation: "horizontal",
                navigation: !0,
                arrows: !0,
                arrowLeft: null,
                arrowRight: null,
                spacing: 4,
                arrowsAutoHide: !1,
                appendSpan: !1,
                transitionSpeed: 600,
                autoCenter: !0,
                fitInViewport: !0,
                firstMargin: !0,
                paddingTop: 0,
                paddingBottom: 0
            }, b.st.thumbs = a.extend({}, b._i6, b.st.thumbs), b._j6 = !0, !1 === b.st.thumbs.firstMargin ? b.st.thumbs.firstMargin = 0 : !0 === b.st.thumbs.firstMargin && (b.st.thumbs.firstMargin = b.st.thumbs.spacing), b.ev.on("rsBeforeParseNode", function(b, c, d) {
                c = a(c), d.thumbnail = c.find(".rsTmb").remove(), d.thumbnail.length ? d.thumbnail = a(document.createElement("div")).append(d.thumbnail).html() : (d.thumbnail = c.attr("data-rsTmb"), d.thumbnail || (d.thumbnail = c.find(".rsImg").attr("data-rsTmb")), d.thumbnail = d.thumbnail ? '<img src="' + d.thumbnail + '"/>' : "")
            }), b.ev.one("rsAfterPropsSetup", function() {
                b._k6()
            }), b._n5 = null, b.ev.on("rsOnUpdateNav", function() {
                var c = a(b._l5[b.currSlideId]);
                c !== b._n5 && (b._n5 && (b._n5.removeClass("rsNavSelected"), b._n5 = null), b._l6 && b._m6(b.currSlideId), b._n5 = c.addClass("rsNavSelected"))
            }), b.ev.on("rsOnAppendSlide", function(a, c, d) {
                a = "<div" + b._n6 + ' class="rsNavItem rsThumb">' + b._o6 + c.thumbnail + "</div>", d >= b.numSlides ? b._s3.append(a) : b._l5.eq(d).before(a), b._l5 = b._s3.children(), b.updateThumbsSize()
            }), b.ev.on("rsOnRemoveSlide", function(a, c) {
                var d = b._l5.eq(c);
                d && (d.remove(), b._l5 = b._s3.children(), b.updateThumbsSize())
            }))
        },
        _k6: function() {
            var b, c, d = this,
                e = "rsThumbs",
                f = d.st.thumbs,
                g = "",
                h = f.spacing;
            d._j5 = !0, d._e3 = "vertical" === f.orientation ? !1 : !0, d._n6 = b = h ? ' style="margin-' + (d._e3 ? "right" : "bottom") + ":" + h + 'px;"' : "", d._i3 = 0, d._p6 = !1, d._m5 = !1, d._l6 = !1, d._q6 = f.arrows && f.navigation, c = d._e3 ? "Hor" : "Ver", d.slider.addClass("rsWithThumbs rsWithThumbs" + c), g += '<div class="rsNav rsThumbs rsThumbs' + c + '"><div class="' + e + 'Container">', d._o6 = f.appendSpan ? '<span class="thumbIco"></span>' : "";
            for (var i = 0; i < d.numSlides; i++) c = d.slides[i], g += "<div" + b + ' class="rsNavItem rsThumb">' + c.thumbnail + d._o6 + "</div>";
            g = a(g + "</div></div>"), b = {}, f.paddingTop && (b[d._e3 ? "paddingTop" : "paddingLeft"] = f.paddingTop), f.paddingBottom && (b[d._e3 ? "paddingBottom" : "paddingRight"] = f.paddingBottom), g.css(b), d._s3 = a(g).find("." + e + "Container"), d._q6 && (e += "Arrow", f.arrowLeft ? d._r6 = f.arrowLeft : (d._r6 = a('<div class="' + e + " " + e + 'Left"><div class="' + e + 'Icn"></div></div>'), g.append(d._r6)), f.arrowRight ? d._s6 = f.arrowRight : (d._s6 = a('<div class="' + e + " " + e + 'Right"><div class="' + e + 'Icn"></div></div>'), g.append(d._s6)), d._r6.click(function() {
                var a = (Math.floor(d._i3 / d._t6) + d._u6) * d._t6 + d._v6;
                d._a4(a > d._n3 ? d._n3 : a)
            }), d._s6.click(function() {
                var a = (Math.floor(d._i3 / d._t6) - d._u6) * d._t6 + d._v6;
                d._a4(a < d._o3 ? d._o3 : a)
            }), f.arrowsAutoHide && !d.hasTouch && (d._r6.css("opacity", 0), d._s6.css("opacity", 0), g.one("mousemove.rsarrowshover", function() {
                d._l6 && (d._r6.css("opacity", 1), d._s6.css("opacity", 1))
            }), g.hover(function() {
                d._l6 && (d._r6.css("opacity", 1), d._s6.css("opacity", 1))
            }, function() {
                d._l6 && (d._r6.css("opacity", 0), d._s6.css("opacity", 0))
            }))), d._k5 = g, d._l5 = d._s3.children(), d.msEnabled && d.st.thumbs.navigation && d._s3.css("-ms-touch-action", d._e3 ? "pan-y" : "pan-x"), d.slider.append(g), d._w3 = !0, d._v6 = h, f.navigation && d._e && d._s3.css(d._g + "transition-property", d._g + "transform"), d._k5.on("click.rs", ".rsNavItem", function() {
                d._m5 || d.goTo(a(this).index())
            }), d.ev.off("rsBeforeSizeSet.thumbs").on("rsBeforeSizeSet.thumbs", function() {
                d._w6 = d._e3 ? d._c4 : d._b4, d.updateThumbsSize(!0)
            }), d.ev.off("rsAutoHeightChange.thumbs").on("rsAutoHeightChange.thumbs", function(a, b) {
                d.updateThumbsSize(!0, b)
            })
        },
        updateThumbsSize: function(a, b) {
            var c = this,
                d = c._l5.first(),
                e = {},
                f = c._l5.length;
            c._t6 = (c._e3 ? d.outerWidth() : d.outerHeight()) + c._v6, c._y3 = f * c._t6 - c._v6, e[c._e3 ? "width" : "height"] = c._y3 + c._v6, c._z3 = c._e3 ? c._k5.width() : void 0 !== b ? b : c._k5.height(), c._w3 && (c.isFullscreen || c.st.thumbs.fitInViewport) && (c._e3 ? c._c4 = c._w6 - c._k5.outerHeight() : c._b4 = c._w6 - c._k5.outerWidth()), c._z3 && (c._o3 = -(c._y3 - c._z3) - c.st.thumbs.firstMargin, c._n3 = c.st.thumbs.firstMargin, c._u6 = Math.floor(c._z3 / c._t6), c._y3 < c._z3 ? (c.st.thumbs.autoCenter && c._q3((c._z3 - c._y3) / 2), c.st.thumbs.arrows && c._r6 && (c._r6.addClass("rsThumbsArrowDisabled"), c._s6.addClass("rsThumbsArrowDisabled")), c._l6 = !1, c._m5 = !1, c._k5.off(c._j1)) : c.st.thumbs.navigation && !c._l6 && (c._l6 = !0, !c.hasTouch && c.st.thumbs.drag || c.hasTouch && c.st.thumbs.touch) && (c._m5 = !0, c._k5.on(c._j1, function(a) {
                c._g2(a, !0)
            })), c._s3.css(e), a && b && c._m6(c.currSlideId), c._e && (e[c._g + "transition-duration"] = "0ms"))
        },
        setThumbsOrientation: function(a, b) {
            this._w3 && (this.st.thumbs.orientation = a, this._k5.remove(), this.slider.removeClass("rsWithThumbsHor rsWithThumbsVer"), this._k6(), this._k5.off(this._j1), b || this.updateSliderSize(!0))
        },
        _q3: function(a) {
            this._i3 = a, this._e ? this._s3.css(this._x1, this._y1 + (this._e3 ? a + this._z1 + 0 : 0 + this._z1 + a) + this._a2) : this._s3.css(this._e3 ? this._x1 : this._w1, a)
        },
        _a4: function(b, c, d, e, f) {
            var g = this;
            if (g._l6) {
                c || (c = g.st.thumbs.transitionSpeed), g._i3 = b, g._x6 && clearTimeout(g._x6), g._p6 && (g._e || g._s3.stop(), d = !0);
                var h = {};
                g._p6 = !0, g._e ? (h[g._g + "transition-duration"] = c + "ms", h[g._g + "transition-timing-function"] = d ? a.rsCSS3Easing[g.st.easeOut] : a.rsCSS3Easing[g.st.easeInOut], g._s3.css(h), g._q3(b)) : (h[g._e3 ? g._x1 : g._w1] = b + "px", g._s3.animate(h, c, d ? "easeOutCubic" : g.st.easeInOut)), e && (g._i3 = e), g._y6(), g._x6 = setTimeout(function() {
                    g._p6 = !1, f && (g._a4(e, f, !0), f = null)
                }, c)
            }
        },
        _y6: function() {
            this._q6 && (this._i3 === this._n3 ? this._r6.addClass("rsThumbsArrowDisabled") : this._r6.removeClass("rsThumbsArrowDisabled"), this._i3 === this._o3 ? this._s6.addClass("rsThumbsArrowDisabled") : this._s6.removeClass("rsThumbsArrowDisabled"))
        },
        _m6: function(a, b) {
            var c, d = 0,
                e = a * this._t6 + 2 * this._t6 - this._v6 + this._n3,
                f = Math.floor(this._i3 / this._t6);
            this._l6 && (this._j6 && (b = !0, this._j6 = !1), e + this._i3 > this._z3 ? (a === this.numSlides - 1 && (d = 1), f = -a + this._u6 - 2 + d, c = f * this._t6 + this._z3 % this._t6 + this._v6 - this._n3) : 0 !== a ? (a - 1) * this._t6 <= -this._i3 + this._n3 && a - 1 <= this.numSlides - this._u6 && (c = (-a + 1) * this._t6 + this._n3) : c = this._n3, c !== this._i3 && (d = void 0 === c ? this._i3 : c, d > this._n3 ? this._q3(this._n3) : d < this._o3 ? this._q3(this._o3) : void 0 !== c && (b ? this._q3(c) : this._a4(c))), this._y6())
        }
    }), a.rsModules.thumbnails = a.rsProto._h6
}(jQuery),
function(a) {
    a.extend(a.rsProto, {
        _f6: function() {
            var b = this;
            "tabs" === b.st.controlNavigation && (b.ev.on("rsBeforeParseNode", function(b, c, d) {
                c = a(c), d.thumbnail = c.find(".rsTmb").remove(), d.thumbnail.length ? d.thumbnail = a(document.createElement("div")).append(d.thumbnail).html() : (d.thumbnail = c.attr("data-rsTmb"), d.thumbnail || (d.thumbnail = c.find(".rsImg").attr("data-rsTmb")), d.thumbnail = d.thumbnail ? '<img src="' + d.thumbnail + '"/>' : "")
            }), b.ev.one("rsAfterPropsSetup", function() {
                b._g6()
            }), b.ev.on("rsOnAppendSlide", function(a, c, d) {
                d >= b.numSlides ? b._k5.append('<div class="rsNavItem rsTab">' + c.thumbnail + "</div>") : b._l5.eq(d).before('<div class="rsNavItem rsTab">' + item.thumbnail + "</div>"), b._l5 = b._k5.children()
            }), b.ev.on("rsOnRemoveSlide", function(a, c) {
                var d = b._l5.eq(c);
                d && (d.remove(), b._l5 = b._k5.children())
            }), b.ev.on("rsOnUpdateNav", function() {
                var a = b.currSlideId;
                b._n5 && b._n5.removeClass("rsNavSelected"), a = b._l5.eq(a), a.addClass("rsNavSelected"), b._n5 = a
            }))
        },
        _g6: function() {
            var b, c = this;
            c._j5 = !0, b = '<div class="rsNav rsTabs">';
            for (var d = 0; d < c.numSlides; d++) b += '<div class="rsNavItem rsTab">' + c.slides[d].thumbnail + "</div>";
            b = a(b + "</div>"), c._k5 = b, c._l5 = b.children(".rsNavItem"), c.slider.append(b), c._k5.click(function(b) {
                b = a(b.target).closest(".rsNavItem"), b.length && c.goTo(b.index())
            })
        }
    }), a.rsModules.tabs = a.rsProto._f6
}(jQuery),
function(a) {
    a.extend(a.rsProto, {
        _q5: function() {
            var b = this;
            b._r5 = {
                enabled: !1,
                keyboardNav: !0,
                buttonFS: !0,
                nativeFS: !1,
                doubleTap: !0
            }, b.st.fullscreen = a.extend({}, b._r5, b.st.fullscreen), b.st.fullscreen.enabled && b.ev.one("rsBeforeSizeSet", function() {
                b._s5()
            })
        },
        _s5: function() {
            var b = this;
            if (b._t5 = !b.st.keyboardNavEnabled && b.st.fullscreen.keyboardNav, b.st.fullscreen.nativeFS) {
                b._u5 = {
                    supportsFullScreen: !1,
                    isFullScreen: function() {
                        return !1
                    },
                    requestFullScreen: function() {},
                    cancelFullScreen: function() {},
                    fullScreenEventName: "",
                    prefix: ""
                };
                var c = ["webkit", "moz", "o", "ms", "khtml"];
                if (!b.isAndroid)
                    if ("undefined" != typeof document.cancelFullScreen) b._u5.supportsFullScreen = !0;
                    else
                        for (var d = 0; d < c.length; d++)
                            if (b._u5.prefix = c[d], "undefined" != typeof document[b._u5.prefix + "CancelFullScreen"]) {
                                b._u5.supportsFullScreen = !0;
                                break
                            }
                b._u5.supportsFullScreen ? (b.nativeFS = !0, b._u5.fullScreenEventName = b._u5.prefix + "fullscreenchange" + b.ns, b._u5.isFullScreen = function() {
                    switch (this.prefix) {
                        case "":
                            return document.fullScreen;
                        case "webkit":
                            return document.webkitIsFullScreen;
                        default:
                            return document[this.prefix + "FullScreen"]
                    }
                }, b._u5.requestFullScreen = function(a) {
                    return "" === this.prefix ? a.requestFullScreen() : a[this.prefix + "RequestFullScreen"]()
                }, b._u5.cancelFullScreen = function() {
                    return "" === this.prefix ? document.cancelFullScreen() : document[this.prefix + "CancelFullScreen"]()
                }) : b._u5 = !1
            }
            b.st.fullscreen.buttonFS && (b._v5 = a('<div class="rsFullscreenBtn"><div class="rsFullscreenIcn"></div></div>').appendTo(b._o1).on("click.rs", function() {
                b.isFullscreen ? b.exitFullscreen() : b.enterFullscreen()
            }))
        },
        enterFullscreen: function(b) {
            var c = this;
            if (c._u5) {
                if (!b) return c._b.on(c._u5.fullScreenEventName, function() {
                    c._u5.isFullScreen() ? c.enterFullscreen(!0) : c.exitFullscreen(!0)
                }), void c._u5.requestFullScreen(a("html")[0]);
                c._u5.requestFullScreen(a("html")[0])
            }
            if (!c._w5) {
                c._w5 = !0, c._b.on("keyup" + c.ns + "fullscreen", function(a) {
                    27 === a.keyCode && c.exitFullscreen()
                }), c._t5 && c._b2(), b = a(window), c._x5 = b.scrollTop(), c._y5 = b.scrollLeft(), c._z5 = a("html").attr("style"), c._a6 = a("body").attr("style"), c._b6 = c.slider.attr("style"), a("body, html").css({
                    overflow: "hidden",
                    height: "100%",
                    width: "100%",
                    margin: "0",
                    padding: "0"
                }), c.slider.addClass("rsFullscreen");
                var d;
                for (d = 0; d < c.numSlides; d++) b = c.slides[d], b.isRendered = !1, b.bigImage && (b.isBig = !0, b.isMedLoaded = b.isLoaded, b.isMedLoading = b.isLoading, b.medImage = b.image, b.medIW = b.iW, b.medIH = b.iH, b.slideId = -99, b.bigImage !== b.medImage && (b.sizeType = "big"), b.isLoaded = b.isBigLoaded, b.isLoading = !1, b.image = b.bigImage, b.images[0] = b.bigImage, b.iW = b.bigIW, b.iH = b.bigIH, b.isAppended = b.contentAdded = !1, c._c6(b));
                c.isFullscreen = !0, c._w5 = !1, c.updateSliderSize(), c.ev.trigger("rsEnterFullscreen")
            }
        },
        exitFullscreen: function(b) {
            var c = this;
            if (c._u5) {
                if (!b) return void c._u5.cancelFullScreen(a("html")[0]);
                c._b.off(c._u5.fullScreenEventName)
            }
            if (!c._w5) {
                c._w5 = !0, c._b.off("keyup" + c.ns + "fullscreen"), c._t5 && c._b.off("keydown" + c.ns), a("html").attr("style", c._z5 || ""), a("body").attr("style", c._a6 || "");
                var d;
                for (d = 0; d < c.numSlides; d++) b = c.slides[d], b.isRendered = !1, b.bigImage && (b.isBig = !1, b.slideId = -99, b.isBigLoaded = b.isLoaded, b.isBigLoading = b.isLoading, b.bigImage = b.image, b.bigIW = b.iW, b.bigIH = b.iH, b.isLoaded = b.isMedLoaded, b.isLoading = !1, b.image = b.medImage, b.images[0] = b.medImage, b.iW = b.medIW, b.iH = b.medIH, b.isAppended = b.contentAdded = !1, c._c6(b, !0), b.bigImage !== b.medImage && (b.sizeType = "med"));
                c.isFullscreen = !1, b = a(window), b.scrollTop(c._x5), b.scrollLeft(c._y5), c._w5 = !1, c.slider.removeClass("rsFullscreen"), c.updateSliderSize(), setTimeout(function() {
                    c.updateSliderSize()
                }, 1), c.ev.trigger("rsExitFullscreen")
            }
        },
        _c6: function(b) {
            var c = b.isLoaded || b.isLoading ? '<img class="rsImg rsMainSlideImage" src="' + b.image + '"/>' : '<a class="rsImg rsMainSlideImage" href="' + b.image + '"></a>';
            b.content.hasClass("rsImg") ? b.content = a(c) : b.content.find(".rsImg").eq(0).replaceWith(c), b.isLoaded || b.isLoading || !b.holder || b.holder.html(b.content)
        }
    }), a.rsModules.fullscreen = a.rsProto._q5
}(jQuery),
function(a) {
    a.extend(a.rsProto, {
        _x4: function() {
            var b, c = this;
            c._y4 = {
                enabled: !1,
                stopAtAction: !0,
                pauseOnHover: !0,
                delay: 2e3
            }, !c.st.autoPlay && c.st.autoplay && (c.st.autoPlay = c.st.autoplay), c.st.autoPlay = a.extend({}, c._y4, c.st.autoPlay), c.st.autoPlay.enabled && (c.ev.on("rsBeforeParseNode", function(c, d, e) {
                d = a(d), (b = d.attr("data-rsDelay")) && (e.customDelay = parseInt(b, 10))
            }), c.ev.one("rsAfterInit", function() {
                c._z4()
            }), c.ev.on("rsBeforeDestroy", function() {
                c.stopAutoPlay(), c.slider.off("mouseenter mouseleave"), a(window).off("blur" + c.ns + " focus" + c.ns)
            }))
        },
        _z4: function() {
            var b = this;
            b.startAutoPlay(), b.ev.on("rsAfterContentSet", function(a, c) {
                b._l2 || b._r2 || !b._a5 || c !== b.currSlide || b._b5()
            }), b.ev.on("rsDragRelease", function() {
                b._a5 && b._c5 && (b._c5 = !1, b._b5())
            }), b.ev.on("rsAfterSlideChange", function() {
                b._a5 && b._c5 && (b._c5 = !1, b.currSlide.isLoaded && b._b5())
            }), b.ev.on("rsDragStart", function() {
                b._a5 && (b.st.autoPlay.stopAtAction ? b.stopAutoPlay() : (b._c5 = !0, b._d5()))
            }), b.ev.on("rsBeforeMove", function(a, c, d) {
                b._a5 && (d && b.st.autoPlay.stopAtAction ? b.stopAutoPlay() : (b._c5 = !0, b._d5()))
            }), b._e5 = !1, b.ev.on("rsVideoStop", function() {
                b._a5 && (b._e5 = !1, b._b5())
            }), b.ev.on("rsVideoPlay", function() {
                b._a5 && (b._c5 = !1, b._d5(), b._e5 = !0)
            }), a(window).on("blur" + b.ns, function() {
                b._a5 && (b._c5 = !0, b._d5())
            }).on("focus" + b.ns, function() {
                b._a5 && b._c5 && (b._c5 = !1, b._b5())
            }), b.st.autoPlay.pauseOnHover && (b._f5 = !1, b.slider.hover(function() {
                b._a5 && (b._c5 = !1, b._d5(), b._f5 = !0)
            }, function() {
                b._a5 && (b._f5 = !1, b._b5())
            }))
        },
        toggleAutoPlay: function() {
            this._a5 ? this.stopAutoPlay() : this.startAutoPlay()
        },
        startAutoPlay: function() {
            this._a5 = !0, this.currSlide.isLoaded && this._b5()
        },
        stopAutoPlay: function() {
            this._e5 = this._f5 = this._c5 = this._a5 = !1, this._d5()
        },
        _b5: function() {
            var a = this;
            a._f5 || a._e5 || (a._g5 = !0, a._h5 && clearTimeout(a._h5), a._h5 = setTimeout(function() {
                var b;
                a._z || a.st.loopRewind || (b = !0, a.st.loopRewind = !0), a.next(!0), b && (a.st.loopRewind = !1)
            }, a.currSlide.customDelay ? a.currSlide.customDelay : a.st.autoPlay.delay))
        },
        _d5: function() {
            this._f5 || this._e5 || (this._g5 = !1, this._h5 && (clearTimeout(this._h5), this._h5 = null))
        }
    }), a.rsModules.autoplay = a.rsProto._x4
}(jQuery),
function(a) {
    a.extend(a.rsProto, {
        _z6: function() {
            var b = this;
            b._a7 = {
                autoHideArrows: !0,
                autoHideControlNav: !1,
                autoHideBlocks: !1,
                autoHideCaption: !1,
                disableCSS3inFF: !0,
                youTubeCode: '<iframe src="http://www.youtube.com/embed/%id%?rel=1&showinfo=0&autoplay=1&wmode=transparent" frameborder="no"></iframe>',
                vimeoCode: '<iframe src="http://player.vimeo.com/video/%id%?byline=0&portrait=0&autoplay=1" frameborder="no" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>'
            }, b.st.video = a.extend({}, b._a7, b.st.video), b.ev.on("rsBeforeSizeSet", function() {
                b._b7 && setTimeout(function() {
                    var a = b._r1,
                        a = a.hasClass("rsVideoContainer") ? a : a.find(".rsVideoContainer");
                    b._c7 && b._c7.css({
                        width: a.width(),
                        height: a.height()
                    })
                }, 32)
            });
            var c = b._a.mozilla;
            b.ev.on("rsAfterParseNode", function(d, e, f) {
                if (d = a(e), f.videoURL) {
                    b.st.video.disableCSS3inFF && c && (b._e = b._f = !1), e = a('<div class="rsVideoContainer"></div>');
                    var g = a('<div class="rsBtnCenterer"><div class="rsPlayBtn"><div class="rsPlayBtnIcon"></div></div></div>');
                    d.hasClass("rsImg") ? f.content = e.append(d).append(g) : f.content.find(".rsImg").wrap(e).after(g)
                }
            }), b.ev.on("rsAfterSlideChange", function() {
                b.stopVideo()
            })
        },
        toggleVideo: function() {
            return this._b7 ? this.stopVideo() : this.playVideo()
        },
        playVideo: function() {
            var b = this;
            if (!b._b7) {
                var c = b.currSlide;
                if (!c.videoURL) return !1;
                b._d7 = c;
                var d, e, f = b._e7 = c.content,
                    c = c.videoURL;
                return c.match(/youtu\.be/i) || c.match(/youtube\.com/i) ? (e = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#\&\?]*).*/, (e = c.match(e)) && 11 == e[7].length && (d = e[7]), void 0 !== d && (b._c7 = b.st.video.youTubeCode.replace("%id%", d))) : c.match(/vimeo\.com/i) && (e = /(www\.)?vimeo.com\/(\d+)($|\/)/, (e = c.match(e)) && (d = e[2]), void 0 !== d && (b._c7 = b.st.video.vimeoCode.replace("%id%", d))), b.videoObj = a(b._c7), b.ev.trigger("rsOnCreateVideoElement", [c]), b.videoObj.length && (b._c7 = a('<div class="rsVideoFrameHolder"><div class="rsPreloader"></div><div class="rsCloseVideoBtn"><div class="rsCloseVideoIcn"></div></div></div>'), b._c7.find(".rsPreloader").after(b.videoObj), f = f.hasClass("rsVideoContainer") ? f : f.find(".rsVideoContainer"), b._c7.css({
                    width: f.width(),
                    height: f.height()
                }).find(".rsCloseVideoBtn").off("click.rsv").on("click.rsv", function(a) {
                    return b.stopVideo(), a.preventDefault(), a.stopPropagation(), !1
                }), f.append(b._c7), b.isIPAD && f.addClass("rsIOSVideo"), b._f7(!1), setTimeout(function() {
                    b._c7.addClass("rsVideoActive")
                }, 10), b.ev.trigger("rsVideoPlay"), b._b7 = !0), !0
            }
            return !1
        },
        stopVideo: function() {
            var a = this;
            return a._b7 ? (a.isIPAD && a.slider.find(".rsCloseVideoBtn").remove(), a._f7(!0), setTimeout(function() {
                a.ev.trigger("rsOnDestroyVideoElement", [a.videoObj]);
                var b = a._c7.find("iframe");
                if (b.length) try {
                    b.attr("src", "")
                } catch (c) {}
                a._c7.remove(), a._c7 = null
            }, 16), a.ev.trigger("rsVideoStop"), a._b7 = !1, !0) : !1
        },
        _f7: function(a) {
            var b = [],
                c = this.st.video;
            if (c.autoHideArrows && (this._c2 && (b.push(this._c2, this._d2), this._e2 = !a), this._v5 && b.push(this._v5)), c.autoHideControlNav && this._k5 && b.push(this._k5), c.autoHideBlocks && this._d7.animBlocks && b.push(this._d7.animBlocks), c.autoHideCaption && this.globalCaption && b.push(this.globalCaption), this.slider[a ? "removeClass" : "addClass"]("rsVideoPlaying"), b.length)
                for (c = 0; c < b.length; c++) a ? b[c].removeClass("rsHidden") : b[c].addClass("rsHidden")
        }
    }), a.rsModules.video = a.rsProto._z6
}(jQuery),
function(a) {
    a.extend(a.rsProto, {
        _p4: function() {
            function b() {
                var a = d.currSlide;
                if (d.currSlide && d.currSlide.isLoaded && d._t4 !== a) {
                    if (0 < d._s4.length) {
                        for (c = 0; c < d._s4.length; c++) clearTimeout(d._s4[c]);
                        d._s4 = []
                    }
                    if (0 < d._r4.length) {
                        var b;
                        for (c = 0; c < d._r4.length; c++)(b = d._r4[c]) && (d._e ? (b.block.css(d._g + d._u1, "0s"), b.block.css(b.css)) : b.block.stop(!0).css(b.css), d._t4 = null, a.animBlocksDisplayed = !1);
                        d._r4 = []
                    }
                    a.animBlocks && (a.animBlocksDisplayed = !0, d._t4 = a, d._u4(a.animBlocks))
                }
            }
            var c, d = this;
            d._q4 = {
                fadeEffect: !0,
                moveEffect: "top",
                moveOffset: 20,
                speed: 400,
                easing: "easeOutSine",
                delay: 200
            }, d.st.block = a.extend({}, d._q4, d.st.block), d._r4 = [], d._s4 = [], d.ev.on("rsAfterInit", function() {
                b()
            }), d.ev.on("rsBeforeParseNode", function(b, c, d) {
                c = a(c), d.animBlocks = c.find(".rsABlock").css("display", "none"), d.animBlocks.length || (d.animBlocks = c.hasClass("rsABlock") ? c.css("display", "none") : !1)
            }), d.ev.on("rsAfterContentSet", function(a, c) {
                c.id === d.slides[d.currSlideId].id && setTimeout(function() {
                    b()
                }, d.st.fadeinLoadedSlide ? 300 : 0)
            }), d.ev.on("rsAfterSlideChange", function() {
                b()
            })
        },
        _v4: function(a, b) {
            setTimeout(function() {
                a.css(b)
            }, 6)
        },
        _u4: function(b) {
            var c, d, e, f, g, h, i, j = this;
            j._s4 = [], b.each(function(b) {
                c = a(this), d = {}, e = {}, f = null;
                var k = c.attr("data-move-offset"),
                    k = k ? parseInt(k, 10) : j.st.block.moveOffset;
                if (k > 0 && ((h = c.data("move-effect")) ? (h = h.toLowerCase(), "none" === h ? h = !1 : "left" !== h && "top" !== h && "bottom" !== h && "right" !== h && (h = j.st.block.moveEffect, "none" === h && (h = !1))) : h = j.st.block.moveEffect, h && "none" !== h)) {
                    var l;
                    l = "right" === h || "left" === h ? !0 : !1;
                    var m;
                    i = !1, j._e ? (m = 0, g = j._x1) : (l ? isNaN(parseInt(c.css("right"), 10)) ? g = "left" : (g = "right", i = !0) : isNaN(parseInt(c.css("bottom"), 10)) ? g = "top" : (g = "bottom", i = !0), g = "margin-" + g, i && (k = -k), j._e ? m = parseInt(c.css(g), 10) : (m = c.data("rs-start-move-prop"), void 0 === m && (m = parseInt(c.css(g), 10), isNaN(m) && (m = 0), c.data("rs-start-move-prop", m)))), e[g] = j._m4("top" === h || "left" === h ? m - k : m + k, l), d[g] = j._m4(m, l)
                }
                k = c.attr("data-fade-effect"), k ? ("none" === k.toLowerCase() || "false" === k.toLowerCase()) && (k = !1) : k = j.st.block.fadeEffect, k && (e.opacity = 0, d.opacity = 1), (k || h) && (f = {}, f.hasFade = Boolean(k), Boolean(h) && (f.moveProp = g, f.hasMove = !0), f.speed = c.data("speed"), isNaN(f.speed) && (f.speed = j.st.block.speed), f.easing = c.data("easing"), f.easing || (f.easing = j.st.block.easing), f.css3Easing = a.rsCSS3Easing[f.easing], f.delay = c.data("delay"), isNaN(f.delay) && (f.delay = j.st.block.delay * b)), k = {}, j._e && (k[j._g + j._u1] = "0ms"), k.moveProp = d.moveProp, k.opacity = d.opacity, k.display = "none", j._r4.push({
                    block: c,
                    css: k
                }), j._v4(c, e), j._s4.push(setTimeout(function(a, b, c, d) {
                    return function() {
                        if (a.css("display", "block"), c) {
                            var e = {};
                            if (j._e) {
                                var f = "";
                                c.hasMove && (f += c.moveProp), c.hasFade && (c.hasMove && (f += ", "), f += "opacity"), e[j._g + j._t1] = f, e[j._g + j._u1] = c.speed + "ms", e[j._g + j._v1] = c.css3Easing, a.css(e), setTimeout(function() {
                                    a.css(b)
                                }, 24)
                            } else setTimeout(function() {
                                a.animate(b, c.speed, c.easing)
                            }, 16)
                        }
                        delete j._s4[d]
                    }
                }(c, d, f, b), 6 >= f.delay ? 12 : f.delay))
            })
        }
    }), a.rsModules.animatedBlocks = a.rsProto._p4
}(jQuery),
function(a) {
    a.extend(a.rsProto, {
        _w4: function() {
            var a = this;
            if (a.st.autoHeight) {
                var b, c, d, e = !0,
                    f = function(f) {
                        d = a.slides[a.currSlideId], (b = d.holder) && (c = b.height()) && void 0 !== c && c > (a.st.minAutoHeight || 30) && (a._c4 = c, a._e || !f ? a._e1.css("height", c) : a._e1.stop(!0, !0).animate({
                            height: c
                        }, a.st.transitionSpeed), a.ev.trigger("rsAutoHeightChange", c), e && (a._e && setTimeout(function() {
                            a._e1.css(a._g + "transition", "height " + a.st.transitionSpeed + "ms ease-in-out")
                        }, 16), e = !1))
                    };
                a.ev.on("rsMaybeSizeReady.rsAutoHeight", function(a, b) {
                    d === b && f()
                }), a.ev.on("rsAfterContentSet.rsAutoHeight", function(a, b) {
                    d === b && f()
                }), a.slider.addClass("rsAutoHeight"), a.ev.one("rsAfterInit", function() {
                    setTimeout(function() {
                        f(!1), setTimeout(function() {
                            a.slider.append('<div style="clear:both; float: none;"></div>')
                        }, 16)
                    }, 16)
                }), a.ev.on("rsBeforeAnimStart", function() {
                    f(!0)
                }), a.ev.on("rsBeforeSizeSet", function() {
                    setTimeout(function() {
                        f(!1)
                    }, 16)
                })
            }
        }
    }), a.rsModules.autoHeight = a.rsProto._w4
}(jQuery),
function(a) {
    a.extend(a.rsProto, {
        _d6: function() {
            var b = this;
            b.st.globalCaption && (b.ev.on("rsAfterInit", function() {
                b.globalCaption = a('<div class="rsGCaption"></div>').appendTo(b.st.globalCaptionInside ? b._e1 : b.slider), b.globalCaption.html(b.currSlide.caption)
            }), b.ev.on("rsBeforeAnimStart", function() {
                b.globalCaption.html(b.currSlide.caption)
            }))
        }
    }), a.rsModules.globalCaption = a.rsProto._d6
}(jQuery),
function(a) {
    a.rsProto._o4 = function() {
        var a, b = this;
        b.st.addActiveClass && b.ev.on("rsOnUpdateNav", function() {
            a && clearTimeout(a), a = setTimeout(function() {
                b._g4 && b._g4.removeClass("rsActiveSlide"), b._r1 && b._r1.addClass("rsActiveSlide"), a = null
            }, 50)
        })
    }, a.rsModules.activeClass = a.rsProto._o4
}(jQuery),
function(a) {
    a.extend(a.rsProto, {
        _o5: function() {
            var b, c, d, e = this;
            if (e._p5 = {
                    enabled: !1,
                    change: !1,
                    prefix: ""
                }, e.st.deeplinking = a.extend({}, e._p5, e.st.deeplinking), e.st.deeplinking.enabled) {
                var f = e.st.deeplinking.change,
                    g = e.st.deeplinking.prefix,
                    h = "#" + g,
                    i = function() {
                        var a = window.location.hash;
                        return a && 0 < a.indexOf(g) && (a = parseInt(a.substring(h.length), 10), a >= 0) ? a - 1 : -1
                    },
                    j = i(); - 1 !== j && (e.st.startSlideId = j), f && (a(window).on("hashchange" + e.ns, function(a) {
                    b || (a = i(), 0 > a || (a > e.numSlides - 1 && (a = e.numSlides - 1), e.goTo(a)))
                }), e.ev.on("rsBeforeAnimStart", function() {
                    c && clearTimeout(c), d && clearTimeout(d)
                }), e.ev.on("rsAfterSlideChange", function() {
                    c && clearTimeout(c), d && clearTimeout(d), d = setTimeout(function() {
                        b = !0, window.location.replace(("" + window.location).split("#")[0] + h + (e.currSlideId + 1)), c = setTimeout(function() {
                            b = !1, c = null
                        }, 60)
                    }, 400)
                })), e.ev.on("rsBeforeDestroy", function() {
                    c = d = null, f && a(window).off("hashchange" + e.ns)
                })
            }
        }
    }), a.rsModules.deeplinking = a.rsProto._o5
}(jQuery),
function(a, b, c) {
    function d(a) {
        return a = a || location.href, "#" + a.replace(/^[^#]*#?(.*)$/, "$1")
    }
    var e, f = "hashchange",
        g = document,
        h = a.event.special,
        i = g.documentMode,
        j = "on" + f in b && (i === c || i > 7);
    a.fn[f] = function(a) {
        return a ? this.bind(f, a) : this.trigger(f)
    }, a.fn[f].delay = 50, h[f] = a.extend(h[f], {
        setup: function() {
            return j ? !1 : void a(e.start)
        },
        teardown: function() {
            return j ? !1 : void a(e.stop)
        }
    }), e = function() {
        function e() {
            var c = d(),
                g = n(k);
            c !== k ? (m(k = c, g), a(b).trigger(f)) : g !== k && (location.href = location.href.replace(/#.*/, "") + g), h = setTimeout(e, a.fn[f].delay)
        }
        var h, i = {},
            k = d(),
            l = function(a) {
                return a
            },
            m = l,
            n = l;
        return i.start = function() {
            h || e()
        }, i.stop = function() {
            h && clearTimeout(h), h = c
        }, b.attachEvent && !b.addEventListener && !j && function() {
            var b, c;
            i.start = function() {
                b || (c = (c = a.fn[f].src) && c + d(), b = a('<iframe tabindex="-1" title="empty"/>').hide().one("load", function() {
                    c || m(d()), e()
                }).attr("src", c || "javascript:0").insertAfter("body")[0].contentWindow, g.onpropertychange = function() {
                    try {
                        "title" === event.propertyName && (b.document.title = g.title)
                    } catch (a) {}
                })
            }, i.stop = l, n = function() {
                return d(b.location.href)
            }, m = function(c, d) {
                var e = b.document,
                    h = a.fn[f].domain;
                c !== d && (e.title = g.title, e.open(), h && e.write('<script>document.domain="' + h + '"</script>'), e.close(), b.location.hash = c)
            }
        }(), i
    }()
}(jQuery, this),
function(a) {
    a.rsProto._g7 = function() {
        var b = this;
        b.st.visibleNearby && b.st.visibleNearby.enabled && (b._h7 = {
            enabled: !0,
            centerArea: .6,
            center: !0,
            breakpoint: 0,
            breakpointCenterArea: .8,
            hiddenOverflow: !0,
            navigateByCenterClick: !1
        }, b.st.visibleNearby = a.extend({}, b._h7, b.st.visibleNearby), b.ev.one("rsAfterPropsSetup", function() {
            b._i7 = b._e1.css("overflow", "visible").wrap('<div class="rsVisibleNearbyWrap"></div>').parent(), b.st.visibleNearby.hiddenOverflow || b._i7.css("overflow", "visible"), b._o1 = b.st.controlsInside ? b._i7 : b.slider
        }), b.ev.on("rsAfterSizePropSet", function() {
            var a, c = b.st.visibleNearby;
            a = c.breakpoint && b.width < c.breakpoint ? c.breakpointCenterArea : c.centerArea, b._h ? (b._b4 *= a, b._i7.css({
                height: b._c4,
                width: b._b4 / a
            }), b._d = b._b4 * (1 - a) / 2 / a) : (b._c4 *= a, b._i7.css({
                height: b._c4 / a,
                width: b._b4
            }), b._d = b._c4 * (1 - a) / 2 / a), c.navigateByCenterClick || (b._q = b._h ? b._b4 : b._c4), c.center && b._e1.css("margin-" + (b._h ? "left" : "top"), b._d)
        }))
    }, a.rsModules.visibleNearby = a.rsProto._g7
}(jQuery),
function(a) {
    function b(b, d, e) {
        var f = this;
        return this.on("click.pjax", b, function(b) {
            var g = a.extend({}, m(d, e));
            g.container || (g.container = a(this).attr("data-pjax") || f), c(b, g)
        })
    }

    function c(b, c, d) {
        d = m(c, d);
        var f = b.currentTarget;
        if ("A" !== f.tagName.toUpperCase()) throw "$.fn.pjax or $.pjax.click requires an anchor element";
        if (!(b.which > 1 || b.metaKey || b.ctrlKey || b.shiftKey || b.altKey || location.protocol !== f.protocol || location.hostname !== f.hostname || f.hash && f.href.replace(f.hash, "") === location.href.replace(location.hash, "") || f.href === location.href + "#")) {
            var g = {
                    url: f.href,
                    container: a(f).attr("data-pjax"),
                    target: f,
                    fragment: null
                },
                h = a.extend({}, g, d),
                i = a.Event("pjax:click");
            a(f).trigger(i, [h]), i.isDefaultPrevented() || (e(h), b.preventDefault())
        }
    }

    function d(b, c, d) {
        d = m(c, d);
        var f = b.currentTarget;
        if ("FORM" !== f.tagName.toUpperCase()) throw "$.pjax.submit requires a form element";
        var g = {
            type: f.method.toUpperCase(),
            url: f.action,
            data: a(f).serializeArray(),
            container: a(f).attr("data-pjax"),
            target: f,
            fragment: null
        };
        e(a.extend({}, g, d)), b.preventDefault()
    }

    function e(b) {
        function c(b, c) {
            var e = a.Event(b, {
                relatedTarget: d
            });
            return h.trigger(e, c), !e.isDefaultPrevented()
        }
        b = a.extend(!0, {}, a.ajaxSettings, e.defaults, b), a.isFunction(b.url) && (b.url = b.url());
        var d = b.target,
            f = l(b.url).hash,
            h = b.context = n(b.container);
        b.data || (b.data = {}), b.data._pjax = h.selector;
        var i;
        b.beforeSend = function(a, d) {
            return "GET" !== d.type && (d.timeout = 0), a.setRequestHeader("X-PJAX", "true"), a.setRequestHeader("X-PJAX-Container", h.selector), c("pjax:beforeSend", [a, d]) ? (d.timeout > 0 && (i = setTimeout(function() {
                c("pjax:timeout", [a, b]) && a.abort("timeout")
            }, d.timeout), d.timeout = 0), void(b.requestUrl = l(d.url).href)) : !1
        }, b.complete = function(a, d) {
            i && clearTimeout(i), c("pjax:complete", [a, d, b]), c("pjax:end", [a, b])
        }, b.error = function(a, d, e) {
            var f = q("", a, b),
                h = c("pjax:error", [a, d, e, b]);
            "GET" == b.type && "abort" !== d && h && g(f.url)
        }, b.success = function(d, i, k) {
            var m = "function" == typeof a.pjax.defaults.version ? a.pjax.defaults.version() : a.pjax.defaults.version,
                n = k.getResponseHeader("X-PJAX-Version"),
                o = q(d, k, b);
            if (m && n && m !== n) return void g(o.url);
            if (!o.contents) return void g(o.url);
            if (e.state = {
                    id: b.id || j(),
                    url: o.url,
                    title: o.title,
                    container: h.selector,
                    fragment: b.fragment,
                    timeout: b.timeout
                }, (b.push || b.replace) && window.history.replaceState(e.state, o.title, o.url), o.title && (document.title = o.title), h.html(o.contents), r(o.scripts), "number" == typeof b.scrollTo && a(window).scrollTop(b.scrollTo), "" !== f) {
                var p = l(o.url);
                p.hash = f, e.state.url = p.href, window.history.replaceState(e.state, o.title, p.href);
                var s = a(p.hash);
                s.length && a(window).scrollTop(s.offset().top)
            }
            c("pjax:success", [d, i, k, b])
        }, e.state || (e.state = {
            id: j(),
            url: window.location.href,
            title: document.title,
            container: h.selector,
            fragment: b.fragment,
            timeout: b.timeout
        }, window.history.replaceState(e.state, document.title));
        var m = e.xhr;
        m && m.readyState < 4 && (m.onreadystatechange = a.noop, m.abort()), e.options = b;
        var m = e.xhr = a.ajax(b);
        return m.readyState > 0 && (b.push && !b.replace && (s(e.state.id, h.clone().contents()), window.history.pushState(null, "", k(b.requestUrl))), c("pjax:start", [m, b]), c("pjax:send", [m, b])), e.xhr
    }

    function f(b, c) {
        var d = {
            url: window.location.href,
            push: !1,
            replace: !0,
            scrollTo: !1
        };
        return e(a.extend(d, m(b, c)))
    }

    function g(a) {
        window.history.replaceState(null, "", "#"), window.location.replace(a)
    }

    function h(b) {
        var c = b.state;
        if (c && c.container) {
            if (x && y == c.url) return;
            var d = a(c.container);
            if (d.length) {
                var f, h = A[c.id];
                e.state && (f = e.state.id < c.id ? "forward" : "back", t(f, e.state.id, d.clone().contents()));
                var i = a.Event("pjax:popstate", {
                    state: c,
                    direction: f
                });
                d.trigger(i);
                var j = {
                    id: c.id,
                    url: c.url,
                    container: d,
                    push: !1,
                    fragment: c.fragment,
                    timeout: c.timeout,
                    scrollTo: !1
                };
                e.defaults.bfcache ? h ? (d.trigger("pjax:start", [null, j]), c.title && (document.title = c.title), d.html(h), e.state = c, d.trigger("pjax:end", [null, j])) : e(j) : e(j), d[0].offsetHeight
            } else g(location.href)
        }
        x = !1
    }

    function i(b) {
        var c = a.isFunction(b.url) ? b.url() : b.url,
            d = b.type ? b.type.toUpperCase() : "GET",
            e = a("<form>", {
                method: "GET" === d ? "GET" : "POST",
                action: c,
                style: "display:none"
            });
        "GET" !== d && "POST" !== d && e.append(a("<input>", {
            type: "hidden",
            name: "_method",
            value: d.toLowerCase()
        }));
        var f = b.data;
        if ("string" == typeof f) a.each(f.split("&"), function(b, c) {
            var d = c.split("=");
            e.append(a("<input>", {
                type: "hidden",
                name: d[0],
                value: d[1]
            }))
        });
        else if ("object" == typeof f)
            for (key in f) e.append(a("<input>", {
                type: "hidden",
                name: key,
                value: f[key]
            }));
        a(document.body).append(e), e.submit()
    }

    function j() {
        return (new Date).getTime()
    }

    function k(a) {
        return a.replace(/\?_pjax=[^&]+&?/, "?").replace(/_pjax=[^&]+&?/, "").replace(/[\?&]$/, "")
    }

    function l(a) {
        var b = document.createElement("a");
        return b.href = a, b
    }

    function m(b, c) {
        return b && c ? c.container = b : c = a.isPlainObject(b) ? b : {
            container: b
        }, c.container && (c.container = n(c.container)), c
    }

    function n(b) {
        if (b = a(b), b.length) {
            if ("" !== b.selector && b.context === document) return b;
            if (b.attr("id")) return a("#" + b.attr("id"));
            throw "cant get selector for pjax container!"
        }
        throw "no pjax container for " + b.selector
    }

    function o(a, b) {
        return a.filter(b).add(a.find(b))
    }

    function p(b) {
        return a.parseHTML(b, document, !0)
    }

    function q(b, c, d) {
        var e = {};
        if (e.url = k(c.getResponseHeader("X-PJAX-URL") || d.requestUrl), /<html/i.test(b)) var f = a(p(b.match(/<head[^>]*>([\s\S.]*)<\/head>/i)[0])),
            g = a(p(b.match(/<body[^>]*>([\s\S.]*)<\/body>/i)[0]));
        else var f = g = a(p(b));
        if (0 === g.length) return e;
        if (e.title = o(f, "title").last().text(), d.fragment) {
            if ("body" === d.fragment) var h = g;
            else var h = o(g, d.fragment).first();
            h.length && (e.contents = h.contents(), e.title || (e.title = h.attr("title") || h.data("title")))
        } else /<html/i.test(b) || (e.contents = g);
        return e.contents && (e.contents = e.contents.not(function() {
            return a(this).is("title")
        }), e.contents.find("title").remove(), e.scripts = o(e.contents, "script[src]").remove(), e.contents = e.contents.not(e.scripts)), e.title && (e.title = a.trim(e.title)), e
    }

    function r(b) {
        if (b) {
            var c = a("script[src]");
            b.each(function() {
                var b = this.src,
                    d = c.filter(function() {
                        return this.src === b
                    });
                if (!d.length) {
                    var e = document.createElement("script");
                    e.type = a(this).attr("type"), e.src = a(this).attr("src"), document.head.appendChild(e)
                }
            })
        }
    }

    function s(a, b) {
        for (A[a] = b, C.push(a); B.length;) delete A[B.shift()];
        for (; C.length > e.defaults.maxCacheLength;) delete A[C.shift()]
    }

    function t(a, b, c) {
        var d, e;
        A[b] = c, "forward" === a ? (d = C, e = B) : (d = B, e = C), d.push(b), (b = e.pop()) && delete A[b]
    }

    function u() {
        return a("meta").filter(function() {
            var b = a(this).attr("http-equiv");
            return b && "X-PJAX-VERSION" === b.toUpperCase()
        }).attr("content")
    }

    function v() {
        a.fn.pjax = b, a.pjax = e, a.pjax.enable = a.noop, a.pjax.disable = w, a.pjax.click = c, a.pjax.submit = d, a.pjax.reload = f, a.pjax.defaults = {
            timeout: 650,
            push: !0,
            replace: !1,
            type: "GET",
            dataType: "html",
            scrollTo: 0,
            maxCacheLength: 20,
            version: u,
            bfcache: !0
        }, a(window).on("popstate.pjax", h)
    }

    function w() {
        a.fn.pjax = function() {
            return this
        }, a.pjax = i, a.pjax.enable = v, a.pjax.disable = a.noop, a.pjax.click = a.noop, a.pjax.submit = a.noop, a.pjax.reload = function() {
            window.location.reload()
        }, a(window).off("popstate.pjax", h)
    }
    var x = !0,
        y = window.location.href,
        z = window.history.state;
    z && z.container && (e.state = z), "state" in window.history && (x = !1);
    var A = {},
        B = [],
        C = [];
    a.inArray("state", a.event.props) < 0 && a.event.props.push("state"), a.support.pjax = window.history && window.history.pushState && window.history.replaceState && !navigator.userAgent.match(/((iPod|iPhone|iPad).+\bOS\s+[1-4]|WebApps\/.+CFNetwork)/), a.support.pjax ? v() : w()
}(jQuery),
function(a, b, c) {
    function d(a) {
        var b = {},
            d = /^jQuery\d+$/;
        return c.each(a.attributes, function(a, c) {
            c.specified && !d.test(c.name) && (b[c.name] = c.value)
        }), b
    }

    function e(a, d) {
        var e = this,
            f = c(e);
        if (e.value == f.attr("placeholder") && f.hasClass("placeholder"))
            if (f.data("placeholder-password")) {
                if (f = f.hide().next().show().attr("id", f.removeAttr("id").data("placeholder-id")), a === !0) return f[0].value = d;
                f.focus()
            } else e.value = "", f.removeClass("placeholder"), e == b.activeElement && e.select()
    }

    function f() {
        var a, b = this,
            f = c(b),
            g = this.id;
        if ("" == b.value) {
            if ("password" == b.type) {
                if (!f.data("placeholder-textinput")) {
                    try {
                        a = f.clone().attr({
                            type: "text"
                        })
                    } catch (h) {
                        a = c("<input>").attr(c.extend(d(this), {
                            type: "text"
                        }))
                    }
                    a.removeAttr("name").data({
                        "placeholder-password": f,
                        "placeholder-id": g
                    }).bind("focus.placeholder", e), f.data({
                        "placeholder-textinput": a,
                        "placeholder-id": g
                    }).before(a)
                }
                f = f.removeAttr("id").hide().prev().attr("id", g).show()
            }
            f.addClass("placeholder"), f[0].value = f.attr("placeholder")
        } else f.removeClass("placeholder")
    }
    var g, h, i = "placeholder" in b.createElement("input"),
        j = "placeholder" in b.createElement("textarea"),
        k = c.fn,
        l = c.valHooks,
        m = c.propHooks;
    i && j ? (h = k.placeholder = function() {
        return this
    }, h.input = h.textarea = !0) : (h = k.placeholder = function() {
        var a = this;
        return a.filter((i ? "textarea" : ":input") + "[placeholder]").not(".placeholder").bind({
            "focus.placeholder": e,
            "blur.placeholder": f
        }).data("placeholder-enabled", !0).trigger("blur.placeholder"), a
    }, h.input = i, h.textarea = j, g = {
        get: function(a) {
            var b = c(a),
                d = b.data("placeholder-password");
            return d ? d[0].value : b.data("placeholder-enabled") && b.hasClass("placeholder") ? "" : a.value
        },
        set: function(a, d) {
            var g = c(a),
                h = g.data("placeholder-password");
            return h ? h[0].value = d : g.data("placeholder-enabled") ? ("" == d ? (a.value = d, a != b.activeElement && f.call(a)) : g.hasClass("placeholder") ? e.call(a, !0, d) || (a.value = d) : a.value = d, g) : a.value = d
        }
    }, i || (l.input = g, m.value = g), j || (l.textarea = g, m.value = g), c(function() {
        c(b).delegate("form", "submit.placeholder", function() {
            var a = c(".placeholder", this).each(e);
            setTimeout(function() {
                a.each(f)
            }, 10)
        })
    }), c(a).bind("beforeunload.placeholder", function() {
        c(".placeholder").each(function() {
            this.value = ""
        })
    }))
}(this, document, jQuery),
function(a) {
    a.Jcrop = function(b, c) {
        function d(a) {
            return Math.round(a) + "px"
        }

        function e(a) {
            return J.baseClass + "-" + a
        }

        function f() {
            return a.fx.step.hasOwnProperty("backgroundColor")
        }

        function g(b) {
            var c = a(b).offset();
            return [c.left, c.top]
        }

        function h(a) {
            return [a.pageX - I[0], a.pageY - I[1]]
        }

        function i(b) {
            "object" != typeof b && (b = {}), J = a.extend(J, b), a.each(["onChange", "onSelect", "onRelease", "onDblClick"], function(a, b) {
                "function" != typeof J[b] && (J[b] = function() {})
            })
        }

        function j(a, b, c) {
            if (I = g(R), ob.setCursor("move" === a ? a : a + "-resize"), "move" === a) return ob.activateHandlers(l(b), q, c);
            var d = lb.getFixed(),
                e = m(a),
                f = lb.getCorner(m(e));
            lb.setPressed(lb.getCorner(e)), lb.setCurrent(f), ob.activateHandlers(k(a, d), q, c)
        }

        function k(a, b) {
            return function(c) {
                if (J.aspectRatio) switch (a) {
                    case "e":
                        c[1] = b.y + 1;
                        break;
                    case "w":
                        c[1] = b.y + 1;
                        break;
                    case "n":
                        c[0] = b.x + 1;
                        break;
                    case "s":
                        c[0] = b.x + 1
                } else switch (a) {
                    case "e":
                        c[1] = b.y2;
                        break;
                    case "w":
                        c[1] = b.y2;
                        break;
                    case "n":
                        c[0] = b.x2;
                        break;
                    case "s":
                        c[0] = b.x2
                }
                lb.setCurrent(c), nb.update()
            }
        }

        function l(a) {
            var b = a;
            return pb.watchKeys(),
                function(a) {
                    lb.moveOffset([a[0] - b[0], a[1] - b[1]]), b = a, nb.update()
                }
        }

        function m(a) {
            switch (a) {
                case "n":
                    return "sw";
                case "s":
                    return "nw";
                case "e":
                    return "nw";
                case "w":
                    return "ne";
                case "ne":
                    return "sw";
                case "nw":
                    return "se";
                case "se":
                    return "nw";
                case "sw":
                    return "ne"
            }
        }

        function n(a) {
            return function(b) {
                return J.disabled ? !1 : "move" !== a || J.allowMove ? (I = g(R), db = !0, j(a, h(b)), b.stopPropagation(), b.preventDefault(), !1) : !1
            }
        }

        function o(a, b, c) {
            var d = a.width(),
                e = a.height();
            d > b && b > 0 && (d = b, e = b / a.width() * a.height()), e > c && c > 0 && (e = c, d = c / a.height() * a.width()), bb = a.width() / d, cb = a.height() / e, a.width(d).height(e)
        }

        function p(a) {
            return {
                x: a.x * bb,
                y: a.y * cb,
                x2: a.x2 * bb,
                y2: a.y2 * cb,
                w: a.w * bb,
                h: a.h * cb
            }
        }

        function q() {
            var a = lb.getFixed();
            a.w > J.minSelect[0] && a.h > J.minSelect[1] ? (nb.enableHandles(), nb.done()) : nb.release(), ob.setCursor(J.allowSelect ? "crosshair" : "default")
        }

        function r(a) {
            if (J.disabled) return !1;
            if (!J.allowSelect) return !1;
            db = !0, I = g(R), nb.disableHandles(), ob.setCursor("crosshair");
            var b = h(a);
            return lb.setPressed(b), nb.update(), ob.activateHandlers(s, q, "touch" === a.type.substring(0, 5)), pb.watchKeys(), a.stopPropagation(), a.preventDefault(), !1
        }

        function s(a) {
            lb.setCurrent(a), nb.update()
        }

        function t() {
            var b = a("<div></div>").addClass(e("tracker"));
            return L && b.css({
                opacity: 0,
                backgroundColor: "white"
            }), b
        }

        function u(a) {
            U.removeClass().addClass(e("holder")).addClass(a)
        }

        function v(a, b) {
            function c() {
                window.setTimeout(s, l)
            }
            var d = a[0] / bb,
                e = a[1] / cb,
                f = a[2] / bb,
                g = a[3] / cb;
            if (!eb) {
                var h = lb.flipCoords(d, e, f, g),
                    i = lb.getFixed(),
                    j = [i.x, i.y, i.x2, i.y2],
                    k = j,
                    l = J.animationDelay,
                    m = h[0] - j[0],
                    n = h[1] - j[1],
                    o = h[2] - j[2],
                    p = h[3] - j[3],
                    q = 0,
                    r = J.swingSpeed;
                d = k[0], e = k[1], f = k[2], g = k[3], nb.animMode(!0);
                var s = function() {
                    return function() {
                        q += (100 - q) / r, k[0] = Math.round(d + q / 100 * m), k[1] = Math.round(e + q / 100 * n), k[2] = Math.round(f + q / 100 * o), k[3] = Math.round(g + q / 100 * p), q >= 99.8 && (q = 100), 100 > q ? (x(k), c()) : (nb.done(), nb.animMode(!1), "function" == typeof b && b.call(qb))
                    }
                }();
                c()
            }
        }

        function w(a) {
            x([a[0] / bb, a[1] / cb, a[2] / bb, a[3] / cb]), J.onSelect.call(qb, p(lb.getFixed())), nb.enableHandles()
        }

        function x(a) {
            lb.setPressed([a[0], a[1]]), lb.setCurrent([a[2], a[3]]), nb.update()
        }

        function y() {
            return p(lb.getFixed())
        }

        function z() {
            return lb.getFixed()
        }

        function A(a) {
            i(a), H()
        }

        function B() {
            J.disabled = !0, nb.disableHandles(), nb.setCursor("default"), ob.setCursor("default")
        }

        function C() {
            J.disabled = !1, H()
        }

        function D() {
            nb.done(), ob.activateHandlers(null, null)
        }

        function E() {
            U.remove(), O.show(), O.css("visibility", "visible"), a(b).removeData("Jcrop")
        }

        function F(a, b) {
            nb.release(), B();
            var c = new Image;
            c.onload = function() {
                var d = c.width,
                    e = c.height,
                    f = J.boxWidth,
                    g = J.boxHeight;
                R.width(d).height(e), R.attr("src", a), V.attr("src", a), o(R, f, g), S = R.width(), T = R.height(), V.width(S).height(T), hb.width(S + 2 * gb).height(T + 2 * gb), U.width(S).height(T), mb.resize(S, T), C(), "function" == typeof b && b.call(qb)
            }, c.src = a
        }

        function G(a, b, c) {
            var d = b || J.bgColor;
            J.bgFade && f() && J.fadeTime && !c ? a.animate({
                backgroundColor: d
            }, {
                queue: !1,
                duration: J.fadeTime
            }) : a.css("backgroundColor", d)
        }

        function H(a) {
            J.allowResize ? a ? nb.enableOnly() : nb.enableHandles() : nb.disableHandles(), ob.setCursor(J.allowSelect ? "crosshair" : "default"), nb.setCursor(J.allowMove ? "move" : "default"), J.hasOwnProperty("trueSize") && (bb = J.trueSize[0] / S, cb = J.trueSize[1] / T), J.hasOwnProperty("setSelect") && (w(J.setSelect), nb.done(), delete J.setSelect), mb.refresh(), J.bgColor != ib && (G(J.shade ? mb.getShades() : U, J.shade ? J.shadeColor || J.bgColor : J.bgColor), ib = J.bgColor), jb != J.bgOpacity && (jb = J.bgOpacity, J.shade ? mb.refresh() : nb.setBgOpacity(jb)), Z = J.maxSize[0] || 0, $ = J.maxSize[1] || 0, _ = J.minSize[0] || 0, ab = J.minSize[1] || 0, J.hasOwnProperty("outerImage") && (R.attr("src", J.outerImage), delete J.outerImage), nb.refresh()
        }
        var I, J = a.extend({}, a.Jcrop.defaults),
            K = navigator.userAgent.toLowerCase(),
            L = /msie/.test(K),
            M = /msie [1-6]\./.test(K);
        "object" != typeof b && (b = a(b)[0]), "object" != typeof c && (c = {}), i(c);
        var N = {
                border: "none",
                visibility: "visible",
                margin: 0,
                padding: 0,
                position: "absolute",
                top: 0,
                left: 0
            },
            O = a(b),
            P = !0;
        if ("IMG" == b.tagName) {
            if (0 != O[0].width && 0 != O[0].height) O.width(O[0].width), O.height(O[0].height);
            else {
                var Q = new Image;
                Q.src = O[0].src, O.width(Q.width), O.height(Q.height)
            }
            var R = O.clone().removeAttr("id").css(N).show();
            R.width(O.width()), R.height(O.height()), O.after(R).hide()
        } else R = O.css(N).show(), P = !1, null === J.shade && (J.shade = !0);
        o(R, J.boxWidth, J.boxHeight);
        var S = R.width(),
            T = R.height(),
            U = a("<div />").width(S).height(T).addClass(e("holder")).css({
                position: "relative",
                backgroundColor: J.bgColor
            }).insertAfter(O).append(R);
        J.addClass && U.addClass(J.addClass);
        var V = a("<div />"),
            W = a("<div />").width("100%").height("100%").css({
                zIndex: 310,
                position: "absolute",
                overflow: "hidden"
            }),
            X = a("<div />").width("100%").height("100%").css("zIndex", 320),
            Y = a("<div />").css({
                position: "absolute",
                zIndex: 600
            }).dblclick(function() {
                var a = lb.getFixed();
                J.onDblClick.call(qb, a)
            }).insertBefore(R).append(W, X);
        P && (V = a("<img />").attr("src", R.attr("src")).css(N).width(S).height(T), W.append(V)), M && Y.css({
            overflowY: "hidden"
        });
        var Z, $, _, ab, bb, cb, db, eb, fb, gb = J.boundary,
            hb = t().width(S + 2 * gb).height(T + 2 * gb).css({
                position: "absolute",
                top: d(-gb),
                left: d(-gb),
                zIndex: 290
            }).mousedown(r),
            ib = J.bgColor,
            jb = J.bgOpacity;
        I = g(R);
        var kb = function() {
                function a() {
                    var a, b = {},
                        c = ["touchstart", "touchmove", "touchend"],
                        d = document.createElement("div");
                    try {
                        for (a = 0; a < c.length; a++) {
                            var e = c[a];
                            e = "on" + e;
                            var f = e in d;
                            f || (d.setAttribute(e, "return;"), f = "function" == typeof d[e]), b[c[a]] = f
                        }
                        return b.touchstart && b.touchend && b.touchmove
                    } catch (g) {
                        return !1
                    }
                }

                function b() {
                    return J.touchSupport === !0 || J.touchSupport === !1 ? J.touchSupport : a()
                }
                return {
                    createDragger: function(a) {
                        return function(b) {
                            return J.disabled ? !1 : "move" !== a || J.allowMove ? (I = g(R), db = !0, j(a, h(kb.cfilter(b)), !0), b.stopPropagation(), b.preventDefault(), !1) : !1
                        }
                    },
                    newSelection: function(a) {
                        return r(kb.cfilter(a))
                    },
                    cfilter: function(a) {
                        return a.pageX = a.originalEvent.changedTouches[0].pageX, a.pageY = a.originalEvent.changedTouches[0].pageY, a
                    },
                    isSupported: a,
                    support: b()
                }
            }(),
            lb = function() {
                function a(a) {
                    a = g(a), o = m = a[0], p = n = a[1]
                }

                function b(a) {
                    a = g(a), k = a[0] - o, l = a[1] - p, o = a[0], p = a[1]
                }

                function c() {
                    return [k, l]
                }

                function d(a) {
                    var b = a[0],
                        c = a[1];
                    0 > m + b && (b -= b + m), 0 > n + c && (c -= c + n), p + c > T && (c += T - (p + c)), o + b > S && (b += S - (o + b)), m += b, o += b, n += c, p += c
                }

                function e(a) {
                    var b = f();
                    switch (a) {
                        case "ne":
                            return [b.x2, b.y];
                        case "nw":
                            return [b.x, b.y];
                        case "se":
                            return [b.x2, b.y2];
                        case "sw":
                            return [b.x, b.y2]
                    }
                }

                function f() {
                    if (!J.aspectRatio) return i();
                    var a, b, c, d, e = J.aspectRatio,
                        f = J.minSize[0] / bb,
                        g = J.maxSize[0] / bb,
                        k = J.maxSize[1] / cb,
                        l = o - m,
                        q = p - n,
                        r = Math.abs(l),
                        s = Math.abs(q),
                        t = r / s;
                    return 0 === g && (g = 10 * S), 0 === k && (k = 10 * T), e > t ? (b = p, c = s * e, a = 0 > l ? m - c : c + m, 0 > a ? (a = 0, d = Math.abs((a - m) / e), b = 0 > q ? n - d : d + n) : a > S && (a = S, d = Math.abs((a - m) / e), b = 0 > q ? n - d : d + n)) : (a = o, d = r / e, b = 0 > q ? n - d : n + d, 0 > b ? (b = 0, c = Math.abs((b - n) * e), a = 0 > l ? m - c : c + m) : b > T && (b = T, c = Math.abs(b - n) * e, a = 0 > l ? m - c : c + m)), a > m ? (f > a - m ? a = m + f : a - m > g && (a = m + g), b = b > n ? n + (a - m) / e : n - (a - m) / e) : m > a && (f > m - a ? a = m - f : m - a > g && (a = m - g), b = b > n ? n + (m - a) / e : n - (m - a) / e), 0 > a ? (m -= a, a = 0) : a > S && (m -= a - S, a = S), 0 > b ? (n -= b, b = 0) : b > T && (n -= b - T, b = T), j(h(m, n, a, b))
                }

                function g(a) {
                    return a[0] < 0 && (a[0] = 0), a[1] < 0 && (a[1] = 0), a[0] > S && (a[0] = S), a[1] > T && (a[1] = T), [Math.round(a[0]), Math.round(a[1])]
                }

                function h(a, b, c, d) {
                    var e = a,
                        f = c,
                        g = b,
                        h = d;
                    return a > c && (e = c, f = a), b > d && (g = d, h = b), [e, g, f, h]
                }

                function i() {
                    var a, b = o - m,
                        c = p - n;
                    return Z && Math.abs(b) > Z && (o = b > 0 ? m + Z : m - Z), $ && Math.abs(c) > $ && (p = c > 0 ? n + $ : n - $), ab / cb && Math.abs(c) < ab / cb && (p = c > 0 ? n + ab / cb : n - ab / cb), _ / bb && Math.abs(b) < _ / bb && (o = b > 0 ? m + _ / bb : m - _ / bb), 0 > m && (o -= m, m -= m), 0 > n && (p -= n, n -= n), 0 > o && (m -= o, o -= o), 0 > p && (n -= p, p -= p), o > S && (a = o - S, m -= a, o -= a), p > T && (a = p - T, n -= a, p -= a), m > S && (a = m - T, p -= a, n -= a), n > T && (a = n - T, p -= a, n -= a), j(h(m, n, o, p))
                }

                function j(a) {
                    return {
                        x: a[0],
                        y: a[1],
                        x2: a[2],
                        y2: a[3],
                        w: a[2] - a[0],
                        h: a[3] - a[1]
                    }
                }
                var k, l, m = 0,
                    n = 0,
                    o = 0,
                    p = 0;
                return {
                    flipCoords: h,
                    setPressed: a,
                    setCurrent: b,
                    getOffset: c,
                    moveOffset: d,
                    getCorner: e,
                    getFixed: f
                }
            }(),
            mb = function() {
                function b(a, b) {
                    o.left.css({
                        height: d(b)
                    }), o.right.css({
                        height: d(b)
                    })
                }

                function c() {
                    return e(lb.getFixed())
                }

                function e(a) {
                    o.top.css({
                        left: d(a.x),
                        width: d(a.w),
                        height: d(a.y)
                    }), o.bottom.css({
                        top: d(a.y2),
                        left: d(a.x),
                        width: d(a.w),
                        height: d(T - a.y2)
                    }), o.right.css({
                        left: d(a.x2),
                        width: d(S - a.x2)
                    }), o.left.css({
                        width: d(a.x)
                    })
                }

                function f() {
                    return a("<div />").css({
                        position: "absolute",
                        backgroundColor: J.shadeColor || J.bgColor
                    }).appendTo(n)
                }

                function g() {
                    m || (m = !0, n.insertBefore(R), c(), nb.setBgOpacity(1, 0, 1), V.hide(), h(J.shadeColor || J.bgColor, 1), nb.isAwake() ? j(J.bgOpacity, 1) : j(1, 1))
                }

                function h(a, b) {
                    G(l(), a, b)
                }

                function i() {
                    m && (n.remove(), V.show(), m = !1, nb.isAwake() ? nb.setBgOpacity(J.bgOpacity, 1, 1) : (nb.setBgOpacity(1, 1, 1), nb.disableHandles()), G(U, 0, 1))
                }

                function j(a, b) {
                    m && (J.bgFade && !b ? n.animate({
                        opacity: 1 - a
                    }, {
                        queue: !1,
                        duration: J.fadeTime
                    }) : n.css({
                        opacity: 1 - a
                    }))
                }

                function k() {
                    J.shade ? g() : i(), nb.isAwake() && j(J.bgOpacity)
                }

                function l() {
                    return n.children()
                }
                var m = !1,
                    n = a("<div />").css({
                        position: "absolute",
                        zIndex: 240,
                        opacity: 0
                    }),
                    o = {
                        top: f(),
                        left: f().height(T),
                        right: f().height(T),
                        bottom: f()
                    };
                return {
                    update: c,
                    updateRaw: e,
                    getShades: l,
                    setBgColor: h,
                    enable: g,
                    disable: i,
                    resize: b,
                    refresh: k,
                    opacity: j
                }
            }(),
            nb = function() {
                function b(b) {
                    var c = a("<div />").css({
                        position: "absolute",
                        opacity: J.borderOpacity
                    }).addClass(e(b));
                    return W.append(c), c
                }

                function c(b, c) {
                    var d = a("<div />").mousedown(n(b)).css({
                        cursor: b + "-resize",
                        position: "absolute",
                        zIndex: c
                    }).addClass("ord-" + b);
                    return kb.support && d.bind("touchstart.jcrop", kb.createDragger(b)), X.append(d), d
                }

                function f(a) {
                    var b = J.handleSize,
                        d = c(a, B++).css({
                            opacity: J.handleOpacity
                        }).addClass(e("handle"));
                    return b && d.width(b).height(b), d
                }

                function g(a) {
                    return c(a, B++).addClass("jcrop-dragbar")
                }

                function h(a) {
                    var b;
                    for (b = 0; b < a.length; b++) E[a[b]] = g(a[b])
                }

                function i(a) {
                    var c, d;
                    for (d = 0; d < a.length; d++) {
                        switch (a[d]) {
                            case "n":
                                c = "hline";
                                break;
                            case "s":
                                c = "hline bottom";
                                break;
                            case "e":
                                c = "vline right";
                                break;
                            case "w":
                                c = "vline"
                        }
                        C[a[d]] = b(c)
                    }
                }

                function j(a) {
                    var b;
                    for (b = 0; b < a.length; b++) D[a[b]] = f(a[b])
                }

                function k(a, b) {
                    J.shade || V.css({
                        top: d(-b),
                        left: d(-a)
                    }), Y.css({
                        top: d(b),
                        left: d(a)
                    })
                }

                function l(a, b) {
                    Y.width(Math.round(a)).height(Math.round(b))
                }

                function m() {
                    var a = lb.getFixed();
                    lb.setPressed([a.x, a.y]), lb.setCurrent([a.x2, a.y2]), o()
                }

                function o(a) {
                    return A ? q(a) : void 0
                }

                function q(a) {
                    var b = lb.getFixed();
                    l(b.w, b.h), k(b.x, b.y), J.shade && mb.updateRaw(b), A || s(), a ? J.onSelect.call(qb, p(b)) : J.onChange.call(qb, p(b))
                }

                function r(a, b, c) {
                    (A || b) && (J.bgFade && !c ? R.animate({
                        opacity: a
                    }, {
                        queue: !1,
                        duration: J.fadeTime
                    }) : R.css("opacity", a))
                }

                function s() {
                    Y.show(), J.shade ? mb.opacity(jb) : r(jb, !0), A = !0
                }

                function u() {
                    x(), Y.hide(), J.shade ? mb.opacity(1) : r(1), A = !1, J.onRelease.call(qb)
                }

                function v() {
                    F && X.show()
                }

                function w() {
                    return F = !0, J.allowResize ? (X.show(), !0) : void 0
                }

                function x() {
                    F = !1, X.hide()
                }

                function y(a) {
                    a ? (eb = !0, x()) : (eb = !1, w())
                }

                function z() {
                    y(!1), m()
                }
                var A, B = 370,
                    C = {},
                    D = {},
                    E = {},
                    F = !1;
                J.dragEdges && a.isArray(J.createDragbars) && h(J.createDragbars), a.isArray(J.createHandles) && j(J.createHandles), J.drawBorders && a.isArray(J.createBorders) && i(J.createBorders), a(document).bind("touchstart.jcrop-ios", function(b) {
                    a(b.currentTarget).hasClass("jcrop-tracker") && b.stopPropagation()
                });
                var G = t().mousedown(n("move")).css({
                    cursor: "move",
                    position: "absolute",
                    zIndex: 360
                });
                return kb.support && G.bind("touchstart.jcrop", kb.createDragger("move")), W.append(G), x(), {
                    updateVisible: o,
                    update: q,
                    release: u,
                    refresh: m,
                    isAwake: function() {
                        return A
                    },
                    setCursor: function(a) {
                        G.css("cursor", a)
                    },
                    enableHandles: w,
                    enableOnly: function() {
                        F = !0
                    },
                    showHandles: v,
                    disableHandles: x,
                    animMode: y,
                    setBgOpacity: r,
                    done: z
                }
            }(),
            ob = function() {
                function b(b) {
                    hb.css({
                        zIndex: 450
                    }), b ? a(document).bind("touchmove.jcrop", g).bind("touchend.jcrop", i) : m && a(document).bind("mousemove.jcrop", d).bind("mouseup.jcrop", e)
                }

                function c() {
                    hb.css({
                        zIndex: 290
                    }), a(document).unbind(".jcrop")
                }

                function d(a) {
                    return k(h(a)), !1
                }

                function e(a) {
                    return a.preventDefault(), a.stopPropagation(), db && (db = !1, l(h(a)), nb.isAwake() && J.onSelect.call(qb, p(lb.getFixed())), c(), k = function() {}, l = function() {}), !1
                }

                function f(a, c, d) {
                    return db = !0, k = a, l = c, b(d), !1
                }

                function g(a) {
                    return k(h(kb.cfilter(a))), !1
                }

                function i(a) {
                    return e(kb.cfilter(a))
                }

                function j(a) {
                    hb.css("cursor", a)
                }
                var k = function() {},
                    l = function() {},
                    m = J.trackDocument;
                return m || hb.mousemove(d).mouseup(e).mouseout(e), R.before(hb), {
                    activateHandlers: f,
                    setCursor: j
                }
            }(),
            pb = function() {
                function b() {
                    J.keySupport && (f.show(), f.focus())
                }

                function c() {
                    f.hide()
                }

                function d(a, b, c) {
                    J.allowMove && (lb.moveOffset([b, c]), nb.updateVisible(!0)), a.preventDefault(), a.stopPropagation()
                }

                function e(a) {
                    if (a.ctrlKey || a.metaKey) return !0;
                    fb = a.shiftKey ? !0 : !1;
                    var b = fb ? 10 : 1;
                    switch (a.keyCode) {
                        case 37:
                            d(a, -b, 0);
                            break;
                        case 39:
                            d(a, b, 0);
                            break;
                        case 38:
                            d(a, 0, -b);
                            break;
                        case 40:
                            d(a, 0, b);
                            break;
                        case 27:
                            J.allowSelect && nb.release();
                            break;
                        case 9:
                            return !0
                    }
                    return !1
                }
                var f = a('<input type="radio" />').css({
                        position: "fixed",
                        left: "-120px",
                        width: "12px"
                    }).addClass("jcrop-keymgr"),
                    g = a("<div />").css({
                        position: "absolute",
                        overflow: "hidden"
                    }).append(f);
                return J.keySupport && (f.keydown(e).blur(c), M || !J.fixedSupport ? (f.css({
                    position: "absolute",
                    left: "-20px"
                }), g.append(f).insertBefore(R)) : f.insertBefore(R)), {
                    watchKeys: b
                }
            }();
        kb.support && hb.bind("touchstart.jcrop", kb.newSelection), X.hide(), H(!0);
        var qb = {
            setImage: F,
            animateTo: v,
            setSelect: w,
            setOptions: A,
            tellSelect: y,
            tellScaled: z,
            setClass: u,
            disable: B,
            enable: C,
            cancel: D,
            release: nb.release,
            destroy: E,
            focus: pb.watchKeys,
            getBounds: function() {
                return [S * bb, T * cb]
            },
            getWidgetSize: function() {
                return [S, T]
            },
            getScaleFactor: function() {
                return [bb, cb]
            },
            getOptions: function() {
                return J
            },
            ui: {
                holder: U,
                selection: Y
            }
        };
        return L && U.bind("selectstart", function() {
            return !1
        }), O.data("Jcrop", qb), qb
    }, a.fn.Jcrop = function(b, c) {
        var d;
        return this.each(function() {
            if (a(this).data("Jcrop")) {
                if ("api" === b) return a(this).data("Jcrop");
                a(this).data("Jcrop").setOptions(b)
            } else "IMG" == this.tagName ? a.Jcrop.Loader(this, function() {
                a(this).css({
                    display: "block",
                    visibility: "hidden"
                }), d = a.Jcrop(this, b), a.isFunction(c) && c.call(d)
            }) : (a(this).css({
                display: "block",
                visibility: "hidden"
            }), d = a.Jcrop(this, b), a.isFunction(c) && c.call(d))
        }), this
    }, a.Jcrop.Loader = function(b, c, d) {
        function e() {
            g.complete ? (f.unbind(".jcloader"), a.isFunction(c) && c.call(g)) : window.setTimeout(e, 50)
        }
        var f = a(b),
            g = f[0];
        f.bind("load.jcloader", e).bind("error.jcloader", function() {
            f.unbind(".jcloader"), a.isFunction(d) && d.call(g)
        }), g.complete && a.isFunction(c) && (f.unbind(".jcloader"), c.call(g))
    }, a.Jcrop.defaults = {
        allowSelect: !0,
        allowMove: !0,
        allowResize: !0,
        trackDocument: !0,
        baseClass: "jcrop",
        addClass: null,
        bgColor: "black",
        bgOpacity: .6,
        bgFade: !1,
        borderOpacity: .4,
        handleOpacity: .5,
        handleSize: null,
        aspectRatio: 0,
        keySupport: !0,
        createHandles: ["n", "s", "e", "w", "nw", "ne", "se", "sw"],
        createDragbars: ["n", "s", "e", "w"],
        createBorders: ["n", "s", "e", "w"],
        drawBorders: !0,
        dragEdges: !0,
        fixedSupport: !0,
        touchSupport: null,
        shade: null,
        boxWidth: 0,
        boxHeight: 0,
        boundary: 2,
        fadeTime: 400,
        animationDelay: 20,
        swingSpeed: 3,
        minSelect: [0, 0],
        maxSize: [0, 0],
        minSize: [0, 0],
        onChange: function() {},
        onSelect: function() {},
        onDblClick: function() {},
        onRelease: function() {}
    }
}(jQuery);
var Handlebars = function() {
    var a = function() {
            "use strict";

            function a(a) {
                this.string = a
            }
            var b;
            return a.prototype.toString = function() {
                return "" + this.string
            }, b = a
        }(),
        b = function(a) {
            "use strict";

            function b(a) {
                return h[a] || "&amp;"
            }

            function c(a, b) {
                for (var c in b) Object.prototype.hasOwnProperty.call(b, c) && (a[c] = b[c])
            }

            function d(a) {
                return a instanceof g ? a.toString() : a || 0 === a ? (a = "" + a, j.test(a) ? a.replace(i, b) : a) : ""
            }

            function e(a) {
                return a || 0 === a ? m(a) && 0 === a.length ? !0 : !1 : !0
            }
            var f = {},
                g = a,
                h = {
                    "&": "&amp;",
                    "<": "&lt;",
                    ">": "&gt;",
                    '"': "&quot;",
                    "'": "&#x27;",
                    "`": "&#x60;"
                },
                i = /[&<>"'`]/g,
                j = /[&<>"'`]/;
            f.extend = c;
            var k = Object.prototype.toString;
            f.toString = k;
            var l = function(a) {
                return "function" == typeof a
            };
            l(/x/) && (l = function(a) {
                return "function" == typeof a && "[object Function]" === k.call(a)
            });
            var l;
            f.isFunction = l;
            var m = Array.isArray || function(a) {
                return a && "object" == typeof a ? "[object Array]" === k.call(a) : !1
            };
            return f.isArray = m, f.escapeExpression = d, f.isEmpty = e, f
        }(a),
        c = function() {
            "use strict";

            function a(a, b) {
                var d;
                b && b.firstLine && (d = b.firstLine, a += " - " + d + ":" + b.firstColumn);
                for (var e = Error.prototype.constructor.call(this, a), f = 0; f < c.length; f++) this[c[f]] = e[c[f]];
                d && (this.lineNumber = d, this.column = b.firstColumn)
            }
            var b, c = ["description", "fileName", "lineNumber", "message", "name", "number", "stack"];
            return a.prototype = new Error, b = a
        }(),
        d = function(a, b) {
            "use strict";

            function c(a, b) {
                this.helpers = a || {}, this.partials = b || {}, d(this)
            }

            function d(a) {
                a.registerHelper("helperMissing", function(a) {
                    if (2 === arguments.length) return void 0;
                    throw new h("Missing helper: '" + a + "'")
                }), a.registerHelper("blockHelperMissing", function(b, c) {
                    var d = c.inverse || function() {},
                        e = c.fn;
                    return m(b) && (b = b.call(this)), b === !0 ? e(this) : b === !1 || null == b ? d(this) : l(b) ? b.length > 0 ? a.helpers.each(b, c) : d(this) : e(b)
                }), a.registerHelper("each", function(a, b) {
                    var c, d = b.fn,
                        e = b.inverse,
                        f = 0,
                        g = "";
                    if (m(a) && (a = a.call(this)), b.data && (c = q(b.data)), a && "object" == typeof a)
                        if (l(a))
                            for (var h = a.length; h > f; f++) c && (c.index = f, c.first = 0 === f, c.last = f === a.length - 1), g += d(a[f], {
                                data: c
                            });
                        else
                            for (var i in a) a.hasOwnProperty(i) && (c && (c.key = i, c.index = f, c.first = 0 === f), g += d(a[i], {
                                data: c
                            }), f++);
                    return 0 === f && (g = e(this)), g
                }), a.registerHelper("if", function(a, b) {
                    return m(a) && (a = a.call(this)), !b.hash.includeZero && !a || g.isEmpty(a) ? b.inverse(this) : b.fn(this)
                }), a.registerHelper("unless", function(b, c) {
                    return a.helpers["if"].call(this, b, {
                        fn: c.inverse,
                        inverse: c.fn,
                        hash: c.hash
                    })
                }), a.registerHelper("with", function(a, b) {
                    return m(a) && (a = a.call(this)), g.isEmpty(a) ? void 0 : b.fn(a)
                }), a.registerHelper("log", function(b, c) {
                    var d = c.data && null != c.data.level ? parseInt(c.data.level, 10) : 1;
                    a.log(d, b)
                })
            }

            function e(a, b) {
                p.log(a, b)
            }
            var f = {},
                g = a,
                h = b,
                i = "1.3.0";
            f.VERSION = i;
            var j = 4;
            f.COMPILER_REVISION = j;
            var k = {
                1: "<= 1.0.rc.2",
                2: "== 1.0.0-rc.3",
                3: "== 1.0.0-rc.4",
                4: ">= 1.0.0"
            };
            f.REVISION_CHANGES = k;
            var l = g.isArray,
                m = g.isFunction,
                n = g.toString,
                o = "[object Object]";
            f.HandlebarsEnvironment = c, c.prototype = {
                constructor: c,
                logger: p,
                log: e,
                registerHelper: function(a, b, c) {
                    if (n.call(a) === o) {
                        if (c || b) throw new h("Arg not supported with multiple helpers");
                        g.extend(this.helpers, a)
                    } else c && (b.not = c), this.helpers[a] = b
                },
                registerPartial: function(a, b) {
                    n.call(a) === o ? g.extend(this.partials, a) : this.partials[a] = b
                }
            };
            var p = {
                methodMap: {
                    0: "debug",
                    1: "info",
                    2: "warn",
                    3: "error"
                },
                DEBUG: 0,
                INFO: 1,
                WARN: 2,
                ERROR: 3,
                level: 3,
                log: function(a, b) {
                    if (p.level <= a) {
                        var c = p.methodMap[a];
                        "undefined" != typeof console && console[c] && console[c].call(console, b)
                    }
                }
            };
            f.logger = p, f.log = e;
            var q = function(a) {
                var b = {};
                return g.extend(b, a), b
            };
            return f.createFrame = q, f
        }(b, c),
        e = function(a, b, c) {
            "use strict";

            function d(a) {
                var b = a && a[0] || 1,
                    c = m;
                if (b !== c) {
                    if (c > b) {
                        var d = n[c],
                            e = n[b];
                        throw new l("Template was precompiled with an older version of Handlebars than the current runtime. Please update your precompiler to a newer version (" + d + ") or downgrade your runtime to an older version (" + e + ").")
                    }
                    throw new l("Template was precompiled with a newer version of Handlebars than the current runtime. Please update your runtime to a newer version (" + a[1] + ").")
                }
            }

            function e(a, b) {
                if (!b) throw new l("No environment passed to template");
                var c = function(a, c, d, e, f, g) {
                        var h = b.VM.invokePartial.apply(this, arguments);
                        if (null != h) return h;
                        if (b.compile) {
                            var i = {
                                helpers: e,
                                partials: f,
                                data: g
                            };
                            return f[c] = b.compile(a, {
                                data: void 0 !== g
                            }, b), f[c](d, i)
                        }
                        throw new l("The partial " + c + " could not be compiled when running in runtime-only mode")
                    },
                    d = {
                        escapeExpression: k.escapeExpression,
                        invokePartial: c,
                        programs: [],
                        program: function(a, b, c) {
                            var d = this.programs[a];
                            return c ? d = g(a, b, c) : d || (d = this.programs[a] = g(a, b)), d
                        },
                        merge: function(a, b) {
                            var c = a || b;
                            return a && b && a !== b && (c = {}, k.extend(c, b), k.extend(c, a)), c
                        },
                        programWithDepth: b.VM.programWithDepth,
                        noop: b.VM.noop,
                        compilerInfo: null
                    };
                return function(c, e) {
                    e = e || {};
                    var f, g, h = e.partial ? e : b;
                    e.partial || (f = e.helpers, g = e.partials);
                    var i = a.call(d, h, c, f, g, e.data);
                    return e.partial || b.VM.checkRevision(d.compilerInfo), i
                }
            }

            function f(a, b, c) {
                var d = Array.prototype.slice.call(arguments, 3),
                    e = function(a, e) {
                        return e = e || {}, b.apply(this, [a, e.data || c].concat(d))
                    };
                return e.program = a, e.depth = d.length, e
            }

            function g(a, b, c) {
                var d = function(a, d) {
                    return d = d || {}, b(a, d.data || c)
                };
                return d.program = a, d.depth = 0, d
            }

            function h(a, b, c, d, e, f) {
                var g = {
                    partial: !0,
                    helpers: d,
                    partials: e,
                    data: f
                };
                if (void 0 === a) throw new l("The partial " + b + " could not be found");
                return a instanceof Function ? a(c, g) : void 0
            }

            function i() {
                return ""
            }
            var j = {},
                k = a,
                l = b,
                m = c.COMPILER_REVISION,
                n = c.REVISION_CHANGES;
            return j.checkRevision = d, j.template = e, j.programWithDepth = f, j.program = g, j.invokePartial = h, j.noop = i, j
        }(b, c, d),
        f = function(a, b, c, d, e) {
            "use strict";
            var f, g = a,
                h = b,
                i = c,
                j = d,
                k = e,
                l = function() {
                    var a = new g.HandlebarsEnvironment;
                    return j.extend(a, g), a.SafeString = h, a.Exception = i, a.Utils = j, a.VM = k, a.template = function(b) {
                        return k.template(b, a)
                    }, a
                },
                m = l();
            return m.create = l, f = m
        }(d, a, c, b, e),
        g = function(a) {
            "use strict";

            function b(a) {
                a = a || {}, this.firstLine = a.first_line, this.firstColumn = a.first_column, this.lastColumn = a.last_column, this.lastLine = a.last_line
            }
            var c, d = a,
                e = {
                    ProgramNode: function(a, c, d, f) {
                        var g, h;
                        3 === arguments.length ? (f = d, d = null) : 2 === arguments.length && (f = c, c = null), b.call(this, f), this.type = "program", this.statements = a, this.strip = {}, d ? (h = d[0], h ? (g = {
                            first_line: h.firstLine,
                            last_line: h.lastLine,
                            last_column: h.lastColumn,
                            first_column: h.firstColumn
                        }, this.inverse = new e.ProgramNode(d, c, g)) : this.inverse = new e.ProgramNode(d, c), this.strip.right = c.left) : c && (this.strip.left = c.right)
                    },
                    MustacheNode: function(a, c, d, f, g) {
                        if (b.call(this, g), this.type = "mustache", this.strip = f, null != d && d.charAt) {
                            var h = d.charAt(3) || d.charAt(2);
                            this.escaped = "{" !== h && "&" !== h
                        } else this.escaped = !!d;
                        this.sexpr = a instanceof e.SexprNode ? a : new e.SexprNode(a, c), this.sexpr.isRoot = !0, this.id = this.sexpr.id, this.params = this.sexpr.params, this.hash = this.sexpr.hash, this.eligibleHelper = this.sexpr.eligibleHelper, this.isHelper = this.sexpr.isHelper
                    },
                    SexprNode: function(a, c, d) {
                        b.call(this, d), this.type = "sexpr", this.hash = c;
                        var e = this.id = a[0],
                            f = this.params = a.slice(1),
                            g = this.eligibleHelper = e.isSimple;
                        this.isHelper = g && (f.length || c)
                    },
                    PartialNode: function(a, c, d, e) {
                        b.call(this, e), this.type = "partial", this.partialName = a, this.context = c, this.strip = d
                    },
                    BlockNode: function(a, c, e, f, g) {
                        if (b.call(this, g), a.sexpr.id.original !== f.path.original) throw new d(a.sexpr.id.original + " doesn't match " + f.path.original, this);
                        this.type = "block", this.mustache = a, this.program = c, this.inverse = e, this.strip = {
                            left: a.strip.left,
                            right: f.strip.right
                        }, (c || e).strip.left = a.strip.right, (e || c).strip.right = f.strip.left, e && !c && (this.isInverse = !0)
                    },
                    ContentNode: function(a, c) {
                        b.call(this, c), this.type = "content", this.string = a
                    },
                    HashNode: function(a, c) {
                        b.call(this, c), this.type = "hash", this.pairs = a
                    },
                    IdNode: function(a, c) {
                        b.call(this, c), this.type = "ID";
                        for (var e = "", f = [], g = 0, h = 0, i = a.length; i > h; h++) {
                            var j = a[h].part;
                            if (e += (a[h].separator || "") + j, ".." === j || "." === j || "this" === j) {
                                if (f.length > 0) throw new d("Invalid path: " + e, this);
                                ".." === j ? g++ : this.isScoped = !0
                            } else f.push(j)
                        }
                        this.original = e, this.parts = f, this.string = f.join("."), this.depth = g, this.isSimple = 1 === a.length && !this.isScoped && 0 === g, this.stringModeValue = this.string
                    },
                    PartialNameNode: function(a, c) {
                        b.call(this, c), this.type = "PARTIAL_NAME", this.name = a.original
                    },
                    DataNode: function(a, c) {
                        b.call(this, c), this.type = "DATA", this.id = a
                    },
                    StringNode: function(a, c) {
                        b.call(this, c), this.type = "STRING", this.original = this.string = this.stringModeValue = a
                    },
                    IntegerNode: function(a, c) {
                        b.call(this, c), this.type = "INTEGER", this.original = this.integer = a, this.stringModeValue = Number(a)
                    },
                    BooleanNode: function(a, c) {
                        b.call(this, c), this.type = "BOOLEAN", this.bool = a, this.stringModeValue = "true" === a
                    },
                    CommentNode: function(a, c) {
                        b.call(this, c), this.type = "comment", this.comment = a
                    }
                };
            return c = e
        }(c),
        h = function() {
            "use strict";
            var a, b = function() {
                function a(a, b) {
                    return {
                        left: "~" === a.charAt(2),
                        right: "~" === b.charAt(0) || "~" === b.charAt(1)
                    }
                }

                function b() {
                    this.yy = {}
                }
                var c = {
                        trace: function() {},
                        yy: {},
                        symbols_: {
                            error: 2,
                            root: 3,
                            statements: 4,
                            EOF: 5,
                            program: 6,
                            simpleInverse: 7,
                            statement: 8,
                            openInverse: 9,
                            closeBlock: 10,
                            openBlock: 11,
                            mustache: 12,
                            partial: 13,
                            CONTENT: 14,
                            COMMENT: 15,
                            OPEN_BLOCK: 16,
                            sexpr: 17,
                            CLOSE: 18,
                            OPEN_INVERSE: 19,
                            OPEN_ENDBLOCK: 20,
                            path: 21,
                            OPEN: 22,
                            OPEN_UNESCAPED: 23,
                            CLOSE_UNESCAPED: 24,
                            OPEN_PARTIAL: 25,
                            partialName: 26,
                            partial_option0: 27,
                            sexpr_repetition0: 28,
                            sexpr_option0: 29,
                            dataName: 30,
                            param: 31,
                            STRING: 32,
                            INTEGER: 33,
                            BOOLEAN: 34,
                            OPEN_SEXPR: 35,
                            CLOSE_SEXPR: 36,
                            hash: 37,
                            hash_repetition_plus0: 38,
                            hashSegment: 39,
                            ID: 40,
                            EQUALS: 41,
                            DATA: 42,
                            pathSegments: 43,
                            SEP: 44,
                            $accept: 0,
                            $end: 1
                        },
                        terminals_: {
                            2: "error",
                            5: "EOF",
                            14: "CONTENT",
                            15: "COMMENT",
                            16: "OPEN_BLOCK",
                            18: "CLOSE",
                            19: "OPEN_INVERSE",
                            20: "OPEN_ENDBLOCK",
                            22: "OPEN",
                            23: "OPEN_UNESCAPED",
                            24: "CLOSE_UNESCAPED",
                            25: "OPEN_PARTIAL",
                            32: "STRING",
                            33: "INTEGER",
                            34: "BOOLEAN",
                            35: "OPEN_SEXPR",
                            36: "CLOSE_SEXPR",
                            40: "ID",
                            41: "EQUALS",
                            42: "DATA",
                            44: "SEP"
                        },
                        productions_: [0, [3, 2],
                            [3, 1],
                            [6, 2],
                            [6, 3],
                            [6, 2],
                            [6, 1],
                            [6, 1],
                            [6, 0],
                            [4, 1],
                            [4, 2],
                            [8, 3],
                            [8, 3],
                            [8, 1],
                            [8, 1],
                            [8, 1],
                            [8, 1],
                            [11, 3],
                            [9, 3],
                            [10, 3],
                            [12, 3],
                            [12, 3],
                            [13, 4],
                            [7, 2],
                            [17, 3],
                            [17, 1],
                            [31, 1],
                            [31, 1],
                            [31, 1],
                            [31, 1],
                            [31, 1],
                            [31, 3],
                            [37, 1],
                            [39, 3],
                            [26, 1],
                            [26, 1],
                            [26, 1],
                            [30, 2],
                            [21, 1],
                            [43, 3],
                            [43, 1],
                            [27, 0],
                            [27, 1],
                            [28, 0],
                            [28, 2],
                            [29, 0],
                            [29, 1],
                            [38, 1],
                            [38, 2]
                        ],
                        performAction: function(b, c, d, e, f, g) {
                            var h = g.length - 1;
                            switch (f) {
                                case 1:
                                    return new e.ProgramNode(g[h - 1], this._$);
                                case 2:
                                    return new e.ProgramNode([], this._$);
                                case 3:
                                    this.$ = new e.ProgramNode([], g[h - 1], g[h], this._$);
                                    break;
                                case 4:
                                    this.$ = new e.ProgramNode(g[h - 2], g[h - 1], g[h], this._$);
                                    break;
                                case 5:
                                    this.$ = new e.ProgramNode(g[h - 1], g[h], [], this._$);
                                    break;
                                case 6:
                                    this.$ = new e.ProgramNode(g[h], this._$);
                                    break;
                                case 7:
                                    this.$ = new e.ProgramNode([], this._$);
                                    break;
                                case 8:
                                    this.$ = new e.ProgramNode([], this._$);
                                    break;
                                case 9:
                                    this.$ = [g[h]];
                                    break;
                                case 10:
                                    g[h - 1].push(g[h]), this.$ = g[h - 1];
                                    break;
                                case 11:
                                    this.$ = new e.BlockNode(g[h - 2], g[h - 1].inverse, g[h - 1], g[h], this._$);
                                    break;
                                case 12:
                                    this.$ = new e.BlockNode(g[h - 2], g[h - 1], g[h - 1].inverse, g[h], this._$);
                                    break;
                                case 13:
                                    this.$ = g[h];
                                    break;
                                case 14:
                                    this.$ = g[h];
                                    break;
                                case 15:
                                    this.$ = new e.ContentNode(g[h], this._$);
                                    break;
                                case 16:
                                    this.$ = new e.CommentNode(g[h], this._$);
                                    break;
                                case 17:
                                    this.$ = new e.MustacheNode(g[h - 1], null, g[h - 2], a(g[h - 2], g[h]), this._$);
                                    break;
                                case 18:
                                    this.$ = new e.MustacheNode(g[h - 1], null, g[h - 2], a(g[h - 2], g[h]), this._$);
                                    break;
                                case 19:
                                    this.$ = {
                                        path: g[h - 1],
                                        strip: a(g[h - 2], g[h])
                                    };
                                    break;
                                case 20:
                                    this.$ = new e.MustacheNode(g[h - 1], null, g[h - 2], a(g[h - 2], g[h]), this._$);
                                    break;
                                case 21:
                                    this.$ = new e.MustacheNode(g[h - 1], null, g[h - 2], a(g[h - 2], g[h]), this._$);
                                    break;
                                case 22:
                                    this.$ = new e.PartialNode(g[h - 2], g[h - 1], a(g[h - 3], g[h]), this._$);
                                    break;
                                case 23:
                                    this.$ = a(g[h - 1], g[h]);
                                    break;
                                case 24:
                                    this.$ = new e.SexprNode([g[h - 2]].concat(g[h - 1]), g[h], this._$);
                                    break;
                                case 25:
                                    this.$ = new e.SexprNode([g[h]], null, this._$);
                                    break;
                                case 26:
                                    this.$ = g[h];
                                    break;
                                case 27:
                                    this.$ = new e.StringNode(g[h], this._$);
                                    break;
                                case 28:
                                    this.$ = new e.IntegerNode(g[h], this._$);
                                    break;
                                case 29:
                                    this.$ = new e.BooleanNode(g[h], this._$);
                                    break;
                                case 30:
                                    this.$ = g[h];
                                    break;
                                case 31:
                                    g[h - 1].isHelper = !0, this.$ = g[h - 1];
                                    break;
                                case 32:
                                    this.$ = new e.HashNode(g[h], this._$);
                                    break;
                                case 33:
                                    this.$ = [g[h - 2], g[h]];
                                    break;
                                case 34:
                                    this.$ = new e.PartialNameNode(g[h], this._$);
                                    break;
                                case 35:
                                    this.$ = new e.PartialNameNode(new e.StringNode(g[h], this._$), this._$);
                                    break;
                                case 36:
                                    this.$ = new e.PartialNameNode(new e.IntegerNode(g[h], this._$));
                                    break;
                                case 37:
                                    this.$ = new e.DataNode(g[h], this._$);
                                    break;
                                case 38:
                                    this.$ = new e.IdNode(g[h], this._$);
                                    break;
                                case 39:
                                    g[h - 2].push({
                                        part: g[h],
                                        separator: g[h - 1]
                                    }), this.$ = g[h - 2];
                                    break;
                                case 40:
                                    this.$ = [{
                                        part: g[h]
                                    }];
                                    break;
                                case 43:
                                    this.$ = [];
                                    break;
                                case 44:
                                    g[h - 1].push(g[h]);
                                    break;
                                case 47:
                                    this.$ = [g[h]];
                                    break;
                                case 48:
                                    g[h - 1].push(g[h])
                            }
                        },
                        table: [{
                            3: 1,
                            4: 2,
                            5: [1, 3],
                            8: 4,
                            9: 5,
                            11: 6,
                            12: 7,
                            13: 8,
                            14: [1, 9],
                            15: [1, 10],
                            16: [1, 12],
                            19: [1, 11],
                            22: [1, 13],
                            23: [1, 14],
                            25: [1, 15]
                        }, {
                            1: [3]
                        }, {
                            5: [1, 16],
                            8: 17,
                            9: 5,
                            11: 6,
                            12: 7,
                            13: 8,
                            14: [1, 9],
                            15: [1, 10],
                            16: [1, 12],
                            19: [1, 11],
                            22: [1, 13],
                            23: [1, 14],
                            25: [1, 15]
                        }, {
                            1: [2, 2]
                        }, {
                            5: [2, 9],
                            14: [2, 9],
                            15: [2, 9],
                            16: [2, 9],
                            19: [2, 9],
                            20: [2, 9],
                            22: [2, 9],
                            23: [2, 9],
                            25: [2, 9]
                        }, {
                            4: 20,
                            6: 18,
                            7: 19,
                            8: 4,
                            9: 5,
                            11: 6,
                            12: 7,
                            13: 8,
                            14: [1, 9],
                            15: [1, 10],
                            16: [1, 12],
                            19: [1, 21],
                            20: [2, 8],
                            22: [1, 13],
                            23: [1, 14],
                            25: [1, 15]
                        }, {
                            4: 20,
                            6: 22,
                            7: 19,
                            8: 4,
                            9: 5,
                            11: 6,
                            12: 7,
                            13: 8,
                            14: [1, 9],
                            15: [1, 10],
                            16: [1, 12],
                            19: [1, 21],
                            20: [2, 8],
                            22: [1, 13],
                            23: [1, 14],
                            25: [1, 15]
                        }, {
                            5: [2, 13],
                            14: [2, 13],
                            15: [2, 13],
                            16: [2, 13],
                            19: [2, 13],
                            20: [2, 13],
                            22: [2, 13],
                            23: [2, 13],
                            25: [2, 13]
                        }, {
                            5: [2, 14],
                            14: [2, 14],
                            15: [2, 14],
                            16: [2, 14],
                            19: [2, 14],
                            20: [2, 14],
                            22: [2, 14],
                            23: [2, 14],
                            25: [2, 14]
                        }, {
                            5: [2, 15],
                            14: [2, 15],
                            15: [2, 15],
                            16: [2, 15],
                            19: [2, 15],
                            20: [2, 15],
                            22: [2, 15],
                            23: [2, 15],
                            25: [2, 15]
                        }, {
                            5: [2, 16],
                            14: [2, 16],
                            15: [2, 16],
                            16: [2, 16],
                            19: [2, 16],
                            20: [2, 16],
                            22: [2, 16],
                            23: [2, 16],
                            25: [2, 16]
                        }, {
                            17: 23,
                            21: 24,
                            30: 25,
                            40: [1, 28],
                            42: [1, 27],
                            43: 26
                        }, {
                            17: 29,
                            21: 24,
                            30: 25,
                            40: [1, 28],
                            42: [1, 27],
                            43: 26
                        }, {
                            17: 30,
                            21: 24,
                            30: 25,
                            40: [1, 28],
                            42: [1, 27],
                            43: 26
                        }, {
                            17: 31,
                            21: 24,
                            30: 25,
                            40: [1, 28],
                            42: [1, 27],
                            43: 26
                        }, {
                            21: 33,
                            26: 32,
                            32: [1, 34],
                            33: [1, 35],
                            40: [1, 28],
                            43: 26
                        }, {
                            1: [2, 1]
                        }, {
                            5: [2, 10],
                            14: [2, 10],
                            15: [2, 10],
                            16: [2, 10],
                            19: [2, 10],
                            20: [2, 10],
                            22: [2, 10],
                            23: [2, 10],
                            25: [2, 10]
                        }, {
                            10: 36,
                            20: [1, 37]
                        }, {
                            4: 38,
                            8: 4,
                            9: 5,
                            11: 6,
                            12: 7,
                            13: 8,
                            14: [1, 9],
                            15: [1, 10],
                            16: [1, 12],
                            19: [1, 11],
                            20: [2, 7],
                            22: [1, 13],
                            23: [1, 14],
                            25: [1, 15]
                        }, {
                            7: 39,
                            8: 17,
                            9: 5,
                            11: 6,
                            12: 7,
                            13: 8,
                            14: [1, 9],
                            15: [1, 10],
                            16: [1, 12],
                            19: [1, 21],
                            20: [2, 6],
                            22: [1, 13],
                            23: [1, 14],
                            25: [1, 15]
                        }, {
                            17: 23,
                            18: [1, 40],
                            21: 24,
                            30: 25,
                            40: [1, 28],
                            42: [1, 27],
                            43: 26
                        }, {
                            10: 41,
                            20: [1, 37]
                        }, {
                            18: [1, 42]
                        }, {
                            18: [2, 43],
                            24: [2, 43],
                            28: 43,
                            32: [2, 43],
                            33: [2, 43],
                            34: [2, 43],
                            35: [2, 43],
                            36: [2, 43],
                            40: [2, 43],
                            42: [2, 43]
                        }, {
                            18: [2, 25],
                            24: [2, 25],
                            36: [2, 25]
                        }, {
                            18: [2, 38],
                            24: [2, 38],
                            32: [2, 38],
                            33: [2, 38],
                            34: [2, 38],
                            35: [2, 38],
                            36: [2, 38],
                            40: [2, 38],
                            42: [2, 38],
                            44: [1, 44]
                        }, {
                            21: 45,
                            40: [1, 28],
                            43: 26
                        }, {
                            18: [2, 40],
                            24: [2, 40],
                            32: [2, 40],
                            33: [2, 40],
                            34: [2, 40],
                            35: [2, 40],
                            36: [2, 40],
                            40: [2, 40],
                            42: [2, 40],
                            44: [2, 40]
                        }, {
                            18: [1, 46]
                        }, {
                            18: [1, 47]
                        }, {
                            24: [1, 48]
                        }, {
                            18: [2, 41],
                            21: 50,
                            27: 49,
                            40: [1, 28],
                            43: 26
                        }, {
                            18: [2, 34],
                            40: [2, 34]
                        }, {
                            18: [2, 35],
                            40: [2, 35]
                        }, {
                            18: [2, 36],
                            40: [2, 36]
                        }, {
                            5: [2, 11],
                            14: [2, 11],
                            15: [2, 11],
                            16: [2, 11],
                            19: [2, 11],
                            20: [2, 11],
                            22: [2, 11],
                            23: [2, 11],
                            25: [2, 11]
                        }, {
                            21: 51,
                            40: [1, 28],
                            43: 26
                        }, {
                            8: 17,
                            9: 5,
                            11: 6,
                            12: 7,
                            13: 8,
                            14: [1, 9],
                            15: [1, 10],
                            16: [1, 12],
                            19: [1, 11],
                            20: [2, 3],
                            22: [1, 13],
                            23: [1, 14],
                            25: [1, 15]
                        }, {
                            4: 52,
                            8: 4,
                            9: 5,
                            11: 6,
                            12: 7,
                            13: 8,
                            14: [1, 9],
                            15: [1, 10],
                            16: [1, 12],
                            19: [1, 11],
                            20: [2, 5],
                            22: [1, 13],
                            23: [1, 14],
                            25: [1, 15]
                        }, {
                            14: [2, 23],
                            15: [2, 23],
                            16: [2, 23],
                            19: [2, 23],
                            20: [2, 23],
                            22: [2, 23],
                            23: [2, 23],
                            25: [2, 23]
                        }, {
                            5: [2, 12],
                            14: [2, 12],
                            15: [2, 12],
                            16: [2, 12],
                            19: [2, 12],
                            20: [2, 12],
                            22: [2, 12],
                            23: [2, 12],
                            25: [2, 12]
                        }, {
                            14: [2, 18],
                            15: [2, 18],
                            16: [2, 18],
                            19: [2, 18],
                            20: [2, 18],
                            22: [2, 18],
                            23: [2, 18],
                            25: [2, 18]
                        }, {
                            18: [2, 45],
                            21: 56,
                            24: [2, 45],
                            29: 53,
                            30: 60,
                            31: 54,
                            32: [1, 57],
                            33: [1, 58],
                            34: [1, 59],
                            35: [1, 61],
                            36: [2, 45],
                            37: 55,
                            38: 62,
                            39: 63,
                            40: [1, 64],
                            42: [1, 27],
                            43: 26
                        }, {
                            40: [1, 65]
                        }, {
                            18: [2, 37],
                            24: [2, 37],
                            32: [2, 37],
                            33: [2, 37],
                            34: [2, 37],
                            35: [2, 37],
                            36: [2, 37],
                            40: [2, 37],
                            42: [2, 37]
                        }, {
                            14: [2, 17],
                            15: [2, 17],
                            16: [2, 17],
                            19: [2, 17],
                            20: [2, 17],
                            22: [2, 17],
                            23: [2, 17],
                            25: [2, 17]
                        }, {
                            5: [2, 20],
                            14: [2, 20],
                            15: [2, 20],
                            16: [2, 20],
                            19: [2, 20],
                            20: [2, 20],
                            22: [2, 20],
                            23: [2, 20],
                            25: [2, 20]
                        }, {
                            5: [2, 21],
                            14: [2, 21],
                            15: [2, 21],
                            16: [2, 21],
                            19: [2, 21],
                            20: [2, 21],
                            22: [2, 21],
                            23: [2, 21],
                            25: [2, 21]
                        }, {
                            18: [1, 66]
                        }, {
                            18: [2, 42]
                        }, {
                            18: [1, 67]
                        }, {
                            8: 17,
                            9: 5,
                            11: 6,
                            12: 7,
                            13: 8,
                            14: [1, 9],
                            15: [1, 10],
                            16: [1, 12],
                            19: [1, 11],
                            20: [2, 4],
                            22: [1, 13],
                            23: [1, 14],
                            25: [1, 15]
                        }, {
                            18: [2, 24],
                            24: [2, 24],
                            36: [2, 24]
                        }, {
                            18: [2, 44],
                            24: [2, 44],
                            32: [2, 44],
                            33: [2, 44],
                            34: [2, 44],
                            35: [2, 44],
                            36: [2, 44],
                            40: [2, 44],
                            42: [2, 44]
                        }, {
                            18: [2, 46],
                            24: [2, 46],
                            36: [2, 46]
                        }, {
                            18: [2, 26],
                            24: [2, 26],
                            32: [2, 26],
                            33: [2, 26],
                            34: [2, 26],
                            35: [2, 26],
                            36: [2, 26],
                            40: [2, 26],
                            42: [2, 26]
                        }, {
                            18: [2, 27],
                            24: [2, 27],
                            32: [2, 27],
                            33: [2, 27],
                            34: [2, 27],
                            35: [2, 27],
                            36: [2, 27],
                            40: [2, 27],
                            42: [2, 27]
                        }, {
                            18: [2, 28],
                            24: [2, 28],
                            32: [2, 28],
                            33: [2, 28],
                            34: [2, 28],
                            35: [2, 28],
                            36: [2, 28],
                            40: [2, 28],
                            42: [2, 28]
                        }, {
                            18: [2, 29],
                            24: [2, 29],
                            32: [2, 29],
                            33: [2, 29],
                            34: [2, 29],
                            35: [2, 29],
                            36: [2, 29],
                            40: [2, 29],
                            42: [2, 29]
                        }, {
                            18: [2, 30],
                            24: [2, 30],
                            32: [2, 30],
                            33: [2, 30],
                            34: [2, 30],
                            35: [2, 30],
                            36: [2, 30],
                            40: [2, 30],
                            42: [2, 30]
                        }, {
                            17: 68,
                            21: 24,
                            30: 25,
                            40: [1, 28],
                            42: [1, 27],
                            43: 26
                        }, {
                            18: [2, 32],
                            24: [2, 32],
                            36: [2, 32],
                            39: 69,
                            40: [1, 70]
                        }, {
                            18: [2, 47],
                            24: [2, 47],
                            36: [2, 47],
                            40: [2, 47]
                        }, {
                            18: [2, 40],
                            24: [2, 40],
                            32: [2, 40],
                            33: [2, 40],
                            34: [2, 40],
                            35: [2, 40],
                            36: [2, 40],
                            40: [2, 40],
                            41: [1, 71],
                            42: [2, 40],
                            44: [2, 40]
                        }, {
                            18: [2, 39],
                            24: [2, 39],
                            32: [2, 39],
                            33: [2, 39],
                            34: [2, 39],
                            35: [2, 39],
                            36: [2, 39],
                            40: [2, 39],
                            42: [2, 39],
                            44: [2, 39]
                        }, {
                            5: [2, 22],
                            14: [2, 22],
                            15: [2, 22],
                            16: [2, 22],
                            19: [2, 22],
                            20: [2, 22],
                            22: [2, 22],
                            23: [2, 22],
                            25: [2, 22]
                        }, {
                            5: [2, 19],
                            14: [2, 19],
                            15: [2, 19],
                            16: [2, 19],
                            19: [2, 19],
                            20: [2, 19],
                            22: [2, 19],
                            23: [2, 19],
                            25: [2, 19]
                        }, {
                            36: [1, 72]
                        }, {
                            18: [2, 48],
                            24: [2, 48],
                            36: [2, 48],
                            40: [2, 48]
                        }, {
                            41: [1, 71]
                        }, {
                            21: 56,
                            30: 60,
                            31: 73,
                            32: [1, 57],
                            33: [1, 58],
                            34: [1, 59],
                            35: [1, 61],
                            40: [1, 28],
                            42: [1, 27],
                            43: 26
                        }, {
                            18: [2, 31],
                            24: [2, 31],
                            32: [2, 31],
                            33: [2, 31],
                            34: [2, 31],
                            35: [2, 31],
                            36: [2, 31],
                            40: [2, 31],
                            42: [2, 31]
                        }, {
                            18: [2, 33],
                            24: [2, 33],
                            36: [2, 33],
                            40: [2, 33]
                        }],
                        defaultActions: {
                            3: [2, 2],
                            16: [2, 1],
                            50: [2, 42]
                        },
                        parseError: function(a) {
                            throw new Error(a)
                        },
                        parse: function(a) {
                            function b() {
                                var a;
                                return a = c.lexer.lex() || 1, "number" != typeof a && (a = c.symbols_[a] || a), a
                            }
                            var c = this,
                                d = [0],
                                e = [null],
                                f = [],
                                g = this.table,
                                h = "",
                                i = 0,
                                j = 0,
                                k = 0;
                            this.lexer.setInput(a), this.lexer.yy = this.yy, this.yy.lexer = this.lexer, this.yy.parser = this, "undefined" == typeof this.lexer.yylloc && (this.lexer.yylloc = {});
                            var l = this.lexer.yylloc;
                            f.push(l);
                            var m = this.lexer.options && this.lexer.options.ranges;
                            "function" == typeof this.yy.parseError && (this.parseError = this.yy.parseError);
                            for (var n, o, p, q, r, s, t, u, v, w = {};;) {
                                if (p = d[d.length - 1], this.defaultActions[p] ? q = this.defaultActions[p] : ((null === n || "undefined" == typeof n) && (n = b()), q = g[p] && g[p][n]), "undefined" == typeof q || !q.length || !q[0]) {
                                    var x = "";
                                    if (!k) {
                                        v = [];
                                        for (s in g[p]) this.terminals_[s] && s > 2 && v.push("'" + this.terminals_[s] + "'");
                                        x = this.lexer.showPosition ? "Parse error on line " + (i + 1) + ":\n" + this.lexer.showPosition() + "\nExpecting " + v.join(", ") + ", got '" + (this.terminals_[n] || n) + "'" : "Parse error on line " + (i + 1) + ": Unexpected " + (1 == n ? "end of input" : "'" + (this.terminals_[n] || n) + "'"), this.parseError(x, {
                                            text: this.lexer.match,
                                            token: this.terminals_[n] || n,
                                            line: this.lexer.yylineno,
                                            loc: l,
                                            expected: v
                                        })
                                    }
                                }
                                if (q[0] instanceof Array && q.length > 1) throw new Error("Parse Error: multiple actions possible at state: " + p + ", token: " + n);
                                switch (q[0]) {
                                    case 1:
                                        d.push(n), e.push(this.lexer.yytext), f.push(this.lexer.yylloc), d.push(q[1]), n = null, o ? (n = o, o = null) : (j = this.lexer.yyleng, h = this.lexer.yytext, i = this.lexer.yylineno, l = this.lexer.yylloc, k > 0 && k--);
                                        break;
                                    case 2:
                                        if (t = this.productions_[q[1]][1], w.$ = e[e.length - t], w._$ = {
                                                first_line: f[f.length - (t || 1)].first_line,
                                                last_line: f[f.length - 1].last_line,
                                                first_column: f[f.length - (t || 1)].first_column,
                                                last_column: f[f.length - 1].last_column
                                            }, m && (w._$.range = [f[f.length - (t || 1)].range[0], f[f.length - 1].range[1]]), r = this.performAction.call(w, h, j, i, this.yy, q[1], e, f), "undefined" != typeof r) return r;
                                        t && (d = d.slice(0, -1 * t * 2), e = e.slice(0, -1 * t), f = f.slice(0, -1 * t)), d.push(this.productions_[q[1]][0]), e.push(w.$), f.push(w._$), u = g[d[d.length - 2]][d[d.length - 1]], d.push(u);
                                        break;
                                    case 3:
                                        return !0
                                }
                            }
                            return !0
                        }
                    },
                    d = function() {
                        var a = {
                            EOF: 1,
                            parseError: function(a, b) {
                                if (!this.yy.parser) throw new Error(a);
                                this.yy.parser.parseError(a, b)
                            },
                            setInput: function(a) {
                                return this._input = a, this._more = this._less = this.done = !1, this.yylineno = this.yyleng = 0, this.yytext = this.matched = this.match = "", this.conditionStack = ["INITIAL"], this.yylloc = {
                                    first_line: 1,
                                    first_column: 0,
                                    last_line: 1,
                                    last_column: 0
                                }, this.options.ranges && (this.yylloc.range = [0, 0]), this.offset = 0, this
                            },
                            input: function() {
                                var a = this._input[0];
                                this.yytext += a, this.yyleng++, this.offset++, this.match += a, this.matched += a;
                                var b = a.match(/(?:\r\n?|\n).*/g);
                                return b ? (this.yylineno++, this.yylloc.last_line++) : this.yylloc.last_column++, this.options.ranges && this.yylloc.range[1]++, this._input = this._input.slice(1), a
                            },
                            unput: function(a) {
                                var b = a.length,
                                    c = a.split(/(?:\r\n?|\n)/g);
                                this._input = a + this._input, this.yytext = this.yytext.substr(0, this.yytext.length - b - 1), this.offset -= b;
                                var d = this.match.split(/(?:\r\n?|\n)/g);
                                this.match = this.match.substr(0, this.match.length - 1), this.matched = this.matched.substr(0, this.matched.length - 1), c.length - 1 && (this.yylineno -= c.length - 1);
                                var e = this.yylloc.range;
                                return this.yylloc = {
                                    first_line: this.yylloc.first_line,
                                    last_line: this.yylineno + 1,
                                    first_column: this.yylloc.first_column,
                                    last_column: c ? (c.length === d.length ? this.yylloc.first_column : 0) + d[d.length - c.length].length - c[0].length : this.yylloc.first_column - b
                                }, this.options.ranges && (this.yylloc.range = [e[0], e[0] + this.yyleng - b]), this
                            },
                            more: function() {
                                return this._more = !0, this
                            },
                            less: function(a) {
                                this.unput(this.match.slice(a))
                            },
                            pastInput: function() {
                                var a = this.matched.substr(0, this.matched.length - this.match.length);
                                return (a.length > 20 ? "..." : "") + a.substr(-20).replace(/\n/g, "")
                            },
                            upcomingInput: function() {
                                var a = this.match;
                                return a.length < 20 && (a += this._input.substr(0, 20 - a.length)), (a.substr(0, 20) + (a.length > 20 ? "..." : "")).replace(/\n/g, "")
                            },
                            showPosition: function() {
                                var a = this.pastInput(),
                                    b = new Array(a.length + 1).join("-");
                                return a + this.upcomingInput() + "\n" + b + "^"
                            },
                            next: function() {
                                if (this.done) return this.EOF;
                                this._input || (this.done = !0);
                                var a, b, c, d, e;
                                this._more || (this.yytext = "", this.match = "");
                                for (var f = this._currentRules(), g = 0; g < f.length && (c = this._input.match(this.rules[f[g]]), !c || b && !(c[0].length > b[0].length) || (b = c, d = g, this.options.flex)); g++);
                                return b ? (e = b[0].match(/(?:\r\n?|\n).*/g), e && (this.yylineno += e.length), this.yylloc = {
                                    first_line: this.yylloc.last_line,
                                    last_line: this.yylineno + 1,
                                    first_column: this.yylloc.last_column,
                                    last_column: e ? e[e.length - 1].length - e[e.length - 1].match(/\r?\n?/)[0].length : this.yylloc.last_column + b[0].length
                                }, this.yytext += b[0], this.match += b[0], this.matches = b, this.yyleng = this.yytext.length, this.options.ranges && (this.yylloc.range = [this.offset, this.offset += this.yyleng]), this._more = !1, this._input = this._input.slice(b[0].length), this.matched += b[0], a = this.performAction.call(this, this.yy, this, f[d], this.conditionStack[this.conditionStack.length - 1]), this.done && this._input && (this.done = !1), a ? a : void 0) : "" === this._input ? this.EOF : this.parseError("Lexical error on line " + (this.yylineno + 1) + ". Unrecognized text.\n" + this.showPosition(), {
                                    text: "",
                                    token: null,
                                    line: this.yylineno
                                })
                            },
                            lex: function() {
                                var a = this.next();
                                return "undefined" != typeof a ? a : this.lex()
                            },
                            begin: function(a) {
                                this.conditionStack.push(a)
                            },
                            popState: function() {
                                return this.conditionStack.pop()
                            },
                            _currentRules: function() {
                                return this.conditions[this.conditionStack[this.conditionStack.length - 1]].rules
                            },
                            topState: function() {
                                return this.conditionStack[this.conditionStack.length - 2]
                            },
                            pushState: function(a) {
                                this.begin(a)
                            }
                        };
                        return a.options = {}, a.performAction = function(a, b, c, d) {
                            function e(a, c) {
                                return b.yytext = b.yytext.substr(a, b.yyleng - c)
                            }
                            switch (c) {
                                case 0:
                                    if ("\\\\" === b.yytext.slice(-2) ? (e(0, 1), this.begin("mu")) : "\\" === b.yytext.slice(-1) ? (e(0, 1), this.begin("emu")) : this.begin("mu"), b.yytext) return 14;
                                    break;
                                case 1:
                                    return 14;
                                case 2:
                                    return this.popState(), 14;
                                case 3:
                                    return e(0, 4), this.popState(), 15;
                                case 4:
                                    return 35;
                                case 5:
                                    return 36;
                                case 6:
                                    return 25;
                                case 7:
                                    return 16;
                                case 8:
                                    return 20;
                                case 9:
                                    return 19;
                                case 10:
                                    return 19;
                                case 11:
                                    return 23;
                                case 12:
                                    return 22;
                                case 13:
                                    this.popState(), this.begin("com");
                                    break;
                                case 14:
                                    return e(3, 5), this.popState(), 15;
                                case 15:
                                    return 22;
                                case 16:
                                    return 41;
                                case 17:
                                    return 40;
                                case 18:
                                    return 40;
                                case 19:
                                    return 44;
                                case 20:
                                    break;
                                case 21:
                                    return this.popState(), 24;
                                case 22:
                                    return this.popState(), 18;
                                case 23:
                                    return b.yytext = e(1, 2).replace(/\\"/g, '"'), 32;
                                case 24:
                                    return b.yytext = e(1, 2).replace(/\\'/g, "'"), 32;
                                case 25:
                                    return 42;
                                case 26:
                                    return 34;
                                case 27:
                                    return 34;
                                case 28:
                                    return 33;
                                case 29:
                                    return 40;
                                case 30:
                                    return b.yytext = e(1, 2), 40;
                                case 31:
                                    return "INVALID";
                                case 32:
                                    return 5
                            }
                        }, a.rules = [/^(?:[^\x00]*?(?=(\{\{)))/, /^(?:[^\x00]+)/, /^(?:[^\x00]{2,}?(?=(\{\{|\\\{\{|\\\\\{\{|$)))/, /^(?:[\s\S]*?--\}\})/, /^(?:\()/, /^(?:\))/, /^(?:\{\{(~)?>)/, /^(?:\{\{(~)?#)/, /^(?:\{\{(~)?\/)/, /^(?:\{\{(~)?\^)/, /^(?:\{\{(~)?\s*else\b)/, /^(?:\{\{(~)?\{)/, /^(?:\{\{(~)?&)/, /^(?:\{\{!--)/, /^(?:\{\{![\s\S]*?\}\})/, /^(?:\{\{(~)?)/, /^(?:=)/, /^(?:\.\.)/, /^(?:\.(?=([=~}\s\/.)])))/, /^(?:[\/.])/, /^(?:\s+)/, /^(?:\}(~)?\}\})/, /^(?:(~)?\}\})/, /^(?:"(\\["]|[^"])*")/, /^(?:'(\\[']|[^'])*')/, /^(?:@)/, /^(?:true(?=([~}\s)])))/, /^(?:false(?=([~}\s)])))/, /^(?:-?[0-9]+(?=([~}\s)])))/, /^(?:([^\s!"#%-,\.\/;->@\[-\^`\{-~]+(?=([=~}\s\/.)]))))/, /^(?:\[[^\]]*\])/, /^(?:.)/, /^(?:$)/], a.conditions = {
                            mu: {
                                rules: [4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32],
                                inclusive: !1
                            },
                            emu: {
                                rules: [2],
                                inclusive: !1
                            },
                            com: {
                                rules: [3],
                                inclusive: !1
                            },
                            INITIAL: {
                                rules: [0, 1, 32],
                                inclusive: !0
                            }
                        }, a
                    }();
                return c.lexer = d, b.prototype = c, c.Parser = b, new b
            }();
            return a = b
        }(),
        i = function(a, b) {
            "use strict";

            function c(a) {
                return a.constructor === f.ProgramNode ? a : (e.yy = f, e.parse(a))
            }
            var d = {},
                e = a,
                f = b;
            return d.parser = e, d.parse = c, d
        }(h, g),
        j = function(a) {
            "use strict";

            function b() {}

            function c(a, b, c) {
                if (null == a || "string" != typeof a && a.constructor !== c.AST.ProgramNode) throw new f("You must pass a string or Handlebars AST to Handlebars.precompile. You passed " + a);
                b = b || {}, "data" in b || (b.data = !0);
                var d = c.parse(a),
                    e = (new c.Compiler).compile(d, b);
                return (new c.JavaScriptCompiler).compile(e, b)
            }

            function d(a, b, c) {
                function d() {
                    var d = c.parse(a),
                        e = (new c.Compiler).compile(d, b),
                        f = (new c.JavaScriptCompiler).compile(e, b, void 0, !0);
                    return c.template(f)
                }
                if (null == a || "string" != typeof a && a.constructor !== c.AST.ProgramNode) throw new f("You must pass a string or Handlebars AST to Handlebars.compile. You passed " + a);
                b = b || {}, "data" in b || (b.data = !0);
                var e;
                return function(a, b) {
                    return e || (e = d()), e.call(this, a, b)
                }
            }
            var e = {},
                f = a;
            return e.Compiler = b, b.prototype = {
                compiler: b,
                disassemble: function() {
                    for (var a, b, c, d = this.opcodes, e = [], f = 0, g = d.length; g > f; f++)
                        if (a = d[f], "DECLARE" === a.opcode) e.push("DECLARE " + a.name + "=" + a.value);
                        else {
                            b = [];
                            for (var h = 0; h < a.args.length; h++) c = a.args[h], "string" == typeof c && (c = '"' + c.replace("\n", "\\n") + '"'), b.push(c);
                            e.push(a.opcode + " " + b.join(" "))
                        }
                    return e.join("\n")
                },
                equals: function(a) {
                    var b = this.opcodes.length;
                    if (a.opcodes.length !== b) return !1;
                    for (var c = 0; b > c; c++) {
                        var d = this.opcodes[c],
                            e = a.opcodes[c];
                        if (d.opcode !== e.opcode || d.args.length !== e.args.length) return !1;
                        for (var f = 0; f < d.args.length; f++)
                            if (d.args[f] !== e.args[f]) return !1
                    }
                    if (b = this.children.length, a.children.length !== b) return !1;
                    for (c = 0; b > c; c++)
                        if (!this.children[c].equals(a.children[c])) return !1;
                    return !0
                },
                guid: 0,
                compile: function(a, b) {
                    this.opcodes = [], this.children = [], this.depths = {
                        list: []
                    }, this.options = b;
                    var c = this.options.knownHelpers;
                    if (this.options.knownHelpers = {
                            helperMissing: !0,
                            blockHelperMissing: !0,
                            each: !0,
                            "if": !0,
                            unless: !0,
                            "with": !0,
                            log: !0
                        }, c)
                        for (var d in c) this.options.knownHelpers[d] = c[d];
                    return this.accept(a)
                },
                accept: function(a) {
                    var b, c = a.strip || {};
                    return c.left && this.opcode("strip"), b = this[a.type](a), c.right && this.opcode("strip"), b
                },
                program: function(a) {
                    for (var b = a.statements, c = 0, d = b.length; d > c; c++) this.accept(b[c]);
                    return this.isSimple = 1 === d, this.depths.list = this.depths.list.sort(function(a, b) {
                        return a - b
                    }), this
                },
                compileProgram: function(a) {
                    var b, c = (new this.compiler).compile(a, this.options),
                        d = this.guid++;
                    this.usePartial = this.usePartial || c.usePartial, this.children[d] = c;
                    for (var e = 0, f = c.depths.list.length; f > e; e++) b = c.depths.list[e], 2 > b || this.addDepth(b - 1);
                    return d
                },
                block: function(a) {
                    var b = a.mustache,
                        c = a.program,
                        d = a.inverse;
                    c && (c = this.compileProgram(c)), d && (d = this.compileProgram(d));
                    var e = b.sexpr,
                        f = this.classifySexpr(e);
                    "helper" === f ? this.helperSexpr(e, c, d) : "simple" === f ? (this.simpleSexpr(e), this.opcode("pushProgram", c), this.opcode("pushProgram", d), this.opcode("emptyHash"), this.opcode("blockValue")) : (this.ambiguousSexpr(e, c, d), this.opcode("pushProgram", c), this.opcode("pushProgram", d), this.opcode("emptyHash"), this.opcode("ambiguousBlockValue")), this.opcode("append")
                },
                hash: function(a) {
                    var b, c, d = a.pairs;
                    this.opcode("pushHash");
                    for (var e = 0, f = d.length; f > e; e++) b = d[e], c = b[1], this.options.stringParams ? (c.depth && this.addDepth(c.depth), this.opcode("getContext", c.depth || 0), this.opcode("pushStringParam", c.stringModeValue, c.type), "sexpr" === c.type && this.sexpr(c)) : this.accept(c), this.opcode("assignToHash", b[0]);
                    this.opcode("popHash")
                },
                partial: function(a) {
                    var b = a.partialName;
                    this.usePartial = !0, a.context ? this.ID(a.context) : this.opcode("push", "depth0"), this.opcode("invokePartial", b.name), this.opcode("append")
                },
                content: function(a) {
                    this.opcode("appendContent", a.string)
                },
                mustache: function(a) {
                    this.sexpr(a.sexpr), this.opcode(a.escaped && !this.options.noEscape ? "appendEscaped" : "append")
                },
                ambiguousSexpr: function(a, b, c) {
                    var d = a.id,
                        e = d.parts[0],
                        f = null != b || null != c;
                    this.opcode("getContext", d.depth), this.opcode("pushProgram", b), this.opcode("pushProgram", c), this.opcode("invokeAmbiguous", e, f)
                },
                simpleSexpr: function(a) {
                    var b = a.id;
                    "DATA" === b.type ? this.DATA(b) : b.parts.length ? this.ID(b) : (this.addDepth(b.depth), this.opcode("getContext", b.depth), this.opcode("pushContext")), this.opcode("resolvePossibleLambda")
                },
                helperSexpr: function(a, b, c) {
                    var d = this.setupFullMustacheParams(a, b, c),
                        e = a.id.parts[0];
                    if (this.options.knownHelpers[e]) this.opcode("invokeKnownHelper", d.length, e);
                    else {
                        if (this.options.knownHelpersOnly) throw new f("You specified knownHelpersOnly, but used the unknown helper " + e, a);
                        this.opcode("invokeHelper", d.length, e, a.isRoot)
                    }
                },
                sexpr: function(a) {
                    var b = this.classifySexpr(a);
                    "simple" === b ? this.simpleSexpr(a) : "helper" === b ? this.helperSexpr(a) : this.ambiguousSexpr(a)
                },
                ID: function(a) {
                    this.addDepth(a.depth), this.opcode("getContext", a.depth);
                    var b = a.parts[0];
                    b ? this.opcode("lookupOnContext", a.parts[0]) : this.opcode("pushContext");
                    for (var c = 1, d = a.parts.length; d > c; c++) this.opcode("lookup", a.parts[c])
                },
                DATA: function(a) {
                    if (this.options.data = !0, a.id.isScoped || a.id.depth) throw new f("Scoped data references are not supported: " + a.original, a);
                    this.opcode("lookupData");
                    for (var b = a.id.parts, c = 0, d = b.length; d > c; c++) this.opcode("lookup", b[c])
                },
                STRING: function(a) {
                    this.opcode("pushString", a.string)
                },
                INTEGER: function(a) {
                    this.opcode("pushLiteral", a.integer)
                },
                BOOLEAN: function(a) {
                    this.opcode("pushLiteral", a.bool)
                },
                comment: function() {},
                opcode: function(a) {
                    this.opcodes.push({
                        opcode: a,
                        args: [].slice.call(arguments, 1)
                    })
                },
                declare: function(a, b) {
                    this.opcodes.push({
                        opcode: "DECLARE",
                        name: a,
                        value: b
                    })
                },
                addDepth: function(a) {
                    0 !== a && (this.depths[a] || (this.depths[a] = !0, this.depths.list.push(a)))
                },
                classifySexpr: function(a) {
                    var b = a.isHelper,
                        c = a.eligibleHelper,
                        d = this.options;
                    if (c && !b) {
                        var e = a.id.parts[0];
                        d.knownHelpers[e] ? b = !0 : d.knownHelpersOnly && (c = !1)
                    }
                    return b ? "helper" : c ? "ambiguous" : "simple"
                },
                pushParams: function(a) {
                    for (var b, c = a.length; c--;) b = a[c], this.options.stringParams ? (b.depth && this.addDepth(b.depth), this.opcode("getContext", b.depth || 0), this.opcode("pushStringParam", b.stringModeValue, b.type), "sexpr" === b.type && this.sexpr(b)) : this[b.type](b)
                },
                setupFullMustacheParams: function(a, b, c) {
                    var d = a.params;
                    return this.pushParams(d), this.opcode("pushProgram", b), this.opcode("pushProgram", c), a.hash ? this.hash(a.hash) : this.opcode("emptyHash"), d
                }
            }, e.precompile = c, e.compile = d, e
        }(c),
        k = function(a, b) {
            "use strict";

            function c(a) {
                this.value = a
            }

            function d() {}
            var e, f = a.COMPILER_REVISION,
                g = a.REVISION_CHANGES,
                h = a.log,
                i = b;
            d.prototype = {
                nameLookup: function(a, b) {
                    var c, e;
                    return 0 === a.indexOf("depth") && (c = !0), e = /^[0-9]+$/.test(b) ? a + "[" + b + "]" : d.isValidJavaScriptVariableName(b) ? a + "." + b : a + "['" + b + "']", c ? "(" + a + " && " + e + ")" : e
                },
                compilerInfo: function() {
                    var a = f,
                        b = g[a];
                    return "this.compilerInfo = [" + a + ",'" + b + "'];\n"
                },
                appendToBuffer: function(a) {
                    return this.environment.isSimple ? "return " + a + ";" : {
                        appendToBuffer: !0,
                        content: a,
                        toString: function() {
                            return "buffer += " + a + ";"
                        }
                    }
                },
                initializeBuffer: function() {
                    return this.quotedString("")
                },
                namespace: "Handlebars",
                compile: function(a, b, c, d) {
                    this.environment = a, this.options = b || {}, h("debug", this.environment.disassemble() + "\n\n"), this.name = this.environment.name, this.isChild = !!c, this.context = c || {
                        programs: [],
                        environments: [],
                        aliases: {}
                    }, this.preamble(), this.stackSlot = 0, this.stackVars = [], this.registers = {
                        list: []
                    }, this.hashes = [], this.compileStack = [], this.inlineStack = [], this.compileChildren(a, b);
                    var e, f = a.opcodes;
                    this.i = 0;
                    for (var g = f.length; this.i < g; this.i++) e = f[this.i], "DECLARE" === e.opcode ? this[e.name] = e.value : this[e.opcode].apply(this, e.args), e.opcode !== this.stripNext && (this.stripNext = !1);
                    if (this.pushSource(""), this.stackSlot || this.inlineStack.length || this.compileStack.length) throw new i("Compile completed with content left on stack");
                    return this.createFunctionContext(d)
                },
                preamble: function() {
                    var a = [];
                    if (this.isChild) a.push("");
                    else {
                        var b = this.namespace,
                            c = "helpers = this.merge(helpers, " + b + ".helpers);";
                        this.environment.usePartial && (c = c + " partials = this.merge(partials, " + b + ".partials);"), this.options.data && (c += " data = data || {};"), a.push(c)
                    }
                    a.push(this.environment.isSimple ? "" : ", buffer = " + this.initializeBuffer()), this.lastContext = 0, this.source = a
                },
                createFunctionContext: function(a) {
                    var b = this.stackVars.concat(this.registers.list);
                    if (b.length > 0 && (this.source[1] = this.source[1] + ", " + b.join(", ")), !this.isChild)
                        for (var c in this.context.aliases) this.context.aliases.hasOwnProperty(c) && (this.source[1] = this.source[1] + ", " + c + "=" + this.context.aliases[c]);
                    this.source[1] && (this.source[1] = "var " + this.source[1].substring(2) + ";"), this.isChild || (this.source[1] += "\n" + this.context.programs.join("\n") + "\n"), this.environment.isSimple || this.pushSource("return buffer;");
                    for (var d = this.isChild ? ["depth0", "data"] : ["Handlebars", "depth0", "helpers", "partials", "data"], e = 0, f = this.environment.depths.list.length; f > e; e++) d.push("depth" + this.environment.depths.list[e]);
                    var g = this.mergeSource();
                    if (this.isChild || (g = this.compilerInfo() + g), a) return d.push(g), Function.apply(this, d);
                    var i = "function " + (this.name || "") + "(" + d.join(",") + ") {\n  " + g + "}";
                    return h("debug", i + "\n\n"), i
                },
                mergeSource: function() {
                    for (var a, b = "", c = 0, d = this.source.length; d > c; c++) {
                        var e = this.source[c];
                        e.appendToBuffer ? a = a ? a + "\n    + " + e.content : e.content : (a && (b += "buffer += " + a + ";\n  ", a = void 0), b += e + "\n  ")
                    }
                    return b
                },
                blockValue: function() {
                    this.context.aliases.blockHelperMissing = "helpers.blockHelperMissing";
                    var a = ["depth0"];
                    this.setupParams(0, a), this.replaceStack(function(b) {
                        return a.splice(1, 0, b), "blockHelperMissing.call(" + a.join(", ") + ")"
                    })
                },
                ambiguousBlockValue: function() {
                    this.context.aliases.blockHelperMissing = "helpers.blockHelperMissing";
                    var a = ["depth0"];
                    this.setupParams(0, a);
                    var b = this.topStack();
                    a.splice(1, 0, b), this.pushSource("if (!" + this.lastHelper + ") { " + b + " = blockHelperMissing.call(" + a.join(", ") + "); }")
                },
                appendContent: function(a) {
                    this.pendingContent && (a = this.pendingContent + a), this.stripNext && (a = a.replace(/^\s+/, "")), this.pendingContent = a
                },
                strip: function() {
                    this.pendingContent && (this.pendingContent = this.pendingContent.replace(/\s+$/, "")), this.stripNext = "strip"
                },
                append: function() {
                    this.flushInline();
                    var a = this.popStack();
                    this.pushSource("if(" + a + " || " + a + " === 0) { " + this.appendToBuffer(a) + " }"), this.environment.isSimple && this.pushSource("else { " + this.appendToBuffer("''") + " }")
                },
                appendEscaped: function() {
                    this.context.aliases.escapeExpression = "this.escapeExpression", this.pushSource(this.appendToBuffer("escapeExpression(" + this.popStack() + ")"))
                },
                getContext: function(a) {
                    this.lastContext !== a && (this.lastContext = a)
                },
                lookupOnContext: function(a) {
                    this.push(this.nameLookup("depth" + this.lastContext, a, "context"))
                },
                pushContext: function() {
                    this.pushStackLiteral("depth" + this.lastContext)
                },
                resolvePossibleLambda: function() {
                    this.context.aliases.functionType = '"function"', this.replaceStack(function(a) {
                        return "typeof " + a + " === functionType ? " + a + ".apply(depth0) : " + a
                    })
                },
                lookup: function(a) {
                    this.replaceStack(function(b) {
                        return b + " == null || " + b + " === false ? " + b + " : " + this.nameLookup(b, a, "context")
                    })
                },
                lookupData: function() {
                    this.pushStackLiteral("data")
                },
                pushStringParam: function(a, b) {
                    this.pushStackLiteral("depth" + this.lastContext), this.pushString(b), "sexpr" !== b && ("string" == typeof a ? this.pushString(a) : this.pushStackLiteral(a))
                },
                emptyHash: function() {
                    this.pushStackLiteral("{}"), this.options.stringParams && (this.push("{}"), this.push("{}"))
                },
                pushHash: function() {
                    this.hash && this.hashes.push(this.hash), this.hash = {
                        values: [],
                        types: [],
                        contexts: []
                    }
                },
                popHash: function() {
                    var a = this.hash;
                    this.hash = this.hashes.pop(), this.options.stringParams && (this.push("{" + a.contexts.join(",") + "}"), this.push("{" + a.types.join(",") + "}")), this.push("{\n    " + a.values.join(",\n    ") + "\n  }")
                },
                pushString: function(a) {
                    this.pushStackLiteral(this.quotedString(a))
                },
                push: function(a) {
                    return this.inlineStack.push(a), a
                },
                pushLiteral: function(a) {
                    this.pushStackLiteral(a)
                },
                pushProgram: function(a) {
                    this.pushStackLiteral(null != a ? this.programExpression(a) : null)
                },
                invokeHelper: function(a, b, c) {
                    this.context.aliases.helperMissing = "helpers.helperMissing", this.useRegister("helper");
                    var d = this.lastHelper = this.setupHelper(a, b, !0),
                        e = this.nameLookup("depth" + this.lastContext, b, "context"),
                        f = "helper = " + d.name + " || " + e;
                    d.paramsInit && (f += "," + d.paramsInit), this.push("(" + f + ",helper ? helper.call(" + d.callParams + ") : helperMissing.call(" + d.helperMissingParams + "))"), c || this.flushInline()
                },
                invokeKnownHelper: function(a, b) {
                    var c = this.setupHelper(a, b);
                    this.push(c.name + ".call(" + c.callParams + ")")
                },
                invokeAmbiguous: function(a, b) {
                    this.context.aliases.functionType = '"function"', this.useRegister("helper"), this.emptyHash();
                    var c = this.setupHelper(0, a, b),
                        d = this.lastHelper = this.nameLookup("helpers", a, "helper"),
                        e = this.nameLookup("depth" + this.lastContext, a, "context"),
                        f = this.nextStack();
                    c.paramsInit && this.pushSource(c.paramsInit), this.pushSource("if (helper = " + d + ") { " + f + " = helper.call(" + c.callParams + "); }"), this.pushSource("else { helper = " + e + "; " + f + " = typeof helper === functionType ? helper.call(" + c.callParams + ") : helper; }")
                },
                invokePartial: function(a) {
                    var b = [this.nameLookup("partials", a, "partial"), "'" + a + "'", this.popStack(), "helpers", "partials"];
                    this.options.data && b.push("data"), this.context.aliases.self = "this", this.push("self.invokePartial(" + b.join(", ") + ")")
                },
                assignToHash: function(a) {
                    var b, c, d = this.popStack();
                    this.options.stringParams && (c = this.popStack(), b = this.popStack());
                    var e = this.hash;
                    b && e.contexts.push("'" + a + "': " + b), c && e.types.push("'" + a + "': " + c), e.values.push("'" + a + "': (" + d + ")")
                },
                compiler: d,
                compileChildren: function(a, b) {
                    for (var c, d, e = a.children, f = 0, g = e.length; g > f; f++) {
                        c = e[f], d = new this.compiler;
                        var h = this.matchExistingProgram(c);
                        null == h ? (this.context.programs.push(""), h = this.context.programs.length, c.index = h, c.name = "program" + h, this.context.programs[h] = d.compile(c, b, this.context), this.context.environments[h] = c) : (c.index = h, c.name = "program" + h)
                    }
                },
                matchExistingProgram: function(a) {
                    for (var b = 0, c = this.context.environments.length; c > b; b++) {
                        var d = this.context.environments[b];
                        if (d && d.equals(a)) return b
                    }
                },
                programExpression: function(a) {
                    if (this.context.aliases.self = "this", null == a) return "self.noop";
                    for (var b, c = this.environment.children[a], d = c.depths.list, e = [c.index, c.name, "data"], f = 0, g = d.length; g > f; f++) b = d[f], e.push(1 === b ? "depth0" : "depth" + (b - 1));
                    return (0 === d.length ? "self.program(" : "self.programWithDepth(") + e.join(", ") + ")"
                },
                register: function(a, b) {
                    this.useRegister(a), this.pushSource(a + " = " + b + ";")
                },
                useRegister: function(a) {
                    this.registers[a] || (this.registers[a] = !0, this.registers.list.push(a))
                },
                pushStackLiteral: function(a) {
                    return this.push(new c(a))
                },
                pushSource: function(a) {
                    this.pendingContent && (this.source.push(this.appendToBuffer(this.quotedString(this.pendingContent))), this.pendingContent = void 0), a && this.source.push(a)
                },
                pushStack: function(a) {
                    this.flushInline();
                    var b = this.incrStack();
                    return a && this.pushSource(b + " = " + a + ";"), this.compileStack.push(b), b
                },
                replaceStack: function(a) {
                    var b, d, e, f = "",
                        g = this.isInline();
                    if (g) {
                        var h = this.popStack(!0);
                        if (h instanceof c) b = h.value, e = !0;
                        else {
                            d = !this.stackSlot;
                            var i = d ? this.incrStack() : this.topStackName();
                            f = "(" + this.push(i) + " = " + h + "),", b = this.topStack()
                        }
                    } else b = this.topStack();
                    var j = a.call(this, b);
                    return g ? (e || this.popStack(), d && this.stackSlot--, this.push("(" + f + j + ")")) : (/^stack/.test(b) || (b = this.nextStack()), this.pushSource(b + " = (" + f + j + ");")), b
                },
                nextStack: function() {
                    return this.pushStack()
                },
                incrStack: function() {
                    return this.stackSlot++, this.stackSlot > this.stackVars.length && this.stackVars.push("stack" + this.stackSlot), this.topStackName()
                },
                topStackName: function() {
                    return "stack" + this.stackSlot
                },
                flushInline: function() {
                    var a = this.inlineStack;
                    if (a.length) {
                        this.inlineStack = [];
                        for (var b = 0, d = a.length; d > b; b++) {
                            var e = a[b];
                            e instanceof c ? this.compileStack.push(e) : this.pushStack(e)
                        }
                    }
                },
                isInline: function() {
                    return this.inlineStack.length
                },
                popStack: function(a) {
                    var b = this.isInline(),
                        d = (b ? this.inlineStack : this.compileStack).pop();
                    if (!a && d instanceof c) return d.value;
                    if (!b) {
                        if (!this.stackSlot) throw new i("Invalid stack pop");
                        this.stackSlot--
                    }
                    return d
                },
                topStack: function(a) {
                    var b = this.isInline() ? this.inlineStack : this.compileStack,
                        d = b[b.length - 1];
                    return !a && d instanceof c ? d.value : d
                },
                quotedString: function(a) {
                    return '"' + a.replace(/\\/g, "\\\\").replace(/"/g, '\\"').replace(/\n/g, "\\n").replace(/\r/g, "\\r").replace(/\u2028/g, "\\u2028").replace(/\u2029/g, "\\u2029") + '"'
                },
                setupHelper: function(a, b, c) {
                    var d = [],
                        e = this.setupParams(a, d, c),
                        f = this.nameLookup("helpers", b, "helper");
                    return {
                        params: d,
                        paramsInit: e,
                        name: f,
                        callParams: ["depth0"].concat(d).join(", "),
                        helperMissingParams: c && ["depth0", this.quotedString(b)].concat(d).join(", ")
                    }
                },
                setupOptions: function(a, b) {
                    var c, d, e, f = [],
                        g = [],
                        h = [];
                    f.push("hash:" + this.popStack()), this.options.stringParams && (f.push("hashTypes:" + this.popStack()), f.push("hashContexts:" + this.popStack())), d = this.popStack(), e = this.popStack(), (e || d) && (e || (this.context.aliases.self = "this", e = "self.noop"), d || (this.context.aliases.self = "this", d = "self.noop"), f.push("inverse:" + d), f.push("fn:" + e));
                    for (var i = 0; a > i; i++) c = this.popStack(), b.push(c), this.options.stringParams && (h.push(this.popStack()), g.push(this.popStack()));
                    return this.options.stringParams && (f.push("contexts:[" + g.join(",") + "]"), f.push("types:[" + h.join(",") + "]")), this.options.data && f.push("data:data"), f
                },
                setupParams: function(a, b, c) {
                    var d = "{" + this.setupOptions(a, b).join(",") + "}";
                    return c ? (this.useRegister("options"), b.push("options"), "options=" + d) : (b.push(d), "")
                }
            };
            for (var j = "break else new var case finally return void catch for switch while continue function this with default if throw delete in try do instanceof typeof abstract enum int short boolean export interface static byte extends long super char final native synchronized class float package throws const goto private transient debugger implements protected volatile double import public let yield".split(" "), k = d.RESERVED_WORDS = {}, l = 0, m = j.length; m > l; l++) k[j[l]] = !0;
            return d.isValidJavaScriptVariableName = function(a) {
                return !d.RESERVED_WORDS[a] && /^[a-zA-Z_$][0-9a-zA-Z_$]*$/.test(a) ? !0 : !1
            }, e = d
        }(d, c),
        l = function(a, b, c, d, e) {
            "use strict";
            var f, g = a,
                h = b,
                i = c.parser,
                j = c.parse,
                k = d.Compiler,
                l = d.compile,
                m = d.precompile,
                n = e,
                o = g.create,
                p = function() {
                    var a = o();
                    return a.compile = function(b, c) {
                        return l(b, c, a)
                    }, a.precompile = function(b, c) {
                        return m(b, c, a)
                    }, a.AST = h, a.Compiler = k, a.JavaScriptCompiler = n, a.Parser = i, a.parse = j, a
                };
            return g = p(), g.create = p, f = g
        }(f, g, i, j, k);
    return l
}();
FastClick.prototype.deviceIsAndroid = navigator.userAgent.indexOf("Android") > 0, FastClick.prototype.deviceIsIOS = /iP(ad|hone|od)/.test(navigator.userAgent), FastClick.prototype.deviceIsIOS4 = FastClick.prototype.deviceIsIOS && /OS 4_\d(_\d)?/.test(navigator.userAgent), FastClick.prototype.deviceIsIOSWithBadTarget = FastClick.prototype.deviceIsIOS && /OS ([6-9]|\d{2})_\d/.test(navigator.userAgent), FastClick.prototype.needsClick = function(a) {
        "use strict";
        switch (a.nodeName.toLowerCase()) {
            case "button":
            case "select":
            case "textarea":
                if (a.disabled) return !0;
                break;
            case "input":
                if (this.deviceIsIOS && "file" === a.type || a.disabled) return !0;
                break;
            case "label":
            case "video":
                return !0
        }
        return /\bneedsclick\b/.test(a.className)
    }, FastClick.prototype.needsFocus = function(a) {
        "use strict";
        switch (a.nodeName.toLowerCase()) {
            case "textarea":
                return !0;
            case "select":
                return !this.deviceIsAndroid;
            case "input":
                switch (a.type) {
                    case "button":
                    case "checkbox":
                    case "file":
                    case "image":
                    case "radio":
                    case "submit":
                        return !1
                }
                return !a.disabled && !a.readOnly;
            default:
                return /\bneedsfocus\b/.test(a.className)
        }
    }, FastClick.prototype.sendClick = function(a, b) {
        "use strict";
        var c, d;
        document.activeElement && document.activeElement !== a && document.activeElement.blur(), d = b.changedTouches[0], c = document.createEvent("MouseEvents"), c.initMouseEvent(this.determineEventType(a), !0, !0, window, 1, d.screenX, d.screenY, d.clientX, d.clientY, !1, !1, !1, !1, 0, null), c.forwardedTouchEvent = !0, a.dispatchEvent(c)
    }, FastClick.prototype.determineEventType = function(a) {
        "use strict";
        return this.deviceIsAndroid && "select" === a.tagName.toLowerCase() ? "mousedown" : "click"
    }, FastClick.prototype.focus = function(a) {
        "use strict";
        var b;
        this.deviceIsIOS && a.setSelectionRange && 0 !== a.type.indexOf("date") && "time" !== a.type ? (b = a.value.length, a.setSelectionRange(b, b)) : a.focus()
    }, FastClick.prototype.updateScrollParent = function(a) {
        "use strict";
        var b, c;
        if (b = a.fastClickScrollParent, !b || !b.contains(a)) {
            c = a;
            do {
                if (c.scrollHeight > c.offsetHeight) {
                    b = c, a.fastClickScrollParent = c;
                    break
                }
                c = c.parentElement
            } while (c)
        }
        b && (b.fastClickLastScrollTop = b.scrollTop)
    }, FastClick.prototype.getTargetElementFromEventTarget = function(a) {
        "use strict";
        return a.nodeType === Node.TEXT_NODE ? a.parentNode : a
    }, FastClick.prototype.onTouchStart = function(a) {
        "use strict";
        var b, c, d;
        if (a.targetTouches.length > 1) return !0;
        if (b = this.getTargetElementFromEventTarget(a.target), c = a.targetTouches[0], this.deviceIsIOS) {
            if (d = window.getSelection(), d.rangeCount && !d.isCollapsed) return !0;
            if (!this.deviceIsIOS4) {
                if (c.identifier === this.lastTouchIdentifier) return a.preventDefault(), !1;
                this.lastTouchIdentifier = c.identifier, this.updateScrollParent(b)
            }
        }
        return this.trackingClick = !0, this.trackingClickStart = a.timeStamp, this.targetElement = b, this.touchStartX = c.pageX, this.touchStartY = c.pageY, a.timeStamp - this.lastClickTime < 200 && a.preventDefault(), !0
    }, FastClick.prototype.touchHasMoved = function(a) {
        "use strict";
        var b = a.changedTouches[0],
            c = this.touchBoundary;
        return Math.abs(b.pageX - this.touchStartX) > c || Math.abs(b.pageY - this.touchStartY) > c ? !0 : !1
    }, FastClick.prototype.onTouchMove = function(a) {
        "use strict";
        return this.trackingClick ? ((this.targetElement !== this.getTargetElementFromEventTarget(a.target) || this.touchHasMoved(a)) && (this.trackingClick = !1, this.targetElement = null), !0) : !0
    }, FastClick.prototype.findControl = function(a) {
        "use strict";
        return void 0 !== a.control ? a.control : a.htmlFor ? document.getElementById(a.htmlFor) : a.querySelector("button, input:not([type=hidden]), keygen, meter, output, progress, select, textarea")
    }, FastClick.prototype.onTouchEnd = function(a) {
        "use strict";
        var b, c, d, e, f, g = this.targetElement;
        if (!this.trackingClick) return !0;
        if (a.timeStamp - this.lastClickTime < 200) return this.cancelNextClick = !0, !0;
        if (this.cancelNextClick = !1, this.lastClickTime = a.timeStamp, c = this.trackingClickStart, this.trackingClick = !1, this.trackingClickStart = 0, this.deviceIsIOSWithBadTarget && (f = a.changedTouches[0], g = document.elementFromPoint(f.pageX - window.pageXOffset, f.pageY - window.pageYOffset) || g, g.fastClickScrollParent = this.targetElement.fastClickScrollParent), d = g.tagName.toLowerCase(), "label" === d) {
            if (b = this.findControl(g)) {
                if (this.focus(g), this.deviceIsAndroid) return !1;
                g = b
            }
        } else if (this.needsFocus(g)) return a.timeStamp - c > 100 || this.deviceIsIOS && window.top !== window && "input" === d ? (this.targetElement = null, !1) : (this.focus(g), this.deviceIsIOS4 && "select" === d || (this.targetElement = null, a.preventDefault()), !1);
        return this.deviceIsIOS && !this.deviceIsIOS4 && (e = g.fastClickScrollParent, e && e.fastClickLastScrollTop !== e.scrollTop) ? !0 : (this.needsClick(g) || (a.preventDefault(), this.sendClick(g, a)), !1)
    }, FastClick.prototype.onTouchCancel = function() {
        "use strict";
        this.trackingClick = !1, this.targetElement = null
    }, FastClick.prototype.onMouse = function(a) {
        "use strict";
        return this.targetElement ? a.forwardedTouchEvent ? !0 : a.cancelable ? !this.needsClick(this.targetElement) || this.cancelNextClick ? (a.stopImmediatePropagation ? a.stopImmediatePropagation() : a.propagationStopped = !0, a.stopPropagation(), a.preventDefault(), !1) : !0 : !0 : !0
    }, FastClick.prototype.onClick = function(a) {
        "use strict";
        var b;
        return this.trackingClick ? (this.targetElement = null, this.trackingClick = !1, !0) : "submit" === a.target.type && 0 === a.detail ? !0 : (b = this.onMouse(a), b || (this.targetElement = null), b)
    }, FastClick.prototype.destroy = function() {
        "use strict";
        var a = this.layer;
        this.deviceIsAndroid && (a.removeEventListener("mouseover", this.onMouse, !0), a.removeEventListener("mousedown", this.onMouse, !0), a.removeEventListener("mouseup", this.onMouse, !0)), a.removeEventListener("click", this.onClick, !0), a.removeEventListener("touchstart", this.onTouchStart, !1), a.removeEventListener("touchmove", this.onTouchMove, !1), a.removeEventListener("touchend", this.onTouchEnd, !1), a.removeEventListener("touchcancel", this.onTouchCancel, !1)
    }, FastClick.notNeeded = function(a) {
        "use strict";
        var b, c;
        if ("undefined" == typeof window.ontouchstart) return !0;
        if (c = +(/Chrome\/([0-9]+)/.exec(navigator.userAgent) || [, 0])[1]) {
            if (!FastClick.prototype.deviceIsAndroid) return !0;
            if (b = document.querySelector("meta[name=viewport]")) {
                if (-1 !== b.content.indexOf("user-scalable=no")) return !0;
                if (c > 31 && window.innerWidth <= window.screen.width) return !0
            }
        }
        return "none" === a.style.msTouchAction ? !0 : !1
    }, FastClick.attach = function(a) {
        "use strict";
        return new FastClick(a)
    }, "undefined" != typeof define && define.amd ? define(function() {
        "use strict";
        return FastClick
    }) : "undefined" != typeof module && module.exports ? (module.exports = FastClick.attach, module.exports.FastClick = FastClick) : window.FastClick = FastClick, ! function(a) {
        "use strict";

        function b(b) {
            return this.each(function() {
                var c = a(this),
                    d = c.data("plugin.backgroundBlur"),
                    e = a.extend({}, f.DEFAULTS, c.data(), "object" == typeof b && b);
                d || c.data("plugin.backgroundBlur", d = new f(this, e)), "fadeIn" === b ? d.fadeIn() : "fadeOut" === b ? d.fadeOut() : "string" == typeof b && d.generateBlurredImage(b)
            })
        }
        var c = function() {
                for (var a, b = 3, c = document.createElement("div"), d = c.getElementsByTagName("i"); c.innerHTML = "<!--[if gt IE " + ++b + "]><i></i><![endif]-->", d[0];);
                return b > 4 ? b : a
            }(),
            d = function() {
                return "_" + Math.random().toString(36).substr(2, 9)
            },
            e = {
                svgns: "http://www.w3.org/2000/svg",
                xlink: "http://www.w3.org/1999/xlink",
                createElement: function(a, b) {
                    var c = document.createElementNS(e.svgns, a);
                    return b && e.setAttr(c, b), c
                },
                setAttr: function(a, b) {
                    for (var c in b) "href" === c ? a.setAttributeNS(e.xlink, c, b[c]) : a.setAttribute(c, b[c]);
                    return a
                }
            },
            f = function(b, c) {
                this.internalID = d(), this.$element = a(b), this.$width = this.$element.width(), this.$height = this.$element.height(), this.element = b, this.options = a.extend({}, f.DEFAULTS, c), this.$overlayEl = this.createOverlay(), this.$blurredImage = {}, this.useVelocity = this.detectVelocity(), this.attachListeners(), this.generateBlurredImage(this.options.imageURL)
            };
        f.VERSION = "0.1.1", f.DEFAULTS = {
            imageURL: "",
            blurAmount: 10,
            imageClass: "",
            overlayClass: "",
            duration: !1,
            opacity: 1
        }, f.prototype.detectVelocity = function() {
            return !!window.jQuery.Velocity
        }, f.prototype.attachListeners = function() {
            this.$element.on("ui.blur.loaded", a.proxy(this.fadeIn, this)), this.$element.on("ui.blur.unload", a.proxy(this.fadeOut, this))
        }, f.prototype.fadeIn = function() {
            this.options.duration && this.options.duration > 0 && (this.useVelocity ? this.$blurredImage.velocity({
                opacity: this.options.opacity
            }, {
                duration: this.options.duration
            }) : this.$blurredImage.animate({
                opacity: this.options.opacity
            }, {
                duration: this.options.duration
            }))
        }, f.prototype.fadeOut = function() {
            this.options.duration && this.options.duration > 0 ? this.useVelocity ? this.$blurredImage.velocity({
                opacity: 0
            }, {
                duration: this.options.duration
            }) : this.$blurredImage.animate({
                opacity: 0
            }, {
                duration: this.options.duration
            }) : this.$blurredImage.css({
                opacity: 0
            })
        }, f.prototype.generateBlurredImage = function(a) {
            var b = this.$blurredImage;
            this.internalID = d(), b.length > 0 && (this.options.duration && this.options.duration > 0 ? this.useVelocity ? b.first().velocity({
                opacity: 0
            }, {
                duration: this.options.duration,
                complete: function() {
                    b.remove()
                }
            }) : b.first().animate({
                opacity: 0
            }, {
                duration: this.options.duration,
                complete: function() {
                    b.remove()
                }
            }) : b.remove()), this.$blurredImage = c ? this.createIMG(a, this.$width, this.$height) : this.createSVG(a, this.$width, this.$height)
        }, f.prototype.createOverlay = function() {
            return this.options.overlayClass && "" !== this.options.overlayClass ? a("<div></div>").prependTo(this.$element).addClass(this.options.overlayClass) : !1
        }, f.prototype.createSVG = function(b, c, d) {
            var f = this,
                g = e.createElement("svg", {
                    xmlns: e.svgns,
                    version: "1.1",
                    width: c,
                    height: d,
                    id: "blurred" + this.internalID,
                    "class": this.options.imageClass,
                    viewBox: "0 0 " + c + " " + d,
                    preserveAspectRatio: "none"
                }),
                h = "blur" + this.internalID,
                i = e.createElement("filter", {
                    id: h
                }),
                j = e.createElement("feGaussianBlur", {
                    "in": "SourceGraphic",
                    stdDeviation: this.options.blurAmount
                }),
                k = e.createElement("image", {
                    x: 0,
                    y: 0,
                    width: c,
                    height: d,
                    externalResourcesRequired: "true",
                    href: b,
                    style: "filter:url(#" + h + ")",
                    preserveAspectRatio: "none"
                });
            k.addEventListener("load", function() {
                f.$element.trigger("ui.blur.loaded")
            }, !0), k.addEventListener("SVGLoad", function() {
                f.$element.trigger("ui.blur.loaded")
            }, !0), i.appendChild(j), g.appendChild(i), g.appendChild(k);
            var l = a(g);
            return f.options.duration && f.options.duration > 0 && (l.css({
                opacity: 0
            }), window.setTimeout(function() {
                "0" === l.css("opacity") && l.css({
                    opacity: 1
                })
            }, this.options.duration + 100)), this.element.insertBefore(g, this.element.firstChild), l
        }, f.prototype.createIMG = function(a, b, c) {
            var d = this,
                e = this.prependImage(a),
                f = 2 * this.options.blurAmount > 100 ? 100 : 2 * this.options.blurAmount;
            return e.css({
                filter: "progid:DXImageTransform.Microsoft.Blur(pixelradius=" + f + ") ",
                top: 2.5 * -this.options.blurAmount,
                left: 2.5 * -this.options.blurAmount,
                width: b + 2.5 * this.options.blurAmount,
                height: c + 2.5 * this.options.blurAmount
            }).attr("id", "blurred" + this.internalID), e.load(function() {
                d.$element.trigger("ui.blur.loaded")
            }), this.options.duration && this.options.duration > 0 && window.setTimeout(function() {
                "0" === e.css("opacity") && e.css({
                    opacity: 1
                })
            }, this.options.duration + 100), e
        }, f.prototype.prependImage = function(b) {
            var c, d = a('<img src="' + b + '" />');
            return c = this.$overlayEl ? d.insertBefore(this.$overlayEl).attr("id", this.internalID).addClass(this.options.imageClass) : d.prependTo(this.$element).attr("id", this.internalID).addClass(this.options.imageClass)
        };
        var g = a.fn.backgroundBlur;
        a.fn.backgroundBlur = b, a.fn.backgroundBlur.Constructor = f, a.fn.backgroundBlur.noConflict = function() {
            return a.fn.backgroundBlur = g, this
        }
    }(jQuery), ! function(a) {
        if ("object" == typeof exports && "undefined" != typeof module) module.exports = a();
        else if ("function" == typeof define && define.amd) define([], a);
        else {
            var b;
            b = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : this, b.Clipboard = a()
        }
    }(function() {
        var a;
        return function b(a, c, d) {
            function e(g, h) {
                if (!c[g]) {
                    if (!a[g]) {
                        var i = "function" == typeof require && require;
                        if (!h && i) return i(g, !0);
                        if (f) return f(g, !0);
                        var j = new Error("Cannot find module '" + g + "'");
                        throw j.code = "MODULE_NOT_FOUND", j
                    }
                    var k = c[g] = {
                        exports: {}
                    };
                    a[g][0].call(k.exports, function(b) {
                        var c = a[g][1][b];
                        return e(c ? c : b)
                    }, k, k.exports, b, a, c, d)
                }
                return c[g].exports
            }
            for (var f = "function" == typeof require && require, g = 0; g < d.length; g++) e(d[g]);
            return e
        }({
            1: [function(a, b) {
                var c = a("matches-selector");
                b.exports = function(a, b, d) {
                    for (var e = d ? a : a.parentNode; e && e !== document;) {
                        if (c(e, b)) return e;
                        e = e.parentNode
                    }
                }
            }, {
                "matches-selector": 5
            }],
            2: [function(a, b) {
                function c(a, b, c, e, f) {
                    var g = d.apply(this, arguments);
                    return a.addEventListener(c, g, f), {
                        destroy: function() {
                            a.removeEventListener(c, g, f)
                        }
                    }
                }

                function d(a, b, c, d) {
                    return function(c) {
                        c.delegateTarget = e(c.target, b, !0), c.delegateTarget && d.call(a, c)
                    }
                }
                var e = a("closest");
                b.exports = c
            }, {
                closest: 1
            }],
            3: [function(a, b, c) {
                c.node = function(a) {
                    return void 0 !== a && a instanceof HTMLElement && 1 === a.nodeType
                }, c.nodeList = function(a) {
                    var b = Object.prototype.toString.call(a);
                    return void 0 !== a && ("[object NodeList]" === b || "[object HTMLCollection]" === b) && "length" in a && (0 === a.length || c.node(a[0]))
                }, c.string = function(a) {
                    return "string" == typeof a || a instanceof String
                }, c.fn = function(a) {
                    var b = Object.prototype.toString.call(a);
                    return "[object Function]" === b
                }
            }, {}],
            4: [function(a, b) {
                function c(a, b, c) {
                    if (!a && !b && !c) throw new Error("Missing required arguments");
                    if (!g.string(b)) throw new TypeError("Second argument must be a String");
                    if (!g.fn(c)) throw new TypeError("Third argument must be a Function");
                    if (g.node(a)) return d(a, b, c);
                    if (g.nodeList(a)) return e(a, b, c);
                    if (g.string(a)) return f(a, b, c);
                    throw new TypeError("First argument must be a String, HTMLElement, HTMLCollection, or NodeList")
                }

                function d(a, b, c) {
                    return a.addEventListener(b, c), {
                        destroy: function() {
                            a.removeEventListener(b, c)
                        }
                    }
                }

                function e(a, b, c) {
                    return Array.prototype.forEach.call(a, function(a) {
                        a.addEventListener(b, c)
                    }), {
                        destroy: function() {
                            Array.prototype.forEach.call(a, function(a) {
                                a.removeEventListener(b, c)
                            })
                        }
                    }
                }

                function f(a, b, c) {
                    return h(document.body, a, b, c)
                }
                var g = a("./is"),
                    h = a("delegate");
                b.exports = c
            }, {
                "./is": 3,
                delegate: 2
            }],
            5: [function(a, b) {
                function c(a, b) {
                    if (e) return e.call(a, b);
                    for (var c = a.parentNode.querySelectorAll(b), d = 0; d < c.length; ++d)
                        if (c[d] == a) return !0;
                    return !1
                }
                var d = Element.prototype,
                    e = d.matchesSelector || d.webkitMatchesSelector || d.mozMatchesSelector || d.msMatchesSelector || d.oMatchesSelector;
                b.exports = c
            }, {}],
            6: [function(a, b) {
                function c(a) {
                    var b;
                    if ("INPUT" === a.nodeName || "TEXTAREA" === a.nodeName) a.focus(), a.setSelectionRange(0, a.value.length), b = a.value;
                    else {
                        a.hasAttribute("contenteditable") && a.focus();
                        var c = window.getSelection(),
                            d = document.createRange();
                        d.selectNodeContents(a), c.removeAllRanges(), c.addRange(d), b = c.toString()
                    }
                    return b
                }
                b.exports = c
            }, {}],
            7: [function(a, b) {
                function c() {}
                c.prototype = {
                    on: function(a, b, c) {
                        var d = this.e || (this.e = {});
                        return (d[a] || (d[a] = [])).push({
                            fn: b,
                            ctx: c
                        }), this
                    },
                    once: function(a, b, c) {
                        function d() {
                            e.off(a, d), b.apply(c, arguments)
                        }
                        var e = this;
                        return d._ = b, this.on(a, d, c)
                    },
                    emit: function(a) {
                        var b = [].slice.call(arguments, 1),
                            c = ((this.e || (this.e = {}))[a] || []).slice(),
                            d = 0,
                            e = c.length;
                        for (d; e > d; d++) c[d].fn.apply(c[d].ctx, b);
                        return this
                    },
                    off: function(a, b) {
                        var c = this.e || (this.e = {}),
                            d = c[a],
                            e = [];
                        if (d && b)
                            for (var f = 0, g = d.length; g > f; f++) d[f].fn !== b && d[f].fn._ !== b && e.push(d[f]);
                        return e.length ? c[a] = e : delete c[a], this
                    }
                }, b.exports = c
            }, {}],
            8: [function(b, c, d) {
                ! function(e, f) {
                    if ("function" == typeof a && a.amd) a(["module", "select"], f);
                    else if ("undefined" != typeof d) f(c, b("select"));
                    else {
                        var g = {
                            exports: {}
                        };
                        f(g, e.select), e.clipboardAction = g.exports
                    }
                }(this, function(a, b) {
                    "use strict";

                    function c(a) {
                        return a && a.__esModule ? a : {
                            "default": a
                        }
                    }

                    function d(a, b) {
                        if (!(a instanceof b)) throw new TypeError("Cannot call a class as a function")
                    }
                    var e = c(b),
                        f = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(a) {
                            return typeof a
                        } : function(a) {
                            return a && "function" == typeof Symbol && a.constructor === Symbol ? "symbol" : typeof a
                        },
                        g = function() {
                            function a(a, b) {
                                for (var c = 0; c < b.length; c++) {
                                    var d = b[c];
                                    d.enumerable = d.enumerable || !1, d.configurable = !0, "value" in d && (d.writable = !0), Object.defineProperty(a, d.key, d)
                                }
                            }
                            return function(b, c, d) {
                                return c && a(b.prototype, c), d && a(b, d), b
                            }
                        }(),
                        h = function() {
                            function a(b) {
                                d(this, a), this.resolveOptions(b), this.initSelection()
                            }
                            return a.prototype.resolveOptions = function() {
                                var a = arguments.length <= 0 || void 0 === arguments[0] ? {} : arguments[0];
                                this.action = a.action, this.emitter = a.emitter, this.target = a.target, this.text = a.text, this.trigger = a.trigger, this.selectedText = ""
                            }, a.prototype.initSelection = function() {
                                this.text ? this.selectFake() : this.target && this.selectTarget()
                            }, a.prototype.selectFake = function() {
                                var a = this,
                                    b = "rtl" == document.documentElement.getAttribute("dir");
                                this.removeFake(), this.fakeHandlerCallback = function() {
                                    return a.removeFake()
                                }, this.fakeHandler = document.body.addEventListener("click", this.fakeHandlerCallback) || !0, this.fakeElem = document.createElement("textarea"), this.fakeElem.style.fontSize = "12pt", this.fakeElem.style.border = "0", this.fakeElem.style.padding = "0", this.fakeElem.style.margin = "0", this.fakeElem.style.position = "absolute", this.fakeElem.style[b ? "right" : "left"] = "-9999px", this.fakeElem.style.top = (window.pageYOffset || document.documentElement.scrollTop) + "px", this.fakeElem.setAttribute("readonly", ""), this.fakeElem.value = this.text, document.body.appendChild(this.fakeElem), this.selectedText = e.default(this.fakeElem), this.copyText()
                            }, a.prototype.removeFake = function() {
                                this.fakeHandler && (document.body.removeEventListener("click", this.fakeHandlerCallback), this.fakeHandler = null, this.fakeHandlerCallback = null), this.fakeElem && (document.body.removeChild(this.fakeElem), this.fakeElem = null)
                            }, a.prototype.selectTarget = function() {
                                this.selectedText = e.default(this.target), this.copyText()
                            }, a.prototype.copyText = function() {
                                var a = void 0;
                                try {
                                    a = document.execCommand(this.action)
                                } catch (b) {
                                    a = !1
                                }
                                this.handleResult(a)
                            }, a.prototype.handleResult = function(a) {
                                a ? this.emitter.emit("success", {
                                    action: this.action,
                                    text: this.selectedText,
                                    trigger: this.trigger,
                                    clearSelection: this.clearSelection.bind(this)
                                }) : this.emitter.emit("error", {
                                    action: this.action,
                                    trigger: this.trigger,
                                    clearSelection: this.clearSelection.bind(this)
                                })
                            }, a.prototype.clearSelection = function() {
                                this.target && this.target.blur(), window.getSelection().removeAllRanges()
                            }, a.prototype.destroy = function() {
                                this.removeFake()
                            }, g(a, [{
                                key: "action",
                                set: function() {
                                    var a = arguments.length <= 0 || void 0 === arguments[0] ? "copy" : arguments[0];
                                    if (this._action = a, "copy" !== this._action && "cut" !== this._action) throw new Error('Invalid "action" value, use either "copy" or "cut"')
                                },
                                get: function() {
                                    return this._action
                                }
                            }, {
                                key: "target",
                                set: function(a) {
                                    if (void 0 !== a) {
                                        if (!a || "object" !== ("undefined" == typeof a ? "undefined" : f(a)) || 1 !== a.nodeType) throw new Error('Invalid "target" value, use a valid Element');
                                        if ("copy" === this.action && a.hasAttribute("disabled")) throw new Error('Invalid "target" attribute. Please use "readonly" instead of "disabled" attribute');
                                        if ("cut" === this.action && (a.hasAttribute("readonly") || a.hasAttribute("disabled"))) throw new Error('Invalid "target" attribute. You can\'t cut text from elements with "readonly" or "disabled" attributes');
                                        this._target = a
                                    }
                                },
                                get: function() {
                                    return this._target
                                }
                            }]), a
                        }();
                    a.exports = h
                })
            }, {
                select: 6
            }],
            9: [function(b, c, d) {
                ! function(e, f) {
                    if ("function" == typeof a && a.amd) a(["module", "./clipboard-action", "tiny-emitter", "good-listener"], f);
                    else if ("undefined" != typeof d) f(c, b("./clipboard-action"), b("tiny-emitter"), b("good-listener"));
                    else {
                        var g = {
                            exports: {}
                        };
                        f(g, e.clipboardAction, e.tinyEmitter, e.goodListener), e.clipboard = g.exports
                    }
                }(this, function(a, b, c, d) {
                    "use strict";

                    function e(a) {
                        return a && a.__esModule ? a : {
                            "default": a
                        }
                    }

                    function f(a, b) {
                        if (!(a instanceof b)) throw new TypeError("Cannot call a class as a function")
                    }

                    function g(a, b) {
                        if (!a) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                        return !b || "object" != typeof b && "function" != typeof b ? a : b
                    }

                    function h(a, b) {
                        if ("function" != typeof b && null !== b) throw new TypeError("Super expression must either be null or a function, not " + typeof b);
                        a.prototype = Object.create(b && b.prototype, {
                            constructor: {
                                value: a,
                                enumerable: !1,
                                writable: !0,
                                configurable: !0
                            }
                        }), b && (Object.setPrototypeOf ? Object.setPrototypeOf(a, b) : a.__proto__ = b)
                    }

                    function i(a, b) {
                        var c = "data-clipboard-" + a;
                        return b.hasAttribute(c) ? b.getAttribute(c) : void 0
                    }
                    var j = e(b),
                        k = e(c),
                        l = e(d),
                        m = function(a) {
                            function b(c, d) {
                                f(this, b);
                                var e = g(this, a.call(this));
                                return e.resolveOptions(d), e.listenClick(c), e
                            }
                            return h(b, a), b.prototype.resolveOptions = function() {
                                var a = arguments.length <= 0 || void 0 === arguments[0] ? {} : arguments[0];
                                this.action = "function" == typeof a.action ? a.action : this.defaultAction, this.target = "function" == typeof a.target ? a.target : this.defaultTarget, this.text = "function" == typeof a.text ? a.text : this.defaultText
                            }, b.prototype.listenClick = function(a) {
                                var b = this;
                                this.listener = l.default(a, "click", function(a) {
                                    return b.onClick(a)
                                })
                            }, b.prototype.onClick = function(a) {
                                var b = a.delegateTarget || a.currentTarget;
                                this.clipboardAction && (this.clipboardAction = null), this.clipboardAction = new j.default({
                                    action: this.action(b),
                                    target: this.target(b),
                                    text: this.text(b),
                                    trigger: b,
                                    emitter: this
                                })
                            }, b.prototype.defaultAction = function(a) {
                                return i("action", a)
                            }, b.prototype.defaultTarget = function(a) {
                                var b = i("target", a);
                                return b ? document.querySelector(b) : void 0
                            }, b.prototype.defaultText = function(a) {
                                return i("text", a)
                            }, b.prototype.destroy = function() {
                                this.listener.destroy(), this.clipboardAction && (this.clipboardAction.destroy(), this.clipboardAction = null)
                            }, b
                        }(k.default);
                    a.exports = m
                })
            }, {
                "./clipboard-action": 8,
                "good-listener": 4,
                "tiny-emitter": 7
            }]
        }, {}, [9])(9)
    }),
    function(a, b) {
        "use strict";
        var c, d = b.event;
        d.special.smartresize = {
            setup: function() {
                b(this).bind("resize", d.special.smartresize.handler)
            },
            teardown: function() {
                b(this).unbind("resize", d.special.smartresize.handler)
            },
            handler: function(a, b) {
                var e = this,
                    f = arguments;
                a.type = "smartresize", c && clearTimeout(c), c = setTimeout(function() {
                    d.dispatch.apply(e, f)
                }, "execAsap" === b ? 0 : 100)
            }
        }, b.fn.smartresize = function(a) {
            return a ? this.bind("smartresize", a) : this.trigger("smartresize", ["execAsap"])
        }, b.Mason = function(a, c) {
            this.element = b(c), this._create(a), this._init()
        }, b.Mason.settings = {
            isResizable: !0,
            isAnimated: !1,
            animationOptions: {
                queue: !1,
                duration: 500
            },
            gutterWidth: 0,
            isRTL: !1,
            isFitWidth: !1,
            containerStyle: {
                position: "relative"
            }
        }, b.Mason.prototype = {
            _filterFindBricks: function(a) {
                var b = this.options.itemSelector;
                return b ? a.filter(b).add(a.find(b)) : a
            },
            _getBricks: function(a) {
                var b = this._filterFindBricks(a).css({
                    position: "absolute"
                }).addClass("masonry-brick");
                return b
            },
            _create: function(c) {
                this.options = b.extend(!0, {}, b.Mason.settings, c), this.styleQueue = [];
                var d = this.element[0].style;
                this.originalStyle = {
                    height: d.height || ""
                };
                var e = this.options.containerStyle;
                for (var f in e) this.originalStyle[f] = d[f] || "";
                this.element.css(e), this.horizontalDirection = this.options.isRTL ? "right" : "left";
                var g = this.element.css("padding-" + this.horizontalDirection),
                    h = this.element.css("padding-top");
                this.offset = {
                    x: g ? parseInt(g, 10) : 0,
                    y: h ? parseInt(h, 10) : 0
                }, this.isFluid = this.options.columnWidth && "function" == typeof this.options.columnWidth;
                var i = this;
                setTimeout(function() {
                    i.element.addClass("masonry")
                }, 0), this.options.isResizable && b(a).bind("smartresize.masonry", function() {
                    i.resize()
                }), this.reloadItems()
            },
            _init: function(a) {
                this._getColumns(), this._reLayout(a)
            },
            option: function(a) {
                b.isPlainObject(a) && (this.options = b.extend(!0, this.options, a))
            },
            layout: function(a, b) {
                for (var c = 0, d = a.length; d > c; c++) this._placeBrick(a[c]);
                var e = {};
                if (e.height = Math.max.apply(Math, this.colYs), this.options.isFitWidth) {
                    var f = 0;
                    for (c = this.cols; --c && 0 === this.colYs[c];) f++;
                    e.width = (this.cols - f) * this.columnWidth - this.options.gutterWidth
                }
                this.styleQueue.push({
                    $el: this.element,
                    style: e
                });
                var g, h = this.isLaidOut ? this.options.isAnimated ? "animate" : "css" : "css",
                    i = this.options.animationOptions;
                for (c = 0, d = this.styleQueue.length; d > c; c++) g = this.styleQueue[c], g.$el[h](g.style, i);
                this.styleQueue = [], b && b.call(a), this.isLaidOut = !0
            },
            _getColumns: function() {
                var a = this.options.isFitWidth ? this.element.parent() : this.element,
                    b = a.width();
                this.columnWidth = this.isFluid ? this.options.columnWidth(b) : this.options.columnWidth || this.$bricks.outerWidth(!0) || b, this.columnWidth += this.options.gutterWidth, this.cols = Math.floor((b + this.options.gutterWidth) / this.columnWidth), this.cols = Math.max(this.cols, 1)
            },
            _placeBrick: function(a) {
                var c, d, e, f, g, h = b(a);
                if (c = Math.ceil(h.outerWidth(!0) / this.columnWidth), c = Math.min(c, this.cols), 1 === c) e = this.colYs;
                else
                    for (d = this.cols + 1 - c, e = [], g = 0; d > g; g++) f = this.colYs.slice(g, g + c), e[g] = Math.max.apply(Math, f);
                for (var i = Math.min.apply(Math, e), j = 0, k = 0, l = e.length; l > k; k++)
                    if (e[k] === i) {
                        j = k;
                        break
                    }
                var m = {
                    top: i + this.offset.y
                };
                m[this.horizontalDirection] = this.columnWidth * j + this.offset.x, this.styleQueue.push({
                    $el: h,
                    style: m
                });
                var n = i + h.outerHeight(!0),
                    o = this.cols + 1 - l;
                for (k = 0; o > k; k++) this.colYs[j + k] = n
            },
            resize: function() {
                var a = this.cols;
                this._getColumns(), (this.isFluid || this.cols !== a) && this._reLayout()
            },
            _reLayout: function(a) {
                var b = this.cols;
                for (this.colYs = []; b--;) this.colYs.push(0);
                this.layout(this.$bricks, a)
            },
            reloadItems: function() {
                this.$bricks = this._getBricks(this.element.children())
            },
            reload: function(a) {
                this.reloadItems(), this._init(a)
            },
            appended: function(a, b, c) {
                if (b) {
                    this._filterFindBricks(a).css({
                        top: this.element.height()
                    });
                    var d = this;
                    setTimeout(function() {
                        d._appended(a, c)
                    }, 1)
                } else this._appended(a, c)
            },
            _appended: function(a, b) {
                var c = this._getBricks(a);
                this.$bricks = this.$bricks.add(c), this.layout(c, b)
            },
            remove: function(a) {
                this.$bricks = this.$bricks.not(a), a.remove()
            },
            destroy: function() {
                this.$bricks.removeClass("masonry-brick").each(function() {
                    this.style.position = "", this.style.top = "", this.style.left = ""
                });
                var c = this.element[0].style;
                for (var d in this.originalStyle) c[d] = this.originalStyle[d];
                this.element.unbind(".masonry").removeClass("masonry").removeData("masonry"), b(a).unbind(".masonry")
            }
        }, b.fn.imagesLoaded = function(a) {
            function c() {
                a.call(e, f)
            }

            function d(a) {
                var e = a.target;
                e.src !== h && -1 === b.inArray(e, i) && (i.push(e), --g <= 0 && (setTimeout(c), f.unbind(".imagesLoaded", d)))
            }
            var e = this,
                f = e.find("img").add(e.filter("img")),
                g = f.length,
                h = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==",
                i = [];
            return g || c(), f.bind("load.imagesLoaded error.imagesLoaded", d).each(function() {
                var a = this.src;
                this.src = h, this.src = a
            }), e
        };
        var e = function(b) {
            a.console && a.console.error(b)
        };
        b.fn.masonry = function(a) {
            if ("string" == typeof a) {
                var c = Array.prototype.slice.call(arguments, 1);
                this.each(function() {
                    var d = b.data(this, "masonry");
                    return d ? b.isFunction(d[a]) && "_" !== a.charAt(0) ? void d[a].apply(d, c) : void e("no such method '" + a + "' for masonry instance") : void e("cannot call methods on masonry prior to initialization; attempted to call method '" + a + "'")
                })
            } else this.each(function() {
                var c = b.data(this, "masonry");
                c ? (c.option(a || {}), c._init()) : b.data(this, "masonry", new b.Mason(a, this))
            });
            return this
        }
    }(window, jQuery), window.JSON || (window.JSON = {}),
    function() {
        function f(a) {
            return 10 > a ? "0" + a : a
        }

        function quote(a) {
            return escapable.lastIndex = 0, escapable.test(a) ? '"' + a.replace(escapable, function(a) {
                var b = meta[a];
                return "string" == typeof b ? b : "\\u" + ("0000" + a.charCodeAt(0).toString(16)).slice(-4)
            }) + '"' : '"' + a + '"'
        }

        function str(a, b) {
            var c, d, e, f, g, h = gap,
                i = b[a];
            switch (i && "object" == typeof i && "function" == typeof i.toJSON && (i = i.toJSON(a)), "function" == typeof rep && (i = rep.call(b, a, i)), typeof i) {
                case "string":
                    return quote(i);
                case "number":
                    return isFinite(i) ? String(i) : "null";
                case "boolean":
                case "null":
                    return String(i);
                case "object":
                    if (!i) return "null";
                    if (gap += indent, g = [], "[object Array]" === Object.prototype.toString.apply(i)) {
                        for (f = i.length, c = 0; f > c; c += 1) g[c] = str(c, i) || "null";
                        return e = 0 === g.length ? "[]" : gap ? "[\n" + gap + g.join(",\n" + gap) + "\n" + h + "]" : "[" + g.join(",") + "]", gap = h, e
                    }
                    if (rep && "object" == typeof rep)
                        for (f = rep.length, c = 0; f > c; c += 1) d = rep[c], "string" == typeof d && (e = str(d, i), e && g.push(quote(d) + (gap ? ": " : ":") + e));
                    else
                        for (d in i) Object.hasOwnProperty.call(i, d) && (e = str(d, i), e && g.push(quote(d) + (gap ? ": " : ":") + e));
                    return e = 0 === g.length ? "{}" : gap ? "{\n" + gap + g.join(",\n" + gap) + "\n" + h + "}" : "{" + g.join(",") + "}", gap = h, e
            }
        }
        "function" != typeof Date.prototype.toJSON && (Date.prototype.toJSON = function() {
            return isFinite(this.valueOf()) ? this.getUTCFullYear() + "-" + f(this.getUTCMonth() + 1) + "-" + f(this.getUTCDate()) + "T" + f(this.getUTCHours()) + ":" + f(this.getUTCMinutes()) + ":" + f(this.getUTCSeconds()) + "Z" : null
        }, String.prototype.toJSON = Number.prototype.toJSON = Boolean.prototype.toJSON = function() {
            return this.valueOf()
        });
        var JSON = window.JSON,
            cx = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
            escapable = /[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
            gap, indent, meta = {
                "\b": "\\b",
                "	": "\\t",
                "\n": "\\n",
                "\f": "\\f",
                "\r": "\\r",
                '"': '\\"',
                "\\": "\\\\"
            },
            rep;
        "function" != typeof JSON.stringify && (JSON.stringify = function(a, b, c) {
            var d;
            if (gap = "", indent = "", "number" == typeof c)
                for (d = 0; c > d; d += 1) indent += " ";
            else "string" == typeof c && (indent = c);
            if (rep = b, !b || "function" == typeof b || "object" == typeof b && "number" == typeof b.length) return str("", {
                "": a
            });
            throw new Error("JSON.stringify")
        }), "function" != typeof JSON.parse && (JSON.parse = function(text, reviver) {
            function walk(a, b) {
                var c, d, e = a[b];
                if (e && "object" == typeof e)
                    for (c in e) Object.hasOwnProperty.call(e, c) && (d = walk(e, c), void 0 !== d ? e[c] = d : delete e[c]);
                return reviver.call(a, b, e)
            }
            var j;
            if (text = String(text), cx.lastIndex = 0, cx.test(text) && (text = text.replace(cx, function(a) {
                    return "\\u" + ("0000" + a.charCodeAt(0).toString(16)).slice(-4)
                })), /^[\],:{}\s]*$/.test(text.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, "@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, "]").replace(/(?:^|:|,)(?:\s*\[)+/g, ""))) return j = eval("(" + text + ")"), "function" == typeof reviver ? walk({
                "": j
            }, "") : j;
            throw new SyntaxError("JSON.parse")
        })
    }(),
    function(a, b) {
        "use strict";
        var c = a.History = a.History || {},
            d = a.jQuery;
        if ("undefined" != typeof c.Adapter) throw new Error("History.js Adapter has already been loaded...");
        c.Adapter = {
            bind: function(a, b, c) {
                d(a).bind(b, c)
            },
            trigger: function(a, b, c) {
                d(a).trigger(b, c)
            },
            extractEventData: function(a, c, d) {
                var e = c && c.originalEvent && c.originalEvent[a] || d && d[a] || b;
                return e
            },
            onDomLoad: function(a) {
                d(a)
            }
        }, "undefined" != typeof c.init && c.init()
    }(window),
    function(a) {
        "use strict";
        var b = a.document,
            c = a.setTimeout || c,
            d = a.clearTimeout || d,
            e = a.setInterval || e,
            f = a.History = a.History || {};
        if ("undefined" != typeof f.initHtml4) throw new Error("History.js HTML4 Support has already been loaded...");
        f.initHtml4 = function() {
            return "undefined" != typeof f.initHtml4.initialized ? !1 : (f.initHtml4.initialized = !0, f.enabled = !0, f.savedHashes = [], f.isLastHash = function(a) {
                var b, c = f.getHashByIndex();
                return b = a === c
            }, f.saveHash = function(a) {
                return f.isLastHash(a) ? !1 : (f.savedHashes.push(a), !0)
            }, f.getHashByIndex = function(a) {
                var b = null;
                return b = "undefined" == typeof a ? f.savedHashes[f.savedHashes.length - 1] : 0 > a ? f.savedHashes[f.savedHashes.length + a] : f.savedHashes[a]
            }, f.discardedHashes = {}, f.discardedStates = {}, f.discardState = function(a, b, c) {
                var d, e = f.getHashByState(a);
                return d = {
                    discardedState: a,
                    backState: c,
                    forwardState: b
                }, f.discardedStates[e] = d, !0
            }, f.discardHash = function(a, b, c) {
                var d = {
                    discardedHash: a,
                    backState: c,
                    forwardState: b
                };
                return f.discardedHashes[a] = d, !0
            }, f.discardedState = function(a) {
                var b, c = f.getHashByState(a);
                return b = f.discardedStates[c] || !1
            }, f.discardedHash = function(a) {
                var b = f.discardedHashes[a] || !1;
                return b
            }, f.recycleState = function(a) {
                var b = f.getHashByState(a);
                return f.discardedState(a) && delete f.discardedStates[b], !0
            }, f.emulated.hashChange && (f.hashChangeInit = function() {
                f.checkerFunction = null;
                var c, d, g, h, i = "";
                return f.isInternetExplorer() ? (c = "historyjs-iframe", d = b.createElement("iframe"), d.setAttribute("id", c), d.style.display = "none", b.body.appendChild(d), d.contentWindow.document.open(), d.contentWindow.document.close(), g = "", h = !1, f.checkerFunction = function() {
                    if (h) return !1;
                    h = !0;
                    var b = f.getHash() || "",
                        c = f.unescapeHash(d.contentWindow.document.location.hash) || "";
                    return b !== i ? (i = b, c !== b && (g = c = b, d.contentWindow.document.open(), d.contentWindow.document.close(), d.contentWindow.document.location.hash = f.escapeHash(b)), f.Adapter.trigger(a, "hashchange")) : c !== g && (g = c, f.setHash(c, !1)), h = !1, !0
                }) : f.checkerFunction = function() {
                    var b = f.getHash();
                    return b !== i && (i = b, f.Adapter.trigger(a, "hashchange")), !0
                }, f.intervalList.push(e(f.checkerFunction, f.options.hashChangeInterval)), !0
            }, f.Adapter.onDomLoad(f.hashChangeInit)), f.emulated.pushState && (f.onHashChange = function(c) {
                var d, e = c && c.newURL || b.location.href,
                    g = f.getHashByUrl(e),
                    h = null,
                    i = null;
                return f.isLastHash(g) ? (f.busy(!1), !1) : (f.doubleCheckComplete(), f.saveHash(g), g && f.isTraditionalAnchor(g) ? (f.Adapter.trigger(a, "anchorchange"), f.busy(!1), !1) : (h = f.extractState(f.getFullUrl(g || b.location.href, !1), !0), f.isLastSavedState(h) ? (f.busy(!1), !1) : (i = f.getHashByState(h), d = f.discardedState(h), d ? (f.getHashByIndex(-2) === f.getHashByState(d.forwardState) ? f.back(!1) : f.forward(!1), !1) : (f.pushState(h.data, h.title, h.url, !1), !0))))
            }, f.Adapter.bind(a, "hashchange", f.onHashChange), f.pushState = function(c, d, e, g) {
                if (f.getHashByUrl(e)) throw new Error("History.js does not support states with fragement-identifiers (hashes/anchors).");
                if (g !== !1 && f.busy()) return f.pushQueue({
                    scope: f,
                    callback: f.pushState,
                    args: arguments,
                    queue: g
                }), !1;
                f.busy(!0);
                var h = f.createStateObject(c, d, e),
                    i = f.getHashByState(h),
                    j = f.getState(!1),
                    k = f.getHashByState(j),
                    l = f.getHash();
                return f.storeState(h), f.expectedStateId = h.id, f.recycleState(h), f.setTitle(h), i === k ? (f.busy(!1), !1) : i !== l && i !== f.getShortUrl(b.location.href) ? (f.setHash(i, !1), !1) : (f.saveState(h), f.Adapter.trigger(a, "statechange"), f.busy(!1), !0)
            }, f.replaceState = function(a, b, c, d) {
                if (f.getHashByUrl(c)) throw new Error("History.js does not support states with fragement-identifiers (hashes/anchors).");
                if (d !== !1 && f.busy()) return f.pushQueue({
                    scope: f,
                    callback: f.replaceState,
                    args: arguments,
                    queue: d
                }), !1;
                f.busy(!0);
                var e = f.createStateObject(a, b, c),
                    g = f.getState(!1),
                    h = f.getStateByIndex(-2);
                return f.discardState(g, e, h), f.pushState(e.data, e.title, e.url, !1), !0
            }), f.emulated.pushState && f.getHash() && !f.emulated.hashChange && f.Adapter.onDomLoad(function() {
                f.Adapter.trigger(a, "hashchange")
            }), void 0)
        }, "undefined" != typeof f.init && f.init()
    }(window),
    function(a, b) {
        "use strict";
        var c = a.console || b,
            d = a.document,
            e = a.navigator,
            f = a.sessionStorage || !1,
            g = a.setTimeout,
            h = a.clearTimeout,
            i = a.setInterval,
            j = a.clearInterval,
            k = a.JSON,
            l = a.alert,
            m = a.History = a.History || {},
            n = a.history;
        if (k.stringify = k.stringify || k.encode, k.parse = k.parse || k.decode, "undefined" != typeof m.init) throw new Error("History.js Core has already been loaded...");
        m.init = function() {
            return "undefined" == typeof m.Adapter ? !1 : ("undefined" != typeof m.initCore && m.initCore(), "undefined" != typeof m.initHtml4 && m.initHtml4(), !0)
        }, m.initCore = function() {
            if ("undefined" != typeof m.initCore.initialized) return !1;
            if (m.initCore.initialized = !0, m.options = m.options || {}, m.options.hashChangeInterval = m.options.hashChangeInterval || 100, m.options.safariPollInterval = m.options.safariPollInterval || 500, m.options.doubleCheckInterval = m.options.doubleCheckInterval || 500, m.options.storeInterval = m.options.storeInterval || 1e3, m.options.busyDelay = m.options.busyDelay || 250, m.options.debug = m.options.debug || !1, m.options.initialTitle = m.options.initialTitle || d.title, m.intervalList = [], m.clearAllIntervals = function() {
                    var a, b = m.intervalList;
                    if ("undefined" != typeof b && null !== b) {
                        for (a = 0; a < b.length; a++) j(b[a]);
                        m.intervalList = null
                    }
                }, m.debug = function() {
                    (m.options.debug || !1) && m.log.apply(m, arguments)
                }, m.log = function() {
                    var a, b, e, f, g, h = "undefined" != typeof c && "undefined" != typeof c.log && "undefined" != typeof c.log.apply,
                        i = d.getElementById("log");
                    for (h ? (f = Array.prototype.slice.call(arguments), a = f.shift(), "undefined" != typeof c.debug ? c.debug.apply(c, [a, f]) : c.log.apply(c, [a, f])) : a = "\n" + arguments[0] + "\n", b = 1, e = arguments.length; e > b; ++b) {
                        if (g = arguments[b], "object" == typeof g && "undefined" != typeof k) try {
                            g = k.stringify(g)
                        } catch (j) {}
                        a += "\n" + g + "\n"
                    }
                    return i ? (i.value += a + "\n-----\n", i.scrollTop = i.scrollHeight - i.clientHeight) : h || l(a), !0
                }, m.getInternetExplorerMajorVersion = function() {
                    var a = m.getInternetExplorerMajorVersion.cached = "undefined" != typeof m.getInternetExplorerMajorVersion.cached ? m.getInternetExplorerMajorVersion.cached : function() {
                        for (var a = 3, b = d.createElement("div"), c = b.getElementsByTagName("i");
                            (b.innerHTML = "<!--[if gt IE " + ++a + "]><i></i><![endif]-->") && c[0];);
                        return a > 4 ? a : !1
                    }();
                    return a
                }, m.isInternetExplorer = function() {
                    var a = m.isInternetExplorer.cached = "undefined" != typeof m.isInternetExplorer.cached ? m.isInternetExplorer.cached : Boolean(m.getInternetExplorerMajorVersion());
                    return a
                }, m.emulated = {
                    pushState: !Boolean(a.history && a.history.pushState && a.history.replaceState && !/ Mobile\/([1-7][a-z]|(8([abcde]|f(1[0-8]))))/i.test(e.userAgent) && !/AppleWebKit\/5([0-2]|3[0-2])/i.test(e.userAgent)),
                    hashChange: Boolean(!("onhashchange" in a || "onhashchange" in d) || m.isInternetExplorer() && m.getInternetExplorerMajorVersion() < 8)
                }, m.enabled = !m.emulated.pushState, m.bugs = {
                    setHash: Boolean(!m.emulated.pushState && "Apple Computer, Inc." === e.vendor && /AppleWebKit\/5([0-2]|3[0-3])/.test(e.userAgent)),
                    safariPoll: Boolean(!m.emulated.pushState && "Apple Computer, Inc." === e.vendor && /AppleWebKit\/5([0-2]|3[0-3])/.test(e.userAgent)),
                    ieDoubleCheck: Boolean(m.isInternetExplorer() && m.getInternetExplorerMajorVersion() < 8),
                    hashEscape: Boolean(m.isInternetExplorer() && m.getInternetExplorerMajorVersion() < 7)
                }, m.isEmptyObject = function(a) {
                    for (var b in a) return !1;
                    return !0
                }, m.cloneObject = function(a) {
                    var b, c;
                    return a ? (b = k.stringify(a), c = k.parse(b)) : c = {}, c
                }, m.getRootUrl = function() {
                    var a = d.location.protocol + "//" + (d.location.hostname || d.location.host);
                    return d.location.port && (a += ":" + d.location.port), a += "/"
                }, m.getBaseHref = function() {
                    var a = d.getElementsByTagName("base"),
                        b = null,
                        c = "";
                    return 1 === a.length && (b = a[0], c = b.href.replace(/[^\/]+$/, "")), c = c.replace(/\/+$/, ""), c && (c += "/"), c
                }, m.getBaseUrl = function() {
                    var a = m.getBaseHref() || m.getBasePageUrl() || m.getRootUrl();
                    return a
                }, m.getPageUrl = function() {
                    var a, b = m.getState(!1, !1),
                        c = (b || {}).url || d.location.href;
                    return a = c.replace(/\/+$/, "").replace(/[^\/]+$/, function(a) {
                        return /\./.test(a) ? a : a + "/"
                    })
                }, m.getBasePageUrl = function() {
                    var a = d.location.href.replace(/[#\?].*/, "").replace(/[^\/]+$/, function(a) {
                        return /[^\/]$/.test(a) ? "" : a
                    }).replace(/\/+$/, "") + "/";
                    return a
                }, m.getFullUrl = function(a, b) {
                    var c = a,
                        d = a.substring(0, 1);
                    return b = "undefined" == typeof b ? !0 : b, /[a-z]+\:\/\//.test(a) || (c = "/" === d ? m.getRootUrl() + a.replace(/^\/+/, "") : "#" === d ? m.getPageUrl().replace(/#.*/, "") + a : "?" === d ? m.getPageUrl().replace(/[\?#].*/, "") + a : b ? m.getBaseUrl() + a.replace(/^(\.\/)+/, "") : m.getBasePageUrl() + a.replace(/^(\.\/)+/, "")), c.replace(/\#$/, "")
                }, m.getShortUrl = function(a) {
                    var b = a,
                        c = m.getBaseUrl(),
                        d = m.getRootUrl();
                    return m.emulated.pushState && (b = b.replace(c, "")), b = b.replace(d, "/"), m.isTraditionalAnchor(b) && (b = "./" + b), b = b.replace(/^(\.\/)+/g, "./").replace(/\#$/, "")
                }, m.store = {}, m.idToState = m.idToState || {}, m.stateToId = m.stateToId || {}, m.urlToId = m.urlToId || {}, m.storedStates = m.storedStates || [], m.savedStates = m.savedStates || [], m.normalizeStore = function() {
                    m.store.idToState = m.store.idToState || {}, m.store.urlToId = m.store.urlToId || {}, m.store.stateToId = m.store.stateToId || {}
                }, m.getState = function(a, b) {
                    "undefined" == typeof a && (a = !0), "undefined" == typeof b && (b = !0);
                    var c = m.getLastSavedState();
                    return !c && b && (c = m.createStateObject()), a && (c = m.cloneObject(c), c.url = c.cleanUrl || c.url), c
                }, m.getIdByState = function(a) {
                    var b, c = m.extractId(a.url);
                    if (!c)
                        if (b = m.getStateString(a), "undefined" != typeof m.stateToId[b]) c = m.stateToId[b];
                        else if ("undefined" != typeof m.store.stateToId[b]) c = m.store.stateToId[b];
                    else {
                        for (; c = (new Date).getTime() + String(Math.random()).replace(/\D/g, ""), "undefined" != typeof m.idToState[c] || "undefined" != typeof m.store.idToState[c];);
                        m.stateToId[b] = c, m.idToState[c] = a
                    }
                    return c
                }, m.normalizeState = function(a) {
                    var b, c;
                    return a && "object" == typeof a || (a = {}), "undefined" != typeof a.normalized ? a : (a.data && "object" == typeof a.data || (a.data = {}), b = {}, b.normalized = !0, b.title = a.title || "", b.url = m.getFullUrl(m.unescapeString(a.url || d.location.href)), b.hash = m.getShortUrl(b.url), b.data = m.cloneObject(a.data), b.id = m.getIdByState(b), b.cleanUrl = b.url.replace(/\??\&_suid.*/, ""), b.url = b.cleanUrl, c = !m.isEmptyObject(b.data), (b.title || c) && (b.hash = m.getShortUrl(b.url).replace(/\??\&_suid.*/, ""), /\?/.test(b.hash) || (b.hash += "?"), b.hash += "&_suid=" + b.id), b.hashedUrl = m.getFullUrl(b.hash), (m.emulated.pushState || m.bugs.safariPoll) && m.hasUrlDuplicate(b) && (b.url = b.hashedUrl), b)
                }, m.createStateObject = function(a, b, c) {
                    var d = {
                        data: a,
                        title: b,
                        url: c
                    };
                    return d = m.normalizeState(d)
                }, m.getStateById = function(a) {
                    a = String(a);
                    var c = m.idToState[a] || m.store.idToState[a] || b;
                    return c
                }, m.getStateString = function(a) {
                    var b, c, d;
                    return b = m.normalizeState(a), c = {
                        data: b.data,
                        title: a.title,
                        url: a.url
                    }, d = k.stringify(c)
                }, m.getStateId = function(a) {
                    var b, c;
                    return b = m.normalizeState(a), c = b.id
                }, m.getHashByState = function(a) {
                    var b, c;
                    return b = m.normalizeState(a), c = b.hash
                }, m.extractId = function(a) {
                    var b, c, d;
                    return c = /(.*)\&_suid=([0-9]+)$/.exec(a), d = c ? c[1] || a : a, b = c ? String(c[2] || "") : "", b || !1
                }, m.isTraditionalAnchor = function(a) {
                    var b = !/[\/\?\.]/.test(a);
                    return b
                }, m.extractState = function(a, b) {
                    var c, d, e = null;
                    return b = b || !1, c = m.extractId(a), c && (e = m.getStateById(c)), e || (d = m.getFullUrl(a), c = m.getIdByUrl(d) || !1, c && (e = m.getStateById(c)), !e && b && !m.isTraditionalAnchor(a) && (e = m.createStateObject(null, null, d))), e
                }, m.getIdByUrl = function(a) {
                    var c = m.urlToId[a] || m.store.urlToId[a] || b;
                    return c
                }, m.getLastSavedState = function() {
                    return m.savedStates[m.savedStates.length - 1] || b
                }, m.getLastStoredState = function() {
                    return m.storedStates[m.storedStates.length - 1] || b
                }, m.hasUrlDuplicate = function(a) {
                    var b, c = !1;
                    return b = m.extractState(a.url), c = b && b.id !== a.id
                }, m.storeState = function(a) {
                    return m.urlToId[a.url] = a.id, m.storedStates.push(m.cloneObject(a)), a
                }, m.isLastSavedState = function(a) {
                    var b, c, d, e = !1;
                    return m.savedStates.length && (b = a.id, c = m.getLastSavedState(), d = c.id, e = b === d), e
                }, m.saveState = function(a) {
                    return m.isLastSavedState(a) ? !1 : (m.savedStates.push(m.cloneObject(a)), !0)
                }, m.getStateByIndex = function(a) {
                    var b = null;
                    return b = "undefined" == typeof a ? m.savedStates[m.savedStates.length - 1] : 0 > a ? m.savedStates[m.savedStates.length + a] : m.savedStates[a]
                }, m.getHash = function() {
                    var a = m.unescapeHash(d.location.hash);
                    return a
                }, m.unescapeString = function(b) {
                    for (var c, d = b; c = a.unescape(d), c !== d;) d = c;
                    return d
                }, m.unescapeHash = function(a) {
                    var b = m.normalizeHash(a);
                    return b = m.unescapeString(b)
                }, m.normalizeHash = function(a) {
                    var b = a.replace(/[^#]*#/, "").replace(/#.*/, "");
                    return b
                }, m.setHash = function(a, b) {
                    var c, e, f;
                    return b !== !1 && m.busy() ? (m.pushQueue({
                        scope: m,
                        callback: m.setHash,
                        args: arguments,
                        queue: b
                    }), !1) : (c = m.escapeHash(a), m.busy(!0), e = m.extractState(a, !0), e && !m.emulated.pushState ? m.pushState(e.data, e.title, e.url, !1) : d.location.hash !== c && (m.bugs.setHash ? (f = m.getPageUrl(), m.pushState(null, null, f + "#" + c, !1)) : d.location.hash = c), m)
                }, m.escapeHash = function(b) {
                    var c = m.normalizeHash(b);
                    return c = a.escape(c), m.bugs.hashEscape || (c = c.replace(/\%21/g, "!").replace(/\%26/g, "&").replace(/\%3D/g, "=").replace(/\%3F/g, "?")), c
                }, m.getHashByUrl = function(a) {
                    var b = String(a).replace(/([^#]*)#?([^#]*)#?(.*)/, "$2");
                    return b = m.unescapeHash(b)
                }, m.setTitle = function(a) {
                    var b, c = a.title;
                    c || (b = m.getStateByIndex(0), b && b.url === a.url && (c = b.title || m.options.initialTitle));
                    try {
                        d.getElementsByTagName("title")[0].innerHTML = c.replace("<", "&lt;").replace(">", "&gt;").replace(" & ", " &amp; ")
                    } catch (e) {}
                    return d.title = c, m
                }, m.queues = [], m.busy = function(a) {
                    if ("undefined" != typeof a ? m.busy.flag = a : "undefined" == typeof m.busy.flag && (m.busy.flag = !1), !m.busy.flag) {
                        h(m.busy.timeout);
                        var b = function() {
                            var a, c, d;
                            if (!m.busy.flag)
                                for (a = m.queues.length - 1; a >= 0; --a) c = m.queues[a], 0 !== c.length && (d = c.shift(), m.fireQueueItem(d), m.busy.timeout = g(b, m.options.busyDelay))
                        };
                        m.busy.timeout = g(b, m.options.busyDelay)
                    }
                    return m.busy.flag
                }, m.busy.flag = !1, m.fireQueueItem = function(a) {
                    return a.callback.apply(a.scope || m, a.args || [])
                }, m.pushQueue = function(a) {
                    return m.queues[a.queue || 0] = m.queues[a.queue || 0] || [], m.queues[a.queue || 0].push(a), m
                }, m.queue = function(a, b) {
                    return "function" == typeof a && (a = {
                        callback: a
                    }), "undefined" != typeof b && (a.queue = b), m.busy() ? m.pushQueue(a) : m.fireQueueItem(a), m
                }, m.clearQueue = function() {
                    return m.busy.flag = !1, m.queues = [], m
                }, m.stateChanged = !1, m.doubleChecker = !1, m.doubleCheckComplete = function() {
                    return m.stateChanged = !0, m.doubleCheckClear(), m
                }, m.doubleCheckClear = function() {
                    return m.doubleChecker && (h(m.doubleChecker), m.doubleChecker = !1), m
                }, m.doubleCheck = function(a) {
                    return m.stateChanged = !1, m.doubleCheckClear(), m.bugs.ieDoubleCheck && (m.doubleChecker = g(function() {
                        return m.doubleCheckClear(), m.stateChanged || a(), !0
                    }, m.options.doubleCheckInterval)), m
                }, m.safariStatePoll = function() {
                    var b, c = m.extractState(d.location.href);
                    if (!m.isLastSavedState(c)) return b = c, b || (b = m.createStateObject()), m.Adapter.trigger(a, "popstate"), m
                }, m.back = function(a) {
                    return a !== !1 && m.busy() ? (m.pushQueue({
                        scope: m,
                        callback: m.back,
                        args: arguments,
                        queue: a
                    }), !1) : (m.busy(!0), m.doubleCheck(function() {
                        m.back(!1)
                    }), n.go(-1), !0)
                }, m.forward = function(a) {
                    return a !== !1 && m.busy() ? (m.pushQueue({
                        scope: m,
                        callback: m.forward,
                        args: arguments,
                        queue: a
                    }), !1) : (m.busy(!0), m.doubleCheck(function() {
                        m.forward(!1)
                    }), n.go(1), !0)
                }, m.go = function(a, b) {
                    var c;
                    if (a > 0)
                        for (c = 1; a >= c; ++c) m.forward(b);
                    else {
                        if (!(0 > a)) throw new Error("History.go: History.go requires a positive or negative integer passed.");
                        for (c = -1; c >= a; --c) m.back(b)
                    }
                    return m
                }, m.emulated.pushState) {
                var o = function() {};
                m.pushState = m.pushState || o, m.replaceState = m.replaceState || o
            } else m.onPopState = function(b, c) {
                var e, f, g = !1,
                    h = !1;
                return m.doubleCheckComplete(), e = m.getHash(), e ? (f = m.extractState(e || d.location.href, !0), f ? m.replaceState(f.data, f.title, f.url, !1) : (m.Adapter.trigger(a, "anchorchange"), m.busy(!1)), m.expectedStateId = !1, !1) : (g = m.Adapter.extractEventData("state", b, c) || !1, h = g ? m.getStateById(g) : m.expectedStateId ? m.getStateById(m.expectedStateId) : m.extractState(d.location.href), h || (h = m.createStateObject(null, null, d.location.href)), m.expectedStateId = !1, m.isLastSavedState(h) ? (m.busy(!1), !1) : (m.storeState(h), m.saveState(h), m.setTitle(h), m.Adapter.trigger(a, "statechange"), m.busy(!1), !0))
            }, m.Adapter.bind(a, "popstate", m.onPopState), m.pushState = function(b, c, d, e) {
                if (m.getHashByUrl(d) && m.emulated.pushState) throw new Error("History.js does not support states with fragement-identifiers (hashes/anchors).");
                if (e !== !1 && m.busy()) return m.pushQueue({
                    scope: m,
                    callback: m.pushState,
                    args: arguments,
                    queue: e
                }), !1;
                m.busy(!0);
                var f = m.createStateObject(b, c, d);
                return m.isLastSavedState(f) ? m.busy(!1) : (m.storeState(f), m.expectedStateId = f.id, n.pushState(f.id, f.title, f.url), m.Adapter.trigger(a, "popstate")), !0
            }, m.replaceState = function(b, c, d, e) {
                if (m.getHashByUrl(d) && m.emulated.pushState) throw new Error("History.js does not support states with fragement-identifiers (hashes/anchors).");
                if (e !== !1 && m.busy()) return m.pushQueue({
                    scope: m,
                    callback: m.replaceState,
                    args: arguments,
                    queue: e
                }), !1;
                m.busy(!0);
                var f = m.createStateObject(b, c, d);
                return m.isLastSavedState(f) ? m.busy(!1) : (m.storeState(f), m.expectedStateId = f.id, n.replaceState(f.id, f.title, f.url), m.Adapter.trigger(a, "popstate")), !0
            };
            if (f) {
                try {
                    m.store = k.parse(f.getItem("History.store")) || {}
                } catch (p) {
                    m.store = {}
                }
                m.normalizeStore()
            } else m.store = {}, m.normalizeStore();
            m.Adapter.bind(a, "beforeunload", m.clearAllIntervals), m.Adapter.bind(a, "unload", m.clearAllIntervals), m.saveState(m.storeState(m.extractState(d.location.href, !0))), f && (m.onUnload = function() {
                var a, b;
                try {
                    a = k.parse(f.getItem("History.store")) || {}
                } catch (c) {
                    a = {}
                }
                a.idToState = a.idToState || {}, a.urlToId = a.urlToId || {}, a.stateToId = a.stateToId || {};
                for (b in m.idToState) m.idToState.hasOwnProperty(b) && (a.idToState[b] = m.idToState[b]);
                for (b in m.urlToId) m.urlToId.hasOwnProperty(b) && (a.urlToId[b] = m.urlToId[b]);
                for (b in m.stateToId) m.stateToId.hasOwnProperty(b) && (a.stateToId[b] = m.stateToId[b]);
                m.store = a, m.normalizeStore(), f.setItem("History.store", k.stringify(a))
            }, m.intervalList.push(i(m.onUnload, m.options.storeInterval)), m.Adapter.bind(a, "beforeunload", m.onUnload), m.Adapter.bind(a, "unload", m.onUnload)), m.emulated.pushState || (m.bugs.safariPoll && m.intervalList.push(i(m.safariStatePoll, m.options.safariPollInterval)), ("Apple Computer, Inc." === e.vendor || "Mozilla" === (e.appCodeName || "")) && (m.Adapter.bind(a, "hashchange", function() {
                m.Adapter.trigger(a, "popstate")
            }), m.getHash() && m.Adapter.onDomLoad(function() {
                m.Adapter.trigger(a, "hashchange")
            })))
        }, m.init()
    }(window), window.url = function() {
        function a(a) {
            return !isNaN(parseFloat(a)) && isFinite(a)
        }
        return function(b, c) {
            var d = c || window.location.toString();
            "//" === d.substring(0, 2) ? d = "http:" + d : 1 === d.split("://").length && (d = "http://" + d), c = d.split("/");
            var e = {
                    auth: ""
                },
                f = c[2].split("@");
            1 === f.length ? f = f[0].split(":") : (e.auth = f[0], f = f[1].split(":")), e.protocol = c[0], e.hostname = f[0], e.port = f[1] || "80", e.pathname = "/" + c.slice(3, c.length).join("/").split("?")[0].split("#")[0];
            var g = e.pathname;
            1 === g.split(".").length && "/" !== g[g.length - 1] && (g += "/");
            var h = e.hostname,
                i = h.split("."),
                j = g.split("/");
            if (!b) return d;
            if ("hostname" === b) return h;
            if ("domain" === b) return i.slice(-2).join(".");
            if ("tld" === b) return i.slice(-1).join(".");
            if ("sub" === b) return i.slice(0, i.length - 2).join(".");
            if ("port" === b) return e.port || "80";
            if ("protocol" === b) return e.protocol.split(":")[0];
            if ("auth" === b) return e.auth;
            if ("user" === b) return e.auth.split(":")[0];
            if ("pass" === b) return e.auth.split(":")[1] || "";
            if ("path" === b) return g;
            if ("." === b[0]) {
                if (b = b.substring(1), a(b)) return b = parseInt(b), i[0 > b ? i.length + b : b - 1] || ""
            } else {
                if (a(b)) return b = parseInt(b), j[0 > b ? j.length - 1 + b : b] || "";
                if ("file" === b) return j.slice(-1)[0];
                if ("filename" === b) return j.slice(-1)[0].split(".")[0];
                if ("fileext" === b) return j.slice(-1)[0].split(".")[1] || "";
                if ("?" === b[0] || "#" === b[0]) {
                    var k = d,
                        l = null;
                    if ("?" === b[0] ? k = (k.split("?")[1] || "").split("#")[0] : "#" === b[0] && (k = k.split("#")[1] || ""), !b[1]) return k;
                    b = b.substring(1), k = k.split("&");
                    for (var m = 0, n = k.length; n > m; m++)
                        if (l = k[m].split("="), l[0] === b) return l[1]
                }
            }
            return ""
        }
    }(), jQuery.easing.jswing = jQuery.easing.swing, jQuery.extend(jQuery.easing, {
        def: "easeOutQuad",
        swing: function(a, b, c, d, e) {
            return jQuery.easing[jQuery.easing.def](a, b, c, d, e)
        },
        easeInQuad: function(a, b, c, d, e) {
            return d * (b /= e) * b + c
        },
        easeOutQuad: function(a, b, c, d, e) {
            return -d * (b /= e) * (b - 2) + c
        },
        easeInOutQuad: function(a, b, c, d, e) {
            return (b /= e / 2) < 1 ? d / 2 * b * b + c : -d / 2 * (--b * (b - 2) - 1) + c
        },
        easeInCubic: function(a, b, c, d, e) {
            return d * (b /= e) * b * b + c
        },
        easeOutCubic: function(a, b, c, d, e) {
            return d * ((b = b / e - 1) * b * b + 1) + c
        },
        easeInOutCubic: function(a, b, c, d, e) {
            return (b /= e / 2) < 1 ? d / 2 * b * b * b + c : d / 2 * ((b -= 2) * b * b + 2) + c
        },
        easeInQuart: function(a, b, c, d, e) {
            return d * (b /= e) * b * b * b + c
        },
        easeOutQuart: function(a, b, c, d, e) {
            return -d * ((b = b / e - 1) * b * b * b - 1) + c
        },
        easeInOutQuart: function(a, b, c, d, e) {
            return (b /= e / 2) < 1 ? d / 2 * b * b * b * b + c : -d / 2 * ((b -= 2) * b * b * b - 2) + c
        },
        easeInQuint: function(a, b, c, d, e) {
            return d * (b /= e) * b * b * b * b + c
        },
        easeOutQuint: function(a, b, c, d, e) {
            return d * ((b = b / e - 1) * b * b * b * b + 1) + c
        },
        easeInOutQuint: function(a, b, c, d, e) {
            return (b /= e / 2) < 1 ? d / 2 * b * b * b * b * b + c : d / 2 * ((b -= 2) * b * b * b * b + 2) + c
        },
        easeInSine: function(a, b, c, d, e) {
            return -d * Math.cos(b / e * (Math.PI / 2)) + d + c
        },
        easeOutSine: function(a, b, c, d, e) {
            return d * Math.sin(b / e * (Math.PI / 2)) + c
        },
        easeInOutSine: function(a, b, c, d, e) {
            return -d / 2 * (Math.cos(Math.PI * b / e) - 1) + c
        },
        easeInExpo: function(a, b, c, d, e) {
            return 0 == b ? c : d * Math.pow(2, 10 * (b / e - 1)) + c
        },
        easeOutExpo: function(a, b, c, d, e) {
            return b == e ? c + d : d * (-Math.pow(2, -10 * b / e) + 1) + c
        },
        easeInOutExpo: function(a, b, c, d, e) {
            return 0 == b ? c : b == e ? c + d : (b /= e / 2) < 1 ? d / 2 * Math.pow(2, 10 * (b - 1)) + c : d / 2 * (-Math.pow(2, -10 * --b) + 2) + c
        },
        easeInCirc: function(a, b, c, d, e) {
            return -d * (Math.sqrt(1 - (b /= e) * b) - 1) + c
        },
        easeOutCirc: function(a, b, c, d, e) {
            return d * Math.sqrt(1 - (b = b / e - 1) * b) + c
        },
        easeInOutCirc: function(a, b, c, d, e) {
            return (b /= e / 2) < 1 ? -d / 2 * (Math.sqrt(1 - b * b) - 1) + c : d / 2 * (Math.sqrt(1 - (b -= 2) * b) + 1) + c
        },
        easeInElastic: function(a, b, c, d, e) {
            var f = 1.70158,
                g = 0,
                h = d;
            if (0 == b) return c;
            if (1 == (b /= e)) return c + d;
            if (g || (g = .3 * e), h < Math.abs(d)) {
                h = d;
                var f = g / 4
            } else var f = g / (2 * Math.PI) * Math.asin(d / h);
            return -(h * Math.pow(2, 10 * (b -= 1)) * Math.sin(2 * (b * e - f) * Math.PI / g)) + c
        },
        easeOutElastic: function(a, b, c, d, e) {
            var f = 1.70158,
                g = 0,
                h = d;
            if (0 == b) return c;
            if (1 == (b /= e)) return c + d;
            if (g || (g = .3 * e), h < Math.abs(d)) {
                h = d;
                var f = g / 4
            } else var f = g / (2 * Math.PI) * Math.asin(d / h);
            return h * Math.pow(2, -10 * b) * Math.sin(2 * (b * e - f) * Math.PI / g) + d + c
        },
        easeInOutElastic: function(a, b, c, d, e) {
            var f = 1.70158,
                g = 0,
                h = d;
            if (0 == b) return c;
            if (2 == (b /= e / 2)) return c + d;
            if (g || (g = .3 * e * 1.5), h < Math.abs(d)) {
                h = d;
                var f = g / 4
            } else var f = g / (2 * Math.PI) * Math.asin(d / h);
            return 1 > b ? -.5 * h * Math.pow(2, 10 * (b -= 1)) * Math.sin(2 * (b * e - f) * Math.PI / g) + c : h * Math.pow(2, -10 * (b -= 1)) * Math.sin(2 * (b * e - f) * Math.PI / g) * .5 + d + c
        },
        easeInBack: function(a, b, c, d, e, f) {
            return void 0 == f && (f = 1.70158), d * (b /= e) * b * ((f + 1) * b - f) + c
        },
        easeOutBack: function(a, b, c, d, e, f) {
            return void 0 == f && (f = 1.70158), d * ((b = b / e - 1) * b * ((f + 1) * b + f) + 1) + c
        },
        easeInOutBack: function(a, b, c, d, e, f) {
            return void 0 == f && (f = 1.70158), (b /= e / 2) < 1 ? d / 2 * b * b * (((f *= 1.525) + 1) * b - f) + c : d / 2 * ((b -= 2) * b * (((f *= 1.525) + 1) * b + f) + 2) + c
        },
        easeInBounce: function(a, b, c, d, e) {
            return d - jQuery.easing.easeOutBounce(a, e - b, 0, d, e) + c
        },
        easeOutBounce: function(a, b, c, d, e) {
            return (b /= e) < 1 / 2.75 ? 7.5625 * d * b * b + c : 2 / 2.75 > b ? d * (7.5625 * (b -= 1.5 / 2.75) * b + .75) + c : 2.5 / 2.75 > b ? d * (7.5625 * (b -= 2.25 / 2.75) * b + .9375) + c : d * (7.5625 * (b -= 2.625 / 2.75) * b + .984375) + c
        },
        easeInOutBounce: function(a, b, c, d, e) {
            return e / 2 > b ? .5 * jQuery.easing.easeInBounce(a, 2 * b, 0, d, e) + c : .5 * jQuery.easing.easeOutBounce(a, 2 * b - e, 0, d, e) + .5 * d + c
        }
    }), ! function(a, b, c, d) {
        var e = a(b);
        a.fn.lazyload = function(f) {
            function g() {
                var b = 0;
                i.each(function() {
                    var c = a(this);
                    if (!j.skip_invisible || c.is(":visible"))
                        if (a.abovethetop(this, j) || a.leftofbegin(this, j));
                        else if (a.belowthefold(this, j) || a.rightoffold(this, j)) {
                        if (++b > j.failure_limit) return !1
                    } else c.trigger("appear"), b = 0
                })
            }
            var h, i = this,
                j = {
                    threshold: 0,
                    failure_limit: 0,
                    event: "scroll",
                    effect: "show",
                    container: b,
                    data_attribute: "original",
                    skip_invisible: !0,
                    appear: null,
                    load: null,
                    placeholder: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAANSURBVBhXYzh8+PB/AAffA0nNPuCLAAAAAElFTkSuQmCC"
                };
            return f && (d !== f.failurelimit && (f.failure_limit = f.failurelimit, delete f.failurelimit), d !== f.effectspeed && (f.effect_speed = f.effectspeed, delete f.effectspeed), a.extend(j, f)), h = j.container === d || j.container === b ? e : a(j.container), 0 === j.event.indexOf("scroll") && h.bind(j.event, function() {
                return g()
            }), this.each(function() {
                var b = this,
                    c = a(b);
                b.loaded = !1, (c.attr("src") === d || c.attr("src") === !1) && c.is("img") && c.attr("src", j.placeholder), c.one("appear", function() {
                    if (!this.loaded) {
                        if (j.appear) {
                            var d = i.length;
                            j.appear.call(b, d, j)
                        }
                        a("<img />").bind("load", function() {
                            var d = c.attr("data-" + j.data_attribute);
                            c.hide(), c.is("img") ? c.attr("src", d) : c.css("background-image", "url('" + d + "')"), c[j.effect](j.effect_speed), b.loaded = !0;
                            var e = a.grep(i, function(a) {
                                return !a.loaded
                            });
                            if (i = a(e), j.load) {
                                var f = i.length;
                                j.load.call(b, f, j)
                            }
                        }).attr("src", c.attr("data-" + j.data_attribute))
                    }
                }), 0 !== j.event.indexOf("scroll") && c.bind(j.event, function() {
                    b.loaded || c.trigger("appear")
                })
            }), e.bind("resize", function() {
                g()
            }), /(?:iphone|ipod|ipad).*os 5/gi.test(navigator.appVersion) && e.bind("pageshow", function(b) {
                b.originalEvent && b.originalEvent.persisted && i.each(function() {
                    a(this).trigger("appear")
                })
            }), a(c).ready(function() {
                g()
            }), this
        }, a.belowthefold = function(c, f) {
            var g;
            return g = f.container === d || f.container === b ? (b.innerHeight ? b.innerHeight : e.height()) + e.scrollTop() : a(f.container).offset().top + a(f.container).height(), g <= a(c).offset().top - f.threshold
        }, a.rightoffold = function(c, f) {
            var g;
            return g = f.container === d || f.container === b ? e.width() + e.scrollLeft() : a(f.container).offset().left + a(f.container).width(), g <= a(c).offset().left - f.threshold
        }, a.abovethetop = function(c, f) {
            var g;
            return g = f.container === d || f.container === b ? e.scrollTop() : a(f.container).offset().top, g >= a(c).offset().top + f.threshold + a(c).height()
        }, a.leftofbegin = function(c, f) {
            var g;
            return g = f.container === d || f.container === b ? e.scrollLeft() : a(f.container).offset().left, g >= a(c).offset().left + f.threshold + a(c).width()
        }, a.inviewport = function(b, c) {
            return !(a.rightoffold(b, c) || a.leftofbegin(b, c) || a.belowthefold(b, c) || a.abovethetop(b, c))
        }, a.extend(a.expr[":"], {
            "below-the-fold": function(b) {
                return a.belowthefold(b, {
                    threshold: 0
                })
            },
            "above-the-top": function(b) {
                return !a.belowthefold(b, {
                    threshold: 0
                })
            },
            "right-of-screen": function(b) {
                return a.rightoffold(b, {
                    threshold: 0
                })
            },
            "left-of-screen": function(b) {
                return !a.rightoffold(b, {
                    threshold: 0
                })
            },
            "in-viewport": function(b) {
                return a.inviewport(b, {
                    threshold: 0
                })
            },
            "above-the-fold": function(b) {
                return !a.belowthefold(b, {
                    threshold: 0
                })
            },
            "right-of-fold": function(b) {
                return a.rightoffold(b, {
                    threshold: 0
                })
            },
            "left-of-fold": function(b) {
                return !a.rightoffold(b, {
                    threshold: 0
                })
            }
        })
    }(jQuery, window, document),
    function() {
        function a() {}

        function b(a, b) {
            for (var c = a.length; c--;)
                if (a[c].listener === b) return c;
            return -1
        }

        function c(a) {
            return function() {
                return this[a].apply(this, arguments)
            }
        }
        var d = a.prototype,
            e = this,
            f = e.EventEmitter;
        d.getListeners = function(a) {
            var b, c, d = this._getEvents();
            if ("object" == typeof a) {
                b = {};
                for (c in d) d.hasOwnProperty(c) && a.test(c) && (b[c] = d[c])
            } else b = d[a] || (d[a] = []);
            return b
        }, d.flattenListeners = function(a) {
            var b, c = [];
            for (b = 0; a.length > b; b += 1) c.push(a[b].listener);
            return c
        }, d.getListenersAsObject = function(a) {
            var b, c = this.getListeners(a);
            return c instanceof Array && (b = {}, b[a] = c), b || c
        }, d.addListener = function(a, c) {
            var d, e = this.getListenersAsObject(a),
                f = "object" == typeof c;
            for (d in e) e.hasOwnProperty(d) && -1 === b(e[d], c) && e[d].push(f ? c : {
                listener: c,
                once: !1
            });
            return this
        }, d.on = c("addListener"), d.addOnceListener = function(a, b) {
            return this.addListener(a, {
                listener: b,
                once: !0
            })
        }, d.once = c("addOnceListener"), d.defineEvent = function(a) {
            return this.getListeners(a), this
        }, d.defineEvents = function(a) {
            for (var b = 0; a.length > b; b += 1) this.defineEvent(a[b]);
            return this
        }, d.removeListener = function(a, c) {
            var d, e, f = this.getListenersAsObject(a);
            for (e in f) f.hasOwnProperty(e) && (d = b(f[e], c), -1 !== d && f[e].splice(d, 1));
            return this
        }, d.off = c("removeListener"), d.addListeners = function(a, b) {
            return this.manipulateListeners(!1, a, b)
        }, d.removeListeners = function(a, b) {
            return this.manipulateListeners(!0, a, b)
        }, d.manipulateListeners = function(a, b, c) {
            var d, e, f = a ? this.removeListener : this.addListener,
                g = a ? this.removeListeners : this.addListeners;
            if ("object" != typeof b || b instanceof RegExp)
                for (d = c.length; d--;) f.call(this, b, c[d]);
            else
                for (d in b) b.hasOwnProperty(d) && (e = b[d]) && ("function" == typeof e ? f.call(this, d, e) : g.call(this, d, e));
            return this
        }, d.removeEvent = function(a) {
            var b, c = typeof a,
                d = this._getEvents();
            if ("string" === c) delete d[a];
            else if ("object" === c)
                for (b in d) d.hasOwnProperty(b) && a.test(b) && delete d[b];
            else delete this._events;
            return this
        }, d.removeAllListeners = c("removeEvent"), d.emitEvent = function(a, b) {
            var c, d, e, f, g = this.getListenersAsObject(a);
            for (e in g)
                if (g.hasOwnProperty(e))
                    for (d = g[e].length; d--;) c = g[e][d], c.once === !0 && this.removeListener(a, c.listener), f = c.listener.apply(this, b || []), f === this._getOnceReturnValue() && this.removeListener(a, c.listener);
            return this
        }, d.trigger = c("emitEvent"), d.emit = function(a) {
            var b = Array.prototype.slice.call(arguments, 1);
            return this.emitEvent(a, b)
        }, d.setOnceReturnValue = function(a) {
            return this._onceReturnValue = a, this
        }, d._getOnceReturnValue = function() {
            return this.hasOwnProperty("_onceReturnValue") ? this._onceReturnValue : !0
        }, d._getEvents = function() {
            return this._events || (this._events = {})
        }, a.noConflict = function() {
            return e.EventEmitter = f, a
        }, "function" == typeof define && define.amd ? define("eventEmitter/EventEmitter", [], function() {
            return a
        }) : "object" == typeof module && module.exports ? module.exports = a : this.EventEmitter = a
    }.call(this),
    function(a) {
        function b(b) {
            var c = a.event;
            return c.target = c.target || c.srcElement || b, c
        }
        var c = document.documentElement,
            d = function() {};
        c.addEventListener ? d = function(a, b, c) {
            a.addEventListener(b, c, !1)
        } : c.attachEvent && (d = function(a, c, d) {
            a[c + d] = d.handleEvent ? function() {
                var c = b(a);
                d.handleEvent.call(d, c)
            } : function() {
                var c = b(a);
                d.call(a, c)
            }, a.attachEvent("on" + c, a[c + d])
        });
        var e = function() {};
        c.removeEventListener ? e = function(a, b, c) {
            a.removeEventListener(b, c, !1)
        } : c.detachEvent && (e = function(a, b, c) {
            a.detachEvent("on" + b, a[b + c]);
            try {
                delete a[b + c]
            } catch (d) {
                a[b + c] = void 0
            }
        });
        var f = {
            bind: d,
            unbind: e
        };
        "function" == typeof define && define.amd ? define("eventie/eventie", f) : a.eventie = f
    }(this),
    function(a, b) {
        "function" == typeof define && define.amd ? define(["eventEmitter/EventEmitter", "eventie/eventie"], function(c, d) {
            return b(a, c, d)
        }) : "object" == typeof exports ? module.exports = b(a, require("eventEmitter"), require("eventie")) : a.imagesLoaded = b(a, a.EventEmitter, a.eventie)
    }(this, function(a, b, c) {
        function d(a, b) {
            for (var c in b) a[c] = b[c];
            return a
        }

        function e(a) {
            return "[object Array]" === m.call(a)
        }

        function f(a) {
            var b = [];
            if (e(a)) b = a;
            else if ("number" == typeof a.length)
                for (var c = 0, d = a.length; d > c; c++) b.push(a[c]);
            else b.push(a);
            return b
        }

        function g(a, b, c) {
            if (!(this instanceof g)) return new g(a, b);
            "string" == typeof a && (a = document.querySelectorAll(a)), this.elements = f(a), this.options = d({}, this.options), "function" == typeof b ? c = b : d(this.options, b), c && this.on("always", c), this.getImages(), j && (this.jqDeferred = new j.Deferred);
            var e = this;
            setTimeout(function() {
                e.check()
            })
        }

        function h(a) {
            this.img = a
        }

        function i(a) {
            this.src = a, n[a] = this
        }
        var j = a.jQuery,
            k = a.console,
            l = void 0 !== k,
            m = Object.prototype.toString;
        g.prototype = new b, g.prototype.options = {}, g.prototype.getImages = function() {
            this.images = [];
            for (var a = 0, b = this.elements.length; b > a; a++) {
                var c = this.elements[a];
                "IMG" === c.nodeName && this.addImage(c);
                for (var d = c.querySelectorAll("img"), e = 0, f = d.length; f > e; e++) {
                    var g = d[e];
                    this.addImage(g)
                }
            }
        }, g.prototype.addImage = function(a) {
            var b = new h(a);
            this.images.push(b)
        }, g.prototype.check = function() {
            function a(a, e) {
                return b.options.debug && l && k.log("confirm", a, e), b.progress(a), c++, c === d && b.complete(), !0
            }
            var b = this,
                c = 0,
                d = this.images.length;
            if (this.hasAnyBroken = !1, !d) return void this.complete();
            for (var e = 0; d > e; e++) {
                var f = this.images[e];
                f.on("confirm", a), f.check()
            }
        }, g.prototype.progress = function(a) {
            this.hasAnyBroken = this.hasAnyBroken || !a.isLoaded;
            var b = this;
            setTimeout(function() {
                b.emit("progress", b, a), b.jqDeferred && b.jqDeferred.notify && b.jqDeferred.notify(b, a)
            })
        }, g.prototype.complete = function() {
            var a = this.hasAnyBroken ? "fail" : "done";
            this.isComplete = !0;
            var b = this;
            setTimeout(function() {
                if (b.emit(a, b), b.emit("always", b), b.jqDeferred) {
                    var c = b.hasAnyBroken ? "reject" : "resolve";
                    b.jqDeferred[c](b)
                }
            })
        }, j && (j.fn.imagesLoaded = function(a, b) {
            var c = new g(this, a, b);
            return c.jqDeferred.promise(j(this))
        }), h.prototype = new b, h.prototype.check = function() {
            var a = n[this.img.src] || new i(this.img.src);
            if (a.isConfirmed) return void this.confirm(a.isLoaded, "cached was confirmed");
            if (this.img.complete && void 0 !== this.img.naturalWidth) return void this.confirm(0 !== this.img.naturalWidth, "naturalWidth");
            var b = this;
            a.on("confirm", function(a, c) {
                return b.confirm(a.isLoaded, c), !0
            }), a.check()
        }, h.prototype.confirm = function(a, b) {
            this.isLoaded = a, this.emit("confirm", this, b)
        };
        var n = {};
        return i.prototype = new b, i.prototype.check = function() {
            if (!this.isChecked) {
                var a = new Image;
                c.bind(a, "load", this), c.bind(a, "error", this), a.src = this.src, this.isChecked = !0
            }
        }, i.prototype.handleEvent = function(a) {
            var b = "on" + a.type;
            this[b] && this[b](a)
        }, i.prototype.onload = function(a) {
            this.confirm(!0, "onload"), this.unbindProxyEvents(a)
        }, i.prototype.onerror = function(a) {
            this.confirm(!1, "onerror"), this.unbindProxyEvents(a)
        }, i.prototype.confirm = function(a, b) {
            this.isConfirmed = !0, this.isLoaded = a, this.emit("confirm", this, b)
        }, i.prototype.unbindProxyEvents = function(a) {
            c.unbind(a.target, "load", this), c.unbind(a.target, "error", this)
        }, g
    }), String.prototype.queryStringToJSON = String.prototype.queryStringToJSON || function() {
        var params = String(this);
        if (params = params.substring(params.indexOf("?") + 1), params = params.replace(/\+/g, "%20"), "{" === params.substring(0, 1) && "}" === params.substring(params.length - 1)) return eval(decodeURIComponent(params));
        params = params.split(/\&(amp\;)?/);
        for (var json = {}, i = 0, n = params.length; n > i; ++i) {
            var param = params[i] || null;
            if (null !== param && (param = param.split("="), null !== param)) {
                var key = param[0] || null;
                if (null !== key && "undefined" != typeof param[1]) {
                    var value = param[1];
                    key = decodeURIComponent(key), value = decodeURIComponent(value);
                    try {
                        value = eval(value)
                    } catch (e) {}
                    var keys = key.split(".");
                    if (1 === keys.length) json[key] = value;
                    else {
                        var path = "",
                            cmd = "";
                        $.each(keys, function(ii, key) {
                            path += '["' + key.replace(/"/g, '\\"') + '"]', jsonCLOSUREGLOBAL = json, cmd = "if ( typeof jsonCLOSUREGLOBAL" + path + ' === "undefined" ) jsonCLOSUREGLOBAL' + path + " = {}", eval(cmd), json = jsonCLOSUREGLOBAL, delete jsonCLOSUREGLOBAL
                        }), jsonCLOSUREGLOBAL = json, valueCLOSUREGLOBAL = value, cmd = "jsonCLOSUREGLOBAL" + path + " = valueCLOSUREGLOBAL", eval(cmd), json = jsonCLOSUREGLOBAL, delete jsonCLOSUREGLOBAL, delete valueCLOSUREGLOBAL
                    }
                }
            }
        }
        return json
    }, $.extend($.expr[":"], {
        inViewport: function(a) {
            var b = document.documentElement.scrollTop || document.body.scrollTop,
                c = $(a).offset().top,
                d = $(a).height();
            return winH = window.innerHeight && window.innerHeight < $(window).height() ? window.innerHeight : $(window).height(), c + d > b && b + winH > c
        }
    });
var Gamma = function() {
        var a = $(window),
            b = $("body"),
            c = $(document),
            d = window.Modernizr,
            e = {
                WebkitTransition: "webkitTransitionEnd",
                MozTransition: "transitionend",
                OTransition: "oTransitionEnd",
                msTransition: "MSTransitionEnd",
                transition: "transitionend"
            },
            f = e[d.prefixed("transition")],
            g = {
                columns: 4,
                speed: 300,
                easing: "ease",
                overlayAnimated: !0,
                nextOnClickImage: !0,
                circular: !0,
                svImageTransitionSpeedFade: 300,
                svImageTransitionEasingFade: "ease-in-out",
                svImageTransitionSpeedResize: 300,
                svImageTransitionEasingResize: "ease-in-out",
                svMarginsVH: {
                    vertical: 140,
                    horizontal: 120
                },
                keyboard: !0,
                swipe: !0,
                interval: 4e3,
                historyapi: !0,
                fullscreen: !0
            },
            h = function(a, b) {
                Gamma.settings = $.extend(!0, {}, g, a), i(), n(), u(function() {
                    Gamma.container.removeClass("gamma-loading"), Gamma.items.fadeIn("fast"), Gamma.settings.historyapi && l(), _initEvents("window"), "function" == typeof b && b.call()
                })
            },
            i = function() {
                Gamma.container = $("#gamma-container"), Gamma.overlay = Gamma.container.find("div.gamma-overlay"), Gamma.controls = Gamma.container.children("div.gamma-options"), Gamma.gallery = Gamma.container.children("ul.gamma-gallery"), Gamma.items = Gamma.gallery.children(), Gamma.itemsCount = Gamma.items.length, Gamma.columns = Gamma.settings.columns, Gamma.isAnimating = !0, Gamma.svMargins = Gamma.settings.svMarginsVH;
                var a = window.History;
                !a.enabled && Gamma.settings.historyapi && (Gamma.settings.historyapi = !1), Gamma.supportTransitions = d.csstransitions
            },
            j = function() {
                if (0 === Gamma.container.find("div.gamma-single-view").length) {
                    var a = $("#nav .fb-like").data("href"),
                        b = '<button class="gamma-btn-close"></button>',
                        c = '<a class="fav-btn"><i class="fa fa-heart"></i><span class="visible-desktop"> Favorite</span></a>',
                        d = '<a id="sv-download-btn"><i class="fa fa-download"></i><span class="visible-desktop"> Download</span></a>',
                        e = '<a id="sv-share-btn"><i class="fa fa-share"></i><span class="visible-desktop"> Share</span></a>',
                        f = '<a id="sv-cart-btn" class="cart-item-btn"><i class="fa fa-shopping-cart"></i><span class="visible-desktop"> Buy Photo</span></a>',
                        g = '<a id="sv-markprivate-btn" class="image-markprivate-btn"><i class="fa fa-eye-slash"></i><span class="visible-desktop"> <span>Mark</span> Private</span></a>',
                        h = '<a id="sv-note-btn" class="image-note-btn note-btn"><i class="fa fa-comment"></i><span class="visible-desktop"> <span class="action">Add Note</span></a>',
                        i = '<div id="fullscreen-fb-like" class="hidden-phone"><div class="fb-like" data-href="' + a + '" data data-send="false" data-layout="button_count" data-width="80" data-show-faces="false" data-font="lucida grande"></div></div>',
                        j = '<div id="bottom-bar"><span id="filename"></span></div>',
                        l = '<button class="gamma-btn-stop-slideshow"><i class="fa fa-pause"></i> Stop</button>',
                        m = '<div id="top-bar"><div>' + e + c + d + f + g + h + "</div></div>",
                        n = '<div id="sv-img-protect-overlay"><img class="img-protect" src="http://s3-us-west-2.amazonaws.com/pixieset-static/images/site/image-protect.gif" /></div>';
                    $('<div class="gamma-single-view"> ' + j + m + n + '<div class="gamma-options gamma-options-single"><div class="gamma-buttons"> ' + i + b + l + "</div></div></div>").appendTo(Gamma.container), Gamma.singleview = Gamma.container.children("div.gamma-single-view"), Gamma.svclose = Gamma.singleview.find("button.gamma-btn-close"), Gamma.stopslideshowbtn = Gamma.singleview.find("button.gamma-btn-stop-slideshow"), Gamma.likebtn = Gamma.singleview.find("#fullscreen-fb-like"), Gamma.favbtn = Gamma.singleview.find("a.fav-btn"), Gamma.svtopbar = Gamma.singleview.find("#top-bar"), Gamma.svbottombar = Gamma.singleview.find("#bottom-bar"), Gamma.svsharebtn = Gamma.singleview.find("#sv-share-btn"), Gamma.svdownloadbtn = Gamma.singleview.find("#sv-download-btn"), Gamma.svcartbtn = Gamma.singleview.find("#sv-cart-btn"), Gamma.svmarkprivatebtn = Gamma.singleview.find("#sv-markprivate-btn"), Gamma.svnotebtn = Gamma.singleview.find("#sv-note-btn"), Gamma.svimgprotect = Gamma.singleview.find("#sv-img-protect-overlay"), _initEvents("singleview"), k()
                } else Gamma.nav || k()
            },
            k = function() {
                Gamma.itemsCount > 1 && (Gamma.svplay = $('<a id="gamma-slideshow-btn"><i class="fa fa-play"></i><span class="visible-desktop"> Slideshow</span></a>').insertBefore(Gamma.favbtn), Gamma.nav = $('<nav class="gamma-nav"><span class="gamma-prev"><i class="fa fa-angle-left"></i></span><span class="gamma-next"><i class="fa fa-angle-right"></i></span></nav>').appendTo(Gamma.singleview), Gamma.svnavnext = Gamma.nav.find("span.gamma-next"), Gamma.svnavprev = Gamma.nav.find("span.gamma-prev"), _initEvents("singleviewnavigation")), _initEvents("sharepopover")
            },
            l = function(a, b) {
                Gamma.settings.historyapi && (b = b || History.getState().url.queryStringToJSON().id);
                var c = void 0 != b,
                    a = a || !1;
                if (Gamma.settings.historyapi && Gamma.isSV && void 0 === b && _closesingleview(), c) {
                    var d = Gamma.items.eq(Math.abs(b));
                    d.length && (Gamma.svImage ? (Gamma.supportTransitions && _setTransition(Gamma.svImage, "all", Gamma.settings.svImageTransitionSpeedFade, Gamma.settings.svImageTransitionEasingFade), _applyAnimation(Gamma.svImage, {
                        opacity: 0
                    }, Gamma.settings.svImageTransitionSpeedFade, Gamma.supportTransitions, function() {
                        $(this).remove(), a = !1, _singleviewitem(d, a)
                    }), Gamma.svDescription && _applyAnimation(Gamma.svDescription, {
                        opacity: 0
                    }, 400, Gamma.supportTransitions)) : (Gamma.svDescription && Gamma.svDescription.empty(), _singleviewitem(d, a)))
                }
            },
            m = function(a, b, c) {
                void 0 === a ? History.pushState(null, null, url("protocol") + "://" + url("hostname") + url("path")) : History.getState().url.queryStringToJSON().id !== a && History.pushState(null, null, url("protocol") + "://" + url("hostname") + url("path") + "?pid=" + b + "&id=" + a + "&h=" + c)
            },
            n = function(a) {
                Gamma.settings.fullscreen && Gamma.itemsCount > 0 && j(), t();
                var a = a || Gamma.items.hide();
                a.each(function() {
                    var a = $(this),
                        b = a.children(),
                        c = s(b),
                        d = w(c, a.outerWidth(!0)),
                        e = b.data("description"),
                        f = b.data("id"),
                        g = b.data("idhash");
                    a.data({
                        description: e,
                        source: c,
                        maxwidth: b.data("maxWidth"),
                        maxheight: b.data("maxHeight")
                    }), $("<img/>").attr({
                        id: f,
                        alt: b.data("alt"),
                        title: b.data("title"),
                        src: d.src
                    }).insertAfter(b), "undefined" != typeof Gamma.settings._isMobile && 1 === Gamma.settings._isMobile || "undefined" != typeof Gamma.settings._isTablet && 1 === Gamma.settings._isTablet ? o(b) : (q(b, f, g), "view_favorite" == Gamma.settings._page && Gamma.settings._isNoteOn && r(b, f, g)), p(b, f), b.remove()
                })
            },
            o = function(a) {
                var b = $('<div id="grid-img-protect-overlay"><img class="img-protect" src="http://s3-us-west-2.amazonaws.com/pixieset-static/images/site/image-protect.gif" /></div>');
                b.insertAfter(a)
            },
            p = function(a, b) {
                $labelHolderEl = $('<div class="grid-label-holder"/>').attr("id", "grid-label-holder-" + b), Gamma.settings._isMarkPrivateOn && ($markprivateLabelEl = $("<span/>").addClass("image-markprivate-label img-circle hidden").html('<i class="fa fa-eye-slash fa-fw"></i>'), a.data("markprivate") && $markprivateLabelEl.removeClass("hidden"), $markprivateLabelEl.appendTo($labelHolderEl)), Gamma.settings._isStoreOn && ($cartLabelEl = $("<span/>").addClass("image-cart-label img-circle hidden").html('<i class="fa fa-shopping-cart fa-fw"></i>'), a.data("cart") && $cartLabelEl.removeClass("hidden"), $cartLabelEl.appendTo($labelHolderEl)), Gamma.settings._isFavoriteOn && ($favoriteLabelEl = $("<span/>").addClass("image-favorite-label img-circle hidden").html('<i class="fa fa-heart fa-fw"></i>'), a.data("favorite") > 0 && ($favoriteLabelEl.removeClass("hidden"), a.data("favorite") > 1 && $favoriteLabelEl.addClass("multiple-active")), $favoriteLabelEl.appendTo($labelHolderEl)), Gamma.settings._isNoteOn && ("undefined" != typeof Gamma.settings._isMobile && 1 === Gamma.settings._isMobile || "undefined" != typeof Gamma.settings._isTablet && 1 === Gamma.settings._isTablet) && ($noteLabelEl = $("<span/>").addClass("image-note-label img-circle hidden").attr("id", "note-label-span-" + b).html('<i class="fa fa-comment fa-fw"></i>'), a.data("note") && $noteLabelEl.removeClass("hidden"), $noteLabelEl.appendTo($labelHolderEl)), $labelHolderEl.insertAfter(a)
            },
            q = function(a, b, c) {
                if ($actionHolderEl = $('<div class="grid-action-holder"/>').attr("id", "grid-action-holder-" + b), Gamma.settings._isFavoriteOn) {
                    var d = $("<a/>").addClass("grid-action-btn").html('<i class="fa fa-heart fa-fw"></i>');
                    d.addClass(a.data("favorite-login") ? "image-favorite-login" : "image-favorite-btn"), d.appendTo($actionHolderEl)
                }
                if (Gamma.settings._isStoreOn && $("<a/>").addClass("grid-action-btn cart-item-btn").html('<i class="fa fa-shopping-cart fa-fw"></i>').appendTo($actionHolderEl), Gamma.settings._isSingleDownloadOn) {
                    var e = "/download/photo/username/" + Gamma.settings._username + "/key/" + Gamma.settings._collectionUrlKey + "/pid/" + b + "/?idh=" + c;
                    $("<a/>").addClass("grid-action-btn").attr("href", e).html('<i class="fa fa-download fa-fw"></i>').appendTo($actionHolderEl)
                }
                if (Gamma.settings._isMarkPrivateOn && $("<a/>").addClass("grid-action-btn image-markprivate-btn").html('<i class="fa fa-eye-slash fa-fw"></i>').appendTo($actionHolderEl), Gamma.settings._isSharingOn) {
                    var f = '<a class="social-btn facebook" href="/client/sharephoto/u/' + Gamma.settings._username + "/c/" + Gamma.settings._collectionUrlKey + "/pid/" + b + "/h/" + c + '/sn/facebook/" rel="nofollow" onclick="return PixiesetClient.Sharing.socialPop(this.href);"><i class="fa fa-fw fa-facebook-square"></i></a><a class="social-btn twitter" href="/client/sharephoto/u/' + Gamma.settings._username + "/c/" + Gamma.settings._collectionUrlKey + "/pid/" + b + "/h/" + c + '/sn/twitter/" rel="nofollow" onclick="return PixiesetClient.Sharing.socialPop(this.href);"><i class="fa fa-fw fa-twitter-square"></i></a><a class="social-btn pinterest" href="/client/sharephoto/u/' + Gamma.settings._username + "/c/" + Gamma.settings._collectionUrlKey + "/pid/" + b + "/h/" + c + '/sn/pinterest/" rel="nofollow" onclick="return PixiesetClient.Sharing.socialPop(this.href);"><i class="fa fa-fw fa-pinterest-square"></i></a><a class="social-btn googleplus" href="/client/sharephoto/u/' + Gamma.settings._username + "/c/" + Gamma.settings._collectionUrlKey + "/pid/" + b + "/h/" + c + '/sn/google/" rel="nofollow" onclick="return PixiesetClient.Sharing.socialPop(this.href);"><i class="fa fa-fw fa-google-plus-square"></i></a><a class="social-btn email" style="font-size: 14px;" href="/client/sharephoto/u/' + Gamma.settings._username + "/c/" + Gamma.settings._collectionUrlKey + "/pid/" + b + "/h/" + c + '/sn/email/" rel="nofollow" onclick="return PixiesetClient.Sharing.socialPop(this.href);"><i class="fa fa-fw fa-envelope"></i></a>';
                    $("<div/>").addClass("image-grid-sharelist").html(f).insertAfter(a), $("<a/>").addClass("grid-action-btn image-share-btn").html('<i class="fa fa-share fa-fw"></i>').appendTo($actionHolderEl)
                }
                $actionHolderEl.insertAfter(a)
            },
            r = function(a, b) {
                var c = "",
                    d = "image-note-btn",
                    e = "Add Note";
                a.data("note") && (c = " visible", d = "image-note-view", e = ""), $noteHolderEl = $('<div class="grid-note-holder' + c + '"/>').attr("id", "grid-note-holder-" + b), $("<a/>").addClass("grid-action-btn " + d + " note-btn grid").html('<i class="fa fa-comment"></i><span class="action">' + e + "</span>").appendTo($noteHolderEl), $noteHolderEl.insertAfter(a)
            },
            s = function(a) {
                var b = [];
                return a.children("div").each(function(a) {
                    var c = $(this);
                    b.push({
                        width: c.data("minWidth") || 0,
                        src: c.data("src"),
                        pos: a
                    })
                }), b
            },
            t = function() {
                var a = Gamma.container.width();
                if (Gamma.settings.viewport)
                    for (var b = 0, c = Gamma.settings.viewport.length; c > b; ++b) {
                        var d = Gamma.settings.viewport[b];
                        if (a > d.width) {
                            Gamma.columns = d.columns;
                            break
                        }
                    }
                Gamma.items.css("width", 100 * Math.floor(a / Gamma.columns) / a + "%")
            },
            u = function(a) {
                Gamma.gallery.imagesLoaded(function() {
                    Gamma.gallery.masonry({
                        itemSelector: "li",
                        columnWidth: function(a) {
                            return a / Gamma.columns
                        }
                    }), v(), a && a.call()
                })
            },
            v = function(a) {
                clearTimeout(Gamma.masonrytimeout), a = a || 0, Gamma.masonrytimeout = setTimeout(function() {
                    Gamma.gallery.masonry("reload")
                }, a)
            },
            w = function(a, b) {
                0 >= b && (b = 1);
                for (var c = 0, d = a.length; d > c; ++c) {
                    var e = a[c];
                    if (b > e.width) return e
                }
            },
            x = function(a, b, c) {
                c ? a.css(c) : "on" === b ? a.show() : a.hide()
            },
            y = function(a) {
                Gamma.slideshow || z(a)
            },
            z = function(a) {
                if (!Gamma.isSV || Gamma.isAnimating) return !1;
                var b = Gamma.current;
                if ("next" === a ? (Gamma.current = Gamma.current < Gamma.itemsCount - 1 ? ++Gamma.current : Gamma.settings.circular ? 0 : Gamma.current, _preloadNext()) : "prev" === a && (Gamma.current = Gamma.current > 0 ? --Gamma.current : Gamma.settings.circular ? Gamma.itemsCount - 1 : Gamma.current), Gamma.itemsCount - Gamma.current < 6 && PixiesetHelpers.mediator.publish("all:loadMorePhotos"), b === Gamma.current) return !1;
                Gamma.isAnimating = !0;
                var c = Gamma.items.eq(Gamma.current),
                    d = c.find("img").attr("id"),
                    e = c.data("idhash");
                m(Gamma.current, d, e)
            },
            A = function() {
                t(), B(), Gamma.isSV && _svResizeImage(), v(200)
            },
            B = function() {
                Gamma.items.each(function() {
                    var a = $(this),
                        b = w(a.data("source"), Gamma.items.outerWidth(!0));
                    a.find("img").attr("src", b.src)
                })
            };
        return _svResizeImage = function(b) {
            var c = _getFinalImgConfig({
                    sources: Gamma.svImage.data("source"),
                    imgMaxW: Gamma.svImage.data("maxwidth"),
                    imgMaxH: Gamma.svImage.data("maxheight"),
                    wrapper: {
                        width: a.width() - Gamma.svMargins.horizontal,
                        height: a.height() - Gamma.svMargins.vertical
                    },
                    image: {
                        width: Gamma.svImage.width(),
                        height: Gamma.svImage.height()
                    }
                }),
                d = c.source,
                e = c.finalSizePosition,
                g = Gamma.svImage.attr("src"),
                h = {
                    width: e.width,
                    height: e.height,
                    left: e.left + Gamma.svMargins.horizontal / 2,
                    top: e.top + Gamma.svMargins.vertical / 2
                };
            Gamma.svimgprotect.css(h), _applyAnimation(Gamma.svImage, h, Gamma.settings.svImageTransitionSpeedResize, Gamma.supportTransitions, function() {
                if (Gamma.supportTransitions && $(this).off(f), g !== d.src) {
                    Gamma.isAnimating = !0;
                    var a = Gamma.svImage.width(),
                        c = Gamma.svImage.height(),
                        e = Gamma.svImage.position().left,
                        h = Gamma.svImage.position().top;
                    Gamma.svImage = $("<img/>").load(function() {
                        var a = $(this);
                        a.attr("id", Gamma.svImage.data.id), a.attr("data-idhash", Gamma.svImage.data.idhash), Gamma.supportTransitions && _setTransition(a, "all", Gamma.settings.svImageTransitionSpeedResize, Gamma.settings.svImageTransitionEasingResize), _applyAnimation(a.next(), {
                            opacity: 0
                        }, 500, Gamma.supportTransitions, function() {
                            var a = $(this);
                            Gamma.supportTransitions && $(this).off(f), a.remove(), Gamma.isAnimating = !1
                        })
                    }).css({
                        width: a,
                        height: c,
                        left: e,
                        top: h
                    }).data(Gamma.svImage.data()).insertBefore(Gamma.svImage).attr("src", d.src)
                }
                b && b.call()
            })
        }, _getFinalImgConfig = function(a) {
            var b = a.sources,
                c = a.imgMaxW || 0,
                d = a.imgMaxH || 0,
                e = w(b, a.wrapper.width),
                f = _getFinalSizePosition(a.image, a.wrapper);
            if (f.checksource && (e = w(b, f.width)), 0 !== c && f.width > c || 0 !== d && f.height > d) {
                if (0 !== c && f.width > c) {
                    var g = f.width / c;
                    f.width = c, f.height /= g
                } else if (0 !== d && f.height > d) {
                    var g = f.height / d;
                    f.height = d, f.width /= g
                }
                f.left = a.wrapper.width / 2 - f.width / 2, f.top = a.wrapper.height / 2 - f.height / 2
            }
            return {
                source: e,
                finalSizePosition: f
            }
        }, _singleview = function() {
            var a = $(this).parent(),
                b = a.index(),
                c = a.data("idhash"),
                d = $(this).attr("id");
            m(b, d, c)
        }, _singleviewitem = function(c, d) {
            Gamma.isSV = !0;
            var e = c.index(),
                g = c.data(),
                h = c.children("img");
            d && (Gamma.fly = $("<img/>").attr("src", h.attr("src")).addClass("gamma-img-fly").css({
                width: h.width(),
                height: h.height(),
                left: c.offset().left + (c.outerWidth(!0) - c.width()) / 2,
                top: c.offset().top + (c.outerHeight(!0) - c.height()) / 2
            }).appendTo(b), Gamma.supportTransitions && _setTransition(Gamma.fly));
            var i = _getFinalImgConfig({
                    sources: c.data("source"),
                    imgMaxW: c.data("maxwidth"),
                    imgMaxH: c.data("maxheight"),
                    wrapper: {
                        width: a.width() - Gamma.svMargins.horizontal,
                        height: a.height() - Gamma.svMargins.vertical
                    },
                    image: {
                        width: h.width(),
                        height: h.height()
                    }
                }),
                j = i.source,
                k = i.finalSizePosition;
            Gamma.current = e, Gamma.overlay.show(), Gamma.settings.overlayAnimated && d && Gamma.supportTransitions && _setTransition(Gamma.overlay, "opacity"), setTimeout(function() {
                if (_applyAnimation(Gamma.overlay, {
                        opacity: 1
                    }, Gamma.settings.speed, Gamma.supportTransitions || !d, function() {
                        if (!Gamma.isSV) return !1;
                        Gamma.supportTransitions && $(this).off(f), b.css("overflow-y", "hidden");
                        var a = Gamma.overlay[0];
                        a.style.display = "none", a.offsetHeight, a.style.display = "block"
                    }), c.css("visibility", "hidden"), d) {
                    var e = {
                            width: k.width,
                            height: k.height,
                            left: k.left + a.scrollLeft() + Gamma.svMargins.horizontal / 2,
                            top: k.top + a.scrollTop() + Gamma.svMargins.vertical / 2
                        },
                        h = Gamma.supportTransitions;
                    _applyAnimation(Gamma.fly, e, Gamma.settings.speed, h, function() {
                        h && $(this).off(f), _loadSVItemFromGrid(g, k, j.src)
                    })
                } else _loadSVItemFromGrid(g, k, j.src)
            }, 25)
        }, _loadSVItemFromGrid = function(a, b, c) {
            Gamma.singleview.show(), Gamma.svDescription || (Gamma.svDescription = $("<div/>").addClass("gamma-description").appendTo(Gamma.singleview).wrap('<div class="gamma-description-wrapper"></div>'), Gamma.supportTransitions && _setTransition(Gamma.svDescription, "opacity", Gamma.settings.svImageTransitionSpeedFade / 2, Gamma.settings.svImageTransitionEasingFade)), _initShareButtonOnSV(a), _initFavoriteButtonOnSV(a), _initDownloadButtonOnSV(a), _initCartButtonOnSV(a), _initMarkPrivateButtonOnSV(a), _initNoteButtonOnSV(a), 1 == Gamma.settings._isShowFilenames && $("#filename").html(a.filename);
            var d = setTimeout(function() {
                Gamma.singleview.addClass("gamma-loading")
            }, Gamma.settings.svImageTransitionSpeedFade + 250);
            Gamma.svImage = $("<img/>").load(function() {
                var c = $(this);
                c.attr("id", a.id), c.attr("data-idhash", a.idhash), clearTimeout(d), Gamma.singleview.removeClass("gamma-loading"), setTimeout(function() {
                    _applyAnimation(Gamma.svDescription, {
                        opacity: 1
                    }, Gamma.settings.svImageTransitionSpeedFade / 2, Gamma.supportTransitions)
                }, 25), c.css({
                    width: b.width,
                    height: b.height,
                    left: b.left + Gamma.svMargins.horizontal / 2,
                    top: b.top + Gamma.svMargins.vertical / 2
                }).appendTo(Gamma.singleview), Gamma.svimgprotect.css({
                    width: b.width,
                    height: b.height,
                    left: b.left + Gamma.svMargins.horizontal / 2,
                    top: b.top + Gamma.svMargins.vertical / 2
                }).appendTo(Gamma.singleview), Gamma.supportTransitions && _setTransition(c, "all", Gamma.settings.svImageTransitionSpeedResize, Gamma.settings.svImageTransitionEasingResize), Gamma.fly ? (Gamma.supportTransitions && _setTransition(Gamma.fly, "opacity", 1e3), setTimeout(function() {
                    _applyAnimation(Gamma.fly, {
                        opacity: 0
                    }, 1e3, Gamma.supportTransitions, function() {
                        var a = $(this);
                        Gamma.supportTransitions && a.off(f), a.remove(), Gamma.fly = null, Gamma.isAnimating = !1
                    })
                }, 25)) : Gamma.isAnimating = !1
            }).data(a).attr("src", c)
        }, _initShareButtonOnSV = function() {
            Gamma.settings._isSharingOn || (Gamma.svsharebtn.hide(), Gamma.likebtn.remove())
        }, _initFavoriteButtonOnSV = function(a) {
            var b = a.id,
                c = a.idhash,
                d = Gamma.favbtn.parent();
            d.attr("id", "photo-" + b), d.attr("data-idhash", c), Gamma.settings._isFavoriteOn ? ($("#grid-action-holder-" + a.id + " .image-favorite-login").length > 0 ? Gamma.favbtn.addClass("image-favorite-login") : (Gamma.favbtn.addClass("image-favorite-btn"), Gamma.favbtn.removeClass("image-favorite-login")), a.favorite ? Gamma.favbtn.addClass("active") : Gamma.favbtn.removeClass("active")) : Gamma.favbtn.hide()
        }, _initDownloadButtonOnSV = function(a) {
            var b = Gamma.settings._collectionUrlKey,
                c = Gamma.settings._username,
                d = a.id,
                e = a.idhash,
                f = "/download/photo/username/" + c + "/key/" + b + "/pid/" + d + "/?idh=" + e;
            Gamma.svdownloadbtn.parent().attr("id", "photo-" + d), Gamma.settings._isSingleDownloadOn ? Gamma.svdownloadbtn.attr("href", f) : Gamma.svdownloadbtn.hide()
        }, _initCartButtonOnSV = function(a) {
            var b = (Gamma.settings._collectionUrlKey, Gamma.settings._username, a.id);
            Gamma.svcartbtn.parent().attr("id", "photo-" + b), Gamma.settings._isStoreOn || Gamma.svcartbtn.hide()
        }, _initMarkPrivateButtonOnSV = function(a) {
            var b = a.id;
            Gamma.svmarkprivatebtn.parent().attr("id", "photo-" + b), Gamma.settings._isMarkPrivateOn ? a.markprivate ? Gamma.svmarkprivatebtn.addClass("active") : Gamma.svmarkprivatebtn.removeClass("active") : Gamma.svmarkprivatebtn.hide()
        }, _initNoteButtonOnSV = function(a) {
            var b = a.id;
            Gamma.svnotebtn.parent().attr("id", "photo-" + b), "view_favorite" == Gamma.settings._page && Gamma.settings._isNoteOn ? a.note ? (Gamma.svnotebtn.addClass("image-note-view").removeClass("image-note-btn"), Gamma.svnotebtn.find(".action").html("View Note")) : (Gamma.svnotebtn.addClass("image-note-btn").removeClass("image-note-view"), Gamma.svnotebtn.find(".action").html("Add Note")) : Gamma.svnotebtn.hide()
        }, _getFinalSizePosition = function(a, b) {
            var c, d, e = a.width,
                f = a.height,
                g = b.width,
                h = b.height,
                i = !1;
            if (e > f) {
                c = g;
                var j = e / g;
                d = f / j, d > h && (i = !0, j = d / h, c /= j, d = h)
            } else {
                d = h;
                var j = f / h;
                c = e / j, i = !0, c > g && (i = !1, j = c / g, c = g, d /= j)
            }
            return {
                width: c,
                height: d,
                left: g / 2 - c / 2,
                top: h / 2 - d / 2,
                checksource: i
            }
        }, _closesingleview = function() {
            if (Gamma.isAnimating || Gamma.fly) return !1;
            Gamma.isSV = !1, Gamma.slideshow && _stopSlideshow();
            var d = Gamma.items.eq(Gamma.current),
                e = d.children("img");
            Gamma.items.not(d).css("visibility", "visible");
            var g = a.scrollTop();
            if (!d.is(":inViewport")) {
                g = d.offset().top + (d.outerHeight(!0) - d.height()) / 2;
                var h = c.height() - a.height();
                g > h && (g = h), a.scrollTop(g)
            }
            var i = Gamma.svImage.position().left + a.scrollLeft(),
                j = Gamma.svImage.position().top + g;
            Gamma.svImage.appendTo(b).css({
                position: "absolute",
                zIndex: 1e4,
                left: i,
                top: j
            }), Gamma.supportTransitions && _setTransition(Gamma.svImage), Gamma.singleview.hide(), Gamma.svDescription.empty().css("opacity", 0), b.css("overflow-y", "scroll"), setTimeout(function() {
                var a = {
                    width: e.width(),
                    height: e.height(),
                    left: d.offset().left + (d.outerWidth(!0) - d.width()) / 2,
                    top: d.offset().top + (d.outerHeight(!0) - d.height()) / 2
                };
                _applyAnimation(Gamma.svImage, a, Gamma.settings.speed, Gamma.supportTransitions, function() {
                    d.css("visibility", "visible"), $(this).remove(), Gamma.svImage = null
                }), Gamma.settings.overlayAnimated ? (Gamma.supportTransitions && _setTransition(Gamma.overlay, "opacity"), _applyAnimation(Gamma.overlay, {
                    opacity: 0
                }, Gamma.settings.speed, Gamma.supportTransitions, function() {
                    var a = $(this);
                    Gamma.supportTransitions && a.off(f), a.hide()
                })) : Gamma.overlay.hide(), Gamma.settings.historyapi && m()
            }, 25)
        }, _visChange = function() {
            Gamma.slideshow && (isHidden() ? (_stopSlideshow(!0), Gamma.slideshow = !0) : _prepareSlideshow())
        }, _prepareSlideshow = function() {
            return Gamma.isAnimating && !Gamma.slideshow ? !1 : (Gamma.isAnimating = !0, clearTimeout(Gamma.slideshowtimeout), Gamma.slideshow = !0, Gamma.svMargins = {
                vertical: 0,
                horizontal: 0
            }, x(Gamma.svclose, "off"), x(Gamma.likebtn, "off"), x(Gamma.svnavprev, "off", {
                left: -40
            }), x(Gamma.svnavnext, "off", {
                right: -40
            }), void _svResizeImage(function() {
                Gamma.isAnimating = !1, Gamma.svplay.addClass("gamma-btn-sspause"), _startSlideshow()
            }))
        }, _preloadNext = function() {
            var b = Gamma.current < Gamma.itemsCount - 1 ? Gamma.current + 1 : Gamma.settings.circular ? 0 : Gamma.current,
                c = Gamma.items.eq(b),
                d = c.children("img"),
                e = _getFinalImgConfig({
                    sources: c.data("source"),
                    imgMaxW: c.data("maxwidth"),
                    imgMaxH: c.data("maxheight"),
                    wrapper: {
                        width: a.width() - Gamma.svMargins.horizontal,
                        height: a.height() - Gamma.svMargins.vertical
                    },
                    image: {
                        width: d.width(),
                        height: d.height()
                    }
                }),
                f = e.source;
            $("<img/>").attr("src", f.src)
        }, _startSlideshow = function() {
            _preloadNext(), Gamma.slideshowtimeout = setTimeout(function() {
                z("next"), _startSlideshow()
            }, Gamma.settings.interval)
        }, _stopSlideshow = function(a) {
            return Gamma.isAnimating ? !1 : (Gamma.isAnimating = !0, clearTimeout(Gamma.slideshowtimeout), void(a || (Gamma.slideshow = !1, Gamma.svplay.removeClass("gamma-btn-sspause"), Gamma.svMargins = Gamma.settings.svMarginsVH, x(Gamma.svclose, "on"), x(Gamma.likebtn, "on"), x(Gamma.svnavprev, "on", {
                left: 20
            }), x(Gamma.svnavnext, "on", {
                right: 20
            }), _svResizeImage(function() {
                Gamma.isAnimating = !1
            }))))
        }, _initEvents = function(b) {
            switch (b) {
                case "window":
                    Gamma.settings.historyapi && (a.off("statechange.gamma"), a.on("statechange.gamma", function() {
                        l(!0)
                    })), a.off("smartresize.gamma"), a.on("smartresize.gamma", A);
                    var d = getHiddenProp();
                    if (d) {
                        var e = d.replace(/[H|h]idden/, "") + "visibilitychange";
                        document.addEventListener(e, _visChange)
                    }
                    break;
                case "singleview":
                    Gamma.settings.fullscreen && (Gamma.gallery.off("click.gamma"), Gamma.svclose.off("click.gamma"), Gamma.gallery.on("click.gamma", "li img", _singleview), Gamma.svclose.on("click.gamma", _closesingleview));
                    break;
                case "singleviewnavigation":
                    Gamma.settings.fullscreen && (Gamma.svnavnext.off("click.gamma"), Gamma.svnavprev.off("click.gamma"), Gamma.svnavnext.on("click.gamma", function() {
                        y("next")
                    }), Gamma.svnavprev.on("click.gamma", function() {
                        y("prev")
                    }), Gamma.settings.nextOnClickImage && (Gamma.singleview.off("click.gamma"), Gamma.singleview.on("click.gamma", "img", function() {
                        y("next")
                    })), Gamma.settings.keyboard && (c.off("keydown.gamma"), c.on("keydown.gamma", function(a) {
                        var b = a.keyCode || a.which,
                            c = {
                                left: 37,
                                up: 38,
                                right: 39,
                                down: 40
                            };
                        switch (b) {
                            case c.left:
                                y("prev");
                                break;
                            case c.right:
                                y("next")
                        }
                    })), Gamma.settings.swipe && (Gamma.singleview.off("swipeleft.gamma"), Gamma.singleview.off("swiperight.gamma"), Gamma.singleview.on("swipeleft.gamma", function() {
                        y("next")
                    }), Gamma.singleview.on("swiperight.gamma", function() {
                        y("prev")
                    })), Gamma.svplay.off("click.gamma"), Gamma.svplay.on("click.gamma", function() {
                        Gamma.isAnimating || (Gamma.stopslideshowbtn.fadeIn(), Gamma.svtopbar.fadeOut(), Gamma.svbottombar.fadeOut(), $(".gamma-single-view").css("background", "#000000"), _prepareSlideshow())
                    }), Gamma.stopslideshowbtn.off("click.gamma"), Gamma.stopslideshowbtn.on("click.gamma", function() {
                        Gamma.slideshow && ($(this).hide(), Gamma.svtopbar.fadeIn(), Gamma.svbottombar.fadeIn(), $(".gamma-single-view").css("background", "#FFFFFF"), _stopSlideshow())
                    }), $(document).keyup(function(a) {
                        27 == a.keyCode && (Gamma.slideshow ? Gamma.stopslideshowbtn.click() : Gamma.isSV && Gamma.svclose.click())
                    }));
                    break;
                case "sharepopover":
                    var f = function() {
                        var a = Gamma.settings._collectionUrlKey,
                            b = Gamma.settings._username,
                            c = $(".gamma-single-view img").attr("id"),
                            d = $(".gamma-single-view img").attr("data-idhash"),
                            e = '<a href="/client/sharephoto/u/' + b + "/c/" + a + "/pid/" + c + "/h/" + d + '/sn/facebook/" rel="nofollow" onclick="return PixiesetClient.Sharing.socialPop(this.href);"><i class="fa fa-facebook-square"></i></a>',
                            f = '<a href="/client/sharephoto/u/' + b + "/c/" + a + "/pid/" + c + "/h/" + d + '/sn/twitter/" rel="nofollow" onclick="return PixiesetClient.Sharing.socialPop(this.href);"><i class="fa fa-twitter-square"></i></a>',
                            g = '<a href="/client/sharephoto/u/' + b + "/c/" + a + "/pid/" + c + "/h/" + d + '/sn/google/" rel="nofollow" onclick="return PixiesetClient.Sharing.socialPop(this.href);"><i class="fa fa-google-plus-square"></i></a>',
                            h = '<a href="/client/sharephoto/u/' + b + "/c/" + a + "/pid/" + c + "/h/" + d + '/sn/pinterest/" rel="nofollow" onclick="return PixiesetClient.Sharing.socialPop(this.href);"><i class="fa fa-pinterest-square"></i></a>',
                            i = '<a href="/client/sharephoto/u/' + b + "/c/" + a + "/pid/" + c + "/h/" + d + '/sn/email/" rel="nofollow" onclick="return PixiesetClient.Sharing.socialPop(this.href);"><i class="fa fa-envelope"></i></a>';
                        return e + f + g + h + i
                    };
                    Gamma.svsharebtn.popover({
                        offset: 10,
                        trigger: "manual",
                        html: !0,
                        placement: "bottom",
                        template: '<div class="popover"><div class="arrow"></div><div class="popover-inner"><h3 class="popover-title"></h3><div class="popover-content"><p></p></div></div></div>',
                        content: function() {
                            return f()
                        }
                    }).click(function() {
                        $(this).popover("toggle")
                    }), $("body").off("click"), $("body").on("click", function(a) {
                        Gamma.svsharebtn.each(function() {
                            return $(this).is(a.target) || 0 !== $(this).has(a.target).length || 0 !== $(".popover").has(a.target).length ? void 0 : void $(this).popover("hide")
                        })
                    })
            }
        }, _setTransition = function(a, b, c, d) {
            b || (b = "all"), c || (c = Gamma.settings.speed), d || (d = Gamma.settings.easing), a.css("transition", b + " " + c + "ms " + d)
        }, _applyAnimation = function(a, b, c, d, e) {
            $.fn.applyStyle = d ? $.fn.css : $.fn.animate, e && d && a.on(f, e), e = e || function() {
                return !1
            }, a.stop().applyStyle(b, $.extend(!0, [], {
                duration: c + "ms",
                complete: e
            }))
        }, add = function(a, b) {
            Gamma.gallery.append(a), Gamma.items = Gamma.gallery.children(), Gamma.itemsCount = Gamma.items.length, n(a), Gamma.gallery.imagesLoaded(function() {
                v(), setTimeout(function() {
                    a.addClass("in")
                }, 20), b()
            })
        }, reload = function() {
            Gamma.items = Gamma.gallery.children(), Gamma.itemsCount = Gamma.items.length, A()
        }, closeSV = function() {
            _closesingleview()
        }, disableResizeListener = function() {
            a.off("smartresize.gamma")
        }, enableResizeListener = function() {
            a.off("smartresize.gamma"), a.on("smartresize.gamma", A)
        }, {
            init: h,
            add: add,
            closeSV: closeSV,
            reload: reload,
            disableResizeListener: disableResizeListener,
            enableResizeListener: enableResizeListener
        }
    }(),
    PixiesetHelpers = function(a, b, c) {
        "use strict";
        return a.mediator = new Mediator, a.isIos = function() {
            return navigator.userAgent.match(/iPhone|iPad|iPod/i)
        }, a.getObjectSize = function(a) {
            var b, c = 0;
            for (b in a) a.hasOwnProperty(b) && c++;
            return c
        }, a.runJqueryPlaceholder = function() {
            b("input, textarea").placeholder()
        }, a.getScrollBarWidth = function() {
            var a, d, e;
            return e === c && (a = b('<div style="width:50px;height:50px;overflow:auto"><div/></div>').appendTo("body"), d = a.children(), e = d.innerWidth() - d.height(99).innerWidth(), a.remove()), e
        }, a.getInternetExplorerVersion = function() {
            var a = window.navigator.userAgent,
                b = a.indexOf("MSIE ");
            return b > 0 ? parseInt(a.substring(b + 5, a.indexOf(".", b))) : 0
        }, a.scrollToElement = function(a, c, d, e) {
            d = "undefined" != typeof d ? d : "html, body", c = "undefined" != typeof c ? c : 0, e = "undefined" != typeof e ? e : 0;
            var f = b(a),
                g = f.position(),
                h = g.top + e;
            c > 0 ? b(d).animate({
                scrollTop: h
            }, c) : b(d).scrollTop(h)
        }, a.disableBodyScroll = function() {
            b("body").addClass("stop-scrolling"), b("body").bind("touchmove", function(a) {
                a.preventDefault()
            })
        }, a.enableBodyScroll = function() {
            b("body").removeClass("stop-scrolling"), b("body").unbind("touchmove")
        }, a
    }(PixiesetHelpers || {}, jQuery),
    PixiesetClient = function(a, b, c) {
        "use strict";

        function d() {
            PixiesetHelpers.mediator.subscribe("all:updateAllSettings", function(a) {
                t = b.extend(t, a)
            }), PixiesetHelpers.mediator.subscribe("all:loadMorePhotos", function() {
                n(function() {
                    n(function() {})
                })
            }), PixiesetHelpers.mediator.subscribe("all:openModal", function(a) {
                var c = a.mainClass,
                    d = a.content,
                    e = "undefined" == typeof a.useCloseBtn ? !0 : a.useCloseBtn;
                b.magnificPopup.open({
                    mainClass: c + " mfp-fade",
                    useCloseBtn: e,
                    closeBtnInside: t.isMobile,
                    enableEscapeKey: !1,
                    items: {
                        src: '<div class="mfp-white-popup">' + d + "</div>",
                        type: "inline"
                    },
                    callbacks: {
                        open: function() {
                            navigator.userAgent.toLowerCase().indexOf("firefox") > -1 ? b("#nav").hasClass("affix") && b("#nav").css("padding-right", PixiesetHelpers.getScrollBarWidth() + "px") : 0 !== PixiesetHelpers.getInternetExplorerVersion() || (b("body").css("padding-right", PixiesetHelpers.getScrollBarWidth() + "px"), b("#nav").hasClass("affix") ? b("#nav").css("padding-right", PixiesetHelpers.getScrollBarWidth() + 9 + "px") : b("#nav").css("padding-right", PixiesetHelpers.getScrollBarWidth() - 3 + "px"))
                        },
                        close: function() {
                            b("body").css("padding-right", 0), b("#nav").css("padding-right", 0)
                        }
                    }
                })
            }), PixiesetHelpers.mediator.subscribe("all:closeModal", function() {
                b.magnificPopup.close()
            }), PixiesetHelpers.mediator.subscribe("all:goToFirstSet", function() {
                var a, c;
                a = b("undefined" != typeof t.isMobile && 1 === t.isMobile || "undefined" != typeof t.isTablet && 1 === t.isTablet ? "#nav-galleries-mobile" : "#nav-galleries"), c = t.allGalleries[0].slug, b.support.pjax ? a.find("#nav-" + c + " a").click() : window.location.replace(url("protocol") + "://" + url("hostname") + "/" + u + "/" + c + "/")
            }), PixiesetHelpers.mediator.subscribe("all:goToNextSet", function() {
                var a, c, d;
                b.each(t.allGalleries, function(a, b) {
                    b.slug == t.currentGallery && (d = a)
                }), a = b("undefined" != typeof t.isMobile && 1 === t.isMobile || "undefined" != typeof t.isTablet && 1 === t.isTablet ? "#nav-galleries-mobile" : "#nav-galleries"), c = t.allGalleries[d + 1].slug, b.support.pjax ? a.find("#nav-" + c + " a").click() : window.location.replace(url("protocol") + "://" + url("hostname") + "/" + u + "/" + c + "/")
            }), PixiesetHelpers.mediator.subscribe("all:showFlashMessage", function(a) {
                var c = Handlebars.compile(b("#flash-message-template").html()),
                    d = b("#flash-message");
                d.length > 0 && d.remove(), b("body").append(c({
                    content: a
                })), d = b("#flash-message"), setTimeout(function() {
                    d.css("bottom", "25px"), d.length > 0 && setTimeout(function() {
                        d.fadeOut("fast", function() {
                            d.remove()
                        })
                    }, 2200)
                }, 10)
            })
        }

        function e() {
            var a = this;
            a.render = function() {
                var a = Handlebars.compile(b("#photo-template").html()),
                    c = window.devicePixelRatio > 1;
                return a({
                    photo: this,
                    retina: c
                })
            }
        }

        function f(a) {
            if (0 !== b("#gamma-container").length) {
                var c = {
                    interval: 3e3,
                    historyapi: !0,
                    svImageTransitionSpeedFade: 100,
                    svImageTransitionSpeedResize: 20,
                    svMarginsVH: {
                        vertical: 100,
                        horizontal: 90
                    },
                    circular: !1,
                    viewport: [{
                        width: 1500,
                        columns: 5
                    }, {
                        width: 1e3,
                        columns: 4
                    }, {
                        width: 800,
                        columns: 3
                    }, {
                        width: 600,
                        columns: 2
                    }, {
                        width: 0,
                        columns: 1
                    }],
                    _collectionUrlKey: u,
                    _username: v,
                    _page: t.page,
                    _isMobile: t.isMobile,
                    _isTablet: t.isTablet,
                    _isStoreOn: t.isStoreOn,
                    _isFavoriteOn: t.isFavoriteOn,
                    _isSingleDownloadOn: t.isSingleDownloadOn,
                    _isSharingOn: t.isSharingOn,
                    _isShowFilenames: t.isShowFilenames,
                    _isMarkPrivateOn: t.isMarkPrivateOn,
                    _isNoteOn: t.isFavoriteOn && null !== t.clientEmail && t.isNoteOn
                };
                ("undefined" != typeof t.isMobile && 1 === t.isMobile || "undefined" != typeof t.isTablet && 1 === t.isTablet) && (c.fullscreen = !1, c.viewport = [{
                    width: 981,
                    columns: 3
                }, {
                    width: 600,
                    columns: 2
                }, {
                    width: 0,
                    columns: 2
                }]), Gamma.init(c, function() {
                    "function" == typeof a && a()
                })
            } else b("#gamma-container").removeClass("gamma-loading")
        }

        function g(a) {
            var c = b("#collection-cover"),
                d = b("#cover-overlay");
            if (c.length > 0) {
                if (PixiesetTheme && PixiesetTheme.init(), b(window).width() >= 1600) {
                    var e = b("#collection-cover").css("background-image").replace(/^url|[\(\)]/g, ""),
                        f = e.substr(e.lastIndexOf("."));
                    e = e.replace(f, "") + "-large" + f, e = e.replace(/["']/g, "");
                    var g = new Image;
                    g.src = e, b(g).load(function() {
                        b("#collection-cover").css("background-image", "url(" + b(this).attr("src") + ")").fadeIn()
                    })
                }
                d.css("opacity", 0), d.css("z-index", "-1")
            }
            "function" == typeof a && a()
        }

        function h() {
            if (1 !== t.isTablet && b("#nav").affix({
                    offset: b("#nav").position()
                }), b("#nav-wrapper").height(b("#nav").height()), 1 !== t.isMobile && 1 !== t.isTablet) {
                var a = b("#nav-wrapper .navbar-inner");
                b(window).scroll(function() {
                    b(window).scrollTop() > b("#collection-cover").height() + 150 ? a.hasClass("small") || a.addClass("small") : a.hasClass("small") && a.removeClass("small")
                })
            }
        }

        function i() {
            var a = b(".nav-more .dropdown-trigger");
            if (a.length > 0)
                if (b("#nav .navbar-inner #nav-" + t.currentGallery).parent().hasClass("dropdown-menu")) {
                    a.addClass("active");
                    var c = b(".navbar-inner #nav-" + t.currentGallery + " a").html();
                    a.html(c + ' <i class="fa fa-caret-down"></i>')
                } else a.removeClass("active"), a.html('More <i class="fa fa-caret-down"></i>')
        }

        function j() {
            var a = {
                placement: "bottom",
                delay: {
                    show: 500,
                    hide: 100
                }
            };
            b(".has-tooltip").tooltip(a)
        }

        function k() {
            var a = function() {
                var a = url(2, document.url),
                    d = "f" === a || a.toLowerCase().indexOf("favlist-") >= 0;
                if (b(".navbar-inner .active").removeClass("active"), "" != a && a !== c)
                    if (t.currentGallery = a, d) {
                        b(".navbar-inner .nav-favorite").addClass("active");
                        var e = url(3, document.url);
                        "" != e && e !== c ? (t.page = "view_favorite", t.favKey = e) : (t.page = "list_favorites", t.favKey = "")
                    } else b(".navbar-inner #nav-" + a).addClass("active"), t.page = "view_gallery", t.favKey = "";
                else t.currentGallery = t.allGalleries[0].slug, t.page = "view_gallery", t.favKey = "", b(".navbar-inner .nav.sets li#nav-" + t.currentGallery).addClass("active");
                w = 1, PixiesetHelpers.mediator.publish("mobile:closeShareHolder"), PixiesetHelpers.mediator.publish("mobile:closeInfoHolder"), PixiesetHelpers.mediator.publish("all:updateAllSettings", {
                    page: t.page,
                    favKey: t.favKey,
                    currentGallery: t.currentGallery
                })
            };
            b.support.pjax && (b.pjax.defaults.scrollTo = !1, b.pjax.defaults.bfcache = !1, b.pjax.defaults.timeout = 5e3), b(document).pjax("[data-pjax] a, a[data-pjax]", "#page-container").on("pjax:beforeSend", function() {
                "undefined" != typeof t.isMobile && 1 == t.isMobile ? b(window).scrollTop(b("#nav-wrapper-mobile").position().top) : b("#nav-wrapper-mobile").is(":visible") ? b(window).scrollTop(b("#nav-wrapper-mobile").position().top) : b("html, body").stop().animate({
                    scrollTop: b("#nav-wrapper").position().top
                }, 300, "easeInOutExpo"), b(".gamma-gallery").hide(), b("#gamma-container").addClass("gamma-loading")
            }).on("pjax:send", function() {
                a(), x !== t.page && (b("#page-container").removeClass("in"), x = t.page)
            }).on("pjax:success", function() {
                if ("list_favorites" !== t.page) {
                    f(function() {
                        PixiesetHelpers.mediator.publish("all:loadMorePhotos"), b("#view-more-btn").hide(), b("#back-top-btn").hide()
                    });
                    var a = b(".royalSlider"),
                        d = a.is(":visible") && "undefined" != typeof a.data("royalSlider") ? a.data("royalSlider").currSlideId : c;
                    PixiesetHelpers.mediator.publish("mobile:generateNewSlider", {
                        currentGallery: t.currentGallery,
                        favKey: t.favKey,
                        currSlideId: d
                    }), "view_gallery" === t.page && (i(), FB && b(".fb-like").length && FB.XFBML.parse())
                } else Gamma && (Gamma.settings._page = t.page, Gamma.disableResizeListener());
                PixiesetHelpers.mediator.publish("cart:updateCartCount", "-1"), h(), j(), b("#page-container").addClass("in")
            }).on("pjax:popstate", function() {
                a(), ("undefined" != typeof t.isMobile && 1 === t.isMobile || "undefined" != typeof t.isTablet && 1 === t.isTablet) && b(".royalSlider").length && setTimeout(function() {
                    b(".royalSlider").hide()
                }, 100)
            })
        }

        function l() {
            b(window).scroll(function() {
                "list_favorites" !== t.page && 0 !== b("#gamma-container").length && b(window).scrollTop() + b(window).height() > b(document).height() - 250 && (b("#view-more-btn").is(":visible") || b("#back-top-btn").is(":visible") || PixiesetHelpers.mediator.publish("all:loadMorePhotos"))
            }), b(document).on("click", "#view-more-btn a", function(a) {
                a.preventDefault();
                var c, d = PixiesetHelpers.getObjectSize(t.allGalleries);
                b.each(t.allGalleries, function(a, b) {
                    b.slug == t.currentGallery && (c = a)
                }), PixiesetHelpers.mediator.publish(c == d - 1 || "view_favorite" === t.page || t.currentGallery && t.currentGallery.toLowerCase().indexOf("favlist-") >= 0 ? "all:goToFirstSet" : "all:goToNextSet")
            }), b(document).on("click", "#back-top-btn a", function(a) {
                a.preventDefault();
                var c = b("#collection-cover").position().top + b("#collection-cover").outerHeight(!0);
                b("html, body").stop().animate({
                    scrollTop: c
                }, 1e3, "easeInOutExpo")
            })
        }

        function m() {
            b(document).on("contextmenu", "html", function() {
                return !1
            }), b(document).on("dragstart", "html", function() {
                return !1
            })
        }

        function n(a) {
            y === !1 && (y = !0, b.ajax({
                url: "/client/loadphotos/",
                type: "GET",
                data: {
                    cuk: t.collectionUrlKey,
                    cid: t.collectionId,
                    gs: t.currentGallery,
                    fk: t.favKey,
                    page: w
                },
                success: function(c) {
                    if ("success" == c.status && "" !== c.content) {
                        var d = b.parseJSON(c.content),
                            f = "";
                        b.each(d, function(a, c) {
                            var d = new e;
                            b.extend(d, c), f += d.render()
                        }), f = f.replace(/>\s+</g, "><"), f = b.trim(f), Gamma.add(b(f), function() {
                            a(), b("#load-more-btn").activity(!1)
                        })
                    } else if ("error" == c.status && "" !== c.content) alert(c.content), location.reload();
                    else {
                        if (a(), 1 === w)
                            if (t.favKey) {
                                var g = Handlebars.compile(b("#no-fav-photo-template").html());
                                b("#gamma-container").append(g())
                            } else {
                                var h = Handlebars.compile(b("#no-gallery-photo-template").html());
                                b("#gamma-container").append(h())
                            }
                        b("#view-more-btn").fadeIn(), b("#load-more-btn").activity(!1), b("#back-top-btn").fadeIn()
                    }
                    w += 1, y = !1
                },
                error: function() {
                    w += 1, y = !1
                },
                beforeSend: function() {
                    b("#load-more-btn").activity({
                        segments: 12,
                        width: 3,
                        space: 4,
                        length: 8,
                        color: "#252525",
                        speed: 1.5
                    })
                }
            }))
        }

        function o() {
            b(document).on("mouseenter", ".masonry-brick", function() {
                b(this).find(".grid-action-holder").addClass("fade-in"), b(this).find(".grid-note-holder").addClass("fade-in")
            }), b(document).on("mouseleave", ".masonry-brick", function() {
                b(this).find(".grid-action-holder").removeClass("fade-in"), b(this).find(".grid-note-holder").removeClass("fade-in")
            })
        }

        function p() {
            var a = b("#collection-search-clear"),
                c = b("form#collection-search"),
                d = b("#collection-search-btn"),
                e = b('input[type="text"]', c);
            d.length > 0 && d.on("click", function(a) {
                a.preventDefault(), e.fadeIn(), e.focus(), "" !== e.val() && c.submit()
            }), e.length > 0 && e.on("keypress", function(a) {
                if (13 == a.which) {
                    if ("" === e.val()) return !1;
                    c.submit()
                }
            }), a.length > 0 && a.on("click", function(b) {
                b.preventDefault(), a.hide(), e.val(""), e.hide(), c.submit()
            })
        }

        function q() {
            b(document).on("click", ".mfp-modal-dismiss", function(a) {
                a.preventDefault(), b.magnificPopup.close()
            })
        }

        function r() {
            var a = b("#guestlogin"),
                c = b("#cover-overlay");
            a.length > 0 && (a.css("height", b(window).height()), b(window).resize(function() {
                a.css("height", b(window).height())
            })), b("#guestlogin-form input").first().focus();
            var d = b("#guestlogin .guestlogin-role"),
                e = b("#guestlogin .guest-form-holder"),
                f = b("#guestlogin .client-form-holder");
            b(".btn.guest", d).on("click", function(a) {
                a.preventDefault(), b(this).hasClass("direct") ? b("form .submit input", e).click() : (d.hide(), e.fadeIn(), b("#guestlogin-form input").first().focus())
            }), b(".btn.client", d).on("click", function(a) {
                a.preventDefault(), d.hide(), f.fadeIn(), b("#clientlogin-form input").first().focus()
            }), b(document).on("click", "#guestlogin .back-btn", function(a) {
                a.preventDefault(), e.hide(), f.hide(), d.fadeIn()
            }), c.css("opacity", 0), c.css("z-index", "-1")
        }

        function s() {
            b("#giftcard-form").submit(function() {
                var a = b("#GiftCard_code").val();
                return window.location = "/checkbalance/?c=" + a, !1
            }), b("#restart .tooltip-link").tooltip({
                delay: {
                    show: 100,
                    hide: 100
                }
            })
        }
        var t, u, v, w = 1,
            x = "",
            y = !1;
        return a.init = function(a) {
            t = b.extend({}, a), t.hasOwnProperty("username") || t.hasOwnProperty("collectionUrlKey") || t.hasOwnProperty("isMobile") ? (v = t.username, u = t.collectionUrlKey) : alert("Sorry, something went wrong. Please contact support@pixieset.com"), t.hasOwnProperty("page") && (x = t.page), d(), PixiesetHelpers.runJqueryPlaceholder(), g(function() {}), h(), i(), j(), f(function() {
                PixiesetHelpers.mediator.publish("all:loadMorePhotos")
            }), k(), l(), m(), o(), q(), p(), r()
        }, a.checkBalance = function() {
            s()
        }, a
    }(window.PixiesetClient || {}, jQuery);
PixiesetClient.Mobile = function(a, b) {
    "use strict";

    function c() {
        var a = this;
        a.render = function() {
            var c = Handlebars.compile(b("#mobile-slide-template").html()),
                d = window.devicePixelRatio > 1;
            return a.path = "undefined" != typeof q.isMobile && 1 === q.isMobile ? a.pathLarge : a.pathXlarge, c({
                photo: this,
                retina: d,
                isFavoriteOn: q.isFavoriteOn,
                isSingleDownloadOn: q.isSingleDownloadOn,
                isSharingOn: q.isSharingOn,
                isStoreOn: q.isStoreOn,
                isShowFilenames: q.isShowFilenames,
                isMarkPrivateOn: q.isMarkPrivateOn,
                isNoteOn: "view_favorite" == q.page && q.isFavoriteOn && null !== q.clientEmail && q.isNoteOn
            })
        }
    }

    function d() {
        PixiesetHelpers.mediator.subscribe("all:updateAllSettings", function(a) {
            q = b.extend(q, a)
        }), PixiesetHelpers.mediator.subscribe("mobile:closeShareHolder", function() {
            b(".mobile-share-holder").hide()
        }), PixiesetHelpers.mediator.subscribe("mobile:closeInfoHolder", function() {
            b(".mobile-info-holder").hide()
        }), PixiesetHelpers.mediator.subscribe("mobile:generateNewSlider", function(a) {
            var d = a.currentGallery,
                e = a.favKey,
                j = a.currSlideId;
            b.ajax({
                url: "/client/loadphotos/",
                type: "GET",
                data: {
                    cuk: q.collectionUrlKey,
                    cid: q.collectionId,
                    gs: d,
                    fk: e,
                    page: 0,
                    all: 1
                },
                success: function(a) {
                    if ("success" == a.status && "" !== a.content) {
                        var d = b.parseJSON(a.content),
                            e = "";
                        s = [], b.each(d, function(a, d) {
                            var f = new c;
                            b.extend(f, d), e += f.render(), s.push(f)
                        }), e = e.replace(/>\s+</g, "><"), e = b.trim(e);
                        var o = {
                            slides: e,
                            autoScaleSlider: !1,
                            autoHeight: !1,
                            controlNavigation: "none",
                            keyboardNavEnabled: !0,
                            navigateByClick: !1,
                            arrowsNavHideOnTouch: !0,
                            globalCaption: !0,
                            imageScalePadding: 0
                        };
                        jQuery(".royalSlider").royalSlider("destroy").empty().royalSlider(o), r = b(".royalSlider").data("royalSlider"), "undefined" != typeof j && (r.st.transitionSpeed = 0, r.goTo(j), setTimeout(function() {
                            r.st.transitionSpeed = 600
                        }, 10)), r.slides[0].holder.on("rsAfterContentSet", function() {
                            i(), f(), g(), h(), k(), l(), m(), n()
                        }), r.ev.on("rsAfterSlideChange", function() {
                            i(), f(), g(), h(), k(), l(), m(), n()
                        }), r.ev.on("rsBeforeSizeSet", function() {
                            b(".rs-img-protect-overlay").remove(), n()
                        }), r.ev.on("rsDragStart", function() {
                            PixiesetClient.FavoriteNote.closeAllNotePopovers()
                        })
                    }
                }
            })
        }), PixiesetHelpers.mediator.subscribe("mobile:updatePhotoCartStatus", function(a) {
            var c = r.currSlideId,
                d = s[c],
                e = b(".mobile-feature-button-holder .mobile-cart");
            d.inCart = a, d.inCart === !0 || 1 == d.inCart ? e.addClass("active") : e.removeClass("active")
        }), PixiesetHelpers.mediator.subscribe("mobile:updatePhotoFavoriteStatus", function(a) {
            var c = r.currSlideId,
                d = s[c],
                e = b(".mobile-feature-button-holder .mobile-favorite"),
                f = a.favoriteListCount;
            d.favCount = f, f > 0 ? e.addClass("active") : e.removeClass("active")
        }), PixiesetHelpers.mediator.subscribe("mobile:updatePhotoMarkPrivateStatus", function(a) {
            var c = r.currSlideId,
                d = s[c],
                e = b(".mobile-feature-button-holder .mobile-markprivate");
            d.isPrivate = a, d.isPrivate === !0 || 1 == d.isPrivate ? e.addClass("active") : e.removeClass("active")
        }), PixiesetHelpers.mediator.subscribe("mobile:updatePhotoFavoriteNoteStatus", function(a) {
            var c = r.currSlideId,
                d = s[c],
                e = b(".mobile-feature-button-holder .mobile-note");
            d.hasNote = a, d.hasNote === !0 || 1 == d.hasNote ? e.addClass("image-note-view").removeClass("image-note-btn") : e.addClass("image-note-btn").removeClass("image-note-view")
        })
    }

    function e() {
        b(document).on("click", "#nav-wrapper-mobile a[data-pjax]", function() {
            var a = b("#nav-wrapper-mobile a.btn-navbar");
            a.hasClass("collapsed") || b("#nav-wrapper-mobile a.btn-navbar").click()
        }), b("#nav-wrapper-mobile a.btn-navbar").on("click", function() {
            b(window).scrollTop(b("#nav-wrapper-mobile").position().top), PixiesetHelpers.mediator.publish("mobile:closeShareHolder"), PixiesetHelpers.mediator.publish("mobile:closeInfoHolder")
        })
    }

    function f(a) {
        if ("undefined" != typeof q.isSingleDownloadOn && q.isSingleDownloadOn) {
            var c = b(".mobile-feature-button-holder .mobile-download"),
                a = c.parent().attr("id").match(/\d+$/)[0],
                d = c.parent().data("idhash"),
                e = "/download/photo/username/" + q.username + "/key/" + q.collectionUrlKey + "/pid/" + a + "/?idh=" + d;
            c.attr("href", e), "undefined" != typeof q.isMobile && 1 === q.isMobile && c.one("click", function() {
                alert("A new window with the photo will open. Press and hold the photo for option to save.")
            })
        }
    }

    function g() {
        var a = b(".mobile-feature-button-holder .mobile-favorite");
        if ("undefined" != typeof q.isFavoriteOn && q.isFavoriteOn) {
            null === q.clientEmail ? a.addClass("image-favorite-login") : (a.addClass("image-favorite-btn"), a.removeClass("image-favorite-login"));
            var c = r.currSlideId,
                d = s[c];
            d.favCount > 0 ? a.addClass("active") : a.removeClass("active")
        }
    }

    function h() {
        var a = b(".mobile-feature-button-holder .mobile-cart");
        if ("undefined" != typeof q.isStoreOn && q.isStoreOn) {
            a.addClass("cart-item-btn");
            var c = r.currSlideId,
                d = s[c];
            d.inCart === !0 || 1 == d.inCart ? a.addClass("active") : a.removeClass("active")
        }
    }

    function i() {
        PixiesetHelpers.mediator.publish("mobile:closeShareHolder");
        var a = (b(".mobile-feature-button-holder .mobile-share"), b(".mobile-share-holder"));
        "undefined" != typeof q.isSharingOn && q.isSharingOn && b(".mobile-feature-button-holder .mobile-share").on("click", function(c) {
            c.preventDefault();
            var d = b(this).parent().attr("id").match(/\d+$/)[0],
                e = b(this).parent().data("idhash"),
                f = "/client/sharephoto/u/" + q.username + "/c/" + q.collectionUrlKey + "/pid/" + d + "/h/" + e + "/sn/";
            b("#share-facebook", a).attr("href", f + "facebook/"), b("#share-twitter", a).attr("href", f + "twitter/"), b("#share-pinterest", a).attr("href", f + "pinterest/"), b("#share-google", a).attr("href", f + "google/"), b("#share-email", a).attr("href", f + "email/"), a.show()
        })
    }

    function j() {
        b(document).on("click", "#nav-mobile #share-btn", function(a) {
            a.preventDefault();
            var c = b(".mobile-share-holder"),
                d = "/client/share/u/" + q.username + "/c/" + q.collectionUrlKey + "/sn/";
            b("#share-facebook", c).attr("href", d + "facebook/"), b("#share-twitter", c).attr("href", d + "twitter/"), b("#share-pinterest", c).attr("href", d + "pinterest/"), b("#share-google", c).attr("href", d + "google/"), b("#share-email", c).attr("href", d + "email/"), b(".mobile-share-holder").show()
        }), b(document).on(" click", ".mobile-share-holder #share-close", function(a) {
            a.preventDefault(), PixiesetHelpers.mediator.publish("mobile:closeShareHolder")
        })
    }

    function k() {
        PixiesetHelpers.mediator.publish("mobile:closeInfoHolder");
        var a = b(".mobile-info-holder");
        "undefined" != typeof q.isShowFilenames && q.isShowFilenames && (b(".mobile-feature-button-holder .mobile-info").on("click", function(c) {
            c.preventDefault();
            var d = b(this).parent().data("name");
            b("p", a).html(d), a.show()
        }), b(document).on(" click", ".mobile-info-holder #info-close", function(a) {
            a.preventDefault(), PixiesetHelpers.mediator.publish("mobile:closeInfoHolder")
        }))
    }

    function l() {
        var a = b(".mobile-feature-button-holder .mobile-markprivate");
        if ("undefined" != typeof q.isMarkPrivateOn && q.isMarkPrivateOn) {
            a.addClass("image-markprivate-btn");
            var c = r.currSlideId,
                d = s[c];
            d.isPrivate === !0 || 1 == d.isPrivate ? a.addClass("active") : a.removeClass("active")
        }
    }

    function m() {
        var a = b(".mobile-feature-button-holder .mobile-note");
        if ("undefined" != typeof q.page && "view_favorite" == q.page && "undefined" != typeof q.clientEmail && null !== q.clientEmail && "undefined" != typeof q.isNoteOn && q.isNoteOn) {
            var c = r.currSlideId,
                d = s[c];
            d.hasNote === !0 || 1 == d.hasNote ? a.addClass("image-note-view").removeClass("image-note-btn") : a.addClass("image-note-btn").removeClass("image-note-view")
        }
    }

    function n() {
        var a = r.currSlide.content.find(".rsImg"),
            c = a.parent(),
            d = b('<div class="rs-img-protect-overlay" id="rs-img-protect-' + r.currSlideId + '"><img class="img-protect" src="http://s3-us-west-2.amazonaws.com/pixieset-static/images/site/image-protect.gif" /></div>');
        a.imagesLoaded(function() {
            0 == b("#rs-img-protect-" + r.currSlideId).length && d.insertAfter(c), b("#rs-img-protect-" + r.currSlideId).css({
                width: a.width(),
                height: a.height(),
                top: a.css("margin-top"),
                left: a.css("margin-left")
            })
        })
    }

    function o() {
        b(document).on("click", "li.masonry-brick", function(a) {
            a.preventDefault();
            var c = b("li.masonry-brick").index(this);
            r.st.transitionSpeed = 0, r.goTo(c), setTimeout(function() {
                b(".royalSlider").show(), r.st.transitionSpeed = 600
            }, 100), "undefined" != typeof q.isMobile && 1 === q.isMobile && PixiesetHelpers.isIos() && setTimeout(function() {
                b("body").css("position", "fixed")
            }, 100)
        }), b(document).on("click", ".royalSlider .slider-close-btn a", function(a) {
            a.preventDefault();
            var c = r.currSlideId,
                d = b(".gamma-gallery").find("li").eq(c);
            "undefined" != typeof q.isMobile && 1 === q.isMobile && PixiesetHelpers.isIos() && b("body").css("position", "inherit"), d.length > 0 && b(window).scrollTop(d.offset().top - 100), b(".royalSlider").hide()
        }), b(document).on("click", ".royalSlider img", function(a) {
            a.preventDefault(), b(".royalSlider .rsGCaption").fadeToggle("fast"), b(".royalSlider").toggleClass("black-bg")
        }), PixiesetHelpers.mediator.publish("mobile:generateNewSlider", {
            currentGallery: q.currentGallery,
            favKey: q.favKey
        })
    }

    function p() {
        if (Modernizr.touch) {
            var a = b("body");
            b(document).on("focus", ".note-form textarea", function() {
                a.addClass("fixfixed")
            }).on("blur", ".note-form textarea", function() {
                a.removeClass("fixfixed")
            })
        }
    }
    var q, r, s;
    return a.init = function(a) {
        q = b.extend({}, a), ("undefined" != typeof q.isMobile && 1 === q.isMobile || "undefined" != typeof q.isTablet && 1 === q.isTablet) && (d(), e(), j(), o(), p(), FastClick.attach(document.body))
    }, a
}(PixiesetClient.Mobile || {}, jQuery), PixiesetClient.Favorite = function(a, b) {
    "use strict";

    function c() {
        PixiesetHelpers.mediator.subscribe("all:updateAllSettings", function(a) {
            h = b.extend(h, a)
        }), PixiesetHelpers.mediator.subscribe("favorite:login", function(a) {
            var c = a.pid,
                d = a.pidh,
                e = "/favorite/clientauth/username/" + j + "/key/" + i + "/"; - 1 !== c && (e = e + "pid/" + c + "/pidh/" + d + "/"), b.ajax({
                url: e,
                success: function(a) {
                    PixiesetHelpers.mediator.publish("all:openModal", {
                        mainClass: "favorite-modal",
                        content: a.content
                    })
                },
                error: function() {
                    alert("Something went wrong. Please reload the page and try again.")
                }
            })
        }), PixiesetHelpers.mediator.subscribe("favorite:afterLogin", function(a) {
            var c = a.pid,
                d = a.pidh,
                e = a.email,
                f = b(".nav-favorite-login");
            if (PixiesetHelpers.mediator.publish("all:updateAllSettings", {
                    clientEmail: e
                }), f.off("click"), f.removeClass("nav-favorite-login").addClass("nav-favorite").attr("href", "/" + h.collectionUrlKey + "/f/").attr("data-pjax", "#page-container"), PixiesetHelpers.mediator.publish("all:closeModal"), h.favKey) {
                PixiesetHelpers.mediator.publish("favorite:listSelect", {
                    pid: c,
                    pidh: d
                });
                var g = "/" + h.collectionUrlKey + "/f/" + h.favKey + "/";
                b.support.pjax ? b.pjax({
                    url: g,
                    container: "#page-container"
                }) : window.location.replace(g)
            } else null !== c && c > 0 ? (PixiesetHelpers.mediator.publish("favorite:listSelect", {
                pid: c,
                pidh: d
            }), b(".image-favorite-login").addClass("image-favorite-btn").removeClass("image-favorite-login"), PixiesetHelpers.mediator.publish("favorite:updateAllPhotosLabel", {
                collection_id: h.collectionId
            })) : b.support.pjax ? f.click() : window.location.replace(f.attr("href"))
        }), PixiesetHelpers.mediator.subscribe("favorite:listSelect", function(a) {
            var c = a.pid,
                d = a.pidh,
                e = h.favKey;
            b.ajax({
                url: "/favorite/clientlistselect/",
                type: "GET",
                data: {
                    cid: h.collectionId,
                    pid: c,
                    pidh: d,
                    fid: e
                },
                success: function(a) {
                    PixiesetHelpers.mediator.publish("all:openModal", {
                        mainClass: "favorite-modal full",
                        content: a.content
                    })
                },
                error: function() {
                    alert("Something went wrong. Please reload the page and try again.")
                }
            })
        }), PixiesetHelpers.mediator.subscribe("favorite:toggle", function(a) {
            var c = a.fid,
                d = a.pid,
                e = url(3),
                f = b("#favlist-" + c + " .count"),
                g = b("#favlist-" + c + " .status"),
                i = b("li[data-id=" + d + "]"),
                j = b(".favorite-list-detail .count"),
                k = b(".favorite-modal .favorite-content");
            b.ajax({
                url: "/favorite/clienttoggle/",
                type: "GET",
                data: {
                    cid: h.collectionId,
                    fid: c,
                    pid: d
                },
                beforeSend: function() {
                    k.addClass("unclickable")
                },
                success: function(a) {
                    if ("error" == a.status) alert("Something went wrong. Please reload the page and try again."), PixiesetHelpers.mediator.publish("all:closeModal");
                    else {
                        var k = a.content.photoCount,
                            l = a.content.photoCountText,
                            m = a.content.isFavorited,
                            n = a.content.favoriteListCount;
                        if (f.html(l), m > 0 ? g.addClass("active") : g.removeClass("active"), g.find("i").removeClass("pulse").addClass("pulse"), c == e)
                            if ("undefined" != typeof h.isMobile && 1 === h.isMobile || "undefined" != typeof h.isTablet && 1 === h.isTablet ? b(".slider-close-btn a").click() : Gamma.isSV && closeSV(), k > 0) i.remove(), Gamma.reload(), PixiesetHelpers.mediator.publish("mobile:generateNewSlider", {
                                currentGallery: h.currentGallery,
                                favKey: e
                            }), j.html(l);
                            else {
                                var o = "/" + h.collectionUrlKey + "/f/" + h.favKey + "/";
                                b.support.pjax ? b.pjax({
                                    url: o,
                                    container: "#page-container"
                                }) : window.location.replace(o)
                            }
                        PixiesetHelpers.mediator.publish("favorite:updateLabel", {
                            photoId: d,
                            favoriteListCount: n
                        }), PixiesetHelpers.mediator.publish("mobile:updatePhotoFavoriteStatus", {
                            favoriteListCount: n
                        }), setTimeout(function() {
                            PixiesetHelpers.mediator.publish("all:closeModal")
                        }, 300), setTimeout(function() {
                            PixiesetHelpers.mediator.publish("all:showFlashMessage", a.content.flash_content)
                        }, 500)
                    }
                },
                error: function() {
                    alert("Something went wrong. Please reload the page and try again.")
                }
            })
        }), PixiesetHelpers.mediator.subscribe("favorite:afterListAction", function(a) {
            var c = "/" + h.collectionUrlKey + "/f/";
            b.support.pjax ? b.pjax({
                url: c,
                container: "#page-container"
            }) : window.location.replace(c), PixiesetHelpers.mediator.publish("all:showFlashMessage", a.flash_content), PixiesetHelpers.mediator.publish("all:closeModal")
        }), PixiesetHelpers.mediator.subscribe("favorite:updateLabel", function(a) {
            var c = a.photoId,
                d = a.favoriteListCount,
                e = b("#grid-label-holder-" + c + " .image-favorite-label"),
                f = b(".gamma-single-view .image-favorite-btn"),
                g = b("li[data-id=" + c + "]");
            d > 0 ? (e.removeClass("hidden"), f.addClass("active"), d > 1 ? e.addClass("multiple-active") : e.removeClass("multiple-active")) : (e.addClass("hidden"), f.removeClass("active")), g.data("favorite", d)
        }), PixiesetHelpers.mediator.subscribe("favorite:updateAllPhotosLabel", function(a) {
            var c = a.collection_id;
            b.ajax({
                url: "/favorite/clientallfavorite/",
                type: "GET",
                data: {
                    cid: c
                },
                success: function(a) {
                    if ("success" == a.status) {
                        var c = b.parseJSON(a.content);
                        b.each(c, function(a, b) {
                            PixiesetHelpers.mediator.publish("favorite:updateLabel", {
                                photoId: a,
                                favoriteListCount: b
                            }), PixiesetHelpers.mediator.publish("mobile:updatePhotoFavoriteStatus", {
                                favoriteListCount: b
                            })
                        })
                    }
                }
            })
        })
    }

    function d() {
        b(document).on("click", ".nav-favorite-login", function(a) {
            a.preventDefault(), PixiesetHelpers.mediator.publish("favorite:login", {
                pid: -1
            })
        }), b(document).on("click", ".image-favorite-login", function(a) {
            a.preventDefault();
            var c = b(this).parent().attr("id").match(/\d+$/)[0],
                d = b(this).parent().attr("data-idhash") || b(this).parent().parent().attr("data-idhash");
            PixiesetHelpers.mediator.publish("favorite:login", {
                pid: c,
                pidh: d
            })
        })
    }

    function e() {
        b(document).on("click", ".image-favorite-btn", function(a) {
            a.preventDefault();
            var c = b(this).parent().attr("id").match(/\d+$/)[0],
                d = b(this).parent().attr("data-idhash") || b(this).parent().parent().attr("data-idhash");
            PixiesetHelpers.mediator.publish("favorite:listSelect", {
                pid: c,
                pidh: d
            })
        }), b(document).on("click", "#client-fav-select-create-cancel", function(a) {
            a.preventDefault();
            var c = b(this).data("pid"),
                d = b(this).data("pidh");
            PixiesetHelpers.mediator.publish("favorite:listSelect", {
                pid: c,
                pidh: d
            })
        })
    }

    function f() {
        b(document).on("click", ".favorite-list", function(a) {
            if (a.preventDefault(), b(this).hasClass("disabled")) b(this).find(".status").trigger("mouseover");
            else {
                var c = b(this).attr("id").match(/\d+$/)[0],
                    d = b(this).parent().data("pid");
                PixiesetHelpers.mediator.publish("favorite:toggle", {
                    fid: c,
                    pid: d
                })
            }
        })
    }

    function g() {
        b(document).on("click", "#fav-signout", function(a) {
            a.preventDefault();
            var c = "/favorite/clientsignout/username/" + j + "/key/" + i + "/";
            b.ajax({
                url: c,
                success: function() {
                    window.location.replace("/" + i + "/")
                }
            })
        }), b(document).on("click", "#fav-list-get-link-btn", function(a) {
            a.preventDefault();
            var c = b(this).data("fid"),
                d = "/favorite/clientgetlink/username/" + j + "/key/" + i + "/fid/" + c;
            b.ajax({
                url: d,
                success: function(a) {
                    PixiesetHelpers.mediator.publish("all:openModal", {
                        mainClass: "favorite-modal",
                        content: a.content
                    })
                }
            })
        }), b(document).on("click", "#fav-list-share-btn", function(a) {
            a.preventDefault();
            var c = b(this).data("fid"),
                d = "/favorite/clientshare/username/" + j + "/key/" + i + "/fid/" + c;
            b.ajax({
                url: d,
                success: function(a) {
                    PixiesetHelpers.mediator.publish("all:openModal", {
                        mainClass: "favorite-modal",
                        content: a.content
                    })
                }
            })
        }), b(document).on("click", "#fav-list-share-photog-btn", function(a) {
            a.preventDefault();
            var c = b(this).data("fid"),
                d = "/favorite/clientsharephotographer/username/" + j + "/key/" + i + "/fid/" + c;
            b.ajax({
                url: d,
                success: function(a) {
                    PixiesetHelpers.mediator.publish("all:openModal", {
                        mainClass: "favorite-modal",
                        content: a.content
                    })
                }
            })
        }), b(document).on("click", ".fav-list-create", function(a) {
            a.preventDefault();
            var c = "/favorite/clientcreate/username/" + j + "/key/" + i + "/";
            b.ajax({
                url: c,
                success: function(a) {
                    PixiesetHelpers.mediator.publish("all:openModal", {
                        mainClass: "favorite-modal",
                        content: a.content
                    })
                }
            })
        }), b(document).on("click", ".fav-list-update", function(a) {
            a.preventDefault();
            var c = b(this).data("fid"),
                d = "/favorite/clientupdate/username/" + j + "/key/" + i + "/fid/" + c;
            b.ajax({
                url: d,
                success: function(a) {
                    PixiesetHelpers.mediator.publish("all:openModal", {
                        mainClass: "favorite-modal",
                        content: a.content
                    })
                }
            })
        })
    }
    var h, i, j;
    return a.init = function(a) {
        h = b.extend({}, a), h.hasOwnProperty("username") || h.hasOwnProperty("collectionUrlKey") ? (j = h.username, i = h.collectionUrlKey) : alert("Sorry, something went wrong. Please contact support@pixieset.com"), c(), d(), e(), f(), g(), PixiesetHelpers.runJqueryPlaceholder()
    }, a
}(PixiesetClient.Favorite || {}, jQuery), PixiesetClient.Cart = function(a, b, c) {
    "use strict";

    function d() {
        PixiesetHelpers.mediator.subscribe("all:updateAllSettings", function(a) {
            k = b.extend(k, a)
        }), PixiesetHelpers.mediator.subscribe("cart:updateCartCount", function(a) {
            var c = b(".nav-cart-count"); - 1 != a ? (c.html(a), a > 0 ? (c.hide().show(0), c.fadeIn("fast")) : c.fadeOut("fast")) : b.ajax({
                url: "/store/cart/getitemcount/",
                type: "GET",
                data: {
                    cid: k.collectionId
                },
                success: function(a) {
                    if ("success" == a.status) {
                        var b = a.content.itemCount;
                        c.html(b), b > 0 ? (c.hide().show(0), c.fadeIn("fast")) : c.fadeOut("fast")
                    }
                }
            })
        }), PixiesetHelpers.mediator.subscribe("cart:checkMinOrderAmount", function(a) {
            var c = b(".checkout-btn"),
                d = b(".incomplete-package-warning"),
                e = b(".empty-cart-warning"),
                f = b(".minimum-order-warning"),
                g = b("#cart-table"),
                h = !1;
            0 === a.content.cartItemCount ? (f.addClass("hidden"), d.addClass("hidden"), e.removeClass("hidden"), g.addClass("hidden")) : (h = !0, a.content.cartSubtotalRaw >= a.content.min_order_amount ? f.addClass("hidden") : (f.removeClass("hidden"), h = !1), a.content.isAllPackagesComplete === !0 ? d.addClass("hidden") : (d.removeClass("hidden"), h = !1)), h === !0 ? c.removeClass("hidden") : c.addClass("hidden")
        }), PixiesetHelpers.mediator.subscribe("cart:updateGridImageCartLabel", function(a) {
            var c = a,
                d = b("#grid-label-holder-" + c + " .image-cart-label");
            b.ajax({
                url: "/store/cart/isphotoincart/",
                type: "GET",
                data: {
                    cid: k.collectionId,
                    pid: c
                },
                success: function(a) {
                    "success" == a.status && a.content === !0 ? d.removeClass("hidden") : d.addClass("hidden"), PixiesetHelpers.mediator.publish("mobile:updatePhotoCartStatus", a.content)
                }
            })
        }), PixiesetHelpers.mediator.subscribe("cart:showGridImageCartLabel", function(a) {
            var c = a,
                d = b("#grid-label-holder-" + c + " .image-cart-label");
            d.removeClass("hidden"), PixiesetHelpers.mediator.publish("mobile:updatePhotoCartStatus", !0)
        }), PixiesetHelpers.mediator.subscribe("cart:openCartPackageModal", function(a) {
            var c = a.cartPackageId,
                d = a.scrollTo;
            b.ajax({
                url: "/store/cart/ListPackageProducts/",
                type: "GET",
                data: {
                    cid: k.collectionId,
                    cartPackageId: c
                },
                success: function(a) {
                    "success" == a.status && (PixiesetHelpers.mediator.publish("all:openModal", {
                        mainClass: "cart-summary-modal",
                        content: a.content
                    }), "undefined" != typeof k.isMobile && 1 === k.isMobile && b(".cart-summary-modal .package-product-list").css("max-height", b(window).height() - 250), "undefined" != typeof d && PixiesetHelpers.scrollToElement(d, 0, ".package-product-list", -100))
                }
            })
        }), PixiesetHelpers.mediator.subscribe("cart:openItemModal", function(a) {
            var c = a.photoId;
            b.ajax({
                url: "/store/cart/item/",
                type: "GET",
                data: {
                    cid: k.collectionId,
                    p: c
                },
                success: function(a) {
                    "success" == a.status && (a.showDesc ? PixiesetHelpers.mediator.publish("all:openModal", {
                        mainClass: "cart-item-modal cart-item-description",
                        content: a.content
                    }) : PixiesetHelpers.mediator.publish("all:openModal", {
                        mainClass: "cart-item-modal",
                        content: a.content
                    }), "undefined" != typeof k.isMobile && 1 === k.isMobile && b(".cart-item-modal #products").css("max-height", b(window).height() - 250))
                }
            })
        }), PixiesetHelpers.mediator.subscribe("cart:openCartSummaryModal", function(a) {
            var c = a.scrollTo;
            b.ajax({
                url: "/store/cart/show/",
                type: "GET",
                data: {
                    cid: k.collectionId
                },
                success: function(a) {
                    "success" == a.status && (PixiesetHelpers.mediator.publish("all:openModal", {
                        mainClass: "cart-summary-modal",
                        content: a.content
                    }), "undefined" != typeof k.isMobile && 1 === k.isMobile && b(".cart-summary-modal #cart-table").css("max-height", b(window).height() - 250), "undefined" != typeof c && PixiesetHelpers.scrollToElement(c, 0, "#cart-table", -80))
                }
            })
        })
    }

    function e() {
        b(".nav-cart");
        b(".nav-cart-count").length > 0 && PixiesetHelpers.mediator.publish("cart:updateCartCount", "-1"), b(document).on("click", ".nav-cart", function(a) {
            a.preventDefault(), PixiesetHelpers.mediator.publish("all:closeModal"), PixiesetHelpers.mediator.publish("cart:openCartSummaryModal")
        })
    }

    function f() {
        b(document).on("click", ".cart-item-btn", function(a) {
            a.preventDefault();
            var c = b(this).parent().attr("id").match(/\d+$/)[0];
            PixiesetHelpers.mediator.publish("all:closeModal"), PixiesetHelpers.mediator.publish("cart:openItemModal", {
                photoId: c
            })
        }), b(document).on("click", ".cart-add-item", function(a) {
            a.preventDefault(), a.stopPropagation();
            var c, d = b(this).parent().data("photo"),
                e = b(this).parent().data("product"),
                f = b("#product-row-" + e),
                g = f.data("prod-width"),
                h = f.data("prod-height"),
                j = f.data("prod-bleed"),
                l = f.data("category"),
                m = b(this).parent().find("span"),
                n = b(".cart-summary-modal #cart-item-" + d + "-" + e + " .item-subtotal"),
                o = b(".cart-summary-modal .cart-subtotal"),
                p = b("#cart-item-image"),
                q = b(".cart-item-modal .product-description"),
                r = !1;
            p.length > 0 && (c = i(p, p.data("width"), p.data("height"), g, h, j, l)), b("#crop-warning").html(g ? "You can adjust the crop for a better fit later." : b(this).parent().parent().hasClass("digital") ? "&nbsp;" : "Crop will be set automatically."), q.length > 0 && !f.hasClass("active") && (r = !0), b.ajax({
                url: "/store/cart/add/",
                type: "POST",
                data: {
                    cid: k.collectionId,
                    p: d,
                    pid: e,
                    crop_coords: c,
                    getDesc: r
                },
                success: function(a) {
                    if ("success" == a.status) {
                        if (m.html(a.content.quantity), n.html(a.content.itemSubtotal), o.html(a.content.cartSubtotal), b("tr.product-row.active").removeClass("active"), f.addClass("active"), "" != a.descHtml) {
                            q.html(a.descHtml), b(".product-images").royalSlider({
                                loop: !0,
                                controlNavigation: "bullets"
                            });
                            var c = b(".rsBullet").length;
                            2 > c && b(".rsBullets").remove()
                        }
                        PixiesetHelpers.mediator.publish("cart:checkMinOrderAmount", a), PixiesetHelpers.mediator.publish("cart:updateCartCount", a.content.cartItemCount), PixiesetHelpers.mediator.publish("cart:showGridImageCartLabel", d)
                    }
                }
            })
        }), b(document).on("click", ".cart-remove-item", function(a) {
            a.preventDefault(), a.stopPropagation();
            var c = b(this).parent().data("photo"),
                d = b(this).parent().data("product"),
                e = b(this).parent().find("span"),
                f = b(".cart-summary-modal #cart-item-" + c + "-" + d + " .item-subtotal"),
                g = b(".cart-summary-modal .cart-subtotal");
            b.ajax({
                url: "/store/cart/remove/",
                type: "GET",
                data: {
                    cid: k.collectionId,
                    p: c,
                    pid: d
                },
                success: function(a) {
                    "success" == a.status && (e.html(a.content.quantity), f.html(a.content.itemSubtotal), g.html(a.content.cartSubtotal), 0 === a.content.quantity && b("tr#cart-item-" + c + "-" + d).fadeOut(100, function() {
                        b(this).remove()
                    }), PixiesetHelpers.mediator.publish("cart:checkMinOrderAmount", a), PixiesetHelpers.mediator.publish("cart:updateCartCount", a.content.cartItemCount), PixiesetHelpers.mediator.publish("cart:updateGridImageCartLabel", c))
                }
            })
        }), b(document).on("click", ".cart-item-remove-all", function(a) {
            a.preventDefault();
            var c = b(this).parent().data("photo"),
                d = b(this).parent().data("product"),
                e = b(".cart-summary-modal .cart-subtotal");
            b.ajax({
                url: "/store/cart/removeitemall/",
                type: "GET",
                data: {
                    cid: k.collectionId,
                    p: c,
                    pid: d
                },
                success: function(a) {
                    "success" == a.status && (b("tr#cart-item-" + c + "-" + d).fadeOut(100, function() {
                        b(this).remove()
                    }), e.html(a.content.cartSubtotal), PixiesetHelpers.mediator.publish("cart:checkMinOrderAmount", a), PixiesetHelpers.mediator.publish("cart:updateCartCount", a.content.cartItemCount), PixiesetHelpers.mediator.publish("cart:updateGridImageCartLabel", c))
                }
            })
        }), b(document).on("click", "#cart-item-modal-checkout", function(a) {
            a.preventDefault(), PixiesetHelpers.mediator.publish("all:closeModal"), PixiesetHelpers.mediator.publish("cart:openCartSummaryModal")
        }), b(document).on("click", "#products-categories a", function(a) {
            a.preventDefault(); {
                var c = b("#cat-" + b(this).data("target"));
                c.position().top
            }
            b(".cart-item-modal #products").stop().animate({
                scrollTop: c.position().top + b(".cart-item-modal #products").scrollTop()
            })
        }), b(document).on("click", "tr.product-row", function(a) {
            if (null !== a.target.tagName && "U" !== a.target.tagName) {
                a.preventDefault();
                var c, d, e = b(this).data("prod-width"),
                    f = b(this).data("prod-height"),
                    g = b(this).data("prod-bleed"),
                    h = b(this).data("category"),
                    j = b(this).data("productid"),
                    k = b(".cart-item-modal .product-description"),
                    l = b(".cart-item-modal .product-images"),
                    m = b(this).hasClass("package"),
                    n = b("#cart-item-image");
                k.length > 0 && !b(this).hasClass("active") && b.ajax({
                    url: "/store/cart/getproductdesc/",
                    type: "GET",
                    data: {
                        productId: j,
                        isPackage: m
                    },
                    beforeSend: function() {
                        l.length > 0 && (c = l.data("royalSlider"), c && c.destroy())
                    },
                    success: function(a) {
                        if ("success" == a.status) {
                            k.html(a.content), b(".product-images").royalSlider({
                                loop: !0,
                                controlNavigation: "bullets"
                            });
                            var c = b(".rsBullet").length;
                            2 > c && b(".rsBullets").remove()
                        }
                    }
                }), b("tr.product-row.active").removeClass("active"), b(this).addClass("active"), n.length > 0 && (d = i(n, n.data("width"), n.data("height"), e, f, g, h)), b("#crop-warning").html(e ? "You can adjust the crop for a better fit later." : b(this).hasClass("package") ? "You can adjust the individual crops for a better fit later." : b(this).hasClass("digital") ? "&nbsp;" : "Crop will be set automatically.")
            }
        }), b(document).on("click", ".cart-item span.name", function(a) {
            a.preventDefault();
            var c = b(this).data("photo");
            PixiesetHelpers.mediator.publish("all:closeModal"), PixiesetHelpers.mediator.publish("cart:openItemModal", {
                photoId: c
            })
        })
    }

    function g() {
        b(document).on("click", "button.add-package", function(a) {
            a.preventDefault(), a.stopPropagation(); {
                var c = b(this),
                    d = c.data("package"),
                    e = c.data("photo");
                b("#product-row-" + d)
            }
            b.ajax({
                url: "/store/cart/addpackage/",
                type: "GET",
                data: {
                    packageId: d,
                    photoId: e,
                    cid: k.collectionId
                },
                beforeSend: function() {
                    c.html('<i class="fa fa-spinner fa-spin"></i>'), b("button.add-package").attr("disabled", !0)
                },
                success: function(a) {
                    "success" == a.status && (c.html("ADD PACKAGE"), b("button.add-package").attr("disabled", !1), PixiesetHelpers.mediator.publish("cart:updateCartCount", a.content.cartItemCount), PixiesetHelpers.mediator.publish("all:closeModal"), PixiesetHelpers.mediator.publish("cart:openCartPackageModal", {
                        cartPackageId: a.content.cartPackageId
                    }))
                }
            })
        }), b(document).on("click", "a.item-package-count", function(a) {
            a.preventDefault(), a.stopPropagation(), PixiesetHelpers.mediator.publish("all:closeModal"), PixiesetHelpers.mediator.publish("cart:openCartPackageModal", {
                cartPackageId: b(this).data("cartpackage")
            })
        }), b(document).on("click", "a.remove-package", function(a) {
            a.preventDefault();
            var c = b(this),
                d = c.data("cartpackage"),
                e = b("#cart-package-" + d),
                f = b(".cart-summary-modal .cart-subtotal"),
                g = b(".cart-package-item-" + d);
            b.ajax({
                url: "/store/cart/removepackage/",
                type: "GET",
                data: {
                    cartPackageId: d,
                    cid: k.collectionId
                },
                success: function(a) {
                    "success" == a.status && (e.fadeOut(100, function() {
                        b(this).remove(), g.remove()
                    }), f.html(a.content.cartSubtotal), PixiesetHelpers.mediator.publish("cart:checkMinOrderAmount", a), PixiesetHelpers.mediator.publish("cart:updateCartCount", a.content.cartItemCount))
                }
            })
        }), b(document).on("click", "a.edit-package", function(a) {
            a.preventDefault();
            var c = b(this),
                d = c.data("cartpackage");
            PixiesetHelpers.mediator.publish("cart:openCartPackageModal", {
                cartPackageId: d
            })
        }), b(document).on("click", ".package-product-list .item a", function(a) {
            a.preventDefault();
            var c = b(this);
            if (!c.hasClass("collection-digital-download")) {
                var d = b(this).data("cartpackage"),
                    e = b(this).data("cartitem"),
                    f = b(this).data("packageproductid");
                b.ajax({
                    url: "/store/cart/SelectPackagePhoto/",
                    type: "GET",
                    data: {
                        cpi: d,
                        cii: e,
                        cid: k.collectionId,
                        ppp: f
                    },
                    beforeSend: function() {
                        c.html('<i class="fa fa-spinner fa-spin fa-2x"></i>')
                    },
                    success: function(a) {
                        "success" == a.status && (PixiesetHelpers.mediator.publish("all:openModal", {
                            content: a.content
                        }), "undefined" != typeof k.isMobile && 1 === k.isMobile && b(".cart-summary-modal .package-photo-list").css("max-height", b(window).height() - 250), b("img.lazy").lazyload({
                            container: b(".package-photo-list"),
                            threshold: 100
                        }), b(window).scroll())
                    }
                })
            }
        }), b(document).on("click", ".package-photo-list ul.photo-list li", function(a) {
            a.preventDefault();
            var c, d = b("img", b(this)),
                e = (b(this).data("labproductwidth"), b(this).data("labproductheight"), b(this).data("category"), b(".package-photo-list ul.photo-list li.active img").data("Jcrop"));
            b(this).hasClass("active") || (e && e.destroy(), c = i(b("img", b(this)), d.data("width"), d.data("height"), d.data("labproductwidth"), d.data("labproductheight"), d.data("labproductbleed"), d.data("category")), b(".package-photo-list ul.photo-list li").removeClass("active"), b(this).addClass("active"))
        }), b(document).on("click", ".package-photo-select-action", function(a) {
            a.preventDefault();
            var c, d = b(this),
                e = d.data("cartpackage"),
                f = d.data("cartitem"),
                g = d.data("packageproductid"),
                h = b(".package-photo-list ul.photo-list li.active"),
                i = b("img", h).data("Jcrop");
            c = i ? i.tellSelect() : !1, h.length > 0 && b.ajax({
                url: "/store/cart/savepackagephoto/",
                type: "GET",
                data: {
                    cpi: e,
                    cii: f,
                    pid: h.data("photo"),
                    cid: k.collectionId,
                    crop_coords: c
                },
                beforeSend: function() {
                    d.attr("disabled", !0), d.html('<i class="fa fa-spinner fa-spin"></i>')
                },
                success: function(a) {
                    "success" == a.status && PixiesetHelpers.mediator.publish("cart:openCartPackageModal", {
                        cartPackageId: e,
                        scrollTo: ".package-product-" + g
                    })
                }
            })
        }), b(document).on("click", ".package-photo-select-cancel-action", function(a) {
            a.preventDefault();
            var c = b(this),
                d = c.data("cartpackage"),
                e = c.data("packageproductid");
            PixiesetHelpers.mediator.publish("cart:openCartPackageModal", {
                cartPackageId: d,
                scrollTo: ".package-product-" + e
            })
        }), b(document).on("shown", '.package-photo-list a[data-toggle="tab"]', function() {
            b("img.lazy").lazyload({
                container: b(".package-photo-list"),
                threshold: 100
            }), b(window).scroll()
        }), b(document).on("click", "#package-modal-checkout", function(a) {
            a.preventDefault();
            var c = b(this).data("cartpackage");
            "" != c && PixiesetHelpers.mediator.publish("cart:openCartSummaryModal", {
                scrollTo: "#cart-package-" + c
            })
        })
    }

    function h(a, d, e, f, g, h, i, j, l, m, o, p) {
        if (a !== c && d !== c && e !== c && f !== c && g !== c && h !== c && i !== c && j !== c && l !== c) {
            var q = function() {
                    if (m !== c && 0 != m) {
                        var d, e, f = b(".jcrop-holder > div", a.parent()).height(),
                            g = b(".jcrop-holder > div", a.parent()).width();
                        d = g > f ? f / l : g / l, e = d * m, b("<div/>").addClass("lab-product-bleed").css("height", f).css("width", g).css("border-width", e).insertAfter(b(".jcrop-holder > div img", a.parent()))
                    }
                },
                r = {
                    gColor: "white",
                    bgOpacity: .5,
                    setSelect: [f, g, h, i],
                    allowSelect: !1,
                    allowResize: !1,
                    allowMove: o,
                    trueSize: [d, e]
                };
            o === !1 ? r.boxHeight = a.height() : "undefined" != typeof k.isMobile && 1 === k.isMobile && (r.boxHeight = 180), setTimeout(function() {
                a.Jcrop(r, function() {
                    n = this, q(), "function" == typeof p && p()
                })
            }, 10)
        }
    }

    function i(a, d, e, f, g, h) {
        var i, j = a,
            k = d,
            l = e;
        if (f !== c || g !== c) {
            i = k > l ? g / f : f / g, j.Jcrop({
                bgColor: "white",
                bgOpacity: .5,
                setSelect: [0, 0, k, l],
                aspectRatio: i,
                allowSelect: !1,
                allowResize: !1,
                allowMove: !1,
                boxHeight: j.height(),
                trueSize: [k, l]
            }, function() {
                n = this
            });
            var m = n.tellSelect(),
                o = m.w,
                p = m.h,
                q = k / 2 - o / 2,
                r = l / 2 - p / 2,
                s = q + o,
                t = r + p;
            if (n.setSelect([q, r, s, t]), b(".lab-product-bleed").remove(), h !== c && 0 != h) {
                var u = b(".jcrop-holder > div").height(),
                    v = b(".jcrop-holder > div").width(),
                    w = v / f,
                    x = w * h;
                b("<div/>").addClass("lab-product-bleed").css("height", u).css("width", v).css("border-width", x).insertAfter(b(".jcrop-holder > div img"))
            }
            return n.tellSelect()
        }
        var y = j.data("Jcrop");
        y && y.destroy()
    }

    function j() {
        b(document).on("click", "a.adjust-crop-btn", function(a) {
            a.preventDefault(); {
                var c = b(this).data("photo"),
                    d = b(this).data("product"),
                    e = b(this).data("cartpackage"),
                    f = b(this).data("cartitem");
                b(".cart-summary-modal .mfp-white-popup")
            }
            b.ajax({
                url: "/store/cart/crop/",
                type: "GET",
                data: {
                    cid: k.collectionId,
                    p: c,
                    pid: d,
                    cpi: e,
                    cii: f
                },
                success: function(a) {
                    if ("success" == a.status) {
                        PixiesetHelpers.mediator.publish("all:openModal", {
                            content: a.content
                        });
                        var c = b("#cart-crop img");
                        c.imagesLoaded(function() {
                            h(c, c.data("width"), c.data("height"), c.data("x1"), c.data("y1"), c.data("x2"), c.data("y2"), c.data("category"), c.data("labproductwidth"), c.data("labproductbleed"), !0)
                        })
                    }
                }
            })
        }), b(document).on("click", "a#set-crop-btn", function(a) {
            a.preventDefault();
            var c = b(this),
                d = n.tellSelect(),
                e = b(this).data("photo"),
                f = b(this).data("product"),
                g = b(this).data("cartpackage"),
                h = b(this).data("cartitem"),
                i = "#cart-item-" + e + "-" + f;
            b.ajax({
                url: "/store/cart/setcrop/",
                type: "POST",
                data: {
                    cid: k.collectionId,
                    p: e,
                    pid: f,
                    cpi: g,
                    cii: h,
                    crop_coords: d
                },
                beforeSend: function() {
                    c.activity({
                        segments: 8,
                        width: 2,
                        space: 0,
                        length: 3,
                        color: "#fff",
                        speed: 1.5
                    })
                },
                success: function(a) {
                    "success" == a.status ? "" != h ? PixiesetHelpers.mediator.publish("cart:openCartSummaryModal", {
                        scrollTo: ".cart-item-" + h
                    }) : PixiesetHelpers.mediator.publish("cart:openCartSummaryModal", {
                        scrollTo: i
                    }) : alert(a.content)
                }
            })
        }), b(document).on("click", ".js-cancel-crop-btn", function(a) {
            a.preventDefault();
            var c = b(this).data("photo"),
                d = b(this).data("product"),
                e = b(this).data("cartitem"),
                f = "#cart-item-" + c + "-" + d;
            "" != e ? PixiesetHelpers.mediator.publish("cart:openCartSummaryModal", {
                scrollTo: ".cart-item-" + e
            }) : PixiesetHelpers.mediator.publish("cart:openCartSummaryModal", {
                scrollTo: f
            })
        })
    }
    var k, l, m, n;
    return a.init = function(a) {
        k = b.extend({}, a), k.hasOwnProperty("username") || k.hasOwnProperty("collectionUrlKey") ? (m = k.username, l = k.collectionUrlKey) : alert("Sorry, something went wrong. Please contact support@pixieset.com"), d(), e(), f(), j(), g()
    }, a.showCustomCropOnImage = h, a
}(PixiesetClient.Cart || {}, jQuery), PixiesetClient.Download = function(a, b) {
    "use strict";

    function c() {
        b(document).ready(function() {
            b("#DownloadLoginForm_email").focus()
        })
    }

    function d() {
        if (b("#download-file .busy").length > 0) {
            b(".busy").activity(), b(".busy-message").fadeIn();
            var a = function(a) {
                b.ajax({
                    url: "/download/checkfile/filekey/" + a + "/",
                    success: function(a) {
                        return "success" == a.status ? (window.location.replace("http://" + url("hostname") + "/download/file/" + url(3) + "/?filekey=" + a.content), !0) : !1
                    }
                })
            };
            setInterval(function() {
                a(url("?filekey"))
            }, 1e4)
        }
    }

    function e() {
        1 == b("#Download_galleries input[type=checkbox]").length && b("#Download_galleries input[type=checkbox]:not([disabled]").prop("checked", !0)
    }
    var f;
    return a.init = function(a) {
        f = b.extend({}, a), c(), d(), e(), PixiesetHelpers.runJqueryPlaceholder()
    }, a
}(PixiesetClient.Download || {}, jQuery), PixiesetClient.Checkout = function(a, b) {
    "use strict";

    function c() {
        PixiesetHelpers.mediator.subscribe("all:updateAllSettings", function(a) {
            m = b.extend(m, a)
        }), PixiesetHelpers.mediator.subscribe("checkout:updateOrderSummary", function() {
            var a = b("#order-summary");
            b.ajax({
                url: "/store/checkout/getsummary/?id=" + n,
                beforeSend: function() {
                    a.addClass("loading")
                },
                success: function(c) {
                    if (a.removeClass("loading"), "success" == c.status)
                        if (b("#summary-subtotal").html(c.content.subtotal), b("#summary-tax").html(c.content.tax), b("#summary-shipping").html(c.content.shipping), b("#summary-discount").html("(" + c.content.discount + ")"), b("#summary-credit").html("(" + c.content.credit + ")"), b("#order-total span").html(c.content.total), b("#summary-tax-wrapper").removeClass("hidden"), b("#summary-tax-label").html(c.content.taxRate > 0 ? "TAX INCLUDED" : "TAX"), c.content.rawDiscount > 0 ? b("#order-summary-discount-wrapper").removeClass("hidden") : b("#order-summary-discount-wrapper").addClass("hidden"), c.content.rawCredit > 0 ? (b(".order-summary-wrapper .spacer").removeClass("hidden"), b("#order-summary-credit-wrapper").removeClass("hidden")) : (b(".order-summary-wrapper .spacer").addClass("hidden"), b("#order-summary-credit-wrapper").addClass("hidden")), (c.content.rawDiscount > 0 || c.content.rawCredit > 0) && 0 == c.content.rawTotal) b("#checkout-payment-options").addClass("hidden"), b(".cc-payment, .paypal-payment, .offline-payment").addClass("hidden"), b("#zero-balance-copy").removeClass("hidden"), b(".complete-checkout .cc-payment").removeClass("hidden"), b("#cart-terms span").text("Place Order");
                        else {
                            var d = b("#checkout-payment-options input:checked");
                            0 == d.length && (d = b('input[name="Checkout[payment_source]"]')), "offline" == d.val() ? (b(".cc-payment, .paypal-payment").addClass("hidden"), b(".offline-payment").removeClass("hidden"), b("#cart-terms span").text("Place Order")) : "paypal" == d.val() ? (b(".cc-payment, .offline-payment").addClass("hidden"), b(".paypal-payment").removeClass("hidden"), b("#cart-terms span").text("Check out with PayPal")) : (b(".paypal-payment, .offline-payment").addClass("hidden"), b(".cc-payment").removeClass("hidden"), b("#cart-terms span").text("Place Order")), b("#checkout-payment-options").removeClass("hidden"), b("#zero-balance-copy").addClass("hidden")
                        }
                }
            })
        }), PixiesetHelpers.mediator.subscribe("checkout:updateOrderSummaryItems", function() {
            var a = b("#order-summary-items");
            b.ajax({
                url: "/store/checkout/GetOrderSummaryItems/?id=" + n,
                beforeSend: function() {
                    a.addClass("loading")
                },
                success: function(b) {
                    a.removeClass("loading"), "success" == b.status && a.html(b.content)
                }
            })
        }), PixiesetHelpers.mediator.subscribe("checkout:updateShippingMethods", function(a) {
            var c = b("#Checkout_same_shipping").is(":checked") ? b("#Checkout_billing_country").val() : b("#Checkout_shipping_country").val(),
                d = b("#Checkout_same_shipping").is(":checked") ? b("#Checkout_billing_state").val() : b("#Checkout_shipping_state").val(),
                e = b("#Checkout_same_shipping").is(":checked") ? b("#Checkout_billing_address1").val() : b("#Checkout_shipping_address1").val(),
                f = b("#Checkout_same_shipping").is(":checked") ? b("#Checkout_billing_address2").val() : b("#Checkout_shipping_address2").val();
            if ("" != c && "" != e) b.ajax({
                url: "/store/checkout/getshippingtax/?id=" + n,
                type: "POST",
                data: {
                    shipping_country: c,
                    shipping_state: d,
                    shipping_address1: e,
                    shipping_address2: f
                },
                beforeSend: function() {
                    b("#shipping-methods .options").addClass("loading")
                },
                success: function(c) {
                    if ("success" == c.status && (b("#shipping-methods .options").removeClass("loading"), b("#shipping-methods .content .options").html(c.content), b("#shipping-methods .content .options i").tooltip({
                            delay: {
                                show: 200,
                                hide: 100
                            }
                        }), b('#shipping-methods input[type="radio"]:checked').focus(), j(), null != a.callbacks && a.callbacks.length > 0))
                        for (var d = 0; d < a.callbacks.length; d++) {
                            var e = a.callbacks[d];
                            "function" == typeof e && e.call()
                        }
                }
            });
            else if (null != a.callbacks && a.callbacks.length > 0)
                for (var g = 0; g < a.callbacks.length; g++) {
                    var h = a.callbacks[g];
                    "function" == typeof h && h.call()
                }
        })
    }

    function d() {
        b("#checkout-index #checkout-coupon #coupon-show-link a").on("click", function(a) {
            a.preventDefault(), b("#checkout-index #checkout-coupon #coupon-show-link").addClass("hidden"), b("#checkout-index #checkout-coupon #coupon-input").removeClass("hidden"), b("#checkout-index #checkout-coupon #coupon-input input").focus()
        }), b("#checkout-index #checkout-coupon #coupon-input input").on("keypress", function(a) {
            return 13 == a.which ? (b("#checkout-index #checkout-coupon #coupon-input button").click(), !1) : void 0
        }), b("#checkout-index #checkout-coupon #coupon-input button").on("click", function(a) {
            a.preventDefault();
            var c = b("#checkout-index #checkout-coupon #coupon-input input").val(),
                d = b("#checkout-index #checkout-coupon #coupon-input button"),
                e = b("#checkout-index #checkout-coupon #coupon-input .success"),
                f = b("#checkout-index #checkout-coupon #coupon-input .error");
            c.length > 0 && b.ajax({
                url: "/store/checkout/applycoupon/?id=" + n,
                type: "POST",
                data: {
                    coupon: c
                },
                success: function(a) {
                    d.activity(!1), d.attr("disabled", !1), b("#checkout-index #checkout-coupon #coupon-input input").val(""), "success" == a.status ? (b("#checkout-index #checkout-coupon #coupon-input > div").addClass("hidden"), f.empty(), e.html('<a href="#" id="coupon-remove-btn"><i class="fa fa-times fa-fw"></i></a>Coupon: ' + a.code + ' (<span id="coupon-off-value">' + a.discount + "</span>)"), e.removeClass("hidden"), PixiesetHelpers.mediator.publish("checkout:updateOrderSummaryItems"), PixiesetHelpers.mediator.publish("checkout:updateShippingMethods", {
                        callbacks: [function() {
                            PixiesetHelpers.mediator.publish("checkout:updateOrderSummary")
                        }]
                    })) : "" !== a.content && f.html(a.content)
                },
                beforeSend: function() {
                    d.activity({
                        segments: 12,
                        steps: 3,
                        width: 2,
                        space: 1,
                        length: 3,
                        color: "#030303",
                        speed: 1.5
                    }), d.attr("disabled", !0)
                }
            })
        }), b(document).on("click", "#checkout-index #checkout-coupon #coupon-remove-btn", function(a) {
            a.preventDefault(), b.ajax({
                url: "/store/checkout/removecoupon/?id=" + n,
                success: function(a) {
                    "success" == a.status && (b("#checkout-index #checkout-coupon #coupon-input > div").removeClass("hidden"), b("#checkout-index #checkout-coupon #coupon-input .error").empty(), b("#checkout-index #checkout-coupon #coupon-input .success").empty(), PixiesetHelpers.mediator.publish("checkout:updateOrderSummaryItems"), PixiesetHelpers.mediator.publish("checkout:updateShippingMethods", {
                        callbacks: [function() {
                            PixiesetHelpers.mediator.publish("checkout:updateOrderSummary")
                        }]
                    }))
                }
            })
        })
    }

    function e() {
        b("#checkout-index #checkout-giftcard #giftcard-show-link a").on("click", function(a) {
            a.preventDefault(), b("#checkout-index #checkout-giftcard #giftcard-show-link").addClass("hidden"), b("#checkout-index #checkout-giftcard #giftcard-input").removeClass("hidden"), b("#checkout-index #checkout-giftcard #giftcard-input input").focus()
        }), b("#checkout-index #checkout-giftcard #giftcard-input input").on("keypress", function(a) {
            return 13 == a.which ? (b("#checkout-index #checkout-giftcard #giftcard-input button").click(), !1) : void 0
        }), b("#checkout-index #checkout-giftcard #giftcard-input button").on("click", function(a) {
            a.preventDefault();
            var c = b("#checkout-index #checkout-giftcard #giftcard-input input").val(),
                d = b("#checkout-index #checkout-giftcard #giftcard-input button"),
                e = b("#checkout-index #checkout-giftcard #giftcard-input .success"),
                f = b("#checkout-index #checkout-giftcard #giftcard-input .error");
            c.length > 0 && b.ajax({
                url: "/store/checkout/applygiftcard/?id=" + n,
                type: "POST",
                data: {
                    giftcard: c
                },
                success: function(a) {
                    d.activity(!1), d.attr("disabled", !1), b("#checkout-index #checkout-giftcard #giftcard-input input").val(""), "success" == a.status ? (b("#checkout-index #checkout-giftcard #giftcard-input > div").addClass("hidden"), f.empty(), e.html('<a href="#" id="giftcard-remove-btn"><i class="fa fa-times fa-fw"></i></a>Gift Card: ' + a.code + ' (<span id="giftcard-desc">' + a.desc + "</span>)"), e.removeClass("hidden"), PixiesetHelpers.mediator.publish("checkout:updateOrderSummary"), PixiesetHelpers.mediator.publish("checkout:updateOrderSummaryItems")) : "" !== a.content && f.html(a.content)
                },
                beforeSend: function() {
                    d.activity({
                        segments: 12,
                        steps: 3,
                        width: 2,
                        space: 1,
                        length: 3,
                        color: "#030303",
                        speed: 1.5
                    }), d.attr("disabled", !0)
                }
            })
        }), b(document).on("click", "#checkout-index #checkout-giftcard #giftcard-remove-btn", function(a) {
            a.preventDefault(), b.ajax({
                url: "/store/checkout/removegiftcard/?id=" + n,
                success: function(a) {
                    "success" == a.status && (b("#checkout-index #checkout-giftcard #giftcard-input > div").removeClass("hidden"), b("#checkout-index #checkout-giftcard #giftcard-input .error").empty(), b("#checkout-index #checkout-giftcard #giftcard-input .success").empty(), PixiesetHelpers.mediator.publish("checkout:updateOrderSummary"), PixiesetHelpers.mediator.publish("checkout:updateOrderSummaryItems"))
                }
            })
        })
    }

    function f() {
        b("#note-toggle i").tooltip({
            delay: {
                show: 200,
                hide: 100
            }
        }), b("#checkout-index #note-toggle").on("click", function() {
            var a = b("#note-input"),
                c = b("#note-input textarea"),
                d = b("#checkout-index .complete-checkout"),
                e = b(this).find("i.fa-trash-o"),
                f = b(this).find("i.fa-comment-o");
            "open" == b(this).data("state") ? (a.slideUp(100, function() {
                b(this).removeAttr("style").addClass("hidden"), c.val(""), d.find("button").attr("tabindex", 22), d.removeAttr("style"), e.addClass("hidden"), f.removeClass("hidden")
            }), b(this).data("state", "closed")) : (a.removeClass("hidden"), c.focus(), d.find("button").attr("tabindex", 23), d.css("margin-top", 0), f.addClass("hidden"), e.removeClass("hidden"), b(this).data("state", "open"))
        })
    }

    function g() {
        b(document).on("change", "#Checkout_same_shipping", function() {
            var a = b(".shipping-address");
            b("#Checkout_same_shipping").is(":checked") ? (a.addClass("hidden"), b("button.address-submit").attr("tabindex", 10), b("button.address-submit").removeAttr("style")) : (a.removeClass("hidden"), b("button.address-submit").attr("tabindex", 17), b("button.address-submit").css("margin-top", 0))
        }), b(document).on("click", "button.address-submit", function(a) {
            a.preventDefault(), b("#billing-shipping-address input[type=text]").each(function() {
                b(this).val(b(this).val().trim())
            }), b.ajax({
                url: "/store/checkout/addresscheck/?id=" + n,
                type: "POST",
                data: {
                    billing_name: b("#Checkout_billing_name").val(),
                    billing_email: b("#Checkout_billing_email").val(),
                    billing_address1: b("#Checkout_billing_address1").val(),
                    billing_address2: b("#Checkout_billing_address2").val(),
                    billing_country: b("#Checkout_billing_country").val(),
                    billing_state: b("#Checkout_billing_state").val(),
                    billing_city: b("#Checkout_billing_city").val(),
                    billing_zip: b("#Checkout_billing_zip").val(),
                    same_shipping: b("#Checkout_same_shipping").is(":checked") ? 1 : 0,
                    shipping_name: b("#Checkout_shipping_name").val(),
                    shipping_address1: b("#Checkout_shipping_address1").val(),
                    shipping_address2: b("#Checkout_shipping_address2").val(),
                    shipping_country: b("#Checkout_shipping_country").val(),
                    shipping_state: b("#Checkout_shipping_state").val(),
                    shipping_city: b("#Checkout_shipping_city").val(),
                    shipping_zip: b("#Checkout_shipping_zip").val()
                },
                success: function(a) {
                    "success" == a.status ? (b(".address-error").empty(), PixiesetHelpers.mediator.publish("checkout:updateShippingMethods", {
                        callbacks: [function() {
                            PixiesetHelpers.mediator.publish("checkout:updateOrderSummary")
                        }, h()]
                    })) : b(".address-error").html(a.content)
                }
            })
        }), b(document).on("click", "a.panel-edit", function(a) {
            a.preventDefault();
            var c = b(this).data("id"),
                d = b("#" + c);
            d.removeClass("complete"), d.find("content").show(), "shipping-methods" == c ? (b("#secure-payment").addClass("inactive"), d.removeClass("complete")) : (b("#shipping-methods").addClass("inactive"), b("#shipping-methods").removeClass("complete"), b("#secure-payment").addClass("inactive"), b("#secure-payment").removeClass("complete"), d.removeClass("complete"))
        })
    }

    function h() {
        i(), b("#billing-shipping-address").addClass("complete"), b("#shipping-methods").removeClass("inactive")
    }

    function i() {
        var a, c;
        a = b("#Checkout_billing_name").val() + "<br>" + b("#Checkout_billing_email").val() + "<br>" + b("#Checkout_billing_address1").val(), "" !== b("#Checkout_billing_address2").val() && (a += "<br>" + b("#Checkout_billing_address2").val()), a += "<br>" + b("#Checkout_billing_city").val() + ", " + b("#Checkout_billing_state").val() + " " + b("#Checkout_billing_zip").val() + "<br>" + b("#Checkout_billing_country").val() + "<br>" + b("#Checkout_billing_phone").val(), b("#billing-shipping-address .selected-content .selected-billing-content").html(a), b("#Checkout_same_shipping:checked").length > 0 ? c = "Same as billing address." : (c = b("#Checkout_shipping_name").val() + "<br>" + b("#Checkout_shipping_address1").val(), "" !== b("#Checkout_shipping_address2").val() && (c += "<br>" + b("#Checkout_shipping_address2").val()), c += "<br>" + b("#Checkout_shipping_city").val() + ", " + b("#Checkout_shipping_state").val() + " " + b("#Checkout_shipping_zip").val() + "<br>" + b("#Checkout_shipping_country").val()), b("#billing-shipping-address .selected-content .selected-shipping-content").html(c)
    }

    function j() {
        var a = [],
            c = b('input[name="shipping_option"]:checked + span'),
            d = b("#additional-shipping-method");
        c.length && a.push(c.html()), d.length && a.push(d.text()), b("#shipping-methods .selected-content").html(a.join("<br>"))
    }

    function k() {
        b("#additional-shipping-method i").tooltip({
            delay: {
                show: 200,
                hide: 100
            }
        }), b(document).on("change", 'input[name="shipping_option"]', function(a) {
            a.preventDefault();
            var c = b('input[name="shipping_option"]:checked').val();
            b.ajax({
                url: "/store/checkout/changeshipping/?id=" + n,
                type: "POST",
                data: {
                    shipping_id: c
                },
                success: function(a) {
                    "success" == a.status && PixiesetHelpers.mediator.publish("checkout:updateOrderSummary")
                }
            })
        }), b(document).on("click", "button.shipping-submit", function(a) {
            a.preventDefault(), j(), b("#shipping-methods").addClass("complete"), b("#secure-payment").removeClass("inactive"), b("#secure-payment #cc-input").focus()
        })
    }

    function l() {
        var a = b("#payment-form"),
            c = a.find(".complete-checkout .cc-payment button"),
            d = b(".complete-checkout .paypal-payment input"),
            e = b("#cart-terms span"),
            f = function(e, f) {
                if (f.error) a.find(".payment-errors").text(f.error.message), a.find("[data-stripe='" + f.error.param.replace("_", "-") + "']").css("border-color", "#CD1231"), c.prop("disabled", !1), d.prop("disabled", !1), c.activity(!1), b("#checkout-index .order-submit-wait").fadeOut();
                else {
                    var g = f.id;
                    a.append(b('<input type="hidden" name="stripeToken" />').val(g)), a.get(0).submit()
                }
            };
        b(document).on("change", 'input[name="Checkout[payment_source]"]', function() {
            "cc" == this.value ? (e.text("Place Order"), b(".paypal-payment, .offline-payment").addClass("hidden"), b(".cc-payment").removeClass("hidden")) : "paypal" == this.value ? (e.text("Check out with PayPal"), b(".cc-payment, .offline-payment").addClass("hidden"), b(".paypal-payment").removeClass("hidden")) : (e.text("Place Order"), b(".cc-payment, .paypal-payment").addClass("hidden"), b(".offline-payment").removeClass("hidden"))
        }), b("#payment-form").submit(function() {
            return b("#checkout-cc-holder input[style]").removeAttr("style"), c.prop("disabled", !0), d.prop("disabled", !0), c.activity({
                segments: 12,
                steps: 3,
                width: 2,
                space: 1,
                length: 3,
                color: "#030303",
                speed: 1.5
            }), b("#checkout-index .order-submit-wait").fadeIn(), b("#checkout-cc-holder").hasClass("hidden") ? (a.append(b('<input type="hidden" name="stripeToken" />').val("123456789")), void a.get(0).submit()) : (Stripe.createToken(a, f), !1)
        })
    }
    var m, n;
    return a.init = function(a) {
        m = b.extend({}, a), m.hasOwnProperty("cartIdentifier") ? n = m.cartIdentifier : alert("Sorry, something went wrong. Please contact support@pixieset.com"), c(), d(), e(), f(), g(), k(), l(), PixiesetHelpers.runJqueryPlaceholder()
    }, a
}(PixiesetClient.Checkout || {}, jQuery), PixiesetClient.Sharing = function(a, b) {
    "use strict";

    function c() {
        PixiesetHelpers.mediator.subscribe("all:updateAllSettings", function(a) {
            e = b.extend(e, a)
        })
    }

    function d() {
        b(document).on("mouseenter", ".image-share-btn", function() {
            b(this).parent().next(".image-grid-sharelist").show()
        }), b(document).on("mouseleave", ".image-share-btn", function() {
            b(this).parent().next(".image-grid-sharelist").hide()
        }), b(document).on("mouseenter", ".image-grid-sharelist", function() {
            clearTimeout(b(this).data("timeoutId")), b(this).show()
        }), b(document).on("mouseleave", ".image-grid-sharelist", function() {
            var a = b(this),
                c = setTimeout(function() {
                    a.hide()
                }, 400);
            a.data("timeoutId", c)
        })
    }
    var e;
    return a.socialPop = function(a) {
        var b = 700,
            c = 400,
            d = parseInt(screen.availWidth / 2 - b / 2),
            e = parseInt(screen.availHeight / 2 - c / 2),
            f = "width=" + b + ",height=" + c + ",left=" + d + ",top=" + e + "screenX=" + d + ",screenY=" + e + ",status=no,menubar=no,toolbar=no,scrollbars=yes";
        return window.open(a, "share", f), !1
    }, a.init = function(a) {
        e = b.extend({}, a), c(), d()
    }, a
}(PixiesetClient.Sharing || {}, jQuery), PixiesetClient.ClientAccess = function(a, b) {
    "use strict";

    function c() {
        PixiesetHelpers.mediator.subscribe("all:updateAllSettings", function(a) {
            e = b.extend(e, a)
        }), PixiesetHelpers.mediator.subscribe("markprivatephoto:toggle", function(a) {
            var c = a,
                d = b("#grid-label-holder-" + c + " .image-markprivate-label"),
                f = b(".gamma-single-view .image-markprivate-btn"),
                g = b("li[data-id=" + c + "]");
            b.ajax({
                url: "/client/markphotoprivatetoggle/",
                type: "GET",
                data: {
                    cid: e.collectionId,
                    pid: c
                },
                success: function(a) {
                    "success" == a.status ? (1 == a.isPrivate ? (d.removeClass("hidden"), f.addClass("active"), g.data("markprivate", "1")) : (d.addClass("hidden"), f.removeClass("active"), g.data("markprivate", "")), PixiesetHelpers.mediator.publish("mobile:updatePhotoMarkPrivateStatus", a.isPrivate), PixiesetHelpers.mediator.publish("all:showFlashMessage", a.flash_content)) : alert("Something went wrong. Please reload the page and try again.")
                }
            })
        })
    }

    function d() {
        b(document).on("click", ".image-markprivate-btn", function(a) {
            a.preventDefault();
            var c = b(this).parent().attr("id").match(/\d+$/)[0],
                d = b(this);
            d.hasClass("disabled") || (PixiesetHelpers.mediator.publish("markprivatephoto:toggle", c), d.addClass("disabled"), setTimeout(function() {
                d.removeClass("disabled")
            }, 500))
        })
    }
    var e;
    return a.init = function(a) {
        e = b.extend({}, a), c(), d()
    }, a
}(PixiesetClient.ClientAccess || {}, jQuery), PixiesetClient.GalleryAssist = function(a, b) {
    "use strict";

    function c() {
        PixiesetHelpers.mediator.subscribe("all:updateAllSettings", function(a) {
            g = b.extend(g, a)
        })
    }

    function d() {
        b(".gallery-assist-video-link").magnificPopup({
            type: "iframe",
            fixedContentPos: !1
        })
    }

    function e() {
        var a = b("#gallery-assist-client-panel"),
            c = b("#gallery-assist-client-panel-overlay");
        b(document).on("click", ".gallery-assist-help-btn", function(b) {
            b.preventDefault(), PixiesetHelpers.disableBodyScroll(), a.addClass("in"), c.removeClass("hidden")
        }), b(document).on("click", ".panel-dismiss-btn", function(b) {
            b.preventDefault(), PixiesetHelpers.enableBodyScroll(), a.removeClass("in"), c.addClass("hidden")
        }), b(document).on("click", "#gallery-assist-client-panel-overlay", function(b) {
            b.preventDefault(), PixiesetHelpers.enableBodyScroll(), a.removeClass("in"), c.addClass("hidden")
        })
    }

    function f() {
        var a = b("#gallery-assist-intro-cards"),
            c = b(".gallery-assist-intro-cards-dismiss-btn"),
            d = b(".next-card", a),
            e = b(".back-card", a),
            f = b(".slide-dismiss", a);
        if (a.length > 0) {
            PixiesetHelpers.disableBodyScroll(), b(".cards-slider", a).royalSlider({
                sliderDrag: !1,
                sliderTouch: !0,
                keyboardNavEnabled: !0,
                controlNavigation: "bullets",
                arrowsNav: !0,
                slidesSpacing: 4,
                transitionSpeed: 300,
                navigateByClick: !1,
                arrowsNavAutoHide: !1,
                arrowsNavHideOnTouch: !0,
                numImagesToPreload: !1
            });
            var g = b(".cards-slider", a).data("royalSlider");
            d.on("click", function(a) {
                a.preventDefault(), g.next()
            }), e.on("click", function(a) {
                a.preventDefault(), g.prev()
            });
            var h = g.numSlides;
            1 == h ? (e.addClass("hidden"), d.addClass("hidden"), f.removeClass("hidden"), b(".rsNav.rsBullets").addClass("hidden")) : g.ev.on("rsBeforeAnimStart", function() {
                0 == g.currSlideId ? (e.addClass("hidden"), d.removeClass("hidden"), f.addClass("hidden")) : g.currSlideId == h - 1 ? (e.removeClass("hidden"), d.addClass("hidden"), f.removeClass("hidden")) : (e.removeClass("hidden"), d.removeClass("hidden"), f.addClass("hidden"))
            }), c.on("click", function(b) {
                b.preventDefault(), a.fadeOut("fast"), PixiesetHelpers.enableBodyScroll(), g.destroy(), d.off(), e.off()
            })
        }
    }
    var g;
    return a.init = function(a) {
        g = b.extend({}, a), c(), d(), e(), f()
    }, a
}(PixiesetClient.GalleryAssist || {}, jQuery), PixiesetClient.FavoriteNote = function(a, b) {
    "use strict";

    function c() {
        PixiesetHelpers.mediator.subscribe("all:updateAllSettings", function(a) {
            e = b.extend(e, a)
        }), PixiesetHelpers.mediator.subscribe("favoritenote:submit", function(a) {
            var c = a.photoId,
                d = a.note,
                h = null !== d ? {
                    note: d
                } : {},
                i = a.noteBtn,
                l = (i.parent(), i.find(".action")),
                n = b("li[data-id=" + c + "]");
            b.ajax({
                url: "/favorite/clientnote/fid/" + e.favKey + "/pid/" + c + "/",
                type: "POST",
                data: h,
                success: function(a) {
                    if ("success" == a.status) {
                        var d = a.content.hasNote;
                        if (n.data("note", d), d) {
                            if (i.removeClass(k).addClass(j), i.popover("destroy"), i.attr("id") === m) {
                                l.html(f);
                                var h = b("#grid-note-holder-" + c).children().first();
                                h.removeClass(k).addClass(j).find(".action").html(""), h.parent().addClass("visible")
                            } else l.html("");
                            ("undefined" != typeof e.isMobile && 1 === e.isMobile || "undefined" != typeof e.isTablet && 1 === e.isTablet) && b("#note-label-span-" + c).removeClass("hidden")
                        } else {
                            if (i.addClass(k), i.popover("destroy"), setTimeout(function() {
                                    l.html(g), i.removeClass(j)
                                }, 150), i.attr("id") === m) {
                                var h = b("#grid-note-holder-" + c).children().first();
                                h.removeClass(j).addClass(k).find(".action").html(g), h.parent().removeClass("visible fade-in")
                            }("undefined" != typeof e.isMobile && 1 === e.isMobile || "undefined" != typeof e.isTablet && 1 === e.isTablet) && b("#note-label-span-" + c).addClass("hidden")
                        }
                        PixiesetHelpers.mediator.publish("mobile:updatePhotoFavoriteNoteStatus", d), PixiesetHelpers.mediator.publish("all:showFlashMessage", a.content.flash_content)
                    } else alert("Something went wrong. Please reload the page and try again.")
                },
                error: function() {
                    alert("Something went wrong. Please reload the page and try again.")
                }
            })
        })
    }

    function d() {
        b(document).popover(n).on("show.bs.popover", function(a) {
            var c = a.target;
            b(".note-btn").not(c).each(function() {
                var a = b(this);
                a.popover("destroy"), a.off("click.noteChanged").on("click.noteChanged", function(a) {
                    return b(document).data("noteChanged") && !confirm(i) ? void a.stopPropagation() : void b(this).off("click.noteChanged")
                })
            })
        }).on("shown.bs.popover", ".note-btn", function() {
            var a = b(this),
                c = a.parent(),
                d = a.next().find(".note-form"),
                f = d.find(".fa-spinner"),
                g = d.find("textarea"),
                k = d.find(".delete-note"),
                m = d.find(".cancel-note"),
                n = d.find(".submit-note"),
                o = c.attr("id").match(/\d+$/)[0];
            a.hasClass(l) && (c.addClass("visible"), c.parent().addClass("active")), a.hasClass(j) ? (n.addClass("pointer-events-none"), g.attr("disabled", "disabled").attr("placeholder", null), f.removeClass("hide"), b.ajax({
                url: "/favorite/clientnote/fid/" + e.favKey + "/pid/" + o + "/",
                type: "GET",
                success: function(b) {
                    "success" === b.status ? (null !== b.content && "" !== b.content ? (k.removeClass("hidden"), g.val(b.content)) : g.attr("placeholder", h), g.attr("disabled", !1), f.addClass("hide"), a.hasClass("mobile-note") || g.focus(), n.removeClass("pointer-events-none")) : alert("Something went wrong. Please reload the page and try again.")
                },
                error: function() {
                    alert("Something went wrong. Please reload the page and try again.")
                }
            })) : a.hasClass("mobile-note") || g.focus(), n.on("click", function(b) {
                b.preventDefault(), PixiesetHelpers.mediator.publish("favoritenote:submit", {
                    photoId: o,
                    note: g.val().trim(),
                    noteBtn: a
                })
            }), k.on("click", function(b) {
                b.preventDefault(), PixiesetHelpers.mediator.publish("favoritenote:submit", {
                    photoId: o,
                    note: null,
                    noteBtn: a
                })
            }), m.on("click", function(b) {
                b.preventDefault(), a.popover("destroy")
            }), g.on("change paste cut", function() {
                b(document).data("noteChanged", !0)
            }), b(document).on("click.noteChanged", function(c) {
                var d = b(".favorite-popover"),
                    e = b(c.target);
                if (d.length && !(e.hasClass("favorite-popover") || e.parents(".favorite-popover").length || e.hasClass("note-btn") || e.parents(".note-btn").length)) {
                    if (b(document).data("noteChanged") && !confirm(i)) return;
                    a.popover("destroy")
                }
            })
        }).on("hide.bs.popover", ".note-btn", function() {
            b(document).data("noteChanged", !1), b(document).off("click.noteChanged");
            var a = b(this);
            a.hasClass(l) && (a.hasClass(k) && a.parent().removeClass("visible fade-in"), a.parent().next().removeClass("fade-in"), a.parent().parent().removeClass("active"))
        }), b(document).on("click.gamma", "li img", a.closeAllNotePopovers)
    }
    var e, f = "View Note",
        g = "Add Note",
        h = "Type your note here",
        i = "Changes have not been saved.\n\nPress OK to discard changes or Cancel to continue editing.",
        j = "image-note-view",
        k = "image-note-btn",
        l = "grid-action-btn",
        m = "sv-note-btn",
        n = {
            offset: 10,
            html: !0,
            trigger: "click",
            placement: "bottom",
            selector: ".note-btn",
            template: '<div class="popover favorite-popover"><div class="arrow"></div><div class="popover-inner"><h3 class="popover-title"></h3><div class="popover-content"><p></p></div></div></div>',
            content: '<form class="note-form" action="/favorite/clientnote/"><i class="fa-li fa fa-spinner fa-spin hide"></i><textarea placeholder="' + h + '" name="note" tabindex="10"></textarea><a href="#" class="delete-note popover-btn pull-left hidden" tabindex="13"><i class="fa fa-trash-o"></i></a><div class="pull-right"><a href="#" class="cancel-note popover-btn" tabindex="12">CANCEL</a><a href="#" class="submit-note popover-btn client-btn" tabindex="11">SAVE</a></div></form>'
        };
    return a.closeAllNotePopovers = function() {
        b(".favorite-popover").length > 0 && b(".favorite-popover").each(function() {
            b(this).prev().popover("destroy")
        })
    }, a.init = function(a) {
        e = b.extend({}, a), c(), d()
    }, a
}(PixiesetClient.FavoriteNote || {}, jQuery);
