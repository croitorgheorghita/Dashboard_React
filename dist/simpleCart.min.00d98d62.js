// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"js/simpleCart.min.js":[function(require,module,exports) {
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

(function (p, f) {
  var s = "string",
      k = function k(e, f) {
    return _typeof(e) === f;
  },
      e = function e(_e) {
    return k(_e, "undefined");
  },
      h = function h(e) {
    return k(e, "function");
  },
      y = function y(e) {
    return "object" === (typeof HTMLElement === "undefined" ? "undefined" : _typeof(HTMLElement)) ? e instanceof HTMLElement : "object" === _typeof(e) && 1 === e.nodeType && "string" === typeof e.nodeName;
  },
      C = function C(q) {
    function E(a) {
      return b.extend({
        attr: "",
        label: "",
        view: "attr",
        text: "",
        className: "",
        hide: !1
      }, a || {});
    }

    function F() {
      if (!b.isReady) {
        try {
          f.documentElement.doScroll("left");
        } catch (a) {
          setTimeout(F, 1);
          return;
        }

        b.init();
      }
    }

    var t = {
      MooTools: "$$",
      Prototype: "$$",
      jQuery: "*"
    },
        n = 0,
        r = {},
        x = q || "simpleCart",
        z = {};
    q = {};
    q = {};

    var v = p.localStorage,
        l = p.console || {
      msgs: [],
      log: function log(a) {
        l.msgs.push(a);
      }
    },
        D = {
      USD: {
        code: "USD",
        symbol: "&#36;",
        name: "US Dollar"
      },
      AUD: {
        code: "AUD",
        symbol: "&#36;",
        name: "Australian Dollar"
      },
      BRL: {
        code: "BRL",
        symbol: "R&#36;",
        name: "Brazilian Real"
      },
      CAD: {
        code: "CAD",
        symbol: "&#36;",
        name: "Canadian Dollar"
      },
      CZK: {
        code: "CZK",
        symbol: "&nbsp;&#75;&#269;",
        name: "Czech Koruna",
        after: !0
      },
      DKK: {
        code: "DKK",
        symbol: "DKK&nbsp;",
        name: "Danish Krone"
      },
      EUR: {
        code: "EUR",
        symbol: "&euro;",
        name: "Euro"
      },
      HKD: {
        code: "HKD",
        symbol: "&#36;",
        name: "Hong Kong Dollar"
      },
      HUF: {
        code: "HUF",
        symbol: "&#70;&#116;",
        name: "Hungarian Forint"
      },
      ILS: {
        code: "ILS",
        symbol: "&#8362;",
        name: "Israeli New Sheqel"
      },
      JPY: {
        code: "JPY",
        symbol: "&yen;",
        name: "Japanese Yen",
        accuracy: 0
      },
      MXN: {
        code: "MXN",
        symbol: "&#36;",
        name: "Mexican Peso"
      },
      NOK: {
        code: "NOK",
        symbol: "NOK&nbsp;",
        name: "Norwegian Krone"
      },
      NZD: {
        code: "NZD",
        symbol: "&#36;",
        name: "New Zealand Dollar"
      },
      PLN: {
        code: "PLN",
        symbol: "PLN&nbsp;",
        name: "Polish Zloty"
      },
      GBP: {
        code: "GBP",
        symbol: "&pound;",
        name: "Pound Sterling"
      },
      SGD: {
        code: "SGD",
        symbol: "&#36;",
        name: "Singapore Dollar"
      },
      SEK: {
        code: "SEK",
        symbol: "SEK&nbsp;",
        name: "Swedish Krona"
      },
      CHF: {
        code: "CHF",
        symbol: "CHF&nbsp;",
        name: "Swiss Franc"
      },
      THB: {
        code: "THB",
        symbol: "&#3647;",
        name: "Thai Baht"
      },
      BTC: {
        code: "BTC",
        symbol: " BTC",
        name: "Bitcoin",
        accuracy: 4,
        after: !0
      }
    },
        m = {
      checkout: {
        type: "PayPal",
        email: "you@yours.com"
      },
      currency: "USD",
      language: "english-us",
      cartStyle: "div",
      cartColumns: [{
        attr: "name",
        label: "Name"
      }, {
        attr: "price",
        label: "Price",
        view: "currency"
      }, {
        view: "decrement",
        label: !1
      }, {
        attr: "quantity",
        label: "Qty"
      }, {
        view: "increment",
        label: !1
      }, {
        attr: "total",
        label: "SubTotal",
        view: "currency"
      }, {
        view: "remove",
        text: "Remove",
        label: !1
      }],
      excludeFromCheckout: ["thumb"],
      shippingFlatRate: 0,
      shippingQuantityRate: 0,
      shippingTotalRate: 0,
      shippingCustom: null,
      taxRate: 0,
      taxShipping: !1,
      data: {}
    },
        b = function b(a) {
      if (h(a)) return b.ready(a);
      if (k(a, "object")) return b.extend(m, a);
    },
        A,
        B;

    b.extend = function (a, d) {
      var c;
      e(d) && (d = a, a = b);

      for (c in d) {
        Object.prototype.hasOwnProperty.call(d, c) && (a[c] = d[c]);
      }

      return a;
    };

    b.extend({
      copy: function copy(a) {
        a = C(a);
        a.init();
        return a;
      }
    });
    b.extend({
      isReady: !1,
      add: function add(a, d) {
        var c = new b.Item(a || {}),
            g = !0,
            u = !0 === d ? d : !1;
        if (!u && (g = b.trigger("beforeAdd", [c]), !1 === g)) return !1;
        (g = b.has(c)) ? (g.increment(c.quantity()), c = g) : r[c.id()] = c;
        b.update();
        u || b.trigger("afterAdd", [c, e(g)]);
        return c;
      },
      each: function each(a, d) {
        var c,
            g = 0,
            u,
            e,
            w;
        if (h(a)) e = a, w = r;else if (h(d)) e = d, w = a;else return;

        for (c in w) {
          if (Object.prototype.hasOwnProperty.call(w, c)) {
            u = e.call(b, w[c], g, c);
            if (!1 === u) break;
            g += 1;
          }
        }
      },
      find: function find(a) {
        var d = [];
        if (k(r[a], "object")) return r[a];
        if (k(a, "object")) return b.each(function (c) {
          var g = !0;
          b.each(a, function (a, b, d) {
            k(a, s) ? a.match(/<=.*/) ? (a = parseFloat(a.replace("<=", "")), c.get(d) && parseFloat(c.get(d)) <= a || (g = !1)) : a.match(/</) ? (a = parseFloat(a.replace("<", "")), c.get(d) && parseFloat(c.get(d)) < a || (g = !1)) : a.match(/>=/) ? (a = parseFloat(a.replace(">=", "")), c.get(d) && parseFloat(c.get(d)) >= a || (g = !1)) : a.match(/>/) ? (a = parseFloat(a.replace(">", "")), c.get(d) && parseFloat(c.get(d)) > a || (g = !1)) : c.get(d) && c.get(d) === a || (g = !1) : c.get(d) && c.get(d) === a || (g = !1);
            return g;
          });
          g && d.push(c);
        }), d;
        e(a) && b.each(function (a) {
          d.push(a);
        });
        return d;
      },
      items: function items() {
        return this.find();
      },
      has: function has(a) {
        var d = !1;
        b.each(function (b) {
          b.equals(a) && (d = b);
        });
        return d;
      },
      empty: function empty() {
        var a = {};
        b.each(function (b) {
          !1 === b.remove(!0) && (a[b.id()] = b);
        });
        r = a;
        b.update();
      },
      quantity: function quantity() {
        var a = 0;
        b.each(function (b) {
          a += b.quantity();
        });
        return a;
      },
      total: function total() {
        var a = 0;
        b.each(function (b) {
          a += b.total();
        });
        return a;
      },
      grandTotal: function grandTotal() {
        return b.total() + b.tax() + b.shipping();
      },
      update: function update() {
        b.save();
        b.trigger("update");
      },
      init: function init() {
        b.load();
        b.update();
        b.ready();
      },
      $: function $(a) {
        return new b.ELEMENT(a);
      },
      $create: function $create(a) {
        return b.$(f.createElement(a));
      },
      setupViewTool: function setupViewTool() {
        var a,
            d = p,
            c;

        for (c in t) {
          if (Object.prototype.hasOwnProperty.call(t, c) && p[c] && (a = t[c].replace("*", c).split("."), (a = a.shift()) && (d = d[a]), "function" === typeof d)) {
            A = d;
            b.extend(b.ELEMENT._, z[c]);
            break;
          }
        }
      },
      ids: function ids() {
        var a = [];
        b.each(function (b) {
          a.push(b.id());
        });
        return a;
      },
      save: function save() {
        b.trigger("beforeSave");
        var a = {};
        b.each(function (d) {
          a[d.id()] = b.extend(d.fields(), d.options());
        });
        v.setItem(x + "_items", JSON.stringify(a));
        b.trigger("afterSave");
      },
      load: function load() {
        r = {};
        var a = v.getItem(x + "_items");

        if (a) {
          try {
            b.each(JSON.parse(a), function (a) {
              b.add(a, !0);
            });
          } catch (d) {
            b.error("Error Loading data: " + d);
          }

          b.trigger("load");
        }
      },
      ready: function ready(a) {
        h(a) ? b.isReady ? a.call(b) : b.bind("ready", a) : e(a) && !b.isReady && (b.trigger("ready"), b.isReady = !0);
      },
      error: function error(a) {
        var d = "";
        k(a, s) ? d = a : k(a, "object") && k(a.message, s) && (d = a.message);

        try {
          l.log("simpleCart(js) Error: " + d);
        } catch (c) {}

        b.trigger("error", a);
      }
    });
    b.extend({
      tax: function tax() {
        var a = m.taxShipping ? b.total() + b.shipping() : b.total(),
            d = b.taxRate() * a;
        b.each(function (a) {
          a.get("tax") ? d += a.get("tax") : a.get("taxRate") && (d += a.get("taxRate") * a.total());
        });
        return parseFloat(d);
      },
      taxRate: function taxRate() {
        return m.taxRate || 0;
      },
      shipping: function shipping(a) {
        if (h(a)) b({
          shippingCustom: a
        });else {
          var d = m.shippingQuantityRate * b.quantity() + m.shippingTotalRate * b.total() + m.shippingFlatRate;
          h(m.shippingCustom) && (d += m.shippingCustom.call(b));
          b.each(function (a) {
            d += parseFloat(a.get("shipping") || 0);
          });
          return parseFloat(d);
        }
      }
    });
    B = {
      attr: function attr(a, b) {
        return a.get(b.attr) || "";
      },
      currency: function currency(a, d) {
        return b.toCurrency(a.get(d.attr) || 0);
      },
      link: function link(a, b) {
        return "<a href='" + a.get(b.attr) + "'>" + b.text + "</a>";
      },
      decrement: function decrement(a, b) {
        return "<a href='javascript:;' class='" + x + "_decrement'>" + (b.text || "-") + "</a>";
      },
      increment: function increment(a, b) {
        return "<a href='javascript:;' class='" + x + "_increment'>" + (b.text || "+") + "</a>";
      },
      image: function image(a, b) {
        return "<img src='" + a.get(b.attr) + "'/>";
      },
      input: function input(a, b) {
        return "<input type='text' value='" + a.get(b.attr) + "' class='" + x + "_input'/>";
      },
      remove: function remove(a, b) {
        return "<a href='javascript:;' class='" + x + "_remove'>" + (b.text || "X") + "</a>";
      }
    };
    b.extend({
      writeCart: function writeCart(a) {
        var d = m.cartStyle.toLowerCase(),
            c = "table" === d,
            g = c ? "tr" : "div",
            u = c ? "th" : "div",
            e = c ? "td" : "div",
            w = b.$create(d),
            d = b.$create(g).addClass("headerRow"),
            f,
            h;
        b.$(a).html(" ").append(w);
        w.append(d);
        c = 0;

        for (h = m.cartColumns.length; c < h; c += 1) {
          f = E(m.cartColumns[c]), a = "item-" + (f.attr || f.view || f.label || f.text || "cell") + " " + f.className, f = f.label || "", d.append(b.$create(u).addClass(a).html(f));
        }

        b.each(function (a, d) {
          b.createCartRow(a, d, g, e, w);
        });
        return w;
      },
      createCartRow: function createCartRow(a, d, c, g, u) {
        d = b.$create(c).addClass("itemRow row-" + d + " " + (d % 2 ? "even" : "odd")).attr("id", "cartItem_" + a.id());
        var e, f, l;
        u.append(d);
        u = 0;

        for (c = m.cartColumns.length; u < c; u += 1) {
          e = E(m.cartColumns[u]), f = "item-" + (e.attr || (k(e.view, s) ? e.view : e.label || e.text || "cell")) + " " + e.className, l = a, l = (h(e.view) ? e.view : k(e.view, s) && h(B[e.view]) ? B[e.view] : B.attr).call(b, l, e), f = b.$create(g).addClass(f).html(l), d.append(f);
        }

        return d;
      }
    });

    b.Item = function (a) {
      function d() {
        k(c.price, s) && (c.price = parseFloat(c.price.replace(b.currency().decimal, ".").replace(/[^0-9\.]+/ig, "")));
        isNaN(c.price) && (c.price = 0);
        0 > c.price && (c.price = 0);
        k(c.quantity, s) && (c.quantity = parseInt(c.quantity.replace(b.currency().delimiter, ""), 10));
        isNaN(c.quantity) && (c.quantity = 1);
        0 >= c.quantity && g.remove();
      }

      var c = {},
          g = this;
      k(a, "object") && b.extend(c, a);
      n += 1;

      for (c.id = c.id || "SCI-" + n; !e(r[c.id]);) {
        n += 1, c.id = "SCI-" + n;
      }

      g.get = function (a, b) {
        var d = !b;
        return e(a) ? a : h(c[a]) ? c[a].call(g) : e(c[a]) ? h(g[a]) && d ? g[a].call(g) : !e(g[a]) && d ? g[a] : c[a] : c[a];
      };

      g.set = function (a, b) {
        e(a) || (c[a.toLowerCase()] = b, "price" !== a.toLowerCase() && "quantity" !== a.toLowerCase() || d());
        return g;
      };

      g.equals = function (a) {
        for (var b in c) {
          if (Object.prototype.hasOwnProperty.call(c, b) && "quantity" !== b && "id" !== b && a.get(b) !== c[b]) return !1;
        }

        return !0;
      };

      g.options = function () {
        var a = {};
        b.each(c, function (d, c, e) {
          var f = !0;
          b.each(g.reservedFields(), function (a) {
            a === e && (f = !1);
            return f;
          });
          f && (a[e] = g.get(e));
        });
        return a;
      };

      d();
    };

    b.Item._ = b.Item.prototype = {
      increment: function increment(a) {
        a = parseInt(a || 1, 10);
        this.quantity(this.quantity() + a);
        return 1 > this.quantity() ? (this.remove(), null) : this;
      },
      decrement: function decrement(a) {
        return this.increment(-parseInt(a || 1, 10));
      },
      remove: function remove(a) {
        if (!1 === b.trigger("beforeRemove", [r[this.id()]])) return !1;
        delete r[this.id()];
        a || b.update();
        return null;
      },
      reservedFields: function reservedFields() {
        return "quantity id item_number price name shipping tax taxRate".split(" ");
      },
      fields: function fields() {
        var a = {},
            d = this;
        b.each(d.reservedFields(), function (b) {
          d.get(b) && (a[b] = d.get(b));
        });
        return a;
      },
      quantity: function quantity(a) {
        return e(a) ? parseInt(this.get("quantity", !0) || 1, 10) : this.set("quantity", a);
      },
      price: function price(a) {
        return e(a) ? parseFloat(this.get("price", !0).toString().replace(b.currency().symbol, "").replace(b.currency().delimiter, "") || 1) : this.set("price", parseFloat(a.toString().replace(b.currency().symbol, "").replace(b.currency().delimiter, "")));
      },
      id: function id() {
        return this.get("id", !1);
      },
      total: function total() {
        return this.quantity() * this.price();
      }
    };
    b.extend({
      checkout: function checkout() {
        if ("custom" === m.checkout.type.toLowerCase() && h(m.checkout.fn)) m.checkout.fn.call(b, m.checkout);else if (h(b.checkout[m.checkout.type])) {
          var a = b.checkout[m.checkout.type].call(b, m.checkout);
          a.data && a.action && a.method && !1 !== b.trigger("beforeCheckout", [a.data]) && b.generateAndSendForm(a);
        } else b.error("No Valid Checkout Method Specified");
      },
      extendCheckout: function extendCheckout(a) {
        return b.extend(b.checkout, a);
      },
      generateAndSendForm: function generateAndSendForm(a) {
        var d = b.$create("form");
        d.attr("style", "display:none;");
        d.attr("action", a.action);
        d.attr("method", a.method);
        b.each(a.data, function (a, g, e) {
          d.append(b.$create("input").attr("type", "hidden").attr("name", e).val(a));
        });
        b.$("body").append(d);
        d.el.submit();
        d.remove();
      }
    });
    b.extendCheckout({
      PayPal: function PayPal(a) {
        if (!a.email) return b.error("No email provided for PayPal checkout");
        var d = {
          cmd: "_cart",
          upload: "1",
          currency_code: b.currency().code,
          business: a.email,
          rm: "GET" === a.method ? "0" : "2",
          tax_cart: (1 * b.tax()).toFixed(2),
          handling_cart: (1 * b.shipping()).toFixed(2),
          charset: "utf-8"
        },
            c = a.sandbox ? "https://www.sandbox.paypal.com/cgi-bin/webscr" : "https://www.paypal.com/cgi-bin/webscr",
            g = "GET" === a.method ? "GET" : "POST";
        a.success && (d["return"] = a.success);
        a.cancel && (d.cancel_return = a.cancel);
        a.notify && (d.notify_url = a.notify);
        b.each(function (a, c) {
          var g = c + 1,
              e = a.options(),
              f = 0,
              h;
          d["item_name_" + g] = a.get("name");
          d["quantity_" + g] = a.quantity();
          d["amount_" + g] = (1 * a.price()).toFixed(2);
          d["item_number_" + g] = a.get("item_number") || g;
          b.each(e, function (a, c, e) {
            10 > c && (h = !0, b.each(m.excludeFromCheckout, function (a) {
              a === e && (h = !1);
            }), h && (f += 1, d["on" + c + "_" + g] = e, d["os" + c + "_" + g] = a));
          });
          d["option_index_" + c] = Math.min(10, f);
        });
        return {
          action: c,
          method: g,
          data: d
        };
      },
      GoogleCheckout: function GoogleCheckout(a) {
        if (!a.merchantID) return b.error("No merchant id provided for GoogleCheckout");
        if ("USD" !== b.currency().code && "GBP" !== b.currency().code) return b.error("Google Checkout only accepts USD and GBP");
        var d = {
          ship_method_name_1: "Shipping",
          ship_method_price_1: b.shipping(),
          ship_method_currency_1: b.currency().code,
          _charset_: ""
        },
            c = "https://checkout.google.com/api/checkout/v2/checkoutForm/Merchant/" + a.merchantID;
        a = "GET" === a.method ? "GET" : "POST";
        b.each(function (a, c) {
          var e = c + 1,
              f = [],
              h;
          d["item_name_" + e] = a.get("name");
          d["item_quantity_" + e] = a.quantity();
          d["item_price_" + e] = a.price();
          d["item_currency_ " + e] = b.currency().code;
          d["item_tax_rate" + e] = a.get("taxRate") || b.taxRate();
          b.each(a.options(), function (a, d, c) {
            h = !0;
            b.each(m.excludeFromCheckout, function (a) {
              a === c && (h = !1);
            });
            h && f.push(c + ": " + a);
          });
          d["item_description_" + e] = f.join(", ");
        });
        return {
          action: c,
          method: a,
          data: d
        };
      },
      AmazonPayments: function AmazonPayments(a) {
        if (!a.merchant_signature) return b.error("No merchant signature provided for Amazon Payments");
        if (!a.merchant_id) return b.error("No merchant id provided for Amazon Payments");
        if (!a.aws_access_key_id) return b.error("No AWS access key id provided for Amazon Payments");
        var d = {
          aws_access_key_id: a.aws_access_key_id,
          merchant_signature: a.merchant_signature,
          currency_code: b.currency().code,
          tax_rate: b.taxRate(),
          weight_unit: a.weight_unit || "lb"
        },
            c = "https://payments" + (a.sandbox ? "-sandbox" : "") + ".amazon.com/checkout/" + a.merchant_id,
            g = "GET" === a.method ? "GET" : "POST";
        b.each(function (c, g) {
          var e = g + 1,
              f = [];
          d["item_title_" + e] = c.get("name");
          d["item_quantity_" + e] = c.quantity();
          d["item_price_" + e] = c.price();
          d["item_sku_ " + e] = c.get("sku") || c.id();
          d["item_merchant_id_" + e] = a.merchant_id;
          c.get("weight") && (d["item_weight_" + e] = c.get("weight"));
          m.shippingQuantityRate && (d["shipping_method_price_per_unit_rate_" + e] = m.shippingQuantityRate);
          b.each(c.options(), function (a, d, c) {
            var g = !0;
            b.each(m.excludeFromCheckout, function (a) {
              a === c && (g = !1);
            });
            g && "weight" !== c && "tax" !== c && f.push(c + ": " + a);
          });
          d["item_description_" + e] = f.join(", ");
        });
        return {
          action: c,
          method: g,
          data: d
        };
      },
      SendForm: function SendForm(a) {
        if (!a.url) return b.error("URL required for SendForm Checkout");
        var d = {
          currency: b.currency().code,
          shipping: b.shipping(),
          tax: b.tax(),
          taxRate: b.taxRate(),
          itemCount: b.find({}).length
        },
            c = a.url,
            g = "GET" === a.method ? "GET" : "POST";
        b.each(function (a, c) {
          var g = c + 1,
              e = [],
              f;
          d["item_name_" + g] = a.get("name");
          d["item_quantity_" + g] = a.quantity();
          d["item_price_" + g] = a.price();
          b.each(a.options(), function (a, d, c) {
            f = !0;
            b.each(m.excludeFromCheckout, function (a) {
              a === c && (f = !1);
            });
            f && e.push(c + ": " + a);
          });
          d["item_options_" + g] = e.join(", ");
        });
        a.success && (d["return"] = a.success);
        a.cancel && (d.cancel_return = a.cancel);
        a.extra_data && (d = b.extend(d, a.extra_data));
        return {
          action: c,
          method: g,
          data: d
        };
      }
    });
    q = {
      bind: function bind(a, d) {
        if (!h(d)) return this;
        this._events || (this._events = {});
        var c = a.split(/ +/);
        b.each(c, function (a) {
          !0 === this._events[a] ? d.apply(this) : e(this._events[a]) ? this._events[a] = [d] : this._events[a].push(d);
        });
        return this;
      },
      trigger: function trigger(a, b) {
        var c = !0,
            g,
            f;
        this._events || (this._events = {});
        if (!e(this._events[a]) && h(this._events[a][0])) for (g = 0, f = this._events[a].length; g < f; g += 1) {
          c = this._events[a][g].apply(this, b || []);
        }
        return !1 === c ? !1 : !0;
      }
    };
    q.on = q.bind;
    b.extend(q);
    b.extend(b.Item._, q);
    q = {
      beforeAdd: null,
      afterAdd: null,
      load: null,
      beforeSave: null,
      afterSave: null,
      update: null,
      ready: null,
      checkoutSuccess: null,
      checkoutFail: null,
      beforeCheckout: null,
      beforeRemove: null
    };
    b(q);
    b.each(q, function (a, d, c) {
      b.bind(c, function () {
        h(m[c]) && m[c].apply(this, arguments);
      });
    });
    b.extend({
      toCurrency: function toCurrency(a, d) {
        var c = parseFloat(a),
            g = d || {},
            g = b.extend(b.extend({
          symbol: "$",
          decimal: ".",
          delimiter: ",",
          accuracy: 2,
          after: !1
        }, b.currency()), g),
            e = c.toFixed(g.accuracy).split("."),
            c = e[1],
            e = e[0],
            e = b.chunk(e.reverse(), 3).join(g.delimiter.reverse()).reverse();
        return (g.after ? "" : g.symbol) + e + (c ? g.decimal + c : "") + (g.after ? g.symbol : "");
      },
      chunk: function chunk(a, b) {
        "undefined" === typeof b && (b = 2);
        return a.match(RegExp(".{1," + b + "}", "g")) || [];
      }
    });

    String.prototype.reverse = function () {
      return this.split("").reverse().join("");
    };

    b.extend({
      currency: function currency(a) {
        if (k(a, s) && !e(D[a])) m.currency = a;else if (k(a, "object")) D[a.code] = a, m.currency = a.code;else return D[m.currency];
      }
    });
    b.extend({
      bindOutlets: function bindOutlets(a) {
        b.each(a, function (a, c, e) {
          b.bind("update", function () {
            b.setOutlet("." + x + "_" + e, a);
          });
        });
      },
      setOutlet: function setOutlet(a, d) {
        var c = d.call(b, a);
        k(c, "object") && c.el ? b.$(a).html(" ").append(c) : e(c) || b.$(a).html(c);
      },
      bindInputs: function bindInputs(a) {
        b.each(a, function (a) {
          b.setInput("." + x + "_" + a.selector, a.event, a.callback);
        });
      },
      setInput: function setInput(a, d, c) {
        b.$(a).live(d, c);
      }
    });

    b.ELEMENT = function (a) {
      this.create(a);
      this.selector = a || null;
    };

    b.extend(z, {
      MooTools: {
        text: function text(a) {
          return this.attr("text", a);
        },
        html: function html(a) {
          return this.attr("html", a);
        },
        val: function val(a) {
          return this.attr("value", a);
        },
        attr: function attr(a, b) {
          if (e(b)) return this.el[0] && this.el[0].get(a);
          this.el.set(a, b);
          return this;
        },
        remove: function remove() {
          this.el.dispose();
          return null;
        },
        addClass: function addClass(a) {
          this.el.addClass(a);
          return this;
        },
        removeClass: function removeClass(a) {
          this.el.removeClass(a);
          return this;
        },
        append: function append(a) {
          this.el.adopt(a.el);
          return this;
        },
        each: function each(a) {
          h(a) && b.each(this.el, function (b, c, e) {
            a.call(c, c, b, e);
          });
          return this;
        },
        click: function click(a) {
          h(a) ? this.each(function (b) {
            b.addEvent("click", function (c) {
              a.call(b, c);
            });
          }) : e(a) && this.el.fireEvent("click");
          return this;
        },
        live: function live(a, d) {
          var c = this.selector;
          h(d) && b.$("body").el.addEvent(a + ":relay(" + c + ")", function (a, b) {
            d.call(b, a);
          });
        },
        match: function match(a) {
          return this.el.match(a);
        },
        parent: function parent() {
          return b.$(this.el.getParent());
        },
        find: function find(a) {
          return b.$(this.el.getElements(a));
        },
        closest: function closest(a) {
          return b.$(this.el.getParent(a));
        },
        descendants: function descendants() {
          return this.find("*");
        },
        tag: function tag() {
          return this.el[0].tagName;
        },
        submit: function submit() {
          this.el[0].submit();
          return this;
        },
        create: function create(a) {
          this.el = A(a);
        }
      },
      Prototype: {
        text: function text(a) {
          if (e(a)) return this.el[0].innerHTML;
          this.each(function (b, c) {
            $(c).update(a);
          });
          return this;
        },
        html: function html(a) {
          return this.text(a);
        },
        val: function val(a) {
          return this.attr("value", a);
        },
        attr: function attr(a, b) {
          if (e(b)) return this.el[0].readAttribute(a);
          this.each(function (c, e) {
            $(e).writeAttribute(a, b);
          });
          return this;
        },
        append: function append(a) {
          this.each(function (b, c) {
            a.el ? a.each(function (a, b) {
              $(c).appendChild(b);
            }) : y(a) && $(c).appendChild(a);
          });
          return this;
        },
        remove: function remove() {
          this.each(function (a, b) {
            $(b).remove();
          });
          return this;
        },
        addClass: function addClass(a) {
          this.each(function (b, c) {
            $(c).addClassName(a);
          });
          return this;
        },
        removeClass: function removeClass(a) {
          this.each(function (b, c) {
            $(c).removeClassName(a);
          });
          return this;
        },
        each: function each(a) {
          h(a) && b.each(this.el, function (b, c, e) {
            a.call(c, c, b, e);
          });
          return this;
        },
        click: function click(a) {
          h(a) ? this.each(function (b, c) {
            $(c).observe("click", function (b) {
              a.call(c, b);
            });
          }) : e(a) && this.each(function (a, b) {
            $(b).fire("click");
          });
          return this;
        },
        live: function live(a, b) {
          if (h(b)) {
            var c = this.selector;
            f.observe(a, function (a, e) {
              e === A(a).findElement(c) && b.call(e, a);
            });
          }
        },
        parent: function parent() {
          return b.$(this.el.up());
        },
        find: function find(a) {
          return b.$(this.el.getElementsBySelector(a));
        },
        closest: function closest(a) {
          return b.$(this.el.up(a));
        },
        descendants: function descendants() {
          return b.$(this.el.descendants());
        },
        tag: function tag() {
          return this.el.tagName;
        },
        submit: function submit() {
          this.el[0].submit();
        },
        create: function create(a) {
          k(a, s) ? this.el = A(a) : y(a) && (this.el = [a]);
        }
      },
      jQuery: {
        passthrough: function passthrough(a, b) {
          if (e(b)) return this.el[a]();
          this.el[a](b);
          return this;
        },
        text: function text(a) {
          return this.passthrough("text", a);
        },
        html: function html(a) {
          return this.passthrough("html", a);
        },
        val: function val(a) {
          return this.passthrough("val", a);
        },
        append: function append(a) {
          this.el.append(a.el || a);
          return this;
        },
        attr: function attr(a, b) {
          if (e(b)) return this.el.attr(a);
          this.el.attr(a, b);
          return this;
        },
        remove: function remove() {
          this.el.remove();
          return this;
        },
        addClass: function addClass(a) {
          this.el.addClass(a);
          return this;
        },
        removeClass: function removeClass(a) {
          this.el.removeClass(a);
          return this;
        },
        each: function each(a) {
          return this.passthrough("each", a);
        },
        click: function click(a) {
          return this.passthrough("click", a);
        },
        live: function live(a, b) {
          A(f).delegate(this.selector, a, b);
          return this;
        },
        parent: function parent() {
          return b.$(this.el.parent());
        },
        find: function find(a) {
          return b.$(this.el.find(a));
        },
        closest: function closest(a) {
          return b.$(this.el.closest(a));
        },
        tag: function tag() {
          return this.el[0].tagName;
        },
        descendants: function descendants() {
          return b.$(this.el.find("*"));
        },
        submit: function submit() {
          return this.el.submit();
        },
        create: function create(a) {
          this.el = A(a);
        }
      }
    });
    b.ELEMENT._ = b.ELEMENT.prototype;
    b.ready(b.setupViewTool);
    b.ready(function () {
      b.bindOutlets({
        total: function total() {
          return b.toCurrency(b.total());
        },
        quantity: function quantity() {
          return b.quantity();
        },
        items: function items(a) {
          b.writeCart(a);
        },
        tax: function tax() {
          return b.toCurrency(b.tax());
        },
        taxRate: function taxRate() {
          return b.taxRate().toFixed();
        },
        shipping: function shipping() {
          return b.toCurrency(b.shipping());
        },
        grandTotal: function grandTotal() {
          return b.toCurrency(b.grandTotal());
        }
      });
      b.bindInputs([{
        selector: "checkout",
        event: "click",
        callback: function callback() {
          b.checkout();
        }
      }, {
        selector: "empty",
        event: "click",
        callback: function callback() {
          b.empty();
        }
      }, {
        selector: "increment",
        event: "click",
        callback: function callback() {
          b.find(b.$(this).closest(".itemRow").attr("id").split("_")[1]).increment();
          b.update();
        }
      }, {
        selector: "decrement",
        event: "click",
        callback: function callback() {
          b.find(b.$(this).closest(".itemRow").attr("id").split("_")[1]).decrement();
          b.update();
        }
      }, {
        selector: "remove",
        event: "click",
        callback: function callback() {
          b.find(b.$(this).closest(".itemRow").attr("id").split("_")[1]).remove();
        }
      }, {
        selector: "input",
        event: "change",
        callback: function callback() {
          var a = b.$(this),
              d = a.parent(),
              c = d.attr("class").split(" ");
          b.each(c, function (c) {
            c.match(/item-.+/i) && (c = c.split("-")[1], b.find(d.closest(".itemRow").attr("id").split("_")[1]).set(c, a.val()), b.update());
          });
        }
      }, {
        selector: "shelfItem .item_add",
        event: "click",
        callback: function callback() {
          var a = {};
          b.$(this).closest("." + x + "_shelfItem").descendants().each(function (d, c) {
            var e = b.$(c);
            e.attr("class") && e.attr("class").match(/item_.+/) && !e.attr("class").match(/item_add/) && b.each(e.attr("class").split(" "), function (b) {
              var c, d;

              if (b.match(/item_.+/)) {
                b = b.split("_")[1];
                c = "";

                switch (e.tag().toLowerCase()) {
                  case "input":
                  case "textarea":
                  case "select":
                    d = e.attr("type");
                    if (!d || ("checkbox" === d.toLowerCase() || "radio" === d.toLowerCase()) && e.attr("checked") || "text" === d.toLowerCase() || "number" === d.toLowerCase()) c = e.val();
                    break;

                  case "img":
                    c = e.attr("src");
                    break;

                  default:
                    c = e.text();
                }

                null !== c && "" !== c && (a[b.toLowerCase()] = a[b.toLowerCase()] ? a[b.toLowerCase()] + ", " + c : c);
              }
            });
          });
          b.add(a);
        }
      }]);
    });
    f.addEventListener ? p.DOMContentLoaded = function () {
      f.removeEventListener("DOMContentLoaded", DOMContentLoaded, !1);
      b.init();
    } : f.attachEvent && (p.DOMContentLoaded = function () {
      "complete" === f.readyState && (f.detachEvent("onreadystatechange", DOMContentLoaded), b.init());
    });

    (function () {
      if ("complete" === f.readyState) return setTimeout(b.init, 1);
      if (f.addEventListener) f.addEventListener("DOMContentLoaded", DOMContentLoaded, !1), p.addEventListener("load", b.init, !1);else if (f.attachEvent) {
        f.attachEvent("onreadystatechange", DOMContentLoaded);
        p.attachEvent("onload", b.init);
        var a = !1;

        try {
          a = null === p.frameElement;
        } catch (d) {}

        f.documentElement.doScroll && a && F();
      }
    })();

    return b;
  };

  p.simpleCart = C();
})(window, document);

