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
})({"js/jquery.easydropdown.js":[function(require,module,exports) {
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/*
* EASYDROPDOWN - A Drop-down Builder for Styleable Inputs and Menus
* Version: 2.1.4
* License: Creative Commons Attribution 3.0 Unported - CC BY 3.0
* http://creativecommons.org/licenses/by/3.0/
* This software may be used freely on commercial and non-commercial projects with attribution to the author/copyright holder.
* Author: Patrick Kunka
* Copyright 2013 Patrick Kunka, All Rights Reserved
*/
(function ($) {
  function EasyDropDown() {
    this.isField = true, this.down = false, this.inFocus = false, this.disabled = false, this.cutOff = false, this.hasLabel = false, this.keyboardMode = false, this.nativeTouch = true, this.wrapperClass = 'dropdown', this.onChange = null;
  }

  ;
  EasyDropDown.prototype = {
    constructor: EasyDropDown,
    instances: {},
    init: function init(domNode, settings) {
      var self = this;
      $.extend(self, settings);
      self.$select = $(domNode);
      self.id = domNode.id;
      self.options = [];
      self.$options = self.$select.find('option');
      self.isTouch = 'ontouchend' in document;
      self.$select.removeClass(self.wrapperClass + ' dropdown');

      if (self.$select.is(':disabled')) {
        self.disabled = true;
      }

      ;

      if (self.$options.length) {
        self.$options.each(function (i) {
          var $option = $(this);

          if ($option.is(':selected')) {
            self.selected = {
              index: i,
              title: $option.text()
            };
            self.focusIndex = i;
          }

          ;

          if ($option.hasClass('label') && i == 0) {
            self.hasLabel = true;
            self.label = $option.text();
            $option.attr('value', '');
          } else {
            self.options.push({
              domNode: $option[0],
              title: $option.text(),
              value: $option.val(),
              selected: $option.is(':selected')
            });
          }

          ;
        });

        if (!self.selected) {
          self.selected = {
            index: 0,
            title: self.$options.eq(0).text()
          };
          self.focusIndex = 0;
        }

        ;
        self.render();
      }

      ;
    },
    render: function render() {
      var self = this,
          touchClass = self.isTouch && self.nativeTouch ? ' touch' : '',
          disabledClass = self.disabled ? ' disabled' : '';
      self.$container = self.$select.wrap('<div class="' + self.wrapperClass + touchClass + disabledClass + '"><span class="old"/></div>').parent().parent();
      self.$active = $('<span class="selected">' + self.selected.title + '</span>').appendTo(self.$container);
      self.$carat = $('<span class="carat"/>').appendTo(self.$container);
      self.$scrollWrapper = $('<div><ul/></div>').appendTo(self.$container);
      self.$dropDown = self.$scrollWrapper.find('ul');
      self.$form = self.$container.closest('form');
      $.each(self.options, function () {
        var option = this,
            active = option.selected ? ' class="active"' : '';
        self.$dropDown.append('<li' + active + '>' + option.title + '</li>');
      });
      self.$items = self.$dropDown.find('li');
      if (self.cutOff && self.$items.length > self.cutOff) self.$container.addClass('scrollable');
      self.getMaxHeight();

      if (self.isTouch && self.nativeTouch) {
        self.bindTouchHandlers();
      } else {
        self.bindHandlers();
      }

      ;
    },
    getMaxHeight: function getMaxHeight() {
      var self = this;
      self.maxHeight = 0;

      for (i = 0; i < self.$items.length; i++) {
        var $item = self.$items.eq(i);
        self.maxHeight += $item.outerHeight();

        if (self.cutOff == i + 1) {
          break;
        }

        ;
      }

      ;
    },
    bindTouchHandlers: function bindTouchHandlers() {
      var self = this;
      self.$container.on('click.easyDropDown', function () {
        self.$select.focus();
      });
      self.$select.on({
        change: function change() {
          var $selected = $(this).find('option:selected'),
              title = $selected.text(),
              value = $selected.val();
          self.$active.text(title);

          if (typeof self.onChange === 'function') {
            self.onChange.call(self.$select[0], {
              title: title,
              value: value
            });
          }

          ;
        },
        focus: function focus() {
          self.$container.addClass('focus');
        },
        blur: function blur() {
          self.$container.removeClass('focus');
        }
      });
    },
    bindHandlers: function bindHandlers() {
      var self = this;
      self.query = '';
      self.$container.on({
        'click.easyDropDown': function clickEasyDropDown() {
          if (!self.down && !self.disabled) {
            self.open();
          } else {
            self.close();
          }

          ;
        },
        'mousemove.easyDropDown': function mousemoveEasyDropDown() {
          if (self.keyboardMode) {
            self.keyboardMode = false;
          }

          ;
        }
      });
      $('body').on('click.easyDropDown.' + self.id, function (e) {
        var $target = $(e.target),
            classNames = self.wrapperClass.split(' ').join('.');

        if (!$target.closest('.' + classNames).length && self.down) {
          self.close();
        }

        ;
      });
      self.$items.on({
        'click.easyDropDown': function clickEasyDropDown() {
          var index = $(this).index();
          self.select(index);
          self.$select.focus();
        },
        'mouseover.easyDropDown': function mouseoverEasyDropDown() {
          if (!self.keyboardMode) {
            var $t = $(this);
            $t.addClass('focus').siblings().removeClass('focus');
            self.focusIndex = $t.index();
          }

          ;
        },
        'mouseout.easyDropDown': function mouseoutEasyDropDown() {
          if (!self.keyboardMode) {
            $(this).removeClass('focus');
          }

          ;
        }
      });
      self.$select.on({
        'focus.easyDropDown': function focusEasyDropDown() {
          self.$container.addClass('focus');
          self.inFocus = true;
        },
        'blur.easyDropDown': function blurEasyDropDown() {
          self.$container.removeClass('focus');
          self.inFocus = false;
        },
        'keydown.easyDropDown': function keydownEasyDropDown(e) {
          if (self.inFocus) {
            self.keyboardMode = true;
            var key = e.keyCode;

            if (key == 38 || key == 40 || key == 32) {
              e.preventDefault();

              if (key == 38) {
                self.focusIndex--;
                self.focusIndex = self.focusIndex < 0 ? self.$items.length - 1 : self.focusIndex;
              } else if (key == 40) {
                self.focusIndex++;
                self.focusIndex = self.focusIndex > self.$items.length - 1 ? 0 : self.focusIndex;
              }

              ;

              if (!self.down) {
                self.open();
              }

              ;
              self.$items.removeClass('focus').eq(self.focusIndex).addClass('focus');

              if (self.cutOff) {
                self.scrollToView();
              }

              ;
              self.query = '';
            }

            ;

            if (self.down) {
              if (key == 9 || key == 27) {
                self.close();
              } else if (key == 13) {
                e.preventDefault();
                self.select(self.focusIndex);
                self.close();
                return false;
              } else if (key == 8) {
                e.preventDefault();
                self.query = self.query.slice(0, -1);
                self.search();
                clearTimeout(self.resetQuery);
                return false;
              } else if (key != 38 && key != 40) {
                var letter = String.fromCharCode(key);
                self.query += letter;
                self.search();
                clearTimeout(self.resetQuery);
              }

              ;
            }

            ;
          }

          ;
        },
        'keyup.easyDropDown': function keyupEasyDropDown() {
          self.resetQuery = setTimeout(function () {
            self.query = '';
          }, 1200);
        }
      });
      self.$dropDown.on('scroll.easyDropDown', function (e) {
        if (self.$dropDown[0].scrollTop >= self.$dropDown[0].scrollHeight - self.maxHeight) {
          self.$container.addClass('bottom');
        } else {
          self.$container.removeClass('bottom');
        }

        ;
      });

      if (self.$form.length) {
        self.$form.on('reset.easyDropDown', function () {
          var active = self.hasLabel ? self.label : self.options[0].title;
          self.$active.text(active);
        });
      }

      ;
    },
    unbindHandlers: function unbindHandlers() {
      var self = this;
      self.$container.add(self.$select).add(self.$items).add(self.$form).add(self.$dropDown).off('.easyDropDown');
      $('body').off('.' + self.id);
    },
    open: function open() {
      var self = this,
          scrollTop = window.scrollY || document.documentElement.scrollTop,
          scrollLeft = window.scrollX || document.documentElement.scrollLeft,
          scrollOffset = self.notInViewport(scrollTop);
      self.closeAll();
      self.getMaxHeight();
      self.$select.focus();
      window.scrollTo(scrollLeft, scrollTop + scrollOffset);
      self.$container.addClass('open');
      self.$scrollWrapper.css('height', self.maxHeight + 'px');
      self.down = true;
    },
    close: function close() {
      var self = this;
      self.$container.removeClass('open');
      self.$scrollWrapper.css('height', '0px');
      self.focusIndex = self.selected.index;
      self.query = '';
      self.down = false;
    },
    closeAll: function closeAll() {
      var self = this,
          instances = Object.getPrototypeOf(self).instances;

      for (var key in instances) {
        var instance = instances[key];
        instance.close();
      }

      ;
    },
    select: function select(index) {
      var self = this;

      if (typeof index === 'string') {
        index = self.$select.find('option[value=' + index + ']').index() - 1;
      }

      ;
      var option = self.options[index],
          selectIndex = self.hasLabel ? index + 1 : index;
      self.$items.removeClass('active').eq(index).addClass('active');
      self.$active.text(option.title);
      self.$select.find('option').removeAttr('selected').eq(selectIndex).prop('selected', true).parent().trigger('change');
      self.selected = {
        index: index,
        title: option.title
      };
      self.focusIndex = i;

      if (typeof self.onChange === 'function') {
        self.onChange.call(self.$select[0], {
          title: option.title,
          value: option.value
        });
      }

      ;
    },
    search: function search() {
      var self = this,
          lock = function lock(i) {
        self.focusIndex = i;
        self.$items.removeClass('focus').eq(self.focusIndex).addClass('focus');
        self.scrollToView();
      },
          getTitle = function getTitle(i) {
        return self.options[i].title.toUpperCase();
      };

      for (i = 0; i < self.options.length; i++) {
        var title = getTitle(i);

        if (title.indexOf(self.query) == 0) {
          lock(i);
          return;
        }

        ;
      }

      ;

      for (i = 0; i < self.options.length; i++) {
        var title = getTitle(i);

        if (title.indexOf(self.query) > -1) {
          lock(i);
          break;
        }

        ;
      }

      ;
    },
    scrollToView: function scrollToView() {
      var self = this;

      if (self.focusIndex >= self.cutOff) {
        var $focusItem = self.$items.eq(self.focusIndex),
            scroll = $focusItem.outerHeight() * (self.focusIndex + 1) - self.maxHeight;
        self.$dropDown.scrollTop(scroll);
      }

      ;
    },
    notInViewport: function notInViewport(scrollTop) {
      var self = this,
          range = {
        min: scrollTop,
        max: scrollTop + (window.innerHeight || document.documentElement.clientHeight)
      },
          menuBottom = self.$dropDown.offset().top + self.maxHeight;

      if (menuBottom >= range.min && menuBottom <= range.max) {
        return 0;
      } else {
        return menuBottom - range.max + 5;
      }

      ;
    },
    destroy: function destroy() {
      var self = this;
      self.unbindHandlers();
      self.$select.unwrap().siblings().remove();
      self.$select.unwrap();
      delete Object.getPrototypeOf(self).instances[self.$select[0].id];
    },
    disable: function disable() {
      var self = this;
      self.disabled = true;
      self.$container.addClass('disabled');
      self.$select.attr('disabled', true);
      if (!self.down) self.close();
    },
    enable: function enable() {
      var self = this;
      self.disabled = false;
      self.$container.removeClass('disabled');
      self.$select.attr('disabled', false);
    }
  };

  var instantiate = function instantiate(domNode, settings) {
    domNode.id = !domNode.id ? 'EasyDropDown' + rand() : domNode.id;
    var instance = new EasyDropDown();

    if (!instance.instances[domNode.id]) {
      instance.instances[domNode.id] = instance;
      instance.init(domNode, settings);
    }

    ;
  },
      rand = function rand() {
    return ('00000' + (Math.random() * 16777216 << 0).toString(16)).substr(-6).toUpperCase();
  };

  $.fn.easyDropDown = function () {
    var args = arguments,
        dataReturn = [],
        eachReturn;
    eachReturn = this.each(function () {
      if (args && typeof args[0] === 'string') {
        var data = EasyDropDown.prototype.instances[this.id][args[0]](args[1], args[2]);
        if (data) dataReturn.push(data);
      } else {
        instantiate(this, args[0]);
      }

      ;
    });

    if (dataReturn.length) {
      return dataReturn.length > 1 ? dataReturn : dataReturn[0];
    } else {
      return eachReturn;
    }

    ;
  };

  $(function () {
    if (typeof Object.getPrototypeOf !== 'function') {
      if (_typeof('test'.__proto__) === 'object') {
        Object.getPrototypeOf = function (object) {
          return object.__proto__;
        };
      } else {
        Object.getPrototypeOf = function (object) {
          return object.constructor.prototype;
        };
      }

      ;
    }

    ;
    $('select.dropdown').each(function () {
      var json = $(this).attr('data-settings');
      settings = json ? $.parseJSON(json) : {};
      instantiate(this, settings);
    });
  });
})(jQuery);
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
},{}]},{},["../node_modules/parcel-bundler/src/builtins/hmr-runtime.js","js/jquery.easydropdown.js"], null)
//# sourceMappingURL=/jquery.easydropdown.b95fa2d1.js.map