var JSON;
JSON || (JSON = {});

(function () {
  function p(e) {
    return 10 > e ? "0" + e : e;
  }

  function f(f) {
    e.lastIndex = 0;
    return e.test(f) ? '"' + f.replace(e, function (e) {
      var f = C[e];
      return "string" === typeof f ? f : "\\u" + ("0000" + e.charCodeAt(0).toString(16)).slice(-4);
    }) + '"' : '"' + f + '"';
  }

  function s(e, k) {
    var t,
        n,
        r,
        p,
        z = h,
        v,
        l = k[e];
    l && "object" === _typeof(l) && "function" === typeof l.toJSON && (l = l.toJSON(e));
    "function" === typeof q && (l = q.call(k, e, l));

    switch (_typeof(l)) {
      case "string":
        return f(l);

      case "number":
        return isFinite(l) ? String(l) : "null";

      case "boolean":
      case "null":
        return String(l);

      case "object":
        if (!l) return "null";
        h += y;
        v = [];

        if ("[object Array]" === Object.prototype.toString.apply(l)) {
          p = l.length;

          for (t = 0; t < p; t += 1) {
            v[t] = s(t, l) || "null";
          }

          r = 0 === v.length ? "[]" : h ? "[\n" + h + v.join(",\n" + h) + "\n" + z + "]" : "[" + v.join(",") + "]";
          h = z;
          return r;
        }

        if (q && "object" === _typeof(q)) for (p = q.length, t = 0; t < p; t += 1) {
          "string" === typeof q[t] && (n = q[t], (r = s(n, l)) && v.push(f(n) + (h ? ": " : ":") + r));
        } else for (n in l) {
          Object.prototype.hasOwnProperty.call(l, n) && (r = s(n, l)) && v.push(f(n) + (h ? ": " : ":") + r);
        }
        r = 0 === v.length ? "{}" : h ? "{\n" + h + v.join(",\n" + h) + "\n" + z + "}" : "{" + v.join(",") + "}";
        h = z;
        return r;
    }
  }

  "function" !== typeof Date.prototype.toJSON && (Date.prototype.toJSON = function () {
    return isFinite(this.valueOf()) ? this.getUTCFullYear() + "-" + p(this.getUTCMonth() + 1) + "-" + p(this.getUTCDate()) + "T" + p(this.getUTCHours()) + ":" + p(this.getUTCMinutes()) + ":" + p(this.getUTCSeconds()) + "Z" : null;
  }, String.prototype.toJSON = Number.prototype.toJSON = Boolean.prototype.toJSON = function () {
    return this.valueOf();
  });
  var k = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
      e = /[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
      h,
      y,
      C = {
    "\b": "\\b",
    "\t": "\\t",
    "\n": "\\n",
    "\f": "\\f",
    "\r": "\\r",
    '"': '\\"',
    "\\": "\\\\"
  },
      q;
  "function" !== typeof JSON.stringify && (JSON.stringify = function (e, f, k) {
    var n;
    y = h = "";
    if ("number" === typeof k) for (n = 0; n < k; n += 1) {
      y += " ";
    } else "string" === typeof k && (y = k);
    if ((q = f) && "function" !== typeof f && ("object" !== _typeof(f) || "number" !== typeof f.length)) throw Error("JSON.stringify");
    return s("", {
      "": e
    });
  });
  "function" !== typeof JSON.parse && (JSON.parse = function (e, f) {
    function h(e, k) {
      var n,
          p,
          l = e[k];
      if (l && "object" === _typeof(l)) for (n in l) {
        Object.prototype.hasOwnProperty.call(l, n) && (p = h(l, n), void 0 !== p ? l[n] = p : delete l[n]);
      }
      return f.call(e, k, l);
    }

    var n;
    e = String(e);
    k.lastIndex = 0;
    k.test(e) && (e = e.replace(k, function (e) {
      return "\\u" + ("0000" + e.charCodeAt(0).toString(16)).slice(-4);
    }));
    if (/^[\],:{}\s]*$/.test(e.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, "@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, "]").replace(/(?:^|:|,)(?:\s*\[)+/g, ""))) return n = eval("(" + e + ")"), "function" === typeof f ? h({
      "": n
    }, "") : n;
    throw new SyntaxError("JSON.parse");
  });
})();

(function () {
  if (!this.localStorage) if (this.globalStorage) try {
    this.localStorage = this.globalStorage;
  } catch (p) {} else {
    var f = document.createElement("div");
    f.style.display = "none";
    document.getElementsByTagName("head")[0].appendChild(f);

    if (f.addBehavior) {
      f.addBehavior("#default#userdata");

      var s = this.localStorage = {
        length: 0,
        setItem: function setItem(e, h) {
          f.load("localStorage");
          e = k(e);
          f.getAttribute(e) || this.length++;
          f.setAttribute(e, h);
          f.save("localStorage");
        },
        getItem: function getItem(e) {
          f.load("localStorage");
          e = k(e);
          return f.getAttribute(e);
        },
        removeItem: function removeItem(e) {
          f.load("localStorage");
          e = k(e);
          f.removeAttribute(e);
          f.save("localStorage");
          this.length = 0;
        },
        clear: function clear() {
          f.load("localStorage");

          for (var e = 0; attr = f.XMLDocument.documentElement.attributes[e++];) {
            f.removeAttribute(attr.name);
          }

          f.save("localStorage");
          this.length = 0;
        },
        key: function key(e) {
          f.load("localStorage");
          return f.XMLDocument.documentElement.attributes[e];
        }
      },
          k = function k(e) {
        return e.replace(/[^-._0-9A-Za-z\xb7\xc0-\xd6\xd8-\xf6\xf8-\u037d\u37f-\u1fff\u200c-\u200d\u203f\u2040\u2070-\u218f]/g, "-");
      };

      f.load("localStorage");
      s.length = f.XMLDocument.documentElement.attributes.length;
    }
  }
})();
},{}],"../node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "17338" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else {
        window.location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../node_modules/parcel-bundler/src/builtins/hmr-runtime.js","js/simpleCart.min.js"], null)
//# sourceMappingURL=/simpleCart.min.00d98d62.js.map