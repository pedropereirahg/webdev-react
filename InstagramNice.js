/**
 * @license-header
 @providesModule ImmediateImplementation
 */
webpackJsonp([9], Array(234).concat([function(dataAndEvents, record, parse) {
  /**
   * @return {undefined}
   */
  function opt_attributes() {
    ctor.apply(this, arguments);
  }
  /**
   * @return {?}
   */
  function attributes() {
    var value;
    var _ref2;
    var self = this;
    /** @type {number} */
    var l = arguments.length;
    /** @type {Array} */
    var args = Array(l);
    /** @type {number} */
    var i = 0;
    for (;i < l;i++) {
      args[i] = arguments[i];
    }
    return value = (_ref2 = parent.constructor).call.apply(_ref2, [this].concat(args)), this.handleBaseClick = function(e) {
      if (e.target === e.currentTarget) {
        self.props.onClose();
      }
    }, this.$Modal1 = function(event) {
      if (event.which === value.a.ESC) {
        self.props.onClose();
      }
    }, value;
  }
  var ctor;
  var basePrototype;
  var url = parse(258);
  var child = parse.n(url);
  var c = parse(11);
  var hover = parse.n(c);
  var pairs = parse(217);
  var value = parse.n(pairs);
  var object = parse(239);
  var expr = parse(2);
  var dom = parse(0);
  /** @type {number} */
  var b = 0;
  basePrototype = (ctor = dom.Component) && ctor.prototype;
  Object.assign(opt_attributes, ctor);
  /** @type {function (): undefined} */
  (opt_attributes.prototype = Object.create(basePrototype)).constructor = opt_attributes;
  opt_attributes.__superConstructor__ = ctor;
  /**
   * @return {undefined}
   */
  opt_attributes.prototype.componentDidMount = function() {
    b++;
    Object(object.d)();
    Object(expr.n)().setAttribute("aria-hidden", "true");
  };
  /**
   * @return {undefined}
   */
  opt_attributes.prototype.componentWillUnmount = function() {
    if (0 === --b) {
      Object(object.a)();
      Object(expr.n)().setAttribute("aria-hidden", "false");
    }
  };
  /**
   * @return {?}
   */
  opt_attributes.prototype.render = function() {
    return null;
  };
  var data;
  var parent;
  /** @type {function (): undefined} */
  var tr = opt_attributes;
  var o = parse(235);
  var templateFunc = Object.assign || function(opt_attributes) {
    /** @type {number} */
    var i = 1;
    for (;i < arguments.length;i++) {
      var iterable = arguments[i];
      var key;
      for (key in iterable) {
        if (Object.prototype.hasOwnProperty.call(iterable, key)) {
          opt_attributes[key] = iterable[key];
        }
      }
    }
    return opt_attributes;
  };
  parse(256);
  data = dom.Component;
  parent = data && data.prototype;
  Object.assign(attributes, data);
  /** @type {function (): ?} */
  (attributes.prototype = Object.create(parent)).constructor = attributes;
  attributes.__superConstructor__ = data;
  /**
   * @return {?}
   */
  attributes.prototype.render = function() {
    var content = {};
    return this.props.contentMaxWidth ? content.style = {
      maxWidth : this.props.contentMaxWidth + "px"
    } : content.style = {}, dom.createElement(o.a, null, dom.createElement(child.a, {
      focusTrapOptions : {
        initialFocus : this.props.focusOnMount
      }
    }, dom.createElement(tr, null), dom.createElement("div", {
      className : hover()("_pfyik", this.props.className),
      onClick : this.handleBaseClick,
      onKeyDown : this.$Modal1,
      role : "dialog"
    }, dom.createElement("div", {
      className : "_23gmb"
    }, this.props.viewportChildren), dom.createElement("div", {
      className : hover()("_o0j5z", this.props.wrapperClassName),
      onClick : this.handleBaseClick
    }, dom.createElement("div", templateFunc({
      onClick : this.handleBaseClick
    }, content, {
      className : hover()("_784q7", this.props.contentClassName)
    }), this.props.children)), !this.props.hideCloseButton && dom.createElement("button", {
      className : "_dcj9f",
      onClick : this.props.onClose
    }, "Fechar"))));
  };
  /** @type {function (): ?} */
  record.a = attributes;
}, function(dataAndEvents, record, next) {
  /**
   * @return {undefined}
   */
  function attributes() {
    ctor.apply(this, arguments);
  }
  var ctor;
  var basePrototype;
  var active = next(9);
  var self = (next.n(active), next(0));
  var animMargin = (next.n(self), next(27));
  var options = (next.n(animMargin), next(14));
  basePrototype = (ctor = self.Component) && ctor.prototype;
  Object.assign(attributes, ctor);
  /** @type {function (): undefined} */
  (attributes.prototype = Object.create(basePrototype)).constructor = attributes;
  attributes.__superConstructor__ = ctor;
  /**
   * @return {?}
   */
  attributes.prototype.render = function() {
    if (!active.canUseDOM) {
      return null;
    }
    /** @type {(HTMLElement|null)} */
    var b = document.body;
    return b ? Object(animMargin.createPortal)(this.props.children, b) : (Object(options.a)("Portal: document.body should not be null"), null);
  };
  /** @type {function (): undefined} */
  record.a = attributes;
}, , , , , , , , , , , , , , , , , , , , , function(dataAndEvents, deepDataAndEvents, require) {
  var getActual = require(1);
  var Block = require(257);
  getActual(Block, "is6bdb5498");
}, function(module, dataAndEvents) {
  /** @type {string} */
  module.exports = "._pfyik{background-color:rgba(0,0,0,.5);bottom:0;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;left:0;overflow-y:auto;-webkit-overflow-scrolling:touch;position:fixed;right:0;top:0;z-index:1}._dcj9f{background:0 0;border:none;cursor:pointer;height:36px;outline:none;overflow:hidden;position:absolute;right:0;top:0;z-index:2}._dcj9f::before{color:#fff;content:'\\00D7';display:block;font-size:36px;font-weight:600;line-height:36px;padding:0;margin:0}._784q7{-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;margin:auto;max-width:935px;pointer-events:auto;width:100%}._23gmb{bottom:0;left:0;pointer-events:none;position:fixed;right:0;top:0;z-index:0}._23gmb *{pointer-events:auto}._o0j5z{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;min-height:100%;overflow:auto;width:auto;z-index:1}@media (min-width:481px){._o0j5z{padding:0 40px;pointer-events:none;-webkit-transform:translate3d(0,0,0);transform:translate3d(0,0,0)}._o0j5z::after,._o0j5z::before{content:'';display:block;-webkit-flex-basis:40px;-ms-flex-preferred-size:40px;flex-basis:40px;-webkit-flex-shrink:0;-ms-flex-negative:0;flex-shrink:0}}@media (max-width:480px){._23gmb,._dcj9f{display:none}}";
}, function(module, dataAndEvents, require) {
  /**
   * @param {?} bind
   * @param {Function} thisp
   * @return {undefined}
   */
  function forEach(bind, thisp) {
    if (!(bind instanceof thisp)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
  /**
   * @param {string} root
   * @param {?} obj
   * @return {?}
   */
  function select(root, obj) {
    if (!root) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return!obj || "object" != typeof obj && "function" != typeof obj ? root : obj;
  }
  /**
   * @param {Object} file
   * @param {Array} extend
   * @return {undefined}
   */
  function create(file, extend) {
    if ("function" != typeof extend && null !== extend) {
      throw new TypeError("Super expression must either be null or a function, not " + typeof extend);
    }
    /** @type {Object} */
    file.prototype = Object.create(extend && extend.prototype, {
      constructor : {
        value : file,
        enumerable : false,
        writable : true,
        configurable : true
      }
    });
    if (extend) {
      if (Object.setPrototypeOf) {
        Object.setPrototypeOf(file, extend);
      } else {
        /** @type {Array} */
        file.__proto__ = extend;
      }
    }
  }
  var forceFunction = function() {
    /**
     * @param {Function} object
     * @param {?} d
     * @return {undefined}
     */
    function defineProperty(object, d) {
      /** @type {number} */
      var i = 0;
      for (;i < d.length;i++) {
        var desc = d[i];
        desc.enumerable = desc.enumerable || false;
        /** @type {boolean} */
        desc.configurable = true;
        if ("value" in desc) {
          /** @type {boolean} */
          desc.writable = true;
        }
        Object.defineProperty(object, desc.key, desc);
      }
    }
    return function(x, current, a) {
      return current && defineProperty(x.prototype, current), a && defineProperty(x, a), x;
    };
  }();
  var d = require(0);
  var Block = require(259);
  /** @type {Array} */
  var arr = ["active", "paused", "tag", "focusTrapOptions", "_createFocusTrap"];
  var $ = function(dataAndEvents) {
    /**
     * @return {?}
     */
    function f() {
      var _ref5;
      var options;
      var doc;
      var values;
      forEach(this, f);
      /** @type {number} */
      var l = arguments.length;
      /** @type {Array} */
      var args = Array(l);
      /** @type {number} */
      var i = 0;
      for (;i < l;i++) {
        args[i] = arguments[i];
      }
      return options = doc = select(this, (_ref5 = f.__proto__ || Object.getPrototypeOf(f)).call.apply(_ref5, [this].concat(args))), doc.setNode = function(name) {
        /** @type {HTMLElement} */
        doc.node = name;
      }, values = options, select(doc, values);
    }
    return create(f, d.Component), forceFunction(f, [{
      key : "componentWillMount",
      /**
       * @return {undefined}
       */
      value : function() {
        if ("undefined" != typeof document) {
          this.previouslyFocusedElement = document.activeElement;
        }
      }
    }, {
      key : "componentDidMount",
      /**
       * @return {undefined}
       */
      value : function() {
        var defaults = this.props.focusTrapOptions;
        var internalValues = {
          returnFocusOnDeactivate : false
        };
        var key;
        for (key in defaults) {
          if (defaults.hasOwnProperty(key)) {
            if ("returnFocusOnDeactivate" !== key) {
              internalValues[key] = defaults[key];
            }
          }
        }
        this.focusTrap = this.props._createFocusTrap(this.node, internalValues);
        if (this.props.active) {
          this.focusTrap.activate();
        }
        if (this.props.paused) {
          this.focusTrap.pause();
        }
      }
    }, {
      key : "componentDidUpdate",
      /**
       * @param {Function} tests
       * @return {undefined}
       */
      value : function(tests) {
        if (tests.active && !this.props.active) {
          this.focusTrap.deactivate();
        } else {
          if (!tests.active) {
            if (this.props.active) {
              this.focusTrap.activate();
            }
          }
        }
        if (tests.paused && !this.props.paused) {
          this.focusTrap.unpause();
        } else {
          if (!tests.paused) {
            if (this.props.paused) {
              this.focusTrap.pause();
            }
          }
        }
      }
    }, {
      key : "componentWillUnmount",
      /**
       * @return {undefined}
       */
      value : function() {
        this.focusTrap.deactivate();
        if (false !== this.props.focusTrapOptions.returnFocusOnDeactivate) {
          if (this.previouslyFocusedElement) {
            this.previouslyFocusedElement.focus();
          }
        }
      }
    }, {
      key : "render",
      /**
       * @return {?}
       */
      value : function() {
        var props = {
          ref : this.setNode
        };
        var key;
        for (key in this.props) {
          if (this.props.hasOwnProperty(key)) {
            if (-1 === arr.indexOf(key)) {
              props[key] = this.props[key];
            }
          }
        }
        return d.createElement(this.props.tag, props, this.props.children);
      }
    }]), f;
  }();
  $.defaultProps = {
    active : true,
    tag : "div",
    paused : false,
    focusTrapOptions : {},
    _createFocusTrap : Block
  };
  module.exports = $;
}, function(module, dataAndEvents, $sanitize) {
  /**
   * @param {Object} event
   * @return {?}
   */
  function callback(event) {
    return "Escape" === event.key || ("Esc" === event.key || 27 === event.keyCode);
  }
  /**
   * @param {Element} element
   * @return {undefined}
   */
  function update(element) {
    if (element) {
      if (element.focus) {
        element.focus();
        if ("input" === element.tagName.toLowerCase()) {
          element.select();
        }
      }
    }
  }
  var decodeURIComponent = $sanitize(260);
  /** @type {null} */
  var type = null;
  /**
   * @param {Function} types
   * @param {Object} func
   * @return {?}
   */
  module.exports = function(types, func) {
    /**
     * @param {?} settings
     * @return {?}
     */
    function start(settings) {
      if (t) {
        var b = {
          returnFocus : settings && void 0 !== settings.returnFocus ? settings.returnFocus : defaults.returnFocusOnDeactivate,
          onDeactivate : settings && void 0 !== settings.onDeactivate ? settings.onDeactivate : defaults.onDeactivate
        };
        return unbind(), b.onDeactivate && b.onDeactivate(), b.returnFocus && setTimeout(function() {
          update(element);
        }, 0), t = false, n = false, this;
      }
    }
    /**
     * @return {?}
     */
    function init() {
      if (t) {
        return type && type.pause(), type = fx, step(), update(next()), document.addEventListener("focus", handler, true), document.addEventListener("click", completed, true), document.addEventListener("mousedown", toggle, true), document.addEventListener("touchstart", toggle, true), document.addEventListener("keydown", callback, true), fx;
      }
    }
    /**
     * @return {?}
     */
    function unbind() {
      if (t && type === fx) {
        return document.removeEventListener("focus", handler, true), document.removeEventListener("click", completed, true), document.removeEventListener("mousedown", toggle, true), document.removeEventListener("touchstart", toggle, true), document.removeEventListener("keydown", callback, true), type = null, fx;
      }
    }
    /**
     * @param {string} attr
     * @return {?}
     */
    function compile(attr) {
      var c = defaults[attr];
      var ret = c;
      if (!c) {
        return null;
      }
      if ("string" == typeof c && !(ret = document.querySelector(c))) {
        throw new Error("`" + attr + "` refers to no known node");
      }
      if ("function" == typeof c && !(ret = c())) {
        throw new Error("`" + attr + "` did not return a node");
      }
      return ret;
    }
    /**
     * @return {?}
     */
    function next() {
      var rv;
      if (!(rv = null !== compile("initialFocus") ? compile("initialFocus") : $.contains(document.activeElement) ? document.activeElement : d[0] || compile("fallbackFocus"))) {
        throw new Error("You can't have a focus-trap without at least one focusable element");
      }
      return rv;
    }
    /**
     * @param {Event} e
     * @return {undefined}
     */
    function toggle(e) {
      if (defaults.clickOutsideDeactivates) {
        if (!$.contains(e.target)) {
          start({
            returnFocus : false
          });
        }
      }
    }
    /**
     * @param {Object} e
     * @return {undefined}
     */
    function completed(e) {
      if (!defaults.clickOutsideDeactivates) {
        if (!$.contains(e.target)) {
          e.preventDefault();
          e.stopImmediatePropagation();
        }
      }
    }
    /**
     * @param {Object} event
     * @return {undefined}
     */
    function handler(event) {
      if (!$.contains(event.target)) {
        event.preventDefault();
        event.stopImmediatePropagation();
        if ("function" == typeof event.target.blur) {
          event.target.blur();
        }
      }
    }
    /**
     * @param {Event} event
     * @return {undefined}
     */
    function callback(event) {
      if (!("Tab" !== event.key && 9 !== event.keyCode)) {
        f(event);
      }
      if (false !== defaults.escapeDeactivates) {
        if (callback(event)) {
          start();
        }
      }
    }
    /**
     * @param {Event} evt
     * @return {?}
     */
    function f(evt) {
      evt.preventDefault();
      step();
      var i = d.indexOf(evt.target);
      var no = d[d.length - 1];
      var id = d[0];
      return evt.shiftKey ? update(evt.target === id || -1 === d.indexOf(evt.target) ? no : d[i - 1]) : evt.target === no ? update(id) : void update(d[i + 1]);
    }
    /**
     * @return {undefined}
     */
    function step() {
      d = decodeURIComponent($);
    }
    /** @type {Array} */
    var d = [];
    /** @type {null} */
    var element = null;
    /** @type {boolean} */
    var t = false;
    /** @type {boolean} */
    var n = false;
    var $ = "string" == typeof types ? document.querySelector(types) : types;
    var defaults = func || {};
    defaults.returnFocusOnDeactivate = !func || (void 0 === func.returnFocusOnDeactivate || func.returnFocusOnDeactivate);
    defaults.escapeDeactivates = !func || (void 0 === func.escapeDeactivates || func.escapeDeactivates);
    var fx = {
      /**
       * @param {boolean} opts
       * @return {?}
       */
      activate : function(opts) {
        if (!t) {
          var $scope = {
            onActivate : opts && void 0 !== opts.onActivate ? opts.onActivate : defaults.onActivate
          };
          return t = true, n = false, element = document.activeElement, $scope.onActivate && $scope.onActivate(), init(), fx;
        }
      },
      /** @type {function (?): ?} */
      deactivate : start,
      /**
       * @return {undefined}
       */
      pause : function() {
        if (!n) {
          if (t) {
            /** @type {boolean} */
            n = true;
            unbind();
          }
        }
      },
      /**
       * @return {undefined}
       */
      unpause : function() {
        if (n) {
          if (t) {
            /** @type {boolean} */
            n = false;
            init();
          }
        }
      }
    };
    return fx;
  };
}, function(module, dataAndEvents) {
  /**
   * @param {Document} doc
   * @return {?}
   */
  function init(doc) {
    /**
     * @param {Node} node
     * @param {Element} label
     * @return {?}
     */
    function check(node, label) {
      if (node === doc.documentElement) {
        return false;
      }
      /** @type {number} */
      var i = 0;
      /** @type {number} */
      var valuesLen = configList.length;
      for (;i < valuesLen;i++) {
        if (configList[i][0] === node) {
          return configList[i][1];
        }
      }
      /** @type {boolean} */
      var attrsNo = false;
      return "none" === (label = label || doc.defaultView.getComputedStyle(node)).display ? attrsNo = true : node.parentNode && (attrsNo = check(node.parentNode)), configList.push([node, attrsNo]), attrsNo;
    }
    /** @type {Array} */
    var configList = [];
    return function(el) {
      if (el === doc.documentElement) {
        return false;
      }
      var value = doc.defaultView.getComputedStyle(el);
      return!!check(el, value) || "hidden" === value.visibility;
    };
  }
  /**
   * @param {Function} types
   * @param {Object} c
   * @return {?}
   */
  module.exports = function(types, c) {
    c = c || {};
    var doc = types.ownerDocument;
    /** @type {Array} */
    var scripts = [];
    /** @type {Array} */
    var results = [];
    var next = init(doc);
    /** @type {Array} */
    var e = ["input", "select", "a[href]", "textarea", "button", "[tabindex]"];
    var nodes = types.querySelectorAll(e);
    if (c.includeContainer) {
      var matches = Element.prototype.matches || (Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector);
      if (e.some(function(expr) {
        return matches.call(types, expr);
      })) {
        (nodes = Array.prototype.slice.apply(nodes)).unshift(types);
      }
    }
    var elem;
    var tabIndex;
    /** @type {number} */
    var i = 0;
    var len = nodes.length;
    for (;i < len;i++) {
      elem = nodes[i];
      if (!((tabIndex = parseInt(elem.getAttribute("tabindex"), 10) || elem.tabIndex) < 0)) {
        if (!("INPUT" === elem.tagName && "hidden" === elem.type)) {
          if (!elem.disabled) {
            if (!next(elem, doc)) {
              if (0 === tabIndex) {
                scripts.push(elem);
              } else {
                results.push({
                  index : i,
                  tabIndex : tabIndex,
                  node : elem
                });
              }
            }
          }
        }
      }
    }
    var value = results.sort(function(a, b) {
      return a.tabIndex === b.tabIndex ? a.index - b.index : a.tabIndex - b.tabIndex;
    }).map(function(body) {
      return body.node;
    });
    return Array.prototype.push.apply(value, scripts), value;
  };
}, , function(dataAndEvents, obj, $sanitize) {
  /**
   * @param {string} options
   * @return {?}
   */
  function toObject(options) {
    return options && options.__esModule ? options : {
      default : options
    };
  }
  /**
   * @param {Object} iterable
   * @param {Array} arr
   * @return {?}
   */
  function each(iterable, arr) {
    var object = {};
    var key;
    for (key in iterable) {
      if (!(arr.indexOf(key) >= 0)) {
        if (Object.prototype.hasOwnProperty.call(iterable, key)) {
          object[key] = iterable[key];
        }
      }
    }
    return object;
  }
  /**
   * @param {?} object
   * @param {Function} Animation
   * @return {undefined}
   */
  function defineProperties(object, Animation) {
    if (!(object instanceof Animation)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
  /**
   * @param {string} dataAndEvents
   * @param {?} fn
   * @return {?}
   */
  function apply(dataAndEvents, fn) {
    if (!dataAndEvents) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return!fn || "object" != typeof fn && "function" != typeof fn ? dataAndEvents : fn;
  }
  /**
   * @param {Object} d
   * @param {Array} b
   * @return {undefined}
   */
  function f(d, b) {
    if ("function" != typeof b && null !== b) {
      throw new TypeError("Super expression must either be null or a function, not " + typeof b);
    }
    /** @type {Object} */
    d.prototype = Object.create(b && b.prototype, {
      constructor : {
        value : d,
        enumerable : false,
        writable : true,
        configurable : true
      }
    });
    if (b) {
      if (Object.setPrototypeOf) {
        Object.setPrototypeOf(d, b);
      } else {
        /** @type {Array} */
        d.__proto__ = b;
      }
    }
  }
  /**
   * @return {undefined}
   */
  function onExitRoute() {
  }
  /** @type {boolean} */
  obj.__esModule = true;
  obj.EXITING = obj.ENTERED = obj.ENTERING = obj.EXITED = obj.UNMOUNTED = void 0;
  var createAct = function(source) {
    if (source && source.__esModule) {
      return source;
    }
    var obj = {};
    if (null != source) {
      var prop;
      for (prop in source) {
        if (Object.prototype.hasOwnProperty.call(source, prop)) {
          obj[prop] = source[prop];
        }
      }
    }
    return obj.default = source, obj;
  }($sanitize(38));
  var object = toObject($sanitize(0));
  var self = toObject($sanitize(27));
  /** @type {string} */
  var success = ($sanitize(263), obj.UNMOUNTED = "unmounted");
  /** @type {string} */
  var code = obj.EXITED = "exited";
  /** @type {string} */
  var _ = obj.ENTERING = "entering";
  /** @type {string} */
  var message = obj.ENTERED = "entered";
  /** @type {string} */
  var statusCode = obj.EXITING = "exiting";
  var Constructor = function(_super) {
    /**
     * @param {?} options
     * @param {?} easing
     * @return {?}
     */
    function Animation(options, easing) {
      defineProperties(this, Animation);
      var self = apply(this, _super.call(this, options, easing));
      var appear = easing.transitionGroup;
      var isQuirks = appear && !appear.isMounting ? options.enter : options.appear;
      var statusCode = void 0;
      return self.nextStatus = null, options.in ? isQuirks ? (statusCode = code, self.nextStatus = _) : statusCode = message : statusCode = options.unmountOnExit || options.mountOnEnter ? success : code, self.state = {
        status : statusCode
      }, self.nextCallback = null, self;
    }
    return f(Animation, _super), Animation.prototype.getChildContext = function() {
      return{
        transitionGroup : null
      };
    }, Animation.prototype.componentDidMount = function() {
      this.updateStatus(true);
    }, Animation.prototype.componentWillReceiveProps = function(vertex) {
      var name = (this.pendingState || this.state).status;
      if (vertex.in) {
        if (name === success) {
          this.setState({
            status : code
          });
        }
        if (name !== _) {
          if (name !== message) {
            /** @type {string} */
            this.nextStatus = _;
          }
        }
      } else {
        if (!(name !== _ && name !== message)) {
          /** @type {string} */
          this.nextStatus = statusCode;
        }
      }
    }, Animation.prototype.componentDidUpdate = function() {
      this.updateStatus();
    }, Animation.prototype.componentWillUnmount = function() {
      this.cancelNextCallback();
    }, Animation.prototype.getTimeouts = function() {
      var value = this.props.timeout;
      var done = void 0;
      var enter = void 0;
      var val = void 0;
      return done = enter = val = value, null != value && ("number" != typeof value && (done = value.exit, enter = value.enter, val = value.appear)), {
        exit : done,
        enter : enter,
        appear : val
      };
    }, Animation.prototype.updateStatus = function() {
      var udataCur = arguments.length > 0 && (void 0 !== arguments[0] && arguments[0]);
      var pad = this.nextStatus;
      if (null !== pad) {
        /** @type {null} */
        this.nextStatus = null;
        this.cancelNextCallback();
        var domain = self.default.findDOMNode(this);
        if (pad === _) {
          this.performEnter(domain, udataCur);
        } else {
          this.performExit(domain);
        }
      } else {
        if (this.props.unmountOnExit) {
          if (this.state.status === code) {
            this.setState({
              status : success
            });
          }
        }
      }
    }, Animation.prototype.performEnter = function(status, value) {
      var res = this;
      var defaultValue = this.props.enter;
      var fmt = this.context.transitionGroup ? this.context.transitionGroup.isMounting : value;
      var body = this.getTimeouts();
      if (value || defaultValue) {
        this.props.onEnter(status, fmt);
        this.safeSetState({
          status : _
        }, function() {
          res.props.onEntering(status, fmt);
          res.onTransitionEnd(status, body.enter, function() {
            res.safeSetState({
              status : message
            }, function() {
              res.props.onEntered(status, fmt);
            });
          });
        });
      } else {
        this.safeSetState({
          status : message
        }, function() {
          res.props.onEntered(status);
        });
      }
    }, Animation.prototype.performExit = function(status) {
      var res = this;
      var exit = this.props.exit;
      var namespace = this.getTimeouts();
      if (exit) {
        this.props.onExit(status);
        this.safeSetState({
          status : statusCode
        }, function() {
          res.props.onExiting(status);
          res.onTransitionEnd(status, namespace.exit, function() {
            res.safeSetState({
              status : code
            }, function() {
              res.props.onExited(status);
            });
          });
        });
      } else {
        this.safeSetState({
          status : code
        }, function() {
          res.props.onExited(status);
        });
      }
    }, Animation.prototype.cancelNextCallback = function() {
      if (null !== this.nextCallback) {
        this.nextCallback.cancel();
        /** @type {null} */
        this.nextCallback = null;
      }
    }, Animation.prototype.safeSetState = function(opt_attributes, iterator) {
      var pendingState = this;
      /** @type {Function} */
      this.pendingState = opt_attributes;
      iterator = this.setNextCallback(iterator);
      this.setState(opt_attributes, function() {
        /** @type {null} */
        pendingState.pendingState = null;
        iterator();
      });
    }, Animation.prototype.setNextCallback = function(callback) {
      var nextCallback = this;
      /** @type {boolean} */
      var o = true;
      return this.nextCallback = function(basis) {
        if (o) {
          /** @type {boolean} */
          o = false;
          /** @type {null} */
          nextCallback.nextCallback = null;
          callback(basis);
        }
      }, this.nextCallback.cancel = function() {
        /** @type {boolean} */
        o = false;
      }, this.nextCallback;
    }, Animation.prototype.onTransitionEnd = function(e, t, next_callback) {
      this.setNextCallback(next_callback);
      if (e) {
        if (this.props.addEndListener) {
          this.props.addEndListener(e, this.nextCallback);
        }
        if (null != t) {
          setTimeout(this.nextCallback, t);
        }
      } else {
        setTimeout(this.nextCallback, 0);
      }
    }, Animation.prototype.render = function() {
      var status = this.state.status;
      if (status === success) {
        return null;
      }
      var obj = this.props;
      var fn = obj.children;
      var self = each(obj, ["children"]);
      if (delete self.in, delete self.mountOnEnter, delete self.unmountOnExit, delete self.appear, delete self.enter, delete self.exit, delete self.timeout, delete self.addEndListener, delete self.onEnter, delete self.onEntering, delete self.onEntered, delete self.onExit, delete self.onExiting, delete self.onExited, "function" == typeof fn) {
        return fn(status, self);
      }
      var stackKey = object.default.Children.only(fn);
      return object.default.cloneElement(stackKey, self);
    }, Animation;
  }(object.default.Component);
  Constructor.contextTypes = {
    transitionGroup : createAct.object
  };
  Constructor.childContextTypes = {
    /**
     * @return {undefined}
     */
    transitionGroup : function() {
    }
  };
  Constructor.propTypes = {};
  Constructor.defaultProps = {
    in : false,
    mountOnEnter : false,
    unmountOnExit : false,
    appear : false,
    enter : true,
    exit : true,
    /** @type {function (): undefined} */
    onEnter : onExitRoute,
    /** @type {function (): undefined} */
    onEntering : onExitRoute,
    /** @type {function (): undefined} */
    onEntered : onExitRoute,
    /** @type {function (): undefined} */
    onExit : onExitRoute,
    /** @type {function (): undefined} */
    onExiting : onExitRoute,
    /** @type {function (): undefined} */
    onExited : onExitRoute
  };
  /** @type {number} */
  Constructor.UNMOUNTED = 0;
  /** @type {number} */
  Constructor.EXITED = 1;
  /** @type {number} */
  Constructor.ENTERING = 2;
  /** @type {number} */
  Constructor.ENTERED = 3;
  /** @type {number} */
  Constructor.EXITING = 4;
  obj.default = Constructor;
}, function(deepDataAndEvents, dataAndEvents, $sanitize) {
  /** @type {boolean} */
  dataAndEvents.__esModule = true;
  dataAndEvents.classNamesShape = dataAndEvents.timeoutsShape = void 0;
  /**
   * @param {string} Properties
   * @return {?}
   */
  dataAndEvents.transitionTimeout = function(Properties) {
    /** @type {string} */
    var x = "transition" + Properties + "Timeout";
    /** @type {string} */
    var objUid = "transition" + Properties;
    return function(map) {
      if (map[objUid]) {
        if (null == map[x]) {
          return new Error(x + " wasn't supplied to CSSTransitionGroup: this can cause unreliable animations and won't be supported in a future version of React. See https://fb.me/react-animation-transition-group-timeout for more information.");
        }
        if ("number" != typeof map[x]) {
          return new Error(x + " must be a number (in milliseconds)");
        }
      }
      return null;
    };
  };
  var self = function(d) {
    return d && d.__esModule ? d : {
      default : d
    };
  }($sanitize(38));
  dataAndEvents.timeoutsShape = self.default.oneOfType([self.default.number, self.default.shape({
    enter : self.default.number,
    exit : self.default.number
  }).isRequired]);
  dataAndEvents.classNamesShape = self.default.oneOfType([self.default.string, self.default.shape({
    enter : self.default.string,
    exit : self.default.string,
    active : self.default.string
  }), self.default.shape({
    enter : self.default.string,
    enterActive : self.default.string,
    exit : self.default.string,
    exitActive : self.default.string
  })]);
}, , , , , , , , , , , , , , , , , , , , , , , function(dataAndEvents, fnc, require) {
  /**
   * @return {?}
   */
  fnc.a = function() {
    return Object(beez.B)() ? ImpressumTermosNetzDG : Termos;
  };
  var beez = require(2);
  /** @type {string} */
  var Termos = "Termos";
  /** @type {string} */
  var ImpressumTermosNetzDG = "Impressum/Termos/NetzDG";
}, , , , , , , , , , , , , , , , , , , , , , , , , , , function(dataAndEvents, record, $) {
  /**
   * @return {undefined}
   */
  function attributes() {
    ctor.apply(this, arguments);
  }
  var ctor;
  var basePrototype;
  var object = $(234);
  var content = $(6);
  var tmpl = $.n(content);
  var self = $(0);
  $.n(self);
  $(315);
  basePrototype = (ctor = self.Component) && ctor.prototype;
  Object.assign(attributes, ctor);
  /** @type {function (): undefined} */
  (attributes.prototype = Object.create(basePrototype)).constructor = attributes;
  attributes.__superConstructor__ = ctor;
  /**
   * @return {?}
   */
  attributes.prototype.render = function() {
    return self.createElement(object.a, {
      className : this.props.className,
      hideCloseButton : true,
      onClose : this.props.onModalClose || this.props.onClose
    }, self.createElement("div", {
      className : "_os7n4"
    }, self.createElement("div", {
      className : "_dai3p"
    }, tmpl()(this.props.title)), self.createElement("div", {
      className : "_8yy3n"
    }, tmpl()(this.props.body)), self.createElement("div", {
      className : "_cx6oc"
    }, this.props.onClose && self.createElement("button", {
      className : "_2ar36",
      onClick : this.props.onClose,
      tabIndex : 2
    }, this.props.cancelLabel), this.props.onConfirm && self.createElement("button", {
      className : "_7qj6b",
      onClick : this.props.onConfirm,
      tabIndex : 1
    }, this.props.confirmLabel))));
  };
  attributes.defaultProps = {
    confirmLabel : "OK",
    cancelLabel : "Cancelar"
  };
  /** @type {function (): undefined} */
  record.a = attributes;
}, function(module, dataAndEvents, require) {
  /**
   * @param {?} text
   * @param {(Array|string)} value
   * @param {string} type
   * @param {Function} cb
   * @return {?}
   */
  function flush(text, value, type, cb) {
    if (text === type) {
      return true;
    }
    if (!type.startsWith(text)) {
      return false;
    }
    var el = type.slice(text.length);
    return!!value && (el = cb ? cb(el) : el, nodes.contains(el, value));
  }
  /**
   * @param {string} str
   * @return {?}
   */
  function trimRight(str) {
    return "Windows" === browser.platformName ? str.replace(/^\s*NT/, "") : str;
  }
  var browser = require(317);
  var nodes = require(319);
  var factory = require(240);
  var backbone = require(290);
  var jquery = {
    /**
     * @param {string} string
     * @return {?}
     */
    isBrowser : function(string) {
      return flush(browser.browserName, browser.browserFullVersion, string);
    },
    /**
     * @param {string} fix
     * @return {?}
     */
    isBrowserArchitecture : function(fix) {
      return flush(browser.browserArchitecture, null, fix);
    },
    /**
     * @param {string} fix
     * @return {?}
     */
    isDevice : function(fix) {
      return flush(browser.deviceName, null, fix);
    },
    /**
     * @param {string} fix
     * @return {?}
     */
    isEngine : function(fix) {
      return flush(browser.engineName, browser.engineVersion, fix);
    },
    /**
     * @param {string} fix
     * @return {?}
     */
    isPlatform : function(fix) {
      return flush(browser.platformName, browser.platformFullVersion, fix, trimRight);
    },
    /**
     * @param {string} fix
     * @return {?}
     */
    isPlatformArchitecture : function(fix) {
      return flush(browser.platformArchitecture, null, fix);
    }
  };
  module.exports = factory(jquery, backbone);
}, function(dataAndEvents, deepDataAndEvents, require) {
  var walk = require(1);
  var nodes = require(316);
  walk(nodes, "is201457c9");
}, function(module, dataAndEvents) {
  /** @type {string} */
  module.exports = "._os7n4{background-color:#fff;width:330px}._8yy3n,._dai3p{text-align:center}._dai3p{-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;border-bottom:1px solid #efefef;font-size:14px;font-weight:600;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;padding:12px 16px}._8yy3n{padding:16px 44px}._cx6oc{-webkit-box-align:stretch;-webkit-align-items:stretch;-ms-flex-align:stretch;align-items:stretch;border-top:1px solid #efefef;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;height:44px}._2ar36,._7qj6b{background:0 0;border:0;cursor:pointer;display:block;-webkit-box-flex:1;-webkit-flex:1 0;-ms-flex:1 0;flex:1 0;font-weight:600;height:100%}._7qj6b{border-left:1px solid #efefef;color:#3897f0}@media screen and (max-width:735px){._os7n4{margin:16px;width:auto}}";
}, function(module, dataAndEvents, $sanitize) {
  /** @type {string} */
  var platformVersion = "Unknown";
  var DEPENDENCIES = {
    "Mac OS" : "Mac OS X"
  };
  var data = (new ($sanitize(318))).getResult();
  var version = function(pair) {
    if (!pair) {
      return{
        major : "",
        minor : ""
      };
    }
    var verParts = pair.split(".");
    return{
      major : verParts[0],
      minor : verParts[1]
    };
  }(data.browser.version);
  var JsDiff = {
    browserArchitecture : data.cpu.architecture || platformVersion,
    browserFullVersion : data.browser.version || platformVersion,
    browserMinorVersion : version.minor || platformVersion,
    browserName : data.browser.name || platformVersion,
    browserVersion : data.browser.major || platformVersion,
    deviceName : data.device.model || platformVersion,
    engineName : data.engine.name || platformVersion,
    engineVersion : data.engine.version || platformVersion,
    platformArchitecture : data.cpu.architecture || platformVersion,
    platformName : function(dep) {
      return DEPENDENCIES[dep] || dep;
    }(data.os.name) || platformVersion,
    platformVersion : data.os.version || platformVersion,
    platformFullVersion : data.os.version || platformVersion
  };
  module.exports = JsDiff;
}, function(module, arg, test) {
  var result;
  !function(root, dataAndEvents) {
    /** @type {string} */
    var attrs = "model";
    /** @type {string} */
    var info = "name";
    /** @type {string} */
    var t = "type";
    /** @type {string} */
    var VENDOR = "vendor";
    /** @type {string} */
    var VERSION = "version";
    /** @type {string} */
    var MOBILE = "mobile";
    /** @type {string} */
    var TABLET = "tablet";
    var util = {
      /**
       * @param {Object} b
       * @param {Object} context
       * @return {?}
       */
      extend : function(b, context) {
        var a = {};
        var c;
        for (c in b) {
          if (context[c] && context[c].length % 2 == 0) {
            a[c] = context[c].concat(b[c]);
          } else {
            a[c] = b[c];
          }
        }
        return a;
      },
      /**
       * @param {Object} fn
       * @param {Object} property
       * @return {?}
       */
      has : function(fn, property) {
        return "string" == typeof fn && -1 !== property.toLowerCase().indexOf(fn.toLowerCase());
      },
      /**
       * @param {Object} str
       * @return {?}
       */
      lowerize : function(str) {
        return str.toLowerCase();
      },
      /**
       * @param {Function} types
       * @return {?}
       */
      major : function(types) {
        return "string" == typeof types ? types.replace(/[^\d\.]/g, "").split(".")[0] : void 0;
      },
      /**
       * @param {string} string1
       * @return {?}
       */
      trim : function(string1) {
        return string1.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
      }
    };
    var mapper = {
      /**
       * @return {?}
       */
      rgx : function() {
        var result;
        var bi;
        var resLength;
        var p;
        var q;
        var res;
        var match;
        /** @type {number} */
        var i = 0;
        /** @type {Arguments} */
        var a = arguments;
        for (;i < a.length && !res;) {
          var b = a[i];
          var props = a[i + 1];
          if (void 0 === result) {
            result = {};
            for (p in props) {
              if (props.hasOwnProperty(p)) {
                if ("object" == typeof(q = props[p])) {
                  result[q[0]] = void 0;
                } else {
                  result[q] = void 0;
                }
              }
            }
          }
          /** @type {number} */
          bi = resLength = 0;
          for (;bi < b.length && !res;) {
            if (res = b[bi++].exec(this.getUA())) {
              /** @type {number} */
              p = 0;
              for (;p < props.length;p++) {
                match = res[++resLength];
                if ("object" == typeof(q = props[p]) && q.length > 0) {
                  if (2 == q.length) {
                    if ("function" == typeof q[1]) {
                      result[q[0]] = q[1].call(this, match);
                    } else {
                      result[q[0]] = q[1];
                    }
                  } else {
                    if (3 == q.length) {
                      if ("function" != typeof q[1] || q[1].exec && q[1].test) {
                        result[q[0]] = match ? match.replace(q[1], q[2]) : void 0;
                      } else {
                        result[q[0]] = match ? q[1].call(this, match, q[2]) : void 0;
                      }
                    } else {
                      if (4 == q.length) {
                        result[q[0]] = match ? q[3].call(this, match.replace(q[1], q[2])) : void 0;
                      }
                    }
                  }
                } else {
                  result[q] = match || void 0;
                }
              }
            }
          }
          i += 2;
        }
        return result;
      },
      /**
       * @param {Object} s
       * @param {Object} map
       * @return {?}
       */
      str : function(s, map) {
        var i;
        for (i in map) {
          if ("object" == typeof map[i] && map[i].length > 0) {
            /** @type {number} */
            var j = 0;
            for (;j < map[i].length;j++) {
              if (util.has(map[i][j], s)) {
                return "?" === i ? void 0 : i;
              }
            }
          } else {
            if (util.has(map[i], s)) {
              return "?" === i ? void 0 : i;
            }
          }
        }
        return s;
      }
    };
    var maps = {
      browser : {
        oldsafari : {
          version : {
            "1.0" : "/8",
            "1.2" : "/1",
            "1.3" : "/3",
            "2.0" : "/412",
            "2.0.2" : "/416",
            "2.0.3" : "/417",
            "2.0.4" : "/419",
            "?" : "/"
          }
        }
      },
      device : {
        amazon : {
          model : {
            "Fire Phone" : ["SD", "KF"]
          }
        },
        sprint : {
          model : {
            "Evo Shift 4G" : "7373KT"
          },
          vendor : {
            HTC : "APA",
            Sprint : "Sprint"
          }
        }
      },
      os : {
        windows : {
          version : {
            ME : "4.90",
            "NT 3.11" : "NT3.51",
            "NT 4.0" : "NT4.0",
            2E3 : "NT 5.0",
            XP : ["NT 5.1", "NT 5.2"],
            Vista : "NT 6.0",
            7 : "NT 6.1",
            8 : "NT 6.2",
            "8.1" : "NT 6.3",
            10 : ["NT 6.4", "NT 10.0"],
            RT : "ARM"
          }
        }
      }
    };
    var regexes = {
      browser : [[/(opera\smini)\/([\w\.-]+)/i, /(opera\s[mobiletab]+).+version\/([\w\.-]+)/i, /(opera).+version\/([\w\.]+)/i, /(opera)[\/\s]+([\w\.]+)/i], [info, VERSION], [/(opios)[\/\s]+([\w\.]+)/i], [[info, "Opera Mini"], VERSION], [/\s(opr)\/([\w\.]+)/i], [[info, "Opera"], VERSION], [/(kindle)\/([\w\.]+)/i, /(lunascape|maxthon|netfront|jasmine|blazer)[\/\s]?([\w\.]+)*/i, /(avant\s|iemobile|slim|baidu)(?:browser)?[\/\s]?([\w\.]*)/i, /(?:ms|\()(ie)\s([\w\.]+)/i, /(rekonq)\/([\w\.]+)*/i, /(chromium|flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron|vivaldi|iridium|phantomjs)\/([\w\.-]+)/i],
      [info, VERSION], [/(trident).+rv[:\s]([\w\.]+).+like\sgecko/i], [[info, "IE"], VERSION], [/(edge)\/((\d+)?[\w\.]+)/i], [info, VERSION], [/(yabrowser)\/([\w\.]+)/i], [[info, "Yandex"], VERSION], [/(comodo_dragon)\/([\w\.]+)/i], [[info, /_/g, " "], VERSION], [/(micromessenger)\/([\w\.]+)/i], [[info, "WeChat"], VERSION], [/xiaomi\/miuibrowser\/([\w\.]+)/i], [VERSION, [info, "MIUI Browser"]], [/\swv\).+(chrome)\/([\w\.]+)/i], [[info, /(.+)/, "$1 WebView"], VERSION], [/android.+samsungbrowser\/([\w\.]+)/i,
      /android.+version\/([\w\.]+)\s+(?:mobile\s?safari|safari)*/i], [VERSION, [info, "Android Browser"]], [/(chrome|omniweb|arora|[tizenoka]{5}\s?browser)\/v?([\w\.]+)/i, /(qqbrowser)[\/\s]?([\w\.]+)/i], [info, VERSION], [/(uc\s?browser)[\/\s]?([\w\.]+)/i, /ucweb.+(ucbrowser)[\/\s]?([\w\.]+)/i, /juc.+(ucweb)[\/\s]?([\w\.]+)/i], [[info, "UCBrowser"], VERSION], [/(dolfin)\/([\w\.]+)/i], [[info, "Dolphin"], VERSION], [/((?:android.+)crmo|crios)\/([\w\.]+)/i], [[info, "Chrome"], VERSION], [/;fbav\/([\w\.]+);/i],
      [VERSION, [info, "Facebook"]], [/fxios\/([\w\.-]+)/i], [VERSION, [info, "Firefox"]], [/version\/([\w\.]+).+?mobile\/\w+\s(safari)/i], [VERSION, [info, "Mobile Safari"]], [/version\/([\w\.]+).+?(mobile\s?safari|safari)/i], [VERSION, info], [/webkit.+?(mobile\s?safari|safari)(\/[\w\.]+)/i], [info, [VERSION, mapper.str, maps.browser.oldsafari.version]], [/(konqueror)\/([\w\.]+)/i, /(webkit|khtml)\/([\w\.]+)/i], [info, VERSION], [/(navigator|netscape)\/([\w\.-]+)/i], [[info, "Netscape"], VERSION],
      [/(swiftfox)/i, /(icedragon|iceweasel|camino|chimera|fennec|maemo\sbrowser|minimo|conkeror)[\/\s]?([\w\.\+]+)/i, /(firefox|seamonkey|k-meleon|icecat|iceape|firebird|phoenix)\/([\w\.-]+)/i, /(mozilla)\/([\w\.]+).+rv\:.+gecko\/\d+/i, /(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|sleipnir)[\/\s]?([\w\.]+)/i, /(links)\s\(([\w\.]+)/i, /(gobrowser)\/?([\w\.]+)*/i, /(ice\s?browser)\/v?([\w\._]+)/i, /(mosaic)[\/\s]([\w\.]+)/i], [info, VERSION]],
      cpu : [[/(?:(amd|x(?:(?:86|64)[_-])?|wow|win)64)[;\)]/i], [["architecture", "amd64"]], [/(ia32(?=;))/i], [["architecture", util.lowerize]], [/((?:i[346]|x)86)[;\)]/i], [["architecture", "ia32"]], [/windows\s(ce|mobile);\sppc;/i], [["architecture", "arm"]], [/((?:ppc|powerpc)(?:64)?)(?:\smac|;|\))/i], [["architecture", /ower/, "", util.lowerize]], [/(sun4\w)[;\)]/i], [["architecture", "sparc"]], [/((?:avr32|ia64(?=;))|68k(?=\))|arm(?:64|(?=v\d+;))|(?=atmel\s)avr|(?:irix|mips|sparc)(?:64)?(?=;)|pa-risc)/i],
      [["architecture", util.lowerize]]],
      device : [[/\((ipad|playbook);[\w\s\);-]+(rim|apple)/i], [attrs, VENDOR, [t, TABLET]], [/applecoremedia\/[\w\.]+ \((ipad)/], [attrs, [VENDOR, "Apple"], [t, TABLET]], [/(apple\s{0,1}tv)/i], [[attrs, "Apple TV"], [VENDOR, "Apple"]], [/(archos)\s(gamepad2?)/i, /(hp).+(touchpad)/i, /(hp).+(tablet)/i, /(kindle)\/([\w\.]+)/i, /\s(nook)[\w\s]+build\/(\w+)/i, /(dell)\s(strea[kpr\s\d]*[\dko])/i], [VENDOR, attrs, [t, TABLET]], [/(kf[A-z]+)\sbuild\/[\w\.]+.*silk\//i], [attrs, [VENDOR, "Amazon"], [t, TABLET]],
      [/(sd|kf)[0349hijorstuw]+\sbuild\/[\w\.]+.*silk\//i], [[attrs, mapper.str, maps.device.amazon.model], [VENDOR, "Amazon"], [t, MOBILE]], [/\((ip[honed|\s\w*]+);.+(apple)/i], [attrs, VENDOR, [t, MOBILE]], [/\((ip[honed|\s\w*]+);/i], [attrs, [VENDOR, "Apple"], [t, MOBILE]], [/(blackberry)[\s-]?(\w+)/i, /(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|huawei|meizu|motorola|polytron)[\s_-]?([\w-]+)*/i, /(hp)\s([\w\s]+\w)/i, /(asus)-?(\w+)/i], [VENDOR, attrs, [t, MOBILE]], [/\(bb10;\s(\w+)/i],
      [attrs, [VENDOR, "BlackBerry"], [t, MOBILE]], [/android.+(transfo[prime\s]{4,10}\s\w+|eeepc|slider\s\w+|nexus 7|padfone)/i], [attrs, [VENDOR, "Asus"], [t, TABLET]], [/(sony)\s(tablet\s[ps])\sbuild\//i, /(sony)?(?:sgp.+)\sbuild\//i], [[VENDOR, "Sony"], [attrs, "Xperia Tablet"], [t, TABLET]], [/(?:sony)?(?:(?:(?:c|d)\d{4})|(?:so[-l].+))\sbuild\//i], [[VENDOR, "Sony"], [attrs, "Xperia Phone"], [t, MOBILE]], [/\s(ouya)\s/i, /(nintendo)\s([wids3u]+)/i], [VENDOR, attrs, [t, "console"]], [/android.+;\s(shield)\sbuild/i],
      [attrs, [VENDOR, "Nvidia"], [t, "console"]], [/(playstation\s[34portablevi]+)/i], [attrs, [VENDOR, "Sony"], [t, "console"]], [/(sprint\s(\w+))/i], [[VENDOR, mapper.str, maps.device.sprint.vendor], [attrs, mapper.str, maps.device.sprint.model], [t, MOBILE]], [/(lenovo)\s?(S(?:5000|6000)+(?:[-][\w+]))/i], [VENDOR, attrs, [t, TABLET]], [/(htc)[;_\s-]+([\w\s]+(?=\))|\w+)*/i, /(zte)-(\w+)*/i, /(alcatel|geeksphone|huawei|lenovo|nexian|panasonic|(?=;\s)sony)[_\s-]?([\w-]+)*/i], [VENDOR, [attrs, /_/g,
      " "], [t, MOBILE]], [/(nexus\s9)/i], [attrs, [VENDOR, "HTC"], [t, TABLET]], [/(nexus\s6p)/i], [attrs, [VENDOR, "Huawei"], [t, MOBILE]], [/(microsoft);\s(lumia[\s\w]+)/i], [VENDOR, attrs, [t, MOBILE]], [/[\s\(;](xbox(?:\sone)?)[\s\);]/i], [attrs, [VENDOR, "Microsoft"], [t, "console"]], [/(kin\.[onetw]{3})/i], [[attrs, /\./g, " "], [VENDOR, "Microsoft"], [t, MOBILE]], [/\s(milestone|droid(?:[2-4x]|\s(?:bionic|x2|pro|razr))?(:?\s4g)?)[\w\s]+build\//i, /mot[\s-]?(\w+)*/i, /(XT\d{3,4}) build\//i,
      /(nexus\s6)/i], [attrs, [VENDOR, "Motorola"], [t, MOBILE]], [/android.+\s(mz60\d|xoom[\s2]{0,2})\sbuild\//i], [attrs, [VENDOR, "Motorola"], [t, TABLET]], [/hbbtv\/\d+\.\d+\.\d+\s+\([\w\s]*;\s*(\w[^;]*);([^;]*)/i], [[VENDOR, util.trim], [attrs, util.trim], [t, "smarttv"]], [/hbbtv.+maple;(\d+)/i], [[attrs, /^/, "SmartTV"], [VENDOR, "Samsung"], [t, "smarttv"]], [/\(dtv[\);].+(aquos)/i], [attrs, [VENDOR, "Sharp"], [t, "smarttv"]], [/android.+((sch-i[89]0\d|shw-m380s|gt-p\d{4}|gt-n\d+|sgh-t8[56]9|nexus 10))/i,
      /((SM-T\w+))/i], [[VENDOR, "Samsung"], attrs, [t, TABLET]], [/smart-tv.+(samsung)/i], [VENDOR, [t, "smarttv"], attrs], [/((s[cgp]h-\w+|gt-\w+|galaxy\snexus|sm-\w[\w\d]+))/i, /(sam[sung]*)[\s-]*(\w+-?[\w-]*)*/i, /sec-((sgh\w+))/i], [[VENDOR, "Samsung"], attrs, [t, MOBILE]], [/sie-(\w+)*/i], [attrs, [VENDOR, "Siemens"], [t, MOBILE]], [/(maemo|nokia).*(n900|lumia\s\d+)/i, /(nokia)[\s_-]?([\w-]+)*/i], [[VENDOR, "Nokia"], attrs, [t, MOBILE]], [/android\s3\.[\s\w;-]{10}(a\d{3})/i], [attrs, [VENDOR,
      "Acer"], [t, TABLET]], [/android\s3\.[\s\w;-]{10}(lg?)-([06cv9]{3,4})/i], [[VENDOR, "LG"], attrs, [t, TABLET]], [/(lg) netcast\.tv/i], [VENDOR, attrs, [t, "smarttv"]], [/(nexus\s[45])/i, /lg[e;\s\/-]+(\w+)*/i], [attrs, [VENDOR, "LG"], [t, MOBILE]], [/android.+(ideatab[a-z0-9\-\s]+)/i], [attrs, [VENDOR, "Lenovo"], [t, TABLET]], [/linux;.+((jolla));/i], [VENDOR, attrs, [t, MOBILE]], [/((pebble))app\/[\d\.]+\s/i], [VENDOR, attrs, [t, "wearable"]], [/android.+;\s(glass)\s\d/i], [attrs, [VENDOR,
      "Google"], [t, "wearable"]], [/android.+(\w+)\s+build\/hm\1/i, /android.+(hm[\s\-_]*note?[\s_]*(?:\d\w)?)\s+build/i, /android.+(mi[\s\-_]*(?:one|one[\s_]plus|note lte)?[\s_]*(?:\d\w)?)\s+build/i], [[attrs, /_/g, " "], [VENDOR, "Xiaomi"], [t, MOBILE]], [/android.+a000(1)\s+build/i], [attrs, [VENDOR, "OnePlus"], [t, MOBILE]], [/\s(tablet)[;\/]/i, /\s(mobile)(?:[;\/]|\ssafari)/i], [[t, util.lowerize], VENDOR, attrs]],
      engine : [[/windows.+\sedge\/([\w\.]+)/i], [VERSION, [info, "EdgeHTML"]], [/(presto)\/([\w\.]+)/i, /(webkit|trident|netfront|netsurf|amaya|lynx|w3m)\/([\w\.]+)/i, /(khtml|tasman|links)[\/\s]\(?([\w\.]+)/i, /(icab)[\/\s]([23]\.[\d\.]+)/i], [info, VERSION], [/rv\:([\w\.]+).*(gecko)/i], [VERSION, info]],
      os : [[/microsoft\s(windows)\s(vista|xp)/i], [info, VERSION], [/(windows)\snt\s6\.2;\s(arm)/i, /(windows\sphone(?:\sos)*)[\s\/]?([\d\.\s]+\w)*/i, /(windows\smobile|windows)[\s\/]?([ntce\d\.\s]+\w)/i], [info, [VERSION, mapper.str, maps.os.windows.version]], [/(win(?=3|9|n)|win\s9x\s)([nt\d\.]+)/i], [[info, "Windows"], [VERSION, mapper.str, maps.os.windows.version]], [/\((bb)(10);/i], [[info, "BlackBerry"], VERSION], [/(blackberry)\w*\/?([\w\.]+)*/i, /(tizen)[\/\s]([\w\.]+)/i, /(android|webos|palm\sos|qnx|bada|rim\stablet\sos|meego|contiki)[\/\s-]?([\w\.]+)*/i,
      /linux;.+(sailfish);/i], [info, VERSION], [/(symbian\s?os|symbos|s60(?=;))[\/\s-]?([\w\.]+)*/i], [[info, "Symbian"], VERSION], [/\((series40);/i], [info], [/mozilla.+\(mobile;.+gecko.+firefox/i], [[info, "Firefox OS"], VERSION], [/(nintendo|playstation)\s([wids34portablevu]+)/i, /(mint)[\/\s\(]?(\w+)*/i, /(mageia|vectorlinux)[;\s]/i, /(joli|[kxln]?ubuntu|debian|[open]*suse|gentoo|(?=\s)arch|slackware|fedora|mandriva|centos|pclinuxos|redhat|zenwalk|linpus)[\/\s-]?(?!chrom)([\w\.-]+)*/i, /(hurd|linux)\s?([\w\.]+)*/i,
      /(gnu)\s?([\w\.]+)*/i], [info, VERSION], [/(cros)\s[\w]+\s([\w\.]+\w)/i], [[info, "Chromium OS"], VERSION], [/(sunos)\s?([\w\.]+\d)*/i], [[info, "Solaris"], VERSION], [/\s([frentopc-]{0,4}bsd|dragonfly)\s?([\w\.]+)*/i], [info, VERSION], [/(haiku)\s(\w+)/i], [info, VERSION], [/(ip[honead]+)(?:.*os\s([\w]+)*\slike\smac|;\sopera)/i], [[info, "iOS"], [VERSION, /_/g, "."]], [/(mac\sos\sx)\s?([\w\s\.]+\w)*/i, /(macintosh|mac(?=_powerpc)\s)/i], [[info, "Mac OS"], [VERSION, /_/g, "."]], [/((?:open)?solaris)[\/\s-]?([\w\.]+)*/i,
      /(aix)\s((\d)(?=\.|\)|\s)[\w\.]*)*/i, /(plan\s9|minix|beos|os\/2|amigaos|morphos|risc\sos|openvms)/i, /(unix)\s?([\w\.]+)*/i], [info, VERSION]]
    };
    /**
     * @param {Function} tests
     * @param {string} func
     * @return {?}
     */
    var UAParser = function(tests, func) {
      if (!(this instanceof UAParser)) {
        return(new UAParser(tests, func)).getResult();
      }
      var doneResults = tests || (root && (root.navigator && root.navigator.userAgent) ? root.navigator.userAgent : "");
      var data = func ? util.extend(regexes, func) : regexes;
      return this.getBrowser = function() {
        var self = mapper.rgx.apply(this, data.browser);
        return self.major = util.major(self.version), self;
      }, this.getCPU = function() {
        return mapper.rgx.apply(this, data.cpu);
      }, this.getDevice = function() {
        return mapper.rgx.apply(this, data.device);
      }, this.getEngine = function() {
        return mapper.rgx.apply(this, data.engine);
      }, this.getOS = function() {
        return mapper.rgx.apply(this, data.os);
      }, this.getResult = function() {
        return{
          ua : this.getUA(),
          browser : this.getBrowser(),
          engine : this.getEngine(),
          os : this.getOS(),
          device : this.getDevice(),
          cpu : this.getCPU()
        };
      }, this.getUA = function() {
        return doneResults;
      }, this.setUA = function(data) {
        return doneResults = data, this;
      }, this;
    };
    /** @type {string} */
    UAParser.VERSION = "0.7.12";
    UAParser.BROWSER = {
      NAME : info,
      MAJOR : "major",
      VERSION : VERSION
    };
    UAParser.CPU = {
      ARCHITECTURE : "architecture"
    };
    UAParser.DEVICE = {
      MODEL : attrs,
      VENDOR : VENDOR,
      TYPE : t,
      CONSOLE : "console",
      MOBILE : MOBILE,
      SMARTTV : "smarttv",
      TABLET : TABLET,
      WEARABLE : "wearable",
      EMBEDDED : "embedded"
    };
    UAParser.ENGINE = {
      NAME : info,
      VERSION : VERSION
    };
    UAParser.OS = {
      NAME : info,
      VERSION : VERSION
    };
    if (void 0 !== arg) {
      if (void 0 !== module) {
        if (module.exports) {
          /** @type {function (Function, string): ?} */
          arg = module.exports = UAParser;
        }
      }
      /** @type {function (Function, string): ?} */
      arg.UAParser = UAParser;
    } else {
      if (test(289)) {
        if (void 0 !== (result = function() {
          return UAParser;
        }.call(arg, test, arg, module))) {
          module.exports = result;
        }
      } else {
        /** @type {function (Function, string): ?} */
        root.UAParser = UAParser;
      }
    }
    var self = root.jQuery || root.Zepto;
    if (void 0 !== self) {
      var parser = new UAParser;
      self.ua = parser.getResult();
      /**
       * @return {?}
       */
      self.ua.get = function() {
        return parser.getUA();
      };
      /**
       * @param {Function} k
       * @return {undefined}
       */
      self.ua.set = function(k) {
        parser.setUA(k);
        var iterable = parser.getResult();
        var key;
        for (key in iterable) {
          self.ua[key] = iterable[key];
        }
      };
    }
  }("object" == typeof window ? window : this);
}, function(module, dataAndEvents, $sanitize) {
  /**
   * @param {string} c
   * @param {string} className
   * @return {?}
   */
  function find(c, className) {
    var parts = c.split(cmd);
    return parts.length > 1 ? parts.some(function(params) {
      return util.contains(params, className);
    }) : (c = parts[0].trim(), some(c, className));
  }
  /**
   * @param {string} collection
   * @param {string} i
   * @return {?}
   */
  function some(collection, i) {
    var match = collection.split(eventSplitter);
    if (match.length > 0 && match.length <= 2 || isString(false), 1 === match.length) {
      return callback(match[0], i);
    }
    var name = match[0];
    var ref = match[1];
    return func(name) && func(ref) || isString(false), callback(">=" + name, i) && callback("<=" + ref, i);
  }
  /**
   * @param {string} tag
   * @param {string} s
   * @return {?}
   */
  function callback(tag, s) {
    if ("" === (tag = tag.trim())) {
      return true;
    }
    var obj = s.split(slashSplit);
    var elements = split(tag);
    var length = elements.modifier;
    var i = elements.rangeComponents;
    switch(length) {
      case "<":
        return fn(obj, i);
      case "<=":
        return cb(obj, i);
      case ">=":
        return next(obj, i);
      case ">":
        return handler(obj, i);
      case "~":
      ;
      case "~>":
        return get(obj, i);
      default:
        return map(obj, i);
    }
  }
  /**
   * @param {Object} arg
   * @param {Object} value
   * @return {?}
   */
  function fn(arg, value) {
    return-1 === add(arg, value);
  }
  /**
   * @param {Object} arg
   * @param {Object} result
   * @return {?}
   */
  function cb(arg, result) {
    var type = add(arg, result);
    return-1 === type || 0 === type;
  }
  /**
   * @param {Object} arg
   * @param {Object} v
   * @return {?}
   */
  function map(arg, v) {
    return 0 === add(arg, v);
  }
  /**
   * @param {Object} arg
   * @param {Object} element
   * @return {?}
   */
  function next(arg, element) {
    var type = add(arg, element);
    return 1 === type || 0 === type;
  }
  /**
   * @param {Object} arg
   * @param {Object} v
   * @return {?}
   */
  function handler(arg, v) {
    return 1 === add(arg, v);
  }
  /**
   * @param {Object} elem
   * @param {Object} k
   * @return {?}
   */
  function get(elem, k) {
    var activeClassName = k.slice();
    var result = k.slice();
    if (result.length > 1) {
      result.pop();
    }
    /** @type {number} */
    var key = result.length - 1;
    /** @type {number} */
    var ret = parseInt(result[key], 10);
    return isUndefinedOrNull(ret) && (result[key] = ret + 1 + ""), next(elem, activeClassName) && fn(elem, result);
  }
  /**
   * @param {string} s
   * @return {?}
   */
  function split(s) {
    var lines = s.split(slashSplit);
    var feature = lines[0].match(typePattern);
    return feature || isString(false), {
      modifier : feature[1],
      rangeComponents : [feature[2]].concat(lines.slice(1))
    };
  }
  /**
   * @param {number} value
   * @return {?}
   */
  function isUndefinedOrNull(value) {
    return!isNaN(value) && isFinite(value);
  }
  /**
   * @param {string} name
   * @return {?}
   */
  function func(name) {
    return!split(name).modifier;
  }
  /**
   * @param {Array} text
   * @param {?} m
   * @return {undefined}
   */
  function debug(text, m) {
    var l = text.length;
    for (;l < m;l++) {
      /** @type {string} */
      text[l] = "0";
    }
  }
  /**
   * @param {Object} d
   * @param {Object} data
   * @return {?}
   */
  function done(d, data) {
    debug(d = d.slice(), (data = data.slice()).length);
    /** @type {number} */
    var j = 0;
    for (;j < data.length;j++) {
      var i = data[j].match(/^[x*]$/i);
      if (i && (data[j] = d[j] = "0", "*" === i[0] && j === data.length - 1)) {
        /** @type {number} */
        var k = j;
        for (;k < d.length;k++) {
          /** @type {string} */
          d[k] = "0";
        }
      }
    }
    return debug(data, d.length), [d, data];
  }
  /**
   * @param {string} value
   * @param {string} properties
   * @return {?}
   */
  function extend(value, properties) {
    var cDigit = value.match(core_rnotwhite)[1];
    var val2 = properties.match(core_rnotwhite)[1];
    /** @type {number} */
    var a = parseInt(cDigit, 10);
    /** @type {number} */
    var b = parseInt(val2, 10);
    return isUndefinedOrNull(a) && (isUndefinedOrNull(b) && a !== b) ? eq(a, b) : eq(value, properties);
  }
  /**
   * @param {(boolean|number|string)} a
   * @param {(boolean|number|string)} b
   * @return {?}
   */
  function eq(a, b) {
    return typeof a != typeof b && isString(false), a > b ? 1 : a < b ? -1 : 0;
  }
  /**
   * @param {Object} t
   * @param {Object} obj
   * @return {?}
   */
  function add(t, obj) {
    var node = done(t, obj);
    var rawParams = node[0];
    var codeSegments = node[1];
    /** @type {number} */
    var i = 0;
    for (;i < codeSegments.length;i++) {
      var style = extend(rawParams[i], codeSegments[i]);
      if (style) {
        return style;
      }
    }
    return 0;
  }
  var isString = $sanitize(60);
  /** @type {RegExp} */
  var slashSplit = /\./;
  /** @type {RegExp} */
  var cmd = /\|\|/;
  /** @type {RegExp} */
  var eventSplitter = /\s+\-\s+/;
  /** @type {RegExp} */
  var typePattern = /^(<=|<|=|>=|~>|~|>|)?\s*(.+)/;
  /** @type {RegExp} */
  var core_rnotwhite = /^(\d*)(.*)/;
  var util = {
    /**
     * @param {?} str
     * @param {string} value
     * @return {?}
     */
    contains : function(str, value) {
      return find(str.trim(), value.trim());
    }
  };
  module.exports = util;
}, , , , , , , function(module, dataAndEvents, $sanitize) {
  /**
   * @param {string} options
   * @return {?}
   */
  function getOptions(options) {
    return options && options.__esModule ? options : {
      default : options
    };
  }
  var obj = getOptions($sanitize(327));
  var opts = getOptions($sanitize(331));
  var opt = getOptions($sanitize(262));
  module.exports = {
    Transition : opt.default,
    TransitionGroup : opts.default,
    CSSTransition : obj.default
  };
}, function(module, mod, require) {
  /**
   * @param {string} options
   * @return {?}
   */
  function getOptions(options) {
    return options && options.__esModule ? options : {
      default : options
    };
  }
  /**
   * @param {?} bind
   * @param {Function} thisp
   * @return {undefined}
   */
  function forEach(bind, thisp) {
    if (!(bind instanceof thisp)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
  /**
   * @param {string} elem
   * @param {?} obj
   * @return {?}
   */
  function get(elem, obj) {
    if (!elem) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return!obj || "object" != typeof obj && "function" != typeof obj ? elem : obj;
  }
  /**
   * @param {Object} c
   * @param {Object} b
   * @return {undefined}
   */
  function create(c, b) {
    if ("function" != typeof b && null !== b) {
      throw new TypeError("Super expression must either be null or a function, not " + typeof b);
    }
    /** @type {Object} */
    c.prototype = Object.create(b && b.prototype, {
      constructor : {
        value : c,
        enumerable : false,
        writable : true,
        configurable : true
      }
    });
    if (b) {
      if (Object.setPrototypeOf) {
        Object.setPrototypeOf(c, b);
      } else {
        /** @type {Object} */
        c.__proto__ = b;
      }
    }
  }
  /** @type {boolean} */
  mod.__esModule = true;
  var extend = Object.assign || function(opt_attributes) {
    /** @type {number} */
    var i = 1;
    for (;i < arguments.length;i++) {
      var iterable = arguments[i];
      var key;
      for (key in iterable) {
        if (Object.prototype.hasOwnProperty.call(iterable, key)) {
          opt_attributes[key] = iterable[key];
        }
      }
    }
    return opt_attributes;
  };
  var functionStub = function(source) {
    if (source && source.__esModule) {
      return source;
    }
    var obj = {};
    if (null != source) {
      var prop;
      for (prop in source) {
        if (Object.prototype.hasOwnProperty.call(source, prop)) {
          obj[prop] = source[prop];
        }
      }
    }
    return obj.default = source, obj;
  }(require(38));
  var opt = getOptions(require(328));
  var options = getOptions(require(330));
  var opts = getOptions(require(0));
  var obj = getOptions(require(262));
  var Block = require(263);
  /**
   * @param {boolean} e
   * @param {string} one
   * @return {?}
   */
  var fn = function(e, one) {
    return one && one.split(" ").forEach(function(deepDataAndEvents) {
      return(0, opt.default)(e, deepDataAndEvents);
    });
  };
  /**
   * @param {boolean} fn
   * @param {(Error|string)} events
   * @return {?}
   */
  var eachEvent = function(fn, events) {
    return events && events.split(" ").forEach(function(deepDataAndEvents) {
      return(0, options.default)(fn, deepDataAndEvents);
    });
  };
  var err = (extend({}, obj.default.propTypes, {
    classNames : Block.classNamesShape,
    onEnter : functionStub.func,
    onEntering : functionStub.func,
    onEntered : functionStub.func,
    onExit : functionStub.func,
    onExiting : functionStub.func,
    onExited : functionStub.func
  }), function(value) {
    /**
     * @return {?}
     */
    function f() {
      var promise;
      var self;
      var suiteView;
      forEach(this, f);
      /** @type {number} */
      var l = arguments.length;
      /** @type {Array} */
      var args = Array(l);
      /** @type {number} */
      var i = 0;
      for (;i < l;i++) {
        args[i] = arguments[i];
      }
      return promise = self = get(this, value.call.apply(value, [this].concat(args))), self.onEnter = function(status, err) {
        var one = self.getClassNames(err ? "appear" : "enter").className;
        self.removeClasses(status, "exit");
        fn(status, one);
        if (self.props.onEnter) {
          self.props.onEnter(status);
        }
      }, self.onEntering = function(status, err) {
        var one = self.getClassNames(err ? "appear" : "enter").activeClassName;
        self.reflowAndAddClass(status, one);
        if (self.props.onEntering) {
          self.props.onEntering(status);
        }
      }, self.onEntered = function(status, err) {
        self.removeClasses(status, err ? "appear" : "enter");
        if (self.props.onEntered) {
          self.props.onEntered(status);
        }
      }, self.onExit = function(status) {
        var one = self.getClassNames("exit").className;
        self.removeClasses(status, "appear");
        self.removeClasses(status, "enter");
        fn(status, one);
        if (self.props.onExit) {
          self.props.onExit(status);
        }
      }, self.onExiting = function(status) {
        var one = self.getClassNames("exit").activeClassName;
        self.reflowAndAddClass(status, one);
        if (self.props.onExiting) {
          self.props.onExiting(status);
        }
      }, self.onExited = function(status) {
        self.removeClasses(status, "exit");
        if (self.props.onExited) {
          self.props.onExited(status);
        }
      }, self.getClassNames = function(method) {
        var url = self.props.classNames;
        var className = "string" != typeof url ? url[method] : url + "-" + method;
        return{
          className : className,
          activeClassName : "string" != typeof url ? url[method + "Active"] : className + "-active"
        };
      }, suiteView = promise, get(self, suiteView);
    }
    return create(f, value), f.prototype.removeClasses = function(value, event) {
      var data = this.getClassNames(event);
      var key = data.className;
      var activeClassName = data.activeClassName;
      if (key) {
        eachEvent(value, key);
      }
      if (activeClassName) {
        eachEvent(value, activeClassName);
      }
    }, f.prototype.reflowAndAddClass = function(e, one) {
      e.scrollTop;
      fn(e, one);
    }, f.prototype.render = function() {
      var oldconfig = extend({}, this.props);
      return delete oldconfig.classNames, opts.default.createElement(obj.default, extend({}, oldconfig, {
        onEnter : this.onEnter,
        onEntered : this.onEntered,
        onEntering : this.onEntering,
        onExit : this.onExit,
        onExiting : this.onExiting,
        onExited : this.onExited
      }));
    }, f;
  }(opts.default.Component));
  err.propTypes = {};
  mod.default = err;
  module.exports = mod.default;
}, function(module, global, $sanitize) {
  Object.defineProperty(global, "__esModule", {
    value : true
  });
  /**
   * @param {Function} tests
   * @param {string} c
   * @return {undefined}
   */
  global.default = function(tests, c) {
    if (tests.classList) {
      tests.classList.add(c);
    } else {
      if (!(0, obj.default)(tests)) {
        /** @type {string} */
        tests.className = tests.className + " " + c;
      }
    }
  };
  var obj = function(d) {
    return d && d.__esModule ? d : {
      default : d
    };
  }($sanitize(329));
  /** @type {function (Function, string): undefined} */
  module.exports = global.default;
}, function(module, global, dataAndEvents) {
  Object.defineProperty(global, "__esModule", {
    value : true
  });
  /**
   * @param {Function} tests
   * @param {string} str
   * @return {?}
   */
  global.default = function(tests, str) {
    return tests.classList ? !!str && tests.classList.contains(str) : -1 !== (" " + tests.className + " ").indexOf(" " + str + " ");
  };
  /** @type {function (Function, string): ?} */
  module.exports = global.default;
}, function(module, dataAndEvents, deepDataAndEvents) {
  /**
   * @param {Function} types
   * @param {string} c
   * @return {undefined}
   */
  module.exports = function(types, c) {
    if (types.classList) {
      types.classList.remove(c);
    } else {
      types.className = types.className.replace(new RegExp("(^|\\s)" + c + "(?:\\s|$)", "g"), "$1").replace(/\s+/g, " ").replace(/^\s*|\s*$/g, "");
    }
  };
}, function(module, mod, require) {
  /**
   * @param {string} value
   * @return {?}
   */
  function h(value) {
    return value && value.__esModule ? value : {
      default : value
    };
  }
  /**
   * @param {Object} iterable
   * @param {Array} arr
   * @return {?}
   */
  function each(iterable, arr) {
    var object = {};
    var key;
    for (key in iterable) {
      if (!(arr.indexOf(key) >= 0)) {
        if (Object.prototype.hasOwnProperty.call(iterable, key)) {
          object[key] = iterable[key];
        }
      }
    }
    return object;
  }
  /**
   * @param {?} object
   * @param {Function} Animation
   * @return {undefined}
   */
  function defineProperties(object, Animation) {
    if (!(object instanceof Animation)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
  /**
   * @param {string} dataAndEvents
   * @param {?} positionError
   * @return {?}
   */
  function fail(dataAndEvents, positionError) {
    if (!dataAndEvents) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return!positionError || "object" != typeof positionError && "function" != typeof positionError ? dataAndEvents : positionError;
  }
  /**
   * @param {Function} d
   * @param {Array} b
   * @return {undefined}
   */
  function f(d, b) {
    if ("function" != typeof b && null !== b) {
      throw new TypeError("Super expression must either be null or a function, not " + typeof b);
    }
    /** @type {Object} */
    d.prototype = Object.create(b && b.prototype, {
      constructor : {
        /** @type {Function} */
        value : d,
        enumerable : false,
        writable : true,
        configurable : true
      }
    });
    if (b) {
      if (Object.setPrototypeOf) {
        Object.setPrototypeOf(d, b);
      } else {
        /** @type {Array} */
        d.__proto__ = b;
      }
    }
  }
  /** @type {boolean} */
  mod.__esModule = true;
  var process = Object.assign || function(opt_attributes) {
    /** @type {number} */
    var i = 1;
    for (;i < arguments.length;i++) {
      var iterable = arguments[i];
      var key;
      for (key in iterable) {
        if (Object.prototype.hasOwnProperty.call(iterable, key)) {
          opt_attributes[key] = iterable[key];
        }
      }
    }
    return opt_attributes;
  };
  var obj = h(require(38));
  var selector = require(0);
  var elem = h(selector);
  var Block = require(332);
  var _ = Object.values || function(variables) {
    return Object.keys(variables).map(function(k) {
      return variables[k];
    });
  };
  var buf = (obj.default.any, obj.default.node, obj.default.bool, obj.default.bool, obj.default.bool, obj.default.func, {
    component : "div",
    /**
     * @param {?} dataAndEvents
     * @return {?}
     */
    childFactory : function(dataAndEvents) {
      return dataAndEvents;
    }
  });
  var err = function(_super) {
    /**
     * @param {Object} options
     * @param {?} easing
     * @return {?}
     */
    function Animation(options, easing) {
      defineProperties(this, Animation);
      var self = fail(this, _super.call(this, options, easing));
      return self.handleExited = function(i, value, $sanitize) {
        var arr2 = (0, Block.getChildMapping)(self.props.children);
        if (!(i in arr2)) {
          if ($sanitize) {
            $sanitize(value);
          }
          self.setState(function(group) {
            var ret = process({}, group.children);
            return delete ret[i], {
              children : ret
            };
          });
        }
      }, self.state = {
        children : (0, Block.getChildMapping)(options.children, function(item) {
          return(0, selector.cloneElement)(item, {
            /**
             * @param {boolean} value
             * @return {undefined}
             */
            onExited : function(value) {
              self.handleExited(item.key, value, item.props.onExited);
            },
            in : true,
            appear : self.getProp(item, "appear"),
            enter : self.getProp(item, "enter"),
            exit : self.getProp(item, "exit")
          });
        })
      }, self;
    }
    return f(Animation, _super), Animation.prototype.getChildContext = function() {
      return{
        transitionGroup : {
          isMounting : !this.appeared
        }
      };
    }, Animation.prototype.getProp = function(obj, name) {
      var old = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : this.props;
      return null != old[name] ? old[name] : obj.props[name];
    }, Animation.prototype.componentDidMount = function() {
      /** @type {boolean} */
      this.appeared = true;
    }, Animation.prototype.componentWillReceiveProps = function(millis) {
      var self = this;
      var children = this.state.children;
      var users = (0, Block.getChildMapping)(millis.children);
      var results = (0, Block.mergeChildMappings)(children, users);
      Object.keys(results).forEach(function(id) {
        var item = results[id];
        if ((0, selector.isValidElement)(item)) {
          /**
           * @param {boolean} value
           * @return {undefined}
           */
          var extend = function(value) {
            self.handleExited(item.key, value, item.props.onExited);
          };
          /** @type {boolean} */
          var attrs = id in children;
          /** @type {boolean} */
          var destroyed = id in users;
          var args = children[id];
          var modifiedOnly = (0, selector.isValidElement)(args) && !args.props.in;
          if (!destroyed || attrs && !modifiedOnly) {
            if (destroyed || (!attrs || modifiedOnly)) {
              if (destroyed) {
                if (attrs) {
                  if ((0, selector.isValidElement)(args)) {
                    results[id] = (0, selector.cloneElement)(item, {
                      /** @type {function (boolean): undefined} */
                      onExited : extend,
                      in : args.props.in,
                      exit : self.getProp(item, "exit", millis),
                      enter : self.getProp(item, "enter", millis)
                    });
                  }
                }
              }
            } else {
              results[id] = (0, selector.cloneElement)(item, {
                in : false
              });
            }
          } else {
            results[id] = (0, selector.cloneElement)(item, {
              /** @type {function (boolean): undefined} */
              onExited : extend,
              in : true,
              exit : self.getProp(item, "exit", millis),
              enter : self.getProp(item, "enter", millis)
            });
          }
        }
      });
      this.setState({
        children : results
      });
    }, Animation.prototype.render = function() {
      var node = this.props;
      var nodeName = node.component;
      var val = node.childFactory;
      var opt = each(node, ["component", "childFactory"]);
      var variables = this.state.children;
      return delete opt.appear, delete opt.enter, delete opt.exit, elem.default.createElement(nodeName, opt, _(variables).map(val));
    }, Animation;
  }(elem.default.Component);
  err.childContextTypes = {
    transitionGroup : obj.default.object.isRequired
  };
  err.propTypes = {};
  err.defaultProps = buf;
  mod.default = err;
  module.exports = mod.default;
}, function(deepDataAndEvents, dataAndEvents, topic) {
  /** @type {boolean} */
  dataAndEvents.__esModule = true;
  /**
   * @param {(Node|string)} children
   * @param {?} callback
   * @return {?}
   */
  dataAndEvents.getChildMapping = function(children, callback) {
    /**
     * @param {Object} value
     * @return {?}
     */
    var group = function(value) {
      return callback && (0, out.isValidElement)(value) ? callback(value) : value;
    };
    /** @type {Object} */
    var cache = Object.create(null);
    return children && out.Children.map(children, function(child) {
      return child;
    }).forEach(function(obj) {
      cache[obj.key] = group(obj);
    }), cache;
  };
  /**
   * @param {Object} defaults
   * @param {Object} update
   * @return {?}
   */
  dataAndEvents.mergeChildMappings = function(defaults, update) {
    /**
     * @param {string} i
     * @return {?}
     */
    function process(i) {
      return i in update ? update[i] : defaults[i];
    }
    defaults = defaults || {};
    update = update || {};
    /** @type {Object} */
    var mat = Object.create(null);
    /** @type {Array} */
    var y = [];
    var j;
    for (j in defaults) {
      if (j in update) {
        if (y.length) {
          /** @type {Array} */
          mat[j] = y;
          /** @type {Array} */
          y = [];
        }
      } else {
        y.push(j);
      }
    }
    var i = void 0;
    var obj = {};
    var prop;
    for (prop in update) {
      if (mat[prop]) {
        /** @type {number} */
        i = 0;
        for (;i < mat[prop].length;i++) {
          var last = mat[prop][i];
          obj[mat[prop][i]] = process(last);
        }
      }
      obj[prop] = process(prop);
    }
    /** @type {number} */
    i = 0;
    for (;i < y.length;i++) {
      obj[y[i]] = process(y[i]);
    }
    return obj;
  };
  var out = topic(0);
}, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , function(dataAndEvents, fnc, $) {
  /**
   * @return {?}
   */
  function parse() {
    return Object.keys(a).filter(function(prefix) {
      return "ar" !== a[prefix].primary_code && "ur" !== a[prefix].primary_code;
    }).map(function(prefix) {
      return a[prefix];
    });
  }
  /**
   * @param {Function} tests
   * @return {undefined}
   */
  function attributes(tests) {
    var me = this;
    parent.constructor.call(this, tests);
    /**
     * @param {boolean} value
     * @return {undefined}
     */
    this.$LanguageSwitcher1 = function(value) {
      me.props.onLanguageSelect(value.target.value);
    };
    /**
     * @param {?} ast
     * @return {undefined}
     */
    this.$LanguageSwitcher2 = function(ast) {
      me.setState({
        focused : false
      });
    };
    /**
     * @param {?} dataAndEvents
     * @return {undefined}
     */
    this.$LanguageSwitcher3 = function(dataAndEvents) {
      me.setState({
        focused : true
      });
    };
    /**
     * @return {?}
     */
    this.$LanguageSwitcher4 = function() {
      var success = Object(options.g)();
      /** @type {boolean} */
      var callback2 = true;
      /** @type {boolean} */
      var o = false;
      var bulk = void 0;
      try {
        var res;
        var self = parse()[Symbol.iterator]();
        for (;!(callback2 = (res = self.next()).done);callback2 = true) {
          var data = res.value;
          if (data.primary_code === success) {
            return data.display_name;
          }
        }
      } catch (fn) {
        /** @type {boolean} */
        o = true;
        bulk = fn;
      } finally {
        try {
          if (!callback2) {
            if (self.return) {
              self.return();
            }
          }
        } finally {
          if (o) {
            throw bulk;
          }
        }
      }
      return output;
    };
    this.state = {
      focused : false
    };
  }
  /**
   * @return {undefined}
   */
  function opt_attributes() {
    ctor.apply(this, arguments);
  }
  var data;
  var parent;
  var options = $(2);
  var content = $(11);
  var tmpl = $.n(content);
  var side = $(466);
  var matrix = $.n(side);
  var self = $(0);
  $(21);
  $(464);
  var a = matrix.a;
  /** @type {string} */
  var output = "English";
  data = self.Component;
  parent = data && data.prototype;
  Object.assign(attributes, data);
  /** @type {function (Function): undefined} */
  (attributes.prototype = Object.create(parent)).constructor = attributes;
  attributes.__superConstructor__ = data;
  /**
   * @param {?} data
   * @return {?}
   */
  attributes.prototype.$LanguageSwitcher5 = function(data) {
    return self.createElement("option", {
      key : data.primary_code,
      value : data.primary_code
    }, data.display_name);
  };
  /**
   * @return {?}
   */
  attributes.prototype.render = function() {
    return self.createElement("span", {
      className : tmpl()("_pqycz" + (this.state.focused ? " _9a0zo" : ""), this.props.className)
    }, this.props.useCurrentLanguageLabel ? self.createElement("div", {
      className : "_8zvt6"
    }, self.createElement("span", null, this.$LanguageSwitcher4()), self.createElement("span", {
      className : "coreSpriteChevronDownGrey _r81pp"
    })) : "Idioma", self.createElement("select", {
      className : "_fsoey",
      onBlur : this.$LanguageSwitcher2,
      onChange : this.$LanguageSwitcher1,
      onFocus : this.$LanguageSwitcher3,
      value : this.props.languageCode
    }, parse().map(this.$LanguageSwitcher5)));
  };
  var ctor;
  var basePrototype;
  /** @type {function (Function): undefined} */
  var def = attributes;
  var opts = $(292);
  var drawArc = Object.assign || function(opt_attributes) {
    /** @type {number} */
    var i = 1;
    for (;i < arguments.length;i++) {
      var iterable = arguments[i];
      var key;
      for (key in iterable) {
        if (Object.prototype.hasOwnProperty.call(iterable, key)) {
          opt_attributes[key] = iterable[key];
        }
      }
    }
    return opt_attributes;
  };
  var postdata = {
    path : "/"
  };
  basePrototype = (ctor = self.Component) && ctor.prototype;
  Object.assign(opt_attributes, ctor);
  /** @type {function (): undefined} */
  (opt_attributes.prototype = Object.create(basePrototype)).constructor = opt_attributes;
  opt_attributes.__superConstructor__ = ctor;
  /**
   * @param {?} deepDataAndEvents
   * @return {undefined}
   */
  opt_attributes.prototype.$LanguageSwitcherContainer1 = function(deepDataAndEvents) {
    Object(opts.a)("ig_lang", deepDataAndEvents, postdata);
    window.location.reload();
  };
  /**
   * @return {?}
   */
  opt_attributes.prototype.shouldComponentUpdate = function() {
    return false;
  };
  /**
   * @return {?}
   */
  opt_attributes.prototype.render = function() {
    return self.createElement(def, drawArc({}, this.props, {
      languageCode : Object(options.g)(),
      onLanguageSelect : this.$LanguageSwitcherContainer1
    }));
  };
  /** @type {function (): undefined} */
  fnc.a = opt_attributes;
}, function(dataAndEvents, type, self) {
  self.d(type, "a", function() {
    return n;
  });
  self.d(type, "b", function() {
    return r;
  });
  var frame = self(374);
  var n = (self.n(frame), Object(frame.asyncComponent)({
    /**
     * @return {?}
     */
    resolve : function() {
      return self.e(8).then(self.bind(null, 459)).then(function(dataAndEvents) {
        return dataAndEvents.BugNub;
      });
    }
  }));
  var r = Object(frame.asyncComponent)({
    /**
     * @return {?}
     */
    resolve : function() {
      return self.e(8).then(self.bind(null, 459)).then(function(dataAndEvents) {
        return dataAndEvents.BugReportModal;
      });
    }
  });
}, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , function(dataAndEvents, record, $) {
  /**
   * @return {undefined}
   */
  function attributes() {
    f.apply(this, arguments);
  }
  var f;
  var basePrototype;
  var options = $(2);
  var l = $(23);
  var update = $(15);
  var throttledUpdate = $.n(update);
  var content = $(113);
  var tmpl = $.n(content);
  var opts = $(370);
  var self = ($(202), $(0));
  var object = ($.n(self), $(286));
  $(462);
  var data = throttledUpdate()({
    slim : null,
    sidebar : null,
    flexible : null,
    none : null
  });
  basePrototype = (f = self.PureComponent) && f.prototype;
  Object.assign(attributes, f);
  /** @type {function (): undefined} */
  (attributes.prototype = Object.create(basePrototype)).constructor = attributes;
  attributes.__superConstructor__ = f;
  /**
   * @return {?}
   */
  attributes.prototype.render = function() {
    /** @type {null} */
    var r20 = null;
    return this.props.variant === data.none ? null : self.createElement("div", {
      className : (this.props.variant !== data.sidebar ? "_g7lf5" : "") + (this.props.variant === data.slim ? " _8t5z3" : "") + (this.props.variant === data.flexible ? " _9z659" : "") + (this.props.variant === data.sidebar ? " _8oc6p" : ""),
      style : this.props.style
    }, self.createElement("nav", {
      className : "_luodr",
      role : "navigation"
    }, self.createElement("ul", {
      className : "_g8wl6"
    }, self.createElement("li", {
      className : "_538w0"
    }, self.createElement("a", {
      className : "_hqmnd",
      href : "/about/us/"
    }, "Sobre n\u00c3\u00b3s")), self.createElement("li", {
      className : "_538w0"
    }, self.createElement("a", {
      className : "_hqmnd",
      href : "https://help.instagram.com/"
    }, "Suporte")), self.createElement("li", {
      className : "_538w0"
    }, self.createElement("a", {
      className : "_hqmnd",
      href : "http://blog.instagram.com/"
    }, "Blog")), self.createElement("li", {
      className : "_538w0"
    }, self.createElement("a", {
      className : "_hqmnd",
      href : l.l
    }, "Imprensa")), self.createElement("li", {
      className : "_538w0"
    }, self.createElement("a", {
      className : "_hqmnd",
      href : "/developer/"
    }, "API")), self.createElement("li", {
      className : "_538w0"
    }, self.createElement("a", {
      className : "_hqmnd",
      href : "/about/jobs/"
    }, "Carreiras")), self.createElement("li", {
      className : "_538w0"
    }, self.createElement("a", {
      className : "_hqmnd",
      href : "/legal/privacy/"
    }, "Privacidade")), self.createElement("li", {
      className : "_538w0"
    }, self.createElement("a", {
      className : "_hqmnd _ts6wg",
      href : "/legal/terms/"
    }, Object(object.a)())), false, Object(options.H)("ld") && self.createElement("li", {
      className : "_538w0"
    }, self.createElement("a", {
      className : "_hqmnd",
      href : "/explore/locations/"
    }, "Diret\u00c3\u00b3rio")), r20, self.createElement("li", {
      className : "_538w0"
    }, self.createElement(opts.a, {
      className : "_hqmnd"
    })))), self.createElement("span", {
      className : "_1gmap"
    }, $(5)("\u00c2\u00a9 {year} Instagram", {
      year : tmpl()(new Date, "Y")
    })));
  };
  attributes.defaultProps = {
    variant : data.flexible
  };
  attributes.VARIANTS = data;
  /** @type {function (): undefined} */
  record.a = attributes;
}, function(dataAndEvents, record, $) {
  /**
   * @return {undefined}
   */
  function attributes() {
    ctor.apply(this, arguments);
  }
  var ctor;
  var basePrototype;
  var content = $(9);
  var sd = ($.n(content), $(11));
  var templateFunc = $.n(sd);
  var obj = $(112);
  var self = $(0);
  var frame = ($.n(self), $(379));
  $(448);
  basePrototype = (ctor = self.Component) && ctor.prototype;
  Object.assign(attributes, ctor);
  /** @type {function (): undefined} */
  (attributes.prototype = Object.create(basePrototype)).constructor = attributes;
  attributes.__superConstructor__ = ctor;
  /**
   * @return {undefined}
   */
  attributes.prototype.componentDidMount = function() {
    Object(frame.f)(this.props.pageIdentifier);
  };
  /**
   * @return {?}
   */
  attributes.prototype.render = function() {
    var elem = this.props;
    var options = elem.children;
    var cn = elem.className;
    var h = content.canUseDOM ? null : self.createElement(obj.c, {
      id : obj.b
    });
    return self.createElement("section", {
      className : templateFunc()("_sq4bv", cn)
    }, options, h);
  };
  /** @type {function (): undefined} */
  record.a = attributes;
}, function(dataAndEvents, deepDataAndEvents, $sanitize) {
  var isUndefined = $sanitize(1);
  var suiteView = $sanitize(449);
  isUndefined(suiteView, "is-28aea841");
}, function(module, dataAndEvents) {
  /** @type {string} */
  module.exports = "";
}, function(dataAndEvents, meta, $) {
  /**
   * @param {Function} tests
   * @return {undefined}
   */
  function attributes(tests) {
    parent.constructor.call(this, tests);
    /** @type {null} */
    this.$ToastWrapper1 = null;
    this.state = {
      currentToast : tests.toast,
      nextToast : null,
      hasNextToast : false
    };
  }
  var data;
  var parent;
  var h = $(85);
  var content = $(11);
  var tmpl = $.n(content);
  var opts = $(235);
  var self = $(0);
  var io = ($.n(self), $(8));
  var object = $(378);
  $(451);
  data = self.PureComponent;
  parent = data && data.prototype;
  Object.assign(attributes, data);
  /** @type {function (Function): undefined} */
  (attributes.prototype = Object.create(parent)).constructor = attributes;
  attributes.__superConstructor__ = data;
  /**
   * @return {undefined}
   */
  attributes.prototype.componentWillUnmount = function() {
    h.a.clearTimeout(this.$ToastWrapper1);
  };
  /**
   * @param {?} toaster
   * @return {undefined}
   */
  attributes.prototype.componentWillReceiveProps = function(toaster) {
    var point = this;
    if (this.state.currentToast !== toaster.toast) {
      this.setState({
        nextToast : toaster.toast,
        hasNextToast : true
      });
      h.a.clearTimeout(this.$ToastWrapper1);
      this.$ToastWrapper1 = h.a.setTimeout(function() {
        /** @type {null} */
        point.$ToastWrapper1 = null;
        point.setState(function(dataAndEvents) {
          return{
            currentToast : dataAndEvents.nextToast,
            nextToast : null,
            hasNextToast : false
          };
        });
      }, 200);
    }
  };
  /**
   * @return {?}
   */
  attributes.prototype.render = function() {
    var query = this.state.currentToast;
    var cls = tmpl()(this.props.className, "_c2vev");
    /** @type {string} */
    var statusBarClassName = "_162ov" + (this.state.hasNextToast ? " _k8qfc" : "");
    return self.createElement(opts.a, null, self.createElement("div", {
      className : cls
    }, self.createElement("div", {
      className : statusBarClassName
    }, query && self.createElement(object.a, {
      className : "_3bdnt",
      actionText : query.actionText,
      onActionClick : query.actionHandler,
      text : query.text
    }))));
  };
  meta.a = Object(io.connect)(function(dataAndEvents) {
    return{
      toast : dataAndEvents.toasts.toast
    };
  })(attributes);
}, function(dataAndEvents, deepDataAndEvents, require) {
  var walk = require(1);
  var nodes = require(452);
  walk(nodes, "isdbe5ad9");
}, function(module, dataAndEvents) {
  /** @type {string} */
  module.exports = "._c2vev{bottom:0;left:0;overflow:hidden;position:fixed;right:0;z-index:10}._162ov{-webkit-transform:translateY(0);transform:translateY(0);-webkit-transition:-webkit-transform .2s ease-out;transition:transform .2s ease-out;transition:transform .2s ease-out,-webkit-transform .2s ease-out}._162ov._k8qfc{-webkit-transform:translateY(100%);transform:translateY(100%)}@media (min-width:736px){._162ov{-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center}._3bdnt{border-bottom-left-radius:0;border-bottom-right-radius:0;border-top-left-radius:2px;border-top-right-radius:2px;min-width:500px;width:auto}}";
}, function(dataAndEvents, fnc, $) {
  var object = $(375);
  var options = $(236);
  var self = $(0);
  var io = ($.n(self), $(8));
  $(454);
  fnc.a = Object(io.connect)(function(deepDataAndEvents) {
    return{
      isRouteLoading : Object(options.b)(deepDataAndEvents)
    };
  })(function(dataAndEvents) {
    return dataAndEvents.isRouteLoading ? self.createElement(object.a, {
      className : "_72fik"
    }) : null;
  });
}, function(dataAndEvents, deepDataAndEvents, require) {
  var walk = require(1);
  var nodes = require(455);
  walk(nodes, "is1f0c5bcf");
}, function(module, dataAndEvents) {
  /** @type {string} */
  module.exports = "._72fik{left:0;position:fixed;right:0;top:0;z-index:12}";
}, function(dataAndEvents, fnc, require) {
  /**
   * @return {?}
   */
  function opt_attributes() {
    var value;
    var _ref2;
    var self = this;
    /** @type {number} */
    var l = arguments.length;
    /** @type {Array} */
    var args = Array(l);
    /** @type {number} */
    var i = 0;
    for (;i < l;i++) {
      args[i] = arguments[i];
    }
    return value = (_ref2 = str.constructor).call.apply(_ref2, [this].concat(args)), this.$AppInstallBanner1 = function(ast) {
      if (self.props.variant === obj.openinapp) {
        if (!(null != self.props.onOpen)) {
          isArray()(0);
        }
        self.props.onOpen();
      } else {
        if (self.props.onInstall) {
          self.props.onInstall();
        }
      }
    }, this.$AppInstallBanner2 = function(e) {
      e.stopPropagation();
      e.preventDefault();
      if (self.props.onClose) {
        self.props.onClose();
      }
    }, value;
  }
  /**
   * @param {Object} iterable
   * @param {Array} arr
   * @return {?}
   */
  function each(iterable, arr) {
    var object = {};
    var key;
    for (key in iterable) {
      if (!(arr.indexOf(key) >= 0)) {
        if (Object.prototype.hasOwnProperty.call(iterable, key)) {
          object[key] = iterable[key];
        }
      }
    }
    return object;
  }
  /**
   * @param {Function} tests
   * @return {undefined}
   */
  function process(tests) {
    var self = this;
    config.constructor.call(this, tests);
    /**
     * @return {undefined}
     */
    this.$AppInstallBannerContainer1 = function() {
      if (!self.props.force) {
        Object(object.d)(object.a.APP_INSTALL_BANNER_COOKIE);
      }
    };
    /**
     * @return {undefined}
     */
    this.$AppInstallBannerContainer2 = function() {
      Object(Block.logAction_DEPRECATED)("appInstallDismiss", {
        platform : options.b,
        source : self.props.campaign
      });
      Object(object.d)(object.a.APP_INSTALL_BANNER_COOKIE);
      self.setState({
        isVisible : false
      });
    };
    var isVisible = !(Object(conf.o)() || (Object(options.E)() || Object(main.a)())) && ((Object(options.D)() || Object(options.c)() && !!this.props.force) && (this.props.force || !Object(object.b)(object.a.APP_INSTALL_BANNER_COOKIE)));
    this.state = {
      isVisible : isVisible
    };
  }
  /**
   * @return {?}
   */
  function constructor() {
    var value;
    var _ref2;
    var me = this;
    /** @type {number} */
    var l = arguments.length;
    /** @type {Array} */
    var args = Array(l);
    /** @type {number} */
    var i = 0;
    for (;i < l;i++) {
      args[i] = arguments[i];
    }
    return value = (_ref2 = basePrototype.constructor).call.apply(_ref2, [this].concat(args)), this.$AppUpsellContent1 = function(ast) {
      Object(Block.logAction_DEPRECATED)("appInstallClick", {
        source : me.props.campaign,
        medium : "desktopAppUpsell",
        platform : helper.a.IOS
      });
    }, this.$AppUpsellContent2 = function(ast) {
      Object(Block.logAction_DEPRECATED)("appInstallClick", {
        source : me.props.campaign,
        medium : "desktopAppUpsell",
        platform : helper.a.ANDROID
      });
    }, this.$AppUpsellContent3 = function(ast) {
      Object(Block.logAction_DEPRECATED)("appInstallClick", {
        source : me.props.campaign,
        medium : "desktopAppUpsell",
        platform : helper.a.WINDOWSNT10
      });
    }, value;
  }
  /**
   * @param {Function} tests
   * @return {undefined}
   */
  function f(tests) {
    parent.constructor.call(this, tests);
    conditional.call(this);
    /** @type {boolean} */
    var easing = !tests.viewer;
    /** @type {boolean} */
    var fn = !!tests.viewer && (!Object(options.I)() && false);
    this.state = {
      hasExited : fn && Object(object.b)(object.a.DESKTOP_APP_UPSELL) || easing && Object(object.b)(object.a.DESKTOP_REGISTRATION_UPSELL),
      isExpanded : false,
      canShowRegUpsell : easing,
      canShowAppUpsell : fn
    };
  }
  /**
   * @return {?}
   */
  function gl() {
    var e;
    var _ref2;
    var me = this;
    /** @type {number} */
    var l = arguments.length;
    /** @type {Array} */
    var args = Array(l);
    /** @type {number} */
    var i = 0;
    for (;i < l;i++) {
      args[i] = arguments[i];
    }
    return e = (_ref2 = value.constructor).call.apply(_ref2, [this].concat(args)), this.$MobileNavLoggedIn1 = function() {
      if ("/" === window.location.pathname) {
        window.scrollTo(0, 0);
      }
      me.props.onNavClick(data.i);
    }, this.$MobileNavLoggedIn2 = function() {
      me.props.onNavClick(data.k);
    }, this.$MobileNavLoggedIn3 = function() {
      me.props.onNavClick(data.g);
    }, this.$MobileNavLoggedIn4 = function() {
      me.props.onNavClick(data.j);
    }, e;
  }
  /**
   * @param {string} url
   * @param {Object} path
   * @param {boolean} deepDataAndEvents
   * @return {undefined}
   */
  function refresh(url, path, deepDataAndEvents) {
    /** @type {boolean} */
    var string = "string" == typeof path;
    if (Object(options.C)()) {
      if (Object(tree.c)()) {
        /** @type {boolean} */
        string = false;
      }
      /** @type {Array} */
      var timeouts = [];
      /** @type {boolean} */
      var r = false;
      /**
       * @return {undefined}
       */
      var one = function() {
        timeouts.forEach(window.clearTimeout);
        /** @type {Array} */
        timeouts = [];
      };
      ["pagehide", "beforeunload", "blur"].forEach(function(toClass) {
        val.default.add(window, toClass, one);
      });
      if (string) {
        timeouts.push(window.setTimeout(function() {
          /** @type {boolean} */
          r = true;
          /** @type {Object} */
          window.top.location = path;
        }, 1E3));
      }
      timeouts.push(window.setTimeout(function() {
        if (r) {
          if (Object(options.w)(window.location.href)) {
            var test = new d.a(window.location.href);
            window.location = test.removeQueryData(options.a).toString();
          } else {
            window.location.reload();
          }
        }
      }, 2E3));
      /** @type {string} */
      window.location = "instagram://" + url;
    } else {
      if (string) {
        if (deepDataAndEvents) {
          if (path) {
            meta.b.push(path);
          }
        } else {
          /** @type {Object} */
          window.top.location = path;
        }
      }
    }
  }
  /**
   * @param {string} val
   * @return {undefined}
   */
  function splice(val) {
    refresh(val, Object(h.a)());
  }
  /**
   * @param {string} users
   * @param {string} i
   * @param {boolean} deepDataAndEvents
   * @return {undefined}
   */
  function getArr(users, i, deepDataAndEvents) {
    refresh(users, i, deepDataAndEvents);
  }
  /**
   * @return {?}
   */
  function log() {
    var value;
    var _ref2;
    var me = this;
    /** @type {number} */
    var l = arguments.length;
    /** @type {Array} */
    var args = Array(l);
    /** @type {number} */
    var i = 0;
    for (;i < l;i++) {
      args[i] = arguments[i];
    }
    return value = (_ref2 = superPrototype.constructor).call.apply(_ref2, [this].concat(args)), this.$OpenInAppButton1 = function() {
      me.props.onOpenInApp();
    }, value;
  }
  /**
   * @param {?} d
   * @return {?}
   */
  function cloneData(d) {
    return!!d && (app.a.lookup("appsell").getBoolParam("no_pill", true) || Object(o.b)(d));
  }
  /**
   * @param {?} key
   * @return {?}
   */
  function toJSON(key) {
    return!!key && Object(conf.n)();
  }
  /**
   * @param {?} failing_message
   * @return {?}
   */
  function report(failing_message) {
    return object.a.OPEN_IN_APP_COOKIE;
  }
  /**
   * @param {Function} tests
   * @return {undefined}
   */
  function e(tests) {
    var me = this;
    proto.constructor.call(this, tests);
    /**
     * @param {?} ast
     * @return {?}
     */
    this.$_MobileNav1 = function(ast) {
      if (!me.$_MobileNav2) {
        if (me.$_MobileNav2 = true, Object(Block.logAction_DEPRECATED)("cameraIconClick"), me.$_MobileNav3) {
          return me.$_MobileNav3.selectFile(), me.props.onStartCreation(), void(me.$_MobileNav2 = false);
        }
        Object(mix.a)("No image form");
        me.props.onNavClick(data.h);
        getArr("share", "/about/camera/", true);
        /** @type {boolean} */
        me.$_MobileNav2 = false;
      }
    };
    /**
     * @return {undefined}
     */
    this.$_MobileNav4 = function() {
      Object(Block.logAction_DEPRECATED)("openInAppDismiss", {
        platform : options.b,
        source : me.props.analyticsContext
      });
      Object(object.d)(report(me.props.viewer));
      me.setState({
        openInAppDismissed : true
      });
    };
    this.state = {
      openInAppDismissed : Object(options.E)() || (Object(main.a)() || Object(object.b)(report(tests.viewer)))
    };
  }
  /**
   * @return {undefined}
   */
  function g() {
    ctor.apply(this, arguments);
  }
  /**
   * @return {undefined}
   */
  function Text() {
    style.apply(this, arguments);
  }
  /**
   * @param {?} settings
   * @return {?}
   */
  function Class(settings) {
    var year = settings.currentView;
    var onClick = settings.handleMenuClick;
    var context = settings.viewer;
    return dom.createElement("header", null, dom.createElement("div", {
      className : "_jtbs5"
    }), dom.createElement("div", {
      className : "_t93vr"
    }, dom.createElement("div", {
      className : "_ry3m5"
    }, dom.createElement("button", {
      className : "_8r54i",
      onClick : onClick
    }, dom.createElement("div", {
      className : "_p2mdq coreSpriteMobileNavMenuInactive"
    }))), dom.createElement("div", {
      className : "_7tnxy"
    }, dom.createElement(self.a, {
      analyticsContext : analyticsContext,
      className : "_cpgz7",
      isInNav : true,
      hasNewNav : false
    })), dom.createElement("div", {
      className : "_ry3m5"
    }, !!context && dom.createElement(args.a, {
      className : "_bekqz",
      href : "/explore/people/"
    }, dom.createElement("div", {
      className : "_p2mdq" + ("ExplorePeople" !== year ? " coreSpriteMobileNavAddPeopleInactive" : "") + ("ExplorePeople" === year ? " coreSpriteMobileNavAddPeopleActive" : "")
    })))));
  }
  /**
   * @param {Object} object
   * @param {Array} keys
   * @return {?}
   */
  function hasKey(object, keys) {
    var old = {};
    var name;
    for (name in object) {
      if (!(keys.indexOf(name) >= 0)) {
        if (Object.prototype.hasOwnProperty.call(object, name)) {
          old[name] = object[name];
        }
      }
    }
    return old;
  }
  /**
   * @return {undefined}
   */
  function scope() {
    newValue.apply(this, arguments);
  }
  /**
   * @return {?}
   */
  function some() {
    return!gt && (Object(options.H)("fb") && inspect.canUseDOM);
  }
  /**
   * @param {?} allBindingsAccessor
   * @return {?}
   */
  function update(allBindingsAccessor) {
    return!!Object(options.D)() && (!allBindingsAccessor || app.a.lookup("nav").getBoolParam("client_nav", true));
  }
  /**
   * @param {?} range
   * @return {?}
   */
  function fn(range) {
    return Object(options.D)() && (range !== db.a.signupPage && range !== db.a.loginPage) ? Object(o.c)() : !(!Object(options.D)() || range !== db.a.signupPage) && app.a.lookup("reg").getBoolParam("appsells_banner_disabled", false);
  }
  /**
   * @param {Function} tests
   * @return {undefined}
   */
  function attributes(tests) {
    var me = this;
    prototype.constructor.call(this, tests);
    /**
     * @return {undefined}
     */
    this.$Shell4 = function() {
      me.setState({
        showAppInstallModal : false
      });
    };
    /**
     * @param {?} types
     * @return {undefined}
     */
    this.$Shell5 = function(types) {
      if (Object(options.z)()) {
        me.setState({
          showAppInstallModal : true
        });
        types.preventDefault();
      } else {
        Object(Block.logAction_DEPRECATED)("appInstallClick", {
          platform : options.b,
          source : me.props.pageIdentifier
        });
        Object(Block.flushLogs)(function() {
          window.location = Object(h.a)(me.props.pageIdentifier, "appInstallPill", options.b);
        });
      }
    };
    /**
     * @return {undefined}
     */
    this.$Shell3 = function() {
      var r20 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "openInAppClick";
      if (Object(Block.logAction_DEPRECATED)(r20, {
        platform : options.b,
        source : me.props.pageIdentifier
      }), Object(options.x)() && result.a.isBrowser("Opera")) {
        window.location = Object(doc.a)(me.props.androidAppLink);
      } else {
        /**
         * @return {undefined}
         */
        var decode = function() {
          if (Object(options.C)()) {
            if (!me.props.iOSAppLink) {
              isArray()(0);
            }
            splice(me.props.iOSAppLink);
          } else {
            if (!Object(options.x)()) {
              isArray()(0);
            }
            if (!me.props.androidAppLink) {
              isArray()(0);
            }
            window.location = Object(doc.a)(me.props.androidAppLink);
          }
        };
        Object(Block.flushLogs)(decode, decode);
      }
    };
    /**
     * @return {?}
     */
    this.renderAppInstallBanner = function() {
      var value = me.$Shell1();
      if (!value && fn(me.props.pageIdentifier)) {
        return null;
      }
      var attrNames = value && app.a.lookup("notif").getBoolParam("to_web_with_open", false);
      return(!Object(options.I)() || attrNames) && dom.createElement(type, {
        campaign : me.props.pageIdentifier,
        className : "_b426x" + (Object(options.D)() ? " _a20pl" : ""),
        force : me.props.forceMobileAppInstallBanner || value,
        onOpen : me.$Shell3,
        variant : attrNames && Object(options.I)() ? obj.openinapp : obj.default
      });
    };
    this.state = {
      showAppInstallModal : false
    };
  }
  /**
   * @param {?} e
   * @param {?} opt_attributes
   * @return {?}
   */
  function cycle(e, opt_attributes) {
    var oldconfig = e.props.style;
    return dom.cloneElement(e, extend({}, e.props, {
      style : extend({}, oldconfig, opt_attributes)
    }));
  }
  var start = require(320);
  var options = require(2);
  var helper = require(23);
  var p = require(15);
  var ntf = require.n(p);
  var inspect = require(9);
  var html = require(11);
  var isFunction = require.n(html);
  var dom = require(0);
  require(471);
  var base;
  var str;
  /**
   * @param {Object} element
   * @return {?}
   */
  var createWrapper = function(element) {
    return dom.createElement("div", {
      className : isFunction()("_5nb98", element.className)
    }, dom.createElement("div", {
      className : "_317z0" + (inspect.canUseDOM && !element.static ? " _a8at0" : "")
    }), dom.createElement("div", {
      className : "_c05qa"
    }, element.children));
  };
  var nodes = require(3);
  var isArray = require.n(nodes);
  var Block = require(7);
  require(21);
  require(469);
  var obj = ntf()({
    default : null,
    openinapp : null
  });
  base = dom.Component;
  str = base && base.prototype;
  Object.assign(opt_attributes, base);
  /** @type {function (): ?} */
  (opt_attributes.prototype = Object.create(str)).constructor = opt_attributes;
  opt_attributes.__superConstructor__ = base;
  /**
   * @return {undefined}
   */
  opt_attributes.prototype.componentDidMount = function() {
    Object(Block.logAction_DEPRECATED)("appInstallImpression", {
      platform : options.b,
      source : this.props.campaign
    });
  };
  /**
   * @return {?}
   */
  opt_attributes.prototype.$AppInstallBanner3 = function() {
    return "Instagram";
  };
  /**
   * @return {?}
   */
  opt_attributes.prototype.$AppInstallBanner4 = function() {
    if (this.props.variant === obj.openinapp) {
      return "Use o aplicativo do Instagram.";
    }
    switch(options.b) {
      case helper.a.IOS:
        return "Encontre o aplicativo gratuitamente na App Store.";
      case helper.a.ANDROID:
        return "Encontre o aplicativo gratuitamente no Google Play.";
      case helper.a.WINDOWSPHONE10:
      ;
      case helper.a.WINDOWSNT10:
        return "Encontre gratuitamente na Windows Store.";
      default:
        return "Baixe o aplicativo gratuitamente.";
    }
  };
  /**
   * @return {?}
   */
  opt_attributes.prototype.renderCTA = function() {
    switch(this.props.variant) {
      case obj.openinapp:
        return "Abrir";
      default:
        return "Baixar";
    }
  };
  /**
   * @return {?}
   */
  opt_attributes.prototype.render = function() {
    var a = this.$AppInstallBanner3();
    var p = this.$AppInstallBanner4();
    var offsetB = this.props.showCloseButton && dom.createElement("button", {
      className : "_s4mum",
      onClick : this.$AppInstallBanner2
    });
    return dom.createElement(createWrapper, {
      className : isFunction()(this.props.className, "_p7yg0")
    }, dom.createElement(start.a, {
      campaign : this.props.campaign,
      className : isFunction()("_4p89h", this.props.className),
      onClick : this.$AppInstallBanner1,
      platform : options.b,
      role : "alert"
    }, this.props.showGlyph && dom.createElement("i", {
      className : "_b9yt1 coreSpriteGlyphWhite"
    }), dom.createElement("section", {
      className : "_dqkfg" + (this.props.showGlyph ? " _ciztw" : "") + (this.props.showGlyph ? "" : " _etyn4")
    }, a && dom.createElement("p", {
      className : "_mz33q"
    }, a), p && dom.createElement("p", {
      className : "_qu3rn"
    }, p)), dom.createElement("section", {
      className : "_2fet1"
    }, dom.createElement("button", {
      className : "_q82jw"
    }, this.renderCTA()), offsetB)));
  };
  opt_attributes.defaultProps = {
    showCloseButton : false,
    showGlyph : true,
    variant : obj.default
  };
  var state;
  var config;
  /** @type {function (): ?} */
  var attribute = opt_attributes;
  var object = require(216);
  var main = require(321);
  var conf = require(92);
  var io = require(8);
  var path = require(84);
  var updateFunc = Object.assign || function(opt_attributes) {
    /** @type {number} */
    var i = 1;
    for (;i < arguments.length;i++) {
      var iterable = arguments[i];
      var key;
      for (key in iterable) {
        if (Object.prototype.hasOwnProperty.call(iterable, key)) {
          opt_attributes[key] = iterable[key];
        }
      }
    }
    return opt_attributes;
  };
  state = dom.Component;
  config = state && state.prototype;
  Object.assign(process, state);
  /** @type {function (Function): undefined} */
  (process.prototype = Object.create(config)).constructor = process;
  process.__superConstructor__ = state;
  /**
   * @param {?} nextState
   * @param {Element} me
   * @return {?}
   */
  process.prototype.shouldComponentUpdate = function(nextState, me) {
    return this.state.isVisible !== me.isVisible;
  };
  /**
   * @return {?}
   */
  process.prototype.render = function() {
    if (this.state.isVisible) {
      var obj = this.props;
      var progressContexts = (obj.force, each(obj, ["force"]));
      return dom.createElement(attribute, updateFunc({}, progressContexts, {
        onInstall : this.$AppInstallBannerContainer1,
        onClose : this.$AppInstallBannerContainer2
      }));
    }
    return null;
  };
  var properties;
  var basePrototype;
  var type = Object(io.connect)(function(owner) {
    var unlock = Object(path.d)(owner);
    return{
      showCloseButton : null != unlock,
      showGlyph : !!unlock
    };
  })(process);
  var that = require(458);
  var color = require(371);
  var handler = require(236);
  var property = Object(io.connect)(function(self) {
    return{
      fbStatus : self.fb.status,
      viewer : Object(path.d)(self),
      additionalData : {
        fb_user_id : self.fb.authResponse ? self.fb.authResponse.userID : "0",
        Route : self.navigation.route,
        "Route Type" : Object(handler.e)(self),
        "Pixel Ratio" : self.displayProperties.pixelRatio,
        "Viewport Width" : self.displayProperties.viewportWidth
      }
    };
  })(color.a);
  var props = require(447);
  var h = require(254);
  require(21);
  require(477);
  properties = dom.Component;
  basePrototype = properties && properties.prototype;
  Object.assign(constructor, properties);
  /** @type {function (): ?} */
  (constructor.prototype = Object.create(basePrototype)).constructor = constructor;
  constructor.__superConstructor__ = properties;
  /**
   * @return {?}
   */
  constructor.prototype.render = function() {
    var innerHTML = this.props.campaign;
    return dom.createElement("div", {
      className : "_9s4of"
    }, dom.createElement("div", {
      className : "_3dy6p"
    }, dom.createElement("div", {
      className : "_7g2d3"
    }, dom.createElement("span", {
      className : "_nu3p5 coreSpriteAppIcon"
    }), dom.createElement("span", {
      className : "_l9hys"
    }, "Obtenha o aplicativo para experimentar a melhor vers\u00c3\u00a3o do Instagram.")), dom.createElement("div", {
      className : "_e6nsl"
    }, dom.createElement("a", {
      className : "_raoqe coreSpriteAppStoreButton",
      href : Object(h.a)(innerHTML, "desktopAppUpsell", helper.a.IOS),
      onClick : this.$AppUpsellContent1,
      target : "_blank"
    }), dom.createElement("a", {
      className : "_raoqe coreSpriteGooglePlayButton",
      href : Object(h.a)(innerHTML, "desktopAppUpsell", helper.a.ANDROID),
      onClick : this.$AppUpsellContent2,
      target : "_blank"
    }), Object(options.F)() && dom.createElement("a", {
      className : "_raoqe coreSpriteWindowsStoreButton",
      href : Object(h.a)(innerHTML, "desktopAppUpsell", helper.a.WINDOWSNT10),
      onClick : this.$AppUpsellContent3,
      target : "_blank"
    }))));
  };
  /** @type {function (): ?} */
  var name = constructor;
  var args = require(37);
  var node = require(66);
  require(21);
  require(479);
  var a;
  var parent;
  /**
   * @return {?}
   */
  var create = function() {
    return dom.createElement(args.a, {
      className : "_lozk5",
      href : "/accounts/emailsignup/"
    }, dom.createElement("div", {
      className : "_8c4cy"
    }, dom.createElement("div", {
      className : "_ae8sk"
    }, dom.createElement("span", {
      className : "_rhu7g coreSpriteGlyphGradient"
    }), dom.createElement("span", {
      className : "_s20cp"
    }, "Cadastre-se para ver fotos e v\u00c3\u00addeos de seus amigos.")), dom.createElement("div", {
      className : "_a9q20"
    }, dom.createElement(node.default, {
      className : "_gj28y",
      variant : node.default.VARIANTS.brandColors
    }, dom.createElement(createWrapper, {
      className : "_l80nl"
    }, "Cadastrar-se")))));
  };
  require(475);
  a = dom.Component;
  parent = a && a.prototype;
  Object.assign(f, a);
  /** @type {function (Function): undefined} */
  (f.prototype = Object.create(parent)).constructor = f;
  f.__superConstructor__ = a;
  /**
   * @return {?}
   */
  f.prototype.render = function() {
    var result = this.state;
    var value = result.canShowAppUpsell;
    var msg = result.canShowRegUpsell;
    var hz = result.hasExited;
    var expected = result.isExpanded;
    return hz || !msg && !value ? null : dom.createElement("div", {
      className : "_j8mem" + (expected ? "" : " _52ega") + (expected ? " _6in6f" : "")
    }, dom.createElement(createWrapper, {
      className : "_91nrv",
      static : true
    }), dom.createElement("div", {
      className : "_1qj9z"
    }, value ? dom.createElement(name, {
      campaign : "desktopAppUpsell"
    }) : dom.createElement(create, null)), dom.createElement("span", {
      className : "_lilm5",
      onClick : this.$DesktopUpsellSlideinContainer1
    }, "\u00e2\u0153\u2022"));
  };
  /**
   * @return {undefined}
   */
  f.prototype.componentDidMount = function() {
    var point = this;
    var state = this.state;
    var data = state.canShowAppUpsell;
    var params = state.canShowRegUpsell;
    if (params && !Object(object.b)(object.a.DESKTOP_REGISTRATION_UPSELL) || data && !Object(object.b)(object.a.DESKTOP_APP_UPSELL)) {
      /** @type {number} */
      this.$DesktopUpsellSlideinContainer3 = setTimeout(function() {
        point.setState({
          isExpanded : data || params
        });
      }, 3E3);
    }
  };
  /**
   * @return {undefined}
   */
  f.prototype.componentWillUnmount = function() {
    if (this.$DesktopUpsellSlideinContainer3) {
      clearTimeout(this.$DesktopUpsellSlideinContainer3);
    }
    if (this.$DesktopUpsellSlideinContainer2) {
      clearTimeout(this.$DesktopUpsellSlideinContainer2);
    }
  };
  var collection;
  var value;
  /**
   * @return {undefined}
   */
  var conditional = function() {
    var data = this;
    /**
     * @return {undefined}
     */
    this.$DesktopUpsellSlideinContainer1 = function() {
      if (data.state.canShowAppUpsell) {
        Object(object.d)(object.a.DESKTOP_APP_UPSELL);
      } else {
        Object(object.d)(object.a.DESKTOP_REGISTRATION_UPSELL);
      }
      data.setState({
        isExpanded : false
      }, function() {
        /** @type {number} */
        data.$DesktopUpsellSlideinContainer2 = setTimeout(function() {
          data.setState({
            hasExited : true
          });
        }, 1E3);
      });
    };
  };
  /** @type {function (Function): undefined} */
  var key = f;
  var camelKey = Object(io.connect)(function(deepDataAndEvents) {
    return{
      viewer : Object(path.d)(deepDataAndEvents)
    };
  })(key);
  var input = require(202);
  var child = require(446);
  var doc = require(55);
  var o = require(237);
  var $ = require(380);
  var item = require(287);
  var module = require(238);
  var cfg = require(376);
  var data = require(108);
  require(21);
  require(485);
  collection = dom.PureComponent;
  value = collection && collection.prototype;
  Object.assign(gl, collection);
  /** @type {function (): ?} */
  (gl.prototype = Object.create(value)).constructor = gl;
  gl.__superConstructor__ = collection;
  /**
   * @return {?}
   */
  gl.prototype.render = function() {
    var props = this.props;
    var _parent = props.hasUnread;
    var l = props.hasStoryCreation;
    var i = props.navSelection;
    var length = props.onCameraIconClick;
    var p = props.viewer;
    return dom.createElement("div", {
      className : "_tdn3u"
    }, dom.createElement("div", {
      className : "_k0d2z"
    }, dom.createElement(args.a, {
      className : "_ttgfw",
      onClick : this.$MobileNavLoggedIn1,
      href : "/"
    }, dom.createElement("div", {
      className : "_crp8c" + (i !== data.i ? " coreSpriteMobileNavHomeInactive" : "") + (i === data.i ? " coreSpriteMobileNavHomeActive" : "")
    }))), dom.createElement("div", {
      className : "_k0d2z"
    }, dom.createElement(args.a, {
      className : "_ttgfw",
      onClick : this.$MobileNavLoggedIn2,
      href : "/explore/"
    }, dom.createElement("div", {
      className : "_crp8c" + (i !== data.k ? " coreSpriteMobileNavSearchInactive" : "") + (i === data.k ? " coreSpriteMobileNavSearchActive" : "")
    }))), dom.createElement("div", {
      className : "_k0d2z _ttgfw _mdf8w",
      onClick : length
    }, dom.createElement("div", {
      className : "_crp8c" + (l || i === data.h ? "" : " coreSpriteCameraInactive") + (l || i !== data.h ? "" : " coreSpriteCameraActive") + (l ? " coreSpriteFeedCreation" : "")
    })), dom.createElement("div", {
      className : "_k0d2z"
    }, dom.createElement(args.a, {
      className : "_ttgfw",
      onClick : this.$MobileNavLoggedIn3,
      href : "/accounts/activity/"
    }, dom.createElement("div", {
      className : "_crp8c" + (_parent && i !== data.g ? " _kgx47" : "") + (i !== data.g ? " coreSpriteMobileNavActivityInactive" : "") + (i === data.g ? " coreSpriteMobileNavActivityActive" : "")
    }))), dom.createElement("div", {
      className : "_k0d2z"
    }, dom.createElement(args.a, {
      className : "_ttgfw",
      onClick : this.$MobileNavLoggedIn4,
      href : Object(doc.h)(p.username)
    }, dom.createElement("div", {
      className : "_crp8c" + (i !== data.j ? " coreSpriteMobileNavProfileInactive" : "") + (i === data.j ? " coreSpriteMobileNavProfileActive" : "")
    }))));
  };
  /** @type {function (): ?} */
  var tr = gl;
  require(21);
  require(64);
  require(487);
  var x;
  var superPrototype;
  var MSG_TEX_EDITOR = require(5)("{Sign up}{Slash}{Log in}", {
    "Sign up" : dom.createElement(args.a, {
      className : "_ds3zg",
      href : "/accounts/emailsignup/"
    }, "Cadastre-se"),
    Slash : dom.createElement("span", {
      className : "_hafnz"
    }, "|"),
    "Log in" : dom.createElement(args.a, {
      className : "_ds3zg",
      href : "/accounts/login/"
    }, "Entrar")
  });
  /**
   * @param {?} elem
   * @return {?}
   */
  var createElement = function(elem) {
    elem.analyticsContext;
    var parent = elem.hasNewNav;
    return dom.createElement("div", {
      className : "_kghf8" + (parent ? " _rlvtm" : "")
    }, dom.createElement(args.a, {
      className : "_lc996 _8scx2" + (parent ? "" : " coreSpriteMobileNavLogo") + (parent ? " coreSpriteMobileNavTypeLogo" : ""),
      href : "/"
    }, "Instagram"), dom.createElement("div", {
      className : "_nfphn"
    }, MSG_TEX_EDITOR));
  };
  var meta = require(16);
  var val = require(255);
  var tree = require(324);
  var j = require(120);
  var d = require.n(j);
  require(489);
  x = dom.PureComponent;
  superPrototype = x && x.prototype;
  Object.assign(log, x);
  /** @type {function (): ?} */
  (log.prototype = Object.create(superPrototype)).constructor = log;
  log.__superConstructor__ = x;
  /**
   * @return {undefined}
   */
  log.prototype.componentDidMount = function() {
    Object(Block.logAction_DEPRECATED)("openInAppImpression", {
      platform : options.b,
      source : this.props.analyticsContext
    });
  };
  /**
   * @return {?}
   */
  log.prototype.render = function() {
    var props = this.props;
    var s = props.className;
    var length = props.onDismiss;
    var MSG_VISUAL_EDITOR = void 0;
    return MSG_VISUAL_EDITOR = props.viewer ? dom.createElement("a", {
      className : "_khkr1",
      href : "javascript:;",
      onClick : this.$OpenInAppButton1
    }, "Abrir no aplicativo") : dom.createElement(args.a, {
      className : "_khkr1",
      href : "/accounts/emailsignup/"
    }, "Cadastrar-se"), dom.createElement("div", {
      className : isFunction()("_jdrlj", s)
    }, dom.createElement(createWrapper, {
      className : "_n6et3"
    }, dom.createElement("span", {
      className : "_pvdmb"
    }, MSG_VISUAL_EDITOR, dom.createElement("a", {
      className : "_rnzfs",
      href : "javascript:;",
      onClick : length
    }, "\u00c3\u2014"))));
  };
  var source;
  var proto;
  /** @type {function (): ?} */
  var ret = log;
  var app = require(59);
  var mix = require(14);
  require(483);
  source = dom.Component;
  proto = source && source.prototype;
  Object.assign(e, source);
  /** @type {function (Function): undefined} */
  (e.prototype = Object.create(proto)).constructor = e;
  e.__superConstructor__ = source;
  /**
   * @return {?}
   */
  e.prototype.render = function() {
    var first = this;
    var pos = this.state.openInAppDismissed;
    var props = this.props;
    var length = props.analyticsContext;
    var e = props.hasNewNav;
    var i = props.navSelection;
    var _key = props.hasToast;
    var _value = props.onNavClick;
    var l = props.onOpenInApp;
    var value = props.viewer;
    return dom.createElement("div", {
      className : (e ? "_g1mg2" : "") + (Object(o.d)(value) ? " _b3nzv" : "")
    }, dom.createElement("div", {
      className : "_k3nd9"
    }), dom.createElement("div", {
      className : "_4pxed"
    }, value ? dom.createElement("div", {
      className : "_fysxf"
    }, dom.createElement(tr, {
      hasUnread : this.props.hasUnread,
      navSelection : i,
      onNavClick : _value,
      onCameraIconClick : this.$_MobileNav1,
      viewer : value,
      hasStoryCreation : toJSON(value)
    })) : dom.createElement("div", {
      className : "_tgfps"
    }, dom.createElement(createElement, {
      analyticsContext : length,
      hasNewNav : e
    }))), !pos && (l && (!_key && (!cloneData(value) && dom.createElement(ret, {
      analyticsContext : length,
      className : "_t0se8",
      onDismiss : this.$_MobileNav4,
      onOpenInApp : l,
      viewer : value
    })))), Object(o.b)(value) && dom.createElement(o.a, null), dom.createElement(cfg.a, {
      acceptMimeTypes : ["image/jpeg"],
      onFileChange : this.props.onCameraImageSelect,
      /**
       * @param {?} i
       * @return {?}
       */
      ref : function(i) {
        return first.$_MobileNav3 = i;
      }
    }));
  };
  var ctor;
  var derived_proto;
  var coord = Object(io.connect)(function(dataAndEvents) {
    return{
      hasToast : !!dataAndEvents.toasts.toast,
      hasUnread : !!dataAndEvents.activityStories && dataAndEvents.activityStories.hasUnread
    };
  }, function(fn, dataAndEvents) {
    return{
      /**
       * @return {undefined}
       */
      onStartCreation : function() {
        fn(Object(item.E)("camera_icon", module.a.POST));
      },
      /**
       * @param {(Array|number)} newlines
       * @return {undefined}
       */
      onCameraImageSelect : function(newlines) {
        if (newlines.length) {
          fn(Object(item.v)(newlines[0]));
        }
      },
      /**
       * @param {?} sqlt
       * @return {undefined}
       */
      onNavClick : function(sqlt) {
        fn(Object(data.r)(sqlt));
      }
    };
  })(e);
  require(481);
  derived_proto = (ctor = dom.Component) && ctor.prototype;
  Object.assign(g, ctor);
  /** @type {function (): undefined} */
  (g.prototype = Object.create(derived_proto)).constructor = g;
  g.__superConstructor__ = ctor;
  /**
   * @return {?}
   */
  g.prototype.render = function() {
    var tr = Object(options.D)() ? coord : $.a;
    return dom.createElement("div", {
      className : "_s4gw0" + (Object(options.D)() ? " _bz8nr" : "") + (Object(options.D)() ? "" : " _1arg4")
    }, dom.createElement(tr, this.props));
  };
  var style;
  var superObject;
  /** @type {function (): undefined} */
  var chunks = g;
  var n = Object(io.connect)(function($rootScope) {
    return{
      navSelection : $rootScope.navigation.navSelection,
      viewer : Object(path.d)($rootScope)
    };
  })(chunks);
  var db = require(253);
  var selfClosing = require(44);
  var locals = require(325);
  superObject = (style = dom.Component) && style.prototype;
  Object.assign(Text, style);
  /** @type {function (): undefined} */
  (Text.prototype = Object.create(superObject)).constructor = Text;
  Text.__superConstructor__ = style;
  /**
   * @return {undefined}
   */
  Text.prototype.componentDidMount = function() {
    Object(locals.b)(meta.b.action === meta.a.POP);
  };
  /**
   * @return {?}
   */
  Text.prototype.render = function() {
    return null;
  };
  /** @type {function (): undefined} */
  var nodeName = Text;
  var c = require(453);
  var expected = require(252);
  var opts = require(450);
  var exports = require(457);
  var self = require(291);
  require(21);
  require(501);
  /** @type {string} */
  var analyticsContext = "mobileSearchNav";
  var dataAttr = Object.assign || function(opt_attributes) {
    /** @type {number} */
    var i = 1;
    for (;i < arguments.length;i++) {
      var iterable = arguments[i];
      var key;
      for (key in iterable) {
        if (Object.prototype.hasOwnProperty.call(iterable, key)) {
          opt_attributes[key] = iterable[key];
        }
      }
    }
    return opt_attributes;
  };
  require(491);
  var newValue;
  var eventEmitter;
  var tagToInsert = Object(io.connect)(function($rootScope) {
    return{
      viewer : Object(path.d)($rootScope),
      currentView : Object(handler.e)($rootScope),
      isMenuOpen : $rootScope.navigation.isMobileNavMenuOpen,
      menuSection : $rootScope.navigation.mobileNavMenuSection
    };
  }, function($sanitize) {
    return{
      /**
       * @return {undefined}
       */
      onCloseMenu : function() {
        $sanitize(Object(data.m)());
      },
      /**
       * @return {undefined}
       */
      onOpenMenu : function() {
        $sanitize(Object(data.p)());
      }
    };
  })(function(result) {
    var message = result.header;
    var msg = result.isMenuOpen;
    var hz = result.onCloseMenu;
    var error = result.onOpenMenu;
    var camelKey = hasKey(result, ["header", "isMenuOpen", "onCloseMenu", "onOpenMenu"]);
    /** @type {boolean} */
    var lineno = !camelKey.viewer;
    return dom.createElement("div", {
      className : "_t5j1g"
    }, lineno ? dom.createElement(Class, dataAttr({
      handleMenuClick : error
    }, camelKey)) : message, msg && dom.createElement(exports.a, dataAttr({
      handleCloseClick : hz
    }, camelKey)));
  });
  var url = require(314);
  var result = require.n(url);
  var target = require(461);
  require(503);
  eventEmitter = (newValue = dom.PureComponent) && newValue.prototype;
  Object.assign(scope, newValue);
  /** @type {function (): undefined} */
  (scope.prototype = Object.create(eventEmitter)).constructor = scope;
  scope.__superConstructor__ = newValue;
  /**
   * @return {?}
   */
  scope.prototype.render = function() {
    return dom.createElement("div", {
      className : "_2eqg1"
    }, dom.createElement("div", {
      className : "_skx6u"
    }, target.a), dom.createElement("div", {
      className : "_7dzzd"
    }, "Descubra mais fotos gratuitas ao se cadastrar."));
  };
  var id;
  var prototype;
  /** @type {function (): undefined} */
  var sibling = scope;
  var matrix = require(56);
  var extend = Object.assign || function(opt_attributes) {
    /** @type {number} */
    var i = 1;
    for (;i < arguments.length;i++) {
      var iterable = arguments[i];
      var key;
      for (key in iterable) {
        if (Object.prototype.hasOwnProperty.call(iterable, key)) {
          opt_attributes[key] = iterable[key];
        }
      }
    }
    return opt_attributes;
  };
  require(467);
  /** @type {boolean} */
  var gt = false;
  id = dom.Component;
  prototype = id && id.prototype;
  Object.assign(attributes, id);
  /** @type {function (Function): undefined} */
  (attributes.prototype = Object.create(prototype)).constructor = attributes;
  attributes.__superConstructor__ = id;
  /**
   * @return {undefined}
   */
  attributes.prototype.componentDidMount = function() {
    if (this.$Shell1()) {
      if (this.$Shell2()) {
        this.$Shell3("openInAppRedirect");
      }
    }
  };
  /**
   * @return {?}
   */
  attributes.prototype.$Shell1 = function() {
    var history = this.props.history;
    return Object(options.w)(history.location.search) && app.a.lookup("notif").getBoolParam("to_web", false);
  };
  /**
   * @return {?}
   */
  attributes.prototype.$Shell2 = function() {
    return Object(options.D)() && (this.$Shell1() && app.a.lookup("notif").getBoolParam("to_web_with_redirect", false));
  };
  /**
   * @return {?}
   */
  attributes.prototype.renderAppInstallModal = function() {
    return dom.createElement(that.a, {
      campaign : this.props.pageIdentifier,
      onClose : this.$Shell4
    });
  };
  /**
   * @return {?}
   */
  attributes.prototype.renderFooter = function() {
    if (null === this.props.footerElement) {
      return null;
    }
    var requires = void 0;
    return requires = this.props.footerElement ? cycle(this.props.footerElement, {
      maxWidth : this.props.maxWidth
    }) : dom.createElement(child.a, {
      style : {
        maxWidth : this.props.maxWidth
      },
      variant : this.props.footerVariant
    }), dom.createElement("footer", {
      className : "_s5vm9",
      role : "contentinfo"
    }, requires);
  };
  /**
   * @return {?}
   */
  attributes.prototype.renderMobileHeader = function() {
    return Object(options.D)() && (this.props.mobileHeader && !Object(o.d)(this.props.viewer)) ? dom.createElement("nav", {
      className : "_f4a0g"
    }, dom.createElement(tagToInsert, {
      header : this.props.mobileHeader,
      analyticsContext : this.props.pageIdentifier
    })) : null;
  };
  /**
   * @return {?}
   */
  attributes.prototype.renderNavigation = function() {
    if (null === this.props.navElement) {
      return null;
    }
    var value = void 0;
    if (this.props.navElement) {
      value = cycle(this.props.navElement, {
        maxWidth : this.props.maxWidth
      });
    } else {
      /** @type {boolean} */
      var $Shell3 = !!(Object(options.C)() && this.props.iOSAppLink || Object(options.x)() && this.props.androidAppLink);
      value = dom.createElement(n, {
        analyticsContext : this.props.pageIdentifier,
        campaign : this.props.pageIdentifier,
        hasNewNav : update(this.props.isLoggedIn),
        onGetAppClick : this.$Shell5,
        onOpenInApp : $Shell3 ? this.$Shell3 : null,
        style : {
          maxWidth : this.props.maxWidth
        }
      });
    }
    return dom.createElement("nav", {
      className : "_68u16" + (Object(options.D)() ? "" : " _gft4l") + (Object(options.D)() ? " _evlcw" : "") + (Object(o.d)(this.props.viewer) ? " _b696q" : ""),
      role : "navigation"
    }, !Object(options.D)() && dom.createElement("div", {
      className : "_axuw9"
    }), value);
  };
  /**
   * @return {?}
   */
  attributes.prototype.render = function() {
    var a = update(this.props.isLoggedIn);
    var lastSlotRow = !this.props.hideNavigation && a;
    return dom.createElement(props.a, {
      className : "_29u45" + (lastSlotRow ? " _snde0" : ""),
      pageIdentifier : this.props.pageIdentifier
    }, dom.createElement(nodeName, null), dom.createElement(c.a, null), gt ? dom.createElement(input.a, {
      showAfterNavbar : true
    }) : null, matrix.c && dom.createElement(sibling, null), dom.createElement("main", {
      className : "_8fi2q" + (Object(options.D)() ? "" : " _2v79o") + (Object(options.D)() ? " _4kfp8" : ""),
      role : "main"
    }, this.props.children), lastSlotRow && this.renderMobileHeader(), this.props.hideNavigation ? null : this.renderNavigation(), this.props.hideNavigation ? this.renderFooter() : !a && this.renderFooter(), (Object(options.D)() || this.props.forceMobileAppInstallBanner) && this.renderAppInstallBanner(), !Object(options.D)() && (!this.props.hideNavigation && (!Object(o.b)(this.props.viewer) && dom.createElement(camelKey, null))), this.state.showAppInstallModal && this.renderAppInstallModal(), some() &&
    dom.createElement(property, null), dom.createElement(opts.a, {
      className : lastSlotRow ? "_foyzp" : ""
    }));
  };
  attributes.defaultProps = {
    footerVariant : child.a.VARIANTS.flexible,
    maxWidth : expected.b.wide
  };
  fnc.a = Object(selfClosing.withRouter)(Object(io.connect)(function(owner) {
    var unlock = Object(path.d)(owner);
    return{
      isLoggedIn : !!unlock,
      viewer : unlock
    };
  })(attributes));
}, function(dataAndEvents, meta, require) {
  /**
   * @param {Object} element
   * @return {?}
   */
  function create(element) {
    var content = element.children;
    return dom.createElement("div", {
      className : "_ccjml"
    }, dom.createElement("div", {
      className : "_gb6qx"
    }, content));
  }
  /**
   * @param {Object} object
   * @param {Array} keys
   * @return {?}
   */
  function hasKey(object, keys) {
    var old = {};
    var name;
    for (name in object) {
      if (!(keys.indexOf(name) >= 0)) {
        if (Object.prototype.hasOwnProperty.call(object, name)) {
          old[name] = object[name];
        }
      }
    }
    return old;
  }
  /**
   * @param {HTMLElement} result
   * @return {?}
   */
  function th(result) {
    var i = result.style;
    var content = result.text;
    var camelKey = hasKey(result, ["style", "text"]);
    return dom.createElement(create, null, dom.createElement(child.a, dataAttr({
      className : "_q3w2v" + ("warning" === i ? " _3nkvh" : "")
    }, camelKey), dom.createElement("div", {
      className : "_mydos"
    }, content), dom.createElement("div", {
      className : "_ith2m coreSpriteNotificationRightChevron"
    })));
  }
  /**
   * @param {Element} r
   * @return {?}
   */
  function createElement(r) {
    var h = r.children;
    var url = r.title;
    return dom.createElement("div", {
      className : "_nr93v" + (url ? "" : " _bic2o")
    }, !!url && dom.createElement("h3", {
      className : "_9jx7r"
    }, url), h);
  }
  /**
   * @param {Function} tests
   * @return {undefined}
   */
  function attributes(tests) {
    var me = this;
    parent.constructor.call(this, tests);
    /**
     * @param {?} ast
     * @return {undefined}
     */
    this.$MobileNavMenu2 = function(ast) {
      ast.preventDefault();
      me.props.onOpenMobileNavMenuSection(options.f);
    };
    /**
     * @return {undefined}
     */
    this.$MobileNavMenu3 = function() {
      me.props.onOpenMobileNavMenuSection(options.e);
    };
    /**
     * @param {?} ast
     * @return {undefined}
     */
    this.$MobileNavMenu4 = function(ast) {
      ast.preventDefault();
      me.setState({
        showReportFlow : true
      });
    };
    /**
     * @return {undefined}
     */
    this.$MobileNavMenu5 = function() {
      me.setState({
        showReportFlow : false
      });
    };
    /**
     * @param {?} ast
     * @return {undefined}
     */
    this.$MobileNavMenu6 = function(ast) {
      ast.preventDefault();
      Object(Block.logLoginEvent)({
        event_name : "logout_attempt"
      });
      var rvar = me.$MobileNavMenu7();
      if (rvar && (doc.a.isLocalStorageSupported() && helper.a.lookup("onetaplogin").getBoolParam("enabled", false))) {
        if (Object(path.d)(rvar)) {
          me.props.onLogout(rvar, true);
        } else {
          me.setState({
            showOneTapLoginDialog : true
          });
          Object(Block.logLoginEvent)({
            event_name : "one_tap_login_dialog_show"
          });
        }
      } else {
        Object(db.a)();
      }
    };
    /**
     * @return {undefined}
     */
    this.$MobileNavMenu8 = function() {
      var rvar = m()(me.$MobileNavMenu7());
      me.props.onLogout(rvar, false);
    };
    /**
     * @return {undefined}
     */
    this.$MobileNavMenu9 = function() {
      var rvar = m()(me.$MobileNavMenu7());
      Object(Block.logLoginEvent)({
        event_name : "one_tap_login_optin"
      });
      me.props.onLogout(rvar, true);
    };
    /**
     * @return {undefined}
     */
    this.$MobileNavMenu10 = function() {
      me.setState({
        showOneTapLoginDialog : false
      });
    };
    this.state = {
      showOneTapLoginDialog : false,
      showReportFlow : false
    };
  }
  var node = require(371);
  var update = require(29);
  var throttledUpdate = require.n(update);
  var start = require(2);
  var info = require(23);
  var o = require(313);
  var nodes = require(9);
  var object = require(254);
  var that = (require(12), require(370));
  var Block = require(7);
  var dom = require(0);
  require(495);
  var child = require(37);
  var dataAttr = Object.assign || function(opt_attributes) {
    /** @type {number} */
    var i = 1;
    for (;i < arguments.length;i++) {
      var iterable = arguments[i];
      var key;
      for (key in iterable) {
        if (Object.prototype.hasOwnProperty.call(iterable, key)) {
          opt_attributes[key] = iterable[key];
        }
      }
    }
    return opt_attributes;
  };
  require(21);
  require(497);
  require(499);
  var ctor;
  var parent;
  var options = require(108);
  var self = require(377);
  var util = require(6);
  var m = require.n(util);
  var path = require(288);
  var helper = require(59);
  var io = (require(202), require(8));
  var db = require(460);
  var Keyboard = require(261);
  var main = require(286);
  var p = require(20);
  var doc = require.n(p);
  var callback = Object.assign || function(opt_attributes) {
    /** @type {number} */
    var i = 1;
    for (;i < arguments.length;i++) {
      var iterable = arguments[i];
      var key;
      for (key in iterable) {
        if (Object.prototype.hasOwnProperty.call(iterable, key)) {
          opt_attributes[key] = iterable[key];
        }
      }
    }
    return opt_attributes;
  };
  require(493);
  var title = {
    text : "Sobre n\u00c3\u00b3s",
    href : "/about/us/"
  };
  var link = {
    text : "An\u00c3\u00bancios",
    href : "https://business.instagram.com/advertising/",
    target : "_blank"
  };
  var attrs = {
    text : "API",
    href : "/developer/",
    target : "_blank"
  };
  var params = {
    text : "Blog",
    href : "/blog/",
    target : "_blank"
  };
  var button = {
    text : "Alterar senha",
    href : "/accounts/password/change/"
  };
  var attr = {
    text : "Diret\u00c3\u00b3rio",
    href : Object(start.H)("ld") ? "/explore/locations/" : ""
  };
  var props = {
    text : "Baixar aplicativo",
    href : Object(object.a)("mobileNavMenu", "downloadAppLink", start.b),
    target : "_blank"
  };
  var context = {
    text : "Editar perfil",
    href : "/accounts/edit/"
  };
  var data = {
    text : "Central de Ajuda",
    href : "https://help.instagram.com/",
    target : "_blank"
  };
  var config = {
    text : "Carreiras",
    href : "/about/jobs/",
    target : "_blank"
  };
  var item = {
    text : "Entrar",
    href : "/accounts/login/"
  };
  var content = {
    text : "Sair",
    style : "warning"
  };
  var id = {
    text : "Aplicativos autorizados",
    href : "/accounts/manage_access/"
  };
  var row = {
    text : "Mais"
  };
  var query = {
    text : "Notifica\u00c3\u00a7\u00c3\u00b5es",
    href : "/emails/settings/"
  };
  var legend = {
    text : "Imprensa",
    href : info.l,
    target : "_blank"
  };
  var result = {
    text : "Pol\u00c3\u00adtica de Privacidade",
    href : "/legal/privacy/",
    target : "_blank"
  };
  var entries = {
    text : "Relatar um problema"
  };
  var valign = {
    text : "Cadastre-se",
    href : "/accounts/emailsignup/"
  };
  var defaults = {
    text : Object(main.a)(),
    href : "/legal/terms/",
    target : "_blank"
  };
  ctor = dom.Component;
  parent = ctor && ctor.prototype;
  Object.assign(attributes, ctor);
  /** @type {function (Function): undefined} */
  (attributes.prototype = Object.create(parent)).constructor = attributes;
  attributes.__superConstructor__ = ctor;
  /**
   * @return {undefined}
   */
  attributes.prototype.componentDidMount = function() {
    /** @type {number} */
    this.$MobileNavMenu1 = window.scrollY;
    /** @type {string} */
    m()(document.body).style.position = "fixed";
  };
  /**
   * @return {undefined}
   */
  attributes.prototype.componentWillUnmount = function() {
    /** @type {string} */
    m()(document.body).style.position = "";
    window.scrollTo(0, this.$MobileNavMenu1);
  };
  /**
   * @return {?}
   */
  attributes.prototype.$MobileNavMenu7 = function() {
    var values;
    return(null != (values = this.props) && null != (values = values.viewer) ? values.id : values) || null;
  };
  /**
   * @return {?}
   */
  attributes.prototype.$MobileNavMenu11 = function() {
    return this.state.showOneTapLoginDialog ? dom.createElement(o.a, {
      title : "Lembrar informa\u00c3\u00a7\u00c3\u00b5es de login?",
      body : "Lembraremos suas informa\u00c3\u00a7\u00c3\u00b5es de login para voc\u00c3\u00aa. Voc\u00c3\u00aa n\u00c3\u00a3o precisar\u00c3\u00a1 inseri-las ao fazer login novamente.",
      cancelLabel : "Agora n\u00c3\u00a3o",
      confirmLabel : "Lembrar",
      onClose : this.$MobileNavMenu8,
      onConfirm : this.$MobileNavMenu9,
      onModalClose : this.$MobileNavMenu10
    }) : null;
  };
  /**
   * @return {?}
   */
  attributes.prototype.$MobileNavMenu12 = function() {
    return nodes.canUseDOM && document.location.search.includes("__mid=") ? dom.createElement(createElement, {
      title : "MID Cookie",
      key : "mid"
    }, dom.createElement(create, null, dom.createElement("input", {
      type : "text",
      readOnly : true,
      value : throttledUpdate()("mid"),
      size : 30
    }))) : null;
  };
  /**
   * @return {?}
   */
  attributes.prototype.$MobileNavMenu13 = function() {
    return null;
  };
  /**
   * @return {?}
   */
  attributes.prototype.$MobileNavMenu14 = function() {
    return dom.createElement(th, callback({
      onClick : this.$MobileNavMenu4
    }, entries));
  };
  /**
   * @return {?}
   */
  attributes.prototype.$MobileNavMenu15 = function() {
    return dom.createElement("div", null, dom.createElement(createElement, {
      key : "account",
      title : "Conta"
    }, dom.createElement(th, context), dom.createElement(th, button)), dom.createElement(createElement, {
      key : "settings",
      title : "Configura\u00c3\u00a7\u00c3\u00b5es"
    }, dom.createElement(create, null, dom.createElement(that.a, {
      className : "_ifz4g"
    })), dom.createElement(th, id), dom.createElement(th, query)), dom.createElement(createElement, {
      key : "about",
      title : "Sobre"
    }, dom.createElement(th, link), dom.createElement(th, data), this.$MobileNavMenu14(), dom.createElement(th, callback({}, row, {
      onClick : this.$MobileNavMenu2
    }))), dom.createElement(createElement, {
      key : "logout"
    }, dom.createElement(th, callback({}, content, {
      onClick : this.$MobileNavMenu6
    }))), this.$MobileNavMenu12(), this.$MobileNavMenu13());
  };
  /**
   * @return {?}
   */
  attributes.prototype.$MobileNavMenu16 = function() {
    return dom.createElement("div", null, dom.createElement(createElement, {
      key : "options",
      title : "Op\u00c3\u00a7\u00c3\u00b5es"
    }, dom.createElement(th, valign), dom.createElement(th, item), dom.createElement(th, props), dom.createElement(create, null, dom.createElement(that.a, {
      className : "_ifz4g"
    }))), dom.createElement(createElement, {
      key : "about",
      title : "Sobre"
    }, dom.createElement(th, link), dom.createElement(th, data), dom.createElement(th, callback({}, row, {
      onClick : this.$MobileNavMenu2
    }))), this.$MobileNavMenu12(), this.$MobileNavMenu13());
  };
  /**
   * @return {?}
   */
  attributes.prototype.$MobileNavMenu17 = function() {
    var current = Object(start.H)("ld");
    return dom.createElement(createElement, {
      key : "more"
    }, dom.createElement(th, params), dom.createElement(th, legend), dom.createElement(th, attrs), dom.createElement(th, config), dom.createElement(th, title), dom.createElement(th, result), dom.createElement(th, defaults), current && dom.createElement(th, attr));
  };
  /**
   * @return {?}
   */
  attributes.prototype.render = function() {
    var props = this.props;
    var i = props.handleCloseClick;
    var len = props.menuSection;
    var length = props.viewer;
    /** @type {boolean} */
    var bulk = len === options.f;
    var Diff = void 0;
    return Diff = bulk ? this.$MobileNavMenu17() : length ? this.$MobileNavMenu15() : this.$MobileNavMenu16(), dom.createElement("section", {
      className : "_rxph5"
    }, dom.createElement("div", {
      className : "_f9l5x",
      onClick : i
    }), bulk ? dom.createElement(self.a, {
      className : "_pgfdr",
      onBack : this.$MobileNavMenu3,
      title : "Mais"
    }) : dom.createElement(self.a, {
      className : "_pgfdr",
      onCancel : i,
      title : "Op\u00c3\u00a7\u00c3\u00b5es"
    }), dom.createElement("div", {
      className : "_rqmce"
    }, Diff), this.state.showReportFlow && dom.createElement(node.b, {
      viewer : length,
      onClose : this.$MobileNavMenu5
    }), this.$MobileNavMenu11());
  };
  meta.a = Object(io.connect)(null, function(fn) {
    return{
      /**
       * @param {?} sqlt
       * @return {undefined}
       */
      onOpenMobileNavMenuSection : function(sqlt) {
        fn(Object(options.q)(sqlt));
      },
      /**
       * @param {?} res
       * @param {boolean} recurring
       * @return {undefined}
       */
      onLogout : function(res, recurring) {
        fn(Object(Keyboard.S)(res, recurring));
      }
    };
  })(attributes);
}, function(dataAndEvents, record, parse) {
  /**
   * @return {undefined}
   */
  function attributes() {
    ctor.apply(this, arguments);
  }
  var ctor;
  var basePrototype;
  var o = parse(320);
  var object = parse(23);
  var url = parse(7);
  var data = parse(234);
  var dom = parse(0);
  parse.n(dom);
  parse(473);
  basePrototype = (ctor = dom.Component) && ctor.prototype;
  Object.assign(attributes, ctor);
  /** @type {function (): undefined} */
  (attributes.prototype = Object.create(basePrototype)).constructor = attributes;
  attributes.__superConstructor__ = ctor;
  /**
   * @return {undefined}
   */
  attributes.prototype.componentDidMount = function() {
    Object(url.logPageView)("appModal", {
      source : this.props.campaign
    });
  };
  /**
   * @return {?}
   */
  attributes.prototype.render = function() {
    return dom.createElement(data.a, {
      onClose : this.props.onClose
    }, dom.createElement("div", {
      className : "_deuoy"
    }, dom.createElement("button", {
      className : "_dbnr9",
      onClick : this.props.onClose
    }, "Fechar"), dom.createElement("p", {
      className : "_1qubw"
    }, "Obtenha o aplicativo para experimentar a melhor vers\u00c3\u00a3o do Instagram."), dom.createElement("div", {
      className : "_5n3qk"
    }, dom.createElement(o.a, {
      campaign : this.props.campaign,
      medium : "modal",
      platform : object.a.IOS
    }), dom.createElement(o.a, {
      campaign : this.props.campaign,
      medium : "modal",
      platform : object.a.ANDROID
    }))));
  };
  /** @type {function (): undefined} */
  record.a = attributes;
}, , function(dataAndEvents, fnc, $) {
  /**
   * @return {undefined}
   */
  fnc.a = function() {
    /** @type {Element} */
    var form = document.createElement("form");
    form.setAttribute("action", "/accounts/logout/");
    form.setAttribute("method", "post");
    /** @type {Element} */
    var hiddenField = document.createElement("input");
    hiddenField.setAttribute("type", "hidden");
    hiddenField.setAttribute("name", "csrfmiddlewaretoken");
    hiddenField.setAttribute("value", Object(frame.d)());
    form.appendChild(hiddenField);
    throttledUpdate()(document.body).appendChild(form);
    form.submit();
  };
  var frame = $(2);
  var update = $(6);
  var throttledUpdate = $.n(update);
}, function(dataAndEvents, type, f) {
  /**
   * @return {undefined}
   */
  function attributes() {
    newValue.apply(this, arguments);
  }
  f.d(type, "a", function() {
    return toggleLink2;
  });
  var newValue;
  var basePrototype;
  var color = f(2);
  var dh = f(0);
  f.n(dh);
  f(505);
  var toggleLink2 = f(5)("Fotos gratuitas com {carrier name}", {
    "carrier name" : Object(color.s)()
  });
  basePrototype = (newValue = dh.PureComponent) && newValue.prototype;
  Object.assign(attributes, newValue);
  /** @type {function (): undefined} */
  (attributes.prototype = Object.create(basePrototype)).constructor = attributes;
  attributes.__superConstructor__ = newValue;
  /**
   * @return {?}
   */
  attributes.prototype.render = function() {
    return dh.createElement("div", {
      className : "_7i0jf"
    }, dh.createElement("div", {
      className : "_dgri1"
    }, toggleLink2));
  };
  /** @type {function (): undefined} */
  type.b = attributes;
}, function(dataAndEvents, deepDataAndEvents, require) {
  var walk = require(1);
  var nodes = require(463);
  walk(nodes, "is-2db8a945");
}, function(module, dataAndEvents) {
  /** @type {string} */
  module.exports = '._g7lf5{font-size:12px;font-weight:600;margin:0 auto;text-transform:uppercase;width:100%}._1gmap{color:#999}._538w0{display:inline-block;margin-bottom:7px;margin-right:16px}._538w0:last-child{margin-right:0}._g8wl6{-webkit-box-flex:1;-webkit-flex-grow:1;-ms-flex-positive:1;flex-grow:1;margin-bottom:3px}@media (min-width:876px){._8oc6p,._9z659{-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;padding:38px 0}._8oc6p ._luodr,._9z659 ._luodr{max-width:100%}._8oc6p ._g8wl6,._9z659 ._g8wl6{margin-right:16px}}@media (max-width:875px){._8oc6p,._9z659{padding:10px 0;text-align:center}._8oc6p ._g8wl6,._9z659 ._g8wl6{-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;margin:0 auto;max-width:360px}}._8t5z3{padding:10px 0;text-align:center}._8t5z3 ._g8wl6{-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;margin:0 auto;max-width:360px}._8oc6p{padding-top:0}._8oc6p ._luodr{margin-bottom:16px}._8oc6p ._538w0{margin:0}._8oc6p ._538w0:not(:last-of-type)::after{content:"\\00B7";margin:0 .25em}._8oc6p ._1gmap,._8oc6p ._538w0,._8oc6p ._hqmnd{color:#c7c7c7;font-size:11px;font-weight:400;line-height:13px;text-transform:capitalize}._8oc6p ._1gmap{text-transform:uppercase}';
}, function(dataAndEvents, deepDataAndEvents, $sanitize) {
  var isUndefined = $sanitize(1);
  var suiteView = $sanitize(465);
  isUndefined(suiteView, "is4c255ab9");
}, function(module, dataAndEvents) {
  /** @type {string} */
  module.exports = "._pqycz{color:#003569;cursor:pointer;display:inline-block;font-weight:600;position:relative;text-transform:uppercase;vertical-align:top}._9a0zo{color:#1372cc}._fsoey{cursor:pointer;height:100%;left:0;opacity:0;position:absolute;top:0;width:100%}._8zvt6{-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center}._r81pp{margin-left:4px;-webkit-transform:scale(.5);transform:scale(.5)}";
}, function(module, dataAndEvents) {
  module.exports = {
    af_ZA : {
      primary_code : "af",
      english_name : "Afrikaans",
      display_name : "Afrikaans"
    },
    ar_AR : {
      primary_code : "ar",
      english_name : "Arabic",
      display_name : "\u00d8\u00a7\u00d9\u201e\u00d8\u00b9\u00d8\u00b1\u00d8\u00a8\u00d9\u0160\u00d8\u00a9"
    },
    cs_CZ : {
      primary_code : "cs",
      english_name : "Czech",
      display_name : "\u00c4\u0152e\u00c5\u00a1tina"
    },
    da_DK : {
      primary_code : "da",
      english_name : "Danish",
      display_name : "Dansk"
    },
    de_DE : {
      primary_code : "de",
      english_name : "German",
      display_name : "Deutsch"
    },
    el_GR : {
      primary_code : "el",
      english_name : "Greek",
      display_name : "\u00ce\u2022\u00ce\u00bb\u00ce\u00bb\u00ce\u00b7\u00ce\u00bd\u00ce\u00b9\u00ce\u00ba\u00ce\u00ac"
    },
    en_US : {
      primary_code : "en",
      english_name : "English",
      display_name : "English"
    },
    es_ES : {
      primary_code : "es",
      english_name : "Spanish",
      display_name : "Espa\u00c3\u00b1ol (Espa\u00c3\u00b1a)"
    },
    es_LA : {
      primary_code : "es-la",
      english_name : "Spanish",
      display_name : "Espa\u00c3\u00b1ol"
    },
    fi_FI : {
      primary_code : "fi",
      english_name : "Finnish",
      display_name : "Suomi"
    },
    fr_FR : {
      primary_code : "fr",
      english_name : "French",
      display_name : "Fran\u00c3\u00a7ais"
    },
    id_ID : {
      primary_code : "id",
      english_name : "Indonesian",
      display_name : "Bahasa Indonesia"
    },
    it_IT : {
      primary_code : "it",
      english_name : "Italian",
      display_name : "Italiano"
    },
    ja_JP : {
      primary_code : "ja",
      english_name : "Japanese",
      display_name : "\u00e6\u2014\u00a5\u00e6\u0153\u00ac\u00e8\u00aa\u017e"
    },
    ko_KR : {
      primary_code : "ko",
      english_name : "Korean",
      display_name : "\u00ed\u2022\u0153\u00ea\u00b5\u00ad\u00ec\u2013\u00b4"
    },
    ms_MY : {
      primary_code : "ms",
      english_name : "Malay",
      display_name : "Bahasa Melayu"
    },
    nb_NO : {
      primary_code : "nb",
      english_name : "Norwegian",
      display_name : "Norsk"
    },
    nl_NL : {
      primary_code : "nl",
      english_name : "Dutch",
      display_name : "Nederlands"
    },
    pl_PL : {
      primary_code : "pl",
      english_name : "Polish",
      display_name : "Polski"
    },
    pt_BR : {
      primary_code : "pt-br",
      english_name : "Portuguese (Brazil)",
      display_name : "Portugu\u00c3\u00aas (Brasil)"
    },
    pt_PT : {
      primary_code : "pt",
      english_name : "Portuguese (Portugal)",
      display_name : "Portugu\u00c3\u00aas (Portugal)"
    },
    ru_RU : {
      primary_code : "ru",
      english_name : "Russian",
      display_name : "\u00d0 \u00d1\u0192\u00d1\u0081\u00d1\u0081\u00d0\u00ba\u00d0\u00b8\u00d0\u00b9"
    },
    sv_SE : {
      primary_code : "sv",
      english_name : "Swedish",
      display_name : "Svenska"
    },
    th_TH : {
      primary_code : "th",
      english_name : "Thai",
      display_name : "\u00e0\u00b8 \u00e0\u00b8\u00b2\u00e0\u00b8\u00a9\u00e0\u00b8\u00b2\u00e0\u00b9\u201e\u00e0\u00b8\u2014\u00e0\u00b8\u00a2"
    },
    tl_PH : {
      primary_code : "tl",
      english_name : "Tagalog/Filipino",
      display_name : "Filipino"
    },
    tr_TR : {
      primary_code : "tr",
      english_name : "Turkish",
      display_name : "T\u00c3\u00bcrk\u00c3\u00a7e"
    },
    zh_CN : {
      primary_code : "zh-cn",
      english_name : "Simplified Chinese (China)",
      display_name : "\u00e4\u00b8\u00ad\u00e6\u2013\u2021(\u00e7\u00ae\u20ac\u00e4\u00bd\u201c)"
    },
    zh_TW : {
      primary_code : "zh-tw",
      english_name : "Traditional Chinese (Taiwan)",
      display_name : "\u00e4\u00b8\u00ad\u00e6\u2013\u2021(\u00e5\u008f\u00b0\u00e7\u0081\u00a3)"
    },
    bn_IN : {
      primary_code : "bn",
      english_name : "Bengali",
      display_name : "\u00e0\u00a6\u00ac\u00e0\u00a6\u00be\u00e0\u00a6\u201a\u00e0\u00a6\u00b2\u00e0\u00a6\u00be"
    },
    gu_IN : {
      primary_code : "gu",
      english_name : "Gujarati",
      display_name : "\u00e0\u00aa\u2014\u00e0\u00ab\u0081\u00e0\u00aa\u0153\u00e0\u00aa\u00b0\u00e0\u00aa\u00be\u00e0\u00aa\u00a4\u00e0\u00ab\u20ac"
    },
    hi_IN : {
      primary_code : "hi",
      english_name : "Hindi",
      display_name : "\u00e0\u00a4\u00b9\u00e0\u00a4\u00bf\u00e0\u00a4\u00a8\u00e0\u00a5\u008d\u00e0\u00a4\u00a6\u00e0\u00a5\u20ac"
    },
    hr_HR : {
      primary_code : "hr",
      english_name : "Croatian",
      display_name : "Hrvatski"
    },
    hu_HU : {
      primary_code : "hu",
      english_name : "Hungarian",
      display_name : "Magyar"
    },
    kn_IN : {
      primary_code : "kn",
      english_name : "Kannada",
      display_name : "\u00e0\u00b2\u2022\u00e0\u00b2\u00a8\u00e0\u00b3\u008d\u00e0\u00b2\u00a8\u00e0\u00b2\u00a1"
    },
    ml_IN : {
      primary_code : "ml",
      english_name : "Malayalam",
      display_name : "\u00e0\u00b4\u00ae\u00e0\u00b4\u00b2\u00e0\u00b4\u00af\u00e0\u00b4\u00be\u00e0\u00b4\u00b3\u00e0\u00b4\u201a"
    },
    mr_IN : {
      primary_code : "mr",
      english_name : "Marathi",
      display_name : "\u00e0\u00a4\u00ae\u00e0\u00a4\u00b0\u00e0\u00a4\u00be\u00e0\u00a4 \u00e0\u00a5\u20ac"
    },
    ne_NP : {
      primary_code : "ne",
      english_name : "Nepali",
      display_name : "\u00e0\u00a4\u00a8\u00e0\u00a5\u2021\u00e0\u00a4\u00aa\u00e0\u00a4\u00be\u00e0\u00a4\u00b2\u00e0\u00a5\u20ac"
    },
    pa_IN : {
      primary_code : "pa",
      english_name : "Punjabi",
      display_name : "\u00e0\u00a8\u00aa\u00e0\u00a9\u00b0\u00e0\u00a8\u0153\u00e0\u00a8\u00be\u00e0\u00a8\u00ac\u00e0\u00a9\u20ac"
    },
    si_LK : {
      primary_code : "si",
      english_name : "Sinhala",
      display_name : "\u00e0\u00b7\u0192\u00e0\u00b7\u2019\u00e0\u00b6\u201a\u00e0\u00b7\u201e\u00e0\u00b6\u00bd"
    },
    sk_SK : {
      primary_code : "sk",
      english_name : "Slovak",
      display_name : "Sloven\u00c4\u008dina"
    },
    ta_IN : {
      primary_code : "ta",
      english_name : "Tamil",
      display_name : "\u00e0\u00ae\u00a4\u00e0\u00ae\u00ae\u00e0\u00ae\u00bf\u00e0\u00ae\u00b4\u00e0\u00af\u008d"
    },
    te_IN : {
      primary_code : "te",
      english_name : "Telugu",
      display_name : "\u00e0\u00b0\u00a4\u00e0\u00b1\u2020\u00e0\u00b0\u00b2\u00e0\u00b1\u0081\u00e0\u00b0\u2014\u00e0\u00b1\u0081"
    },
    ur_PK : {
      primary_code : "ur",
      english_name : "Urdu",
      display_name : "\u00d8\u00a7\u00d8\u00b1\u00d8\u00af\u00d9\u02c6"
    },
    vi_VN : {
      primary_code : "vi",
      english_name : "Vietnamese",
      display_name : "Ti\u00e1\u00ba\u00bfng Vi\u00e1\u00bb\u2021t"
    },
    zh_HK : {
      primary_code : "zh-hk",
      english_name : "Traditional Chinese (Hong Kong)",
      display_name : "\u00e4\u00b8\u00ad\u00e6\u2013\u2021(\u00e9\u00a6\u2122\u00e6\u00b8\u00af)"
    },
    bg_BG : {
      primary_code : "bg",
      english_name : "Bulgarian",
      display_name : "\u00d0\u2018\u00d1\u0160\u00d0\u00bb\u00d0\u00b3\u00d0\u00b0\u00d1\u20ac\u00d1\u0081\u00d0\u00ba\u00d0\u00b8"
    },
    fr_CA : {
      primary_code : "fr-ca",
      english_name : "French (Canada)",
      display_name : "Fran\u00c3\u00a7ais (Canada)"
    },
    ro_RO : {
      primary_code : "ro",
      english_name : "Romanian",
      display_name : "Rom\u00c3\u00a2n\u00c4\u0192"
    },
    sr_RS : {
      primary_code : "sr",
      english_name : "Serbian",
      display_name : "\u00d0\u00a1\u00d1\u20ac\u00d0\u00bf\u00d1\u0081\u00d0\u00ba\u00d0\u00b8"
    },
    uk_UA : {
      primary_code : "uk",
      english_name : "Ukrainian",
      display_name : "\u00d0\u00a3\u00d0\u00ba\u00d1\u20ac\u00d0\u00b0\u00d1\u2014\u00d0\u00bd\u00d1\u0081\u00d1\u0152\u00d0\u00ba\u00d0\u00b0"
    }
  };
}, function(dataAndEvents, deepDataAndEvents, require) {
  var walk = require(1);
  var nodes = require(468);
  walk(nodes, "is7b255644");
}, function(module, dataAndEvents) {
  /** @type {string} */
  module.exports = "._29u45{min-height:100%;overflow:hidden}._ap5bm{left:0;position:fixed;right:0;top:0;z-index:12}._b426x{-webkit-box-ordinal-group:2;-webkit-order:1;-ms-flex-order:1;order:1}._a20pl{-webkit-box-ordinal-group:4;-webkit-order:3;-ms-flex-order:3;order:3}._8fi2q{-webkit-box-flex:1;-webkit-flex-grow:1;-ms-flex-positive:1;flex-grow:1;-webkit-box-ordinal-group:5;-webkit-order:4;-ms-flex-order:4;order:4}._2v79o{background-color:#fafafa}._4kfp8{background-color:#fff}._s5vm9{background-color:#fafafa;-webkit-box-ordinal-group:6;-webkit-order:5;-ms-flex-order:5;order:5;padding:0 20px}._68u16,._axuw9{-webkit-box-ordinal-group:3;-webkit-order:2;-ms-flex-order:2;order:2}._gft4l,._snde0 ._f4a0g{-webkit-box-ordinal-group:1;-webkit-order:0;-ms-flex-order:0;order:0}._gft4l{background-color:#fafafa;padding:0}._evlcw{padding:0 20px}._snde0 ._evlcw{-webkit-box-ordinal-group:6;-webkit-order:5;-ms-flex-order:5;order:5}._evlcw,._snde0 ._b696q{-webkit-box-ordinal-group:1;-webkit-order:0;-ms-flex-order:0;order:0}._axuw9{-webkit-flex-basis:75px;-ms-flex-preferred-size:75px;flex-basis:75px}._foyzp{margin-bottom:44px}";
}, function(dataAndEvents, deepDataAndEvents, $sanitize) {
  var isUndefined = $sanitize(1);
  var suiteView = $sanitize(470);
  isUndefined(suiteView, "is7a475c3b");
}, function(module, dataAndEvents) {
  /** @type {string} */
  module.exports = "._p7yg0{padding:0 5px}._4p89h{background:0 0;-webkit-box-sizing:border-box;box-sizing:border-box;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;padding:11px 13px 11px 11px;position:relative;width:100%}._4p89h:active{opacity:1}._b9yt1{display:block;-webkit-box-flex:0;-webkit-flex:0 0 auto;-ms-flex:0 0 auto;flex:0 0 auto;margin:1px 0 0 -1px}._2fet1{text-align:right;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row}._q82jw{background:0 0;border:1px solid #fff;border-radius:3px;-webkit-box-sizing:border-box;box-sizing:border-box;font-size:14x;font-weight:600;line-height:25px;padding:0 10px;text-transform:uppercase}._dqkfg{-webkit-box-flex:1;-webkit-flex:1 1 200px;-ms-flex:1 1 200px;flex:1 1 200px;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;min-width:1px;padding-right:11px}._ciztw{padding-left:11px}._etyn4{padding-left:4px}._mz33q{font-size:15px;font-weight:600;line-height:15px;margin:0 0 2px}._qu3rn{font-size:12px;font-weight:500;line-height:12px;margin:0}._mz33q,._q82jw,._qu3rn{color:#fff}._s4mum{background:0 0;-webkit-box-sizing:border-box;box-sizing:border-box;border:0;padding:0 6px;margin:0 -6px 0 6px;line-height:25px}._s4mum::before{color:#fff;content:'\\00D7';display:block;font-size:22px;font-weight:600;line-height:25px;padding:0;margin:0}";
}, function(dataAndEvents, deepDataAndEvents, require) {
  var getActual = require(1);
  var Block = require(472);
  getActual(Block, "is2ea25cca");
}, function(module, dataAndEvents) {
  /** @type {string} */
  module.exports = "._5nb98{background-color:#d10869;overflow:hidden;display:block}._317z0{background:-webkit-radial-gradient(70% 70% ellipse,#ee583f 8%,#d92d77 42%,#bd3381 58%);background:radial-gradient(ellipse at 70% 70%,#ee583f 8%,#d92d77 42%,#bd3381 58%);height:100%;pointer-events:none;position:absolute;width:100%}._a8at0{-webkit-animation:GradientRotation 12s steps(120) infinite;animation:GradientRotation 12s steps(120) infinite;margin-left:-25%;margin-top:-75%;min-height:150%;min-width:150%;padding-bottom:75%;padding-top:75%}._c05qa{z-index:1}@-webkit-keyframes GradientRotation{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes GradientRotation{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}";
}, function(dataAndEvents, deepDataAndEvents, require) {
  var getActual = require(1);
  var Block = require(474);
  getActual(Block, "is1e1d5bd2");
}, function(module, dataAndEvents) {
  /** @type {string} */
  module.exports = "._deuoy{background:#fff;border-radius:5px;margin:0 auto;padding:50px 75px}._5n3qk{-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;margin-top:30px}._dbnr9{background:0 0;border:none;cursor:pointer;height:54px;outline:0;overflow:hidden;position:absolute;right:0;top:0}._dbnr9::before{color:#999;content:'\\00D7';display:block;font-size:24px;padding:15px}._1qubw{color:#262626;font-size:18px;line-height:24px;margin:0 auto;max-width:250px}";
}, function(dataAndEvents, deepDataAndEvents, require) {
  var getActual = require(1);
  var Block = require(476);
  getActual(Block, "is548361a7");
}, function(module, dataAndEvents) {
  /** @type {string} */
  module.exports = "._j8mem{bottom:0;left:0;position:fixed;width:100%;z-index:100}._52ega,._6in6f{-webkit-transform:translateY(100%);transform:translateY(100%);-webkit-transition:-webkit-transform 200ms ease-out;transition:transform 200ms ease-out;transition:transform 200ms ease-out,-webkit-transform 200ms ease-out}._6in6f{-webkit-transform:translateY(0%);transform:translateY(0%)}._lilm5{color:#c7c7c7;cursor:pointer;font-size:16px;padding:7px;position:absolute;right:5px;top:8px;z-index:100}._lilm5:hover{color:#262626}._1qj9z{background-color:#fff;height:77px}._91nrv{height:4px}";
}, function(dataAndEvents, deepDataAndEvents, require) {
  var getActual = require(1);
  var Block = require(478);
  getActual(Block, "is7b955c5e");
}, function(module, dataAndEvents) {
  /** @type {string} */
  module.exports = "._3dy6p,._9s4of{-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-box-flex:1}._9s4of{-webkit-flex-grow:1;-ms-flex-positive:1;flex-grow:1;width:100%;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center}._3dy6p{-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-flex:1;-ms-flex:1;flex:1;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;max-width:1065px;padding:0 60px}._79nsq{color:#fff;width:120px}._7g2d3,._e6nsl{-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-flex-basis:300px;-ms-flex-preferred-size:300px;flex-basis:300px;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row}._e6nsl{-webkit-box-direction:reverse;-webkit-flex-direction:row-reverse;-ms-flex-direction:row-reverse;flex-direction:row-reverse;text-align:right}._l9hys{color:#262626;font-size:15px;font-weight:600;line-height:17.5px}._nu3p5{-webkit-flex-basis:40px;-ms-flex-preferred-size:40px;flex-basis:40px;margin-right:16px;min-width:40px}._raoqe{cursor:pointer;display:inline-block;margin-top:4px}._raoqe:not(:first-child){margin-right:16px}";
}, function(dataAndEvents, deepDataAndEvents, $sanitize) {
  var isUndefined = $sanitize(1);
  var suiteView = $sanitize(480);
  isUndefined(suiteView, "is-2d1e9fc8");
}, function(module, dataAndEvents) {
  /** @type {string} */
  module.exports = "._8c4cy,._lozk5{-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-box-flex:1;-webkit-flex-grow:1;-ms-flex-positive:1;flex-grow:1}._lozk5{cursor:pointer;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;width:100%;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center}._8c4cy{-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;max-width:1065px;padding:0 60px}._gj28y{color:#fff;width:120px}._a9q20,._ae8sk{-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-flex-basis:300px;-ms-flex-preferred-size:300px;flex-basis:300px;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row}._a9q20{-webkit-box-direction:reverse;-webkit-flex-direction:row-reverse;-ms-flex-direction:row-reverse;flex-direction:row-reverse;text-align:right}._l80nl{border-radius:3px;-webkit-mask-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAIAAACQd1PeAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAA5JREFUeNpiYGBgAAgwAAAEAAGbA+oJAAAAAElFTkSuQmCC)}._s20cp{color:#262626;font-size:15px;font-weight:600;line-height:17.5px}._rhu7g{-webkit-flex-basis:40px;-ms-flex-preferred-size:40px;flex-basis:40px;margin-right:16px;min-width:40px}";
}, function(dataAndEvents, deepDataAndEvents, require) {
  var walk = require(1);
  var nodes = require(482);
  walk(nodes, "is31c4585c");
}, function(module, dataAndEvents) {
  /** @type {string} */
  module.exports = "._bz8nr{height:45px}";
}, function(dataAndEvents, deepDataAndEvents, require) {
  var walk = require(1);
  var nodes = require(484);
  walk(nodes, "is-3c2a696");
}, function(module, dataAndEvents) {
  /** @type {string} */
  module.exports = "._4pxed{background-color:#fafafa;border-bottom:1px solid rgba(0,0,0,.0975);left:0;position:fixed;right:0;top:0;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:10}._4pxed,._k3nd9{height:45px}._t0se8{bottom:20px;left:50%;position:fixed;-webkit-transform:translateX(-50%);transform:translateX(-50%);z-index:3}._fysxf,._tgfps{height:100%}._g1mg2 ._4pxed{background-color:#fff;border:0;bottom:0;height:44px;top:auto}._g1mg2 ._4pxed::before{background:rgba(0,0,0,.0975);content:'';height:1px;left:0;position:absolute;right:0;top:-1px}._g1mg2 ._t0se8{bottom:55px}._g1mg2._b3nzv ._4pxed{top:0;position:fixed;bottom:auto}._g1mg2._b3nzv ._4pxed::before{top:auto;bottom:-1px}";
}, function(dataAndEvents, deepDataAndEvents, $sanitize) {
  var isUndefined = $sanitize(1);
  var suiteView = $sanitize(486);
  isUndefined(suiteView, "is-2a43a38d");
}, function(module, dataAndEvents) {
  /** @type {string} */
  module.exports = "._tdn3u{-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;height:100%}._k0d2z{-webkit-box-flex:1;-webkit-flex-grow:1;-ms-flex-positive:1;flex-grow:1;height:100%;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center}._ttgfw{-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;height:100%}._crp8c{margin:0 auto}._mdf8w{margin-top:-1px}._kgx47::after{background:#ed4956;border-radius:2px;bottom:-5px;content:'';height:4px;left:0;margin:0 auto;position:absolute;right:0;-webkit-transform:translateX(.5px);transform:translateX(.5px);width:4px}";
}, function(dataAndEvents, deepDataAndEvents, $sanitize) {
  var isUndefined = $sanitize(1);
  var suiteView = $sanitize(488);
  isUndefined(suiteView, "is335f5cf4");
}, function(module, dataAndEvents) {
  /** @type {string} */
  module.exports = "._kghf8{-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;padding:0 20px}._rlvtm._kghf8{padding:0 16px}._lc996{-webkit-flex-basis:25px;-ms-flex-preferred-size:25px;flex-basis:25px;-webkit-flex-shrink:0;-ms-flex-negative:0;flex-shrink:0;height:25px;margin-top:11px}._rlvtm ._lc996{-webkit-flex-basis:103px;-ms-flex-preferred-size:103px;flex-basis:103px;height:29px;margin-top:10px}._ds3zg{-webkit-flex-basis:45px;-ms-flex-preferred-size:45px;flex-basis:45px;font-size:14px;margin-top:16px;min-width:45px}._ds3zg,._ds3zg:active,._ds3zg:visited{color:#3897f0;font-weight:600}._ds3zg:active{opacity:.5}._1ccv1{-webkit-box-flex:1;-webkit-flex-grow:1;-ms-flex-positive:1;flex-grow:1;margin:0 20px}._6v5ii{-webkit-align-self:center;-ms-flex-item-align:center;align-self:center;left:auto;max-width:215px;width:100%;margin:9px 0;position:relative}._hafnz{color:#c7c7c7;font-size:14px;line-height:29px;margin:0 6px}._rlvtm ._hafnz{margin:0 8px}._nfphn{-webkit-align-self:center;-ms-flex-item-align:center;align-self:center;display:block;-webkit-box-flex:1;-webkit-flex-grow:1;-ms-flex-positive:1;flex-grow:1;margin-top:9px;text-align:right}._rlvtm ._nfphn{margin-top:4px}";
}, function(dataAndEvents, deepDataAndEvents, $sanitize) {
  var isUndefined = $sanitize(1);
  var suiteView = $sanitize(490);
  isUndefined(suiteView, "is1d4e5bd3");
}, function(module, dataAndEvents) {
  /** @type {string} */
  module.exports = "._jdrlj,._n6et3{border-radius:80px}._jdrlj{height:40px;margin:0 auto}._n6et3{overflow:hidden;-webkit-transform:translateZ(0);transform:translateZ(0)}._khkr1,._khkr1:active,._khkr1:focus,._khkr1:hover,._khkr1:visited{border-right:1px solid rgba(255,255,255,.5);color:#fff;font-weight:300;letter-spacing:.2px;line-height:27px;margin-right:35px;padding-left:21px;padding-right:10px;min-width:90px;text-align:center;white-space:nowrap}._pvdmb{display:block;margin-bottom:7px;margin-top:7px}._rnzfs,._rnzfs:active,._rnzfs:focus,._rnzfs:hover,._rnzfs:visited{color:#fff;font-size:29px;font-weight:100;line-height:26px;position:absolute;padding-left:10px;padding-top:5px;padding-bottom:10px;right:1px;top:0;width:26px}";
}, function(dataAndEvents, deepDataAndEvents, require) {
  var getActual = require(1);
  var Block = require(492);
  getActual(Block, "is3d66598f");
}, function(module, dataAndEvents) {
  /** @type {string} */
  module.exports = "._t5j1g{height:45px;z-index:11}";
}, function(dataAndEvents, deepDataAndEvents, require) {
  var walk = require(1);
  var nodes = require(494);
  walk(nodes, "is662f5aff");
}, function(module, dataAndEvents) {
  /** @type {string} */
  module.exports = "._rqmce{background:#fafafa;bottom:0;left:0;overflow-x:hidden;overflow-y:auto;position:fixed;right:0;top:44px;z-index:12;-webkit-overflow-scrolling:touch}._pgfdr{z-index:13}._ifz4g,._oq4rq{-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;font-weight:400;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-box-flex:1;-webkit-flex-grow:1;-ms-flex-positive:1;flex-grow:1;height:44px;padding:0;text-transform:none;color:#262626}";
}, function(dataAndEvents, deepDataAndEvents, require) {
  var walk = require(1);
  var nodes = require(496);
  walk(nodes, "is-29aea372");
}, function(module, dataAndEvents) {
  /** @type {string} */
  module.exports = "._ccjml{background:#fff;border-top:1px solid #dbdbdb;height:44px}._gb6qx{-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;cursor:pointer;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-box-flex:1;-webkit-flex-grow:1;-ms-flex-positive:1;flex-grow:1;font-size:16px;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;height:44px;line-height:44px;padding:0 16px}";
}, function(dataAndEvents, deepDataAndEvents, $sanitize) {
  var isUndefined = $sanitize(1);
  var suiteView = $sanitize(498);
  isUndefined(suiteView, "is-29b7a373");
}, function(module, dataAndEvents) {
  /** @type {string} */
  module.exports = "._q3w2v{-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-box-flex:1;-webkit-flex-grow:1;-ms-flex-positive:1;flex-grow:1;font-size:16px;height:44px;line-height:44px;padding:0}._q3w2v,._q3w2v:visited{color:#262626}._3nkvh,._3nkvh:visited{color:#ed4956}._mydos{-webkit-box-flex:1;-webkit-flex-grow:1;-ms-flex-positive:1;flex-grow:1}";
}, function(dataAndEvents, deepDataAndEvents, $sanitize) {
  var isUndefined = $sanitize(1);
  var suiteView = $sanitize(500);
  isUndefined(suiteView, "is-10bda22c");
}, function(module, dataAndEvents) {
  /** @type {string} */
  module.exports = "._nr93v{border-bottom:1px solid #dbdbdb}._bic2o{margin-top:12px}._nr93v:last-of-type{margin-bottom:54px}._9jx7r{color:#999;font-size:14px;font-weight:600;text-transform:uppercase;margin:20px 16px 8px}";
}, function(dataAndEvents, deepDataAndEvents, require) {
  var getActual = require(1);
  var Block = require(502);
  getActual(Block, "is1d8b5bc0");
}, function(module, dataAndEvents) {
  /** @type {string} */
  module.exports = "._t93vr{-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;background-color:#fafafa;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;height:44px;left:0;position:fixed;right:0;top:0;z-index:10}._t93vr::before{background-color:rgba(0,0,0,.0975);bottom:-1px;content:'';height:1px;left:0;position:absolute;right:0}._8r54i{background:0 0;border:0;cursor:pointer;margin:0;outline:none;padding:0}._jtbs5{height:45px}._ry3m5{-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-box-flex:1;-webkit-flex-grow:1;-ms-flex-positive:1;flex-grow:1}._ry3m5:first-child{-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start;padding-left:16px}._ry3m5:last-child{-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end;padding-right:16px}._7tnxy{-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-box-flex:3;-webkit-flex-grow:3;-ms-flex-positive:3;flex-grow:3;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center}._cpgz7{-webkit-flex-basis:216px;-ms-flex-preferred-size:216px;flex-basis:216px;margin:0 auto;max-width:216px}";
}, function(dataAndEvents, deepDataAndEvents, require) {
  var getActual = require(1);
  var Block = require(504);
  getActual(Block, "is39555a4a");
}, function(module, dataAndEvents) {
  /** @type {string} */
  module.exports = "._2eqg1{background-image:-webkit-gradient(linear,left top,right top,from(#3796ef),to(#61c5f1));background-image:-webkit-linear-gradient(left,#3796ef,#61c5f1);background-image:linear-gradient(to right,#3796ef,#61c5f1);-webkit-box-ordinal-group:3;-webkit-order:2;-ms-flex-order:2;order:2}._7dzzd,._skx6u{color:#fff;margin-left:20px;text-align:left}._skx6u{font-weight:600;margin-top:10px;font-size:14px}._7dzzd{font-size:12px;margin-bottom:10px}";
}, function(dataAndEvents, deepDataAndEvents, require) {
  var walk = require(1);
  var nodes = require(506);
  walk(nodes, "is36205a08");
}, function(module, dataAndEvents) {
  /** @type {string} */
  module.exports = "._7i0jf{background-color:#3897f0}._dgri1{color:#fff;font-size:12px;line-height:32px;margin-left:12px;text-align:left}";
}, function(dataAndEvents, fnc, $) {
  var self = $(0);
  $.n(self);
  $(21);
  $(510);
  /**
   * @param {Function} tests
   * @return {?}
   */
  fnc.a = function(tests) {
    var i = tests.likeEventCount;
    return i ? self.createElement("div", {
      className : "_rcw2i",
      key : i
    }, self.createElement("span", {
      className : "_bnvnp coreSpriteLikeAnimationHeart"
    })) : null;
  };
}, , , function(dataAndEvents, deepDataAndEvents, require) {
  var walk = require(1);
  var nodes = require(511);
  walk(nodes, "is1fa657d0");
}, function(module, dataAndEvents) {
  /** @type {string} */
  module.exports = "._rcw2i{-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;bottom:0;left:0;position:absolute;right:0;top:0}._bnvnp{-webkit-animation-duration:1s;animation-duration:1s;-webkit-animation-name:like-heart-animation;animation-name:like-heart-animation;-webkit-animation-timing-function:ease-in-out;animation-timing-function:ease-in-out;margin:0 auto;opacity:0;pointer-events:none;-webkit-transform:scale(0);transform:scale(0)}@-webkit-keyframes like-heart-animation{0%,to{opacity:0;-webkit-transform:scale(0);transform:scale(0)}15%{opacity:.9;-webkit-transform:scale(1.2);transform:scale(1.2)}30%{-webkit-transform:scale(.95);transform:scale(.95)}45%,80%{opacity:.9;-webkit-transform:scale(1);transform:scale(1)}}@keyframes like-heart-animation{0%,to{opacity:0;-webkit-transform:scale(0);transform:scale(0)}15%{opacity:.9;-webkit-transform:scale(1.2);transform:scale(1.2)}30%{-webkit-transform:scale(.95);transform:scale(.95)}45%,80%{opacity:.9;-webkit-transform:scale(1);transform:scale(1)}}";
}, function(dataAndEvents, deepDataAndEvents, $sanitize) {
  var isUndefined = $sanitize(1);
  var suiteView = $sanitize(518);
  isUndefined(suiteView, "is-64ab8ad8");
}, function(dataAndEvents, fnc, $) {
  var self = $(0);
  $.n(self);
  $(21);
  $(64);
  $(523);
  /**
   * @param {Function} tests
   * @return {?}
   */
  fnc.a = function(tests) {
    var cls = tests.className;
    var first = tests.smallSize;
    return self.createElement("div", {
      className : cls
    }, self.createElement("span", {
      className : (first ? "" : "_my8ed") + (first ? " _7cdje" : "") + " _8scx2" + (first ? "" : " coreSpriteVideoIconLarge") + (first ? " coreSpriteVideoIconSmall" : "")
    }, "V\u00c3\u00addeo"));
  };
}, function(dataAndEvents, record, $) {
  /**
   * @param {string} blob
   * @return {?}
   */
  function write(blob) {
    if (null == blob || blob && blob.length < 3) {
      return null;
    }
    var data = atob(blob);
    var scripts = data.substring(0, 3).split("").map(function(a) {
      return a.charCodeAt(0);
    });
    var result = jQuery(scripts, 3);
    var message = result[0];
    var n = result[1];
    var lo = result[2];
    if (0 !== message || (n > 42 || lo > 42)) {
      return null;
    }
    var r = atob(str).split("");
    /** @type {string} */
    r[162] = String.fromCharCode(n);
    /** @type {string} */
    r[160] = String.fromCharCode(lo);
    var p = data.slice(3).split("");
    var buf = r.concat(p);
    return blob ? "data:image/jpeg;base64," + btoa(buf.join("")) : null;
  }
  /**
   * @param {?} scope
   * @param {?} attr
   * @return {?}
   */
  function postLink(scope, attr) {
    var oldconfig = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
    var w = attr.width;
    var j = attr.height;
    var object = extend({}, oldconfig, deep);
    var value = object.blurRadius;
    var length = object.dimensionDivisor;
    var key = void 0;
    var cols = void 0;
    return key = "auto" === value ? Math.max(10, (w + j) / 2 * 0.075) : value, (cols = "auto" === length ? Math.max(1.5, 0.2 * key) : length) > 0 || isFunction()(0), then(scope).then(function(background) {
      /** @type {Element} */
      var cnv = document.createElement("canvas");
      /** @type {number} */
      var width = Math.ceil(w / cols);
      /** @type {number} */
      var height = Math.ceil(j / cols);
      /** @type {number} */
      cnv.width = width;
      /** @type {number} */
      cnv.height = height;
      var ctx = cnv.getContext("2d");
      if (null == ctx) {
        throw new Error("failed to get context");
      }
      ctx.drawImage(background, 0, 0, width, height);
      var id2 = ctx.getImageData(0, 0, width, height);
      var data2 = id2.data;
      return text()(data2, width, height, Math.floor(key / cols)), ctx.putImageData(id2, 0, 0), cnv;
    });
  }
  /**
   * @param {Function} tests
   * @return {undefined}
   */
  function attributes(tests) {
    parent.constructor.call(this, tests);
    /** @type {boolean} */
    this.$PreviewPhoto1 = false;
    /** @type {boolean} */
    this.$PreviewPhoto2 = false;
    /** @type {null} */
    this.$PreviewPhoto3 = null;
    this.state = {
      canvas : null,
      blurRadius : null,
      dimensionDivisor : null,
      dimensions : null,
      previewData : null
    };
    this.$PreviewPhoto4();
  }
  var data;
  var parent;
  var emptyJ = $(9);
  var jQuery = function() {
    /**
     * @param {?} dataAndEvents
     * @param {number} deepDataAndEvents
     * @return {?}
     */
    function clone(dataAndEvents, deepDataAndEvents) {
      /** @type {Array} */
      var res = [];
      /** @type {boolean} */
      var callback2 = true;
      /** @type {boolean} */
      var n = false;
      var bulk = void 0;
      try {
        var next;
        var self = dataAndEvents[Symbol.iterator]();
        for (;!(callback2 = (next = self.next()).done) && (res.push(next.value), !deepDataAndEvents || res.length !== deepDataAndEvents);callback2 = true) {
        }
      } catch (fn) {
        /** @type {boolean} */
        n = true;
        bulk = fn;
      } finally {
        try {
          if (!callback2) {
            if (self.return) {
              self.return();
            }
          }
        } finally {
          if (n) {
            throw bulk;
          }
        }
      }
      return res;
    }
    return function(object, deepDataAndEvents) {
      if (Array.isArray(object)) {
        return object;
      }
      if (Symbol.iterator in Object(object)) {
        return clone(object, deepDataAndEvents);
      }
      throw new TypeError("Invalid attempt to destructure non-iterable instance");
    };
  }();
  /** @type {string} */
  var str = "/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEABsaGikdKUEmJkFCLy8vQkc/Pj4/R0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0cBHSkpNCY0PygoP0c/NT9HR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR//AABEIABQAKgMBIgACEQEDEQH/xAGiAAABBQEBAQEBAQAAAAAAAAAAAQIDBAUGBwgJCgsQAAIBAwMCBAMFBQQEAAABfQECAwAEEQUSITFBBhNRYQcicRQygZGhCCNCscEVUtHwJDNicoIJChYXGBkaJSYnKCkqNDU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6g4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2drh4uPk5ebn6Onq8fLz9PX29/j5+gEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoLEQACAQIEBAMEBwUEBAABAncAAQIDEQQFITEGEkFRB2FxEyIygQgUQpGhscEJIzNS8BVictEKFiQ04SXxFxgZGiYnKCkqNTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqCg4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2dri4+Tl5ufo6ery8/T19vf4+fr/2gAMAwEAAhEDEQA/AA==";
  var html = $(3);
  var isFunction = $.n(html);
  var update = $(387);
  var throttledUpdate = $.n(update);
  var content = $(517);
  var text = $.n(content);
  var extend = Object.assign || function(opt_attributes) {
    /** @type {number} */
    var i = 1;
    for (;i < arguments.length;i++) {
      var iterable = arguments[i];
      var key;
      for (key in iterable) {
        if (Object.prototype.hasOwnProperty.call(iterable, key)) {
          opt_attributes[key] = iterable[key];
        }
      }
    }
    return opt_attributes;
  };
  var deep = {
    blurRadius : "auto",
    dimensionDivisor : "auto"
  };
  var then = throttledUpdate()(function(data) {
    return new Promise(function(cb, error) {
      /** @type {Image} */
      var img = new Image;
      var src = write(data);
      if (!(null != src)) {
        isFunction()(0);
      }
      /**
       * @return {?}
       */
      img.onload = function() {
        return cb(img);
      };
      /** @type {Function} */
      img.onerror = error;
      img.src = src;
      if (img.complete) {
        img.onload();
        /** @type {null} */
        img.onload = null;
        /** @type {null} */
        img.onerror = null;
      }
    });
  });
  var elem = $(6);
  var queue = $.n(elem);
  var d = $(0);
  var options = $(17);
  $(515);
  data = d.PureComponent;
  parent = data && data.prototype;
  Object.assign(attributes, data);
  /** @type {function (Function): undefined} */
  (attributes.prototype = Object.create(parent)).constructor = attributes;
  attributes.__superConstructor__ = data;
  /**
   * @return {?}
   */
  attributes.prototype.$PreviewPhoto5 = function() {
    var context = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.props;
    var config_ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.state;
    var scale = context.dimensionScaleThreshold;
    var dims = config_.dimensions;
    return context.previewData === config_.previewData && (context.blurRadius === config_.blurRadius && (context.dimensionDivisor === config_.dimensionDivisor && (null != dims && (context.dimensions.width <= dims.width * scale && context.dimensions.height <= dims.height * scale))));
  };
  /**
   * @return {undefined}
   */
  attributes.prototype.$PreviewPhoto4 = function() {
    var point = this;
    var layerContext = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.props;
    if (emptyJ.canUseDOM && (!this.$PreviewPhoto2 && (!this.$PreviewPhoto1 && !this.$PreviewPhoto5(layerContext)))) {
      /** @type {boolean} */
      this.$PreviewPhoto1 = true;
      var r20 = postLink(layerContext.previewData, layerContext.dimensions, {
        blurRadius : layerContext.blurRadius,
        dimensionDivisor : layerContext.dimensionDivisor
      }).then(function(canvas) {
        if (!point.$PreviewPhoto2) {
          /** @type {string} */
          canvas.style.width = "100%";
          /** @type {string} */
          canvas.style.height = "100%";
          /** @type {string} */
          canvas.style.display = "block";
          point.setState({
            canvas : canvas,
            blurRadius : layerContext.blurRadius,
            dimensionDivisor : layerContext.dimensionDivisor,
            dimensions : layerContext.dimensions,
            previewData : layerContext.previewData
          }, function() {
            /** @type {boolean} */
            point.$PreviewPhoto1 = false;
            if (!point.$PreviewPhoto5()) {
              point.$PreviewPhoto4();
            }
          });
        }
      }, function(error) {
        return point.$PreviewPhoto1 = false, Promise.reject(error);
      });
      Object(options.a)(r20);
    }
  };
  /**
   * @return {undefined}
   */
  attributes.prototype.componentWillUnmount = function() {
    /** @type {boolean} */
    this.$PreviewPhoto2 = true;
  };
  /**
   * @param {?} nextProps
   * @return {undefined}
   */
  attributes.prototype.componentWillReceiveProps = function(nextProps) {
    this.$PreviewPhoto4(nextProps);
  };
  /**
   * @return {undefined}
   */
  attributes.prototype.componentDidUpdate = function() {
    var canvas = this.state.canvas;
    if (canvas) {
      var parentNode = queue()(this.$PreviewPhoto3);
      if (parentNode.children.length > 0) {
        if (parentNode.children[0] !== canvas) {
          parentNode.replaceChild(canvas, parentNode.children[0]);
        }
      } else {
        parentNode.appendChild(canvas);
      }
    }
  };
  /**
   * @return {?}
   */
  attributes.prototype.render = function() {
    var first = this;
    return d.createElement("div", {
      className : "_pe7i9",
      /**
       * @param {?} i
       * @return {?}
       */
      ref : function(i) {
        return first.$PreviewPhoto3 = i;
      }
    });
  };
  attributes.defaultProps = {
    blurRadius : "auto",
    dimensionDivisor : "auto",
    dimensionScaleThreshold : 1.5
  };
  /** @type {function (Function): undefined} */
  record.a = attributes;
}, function(dataAndEvents, deepDataAndEvents, require) {
  var walk = require(1);
  var nodes = require(516);
  walk(nodes, "is-35cea869");
}, function(module, dataAndEvents) {
  /** @type {string} */
  module.exports = "._pe7i9{display:block;width:100%;height:100%}";
}, function(module, dataAndEvents) {
  /**
   * @return {undefined}
   */
  function BlurStack() {
    /** @type {number} */
    this.r = 0;
    /** @type {number} */
    this.g = 0;
    /** @type {number} */
    this.b = 0;
    /** @type {number} */
    this.a = 0;
    /** @type {null} */
    this.next = null;
  }
  /** @type {Array} */
  var blur_mul_table = [512, 512, 456, 512, 328, 456, 335, 512, 405, 328, 271, 456, 388, 335, 292, 512, 454, 405, 364, 328, 298, 271, 496, 456, 420, 388, 360, 335, 312, 292, 273, 512, 482, 454, 428, 405, 383, 364, 345, 328, 312, 298, 284, 271, 259, 496, 475, 456, 437, 420, 404, 388, 374, 360, 347, 335, 323, 312, 302, 292, 282, 273, 265, 512, 497, 482, 468, 454, 441, 428, 417, 405, 394, 383, 373, 364, 354, 345, 337, 328, 320, 312, 305, 298, 291, 284, 278, 271, 265, 259, 507, 496, 485, 475, 465, 456,
  446, 437, 428, 420, 412, 404, 396, 388, 381, 374, 367, 360, 354, 347, 341, 335, 329, 323, 318, 312, 307, 302, 297, 292, 287, 282, 278, 273, 269, 265, 261, 512, 505, 497, 489, 482, 475, 468, 461, 454, 447, 441, 435, 428, 422, 417, 411, 405, 399, 394, 389, 383, 378, 373, 368, 364, 359, 354, 350, 345, 341, 337, 332, 328, 324, 320, 316, 312, 309, 305, 301, 298, 294, 291, 287, 284, 281, 278, 274, 271, 268, 265, 262, 259, 257, 507, 501, 496, 491, 485, 480, 475, 470, 465, 460, 456, 451, 446, 442, 437,
  433, 428, 424, 420, 416, 412, 408, 404, 400, 396, 392, 388, 385, 381, 377, 374, 370, 367, 363, 360, 357, 354, 350, 347, 344, 341, 338, 335, 332, 329, 326, 323, 320, 318, 315, 312, 310, 307, 304, 302, 299, 297, 294, 292, 289, 287, 285, 282, 280, 278, 275, 273, 271, 269, 267, 265, 263, 261, 259];
  /** @type {Array} */
  var blur_shg_table = [9, 11, 12, 13, 13, 14, 14, 15, 15, 15, 15, 16, 16, 16, 16, 17, 17, 17, 17, 17, 17, 17, 18, 18, 18, 18, 18, 18, 18, 18, 18, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22,
  22, 22, 22, 22, 22, 22, 22, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24,
  24, 24, 24, 24, 24, 24, 24, 24, 24, 24];
  /**
   * @param {Function} tests
   * @param {string} width
   * @param {Function} height
   * @param {number} radius
   * @return {undefined}
   */
  module.exports = function(tests, width, height, radius) {
    if (!(isNaN(radius) || radius < 1)) {
      var x;
      var y;
      var i;
      var p;
      var yp;
      var yi;
      var yw;
      var r_sum;
      var g_sum;
      var b_sum;
      var a_sum;
      var r_out_sum;
      var g_out_sum;
      var b_out_sum;
      var a_out_sum;
      var r_in_sum;
      var g_in_sum;
      var b_in_sum;
      var a_in_sum;
      var pr;
      var pg;
      var pb;
      var pa;
      var rbs;
      var padLength = (radius |= 0) + radius + 1;
      /** @type {number} */
      var widthMinus1 = width - 1;
      /** @type {number} */
      var heightMinus1 = height - 1;
      var radiusPlus1 = radius + 1;
      /** @type {number} */
      var sumFactor = radiusPlus1 * (radiusPlus1 + 1) / 2;
      var stackStart = new BlurStack;
      var stack = stackStart;
      /** @type {number} */
      i = 1;
      for (;i < padLength;i++) {
        if (stack = stack.next = new BlurStack, i == radiusPlus1) {
          var stackEnd = stack
        }
      }
      stack.next = stackStart;
      /** @type {null} */
      var stackIn = null;
      /** @type {null} */
      var stackOut = null;
      /** @type {number} */
      yw = yi = 0;
      var mul_sum = blur_mul_table[radius];
      var shg_sum = blur_shg_table[radius];
      /** @type {number} */
      y = 0;
      for (;y < height;y++) {
        /** @type {number} */
        r_in_sum = g_in_sum = b_in_sum = a_in_sum = r_sum = g_sum = b_sum = a_sum = 0;
        /** @type {number} */
        r_out_sum = radiusPlus1 * (pr = tests[yi]);
        /** @type {number} */
        g_out_sum = radiusPlus1 * (pg = tests[yi + 1]);
        /** @type {number} */
        b_out_sum = radiusPlus1 * (pb = tests[yi + 2]);
        /** @type {number} */
        a_out_sum = radiusPlus1 * (pa = tests[yi + 3]);
        r_sum += sumFactor * pr;
        g_sum += sumFactor * pg;
        b_sum += sumFactor * pb;
        a_sum += sumFactor * pa;
        stack = stackStart;
        /** @type {number} */
        i = 0;
        for (;i < radiusPlus1;i++) {
          stack.r = pr;
          stack.g = pg;
          stack.b = pb;
          stack.a = pa;
          stack = stack.next;
        }
        /** @type {number} */
        i = 1;
        for (;i < radiusPlus1;i++) {
          /** @type {number} */
          p = yi + ((widthMinus1 < i ? widthMinus1 : i) << 2);
          r_sum += (stack.r = pr = tests[p]) * (rbs = radiusPlus1 - i);
          g_sum += (stack.g = pg = tests[p + 1]) * rbs;
          b_sum += (stack.b = pb = tests[p + 2]) * rbs;
          a_sum += (stack.a = pa = tests[p + 3]) * rbs;
          r_in_sum += pr;
          g_in_sum += pg;
          b_in_sum += pb;
          a_in_sum += pa;
          stack = stack.next;
        }
        stackIn = stackStart;
        stackOut = stackEnd;
        /** @type {number} */
        x = 0;
        for (;x < width;x++) {
          /** @type {number} */
          tests[yi + 3] = pa = a_sum * mul_sum >> shg_sum;
          if (0 != pa) {
            /** @type {number} */
            pa = 255 / pa;
            /** @type {number} */
            tests[yi] = (r_sum * mul_sum >> shg_sum) * pa;
            /** @type {number} */
            tests[yi + 1] = (g_sum * mul_sum >> shg_sum) * pa;
            /** @type {number} */
            tests[yi + 2] = (b_sum * mul_sum >> shg_sum) * pa;
          } else {
            /** @type {number} */
            tests[yi] = tests[yi + 1] = tests[yi + 2] = 0;
          }
          r_sum -= r_out_sum;
          g_sum -= g_out_sum;
          b_sum -= b_out_sum;
          a_sum -= a_out_sum;
          r_out_sum -= stackIn.r;
          g_out_sum -= stackIn.g;
          b_out_sum -= stackIn.b;
          a_out_sum -= stackIn.a;
          /** @type {number} */
          p = yw + ((p = x + radius + 1) < widthMinus1 ? p : widthMinus1) << 2;
          r_sum += r_in_sum += stackIn.r = tests[p];
          g_sum += g_in_sum += stackIn.g = tests[p + 1];
          b_sum += b_in_sum += stackIn.b = tests[p + 2];
          a_sum += a_in_sum += stackIn.a = tests[p + 3];
          stackIn = stackIn.next;
          r_out_sum += pr = stackOut.r;
          g_out_sum += pg = stackOut.g;
          b_out_sum += pb = stackOut.b;
          a_out_sum += pa = stackOut.a;
          r_in_sum -= pr;
          g_in_sum -= pg;
          b_in_sum -= pb;
          a_in_sum -= pa;
          stackOut = stackOut.next;
          yi += 4;
        }
        yw += width;
      }
      /** @type {number} */
      x = 0;
      for (;x < width;x++) {
        /** @type {number} */
        g_in_sum = b_in_sum = a_in_sum = r_in_sum = g_sum = b_sum = a_sum = r_sum = 0;
        /** @type {number} */
        r_out_sum = radiusPlus1 * (pr = tests[yi = x << 2]);
        /** @type {number} */
        g_out_sum = radiusPlus1 * (pg = tests[yi + 1]);
        /** @type {number} */
        b_out_sum = radiusPlus1 * (pb = tests[yi + 2]);
        /** @type {number} */
        a_out_sum = radiusPlus1 * (pa = tests[yi + 3]);
        r_sum += sumFactor * pr;
        g_sum += sumFactor * pg;
        b_sum += sumFactor * pb;
        a_sum += sumFactor * pa;
        stack = stackStart;
        /** @type {number} */
        i = 0;
        for (;i < radiusPlus1;i++) {
          stack.r = pr;
          stack.g = pg;
          stack.b = pb;
          stack.a = pa;
          stack = stack.next;
        }
        /** @type {string} */
        yp = width;
        /** @type {number} */
        i = 1;
        for (;i <= radius;i++) {
          /** @type {number} */
          yi = yp + x << 2;
          r_sum += (stack.r = pr = tests[yi]) * (rbs = radiusPlus1 - i);
          g_sum += (stack.g = pg = tests[yi + 1]) * rbs;
          b_sum += (stack.b = pb = tests[yi + 2]) * rbs;
          a_sum += (stack.a = pa = tests[yi + 3]) * rbs;
          r_in_sum += pr;
          g_in_sum += pg;
          b_in_sum += pb;
          a_in_sum += pa;
          stack = stack.next;
          if (i < heightMinus1) {
            yp += width;
          }
        }
        /** @type {number} */
        yi = x;
        stackIn = stackStart;
        stackOut = stackEnd;
        /** @type {number} */
        y = 0;
        for (;y < height;y++) {
          /** @type {number} */
          tests[3 + (p = yi << 2)] = pa = a_sum * mul_sum >> shg_sum;
          if (pa > 0) {
            /** @type {number} */
            pa = 255 / pa;
            /** @type {number} */
            tests[p] = (r_sum * mul_sum >> shg_sum) * pa;
            /** @type {number} */
            tests[p + 1] = (g_sum * mul_sum >> shg_sum) * pa;
            /** @type {number} */
            tests[p + 2] = (b_sum * mul_sum >> shg_sum) * pa;
          } else {
            /** @type {number} */
            tests[p] = tests[p + 1] = tests[p + 2] = 0;
          }
          r_sum -= r_out_sum;
          g_sum -= g_out_sum;
          b_sum -= b_out_sum;
          a_sum -= a_out_sum;
          r_out_sum -= stackIn.r;
          g_out_sum -= stackIn.g;
          b_out_sum -= stackIn.b;
          a_out_sum -= stackIn.a;
          /** @type {number} */
          p = x + ((p = y + radiusPlus1) < heightMinus1 ? p : heightMinus1) * width << 2;
          r_sum += r_in_sum += stackIn.r = tests[p];
          g_sum += g_in_sum += stackIn.g = tests[p + 1];
          b_sum += b_in_sum += stackIn.b = tests[p + 2];
          a_sum += a_in_sum += stackIn.a = tests[p + 3];
          stackIn = stackIn.next;
          r_out_sum += pr = stackOut.r;
          g_out_sum += pg = stackOut.g;
          b_out_sum += pb = stackOut.b;
          a_out_sum += pa = stackOut.a;
          r_in_sum -= pr;
          g_in_sum -= pg;
          b_in_sum -= pb;
          a_in_sum -= pa;
          stackOut = stackOut.next;
          yi += width;
        }
      }
    }
  };
}, function(module, dataAndEvents) {
  /** @type {string} */
  module.exports = ".videoSpritePlayButton,.videoSpriteSoundOff,.videoSpriteSoundOn{background-image:url(/static/bundles/sprite_video.png/0df868727926.png);background-repeat:no-repeat;background-position:0 0;height:135px;width:135px}.videoSpriteSoundOff,.videoSpriteSoundOn{background-position:-137px 0;height:13px;width:16px}.videoSpriteSoundOn{background-position:-137px -15px}@media (min-device-pixel-ratio:1.5),(-webkit-min-device-pixel-ratio:1.5),(min-resolution:144dpi){.videoSpritePlayButton,.videoSpriteSoundOff,.videoSpriteSoundOn{background-image:url(/static/bundles/sprite_video_2x.png/06390c4e5e96.png);background-size:152px 135px;background-position:0 0}.videoSpriteSoundOff,.videoSpriteSoundOn{background-position:-136px 0}.videoSpriteSoundOn{background-position:-136px -14px}}";
}, function(dataAndEvents, fnc, parse) {
  /**
   * @param {Element} data
   * @param {Array} arg
   * @return {?}
   */
  function require(data, arg) {
    var cache = {};
    var prop;
    for (prop in data) {
      if (!(arg.indexOf(prop) >= 0)) {
        if (Object.prototype.hasOwnProperty.call(data, prop)) {
          cache[prop] = data[prop];
        }
      }
    }
    return cache;
  }
  /**
   * @param {Element} suite
   * @return {?}
   */
  function next(suite) {
    var cwd = suite.ownerId;
    var name = suite.id;
    var ii = suite.trackingToken;
    var tearDown = suite.isDashEligible;
    var setUp = suite.playbackFormat;
    var data = require(suite, ["ownerId", "id", "trackingToken", "isDashEligible", "playbackFormat"]);
    var pk = Object(url.getExtra)(suite).ig_userid;
    var y = cwd || "";
    return finish({}, data, {
      a_i : "organic",
      a_pk : y,
      m_pk : (name || "") + "_" + y,
      pk : pk,
      tracking_token : ii,
      is_dash_eligible : tearDown,
      playback_format : setUp,
      time_spent_id : pos.a
    });
  }
  /**
   * @param {Function} tests
   * @return {?}
   */
  fnc.b = function(tests) {
    return tests && Number(tests.toFixed(2));
  };
  /**
   * @param {Function} type
   * @param {string} c
   * @param {Function} module
   * @return {undefined}
   */
  fnc.a = function(type, c, module) {
    c.shouldLogClientEvent;
    var name = require(c, ["shouldLogClientEvent"]);
    if (Object(date.H)("vl")) {
      var prop = next(name);
      Object(url.logPigeonEvent)(object.a(type, prop, {
        /** @type {Function} */
        module : module
      }));
    }
  };
  var date = parse(2);
  var url = parse(7);
  var c = parse(39);
  var pos = parse.n(c);
  var object = parse(25);
  var finish = Object.assign || function(opt_attributes) {
    /** @type {number} */
    var i = 1;
    for (;i < arguments.length;i++) {
      var iterable = arguments[i];
      var key;
      for (key in iterable) {
        if (Object.prototype.hasOwnProperty.call(iterable, key)) {
          opt_attributes[key] = iterable[key];
        }
      }
    }
    return opt_attributes;
  };
}, function(dataAndEvents, record, $) {
  /**
   * @param {?} allBindingsAccessor
   * @param {?} stopHere
   * @return {?}
   */
  function update(allBindingsAccessor, stopHere) {
    switch(allBindingsAccessor) {
      case doc.a.video:
      ;
      default:
        return{
          nuxTitle : nuxTitle,
          nuxAction : nuxAction,
          nuxIcon : self.createElement("div", {
            className : "coreSpriteVideoNux"
          }),
          nuxIcon2 : self.createElement("div", {
            className : "coreSpriteSpinstaNux"
          })
        };
    }
  }
  /**
   * @return {?}
   */
  function attributes() {
    var e;
    var _ref2;
    var self = this;
    /** @type {number} */
    var l = arguments.length;
    /** @type {Array} */
    var args = Array(l);
    /** @type {number} */
    var i = 0;
    for (;i < l;i++) {
      args[i] = arguments[i];
    }
    return e = (_ref2 = value.constructor).call.apply(_ref2, [this].concat(args)), this.$ZeroNUXModal1 = function(e) {
      Object(frame.logAction_DEPRECATED)("zero_nux_cancel", {
        media : self.props.mediaKeyword
      });
      self.props.onClose(e);
    }, this.$ZeroNUXModal2 = function(e) {
      Object(frame.logAction_DEPRECATED)("zero_nux_confirm", {
        media : self.props.mediaKeyword
      });
      self.props.onAction(e);
    }, e;
  }
  var ctor;
  var value;
  var frame = $(7);
  var object = $(234);
  var opts = $(521);
  var self = $(0);
  var doc = ($.n(self), $(56));
  $(21);
  /** @type {string} */
  var nuxTitle = "A reprodu\u00c3\u00a7\u00c3\u00a3o de v\u00c3\u00addeos consome dados";
  /** @type {string} */
  var nuxAction = "Assistir ao v\u00c3\u00addeo";
  ctor = self.Component;
  value = ctor && ctor.prototype;
  Object.assign(attributes, ctor);
  /** @type {function (): ?} */
  (attributes.prototype = Object.create(value)).constructor = attributes;
  attributes.__superConstructor__ = ctor;
  /**
   * @return {?}
   */
  attributes.prototype.render = function() {
    var option = this.props.nuxContent ? this.props.nuxContent : update(this.props.mediaKeyword, this.props.profilePictureUrl);
    var millis = self.createElement(opts.a, {
      action : option.nuxAction,
      nuxIcon : option.nuxIcon,
      nuxIcon2 : option.nuxIcon2,
      paragraph : "Navegar no Instagram n\u00c3\u00a3o consome dados. Voc\u00c3\u00aa usar\u00c3\u00a1 dados somente quando escolher visualizar v\u00c3\u00addeos ou hist\u00c3\u00b3rias.",
      title : option.nuxTitle,
      onClose : this.$ZeroNUXModal1,
      onAction : this.$ZeroNUXModal2
    });
    var credit = {
      onClose : this.props.onClose
    };
    return self.createElement(object.a, credit, millis);
  };
  /** @type {function (): ?} */
  record.a = attributes;
}, function(dataAndEvents, record, $) {
  /**
   * @return {undefined}
   */
  function attributes() {
    newValue.apply(this, arguments);
  }
  var newValue;
  var basePrototype;
  var dh = $(0);
  $.n(dh);
  $(530);
  basePrototype = (newValue = dh.PureComponent) && newValue.prototype;
  Object.assign(attributes, newValue);
  /** @type {function (): undefined} */
  (attributes.prototype = Object.create(basePrototype)).constructor = attributes;
  attributes.__superConstructor__ = newValue;
  /**
   * @return {?}
   */
  attributes.prototype.render = function() {
    return dh.createElement("div", {
      className : "_52bc8"
    }, dh.createElement("div", null, dh.createElement("div", {
      className : "_kysfk"
    }, dh.createElement("span", {
      className : "_1i24k"
    }, this.props.nuxIcon), dh.createElement("span", {
      className : "_sos6u"
    }, this.props.nuxIcon2)), dh.createElement("span", {
      className : "_7oklz"
    }, this.props.title), dh.createElement("span", {
      className : "_r1azn"
    }, this.props.paragraph)), dh.createElement("div", {
      className : "_hkmnt",
      onClick : this.props.onAction
    }, this.props.action), dh.createElement("button", {
      className : "_ml33s",
      onClick : this.props.onClose
    }));
  };
  /** @type {function (): undefined} */
  record.a = attributes;
}, function(dataAndEvents, type, f) {
  /**
   * @return {undefined}
   */
  function attributes() {
    fn.apply(this, arguments);
  }
  f.d(type, "a", function() {
    return version;
  });
  var fn;
  var basePrototype;
  var self = f(0);
  f.n(self);
  f(21);
  f(534);
  /** @type {string} */
  var version = "Usar dados para assistir";
  basePrototype = (fn = self.PureComponent) && fn.prototype;
  Object.assign(attributes, fn);
  /** @type {function (): undefined} */
  (attributes.prototype = Object.create(basePrototype)).constructor = attributes;
  attributes.__superConstructor__ = fn;
  /**
   * @return {?}
   */
  attributes.prototype.render = function() {
    return self.createElement("div", {
      className : "_shjvg"
    }, self.createElement("span", {
      className : "_qiiyk coreSpriteSpinstaStory"
    }), self.createElement("span", {
      className : "_t70af"
    }, version));
  };
  /** @type {function (): undefined} */
  type.b = attributes;
}, function(dataAndEvents, deepDataAndEvents, $sanitize) {
  var isUndefined = $sanitize(1);
  var suiteView = $sanitize(524);
  isUndefined(suiteView, "is7899583f");
}, function(module, dataAndEvents) {
  /** @type {string} */
  module.exports = "._7cdje,._my8ed{position:relative;right:3px;top:-1px}._7cdje{right:2px;top:1px}";
}, function(dataAndEvents, record, $) {
  /**
   * @param {number} r
   * @return {undefined}
   */
  function e(r) {
    if (r <= 0) {
      Object(options.a)("EWMA halfLife expected to be positive");
    }
    /** @type {number} */
    this.$Ewma1 = Math.exp(Math.log(0.5) / r);
    /** @type {number} */
    this.$Ewma2 = 0;
    /** @type {number} */
    this.$Ewma3 = 0;
  }
  /**
   * @return {undefined}
   */
  function other() {
    this.$EwmaBandwidthEstimator1 = new exception(2);
    this.$EwmaBandwidthEstimator2 = new exception(5);
    /** @type {number} */
    this.$EwmaBandwidthEstimator3 = 0;
    /** @type {number} */
    this.$EwmaBandwidthEstimator4 = 128E3;
    /** @type {number} */
    this.$EwmaBandwidthEstimator5 = 16E3;
  }
  /**
   * @param {?} self
   * @param {Object} b
   * @param {?} dims
   * @return {?}
   */
  function adjust(self, b, dims) {
    var a = self.video;
    return(!a || !(a.width < b.minWidth || (a.width > b.maxWidth || (a.width > dims.width || (a.height < b.minHeight || (a.height > b.maxHeight || (a.height > dims.height || (a.width * a.height < b.minPixels || a.width * a.height > b.maxPixels)))))))) && !(self.bandwidth < b.minBandwidth || self.bandwidth > b.maxBandwidth);
  }
  /**
   * @return {undefined}
   */
  function self() {
    /** @type {null} */
    this.$CustomAbrManager1 = null;
    /** @type {boolean} */
    this.$CustomAbrManager2 = false;
    this.$CustomAbrManager3 = new val;
    /** @type {Array} */
    this.$CustomAbrManager4 = [];
    /** @type {boolean} */
    this.$CustomAbrManager5 = false;
    /** @type {null} */
    this.$CustomAbrManager6 = null;
    /** @type {null} */
    this.$CustomAbrManager7 = null;
  }
  /**
   * @param {?} value
   * @return {undefined}
   */
  function isUndefinedOrNull(value) {
    result = value;
  }
  /**
   * @return {?}
   */
  function getEnumerableProperties() {
    return result;
  }
  /**
   * @param {?} p
   * @return {undefined}
   */
  function win(p) {
    t = p;
  }
  /**
   * @return {?}
   */
  function promote() {
    return t;
  }
  /**
   * @return {?}
   */
  function getActual() {
    return camelKey;
  }
  /**
   * @return {?}
   */
  function requestAnimationFrame() {
    return dataAttr({
      /** @type {function (): undefined} */
      abrFactory : vals
    }, camelKey);
  }
  /**
   * @param {string} type
   * @return {?}
   */
  function find(type) {
    return "on" + type.charAt(0).toUpperCase() + type.slice(1);
  }
  /**
   * @return {?}
   */
  function opt_attributes() {
    var e;
    var _ref2;
    var _this = this;
    /** @type {number} */
    var l = arguments.length;
    /** @type {Array} */
    var args = Array(l);
    /** @type {number} */
    var i = 0;
    for (;i < l;i++) {
      args[i] = arguments[i];
    }
    return e = (_ref2 = value.constructor).call.apply(_ref2, [this].concat(args)), this.$DeclarativeVideo5 = function(newVal, deepDataAndEvents) {
      if (_this.$DeclarativeVideo2) {
        var data = addPlayerReadyCallback()(_this.$DeclarativeVideo4);
        if ("timeupdate" === newVal) {
          if (void 0 !== _this.$DeclarativeVideo6) {
            if (data.currentTime < _this.$DeclarativeVideo6) {
              if (_this.props.onLoop) {
                _this.props.onLoop();
              }
            }
          }
          _this.$DeclarativeVideo6 = data.currentTime;
        } else {
          if ("loadedmetadata" === newVal) {
            /** @type {boolean} */
            _this.$DeclarativeVideo3 = true;
          }
        }
        _this.$DeclarativeVideo7(newVal, deepDataAndEvents);
      }
    }, e;
  }
  /**
   * @return {undefined}
   */
  function js() {
    /** @type {boolean} */
    this.$TimeoutHandler1 = true;
    this.$TimeoutHandler2 = {};
    this.$TimeoutHandler3 = {};
  }
  /**
   * @return {undefined}
   */
  function gl() {
    n.apply(this, arguments);
  }
  /**
   * @return {?}
   */
  function init() {
    return "1" === post.a.lookup("dash_for_vod").getParam("is_enabled", "0") ? Number(post.a.lookup("dash_for_vod").getParam("variant", "1")) : null;
  }
  /**
   * @param {string} value
   * @param {?} num
   * @param {?} cb
   * @return {undefined}
   */
  function bound(value, num, cb) {
    /** @type {Array} */
    var args = [value, num, cb];
    if (Object(target.c)()) {
      helper.a.apply(void 0, args);
    }
  }
  /**
   * @param {Function} tests
   * @return {undefined}
   */
  function attributes(tests) {
    parent.constructor.call(this, tests);
    update.call(this);
    var obj = {
      forceShowControls : false,
      hideZeroVideoBanner : false,
      isZeroNuxOpen : false,
      loadState : loadState.notLoaded,
      muted : false,
      playerState : state.paused
    };
    obj.muted = this.isAutoplayEnabled(tests);
    this.state = obj;
  }
  var options = $(14);
  /**
   * @param {number} n
   * @param {number} guard
   * @return {undefined}
   */
  e.prototype.sample = function(n, guard) {
    /** @type {number} */
    var ret = Math.pow(this.$Ewma1, n);
    /** @type {number} */
    var chr2 = guard * (1 - ret) + ret * this.$Ewma2;
    if (!isNaN(chr2)) {
      /** @type {number} */
      this.$Ewma2 = chr2;
      this.$Ewma3 += n;
    }
  };
  /**
   * @return {?}
   */
  e.prototype.getEstimate = function() {
    /** @type {number} */
    var $Ewma2 = 1 - Math.pow(this.$Ewma1, this.$Ewma3);
    return this.$Ewma2 / $Ewma2;
  };
  /** @type {function (number): undefined} */
  var exception = e;
  /**
   * @param {number} n
   * @param {number} guard
   * @return {undefined}
   */
  other.prototype.sample = function(n, guard) {
    if (!(guard < this.$EwmaBandwidthEstimator5)) {
      /** @type {number} */
      var pass = 8E3 * guard / n;
      /** @type {number} */
      var zip_bl = n / 1E3;
      this.$EwmaBandwidthEstimator3 += guard;
      this.$EwmaBandwidthEstimator1.sample(zip_bl, pass);
      this.$EwmaBandwidthEstimator2.sample(zip_bl, pass);
    }
  };
  /**
   * @param {number} dataAndEvents
   * @return {?}
   */
  other.prototype.getBandwidthEstimate = function(dataAndEvents) {
    return this.$EwmaBandwidthEstimator3 < this.$EwmaBandwidthEstimator4 ? dataAndEvents : Math.min(this.$EwmaBandwidthEstimator1.getEstimate(), this.$EwmaBandwidthEstimator2.getEstimate());
  };
  /**
   * @return {?}
   */
  other.prototype.hasGoodEstimate = function() {
    return this.$EwmaBandwidthEstimator3 >= this.$EwmaBandwidthEstimator4;
  };
  /** @type {function (): undefined} */
  var val = other;
  var elem = void 0;
  elem = $(295);
  var defaults = {
    maxBandwidth : 1 / 0,
    maxHeight : 1 / 0,
    maxPixels : 1 / 0,
    maxWidth : 1 / 0,
    minBandwidth : 0,
    minHeight : 0,
    minPixels : 0,
    minWidth : 0
  };
  /**
   * @param {?} allBindingsAccessor
   * @return {undefined}
   */
  self.prototype.init = function(allBindingsAccessor) {
    this.$CustomAbrManager1 = allBindingsAccessor;
  };
  /**
   * @return {undefined}
   */
  self.prototype.stop = function() {
    /** @type {null} */
    this.$CustomAbrManager1 = null;
    /** @type {boolean} */
    this.$CustomAbrManager2 = false;
    /** @type {Array} */
    this.$CustomAbrManager4 = [];
    /** @type {null} */
    this.$CustomAbrManager6 = null;
  };
  /**
   * @return {?}
   */
  self.prototype.chooseVariant = function() {
    var codeSegments = this.$CustomAbrManager8(this.$CustomAbrManager7 && this.$CustomAbrManager7.restrictions || defaults, this.$CustomAbrManager4);
    var a = this.$CustomAbrManager3.getBandwidthEstimate(this.$CustomAbrManager7 && this.$CustomAbrManager7.defaultBandwidthEstimate || getEnumerableProperties());
    if (isUndefinedOrNull(a), this.$CustomAbrManager4.length && !codeSegments.length) {
      throw new elem.util.Error(elem.util.Error.Severity.CRITICAL, elem.util.Error.Category.MANIFEST, elem.util.Error.Code.RESTRICTIONS_CANNOT_BE_MET);
    }
    var b0 = codeSegments[0] || null;
    /** @type {number} */
    var i = 0;
    for (;i < codeSegments.length;++i) {
      var b = codeSegments[i];
      var connection = codeSegments[i + 1] || {
        bandwidth : 1 / 0
      };
      /** @type {number} */
      var d = this.$CustomAbrManager7 ? b.bandwidth / this.$CustomAbrManager7.bandwidthDowngradeTarget : 2E6;
      /** @type {number} */
      var e = this.$CustomAbrManager7 ? connection.bandwidth / this.$CustomAbrManager7.bandwidthUpgradeTarget : 1E7;
      if (a >= d) {
        if (a <= e) {
          b0 = b;
        }
      }
    }
    return this.$CustomAbrManager6 = Date.now(), b0;
  };
  /**
   * @return {undefined}
   */
  self.prototype.enable = function() {
    /** @type {boolean} */
    this.$CustomAbrManager2 = true;
  };
  /**
   * @return {undefined}
   */
  self.prototype.disable = function() {
    /** @type {boolean} */
    this.$CustomAbrManager2 = false;
  };
  /**
   * @param {number} timestep
   * @param {number} pass
   * @return {undefined}
   */
  self.prototype.segmentDownloaded = function(timestep, pass) {
    if (timestep >= 0) {
      this.$CustomAbrManager3.sample(timestep, pass);
      if (null != this.$CustomAbrManager6) {
        if (this.$CustomAbrManager2) {
          this.$CustomAbrManager9();
        }
      }
    }
  };
  /**
   * @return {?}
   */
  self.prototype.getBandwidthEstimate = function() {
    return this.$CustomAbrManager3.getBandwidthEstimate(this.$CustomAbrManager7 && this.$CustomAbrManager7.defaultBandwidthEstimate || getEnumerableProperties());
  };
  /**
   * @param {Array} dataAndEvents
   * @return {undefined}
   */
  self.prototype.setVariants = function(dataAndEvents) {
    /** @type {Array} */
    this.$CustomAbrManager4 = dataAndEvents;
  };
  /**
   * @param {number} options
   * @return {undefined}
   */
  self.prototype.configure = function(options) {
    /** @type {number} */
    this.$CustomAbrManager7 = options;
  };
  /**
   * @return {undefined}
   */
  self.prototype.$CustomAbrManager9 = function() {
    /** @type {boolean} */
    var domain = false;
    if (this.$CustomAbrManager5) {
      if (Date.now() - (this.$CustomAbrManager6 || 0) < 1E3 * (this.$CustomAbrManager7 && this.$CustomAbrManager7.switchInterval || 8)) {
        /** @type {boolean} */
        domain = true;
      }
    } else {
      if (!this.$CustomAbrManager3.hasGoodEstimate()) {
        return;
      }
      /** @type {boolean} */
      this.$CustomAbrManager5 = true;
    }
    var connection = this.chooseVariant();
    var addedScheme = promote();
    if (!domain || addedScheme && addedScheme > connection.bandwidth) {
      if (this.$CustomAbrManager1) {
        this.$CustomAbrManager1(connection);
        win(connection.bandwidth);
      }
    }
  };
  /**
   * @param {Object} _super
   * @param {Array} contextElem
   * @return {?}
   */
  self.prototype.$CustomAbrManager8 = function(_super, contextElem) {
    return contextElem.filter(function(value) {
      return adjust(value, _super, {
        width : 1 / 0,
        height : 1 / 0
      });
    }).sort(function(a, b) {
      return a.bandwidth - b.bandwidth;
    });
  };
  var ctor;
  var value;
  /** @type {function (): undefined} */
  var vals = self;
  var dataAttr = Object.assign || function(opt_attributes) {
    /** @type {number} */
    var i = 1;
    for (;i < arguments.length;i++) {
      var iterable = arguments[i];
      var key;
      for (key in iterable) {
        if (Object.prototype.hasOwnProperty.call(iterable, key)) {
          opt_attributes[key] = iterable[key];
        }
      }
    }
    return opt_attributes;
  };
  /** @type {number} */
  var result = 5E6;
  /** @type {null} */
  var t = null;
  var camelKey = {
    abr : {
      switchInterval : 4,
      defaultBandwidthEstimate : getEnumerableProperties()
    }
  };
  var target = $(67);
  var item = $(2);
  var content = $(3);
  var getCallback = $.n(content);
  var html = $(11);
  var isFunction = $.n(html);
  var side = $(6);
  var addPlayerReadyCallback = $.n(side);
  var dom = $(0);
  var HOP = function() {
    /**
     * @param {?} dataAndEvents
     * @param {number} deepDataAndEvents
     * @return {?}
     */
    function clone(dataAndEvents, deepDataAndEvents) {
      /** @type {Array} */
      var res = [];
      /** @type {boolean} */
      var callback2 = true;
      /** @type {boolean} */
      var n = false;
      var bulk = void 0;
      try {
        var next;
        var self = dataAndEvents[Symbol.iterator]();
        for (;!(callback2 = (next = self.next()).done) && (res.push(next.value), !deepDataAndEvents || res.length !== deepDataAndEvents);callback2 = true) {
        }
      } catch (fn) {
        /** @type {boolean} */
        n = true;
        bulk = fn;
      } finally {
        try {
          if (!callback2) {
            if (self.return) {
              self.return();
            }
          }
        } finally {
          if (n) {
            throw bulk;
          }
        }
      }
      return res;
    }
    return function(object, deepDataAndEvents) {
      if (Array.isArray(object)) {
        return object;
      }
      if (Symbol.iterator in Object(object)) {
        return clone(object, deepDataAndEvents);
      }
      throw new TypeError("Invalid attempt to destructure non-iterable instance");
    };
  }();
  $(528);
  /** @type {Array} */
  var methods = ["canplaythrough", "ended", "error", "loadedalldata", "loadeddata", "loadedmetadata", "loadstart", "playing", "pause", "seeked", "timeupdate"];
  ctor = dom.Component;
  value = ctor && ctor.prototype;
  Object.assign(opt_attributes, ctor);
  /** @type {function (): ?} */
  (opt_attributes.prototype = Object.create(value)).constructor = opt_attributes;
  opt_attributes.__superConstructor__ = ctor;
  /**
   * @return {undefined}
   */
  opt_attributes.prototype.componentDidMount = function() {
    var that = this;
    /** @type {Array} */
    this.$DeclarativeVideo1 = [];
    /** @type {boolean} */
    this.$DeclarativeVideo2 = true;
    /** @type {boolean} */
    this.$DeclarativeVideo3 = false;
    var html = addPlayerReadyCallback()(this.$DeclarativeVideo4);
    methods.forEach(function(name) {
      var i = that.$DeclarativeVideo5.bind(that, name);
      if (!(void 0 !== that.$DeclarativeVideo1 && null !== that.$DeclarativeVideo1)) {
        getCallback()(0);
      }
      that.$DeclarativeVideo1.push([name, i]);
      html.addEventListener(name, i);
    });
  };
  /**
   * @param {Object} props
   * @param {?} prevState
   * @return {undefined}
   */
  opt_attributes.prototype.componentDidUpdate = function(props, prevState) {
    var o = addPlayerReadyCallback()(this.$DeclarativeVideo4);
    if (this.props.loop !== props.loop) {
      /** @type {boolean} */
      o.loop = !!this.props.loop;
    }
    if (this.props.playing && !props.playing) {
      o.play();
    } else {
      if (this.props.paused && props.playing) {
        o.pause();
      } else {
        if (!this.props.paused) {
          if (!this.props.playing) {
            if (!(!props.paused && !props.playing)) {
              if (this.$DeclarativeVideo3) {
                if (!isNaN(o.duration)) {
                  o.pause();
                  /** @type {number} */
                  o.currentTime = 0;
                }
              }
            }
          }
        }
      }
    }
  };
  /**
   * @return {undefined}
   */
  opt_attributes.prototype.componentWillUnmount = function() {
    /** @type {boolean} */
    this.$DeclarativeVideo2 = false;
    var elem = addPlayerReadyCallback()(this.$DeclarativeVideo4);
    if (!(void 0 !== this.$DeclarativeVideo1 && null !== this.$DeclarativeVideo1)) {
      getCallback()(0);
    }
    this.$DeclarativeVideo1.forEach(function(walkers) {
      var def = HOP(walkers, 2);
      var name = def[0];
      var handle = def[1];
      elem.removeEventListener(name, handle);
    });
    this.$DeclarativeVideo1 = void 0;
  };
  /**
   * @return {undefined}
   */
  opt_attributes.prototype.pause = function() {
    addPlayerReadyCallback()(this.$DeclarativeVideo4).pause();
  };
  /**
   * @return {undefined}
   */
  opt_attributes.prototype.play = function() {
    addPlayerReadyCallback()(this.$DeclarativeVideo4).play();
  };
  /**
   * @return {?}
   */
  opt_attributes.prototype.getDuration = function() {
    return addPlayerReadyCallback()(this.$DeclarativeVideo4).duration;
  };
  /**
   * @return {?}
   */
  opt_attributes.prototype.getCurrentTime = function() {
    return addPlayerReadyCallback()(this.$DeclarativeVideo4).currentTime;
  };
  /**
   * @return {?}
   */
  opt_attributes.prototype.getVideo = function() {
    return this.$DeclarativeVideo4;
  };
  /**
   * @return {?}
   */
  opt_attributes.prototype.render = function() {
    var first = this;
    var data = this.props;
    var className = data.className;
    var muted = data.muted;
    var config = data.poster;
    var preload = data.preload;
    var src = data.src;
    var type = data.type;
    var method = data.playsInline;
    var aliases = data.autoPlay;
    /** @type {boolean} */
    var object = !this.props.playing && !this.props.paused;
    return dom.createElement("div", {
      className : isFunction()("_2xkvu", className)
    }, dom.createElement("div", {
      className : "_qzesf"
    }, dom.createElement("video", {
      autoPlay : aliases,
      className : "_l6uaz",
      muted : muted,
      playsInline : method,
      poster : config,
      preload : preload,
      /**
       * @param {?} i
       * @return {?}
       */
      ref : function(i) {
        return first.$DeclarativeVideo4 = i;
      },
      src : src,
      type : type
    }), object && (config && dom.createElement("img", {
      className : "_sajt6",
      src : config
    }))));
  };
  /**
   * @param {string} array
   * @param {?} deepDataAndEvents
   * @return {undefined}
   */
  opt_attributes.prototype.$DeclarativeVideo7 = function(array, deepDataAndEvents) {
    var av = this.props[find(array)];
    if (av) {
      av(deepDataAndEvents);
    }
  };
  /** @type {function (): ?} */
  var tagToInsert = opt_attributes;
  var next = $(15);
  var timeout = $.n(next);
  var child = $(507);
  var frame = $(7);
  var $window = $(39);
  var w = $.n($window);
  var that = $(253);
  var post = $(59);
  var from = $(252);
  var env = $(85);
  /**
   * @return {undefined}
   */
  js.prototype.destroy = function() {
    /** @type {boolean} */
    this.$TimeoutHandler1 = false;
    this.clearAllTimeouts();
    this.clearAllIntervals();
  };
  /**
   * @param {Function} matcherFunction
   * @return {?}
   */
  js.prototype.$TimeoutHandler4 = function(matcherFunction) {
    var newArgs = this;
    return function() {
      return newArgs.$TimeoutHandler1 || getCallback()(0), matcherFunction.apply(newArgs, arguments);
    };
  };
  /**
   * @param {Function} funcToCall
   * @param {number} expectedNumberOfNonCommentArgs
   * @return {?}
   */
  js.prototype.setTimeout = function(funcToCall, expectedNumberOfNonCommentArgs) {
    if (!this.$TimeoutHandler1) {
      getCallback()(0);
    }
    var unlock = env.a.setTimeout(this.$TimeoutHandler4(funcToCall), expectedNumberOfNonCommentArgs);
    return this.$TimeoutHandler2[unlock] = true, unlock;
  };
  /**
   * @param {Function} funcToCall
   * @param {?} millis
   * @return {?}
   */
  js.prototype.setInterval = function(funcToCall, millis) {
    if (!this.$TimeoutHandler1) {
      getCallback()(0);
    }
    var timeoutId = env.a.setInterval(this.$TimeoutHandler4(funcToCall), millis);
    return this.$TimeoutHandler3[timeoutId] = true, timeoutId;
  };
  /**
   * @param {?} timeoutKey
   * @return {undefined}
   */
  js.prototype.clearTimeout = function(timeoutKey) {
    if (this.$TimeoutHandler2) {
      env.a.clearTimeout(timeoutKey);
      delete this.$TimeoutHandler2[timeoutKey];
    }
  };
  /**
   * @return {undefined}
   */
  js.prototype.clearAllTimeouts = function() {
    var t = this;
    if (this.$TimeoutHandler2) {
      Object.keys(this.$TimeoutHandler2).forEach(function(val) {
        return t.clearTimeout(Number(val));
      });
    }
  };
  /**
   * @param {number} timeoutKey
   * @return {undefined}
   */
  js.prototype.clearInterval = function(timeoutKey) {
    if (this.$TimeoutHandler3) {
      env.a.clearInterval(timeoutKey);
      delete this.$TimeoutHandler3[timeoutKey];
    }
  };
  /**
   * @return {undefined}
   */
  js.prototype.clearAllIntervals = function() {
    var self = this;
    if (this.$TimeoutHandler3) {
      Object.keys(this.$TimeoutHandler3).forEach(function(arg) {
        return self.clearInterval(Number(arg));
      });
    }
  };
  var n;
  var basePrototype;
  /** @type {function (): undefined} */
  var JS = js;
  var tag = $(314);
  var elements = $.n(tag);
  var node = $(513);
  var helper = $(519);
  var o = $(520);
  var object = $(56);
  var doc = $(522);
  $(21);
  $(532);
  basePrototype = (n = dom.PureComponent) && n.prototype;
  Object.assign(gl, n);
  /** @type {function (): undefined} */
  (gl.prototype = Object.create(basePrototype)).constructor = gl;
  gl.__superConstructor__ = n;
  /**
   * @return {?}
   */
  gl.prototype.render = function() {
    return dom.createElement("div", {
      className : "_eq1p7"
    }, dom.createElement("div", {
      className : "_fcqhl"
    }, dom.createElement("span", {
      className : "_1uz2m coreSpriteSpinsta"
    }), dom.createElement("span", {
      className : "_9ge8q"
    }, doc.a)));
  };
  var data;
  var parent;
  /** @type {function (): undefined} */
  var src = gl;
  var callback = Object.assign || function(opt_attributes) {
    /** @type {number} */
    var i = 1;
    for (;i < arguments.length;i++) {
      var iterable = arguments[i];
      var key;
      for (key in iterable) {
        if (Object.prototype.hasOwnProperty.call(iterable, key)) {
          opt_attributes[key] = iterable[key];
        }
      }
    }
    return opt_attributes;
  };
  $(512);
  $(526);
  var loadState = timeout()({
    notLoaded : null,
    started : null,
    ready : null
  });
  var state = timeout()({
    pauseRequested : null,
    paused : null,
    playRequested : null,
    playing : null,
    playingFinalLoop : null,
    finished : null
  });
  var Element = void 0;
  if (init()) {
    if (!Object(item.C)()) {
      Element = $(295);
    }
  }
  data = dom.Component;
  parent = data && data.prototype;
  Object.assign(attributes, data);
  /** @type {function (Function): undefined} */
  (attributes.prototype = Object.create(parent)).constructor = attributes;
  attributes.__superConstructor__ = data;
  /**
   * @return {undefined}
   */
  attributes.prototype.componentDidMount = function() {
    this.$Video12 = new JS;
    /** @type {null} */
    this.$Video13 = null;
    /** @type {null} */
    this.$Video14 = null;
    /** @type {null} */
    this.$Video15 = null;
    if (this.shouldStartAutoplay()) {
      this.play();
    } else {
      if (false !== this.isVisible()) {
        this.pulseControls();
      }
    }
    document.addEventListener("visibilitychange", this.handleVisiblityChange);
    window.addEventListener("beforeunload", this.handleBeforeUnload);
    if (this.props.visible || void 0 === this.props.visible && "feed" !== this.props.analyticsContext) {
      this.$Video16();
    }
  };
  /**
   * @param {?} nextProps
   * @return {undefined}
   */
  attributes.prototype.componentWillReceiveProps = function(nextProps) {
    if (nextProps.videoUrl !== this.props.videoUrl) {
      this.clearLoopLogTimer();
      /** @type {number} */
      this.$Video4 = 0;
      /** @type {number} */
      this.$Video7 = 0;
    }
    if (this.isAutoplayEnabled(nextProps)) {
      if (this.shouldStartAutoplay(nextProps)) {
        this.play();
      } else {
        this.stop();
        this.setState({
          muted : true
        });
      }
    } else {
      if (false === this.isVisible(nextProps)) {
        if (true === this.isVisible()) {
          if (this.state.playerState === state.playing) {
            this.$Video17(this.$Video18, this.$Video7);
          }
          this.stop();
          this.$Video19();
        }
      }
      if (!(true !== this.isVisible(nextProps))) {
        if (!(true === this.isVisible())) {
          if (!this.isPlaying()) {
            this.pulseControls();
            this.$Video16();
          }
        }
      }
    }
  };
  /**
   * @param {?} prevState
   * @param {?} id
   * @return {undefined}
   */
  attributes.prototype.componentDidUpdate = function(prevState, id) {
    var server = this.isPlaying(id);
    var value = this.isPlaying(this.state);
    if (server && !value) {
      this.startLoopLogTimer();
    } else {
      if (!server) {
        if (value) {
          this.clearLoopLogTimer();
        }
      }
    }
  };
  /**
   * @return {undefined}
   */
  attributes.prototype.componentWillUnmount = function() {
    this.logLoops();
    this.$Video12.destroy();
    this.handleBeforeUnload();
    document.removeEventListener("visibilitychange", this.handleVisiblityChange);
    window.removeEventListener("beforeunload", this.handleBeforeUnload);
    this.$Video19();
  };
  /**
   * @return {undefined}
   */
  attributes.prototype.$Video16 = function() {
    var data = this;
    var i = this.props.dashInfo;
    if (Element && (Element.Player.isBrowserSupported() && (i && (i.is_dash_eligible && (i.video_dash_manifest && this.$Video18))))) {
      var element = this.$Video18.getVideo();
      var wrapper = new Element.Player(element);
      wrapper.addEventListener("error", function(err) {
        Object(options.a)(String(err.detail.code) + " - " + data.props.id + " - shaka player error");
      });
      var string = init();
      var actual = getActual();
      var id = requestAnimationFrame();
      if (string) {
        if (string > 1) {
          wrapper.configure(2 === string ? actual : id);
        }
      }
      wrapper.load("igw://dash_video/" + this.props.id).catch(function(err) {
        if (7E3 !== err.code) {
          Object(options.a)(data.props.id + " - error loading dash video - " + (err && err.code));
        }
        wrapper.destroy().then(function() {
          if (element) {
            element.src = data.props.videoUrl;
          }
        });
      });
      wrapper.addEventListener("adaptation", function(dataAndEvents) {
        if (element) {
          if (element.videoWidth) {
            if (element.videoWidth !== data.$Video10) {
              if (0 !== element.currentTime) {
                data.$Video20(data.$Video18, data.$Video7);
              }
            }
          }
        }
      });
      this.$Video21 = wrapper;
    }
  };
  /**
   * @return {undefined}
   */
  attributes.prototype.$Video19 = function() {
    if (this.$Video21) {
      this.$Video21.destroy();
    }
  };
  /**
   * @return {?}
   */
  attributes.prototype.$Video22 = function() {
    return(!Object(item.D)() || (elements.a.isBrowser("Mobile Safari >= 10") || (elements.a.isBrowser("Chrome for iOS >= 53") || (elements.a.isBrowser("Firefox") || elements.a.isBrowser("Chrome >= 53"))))) && post.a.lookup("video").getBoolParam("autoplay", false);
  };
  /**
   * @param {?} embed
   * @param {Array} dataAndEvents
   * @return {undefined}
   */
  attributes.prototype.$Video20 = function(embed, dataAndEvents) {
    var source = embed && embed.getVideo();
    if (source && (source.videoWidth && source.videoHeight)) {
      var defaults = {
        time : Object(helper.b)(embed && embed.getCurrentTime()),
        loop_count : dataAndEvents,
        video_width : source.videoWidth,
        video_height : source.videoHeight,
        playing_audio : 1
      };
      bound("video_format_changed", this.$Video23(defaults), this.$Video24());
      this.$Video10 = source.videoWidth;
    }
  };
  /**
   * @param {?} embed
   * @param {Array} value
   * @return {undefined}
   */
  attributes.prototype.$Video17 = function(embed, value) {
    var defaults = {
      time : Object(helper.b)(embed && embed.getCurrentTime()),
      lsp : Object(helper.b)(this.$Video5),
      duration : Object(helper.b)(embed && embed.getDuration()),
      loop_count : value,
      playing_audio : 1
    };
    bound("video_paused", this.$Video23(defaults), this.$Video24());
  };
  /**
   * @param {?} embed
   * @param {Array} dataAndEvents
   * @return {undefined}
   */
  attributes.prototype.$Video25 = function(embed, dataAndEvents) {
    if (!this.$Video8) {
      var defaults = {
        time : Object(helper.b)(embed && embed.getCurrentTime()),
        lsp : Object(helper.b)(this.$Video5),
        duration : Object(helper.b)(embed && embed.getDuration()),
        loop_count : dataAndEvents,
        playing_audio : 1
      };
      bound("video_exited", this.$Video23(defaults), this.$Video24());
    }
  };
  /**
   * @param {?} config
   * @return {?}
   */
  attributes.prototype.$Video23 = function(config) {
    var a = this.props;
    var id = a.id;
    var cur = a.ownerId;
    var al = a.trackingToken;
    var il = a.shouldLogClientEvent;
    var set = a.dashInfo;
    var expr = !!set && set.is_dash_eligible;
    /** @type {string} */
    var playbackFormat = expr && set.video_dash_manifest ? "dash" : "progressive";
    var video = this.$Video18 && this.$Video18.getVideo();
    var parent = video && video.videoWidth;
    var current = callback({
      id : id || "",
      ownerId : cur || "",
      shouldLogClientEvent : il,
      trackingToken : al,
      isDashEligible : expr,
      playbackFormat : playbackFormat
    }, config);
    return parent && (current.video_width = parent), current;
  };
  /**
   * @return {?}
   */
  attributes.prototype.$Video24 = function() {
    var name = this.props.analyticsContext;
    return name === that.a.profilePage || "profilePageModal" === name ? "single_feed_profile" : name === that.a.postPage ? "post_page" : "feed_timeline";
  };
  /**
   * @return {undefined}
   */
  attributes.prototype.play = function() {
    if (!this.isPlaying()) {
      var config = {
        reason : this.$Video8 || this.$Video9 ? "clicktoplay" : "resume",
        time : Object(helper.b)(this.$Video18 && this.$Video18.getCurrentTime()),
        loop_count : this.$Video7
      };
      /** @type {boolean} */
      this.$Video8 = false;
      bound("video_should_start", this.$Video23(config), this.$Video24());
      bound("video_audio_enabled", this.$Video23({
        time : config.time,
        loop_count : config.loop_count
      }), this.$Video24());
      this.$Video20(this.$Video18, this.$Video7);
      /** @type {number} */
      this.$Video6 = Date.now();
      this.$Video5 = this.$Video18 ? this.$Video18.getCurrentTime() : this.$Video5;
      if (this.state.muted) {
        this.pulseControls();
      }
      if (this.$Video2 > 0) {
        Object(frame.logAction_DEPRECATED)("videoPlay", this.generateLogData({
          start : this.$Video2,
          end : this.$Video3,
          pageID : w.a
        }));
      } else {
        Object(frame.logAction_DEPRECATED)("videoPlay");
      }
      if (!this.state.hideZeroVideoBanner) {
        this.setState({
          hideZeroVideoBanner : true
        });
      }
      this.setState({
        playerState : state.playing
      });
      /** @type {number} */
      this.$Video2 = Date.now();
      this.startLoopTimer();
    }
  };
  /**
   * @return {undefined}
   */
  attributes.prototype.pause = function() {
    if (this.isPlaying()) {
      var udataCur = this.$Video7;
      /** @type {number} */
      this.$Video7 = 0;
      /** @type {boolean} */
      this.$Video1 = false;
      Object(frame.logAction_DEPRECATED)("videoPause");
      this.$Video17(this.$Video18, udataCur);
      this.clearLoopTimer();
      this.setState({
        playerState : state.paused
      });
      /** @type {number} */
      this.$Video3 = Date.now();
    }
  };
  /**
   * @return {undefined}
   */
  attributes.prototype.stop = function() {
    if (this.state.playerState !== state.finished) {
      this.pulseControls();
      this.setState({
        playerState : state.finished
      });
      /** @type {number} */
      this.$Video3 = Date.now();
    }
  };
  /**
   * @param {?} opt_attributes
   * @return {?}
   */
  attributes.prototype.generateLogData = function(opt_attributes) {
    return callback({
      source : this.props.analyticsContext
    }, opt_attributes);
  };
  /**
   * @return {undefined}
   */
  attributes.prototype.pulseControls = function() {
    if (this.$Video13) {
      this.$Video12.clearTimeout(this.$Video13);
      delete this.$Video13;
    }
    this.setState({
      forceShowControls : true
    });
    this.$Video13 = this.$Video12.setTimeout(this.hidePlayIndicatorOnInit, 1500);
  };
  /**
   * @param {boolean} value
   * @return {?}
   */
  attributes.prototype.renderControls = function(value) {
    /** @type {null} */
    var pdataOld = null;
    return this.props.isZeroBannerEligible && (!this.state.hideZeroVideoBanner && (pdataOld = dom.createElement(src, null), Object(frame.logAction_DEPRECATED)("zero_data_banner_impression", {
      type : "video_banner"
    }))), dom.createElement("div", {
      className : "_j12ff"
    }, dom.createElement("a", {
      className : "_v7u5u _pqxoc" + (this.isPlaying() ? "" : " _75c7w") + " videoSpritePlayButton",
      href : "javascript:;",
      role : "button"
    }), pdataOld, dom.createElement("div", {
      className : "_v7u5u _7fpiu" + (this.isPlaying() && this.state.muted ? " _75c7w" : "")
    }, Object(item.D)() ? "Toque no v\u00c3\u00addeo para ativar o som" : "Clique no v\u00c3\u00addeo para ativar o som"), dom.createElement(node.a, {
      className : "_nrycm" + (value ? "" : " _9zez3"),
      smallSize : false
    }));
  };
  /**
   * @return {?}
   */
  attributes.prototype.$Video27 = function() {
    /** @type {null} */
    var e = null;
    return this.props.isZeroBannerEligible && (this.state.isZeroNuxOpen && (e = dom.createElement(o.a, {
      mediaKeyword : object.a.video,
      onClose : this.handleZeroNuxClose,
      onAction : this.handleZeroNuxAction
    }), this.$Video11 || (Object(frame.logAction_DEPRECATED)("zero_nux_impression", {
      media : object.a.video
    }), this.$Video11 = true))), e;
  };
  /**
   * @return {?}
   */
  attributes.prototype.render = function() {
    var first = this;
    /** @type {boolean} */
    var loop = this.state.playerState === state.playing;
    var visible = this.isAutoplayEnabled() && this.isVisible();
    var container = dom.createElement(tagToInsert, {
      className : "_msp39",
      loop : loop,
      muted : this.state.muted,
      onEnded : this.handleEnded,
      onError : this.handleEnded,
      onLoadstart : this.handleLoadstart,
      onLoop : this.handleLoop,
      onPause : this.handlePause,
      onPlaying : this.handlePlaying,
      paused : this.state.playerState === state.paused,
      playing : this.isPlaying(),
      playsInline : true,
      poster : this.props.posterFrameUrl,
      preload : visible ? "auto" : "none",
      src : this.props.videoUrl,
      type : "video/mp4",
      /**
       * @param {?} i
       * @return {?}
       */
      ref : function(i) {
        return first.$Video18 = i;
      }
    });
    var content = {};
    if (this.props.dimensions) {
      var r = Object(from.d)(this.props.dimensions);
      if (100 != r) {
        content.style = {
          paddingBottom : "calc(" + r + "% - 1px)"
        };
        container = dom.createElement("div", {
          className : "_irdzc"
        }, container);
      }
    }
    /** @type {boolean} */
    var uid = !this.isPlaying() && this.state.loadState !== loadState.notLoaded;
    /** @type {boolean} */
    var gid = !Object(item.D)();
    /** @type {boolean} */
    var l = null != this.isVisible();
    var pos = this.state.forceShowControls;
    var charset = uid && (pos || !gid);
    /** @type {boolean} */
    var udataCur = uid && (gid && (!l && !this.props.hideIndicatorIcon));
    var offsetB = this.$Video27();
    return dom.createElement("div", {
      className : isFunction()(this.props.className, "_usfov" + (charset ? " _fnlap" : "")),
      onClick : this.handleContainerClick
    }, dom.createElement("div", callback({}, content, {
      className : "_6jl3c"
    }), container, this.renderControls(udataCur), dom.createElement("a", {
      className : "_7thjo",
      href : "javascript:;",
      role : "button"
    })), offsetB, dom.createElement(child.a, {
      likeEventCount : this.props.likeEventCount
    }));
  };
  attributes.defaultProps = {
    isZeroBannerEligible : object.b
  };
  /**
   * @return {undefined}
   */
  var update = function() {
    var me = this;
    /** @type {boolean} */
    this.$Video1 = false;
    /** @type {number} */
    this.$Video2 = 0;
    /** @type {number} */
    this.$Video3 = 0;
    /** @type {number} */
    this.$Video4 = 0;
    /** @type {number} */
    this.$Video5 = 0;
    /** @type {number} */
    this.$Video6 = 0;
    /** @type {number} */
    this.$Video7 = 0;
    /** @type {boolean} */
    this.$Video8 = true;
    /** @type {boolean} */
    this.$Video9 = true;
    /** @type {number} */
    this.$Video10 = 0;
    /** @type {boolean} */
    this.$Video11 = false;
    /**
     * @return {undefined}
     */
    this.showZeroNuxOrPlay = function() {
      if (me.props.hasSeenZeroNUX) {
        me.play();
      } else {
        me.setState({
          isZeroNuxOpen : true
        });
      }
    };
    /**
     * @return {undefined}
     */
    this.clearLoopTimer = function() {
      if (me.$Video15) {
        me.$Video12.clearTimeout(me.$Video15);
        /** @type {null} */
        me.$Video15 = null;
      }
    };
    /**
     * @return {undefined}
     */
    this.startLoopTimer = function() {
      me.clearLoopTimer();
      me.$Video15 = me.$Video12.setTimeout(me.handleLoopLimitReached, 12E4);
    };
    /**
     * @return {undefined}
     */
    this.handleBeforeUnload = function() {
      me.$Video26();
      me.$Video25(me.$Video18, me.$Video7);
    };
    /**
     * @return {undefined}
     */
    this.handleVisiblityChange = function() {
      if (document.visibilityState) {
        if ("hidden" === document.visibilityState) {
          me.$Video26();
        }
      }
    };
    /**
     * @return {undefined}
     */
    this.$Video26 = function() {
      if (me.state.playerState === state.playing) {
        me.setState({
          playerState : state.finished
        });
        me.$Video17(me.$Video18, me.$Video7);
      }
    };
    /**
     * @return {undefined}
     */
    this.handleLoopLimitReached = function() {
      me.clearLoopTimer();
      if (me.state.playerState === state.playing) {
        me.setState({
          playerState : state.playingFinalLoop
        });
      }
    };
    /**
     * @return {undefined}
     */
    this.clearLoopLogTimer = function() {
      if (me.$Video14) {
        me.$Video12.clearTimeout(me.$Video14);
        /** @type {null} */
        me.$Video14 = null;
      }
    };
    /**
     * @return {undefined}
     */
    this.startLoopLogTimer = function() {
      me.clearLoopLogTimer();
      me.$Video14 = me.$Video12.setTimeout(me.handleLoopLogTimerExpired, 4E3);
    };
    /**
     * @return {undefined}
     */
    this.handleLoopLogTimerExpired = function() {
      me.clearLoopLogTimer();
      me.logLoops();
      /** @type {number} */
      me.$Video4 = 0;
    };
    /**
     * @return {undefined}
     */
    this.logLoops = function() {
      if (me.$Video2 > 0) {
        var transitionEnd = me.$Video3 > me.$Video2 ? me.$Video3 : Date.now();
        Object(frame.logAction_DEPRECATED)("videoEnd", me.generateLogData({
          start : me.$Video2,
          end : transitionEnd,
          pageID : w.a
        }));
      }
      /** @type {number} */
      me.$Video2 = 0;
    };
    /**
     * @return {undefined}
     */
    this.handleEnded = function() {
      me.stop();
    };
    /**
     * @return {undefined}
     */
    this.handleLoadstart = function() {
      if (me.state.loadState === loadState.notLoaded) {
        me.setState({
          loadState : loadState.started
        });
      }
    };
    /**
     * @return {undefined}
     */
    this.handleLoop = function() {
      me.$Video4 = me.$Video4 + 1;
      me.$Video7++;
    };
    /**
     * @param {?} tap
     * @return {undefined}
     */
    this.handleContainerClick = function(tap) {
      if (!tap.isDefaultPrevented()) {
        if (me.state.muted) {
          me.setState({
            muted : false
          });
        } else {
          if (me.isPlaying()) {
            me.pause();
          } else {
            if (me.props.isZeroBannerEligible) {
              me.showZeroNuxOrPlay();
            } else {
              me.play();
            }
          }
        }
      }
    };
    /**
     * @return {undefined}
     */
    this.handlePause = function() {
      if (me.state.playerState !== state.paused) {
        me.pause();
      }
    };
    /**
     * @return {undefined}
     */
    this.handlePlaying = function() {
      if (!me.$Video1) {
        /** @type {boolean} */
        me.$Video1 = true;
        var err = {
          reason : me.$Video9 ? "clicktoplay" : "resume",
          start_delay : Object(helper.b)(Date.now() - me.$Video6)
        };
        /** @type {boolean} */
        me.$Video9 = false;
        bound("video_started_playing", me.$Video23(err), me.$Video24());
      }
    };
    /**
     * @param {?} tap
     * @return {undefined}
     */
    this.handleZeroNuxAction = function(tap) {
      if (!tap.isDefaultPrevented()) {
        var throttledUpdate = me.props.onUpdateZeroNUXPreference;
        if (throttledUpdate) {
          throttledUpdate(object.a.video);
        }
        me.setState({
          isZeroNuxOpen : false
        });
        me.play();
      }
    };
    /**
     * @param {?} ast
     * @return {undefined}
     */
    this.handleZeroNuxClose = function(ast) {
      me.setState({
        isZeroNuxOpen : false
      });
    };
    /**
     * @return {undefined}
     */
    this.hidePlayIndicatorOnInit = function() {
      me.setState({
        forceShowControls : false
      });
    };
    /**
     * @return {?}
     */
    this.isPlaying = function() {
      var expected = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : me.state;
      return expected.playerState === state.playing || expected.playerState === state.playingFinalLoop;
    };
    /**
     * @return {?}
     */
    this.isVisible = function() {
      return!!(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : me.props).isVisible;
    };
    /**
     * @return {?}
     */
    this.isAutoplayEnabled = function() {
      var forceClickToPlay = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : me.props;
      return me.$Video22() && !forceClickToPlay.forceClickToPlay;
    };
    /**
     * @return {?}
     */
    this.shouldStartAutoplay = function() {
      var item = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : me.props;
      return me.isAutoplayEnabled(item) && me.isVisible(item);
    };
  };
  /** @type {function (Function): undefined} */
  record.a = attributes;
}, function(dataAndEvents, deepDataAndEvents, require) {
  var getActual = require(1);
  var Block = require(527);
  getActual(Block, "is6c2354a2");
}, function(module, dataAndEvents) {
  /** @type {string} */
  module.exports = "._usfov{display:inline-block;width:100%;-webkit-tap-highlight-color:rgba(0,0,0,0)}._6jl3c{display:block;overflow:hidden;padding-bottom:100%}._irdzc{height:calc(100% + 1px);position:absolute;width:100%}._7thjo,._j12ff{bottom:0;left:0;position:absolute;right:0;top:0}.video-js{position:static}._7thjo{display:block}._v7u5u{opacity:0;-webkit-transition:opacity .2s ease-out;transition:opacity .2s ease-out;-webkit-transition-delay:.1s;transition-delay:.1s}._fnlap ._75c7w,._usfov:hover ._75c7w{opacity:1}._nrycm,._pqxoc{position:absolute}._pqxoc{display:block;height:135px;left:50%;margin-left:-67px;margin-top:-67px;top:50%;width:135px}._nrycm{opacity:1;right:0;-webkit-transition:opacity .2s ease-out;transition:opacity .2s ease-out;-webkit-transition-delay:.1s;transition-delay:.1s}._9zez3,._usfov:hover ._nrycm{opacity:0}._7fpiu,._msp39{position:absolute}._7fpiu{display:block;border-radius:100px;background:rgba(0,0,0,.85);padding:5px 10px;color:#fff;left:10px;bottom:10px}._usfov .text-track-display,._usfov .vjs-big-play-button,._usfov .vjs-control,._usfov .vjs-control-bar,._usfov .vjs-loading-spinner{display:none!important}._msp39{top:0;left:0;right:0;bottom:0}";
}, function(dataAndEvents, deepDataAndEvents, require) {
  var walk = require(1);
  var nodes = require(529);
  walk(nodes, "is2a6c5906");
}, function(module, dataAndEvents) {
  /** @type {string} */
  module.exports = "._2xkvu{position:relative}._qzesf{left:0;min-width:100%;position:absolute;top:0}._l6uaz{width:100%}._l6uaz::-webkit-media-controls-start-playback-button{display:none}._sajt6{position:absolute;top:0;left:0;width:100%;height:100%}";
}, function(dataAndEvents, deepDataAndEvents, $sanitize) {
  var isUndefined = $sanitize(1);
  var suiteView = $sanitize(531);
  isUndefined(suiteView, "is-3288a792");
}, function(module, dataAndEvents) {
  /** @type {string} */
  module.exports = "._52bc8{background-color:#fff;text-align:center;width:90%}._kysfk{height:76px;margin:26px auto 0;width:76px}._1i24k{display:block;margin:auto}._sos6u{bottom:-4px;height:28px;position:absolute;right:0;width:28px}._7oklz{font-size:16px;font-weight:700;line-height:24px;margin:20px auto 0}._r1azn{font-size:14px;line-height:18px;margin:12px auto 0;width:76%}._hkmnt{border:1px solid #efefef;color:#3897f0;font-weight:700;font-size:16px;line-height:48px;margin-top:16px}._ml33s{background:0 0;border:none;cursor:pointer;height:36px;outline:none;overflow:hidden;padding:0;position:absolute;right:0;top:0;width:36px}._ml33s::before{color:#b2b2b2;content:'\\00D7';font-size:28px;font-weight:100;line-height:32px}";
}, function(dataAndEvents, deepDataAndEvents, $sanitize) {
  var isUndefined = $sanitize(1);
  var suiteView = $sanitize(533);
  isUndefined(suiteView, "is-2e8ca768");
}, function(module, dataAndEvents) {
  /** @type {string} */
  module.exports = "._eq1p7{background:#000;border-radius:50px;bottom:12px;display:block;height:26px;left:16px;opacity:.7;position:absolute}._fcqhl{-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;height:14px;margin:7px}._1uz2m{height:12px;margin:1px 4px 1px 0;width:12px}._9ge8q{color:#fff;font-size:11px;line-height:14px}";
}, function(dataAndEvents, deepDataAndEvents, require) {
  var getActual = require(1);
  var Block = require(535);
  getActual(Block, "is3b8c5a62");
}, function(module, dataAndEvents) {
  /** @type {string} */
  module.exports = "._shjvg{-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row}._qiiyk{height:12px;margin:4px 5px 2px 0;width:12px}._t70af{color:#262626;font-size:14px;line-height:18px}";
}, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , ,
, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , function(dataAndEvents, record, $) {
  /**
   * @param {Object} obj
   * @param {Array} attr
   * @return {?}
   */
  function has(obj, attr) {
    var querystring = {};
    var i;
    for (i in obj) {
      if (!(attr.indexOf(i) >= 0)) {
        if (Object.prototype.hasOwnProperty.call(obj, i)) {
          querystring[i] = obj[i];
        }
      }
    }
    return querystring;
  }
  /**
   * @return {undefined}
   */
  function attributes() {
    ctor.apply(this, arguments);
  }
  var ctor;
  var basePrototype;
  var content = $(11);
  var tmpl = $.n(content);
  var self = $(0);
  var group = ($.n(self), Object.assign || function(opt_attributes) {
    /** @type {number} */
    var i = 1;
    for (;i < arguments.length;i++) {
      var iterable = arguments[i];
      var key;
      for (key in iterable) {
        if (Object.prototype.hasOwnProperty.call(iterable, key)) {
          opt_attributes[key] = iterable[key];
        }
      }
    }
    return opt_attributes;
  });
  $(915);
  basePrototype = (ctor = self.Component) && ctor.prototype;
  Object.assign(attributes, ctor);
  /** @type {function (): undefined} */
  (attributes.prototype = Object.create(basePrototype)).constructor = attributes;
  attributes.__superConstructor__ = ctor;
  /**
   * @return {?}
   */
  attributes.prototype.render = function() {
    var el = this.props;
    var cls = el.className;
    var value = has(el, ["className"]);
    return self.createElement("button", group({}, value, {
      className : tmpl()(cls, "_h74gn")
    }));
  };
  /** @type {function (): undefined} */
  record.a = attributes;
}, function(dataAndEvents, fnc, $) {
  var object = $(234);
  var self = $(0);
  $.n(self);
  $(917);
  /**
   * @param {Function} tests
   * @return {?}
   */
  fnc.a = function(tests) {
    return self.createElement(object.a, {
      className : tests.className,
      contentClassName : "_kg3s8",
      hideCloseButton : true,
      onClose : tests.onClose
    }, tests.children);
  };
}, function(dataAndEvents, record, parse) {
  /**
   * @param {Object} b
   * @param {Array} props
   * @return {?}
   */
  function merge(b, props) {
    var a = {};
    var prop;
    for (prop in b) {
      if (!(props.indexOf(prop) >= 0)) {
        if (Object.prototype.hasOwnProperty.call(b, prop)) {
          a[prop] = b[prop];
        }
      }
    }
    return a;
  }
  /**
   * @return {?}
   */
  function attributes() {
    var e;
    var _ref2;
    var o = this;
    /** @type {number} */
    var l = arguments.length;
    /** @type {Array} */
    var args = Array(l);
    /** @type {number} */
    var i = 0;
    for (;i < l;i++) {
      args[i] = arguments[i];
    }
    return e = (_ref2 = value.constructor).call.apply(_ref2, [this].concat(args)), this.$ResponsiveBlock1 = null, this.$ResponsiveBlock2 = false, this.$ResponsiveBlock3 = null, this.$ResponsiveBlock4 = null, this.$ResponsiveBlock5 = null, this.$ResponsiveBlock6 = null, this.$ResponsiveBlock10 = function(deepDataAndEvents) {
      /** @type {string} */
      o.$ResponsiveBlock3 = deepDataAndEvents;
      if (o.props.getRootElement) {
        if (deepDataAndEvents) {
          o.props.getRootElement(deepDataAndEvents);
        }
      }
    }, this.$ResponsiveBlock11 = function(lvl) {
      o.$ResponsiveBlock4 = lvl;
    }, this.$ResponsiveBlock8 = function() {
      if (!o.$ResponsiveBlock2) {
        object.a(function() {
          if (o.$ResponsiveBlock2 = false, null != o.$ResponsiveBlock3) {
            var millis = o.$ResponsiveBlock3.offsetWidth;
            var until = o.$ResponsiveBlock3.offsetHeight;
            if (!(millis === o.$ResponsiveBlock6 && until === o.$ResponsiveBlock1)) {
              o.$ResponsiveBlock6 = millis;
              o.$ResponsiveBlock1 = until;
              object.b(function() {
                if (null != o.$ResponsiveBlock3) {
                  o.props.onResize(millis, until);
                }
              });
            }
          }
        });
      }
    }, e;
  }
  var ctor;
  var value;
  var object = parse(93);
  var content = parse(11);
  var tmpl = parse.n(content);
  var c = parse(909);
  var pos = parse.n(c);
  var dom = parse(0);
  var a = (parse.n(dom), parse(314));
  var actual = parse.n(a);
  var templateFunc = Object.assign || function(opt_attributes) {
    /** @type {number} */
    var i = 1;
    for (;i < arguments.length;i++) {
      var iterable = arguments[i];
      var key;
      for (key in iterable) {
        if (Object.prototype.hasOwnProperty.call(iterable, key)) {
          opt_attributes[key] = iterable[key];
        }
      }
    }
    return opt_attributes;
  };
  parse(907);
  var node = actual.a.isBrowser("IE") && "onresize" in document.createElement("div");
  var config = {
    attributes : true,
    characterData : true,
    childList : true,
    subtree : true
  };
  ctor = dom.Component;
  value = ctor && ctor.prototype;
  Object.assign(attributes, ctor);
  /** @type {function (): ?} */
  (attributes.prototype = Object.create(value)).constructor = attributes;
  attributes.__superConstructor__ = ctor;
  /**
   * @return {undefined}
   */
  attributes.prototype.componentDidMount = function() {
    this.$ResponsiveBlock7();
    this.$ResponsiveBlock8();
    this.$ResponsiveBlock9 = new pos.a(this.$ResponsiveBlock8);
    this.$ResponsiveBlock9.observe(this.$ResponsiveBlock3, config);
  };
  /**
   * @return {undefined}
   */
  attributes.prototype.componentWillUnmount = function() {
    if (this.$ResponsiveBlock5) {
      /** @type {null} */
      this.$ResponsiveBlock5.onresize = null;
      /** @type {null} */
      this.$ResponsiveBlock5 = null;
    }
    if (this.$ResponsiveBlock9) {
      this.$ResponsiveBlock9.disconnect();
      /** @type {null} */
      this.$ResponsiveBlock9 = null;
    }
    /** @type {null} */
    this.$ResponsiveBlock6 = null;
    /** @type {null} */
    this.$ResponsiveBlock1 = null;
  };
  /**
   * @return {?}
   */
  attributes.prototype.render = function() {
    var cls = tmpl()("_gwyj6", this.props.className);
    var offsetB = void 0;
    offsetB = node ? dom.createElement("div", {
      key : "sensor",
      ref : this.$ResponsiveBlock11,
      className : "_4c5eh"
    }) : dom.createElement("div", {
      key : "sensor",
      className : "_4c5eh"
    }, dom.createElement("iframe", {
      "aria-hidden" : "true",
      ref : this.$ResponsiveBlock11,
      className : "_o6ctz",
      tabIndex : "-1"
    }));
    var child = this.props;
    var subChildren = child.children;
    var content = (child.getRootElement, child.onResize, merge(child, ["children", "getRootElement", "onResize"]));
    return dom.createElement("div", templateFunc({}, content, {
      className : cls,
      ref : this.$ResponsiveBlock10
    }), subChildren, offsetB);
  };
  /**
   * @return {undefined}
   */
  attributes.prototype.$ResponsiveBlock7 = function() {
    if (this.$ResponsiveBlock4 && this.$ResponsiveBlock4.contentWindow) {
      this.$ResponsiveBlock5 = this.$ResponsiveBlock4.contentWindow;
    } else {
      this.$ResponsiveBlock5 = this.$ResponsiveBlock4;
    }
    if (this.$ResponsiveBlock5) {
      this.$ResponsiveBlock5.onresize = this.$ResponsiveBlock8;
    } else {
      requestAnimationFrame(this.$ResponsiveBlock7);
    }
  };
  /** @type {function (): ?} */
  record.a = attributes;
}, function(dataAndEvents, record, $) {
  /**
   * @return {undefined}
   */
  function attributes() {
    ctor.apply(this, arguments);
  }
  var ctor;
  var basePrototype;
  var content = $(11);
  var tmpl = $.n(content);
  var object = $(885);
  var self = $(0);
  $.n(self);
  $(913);
  basePrototype = (ctor = self.Component) && ctor.prototype;
  Object.assign(attributes, ctor);
  /** @type {function (): undefined} */
  (attributes.prototype = Object.create(basePrototype)).constructor = attributes;
  attributes.__superConstructor__ = ctor;
  /**
   * @param {Element} options
   * @return {?}
   */
  attributes.prototype.renderItem = function(options) {
    return options ? self.createElement("li", {
      className : "_o2wxh"
    }, options) : null;
  };
  /**
   * @return {?}
   */
  attributes.prototype.render = function() {
    var options = this.props;
    var parentName = options.closeLabel;
    var title = options.title;
    var click = options.onCancel;
    return self.createElement("ul", {
      className : tmpl()(this.props.className, "_cepxb"),
      role : "menu"
    }, title && self.createElement("li", {
      className : "_hql7s"
    }, title), self.Children.map(this.props.children, this.renderItem), this.renderItem(self.createElement(object.a, {
      onClick : click
    }, parentName)));
  };
  attributes.defaultProps = {
    closeLabel : "Cancelar"
  };
  /** @type {function (): undefined} */
  record.a = attributes;
}, function(dataAndEvents, fnc, $) {
  /**
   * @param {Object} obj
   * @param {Array} property
   * @return {?}
   */
  function has(obj, property) {
    var old = {};
    var name;
    for (name in obj) {
      if (!(property.indexOf(name) >= 0)) {
        if (Object.prototype.hasOwnProperty.call(obj, name)) {
          old[name] = obj[name];
        }
      }
    }
    return old;
  }
  /**
   * @param {Function} tests
   * @return {?}
   */
  fnc.a = function(tests) {
    return function(property) {
      var b;
      var g;
      return g = b = function() {
        /**
         * @return {?}
         */
        function attributes() {
          var _ref2;
          var t;
          /** @type {number} */
          var l = arguments.length;
          /** @type {Array} */
          var args = Array(l);
          /** @type {number} */
          var i = 0;
          for (;i < l;i++) {
            args[i] = arguments[i];
          }
          return t = (_ref2 = value.constructor).call.apply(_ref2, [this].concat(args)), this.state = {
            keyId : 0
          }, t;
        }
        var ctor;
        var value;
        return ctor = self.Component, value = ctor && ctor.prototype, Object.assign(attributes, ctor), attributes.prototype = Object.create(value), attributes.prototype.constructor = attributes, attributes.__superConstructor__ = ctor, attributes.prototype.getPassedProps = function(obj) {
          return obj.innerRef, has(obj, ["innerRef"]);
        }, attributes.prototype.componentWillReceiveProps = function(walkers) {
          if (tests(this.getPassedProps(walkers), this.getPassedProps(this.props))) {
            this.setState(function(result) {
              return{
                keyId : result.keyId + 1
              };
            });
          }
        }, attributes.prototype.render = function() {
          var props = this.props;
          var i = props.innerRef;
          var options = has(props, ["innerRef"]);
          return[self.createElement(property, extend({
            key : this.state.keyId,
            ref : i
          }, options))];
        }, attributes;
      }(), b.displayName = "withRemountOnChange(" + Object(options.a)(property) + ")", g;
    };
  };
  var options = $(114);
  var self = $(0);
  var extend = ($.n(self), Object.assign || function(opt_attributes) {
    /** @type {number} */
    var i = 1;
    for (;i < arguments.length;i++) {
      var iterable = arguments[i];
      var key;
      for (key in iterable) {
        if (Object.prototype.hasOwnProperty.call(iterable, key)) {
          opt_attributes[key] = iterable[key];
        }
      }
    }
    return opt_attributes;
  });
}, , , , function(dataAndEvents, type, f) {
  f.d(type, "a", function() {
    return n;
  });
  var o = f(15);
  var n = f.n(o)()({
    flexible : null,
    feed : null
  });
}, function(dataAndEvents, record, parse) {
  /**
   * @return {?}
   */
  function attributes() {
    var value;
    var _ref2;
    var options = this;
    /** @type {number} */
    var l = arguments.length;
    /** @type {Array} */
    var args = Array(l);
    /** @type {number} */
    var i = 0;
    for (;i < l;i++) {
      args[i] = arguments[i];
    }
    return value = (_ref2 = parent.constructor).call.apply(_ref2, [this].concat(args)), this.$Photo1 = false, this.$Photo2 = false, this.$Photo5 = function() {
      if (!options.$Photo1) {
        parsed.b(function() {
          if (!options.$Photo1) {
            var src = options.$Photo3();
            /** @type {string} */
            src.style.visibility = "";
            /** @type {boolean} */
            options.$Photo2 = true;
            var throttledUpdate = options.props.onPhotoRendered;
            if (throttledUpdate) {
              throttledUpdate(src.currentSrc || src.src, Object(object.a)() - options.$Photo6);
            }
          }
        });
      }
    }, this.renderImage = function() {
      var gstyle = {
        visibility : !options.props.rich || options.$Photo2 ? null : "hidden"
      };
      var content = {
        alt : options.props.caption,
        className : "_2di5p",
        onError : options.$Photo5,
        onLoad : options.$Photo5,
        src : options.props.src,
        style : gstyle
      };
      var key = options.props.srcSet;
      return null != key && key.length ? dom.createElement(child.a, callback({
        srcSet : key,
        /**
         * @param {?} deepDataAndEvents
         * @return {?}
         */
        imgRef : function(deepDataAndEvents) {
          return options.$Photo4 = deepDataAndEvents;
        }
      }, content)) : dom.createElement("img", callback({
        /**
         * @param {?} value
         * @return {?}
         */
        ref : function(value) {
          return options.$Photo4 = value;
        }
      }, content));
    }, value;
  }
  var data;
  var parent;
  var parsed = parse(93);
  var url = parse(3);
  var file = parse.n(url);
  var c = parse(11);
  var hover = parse.n(c);
  var o = parse(507);
  var dom = parse(0);
  var child = (parse.n(dom), parse(898));
  var from = parse(252);
  var object = parse(49);
  var callback = Object.assign || function(opt_attributes) {
    /** @type {number} */
    var i = 1;
    for (;i < arguments.length;i++) {
      var iterable = arguments[i];
      var key;
      for (key in iterable) {
        if (Object.prototype.hasOwnProperty.call(iterable, key)) {
          opt_attributes[key] = iterable[key];
        }
      }
    }
    return opt_attributes;
  };
  parse(920);
  data = dom.PureComponent;
  parent = data && data.prototype;
  Object.assign(attributes, data);
  /** @type {function (): ?} */
  (attributes.prototype = Object.create(parent)).constructor = attributes;
  attributes.__superConstructor__ = data;
  /**
   * @return {?}
   */
  attributes.prototype.$Photo3 = function() {
    var object = this.$Photo4;
    return object instanceof HTMLElement || file()(0), object;
  };
  /**
   * @return {undefined}
   */
  attributes.prototype.componentWillMount = function() {
    if (this.props.onPhotoRendered) {
      this.$Photo6 = Object(object.a)();
    }
  };
  /**
   * @return {undefined}
   */
  attributes.prototype.componentWillUnmount = function() {
    /** @type {boolean} */
    this.$Photo1 = true;
  };
  /**
   * @return {undefined}
   */
  attributes.prototype.componentDidMount = function() {
    var key = this.props.srcSet;
    if (!(null != key && key.length)) {
      if (this.$Photo3().complete) {
        this.$Photo5();
      }
    }
  };
  /**
   * @return {?}
   */
  attributes.prototype.render = function() {
    var element = this.props;
    var elementClassName = element.className;
    var length = element.likeEventCount;
    var onClick = element.onClick;
    var content = {};
    if (this.props.dimensions) {
      var docsSurplus = Object(from.d)(this.props.dimensions);
      content.style = {
        paddingBottom : docsSurplus + "%"
      };
    }
    return dom.createElement("div", {
      className : hover()("_e3il2", elementClassName),
      onClick : onClick
    }, dom.createElement("div", callback({}, content, {
      className : "_4rbun"
    }), this.renderImage()), dom.createElement(o.a, {
      likeEventCount : length
    }), dom.createElement("div", {
      className : "_si7dy"
    }));
  };
  attributes.defaultProps = {
    rich : false
  };
  /** @type {function (): ?} */
  record.a = attributes;
}, , , function(module, dataAndEvents) {
  /** @type {RegExp} */
  var RE_SIMPLE_SELECTOR = RegExp("[\\u200d\\ud800-\\udfff\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff\\ufe0e\\ufe0f]");
  /**
   * @param {Function} types
   * @return {?}
   */
  module.exports = function(types) {
    return RE_SIMPLE_SELECTOR.test(types);
  };
}, function(dataAndEvents, meta, require) {
  /**
   * @return {?}
   */
  function attributes() {
    var value;
    var _ref2;
    var opts = this;
    /** @type {number} */
    var l = arguments.length;
    /** @type {Array} */
    var args = Array(l);
    /** @type {number} */
    var i = 0;
    for (;i < l;i++) {
      args[i] = arguments[i];
    }
    return value = (_ref2 = parent.constructor).call.apply(_ref2, [this].concat(args)), this.$ResponsiveImage1 = false, this.$ResponsiveImage2 = null, this.$ResponsiveImage3 = null, this.$ResponsiveImage9 = function(deepDataAndEvents) {
      if (opts.$ResponsiveImage2 !== opts.$ResponsiveImage3) {
        if (opts.props.onLoad) {
          opts.props.onLoad(deepDataAndEvents);
        }
      }
      opts.$ResponsiveImage2 = opts.$ResponsiveImage3;
    }, this.$ResponsiveImage10 = function(deepDataAndEvents) {
      opts.$ResponsiveImage5 = deepDataAndEvents;
      if (opts.props.imgRef) {
        opts.props.imgRef(deepDataAndEvents);
      }
    }, value;
  }
  var data;
  var parent;
  var helper = require(93);
  var update = require(61);
  var throttledUpdate = require.n(update);
  var path = require(6);
  var resolved = require.n(path);
  var util = require(0);
  var p = (require.n(util), require(314));
  var doc = require.n(p);
  var options = require(889);
  var tryIt = throttledUpdate()(function() {
    return!doc.a.isBrowser("Edge") && "srcset" in document.createElement("img");
  });
  var traverseNode = throttledUpdate()(function() {
    return doc.a.isBrowser("Firefox");
  });
  data = util.PureComponent;
  parent = data && data.prototype;
  Object.assign(attributes, data);
  /** @type {function (): ?} */
  (attributes.prototype = Object.create(parent)).constructor = attributes;
  attributes.__superConstructor__ = data;
  /**
   * @return {?}
   */
  attributes.prototype.$ResponsiveImage4 = function() {
    return resolved()(this.$ResponsiveImage5).getBoundingClientRect().width;
  };
  /**
   * @return {?}
   */
  attributes.prototype.$ResponsiveImage6 = function() {
    return this.$ResponsiveImage4() * (window.devicePixelRatio || 1);
  };
  /**
   * @return {?}
   */
  attributes.prototype.$ResponsiveImage7 = function() {
    var src = this.props.src;
    var index = this.$ResponsiveImage6();
    if (index) {
      /** @type {boolean} */
      var callback2 = true;
      /** @type {boolean} */
      var i = false;
      var bulk = void 0;
      try {
        var token;
        var self = this.props.srcSet[Symbol.iterator]();
        for (;!(callback2 = (token = self.next()).done);callback2 = true) {
          var element = token.value;
          if (src = element.src, element.configWidth >= index) {
            break;
          }
        }
      } catch (fn) {
        /** @type {boolean} */
        i = true;
        bulk = fn;
      } finally {
        try {
          if (!callback2) {
            if (self.return) {
              self.return();
            }
          }
        } finally {
          if (i) {
            throw bulk;
          }
        }
      }
    }
    return src;
  };
  /**
   * @return {?}
   */
  attributes.prototype.$ResponsiveImage8 = function() {
    return this.props.srcSet.map(function(g) {
      return g.src + " " + g.configWidth + "w";
    }).join(",");
  };
  /**
   * @return {undefined}
   */
  attributes.prototype.componentDidMount = function() {
    /** @type {boolean} */
    this.$ResponsiveImage1 = true;
    this.componentDidUpdate();
  };
  /**
   * @return {undefined}
   */
  attributes.prototype.componentWillUnmount = function() {
    /** @type {boolean} */
    this.$ResponsiveImage1 = false;
  };
  /**
   * @return {undefined}
   */
  attributes.prototype.componentDidUpdate = function() {
    var me = this;
    var options = resolved()(this.$ResponsiveImage5);
    if (tryIt()) {
      helper.a(function() {
        if (me.$ResponsiveImage1) {
          var r = me.$ResponsiveImage4();
          helper.b(function() {
            if (me.$ResponsiveImage1) {
              var html = me.$ResponsiveImage8();
              me.$ResponsiveImage3 = html;
              /** @type {string} */
              options.sizes = r + "px";
              options.srcset = html;
              options.src = me.props.src;
              helper.a(function() {
                if (!traverseNode()) {
                  if (options.complete) {
                    me.$ResponsiveImage9();
                  }
                }
              });
            }
          });
        }
      });
    } else {
      helper.a(function() {
        if (me.$ResponsiveImage1) {
          var src = me.$ResponsiveImage7();
          helper.b(function() {
            if (me.$ResponsiveImage1) {
              me.$ResponsiveImage3 = src;
              options.src = src;
              if (options.complete) {
                me.$ResponsiveImage9();
              }
            }
          });
        }
      });
    }
  };
  /**
   * @return {?}
   */
  attributes.prototype.render = function() {
    return util.createElement("img", {
      alt : this.props.alt,
      className : this.props.className,
      onError : this.props.onError,
      onLoad : this.$ResponsiveImage9,
      ref : this.$ResponsiveImage10,
      style : this.props.style
    });
  };
  meta.a = Object(options.a)(function(src, tgt) {
    return src.src !== tgt.src;
  })(attributes);
}, function(dataAndEvents, record, $) {
  /**
   * @return {undefined}
   */
  function attributes() {
    ctor.apply(this, arguments);
  }
  var ctor;
  var basePrototype;
  var content = $(11);
  var tmpl = $.n(content);
  var self = $(0);
  $.n(self);
  $(21);
  $(64);
  basePrototype = (ctor = self.Component) && ctor.prototype;
  Object.assign(attributes, ctor);
  /** @type {function (): undefined} */
  (attributes.prototype = Object.create(basePrototype)).constructor = attributes;
  attributes.__superConstructor__ = ctor;
  /**
   * @return {?}
   */
  attributes.prototype.render = function() {
    var node = this.props;
    var actual = node.size;
    var cls = node.className;
    return self.createElement("span", {
      className : tmpl()(cls, "_8scx2" + ("normal" === actual ? " coreSpriteVerifiedBadge" : "") + ("small" === actual ? " coreSpriteVerifiedBadgeSmall" : "")),
      title : "Verificado"
    }, "Verificado");
  };
  attributes.defaultProps = {
    size : "normal"
  };
  /** @type {function (): undefined} */
  record.a = attributes;
}, , , function(dataAndEvents, record, $) {
  /**
   * @return {?}
   */
  function _getBounds() {
    return{
      top : window.pageYOffset,
      right : window.pageXOffset + window.innerWidth,
      bottom : window.pageYOffset + window.innerHeight,
      left : window.pageXOffset,
      width : window.innerWidth,
      height : window.innerHeight
    };
  }
  /**
   * @param {Object} pos
   * @param {?} scope
   * @return {?}
   */
  function link(pos, scope) {
    /** @type {number} */
    var x = pos.width * scope.x;
    /** @type {number} */
    var y = pos.height * scope.y;
    /** @type {number} */
    var actualWidth = (x - pos.width) / 2;
    /** @type {number} */
    var height = (y - pos.height) / 2;
    return{
      top : pos.top - height,
      right : pos.right + actualWidth,
      bottom : pos.bottom + height,
      left : pos.left - actualWidth,
      width : x,
      height : y
    };
  }
  /**
   * @param {Object} box
   * @param {?} scroll
   * @return {?}
   */
  function getBounds(box, scroll) {
    return{
      top : box.top + scroll.y,
      right : box.right + scroll.x,
      bottom : box.bottom + scroll.y,
      left : box.left + scroll.x,
      width : box.width,
      height : box.height
    };
  }
  /**
   * @param {?} a
   * @param {?} b
   * @return {?}
   */
  function extend(a, b) {
    return!(a.bottom < b.top || (a.left > b.right || (a.top > b.bottom || a.right < b.left)));
  }
  /**
   * @param {?} to
   * @param {?} params
   * @return {?}
   */
  function update(to, params) {
    if (!extend(to, params)) {
      return null;
    }
    /** @type {number} */
    var y = Math.max(to.top, params.top);
    /** @type {number} */
    var right = Math.min(to.right, params.right);
    /** @type {number} */
    var y2 = Math.min(to.bottom, params.bottom);
    /** @type {number} */
    var left = Math.max(to.left, params.left);
    return{
      top : y,
      right : right,
      bottom : y2,
      left : left,
      width : right - left,
      height : y2 - y
    };
  }
  /**
   * @param {Object} obj
   * @return {?}
   */
  function HOP(obj) {
    return obj.width * obj.height;
  }
  /**
   * @param {Object} size
   * @param {Object} rect
   * @return {?}
   */
  function resize(size, rect) {
    return Math.abs(size.left - rect.left) < 1 && (Math.abs(size.top - rect.top) < 1 && (Math.abs(size.width - rect.width) < 1 && (Math.abs(size.height - rect.height) < 1 && (Math.abs(size.right - rect.right) < 1 && Math.abs(size.bottom - rect.bottom) < 1))));
  }
  /**
   * @param {?} options
   * @param {?} listenerFn
   * @param {?} container
   * @param {?} projection
   * @return {undefined}
   */
  function Cursor(options, listenerFn, container, projection) {
    this.measureFn = options;
    this.listenerFn = listenerFn;
    this.container = container;
    this.extraListener = projection;
    /** @type {null} */
    this.isVisible = null;
  }
  /**
   * @return {undefined}
   */
  function Node() {
    var ostring = this;
    /**
     * @param {?} dataAndEvents
     * @return {undefined}
     */
    this.$ScrollWatcher9 = function(dataAndEvents) {
      ostring.$ScrollWatcher4();
    };
    /**
     * @param {?} it
     * @return {undefined}
     */
    this.$ScrollWatcher12 = function(it) {
      ostring.$ScrollWatcher4(it);
    };
    /** @type {boolean} */
    this.$ScrollWatcher1 = false;
    this.listeners = {};
    /** @type {number} */
    this.$ScrollWatcher2 = 0;
    /** @type {number} */
    this.$ScrollWatcher3 = 1;
    this.$ScrollWatcher4 = Object(options.a)(this.$ScrollWatcher5, r20, this);
    this.$ScrollWatcher6 = new Map;
    this.$ScrollWatcher7();
  }
  /**
   * @return {?}
   */
  function attributes() {
    var e;
    var _ref2;
    var data = this;
    /** @type {number} */
    var l = arguments.length;
    /** @type {Array} */
    var args = Array(l);
    /** @type {number} */
    var i = 0;
    for (;i < l;i++) {
      args[i] = arguments[i];
    }
    return e = (_ref2 = value.constructor).call.apply(_ref2, [this].concat(args)), this.$ScrollWatchedComponent1 = function() {
      var el = data.$ScrollWatchedComponent2;
      if (el) {
        var e = data.context.scrollableContainer;
        var evt = e ? Object(frame.findDOMNode)(e) : null;
        var from = void 0;
        return from = evt ? {
          left : el.offsetLeft,
          width : el.offsetWidth,
          right : el.offsetLeft + el.offsetWidth,
          top : el.offsetTop,
          height : el.offsetHeight,
          bottom : el.offsetTop + el.offsetHeight
        } : getBounds(el.getBoundingClientRect(), evt ? {
          x : evt.scrollLeft,
          y : evt.scrollTop
        } : {
          x : window.pageXOffset,
          y : window.pageYOffset
        }), link(from, data.props.boundScaleFactor);
      }
      return{
        bottom : 0,
        height : 0,
        left : 0,
        right : 0,
        top : 0,
        width : 0
      };
    }, this.$ScrollWatchedComponent3 = function(deepDataAndEvents) {
      /** @type {Object} */
      data.$ScrollWatchedComponent2 = deepDataAndEvents;
    }, this.getMeasuredAreaRect = function() {
      return data.setRect(data.$ScrollWatchedComponent1()), data.rect;
    }, this.forceRecompute = function() {
      data.$ScrollWatchedComponent4();
    }, this.handleResize = function(millis, until) {
      data.setRect(data.$ScrollWatchedComponent1());
      data.$ScrollWatchedComponent5();
      if ("function" == typeof data.props.onResize) {
        data.props.onResize(millis, until);
      }
    }, this.setRect = function(x) {
      data.rect = x;
    }, this.$ScrollWatchedComponent5 = function() {
      if (null == data.$ScrollWatchedComponent6) {
        data.$ScrollWatchedComponent6 = t.addVisibilityListener(data.getMeasuredAreaRect, data.handleVisibilityChange, data.context.scrollableContainer && Object(frame.findDOMNode)(data.context.scrollableContainer));
      }
    }, this.handleVisibilityChange = function(walkers) {
      /** @type {boolean} */
      var content = null !== walkers;
      if (content !== data.$ScrollWatchedComponent7) {
        if (content) {
          data.props.onScrollEnter();
        } else {
          data.props.onScrollLeave();
        }
      }
      var type = void 0;
      if ((type = content ? HOP(walkers) / HOP(data.rect) * 100 : 0) !== data.$ScrollWatchedComponent8) {
        data.props.onScrollChange(type);
      }
      /** @type {boolean} */
      data.$ScrollWatchedComponent7 = content;
      /** @type {number} */
      data.$ScrollWatchedComponent8 = type;
    }, this.$ScrollWatchedComponent4 = function() {
      var size = data.$ScrollWatchedComponent1();
      if (!data.rect || !resize(size, data.rect)) {
        data.setRect(size);
        data.$ScrollWatchedComponent5();
        var closed = t.listeners[data.$ScrollWatchedComponent6];
        t.updateListenerVisibility(closed);
      }
    }, e;
  }
  var options = $(118);
  var style = $(24);
  var target = $.n(style);
  var obj = $(255);
  var content = $(38);
  var actual = $.n(content);
  var self = $(0);
  var frame = $(27);
  var object = $(887);
  var elem = $(9);
  var q = $.n(elem);
  /** @type {Array} */
  var mod = ["scroll", "resize", "orientationchange"];
  /** @type {number} */
  var r20 = 30;
  /**
   * @return {undefined}
   */
  Node.prototype.$ScrollWatcher7 = function() {
    var spy = this;
    if (q.a.canUseEventListeners) {
      /** @type {Array.<?>} */
      this.$ScrollWatcher8 = mod.map(function(toClass) {
        return obj.default.add(window, toClass, spy.$ScrollWatcher9.bind(spy));
      });
    }
  };
  /**
   * @return {undefined}
   */
  Node.prototype.$ScrollWatcher10 = function() {
    if (this.$ScrollWatcher8) {
      this.$ScrollWatcher8.forEach(function(selfObj) {
        return selfObj.remove();
      });
    }
  };
  /**
   * @param {HTMLElement} e
   * @return {?}
   */
  Node.prototype.$ScrollWatcher11 = function(e) {
    var w = e.clientWidth;
    var containerHeight = e.clientHeight;
    var scrollTop = e.scrollTop;
    var x = e.scrollLeft;
    return{
      left : x,
      width : w,
      right : x + w,
      top : scrollTop,
      height : containerHeight,
      bottom : scrollTop + containerHeight
    };
  };
  /**
   * @param {?} e
   * @param {?} value
   * @return {undefined}
   */
  Node.prototype.updateListenerVisibility = function(e, value) {
    var o = void 0;
    var a = update(e.measureFn(), o = e.container ? this.$ScrollWatcher11(e.container) : value || _getBounds());
    if (e.visibleRect !== a) {
      e.visibleRect = a;
      e.listenerFn(a);
    }
  };
  /**
   * @param {string} storageKey
   * @return {undefined}
   */
  Node.prototype.$ScrollWatcher5 = function(storageKey) {
    var cache = this;
    var udataCur = _getBounds();
    var iterator = (storageKey ? Array.from(this.$ScrollWatcher6.get(storageKey) || []) : Object.keys(this.listeners)).reduce(function(results, index) {
      return results.push(cache.listeners[index]), results;
    }, []).filter(function(dataAndEvents) {
      return null != dataAndEvents;
    });
    /** @type {boolean} */
    var callback2 = true;
    /** @type {boolean} */
    var s = false;
    var bulk = void 0;
    try {
      var _ref;
      var self = iterator[Symbol.iterator]();
      for (;!(callback2 = (_ref = self.next()).done);callback2 = true) {
        var color = _ref.value;
        this.updateListenerVisibility(color, udataCur);
      }
    } catch (fn) {
      /** @type {boolean} */
      s = true;
      bulk = fn;
    } finally {
      try {
        if (!callback2) {
          if (self.return) {
            self.return();
          }
        }
      } finally {
        if (s) {
          throw bulk;
        }
      }
    }
  };
  /**
   * @param {string} buffer
   * @param {string} data
   * @param {Object} cacheKey
   * @return {?}
   */
  Node.prototype.addVisibilityListener = function(buffer, data, cacheKey) {
    var self = this;
    /** @type {string} */
    var name = "L" + this.$ScrollWatcher3++;
    /** @type {null} */
    var cachedPath = null;
    if (cacheKey) {
      this.$ScrollWatcher6.set(cacheKey, (this.$ScrollWatcher6.get(cacheKey) || new Set).add(name));
      cachedPath = obj.default.add(cacheKey, "scroll", this.$ScrollWatcher12.bind(this, cacheKey));
    }
    var b = new Cursor(buffer, data, cacheKey, cachedPath);
    return this.listeners[name] = b, this.$ScrollWatcher2++, setTimeout(function() {
      if (name in self.listeners) {
        self.updateListenerVisibility(b);
      }
    }, 0), this.$ScrollWatcher1 || this.$ScrollWatcher7(), name;
  };
  /**
   * @param {?} name
   * @return {undefined}
   */
  Node.prototype.removeVisibilityListener = function(name) {
    if (this.listeners.hasOwnProperty(name)) {
      var game = this.listeners[name];
      if (game.extraListener && game.extraListener.remove(), game.container) {
        var file = this.$ScrollWatcher6.get(game.container);
        file.delete(name);
        if (0 === file.size) {
          this.$ScrollWatcher6.delete(game.container);
        }
      }
      delete this.listeners[name];
      this.listenerCount--;
      if (0 === this.listenerCount) {
        if (this.$ScrollWatcher1) {
          this.$ScrollWatcher10();
          /** @type {boolean} */
          this.$ScrollWatcher1 = false;
        }
      }
    }
  };
  var ctor;
  var value;
  var t = new Node;
  ctor = self.Component;
  value = ctor && ctor.prototype;
  Object.assign(attributes, ctor);
  /** @type {function (): ?} */
  (attributes.prototype = Object.create(value)).constructor = attributes;
  attributes.__superConstructor__ = ctor;
  /**
   * @return {undefined}
   */
  attributes.prototype.componentWillMount = function() {
    this.$ScrollWatchedComponent4 = Object(options.a)(this.$ScrollWatchedComponent4, 30, this);
  };
  /**
   * @return {undefined}
   */
  attributes.prototype.componentDidMount = function() {
    this.$ScrollWatchedComponent9 = obj.default.add(window, "orientationchange", this.$ScrollWatchedComponent4);
    this.$ScrollWatchedComponent10 = obj.default.add(window, "resize", this.$ScrollWatchedComponent4);
  };
  /**
   * @return {undefined}
   */
  attributes.prototype.componentWillUnmount = function() {
    if (this.$ScrollWatchedComponent6) {
      t.removeVisibilityListener(this.$ScrollWatchedComponent6);
    }
    this.$ScrollWatchedComponent9.remove();
    this.$ScrollWatchedComponent10.remove();
    this.$ScrollWatchedComponent4.reset();
  };
  /**
   * @return {?}
   */
  attributes.prototype.render = function() {
    return self.createElement(object.a, {
      children : this.props.children,
      className : this.props.className,
      getRootElement : this.$ScrollWatchedComponent3,
      onResize : this.handleResize
    });
  };
  attributes.defaultProps = {
    boundScaleFactor : {
      x : 1,
      y : 1
    },
    onScrollEnter : target.a,
    onScrollLeave : target.a,
    onScrollChange : target.a
  };
  attributes.contextTypes = {
    scrollableContainer : actual.a.any
  };
  /** @type {function (): ?} */
  record.a = attributes;
}, , , , , function(dataAndEvents, deepDataAndEvents, require) {
  var getActual = require(1);
  var Block = require(908);
  getActual(Block, "is-2bf7a73c");
}, function(module, dataAndEvents) {
  /** @type {string} */
  module.exports = "._gwyj6{position:relative}._4c5eh{background:0 0;bottom:0;left:0;position:absolute;right:0;top:0;z-index:-1}._o6ctz{border:none;display:block;height:100%;margin:0;padding:0;width:100%}";
}, function(module, next_scope, callback) {
  (function(globe) {
    /**
     * @return {undefined}
     */
    function MutationObserver() {
    }
    /**
     * @param {?} subject
     * @param {?} object
     * @return {undefined}
     */
    MutationObserver.prototype.observe = function(subject, object) {
    };
    /**
     * @return {undefined}
     */
    MutationObserver.prototype.disconnect = function() {
    };
    /**
     * @return {?}
     */
    MutationObserver.prototype.takeRecords = function() {
      return null;
    };
    var JsDiff = globe.MutationObserver || (globe.WebKitMutationObserver || MutationObserver);
    module.exports = JsDiff;
  }).call(next_scope, callback(19));
}, function(dataAndEvents, record, ret) {
  /**
   * @param {Object} object
   * @param {Array} keys
   * @return {?}
   */
  function hasKey(object, keys) {
    var old = {};
    var name;
    for (name in object) {
      if (!(keys.indexOf(name) >= 0)) {
        if (Object.prototype.hasOwnProperty.call(object, name)) {
          old[name] = object[name];
        }
      }
    }
    return old;
  }
  /**
   * @return {undefined}
   */
  function attributes() {
    newValue.apply(this, arguments);
  }
  var newValue;
  var basePrototype;
  var option = ret(255);
  var rreturn = ret(0);
  ret.n(rreturn);
  basePrototype = (newValue = rreturn.PureComponent) && newValue.prototype;
  Object.assign(attributes, newValue);
  /** @type {function (): undefined} */
  (attributes.prototype = Object.create(basePrototype)).constructor = attributes;
  attributes.__superConstructor__ = newValue;
  /**
   * @return {undefined}
   */
  attributes.prototype.componentDidMount = function() {
    this.$DOMListener1();
  };
  /**
   * @return {undefined}
   */
  attributes.prototype.componentDidUpdate = function() {
    this.$DOMListener2();
    this.$DOMListener1();
  };
  /**
   * @return {undefined}
   */
  attributes.prototype.componentWillUnmount = function() {
    this.$DOMListener2();
  };
  /**
   * @return {undefined}
   */
  attributes.prototype.$DOMListener1 = function() {
    var events = this.props;
    var originatingTarget = (events.event, events.handler, events.target, hasKey(events, ["event", "handler", "target"]));
    this.$DOMListener3 = option.default.add(this.props.target, this.props.event, this.props.handler, originatingTarget);
  };
  /**
   * @return {undefined}
   */
  attributes.prototype.$DOMListener2 = function() {
    this.$DOMListener3.remove();
  };
  /**
   * @return {?}
   */
  attributes.prototype.render = function() {
    return null;
  };
  /** @type {function (): undefined} */
  record.a = attributes;
}, function(module, dataAndEvents, require) {
  /**
   * @param {Function} val
   * @return {?}
   */
  function format(val) {
    if ("string" == typeof val) {
      return val;
    }
    if (sprintf(val)) {
      return moment(val, format) + "";
    }
    if (inspect(val)) {
      return matches ? matches.call(val) : "";
    }
    /** @type {string} */
    var sval = val + "";
    return "0" == sval && 1 / val == -l ? "-0" : sval;
  }
  var ctor = require(51);
  var moment = require(943);
  var sprintf = require(68);
  var inspect = require(919);
  /** @type {number} */
  var l = 1 / 0;
  var ids = ctor ? ctor.prototype : void 0;
  var matches = ids ? ids.toString : void 0;
  /** @type {function (Function): ?} */
  module.exports = format;
}, , function(dataAndEvents, deepDataAndEvents, require) {
  var walk = require(1);
  var nodes = require(914);
  walk(nodes, "is40d15782");
}, function(module, dataAndEvents) {
  /** @type {string} */
  module.exports = "._hql7s,._o2wxh{background-color:#fff;border-bottom:1px solid #dbdbdb}._o2wxh:last-child{border-bottom-width:0}._hql7s{color:#999;font-size:16px;font-weight:600;line-height:50px;text-align:center}@media (min-width:736px){._hql7s,._o2wxh{min-width:510px}}@media (min-width:414px) and (max-width:735px){._cepxb,._hql7s,._o2wxh{width:100%}}@media (min-width:414px){._cepxb{margin:0 auto}}";
}, function(dataAndEvents, deepDataAndEvents, $sanitize) {
  var isUndefined = $sanitize(1);
  var suiteView = $sanitize(916);
  isUndefined(suiteView, "is577659fb");
}, function(module, dataAndEvents) {
  /** @type {string} */
  module.exports = "._h74gn{background:#fff;border:none;color:#262626;cursor:pointer;font-size:16px;font-weight:400;line-height:50px;margin:0;overflow:hidden;padding:0 16px;text-align:center;text-overflow:ellipsis;white-space:nowrap;width:100%}._h74gn:hover{background-color:#efefef}";
}, function(dataAndEvents, deepDataAndEvents, $sanitize) {
  var isUndefined = $sanitize(1);
  var suiteView = $sanitize(918);
  isUndefined(suiteView, "is7b235645");
}, function(module, dataAndEvents) {
  /** @type {string} */
  module.exports = "._kg3s8{-webkit-box-align:stretch;-webkit-align-items:stretch;-ms-flex-align:stretch;align-items:stretch;background-color:#efefef;margin-bottom:0;overflow:auto}";
}, function(module, dataAndEvents, require) {
  var getActual = require(30);
  var inspect = require(31);
  /** @type {string} */
  var r = "[object Symbol]";
  /**
   * @param {Function} types
   * @return {?}
   */
  module.exports = function(types) {
    return "symbol" == typeof types || inspect(types) && getActual(types) == r;
  };
}, function(dataAndEvents, deepDataAndEvents, require) {
  var walk = require(1);
  var nodes = require(921);
  walk(nodes, "is6c8c54b5");
}, function(module, dataAndEvents) {
  /** @type {string} */
  module.exports = "._e3il2{background-color:#efefef;display:block;width:100%}._4rbun{display:block;overflow:hidden;padding-bottom:100%}._2di5p,._si7dy{left:0;position:absolute;top:0}._2di5p{height:100%;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;width:100%}._si7dy{bottom:0;right:0}";
}, function(dataAndEvents, type, self) {
  self.d(type, "a", function() {
    return that;
  });
  self.d(type, "b", function() {
    return obj;
  });
  var update = self(15);
  var throttledUpdate = self.n(update);
  var dom = self(0);
  self.n(dom);
  self(21);
  self(980);
  self(64);
  var that = throttledUpdate()({
    left : null,
    right : null
  });
  var obj = throttledUpdate()({
    default : null,
    sidecar : null
  });
  var tagDef = {
    variant : obj.default
  };
  /**
   * @param {Function} types
   * @return {?}
   */
  var init = function(types) {
    var node = types.direction;
    var enabled = types.enabled;
    var variant = types.variant;
    if (!enabled) {
      return null;
    }
    /** @type {boolean} */
    var opt_message = node === that.left;
    /** @type {boolean} */
    var active = node === that.right;
    /** @type {boolean} */
    var comment = variant === obj.default;
    /** @type {boolean} */
    var fade = variant === obj.sidecar;
    return dom.createElement("button", {
      className : (comment ? "_8scx2" : "") + (opt_message ? " _742f7" : "") + (active ? " _r48jm" : ""),
      onClick : types.onClick,
      tabIndex : -1
    }, dom.createElement("div", {
      className : (comment && opt_message ? "_559g7" : "") + (comment && active ? " _4wlr9" : "") + (comment ? " coreSpritePagingChevron" : "") + (fade && opt_message ? " coreSpriteLeftChevron" : "") + (fade && active ? " coreSpriteRightChevron" : "")
    }));
  };
  init.defaultProps = tagDef;
  /** @type {function (Function): ?} */
  type.c = init;
}, , , , function(dataAndEvents, record, parse) {
  /**
   * @param {number} value
   * @return {?}
   */
  function appendModelPrefix(value) {
    return "feed" === value || value === object.a.feedPage ? "feed" : "profile";
  }
  /**
   * @param {?} el
   * @param {?} b
   * @return {?}
   */
  function animate(el, b) {
    /** @type {number} */
    var rows = el.width / b;
    return{
      height : el.height / rows,
      width : b
    };
  }
  /**
   * @param {Function} tests
   * @return {undefined}
   */
  function attributes(tests) {
    var me = this;
    parent.constructor.call(this, tests);
    /**
     * @param {?} millis
     * @param {?} until
     * @return {undefined}
     */
    this.$SensitivityOverlay5 = function(millis, until) {
      me.setState({
        containerWidth : millis
      });
    };
    /**
     * @param {?} ast
     * @return {undefined}
     */
    this.$SensitivityOverlay3 = function(ast) {
      ast.preventDefault();
      me.$SensitivityOverlay4("instagram_organic_gate_clear");
      if (me.props.onShowPostClicked) {
        me.props.onShowPostClicked();
      }
    };
    /**
     * @param {string} deepDataAndEvents
     * @return {undefined}
     */
    this.$SensitivityOverlay4 = function(deepDataAndEvents) {
      var fullOtherName = appendModelPrefix(me.props.analyticsContext);
      Object(url.logGatingEvent)(deepDataAndEvents, {
        a_pk : me.props.ownerId,
        containermodule : fullOtherName,
        gate_type : "sensitive",
        m_pk : me.props.mediaId + "_" + me.props.ownerId,
        m_t : me.props.isPhoto ? "1" : "2",
        source_of_action : fullOtherName
      });
    };
    /** @type {boolean} */
    this.$SensitivityOverlay1 = false;
    this.state = {
      containerWidth : 0
    };
  }
  var ctor;
  var parent;
  var url = parse(7);
  var object = parse(253);
  var o = parse(514);
  var dom = parse(0);
  var child = (parse.n(dom), parse(887));
  parse(21);
  parse(963);
  ctor = dom.Component;
  parent = ctor && ctor.prototype;
  Object.assign(attributes, ctor);
  /** @type {function (Function): undefined} */
  (attributes.prototype = Object.create(parent)).constructor = attributes;
  attributes.__superConstructor__ = ctor;
  /**
   * @param {Object} data
   * @return {?}
   */
  attributes.prototype.$SensitivityOverlay2 = function(data) {
    return data ? dom.createElement("div", {
      className : "_p4skg _rx2oq"
    }, dom.createElement("div", {
      className : "_ctbfc"
    }, dom.createElement("div", {
      className : "_eb5of coreSpriteSensitivityIcon"
    }), dom.createElement("div", {
      className : "_edwik coreSpriteSensitivityIconSmall"
    }), dom.createElement("h2", {
      className : "_cbw0n"
    }, data.title), dom.createElement("h3", {
      className : "_4oh6g"
    }, data.description)), dom.createElement("div", {
      className : "_irjft"
    }, dom.createElement("a", {
      className : "_r2mgi",
      href : "#",
      onClick : this.$SensitivityOverlay3
    }, data.buttons[0]))) : dom.createElement("div", {
      className : "_p4skg"
    }, dom.createElement("div", {
      className : "_ctbfc"
    }, dom.createElement("div", {
      className : "_eb5of coreSpriteSensitivityIcon"
    }), dom.createElement("div", {
      className : "_edwik coreSpriteSensitivityIconSmall"
    })));
  };
  /**
   * @return {?}
   */
  attributes.prototype.render = function() {
    var oldconfig = this.state.containerWidth;
    var that = this.props;
    var dimensions = that.dimensions;
    var failuresLink = void 0 === dimensions ? {
      height : 300,
      width : 300
    } : dimensions;
    var element = that.isVisible;
    return!this.$SensitivityOverlay1 && (element && (this.$SensitivityOverlay1 = true, this.$SensitivityOverlay4("instagram_organic_gate_impression"))), dom.createElement("div", {
      className : "_gq0sr"
    }, dom.createElement(child.a, {
      onResize : this.$SensitivityOverlay5
    }, 0 !== oldconfig && dom.createElement(o.a, {
      dimensions : animate(failuresLink, oldconfig),
      previewData : this.props.previewData
    })), this.$SensitivityOverlay2(this.props.gatingInfo));
  };
  /** @type {function (Function): undefined} */
  record.a = attributes;
}, function(dataAndEvents, type, $) {
  /**
   * @param {Function} tests
   * @return {undefined}
   */
  function attributes(tests) {
    var self = this;
    parent.constructor.call(this, tests);
    /**
     * @param {?} key
     * @param {number} dataAndEvents
     * @return {undefined}
     */
    this.$UserList3 = function(key, dataAndEvents) {
      /** @type {number} */
      var i = self.$UserList4() ? from : argument;
      var val = self.$UserList1[key];
      /** @type {boolean} */
      var remove = dataAndEvents >= i;
      if (self.$UserList1[key] = remove, self.$UserList1.every(function(dataAndEvents) {
        return null != dataAndEvents;
      }) && val !== remove) {
        /** @type {Array.<?>} */
        var top = Object.keys(self.$UserList1).filter(function(timeoutKey) {
          return self.$UserList1[timeoutKey];
        }).map(function(dataAndEvents) {
          return+dataAndEvents;
        });
        if (self.props.onVisibilityChange) {
          self.props.onVisibilityChange(top);
        }
      }
    };
    this.$UserList1 = tests.items.map(function(dataAndEvents) {
      return null;
    });
    this.$UserList2 = new doc.a(this);
  }
  $.d(type, "a", function() {
    return select;
  });
  var ctor;
  var parent;
  var child = $(1048);
  var that = $(382);
  var content = $(11);
  var text = $.n(content);
  var doc = $(264);
  var update = $(6);
  var throttledUpdate = $.n(update);
  var options = $(894);
  var dom = $(0);
  var data = ($.n(dom), $(902));
  var self = $(942);
  var node = $(542);
  var o = $(323);
  var object = $(373);
  var opts = $(899);
  $(1066);
  /**
   * @param {Element} element
   * @return {?}
   */
  var select = function(element) {
    var content = element.children;
    var elementClassName = element.className;
    var length = element.onScrollChange;
    return length && (content = dom.createElement(data.a, {
      onScrollChange : length
    }, content)), dom.createElement("li", {
      className : text()("_6e4x5", elementClassName)
    }, content);
  };
  /** @type {number} */
  var argument = 100;
  /** @type {number} */
  var from = 20;
  ctor = dom.Component;
  parent = ctor && ctor.prototype;
  Object.assign(attributes, ctor);
  /** @type {function (Function): undefined} */
  (attributes.prototype = Object.create(parent)).constructor = attributes;
  attributes.__superConstructor__ = ctor;
  /**
   * @param {Object} options
   * @param {(Node|string)} callback
   * @param {?} deepDataAndEvents
   * @return {?}
   */
  attributes.prototype.$UserList5 = function(options, callback, deepDataAndEvents) {
    var user = options.user;
    /** @type {boolean} */
    var value = this.props.viewerId !== user.id;
    var proceed = this.props.showFollowButton && value;
    return dom.createElement(select, {
      key : user.username,
      onScrollChange : this.props.onVisibilityChange ? this.$UserList2.bind(this.$UserList3, deepDataAndEvents) : null
    }, dom.createElement("div", {
      className : "_npuc5"
    }, dom.createElement("div", {
      className : "_f5wpw"
    }, dom.createElement(o.a, {
      className : "_9irns",
      profilePictureUrl : throttledUpdate()(user.profilePictureUrl),
      size : this.props.userAvatarSize,
      username : user.username
    }), dom.createElement("div", {
      className : "_eryrc"
    }, dom.createElement("div", {
      className : "_2nunc"
    }, dom.createElement(object.a, {
      className : "_o5iw8",
      onClick : this.props.onUsernameClick ? this.$UserList2.bind(this.props.onUsernameClick, deepDataAndEvents) : null,
      username : throttledUpdate()(user.username)
    }), user.isVerified ? dom.createElement(opts.a, {
      className : "_a9num"
    }) : null), dom.createElement("div", {
      className : "_9mmn5"
    }, user.fullName))), dom.createElement("div", {
      className : "_mtnzs"
    }, proceed ? dom.createElement(that.a, {
      analyticsContext : this.props.analyticsContext,
      onClick : this.props.onFollowClick ? this.$UserList2.bind(this.props.onFollowClick, deepDataAndEvents) : void 0,
      relationship : options.relationship,
      userId : user.id,
      viewerLoggedIn : null != this.props.viewerId
    }) : null)), callback && this.$UserList6(user, options.media));
  };
  /**
   * @param {?} data
   * @param {string} m3
   * @return {?}
   */
  attributes.prototype.$UserList6 = function(data, m3) {
    var nv = this;
    var body = void 0;
    if (m3 && m3.length > 0) {
      /** @type {string} */
      var c = m3;
      body = (c = c.slice(0, 3)).map(function(v) {
        return nv.$UserList7(v);
      });
      for (;body.length < 3;) {
        body.push(this.$UserList7({
          code : "@" + String(body.length),
          id : "",
          thumbnailSrc : ""
        }));
      }
    } else {
      body = data.isPrivate ? dom.createElement("h3", {
        className : "_d3nfb"
      }, "Esta conta \u00c3\u00a9 privada. Siga-a para ver fotos.") : dom.createElement("h3", {
        className : "_d3nfb"
      }, "Ainda n\u00c3\u00a3o h\u00c3\u00a1 publica\u00c3\u00a7\u00c3\u00b5es.");
    }
    return dom.createElement("div", {
      className : "_een06"
    }, body);
  };
  /**
   * @param {?} self
   * @return {?}
   */
  attributes.prototype.$UserList7 = function(self) {
    return dom.createElement("div", {
      className : "_4mlxa",
      key : "p" + self.code
    }, self.thumbnailSrc && dom.createElement(options.a, {
      className : "_2apl5",
      rich : true,
      src : self.thumbnailSrc
    }));
  };
  /**
   * @return {?}
   */
  attributes.prototype.$UserList4 = function() {
    return this.props.showPreview && this.props.items.some(function(event) {
      return event.media && event.media.length > 0;
    });
  };
  /**
   * @return {?}
   */
  attributes.prototype.render = function() {
    var jQuery = this;
    var restoreScript = this.$UserList4();
    var me = this.props;
    var cls = me.className;
    var value = me.isLoading;
    var children = me.items;
    var MSG_VISUAL_EDITOR = me.subHeader;
    /** @type {boolean} */
    var useLargerImages = !!value && 0 === children.length;
    return dom.createElement("ul", {
      className : text()(cls, "_b9n99")
    }, this.props.maybeShowFbConnectUnit && dom.createElement(child.a, {
      className : "_lyjak",
      analyticsContext : this.props.analyticsContext
    }), MSG_VISUAL_EDITOR && (!value && dom.createElement(select, {
      className : "_ar2c8"
    }, dom.createElement(self.a, null, MSG_VISUAL_EDITOR))), dom.createElement("div", {
      className : value ? "" : "_p4iax"
    }, children.map(function(deep, deepDataAndEvents) {
      return jQuery.$UserList5(deep, restoreScript, deepDataAndEvents);
    }), !!value && dom.createElement(select, {
      className : "_l0pt6" + (useLargerImages ? " _fk40f" : "")
    }, dom.createElement(node.a, {
      component : "UserList",
      timingEvent : "loadList",
      size : useLargerImages ? "medium" : "small"
    })), !!this.props.footer && dom.createElement(select, null, this.props.footer)));
  };
  attributes.defaultProps = {
    showFollowButton : true,
    showPreview : true
  };
  /** @type {function (Function): undefined} */
  type.b = attributes;
}, function(dataAndEvents, type, d) {
  /**
   * @param {Function} tests
   * @return {?}
   */
  function testCase(tests) {
    return!tests.suggestedUsers.viewerHasFBConnect;
  }
  var r = d(88);
  var showChildren = d(243);
  /** @type {function (Function): ?} */
  type.e = testCase;
  d.d(type, "f", function() {
    return node;
  });
  /**
   * @param {Function} tests
   * @param {string} key
   * @return {?}
   */
  type.a = function(tests, key) {
    return!!tests.suggestedUsers.profileChainingFailures.get(key);
  };
  /**
   * @param {Function} tests
   * @param {string} c
   * @return {?}
   */
  type.b = function(tests, c) {
    return tests.suggestedUsers.profileChainingSuggestions.get(c);
  };
  d.d(type, "c", function() {
    return a;
  });
  /**
   * @param {Function} tests
   * @return {?}
   */
  type.d = function(tests) {
    return tests.suggestedUsers.isLoadingSuggestions && 0 === tests.suggestedUsers.ids.size;
  };
  var node = Object(showChildren.createSelector)(testCase, function(ioargs) {
    return ioargs.fb.status !== r.a.ineligible;
  }, function(dataAndEvents, deepDataAndEvents) {
    return!dataAndEvents && deepDataAndEvents;
  });
  var a = Object(showChildren.createSelector)(function(req) {
    return req.suggestedUsers.ids;
  }, function(cursor) {
    return cursor.toArray();
  });
}, function(dataAndEvents, meta, $) {
  /**
   * @return {?}
   */
  function attributes() {
    var e;
    var _ref2;
    var self = this;
    /** @type {number} */
    var l = arguments.length;
    /** @type {Array} */
    var args = Array(l);
    /** @type {number} */
    var i = 0;
    for (;i < l;i++) {
      args[i] = arguments[i];
    }
    return e = (_ref2 = value.constructor).call.apply(_ref2, [this].concat(args)), this.$OptionsModal1 = function() {
      self.props.history.push(Object(options.e)(self.props.code));
    }, e;
  }
  var ctor;
  var value;
  var options = $(55);
  var object = $(888);
  var opts = $(885);
  var obj = $(234);
  var self = $(0);
  var method = ($.n(self), $(44));
  var item = $(886);
  var target = $(252);
  ctor = self.Component;
  value = ctor && ctor.prototype;
  Object.assign(attributes, ctor);
  /** @type {function (): ?} */
  (attributes.prototype = Object.create(value)).constructor = attributes;
  attributes.__superConstructor__ = ctor;
  /**
   * @return {?}
   */
  attributes.prototype.render = function() {
    /** @type {boolean} */
    var callback = this.props.viewportWidth <= target.c;
    var meta = self.createElement(object.a, {
      onCancel : this.props.onClose
    }, this.props.hasGoToOption && self.createElement(opts.a, {
      onClick : this.$OptionsModal1
    }, "Ir para a publica\u00c3\u00a7\u00c3\u00a3o"), this.props.hasDeleteOption && self.createElement(opts.a, {
      onClick : this.props.onDeleteClick
    }, "Excluir"), this.props.hasReportInappropriateOption && self.createElement(opts.a, {
      onClick : this.props.onReportInappropriateClick
    }, "Denunciar conte\u00c3\u00bado impr\u00c3\u00b3prio"), this.props.hasEmbedOption && self.createElement(opts.a, {
      onClick : this.props.onEmbedCodeClick
    }, "Incorporar"));
    return callback ? self.createElement(item.a, {
      onClose : this.props.onClose
    }, meta) : self.createElement(obj.a, {
      onClose : this.props.onClose
    }, meta);
  };
  meta.a = Object(method.withRouter)(attributes);
}, function(dataAndEvents, record, jQuery) {
  /**
   * @param {Function} tests
   * @return {undefined}
   */
  function attributes(tests) {
    var me = this;
    parent.constructor.call(this, tests);
    /**
     * @param {Function} vcs
     * @return {undefined}
     */
    this.$ReportInappropriateModal2 = function(vcs) {
      me.setState({
        /** @type {Function} */
        mode : vcs
      });
    };
    /**
     * @param {?} dataAndEvents
     * @return {undefined}
     */
    this.$ReportInappropriateModal3 = function(dataAndEvents) {
      Object(options.a)(current.c(Object(target.c)(me.props.postId), {
        reason_id : dataAndEvents
      }).then(function(dataAndEvents) {
        if (me.props.onReport) {
          me.props.onReport();
        }
        me.setState({
          mode : self.reportSubmitted
        });
      }));
    };
    /**
     * @param {?} url
     * @return {undefined}
     */
    this.$ReportInappropriateModal4 = function(url) {
      window.open(url);
      me.props.onClose();
    };
    this.state = {
      mode : null
    };
    this.$ReportInappropriateModal1 = new object.a(this);
  }
  var ctor;
  var parent;
  var node = jQuery(66);
  var current = jQuery(10);
  var scripts = jQuery(15);
  var mapped = jQuery.n(scripts);
  var target = jQuery(55);
  var object = jQuery(264);
  var that = jQuery(888);
  var o = jQuery(885);
  var el = jQuery(234);
  var doc = jQuery(0);
  var options = (jQuery.n(doc), jQuery(17));
  var opts = jQuery(886);
  var obj = jQuery(252);
  jQuery(931);
  var self = mapped()({
    proprietyOptions : null,
    reportSubmitted : null,
    riskOptions : null
  });
  var buf = {
    spamOrScam : 1,
    selfHarm : 2,
    harassment : 7,
    drugUse : 3,
    nudity : 4,
    violence : 5,
    hateSpeech : 6
  };
  ctor = doc.Component;
  parent = ctor && ctor.prototype;
  Object.assign(attributes, ctor);
  /** @type {function (Function): undefined} */
  (attributes.prototype = Object.create(parent)).constructor = attributes;
  attributes.__superConstructor__ = ctor;
  /**
   * @return {?}
   */
  attributes.prototype.$ReportInappropriateModal5 = function() {
    return this.props.viewportWidth <= obj.c;
  };
  /**
   * @return {?}
   */
  attributes.prototype.renderChoices = function() {
    var inserted = void 0;
    switch(this.state.mode) {
      case self.riskOptions:
        inserted = this.renderRiskChoices();
        break;
      case self.proprietyOptions:
        inserted = this.renderProprietyChoices();
        break;
      default:
        inserted = this.renderRootChoices();
    }
    return doc.createElement(that.a, {
      onCancel : this.props.onClose
    }, inserted);
  };
  /**
   * @return {?}
   */
  attributes.prototype.renderGratitude = function() {
    return doc.createElement("div", {
      className : "_lelt4"
    }, doc.createElement("p", null, "Agradecemos por denunciar esta publica\u00c3\u00a7\u00c3\u00a3o. Seus coment\u00c3\u00a1rios s\u00c3\u00a3o importantes para nos ajudar a manter a comunidade do Instagram segura."), doc.createElement(node.default, {
      className : "_bimh7",
      onClick : this.props.onClose
    }, "Concluir"));
  };
  /**
   * @return {?}
   */
  attributes.prototype.renderProprietyChoices = function() {
    return[doc.createElement(o.a, {
      key : "nudity",
      onClick : this.$ReportInappropriateModal3.bind(this, buf.nudity)
    }, "Nudez ou pornografia"), doc.createElement(o.a, {
      key : "violence",
      onClick : this.$ReportInappropriateModal3.bind(this, buf.violence)
    }, "Viol\u00c3\u00aancia expl\u00c3\u00adcita"), doc.createElement(o.a, {
      key : "hateSpeech",
      onClick : this.$ReportInappropriateModal3.bind(this, buf.hateSpeech)
    }, "Simbologia ou discurso de incita\u00c3\u00a7\u00c3\u00a3o ao \u00c3\u00b3dio"), doc.createElement(o.a, {
      key : "ip",
      onClick : this.$ReportInappropriateModal4.bind(this, "https://help.instagram.com/535503073130320/")
    }, "Viola\u00c3\u00a7\u00c3\u00a3o de propriedade intelectual")];
  };
  /**
   * @return {?}
   */
  attributes.prototype.renderRiskChoices = function() {
    return[doc.createElement(o.a, {
      key : "selfHarm",
      onClick : this.$ReportInappropriateModal3.bind(this, buf.selfHarm)
    }, "Autoflagela\u00c3\u00a7\u00c3\u00a3o", " ", doc.createElement("span", {
      className : "_a7h6d"
    }, "Dist\u00c3\u00barbios alimentares, automutila\u00c3\u00a7\u00c3\u00a3o ou conte\u00c3\u00bado suicida")), doc.createElement(o.a, {
      key : "harassment",
      onClick : this.$ReportInappropriateModal3.bind(this, buf.harassment)
    }, "Ass\u00c3\u00a9dio ou bullying"), doc.createElement(o.a, {
      key : "drugUse",
      onClick : this.$ReportInappropriateModal3.bind(this, buf.drugUse)
    }, "Uso de drogas")];
  };
  /**
   * @return {?}
   */
  attributes.prototype.renderRootChoices = function() {
    return[doc.createElement(o.a, {
      key : "dislike",
      onClick : this.$ReportInappropriateModal1.bind(this.$ReportInappropriateModal4, "https://help.instagram.com/426700567389543/")
    }, this.props.isVideo ? "N\u00c3\u00a3o gosto desse v\u00c3\u00addeo" : "Eu n\u00c3\u00a3o gostei dessa foto"), doc.createElement(o.a, {
      key : "spamOrScam",
      onClick : this.$ReportInappropriateModal1.bind(this.$ReportInappropriateModal3, buf.spamOrScam)
    }, this.props.isVideo ? "Esse v\u00c3\u00addeo \u00c3\u00a9 spam ou fraude" : "Essa foto \u00c3\u00a9 spam ou fraude"), doc.createElement(o.a, {
      key : "risk",
      onClick : this.$ReportInappropriateModal1.bind(this.$ReportInappropriateModal2, self.riskOptions)
    }, this.props.isVideo ? "Esse v\u00c3\u00addeo coloca pessoas em risco" : "Essa foto coloca pessoas em risco"), doc.createElement(o.a, {
      key : "propriety",
      onClick : this.$ReportInappropriateModal1.bind(this.$ReportInappropriateModal2, self.proprietyOptions)
    }, this.props.isVideo ? "Esse v\u00c3\u00addeo n\u00c3\u00a3o deveria estar no Instagram" : "Essa foto n\u00c3\u00a3o deveria estar no Instagram")];
  };
  /**
   * @return {?}
   */
  attributes.prototype.render = function() {
    var context = {
      key : this.state.mode,
      onClose : this.props.onClose
    };
    var inserted = this.state.mode === self.reportSubmitted ? this.renderGratitude() : this.renderChoices();
    return this.$ReportInappropriateModal5() ? doc.createElement(opts.a, context, inserted) : doc.createElement(el.a, context, inserted);
  };
  /** @type {function (Function): undefined} */
  record.a = attributes;
}, function(dataAndEvents, deepDataAndEvents, $sanitize) {
  var isUndefined = $sanitize(1);
  var suiteView = $sanitize(932);
  isUndefined(suiteView, "is71d45fb4");
}, function(module, dataAndEvents) {
  /** @type {string} */
  module.exports = "._a7h6d{color:#999;display:block;font-size:12px;font-weight:400;line-height:16px;margin-top:-12px;margin-bottom:12px}._lelt4{background-color:#fff;border-color:#efefef;border-radius:4px;border-style:solid;border-width:1px;color:#262626;margin:0 auto;max-width:414px;padding:16px}._bimh7{-webkit-align-self:center;-ms-flex-item-align:center;align-self:center;margin-top:16px}";
}, function(dataAndEvents, fnc, require) {
  /**
   * @param {Function} tests
   * @return {undefined}
   */
  function gl(tests) {
    var self = this;
    parent.constructor.call(this, tests);
    /**
     * @param {?} dataAndEvents
     * @return {undefined}
     */
    this.$HScrollAnimationController8 = function(dataAndEvents) {
      self.setState(function(store, options) {
        var onComplete = options.onAnimationEnd;
        var millis = store.futureScrollLeft;
        return self.$HScrollAnimationController9(onComplete, store.currentScrollLeft, millis), {
          currentScrollLeft : millis,
          futureScrollLeft : millis
        };
      });
    };
    /**
     * @param {?} event
     * @return {undefined}
     */
    this.$HScrollAnimationController17 = function(event) {
      if (!self.isAnimated()) {
        var orgEvent = event;
        var deltaX = orgEvent.deltaX;
        var objUid = orgEvent.deltaMode;
        self.setState(function(el, dataAndEvents) {
          var scrollRight = dataAndEvents.onUserScroll;
          var to = el.currentScrollLeft;
          if (null == self.$HScrollAnimationController18) {
            self.$HScrollAnimationController18 = to;
          }
          var from = self.$HScrollAnimationController18;
          /** @type {Array} */
          var map = [1, 16, el.outerWidth];
          return to += deltaX * map[objUid], to = self.$HScrollAnimationController3(to), null != self.$HScrollAnimationController19 && h.a.clearTimeout(self.$HScrollAnimationController19), self.$HScrollAnimationController19 = h.a.setTimeout(self.$HScrollAnimationController20, ms), null != scrollRight && scrollRight({
            scrollLeft : to,
            scrollRight : self.$HScrollAnimationController14(to)
          }), to - from > ch && (self.$HScrollAnimationController21 = true), self.$HScrollAnimationController4(), {
            currentScrollLeft : to,
            futureScrollLeft : to
          };
        });
      }
    };
    /**
     * @param {Object} orig
     * @return {undefined}
     */
    this.$HScrollAnimationController22 = function(orig) {
      if (orig.touches.length > 1 || self.isAnimated()) {
        /** @type {null} */
        self.$HScrollAnimationController23 = null;
      } else {
        self.$HScrollAnimationController23 = orig.touches[0].clientX;
        self.$HScrollAnimationController13 = self.state.currentScrollLeft;
      }
      self.$HScrollAnimationController4();
    };
    /**
     * @param {Object} e
     * @return {undefined}
     */
    this.$HScrollAnimationController24 = function(e) {
      if (null != self.$HScrollAnimationController23 && (null != self.$HScrollAnimationController13 && !self.isAnimated())) {
        var t = self.$HScrollAnimationController13;
        /** @type {number} */
        var x = t - (e.touches[0].clientX - self.$HScrollAnimationController23);
        if ((x = self.$HScrollAnimationController15(x)) - t > ch) {
          /** @type {boolean} */
          self.$HScrollAnimationController21 = true;
        }
        self.setState(function(deepDataAndEvents, dataAndEvents) {
          var scrollRight = dataAndEvents.onUserScroll;
          return null != scrollRight && scrollRight({
            scrollLeft : x,
            scrollRight : self.$HScrollAnimationController14(x)
          }), {
            currentScrollLeft : x,
            futureScrollLeft : x
          };
        });
      }
    };
    /**
     * @param {?} dataAndEvents
     * @return {undefined}
     */
    this.$HScrollAnimationController25 = function(dataAndEvents) {
      if (null != self.$HScrollAnimationController23) {
        self.$HScrollAnimationController20();
      }
      /** @type {null} */
      self.$HScrollAnimationController23 = null;
    };
    /**
     * @param {?} dataAndEvents
     * @return {undefined}
     */
    this.$HScrollAnimationController20 = function(dataAndEvents) {
      var scrollRight = self.props.onUserScrollEnd;
      if (null != scrollRight) {
        var scrollLeft = self.state.currentScrollLeft;
        scrollRight({
          scrollLeft : scrollLeft,
          scrollRight : self.$HScrollAnimationController14(scrollLeft)
        });
      }
      /** @type {boolean} */
      self.$HScrollAnimationController21 = false;
    };
    /**
     * @param {UIEvent} computed
     * @return {undefined}
     */
    this.$HScrollAnimationController26 = function(computed) {
      /** @type {UIEvent} */
      var result = computed;
      var offset = self.state.futureScrollLeft;
      if (37 === result.keyCode) {
        if (self.props.snapPoints) {
          self.scrollTo(self.$HScrollAnimationController10(offset));
        } else {
          self.scrollBy(-x);
        }
      } else {
        if (39 === result.keyCode) {
          if (self.props.snapPoints) {
            self.scrollTo(self.$HScrollAnimationController11(offset));
          } else {
            self.scrollBy(x);
          }
        }
      }
    };
    /**
     * @param {Event} event
     * @return {?}
     */
    this.$HScrollAnimationController27 = function(event) {
      if (self.$HScrollAnimationController21 && event.cancelable) {
        return event.preventDefault(), event.stopPropagation(), false;
      }
    };
    /**
     * @param {?} millis
     * @param {?} until
     * @return {undefined}
     */
    this.$HScrollAnimationController1 = function(millis, until) {
      self.$HScrollAnimationController28(self.state.innerWidth, millis, until);
    };
    /**
     * @param {?} millis
     * @param {?} until
     * @return {undefined}
     */
    this.$HScrollAnimationController29 = function(millis, until) {
      self.$HScrollAnimationController28(millis, self.state.outerWidth, until);
    };
    /**
     * @param {(Function|string)} width
     * @param {number} millis
     * @param {?} arg
     * @return {undefined}
     */
    this.$HScrollAnimationController28 = function(width, millis, arg) {
      if (self.$HScrollAnimationController30) {
        self.setState(function(ev, child) {
          var next = child.onResize;
          var pos = self.$HScrollAnimationController3(ev.futureScrollLeft, width, millis);
          var algnPos = self.$HScrollAnimationController14(pos, width, millis);
          return next && next({
            scrollLeft : pos,
            scrollRight : algnPos
          }), {
            currentScrollLeft : pos,
            futureScrollLeft : pos,
            innerWidth : width,
            outerWidth : millis,
            height : arg
          };
        });
      }
    };
    /**
     * @param {?} deepDataAndEvents
     * @param {?} arg
     * @return {undefined}
     */
    this.$HScrollAnimationController31 = function(deepDataAndEvents, arg) {
      var hasKey = self.props.onVisibilityChange;
      if (null != hasKey) {
        var result = self.$HScrollAnimationController16(arg);
        if (!resolved()(self.$HScrollAnimationController32, result)) {
          hasKey(result);
          self.$HScrollAnimationController32 = result;
        }
      }
    };
    this.$HScrollAnimationController1 = Object(helper.a)(this.$HScrollAnimationController1, r20, this);
    this.state = {
      currentScrollLeft : 0,
      futureScrollLeft : 0,
      innerWidth : 0,
      outerWidth : 0,
      height : 0
    };
  }
  /**
   * @param {Function} tests
   * @return {undefined}
   */
  function attributes(tests) {
    var el = this;
    proto.constructor.call(this, tests);
    /**
     * @param {string} right
     * @param {?} dataAndEvents
     * @return {undefined}
     */
    this.$HScrollContainer2 = function(right, dataAndEvents) {
      if (null != el.props.onLogEvent) {
        el.props.onLogEvent({
          source : "hscroll",
          type : "click"
        });
      }
      var distX = el.getClickScrollIncrement();
      if (!(el.$HScrollContainer1 instanceof tr)) {
        throttledUpdate()(0);
      }
      el.$HScrollContainer1.scrollBy("left" === right ? -distX : distX);
    };
    /**
     * @param {?} millis
     * @return {undefined}
     */
    this.$HScrollContainer3 = function(millis) {
      el.$HScrollContainer4(millis);
      if (el.props.onResize) {
        el.props.onResize(millis);
      }
    };
    /**
     * @param {?} millis
     * @return {undefined}
     */
    this.$HScrollContainer5 = function(millis) {
      if (null != el.props.onLogEvent) {
        el.props.onLogEvent({
          source : "hscroll",
          type : "scroll"
        });
      }
      el.$HScrollContainer4(millis);
    };
    /**
     * @param {?} millis
     * @return {undefined}
     */
    this.$HScrollContainer4 = function(millis) {
      var horizontalScrollPos = millis.scrollLeft;
      var scrollRight = millis.scrollRight;
      el.setState({
        leftPagerEnabled : horizontalScrollPos > 0,
        rightPagerEnabled : scrollRight > 0
      });
    };
    /**
     * @param {?} opt_attributes
     * @return {undefined}
     */
    this.$HScrollContainer6 = function(opt_attributes) {
      if (!(el.$HScrollContainer1 instanceof tr)) {
        throttledUpdate()(0);
      }
      if (null != el.props.snapPoints) {
        el.$HScrollContainer1.scrollBy(0);
      }
    };
    /**
     * @param {Object} event
     * @return {undefined}
     */
    this.$HScrollContainer7 = function(event) {
      el.$HScrollContainer4(event.to);
    };
    this.state = {
      leftPagerEnabled : false,
      rightPagerEnabled : false
    };
  }
  /**
   * @param {Function} tests
   * @return {undefined}
   */
  function opt_attributes(tests) {
    var me = this;
    value.constructor.call(this, tests);
    /**
     * @return {undefined}
     */
    this.$HScrollCardContainer1 = function() {
      me.setState({
        containerWidth : Object(Block.findDOMNode)(me).offsetWidth
      });
    };
    /**
     * @param {Object} pos
     * @return {undefined}
     */
    this.$HScrollCardContainer2 = function(pos) {
      if (0 !== pos.width) {
        var props = me.props;
        var type = props.children;
        var length = props.cardWidth;
        var i = props.gapWidth;
        var ifVertElseHor = props.onVisibilityChange;
        if (me.setState({
          firstRendered : Math.floor((pos.left - actualWidth) / (length + i)),
          lastRendered : Math.floor((pos.right + actualWidth) / (length + i))
        }), ifVertElseHor) {
          var val = dom.Children.count(type);
          /** @type {number} */
          var top = Math.floor(pos.left / (length + i));
          /** @type {number} */
          var height = Math.floor(pos.right / (length + i));
          /** @type {number} */
          top = Math.max(0, Math.min(val, top));
          /** @type {number} */
          height = Math.max(0, Math.min(val, height));
          if (!(me.$HScrollCardContainer3 === top && me.$HScrollCardContainer4 === height)) {
            ifVertElseHor(top, height);
            me.$HScrollCardContainer3 = top;
            /** @type {number} */
            me.$HScrollCardContainer4 = height;
          }
        }
      }
    };
    this.state = {
      containerWidth : 0,
      firstRendered : 0,
      lastRendered : ua.canUseDOM ? this.props.initialRenderedCount - 1 : 1 / 0
    };
  }
  /**
   * @param {Object} node
   * @return {?}
   */
  function create(node) {
    var w = node.cardWidth;
    var children = node.children;
    var val = node.collapsed;
    var x = node.gapWidth;
    var len = node.unrendered;
    return dom.createElement("li", {
      className : "_td2ww",
      style : {
        opacity : val ? 0 : 1,
        width : val ? 0 : w + x
      }
    }, !len && dom.createElement("div", {
      className : "_cxr3u",
      style : {
        marginLeft : x,
        width : w
      }
    }, children));
  }
  var state;
  var parent;
  var ua = require(9);
  var helper = require(118);
  var nodes = require(255);
  var h = require(85);
  var update = require(3);
  var throttledUpdate = require.n(update);
  var util = require(11);
  var templateFunc = require.n(util);
  var p = require(6);
  var ntf = require.n(p);
  var dom = require(0);
  var Block = require(27);
  var o = require(887);
  var path = require(979);
  var resolved = require.n(path);
  require(977);
  /** @type {number} */
  var r20 = 50;
  /** @type {number} */
  var ms = 300;
  /** @type {number} */
  var ch = 30;
  /** @type {number} */
  var x = 20;
  state = dom.PureComponent;
  parent = state && state.prototype;
  Object.assign(gl, state);
  /** @type {function (Function): undefined} */
  (gl.prototype = Object.create(parent)).constructor = gl;
  gl.__superConstructor__ = state;
  /**
   * @param {Function} deepDataAndEvents
   * @return {?}
   */
  gl.prototype.isAnimated = function(deepDataAndEvents) {
    return(deepDataAndEvents = deepDataAndEvents || this.state).currentScrollLeft !== deepDataAndEvents.futureScrollLeft;
  };
  /**
   * @param {string} mayParseLabeledStatementInstead
   * @return {undefined}
   */
  gl.prototype.scrollTo = function(mayParseLabeledStatementInstead) {
    var r20 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
    this.scrollBy(mayParseLabeledStatementInstead - this.state.futureScrollLeft, r20);
  };
  /**
   * @param {number} x
   * @return {undefined}
   */
  gl.prototype.scrollBy = function(x) {
    var self = this;
    var config = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
    var defaults = config.snap;
    var skipStatic = void 0 === defaults || defaults;
    var index = config.animated;
    var id = void 0 === index || index;
    this.setState(function(annotation, node) {
      skipStatic = skipStatic && null != node.snapPoints;
      var part = annotation.futureScrollLeft + x;
      if (skipStatic && (part = self.$HScrollAnimationController2(part)), part = self.$HScrollAnimationController3(part), self.$HScrollAnimationController4(), null != self.$HScrollAnimationController5 && self.$HScrollAnimationController5(), !id) {
        return{
          currentScrollLeft : part,
          futureScrollLeft : part
        };
      }
      var g = self.$HScrollAnimationController6();
      return self.$HScrollAnimationController7 || throttledUpdate()(0), self.$HScrollAnimationController5 = nodes.default.add(self.$HScrollAnimationController7, "transitionend", self.$HScrollAnimationController8).remove, self.$HScrollAnimationController9(node.onAnimationStart, g, part), {
        currentScrollLeft : g,
        futureScrollLeft : part
      };
    });
  };
  /**
   * @param {(boolean|number|string)} responder
   * @return {?}
   */
  gl.prototype.$HScrollAnimationController10 = function(responder) {
    var children = this.props.snapPoints;
    return this.$HScrollAnimationController2(responder, children && children.filter(function(dataAndEvents) {
      return dataAndEvents < responder;
    }), [0]);
  };
  /**
   * @param {(boolean|number|string)} responder
   * @return {?}
   */
  gl.prototype.$HScrollAnimationController11 = function(responder) {
    var children = this.props.snapPoints;
    return this.$HScrollAnimationController2(responder, children && children.filter(function(dataAndEvents) {
      return dataAndEvents > responder;
    }), [this.state.innerWidth - this.state.outerWidth]);
  };
  /**
   * @param {?} adjust
   * @return {?}
   */
  gl.prototype.$HScrollAnimationController12 = function(adjust) {
    return Math.abs(adjust) >= this.state.outerWidth / 6;
  };
  /**
   * @param {?} cur
   * @param {Array} messages
   * @param {Array} data
   * @return {?}
   */
  gl.prototype.$HScrollAnimationController2 = function(cur, messages, data) {
    if (!(null != (messages = messages || this.props.snapPoints))) {
      throttledUpdate()(0);
    }
    data = data || [0, this.state.innerWidth - this.state.outerWidth];
    /**
     * @param {number} v
     * @return {?}
     */
    var toNumber = function(v) {
      return Math.abs(v - cur);
    };
    var end = this.$HScrollAnimationController13 || 0;
    var require = this.$HScrollAnimationController12(toNumber(end));
    var i = end < cur && require;
    var freeRequire = end > cur && require;
    /** @type {number} */
    var min = 1 / 0;
    var newState = messages.concat(data);
    /** @type {boolean} */
    var callback2 = true;
    /** @type {boolean} */
    var d = false;
    var bulk = void 0;
    try {
      var split;
      var self = newState[Symbol.iterator]();
      for (;!(callback2 = (split = self.next()).done);callback2 = true) {
        var value = split.value;
        if (!(i && value <= end)) {
          if (!(freeRequire && value >= end)) {
            if (toNumber(value) < toNumber(min)) {
              min = value;
            }
          }
        }
      }
    } catch (fn) {
      /** @type {boolean} */
      d = true;
      bulk = fn;
    } finally {
      try {
        if (!callback2) {
          if (self.return) {
            self.return();
          }
        }
      } finally {
        if (d) {
          throw bulk;
        }
      }
    }
    return min === 1 / 0 ? end : min;
  };
  /**
   * @return {?}
   */
  gl.prototype.$HScrollAnimationController6 = function() {
    if (!this.$HScrollAnimationController7) {
      return this.state.currentScrollLeft;
    }
    /** @type {(CSSStyleDeclaration|null)} */
    var curStyle = window.getComputedStyle(this.$HScrollAnimationController7);
    /** @type {string} */
    var transform = curStyle.transform || curStyle.webkitTransform;
    if (!transform) {
      return this.state.currentScrollLeft;
    }
    var forMaster = window.WebKitCSSMatrix || window.MSCSSMatrix;
    return forMaster ? -(new forMaster(transform)).m41 : this.state.currentScrollLeft;
  };
  /**
   * @param {string} onComplete
   * @param {number} x
   * @param {number} millis
   * @return {undefined}
   */
  gl.prototype.$HScrollAnimationController9 = function(onComplete, x, millis) {
    if (null != onComplete) {
      onComplete({
        from : {
          scrollLeft : x,
          scrollRight : this.$HScrollAnimationController14(x)
        },
        to : {
          scrollLeft : millis,
          scrollRight : this.$HScrollAnimationController14(millis)
        }
      });
    }
  };
  /**
   * @param {number} x
   * @param {(Function|string)} width
   * @param {number} maxWidth
   * @return {?}
   */
  gl.prototype.$HScrollAnimationController14 = function(x, width, maxWidth) {
    return maxWidth = maxWidth || this.state.outerWidth, (width = Math.max(maxWidth, width || this.state.innerWidth)) - maxWidth - x;
  };
  /**
   * @param {?} v
   * @param {(Function|string)} width
   * @param {number} x
   * @return {?}
   */
  gl.prototype.$HScrollAnimationController3 = function(v, width, x) {
    return x = x || this.state.outerWidth, width = Math.max(x, width || this.state.innerWidth), Math.min(width - x, Math.max(0, v));
  };
  /**
   * @param {number} r
   * @return {?}
   */
  gl.prototype.$HScrollAnimationController15 = function(r) {
    var t = this.$HScrollAnimationController14(r);
    return r < 0 ? -Math.pow(-r, 0.75) : t < 0 ? r - (-Math.pow(-t, 0.75) - t) : r;
  };
  /**
   * @param {Object} options
   * @return {?}
   */
  gl.prototype.$HScrollAnimationController16 = function(options) {
    /** @type {number} */
    var left = Math.min(options.currentScrollLeft, options.futureScrollLeft);
    var right = Math.max(options.currentScrollLeft, options.futureScrollLeft) + options.outerWidth;
    return{
      top : 0,
      bottom : options.height,
      left : left,
      right : right,
      width : right - left,
      height : options.height
    };
  };
  /**
   * @return {undefined}
   */
  gl.prototype.$HScrollAnimationController4 = function() {
    /** @type {number} */
    Object(Block.findDOMNode)(this.$HScrollAnimationController33).scrollLeft = 0;
  };
  /**
   * @param {?} deepDataAndEvents
   * @param {?} until
   * @return {undefined}
   */
  gl.prototype.componentWillUpdate = function(deepDataAndEvents, until) {
    this.$HScrollAnimationController31(deepDataAndEvents, until);
  };
  /**
   * @return {?}
   */
  gl.prototype.render = function() {
    var elem = this;
    var element = this.props;
    var content = element.children;
    var elementClassName = element.className;
    return dom.createElement(o.a, {
      className : templateFunc()(elementClassName, "_6b4es"),
      /**
       * @param {?} value
       * @return {?}
       */
      ref : function(value) {
        return elem.$HScrollAnimationController33 = value;
      },
      onResize : this.$HScrollAnimationController1
    }, dom.createElement("div", {
      className : "_5x9wm",
      /**
       * @param {?} value
       * @return {?}
       */
      ref : function(value) {
        return elem.$HScrollAnimationController7 = value;
      },
      onTouchStart : this.$HScrollAnimationController22,
      onTouchMove : this.$HScrollAnimationController24,
      onTouchEnd : this.$HScrollAnimationController25
    }, dom.createElement(o.a, {
      className : "_jxo7a",
      onResize : this.$HScrollAnimationController29
    }, content)));
  };
  /**
   * @param {?} prevState
   * @param {Function} deepDataAndEvents
   * @return {?}
   */
  gl.prototype.componentDidUpdate = function(prevState, deepDataAndEvents) {
    var test = this;
    var container = ntf()(this.$HScrollAnimationController7);
    var state = this.state;
    var object = state.currentScrollLeft;
    /** @type {number} */
    var dist = state.futureScrollLeft - object;
    var intensity = this.props.getAnimationDuration(dist);
    if (intensity = Math.max(intensity, 1), container.style.transitionDuration = (this.isAnimated() ? intensity / 1E3 : 0) + "s", this.isAnimated() === this.isAnimated(deepDataAndEvents)) {
      /** @type {string} */
      var rule = "translateX(" + -this.state.futureScrollLeft + "px)";
      return container.style.webkitTransform = rule, void(container.style.transform = rule);
    }
    requestAnimationFrame(function() {
      container.offsetHeight;
      /** @type {string} */
      var rule = "translateX(" + -test.state.futureScrollLeft + "px)";
      /** @type {string} */
      container.style.webkitTransform = rule;
      /** @type {string} */
      container.style.transform = rule;
    });
  };
  /**
   * @return {undefined}
   */
  gl.prototype.componentDidMount = function() {
    var element = ntf()(this.$HScrollAnimationController7);
    /** @type {boolean} */
    this.$HScrollAnimationController30 = true;
    this.$HScrollAnimationController31(this.props, this.state);
    element.addEventListener("wheel", this.$HScrollAnimationController17);
    document.addEventListener("wheel", this.$HScrollAnimationController27);
    document.addEventListener("touchmove", this.$HScrollAnimationController27);
    element.addEventListener("keydown", this.$HScrollAnimationController26);
  };
  /**
   * @return {undefined}
   */
  gl.prototype.componentWillUnmount = function() {
    /** @type {boolean} */
    this.$HScrollAnimationController30 = false;
    ntf()(this.$HScrollAnimationController7).removeEventListener("wheel", this.$HScrollAnimationController17);
    document.removeEventListener("wheel", this.$HScrollAnimationController27);
    document.removeEventListener("touchmove", this.$HScrollAnimationController27);
    document.removeEventListener("keydown", this.$HScrollAnimationController26);
    if (this.$HScrollAnimationController19) {
      h.a.clearTimeout(this.$HScrollAnimationController19);
    }
    if (this.$HScrollAnimationController5) {
      this.$HScrollAnimationController5();
    }
    if (this.$HScrollAnimationController34) {
      this.$HScrollAnimationController34();
    }
  };
  gl.defaultProps = {
    /**
     * @param {number} dist
     * @return {?}
     */
    getAnimationDuration : function(dist) {
      return 10 * Math.pow(Math.abs(dist), 0.75);
    }
  };
  var data;
  var proto;
  /** @type {function (Function): undefined} */
  var tr = gl;
  var node = require(922);
  require(975);
  data = dom.PureComponent;
  proto = data && data.prototype;
  Object.assign(attributes, data);
  /** @type {function (Function): undefined} */
  (attributes.prototype = Object.create(proto)).constructor = attributes;
  attributes.__superConstructor__ = data;
  /**
   * @return {?}
   */
  attributes.prototype.getClickScrollIncrement = function() {
    return null != this.$HScrollContainer1 || throttledUpdate()(0), null != this.props.clickScrollIncrement ? this.props.clickScrollIncrement : Object(Block.findDOMNode)(this.$HScrollContainer1).offsetWidth;
  };
  /**
   * @return {?}
   */
  attributes.prototype.render = function() {
    var first = this;
    var props = this.props;
    var content = props.children;
    var cls = props.className;
    var data = props.disablePagerButtons;
    var length = props.getAnimationDuration;
    var i = props.onVisibilityChange;
    var _value = props.snapPoints;
    var state = this.state;
    var object = state.leftPagerEnabled;
    var len = state.rightPagerEnabled;
    return ua.canUseDOM ? dom.createElement("div", {
      className : templateFunc()(cls, "_nyieu")
    }, dom.createElement(tr, {
      getAnimationDuration : length,
      onUserScroll : this.$HScrollContainer5,
      onUserScrollEnd : this.$HScrollContainer6,
      onResize : this.$HScrollContainer3,
      onAnimationStart : this.$HScrollContainer7,
      onVisibilityChange : i,
      snapPoints : _value,
      /**
       * @param {?} i
       * @return {?}
       */
      ref : function(i) {
        return first.$HScrollContainer1 = i;
      }
    }, content), dom.createElement(node.c, {
      direction : node.a.left,
      enabled : object && !data,
      onClick : this.$HScrollContainer2.bind(this, "left"),
      variant : this.props.pagerVariant
    }), dom.createElement(node.c, {
      direction : node.a.right,
      enabled : len && !data,
      onClick : this.$HScrollContainer2.bind(this, "right"),
      variant : this.props.pagerVariant
    })) : dom.createElement("div", {
      className : templateFunc()(cls, "_52kpo")
    }, content);
  };
  var object;
  var value;
  /** @type {function (Function): undefined} */
  var nodeName = attributes;
  var child = require(326);
  var j = require(119);
  var d = require.n(j);
  require(973);
  /** @type {number} */
  var actualWidth = 100;
  /** @type {number} */
  var done = 1E3 * d.a["hscc-collapse-transition-duration"].value;
  object = dom.PureComponent;
  value = object && object.prototype;
  Object.assign(opt_attributes, object);
  /** @type {function (Function): undefined} */
  (opt_attributes.prototype = Object.create(value)).constructor = opt_attributes;
  opt_attributes.__superConstructor__ = object;
  /**
   * @return {?}
   */
  opt_attributes.prototype.getSnapPoints = function() {
    var element = this.props;
    var type = element.children;
    var token = element.cardWidth;
    var index = element.gapWidth;
    var count = dom.Children.count(type);
    /** @type {Array} */
    var timesTwo = [];
    /** @type {number} */
    var num = 1;
    for (;num < count;num++) {
      timesTwo.push(num * (token + index));
    }
    return timesTwo;
  };
  /**
   * @return {?}
   */
  opt_attributes.prototype.getClickScrollIncrement = function() {
    var props = this.props;
    var length = props.cardWidth;
    var i = props.gapWidth;
    var top = this.state.containerWidth;
    /** @type {number} */
    var newDuration = Math.floor(top / (length + i));
    return(newDuration = Math.max(1, newDuration)) * (length + i);
  };
  /**
   * @return {?}
   */
  opt_attributes.prototype.render = function() {
    var props = this.props;
    var params = props.children;
    var cls = props.className;
    var i = props.cardWidth;
    var _value = props.disablePagerButtons;
    var j = props.gapWidth;
    var l = props.getAnimationDuration;
    var length = props.gutterWidth;
    var Number = this.state;
    var low = Number.firstRendered;
    var high = Number.lastRendered;
    return dom.createElement(nodeName, {
      className : cls,
      clickScrollIncrement : this.getClickScrollIncrement(),
      disablePagerButtons : _value,
      getAnimationDuration : l,
      onLogEvent : this.props.onLogEvent,
      onResize : this.$HScrollCardContainer1,
      onVisibilityChange : this.$HScrollCardContainer2,
      pagerVariant : this.props.pagerVariant,
      snapPoints : this.getSnapPoints()
    }, dom.createElement(child.TransitionGroup, {
      component : "ul",
      className : "_bhh72",
      style : {
        paddingLeft : length - j,
        paddingRight : length
      }
    }, params && dom.Children.map(params, function(sc, value) {
      return dom.createElement(child.Transition, {
        key : sc.key,
        timeout : {
          exit : done
        }
      }, function(dataAndEvents) {
        return dom.createElement(create, {
          cardWidth : i,
          unrendered : value < low || value > high,
          collapsed : "exiting" === dataAndEvents || "exited" === dataAndEvents,
          gapWidth : j
        }, sc);
      });
    })));
  };
  opt_attributes.defaultProps = {
    initialRenderedCount : 3
  };
  /** @type {function (Function): undefined} */
  fnc.a = opt_attributes;
}, function(dataAndEvents, matrix, require) {
  /**
   * @param {Object} b
   * @param {Array} properties
   * @return {?}
   */
  function extend(b, properties) {
    var a = {};
    var prop;
    for (prop in b) {
      if (!(properties.indexOf(prop) >= 0)) {
        if (Object.prototype.hasOwnProperty.call(b, prop)) {
          a[prop] = b[prop];
        }
      }
    }
    return a;
  }
  /**
   * @return {?}
   */
  function getAttributeParts() {
    return "UserAvatarWithStories_" + UserAvatarWithStories_++;
  }
  /**
   * @return {?}
   */
  function attributes() {
    var value;
    var _ref2;
    var me = this;
    /** @type {number} */
    var l = arguments.length;
    /** @type {Array} */
    var args = Array(l);
    /** @type {number} */
    var i = 0;
    for (;i < l;i++) {
      args[i] = arguments[i];
    }
    return value = (_ref2 = parent.constructor).call.apply(_ref2, [this].concat(args)), this.state = {
      elementId : getAttributeParts()
    }, this.$UserAvatarWithStories1 = function() {
      var props = me.props;
      var i = props.onOpenReel;
      var j = props.reelId;
      if (i) {
        if (j) {
          i(j, me.state.elementId);
        }
      }
    }, value;
  }
  var base;
  var parent;
  var self = require(45);
  var path = require(3);
  var resolved = require.n(path);
  var update = require(6);
  var throttledUpdate = require.n(update);
  var io = require(8);
  var g = require(265);
  var options = require(322);
  var content = require(11);
  var tmpl = require.n(content);
  var $ = require(0);
  var cfg = require(954);
  var object = require(323);
  var c = Object.assign || function(opt_attributes) {
    /** @type {number} */
    var i = 1;
    for (;i < arguments.length;i++) {
      var iterable = arguments[i];
      var key;
      for (key in iterable) {
        if (Object.prototype.hasOwnProperty.call(iterable, key)) {
          opt_attributes[key] = iterable[key];
        }
      }
    }
    return opt_attributes;
  };
  require(1015);
  /** @type {number} */
  var UserAvatarWithStories_ = 0;
  base = $.Component;
  parent = base && base.prototype;
  Object.assign(attributes, base);
  /** @type {function (): ?} */
  (attributes.prototype = Object.create(parent)).constructor = attributes;
  attributes.__superConstructor__ = base;
  /**
   * @param {?} nextProps
   * @return {undefined}
   */
  attributes.prototype.componentWillReceiveProps = function(nextProps) {
    if (this.props.reelId !== nextProps.reelId) {
      this.setState({
        elementId : getAttributeParts()
      });
    }
  };
  /**
   * @return {?}
   */
  attributes.prototype.render = function() {
    var node = this.props;
    var className = node.className;
    var pn = node.isLink;
    var len = node.showRingWhenSeen;
    var oldconfig = extend(node, ["className", "isLink", "showRingWhenSeen"]);
    /** @type {boolean} */
    var isLoading = node.loadingId === node.reelId && node.trayLoadingSourceElementId === (node.clickTargetElementId || this.state.elementId);
    var id = node.hasReel && (!node.isReelSeen || len);
    return $.createElement("div", {
      className : tmpl()("_82odm", className),
      onClick : id && node.isClickable ? this.$UserAvatarWithStories1 : null
    }, id && $.createElement(cfg.a, {
      isCenterOnAvatar : true,
      className : "_15vpm",
      isLoading : isLoading,
      seen : node.hasReel && node.isReelSeen,
      size : node.size
    }), $.createElement(object.a, c({}, oldconfig, {
      isLink : pn && !id
    })));
  };
  attributes.defaultProps = {
    isClickable : true,
    isLink : true,
    showRingWhenSeen : true
  };
  /** @type {function (): ?} */
  var matrix_a = attributes;
  var helper = require(84);
  matrix.a = Object(io.connect)(function(data, user) {
    var userId = user.userId;
    var username = user.username;
    if (username) {
      if (!userId) {
        userId = Object(helper.b)(data, username).id;
      }
    }
    if (!userId) {
      resolved()(0);
    }
    var newState = Object(options.g)(data, userId);
    return{
      hasReel : !!newState,
      isReelSeen : !!newState && Object(options.j)(newState),
      loadingId : data.stories.trayLoadingId,
      reelId : userId,
      trayLoadingSourceElementId : data.stories.trayLoadingSourceElementId
    };
  }, function($sanitize) {
    return{
      /**
       * @param {?} n
       * @param {?} deepDataAndEvents
       * @return {undefined}
       */
      onOpenReel : function(n, deepDataAndEvents) {
        $sanitize(function(require, $sanitize) {
          var r20 = throttledUpdate()($sanitize().stories.reels.get(n));
          require(Object(g.l)(self.List.of(r20), "reel_feed_timeline", n, deepDataAndEvents));
        });
      }
    };
  })(matrix_a);
}, , , , , , , , function(dataAndEvents, fnc, $) {
  var update = $(11);
  var throttledUpdate = $.n(update);
  var self = $(0);
  $.n(self);
  $(961);
  /**
   * @param {Function} tests
   * @return {?}
   */
  fnc.a = function(tests) {
    var tearDown = tests.className;
    var children = tests.children;
    return self.createElement("h2", {
      className : throttledUpdate()("_49rz2", tearDown)
    }, children);
  };
}, function(module, dataAndEvents) {
  /**
   * @param {Function} types
   * @param {string} callback
   * @return {?}
   */
  module.exports = function(types, callback) {
    /** @type {number} */
    var index = -1;
    var length = null == types ? 0 : types.length;
    /** @type {Array} */
    var result = Array(length);
    for (;++index < length;) {
      result[index] = callback(types[index], index, types);
    }
    return result;
  };
}, function(module, dataAndEvents, require) {
  var debug = require(945);
  /**
   * @param {Function} types
   * @param {string} func
   * @param {Function} type
   * @return {?}
   */
  module.exports = function(types, func, type) {
    var jlen = types.length;
    return type = void 0 === type ? jlen : type, !func && type >= jlen ? types : debug(types, func, type);
  };
}, function(module, dataAndEvents) {
  /**
   * @param {Function} tests
   * @param {number} x
   * @param {Function} end
   * @return {?}
   */
  module.exports = function(tests, x, end) {
    /** @type {number} */
    var i = -1;
    var n = tests.length;
    if (x < 0) {
      x = -x > n ? 0 : n + x;
    }
    if ((end = end > n ? n : end) < 0) {
      end += n;
    }
    /** @type {number} */
    n = x > end ? 0 : end - x >>> 0;
    x >>>= 0;
    /** @type {Array} */
    var result = Array(n);
    for (;++i < n;) {
      result[i] = tests[i + x];
    }
    return result;
  };
}, function(module, dataAndEvents, require) {
  var Exception = require(947);
  var assert = require(121);
  var nodes = require(122);
  var e = nodes && nodes.isRegExp;
  var JsDiff = e ? assert(e) : Exception;
  module.exports = JsDiff;
}, function(module, dataAndEvents, require) {
  var getActual = require(30);
  var inspect = require(31);
  /** @type {string} */
  var r = "[object RegExp]";
  /**
   * @param {Function} types
   * @return {?}
   */
  module.exports = function(types) {
    return inspect(types) && getActual(types) == r;
  };
}, function(module, dataAndEvents, require) {
  var debug = require(949);
  var getActual = require(897);
  var inspect = require(950);
  /**
   * @param {Function} types
   * @return {?}
   */
  module.exports = function(types) {
    return getActual(types) ? inspect(types) : debug(types);
  };
}, function(module, dataAndEvents) {
  /**
   * @param {Function} types
   * @return {?}
   */
  module.exports = function(types) {
    return types.split("");
  };
}, function(module, dataAndEvents) {
  /** @type {string} */
  var y = "[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]";
  /** @type {string} */
  var name = "\\ud83c[\\udffb-\\udfff]";
  /** @type {string} */
  var time = "(?:\\ud83c[\\udde6-\\uddff]){2}";
  /** @type {string} */
  var rule = "[\\ud800-\\udbff][\\udc00-\\udfff]";
  /** @type {string} */
  var s = "(?:[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]|\\ud83c[\\udffb-\\udfff])?";
  /** @type {string} */
  var b = "[\\ufe0e\\ufe0f]?" + s + ("(?:\\u200d(?:" + ["[^\\ud800-\\udfff]", time, rule].join("|") + ")[\\ufe0e\\ufe0f]?" + s + ")*");
  /** @type {string} */
  var g = "(?:" + ["[^\\ud800-\\udfff]" + y + "?", y, time, rule, "[\\ud800-\\udfff]"].join("|") + ")";
  /** @type {RegExp} */
  var reSplitToken = RegExp(name + "(?=" + name + ")|" + g + b, "g");
  /**
   * @param {Function} types
   * @return {?}
   */
  module.exports = function(types) {
    return types.match(reSplitToken) || [];
  };
}, function(module, dataAndEvents, require) {
  var getActual = require(911);
  /**
   * @param {Function} types
   * @return {?}
   */
  module.exports = function(types) {
    return null == types ? "" : getActual(types);
  };
}, function(dataAndEvents, record, $) {
  /**
   * @param {Function} tests
   * @return {undefined}
   */
  function opt_attributes(tests) {
    var point = this;
    parent.constructor.call(this, tests);
    /**
     * @return {undefined}
     */
    this.$PostsGridItem1 = function() {
      point.setState({
        isTabFocused : false
      });
    };
    /**
     * @return {undefined}
     */
    this.$PostsGridItem2 = function() {
      point.setState({
        isPointerInside : true
      });
    };
    /**
     * @return {undefined}
     */
    this.$PostsGridItem3 = function() {
      point.setState({
        isTabFocused : true
      });
    };
    /**
     * @return {undefined}
     */
    this.$PostsGridItem4 = function() {
      point.setState({
        isPointerInside : false
      });
    };
    this.state = {
      isPointerInside : false,
      isTabFocused : false
    };
  }
  /**
   * @return {?}
   */
  function attributes() {
    var e;
    var _ref2;
    var _this = this;
    /** @type {number} */
    var l = arguments.length;
    /** @type {Array} */
    var args = Array(l);
    /** @type {number} */
    var i = 0;
    for (;i < l;i++) {
      args[i] = arguments[i];
    }
    return e = (_ref2 = value.constructor).call.apply(_ref2, [this].concat(args)), this.state = {
      visibleRows : []
    }, this.$PostsGrid1 = new q.a, this.$PostsGrid2 = function(failures) {
      var options = _this.props;
      var row = options.onImpression;
      var size = options.postsPerRow;
      var posts = options.posts;
      if (row) {
        if (Object(obj.H)("ai")) {
          failures.forEach(function(dataAndEvents, arg) {
            if (dataAndEvents && !_this.$PostsGrid1.has(arg)) {
              _this.$PostsGrid1.add(arg);
              /** @type {number} */
              var column = 0;
              for (;column < size;column++) {
                var post = posts[arg * size + column];
                if (post) {
                  row({
                    row : arg,
                    column : column,
                    postId : post.id
                  });
                }
              }
            }
          });
          _this.setState({
            visibleRows : failures
          });
        }
      }
    }, e;
  }
  var obj = $(2);
  var object = $(1047);
  var opts = $(293);
  var item = $(37);
  var content = $(11);
  var tmpl = $.n(content);
  var handler = $(55);
  var that = $(253);
  var el = $(894);
  var self = $(0);
  var child = $(926);
  $(21);
  $(64);
  $(1060);
  var config;
  var parent;
  /**
   * @param {Element} el
   * @return {?}
   */
  var createElement = function(el) {
    var cls = el.className;
    var first = el.smallSize;
    return self.createElement("div", {
      className : cls
    }, self.createElement("span", {
      className : (first ? "" : "_c3aqk") + (first ? " _4u0hd" : "") + " _8scx2" + (first ? "" : " coreSpriteSidecarIconLarge") + (first ? " coreSpriteSidecarIconSmall" : "")
    }, "Post"));
  };
  var doc = $(252);
  var input = $(513);
  $(21);
  $(64);
  $(1058);
  config = self.PureComponent;
  parent = config && config.prototype;
  Object.assign(opt_attributes, config);
  /** @type {function (Function): undefined} */
  (opt_attributes.prototype = Object.create(parent)).constructor = opt_attributes;
  opt_attributes.__superConstructor__ = config;
  /**
   * @return {?}
   */
  opt_attributes.prototype.$PostsGridItem5 = function() {
    return!Object(obj.D)() && (this.state.isTabFocused || this.state.isPointerInside);
  };
  /**
   * @return {?}
   */
  opt_attributes.prototype.$PostsGridItem6 = function() {
    var countInfo = self.createElement(opts.a, {
      shortenNumber : true,
      value : this.props.numComments
    });
    return 1 === this.props.numComments ? $(5)("{count}{comment_word}", {
      count : countInfo,
      comment_word : self.createElement("span", {
        className : "_cq6tj _8scx2 coreSpriteSpeechBubbleSmall"
      }, "coment\u00c3\u00a1rio")
    }) : $(5)("{count}{comments_word}", {
      count : countInfo,
      comments_word : self.createElement("span", {
        className : "_cq6tj _8scx2 coreSpriteSpeechBubbleSmall"
      }, "coment\u00c3\u00a1rios")
    });
  };
  /**
   * @return {?}
   */
  opt_attributes.prototype.$PostsGridItem7 = function() {
    var countInfo = self.createElement(opts.a, {
      shortenNumber : true,
      value : this.props.numLikes
    });
    return 1 === this.props.numLikes ? $(5)("{count}{like_word}", {
      count : countInfo,
      like_word : self.createElement("span", {
        className : "_rxftm _8scx2 coreSpriteHeartSmall"
      }, "curtida")
    }) : $(5)("{count}{likes_word}", {
      count : countInfo,
      likes_word : self.createElement("span", {
        className : "_rxftm _8scx2 coreSpriteHeartSmall"
      }, "curtidas")
    });
  };
  /**
   * @return {?}
   */
  opt_attributes.prototype.$PostsGridItem8 = function() {
    var time = this.props.videoViews;
    var countInfo = "number" == typeof time ? self.createElement(opts.a, {
      shortenNumber : true,
      value : time
    }) : null;
    return 1 === time ? $(5)("{count}{view_word}", {
      count : countInfo,
      view_word : self.createElement("span", {
        className : "_n5ln7 _8scx2 coreSpritePlayIconSmall"
      }, "exibir")
    }) : $(5)("{count}{views_word}", {
      count : countInfo,
      views_word : self.createElement("span", {
        className : "_n5ln7 _8scx2 coreSpritePlayIconSmall"
      }, "visualiza\u00c3\u00a7\u00c3\u00b5es")
    });
  };
  /**
   * @param {boolean} dataAndEvents
   * @return {?}
   */
  opt_attributes.prototype.$PostsGridItem9 = function(dataAndEvents) {
    var isEmptyLi = this.props.isVideo && (null != this.props.videoViews && this.props.videoViews > 0);
    /** @type {boolean} */
    var charset = !this.props.commentsDisabled;
    return self.createElement("div", {
      className : "_mli86"
    }, dataAndEvents && self.createElement("ul", {
      className : "_lpowm"
    }, isEmptyLi ? self.createElement("li", {
      className : "_iexav" + (charset ? " _d9a84" : "")
    }, this.$PostsGridItem8()) : self.createElement("li", {
      className : "_puatn" + (charset ? " _1ibs3" : "")
    }, this.$PostsGridItem7()), charset && self.createElement("li", {
      className : "_3apjk"
    }, this.$PostsGridItem6())));
  };
  /**
   * @return {?}
   */
  opt_attributes.prototype.render = function() {
    var first = this;
    var $PostsGridItem9 = this.$PostsGridItem5();
    var path = this.props.mediaLinkBuilder(this.props.code);
    var mediaPreview = this.props.gatingInfo && ("sensitivity" === this.props.gatingInfo.gatingType && !this.props.isSidecar);
    return self.createElement("div", {
      className : tmpl()("_mck9w _gvoze", this.props.className),
      /**
       * @param {?} i
       * @return {?}
       */
      ref : function(i) {
        return first.$PostsGridItem10 = i;
      }
    }, self.createElement(item.a, {
      href : path,
      onBlur : this.$PostsGridItem1,
      onClick : this.$PostsGridItem1,
      onFocus : this.$PostsGridItem3,
      onMouseEnter : this.$PostsGridItem2,
      onMouseLeave : this.$PostsGridItem4
    }, mediaPreview && this.props.mediaPreview ? self.createElement(child.a, {
      analyticsContext : that.a.profilePage,
      isPhoto : !this.props.isVideo && !this.props.isSidecar,
      mediaId : this.props.id,
      ownerId : this.props.owner.id,
      previewData : this.props.mediaPreview
    }) : self.createElement(el.a, {
      caption : this.props.caption,
      rich : true,
      src : this.props.thumbnailSrc || this.props.src,
      srcSet : this.props.thumbnailResources
    }), !mediaPreview && (this.props.isVideo && self.createElement("div", {
      className : "_lxd52"
    }, self.createElement(input.a, {
      className : "_u3xlu",
      smallSize : this.props.viewportWidth <= doc.a
    }))), !mediaPreview && (this.props.isSidecar && self.createElement("div", {
      className : "_lxd52"
    }, self.createElement(createElement, {
      className : "_jnyq2",
      smallSize : this.props.viewportWidth <= doc.a
    }))), $PostsGridItem9 && this.$PostsGridItem9(!mediaPreview)));
  };
  opt_attributes.defaultProps = {
    mediaLinkBuilder : handler.e
  };
  var ctor;
  var value;
  /** @type {function (Function): undefined} */
  var def = opt_attributes;
  var elem = $(335);
  var q = $.n(elem);
  var group = Object.assign || function(opt_attributes) {
    /** @type {number} */
    var i = 1;
    for (;i < arguments.length;i++) {
      var iterable = arguments[i];
      var key;
      for (key in iterable) {
        if (Object.prototype.hasOwnProperty.call(iterable, key)) {
          opt_attributes[key] = iterable[key];
        }
      }
    }
    return opt_attributes;
  };
  $(1056);
  ctor = self.Component;
  value = ctor && ctor.prototype;
  Object.assign(attributes, ctor);
  /** @type {function (): ?} */
  (attributes.prototype = Object.create(value)).constructor = attributes;
  attributes.__superConstructor__ = ctor;
  /**
   * @param {Element} value
   * @return {?}
   */
  attributes.prototype.$PostsGrid3 = function(value) {
    return self.createElement(def, group({}, value, {
      className : "_f2mse",
      key : value.id,
      mediaLinkBuilder : this.props.mediaLinkBuilder,
      viewportWidth : this.props.viewportWidth
    }));
  };
  /**
   * @return {?}
   */
  attributes.prototype.$PostsGrid4 = function() {
    /** @type {Array} */
    var keys = [];
    /** @type {number} */
    var index = 0;
    for (;index < this.props.posts.length;index += this.props.postsPerRow) {
      keys.push(this.$PostsGrid5(this.props.posts.slice(index, index + this.props.postsPerRow), index));
    }
    return keys;
  };
  /**
   * @param {Array} mod
   * @param {number} index
   * @return {?}
   */
  attributes.prototype.$PostsGrid5 = function(mod, index) {
    var nl = mod.map(this.$PostsGrid3, this);
    var i = nl.length;
    for (;i < this.props.postsPerRow;i++) {
      nl.push(self.createElement("div", {
        className : "_f2mse _fk7b6",
        key : "placeholder_" + i
      }));
    }
    return self.createElement("div", {
      className : "_70iju",
      key : index
    }, nl);
  };
  /**
   * @return {?}
   */
  attributes.prototype.render = function() {
    return this.props.posts.length ? this.props.onImpression ? self.createElement(object.a, {
      className : "_cmdpi",
      visibleItems : this.state.visibleRows,
      onVisibleItemsChange : this.$PostsGrid2
    }, this.$PostsGrid4()) : self.createElement("div", {
      className : "_cmdpi"
    }, this.$PostsGrid4()) : null;
  };
  attributes.defaultProps = {
    posts : [],
    postsPerRow : 3
  };
  /** @type {function (): ?} */
  record.a = attributes;
}, function(dataAndEvents, fnc, child) {
  var reversed = child(374);
  child.n(reversed);
  fnc.a = Object(reversed.asyncComponent)({
    /**
     * @return {?}
     */
    resolve : function() {
      return child.e(2).then(child.bind(null, 545));
    }
  });
}, function(dataAndEvents, meta, $) {
  /**
   * @param {?} entity
   * @return {undefined}
   */
  function EntityView(entity) {
    /** @type {number} */
    this.animStartTime = 0;
    /** @type {number} */
    this.lastFrameStartTime = 0;
    this.animMode = r20;
    /** @type {Array} */
    this.segments = [];
    /** @type {boolean} */
    this.invalidated = false;
    this.onInvalidate = entity;
  }
  /**
   * @param {?} options
   * @return {undefined}
   */
  function Plugin(options) {
    var async = options.segmentIndex;
    var successCb = options.startDelay;
    var value = options.maxIterations;
    var computed = void 0 === value ? other : value;
    /** @type {number} */
    this.progress = 0;
    this.segmentIndex = async;
    this.startDelay = successCb;
    this.maxIterations = computed;
  }
  /**
   * @return {?}
   */
  function compute() {
    return{
      strokeStyle : Object(options.a)(function(ctx, x2, y1) {
        var g = ctx.createLinearGradient(0, y1, x2, 0);
        return g.addColorStop(0, "#FDD074"), g.addColorStop(0.25, "#F77F34"), g.addColorStop(0.5, "#DD326E"), g.addColorStop(0.75, "#D82B7E"), g.addColorStop(1, "#A432B1"), g;
      }),
      /**
       * @param {number} width
       * @return {?}
       */
      lineWidth : function(width) {
        return width < 17 ? 1 : width < 40 ? 2 : width < 65 ? 3 : 4;
      }
    };
  }
  /**
   * @param {Function} tests
   * @return {undefined}
   */
  function attributes(tests) {
    var _this = this;
    parent.constructor.call(this, tests);
    /** @type {null} */
    this.$StoryRing1 = null;
    this.$StoryRing2 = compute();
    this.$StoryRing3 = getAttributeParts();
    /** @type {null} */
    this.$StoryRing4 = null;
    /**
     * @return {undefined}
     */
    this.$StoryRing6 = function() {
      if (null == _this.$StoryRing4) {
        /** @type {number} */
        _this.$StoryRing4 = requestAnimationFrame(_this.$StoryRing7);
      }
    };
    /**
     * @param {string} key
     * @return {?}
     */
    this.$StoryRing9 = function(key) {
      return key <= 56 ? 2 : key <= 84 ? 4 : key <= 118 ? 5 : 6;
    };
    this.$StoryRing11 = Object(options.a)(function(oCanvas) {
      return oCanvas.getContext("2d");
    });
    /**
     * @return {undefined}
     */
    this.$StoryRing7 = function() {
      /** @type {null} */
      _this.$StoryRing4 = null;
      var ctx = _this.$StoryRing12();
      var opts = _this.$StoryRing10();
      var element = _this.$StoryRing8();
      ctx.strokeStyle = element.strokeStyle(ctx, opts.drawableCanvasSize, opts.drawableCanvasSize);
      ctx.lineWidth = opts.lineWidth;
      /** @type {string} */
      ctx.lineCap = "round";
      /** @type {string} */
      ctx.lineJoin = "round";
      ctx.save();
      ctx.scale(_this.props.pixelRatio, _this.props.pixelRatio);
      _this.$StoryRing5.draw(ctx, {
        bounds : {
          centerX : opts.canvasCenter,
          centerY : opts.canvasCenter,
          radius : opts.radius,
          width : opts.drawableCanvasSize,
          height : opts.drawableCanvasSize
        },
        lineWidth : opts.lineWidth
      });
      ctx.restore();
    };
    this.$StoryRing5 = new $StoryRing6(this.$StoryRing6);
  }
  var elem = $(1017);
  var queue = $.n(elem);
  var opts = $(14);
  /** @type {number} */
  var other = -1;
  var easing = queue()(1, 0.25, 1, 0.25);
  var r20 = Symbol();
  var rclass = Symbol();
  var rreturn = Symbol();
  Symbol();
  /**
   * @return {undefined}
   */
  EntityView.prototype.invalidate = function() {
    if (!this.invalidated) {
      /** @type {boolean} */
      this.invalidated = true;
      this.onInvalidate();
    }
  };
  /**
   * @param {?} regex
   * @return {undefined}
   */
  EntityView.prototype.setAnimMode = function(regex) {
    if (regex !== this.animMode) {
      this.animMode = regex;
      this.invalidate();
    }
  };
  /**
   * @return {undefined}
   */
  EntityView.prototype.startSpinning = function() {
    var value = (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}).count;
    var computed = void 0 === value ? other : value;
    this.createSegmentsForSpinning({
      spinCount : computed
    });
    /** @type {number} */
    this.animStartTime = this.lastFrameStartTime = Date.now();
    this.setAnimMode(rclass);
  };
  /**
   * @return {undefined}
   */
  EntityView.prototype.stopSpinning = function() {
    if (this.animMode !== r20) {
      if (this.animMode !== rreturn) {
        this.setAnimMode(rreturn);
      }
    }
  };
  /**
   * @return {undefined}
   */
  EntityView.prototype.spinOnce = function() {
    this.startSpinning({
      count : 1
    });
  };
  /**
   * @param {CanvasRenderingContext2D} ctx
   * @param {Object} options
   * @return {undefined}
   */
  EntityView.prototype.draw = function(ctx, options) {
    var bounds = options.bounds;
    var lineWidth = options.lineWidth;
    /** @type {number} */
    var ms = Date.now() - this.lastFrameStartTime;
    switch(this.lastFrameStartTime = Date.now(), this.invalidated = false, ctx.clearRect(-1, -1, bounds.width + 2, bounds.height + 2), this.animMode) {
      case rclass:
        /** @type {number} */
        var sec = ms / 2E3;
        this.updateAndDrawSegmentsForSpinning(ctx, {
          bounds : bounds,
          progressAmount : sec,
          lineWidth : lineWidth
        });
        break;
      case rreturn:
        /** @type {number} */
        var s = ms / 2E3;
        this.updateAndDrawSegmentsForStopping(ctx, {
          bounds : bounds,
          progressAmount : s,
          lineWidth : lineWidth
        });
        break;
      case r20:
        this.drawSolidCircle(ctx, {
          bounds : bounds,
          lineWidth : lineWidth
        });
        break;
      default:
        Object(opts.a)("unexpected animMode");
    }
  };
  /**
   * @param {CanvasRenderingContext2D} ctx
   * @param {Object} c
   * @return {undefined}
   */
  EntityView.prototype.drawSolidCircle = function(ctx, c) {
    var p = c.bounds;
    c.lineWidth;
    ctx.save();
    ctx.beginPath();
    ctx.arc(p.centerX, p.centerY, p.radius, 0, 2 * Math.PI);
    ctx.stroke();
    ctx.restore();
  };
  /**
   * @param {?} functions
   * @return {undefined}
   */
  EntityView.prototype.createSegmentsForSpinning = function(functions) {
    var length = functions.spinCount;
    this.createSegments({
      spinCount : length,
      delayIncrement : 1 / 30,
      useIterpolator : true
    });
  };
  /**
   * @return {undefined}
   */
  EntityView.prototype.createSegmentsForHighlighting = function() {
    this.createSegments({
      spinCount : other,
      delayIncrement : 0.5 / 30,
      useIterpolator : true
    });
  };
  /**
   * @param {?} opt_attributes
   * @return {undefined}
   */
  EntityView.prototype.createSegments = function(opt_attributes) {
    var spinCount = opt_attributes.spinCount;
    var a1 = opt_attributes.delayIncrement;
    var useIterpolator = opt_attributes.useIterpolator;
    var showMessage = void 0 === useIterpolator || useIterpolator;
    /** @type {Array} */
    var segments = [];
    /** @type {number} */
    var b4 = 30;
    for (;--b4 >= 0;) {
      var body = showMessage ? easing(a1 * b4) : a1 * b4;
      segments.push(new Plugin({
        segmentIndex : b4,
        startDelay : -body,
        maxIterations : spinCount
      }));
    }
    /** @type {Array} */
    this.segments = segments;
  };
  /**
   * @param {CanvasRenderingContext2D} context
   * @param {Object} options
   * @return {undefined}
   */
  EntityView.prototype.updateAndDrawSegmentsForSpinning = function(context, options) {
    var bounds = options.bounds;
    var async = options.progressAmount;
    var lineWidth = options.lineWidth;
    this.updateAndDrawSegments(context, {
      bounds : bounds,
      gradientRotationDuration : 8E3,
      progressAmount : async,
      ringRotationDuration : 8E3,
      lineWidth : lineWidth
    });
  };
  /**
   * @param {CanvasRenderingContext2D} ctx
   * @param {Object} options
   * @return {undefined}
   */
  EntityView.prototype.updateAndDrawSegmentsForStopping = function(ctx, options) {
    var bounds = options.bounds;
    var async = options.progressAmount;
    var lineWidth = options.lineWidth;
    ctx.save();
    ctx.beginPath();
    /** @type {number} */
    var ringRotation = (Date.now() - this.animStartTime) / 8E3 * 360 % 360;
    /** @type {boolean} */
    var s = false;
    /** @type {boolean} */
    var callback2 = true;
    /** @type {boolean} */
    var l = false;
    var bulk = void 0;
    try {
      var target;
      var self = this.segments[Symbol.iterator]();
      for (;!(callback2 = (target = self.next()).done);callback2 = true) {
        var node = target.value;
        node.updateAndDrawForStopping(ctx, {
          bounds : bounds,
          progressAmount : async,
          ringRotation : ringRotation,
          lineWidth : lineWidth
        });
        if (1 !== node.progress) {
          /** @type {boolean} */
          s = true;
        }
      }
    } catch (fn) {
      /** @type {boolean} */
      l = true;
      bulk = fn;
    } finally {
      try {
        if (!callback2) {
          if (self.return) {
            self.return();
          }
        }
      } finally {
        if (l) {
          throw bulk;
        }
      }
    }
    if (!s) {
      this.setAnimMode(r20);
    }
    ctx.stroke();
    ctx.restore();
    this.invalidate();
  };
  /**
   * @param {CanvasRenderingContext2D} cxt
   * @param {Object} options
   * @return {undefined}
   */
  EntityView.prototype.updateAndDrawSegments = function(cxt, options) {
    var bounds = options.bounds;
    var progressAmount = (options.gradientRotationDuration, options.progressAmount);
    var async = options.ringRotationDuration;
    var lineWidth = options.lineWidth;
    cxt.save();
    cxt.beginPath();
    /** @type {number} */
    var ringRotation = (Date.now() - this.animStartTime) / async * 360 % 360;
    /** @type {boolean} */
    var a = false;
    /** @type {boolean} */
    var callback2 = true;
    /** @type {boolean} */
    var p = false;
    var bulk = void 0;
    try {
      var _ref;
      var self = this.segments[Symbol.iterator]();
      for (;!(callback2 = (_ref = self.next()).done);callback2 = true) {
        var color = _ref.value;
        switch(this.animMode) {
          case rclass:
            color.updateAndDrawForSpinning(cxt, {
              bounds : bounds,
              progressAmount : progressAmount,
              ringRotation : ringRotation,
              lineWidth : lineWidth
            });
            break;
          default:
            Object(opts.a)("unexpected animMode");
        }
        if (!color.isTerminated()) {
          /** @type {boolean} */
          a = true;
        }
      }
    } catch (fn) {
      /** @type {boolean} */
      p = true;
      bulk = fn;
    } finally {
      try {
        if (!callback2) {
          if (self.return) {
            self.return();
          }
        }
      } finally {
        if (p) {
          throw bulk;
        }
      }
    }
    if (!a) {
      this.stopSpinning();
    }
    cxt.stroke();
    cxt.restore();
    this.invalidate();
  };
  /**
   * @return {?}
   */
  Plugin.prototype.isTerminated = function() {
    return 0 === this.maxIterations && 1 === this.progress;
  };
  /**
   * @param {CanvasRenderingContext2D} cxt
   * @param {Object} c
   * @return {undefined}
   */
  Plugin.prototype.updateAndDrawForSpinning = function(cxt, c) {
    var b = c.bounds;
    var i = c.progressAmount;
    var cl = c.ringRotation;
    var w = c.lineWidth;
    if (this.startDelay < 0) {
      this.startDelay += i;
    }
    if (this.startDelay > 0) {
      this.progress += this.startDelay;
      /** @type {number} */
      this.startDelay = 0;
    } else {
      if (0 === this.startDelay) {
        this.progress += i;
      }
    }
    if (this.progress > 1) {
      if (this.maxIterations > 0) {
        this.maxIterations--;
      }
      if (0 !== this.maxIterations) {
        /** @type {number} */
        this.progress = this.progress % 1;
      } else {
        /** @type {number} */
        this.progress = 1;
      }
    }
    var progress = void 0;
    if (this.progress < 0) {
      /** @type {number} */
      progress = 0;
    } else {
      if (this.progress < 0.5) {
        /** @type {number} */
        progress = 2 * this.progress;
        /** @type {number} */
        progress = 1 - easing(1 - progress);
      } else {
        /** @type {number} */
        progress = 2 * this.progress - 1;
        progress = easing(progress = 1 - progress);
      }
    }
    this.drawSegment(cxt, {
      allowShrinkToZero : true,
      bounds : b,
      ringRotation : cl,
      segmentSizeProgress : progress,
      activeStrokeWidth : w
    });
  };
  /**
   * @param {CanvasRenderingContext2D} env
   * @param {Object} c
   * @return {undefined}
   */
  Plugin.prototype.updateAndDrawForStopping = function(env, c) {
    var b = c.bounds;
    var i = c.progressAmount;
    var cl = c.ringRotation;
    var w = c.lineWidth;
    if (this.progress < 0.5) {
      /** @type {number} */
      this.progress = 1 - this.progress;
    }
    this.progress += i;
    if (this.progress > 1) {
      /** @type {number} */
      this.progress = 1;
    }
    /** @type {number} */
    var progress = 2 * this.progress - 1;
    progress = easing(progress = 1 - progress);
    this.drawSegment(env, {
      allowShrinkToZero : true,
      bounds : b,
      ringRotation : cl,
      segmentSizeProgress : progress,
      activeStrokeWidth : w
    });
  };
  /**
   * @param {CanvasRenderingContext2D} context
   * @param {?} options
   * @return {undefined}
   */
  Plugin.prototype.drawSegment = function(context, options) {
    var count = options.activeStrokeWidth;
    var async = options.allowShrinkToZero;
    var geometry = options.bounds;
    var i = options.ringRotation;
    var successCb = options.segmentSizeProgress;
    context.save();
    /** @type {number} */
    var now = 12 * (1 - successCb);
    if (!async) {
      /** @type {number} */
      now = Math.max(now, 0.1);
    }
    var j = i + (270 + 12 * this.segmentIndex - 6 - now / 2);
    if (async) {
      /** @type {number} */
      var left = 2 * Math.PI * geometry.radius * now / 360;
      context.lineWidth = left < count ? left : count;
    }
    if (context.lineWidth !== count) {
      context.stroke();
      context.beginPath();
    }
    /** @type {number} */
    var startAngle = 2 * j * Math.PI / 360;
    /** @type {number} */
    var endAngle = 2 * now * Math.PI / 360;
    context.moveTo(geometry.centerX + Math.cos(startAngle) * geometry.radius, geometry.centerY + Math.sin(startAngle) * geometry.radius);
    context.arc(geometry.centerX, geometry.centerY, geometry.radius, startAngle, startAngle + endAngle);
    if (context.lineWidth !== count) {
      context.stroke();
      context.beginPath();
    }
    context.restore();
  };
  var ctor;
  var parent;
  /** @type {function (?): undefined} */
  var $StoryRing6 = EntityView;
  var update = $(61);
  var throttledUpdate = $.n(update);
  var options = $(509);
  var content = $(119);
  var actual = $.n(content);
  var getAttributeParts = throttledUpdate()(function() {
    return{
      /**
       * @return {?}
       */
      strokeStyle : function() {
        return actual.a["grey-2"].value;
      },
      /**
       * @param {number} width
       * @return {?}
       */
      lineWidth : function(width) {
        return width < 53 ? 1 : 2;
      }
    };
  });
  var next = $(6);
  var timeout = $.n(next);
  var dojo = $(0);
  var $this = $(8);
  var renderImageToCanvas = Object.assign || function(opt_attributes) {
    /** @type {number} */
    var i = 1;
    for (;i < arguments.length;i++) {
      var iterable = arguments[i];
      var key;
      for (key in iterable) {
        if (Object.prototype.hasOwnProperty.call(iterable, key)) {
          opt_attributes[key] = iterable[key];
        }
      }
    }
    return opt_attributes;
  };
  ctor = dojo.Component;
  parent = ctor && ctor.prototype;
  Object.assign(attributes, ctor);
  /** @type {function (Function): undefined} */
  (attributes.prototype = Object.create(parent)).constructor = attributes;
  attributes.__superConstructor__ = ctor;
  /**
   * @return {undefined}
   */
  attributes.prototype.componentDidMount = function() {
    if (this.props.isLoading) {
      this.$StoryRing5.startSpinning();
    } else {
      this.$StoryRing7();
    }
  };
  /**
   * @param {?} conn
   * @return {undefined}
   */
  attributes.prototype.componentDidUpdate = function(conn) {
    if (!conn.isLoading && this.props.isLoading) {
      this.$StoryRing5.startSpinning();
    } else {
      if (conn.isLoading && !this.props.isLoading) {
        this.$StoryRing5.stopSpinning();
      } else {
        this.$StoryRing7();
      }
    }
  };
  /**
   * @return {undefined}
   */
  attributes.prototype.componentWillUnmount = function() {
    /** @type {null} */
    this.$StoryRing1 = null;
    if (null != this.$StoryRing4) {
      cancelAnimationFrame(this.$StoryRing4);
      /** @type {null} */
      this.$StoryRing4 = null;
    }
  };
  /**
   * @return {?}
   */
  attributes.prototype.$StoryRing8 = function() {
    return this.props.seen ? this.$StoryRing3 : this.$StoryRing2;
  };
  /**
   * @return {?}
   */
  attributes.prototype.$StoryRing10 = function() {
    var props = this.props;
    var i = props.isCenterOnAvatar;
    var len = props.pixelRatio;
    var length = props.size;
    var width = length / 2 + this.$StoryRing9(length);
    var lineWidth = this.$StoryRing8().lineWidth(width);
    var size = width + lineWidth / 2;
    /** @type {number} */
    var w = Math.floor(2 * width + 2 * lineWidth);
    /** @type {number} */
    var sum = Math.ceil(w * len) + 2;
    /** @type {number} */
    var mean = sum / len;
    /** @type {number} */
    var distanceTarget = mean / 2;
    /** @type {number} */
    var approx = 0;
    if (i) {
      /** @type {number} */
      var delta = (approx = (mean - length) / 2) * len % 1 / len;
      approx -= delta;
      distanceTarget -= delta;
    }
    return{
      canvasCenter : distanceTarget,
      elementCenterOffset : approx,
      displayCanvasSize : mean,
      drawableCanvasSize : w,
      lineWidth : lineWidth,
      physicalCanvasSize : sum,
      radius : size
    };
  };
  /**
   * @return {?}
   */
  attributes.prototype.$StoryRing12 = function() {
    return this.$StoryRing11(timeout()(this.$StoryRing1));
  };
  /**
   * @return {?}
   */
  attributes.prototype.render = function() {
    var first = this;
    var opts = this.$StoryRing10();
    /** @type {string} */
    var translate = "translate(" + -opts.elementCenterOffset + "px, " + -opts.elementCenterOffset + "px)";
    /** @type {({WebkitTransform: string, left: number, position: string, top: number, transform: string}|{})} */
    var r20 = this.props.isCenterOnAvatar ? {
      WebkitTransform : translate,
      transform : translate,
      position : "absolute",
      top : 0,
      left : 0
    } : {};
    return dojo.createElement("canvas", {
      className : this.props.className,
      style : renderImageToCanvas({}, r20, {
        width : opts.displayCanvasSize,
        height : opts.displayCanvasSize
      }),
      width : opts.physicalCanvasSize,
      height : opts.physicalCanvasSize,
      /**
       * @param {?} i
       * @return {?}
       */
      ref : function(i) {
        return first.$StoryRing1 = i;
      }
    });
  };
  attributes.defaultProps = {
    isCenterOnAvatar : false,
    isLoading : false,
    size : 30
  };
  meta.a = Object($this.connect)(function(beez) {
    return{
      pixelRatio : beez.displayProperties.pixelRatio || 1
    };
  })(attributes);
}, function(dataAndEvents, fnc, ret) {
  /**
   * @param {Function} tests
   * @return {?}
   */
  fnc.a = function(tests) {
    return tests.children;
  };
  var rreturn = ret(0);
  ret.n(rreturn);
}, function(dataAndEvents, fnc, parseInt) {
  /**
   * @param {Object} file
   * @param {?} path
   * @return {?}
   */
  function getFile(file, path) {
    return file.likedByLists.get(path);
  }
  /**
   * @param {Object} iterable
   * @param {Array} arr
   * @return {?}
   */
  function each(iterable, arr) {
    var object = {};
    var key;
    for (key in iterable) {
      if (!(arr.indexOf(key) >= 0)) {
        if (Object.prototype.hasOwnProperty.call(iterable, key)) {
          object[key] = iterable[key];
        }
      }
    }
    return object;
  }
  /**
   * @return {undefined}
   */
  function r() {
    ctor.apply(this, arguments);
  }
  /**
   * @return {?}
   */
  function attributes() {
    var value;
    var _ref2;
    var _this = this;
    /** @type {number} */
    var l = arguments.length;
    /** @type {Array} */
    var args = Array(l);
    /** @type {number} */
    var i = 0;
    for (;i < l;i++) {
      args[i] = arguments[i];
    }
    return value = (_ref2 = token.constructor).call.apply(_ref2, [this].concat(args)), this.state = {
      isShowingTags : false,
      isShowingIndicator : true,
      tagMargins : new keys.a
    }, this.$PhotoWithUserTags1 = new keys.a, this.$PhotoWithUserTags4 = function() {
      Object(border.b)(function() {
        if (_this.$PhotoWithUserTags8) {
          var padding = _this.$PhotoWithUserTags7(_this.$PhotoWithUserTags8);
          var self = new keys.a;
          _this.$PhotoWithUserTags1.forEach(function(slide, cacheKey) {
            var e = Object(charCodeToReplace.findDOMNode)(slide);
            var rect = _this.$PhotoWithUserTags7(e);
            /** @type {number} */
            var l = -rect.width / 2;
            /** @type {number} */
            var y = cosTheta;
            var style = {
              bottom : rect.bottom - padding.bottom + y,
              left : rect.left - padding.left + l,
              right : rect.right - padding.right + l,
              top : rect.top - padding.top + y
            };
            if (style.right > 0) {
              l -= style.right;
            } else {
              if (style.left < 0) {
                l -= style.left;
              }
            }
            if (style.bottom > 0) {
              y -= style.bottom;
            } else {
              if (style.top < 0) {
                y -= style.top;
              }
            }
            self.set(cacheKey, {
              left : l,
              top : y
            });
          });
          _this.setState({
            tagMargins : self
          });
        }
      });
    }, this.$PhotoWithUserTags9 = function() {
      if (!_this.$PhotoWithUserTags6) {
        _this.$PhotoWithUserTags6 = h.a.setTimeout(_this.$PhotoWithUserTags10, hideDelay);
      }
    }, this.$PhotoWithUserTags11 = function() {
      if (_this.$PhotoWithUserTags6) {
        h.a.clearTimeout(_this.$PhotoWithUserTags6);
        /** @type {null} */
        _this.$PhotoWithUserTags6 = null;
      }
    }, this.$PhotoWithUserTags10 = function() {
      _this.setState({
        isShowingIndicator : false
      });
      /** @type {null} */
      _this.$PhotoWithUserTags6 = null;
    }, this.$PhotoWithUserTags5 = doTransition(function() {
      /** @type {boolean} */
      var isShowingIndicator = !_this.state.isShowingTags;
      _this.$PhotoWithUserTags11();
      _this.setState({
        isShowingIndicator : isShowingIndicator || _this.props.alwaysShowIndicator,
        isShowingTags : isShowingIndicator
      });
    }), this.$PhotoWithUserTags3 = function() {
      if (!_this.state.isShowingTags) {
        if (!_this.props.alwaysShowIndicator) {
          _this.$PhotoWithUserTags9();
        }
      }
    }, this.$PhotoWithUserTags2 = function() {
      if (!_this.state.isShowingTags) {
        _this.$PhotoWithUserTags11();
        _this.setState({
          isShowingIndicator : true
        });
      }
    }, this.$PhotoWithUserTags12 = function() {
      return _this.props.usertags.map(function(user) {
        var cacheKey = authenticate(user);
        var data = _this.state.tagMargins.get(cacheKey) || ev;
        var style = {
          marginLeft : data.left,
          marginTop : data.top,
          left : 100 * user.x + "%",
          top : 100 * user.y + "%"
        };
        return self.createElement(n, {
          className : "_n1lhu",
          key : cacheKey,
          LinkComponent : _this.props.LinkComponent,
          /**
           * @param {?} id
           * @return {?}
           */
          ref : function(id) {
            return _this.$PhotoWithUserTags1.set(cacheKey, id);
          },
          style : style,
          user : user.user
        });
      });
    }, value;
  }
  /**
   * @param {Object} req
   * @return {?}
   */
  function authenticate(req) {
    return "usertag-" + (req && (req.user && req.user.username));
  }
  /**
   * @param {Object} o
   * @param {Array} arg
   * @return {?}
   */
  function require(o, arg) {
    var cache = {};
    var prop;
    for (prop in o) {
      if (!(arg.indexOf(prop) >= 0)) {
        if (Object.prototype.hasOwnProperty.call(o, prop)) {
          cache[prop] = o[prop];
        }
      }
    }
    return cache;
  }
  /**
   * @param {Function} tests
   * @return {undefined}
   */
  function fn(tests) {
    var self = this;
    proto.constructor.call(this, tests);
    /**
     * @param {number} number
     * @param {number} val1
     * @return {undefined}
     */
    this.$Sidecar2 = function(number, val1) {
      /** @type {number} */
      var num = number;
      if (num != self.state.sidecarChildIndex) {
        if (num >= 0) {
          if (num < self.props.sidecarChildren.length) {
            self.setState({
              sidecarChildIndex : num
            });
          }
        }
      }
    };
    /**
     * @param {?} millis
     * @param {?} until
     * @return {undefined}
     */
    this.$Sidecar3 = function(millis, until) {
      self.setState({
        mediaWidth : millis
      });
    };
    /**
     * @param {string} dataAndEvents
     * @param {?} event
     * @return {undefined}
     */
    this.$Sidecar4 = function(dataAndEvents, event) {
      if (!event.nativeEvent.metaKey && !event.nativeEvent.ctrlKey) {
        event.preventDefault();
        self.$Sidecar5({
          source : "non_hscroll",
          type : "click"
        });
        /** @type {number} */
        var type = "prev" === dataAndEvents ? -1 : 1;
        var msg = self.state.sidecarChildIndex + type;
        if (msg >= 0) {
          if (msg < self.props.sidecarChildren.length) {
            self.setState({
              sidecarChildIndex : msg
            });
          }
        }
      }
    };
    /**
     * @param {Object} $scope
     * @return {undefined}
     */
    this.$Sidecar5 = function($scope) {
      var timeoutKey = $scope.source + $scope.type;
      if (!self.hasLoggedSidecarEngagement[timeoutKey]) {
        Object(frame.logAction_DEPRECATED)("sidecarEngagement", $scope);
        /** @type {boolean} */
        self.hasLoggedSidecarEngagement[timeoutKey] = true;
      }
    };
    this.state = {
      sidecarChildIndex : 0,
      mediaWidth : 0
    };
    this.hasLoggedSidecarEngagement = {};
    this.useScrollableMedia = bt.a.lookup("sidecar").getBoolParam("sidecar_swipe", false);
  }
  /**
   * @param {Object} obj
   * @param {Array} attr
   * @return {?}
   */
  function has(obj, attr) {
    var querystring = {};
    var i;
    for (i in obj) {
      if (!(attr.indexOf(i) >= 0)) {
        if (Object.prototype.hasOwnProperty.call(obj, i)) {
          querystring[i] = obj[i];
        }
      }
    }
    return querystring;
  }
  /**
   * @param {Touch} touch2
   * @param {Touch} touch1
   * @return {?}
   */
  function getDistance(touch2, touch1) {
    return Math.pow(touch2.pageX - touch1.pageX, 2) + Math.pow(touch2.pageY - touch1.pageY, 2) <= Ue;
  }
  /**
   * @return {?}
   */
  function gl() {
    var value;
    var _ref2;
    var me = this;
    /** @type {number} */
    var l = arguments.length;
    /** @type {Array} */
    var args = Array(l);
    /** @type {number} */
    var i = 0;
    for (;i < l;i++) {
      args[i] = arguments[i];
    }
    return value = (_ref2 = basePrototype.constructor).call.apply(_ref2, [this].concat(args)), this.state = {
      likeEventCount : 0,
      shouldShowGatingOverlay : true
    }, this.$Media1 = 0, this.$Media2 = 0, this.$Media3 = null, this.$Media4 = null, this.$Media5 = function() {
      me.$Media6();
    }, this.$Media7 = function(types) {
      types.preventDefault();
    }, this.$Media8 = function(orig) {
      if (0 === orig.touches.length && (me.$Media4 && me.$Media3)) {
        var end_distance = getDistance(me.$Media4, me.$Media3);
        me.$Media1++;
        if (2 === me.$Media1) {
          if (end_distance) {
            /** @type {number} */
            me.$Media1 = 0;
            me.$Media6();
          }
        }
        /** @type {null} */
        me.$Media4 = null;
      }
    }, this.$Media9 = function(orig) {
      if (1 === orig.touches.length && me.$Media4) {
        var touch1 = orig.touches[0];
        if (!getDistance(me.$Media4, touch1)) {
          /** @type {number} */
          me.$Media1 = 0;
          /** @type {null} */
          me.$Media4 = null;
          /** @type {null} */
          me.$Media3 = null;
        }
      }
    }, this.$Media10 = function(orig) {
      if (null != me.$Media2) {
        if ((new Date).getTime() - me.$Media2 > Fe) {
          /** @type {number} */
          me.$Media1 = 0;
        }
      }
      if (1 === orig.touches.length) {
        me.$Media4 = orig.touches[0];
        /** @type {number} */
        me.$Media2 = (new Date).getTime();
        if (0 === me.$Media1) {
          me.$Media3 = me.$Media4;
        }
      }
    }, this.$Media11 = function() {
      me.setState({
        shouldShowGatingOverlay : false
      });
    }, this.$Media12 = function(fn, timeTaken) {
      var throttledUpdate = me.props.onMediaRendered;
      if (!me.props.isVideo) {
        if (throttledUpdate) {
          throttledUpdate({
            timeTaken : timeTaken,
            resourceName : fn,
            mediaType : "Photo"
          });
        }
      }
    }, value;
  }
  /**
   * @param {Element} x
   * @return {?}
   */
  function update(x) {
    var camelKey = arguments.length > 1 && (void 0 !== arguments[1] && arguments[1]);
    var PAGESIZE = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
    var sample_size = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
    if (element) {
      if (null === element.parentNode) {
        document.body.appendChild(element);
      }
    } else {
      /** @type {Element} */
      element = document.createElement("textarea");
      document.body.appendChild(element);
    }
    var data = check(x, camelKey);
    var size = data.paddingSize;
    var length = data.borderSize;
    var method = data.boxSizing;
    var info = data.sizingStyle;
    Object.keys(info).map(function(name) {
      element.style[name] = info[name];
    });
    Object.keys(styles).map(function(prop) {
      element.style.setProperty(prop, styles[prop], "important");
    });
    element.value = x.value || (x.placeholder || "x");
    /** @type {number} */
    var start = -1 / 0;
    /** @type {number} */
    var y = 1 / 0;
    var height = element.scrollHeight;
    if ("border-box" === method ? height += length : "content-box" === method && (height -= size), null !== PAGESIZE || null !== sample_size) {
      /** @type {string} */
      element.value = "x";
      /** @type {number} */
      var i = element.scrollHeight - size;
      if (null !== PAGESIZE) {
        /** @type {number} */
        start = i * PAGESIZE;
        if ("border-box" === method) {
          start = start + size + length;
        }
        /** @type {number} */
        height = Math.max(start, height);
      }
      if (null !== sample_size) {
        /** @type {number} */
        y = i * sample_size;
        if ("border-box" === method) {
          y = y + size + length;
        }
        /** @type {number} */
        height = Math.min(y, height);
      }
    }
    return{
      height : height,
      minHeight : start,
      maxHeight : y
    };
  }
  /**
   * @param {Element} elem
   * @return {?}
   */
  function check(elem) {
    var cid = arguments.length > 1 && (void 0 !== arguments[1] && arguments[1]);
    var k = elem.getAttribute("id") || (elem.getAttribute("data-reactid") || elem.getAttribute("name"));
    if (cid && cache[k]) {
      return cache[k];
    }
    /** @type {(CSSStyleDeclaration|null)} */
    var el = window.getComputedStyle(elem);
    /** @type {string} */
    var boxSizing = el.getPropertyValue("box-sizing") || (el.getPropertyValue("-moz-box-sizing") || el.getPropertyValue("-webkit-box-sizing"));
    /** @type {number} */
    var paddingSize = parseFloat(el.getPropertyValue("padding-bottom")) + parseFloat(el.getPropertyValue("padding-top"));
    /** @type {number} */
    var borderSize = parseFloat(el.getPropertyValue("border-bottom-width")) + parseFloat(el.getPropertyValue("border-top-width"));
    var v = {
      sizingStyle : dirtyattrs.reduce(function(employees, i) {
        return employees[i] = el.getPropertyValue(i), employees;
      }, {}),
      paddingSize : paddingSize,
      borderSize : borderSize,
      boxSizing : boxSizing
    };
    return cid && (k && (cache[k] = v)), v;
  }
  /**
   * @param {Object} b
   * @param {Array} exclude
   * @return {?}
   */
  function merge(b, exclude) {
    var _new = {};
    var name;
    for (name in b) {
      if (!(exclude.indexOf(name) >= 0)) {
        if (Object.prototype.hasOwnProperty.call(b, name)) {
          _new[name] = b[name];
        }
      }
    }
    return _new;
  }
  /**
   * @param {?} obj
   * @param {Function} type
   * @return {undefined}
   */
  function bind(obj, type) {
    if (!(obj instanceof type)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
  /**
   * @param {string} dataAndEvents
   * @param {?} obj
   * @return {?}
   */
  function isRegExp(dataAndEvents, obj) {
    if (!dataAndEvents) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return!obj || "object" != typeof obj && "function" != typeof obj ? dataAndEvents : obj;
  }
  /**
   * @param {Object} self
   * @param {Array} b
   * @return {undefined}
   */
  function f(self, b) {
    if ("function" != typeof b && null !== b) {
      throw new TypeError("Super expression must either be null or a function, not " + typeof b);
    }
    /** @type {Object} */
    self.prototype = Object.create(b && b.prototype, {
      constructor : {
        value : self,
        enumerable : false,
        writable : true,
        configurable : true
      }
    });
    if (b) {
      if (Object.setPrototypeOf) {
        Object.setPrototypeOf(self, b);
      } else {
        /** @type {Array} */
        self.__proto__ = b;
      }
    }
  }
  /**
   * @param {Function} callback
   * @return {?}
   */
  function requestAnimationFrame(callback) {
    return window.requestAnimationFrame ? window.requestAnimationFrame(callback) : window.setTimeout(callback, 1);
  }
  /**
   * @param {?} id
   * @return {undefined}
   */
  function cancelAnimationFrame(id) {
    if (window.cancelAnimationFrame) {
      window.cancelAnimationFrame(id);
    } else {
      window.clearTimeout(id);
    }
  }
  /**
   * @param {Function} tests
   * @return {undefined}
   */
  function opt_attributes(tests) {
    var _this = this;
    base.constructor.call(this, tests);
    this.$PostCommentInput1 = Object(b.a)(function(deepDataAndEvents) {
      _this.props.onCommentChange(deepDataAndEvents);
      _this.setState({
        needsFlush : false
      });
    }, 750);
    /**
     * @param {Event} types
     * @return {undefined}
     */
    this.$PostCommentInput3 = function(types) {
      types.preventDefault();
      if (!_this.$PostCommentInput2()) {
        _this.$PostCommentInput1.reset();
        _this.props.onCommentChange(_this.state.pendingComment);
        _this.props.onCommentSubmit();
        if (_this.$PostCommentInput4) {
          _this.$PostCommentInput4.blur();
        }
      }
    };
    /**
     * @param {Event} event
     * @return {undefined}
     */
    this.$PostCommentInput5 = function(event) {
      if (!("Enter" !== event.key)) {
        if (!event.shiftKey) {
          _this.$PostCommentInput3(event);
        }
      }
    };
    /**
     * @param {boolean} value
     * @return {undefined}
     */
    this.$PostCommentInput6 = function(value) {
      _this.setState({
        pendingComment : value.target.value,
        needsFlush : true
      });
      _this.$PostCommentInput1(value.target.value);
    };
    /**
     * @param {boolean} status
     * @return {undefined}
     */
    this.$PostCommentInput7 = function(status) {
      /** @type {boolean} */
      _this.$PostCommentInput4 = status;
      if (_this.props.inputRef) {
        _this.props.inputRef(status);
      }
    };
    /**
     * @param {?} dataAndEvents
     * @return {undefined}
     */
    this.$PostCommentInput8 = function(dataAndEvents) {
      _this.setState({
        hasBeenFocused : true
      }, function() {
        clear()(_this.$PostCommentInput4).focus();
      });
    };
    this.state = {
      hasBeenFocused : false,
      needsFlush : false,
      pendingComment : tests.defaultPendingComment || ""
    };
  }
  /**
   * @param {Function} tests
   * @return {undefined}
   */
  function req(tests) {
    var self = this;
    prototype.constructor.call(this, tests);
    /**
     * @param {?} e
     * @return {undefined}
     */
    this.$DeleteCommentModal1 = function(e) {
      Object(frame.logAction_DEPRECATED)("commentDelete", {
        source : self.props.analyticsContext
      });
      self.props.onDeleteClick();
      self.props.onClose(e);
    };
  }
  /**
   * @return {undefined}
   */
  function scope() {
    value.apply(this, arguments);
  }
  /**
   * @param {Object} data
   * @param {Array} params
   * @return {?}
   */
  function format(data, params) {
    var cache = {};
    var prop;
    for (prop in data) {
      if (!(params.indexOf(prop) >= 0)) {
        if (Object.prototype.hasOwnProperty.call(data, prop)) {
          cache[prop] = data[prop];
        }
      }
    }
    return cache;
  }
  /**
   * @return {?}
   */
  function render() {
    var value;
    var _ref2;
    var point = this;
    /** @type {number} */
    var l = arguments.length;
    /** @type {Array} */
    var args = Array(l);
    /** @type {number} */
    var i = 0;
    for (;i < l;i++) {
      args[i] = arguments[i];
    }
    return value = (_ref2 = _this.constructor).call.apply(_ref2, [this].concat(args)), this.state = {
      isExpanded : false
    }, this.$TruncatedText1 = Object(major.a)(function(y) {
      if (!y) {
        return y;
      }
      var x = y.search(query);
      var nextY = x > 0 ? y.slice(0, x) : y;
      return compiled()(nextY, {
        length : len,
        omission : "",
        separator : /\s+/
      });
    }), this.$TruncatedText5 = function(ast) {
      ast.preventDefault();
      point.setState(function() {
        return{
          isExpanded : true
        };
      });
    }, value;
  }
  /**
   * @return {?}
   */
  function $() {
    var flat;
    var _ref;
    var me = this;
    /** @type {number} */
    var l = arguments.length;
    /** @type {Array} */
    var args = Array(l);
    /** @type {number} */
    var i = 0;
    for (;i < l;i++) {
      args[i] = arguments[i];
    }
    return flat = (_ref = mod.constructor).call.apply(_ref, [this].concat(args)), this.$PostComment1 = function(thisObj) {
      var makeIterator = me.props.onDeleteCommentClick;
      if (makeIterator) {
        makeIterator(clear()(me.props.id), thisObj);
      }
    }, flat;
  }
  /**
   * @param {Function} tests
   * @return {undefined}
   */
  function Text(tests) {
    var me = this;
    superObject.constructor.call(this, tests);
    /**
     * @param {?} dataAndEvents
     * @param {?} var_args
     * @return {undefined}
     */
    this.$PostComments3 = function(dataAndEvents, var_args) {
      me.setState({
        commentToDeleteId : dataAndEvents,
        showDeleteCommentModal : true
      });
    };
    /**
     * @return {undefined}
     */
    this.$PostComments4 = function() {
      me.setState({
        commentToDeleteId : null,
        showDeleteCommentModal : false
      });
    };
    /**
     * @param {?} ast
     * @return {undefined}
     */
    this.$PostComments5 = function(ast) {
      ast.preventDefault();
      me.props.loadMore();
    };
    this.state = {
      commentToDeleteId : null,
      showDeleteCommentModal : false,
      showEmbedCodeModal : false,
      showOptionsModal : false,
      showReportInappropriateModal : false
    };
    /** @type {null} */
    this.$PostComments1 = null;
  }
  /**
   * @return {?}
   */
  function context() {
    var value;
    var _ref2;
    var inNode = this;
    /** @type {number} */
    var l = arguments.length;
    /** @type {Array} */
    var args = Array(l);
    /** @type {number} */
    var i = 0;
    for (;i < l;i++) {
      args[i] = arguments[i];
    }
    return value = (_ref2 = method.constructor).call.apply(_ref2, [this].concat(args)), this.handleClick = function(e) {
      e.preventDefault();
      inNode.props.onClick(e);
    }, value;
  }
  /**
   * @return {?}
   */
  function map() {
    var value;
    var _ref2;
    var plugin = this;
    /** @type {number} */
    var l = arguments.length;
    /** @type {Array} */
    var args = Array(l);
    /** @type {number} */
    var i = 0;
    for (;i < l;i++) {
      args[i] = arguments[i];
    }
    return value = (_ref2 = o1.constructor).call.apply(_ref2, [this].concat(args)), this.$LikeButton1 = function(ast) {
      ast.preventDefault();
      plugin.props.onChange(!plugin.props.isLiked);
    }, value;
  }
  /**
   * @return {?}
   */
  function log() {
    var value;
    var _ref2;
    var plugin = this;
    /** @type {number} */
    var l = arguments.length;
    /** @type {Array} */
    var args = Array(l);
    /** @type {number} */
    var i = 0;
    for (;i < l;i++) {
      args[i] = arguments[i];
    }
    return value = (_ref2 = superClass.constructor).call.apply(_ref2, [this].concat(args)), this.$SaveButton1 = function(ast) {
      ast.preventDefault();
      plugin.props.onChange(!plugin.props.isSaved);
    }, value;
  }
  /**
   * @return {?}
   */
  function t() {
    var value;
    var _ref2;
    var me = this;
    /** @type {number} */
    var l = arguments.length;
    /** @type {Array} */
    var args = Array(l);
    /** @type {number} */
    var i = 0;
    for (;i < l;i++) {
      args[i] = arguments[i];
    }
    return value = (_ref2 = derived_proto.constructor).call.apply(_ref2, [this].concat(args)), this.$PostFeedbackControls2 = function(newStatus) {
      if (me.props.isLoggedIn) {
        me.props.onLikeChange(newStatus, "likeButton");
      } else {
        me.$PostFeedbackControls1();
      }
    }, this.$PostFeedbackControls3 = function(newStatus) {
      if (me.props.isLoggedIn) {
        me.props.onSaveChange(newStatus);
      } else {
        me.$PostFeedbackControls1();
      }
    }, this.$PostFeedbackControls4 = function() {
      if (me.props.isLoggedIn) {
        me.props.onCommentClick();
      } else {
        me.$PostFeedbackControls1();
      }
    }, value;
  }
  /**
   * @return {undefined}
   */
  function module() {
    state.apply(this, arguments);
  }
  /**
   * @return {undefined}
   */
  function row() {
    parent.apply(this, arguments);
  }
  /**
   * @return {undefined}
   */
  function request() {
    callback.apply(this, arguments);
  }
  /**
   * @return {?}
   */
  function layout() {
    /** @type {(Array.<string>|null)} */
    var octalLiteral = navigator.userAgent.match(/\sFirefox\/(\d+)\.\d+/);
    return octalLiteral && parseInt(octalLiteral[1]) < 41;
  }
  /**
   * @return {?}
   */
  function error() {
    /** @type {(Array.<string>|null)} */
    var octalLiteral = navigator.userAgent.match(/\sChrome\/(\d+)\.\d+/);
    return octalLiteral && parseInt(octalLiteral[1]) >= 43;
  }
  /**
   * @return {?}
   */
  function paste() {
    return!!numGuis.canUseDOM && (!layout() && (!!error() || "function" == typeof document.queryCommandSupported && document.queryCommandSupported("copy")));
  }
  /**
   * @param {?} value
   * @param {Element} group
   * @return {?}
   */
  function set(value, group) {
    group = group || clear()(document.body);
    /** @type {boolean} */
    var copyIsArray = true;
    /** @type {Element} */
    var element = document.createElement("textarea");
    group.appendChild(element);
    element.value = value;
    element.select();
    try {
      copyIsArray = document.execCommand("copy");
    } catch (e) {
      /** @type {boolean} */
      copyIsArray = false;
    }
    return group.removeChild(element), copyIsArray;
  }
  /**
   * @param {Function} tests
   * @return {undefined}
   */
  function process(tests) {
    var me = this;
    p.constructor.call(this, tests);
    /**
     * @param {?} ast
     * @return {undefined}
     */
    this.$EmbedModal8 = function(ast) {
      var postdata = {
        source : me.props.analyticsContext,
        type : me.props.isVideo ? "video" : "photo"
      };
      if (set(me.state.embedCode)) {
        Object(frame.logAction_DEPRECATED)("embedCodeCopy", postdata);
        me.setState({
          justCopiedCode : true
        });
        /** @type {number} */
        me.$EmbedModal3 = setTimeout(function() {
          me.setState({
            justCopiedCode : false
          });
          delete me.$EmbedModal3;
        }, 3E3);
      } else {
        Object(frame.logAction_DEPRECATED)("embedCodeFailToCopy", postdata);
      }
    };
    /**
     * @param {?} ast
     * @return {undefined}
     */
    this.$EmbedModal9 = function(ast) {
      me.setState({
        textareaFocused : false
      });
    };
    /**
     * @param {?} dataAndEvents
     * @return {undefined}
     */
    this.$EmbedModal10 = function(dataAndEvents) {
      me.setState({
        textareaFocused : true
      });
      me.$EmbedModal6();
    };
    /**
     * @param {Event} e
     * @return {undefined}
     */
    this.$EmbedModal11 = function(e) {
      var target = e.target;
      if (!(target instanceof HTMLTextAreaElement)) {
        val()(0);
      }
      me.setState({
        textSelected : 0 === target.selectionStart && target.selectionEnd >= target.value.length
      });
    };
    /**
     * @param {?} ast
     * @return {undefined}
     */
    this.$EmbedModal12 = function(ast) {
      me.$EmbedModal6();
    };
    /**
     * @param {boolean} e
     * @return {undefined}
     */
    this.$EmbedModal13 = function(e) {
      me.setState({
        includeCaption : !!e.target.checked
      });
    };
    this.$EmbedModal1 = {};
    this.state = {
      embedCode : "",
      fetchingCode : false,
      includeCaption : true,
      justCopiedCode : false,
      textareaFocused : false,
      textSelected : false
    };
  }
  /**
   * @param {string} id
   * @return {?}
   */
  function handle(id) {
    return function() {
      return{
        activeModal : id
      };
    };
  }
  /**
   * @return {?}
   */
  function constructor() {
    var value;
    var _ref2;
    var self = this;
    /** @type {number} */
    var l = arguments.length;
    /** @type {Array} */
    var args = Array(l);
    /** @type {number} */
    var i = 0;
    for (;i < l;i++) {
      args[i] = arguments[i];
    }
    return value = (_ref2 = superclass.constructor).call.apply(_ref2, [this].concat(args)), this.state = {
      activeModal : null
    }, this.handleModalClose = function() {
      self.setState(handle(null));
    }, this.handleOptionsModalOpen = function() {
      self.setState(handle("options"));
    }, this.handleEmbedModalOpen = function() {
      Object(frame.logAction_DEPRECATED)("embedCodeClick", {
        source : self.props.analyticsContext,
        type : self.props.isVideo ? "video" : "photo"
      });
      self.setState(handle("embed"));
    }, this.handleReportModalOpen = function() {
      self.setState(handle("report"));
    }, this.handleDeleteModalOpen = function() {
      /** @type {string} */
      var type = self.props.isVideo ? "video" : self.props.isSidecar ? "sidecar" : "photo";
      Object(frame.logAction_DEPRECATED)("delete_post_click", {
        source : self.props.analyticsContext,
        type : type
      });
      self.setState(handle("delete"));
    }, this.handleDeleteClick = function() {
      Y.a.dispatch(Object(cssKeys.k)(self.props.id));
      self.setState(handle(null));
    }, value;
  }
  /**
   * @param {number} v
   * @return {?}
   */
  function complete(v) {
    return 1 === v ? parseInt(5)("{count} visualiza\u00c3\u00a7\u00c3\u00a3o", {
      count : v
    }) : parseInt(5)("{count} visualiza\u00c3\u00a7\u00c3\u00b5es", {
      count : self.createElement(s.a, {
        shortenNumber : false,
        value : v
      })
    });
  }
  /**
   * @param {number} result
   * @return {?}
   */
  function success(result) {
    return 1 === result ? parseInt(5)("{count} curtida", {
      count : result
    }) : parseInt(5)("{count} curtidas", {
      count : self.createElement(s.a, {
        shortenNumber : false,
        value : result
      })
    });
  }
  /**
   * @param {Function} tests
   * @return {undefined}
   */
  function Class(tests) {
    var me = this;
    superPrototype.constructor.call(this, tests);
    /**
     * @param {?} ast
     * @return {undefined}
     */
    this.$PostViews1 = function(ast) {
      if (!me.state.overlayVisible) {
        Object(frame.logAction_DEPRECATED)("viewCountClick", {
          source : me.props.analyticsContext
        });
      }
      me.setState({
        overlayVisible : !me.state.overlayVisible
      });
    };
    this.state = {
      overlayVisible : false
    };
  }
  /**
   * @return {?}
   */
  function sub() {
    var isFunction;
    var value;
    var me = this;
    /** @type {number} */
    var l = arguments.length;
    /** @type {Array} */
    var args = Array(l);
    /** @type {number} */
    var i = 0;
    for (;i < l;i++) {
      args[i] = arguments[i];
    }
    return isFunction = (value = event.constructor).call.apply(value, [this].concat(args)), this.$PostSocialProof1 = function() {
      me.props.onLikeChange(true, "beTheFirstPrompt");
    }, isFunction;
  }
  /**
   * @return {?}
   */
  function result() {
    var value;
    var _ref2;
    var self = this;
    /** @type {number} */
    var l = arguments.length;
    /** @type {Array} */
    var args = Array(l);
    /** @type {number} */
    var i = 0;
    for (;i < l;i++) {
      args[i] = arguments[i];
    }
    return value = (_ref2 = response.constructor).call.apply(_ref2, [this].concat(args)), this.state = {
      mediaVisiblePercent : null,
      pageVisible : !child.a.isHidden(),
      isCommentInputVisible : false,
      showLikedByList : false,
      showUnsaveFromCollectionDialog : false
    }, this.$Post1 = false, this.$Post2 = null, this.$Post5 = function() {
      return!self.$Post1 && (!self.props.post.isVideo && !self.props.post.isSidecar);
    }, this.$Post6 = function() {
      if (self.props.variant === res.a.feed) {
        if (Object(next.H)("ai")) {
          Object(frame.logAction_DEPRECATED)("feedItemImpression", {
            postId : self.props.post.id
          });
        }
      }
    }, this.$Post8 = function(dataAndEvents, event) {
      var newMillis = {
        mechanic : event,
        source : self.props.analyticsContext
      };
      if (dataAndEvents) {
        if (!self.props.post.likedByViewer) {
          self.props.onLikePost(self.props.post.id, newMillis);
        }
      } else {
        self.props.onUnlikePost(self.props.post.id, newMillis);
      }
    }, this.$Post9 = function() {
      self.$Post8(true, "doubleTap");
    }, this.$Post10 = function(dataAndEvents) {
      self.setState({
        mediaVisiblePercent : dataAndEvents
      });
    }, this.$Post11 = function() {
      if (Object(next.C)()) {
        clear()(self.$Post12).focus();
      }
      self.setState({
        isCommentInputVisible : true
      }, function() {
        clear()(self.$Post12).focus();
      });
    }, this.$Post13 = function(newStatus) {
      /** @type {boolean} */
      self.$Post12 = newStatus;
    }, this.$Post15 = function(newStatus) {
      var conf = {
        source : self.props.analyticsContext
      };
      if (newStatus) {
        if (!self.props.post.savedByViewer) {
          self.props.onSavePressed(self.props.post.id, conf);
        }
      } else {
        if (self.props.post.savedByViewer) {
          if (self.props.post.savedByViewerToCollection) {
            Object(frame.logAction_DEPRECATED)("removeSavedITemFromCollectionDialogShown");
            self.setState({
              showUnsaveFromCollectionDialog : true
            });
          } else {
            self.props.onUnsavePressed(self.props.post.id, conf);
          }
        }
      }
    }, this.$Post16 = function() {
      Object(frame.logAction_DEPRECATED)("removeSavedITemFromCollectionDialogCancelled");
      self.setState({
        showUnsaveFromCollectionDialog : false
      });
    }, this.$Post17 = function() {
      var conf = {
        source : self.props.analyticsContext
      };
      self.setState({
        showUnsaveFromCollectionDialog : false
      });
      self.props.onUnsavePressed(self.props.post.id, conf);
      Object(frame.logAction_DEPRECATED)("removeSavedITemFromCollectionDialogAccepted");
    }, this.$Post18 = function() {
      self.setState({
        showLikedByList : false
      });
    }, this.$Post19 = function(dataAndEvents) {
      self.setState({
        showLikedByList : true
      });
    }, this.setPostMediaRendered = function(timeTaken) {
      self.$Post2 = timeTaken;
    }, value;
  }
  var ctor;
  var eventEmitter;
  var div = parseInt(6);
  var clear = parseInt.n(div);
  var pos = parseInt(381);
  var color = parseInt(109);
  var cfg = parseInt(953);
  var next = parseInt(2);
  var el = parseInt(313);
  var num2 = parseInt(11);
  var createTextNode = parseInt.n(num2);
  var m = parseInt(536);
  var frame = parseInt(7);
  var opts = parseInt(37);
  var actual = parseInt(253);
  var item = parseInt(894);
  var border = parseInt(93);
  var h = parseInt(85);
  var ArrayProto = parseInt(537);
  var keys = parseInt.n(ArrayProto);
  /** @type {number} */
  var quietMillis = 300;
  /**
   * @param {Function} callback
   * @param {?} router
   * @return {?}
   */
  var doTransition = function(callback, router) {
    /**
     * @return {undefined}
     */
    function mousemove() {
      /** @type {number} */
      var l = arguments.length;
      /** @type {Array} */
      var args = Array(l);
      /** @type {number} */
      var i = 0;
      for (;i < l;i++) {
        args[i] = arguments[i];
      }
      if (timeoutKey) {
        h.a.clearTimeout(timeoutKey);
        /** @type {null} */
        timeoutKey = null;
      } else {
        timeoutKey = h.a.setTimeout(function() {
          callback.apply(router, args);
          /** @type {null} */
          timeoutKey = null;
        }, quietMillis);
      }
    }
    var timeoutKey = void 0;
    return mousemove.cancel = function() {
      if (timeoutKey) {
        h.a.clearTimeout(timeoutKey);
        /** @type {null} */
        timeoutKey = null;
      }
    }, mousemove;
  };
  var self = parseInt(0);
  var root = parseInt.n(self);
  var charCodeToReplace = parseInt(27);
  var group = Object.assign || function(opt_attributes) {
    /** @type {number} */
    var i = 1;
    for (;i < arguments.length;i++) {
      var iterable = arguments[i];
      var key;
      for (key in iterable) {
        if (Object.prototype.hasOwnProperty.call(iterable, key)) {
          opt_attributes[key] = iterable[key];
        }
      }
    }
    return opt_attributes;
  };
  parseInt(969);
  eventEmitter = (ctor = self.Component) && ctor.prototype;
  Object.assign(r, ctor);
  /** @type {function (): undefined} */
  (r.prototype = Object.create(eventEmitter)).constructor = r;
  r.__superConstructor__ = ctor;
  /**
   * @param {?} h
   * @return {?}
   */
  r.prototype.$UserTag1 = function(h) {
    return self.createElement("span", {
      className : "_mg43x"
    }, self.createElement("div", {
      className : "_ikwuo"
    }), h);
  };
  /**
   * @return {?}
   */
  r.prototype.render = function() {
    var obj = this.props;
    var h = obj.LinkComponent;
    var cls = obj.className;
    var user = obj.user;
    var value = each(obj, ["LinkComponent", "className", "user"]);
    return self.createElement(h, group({}, value, {
      className : createTextNode()(cls, "_4dsc8"),
      href : "/" + user.username + "/"
    }), this.$UserTag1(user.username));
  };
  var data;
  var token;
  /** @type {function (): undefined} */
  var n = r;
  var cb = Object.assign || function(opt_attributes) {
    /** @type {number} */
    var i = 1;
    for (;i < arguments.length;i++) {
      var iterable = arguments[i];
      var key;
      for (key in iterable) {
        if (Object.prototype.hasOwnProperty.call(iterable, key)) {
          opt_attributes[key] = iterable[key];
        }
      }
    }
    return opt_attributes;
  };
  parseInt(21);
  parseInt(967);
  /** @type {number} */
  var cosTheta = 6;
  /** @type {number} */
  var hideDelay = 2E3;
  var ev = {
    left : 0,
    top : 0
  };
  data = self.Component;
  token = data && data.prototype;
  Object.assign(attributes, data);
  /** @type {function (): ?} */
  (attributes.prototype = Object.create(token)).constructor = attributes;
  attributes.__superConstructor__ = data;
  /**
   * @param {Element} me
   * @return {undefined}
   */
  attributes.prototype.componentDidUpdate = function(me) {
    if (me.isVisible && !this.props.isVisible) {
      this.$PhotoWithUserTags2();
    } else {
      if (!me.isVisible) {
        if (this.props.isVisible) {
          this.$PhotoWithUserTags3();
        }
      }
    }
  };
  /**
   * @return {undefined}
   */
  attributes.prototype.componentDidMount = function() {
    this.$PhotoWithUserTags4();
  };
  /**
   * @return {undefined}
   */
  attributes.prototype.componentWillUnmount = function() {
    this.$PhotoWithUserTags5.cancel();
    h.a.clearTimeout(this.$PhotoWithUserTags6);
  };
  /**
   * @param {Element} el
   * @return {?}
   */
  attributes.prototype.$PhotoWithUserTags7 = function(el) {
    return{
      bottom : el.offsetTop + el.offsetHeight,
      height : el.offsetHeight,
      left : el.offsetLeft,
      right : el.offsetLeft + el.offsetWidth,
      top : el.offsetTop,
      width : el.offsetWidth
    };
  };
  /**
   * @return {?}
   */
  attributes.prototype.render = function() {
    var first = this;
    var props = this.props;
    var cls = props.className;
    var length = props.rich;
    var src = props.src;
    var i = props.srcSet;
    var _value = props.onLike;
    var l = props.onPhotoRendered;
    var state = this.state;
    var scope = state.isShowingTags;
    var object = state.isShowingIndicator;
    var obj = {};
    return this.props.dimensions && (obj.dimensions = this.props.dimensions), obj.likeEventCount = this.props.likeEventCount, self.createElement("div", {
      /**
       * @param {?} i
       * @return {?}
       */
      ref : function(i) {
        return first.$PhotoWithUserTags8 = i;
      },
      className : createTextNode()(cls, "_gvks1" + (scope ? " _emktf" : "") + (object ? " _jfgso" : ""))
    }, self.createElement(item.a, cb({}, obj, {
      className : "_pmuf1",
      onClick : this.$PhotoWithUserTags5,
      onLike : _value,
      onPhotoRendered : l,
      rich : length,
      src : src,
      srcSet : i
    })), this.$PhotoWithUserTags12(), self.createElement("div", {
      className : "_7i8tz coreSpriteUserTagIndicator",
      onClick : this.$PhotoWithUserTags5
    }));
  };
  attributes.defaultProps = {
    alwaysShowIndicator : false,
    containTagsInFrame : true
  };
  var config;
  var proto;
  /** @type {function (): ?} */
  var tagToInsert = attributes;
  var input = parseInt(926);
  var line = parseInt(933);
  var parsed = parseInt(922);
  var bt = parseInt(59);
  var doc = parseInt(887);
  var c = Object.assign || function(opt_attributes) {
    /** @type {number} */
    var i = 1;
    for (;i < arguments.length;i++) {
      var iterable = arguments[i];
      var key;
      for (key in iterable) {
        if (Object.prototype.hasOwnProperty.call(iterable, key)) {
          opt_attributes[key] = iterable[key];
        }
      }
    }
    return opt_attributes;
  };
  parseInt(21);
  parseInt(971);
  config = self.Component;
  proto = config && config.prototype;
  Object.assign(fn, config);
  /** @type {function (Function): undefined} */
  (fn.prototype = Object.create(proto)).constructor = fn;
  fn.__superConstructor__ = config;
  /**
   * @param {number} dist
   * @return {?}
   */
  fn.prototype.$Sidecar1 = function(dist) {
    return 3 * Math.pow(Math.abs(dist), 0.75);
  };
  /**
   * @param {string} _depth
   * @param {(RegExp|string)} onClick
   * @return {?}
   */
  fn.prototype.$Sidecar6 = function(_depth, onClick) {
    /** @type {boolean} */
    var first = !(this.props.isEmbed || this.props.commentsAreStacked);
    return self.createElement("a", {
      className : createTextNode()((first ? "_8kphn" : "") + (first ? "" : " _5wmqs"), _depth),
      onClick : onClick,
      role : "button"
    });
  };
  /**
   * @return {?}
   */
  fn.prototype.$Sidecar7 = function() {
    /** @type {null} */
    var $Sidecar6 = null;
    return this.state.sidecarChildIndex > 0 && ($Sidecar6 = this.$Sidecar6("_pak6p coreSpriteLeftChevron", this.$Sidecar4.bind(this, "prev"))), $Sidecar6;
  };
  /**
   * @return {?}
   */
  fn.prototype.$Sidecar8 = function() {
    /** @type {null} */
    var $Sidecar6 = null;
    return this.state.sidecarChildIndex < this.props.sidecarChildren.length - 1 && ($Sidecar6 = this.$Sidecar6("_by8kl coreSpriteRightChevron", this.$Sidecar4.bind(this, "next"))), $Sidecar6;
  };
  /**
   * @param {string} a
   * @param {boolean} b
   * @return {?}
   */
  fn.prototype.$Sidecar9 = function(a, b) {
    return self.createElement("div", {
      className : (b ? "_jzfl1" : "") + (b ? "" : " _5zbvx") + (a && !b ? " _c0g09" : "") + (a && b ? " _i22oc" : "")
    });
  };
  /**
   * @return {?}
   */
  fn.prototype.$Sidecar10 = function() {
    /** @type {Array} */
    var received = [];
    /** @type {boolean} */
    var first = !(this.props.isEmbed || this.props.commentsAreStacked);
    /** @type {number} */
    var i = 0;
    for (;i < this.props.sidecarChildren.length;i++) {
      /** @type {boolean} */
      var target = i == this.state.sidecarChildIndex;
      received.push(self.createElement("td", {
        key : i
      }, this.$Sidecar9(target, first)));
    }
    return self.createElement("div", {
      className : (first ? "_4c7y4" : "") + (first ? "" : " _g5463")
    }, self.createElement("table", {
      className : "_4ag49"
    }, self.createElement("tbody", null, self.createElement("tr", null, received))));
  };
  /**
   * @return {?}
   */
  fn.prototype.$Sidecar11 = function() {
    var test = this;
    var p = this.props;
    var pl = p.sidecarChildren;
    var isVisible = p.isVisible;
    var b = require(p, ["sidecarChildren", "isVisible"]);
    return 0 === this.state.mediaWidth ? null : pl.map(function(data, subKey) {
      return self.createElement(elm, c({
        key : subKey,
        className : "_8bjpz"
      }, data, b, {
        hideIndicatorIcon : true,
        isVisible : test.state.sidecarChildIndex === subKey && isVisible
      }));
    });
  };
  /**
   * @return {?}
   */
  fn.prototype.$Sidecar12 = function() {
    var pos = this.state.mediaWidth;
    return self.createElement("div", {
      className : "_k7ih4"
    }, self.createElement(doc.a, {
      onResize : this.$Sidecar3
    }, self.createElement(line.a, {
      cardWidth : pos,
      gapWidth : 0,
      getAnimationDuration : this.$Sidecar1,
      gutterWidth : 0,
      initialRenderedCount : 1,
      onLogEvent : this.$Sidecar5,
      onVisibilityChange : this.$Sidecar2,
      pagerVariant : parsed.b.sidecar
    }, this.$Sidecar11()), this.$Sidecar10()));
  };
  /**
   * @return {?}
   */
  fn.prototype.render = function() {
    if (this.useScrollableMedia) {
      return this.$Sidecar12();
    }
    var props = this.props;
    var length = props.sidecarChildren;
    var b = require(props, ["sidecarChildren"]);
    return self.createElement("div", {
      className : "_k7ih4"
    }, self.createElement(elm, c({
      className : "_8bjpz"
    }, length[this.state.sidecarChildIndex], b, {
      hideIndicatorIcon : true
    })), this.$Sidecar7(), this.$Sidecar8(), this.$Sidecar10());
  };
  var options;
  var basePrototype;
  /** @type {function (Function): undefined} */
  var org = fn;
  var datum = parseInt(525);
  var l = parseInt(889);
  var templateFunc = Object.assign || function(opt_attributes) {
    /** @type {number} */
    var i = 1;
    for (;i < arguments.length;i++) {
      var iterable = arguments[i];
      var key;
      for (key in iterable) {
        if (Object.prototype.hasOwnProperty.call(iterable, key)) {
          opt_attributes[key] = iterable[key];
        }
      }
    }
    return opt_attributes;
  };
  /** @type {number} */
  var Fe = 300;
  /** @type {number} */
  var Ue = Math.pow(40, 2);
  options = self.Component;
  basePrototype = options && options.prototype;
  Object.assign(gl, options);
  /** @type {function (): ?} */
  (gl.prototype = Object.create(basePrototype)).constructor = gl;
  gl.__superConstructor__ = options;
  /**
   * @return {undefined}
   */
  gl.prototype.$Media6 = function() {
    if (this.props.onLike) {
      if (!this.props.isVideo) {
        this.props.onLike();
        this.setState({
          likeEventCount : this.state.likeEventCount + 1
        });
      }
    }
  };
  /**
   * @return {?}
   */
  gl.prototype.render = function() {
    var props = this.props;
    var data = props.analyticsContext;
    var length = props.dashInfo;
    var i = props.displayResources;
    var _value = props.gatingInfo;
    var object = props.isVideo;
    var _key = props.mediaPreview;
    var user = props.owner;
    var l = props.shouldLogClientEvent;
    var exit = props.sidecarChildren;
    var src = props.src;
    var len = props.trackingToken;
    var l2 = props.usertags;
    var s = props.videoUrl;
    var p = props.zeroNUXPreference;
    var _parent = props.onUpdateZeroNUXPreference;
    var columnWidth = (props.onMediaRendered, has(props, ["analyticsContext", "dashInfo", "displayResources", "gatingInfo", "isVideo", "mediaPreview", "owner", "shouldLogClientEvent", "sidecarChildren", "src", "trackingToken", "usertags", "videoUrl", "zeroNUXPreference", "onUpdateZeroNUXPreference", "onMediaRendered"]));
    /** @type {null} */
    var millis = null;
    var property = exit && exit.length > 0;
    var _repeatNo = _value && ("sensitivity" === _value.gatingType && (!property && (this.state.shouldShowGatingOverlay && (data === actual.a.profilePage || ("profilePageModal" === data || (data === actual.a.postPage || "feed" === data))))));
    return millis = _value && (_key && (user && _repeatNo)) ? self.createElement(input.a, {
      analyticsContext : data,
      dimensions : this.props.dimensions,
      gatingInfo : _value,
      isPhoto : !object && !property,
      isVisible : this.props.isVisible,
      mediaId : this.props.id,
      onShowPostClicked : this.$Media11,
      ownerId : user.id,
      previewData : _key
    }) : exit && exit.length > 0 ? self.createElement(org, templateFunc({}, columnWidth, {
      sidecarChildren : exit
    })) : object ? self.createElement(datum.a, templateFunc({}, columnWidth, {
      analyticsContext : data,
      dashInfo : length,
      likeEventCount : this.state.likeEventCount,
      ownerId : user && user.id,
      posterFrameUrl : src,
      shouldLogClientEvent : l,
      trackingToken : len,
      videoUrl : s,
      onUpdateZeroNUXPreference : _parent,
      hasSeenZeroNUX : p && p.video
    })) : l2 && l2.length > 0 ? self.createElement(tagToInsert, templateFunc({}, columnWidth, {
      analyticsContext : data,
      LinkComponent : opts.a,
      likeEventCount : this.state.likeEventCount,
      rich : true,
      src : src,
      srcSet : i,
      usertags : l2,
      onPhotoRendered : this.$Media12
    })) : self.createElement(item.a, templateFunc({}, columnWidth, {
      analyticsContext : data,
      likeEventCount : this.state.likeEventCount,
      rich : true,
      src : src,
      srcSet : i,
      onPhotoRendered : this.$Media12
    })), self.createElement("div", {
      onDoubleClick : this.$Media5,
      onMouseDown : this.$Media7,
      onTouchEnd : this.$Media8,
      onTouchMove : this.$Media9,
      onTouchStart : this.$Media10
    }, millis);
  };
  var elm = Object(l.a)(function(a, b) {
    return a.id !== b.id;
  })(gl);
  var volume = parseInt(8);
  var expected = parseInt(123);
  var part0 = parseInt(538);
  var appendModelPrefix = Object.assign || function(opt_attributes) {
    /** @type {number} */
    var i = 1;
    for (;i < arguments.length;i++) {
      var iterable = arguments[i];
      var key;
      for (key in iterable) {
        if (Object.prototype.hasOwnProperty.call(iterable, key)) {
          opt_attributes[key] = iterable[key];
        }
      }
    }
    return opt_attributes;
  };
  var wrapper = Object(volume.connect)(function(p, context) {
    var routeResolverProvider = p.navigation;
    var route = routeResolverProvider.route;
    var pageId = routeResolverProvider.pageIdentifier;
    /** @type {(boolean|undefined)} */
    var r = !!Object(next.H)("rt") || void 0;
    var j = context.onPostMediaRendered;
    return{
      /**
       * @param {?} data
       * @return {undefined}
       */
      onMediaRendered : function(data) {
        var timeTaken = data.timeTaken;
        var activeClassName = data.resourceName;
        if (r) {
          Object(color.c)({
            component : "Media",
            eventType : "loadPhoto",
            pageId : pageId,
            route : route,
            timeTaken : timeTaken
          });
          var fullOtherName = appendModelPrefix({
            includeBuffered : true
          }, pageId ? {
            pageId : pageId
          } : {});
          var timings = Object(expected.b)(activeClassName, fullOtherName);
          if (timings) {
            if (timings.transfer_size > 0) {
              Object(color.h)({
                timings : timings,
                fromFullPageLoad : false,
                eventType : "downloadPost"
              });
            }
          }
        }
        if (j) {
          j(timeTaken);
        }
      },
      zeroNUXPreference : p.zero.nuxPreference
    };
  }, function(fn) {
    return{
      /**
       * @param {?} sqlt
       * @return {undefined}
       */
      onUpdateZeroNUXPreference : function(sqlt) {
        fn(Object(part0.b)(sqlt));
      }
    };
  })(elm);
  var b = parseInt(118);
  var argv = parseInt(388);
  var prev = parseInt(92);
  var woy = parseInt(44);
  var Events = parseInt(38);
  var e = parseInt.n(Events);
  var styles = {
    "min-height" : "0",
    "max-height" : "none",
    height : "0",
    visibility : "hidden",
    overflow : "hidden",
    position : "absolute",
    "z-index" : "-1000",
    top : "0",
    right : "0"
  };
  /** @type {Array} */
  var dirtyattrs = ["letter-spacing", "line-height", "padding-top", "padding-bottom", "font-family", "font-weight", "font-size", "text-rendering", "text-transform", "width", "text-indent", "padding-left", "padding-right", "border-width", "box-sizing"];
  var cache = {};
  var element = void 0;
  var trace = Object.assign || function(opt_attributes) {
    /** @type {number} */
    var i = 1;
    for (;i < arguments.length;i++) {
      var iterable = arguments[i];
      var key;
      for (key in iterable) {
        if (Object.prototype.hasOwnProperty.call(iterable, key)) {
          opt_attributes[key] = iterable[key];
        }
      }
    }
    return opt_attributes;
  };
  /** @type {function (?): ?} */
  var traverseNode = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(dataAndEvents) {
    return typeof dataAndEvents;
  } : function(b) {
    return b && ("function" == typeof Symbol && (b.constructor === Symbol && b !== Symbol.prototype)) ? "symbol" : typeof b;
  };
  var _connect = function() {
    /**
     * @param {Function} object
     * @param {?} d
     * @return {undefined}
     */
    function defineProperty(object, d) {
      /** @type {number} */
      var i = 0;
      for (;i < d.length;i++) {
        var desc = d[i];
        desc.enumerable = desc.enumerable || false;
        /** @type {boolean} */
        desc.configurable = true;
        if ("value" in desc) {
          /** @type {boolean} */
          desc.writable = true;
        }
        Object.defineProperty(object, desc.key, desc);
      }
    }
    return function(x, current, a) {
      return current && defineProperty(x.prototype, current), a && defineProperty(x, a), x;
    };
  }();
  /**
   * @return {undefined}
   */
  var func = function() {
  };
  var onChange = function(next) {
    /**
     * @param {Element} data
     * @return {?}
     */
    function self(data) {
      bind(this, self);
      var item = isRegExp(this, next.call(this, data));
      return item._onRootDOMNode = function(status) {
        /** @type {boolean} */
        item._rootDOMNode = status;
        if (item.props.inputRef) {
          item.props.inputRef(status);
        }
      }, item._onChange = function(status) {
        if (!item._controlled) {
          item._resizeComponent();
        }
        var props = item.props;
        var _value = props.valueLink;
        var val = props.onChange;
        if (_value) {
          _value.requestChange(status.target.value);
        } else {
          val(status);
        }
      }, item._resizeComponent = function() {
        if (item._rootDOMNode) {
          var current = update(item._rootDOMNode, item.props.useCacheForDOMMeasurements, item.props.rows || item.props.minRows, item.props.maxRows);
          var height = current.height;
          var minHeight = current.minHeight;
          var maxHeight = current.maxHeight;
          if (!(item.state.height === height && (item.state.minHeight === minHeight && item.state.maxHeight === maxHeight))) {
            item.setState({
              height : height,
              minHeight : minHeight,
              maxHeight : maxHeight
            });
          }
        }
      }, item.state = {
        height : data.style && data.style.height || 0,
        minHeight : -1 / 0,
        maxHeight : 1 / 0
      }, item._controlled = "string" == typeof data.value, item;
    }
    return f(self, next), self.prototype.render = function() {
      var options = this.props;
      var node = options.valueLink;
      var e = (options.minRows, options.maxRows, options.onHeightChange, options.useCacheForDOMMeasurements, options.inputRef, merge(options, ["valueLink", "minRows", "maxRows", "onHeightChange", "useCacheForDOMMeasurements", "inputRef"]));
      return "object" === (void 0 === node ? "undefined" : traverseNode(node)) && (e.value = node.value), e.style = trace({}, e.style, {
        height : this.state.height
      }), Math.max(e.style.maxHeight || 1 / 0, this.state.maxHeight) < this.state.height && (e.style.overflow = "hidden"), root.a.createElement("textarea", trace({}, e, {
        onChange : this._onChange,
        ref : this._onRootDOMNode
      }));
    }, self.prototype.componentDidMount = function() {
      this._resizeComponent();
      window.addEventListener("resize", this._resizeComponent);
    }, self.prototype.componentWillReceiveProps = function() {
      this._clearNextFrame();
      this._onNextFrameActionId = requestAnimationFrame(this._resizeComponent);
    }, self.prototype.componentDidUpdate = function(prevState, currentSize) {
      if (this.state.height !== currentSize.height) {
        this.props.onHeightChange(this.state.height);
      }
    }, self.prototype.componentWillUnmount = function() {
      this._clearNextFrame();
      window.removeEventListener("resize", this._resizeComponent);
    }, self.prototype._clearNextFrame = function() {
      if (this._onNextFrameActionId) {
        cancelAnimationFrame(this._onNextFrameActionId);
      }
    }, self.prototype.focus = function() {
      this._rootDOMNode.focus();
    }, self.prototype.blur = function() {
      this._rootDOMNode.blur();
    }, _connect(self, [{
      key : "value",
      /**
       * @return {?}
       */
      get : function() {
        return this._rootDOMNode.value;
      },
      /**
       * @param {Function} k
       * @return {undefined}
       */
      set : function(k) {
        /** @type {Function} */
        this._rootDOMNode.value = k;
      }
    }, {
      key : "selectionStart",
      /**
       * @return {?}
       */
      get : function() {
        return this._rootDOMNode.selectionStart;
      },
      /**
       * @param {Function} k
       * @return {undefined}
       */
      set : function(k) {
        /** @type {Function} */
        this._rootDOMNode.selectionStart = k;
      }
    }, {
      key : "selectionEnd",
      /**
       * @return {?}
       */
      get : function() {
        return this._rootDOMNode.selectionEnd;
      },
      /**
       * @param {?} k
       * @return {undefined}
       */
      set : function(k) {
        this._rootDOMNode.selectionEnd = k;
      }
    }]), self;
  }(root.a.Component);
  onChange.propTypes = {
    value : e.a.string,
    onChange : e.a.func,
    onHeightChange : e.a.func,
    useCacheForDOMMeasurements : e.a.bool,
    rows : e.a.number,
    minRows : e.a.number,
    maxRows : e.a.number,
    inputRef : e.a.func
  };
  onChange.defaultProps = {
    /** @type {function (): undefined} */
    onChange : func,
    /** @type {function (): undefined} */
    onHeightChange : func,
    useCacheForDOMMeasurements : false
  };
  var test;
  var base;
  var attribute = onChange;
  var d = parseInt(117);
  var from = parseInt(84);
  parseInt(982);
  /**
   * @param {Object} options
   * @return {?}
   */
  var init = function(options) {
    /** @type {string} */
    var redirect_uri = encodeURIComponent(options.history.location.pathname);
    var loginLink = self.createElement(opts.a, {
      href : "/accounts/login/?next=" + redirect_uri
    }, "Entrar");
    return Object(prev.k)() && (loginLink = self.createElement(opts.a, {
      href : "/accounts/emailsignup/?next=" + redirect_uri
    }, "Cadastre-se")), self.createElement("span", null, parseInt(5)("{loginLink} para curtir ou comentar.", {
      loginLink : loginLink
    }));
  };
  /**
   * @param {Object} config
   * @return {?}
   */
  var initialize = function(config) {
    return self.createElement("span", null, parseInt(5)("Siga {username} para curtir ou comentar.", {
      username : config.username
    }));
  };
  test = self.Component;
  base = test && test.prototype;
  Object.assign(opt_attributes, test);
  /** @type {function (Function): undefined} */
  (opt_attributes.prototype = Object.create(base)).constructor = opt_attributes;
  opt_attributes.__superConstructor__ = test;
  /**
   * @return {undefined}
   */
  opt_attributes.prototype.componentWillUnmount = function() {
    this.$PostCommentInput1.reset();
    if (!this.props.commentSaveIsInFlight) {
      if (this.state.needsFlush) {
        this.props.onCommentChange(this.state.pendingComment);
      }
    }
  };
  /**
   * @param {?} $element
   * @return {undefined}
   */
  opt_attributes.prototype.componentWillReceiveProps = function($element) {
    if (this.props.commentSaveIsInFlight) {
      if (!$element.commentSaveIsInFlight) {
        if ("" === $element.defaultPendingComment) {
          this.setState({
            pendingComment : "",
            needsFlush : true
          });
        }
      }
    }
  };
  /**
   * @param {Element} props
   * @param {?} nextState
   * @return {?}
   */
  opt_attributes.prototype.shouldComponentUpdate = function(props, nextState) {
    return this.props.className !== props.className || (this.props.commentSaveIsInFlight !== props.commentSaveIsInFlight || (this.props.defaultPendingComment !== props.defaultPendingComment || (this.state.pendingComment !== nextState.pendingComment || this.state.hasBeenFocused !== nextState.hasBeenFocused)));
  };
  /**
   * @return {?}
   */
  opt_attributes.prototype.$PostCommentInput2 = function() {
    return 0 === this.state.pendingComment.trim().length || this.props.commentSaveIsInFlight;
  };
  /**
   * @return {?}
   */
  opt_attributes.prototype.renderForm = function() {
    var attributes = {
      "aria-label" : "Adicione um coment\u00c3\u00a1rio...",
      className : "_bilrf",
      disabled : this.props.commentSaveIsInFlight,
      onChange : this.$PostCommentInput6,
      onFocus : this.$PostCommentInput8,
      onKeyPress : this.$PostCommentInput5,
      placeholder : "Adicione um coment\u00c3\u00a1rio...",
      ref : this.$PostCommentInput7,
      value : this.state.pendingComment
    };
    return self.createElement("form", {
      className : "_b6i0l",
      onSubmit : this.$PostCommentInput3
    }, this.props.commentSaveIsInFlight && self.createElement(d.a, null), this.props.forceTextareaAutosize || (this.state.hasBeenFocused || "" !== this.state.pendingComment) ? self.createElement(attribute, attributes) : self.createElement("textarea", attributes), this.props.hasPostButton && self.createElement("button", {
      type : "submit",
      className : "_55p7a",
      disabled : this.$PostCommentInput2()
    }, "Publicar"));
  };
  /**
   * @return {?}
   */
  opt_attributes.prototype.render = function() {
    return self.createElement("section", {
      className : createTextNode()("_km7ip", this.props.className)
    }, this.props.isLoggedIn ? this.props.canViewerProvideFeedback ? this.renderForm() : self.createElement(initialize, {
      username : clear()(this.props.ownerUsername)
    }) : self.createElement(init, {
      history : this.props.history
    }));
  };
  opt_attributes.defaultProps = {
    forceTextareaAutosize : Object(next.D)()
  };
  var to;
  var prototype;
  var which = Object(woy.withRouter)(Object(volume.connect)(function($rootScope, p) {
    var script = $rootScope.pendingComments.get(p.id, pos.a);
    return{
      commentSaveIsInFlight : script.committing,
      defaultPendingComment : script.text,
      ownerUsername : clear()(Object(from.a)($rootScope, p.ownerId).username)
    };
  }, function($sanitize, ignores) {
    return{
      /**
       * @param {?} deepDataAndEvents
       * @return {undefined}
       */
      onCommentChange : function(deepDataAndEvents) {
        $sanitize(Object(argv.e)(ignores.id, deepDataAndEvents));
      },
      /**
       * @return {undefined}
       */
      onCommentSubmit : function() {
        $sanitize(Object(argv.f)(ignores.id, ignores.analyticsContext));
      }
    };
  })(opt_attributes));
  var g = parseInt(385);
  var args = parseInt(539);
  var s = parseInt(293);
  var params = parseInt(888);
  var msg = parseInt(885);
  var annotation = parseInt(234);
  var part = parseInt(886);
  var iter = parseInt(252);
  to = self.Component;
  prototype = to && to.prototype;
  Object.assign(req, to);
  /** @type {function (Function): undefined} */
  (req.prototype = Object.create(prototype)).constructor = req;
  req.__superConstructor__ = to;
  /**
   * @return {?}
   */
  req.prototype.render = function() {
    /** @type {boolean} */
    var vec = this.props.viewportWidth <= iter.c;
    var y = {
      onClose : this.props.onClose
    };
    var millis = self.createElement(params.a, {
      onCancel : this.props.onClose
    }, self.createElement(msg.a, {
      onClick : this.$DeleteCommentModal1
    }, "Excluir coment\u00c3\u00a1rio"));
    return vec ? self.createElement(part.a, y, millis) : self.createElement(annotation.a, y, millis);
  };
  var value;
  var template;
  var def = Object(volume.connect)(null, function($sanitize, $routeParams) {
    return{
      /**
       * @return {undefined}
       */
      onDeleteClick : function() {
        $sanitize(Object(g.g)($routeParams.postId, $routeParams.commentId));
      }
    };
  })(req);
  var interval = parseInt(86);
  var w = parseInt(23);
  parseInt(21);
  parseInt(986);
  template = (value = self.PureComponent) && value.prototype;
  Object.assign(scope, value);
  /** @type {function (): undefined} */
  (scope.prototype = Object.create(template)).constructor = scope;
  scope.__superConstructor__ = value;
  /**
   * @param {?} clone
   * @return {?}
   */
  scope.prototype.$PostAppAttribution1 = function(clone) {
    switch(clone) {
      case "Boomerang":
        return Object(next.C)() ? w.c : Object(next.x)() ? w.d : null;
      case "Hyperlapse":
        return Object(next.C)() ? w.g : null;
    }
    return null;
  };
  /**
   * @param {?} clone
   * @param {string} options
   * @return {?}
   */
  scope.prototype.$PostAppAttribution2 = function(clone, options) {
    switch(clone) {
      case "Boomerang":
        return parseInt(5)("Feito com o {Boomerang}", {
          Boomerang : self.createElement("a", {
            className : "_az8hw",
            href : options,
            target : "_blank"
          }, "Boomerang")
        });
      case "Hyperlapse":
        return parseInt(5)("Feito com o {Hyperlapse}", {
          Hyperlapse : self.createElement("a", {
            className : "_az8hw",
            href : options,
            target : "_blank"
          }, "Hyperlapse")
        });
    }
    return null;
  };
  /**
   * @return {?}
   */
  scope.prototype.render = function() {
    var i = this.props.attribution;
    if (null == i) {
      return null;
    }
    var option = this.$PostAppAttribution1(i);
    return null == option ? null : self.createElement("li", null, self.createElement("span", {
      className : "_hhr96" + ("Boomerang" === i ? " coreSpriteBoomerang" : "") + ("Hyperlapse" === i ? " coreSpriteHyperlapse" : "")
    }), self.createElement("span", {
      className : "_xqg6v"
    }, this.$PostAppAttribution2(i, option)));
  };
  var target;
  var _this;
  /** @type {function (): undefined} */
  var save = scope;
  var res = parseInt(893);
  var q = parseInt(959);
  var compiled = parseInt.n(q);
  var major = parseInt(509);
  var message = parseInt(384);
  var dataAttr = Object.assign || function(opt_attributes) {
    /** @type {number} */
    var i = 1;
    for (;i < arguments.length;i++) {
      var iterable = arguments[i];
      var key;
      for (key in iterable) {
        if (Object.prototype.hasOwnProperty.call(iterable, key)) {
          opt_attributes[key] = iterable[key];
        }
      }
    }
    return opt_attributes;
  };
  parseInt(990);
  /** @type {number} */
  var len = 120;
  /** @type {RegExp} */
  var query = /\r\n|[\r\n]/;
  target = self.PureComponent;
  _this = target && target.prototype;
  Object.assign(render, target);
  /** @type {function (): ?} */
  (render.prototype = Object.create(_this)).constructor = render;
  render.__superConstructor__ = target;
  /**
   * @return {?}
   */
  render.prototype.$TruncatedText2 = function() {
    var name = this.props.value;
    return!!name && this.$TruncatedText1(name).length < name.length;
  };
  /**
   * @return {?}
   */
  render.prototype.$TruncatedText3 = function() {
    return this.state.isExpanded || !this.$TruncatedText2();
  };
  /**
   * @return {?}
   */
  render.prototype.$TruncatedText4 = function() {
    return this.$TruncatedText3() ? this.props.value : this.$TruncatedText1(clear()(this.props.value));
  };
  /**
   * @return {?}
   */
  render.prototype.render = function() {
    var argument = this.props;
    var camelKey = (argument.value, format(argument, ["value"]));
    return self.createElement("span", null, self.createElement(message.a, dataAttr({}, camelKey, {
      value : this.$TruncatedText4()
    })), !this.$TruncatedText3() && self.createElement("a", {
      className : "_kq8rw",
      href : "#",
      onClick : this.$TruncatedText5
    }, "\u00c2 ", "mais"));
  };
  var type;
  var mod;
  /** @type {function (): ?} */
  var start = render;
  var player = parseInt(373);
  parseInt(988);
  type = self.PureComponent;
  mod = type && type.prototype;
  Object.assign($, type);
  /** @type {function (): ?} */
  ($.prototype = Object.create(mod)).constructor = $;
  $.__superConstructor__ = type;
  /**
   * @return {?}
   */
  $.prototype.render = function() {
    var props = this.props;
    var i = props.commentOwnerId;
    var _value = props.commentOwnerUsername;
    var ctx = props.isCaption;
    var l = props.isEdited;
    var x = props.postOwnerId;
    var exp = props.postOwnerIsUnpublished;
    var line = props.text;
    var length = props.variant;
    var y = props.viewerId;
    var button = !ctx && (y && (y === i || x === y));
    var type = length === res.a.feed ? start : message.a;
    return self.createElement("li", {
      className : "_ezgzd"
    }, button && self.createElement("button", {
      className : "_reoub",
      title : "Excluir coment\u00c3\u00a1rio",
      onClick : this.$PostComment1
    }, "Excluir coment\u00c3\u00a1rio"), (!ctx || !exp) && self.createElement(player.a, {
      className : "_95hvo",
      username : _value
    }), self.createElement(type, {
      edited : l,
      value : line
    }));
  };
  var obj2;
  var superObject;
  var filepath = Object(volume.connect)(function($scope, dataAndEvents) {
    return{
      commentOwnerUsername : clear()(Object(from.a)($scope, dataAndEvents.commentOwnerId).username),
      postOwnerIsUnpublished : Object(from.a)($scope, dataAndEvents.postOwnerId).isUnpublished,
      viewerId : $scope.users.viewerId
    };
  })($);
  parseInt(984);
  obj2 = self.PureComponent;
  superObject = obj2 && obj2.prototype;
  Object.assign(Text, obj2);
  /** @type {function (Function): undefined} */
  (Text.prototype = Object.create(superObject)).constructor = Text;
  Text.__superConstructor__ = obj2;
  /**
   * @param {Element} webview
   * @return {undefined}
   */
  Text.prototype.componentWillReceiveProps = function(webview) {
    if (this.props.id !== webview.id) {
      /** @type {null} */
      this.$PostComments1 = null;
    }
  };
  /**
   * @param {Element} rootNode
   * @param {?} prevState
   * @return {undefined}
   */
  Text.prototype.componentDidUpdate = function(rootNode, prevState) {
    if (true === rootNode.commentSaveIsInFlight && false === this.props.commentSaveIsInFlight) {
      var list = this.$PostComments2;
      if (list) {
        list.scrollTop = list.scrollHeight;
      }
    } else {
      if (null != this.$PostComments1) {
        var textarea = this.$PostComments2;
        if (textarea) {
          textarea.scrollTop += textarea.scrollHeight - this.$PostComments1;
        }
        /** @type {null} */
        this.$PostComments1 = null;
      } else {
        if (this.props.id !== rootNode.id) {
          var de = this.$PostComments2;
          if (de) {
            /** @type {number} */
            de.scrollTop = 0;
          }
        }
      }
    }
  };
  /**
   * @param {Object} p
   * @param {?} dataAndEvents
   * @return {undefined}
   */
  Text.prototype.componentWillUpdate = function(p, dataAndEvents) {
    if (!(true === this.props.commentSaveIsInFlight && false === p.commentSaveIsInFlight)) {
      var comments = this.props.comments;
      var pl = p.comments;
      if (p.id === this.props.id && pl.count() > comments.count()) {
        var textarea = this.$PostComments2;
        if (textarea) {
          this.$PostComments1 = textarea.scrollHeight;
        }
      }
    }
  };
  /**
   * @return {?}
   */
  Text.prototype.renderComments = function() {
    var onDeleteCommentClick = this;
    var post = this.props;
    var attribution = post.attribution;
    var content = post.caption;
    var layout = post.captionIsEdited;
    var comments = post.comments;
    var creator_id = post.commentsDisabled;
    var value = post.commentsHasNextPage;
    var path = post.ownerId;
    var variant = post.variant;
    var proceed = !creator_id && value;
    return content || (0 !== comments.count() || proceed) ? self.createElement("ul", {
      className : "_b0tqa"
    }, content && self.createElement(filepath, {
      key : "caption",
      isCaption : true,
      isEdited : layout,
      commentOwnerId : path,
      postOwnerId : path,
      text : content,
      variant : variant
    }), Object(next.H)("wa") && self.createElement(save, {
      attribution : attribution
    }), proceed && this.renderLoadMoreCommentsLink(), !creator_id && this.props.comments.map(function(data) {
      return self.createElement(filepath, {
        key : data.id,
        id : data.id,
        commentOwnerId : data.userId,
        onDeleteCommentClick : onDeleteCommentClick.$PostComments3,
        postOwnerId : path,
        text : data.text,
        variant : variant
      });
    })) : null;
  };
  /**
   * @return {?}
   */
  Text.prototype.renderLoadMoreCommentsLink = function() {
    var ret = this.props;
    var prev = ret.comments;
    var i = ret.commentsTotalCount;
    var inherited = ret.commentsIsFetching;
    var millis = void 0;
    return millis = prev.count() + g.f >= i ? parseInt(5)("Ver todos os {count} coment\u00c3\u00a1rios", {
      count : self.createElement(s.a, {
        value : i
      })
    }) : "Carregar mais coment\u00c3\u00a1rios", self.createElement("li", {
      className : "_56pd5"
    }, self.createElement("a", {
      className : "_m3m1c" + (inherited ? "" : " _1s3cd"),
      disabled : inherited,
      href : "#",
      onClick : this.$PostComments5,
      role : "button"
    }, millis), inherited && self.createElement(d.a, {
      className : "_9whrc"
    }));
  };
  /**
   * @return {?}
   */
  Text.prototype.render = function() {
    var first = this;
    return self.createElement("div", {
      className : createTextNode()("_4a48i", this.props.className),
      /**
       * @param {EventTarget} i
       * @return {?}
       */
      ref : function(i) {
        return first.$PostComments2 = i;
      }
    }, this.renderComments(), this.state.showDeleteCommentModal && self.createElement(def, {
      analyticsContext : this.props.analyticsContext,
      commentId : this.state.commentToDeleteId,
      onClose : this.$PostComments4,
      postId : this.props.id,
      viewportWidth : this.props.viewportWidth
    }));
  };
  Text.defaultProps = {
    variant : res.a.flexible
  };
  var object;
  var method;
  var fullCircle = Object(volume.connect)(function(ret, credit_card) {
    var comments = Object(args.c)(ret, credit_card.id);
    var body = ret.comments.byPostId.get(credit_card.id, args.a);
    var n = body.count;
    var top = body.pagination;
    return{
      commentSaveIsInFlight : ret.pendingComments.get(credit_card.id, pos.a).committing,
      comments : comments,
      commentsHasNextPage : Object(interval.d)(top),
      commentsIsFetching : Object(interval.e)(top),
      commentsTotalCount : n,
      viewportWidth : ret.displayProperties.viewportWidth
    };
  }, function(callback, er) {
    return{
      /**
       * @return {?}
       */
      loadMore : function() {
        return callback(Object(g.h)(er.id, er.code));
      }
    };
  })(Text);
  parseInt(21);
  parseInt(64);
  parseInt(1001);
  object = self.PureComponent;
  method = object && object.prototype;
  Object.assign(context, object);
  /** @type {function (): ?} */
  (context.prototype = Object.create(method)).constructor = context;
  context.__superConstructor__ = object;
  /**
   * @return {?}
   */
  context.prototype.render = function() {
    return self.createElement("a", {
      className : createTextNode()(this.props.className, "_6p9ga"),
      href : "#",
      role : "button",
      onClick : this.handleClick
    }, self.createElement("span", {
      className : "_8scx2 coreSpriteComment"
    }, "Comentar"));
  };
  var ext;
  var o1;
  /** @type {function (): ?} */
  var last = context;
  var px = parseInt(3);
  var val = parseInt.n(px);
  parseInt(21);
  parseInt(64);
  parseInt(1003);
  ext = self.Component;
  o1 = ext && ext.prototype;
  Object.assign(map, ext);
  /** @type {function (): ?} */
  (map.prototype = Object.create(o1)).constructor = map;
  map.__superConstructor__ = ext;
  /**
   * @return {undefined}
   */
  map.prototype.focus = function() {
    if (!this.$LikeButton2) {
      val()(0);
    }
    this.$LikeButton2.focus();
  };
  /**
   * @return {?}
   */
  map.prototype.render = function() {
    var first = this;
    /** @type {string} */
    var _depth = "_l9yih" + (this.props.disabled ? " _fyy4z" : "");
    /** @type {string} */
    var cls = "_8scx2" + (this.props.isLiked ? "" : " coreSpriteHeartOpen") + (this.props.isLiked ? " coreSpriteHeartFull" : "");
    return self.createElement("a", {
      className : createTextNode()(this.props.className, _depth),
      href : "#",
      /**
       * @param {?} i
       * @return {?}
       */
      ref : function(i) {
        return first.$LikeButton2 = i;
      },
      role : "button",
      "aria-disabled" : this.props.disabled,
      onClick : this.$LikeButton1
    }, self.createElement("span", {
      className : cls
    }, this.props.isLiked ? "Descurtir" : "Curtir"));
  };
  map.defaultProps = {
    disabled : false
  };
  var collection;
  var superClass;
  /** @type {function (): ?} */
  var name = map;
  parseInt(21);
  parseInt(64);
  parseInt(1005);
  collection = self.Component;
  superClass = collection && collection.prototype;
  Object.assign(log, collection);
  /** @type {function (): ?} */
  (log.prototype = Object.create(superClass)).constructor = log;
  log.__superConstructor__ = collection;
  /**
   * @return {?}
   */
  log.prototype.render = function() {
    var first = this;
    /** @type {string} */
    var _depth = "_et4ho" + (this.props.disabled ? " _sa6r5" : "");
    /** @type {string} */
    var cls = "_8scx2" + (this.props.useDarkIcon && !this.props.isSaved ? " coreSpriteSaveOpen" : "") + (this.props.useDarkIcon && this.props.isSaved ? " coreSpriteSaveFull" : "") + (this.props.useDarkIcon || this.props.isSaved ? "" : " coreSpriteSaveLightOpen") + (!this.props.useDarkIcon && this.props.isSaved ? " coreSpriteSaveLightFull" : "");
    return self.createElement("a", {
      className : createTextNode()(this.props.className, _depth),
      href : "#",
      /**
       * @param {?} i
       * @return {?}
       */
      ref : function(i) {
        return first.$SaveButton2 = i;
      },
      role : "button",
      "aria-disabled" : this.props.disabled,
      onClick : this.$SaveButton1
    }, self.createElement("span", {
      className : cls
    }, this.props.isSaved ? "Remover" : "Salvar"));
  };
  log.defaultProps = {
    disabled : false,
    useDarkIcon : false
  };
  var x;
  var derived_proto;
  /** @type {function (): ?} */
  var word = log;
  parseInt(999);
  x = self.PureComponent;
  derived_proto = x && x.prototype;
  Object.assign(t, x);
  /** @type {function (): ?} */
  (t.prototype = Object.create(derived_proto)).constructor = t;
  t.__superConstructor__ = x;
  /**
   * @return {undefined}
   */
  t.prototype.$PostFeedbackControls1 = function() {
    /** @type {string} */
    var encodedValue = encodeURIComponent(this.props.history.location.pathname);
    if (Object(prev.k)()) {
      this.props.history.push("/accounts/emailsignup/?next=" + encodedValue);
    } else {
      this.props.history.push("/accounts/login/?next=" + encodedValue);
    }
  };
  /**
   * @return {?}
   */
  t.prototype.render = function() {
    var isBlocked = !this.props.isLoggedIn || this.props.canViewerProvideFeedback;
    if (this.props.isBlocked || !isBlocked) {
      return null;
    }
    var functions = bt.a.lookup("save").getBoolParam("is_enabled", false);
    return self.createElement("section", {
      className : createTextNode()("_hmd6j", this.props.className)
    }, self.createElement(name, {
      className : "_eszkz",
      isLiked : this.props.likedByViewer,
      onChange : this.$PostFeedbackControls2
    }), !this.props.commentsDisabled && self.createElement(last, {
      className : "_p6oxf",
      onClick : this.$PostFeedbackControls4
    }), functions && self.createElement(word, {
      className : "_mpkky",
      isSaved : this.props.savedByViewer,
      onChange : this.$PostFeedbackControls3,
      useDarkIcon : true
    }));
  };
  var state;
  var str;
  var node = Object(woy.withRouter)(t);
  var o = parseInt(382);
  var ctm = parseInt(55);
  var clone = Object.assign || function(opt_attributes) {
    /** @type {number} */
    var i = 1;
    for (;i < arguments.length;i++) {
      var iterable = arguments[i];
      var key;
      for (key in iterable) {
        if (Object.prototype.hasOwnProperty.call(iterable, key)) {
          opt_attributes[key] = iterable[key];
        }
      }
    }
    return opt_attributes;
  };
  parseInt(1009);
  str = (state = self.Component) && state.prototype;
  Object.assign(module, state);
  /** @type {function (): undefined} */
  (module.prototype = Object.create(str)).constructor = module;
  module.__superConstructor__ = state;
  /**
   * @return {?}
   */
  module.prototype.render = function() {
    var options = {
      className : createTextNode()("_q8ysx", this.props.className),
      params : {},
      title : this.props.location.name
    };
    return this.props.location.hasPublicPage ? self.createElement(opts.a, clone({}, options, {
      href : Object(ctm.d)({
        id : this.props.location.id,
        slug : this.props.location.slug
      })
    }), this.props.location.name) : self.createElement("span", options, this.props.location.name);
  };
  /** @type {function (): undefined} */
  var property = module;
  parseInt(1011);
  var parent;
  var adapterResolver;
  /**
   * @param {Element} element
   * @return {?}
   */
  var span = function(element) {
    var elementClassName = element.className;
    return self.createElement("span", {
      className : createTextNode()(elementClassName, "_82161")
    }, "\u00e2\u20ac\u00a2");
  };
  parseInt(1013);
  adapterResolver = (parent = self.Component) && parent.prototype;
  Object.assign(row, parent);
  /** @type {function (): undefined} */
  (row.prototype = Object.create(adapterResolver)).constructor = row;
  row.__superConstructor__ = parent;
  /**
   * @return {?}
   */
  row.prototype.render = function() {
    if (0 == this.props.sponsors.length) {
      return null;
    }
    var user = this.props.sponsors[0];
    return self.createElement("span", {
      className : createTextNode()("_nr3h3", this.props.className)
    }, parseInt(5)("Parceria paga com {username of sponsor}", {
      "username of sponsor" : self.createElement(player.a, {
        className : "_1kjms",
        username : user.username
      })
    }));
  };
  var callback;
  var spyCall;
  /** @type {function (): undefined} */
  var startRow = row;
  var a = parseInt(934);
  var db = parseInt(899);
  parseInt(1007);
  spyCall = (callback = self.PureComponent) && callback.prototype;
  Object.assign(request, callback);
  /** @type {function (): undefined} */
  (request.prototype = Object.create(spyCall)).constructor = request;
  request.__superConstructor__ = callback;
  /**
   * @return {?}
   */
  request.prototype.$PostHeader1 = function() {
    var millis = this.props.sponsors && (this.props.sponsors.length > 0 && self.createElement(startRow, {
      className : "_s7b66",
      sponsors : this.props.sponsors
    }));
    var version = this.props.location && self.createElement(property, {
      className : "_6y8ij",
      location : clear()(this.props.location)
    });
    if (this.props.threeLineHeaderEnabled) {
      return self.createElement("div", {
        className : "_60iqg"
      }, self.createElement("div", null, millis), self.createElement("div", {
        className : "_48ycf"
      }, version));
    }
    var h = version && (millis && self.createElement(span, null));
    return self.createElement("div", {
      className : "_60iqg"
    }, millis, h, version);
  };
  /**
   * @return {?}
   */
  request.prototype.render = function() {
    var cls = createTextNode()("_7b8eu", this.props.className);
    var shouldShowFollowButton = bt.a.lookup("follow_button").getBoolParam("is_inline", false);
    return self.createElement("header", {
      className : cls
    }, self.createElement(a.a, {
      className : "_i2o1o",
      isLink : !this.props.owner.isUnpublished,
      profilePictureUrl : this.props.owner.profilePictureUrl,
      showRingWhenSeen : false,
      size : this.props.avatarSize,
      userId : this.props.owner.id,
      username : this.props.owner.username
    }), self.createElement("div", {
      className : "_j56ec" + (this.props.threeLineHeaderEnabled ? " _k32zm" : "")
    }, self.createElement("div", {
      className : this.props.shouldShowFollowButton && shouldShowFollowButton ? "_ba399" : ""
    }, this.props.owner.isUnpublished ? self.createElement("span", {
      className : "_elp6f"
    }, this.props.owner.fullName || this.props.owner.username) : self.createElement("div", {
      className : "_eeohz"
    }, self.createElement(player.a, {
      className : "_iadoq",
      username : clear()(this.props.owner.username)
    }), this.props.showVerifiedBadge && (this.props.owner.isVerified && self.createElement(db.a, {
      className : "_hz9vr",
      size : "small"
    }))), this.props.shouldShowFollowButton && (shouldShowFollowButton && self.createElement("div", {
      className : "_oa1lg"
    }, self.createElement(span, null), self.createElement(o.a, {
      analyticsContext : this.props.analyticsContext,
      className : "_fj5rr",
      isInline : true,
      userId : this.props.owner.id
    })))), this.$PostHeader1()), this.props.shouldShowFollowButton && (!shouldShowFollowButton && self.createElement(o.a, {
      analyticsContext : this.props.analyticsContext,
      className : "_iuvin",
      isInline : false,
      userId : this.props.owner.id
    })));
  };
  var code;
  var p;
  /** @type {function (): undefined} */
  var sourceText = request;
  var Y = parseInt(203);
  var numGuis = parseInt(9);
  var obj = parseInt(66);
  var button = parseInt(10);
  var minor = parseInt(17);
  parseInt(1020);
  code = self.Component;
  p = code && code.prototype;
  Object.assign(process, code);
  /** @type {function (Function): undefined} */
  (process.prototype = Object.create(p)).constructor = process;
  process.__superConstructor__ = code;
  /**
   * @return {undefined}
   */
  process.prototype.componentDidMount = function() {
    this.$EmbedModal2();
  };
  /**
   * @param {Error} exp
   * @param {?} prevState
   * @return {undefined}
   */
  process.prototype.componentDidUpdate = function(exp, prevState) {
    if (!(prevState.includeCaption === this.state.includeCaption && exp.code === this.props.code)) {
      this.$EmbedModal2();
    }
  };
  /**
   * @return {undefined}
   */
  process.prototype.componentWillUnmount = function() {
    clearTimeout(this.$EmbedModal3);
  };
  /**
   * @return {?}
   */
  process.prototype.$EmbedModal4 = function() {
    return paste() || Object(next.D)() ? null : navigator.userAgent.indexOf("Macintosh") || navigator.userAgent.indexOf("Mac OS") ? "Pressione Command+C para copiar." : "Pressione Control+C para copiar.";
  };
  /**
   * @return {?}
   */
  process.prototype.$EmbedModal5 = function() {
    return paste() && !Object(next.D)();
  };
  /**
   * @return {undefined}
   */
  process.prototype.$EmbedModal2 = function() {
    var element = this;
    /** @type {string} */
    var type = "https://api.instagram.com/oembed/?url=https://www.instagram.com/p/" + this.props.code + "/&hidecaption=" + (this.state.includeCaption ? 0 : 1);
    var gen = this.$EmbedModal1[type];
    if (void 0 !== gen) {
      this.setState({
        embedCode : gen
      });
    } else {
      this.setState({
        fetchingCode : true
      });
      Object(minor.a)(button.b(type).then(function(el) {
        var embedCode = element.$EmbedModal1[type] = el.html;
        element.setState({
          embedCode : embedCode,
          fetchingCode : false
        });
      }));
    }
  };
  /**
   * @return {undefined}
   */
  process.prototype.$EmbedModal6 = function() {
    var input = this.$EmbedModal7;
    if (!input) {
      val()(0);
    }
    if (0 !== input.selectionStart || input.selectionEnd < input.value.length) {
      input.setSelectionRange(0, input.value.length, "forward");
    }
    if (document.activeElement !== input) {
      input.focus();
    }
  };
  /**
   * @return {?}
   */
  process.prototype.render = function() {
    var first = this;
    var param = this.state.fetchingCode ? "" : this.state.embedCode;
    var millis = parseInt(5)("Ao utilizar esta incorpora\u00c3\u00a7\u00c3\u00a3o, voc\u00c3\u00aa concorda com os {apiTermsOfUseLink} do Instagram.", {
      apiTermsOfUseLink : self.createElement("a", {
        href : "/about/legal/terms/api/",
        target : "_blank"
      }, "Termos de uso da API")
    });
    var orient = this.state.fetchingCode ? self.createElement(d.a, {
      className : "_77k0i"
    }) : null;
    var onClick = this.$EmbedModal5() ? this.$EmbedModal8 : this.$EmbedModal12;
    /** @type {string} */
    var oldValue = "";
    oldValue = this.$EmbedModal5() ? this.state.justCopiedCode ? "C\u00c3\u00b3digo de incorpora\u00c3\u00a7\u00c3\u00a3o copiado" : "Copiar c\u00c3\u00b3digo de incorpora\u00c3\u00a7\u00c3\u00a3o" : this.state.textSelected && (this.state.textareaFocused && this.$EmbedModal4()) ? this.$EmbedModal4() : "Selecione o c\u00c3\u00b3digo de incorpora\u00c3\u00a7\u00c3\u00a3o";
    var alpha = self.createElement("div", {
      className : "_dnf8p"
    }, self.createElement("textarea", {
      className : "_qbbek",
      disabled : this.state.fetchingCode,
      onBlur : this.$EmbedModal9,
      onFocus : this.$EmbedModal10,
      onSelect : this.$EmbedModal11,
      readOnly : true,
      /**
       * @param {Window} i
       * @return {?}
       */
      ref : function(i) {
        return first.$EmbedModal7 = i;
      },
      value : param
    }), self.createElement("label", {
      className : "_agezg"
    }, self.createElement("input", {
      className : "_c253u",
      checked : this.state.includeCaption,
      onChange : this.$EmbedModal13,
      type : "checkbox"
    }), "Incluir legenda", orient), self.createElement(obj.default, {
      className : "_77z6r",
      disabled : this.state.fetchingCode,
      onClick : onClick,
      variant : obj.default.VARIANTS.solid
    }, oldValue), self.createElement("p", {
      className : "_e2e53"
    }, millis));
    var credit = {
      onClose : this.props.onClose
    };
    return this.props.viewportWidth <= iter.c ? self.createElement(part.a, credit, alpha) : self.createElement(annotation.a, credit, alpha);
  };
  var properties;
  var superclass;
  /** @type {function (Function): undefined} */
  var onComplete = process;
  var record = parseInt(929);
  var cssKeys = parseInt(241);
  var nodeData = parseInt(930);
  parseInt(64);
  parseInt(21);
  parseInt(1018);
  properties = self.Component;
  superclass = properties && properties.prototype;
  Object.assign(constructor, properties);
  /** @type {function (): ?} */
  (constructor.prototype = Object.create(superclass)).constructor = constructor;
  constructor.__superConstructor__ = properties;
  /**
   * @return {?}
   */
  constructor.prototype.hasDeleteOption = function() {
    return this.props.viewer && (this.props.owner.id === this.props.viewer.id && Object(next.D)());
  };
  /**
   * @return {?}
   */
  constructor.prototype.hasEmbedOption = function() {
    return!this.props.owner.isUnpublished && !this.props.owner.isPrivate;
  };
  /**
   * @return {?}
   */
  constructor.prototype.hasGoToOption = function() {
    return this.props.analyticsContext !== actual.a.postPage;
  };
  /**
   * @return {?}
   */
  constructor.prototype.hasReportOption = function() {
    return this.props.owner !== this.props.viewer;
  };
  /**
   * @return {?}
   */
  constructor.prototype.renderModals = function() {
    /** @type {string} */
    var type = this.props.isVideo ? "video" : this.props.isSidecar ? "sidecar" : "photo";
    switch(this.state.activeModal) {
      case "options":
        return self.createElement(record.a, {
          analyticsContext : this.props.analyticsContext,
          code : this.props.code,
          hasDeleteOption : this.hasDeleteOption(),
          hasEmbedOption : this.hasEmbedOption(),
          hasGoToOption : this.hasGoToOption(),
          hasReportInappropriateOption : this.hasReportOption(),
          id : this.props.id,
          onClose : this.handleModalClose,
          onDeleteClick : this.handleDeleteModalOpen,
          onEmbedCodeClick : this.handleEmbedModalOpen,
          onReportInappropriateClick : this.handleReportModalOpen,
          postType : type,
          viewportWidth : this.props.viewportWidth
        });
      case "embed":
        return self.createElement(onComplete, {
          analyticsContext : this.props.analyticsContext,
          code : this.props.code,
          isVideo : this.props.isVideo,
          onClose : this.handleModalClose,
          viewportWidth : this.props.viewportWidth
        });
      case "report":
        return self.createElement(nodeData.a, {
          isVideo : this.props.isVideo,
          onClose : this.handleModalClose,
          postId : this.props.id,
          viewportWidth : this.props.viewportWidth
        });
      case "delete":
        return self.createElement(el.a, {
          title : "Excluir publica\u00c3\u00a7\u00c3\u00a3o?",
          body : "Tem certeza de que deseja excluir esta publica\u00c3\u00a7\u00c3\u00a3o?",
          confirmLabel : "Excluir",
          onClose : this.handleModalClose,
          onConfirm : this.handleDeleteClick
        });
      default:
        return null;
    }
  };
  /**
   * @return {?}
   */
  constructor.prototype.render = function() {
    return this.hasEmbedOption() || (this.hasReportOption() || this.hasDeleteOption()) ? self.createElement("div", {
      className : createTextNode()("_lj408", this.props.className)
    }, self.createElement("button", {
      className : "_tauyc",
      onClick : this.handleOptionsModalOpen
    }, self.createElement("span", {
      className : "coreSpriteOptionsEllipsis _8scx2"
    }, "Mais op\u00c3\u00a7\u00c3\u00b5es")), this.renderModals()) : null;
  };
  var extend;
  var superPrototype;
  /** @type {function (): ?} */
  var cname = constructor;
  var elem = parseInt(540);
  parseInt(1024);
  /**
   * @param {Object} top
   * @return {?}
   */
  var create = function(top) {
    var expectationResult = top.likeCount;
    var onClose = top.onClose;
    return self.createElement("div", null, self.createElement("div", {
      className : "_7px37",
      onClick : onClose
    }), self.createElement("div", {
      className : "_rjut9"
    }), self.createElement("div", {
      className : "_lfirj"
    }), self.createElement("div", {
      className : "_m10kk"
    }, success(expectationResult)));
  };
  extend = self.Component;
  superPrototype = extend && extend.prototype;
  Object.assign(Class, extend);
  /** @type {function (Function): undefined} */
  (Class.prototype = Object.create(superPrototype)).constructor = Class;
  Class.__superConstructor__ = extend;
  /**
   * @return {?}
   */
  Class.prototype.render = function() {
    return self.createElement("div", {
      className : createTextNode()(this.props.className, "_sokb7")
    }, self.createElement("span", {
      className : "_m5zti",
      onClick : this.$PostViews1
    }, complete(this.props.viewCount)), this.state.overlayVisible && self.createElement(create, {
      likeCount : this.props.likeCount,
      onClose : this.$PostViews1
    }));
  };
  var sup;
  var event;
  /** @type {function (Function): undefined} */
  var label = Class;
  parseInt(1022);
  sup = self.PureComponent;
  event = sup && sup.prototype;
  Object.assign(sub, sup);
  /** @type {function (): ?} */
  (sub.prototype = Object.create(event)).constructor = sub;
  sub.__superConstructor__ = sup;
  /**
   * @return {?}
   */
  sub.prototype.render = function() {
    /** @type {boolean} */
    var b = null != this.props.videoViews && this.props.videoViews > 0;
    /** @type {boolean} */
    var a = this.props.numLikes > 0;
    return(this.props.variant === res.a.feed ? a || b : a || (b || this.props.canLike)) ? self.createElement("section", {
      className : createTextNode()("_1w76c", this.props.className)
    }, b ? self.createElement(label, {
      analyticsContext : this.props.analyticsContext,
      className : "_3gwk6",
      likeCount : this.props.numLikes,
      viewCount : this.props.videoViews
    }) : self.createElement(elem.b, {
      canViewLikedByList : this.props.canLike,
      className : "_3gwk6",
      code : this.props.code,
      likedByViewer : this.props.likedByViewer,
      inModal : !!this.props.inModal,
      onLike : this.$PostSocialProof1,
      onLikeCountClick : this.props.onLikeCountClick,
      totalCount : this.props.numLikes,
      users : this.props.likers,
      viewer : this.props.viewer
    })) : null;
  };
  /** @type {function (): ?} */
  var arg = sub;
  var opt = parseInt(296);
  parseInt(1026);
  var current;
  var response;
  /**
   * @param {Object} data
   * @return {?}
   */
  var createElement = function(data) {
    return self.createElement("div", {
      className : createTextNode()("_ha6c6", data.className)
    }, self.createElement(opts.a, {
      className : "_djdmk",
      href : Object(ctm.e)(data.code)
    }, self.createElement(opt.a, {
      className : "_p29ma",
      isLong : true,
      value : data.postedAt
    })));
  };
  var that = parseInt(333);
  var html = parseInt(119);
  var dom = parseInt.n(html);
  var mins = parseInt(49);
  var key = parseInt(57);
  var child = parseInt.n(key);
  parseInt(965);
  var props = dom.a["medium-screen-min"].value;
  var raw = dom.a["medium-screen-max"].value;
  current = self.Component;
  response = current && current.prototype;
  Object.assign(result, current);
  /** @type {function (): ?} */
  (result.prototype = Object.create(response)).constructor = result;
  result.__superConstructor__ = current;
  /**
   * @return {undefined}
   */
  result.prototype.componentDidMount = function() {
    var point = this;
    this.$Post3 = child.a.addListener(child.a.HIDDEN, function() {
      return point.setState({
        pageVisible : false
      });
    });
    this.$Post4 = child.a.addListener(child.a.VISIBLE, function() {
      return point.setState({
        pageVisible : true
      });
    });
    this.logVisibilityChange(false, !!this.props.isVisible);
  };
  /**
   * @return {undefined}
   */
  result.prototype.componentWillUnmount = function() {
    this.$Post3.remove();
    this.$Post4.remove();
  };
  /**
   * @param {string} $http
   * @return {undefined}
   */
  result.prototype.componentWillReceiveProps = function($http) {
    if (this.props.commentSaveIsInFlight) {
      if (!$http.commentSaveIsInFlight) {
        this.setState({
          isCommentInputVisible : false
        });
      }
    }
    if (this.props.post !== $http.post) {
      this.setState({
        showLikedByList : false
      });
    }
  };
  /**
   * @param {boolean} recurring
   * @param {boolean} dataAndEvents
   * @return {undefined}
   */
  result.prototype.logVisibilityChange = function(recurring, dataAndEvents) {
    if (recurring !== dataAndEvents) {
      if (dataAndEvents) {
        this.$Post6();
      }
      var throttledUpdate = this.props.onleaveViewport;
      if (throttledUpdate) {
        if (this.$Post5()) {
          if (dataAndEvents) {
            this.$Post7 = Object(mins.a)();
          } else {
            if (this.$Post7) {
              /** @type {boolean} */
              this.$Post1 = true;
              throttledUpdate(this.props.post.id, Object(mins.a)() - this.$Post7, this.$Post2);
            }
          }
        }
      }
    }
  };
  /**
   * @param {Element} me
   * @return {undefined}
   */
  result.prototype.componentDidUpdate = function(me) {
    this.logVisibilityChange(!!me.isVisible, !!this.props.isVisible);
  };
  /**
   * @return {?}
   */
  result.prototype.$Post14 = function() {
    return!this.props.post.commentsDisabled && (this.state.isCommentInputVisible || this.props.viewportWidth >= props);
  };
  /**
   * @param {string} target
   * @return {?}
   */
  result.prototype.renderMedia = function(target) {
    var item = this.props.post;
    /** @type {boolean} */
    var $Post9 = !!this.props.viewer;
    return self.createElement(wrapper, {
      analyticsContext : this.props.analyticsContext,
      caption : item.caption,
      commentsAreStacked : target,
      className : "_gxii9",
      dimensions : item.dimensions,
      gatingInfo : item.gatingInfo,
      id : item.id,
      mediaPreview : item.mediaPreview,
      owner : item.owner,
      isVisible : this.props.isVisible,
      isVideo : item.isVideo,
      onLike : $Post9 ? this.$Post9 : null,
      src : item.src,
      displayResources : item.displayResources,
      usertags : item.usertags,
      videoUrl : item.videoUrl,
      sidecarChildren : item.sidecarChildren,
      trackingToken : item.trackingToken,
      shouldLogClientEvent : item.shouldLogClientEvent,
      dashInfo : item.dashInfo,
      onPostMediaRendered : this.setPostMediaRendered
    });
  };
  /**
   * @return {?}
   */
  result.prototype.render = function() {
    var item = this.props.post;
    /** @type {boolean} */
    var err2 = this.props.variant === res.a.feed;
    /** @type {boolean} */
    var err = this.props.viewportWidth < props;
    var i = item.dimensions && (item.dimensions.width / item.dimensions.height > 1.5 && (this.props.viewportWidth > props && this.props.viewportWidth <= raw)) || (err || err2);
    /** @type {number} */
    var br = i ? 30 : 40;
    /** @type {boolean} */
    var charset = !!item.sidecarChildren && !!item.sidecarChildren.length;
    /** @type {boolean} */
    var u = this.props.relationship.hasBlockedViewer.state === that.a;
    /** @type {boolean} */
    var a = !(!this.props.viewer || this.props.owner.isPrivate && (this.props.viewer.id !== this.props.owner.id && this.props.relationship.followedByViewer.state !== that.c));
    /** @type {boolean} */
    var html = !!(item.location && (item.sponsors && item.sponsors.length > 0));
    var shouldShowFollowButton = (!err2 || this.props.showFollowOnFeed) && (!u && (this.props.viewer !== this.props.owner && !this.props.owner.isUnpublished));
    /** @type {boolean} */
    var isRTL = false;
    if (!err2) {
      isRTL = html && bt.a.lookup("bc3l").getBoolParam("threeline", true);
    }
    var orient = void 0;
    var millis = this.state.showLikedByList ? null : self.createElement(sourceText, {
      key : item.id,
      analyticsContext : this.props.analyticsContext,
      avatarSize : br,
      className : "_9dpug" + (isRTL ? " _msz04" : ""),
      isVideo : !!item.isVideo,
      location : item.location,
      owner : this.props.owner,
      shouldShowFollowButton : !!shouldShowFollowButton,
      sponsors : item.sponsors,
      threeLineHeaderEnabled : isRTL,
      viewer : this.props.viewer,
      showVerifiedBadge : this.props.variant !== res.a.feed
    });
    return orient = this.state.showLikedByList ? self.createElement(cfg.a, {
      display : m.a.inline,
      inSidebar : !i,
      onClose : this.$Post18,
      shortcode : this.props.post.code
    }) : [self.createElement("div", {
      className : "_ebcx9" + (isRTL ? " _6zn4x" : ""),
      key : "mediainfo"
    }, self.createElement(node, {
      className : "_8oo9w",
      canViewerProvideFeedback : a,
      commentsDisabled : item.commentsDisabled,
      isBlocked : u,
      isLoggedIn : !!this.props.viewer,
      likedByViewer : item.likedByViewer,
      onCommentClick : this.$Post11,
      onLikeChange : this.$Post8,
      onSaveChange : this.$Post15,
      owner : this.props.owner,
      savedByViewer : item.savedByViewer
    }), self.createElement(arg, {
      analyticsContext : this.props.analyticsContext,
      canLike : !u && a,
      className : "_nlmjy",
      code : item.code,
      inModal : this.props.inModal,
      likedByViewer : item.likedByViewer,
      likers : item.likers,
      numLikes : item.numLikes,
      onLikeChange : this.$Post8,
      onLikeCountClick : this.$Post19,
      variant : this.props.variant,
      videoViews : item.videoViews,
      viewer : this.props.viewer
    }), self.createElement(fullCircle, {
      analyticsContext : this.props.analyticsContext,
      attribution : item.attribution,
      caption : item.caption,
      captionIsEdited : item.captionIsEdited,
      className : "_277v9",
      code : item.code,
      commentsDisabled : item.commentsDisabled,
      id : item.id,
      ownerId : this.props.owner.id,
      variant : this.props.variant
    }), self.createElement(createElement, {
      className : "_6d44r",
      code : clear()(item.code),
      postedAt : clear()(item.postedAt)
    }), (Object(next.C)() || this.$Post14()) && self.createElement(which, {
      analyticsContext : this.props.analyticsContext,
      canViewerProvideFeedback : a,
      className : "_ti7l3" + (this.$Post14() ? "" : " _e34hf"),
      hasPostButton : err,
      id : item.id,
      isLoggedIn : !!this.props.viewer,
      ownerId : this.props.owner.id,
      inputRef : this.$Post13
    })), self.createElement(cname, {
      className : "_5mwg7",
      analyticsContext : this.props.analyticsContext,
      avatarSize : br,
      code : item.code,
      commentsAreStacked : i,
      id : item.id,
      isVideo : item.isVideo,
      key : "postoptionsbutton",
      location : item.location,
      owner : this.props.owner,
      viewer : this.props.viewer,
      viewportWidth : this.props.viewportWidth,
      shouldShowFollowButton : shouldShowFollowButton
    })], self.createElement("article", {
      className : createTextNode()(this.props.className, "_622au" + (err ? " _fsupd" : "") + (err ? "" : " _5lms4") + (i ? " _8n9ix" : "") + (i ? "" : " _4kplh") + (charset ? " _9445e" : ""))
    }, millis, self.createElement("div", {
      className : "_sxolz" + (this.props.lightLetterbox ? " _mi48x" : "")
    }, this.renderMedia(i)), orient, this.state.showUnsaveFromCollectionDialog && self.createElement(el.a, {
      body : "Se o item for removido dos itens salvos, ele tamb\u00c3\u00a9m ser\u00c3\u00a1 removido das come\u00c3\u00a7\u00c3\u00b5es.",
      confirmLabel : "Remover",
      onClose : this.$Post16,
      onConfirm : this.$Post17,
      title : "Remover dos itens salvos e das cole\u00c3\u00a7\u00c3\u00b5es?"
    }));
  };
  result.defaultProps = {
    variant : res.a.flexible
  };
  /** @type {function (): ?} */
  var parsedResult = result;
  var vars = parseInt(383);
  var num = parseInt(294);
  var weeks = parseInt(114);
  fnc.a = Object(volume.connect)(function(self, ignores) {
    var classNames = self.navigation.pageIdentifier;
    var path = Object(from.d)(self);
    var data = Object(vars.c)(self, ignores.id);
    var modId = clear()(data.owner).id;
    var script = self.pendingComments.get(data.id, pos.a);
    var likedByList = data.code ? getFile(self, data.code) : null;
    return{
      commentSaveIsInFlight : script.committing,
      likedByViewer : Object(vars.b)(self, data.id),
      likedByList : likedByList,
      owner : Object(from.a)(self, modId),
      pendingComment : script.text,
      post : data,
      relationship : Object(num.c)(self.relationships, modId),
      savedByViewer : Object(vars.d)(self, data.id),
      viewer : path,
      viewportWidth : self.displayProperties.viewportWidth,
      /**
       * @param {?} deepDataAndEvents
       * @param {Function} dataAndEvents
       * @param {?} opt_obj2
       * @return {undefined}
       */
      onleaveViewport : function(deepDataAndEvents, dataAndEvents, opt_obj2) {
        if (dataAndEvents >= color.a) {
          Object(color.g)(deepDataAndEvents, false, opt_obj2, classNames || "");
        }
      }
    };
  }, function(fn) {
    return{
      /**
       * @param {?} sqlt
       * @param {?} options
       * @return {undefined}
       */
      onSavePressed : function(sqlt, options) {
        fn(Object(cssKeys.n)(sqlt, options));
      },
      /**
       * @param {?} sqlt
       * @param {?} options
       * @return {undefined}
       */
      onUnsavePressed : function(sqlt, options) {
        fn(Object(cssKeys.p)(sqlt, options));
      },
      /**
       * @param {?} sqlt
       * @param {?} nowMillis
       * @return {undefined}
       */
      onLikePost : function(sqlt, nowMillis) {
        fn(Object(cssKeys.l)(sqlt, nowMillis));
      },
      /**
       * @param {?} sqlt
       * @param {?} nowMillis
       * @return {undefined}
       */
      onUnlikePost : function(sqlt, nowMillis) {
        fn(Object(cssKeys.o)(sqlt, nowMillis));
      }
    };
  })(function(store) {
    return function(property) {
      var b;
      var g;
      return Object(next.H)("rt") ? (g = b = function() {
        /**
         * @return {?}
         */
        function attributes() {
          var _ref2;
          var t;
          /** @type {number} */
          var l = arguments.length;
          /** @type {Array} */
          var args = Array(l);
          /** @type {number} */
          var i = 0;
          for (;i < l;i++) {
            args[i] = arguments[i];
          }
          return t = (_ref2 = value.constructor).call.apply(_ref2, [this].concat(args)), this.$Wrapped1 = 0, t;
        }
        var ctor;
        var value;
        return ctor = self.Component, value = ctor && ctor.prototype, Object.assign(attributes, ctor), attributes.prototype = Object.create(value), attributes.prototype.constructor = attributes, attributes.__superConstructor__ = ctor, attributes.prototype.componentWillMount = function() {
          this.$Wrapped1 = Object(mins.a)();
        }, attributes.prototype.componentDidMount = function() {
          var routeResolverProvider = Y.a.getState().navigation;
          var pageId = routeResolverProvider.pageIdentifier;
          var route = routeResolverProvider.route;
          Object(color.c)({
            component : store,
            eventType : "mount",
            pageId : pageId,
            route : route,
            timeTaken : Object(mins.a)() - this.$Wrapped1
          });
        }, attributes.prototype.render = function() {
          return self.createElement(property, this.props);
        }, attributes;
      }(), b.displayName = "withLifecycleLogging(" + Object(weeks.a)(property) + ")", g) : property;
    };
  }("Post")(parsedResult));
}, function(dataAndEvents, fnc, require) {
  /**
   * @param {Function} tests
   * @param {string} key
   * @return {?}
   */
  fnc.a = function(tests, key) {
    return tests.qp.promotions.get(key);
  };
  /**
   * @param {Function} tests
   * @param {string} c
   * @return {?}
   */
  fnc.b = function(tests, c) {
    var item = tests.qp.promotions.get(c);
    return!(!item || (!item[0] || item[0].id !== helper.a.fbconnect));
  };
  var helper = require(958);
}, function(dataAndEvents, element, deepDataAndEvents) {
  var value = {
    fbconnect : "1939973836325880"
  };
  element.a = value;
}, function(module, dataAndEvents, require) {
  var getter = require(911);
  var inspect = require(944);
  var debug = require(897);
  var validator = require(50);
  var getActual = require(946);
  var swap = require(992);
  var action = require(948);
  var assert = require(996);
  var callback = require(951);
  /** @type {number} */
  var argsLength = 30;
  /** @type {string} */
  var fromIndex = "...";
  /** @type {RegExp} */
  var rtagName = /\w*$/;
  /**
   * @param {Function} types
   * @param {Object} options
   * @return {?}
   */
  module.exports = function(types, options) {
    /** @type {number} */
    var length = argsLength;
    /** @type {string} */
    var i = fromIndex;
    if (validator(options)) {
      var value = "separator" in options ? options.separator : value;
      length = "length" in options ? assert(options.length) : length;
      i = "omission" in options ? getter(options.omission) : i;
    }
    var n = (types = callback(types)).length;
    if (debug(types)) {
      var result = action(types);
      n = result.length;
    }
    if (length >= n) {
      return types;
    }
    /** @type {number} */
    var l = length - swap(i);
    if (l < 1) {
      return i;
    }
    var p = result ? inspect(result, 0, l).join("") : types.slice(0, l);
    if (void 0 === value) {
      return p + i;
    }
    if (result && (l += p.length - l), getActual(value)) {
      if (types.slice(l).search(value)) {
        var data;
        var elem = p;
        if (!value.global) {
          /** @type {RegExp} */
          value = RegExp(value.source, callback(rtagName.exec(value)) + "g");
        }
        /** @type {number} */
        value.lastIndex = 0;
        for (;data = value.exec(elem);) {
          var pos = data.index
        }
        p = p.slice(0, void 0 === pos ? l : pos);
      }
    } else {
      if (types.indexOf(getter(value), l) != l) {
        var num = p.lastIndexOf(value);
        if (num > -1) {
          p = p.slice(0, num);
        }
      }
    }
    return p + i;
  };
}, , function(dataAndEvents, deepDataAndEvents, require) {
  var walk = require(1);
  var nodes = require(962);
  walk(nodes, "is-69a9a62f");
}, function(module, dataAndEvents) {
  /** @type {string} */
  module.exports = "._49rz2{color:#999;font-size:14px;font-weight:600}";
}, function(dataAndEvents, deepDataAndEvents, require) {
  var walk = require(1);
  var nodes = require(964);
  walk(nodes, "is-1c70a5c8");
}, function(module, dataAndEvents) {
  /** @type {string} */
  module.exports = "._gq0sr{position:relative;width:100%}._p4skg{bottom:0;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;left:0;position:absolute;right:0;text-align:center;top:0}._ctbfc{-webkit-box-flex:1;-webkit-flex:1;-ms-flex:1;flex:1;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;margin:auto}._rx2oq{background:rgba(0,0,0,.3);padding:0 32px}._eb5of,._edwik{margin:0 auto}._eb5of{display:none}._4oh6g,._cbw0n{max-width:456px;text-align:center}._cbw0n{font-weight:600;margin:12px auto;color:#fff}._4oh6g{color:#efefef}._irjft{border-top:1px solid #e6e6e6}._r2mgi,._r2mgi:visited{color:#fff;font-weight:600;padding:12px 0}@media only screen and (min-width:736px){._eb5of{display:block}._edwik{display:none}._r2mgi,._r2mgi:visited{padding:24px 0}}";
}, function(dataAndEvents, deepDataAndEvents, require) {
  var walk = require(1);
  var nodes = require(966);
  walk(nodes, "is41485793");
}, function(module, dataAndEvents) {
  /** @type {string} */
  module.exports = "._622au{padding:0}._9dpug{border-bottom:1px solid #efefef}._9dpug._msz04{height:76px;padding:0 16px 16px}._5mwg7{height:60px;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;position:absolute}._ebcx9{padding:0 16px}._8oo9w{margin-top:4px}._nlmjy{margin-bottom:8px}._277v9{-webkit-box-flex:1;-webkit-flex-grow:1;-ms-flex-positive:1;flex-grow:1;-webkit-flex-shrink:1;-ms-flex-negative:1;flex-shrink:1;min-height:0;overflow:auto}._277v9,._6d44r{margin-bottom:4px}._ti7l3{margin-top:4px}._e34hf{display:none}._fsupd ._ti7l3{min-height:48px}._5lms4 ._ti7l3{padding-right:26px}._fsupd ._9dpug{padding-right:40px}._fsupd ._5mwg7{right:10px;top:0}._5lms4 ._5mwg7{bottom:0;height:52px;right:10px;top:auto}._8n9ix._9445e ._8oo9w{margin-top:-34px}._4kplh{width:100%}._4kplh ._sxolz{background-color:#000;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;margin-right:335px;min-height:450px}._4kplh ._sxolz._mi48x{background-color:#fafafa}._4kplh ._9dpug{border-bottom:1px solid #efefef;height:78px;margin-right:0;padding:20px 0;position:absolute;right:24px;top:0;width:287px}._4kplh ._9dpug._msz04{height:98px;padding:0 0 20px}._4kplh ._ebcx9{bottom:0;-webkit-box-sizing:border-box;box-sizing:border-box;padding-left:24px;padding-right:24px;position:absolute;right:0;top:78px;width:335px}._4kplh ._ebcx9._6zn4x{top:98px}._4kplh ._8oo9w{border-top:1px solid #efefef;margin:0;-webkit-box-ordinal-group:3;-webkit-order:2;-ms-flex-order:2;order:2;padding-top:2px}._4kplh ._nlmjy{margin-bottom:4px;-webkit-box-ordinal-group:4;-webkit-order:3;-ms-flex-order:3;order:3}._4kplh ._277v9{margin:0 -24px auto;-webkit-box-ordinal-group:2;-webkit-order:1;-ms-flex-order:1;order:1;padding:12px 24px}._4kplh ._6d44r{margin-bottom:0;-webkit-box-ordinal-group:5;-webkit-order:4;-ms-flex-order:4;order:4}._4kplh ._ti7l3{-webkit-box-ordinal-group:6;-webkit-order:5;-ms-flex-order:5;order:5}._4kplh._5lms4 ._5mwg7{right:18px}@media (-webkit-min-device-pixel-ratio:2){._8n9ix ._9dpug{border-bottom-width:.5px}}";
}, function(dataAndEvents, deepDataAndEvents, require) {
  var getActual = require(1);
  var Block = require(968);
  getActual(Block, "is-7a47a681");
}, function(module, dataAndEvents) {
  /** @type {string} */
  module.exports = "._gvks1{-webkit-box-flex:1;-webkit-flex-grow:1;-ms-flex-positive:1;flex-grow:1;-webkit-tap-highlight-color:rgba(0,0,0,0);cursor:pointer;position:relative;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}._7i8tz,._n1lhu{opacity:0;-webkit-transition-duration:.2s;transition-duration:.2s}._7i8tz{bottom:0;left:0;position:absolute;-webkit-transition-property:opacity;transition-property:opacity}._jfgso ._7i8tz{opacity:1}._n1lhu{-webkit-transform-origin:center top;transform-origin:center top;-webkit-transform:scale(0);transform:scale(0);-webkit-transition-property:opacity,-webkit-transform;transition-property:transform,opacity;transition-property:transform,opacity,-webkit-transform;-webkit-transition-timing-function:cubic-bezier(.16,1.275,.725,1.255);transition-timing-function:cubic-bezier(.16,1.275,.725,1.255)}._n1lhu:hover{z-index:100}._emktf ._n1lhu{opacity:1;-webkit-transform:scale(1);transform:scale(1)}";
}, function(dataAndEvents, deepDataAndEvents, require) {
  var walk = require(1);
  var nodes = require(970);
  walk(nodes, "is16de5566");
}, function(module, dataAndEvents) {
  /** @type {string} */
  module.exports = "._4dsc8{background-color:rgba(0,0,0,.85);border-radius:4px;display:block;font-size:14px;line-height:28px;margin-top:6px;padding:0 10px;position:absolute;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}._4dsc8:focus{outline:none}._4dsc8,._4dsc8:link,._4dsc8:visited{color:#fff;font-weight:600}._4dsc8:hover{text-decoration:none}._mg43x{position:relative}._ikwuo{border-color:transparent transparent rgba(0,0,0,.85);border-style:solid;border-width:0 6px 6px;height:0;left:50%;margin-left:-6px;position:absolute;top:-11px;width:0}";
}, function(dataAndEvents, deepDataAndEvents, $sanitize) {
  var isUndefined = $sanitize(1);
  var suiteView = $sanitize(972);
  isUndefined(suiteView, "is16935566");
}, function(module, dataAndEvents) {
  /** @type {string} */
  module.exports = "._pak6p{left:0}._by8kl{right:0}._by8kl,._pak6p{cursor:pointer;display:block;margin-left:12px;margin-right:12px;opacity:0;overflow:hidden;position:absolute;pointer-events:auto;text-indent:-9999em;top:50%}._k7ih4:hover ._by8kl,._k7ih4:hover ._pak6p{opacity:1;-webkit-transition:opacity .2s ease-out;transition:opacity .2s ease-out;-webkit-transition-delay:.1s;transition-delay:.1s}._8kphn{margin-top:-15px}._5wmqs{margin-top:-38px}._5zbvx,._jzfl1{border-radius:50%;height:6px;margin-left:2px;margin-right:2px;-webkit-transition:all .2s ease-in-out;transition:all .2s ease-in-out;width:6px}._5zbvx{background:#dbdbdb}._jzfl1{background:#fff;opacity:.4}._i22oc{opacity:1}._c0g09{background:#3897f0}._4ag49{table-layout:fixed}._4c7y4,._g5463{-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center}._4c7y4{bottom:15px;left:6px;position:absolute;right:6px}._g5463{margin-bottom:15px;margin-top:15px}._8bjpz,._k7ih4{left:0;position:relative;top:0}._8bjpz{display:block}";
}, function(dataAndEvents, deepDataAndEvents, $sanitize) {
  var isUndefined = $sanitize(1);
  var suiteView = $sanitize(974);
  isUndefined(suiteView, "is-487ca3e0");
}, function(module, dataAndEvents) {
  /** @type {string} */
  module.exports = "._bhh72{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center}._cxr3u,._td2ww{display:block;-webkit-box-flex:0;-webkit-flex:0 0 auto;-ms-flex:0 0 auto;flex:0 0 auto;overflow:hidden}._td2ww{-webkit-transition-duration:.05s,.3s;transition-duration:.05s,.3s;-webkit-transition-property:opacity,width;transition-property:opacity,width;-webkit-transition-timing-function:linear,ease;transition-timing-function:linear,ease}";
}, function(dataAndEvents, deepDataAndEvents, require) {
  var walk = require(1);
  var nodes = require(976);
  walk(nodes, "is4a9b5aa6");
}, function(module, dataAndEvents) {
  /** @type {string} */
  module.exports = "._52kpo{-webkit-overflow-scrolling:touch;display:block;overflow-x:auto}._nyieu{position:relative}";
}, function(dataAndEvents, deepDataAndEvents, require) {
  var walk = require(1);
  var nodes = require(978);
  walk(nodes, "is-130da139");
}, function(module, dataAndEvents) {
  /** @type {string} */
  module.exports = "._6b4es{display:block;line-height:0;overflow:hidden}._5x9wm{display:table;overflow-x:visible;-ms-touch-action:pan-y;touch-action:pan-y;-webkit-transition-property:-webkit-transform;transition-property:transform;transition-property:transform,-webkit-transform;will-change:transform}._jxo7a{display:inline-block;line-height:18px}";
}, function(module, dataAndEvents, deepDataAndEvents) {
  /**
   * @param {?} a
   * @param {?} b
   * @return {?}
   */
  function add(a, b) {
    return a === b ? 0 !== a || 1 / a == 1 / b : a !== a && b !== b;
  }
  /** @type {function (this:Object, *): boolean} */
  var fn = Object.prototype.hasOwnProperty;
  /**
   * @param {Function} types
   * @param {?} obj
   * @return {?}
   */
  module.exports = function(types, obj) {
    if (add(types, obj)) {
      return true;
    }
    if ("object" != typeof types || (null === types || ("object" != typeof obj || null === obj))) {
      return false;
    }
    /** @type {Array.<string>} */
    var items = Object.keys(types);
    /** @type {Array.<string>} */
    var keys = Object.keys(obj);
    if (items.length !== keys.length) {
      return false;
    }
    /** @type {number} */
    var i = 0;
    for (;i < items.length;i++) {
      if (!fn.call(obj, items[i]) || !add(types[items[i]], obj[items[i]])) {
        return false;
      }
    }
    return true;
  };
}, function(dataAndEvents, deepDataAndEvents, require) {
  var walk = require(1);
  var nodes = require(981);
  walk(nodes, "is-7638a749");
}, function(module, dataAndEvents) {
  /** @type {string} */
  module.exports = "._742f7,._r48jm{background:0 0;border:none;justify-self:center;outline:none;padding:16px 8px;position:absolute;top:50%;-webkit-transform:translateY(-50%);transform:translateY(-50%);cursor:pointer}._742f7{left:0}._r48jm{right:0}._4wlr9,._559g7{-webkit-box-flex:0;-webkit-flex:0 0 auto;-ms-flex:0 0 auto;flex:0 0 auto}._4wlr9{-webkit-transform:scaleX(-1);transform:scaleX(-1)}";
}, function(dataAndEvents, deepDataAndEvents, require) {
  var walk = require(1);
  var nodes = require(983);
  walk(nodes, "is7d155c76");
}, function(module, dataAndEvents) {
  /** @type {string} */
  module.exports = "._km7ip{border-top:1px solid #efefef;color:#999;-webkit-flex-shrink:0;-ms-flex-negative:0;flex-shrink:0;font-size:14px;line-height:18px;min-height:56px;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;padding:16px 0}._b6i0l,._bilrf{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-flex:1;-webkit-flex-grow:1;-ms-flex-positive:1;flex-grow:1}._b6i0l{-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-flex-shrink:1;-ms-flex-negative:1;flex-shrink:1;position:relative}._bilrf{background:0 0;border:none;color:#262626;font-size:inherit;height:18px;max-height:80px;outline:none;padding:0;resize:none}._bilrf:disabled{opacity:.3;pointer-events:none}._bilrf::-webkit-input-placeholder,._bilrf:focus::-webkit-input-placeholder{color:#999}._bilrf:-ms-input-placeholder,._bilrf:focus:-ms-input-placeholder{color:#999}._bilrf::placeholder,._bilrf:focus::placeholder{color:#999}._55p7a{background:0 0;border:0;color:#3897f0;-webkit-box-flex:0;-webkit-flex-grow:0;-ms-flex-positive:0;flex-grow:0;-webkit-flex-shrink:0;-ms-flex-negative:0;flex-shrink:0;font-size:16px;font-weight:500;padding:0 8px;margin-right:-8px}._55p7a:disabled{color:#b4daff}";
}, function(dataAndEvents, deepDataAndEvents, require) {
  var getActual = require(1);
  var Block = require(985);
  getActual(Block, "isd765ad9");
}, function(module, dataAndEvents) {
  /** @type {string} */
  module.exports = "._4a48i{margin-top:-5px;padding-top:5px;overflow-anchor:none;-webkit-overflow-scrolling:touch}._b0tqa{-webkit-box-flex:1;-webkit-flex-grow:1;-ms-flex-positive:1;flex-grow:1}._56pd5{margin-bottom:8px}._m3m1c{background:0 0;border:none;color:#999;font-size:inherit;margin:0;padding:0}._1s3cd{cursor:pointer}._9whrc{display:inline-block;margin:0 0 0 2px;position:static}._9whrc,._m3m1c{vertical-align:middle}";
}, function(dataAndEvents, deepDataAndEvents, $sanitize) {
  var isUndefined = $sanitize(1);
  var suiteView = $sanitize(987);
  isUndefined(suiteView, "is37335d49");
}, function(module, dataAndEvents) {
  /** @type {string} */
  module.exports = "._az8hw{color:#262626;font-weight:600}._hhr96,._xqg6v{display:inline-block;margin-right:4px}._hhr96{margin-left:-1px;vertical-align:top}._xqg6v{color:#999;margin-bottom:5px}";
}, function(dataAndEvents, deepDataAndEvents, require) {
  var walk = require(1);
  var nodes = require(989);
  walk(nodes, "is-4dc6a59a");
}, function(module, dataAndEvents) {
  /** @type {string} */
  module.exports = "._ezgzd{overflow:hidden;padding-bottom:6px;position:relative;word-wrap:break-word;margin-top:-5px;padding-top:5px}._ezgzd:last-child{padding-bottom:0}._95hvo{margin-right:.3em}._95hvo,._95hvo:visited{color:#262626}._reoub{background:0 0;border:none;color:#c7c7c7;cursor:pointer;float:right;font-size:inherit;height:1em;line-height:inherit;margin-left:10px;overflow:hidden;padding:0;width:1em}._reoub::before{content:'\\2715';display:block}";
}, function(dataAndEvents, deepDataAndEvents, $sanitize) {
  var isUndefined = $sanitize(1);
  var suiteView = $sanitize(991);
  isUndefined(suiteView, "is692b5b3c");
}, function(module, dataAndEvents) {
  /** @type {string} */
  module.exports = "._kq8rw{color:#999}";
}, function(module, dataAndEvents, require) {
  var debug = require(993);
  var getActual = require(897);
  var inspect = require(995);
  /**
   * @param {Function} types
   * @return {?}
   */
  module.exports = function(types) {
    return getActual(types) ? inspect(types) : debug(types);
  };
}, function(mod, dataAndEvents, $sanitize) {
  var result = $sanitize(994)("length");
  mod.exports = result;
}, function(module, dataAndEvents) {
  /**
   * @param {Function} types
   * @return {?}
   */
  module.exports = function(types) {
    return function(options) {
      return null == options ? void 0 : options[types];
    };
  };
}, function(module, dataAndEvents) {
  /** @type {string} */
  var y = "[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]";
  /** @type {string} */
  var name = "\\ud83c[\\udffb-\\udfff]";
  /** @type {string} */
  var time = "(?:\\ud83c[\\udde6-\\uddff]){2}";
  /** @type {string} */
  var rule = "[\\ud800-\\udbff][\\udc00-\\udfff]";
  /** @type {string} */
  var s = "(?:[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]|\\ud83c[\\udffb-\\udfff])?";
  /** @type {string} */
  var b = "[\\ufe0e\\ufe0f]?" + s + ("(?:\\u200d(?:" + ["[^\\ud800-\\udfff]", time, rule].join("|") + ")[\\ufe0e\\ufe0f]?" + s + ")*");
  /** @type {string} */
  var g = "(?:" + ["[^\\ud800-\\udfff]" + y + "?", y, time, rule, "[\\ud800-\\udfff]"].join("|") + ")";
  /** @type {RegExp} */
  var regex = RegExp(name + "(?=" + name + ")|" + g + b, "g");
  /**
   * @param {Function} types
   * @return {?}
   */
  module.exports = function(types) {
    /** @type {number} */
    var str = regex.lastIndex = 0;
    for (;regex.test(types);) {
      ++str;
    }
    return str;
  };
}, function(module, dataAndEvents, require) {
  var getActual = require(997);
  /**
   * @param {Function} types
   * @return {?}
   */
  module.exports = function(types) {
    var a = getActual(types);
    /** @type {number} */
    var b = a % 1;
    return a === a ? b ? a - b : a : 0;
  };
}, function(module, dataAndEvents, require) {
  var getActual = require(998);
  /** @type {number} */
  var n = 1 / 0;
  /** @type {number} */
  var r = 1.7976931348623157E308;
  /**
   * @param {Object} types
   * @return {?}
   */
  module.exports = function(types) {
    return types ? (types = getActual(types)) === n || types === -n ? (types < 0 ? -1 : 1) * r : types === types ? types : 0 : 0 === types ? types : 0;
  };
}, function(module, dataAndEvents, require) {
  var inspect = require(50);
  var objDisplay = require(919);
  /** @type {number} */
  var ret = NaN;
  /** @type {RegExp} */
  var r20 = /^\s+|\s+$/g;
  /** @type {RegExp} */
  var exclude = /^[-+]0x[0-9a-f]+$/i;
  /** @type {RegExp} */
  var rchecked = /^0b[01]+$/i;
  /** @type {RegExp} */
  var numbers = /^0o[0-7]+$/i;
  /** @type {function (*, (number|undefined)): number} */
  var getActual = parseInt;
  /**
   * @param {Function} val
   * @return {?}
   */
  module.exports = function(val) {
    if ("number" == typeof val) {
      return val;
    }
    if (objDisplay(val)) {
      return ret;
    }
    if (inspect(val)) {
      var value = "function" == typeof val.valueOf ? val.valueOf() : val;
      val = inspect(value) ? value + "" : value;
    }
    if ("string" != typeof val) {
      return 0 === val ? val : +val;
    }
    /** @type {string} */
    val = val.replace(r20, "");
    /** @type {boolean} */
    var result = rchecked.test(val);
    return result || numbers.test(val) ? getActual(val.slice(2), result ? 2 : 8) : exclude.test(val) ? ret : +val;
  };
}, function(dataAndEvents, deepDataAndEvents, $sanitize) {
  var isUndefined = $sanitize(1);
  var suiteView = $sanitize(1E3);
  isUndefined(suiteView, "is-fa6a214");
}, function(module, dataAndEvents) {
  /** @type {string} */
  module.exports = "._hmd6j{-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row}._eszkz{margin-left:-8px}._eszkz,._mpkky,._p6oxf{display:inline-block}._mpkky{margin-left:auto;margin-right:-8px}";
}, function(dataAndEvents, deepDataAndEvents, require) {
  var getActual = require(1);
  var Block = require(1002);
  getActual(Block, "is3da6599b");
}, function(module, dataAndEvents) {
  /** @type {string} */
  module.exports = "._6p9ga{background-color:transparent;border:none;cursor:pointer;padding:8px}";
}, function(dataAndEvents, deepDataAndEvents, require) {
  var walk = require(1);
  var nodes = require(1004);
  walk(nodes, "is30ef584d");
}, function(module, dataAndEvents) {
  /** @type {string} */
  module.exports = "._l9yih{background-color:transparent;border:none;cursor:pointer;padding:8px}._fyy4z{cursor:default;opacity:.3}";
}, function(dataAndEvents, deepDataAndEvents, require) {
  var getActual = require(1);
  var Block = require(1006);
  getActual(Block, "is316d5857");
}, function(module, dataAndEvents) {
  /** @type {string} */
  module.exports = "._et4ho{background-color:transparent;border:none;padding:8px}._sa6r5{opacity:.3}";
}, function(dataAndEvents, deepDataAndEvents, $sanitize) {
  var isUndefined = $sanitize(1);
  var suiteView = $sanitize(1008);
  isUndefined(suiteView, "is56c759dc");
}, function(module, dataAndEvents) {
  /** @type {string} */
  module.exports = "._7b8eu{-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;height:60px;padding:16px}._iuvin{-webkit-flex-shrink:0;-ms-flex-negative:0;flex-shrink:0;margin-left:20px;max-width:140px}._fj5rr>button{line-height:18px;padding:0}._oa1lg{-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-box-align:baseline;-webkit-align-items:baseline;-ms-flex-align:baseline;align-items:baseline}._6y8ij{max-width:100%}._s7b66{display:inline}._ba399{-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-box-align:baseline;-webkit-align-items:baseline;-ms-flex-align:baseline;align-items:baseline;max-width:240px}._j56ec{-webkit-box-align:start;-webkit-align-items:flex-start;-ms-flex-align:start;align-items:flex-start;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-flex:1;-webkit-flex-grow:1;-ms-flex-positive:1;flex-grow:1;-webkit-flex-shrink:1;-ms-flex-negative:1;flex-shrink:1;margin-left:12px;overflow:hidden}._k32zm{padding-top:20px}._60iqg{display:block;max-width:100%;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}._eeohz{-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;max-width:100%}._iadoq,._iadoq:visited{color:#262626;-webkit-box-flex:0;-webkit-flex-grow:0;-ms-flex-positive:0;flex-grow:0;-webkit-flex-shrink:1;-ms-flex-negative:1;flex-shrink:1}._hz9vr{-webkit-flex-shrink:0;-ms-flex-negative:0;flex-shrink:0;margin-left:5px}._elp6f{color:#999;display:inline-block;max-width:100%}";
}, function(dataAndEvents, deepDataAndEvents, require) {
  var getActual = require(1);
  var Block = require(1010);
  getActual(Block, "is-373ca88e");
}, function(module, dataAndEvents) {
  /** @type {string} */
  module.exports = "._q8ysx{color:#999;line-height:15px;font-size:12px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}a._q8ysx,a._q8ysx:visited{color:#262626}";
}, function(dataAndEvents, deepDataAndEvents, require) {
  var getActual = require(1);
  var Block = require(1012);
  getActual(Block, "is-2852a83e");
}, function(module, dataAndEvents) {
  /** @type {string} */
  module.exports = "._82161{display:inline;color:#262626;margin-left:4px;margin-right:4px}";
}, function(dataAndEvents, deepDataAndEvents, require) {
  var getActual = require(1);
  var Block = require(1014);
  getActual(Block, "is-1a07a6ad");
}, function(module, dataAndEvents) {
  /** @type {string} */
  module.exports = "._nr3h3{font-size:12px;line-height:15px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}._nr3h3,._nr3h3 ._1kjms,._nr3h3 ._1kjms:visited{color:#262626}";
}, function(dataAndEvents, deepDataAndEvents, require) {
  var getActual = require(1);
  var Block = require(1016);
  getActual(Block, "is-fd0a4d2");
}, function(module, dataAndEvents) {
  /** @type {string} */
  module.exports = "._82odm{display:block;-webkit-box-flex:0;-webkit-flex:none;-ms-flex:none;flex:none}._15vpm{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-tap-highlight-color:rgba(0,0,0,0);-webkit-touch-callout:none}";
}, function(module, dataAndEvents) {
  /**
   * @param {number} instance
   * @param {number} keepData
   * @return {?}
   */
  function callback(instance, keepData) {
    return 1 - 3 * keepData + 3 * instance;
  }
  /**
   * @param {number} a
   * @param {number} keepData
   * @return {?}
   */
  function join(a, keepData) {
    return 3 * keepData - 6 * a;
  }
  /**
   * @param {number} actual
   * @return {?}
   */
  function expect(actual) {
    return 3 * actual;
  }
  /**
   * @param {?} object
   * @param {?} config
   * @param {?} key
   * @return {?}
   */
  function debug(object, config, key) {
    return((callback(config, key) * object + join(config, key)) * object + expect(config)) * object;
  }
  /**
   * @param {number} value
   * @param {number} config
   * @param {?} key
   * @return {?}
   */
  function set(value, config, key) {
    return 3 * callback(config, key) * value * value + 2 * join(config, key) * value + expect(config);
  }
  /**
   * @param {number} data
   * @param {number} type
   * @param {number} display
   * @param {Object} b
   * @param {Object} str
   * @return {?}
   */
  function listener(data, type, display, b, str) {
    var diff;
    var block;
    /** @type {number} */
    var index = 0;
    do {
      if ((diff = debug(block = type + (display - type) / 2, b, str) - data) > 0) {
        display = block;
      } else {
        type = block;
      }
    } while (Math.abs(diff) > snapToNext && ++index < length);
    return block;
  }
  /**
   * @param {number} y
   * @param {number} obj
   * @param {?} b
   * @param {(Error|string)} val
   * @return {?}
   */
  function merge(y, obj, b, val) {
    /** @type {number} */
    var i = 0;
    for (;i < padLength;++i) {
      var keys = set(obj, b, val);
      if (0 === keys) {
        return obj;
      }
      obj -= (debug(obj, b, val) - y) / keys;
    }
    return obj;
  }
  /** @type {number} */
  var padLength = 4;
  /** @type {number} */
  var p = 0.001;
  /** @type {number} */
  var snapToNext = 1E-7;
  /** @type {number} */
  var length = 10;
  /** @type {number} */
  var len = 11;
  /** @type {number} */
  var num = 1 / (len - 1);
  /** @type {boolean} */
  var fn = "function" == typeof Float32Array;
  /**
   * @param {Function} types
   * @param {Function} object
   * @param {Function} val
   * @param {undefined} type
   * @return {?}
   */
  module.exports = function(types, object, val, type) {
    /**
     * @param {number} message
     * @return {?}
     */
    function send(message) {
      /** @type {number} */
      var sum = 0;
      /** @type {number} */
      var i = 1;
      /** @type {number} */
      var last = len - 1;
      for (;i !== last && a[i] <= message;++i) {
        sum += num;
      }
      /** @type {number} */
      var obj = sum + (message - a[--i]) / (a[i + 1] - a[i]) * num;
      var string = set(obj, types, val);
      return string >= p ? merge(message, obj, types, val) : 0 === string ? obj : listener(message, sum, sum + num, types, val);
    }
    if (!(0 <= types && (types <= 1 && (0 <= val && val <= 1)))) {
      throw new Error("bezier x values must be in [0, 1] range");
    }
    /** @type {(Array|Float32Array)} */
    var a = fn ? new Float32Array(len) : new Array(len);
    if (types !== object || val !== type) {
      /** @type {number} */
      var s = 0;
      for (;s < len;++s) {
        a[s] = debug(s * num, types, val);
      }
    }
    return function(err) {
      return types === object && val === type ? err : 0 === err ? 0 : 1 === err ? 1 : debug(send(err), object, type);
    };
  };
}, function(dataAndEvents, deepDataAndEvents, require) {
  var getActual = require(1);
  var Block = require(1019);
  getActual(Block, "is-244da305");
}, function(module, dataAndEvents) {
  /** @type {string} */
  module.exports = "._tauyc{background-color:transparent;border:0;cursor:pointer;padding:6px}";
}, function(dataAndEvents, deepDataAndEvents, require) {
  var walk = require(1);
  var nodes = require(1021);
  walk(nodes, "is551c59b7");
}, function(module, dataAndEvents) {
  /** @type {string} */
  module.exports = "._qbbek{border:1px solid #efefef;font-size:14px;line-height:17px;min-height:34px;margin:0 0 7px;resize:none;white-space:nowrap}._dnf8p{background:#fff;border:solid 1px #e6e6e6;border-radius:3px;-webkit-box-shadow:0 0 5px rgba(0,0,0,.0975);box-shadow:0 0 5px rgba(0,0,0,.0975);margin:0 auto;padding:16px}._agezg{margin-bottom:7px}._c253u{margin-left:0;margin-right:5px}._77z6r{margin-bottom:7px}._e2e53{color:#999;font-size:12px;line-height:16px}._77k0i{display:inline-block;margin:0 5px;position:static;vertical-align:middle}";
}, function(dataAndEvents, deepDataAndEvents, require) {
  var getActual = require(1);
  var Block = require(1023);
  getActual(Block, "is1ffe5bf4");
}, function(module, dataAndEvents) {
  /** @type {string} */
  module.exports = "._1w76c{-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end}._3gwk6{-webkit-box-flex:1;-webkit-flex-grow:1;-ms-flex-positive:1;flex-grow:1;-webkit-flex-shrink:1;-ms-flex-negative:1;flex-shrink:1}";
}, function(dataAndEvents, deepDataAndEvents, $sanitize) {
  var isUndefined = $sanitize(1);
  var suiteView = $sanitize(1025);
  isUndefined(suiteView, "is-202a65f");
}, function(module, dataAndEvents) {
  /** @type {string} */
  module.exports = "._sokb7{color:#262626;display:block;font-weight:600}._m5zti{cursor:pointer}._7px37{bottom:0;left:0;opacity:.5;position:fixed;right:0;top:0;z-index:10}._lfirj{border-color:#fff transparent transparent;border-style:solid;border-width:10px 10px 0;bottom:21px;content:' ';height:0;left:3px;position:absolute;width:0;z-index:12}._m10kk,._rjut9{background:#fff;position:absolute}._rjut9{content:' ';height:14px;left:6px;-webkit-transform:rotate(45deg);transform:rotate(45deg);width:14px;border:1px solid #e6e6e6;bottom:23px;-webkit-box-shadow:0 0 5px 1px rgba(0,0,0,.0975);box-shadow:0 0 5px 1px rgba(0,0,0,.0975);z-index:1}._m10kk{border:solid 1px #e6e6e6;border-radius:3px;bottom:28px;-webkit-box-shadow:0 0 5px rgba(0,0,0,.0975);box-shadow:0 0 5px rgba(0,0,0,.0975);color:#999;display:block;font-weight:600;margin-left:-10px;min-width:50px;padding:14px 16px;z-index:11}";
}, function(dataAndEvents, deepDataAndEvents, $sanitize) {
  var isUndefined = $sanitize(1);
  var suiteView = $sanitize(1027);
  isUndefined(suiteView, "is69525b47");
}, function(module, dataAndEvents) {
  /** @type {string} */
  module.exports = "._ha6c6{display:block}._djdmk,._djdmk:visited{color:#999;margin-bottom:5px;text-transform:uppercase}._p29ma{font-size:10px;letter-spacing:.2px}";
}, , , , , , , , , , , , , , , , , , , function(dataAndEvents, record, parse) {
  /**
   * @param {Object} iterable
   * @param {Array} source
   * @return {?}
   */
  function extend(iterable, source) {
    var object = {};
    var key;
    for (key in iterable) {
      if (!(source.indexOf(key) >= 0)) {
        if (Object.prototype.hasOwnProperty.call(iterable, key)) {
          object[key] = iterable[key];
        }
      }
    }
    return object;
  }
  /**
   * @param {Function} tests
   * @return {undefined}
   */
  function attributes(tests) {
    var me = this;
    parent.constructor.call(this, tests);
    /**
     * @param {?} ast
     * @return {undefined}
     */
    this.$AutoloadingPostsGrid3 = function(ast) {
      ast.preventDefault();
      Object(originalUrl.logAction_DEPRECATED)("loadMoreClick");
      if (me.props.maxPostsToDisplay <= me.$AutoloadingPostsGrid2().length) {
        me.$AutoloadingPostsGrid4();
      }
    };
    /**
     * @return {undefined}
     */
    this.$AutoloadingPostsGrid5 = function() {
      if (me.props.scrollLoadingEnabled) {
        if (!me.props.isOldestPostLoaded) {
          Object(originalUrl.logAction_DEPRECATED)("loadMoreScroll");
          me.$AutoloadingPostsGrid4();
        }
      }
    };
  }
  var ctor;
  var parent;
  var c = parse(9);
  var update = (parse.n(c), parse(15));
  var throttledUpdate = parse.n(update);
  var url = parse(3);
  var file = parse.n(url);
  var originalUrl = parse(7);
  var object = parse(952);
  var dom = parse(0);
  var child = (parse.n(dom), parse(902));
  var p = parse(1062);
  var ntf = parse.n(p);
  var o = parse(117);
  var __extends = Object.assign || function(opt_attributes) {
    /** @type {number} */
    var i = 1;
    for (;i < arguments.length;i++) {
      var iterable = arguments[i];
      var key;
      for (key in iterable) {
        if (Object.prototype.hasOwnProperty.call(iterable, key)) {
          opt_attributes[key] = iterable[key];
        }
      }
    }
    return opt_attributes;
  };
  parse(1054);
  var item = throttledUpdate()({
    narrow : null,
    wide : null
  });
  ctor = dom.Component;
  parent = ctor && ctor.prototype;
  Object.assign(attributes, ctor);
  /** @type {function (Function): undefined} */
  (attributes.prototype = Object.create(parent)).constructor = attributes;
  attributes.__superConstructor__ = ctor;
  /**
   * @return {undefined}
   */
  attributes.prototype.componentWillMount = function() {
    this.props.onPostLoadTargetChange(this.props.maxPostsToDisplay);
  };
  /**
   * @return {undefined}
   */
  attributes.prototype.componentDidMount = function() {
    if (this.$AutoloadingPostsGrid1 && this.props.shouldBeScrolledTo) {
      /** @type {number} */
      var top = 0;
      var el = this.$AutoloadingPostsGrid1;
      for (;el.parentElement instanceof HTMLElement;) {
        top += el.offsetTop;
        /** @type {HTMLElement} */
        el = el.parentElement;
      }
      if (c.canUseDOM) {
        ntf()(function() {
          window.scrollTo(0, top - 45);
        }, 0);
      }
    }
  };
  /**
   * @return {?}
   */
  attributes.prototype.$AutoloadingPostsGrid2 = function() {
    var samePartsLength = void 0;
    if (null == this.props.earliestPostIdToDisplay) {
      /** @type {number} */
      samePartsLength = 0;
    } else {
      /** @type {number} */
      var i = 0;
      for (;i < this.props.posts.length;i++) {
        if (this.props.posts[i].id === this.props.earliestPostIdToDisplay) {
          /** @type {number} */
          samePartsLength = i;
          break;
        }
      }
    }
    return null != samePartsLength || file()(0), this.props.posts.slice(samePartsLength, this.props.maxPostsToDisplay);
  };
  /**
   * @return {undefined}
   */
  attributes.prototype.$AutoloadingPostsGrid4 = function() {
    var key = this.props.maxPostsToDisplay + this.props.pageSize;
    this.props.onPostLoadTargetChange(key);
  };
  /**
   * @param {?} paginationResult
   * @return {undefined}
   */
  attributes.prototype.componentDidUpdate = function(paginationResult) {
    if (this.$AutoloadingPostsGrid6) {
      if (this.props.posts.length !== paginationResult.posts.length) {
        this.$AutoloadingPostsGrid6.forceRecompute();
      }
    }
  };
  /**
   * @param {Array} a
   * @return {?}
   */
  attributes.prototype.$AutoloadingPostsGrid7 = function(a) {
    var current = this.props.posts[this.props.posts.length - 1];
    var next = a[a.length - 1];
    return this.props.isOldestPostLoaded && current === next;
  };
  /**
   * @param {Array} f
   * @return {?}
   */
  attributes.prototype.$AutoloadingPostsGrid8 = function(f) {
    if (this.$AutoloadingPostsGrid7(f)) {
      return null;
    }
    if (this.props.scrollLoadingEnabled) {
      return dom.createElement("div", {
        className : "_gee85"
      }, dom.createElement(o.a, {
        size : "medium"
      }));
    }
    var hasExt = this.props.maxPostsToDisplay > f.length && this.props.isFetching;
    var requires = void 0;
    /** @type {string} */
    requires = hasExt ? "Carregando mais" : "Carregar mais";
    var href = void 0;
    if (this.props.nextPageLinkBuilder) {
      var hash = this.props.endCursor || f[f.length - 1].id;
      /** @type {string} */
      href = this.props.nextPageLinkBuilder() + "?max_id=" + hash;
    } else {
      /** @type {string} */
      href = "#";
    }
    return dom.createElement("a", {
      href : href,
      onClick : this.$AutoloadingPostsGrid3,
      className : "_1cr2e" + (hasExt ? " _5qvif" : "") + (hasExt ? "" : " _epyes")
    }, requires);
  };
  /**
   * @param {Array} text
   * @param {?} _super
   * @return {?}
   */
  attributes.prototype.$AutoloadingPostsGrid9 = function(text, _super) {
    /** @type {number} */
    var right = this.$AutoloadingPostsGrid7(text) ? 0 : text.length % 3;
    return dom.createElement(this.props.postsGridRenderer || object.a, __extends({}, _super, {
      posts : 0 === right ? text : text.slice(0, text.length - right)
    }));
  };
  /**
   * @return {?}
   */
  attributes.prototype.$AutoloadingPostsGrid10 = function() {
    var first = this;
    return dom.createElement(child.a, {
      key : this.$AutoloadingPostsGrid2().length,
      onScrollEnter : this.$AutoloadingPostsGrid5,
      /**
       * @param {?} i
       * @return {?}
       */
      ref : function(i) {
        return first.$AutoloadingPostsGrid6 = i;
      }
    });
  };
  /**
   * @return {?}
   */
  attributes.prototype.render = function() {
    var first = this;
    var obj = this.props;
    var cls = obj.className;
    var oldconfig = extend(obj, ["className"]);
    var th = this.$AutoloadingPostsGrid2();
    return dom.createElement("div", {
      className : cls,
      /**
       * @param {Object} i
       * @return {?}
       */
      ref : function(i) {
        return first.$AutoloadingPostsGrid1 = i;
      }
    }, this.$AutoloadingPostsGrid9(th, oldconfig), this.$AutoloadingPostsGrid10(), this.$AutoloadingPostsGrid8(th));
  };
  attributes.defaultProps = {
    pageSize : 12,
    variant : item.wide
  };
  attributes.VARIANTS = item;
  /** @type {function (Function): undefined} */
  record.a = attributes;
}, function(dataAndEvents, record, $) {
  /**
   * @return {?}
   */
  function attributes() {
    var e;
    var _ref2;
    var base = this;
    /** @type {number} */
    var l = arguments.length;
    /** @type {Array} */
    var args = Array(l);
    /** @type {number} */
    var i = 0;
    for (;i < l;i++) {
      args[i] = arguments[i];
    }
    return e = (_ref2 = value.constructor).call.apply(_ref2, [this].concat(args)), this.state = {
      scrollY : 0
    }, this.$ListVisibilityWatcher1 = [], this.$ListVisibilityWatcher4 = Object(options.a)(function() {
      /** @type {Array} */
      var failures = [];
      /** @type {boolean} */
      var t = false;
      /** @type {number} */
      var url = 0;
      for (;url < self.Children.count(base.props.children);url++) {
        var result = base.$ListVisibilityWatcher5(url);
        failures.push(result);
        if (result !== base.props.visibleItems[url]) {
          /** @type {boolean} */
          t = true;
        }
      }
      if (t) {
        base.props.onVisibleItemsChange(failures);
      }
    }, 250), e;
  }
  var ctor;
  var value;
  var opts = $(93);
  var options = $(118);
  var object = $(910);
  var update = $(6);
  var throttledUpdate = $.n(update);
  var self = $(0);
  $.n(self);
  ctor = self.Component;
  value = ctor && ctor.prototype;
  Object.assign(attributes, ctor);
  /** @type {function (): ?} */
  (attributes.prototype = Object.create(value)).constructor = attributes;
  attributes.__superConstructor__ = ctor;
  /**
   * @return {undefined}
   */
  attributes.prototype.componentDidMount = function() {
    this.$ListVisibilityWatcher2();
  };
  /**
   * @param {Object} g
   * @return {undefined}
   */
  attributes.prototype.componentDidUpdate = function(g) {
    if (self.Children.count(g.children) !== self.Children.count(this.props.children)) {
      this.$ListVisibilityWatcher2();
    }
  };
  /**
   * @return {undefined}
   */
  attributes.prototype.$ListVisibilityWatcher2 = function() {
    var parent = this;
    Object(opts.a)(function() {
      if (parent.$ListVisibilityWatcher3) {
        var range = throttledUpdate()(parent.$ListVisibilityWatcher3);
        /** @type {Array} */
        var arr = [range.getBoundingClientRect().top + window.scrollY];
        /** @type {number} */
        var i = 0;
        for (;i < range.children.length;i++) {
          var start = range.children[i];
          var a = arr[arr.length - 1];
          arr.push(a + start.clientHeight);
        }
        /** @type {Array} */
        parent.$ListVisibilityWatcher1 = arr;
        parent.$ListVisibilityWatcher4();
      }
    });
  };
  /**
   * @param {number} idx
   * @return {?}
   */
  attributes.prototype.$ListVisibilityWatcher5 = function(idx) {
    if (idx >= this.$ListVisibilityWatcher1.length) {
      return false;
    }
    var x = this.$ListVisibilityWatcher1[idx];
    var ylen = this.$ListVisibilityWatcher1[idx + 1];
    /** @type {number} */
    var y = window.scrollY;
    return x < y + window.outerHeight && y < ylen;
  };
  /**
   * @return {?}
   */
  attributes.prototype.render = function() {
    var first = this;
    return self.createElement("div", {
      /**
       * @param {?} i
       * @return {?}
       */
      ref : function(i) {
        return first.$ListVisibilityWatcher3 = i;
      },
      className : this.props.className
    }, self.createElement(object.a, {
      event : "scroll",
      handler : this.$ListVisibilityWatcher4,
      target : window
    }), this.props.children);
  };
  /** @type {function (): ?} */
  record.a = attributes;
}, function(dataAndEvents, fnc, $) {
  /**
   * @return {?}
   */
  function attributes() {
    var e;
    var _ref2;
    var me = this;
    /** @type {number} */
    var l = arguments.length;
    /** @type {Array} */
    var args = Array(l);
    /** @type {number} */
    var i = 0;
    for (;i < l;i++) {
      args[i] = arguments[i];
    }
    return e = (_ref2 = value.constructor).call.apply(_ref2, [this].concat(args)), this.state = {
      isFollowAllModalOpen : false
    }, this.$FollowAllItem1 = function() {
      me.setState({
        isFollowAllModalOpen : false
      });
    }, this.$FollowAllItem2 = function() {
      me.setState({
        isFollowAllModalOpen : true
      });
    }, this.$FollowAllItem3 = function() {
      me.props.handleFollowAllConfirm();
      me.setState({
        isFollowAllModalOpen : false
      });
    }, e;
  }
  /**
   * @return {?}
   */
  function opt_attributes() {
    var value;
    var _ref2;
    var me = this;
    /** @type {number} */
    var l = arguments.length;
    /** @type {Array} */
    var args = Array(l);
    /** @type {number} */
    var i = 0;
    for (;i < l;i++) {
      args[i] = arguments[i];
    }
    return value = (_ref2 = parent.constructor).call.apply(_ref2, [this].concat(args)), this.state = {
      followAllDismissed : false
    }, this.$FacebookConnectUserListItem1 = function() {
      var c = me.props;
      var cl = c.analyticsContext;
      var history = c.history;
      Object(frame.f)(history.location.pathname, cl);
    }, this.$FacebookConnectUserListItem2 = function() {
      Object(object.d)(object.a.FOLLOW_ALL_FB);
      me.setState({
        followAllDismissed : true
      });
      me.props.onFollowAllClicked(me.props.analyticsContext);
    }, value;
  }
  var ctor;
  var value;
  var base;
  var parent;
  var doc = $(2);
  var self = $(313);
  var object = $(216);
  var frame = $(334);
  var node = $(66);
  var that = $(59);
  var p2 = $(957);
  var dom = $(0);
  var io = ($.n(dom), $(8));
  var emptyJ = $(44);
  var kv = $(298);
  var options = $(928);
  var child = $(927);
  $(21);
  $(1068);
  /**
   * @param {?} range
   * @return {?}
   */
  var fn = function(range) {
    return $(5)("Voc\u00c3\u00aa est\u00c3\u00a1 prestes a seguir {number of facebook friends} amigos no Instagram", {
      "number of facebook friends" : range
    });
  };
  /**
   * @param {?} element
   * @return {?}
   */
  var create = function(element) {
    var onClick = element.handleConnectClick;
    return dom.createElement("div", {
      className : "_qxnex"
    }, dom.createElement("div", {
      className : "_q0cwq"
    }, dom.createElement("span", {
      className : "coreSpriteFbGlyph"
    })), dom.createElement("div", {
      className : "_mc50l"
    }, dom.createElement("div", {
      className : "_mb4af"
    }, "Conectar ao Facebook"), dom.createElement("div", {
      className : "_ik5tc"
    }, "Siga seus amigos")), dom.createElement("div", {
      className : "_9bio4"
    }, dom.createElement(node.default, {
      onClick : onClick
    }, "Conectar")));
  };
  ctor = dom.Component;
  value = ctor && ctor.prototype;
  Object.assign(attributes, ctor);
  /** @type {function (): ?} */
  (attributes.prototype = Object.create(value)).constructor = attributes;
  attributes.__superConstructor__ = ctor;
  /**
   * @return {?}
   */
  attributes.prototype.render = function() {
    return dom.createElement("div", {
      className : "_qxnex"
    }, dom.createElement("div", {
      className : "_q0cwq"
    }, dom.createElement("span", {
      className : "coreSpriteFbGlyph"
    })), dom.createElement("div", {
      className : "_mc50l"
    }, dom.createElement("div", {
      className : "_on3sr"
    }, $(5)("Siga seus {number of friends on Instagram} amigos do Facebook.", {
      "number of friends on Instagram" : this.props.fbFriendCount
    })), Object(doc.z)() && dom.createElement("div", {
      className : "_ik5tc"
    }, "Veja o que eles est\u00c3\u00a3o compartilhando no Instagram")), dom.createElement("div", {
      className : "_9bio4"
    }, dom.createElement(node.default, {
      onClick : this.$FollowAllItem2
    }, "Seguir todos")), this.state.isFollowAllModalOpen && dom.createElement(self.a, {
      body : fn(this.props.fbFriendCount),
      confirmLabel : "Seguir todos",
      onClose : this.$FollowAllItem1,
      onConfirm : this.$FollowAllItem3,
      title : "Seguir todos os seus amigos?"
    }));
  };
  base = dom.Component;
  parent = base && base.prototype;
  Object.assign(opt_attributes, base);
  /** @type {function (): ?} */
  (opt_attributes.prototype = Object.create(parent)).constructor = opt_attributes;
  opt_attributes.__superConstructor__ = base;
  /**
   * @return {?}
   */
  opt_attributes.prototype.render = function() {
    return this.props.isLoading ? null : this.props.canFBConnect && that.a.lookup("nux").getBoolParam("use_new_nux", true) ? dom.createElement(child.a, {
      className : this.props.className
    }, dom.createElement(create, {
      handleConnectClick : this.$FacebookConnectUserListItem1
    })) : this.props.isFBConnected && (this.props.fbFriendCount && (!Object(object.b)(object.a.FOLLOW_ALL_FB) && (!this.state.followAllDismissed && that.a.lookup("disc_ppl").getBoolParam("is_enabled", false)))) ? dom.createElement(child.a, {
      className : this.props.className
    }, dom.createElement(attributes, {
      fbFriendCount : this.props.fbFriendCount,
      handleFollowAllConfirm : this.$FacebookConnectUserListItem2
    })) : null;
  };
  fnc.a = Object(emptyJ.withRouter)(Object(io.connect)(function(deepDataAndEvents) {
    return{
      canFBConnect : Object(options.f)(deepDataAndEvents) && !Object(p2.b)(deepDataAndEvents, "5095"),
      isFBConnected : Object(options.e)(deepDataAndEvents),
      fbFriendCount : deepDataAndEvents.suggestedUsers.fbFriendCount,
      isLoading : Object(options.d)(deepDataAndEvents)
    };
  }, function(fn) {
    return{
      /**
       * @param {?} sqlt
       * @return {undefined}
       */
      onFollowAllClicked : function(sqlt) {
        fn(Object(kv.k)(sqlt));
      }
    };
  })(opt_attributes));
}, function(dataAndEvents, type, f) {
  /**
   * @return {?}
   */
  function attributes() {
    var e;
    var _ref2;
    var self = this;
    /** @type {number} */
    var l = arguments.length;
    /** @type {Array} */
    var args = Array(l);
    /** @type {number} */
    var i = 0;
    for (;i < l;i++) {
      args[i] = arguments[i];
    }
    return e = (_ref2 = value.constructor).call.apply(_ref2, [this].concat(args)), this.state = {
      next : null
    }, this.$MediaPrefetcher2 = function() {
      var next = self.state.next;
      if (null != next) {
        set.add(next.id);
        self.$MediaPrefetcher1();
      }
    }, e;
  }
  f.d(type, "a", function() {
    return PREFETCHED_IMAGE;
  });
  var ctor;
  var value;
  var self = f(0);
  var object = (f.n(self), f(898));
  f(1130);
  /** @type {string} */
  var PREFETCHED_IMAGE = "PREFETCHED_IMAGE";
  var set = new Set;
  ctor = self.Component;
  value = ctor && ctor.prototype;
  Object.assign(attributes, ctor);
  /** @type {function (): ?} */
  (attributes.prototype = Object.create(value)).constructor = attributes;
  attributes.__superConstructor__ = ctor;
  /**
   * @return {undefined}
   */
  attributes.prototype.componentWillMount = function() {
    this.$MediaPrefetcher1();
  };
  /**
   * @param {?} nextProps
   * @return {undefined}
   */
  attributes.prototype.componentWillReceiveProps = function(nextProps) {
    this.$MediaPrefetcher1(nextProps);
  };
  /**
   * @param {(Object|boolean)} $animator
   * @param {Node} stream
   * @return {?}
   */
  attributes.prototype.shouldComponentUpdate = function($animator, stream) {
    return this.props.enabled !== $animator.enabled || this.state.next !== stream.next;
  };
  /**
   * @return {?}
   */
  attributes.prototype.$MediaPrefetcher1 = function() {
    var options = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.props;
    var res = options.resources;
    if (options.enabled) {
      /** @type {boolean} */
      var callback2 = true;
      /** @type {boolean} */
      var i = false;
      var bulk = void 0;
      try {
        var inEvent;
        var self = res[Symbol.iterator]();
        for (;!(callback2 = (inEvent = self.next()).done);callback2 = true) {
          var d = inEvent.value;
          if (!set.has(d.id)) {
            return void this.setState({
              next : d
            });
          }
        }
      } catch (fn) {
        /** @type {boolean} */
        i = true;
        bulk = fn;
      } finally {
        try {
          if (!callback2) {
            if (self.return) {
              self.return();
            }
          }
        } finally {
          if (i) {
            throw bulk;
          }
        }
      }
      this.setState({
        next : null
      });
    }
  };
  /**
   * @return {?}
   */
  attributes.prototype.render = function() {
    var options = this.props;
    var enabled = options.enabled;
    var def = options.layoutWrapper;
    var node = this.state.next;
    return null != node && enabled ? self.createElement(def, {
      resource : node
    }, self.createElement(object.a, {
      className : "_bqs6b",
      src : node.src,
      key : node.src,
      srcSet : node.srcSet,
      onLoad : this.$MediaPrefetcher2,
      onError : this.$MediaPrefetcher2
    })) : null;
  };
  attributes.defaultProps = {
    enabled : true,
    /**
     * @param {Object} closest
     * @return {?}
     */
    layoutWrapper : function(closest) {
      return closest.children;
    }
  };
  /** @type {function (): ?} */
  type.b = attributes;
}, function(dataAndEvents, fnc, $) {
  var object = $(508);
  var update = $(11);
  var throttledUpdate = $.n(update);
  var opts = $(375);
  var obj = $(234);
  var self = $(0);
  $.n(self);
  $(1051);
  /**
   * @return {undefined}
   */
  var inverse = function() {
  };
  /**
   * @param {Function} tests
   * @return {?}
   */
  fnc.a = function(tests) {
    var tearDown = tests.className;
    var program = tests.onCloseModal;
    var title = tests.sharingText;
    var cone = program || inverse;
    return self.createElement(obj.a, {
      hideCloseButton : true,
      onClose : cone
    }, self.createElement("span", {
      tabIndex : "0"
    }), self.createElement(opts.a, {
      className : throttledUpdate()("_7hdgb", tearDown)
    }), self.createElement(object.a, {
      title : title || "Compartilhando..."
    }));
  };
}, function(dataAndEvents, deepDataAndEvents, require) {
  var walk = require(1);
  var nodes = require(1052);
  walk(nodes, "is5f975be7");
}, function(module, dataAndEvents) {
  /** @type {string} */
  module.exports = "._7hdgb{position:fixed;top:0;z-index:1;width:100%}";
}, , function(dataAndEvents, deepDataAndEvents, $sanitize) {
  var isUndefined = $sanitize(1);
  var suiteView = $sanitize(1055);
  isUndefined(suiteView, "is-c8ea1fd");
}, function(module, dataAndEvents) {
  /** @type {string} */
  module.exports = "._1cr2e{border-radius:3px;border-style:solid;border-width:1px;color:#fff;display:block;font-size:16px;font-weight:600;line-height:32px;margin:60px auto 0;overflow:hidden;padding:0 48px;text-align:center;text-overflow:ellipsis;white-space:nowrap}._1cr2e._epyes{background:#3897f0;border-color:#3897f0;color:#fff}._1cr2e._5qvif{background:0 0;border-color:#efefef;color:#262626;pointer-events:none}._1cr2e:active{opacity:.7}._gee85{position:relative;margin-top:30px}@media (max-width:735px){._1cr2e{font-size:14px;margin:20px 20px 0}}@media (min-width:736px){._1cr2e{-webkit-align-self:center;-ms-flex-item-align:center;align-self:center}}";
}, function(dataAndEvents, deepDataAndEvents, require) {
  var walk = require(1);
  var nodes = require(1057);
  walk(nodes, "is-251a674");
}, function(module, dataAndEvents) {
  /** @type {string} */
  module.exports = "._70iju{-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row}._70iju:last-child{margin-bottom:0}._f2mse{-webkit-box-flex:1;-webkit-flex:1 0 0%;-ms-flex:1 0 0%;flex:1 0 0%}._f2mse:last-child{margin-right:0}._fk7b6{width:100%}@media (min-width:736px){._f2mse{margin-right:28px}._70iju{margin-bottom:28px}}@media (max-width:735px){._f2mse{margin-right:3px}._70iju{margin-bottom:3px}}";
}, function(dataAndEvents, deepDataAndEvents, $sanitize) {
  var isUndefined = $sanitize(1);
  var suiteView = $sanitize(1059);
  isUndefined(suiteView, "is68135b1b");
}, function(module, dataAndEvents) {
  /** @type {string} */
  module.exports = "._mck9w{display:block;position:relative;width:100%}._mli86{background-color:rgba(0,0,0,.3);bottom:0;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;right:0}._cq6tj,._mli86,._n5ln7,._rxftm{left:0;position:absolute;top:0}._cq6tj::before,._n5ln7::before,._rxftm::before{content:'';display:block;height:100%}._lpowm{color:#fff;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;font-size:16px;font-weight:600}._3apjk,._iexav,._puatn{line-height:19px;margin:0 auto;padding-left:26px;position:relative;display:table}._lxd52{-webkit-box-align:end;-webkit-align-items:flex-end;-ms-flex-align:end;align-items:flex-end;bottom:0;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start;left:0;pointer-events:none;position:absolute;right:0;top:0}@media (min-width:736px){._3apjk{margin-left:0}._1ibs3,._d9a84{margin-right:30px}}@media (max-width:735px){._lpowm{-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column}._iexav,._puatn{margin-bottom:7px}}";
}, function(dataAndEvents, deepDataAndEvents, require) {
  var getActual = require(1);
  var Block = require(1061);
  getActual(Block, "is-4fa9a5cf");
}, function(module, dataAndEvents) {
  /** @type {string} */
  module.exports = "._4u0hd,._c3aqk{position:relative;right:3px;top:-1px}._4u0hd{right:2px;top:1px}";
}, function(module, next_scope, $) {
  (function(field) {
    var self = $(337);
    var wrapper = $(1063);
    /**
     * @return {?}
     */
    module.exports = function() {
      /** @type {number} */
      var l = arguments.length;
      /** @type {Array} */
      var args = Array(l);
      /** @type {number} */
      var i = 0;
      for (;i < l;i++) {
        args[i] = arguments[i];
      }
      var value;
      var elems = args[0];
      return args[0] = function() {
        self.unset(self.IMMEDIATE, value);
        Function.prototype.apply.call(elems, this, arguments);
      }, value = wrapper.apply(field, args), self.set(self.IMMEDIATE, value), value;
    };
  }).call(next_scope, $(19));
}, function(module, next_scope, $) {
  (function(context) {
    var source = $(52);
    var wrapper = $(1064);
    /**
     * @return {?}
     */
    module.exports = function() {
      /** @type {number} */
      var l = arguments.length;
      /** @type {Array} */
      var args = Array(l);
      /** @type {number} */
      var i = 0;
      for (;i < l;i++) {
        args[i] = arguments[i];
      }
      return args[0] = source.guard(args[0], "setImmediate"), wrapper.apply(context, args);
    };
  }).call(next_scope, $(19));
}, function(module, next_scope, require) {
  (function(options) {
    var getActual = require(3);
    var wrapper = options.setImmediate;
    if (!wrapper) {
      var globe = require(1065);
      wrapper = globe.setImmediate;
    }
    /**
     * @return {?}
     */
    module.exports = function() {
      /** @type {number} */
      var l = arguments.length;
      /** @type {Array} */
      var args = Array(l);
      /** @type {number} */
      var i = 0;
      for (;i < l;i++) {
        args[i] = arguments[i];
      }
      return "function" == typeof args[0] || getActual(0), wrapper.apply(null, args);
    };
  }).call(next_scope, require(19));
}, function(dataAndEvents, attachTo) {
  !function(global, socket) {
    /**
     * @param {Object} args
     * @return {?}
     */
    function $(args) {
      var callback = args[0];
      return args = Array.prototype.slice.call(args, 1), map[objUid] = function() {
        callback.apply(socket, args);
      }, (view = view.next = {
        handle : objUid++
      }).handle;
    }
    /**
     * @return {undefined}
     */
    function next() {
      var m = void 0;
      var attr = void 0;
      for (;!text && (m = b.next);) {
        if (b = m, attr = map[m.handle]) {
          /** @type {boolean} */
          text = true;
          try {
            attr();
            /** @type {boolean} */
            text = false;
          } finally {
            notify(m.handle);
            if (text) {
              /** @type {boolean} */
              text = false;
              if (b.next) {
                request(next);
              }
            }
          }
        }
      }
    }
    /**
     * @param {?} capture
     * @return {undefined}
     */
    function notify(capture) {
      delete map[capture];
    }
    /** @type {number} */
    var objUid = 1;
    var map = {};
    var b = {};
    var view = b;
    /** @type {boolean} */
    var text = false;
    var doc = global.document;
    var request = void 0;
    if (!function() {
      if (global.postMessage && !global.importScripts) {
        /** @type {boolean} */
        var t = true;
        /**
         * @return {undefined}
         */
        var respond = function() {
          /** @type {boolean} */
          t = false;
          if (global.removeEventListener) {
            global.removeEventListener("message", respond, false);
          } else {
            global.detachEvent("onmessage", respond);
          }
        };
        if (global.addEventListener) {
          global.addEventListener("message", respond, false);
        } else {
          if (!global.attachEvent) {
            return false;
          }
          global.attachEvent("onmessage", respond);
        }
        return global.postMessage("", "*"), t;
      }
    }()) {
      if (global.MessageChannel) {
        (function() {
          /** @type {MessageChannel} */
          var channel = new MessageChannel;
          /** @type {function (): undefined} */
          channel.port1.onmessage = next;
          /**
           * @return {?}
           */
          request = function() {
            var name = $(arguments);
            return channel.port2.postMessage(name), name;
          };
        })();
      } else {
        if (doc && (doc.createElement && "onreadystatechange" in doc.createElement("script"))) {
          (function() {
            var head = doc.documentElement;
            /**
             * @return {?}
             */
            request = function() {
              var bound = $(arguments);
              var script = doc.createElement("script");
              return script.onreadystatechange = function() {
                /** @type {null} */
                script.onreadystatechange = null;
                head.removeChild(script);
                /** @type {null} */
                script = null;
                next();
              }, head.appendChild(script), bound;
            };
          })();
        } else {
          /**
           * @return {?}
           */
          request = function() {
            return setTimeout(next, 0), $(arguments);
          };
        }
      }
    } else {
      (function() {
        /** @type {string} */
        var MESSAGE_PREFIX = "setImmediate$" + Math.random() + "$";
        /**
         * @param {Object} e
         * @return {undefined}
         */
        var error = function(e) {
          if (e.source === global) {
            if ("string" == typeof e.data) {
              if (0 === e.data.indexOf(MESSAGE_PREFIX)) {
                next();
              }
            }
          }
        };
        if (global.addEventListener) {
          global.addEventListener("message", error, false);
        } else {
          global.attachEvent("onmessage", error);
        }
        /**
         * @return {?}
         */
        request = function() {
          var handle = $(arguments);
          return global.postMessage(MESSAGE_PREFIX + handle, "*"), handle;
        };
      })();
    }
    attachTo.setImmediate = request;
    /** @type {function (?): undefined} */
    attachTo.clearImmediate = notify;
  }(Function("return this")());
}, function(dataAndEvents, deepDataAndEvents, require) {
  var walk = require(1);
  var nodes = require(1067);
  walk(nodes, "is-5c39a6d8");
}, function(module, dataAndEvents) {
  /** @type {string} */
  module.exports = "._b9n99{background:#fff;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-flex:1;-webkit-flex-grow:1;-ms-flex-positive:1;flex-grow:1}._9irns{-webkit-box-flex:0;-webkit-flex-grow:0;-ms-flex-positive:0;flex-grow:0;-webkit-flex-shrink:0;-ms-flex-negative:0;flex-shrink:0;margin-right:13px}._maw20{-webkit-align-self:center;-ms-flex-item-align:center;align-self:center}._9mmn5{color:#999;display:block;font-size:14px;font-weight:400;line-height:18px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}._6e4x5{border-bottom:solid 1px #efefef;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;padding:8px 16px}._ar2c8{background-color:#fafafa;border-bottom:1px solid #e6e6e6;padding:20px 16px 8px}._l0pt6{position:relative;height:50px}._fk40f{-webkit-box-flex:1;-webkit-flex-grow:1;-ms-flex-positive:1;flex-grow:1}._6e4x5:last-child{border-bottom:none;margin-bottom:0}._f5wpw,._npuc5{-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row}._npuc5{-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between}._f5wpw{-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-flex:1;-webkit-flex:1 1 100px;-ms-flex:1 1 100px;flex:1 1 100px;overflow:hidden}._mtnzs{-webkit-box-flex:0;-webkit-flex:0 0 auto;-ms-flex:0 0 auto;flex:0 0 auto;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;margin-left:15px}._2nunc,._eryrc{-webkit-box-direction:normal}._eryrc{-webkit-box-flex:1;-webkit-flex:1 1 70px;-ms-flex:1 1 70px;flex:1 1 70px;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;min-width:70px;-webkit-box-orient:vertical;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column}._2nunc{-webkit-align-content:center;-ms-flex-line-pack:center;align-content:center;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row}._o5iw8,._o5iw8:visited{color:#262626;font-size:14px;font-weight:600;line-height:18px}._a9num{margin-left:7px}._een06{-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;margin-top:12px}._4mlxa{-webkit-flex-basis:150px;-ms-flex-preferred-size:150px;flex-basis:150px;-webkit-box-flex:1;-webkit-flex-grow:1;-ms-flex-positive:1;flex-grow:1;-webkit-flex-shrink:1;-ms-flex-negative:1;flex-shrink:1;margin-right:2px}._4mlxa:last-child{margin-right:0}._d3nfb{color:#999;-webkit-box-flex:1;-webkit-flex-grow:1;-ms-flex-positive:1;flex-grow:1;font-size:14px;line-height:24px;padding:30px 0 42px;text-align:center}@media (max-width:735px){._6e4x5{border-bottom:0}._ar2c8,._lyjak{border-bottom:1px solid #e6e6e6}}@media (min-width:736px){._ar2c8{border-bottom:0}._lyjak,._p4iax{border-radius:3px;border:1px solid #e6e6e6}}";
}, function(dataAndEvents, deepDataAndEvents, $sanitize) {
  var isUndefined = $sanitize(1);
  var suiteView = $sanitize(1069);
  isUndefined(suiteView, "is-74439f65");
}, function(module, dataAndEvents) {
  /** @type {string} */
  module.exports = "._qxnex{-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row}._mc50l,._q0cwq{-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center}._q0cwq{-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;border-radius:50%;border:2px solid #4f67b0;height:56px;margin-right:13px;width:56px;-webkit-box-flex:0;-webkit-flex:0 0 56px;-ms-flex:0 0 56px;flex:0 0 56px}._mc50l{-webkit-box-flex:1;-webkit-flex:1 1 70px;-ms-flex:1 1 70px;flex:1 1 70px;min-width:70px}._mb4af{overflow-x:hidden;text-overflow:ellipsis;white-space:nowrap}._mb4af,._on3sr{color:#262626;display:block;font-weight:600}._ik5tc{color:#999;display:block;overflow-x:hidden;text-overflow:ellipsis;white-space:nowrap}._9bio4{-webkit-box-flex:0;-webkit-flex:0 0 auto;-ms-flex:0 0 auto;flex:0 0 auto;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;padding-left:13px}@media (max-width:735px){._qxnex{padding-bottom:16px;padding-top:8px}}";
}, function(dataAndEvents, type, me) {
  me.d(type, "c", function() {
    return i;
  });
  me.d(type, "a", function() {
    return n;
  });
  me.d(type, "b", function() {
    return r;
  });
  /** @type {string} */
  var i = "Sua hist\u00c3\u00b3ria";
  /** @type {string} */
  var n = "Hist\u00c3\u00b3rias";
  /** @type {string} */
  var r = "Assistir a todas";
}, , function(dataAndEvents, meta, require) {
  /**
   * @param {Function} tests
   * @return {undefined}
   */
  function opt_attributes(tests) {
    var me = this;
    parent.constructor.call(this, tests);
    /**
     * @param {?} edge
     * @return {undefined}
     */
    this.$EditProfilePicMenu1 = function(edge) {
      me.props.onUploadClick(edge);
    };
  }
  /**
   * @param {Function} tests
   * @return {undefined}
   */
  function attributes(tests) {
    var self = this;
    proto.constructor.call(this, tests);
    this.state = {
      isEditProfilePicMenuOpen : false
    };
    /**
     * @param {Array} newlines
     * @return {undefined}
     */
    this.handleFileChange = function(newlines) {
      if (newlines.length > 0) {
        if (fn()) {
          self.props.onStartCreation();
          self.props.onSetProfilePicCreation(newlines[0]);
        } else {
          self.props.onSetProfilePic(newlines[0], self.props.analyticsContext || "unknown", "upload");
        }
        self.setState({
          isEditProfilePicMenuOpen : false
        });
      }
    };
    /**
     * @param {?} deepDataAndEvents
     * @return {undefined}
     */
    this.handleTakeImage = function(deepDataAndEvents) {
      self.props.onSetProfilePic(deepDataAndEvents, self.props.analyticsContext || "unknown", "capture");
    };
    /**
     * @param {Object} e
     * @return {undefined}
     */
    this.onUpload = function(e) {
      if (self.$ProfilePicEdit1) {
        self.$ProfilePicEdit1.selectFile();
        e.preventDefault();
      } else {
        resolved()(false, "Clicking Upload shouldn't be possible when image is not editable");
      }
    };
    /**
     * @param {?} ast
     * @return {undefined}
     */
    this.handleRemoveClick = function(ast) {
      self.props.onRemoveProfilePic(self.props.analyticsContext || "unknown");
      self.setState({
        isEditProfilePicMenuOpen : false
      });
      ast.preventDefault();
    };
    /**
     * @return {undefined}
     */
    this.handleConfirmProfilePicPostUpsell = function() {
      if (!self.props.uploadedProfilePicBlob) {
        throttledUpdate()(0);
      }
      self.props.onProfilePicPostUpsellConfirmed(self.props.uploadedProfilePicBlob);
    };
    /**
     * @return {undefined}
     */
    this.handleCloseEditProfilePicMenu = function() {
      self.setState({
        isEditProfilePicMenuOpen : false
      });
    };
    /**
     * @param {Object} e
     * @return {undefined}
     */
    this.handleEditProfilePic = function(e) {
      if (self.props.hasExistingPic) {
        self.setState({
          isEditProfilePicMenuOpen : true
        });
        e.preventDefault();
      } else {
        self.onUpload(e);
      }
    };
  }
  var ctor;
  var parent;
  var Keyboard = require(2);
  var object = require(313);
  var item = require(287);
  var helper = require(238);
  var props = require(888);
  var cfg = require(885);
  var input = require(234);
  var self = require(0);
  var child = require(886);
  var url = require(252);
  ctor = self.Component;
  parent = ctor && ctor.prototype;
  Object.assign(opt_attributes, ctor);
  /** @type {function (Function): undefined} */
  (opt_attributes.prototype = Object.create(parent)).constructor = opt_attributes;
  opt_attributes.__superConstructor__ = ctor;
  /**
   * @return {?}
   */
  opt_attributes.prototype.render = function() {
    /** @type {boolean} */
    var vec = window.innerWidth <= url.c;
    var millis = self.createElement(props.a, {
      onCancel : this.props.onClose,
      title : "Alterar foto do perfil"
    }, this.props.hasExistingPic ? self.createElement(cfg.a, {
      onClick : this.props.onRemoveClick
    }, "Remover foto atual") : null, self.createElement(cfg.a, {
      onClick : this.$EditProfilePicMenu1
    }, "Carregar foto"), this.props.children);
    var y = {
      onClose : this.props.onClose
    };
    return vec ? self.createElement(child.a, y, millis) : self.createElement(input.a, y, millis);
  };
  var data;
  var proto;
  /** @type {function (Function): undefined} */
  var def = opt_attributes;
  var c = require(376);
  var update = require(3);
  var throttledUpdate = require.n(update);
  var app = require(59);
  var io = require(8);
  var node = require(1050);
  var options = require(204);
  var path = require(87);
  var resolved = require.n(path);
  /**
   * @return {?}
   */
  var fn = function() {
    return Object(Keyboard.D)() && app.a.lookup("prof_pic_creation").getBoolParam("enable_edit", false, {
      vital : true
    });
  };
  data = self.Component;
  proto = data && data.prototype;
  Object.assign(attributes, data);
  /** @type {function (Function): undefined} */
  (attributes.prototype = Object.create(proto)).constructor = attributes;
  attributes.__superConstructor__ = data;
  /**
   * @return {?}
   */
  attributes.prototype.$ProfilePicEdit2 = function() {
    var first = this;
    return self.createElement(c.a, {
      acceptMimeTypes : ["image/jpeg"],
      onFileChange : this.handleFileChange,
      /**
       * @param {?} i
       * @return {?}
       */
      ref : function(i) {
        return first.$ProfilePicEdit1 = i;
      }
    });
  };
  /**
   * @return {?}
   */
  attributes.prototype.render = function() {
    var i = this.props.hasExistingPic;
    return self.createElement("div", null, this.props.showLoadingModal && self.createElement(node.a, null), this.state.isEditProfilePicMenuOpen ? self.createElement(def, {
      hasExistingPic : i,
      onClose : this.handleCloseEditProfilePicMenu,
      onUploadClick : this.onUpload,
      onRemoveClick : this.handleRemoveClick,
      onTakeImage : this.handleTakeImage
    }, this.$ProfilePicEdit2()) : this.$ProfilePicEdit2(), this.props.showProfilePicFirstPostUpsell && (this.props.uploadedProfilePicBlob && self.createElement(object.a, {
      title : "Publicar foto do perfil?",
      body : "Voc\u00c3\u00aa pode compartilhar esta foto como sua primeira publica\u00c3\u00a7\u00c3\u00a3o.",
      confirmLabel : "Publicar",
      onClose : this.props.onProfilePicPostUpsellDismissed,
      onConfirm : this.handleConfirmProfilePicPostUpsell
    })));
  };
  meta.a = Object(io.connect)(function(req) {
    return{
      showProfilePicFirstPostUpsell : req.users.showProfilePicFirstPostUpsell,
      uploadedProfilePicBlob : req.users.profilePicBlob,
      showLoadingModal : req.creation.sessionId && req.creation.creationMode === helper.a.PROFILE_PIC_POST_UPSELL
    };
  }, function(ok) {
    return{
      /**
       * @param {?} result
       * @return {undefined}
       */
      onSetProfilePicCreation : function(result) {
        ok(Object(item.v)(result));
      },
      /**
       * @param {?} deepDataAndEvents
       * @param {?} clone
       * @param {string} fn
       * @return {undefined}
       */
      onSetProfilePic : function(deepDataAndEvents, clone, fn) {
        ok(Object(options.w)(deepDataAndEvents, clone, fn));
      },
      /**
       * @param {?} result
       * @return {undefined}
       */
      onRemoveProfilePic : function(result) {
        ok(Object(options.v)(result));
      },
      /**
       * @return {undefined}
       */
      onStartCreation : function() {
        ok(Object(item.E)("profile_pic", helper.a.PROFILE_PIC));
      },
      /**
       * @param {?} result
       * @return {undefined}
       */
      onProfilePicPostUpsellConfirmed : function(result) {
        ok(Object(item.F)(result));
      },
      /**
       * @return {undefined}
       */
      onProfilePicPostUpsellDismissed : function() {
        ok(Object(options.p)());
      }
    };
  }, null, {
    withRef : true
  })(attributes);
}, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , function(dataAndEvents, fnc, $) {
  var object = $(37);
  var self = $(0);
  $.n(self);
  $(21);
  $(64);
  $(1115);
  /**
   * @param {Function} tests
   * @return {?}
   */
  fnc.a = function(tests) {
    return self.createElement(object.a, {
      className : "_3f3gc _fkers",
      href : tests.href
    }, "See All", self.createElement("span", {
      className : "coreSpriteChevronRight _87e10"
    }));
  };
}, function(dataAndEvents, deepDataAndEvents, require) {
  var walk = require(1);
  var nodes = require(1116);
  walk(nodes, "is2efa5810");
}, function(module, dataAndEvents) {
  /** @type {string} */
  module.exports = "._3f3gc{display:block;-webkit-box-flex:0;-webkit-flex-grow:0;-ms-flex-positive:0;flex-grow:0;float:right;font-size:12px;font-weight:600}";
}, function(dataAndEvents, record, parse) {
  /**
   * @param {Function} tests
   * @return {undefined}
   */
  function opt_attributes(tests) {
    parent.constructor.call(this, tests);
    this.$UserGrid1 = new parsed.a(this);
  }
  /**
   * @param {Function} tests
   * @return {undefined}
   */
  function attributes(tests) {
    var self = this;
    proto.constructor.call(this, tests);
    /**
     * @param {?} type
     * @param {?} dataAndEvents
     * @return {undefined}
     */
    this.$SuggestedUserList2 = function(type, dataAndEvents) {
      var options = self.props.items[type];
      var client = options.relationship;
      var user = options.user;
      if (!(null != client)) {
        pos()(0);
      }
      if (client.followedByViewer.state === state.d) {
        Object(originalUrl.logSuggestionEvent)("recommended_follow_button_tapped", "web", user.id, type);
      }
    };
    /**
     * @param {?} edge
     * @param {?} dataAndEvents
     * @return {undefined}
     */
    this.$SuggestedUserList3 = function(edge, dataAndEvents) {
      Object(originalUrl.logSuggestionEvent)("recommended_username_tapped", "web", self.props.items[edge].user.id, edge);
    };
    /**
     * @param {Array} arr
     * @return {undefined}
     */
    this.$SuggestedUserList4 = function(arr) {
      arr.filter(function(index) {
        return!self.$SuggestedUserList1[self.props.items[index].user.id];
      }).forEach(function(index) {
        var sid = self.props.items[index].user.id;
        Object(originalUrl.logSuggestionEvent)("recommended_user_impression", "web", sid, index);
        /** @type {boolean} */
        self.$SuggestedUserList1[sid] = true;
      });
    };
    this.$SuggestedUserList1 = {};
  }
  var ctor;
  var parent;
  var c = parse(3);
  var pos = parse.n(c);
  var originalUrl = parse(7);
  var self = parse(0);
  var state = parse(333);
  var arg = parse(382);
  var val = parse(66);
  var content = parse(11);
  var tmpl = parse.n(content);
  var parsed = parse(264);
  var url = parse(6);
  var file = parse.n(url);
  var object = parse(117);
  var obj = parse(323);
  var opts = parse(373);
  var s = parse(899);
  parse(1118);
  /**
   * @param {Element} node
   * @return {?}
   */
  var create = function(node) {
    var children = node.children;
    var className = node.className;
    return self.createElement("div", {
      className : tmpl()("_leqcz", className)
    }, children);
  };
  ctor = self.Component;
  parent = ctor && ctor.prototype;
  Object.assign(opt_attributes, ctor);
  /** @type {function (Function): undefined} */
  (opt_attributes.prototype = Object.create(parent)).constructor = opt_attributes;
  opt_attributes.__superConstructor__ = ctor;
  /**
   * @param {Object} data
   * @param {?} dataAndEvents
   * @return {?}
   */
  opt_attributes.prototype.$UserGrid2 = function(data, dataAndEvents) {
    var user = data.user;
    /** @type {boolean} */
    var value = this.props.viewerId !== user.id;
    var proceed = this.props.showFollowButton && value;
    return self.createElement(create, {
      key : user.id
    }, self.createElement(obj.a, {
      className : "_jaxsv",
      profilePictureUrl : file()(user.profilePictureUrl),
      size : this.props.userAvatarSize,
      username : user.username
    }), self.createElement("div", {
      className : "_pkpte"
    }, self.createElement("div", {
      className : "_kz7i8"
    }, self.createElement(opts.a, {
      className : "_1kpcq",
      onClick : this.props.onUsernameClick && this.$UserGrid1.bind(this.props.onUsernameClick, dataAndEvents),
      username : file()(user.username)
    }), user.isVerified && self.createElement(s.a, {
      className : "_ap4nm"
    })), self.createElement("div", {
      className : "_92bo8"
    }, user.fullName)), self.createElement("div", {
      className : "_nmiwf"
    }, proceed ? self.createElement(arg.a, {
      analyticsContext : this.props.analyticsContext,
      onClick : this.props.onFollowClick && this.$UserGrid1.bind(this.props.onFollowClick, dataAndEvents),
      relationship : data.relationship,
      size : val.default.SIZES.autoWithDesktopPadding,
      userId : user.id,
      viewerLoggedIn : null != this.props.viewerId
    }) : null));
  };
  /**
   * @return {?}
   */
  opt_attributes.prototype.render = function() {
    var jQuery = this;
    var props = this.props;
    var cls = props.className;
    var length = props.isLoading;
    var is = props.items;
    /** @type {boolean} */
    var useLargerImages = !!length && 0 === is.length;
    return self.createElement("div", {
      className : tmpl()(cls, "_5elv3")
    }, is.map(function(html, dataAndEvents) {
      return jQuery.$UserGrid2(html, dataAndEvents);
    }), !!length && self.createElement(create, {
      className : "_3b623 _lvxkt" + (useLargerImages ? " _37lc4" : "")
    }, self.createElement(object.a, {
      size : useLargerImages ? "medium" : "small"
    })));
  };
  var data;
  var proto;
  /** @type {function (Function): undefined} */
  var def = opt_attributes;
  var o = parse(927);
  data = self.Component;
  proto = data && data.prototype;
  Object.assign(attributes, data);
  /** @type {function (Function): undefined} */
  (attributes.prototype = Object.create(proto)).constructor = attributes;
  attributes.__superConstructor__ = data;
  /**
   * @return {?}
   */
  attributes.prototype.render = function() {
    var that = this.props;
    return "grid" === that.variant ? self.createElement(def, {
      analyticsContext : that.analyticsContext,
      className : that.className,
      isLoading : that.isLoading,
      items : that.items,
      onFollowClick : this.$SuggestedUserList2,
      onUsernameClick : this.$SuggestedUserList3,
      onVisibilityChange : this.$SuggestedUserList4,
      showFollowButton : that.showFollowButton,
      showPreview : false,
      userAvatarSize : 78,
      viewerId : that.viewerId
    }) : self.createElement(o.b, {
      analyticsContext : that.analyticsContext,
      className : that.className,
      isLoading : that.isLoading,
      isInitialLoading : void 0 === that.isInitialLoading ? that.isLoading : that.isInitialLoading,
      items : that.items,
      onFollowClick : this.$SuggestedUserList2,
      onUsernameClick : this.$SuggestedUserList3,
      onVisibilityChange : this.$SuggestedUserList4,
      maybeShowFbConnectUnit : that.maybeShowFbConnectUnit,
      showFollowButton : that.showFollowButton,
      showPreview : false,
      subHeader : that.subHeader,
      userAvatarSize : 56,
      viewerId : that.viewerId,
      footer : that.footer
    });
  };
  attributes.defaultProps = {
    showFollowButton : true
  };
  /** @type {function (Function): undefined} */
  record.a = attributes;
}, function(dataAndEvents, deepDataAndEvents, require) {
  var getActual = require(1);
  var Block = require(1119);
  getActual(Block, "is-5caea6ee");
}, function(module, dataAndEvents) {
  /** @type {string} */
  module.exports = "._5elv3{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;height:220px;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center}._jaxsv{display:block;margin-bottom:12px}._92bo8{color:#999;display:block;font-size:14px;font-weight:400;line-height:18px;max-width:175px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}._leqcz{-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;background:#fff;border:solid 1px #efefef;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-flex:1;-webkit-flex:1 0 0;-ms-flex:1 0 0;flex:1 0 0;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;margin-right:28px;padding-left:16px;padding-right:16px}._3b623{background:0 0;border:none}._lvxkt{position:relative}._37lc4{-webkit-box-flex:1;-webkit-flex-grow:1;-ms-flex-positive:1;flex-grow:1}._leqcz:last-child{margin-right:0}._kz7i8,._pkpte{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-direction:normal}._pkpte{-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;margin-bottom:12px;min-width:70px;-webkit-box-orient:vertical;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between}._kz7i8{-webkit-box-orient:horizontal;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center}._1kpcq,._1kpcq:visited{color:#262626;font-size:14px;font-weight:600;line-height:18px;margin-bottom:2px}._ap4nm{margin-left:7px}";
}, , , , , , , , , , function(dataAndEvents, fnc, parse) {
  /**
   * @param {Object} item
   * @return {?}
   */
  function fn(item) {
    return item.sidecarChildren && item.sidecarChildren.length ? fn(item.sidecarChildren[0]) : item.isVideo ? null : item.src && item.displayResources ? {
      type : object.a,
      id : item.id,
      src : item.src,
      srcSet : item.displayResources,
      intrinsicDimensions : pos()(item.dimensions)
    } : null;
  }
  var object = parse(1049);
  var c = parse(6);
  var pos = parse.n(c);
  var url = parse(383);
  var root = parse(8);
  fnc.a = Object(root.connect)(function(el, data) {
    var callback = data.getResourceFromPost || fn;
    return{
      enabled : null == data.viewKey || el.mediaPrefetches.isEnabledForView.get(data.viewKey),
      resources : data.postIds.map(function(stdout) {
        return callback(Object(url.c)(el, stdout));
      }).filter(Boolean)
    };
  })(object.b);
}, function(dataAndEvents, deepDataAndEvents, $sanitize) {
  var isUndefined = $sanitize(1);
  var suiteView = $sanitize(1131);
  isUndefined(suiteView, "is-1063a5cc");
}, function(module, dataAndEvents) {
  /** @type {string} */
  module.exports = "._bqs6b{height:0;visibility:hidden;width:100%}";
}, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , function(dataAndEvents, fnc, parse) {
  var obj = parse(66);
  var c = parse(11);
  var i = parse.n(c);
  var dom = parse(0);
  parse.n(dom);
  parse(1203);
  /**
   * @param {Function} tests
   * @return {?}
   */
  fnc.a = function(tests) {
    return dom.createElement("section", {
      className : i()("_9vdhe", tests.className)
    }, dom.createElement("div", {
      className : "_48m77"
    }, dom.createElement("div", {
      className : "_g4jnt"
    }, tests.icon), dom.createElement("div", {
      className : "_iyls6"
    }, tests.headerText), dom.createElement("div", {
      className : "_ewfrk"
    }, tests.bodyText), dom.createElement(obj.default, {
      isProcessing : tests.isProcessing,
      onClick : tests.onButtonClick
    }, tests.buttonText)));
  };
}, , , , , , , , function(dataAndEvents, deepDataAndEvents, $sanitize) {
  var isUndefined = $sanitize(1);
  var suiteView = $sanitize(1204);
  isUndefined(suiteView, "is17325cac");
}, function(module, dataAndEvents) {
  /** @type {string} */
  module.exports = "._9vdhe{padding:16px 44px;text-align:center}._g4jnt{-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-align-self:center;-ms-flex-item-align:center;align-self:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center}._iyls6{font-weight:600;margin-top:13px}._ewfrk{color:#999;margin:11px 0 15px}@media (min-width:736px){._48m77{-webkit-align-self:center;-ms-flex-item-align:center;align-self:center;max-width:260px}}";
}, function(dataAndEvents, meta, parse) {
  /**
   * @return {?}
   */
  function attributes() {
    var e;
    var _ref2;
    var $ProfilePicAdder2 = this;
    /** @type {number} */
    var l = arguments.length;
    /** @type {Array} */
    var args = Array(l);
    /** @type {number} */
    var i = 0;
    for (;i < l;i++) {
      args[i] = arguments[i];
    }
    return e = (_ref2 = value.constructor).call.apply(_ref2, [this].concat(args)), this.state = {
      showConfirm : false,
      showPreviewInConfirm : true
    }, this.$ProfilePicAdder3 = function(edge) {
      if ($ProfilePicAdder2.$ProfilePicAdder2) {
        $ProfilePicAdder2.$ProfilePicAdder2.handleEditProfilePic(edge);
      }
    }, e;
  }
  var ctor;
  var value;
  var o = parse(1195);
  var c = parse(11);
  var hover = parse.n(c);
  var data = parse(1072);
  var object = parse(59);
  var dom = parse(0);
  var io = (parse.n(dom), parse(8));
  var url = parse(221);
  parse(21);
  parse(1206);
  /** @type {string} */
  var ch = "Foto do perfil adicionada.";
  ctor = dom.Component;
  value = ctor && ctor.prototype;
  Object.assign(attributes, ctor);
  /** @type {function (): ?} */
  (attributes.prototype = Object.create(value)).constructor = attributes;
  attributes.__superConstructor__ = ctor;
  /**
   * @param {?} nextProps
   * @return {undefined}
   */
  attributes.prototype.componentWillReceiveProps = function(nextProps) {
    var point = this;
    if (this.props.profilePicUploadIsInFlight) {
      if (!nextProps.profilePicUploadIsInFlight) {
        if (this.props.forceNewUI || object.a.lookup("nux").getBoolParam("show_profile_pic_upsell", false)) {
          this.props.onUploadSuccess();
          this.props.onHideClick();
        }
        this.setState({
          showConfirm : true
        });
        /** @type {number} */
        this.$ProfilePicAdder1 = setTimeout(function() {
          point.setState({
            showPreviewInConfirm : false
          });
          if (point.$ProfilePicAdder2) {
            point.$ProfilePicAdder2.handleCloseEditProfilePicMenu();
          }
        }, 1E4);
      }
    }
  };
  /**
   * @return {undefined}
   */
  attributes.prototype.componentWillUnmount = function() {
    clearTimeout(this.$ProfilePicAdder1);
  };
  /**
   * @return {?}
   */
  attributes.prototype.$ProfilePicAdder4 = function() {
    return dom.createElement("button", {
      className : "_hb1wz",
      onClick : this.$ProfilePicAdder3
    }, dom.createElement("span", {
      className : "_ljfwy _rtcvj coreSpriteAddPhoto"
    }, dom.createElement("span", {
      className : "_fosrc"
    })), "Adicionar uma foto do perfil");
  };
  /**
   * @return {?}
   */
  attributes.prototype.$ProfilePicAdder5 = function() {
    return dom.createElement("div", {
      className : "_h5nnk"
    }, dom.createElement("img", {
      className : "_ljfwy" + (this.state.showPreviewInConfirm ? "" : " _73w61"),
      src : this.props.profilePictureUrl
    }), "Foto do perfil adicionada!");
  };
  /**
   * @return {?}
   */
  attributes.prototype.$ProfilePicAdder6 = function() {
    return dom.createElement("span", {
      className : "coreSpriteNullProfile"
    });
  };
  /**
   * @return {?}
   */
  attributes.prototype.renderNewUI = function() {
    var self = this;
    return dom.createElement("section", {
      className : this.props.className
    }, dom.createElement(o.a, {
      icon : this.$ProfilePicAdder6(),
      isProcessing : this.props.profilePicUploadIsInFlight,
      onButtonClick : this.$ProfilePicAdder3,
      headerText : "Adicionar uma foto do perfil",
      bodyText : "Adicione uma foto do perfil para que seus amigos saibam que \u00c3\u00a9 voc\u00c3\u00aa",
      buttonText : "Adicionar uma foto"
    }), dom.createElement(data.a, {
      hasExistingPic : false,
      analyticsContext : this.props.analyticsContext,
      /**
       * @param {(Node|string)} item
       * @return {?}
       */
      ref : function(item) {
        return self.$ProfilePicAdder2 = item && item.getWrappedInstance();
      }
    }));
  };
  /**
   * @return {?}
   */
  attributes.prototype.render = function() {
    var self = this;
    return this.props.forceNewUI || object.a.lookup("nux").getBoolParam("show_profile_pic_upsell", false) ? this.renderNewUI() : dom.createElement("section", {
      className : hover()(this.props.className, "_5picc" + (this.props.profilePicUploadIsInFlight ? " _tm3z7" : ""))
    }, dom.createElement("button", {
      className : "_6wkkr",
      onClick : this.props.onHideClick
    }), this.state.showConfirm ? this.$ProfilePicAdder5() : this.$ProfilePicAdder4(), dom.createElement(data.a, {
      hasExistingPic : false,
      analyticsContext : this.props.analyticsContext,
      /**
       * @param {(Node|string)} item
       * @return {?}
       */
      ref : function(item) {
        return self.$ProfilePicAdder2 = item && item.getWrappedInstance();
      }
    }));
  };
  meta.a = Object(io.connect)(null, function($sanitize) {
    return{
      /**
       * @return {undefined}
       */
      onUploadSuccess : function() {
        $sanitize(Object(url.c)({
          text : ch,
          persistOnNavigate : true
        }));
      }
    };
  })(attributes);
}, function(dataAndEvents, deepDataAndEvents, $sanitize) {
  var isUndefined = $sanitize(1);
  var suiteView = $sanitize(1207);
  isUndefined(suiteView, "is-102ca5e7");
}, function(module, dataAndEvents) {
  /** @type {string} */
  module.exports = "._5picc{-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;color:#3897f0;padding:10px;-webkit-transition:opacity .2s ease-in;transition:opacity .2s ease-in}@media (min-width:736px){._5picc{background-color:#fff;margin-bottom:20px}}._tm3z7{opacity:.5;pointer-events:none}._6wkkr,._hb1wz{background:0 0;border:none;cursor:pointer;outline:none}._6wkkr{height:36px;overflow:hidden;padding:0;position:absolute;right:0;top:0;width:36px}._hb1wz{color:#3897f0;font:inherit;margin:0}._h5nnk,._hb1wz{padding:0 0 15px}._6wkkr::before{color:#b2b2b2;content:'\\00D7';display:block;font-size:22px;font-weight:100;line-height:25px;margin:0;padding:0}._ljfwy{-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;border-radius:50%;-webkit-box-sizing:border-box;box-sizing:border-box;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;height:80px;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;margin:15px auto;-webkit-transition:height 1.5s ease-in,margin-bottom 1.5s ease-in,opacity 1.5s ease-in,width 1.5s ease-in;transition:height 1.5s ease-in,margin-bottom 1.5s ease-in,opacity 1.5s ease-in,width 1.5s ease-in;width:80px}._ljfwy._73w61{height:0;margin:15px auto 0;opacity:0;width:0}";
}, function(dataAndEvents, type, f) {
  f.d(type, "a", function() {
    return n;
  });
  var o = f(15);
  var n = f.n(o)()({
    instagram_profile_page : null,
    instagram_feed_header : null
  });
}, function(dataAndEvents, fnc, parse) {
  /**
   * @param {Function} tests
   * @return {undefined}
   */
  function attributes(tests) {
    var self = this;
    parent.constructor.call(this, tests);
    /**
     * @param {?} ast
     * @return {undefined}
     */
    this.$FollowCard2 = function(ast) {
      self.$FollowCard1("avatar");
      ast.stopPropagation();
    };
    /**
     * @param {?} ast
     * @return {undefined}
     */
    this.$FollowCard3 = function(ast) {
      self.$FollowCard1("username");
      Object(url.logSuggestionEvent)("recommended_username_tapped", self.props.impressionModule, self.props.user.id, self.props.position);
      ast.stopPropagation();
    };
    /**
     * @param {?} ast
     * @return {undefined}
     */
    this.$FollowCard4 = function(ast) {
      self.$FollowCard1("follow");
      Object(url.logSuggestionEvent)("recommended_follow_button_tapped", self.props.impressionModule, self.props.user.id, self.props.position);
      ast.stopPropagation();
    };
    /**
     * @param {?} ast
     * @return {undefined}
     */
    this.$FollowCard5 = function(ast) {
      self.$FollowCard1("dismiss");
      value()(self.props.onDismissed)(self.props.user.id);
      ast.stopPropagation();
    };
    /**
     * @return {undefined}
     */
    this.$FollowCard6 = function() {
      self.$FollowCard1("other");
      if (!self.props.user.username) {
        hover()(0);
      }
      var copies = Object(parsed.h)(self.props.user.username);
      self.props.history.push(copies);
    };
  }
  /**
   * @param {(RegExp|string)} callback
   * @return {?}
   */
  function render(callback) {
    var ap = dom.createElement("a", {
      href : "#",
      onClick : callback,
      className : "_fkers"
    }, "Tente novamente.");
    return parse(5)("N\u00c3\u00a3o foi poss\u00c3\u00advel carregar sugest\u00c3\u00b5es. {Try again.}", {
      "Try again." : ap
    });
  }
  /**
   * @param {Function} tests
   * @return {undefined}
   */
  function opt_attributes(tests) {
    var me = this;
    proto.constructor.call(this, tests);
    /**
     * @return {undefined}
     */
    this.$FollowChainingList3 = function() {
      /** @type {boolean} */
      me.$FollowChainingList1 = true;
      me.$FollowChainingList4();
      if (me.props.onScrollEnter) {
        me.props.onScrollEnter();
      }
    };
    /**
     * @return {undefined}
     */
    this.$FollowChainingList5 = function() {
      /** @type {boolean} */
      me.$FollowChainingList1 = false;
      if (me.props.onScrollLeave) {
        me.props.onScrollLeave();
      }
    };
    /**
     * @param {?} p
     * @param {?} height
     * @return {undefined}
     */
    this.$FollowChainingList6 = function(p, height) {
      me.$FollowChainingList7 = p;
      me.$FollowChainingList8 = height;
      me.$FollowChainingList4();
    };
    /** @type {boolean} */
    this.$FollowChainingList1 = false;
    this.$FollowChainingList2 = {};
  }
  var ctor;
  var parent;
  var o = parse(382);
  var c = parse(3);
  var hover = parse.n(c);
  var parsed = parse(55);
  var url = parse(7);
  var pairs = parse(6);
  var value = parse.n(pairs);
  var dom = parse(0);
  var originalUrl = parse(44);
  var data = parse(323);
  var object = parse(373);
  var obj = parse(899);
  parse(21);
  parse(1212);
  ctor = dom.Component;
  parent = ctor && ctor.prototype;
  Object.assign(attributes, ctor);
  /** @type {function (Function): undefined} */
  (attributes.prototype = Object.create(parent)).constructor = attributes;
  attributes.__superConstructor__ = ctor;
  /**
   * @param {Object} name
   * @return {undefined}
   */
  attributes.prototype.$FollowCard1 = function(name) {
    Object(url.logAction_DEPRECATED)("chainingClick", {
      source : this.props.analyticsContext,
      target : name
    });
  };
  /**
   * @return {?}
   */
  attributes.prototype.render = function() {
    var options = this.props;
    var user = options.user;
    var first = options.isSmallScreen;
    var async = options.analyticsContext;
    var username = user.username;
    var caption = user.fullName;
    var items = user.profilePictureUrl;
    var userId = user.isVerified;
    return username || hover()(0), items || hover()(0), null != userId || hover()(0), dom.createElement("div", {
      className : "_bc1a8" + (first ? " _5ssho" : "") + (first ? "" : " _n76iy"),
      onClick : this.$FollowCard6
    }, this.props.onDismissed && dom.createElement("button", {
      className : "_hwaop",
      onClick : this.$FollowCard5,
      tabIndex : -1
    }, dom.createElement("div", {
      className : (first ? "coreSpriteDismissSmall" : "") + (first ? "" : " coreSpriteDismissLarge")
    })), dom.createElement(data.a, {
      className : "_ibp0p",
      isLink : true,
      onClick : this.$FollowCard2,
      profilePictureUrl : user.profilePictureUrl,
      username : username,
      size : first ? 77 : 54
    }), dom.createElement("div", {
      className : "_f4zmv"
    }, dom.createElement(object.a, {
      className : "_7qk7w",
      username : username,
      onClick : this.$FollowCard3
    }), userId && dom.createElement("div", {
      className : "_785iq"
    }, dom.createElement(obj.a, null))), dom.createElement("div", {
      className : "_j4myo"
    }, dom.createElement("span", {
      className : "_rrzse notranslate",
      title : caption
    }, caption)), dom.createElement(o.a, {
      className : "_f2fz0",
      userId : user.id,
      analyticsContext : async,
      analyticsExtra : {
        chn : 1
      },
      onClick : this.$FollowCard4
    }));
  };
  var base;
  var proto;
  var element = Object(originalUrl.withRouter)(attributes);
  var opts = parse(933);
  var p = parse(11);
  var $p = parse.n(p);
  var child = parse(902);
  var root = parse(1114);
  parse(1210);
  parse(64);
  var visible = {
    cardWidth : 156,
    gapWidth : 5,
    gutterWidth : 20
  };
  var hidden = {
    cardWidth : 176,
    gapWidth : 24,
    gutterWidth : 24
  };
  base = dom.Component;
  proto = base && base.prototype;
  Object.assign(opt_attributes, base);
  /** @type {function (Function): undefined} */
  (opt_attributes.prototype = Object.create(proto)).constructor = opt_attributes;
  opt_attributes.__superConstructor__ = base;
  /**
   * @return {undefined}
   */
  opt_attributes.prototype.$FollowChainingList4 = function() {
    if (this.$FollowChainingList1 && (null != this.$FollowChainingList7 && (null != this.$FollowChainingList8 && null != this.props.chainingSuggestions))) {
      var ii = this.$FollowChainingList7;
      for (;ii <= this.$FollowChainingList8;++ii) {
        var p = this.props.chainingSuggestions[ii];
        if (null != p) {
          if (!this.$FollowChainingList2[p.id]) {
            Object(url.logSuggestionEvent)("recommended_user_impression", this.props.impressionModule, p.id, ii);
            /** @type {boolean} */
            this.$FollowChainingList2[p.id] = true;
          }
        }
      }
    }
  };
  /**
   * @return {?}
   */
  opt_attributes.prototype.render = function() {
    var props = this.props;
    var cls = props.className;
    var MSG_VISUAL_EDITOR = props.title;
    var src = props.seeAllHref;
    var val = props.isSmallScreen;
    var length = props.chainingFailed;
    var div = props.chainingSuggestions;
    var i = props.onSuggestionDismissed;
    var _parent = props.onRetryClicked;
    var _value = props.analyticsContext;
    var l = props.impressionModule;
    /** @type {({cardWidth: number, gapWidth: number, gutterWidth: number})} */
    var visibility = val ? visible : hidden;
    return dom.createElement(child.a, {
      onScrollEnter : this.$FollowChainingList3,
      onScrollLeave : this.$FollowChainingList5,
      className : $p()(cls, "_dah1q" + (val ? " _hqhuc" : "") + (val ? "" : " _2zn62"))
    }, !length && (!div && dom.createElement("div", {
      className : "_rkhrv"
    }, dom.createElement("p", null, "Carregando sugest\u00c3\u00b5es..."))), length && dom.createElement("div", {
      className : "_el171"
    }, dom.createElement("p", null, render(value()(_parent)))), !length && (div && dom.createElement("div", {
      className : "_1yon1"
    }, dom.createElement("span", {
      className : "_85ya5"
    }, MSG_VISUAL_EDITOR), src && dom.createElement(root.a, {
      href : src
    }))), !length && (div && dom.createElement(opts.a, {
      cardWidth : visibility.cardWidth,
      gapWidth : visibility.gapWidth,
      gutterWidth : visibility.gutterWidth,
      onVisibilityChange : this.$FollowChainingList6
    }, div.map(function(key, Position) {
      return dom.createElement(element, {
        key : key.id,
        /** @type {Function} */
        user : key,
        isSmallScreen : val,
        onDismissed : i,
        analyticsContext : _value,
        impressionModule : l,
        position : Position
      });
    }))));
  };
  /** @type {function (Function): undefined} */
  fnc.a = opt_attributes;
}, function(dataAndEvents, deepDataAndEvents, require) {
  var walk = require(1);
  var nodes = require(1211);
  walk(nodes, "is35865d1d");
}, function(module, dataAndEvents) {
  /** @type {string} */
  module.exports = "._hqhuc{padding:12px 0}._2zn62{padding:20px 0}._hqhuc ._1yon1{margin:0 20px 12px}._2zn62 ._1yon1{margin:0 24px 12px}._1yon1{-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;font-size:14px;font-weight:600;line-height:18px}._85ya5{color:#999;-webkit-box-flex:1;-webkit-flex:1 0 auto;-ms-flex:1 0 auto;flex:1 0 auto;margin-right:12px;display:block}._rk4q3{display:block;-webkit-box-flex:0;-webkit-flex:0 0 auto;-ms-flex:0 0 auto;flex:0 0 auto}._sxjbx{display:inline-block;margin-left:12px}._el171,._rkhrv{color:#999;font-size:16px;font-weight:600;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;padding:20px;text-align:center}._hqhuc ._el171,._hqhuc ._rkhrv{height:214px}._2zn62 ._el171,._2zn62 ._rkhrv{height:223px}";
}, function(dataAndEvents, deepDataAndEvents, require) {
  var walk = require(1);
  var nodes = require(1213);
  walk(nodes, "is56ba59da");
}, function(module, dataAndEvents) {
  /** @type {string} */
  module.exports = "._bc1a8{-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;background:#fff;border:1px solid #e6e6e6;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-flex:0;-webkit-flex:0 0 auto;-ms-flex:0 0 auto;flex:0 0 auto;width:100%}._5ssho._bc1a8{border-radius:1px;padding:16px}._n76iy._bc1a8{border-radius:3px;padding:20px}._hwaop{background:0 0;border:none;cursor:pointer;outline:none;padding:12px;position:absolute;right:0;top:0}._n76iy ._hwaop{margin:8px}._5ssho ._ibp0p{margin-bottom:8px}._n76iy ._ibp0p{margin-bottom:20px}._f4zmv,._j4myo{-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;width:100%}._f4zmv{margin-bottom:4px}._5ssho ._j4myo{margin-bottom:8px}._n76iy ._j4myo{margin-bottom:12px}._785iq{-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-box-flex:0;-webkit-flex:0 0 auto;-ms-flex:0 0 auto;flex:0 0 auto;height:0;margin-left:4px}._7qk7w,._7qk7w:visited{color:#262626}._7qk7w,._rrzse{margin-bottom:-10px;margin-top:-10px;overflow:hidden;padding-bottom:10px;padding-top:10px;text-overflow:ellipsis;white-space:nowrap}._5ssho ._7qk7w,._5ssho ._rrzse{font-size:14px}._rrzse{color:#999;text-align:center;-webkit-box-flex:1;-webkit-flex-grow:1;-ms-flex-positive:1;flex-grow:1}._rrzse::after{content:'.';display:inline-block;visibility:hidden;width:0}._f2fz0{width:100%}";
}, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , function(dataAndEvents, deepDataAndEvents, require) {
  var walk = require(1);
  var nodes = require(1396);
  walk(nodes, "is7ec0573d");
}, function(module, dataAndEvents) {
  /** @type {string} */
  module.exports = "._owark{-webkit-box-flex:1;-webkit-flex-grow:1;-ms-flex-positive:1;flex-grow:1;margin:0 auto;max-width:600px;position:relative;width:100%}._gsusx{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-flow:row nowrap;-ms-flex-flow:row nowrap;flex-flow:row nowrap;max-width:935px}._62ky5{display:block}._k46tg{display:inline-block;margin-top:2px;vertical-align:middle}._14b0y{margin-bottom:30px}._d4oao{float:left;margin-right:28px;max-width:614px;width:100%}._s5vjd:last-child{margin-bottom:0}._7axot{-webkit-align-self:center;-ms-flex-item-align:center;align-self:center}._qgv8j{-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;padding-top:8px}._m0zxo{position:fixed;bottom:0;left:0}._hw7lt{background:0 0;border:0;margin:0;padding:0}@media (min-width:640px){._owark{padding-top:60px}._2wxtj{background:#fff;border-radius:3px;border:1px solid #efefef}._7g4gl,._nx5in,._ouv75,._psd08,._s5vjd{background-color:#fff;margin-left:-1px;margin-right:-1px}._nx5in,._ouv75,._psd08,._s5vjd{border-radius:3px;border:1px solid #e6e6e6}._2wxtj,._7g4gl,._s5vjd{margin-bottom:60px}._nx5in,._ouv75,._psd08{margin-bottom:20px}}@media (max-width:639px){._owark{margin-bottom:10px}._nx5in,._ouv75,._psd08{border-bottom:1px solid #e6e6e6}._nx5in,._ouv75{background-color:#fff}}@media (max-width:735px){._2wxtj,._s5vjd{margin-bottom:15px}._7g4gl{margin-bottom:30px}}";
}, function(dataAndEvents, deepDataAndEvents, $sanitize) {
  var isUndefined = $sanitize(1);
  var suiteView = $sanitize(1398);
  isUndefined(suiteView, "is-50e8a5e5");
}, function(module, dataAndEvents) {
  /** @type {string} */
  module.exports = "._11dqz,._b0xvl{max-width:293px;position:absolute;right:0;width:100%}._b0xvl{height:0}._11dqz{height:100vh;margin-bottom:30px;padding:0;top:60px}._5w6wt{position:fixed;top:78px}._i4wsm{-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;height:62px;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between}._qwuqp{border:none;border-top:1px solid #efefef;height:1px;margin:0 0 12px;padding:0;width:100%}._709h2{background-color:transparent;border:0;cursor:pointer;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-flex-shrink:0;-ms-flex-negative:0;flex-shrink:0;margin-bottom:12px;padding:0}._709h2:active,._709h2:focus{outline:none}";
}, function(dataAndEvents, deepDataAndEvents, $sanitize) {
  var isUndefined = $sanitize(1);
  var suiteView = $sanitize(1400);
  isUndefined(suiteView, "is7df05c88");
}, function(module, dataAndEvents) {
  /** @type {string} */
  module.exports = "._t4xyv{display:block;max-height:272px;overflow-y:auto;padding-top:6px;width:100%}._ldjog{color:#c7c7c7;font-size:14px;line-height:18px;margin-bottom:16px;margin-top:4px;width:100%}";
}, function(dataAndEvents, deepDataAndEvents, $sanitize) {
  var isUndefined = $sanitize(1);
  var suiteView = $sanitize(1402);
  isUndefined(suiteView, "is-bc9a1e9");
}, function(module, dataAndEvents) {
  /** @type {string} */
  module.exports = "._j5rx4{-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-box-flex:0;-webkit-flex:0 0 auto;-ms-flex:0 0 auto;flex:0 0 auto;height:60px;padding-left:5px;width:100%}._qwqu1{opacity:.5}._gh2cz{color:#262626}._rft3x{color:#999}._di9ug{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-flex:0;-webkit-flex:0 1 100%;-ms-flex:0 1 100%;flex:0 1 100%;margin-left:14px}._kb2hs,._s63gu{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}._kb2hs{font-size:14px;font-weight:600;line-height:18px;margin-bottom:2px}._s63gu{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;color:#999;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;height:14px;text-transform:uppercase}._g59cx{font-size:10px;line-height:12px}";
}, function(dataAndEvents, deepDataAndEvents, require) {
  var walk = require(1);
  var nodes = require(1404);
  walk(nodes, "is1a8c627a");
}, function(module, dataAndEvents) {
  /** @type {string} */
  module.exports = "._c68e4,._hqkdm{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-direction:normal;-webkit-box-flex:0}._c68e4{-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;height:60px;padding-left:5px;width:100%;-webkit-box-orient:horizontal;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-flex:0 0 auto;-ms-flex:0 0 auto;flex:0 0 auto}._hqkdm{-webkit-box-orient:vertical;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-flex:0 1 100%;-ms-flex:0 1 100%;flex:0 1 100%;margin-left:14px}._9l5fl,._it0hk{background:#efefef;height:14px}._9l5fl{width:116px;margin-bottom:4px}._it0hk{width:86px}";
}, function(dataAndEvents, deepDataAndEvents, $sanitize) {
  var isUndefined = $sanitize(1);
  var suiteView = $sanitize(1406);
  isUndefined(suiteView, "is7b2762d3");
}, function(module, dataAndEvents) {
  /** @type {string} */
  module.exports = "._fgzgd{-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-flex:0;-webkit-flex:none;-ms-flex:none;flex:none;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center}._q6ooz{left:50%;position:absolute;top:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%)}._rmwa6{background:#efefef;border-radius:50%;border:1px solid rgba(0,0,0,.0975)}";
}, function(dataAndEvents, deepDataAndEvents, $sanitize) {
  var isUndefined = $sanitize(1);
  var suiteView = $sanitize(1408);
  isUndefined(suiteView, "is65395b00");
}, function(module, dataAndEvents) {
  /** @type {string} */
  module.exports = "._havey,._sfpqp{-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column}._sfpqp{-webkit-box-orient:horizontal;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row}";
}, function(dataAndEvents, deepDataAndEvents, require) {
  var getActual = require(1);
  var Block = require(1410);
  getActual(Block, "is-10a0a23b");
}, function(module, dataAndEvents) {
  /** @type {string} */
  module.exports = "._sfbui{-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;font-weight:600;height:18px;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;margin-bottom:12px}._72oww{color:#999;font-size:14px;line-height:18px}._fptk9,._fptk9:active,._fptk9:focus,._fptk9:hover,._fptk9:visited{color:#262626;font-size:12px;line-height:14px}._13aga ._fptk9{opacity:.3}";
}, function(dataAndEvents, deepDataAndEvents, require) {
  var walk = require(1);
  var nodes = require(1412);
  walk(nodes, "is35d95d34");
}, function(module, dataAndEvents) {
  /** @type {string} */
  module.exports = "._ikq0n{-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;height:100%;margin-bottom:12px;max-height:50px;width:100%;padding-left:5px}._pbvu8{width:50px}._f89xq,._f89xq:active,._f89xq:focus,._f89xq:hover,._f89xq:visited{color:#262626;font-weight:600}._ewiye{color:#999}._8hjc5,._on99m{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-direction:normal}._on99m{-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;margin-left:14px;-webkit-box-orient:vertical;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column}._8hjc5{-webkit-box-orient:horizontal;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;font-size:14px;line-height:18px;margin-bottom:2px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}._irzdz,._og9e9{display:inline-block}._irzdz{font-size:12px;line-height:14px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}._og9e9{margin-left:7px}";
}, function(dataAndEvents, deepDataAndEvents, $sanitize) {
  var isUndefined = $sanitize(1);
  var suiteView = $sanitize(1414);
  isUndefined(suiteView, "is-157a652");
}, function(module, dataAndEvents) {
  /** @type {string} */
  module.exports = "._hr9tt{background:#fafafa;border-bottom:1px solid #e6e6e6;display:block;height:126px;padding:10px 0}._asnzw{border:1px solid #e6e6e6;border-radius:3px;margin-bottom:24px;margin-top:-36px}._bek4i{color:#262626;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;font-size:14px;font-weight:600;height:14px;line-height:18px;margin:0 16px 10px}._fdrjr{-webkit-box-flex:1;-webkit-flex-grow:1;-ms-flex-positive:1;flex-grow:1}._99hoy{color:#262626;-webkit-box-flex:0;-webkit-flex-grow:0;-ms-flex-positive:0;flex-grow:0}._c2hhm{position:relative;height:82px;overflow:hidden}._juv1t:active{outline:none}._juv1t{-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-ms-overflow-style:-ms-autohiding-scrollbar;-webkit-overflow-scrolling:touch;padding-left:8px;padding-right:8px}._2jziq{height:122px;padding:0 4px;width:80px}._jjvdm ._99hoy{opacity:.3}._jjvdm ._juv1t::after{background:-webkit-gradient(linear,left top,right top,color-stop(30%,rgba(250,250,250,0)),to(#fafafa));background:-webkit-linear-gradient(left,rgba(250,250,250,0) 30%,#fafafa);background:linear-gradient(to right,rgba(250,250,250,0) 30%,#fafafa);bottom:0;content:'';left:0;opacity:.9;position:absolute;right:0;top:0}";
}, function(dataAndEvents, deepDataAndEvents, require) {
  var walk = require(1);
  var nodes = require(1416);
  walk(nodes, "is7dc35c71");
}, function(module, dataAndEvents) {
  /** @type {string} */
  module.exports = "._4f40d{-webkit-align-self:center;-ms-flex-item-align:center;align-self:center;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;background:0 0;border:0;cursor:pointer;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;margin:0;overflow:hidden;padding:0;position:relative;text-align:center;width:64px}._4f40d:active{opacity:.5}._dev2d{margin:4px auto 8px}._94pyl{position:absolute;right:4px;top:44px}._aylf4{color:#262626;display:block;font-size:12px;line-height:14px;overflow:hidden;text-align:center;text-overflow:ellipsis;white-space:nowrap}";
}, function(dataAndEvents, deepDataAndEvents, require) {
  var walk = require(1);
  var nodes = require(1418);
  walk(nodes, "is69955b3d");
}, function(module, dataAndEvents) {
  /** @type {string} */
  module.exports = "@-webkit-keyframes story-tray-item-loading{0%{-webkit-transform:rotate(0);transform:rotate(0)}to{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes story-tray-item-loading{0%{-webkit-transform:rotate(0);transform:rotate(0)}to{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}._tbozi{-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-align-self:center;-ms-flex-item-align:center;align-self:center;cursor:pointer;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;text-align:center;width:64px}._nux9v{opacity:.5}._aqxh3{margin-bottom:8px;margin-top:4px}._4omyi,._s8lpw{-webkit-animation:story-tray-item-loading .9s linear infinite;animation:story-tray-item-loading .9s linear infinite}._ocij3{color:#262626;display:block;font-size:12px;line-height:14px;overflow:hidden;text-align:center;text-overflow:ellipsis;white-space:nowrap;width:100%}._1qy4j{color:#999}";
}, function(dataAndEvents, deepDataAndEvents, require) {
  var walk = require(1);
  var nodes = require(1420);
  walk(nodes, "is-5a77a50b");
}, function(module, dataAndEvents) {
  /** @type {string} */
  module.exports = "._8wxvg{-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;position:relative;height:76px;width:76px}._oo4i1{bottom:0;height:100%;left:0;position:absolute;right:0;top:0;width:100%}";
}, function(dataAndEvents, deepDataAndEvents, $sanitize) {
  var isUndefined = $sanitize(1);
  var suiteView = $sanitize(1422);
  isUndefined(suiteView, "is707e5fa0");
}, function(module, dataAndEvents) {
  /** @type {string} */
  module.exports = "._nquah{margin-top:4px}";
}, function(dataAndEvents, deepDataAndEvents, $sanitize) {
  var isUndefined = $sanitize(1);
  var suiteView = $sanitize(1424);
  isUndefined(suiteView, "is18e05caa");
}, function(module, dataAndEvents) {
  /** @type {string} */
  module.exports = "._cxfdi,._m5u86{border:1px solid #efefef}._cxfdi{border-left:none;border-right:none}._m5u86{border-radius:4px}._1v9ex{background:#fafafa}._r4x45{background:#fff}";
}, function(dataAndEvents, deepDataAndEvents, require) {
  var walk = require(1);
  var nodes = require(1426);
  walk(nodes, "is-756ca759");
}, function(module, dataAndEvents) {
  /** @type {string} */
  module.exports = "._cl8v7{position:absolute;bottom:0;height:48px;left:0;right:0}._p2crk{margin-top:40px;height:48px}";
}, function(dataAndEvents, deepDataAndEvents, $sanitize) {
  var isUndefined = $sanitize(1);
  var suiteView = $sanitize(1428);
  isUndefined(suiteView, "is-7599a748");
}, function(module, dataAndEvents) {
  /** @type {string} */
  module.exports = "._t1206{padding:18px 44px;text-align:center}._tsqk0{font-weight:600;margin-bottom:10px}._6w2wl{color:#999}";
}, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , function(dataAndEvents, def, $) {
  /**
   * @return {undefined}
   */
  function _this() {
    tmp.apply(this, arguments);
  }
  /**
   * @return {?}
   */
  function constructor() {
    var value;
    var _ref2;
    var self = this;
    /** @type {number} */
    var l = arguments.length;
    /** @type {Array} */
    var args = Array(l);
    /** @type {number} */
    var i = 0;
    for (;i < l;i++) {
      args[i] = arguments[i];
    }
    return value = (_ref2 = str.constructor).call.apply(_ref2, [this].concat(args)), this.state = {
      showModal : false
    }, this.$AddToHomeScreenContainer1 = function() {
      if (self.$AddToHomeScreenContainer2()) {
        self.setState({
          showModal : true
        }, function() {
          Object(frame.logAction_DEPRECATED)("a2hsNuxShown");
        });
      }
    }, this.$AddToHomeScreenContainer3 = function() {
      Object(from.d)(from.a.ADD_TO_HOMESCREEN_COOKIE);
    }, this.onAction = function(ast) {
      if ($src.canUseDOM) {
        if (void 0 !== window.defferedA2HSPrompt) {
          window.defferedA2HSPrompt.prompt();
          Object(frame.logAction_DEPRECATED)("a2hsShown");
          window.defferedA2HSPrompt.userChoice.then(function(response) {
            if ("dismissed" === response.outcome) {
              Object(frame.logAction_DEPRECATED)("a2hsDismissed");
            } else {
              Object(frame.logAction_DEPRECATED)("a2hsAdded");
            }
            /** @type {null} */
            window.defferedA2HSPrompt = null;
          });
        }
      }
      self.onClose();
    }, this.onClose = function(ast) {
      self.setState({
        showModal : false
      }, function() {
        if (ast) {
          Object(frame.logAction_DEPRECATED)("a2hsNuxDismissed");
        }
        self.$AddToHomeScreenContainer3();
      });
    }, value;
  }
  /**
   * @return {?}
   */
  function makeArray() {
    return "DesktopStoryTrayItem_" + DesktopStoryTrayItem_++;
  }
  /**
   * @return {?}
   */
  function Class() {
    var value;
    var _ref2;
    var self = this;
    /** @type {number} */
    var l = arguments.length;
    /** @type {Array} */
    var args = Array(l);
    /** @type {number} */
    var i = 0;
    for (;i < l;i++) {
      args[i] = arguments[i];
    }
    return value = (_ref2 = superPrototype.constructor).call.apply(_ref2, [this].concat(args)), this.state = {
      elementId : makeArray()
    }, this.$DesktopStoryTrayItem2 = function(ast) {
      ast.preventDefault();
      self.props.onClick(self.props.reel.id, self.state.elementId);
    }, this.$DesktopStoryTrayItem1 = function() {
      self.props.onScrollEnter(self.props.reel.userId, self.props.trayPosition);
    }, value;
  }
  /**
   * @param {Object} a
   * @return {undefined}
   */
  function e(a) {
    var al = a.estimatedSize;
    this.$SizeCache1 = new elements.a;
    this.$SizeCache2 = al;
  }
  /**
   * @return {?}
   */
  function opt_attributes() {
    var value;
    var _ref2;
    var me = this;
    /** @type {number} */
    var l = arguments.length;
    /** @type {Array} */
    var args = Array(l);
    /** @type {number} */
    var i = 0;
    for (;i < l;i++) {
      args[i] = arguments[i];
    }
    return value = (_ref2 = prototype.constructor).call.apply(_ref2, [this].concat(args)), this.state = {
      renderEnd : this.props.initialRenderCount || 0,
      renderStart : 0,
      visibleEnd : this.props.initialRenderCount || 0,
      visibleStart : 0
    }, this.$IGVirtualList1 = new exception({
      estimatedSize : this.props.estimatedItemSize
    }), this.$IGVirtualList6 = function(target) {
      var node = target.nextElementSibling;
      var element = me.$IGVirtualList7;
      return "horizontal" === me.props.direction ? node ? node.getBoundingClientRect().left - target.getBoundingClientRect().left : element && element.style ? element.getBoundingClientRect().right - parseFloat(element.style.paddingRight) - target.getBoundingClientRect().left : target.getBoundingClientRect().width : node ? node.getBoundingClientRect().top - target.getBoundingClientRect().top : element && element.style ? element.getBoundingClientRect().bottom - parseFloat(element.style.paddingBottom) -
      target.getBoundingClientRect().top : target.getBoundingClientRect().height;
    }, this.$IGVirtualList5 = function() {
      if (!me.props.skipChildMeasurement) {
        Object(p2.a)(function() {
          if (me.$IGVirtualList7) {
            var data = me.state;
            var x = data.renderStart;
            var max = data.visibleStart;
            var resultItems = me.$IGVirtualList7.children;
            /** @type {number} */
            var fudge = 0;
            /** @type {number} */
            var i = 0;
            for (;i < resultItems.length;i++) {
              var result = resultItems[i];
              var actual = me.$IGVirtualList6(result);
              var expected = me.$IGVirtualList1.getSize(x + i);
              if (expected !== actual) {
                me.$IGVirtualList1.setSize(x + i, actual);
                if (x + i <= max) {
                  fudge += actual - expected;
                }
              }
            }
            if (me.props.containerSize) {
              if (0 !== fudge) {
                Object(p2.b)(function() {
                  window.scrollTo(0, window.scrollY + fudge);
                });
              }
            }
          }
        });
      }
    }, this.$IGVirtualList2 = function() {
      me.$IGVirtualList3().then(function(er) {
        me.$IGVirtualList4(er);
        var throttledUpdate = me.props.onScroll;
        if (throttledUpdate) {
          var code = er.scrollStart;
          /** @type {number} */
          var numScreensFromEnd = (er.scrollSize - code) / er.viewportSize - 1;
          Object(p2.b)(function() {
            if (me.$IGVirtualList8) {
              throttledUpdate({
                numScreensFromEnd : numScreensFromEnd
              });
            }
          });
        }
      });
    }, this.$IGVirtualList4 = function(er) {
      if (me.props.containerSize || "fixed" !== Object(helper.c)()) {
        var option = me.$IGVirtualList9(er);
        me.setState(option);
      }
    }, this.$IGVirtualList3 = function() {
      return new Promise(function($sanitize, dataAndEvents) {
        Object(p2.a)(function() {
          var d = me.$IGVirtualList8;
          if (d) {
            var opts = me.props;
            var options = opts.containerSize;
            var direction = opts.direction;
            /** @type {number} */
            var t = 0;
            /** @type {number} */
            var _ref = 0;
            /** @type {number} */
            var contentSize = 0;
            if (options) {
              /** @type {(null|number)} */
              var o = "number" == typeof options ? options : null;
              if ("vertical" === direction) {
                t = d.scrollTop;
                _ref = o || d.offsetHeight;
                contentSize = d.scrollHeight;
              } else {
                t = d.scrollLeft;
                _ref = o || d.offsetWidth;
                contentSize = d.scrollWidth;
              }
            } else {
              /** @type {number} */
              t = Math.max(0, -d.getBoundingClientRect().top);
              /** @type {number} */
              _ref = window.innerHeight;
              contentSize = d.scrollHeight;
            }
            $sanitize({
              scrollStart : t,
              scrollSize : contentSize,
              viewportSize : _ref
            });
          }
        });
      });
    }, this.$IGVirtualList9 = function(value) {
      var s = value.scrollStart;
      var len = value.viewportSize;
      var props = me.props;
      var index = props.overscanCount;
      var i = props.itemCount;
      var e = s + len;
      var end = me.$IGVirtualList1.getIndex(s, i);
      var token = me.$IGVirtualList1.getIndex(e, i) + 1;
      return{
        visibleStart : end,
        visibleEnd : token,
        renderEnd : token + index,
        renderStart : Math.max(0, end - index)
      };
    }, value;
  }
  /**
   * @return {?}
   */
  function map() {
    var flat;
    var _ref;
    var $ = this;
    /** @type {number} */
    var l = arguments.length;
    /** @type {Array} */
    var args = Array(l);
    /** @type {number} */
    var i = 0;
    for (;i < l;i++) {
      args[i] = arguments[i];
    }
    return flat = (_ref = attrs.constructor).call.apply(_ref, [this].concat(args)), this.$DesktopStoryTray1 = function(opt_e, opt_obj2) {
      $.props.onLoadReel(tmpl()($.props.reels), opt_e, opt_obj2);
    }, this.$DesktopStoryTray2 = function(tests, c) {
      Object(_c.b)({
        event_name : "reel_tray_impression",
        containermodule : "reel_feed_timeline",
        source_of_action : "reel_feed_timeline",
        ig_userid : $.props.viewerId,
        tray_session_id : $.props.traySession,
        /** @type {Function} */
        media_author : tests,
        tray_position : c,
        has_my_reel : tmpl()($.props.hasOwnReel),
        new_reel_count : tmpl()($.props.newReelCount),
        viewed_reel_count : tmpl()($.props.seenReelCount)
      });
    }, this.$DesktopStoryTray3 = function(element) {
      var index = element.index;
      var length = element.isVisible;
      var res = tmpl()($.props.reels).get(index);
      var data = res.latestReelMedia;
      return dom.createElement("div", {
        style : {
          height : step
        },
        key : index
      }, dom.createElement(nodeName, {
        isVisible : length,
        lastUpdated : tmpl()(data),
        onClick : $.$DesktopStoryTray1,
        onScrollEnter : $.$DesktopStoryTray2,
        reel : res,
        trayPosition : index
      }));
    }, this.$DesktopStoryTray4 = function(params) {
      var n = params.index;
      params.isVisible;
      return dom.createElement("div", {
        style : {
          height : step
        },
        key : n
      }, dom.createElement(div, null));
    }, flat;
  }
  /**
   * @return {undefined}
   */
  function scope() {
    newValue.apply(this, arguments);
  }
  /**
   * @return {?}
   */
  function state() {
    var value;
    var _ref2;
    var _this = this;
    /** @type {number} */
    var l = arguments.length;
    /** @type {Array} */
    var args = Array(l);
    /** @type {number} */
    var i = 0;
    for (;i < l;i++) {
      args[i] = arguments[i];
    }
    return value = (_ref2 = token.constructor).call.apply(_ref2, [this].concat(args)), this.state = {
      leftFixedPosition : null
    }, this.$FeedSidebar1 = function() {
      /** @type {number} */
      var startHeight = _this.$FeedSidebar2() ? Fe : Ue;
      p2.a(function() {
        if (null != _this.$FeedSidebar3) {
          /** @type {null} */
          var fold = null;
          if ($src.canUseDOM) {
            if (window.pageYOffset >= i) {
              if (window.innerHeight > startHeight) {
                fold = _this.$FeedSidebar3.getBoundingClientRect().left;
              }
            }
          }
          p2.b(function() {
            if (null != _this.$FeedSidebar3) {
              _this.setState({
                leftFixedPosition : fold
              });
            }
          });
        }
      });
    }, this.$FeedSidebar4 = function(ast) {
      ast.preventDefault();
      var newMillis = tmpl()(_this.props.feedStoryTray);
      if (!newMillis.isEmpty()) {
        _this.props.onWatchAllStories(newMillis);
      }
    }, value;
  }
  /**
   * @return {?}
   */
  function F() {
    var value;
    var _ref2;
    var data = this;
    /** @type {number} */
    var l = arguments.length;
    /** @type {Array} */
    var args = Array(l);
    /** @type {number} */
    var i = 0;
    for (;i < l;i++) {
      args[i] = arguments[i];
    }
    return value = (_ref2 = basePrototype.constructor).call.apply(_ref2, [this].concat(args)), this.handleStoryCreationClick = function() {
      if (!data.$StoryCreationFileForm1) {
        /** @type {boolean} */
        data.$StoryCreationFileForm1 = true;
        data.props.onStartStoryCreation(data.props.entryPoint).then(function() {
          tmpl()(data.$StoryCreationFileForm2).selectFile();
          /** @type {boolean} */
          data.$StoryCreationFileForm1 = false;
        }).catch(function() {
          /** @type {boolean} */
          data.$StoryCreationFileForm1 = false;
        });
      }
    }, value;
  }
  /**
   * @param {?} value
   * @return {?}
   */
  function outerHTML(value) {
    var ctor = value.profilePictureUrl;
    var nuxIcon2 = {
      nuxTitle : nuxTitle,
      nuxAction : nuxAction,
      nuxIcon : dom.createElement("div", {
        className : "_8wxvg"
      }, dom.createElement(opts.a, {
        className : "_oo4i1",
        seen : seen,
        size : _allSizes
      }), ctor && dom.createElement(start.a, {
        isLink : false,
        profilePictureUrl : ctor,
        size : TITLE_HEIGHT
      })),
      nuxIcon2 : dom.createElement("div", {
        className : "coreSpriteSpinstaNux"
      })
    };
    return dom.createElement(o.a, group({
      nuxContent : nuxIcon2
    }, value));
  }
  /**
   * @return {?}
   */
  function easing() {
    return "StoryTrayItem_" + StoryTrayItem_++;
  }
  /**
   * @param {Function} tests
   * @return {undefined}
   */
  function f(tests) {
    var self = this;
    parent.constructor.call(this, tests);
    /**
     * @return {undefined}
     */
    this.$StoryTrayItem2 = function() {
      if (self.props.isZeroBannerEligible) {
        self.showZeroNuxOrPlay();
      } else {
        self.props.onClick(self.props.reel.id, self.state.elementId);
      }
    };
    /**
     * @return {undefined}
     */
    this.$StoryTrayItem1 = function() {
      self.props.onScrollEnter(self.props.reel.userId, self.props.trayPosition);
    };
    /**
     * @param {?} ast
     * @return {undefined}
     */
    this.$StoryTrayItem3 = function(ast) {
      self.setState({
        isZeroNuxOpen : false
      });
    };
    /**
     * @param {?} ast
     * @return {undefined}
     */
    this.$StoryTrayItem4 = function(ast) {
      var throttledUpdate = self.props.onUpdateZeroNUXPreference;
      if (throttledUpdate) {
        throttledUpdate();
      }
      self.setState({
        isZeroNuxOpen : false
      });
      self.props.onClick(self.props.reel.id, self.state.elementId);
    };
    /**
     * @return {undefined}
     */
    this.showZeroNuxOrPlay = function() {
      if (self.props.hasSeenZeroNUX) {
        self.props.onClick(self.props.reel.id, self.state.elementId);
      } else {
        self.setState({
          isZeroNuxOpen : true
        });
      }
    };
    this.state = {
      elementId : easing(),
      hasSeenZeroNux : false,
      isZeroNuxOpen : false
    };
  }
  /**
   * @param {Object} obj
   * @param {Array} attr
   * @return {?}
   */
  function has(obj, attr) {
    var querystring = {};
    var i;
    for (i in obj) {
      if (!(attr.indexOf(i) >= 0)) {
        if (Object.prototype.hasOwnProperty.call(obj, i)) {
          querystring[i] = obj[i];
        }
      }
    }
    return querystring;
  }
  /**
   * @return {?}
   */
  function g() {
    var flat;
    var _ref;
    var $OwnStoryTrayItem2 = this;
    /** @type {number} */
    var l = arguments.length;
    /** @type {Array} */
    var args = Array(l);
    /** @type {number} */
    var i = 0;
    for (;i < l;i++) {
      args[i] = arguments[i];
    }
    return flat = (_ref = mod.constructor).call.apply(_ref, [this].concat(args)), this.$OwnStoryTrayItem1 = function() {
      tmpl()($OwnStoryTrayItem2.$OwnStoryTrayItem2).handleStoryCreationClick();
    }, flat;
  }
  /**
   * @return {?}
   */
  function log() {
    var value;
    var _ref2;
    var $ = this;
    /** @type {number} */
    var l = arguments.length;
    /** @type {Array} */
    var args = Array(l);
    /** @type {number} */
    var i = 0;
    for (;i < l;i++) {
      args[i] = arguments[i];
    }
    return value = (_ref2 = o1.constructor).call.apply(_ref2, [this].concat(args)), this.$StoryTray1 = function(opt_e, opt_obj2) {
      $.props.onLoadReel(tmpl()($.props.reels), opt_e, opt_obj2);
    }, this.$StoryTray2 = function(tests, c) {
      Object(_c.b)({
        event_name : "reel_tray_impression",
        containermodule : "reel_feed_timeline",
        source_of_action : "reel_feed_timeline",
        ig_userid : $.props.viewerId,
        tray_session_id : $.props.traySession,
        /** @type {Function} */
        media_author : tests,
        tray_position : c,
        has_my_reel : tmpl()($.props.hasOwnReel),
        new_reel_count : tmpl()($.props.newReelCount),
        viewed_reel_count : tmpl()($.props.seenReelCount)
      });
    }, this.$StoryTray3 = function() {
      var deepDataAndEvents = tmpl()($.props.reels).filter(function(jsonObject) {
        return jsonObject.userId !== $.props.viewerId;
      });
      $.props.onLoadReel(deepDataAndEvents);
    }, this.$StoryTray4 = function(o) {
      var index = o.index;
      var camelKey = {
        isVisible : o.isVisible,
        isZeroBannerEligible : r.b,
        onClick : $.$StoryTray1,
        onScrollEnter : $.$StoryTray2,
        trayPosition : index,
        onUpdateZeroNUXPreference : $.props.onUpdateZeroNUXPreference,
        hasSeenZeroNUX : $.props.hasSeenZeroNUX
      };
      var requires = void 0;
      return requires = 0 === index ? dom.createElement(element, dataAttr({
        hasOwnReel : $.props.hasOwnReel,
        viewerId : $.props.viewerId
      }, camelKey)) : dom.createElement(types, dataAttr({
        reel : tmpl()($.props.reels).get(index - 1)
      }, camelKey)), dom.createElement("div", {
        key : index,
        className : "_2jziq"
      }, requires);
    }, this.$StoryTray5 = function(params) {
      var n = params.index;
      params.isVisible;
      return dom.createElement("div", {
        key : n,
        className : "_2jziq"
      }, dom.createElement(tr, null));
    }, value;
  }
  /**
   * @return {undefined}
   */
  function on() {
    fn.apply(this, arguments);
  }
  /**
   * @return {?}
   */
  function gl() {
    var value;
    var _ref2;
    var me = this;
    /** @type {number} */
    var l = arguments.length;
    /** @type {Array} */
    var args = Array(l);
    /** @type {number} */
    var i = 0;
    for (;i < l;i++) {
      args[i] = arguments[i];
    }
    return value = (_ref2 = superClass.constructor).call.apply(_ref2, [this].concat(args)), this.$VirtualFeed1 = timeout()(function(tokenized) {
      var index = tokenized.numScreensFromEnd;
      var props = me.props;
      var i = props.hasNextPage;
      var _value = props.isFetching;
      var length = props.onNextPage;
      if (i) {
        if (!_value) {
          if (index <= firingIndex) {
            Object(frame.logAction_DEPRECATED)("loadMoreScroll");
            length({
              priority : meta.a
            });
          } else {
            if (Object(obj.i)().query) {
              if (index <= firingLength) {
                Object(frame.logAction_DEPRECATED)("loadMoreScroll");
                length({
                  priority : meta.b
                });
              }
            }
          }
        }
      }
    }, 250), this.$VirtualFeed2 = function(o) {
      var index = o.index;
      var isVisible = o.isVisible;
      var props = me.props;
      var viewItems = props.items;
      var length = props.itemClassName;
      var item = viewItems[index];
      switch(item.type) {
        case v.d:
        ;
        case v.k:
        ;
        case v.g:
          return dom.createElement(el.a, {
            analyticsContext : _feed,
            className : length,
            id : item.postId,
            isVisible : isVisible,
            key : index,
            showFollowOnFeed : item.fromSuggestedUser,
            variant : actions.a.feed
          });
        case v.i:
          return dom.createElement(objStr, {
            className : length,
            key : index,
            userIds : item.userIds,
            variant : me.props.variant
          });
        default:
          return Object(source.a)("unexpected feed item type: " + item.type), null;
      }
    }, value;
  }
  /**
   * @param {Object} obj
   * @param {?} key
   * @param {Object} value
   * @return {?}
   */
  function iterator(obj, key, value) {
    return key in obj ? Object.defineProperty(obj, key, {
      value : value,
      enumerable : true,
      configurable : true,
      writable : true
    }) : obj[key] = value, obj;
  }
  /**
   * @return {?}
   */
  function result() {
    var value;
    var _ref2;
    var $ = this;
    /** @type {number} */
    var l = arguments.length;
    /** @type {Array} */
    var args = Array(l);
    /** @type {number} */
    var i = 0;
    for (;i < l;i++) {
      args[i] = arguments[i];
    }
    return value = (_ref2 = response.constructor).call.apply(_ref2, [this].concat(args)), this.$MobileHeader1 = function(ast) {
      tmpl()($.$MobileHeader2).handleStoryCreationClick();
    }, this.$MobileHeader3 = function() {
      $.props.history.push("/explore/people/");
    }, this.$MobileHeader4 = function(ast) {
      window.scrollTo(0, 0);
      ast.preventDefault();
    }, value;
  }
  /**
   * @return {?}
   */
  function request() {
    var value;
    var _ref2;
    var point = this;
    /** @type {number} */
    var l = arguments.length;
    /** @type {Array} */
    var args = Array(l);
    /** @type {number} */
    var i = 0;
    for (;i < l;i++) {
      args[i] = arguments[i];
    }
    return value = (_ref2 = p.constructor).call.apply(_ref2, [this].concat(args)), this.state = {
      visibleItems : [true]
    }, this.$Feed1 = function(el) {
      point.setState({
        visibleItems : el
      });
    }, value;
  }
  /**
   * @param {Function} tests
   * @return {undefined}
   */
  function attributes(tests) {
    var self = this;
    proto.constructor.call(this, tests);
    /** @type {number} */
    this.$FeedPage1 = 0;
    /**
     * @param {(Function|string)} dataAndEvents
     * @return {?}
     */
    this.$FeedPage4 = function(dataAndEvents) {
      return dataAndEvents ? that.a.VARIANTS.none : Object(item.D)() ? that.a.VARIANTS.slim : that.a.VARIANTS.flexible;
    };
    /**
     * @return {undefined}
     */
    this.$FeedPage5 = function() {
      self.setState({
        showProfilePicAdder : false
      });
    };
    /**
     * @return {undefined}
     */
    this.$FeedPage6 = function() {
      self.$FeedPage2();
      document.location.reload();
    };
    /**
     * @return {undefined}
     */
    this.$FeedPage7 = function() {
      self.setState({
        showAppInstallModal : false
      });
    };
    /**
     * @param {?} keepData
     * @return {undefined}
     */
    this.$FeedPage8 = function(keepData) {
      /** @type {number} */
      var deepDataAndEvents = keepData - self.props.maxPostsToDisplay;
      if (deepDataAndEvents > 0) {
        self.props.onLoadNextPage(deepDataAndEvents);
      }
    };
    /**
     * @return {undefined}
     */
    this.$FeedPage9 = function() {
      self.props.history.goBack();
    };
    /**
     * @return {?}
     */
    this.$FeedPage10 = function() {
      return!!self.props.items.length && (Object(item.z)() && (self.props.viewportWidth >= res.a["feed-sidebar-threshold-min"].value && Object(obj.n)()));
    };
    /**
     * @param {?} opt_attributes
     * @return {undefined}
     */
    this.$FeedPage14 = function(opt_attributes) {
      self.props.onLoadNextPage(deepDataAndEvents, opt_attributes);
    };
    /** @type {boolean} */
    var showProfilePicAdder = !this.props.viewer.hasProfilePic;
    this.state = {
      showAppInstallModal : this.props.showAppInstallModal,
      showProfilePicAdder : showProfilePicAdder,
      showCreationUpsell : false
    };
  }
  Object.defineProperty(def, "__esModule", {
    value : true
  });
  var tmp;
  var derived_proto;
  var cssKeys = $(127);
  var dom = $(0);
  var elem = $(234);
  var input = $(521);
  var image = dom.createElement("img", {
    height : "76px",
    width : "76px",
    src : "/static/images/ico/xxhdpi_launcher.png/b2e3f507353f.png"
  });
  derived_proto = (tmp = dom.PureComponent) && tmp.prototype;
  Object.assign(_this, tmp);
  /** @type {function (): undefined} */
  (_this.prototype = Object.create(derived_proto)).constructor = _this;
  _this.__superConstructor__ = tmp;
  /**
   * @return {?}
   */
  _this.prototype.render = function() {
    var requires = dom.createElement(input.a, {
      action : "Adicionar",
      nuxIcon : image,
      nuxIcon2 : null,
      paragraph : "Adicione o Instagram \u00c3  sua tela inicial para acess\u00c3\u00a1-lo de forma f\u00c3\u00a1cil e r\u00c3\u00a1pida.",
      title : "Adicionar o Instagram \u00c3  sua tela inicial?",
      onClose : this.props.onClose,
      onAction : this.props.onAction
    });
    return dom.createElement(elem.a, {
      onClose : this.props.onClose
    }, requires);
  };
  var properties;
  var str;
  /** @type {function (): undefined} */
  var attribute = _this;
  var from = $(216);
  var $src = $(9);
  var frame = $(7);
  var obj = $(92);
  properties = dom.PureComponent;
  str = properties && properties.prototype;
  Object.assign(constructor, properties);
  /** @type {function (): ?} */
  (constructor.prototype = Object.create(str)).constructor = constructor;
  constructor.__superConstructor__ = properties;
  /**
   * @return {?}
   */
  constructor.prototype.$AddToHomeScreenContainer2 = function() {
    return Object(obj.a)() && !Object(from.b)(from.a.ADD_TO_HOMESCREEN_COOKIE);
  };
  /**
   * @return {undefined}
   */
  constructor.prototype.componentDidMount = function() {
    window.addEventListener("beforeinstallprompt", this.$AddToHomeScreenContainer1);
  };
  /**
   * @return {undefined}
   */
  constructor.prototype.componentWillUnmount = function() {
    window.removeEventListener("beforeinstallprompt", this.$AddToHomeScreenContainer1);
  };
  /**
   * @return {?}
   */
  constructor.prototype.render = function() {
    return $src.canUseDOM && (window.defferedA2HSPrompt && this.state.showModal) ? dom.createElement(attribute, {
      onClose : this.onClose,
      onAction : this.onAction
    }) : null;
  };
  var extend;
  var superPrototype;
  /** @type {function (): ?} */
  var name = constructor;
  var w = $(458);
  var s = $(953);
  var child = $(1046);
  var item = $(2);
  var module = $(238);
  var tests = $(334);
  var root = $(955);
  var p2 = $(93);
  var helper = $(239);
  var content = $(6);
  var tmpl = $.n(content);
  var b = $(8);
  var target = $(1070);
  var options = $(322);
  var body = $(296);
  var doc = $(934);
  var actual = $(84);
  $(1401);
  /** @type {number} */
  var DesktopStoryTrayItem_ = 0;
  extend = dom.PureComponent;
  superPrototype = extend && extend.prototype;
  Object.assign(Class, extend);
  /** @type {function (): ?} */
  (Class.prototype = Object.create(superPrototype)).constructor = Class;
  Class.__superConstructor__ = extend;
  /**
   * @return {undefined}
   */
  Class.prototype.componentDidMount = function() {
    if (this.props.isVisible) {
      this.$DesktopStoryTrayItem1();
    }
  };
  /**
   * @param {Element} me
   * @return {undefined}
   */
  Class.prototype.componentDidUpdate = function(me) {
    if (!me.isVisible) {
      if (this.props.isVisible) {
        this.$DesktopStoryTrayItem1();
      }
    }
  };
  /**
   * @param {?} data
   * @return {undefined}
   */
  Class.prototype.componentWillReceiveProps = function(data) {
    if (this.props.reel.id !== data.reel.id) {
      this.setState({
        elementId : makeArray()
      });
    }
  };
  /**
   * @return {?}
   */
  Class.prototype.render = function() {
    var p = this.props;
    var pos = p.isMuted;
    var pl = p.isViewer;
    var x = p.lastUpdated;
    var tn = p.profilePictureUrl;
    var username = p.username;
    var MSG_VISUAL_EDITOR = pl ? target.c : username;
    return dom.createElement("a", {
      className : "_j5rx4" + (pos ? " _qwqu1" : ""),
      href : "#",
      onClick : this.$DesktopStoryTrayItem2
    }, dom.createElement(doc.a, {
      clickTargetElementId : this.state.elementId,
      isClickable : false,
      isLink : false,
      profilePictureUrl : tn,
      size : 50,
      username : username
    }), dom.createElement("div", {
      className : "_di9ug"
    }, dom.createElement("div", {
      className : "_kb2hs"
    }, dom.createElement("span", {
      className : "_gh2cz"
    }, MSG_VISUAL_EDITOR)), dom.createElement("div", {
      className : "_s63gu"
    }, x && dom.createElement(body.a, {
      className : "_g59cx",
      value : x,
      isLong : true
    }))));
  };
  var nodeName = Object(b.connect)(function(env, data) {
    var a = Object(actual.a)(env, data.reel.userId);
    return{
      isMuted : tmpl()(data.reel.muted),
      isSeen : Object(options.j)(data.reel),
      isViewer : env.users.viewerId === data.reel.id,
      profilePictureUrl : tmpl()(a.profilePictureUrl),
      username : tmpl()(a.username)
    };
  })(Class);
  var side = $(11);
  var appendChild = $.n(side);
  var opts = $(954);
  $(1405);
  /**
   * @param {Object} opt
   * @return {?}
   */
  var createElement = function(opt) {
    var cls = opt.className;
    var size = opt.size;
    return dom.createElement("div", {
      className : appendChild()("_fgzgd", cls)
    }, dom.createElement(opts.a, {
      className : "_q6ooz",
      seen : true,
      isLoading : false,
      size : size
    }), dom.createElement("div", {
      className : "_rmwa6",
      style : {
        height : size,
        width : size
      }
    }));
  };
  $(1403);
  /** @type {number} */
  var QUICK_HINTS_HEIGHT = 50;
  /**
   * @return {?}
   */
  var div = function() {
    return dom.createElement("div", {
      className : "_c68e4"
    }, dom.createElement(createElement, {
      className : "_8uu18",
      size : QUICK_HINTS_HEIGHT
    }), dom.createElement("div", {
      className : "_hqkdm"
    }, dom.createElement("div", {
      className : "_9l5fl"
    }), dom.createElement("div", {
      className : "_it0hk"
    })));
  };
  var h = $(126);
  var args = $(910);
  var tag = $(537);
  var elements = $.n(tag);
  /**
   * @param {Function} cacheKey
   * @param {?} s
   * @return {undefined}
   */
  e.prototype.setSize = function(cacheKey, s) {
    this.$SizeCache1.set(cacheKey, s);
  };
  /**
   * @param {number} n
   * @return {?}
   */
  e.prototype.getSize = function(n) {
    return this.$SizeCache1.has(n) ? this.$SizeCache1.get(n) : this.$SizeCache2;
  };
  /**
   * @param {number} cfiStr
   * @return {?}
   */
  e.prototype.getOffset = function(cfiStr) {
    /** @type {number} */
    var ret = 0;
    /** @type {number} */
    var node = 0;
    for (;node < cfiStr;node++) {
      ret += this.getSize(node);
    }
    return ret;
  };
  /**
   * @param {number} a
   * @param {?} b
   * @return {?}
   */
  e.prototype.getDistance = function(a, b) {
    /** @type {number} */
    var utftext = 0;
    /** @type {number} */
    var c = a;
    for (;c < b;c++) {
      utftext += this.getSize(c);
    }
    return utftext;
  };
  /**
   * @param {?} arg
   * @param {number} index
   * @return {?}
   */
  e.prototype.getIndex = function(arg, index) {
    /** @type {number} */
    var chunk = 0;
    /** @type {number} */
    var i = 0;
    for (;i < index;i++) {
      if ((chunk += this.getSize(i)) > arg) {
        return i;
      }
    }
    return index;
  };
  var obj2;
  var prototype;
  /** @type {function (Object): undefined} */
  var exception = e;
  var _Uize_copyInto = Object.assign || function(opt_attributes) {
    /** @type {number} */
    var i = 1;
    for (;i < arguments.length;i++) {
      var iterable = arguments[i];
      var key;
      for (key in iterable) {
        if (Object.prototype.hasOwnProperty.call(iterable, key)) {
          opt_attributes[key] = iterable[key];
        }
      }
    }
    return opt_attributes;
  };
  $(1407);
  obj2 = dom.PureComponent;
  prototype = obj2 && obj2.prototype;
  Object.assign(opt_attributes, obj2);
  /** @type {function (): ?} */
  (opt_attributes.prototype = Object.create(prototype)).constructor = opt_attributes;
  opt_attributes.__superConstructor__ = obj2;
  /**
   * @return {undefined}
   */
  opt_attributes.prototype.componentDidMount = function() {
    if ("number" != typeof this.props.initialRenderCount) {
      this.$IGVirtualList2();
    } else {
      (window.requestIdleCallback ? function(ex) {
        return window.requestIdleCallback(ex, {
          timeout : 2E3
        });
      } : function(funcToCall) {
        return window.setTimeout(funcToCall, 4);
      })(this.$IGVirtualList2);
    }
  };
  /**
   * @param {?} bucket
   * @return {undefined}
   */
  opt_attributes.prototype.componentWillReceiveProps = function(bucket) {
    if (this.props.itemCount !== bucket.itemCount) {
      this.$IGVirtualList3().then(this.$IGVirtualList4);
    }
  };
  /**
   * @return {undefined}
   */
  opt_attributes.prototype.componentDidUpdate = function() {
    this.$IGVirtualList5();
  };
  /**
   * @return {?}
   */
  opt_attributes.prototype.$IGVirtualList10 = function() {
    var me = this.props;
    var d = me.direction;
    var h = me.containerSize;
    var vertical = me.style;
    return h ? "vertical" === d ? _Uize_copyInto({
      height : h,
      overflowY : "auto",
      overflowX : "hidden"
    }, vertical) : _Uize_copyInto({
      width : h,
      overflowX : "auto",
      overflowY : "hidden"
    }, vertical) : vertical;
  };
  /**
   * @return {?}
   */
  opt_attributes.prototype.$IGVirtualList11 = function() {
    var props = this.props;
    var l = props.direction;
    var y = props.itemCount;
    var obj = this.state;
    var oldconfig = obj.renderStart;
    var x = obj.renderEnd;
    var padding = this.$IGVirtualList1.getDistance(0, oldconfig);
    var item = this.$IGVirtualList1.getDistance(x, y);
    return "vertical" === l ? {
      paddingTop : padding,
      paddingBottom : item
    } : {
      paddingLeft : padding,
      paddingRight : item
    };
  };
  /**
   * @return {?}
   */
  opt_attributes.prototype.$IGVirtualList12 = function() {
    var config = this.props;
    var format = config.renderer;
    var max = config.itemCount;
    var context = this.state;
    var len = context.renderStart;
    var time = context.renderEnd;
    var row = context.visibleStart;
    var j = context.visibleEnd;
    /** @type {Array} */
    var errors = [];
    /** @type {number} */
    var l = Math.min(time, max);
    var i = len;
    for (;i < l;i++) {
      /** @type {boolean} */
      var isVisible = row <= i && i < j;
      errors.push(format({
        isVisible : isVisible,
        index : i
      }));
    }
    return errors;
  };
  /**
   * @return {?}
   */
  opt_attributes.prototype.render = function() {
    var elem = this;
    var me = this.props;
    var cls = me.className;
    var modified = me.containerSize;
    var val = me.direction;
    return dom.createElement("div", {
      className : cls,
      /**
       * @param {Element} value
       * @return {?}
       */
      ref : function(value) {
        return elem.$IGVirtualList8 = value;
      },
      onScroll : this.$IGVirtualList2,
      style : this.$IGVirtualList10()
    }, !modified && dom.createElement(args.a, {
      event : "scroll",
      handler : this.$IGVirtualList2,
      target : window
    }), dom.createElement("div", {
      /**
       * @param {?} value
       * @return {?}
       */
      ref : function(value) {
        return elem.$IGVirtualList7 = value;
      },
      style : this.$IGVirtualList11(),
      className : ("vertical" === val ? "_havey" : "") + ("horizontal" === val ? " _sfpqp" : "")
    }, this.$IGVirtualList12()));
  };
  opt_attributes.defaultProps = {
    direction : "vertical",
    estimatedItemSize : 100,
    overscanCount : 5,
    skipChildMeasurement : false,
    style : {}
  };
  var data;
  var attrs;
  /** @type {function (): ?} */
  var tagToInsert = opt_attributes;
  var _c = $(386);
  $(1399);
  /** @type {number} */
  var step = 68;
  /** @type {number} */
  var val = 4 * step;
  data = dom.PureComponent;
  attrs = data && data.prototype;
  Object.assign(map, data);
  /** @type {function (): ?} */
  (map.prototype = Object.create(attrs)).constructor = map;
  map.__superConstructor__ = data;
  /**
   * @return {undefined}
   */
  map.prototype.componentDidUpdate = function() {
    if (this.props.reels) {
      if (this.props.onDisplayDone) {
        this.props.onDisplayDone();
      }
    }
  };
  /**
   * @return {?}
   */
  map.prototype.render = function() {
    var node = this.props.reels;
    if (null != node && node.isEmpty()) {
      return dom.createElement("div", {
        className : "_ldjog"
      }, "As hist\u00c3\u00b3rias das pessoas que voc\u00c3\u00aa segue aparecer\u00c3\u00a3o aqui.");
    }
    /** @type {number} */
    var itemCount = Math.ceil(val / step);
    return null == node ? dom.createElement(tagToInsert, {
      className : "_guwow",
      containerSize : val,
      estimatedItemSize : step,
      initialRenderCount : itemCount,
      itemCount : itemCount,
      overscanCount : 0,
      renderer : this.$DesktopStoryTray4
    }) : dom.createElement(tagToInsert, {
      className : "_guwow",
      containerSize : val,
      estimatedItemSize : step,
      initialRenderCount : itemCount,
      itemCount : node.count(),
      overscanCount : 4,
      renderer : this.$DesktopStoryTray3
    });
  };
  var marker = Object(h.a)(map);
  var dst = $(265);
  var type = Object(b.connect)(function(data) {
    var newState = Object(options.h)(data);
    return{
      hasOwnReel : Object(options.m)(data, tmpl()(data.users.viewerId)),
      loadingId : data.stories.trayLoadingId,
      newReelCount : data.stories.feedTray && data.stories.feedTray.count() - tmpl()(newState),
      reels : Object(options.d)(data),
      seenReelCount : newState,
      traySession : data.stories.traySession,
      viewerId : data.users.viewerId
    };
  }, function($sanitize) {
    return{
      /**
       * @param {?} deepDataAndEvents
       * @param {?} val
       * @param {?} f
       * @return {undefined}
       */
      onLoadReel : function(deepDataAndEvents, val, f) {
        $sanitize(Object(dst.l)(deepDataAndEvents, "reel_feed_timeline", val, f));
      }
    };
  })(marker);
  var that = $(446);
  $(1409);
  var newValue;
  var superObject;
  /**
   * @param {Object} options
   * @return {?}
   */
  var create = function(options) {
    return dom.createElement("div", {
      className : "_sfbui" + (options.placeholder ? " _13aga" : "")
    }, dom.createElement("span", {
      className : "_72oww"
    }, options.headerText), options.linkTo && (options.secondaryText && (options.placeholder && dom.createElement("span", {
      className : "_fptk9"
    }, options.secondaryText))), options.linkTo && (options.secondaryText && (!options.placeholder && dom.createElement("a", {
      className : "_fptk9",
      href : options.linkTo,
      onClick : options.onClick
    }, options.secondaryText))));
  };
  var size = $(55);
  var object = $(899);
  $(1411);
  superObject = (newValue = dom.PureComponent) && newValue.prototype;
  Object.assign(scope, newValue);
  /** @type {function (): undefined} */
  (scope.prototype = Object.create(superObject)).constructor = scope;
  scope.__superConstructor__ = newValue;
  /**
   * @return {?}
   */
  scope.prototype.render = function() {
    return dom.createElement("div", {
      className : "_ikq0n"
    }, dom.createElement(doc.a, {
      className : "_pbvu8",
      isLink : true,
      profilePictureUrl : tmpl()(this.props.profilePictureUrl),
      size : 50,
      username : tmpl()(this.props.username)
    }), dom.createElement("div", {
      className : "_on99m"
    }, dom.createElement("div", {
      className : "_8hjc5"
    }, dom.createElement("a", {
      className : "_f89xq",
      href : Object(size.h)(this.props.username)
    }, this.props.username), this.props.isVerified && dom.createElement(object.a, {
      className : "_og9e9"
    })), this.props.name && dom.createElement("div", {
      className : "_ewiye _irzdz"
    }, this.props.name)));
  };
  var x;
  var token;
  /** @type {function (): undefined} */
  var sibling = scope;
  var updateFunc = Object.assign || function(opt_attributes) {
    /** @type {number} */
    var i = 1;
    for (;i < arguments.length;i++) {
      var iterable = arguments[i];
      var key;
      for (key in iterable) {
        if (Object.prototype.hasOwnProperty.call(iterable, key)) {
          opt_attributes[key] = iterable[key];
        }
      }
    }
    return opt_attributes;
  };
  $(1397);
  /** @type {number} */
  var i = 52;
  /** @type {number} */
  var Fe = 750;
  /** @type {number} */
  var Ue = 550;
  x = dom.PureComponent;
  token = x && x.prototype;
  Object.assign(state, x);
  /** @type {function (): ?} */
  (state.prototype = Object.create(token)).constructor = state;
  state.__superConstructor__ = x;
  /**
   * @return {undefined}
   */
  state.prototype.componentDidMount = function() {
    this.$FeedSidebar1();
  };
  /**
   * @return {?}
   */
  state.prototype.$FeedSidebar2 = function() {
    return Object(obj.m)();
  };
  /**
   * @return {?}
   */
  state.prototype.render = function() {
    var first = this;
    var req = this.props;
    var user = req.currentUser;
    var p = req.feedStoryTray;
    var left_shift = this.state.leftFixedPosition;
    var mod = this.props.suggestedUsers ? this.props.suggestedUsers.slice(0, 3) : [];
    /** @type {({top: number}|{})} */
    var progressContexts = "fixed" === Object(helper.c)() ? {
      top : Object(helper.b)() - -3
    } : {};
    var $FeedSidebar2 = this.$FeedSidebar2();
    return dom.createElement(root.a, null, dom.createElement(args.a, {
      target : window,
      event : "scroll",
      handler : this.$FeedSidebar1,
      passive : true
    }), dom.createElement(args.a, {
      target : window,
      event : "resize",
      handler : this.$FeedSidebar1,
      passive : true
    }), dom.createElement("div", {
      className : "_b0xvl",
      /**
       * @param {Object} i
       * @return {?}
       */
      ref : function(i) {
        return first.$FeedSidebar3 = i;
      }
    }), dom.createElement("div", {
      className : "_11dqz" + (null != left_shift ? " _5w6wt" : ""),
      style : updateFunc({}, progressContexts, {
        left : left_shift
      })
    }, dom.createElement("div", {
      className : "_i4wsm"
    }, dom.createElement(sibling, {
      isVerified : false,
      name : tmpl()(user.fullName),
      profilePictureUrl : tmpl()(user.profilePictureUrl),
      username : tmpl()(user.username)
    })), dom.createElement("hr", {
      className : "_qwuqp"
    }), dom.createElement(create, {
      onClick : this.$FeedSidebar4,
      headerText : target.a,
      secondaryText : null != p && p.isEmpty() ? null : target.b,
      linkTo : "#",
      placeholder : null == p
    }), dom.createElement(type, null), dom.createElement("hr", {
      className : "_qwuqp"
    }), $FeedSidebar2 && dom.createElement(create, {
      headerText : "Encontrar pessoas",
      secondaryText : "Ver tudo",
      linkTo : "/explore/people"
    }), $FeedSidebar2 && mod.map(function(user) {
      return dom.createElement(sibling, {
        isVerified : tmpl()(user.isVerified),
        key : user.id,
        name : tmpl()(user.fullName),
        profilePictureUrl : tmpl()(user.profilePictureUrl),
        username : tmpl()(user.username)
      });
    }), $FeedSidebar2 && dom.createElement("hr", {
      className : "_qwuqp"
    }), dom.createElement(that.a, {
      variant : that.a.VARIANTS.sidebar
    })));
  };
  var base;
  var basePrototype;
  /** @type {function (): ?} */
  var propertyStr = state;
  var emptyJ = $(243);
  var entry = $(928);
  var HOP = Object(emptyJ.createSelector)(function(dataAndEvents) {
    return dataAndEvents.suggestedUsers.viewerHasSuggestedUsersInFeed;
  }, function($scope) {
    return $scope.users.users;
  }, entry.c, function(dataAndEvents, storage, mod) {
    return dataAndEvents ? mod.map(function(storageKey) {
      return tmpl()(storage.get(storageKey));
    }) : [];
  });
  var property = Object(b.connect)(function(walkers) {
    return{
      currentUser : Object(actual.d)(walkers),
      feedStoryTray : Object(options.d)(walkers),
      suggestedUsers : HOP(walkers),
      viewportWidth : walkers.displayProperties.viewportWidth
    };
  }, function($sanitize) {
    return{
      /**
       * @param {?} nowMillis
       * @return {undefined}
       */
      onWatchAllStories : function(nowMillis) {
        $sanitize(Object(dst.l)(nowMillis, "reel_feed_timeline"));
      }
    };
  })(propertyStr);
  var $window = $(508);
  var v = $(65);
  var self = $(66);
  var row = $(536);
  var props = $(1047);
  var params = $(1129);
  var main = $(253);
  var opt = $(372);
  var el = $(956);
  var actions = $(893);
  var focus = $(1205);
  var post = $(59);
  var update = $(958);
  var parsleyItem = {
    sharePhoto : "#share-photo",
    connectFB : "#connect-fb"
  };
  var node = $(547);
  var d = $(1208);
  var $spy = $(44);
  var templateNode = $(456);
  var foo = $(252);
  var bookmark = $(376);
  var region = $(544);
  base = dom.Component;
  basePrototype = base && base.prototype;
  Object.assign(F, base);
  /** @type {function (): ?} */
  (F.prototype = Object.create(basePrototype)).constructor = F;
  F.__superConstructor__ = base;
  /**
   * @return {?}
   */
  F.prototype.render = function() {
    var first = this;
    return dom.createElement(bookmark.a, {
      acceptMimeTypes : ["image/jpeg"],
      onFileChange : this.props.onImageSelect,
      /**
       * @param {?} i
       * @return {?}
       */
      ref : function(i) {
        return first.$StoryCreationFileForm2 = i;
      }
    });
  };
  var th = Object(b.connect)(null, function(fn) {
    return{
      /**
       * @param {(Array|number)} newlines
       * @return {undefined}
       */
      onImageSelect : function(newlines) {
        if (newlines.length) {
          fn(Object(region.v)(newlines[0]));
        }
      },
      /**
       * @param {?} sqlt
       * @return {?}
       */
      onStartStoryCreation : function(sqlt) {
        return fn(Object(region.u)(sqlt));
      }
    };
  }, null, {
    withRef : true
  })(F);
  var html = $(3);
  var isFunction = $.n(html);
  var start = $(323);
  var o = $(520);
  var group = Object.assign || function(opt_attributes) {
    /** @type {number} */
    var i = 1;
    for (;i < arguments.length;i++) {
      var iterable = arguments[i];
      var key;
      for (key in iterable) {
        if (Object.prototype.hasOwnProperty.call(iterable, key)) {
          opt_attributes[key] = iterable[key];
        }
      }
    }
    return opt_attributes;
  };
  $(21);
  $(1419);
  var value;
  var parent;
  /** @type {number} */
  var TITLE_HEIGHT = 66;
  /** @type {boolean} */
  var seen = false;
  /** @type {number} */
  var _allSizes = 64;
  /** @type {string} */
  var nuxAction = "Visualizar a hist\u00c3\u00b3ria";
  /** @type {string} */
  var nuxTitle = "A visualiza\u00c3\u00a7\u00c3\u00a3o de hist\u00c3\u00b3rias consome dados";
  var r = $(56);
  $(1417);
  /** @type {number} */
  var StoryTrayItem_ = 0;
  value = dom.PureComponent;
  parent = value && value.prototype;
  Object.assign(f, value);
  /** @type {function (Function): undefined} */
  (f.prototype = Object.create(parent)).constructor = f;
  f.__superConstructor__ = value;
  /**
   * @return {undefined}
   */
  f.prototype.componentDidMount = function() {
    if (this.props.isVisible) {
      this.$StoryTrayItem1();
    }
  };
  /**
   * @param {Element} me
   * @return {undefined}
   */
  f.prototype.componentDidUpdate = function(me) {
    if (!me.isVisible) {
      if (this.props.isVisible) {
        this.$StoryTrayItem1();
      }
    }
  };
  /**
   * @param {?} data
   * @return {undefined}
   */
  f.prototype.componentWillReceiveProps = function(data) {
    if (this.props.reel.id !== data.reel.id) {
      this.setState({
        elementId : easing()
      });
    }
  };
  /**
   * @return {?}
   */
  f.prototype.render = function() {
    var player = this.props;
    var pos = player.isMuted;
    var group = player.isSeen;
    var x = player.isViewer;
    var ship = player.profilePictureUrl;
    var name = player.username;
    var MSG_TEX_EDITOR = x ? "Sua hist\u00c3\u00b3ria" : name;
    /** @type {null} */
    var clone = null;
    return this.props.isZeroBannerEligible && (this.state.isZeroNuxOpen && (clone = dom.createElement(outerHTML, {
      mediaKeyword : r.a.story,
      onClose : this.$StoryTrayItem3,
      onAction : this.$StoryTrayItem4,
      profilePictureUrl : ship
    }), Object(frame.logAction_DEPRECATED)("zero_nux_impression", {
      media : r.a.story
    }))), dom.createElement("a", {
      className : "_tbozi" + (pos ? " _nux9v" : ""),
      onClick : this.$StoryTrayItem2
    }, dom.createElement(doc.a, {
      className : "_aqxh3",
      clickTargetElementId : this.state.elementId,
      isClickable : false,
      isLink : false,
      profilePictureUrl : ship,
      size : 56,
      username : this.props.username
    }), dom.createElement("div", {
      className : "_ocij3" + (group ? " _1qy4j" : "")
    }, MSG_TEX_EDITOR), clone);
  };
  var ctor;
  var mod;
  var types = Object(b.connect)(function($scope, data) {
    var socket = Object(actual.a)($scope, data.reel.userId);
    return{
      isLoading : $scope.stories.trayLoadingId === data.reel.id,
      isMuted : tmpl()(data.reel.muted),
      isSeen : Object(options.j)(data.reel),
      isViewer : $scope.users.viewerId === data.reel.id,
      profilePictureUrl : tmpl()(socket.profilePictureUrl),
      username : tmpl()(socket.username)
    };
  })(f);
  $(21);
  $(1415);
  ctor = dom.Component;
  mod = ctor && ctor.prototype;
  Object.assign(g, ctor);
  /** @type {function (): ?} */
  (g.prototype = Object.create(mod)).constructor = g;
  g.__superConstructor__ = ctor;
  /**
   * @return {?}
   */
  g.prototype.render = function() {
    var self = this;
    var a = this.props;
    var al = a.hasOwnReel;
    var il = a.profilePictureUrl;
    var button = has(a, ["hasOwnReel", "profilePictureUrl"]);
    return al ? (null != button.reel || isFunction()(0), dom.createElement(types, button)) : dom.createElement("button", {
      className : "_4f40d",
      onClick : this.$OwnStoryTrayItem1
    }, dom.createElement(start.a, {
      className : "_dev2d",
      isLink : false,
      size : 56,
      profilePictureUrl : il
    }), dom.createElement("div", {
      className : "_aylf4"
    }, "Sua hist\u00c3\u00b3ria"), dom.createElement("div", {
      className : "coreSpriteStoryCreationAlt _94pyl"
    }), dom.createElement(th, {
      /**
       * @param {?} item
       * @return {?}
       */
      ref : function(item) {
        return self.$OwnStoryTrayItem2 = item && item.getWrappedInstance();
      },
      entryPoint : "your_story_placeholder"
    }));
  };
  var element = Object(b.connect)(function(deepDataAndEvents, dataAndEvents) {
    return{
      profilePictureUrl : Object(actual.a)(deepDataAndEvents, dataAndEvents.viewerId).profilePictureUrl,
      reel : Object(options.g)(deepDataAndEvents, dataAndEvents.viewerId)
    };
  })(g);
  $(1421);
  var test;
  var o1;
  /** @type {number} */
  var GOOD_LUCK_HEIGHT = 56;
  /**
   * @return {?}
   */
  var tr = function() {
    return dom.createElement(createElement, {
      className : "_nquah",
      size : GOOD_LUCK_HEIGHT
    });
  };
  var $this = $(119);
  var res = $.n($this);
  var t = $(522);
  var dataAttr = Object.assign || function(opt_attributes) {
    /** @type {number} */
    var i = 1;
    for (;i < arguments.length;i++) {
      var iterable = arguments[i];
      var key;
      for (key in iterable) {
        if (Object.prototype.hasOwnProperty.call(iterable, key)) {
          opt_attributes[key] = iterable[key];
        }
      }
    }
    return opt_attributes;
  };
  $(1413);
  test = dom.PureComponent;
  o1 = test && test.prototype;
  Object.assign(log, test);
  /** @type {function (): ?} */
  (log.prototype = Object.create(o1)).constructor = log;
  log.__superConstructor__ = test;
  /**
   * @return {undefined}
   */
  log.prototype.componentDidUpdate = function() {
    if (this.props.reels) {
      if (this.props.onDisplayDone) {
        this.props.onDisplayDone();
      }
    }
  };
  /**
   * @return {?}
   */
  log.prototype.render = function() {
    var self = this.props;
    var a = self.reels;
    var value = self.viewportWidth;
    var node = target.b;
    if (r.b) {
      node = dom.createElement(t.b, null);
      Object(frame.logAction_DEPRECATED)("zero_data_banner_impression", {
        type : "story_tray_banner"
      });
    }
    /** @type {boolean} */
    var min = value >= res.a["medium-screen-min"].value;
    /** @type {number} */
    var itemCount = Math.max(10, Math.ceil(value / 80));
    return dom.createElement("section", {
      className : "_hr9tt" + (min ? " _asnzw" : "") + (null == a ? " _jjvdm" : "")
    }, dom.createElement("h2", {
      className : "_bek4i"
    }, dom.createElement("span", {
      className : "_fdrjr"
    }, target.a), null == a && dom.createElement("span", {
      className : "_99hoy"
    }, node), null != a && dom.createElement("a", {
      className : "_99hoy",
      tabIndex : 0,
      onClick : this.$StoryTray3
    }, node)), dom.createElement("div", {
      className : "_c2hhm"
    }, null == a ? dom.createElement(tagToInsert, {
      className : "_juv1t",
      containerSize : "auto",
      direction : "horizontal",
      estimatedItemSize : 80,
      initialRenderCount : itemCount,
      itemCount : itemCount,
      overscanCount : 0,
      renderer : this.$StoryTray5,
      style : {
        overflowX : "hidden"
      }
    }) : dom.createElement(tagToInsert, {
      className : "_juv1t",
      containerSize : "auto",
      direction : "horizontal",
      estimatedItemSize : 80,
      initialRenderCount : itemCount,
      itemCount : a.count() + 1,
      overscanCount : 4,
      renderer : this.$StoryTray4
    })));
  };
  var fn;
  var eventEmitter;
  var Log = Object(h.a)(log);
  var swatch = $(538);
  var fieldsString = Object(b.connect)(function(opts) {
    var related = Object(options.h)(opts);
    return{
      hasOwnReel : Object(options.m)(opts, tmpl()(opts.users.viewerId)),
      hasSeenZeroNUX : !!opts.zero.nuxPreference.story,
      loadingId : opts.stories.trayLoadingId,
      newReelCount : opts.stories.feedTray && opts.stories.feedTray.count() - tmpl()(related),
      reels : Object(options.d)(opts),
      seenReelCount : related,
      traySession : opts.stories.traySession,
      viewerId : opts.users.viewerId,
      viewportWidth : opts.displayProperties.viewportWidth
    };
  }, function($sanitize) {
    return{
      /**
       * @param {?} deepDataAndEvents
       * @param {?} val
       * @param {?} f
       * @return {undefined}
       */
      onLoadReel : function(deepDataAndEvents, val, f) {
        $sanitize(Object(dst.l)(deepDataAndEvents, "reel_feed_timeline", val, f));
      },
      /**
       * @return {undefined}
       */
      onUpdateZeroNUXPreference : function() {
        $sanitize(Object(swatch.b)(r.a.story));
      }
    };
  })(Log);
  var c = $(1209);
  $(1423);
  var is = child.a.VARIANTS;
  eventEmitter = (fn = dom.Component) && fn.prototype;
  Object.assign(on, fn);
  /** @type {function (): undefined} */
  (on.prototype = Object.create(eventEmitter)).constructor = on;
  on.__superConstructor__ = fn;
  /**
   * @return {?}
   */
  on.prototype.render = function() {
    var opts = this.props;
    var cls = opts.className;
    var timeout = opts.users;
    var i = opts.variant;
    return dom.createElement(c.a, {
      className : appendChild()(cls, (i === is.narrow ? "_cxfdi" : "") + (i === is.wide ? " _m5u86" : "") + (Object(item.D)() ? " _1v9ex" : "") + (Object(item.D)() ? "" : " _r4x45")),
      title : "Sugest\u00c3\u00b5es para voc\u00c3\u00aa",
      seeAllHref : "/explore/people/",
      isSmallScreen : i === is.narrow,
      chainingSuggestions : timeout,
      analyticsContext : _feed,
      impressionModule : "web_feed_hscroll_aysf"
    });
  };
  var config;
  var superClass;
  /** @type {function (): undefined} */
  var prefix = on;
  var objStr = Object(b.connect)(function(deepDataAndEvents, self) {
    return{
      users : self.userIds.map(function(opt_obj2) {
        return Object(actual.a)(deepDataAndEvents, opt_obj2);
      }).toArray()
    };
  })(prefix);
  var cNode = $(1117);
  var l = $(49);
  var source = $(14);
  var meta = $(401);
  var li = $(117);
  var next = $(304);
  var timeout = $.n(next);
  $(1425);
  /** @type {number} */
  var firingIndex = 1;
  /** @type {number} */
  var firingLength = 10;
  config = dom.PureComponent;
  superClass = config && config.prototype;
  Object.assign(gl, config);
  /** @type {function (): ?} */
  (gl.prototype = Object.create(superClass)).constructor = gl;
  gl.__superConstructor__ = config;
  /**
   * @return {?}
   */
  gl.prototype.render = function() {
    var props = this.props;
    var i = props.hasNextPage;
    var length = props.visibleCount;
    return dom.createElement("div", null, dom.createElement(tagToInsert, {
      estimatedItemSize : 800,
      initialRenderCount : 1,
      itemCount : length,
      onScroll : this.$VirtualFeed1,
      overscanCount : 3,
      renderer : this.$VirtualFeed2
    }), i && dom.createElement("div", {
      className : "_p2crk"
    }, dom.createElement(li.a, {
      size : "medium"
    })));
  };
  /** @type {function (): ?} */
  var a = gl;
  $(1427);
  var context;
  var response;
  var collection;
  var p;
  var id;
  var proto;
  /**
   * @param {Element} n
   * @return {?}
   */
  var n = function(n) {
    return dom.createElement("div", {
      className : appendChild()(n.className, "_t1206")
    }, dom.createElement("h2", {
      className : "_tsqk0"
    }, "Bem-vindo ao Instagram!"), dom.createElement("p", {
      className : "_6w2wl"
    }, "Siga contas para ver fotos e v\u00c3\u00addeos no seu feed."));
  };
  var line = $(550);
  var br = $(461);
  $(21);
  $(1395);
  /** @type {string} */
  var _feed = "feed";
  /** @type {number} */
  var deepDataAndEvents = 12;
  context = dom.Component;
  response = context && context.prototype;
  Object.assign(result, context);
  /** @type {function (): ?} */
  (result.prototype = Object.create(response)).constructor = result;
  result.__superConstructor__ = context;
  /**
   * @return {?}
   */
  result.prototype.render = function() {
    var self = this;
    var buttons = dom.createElement("button", {
      className : "_hw7lt",
      onClick : this.$MobileHeader3
    }, dom.createElement("div", {
      className : "coreSpriteMobileNavDiscoverPeople"
    }));
    var $button = dom.createElement("button", {
      className : "_hw7lt",
      onClick : this.$MobileHeader1
    }, dom.createElement("div", {
      className : "coreSpriteStoryCreation"
    }));
    return dom.createElement("div", null, dom.createElement($window.a, {
      leftAction : Object(obj.n)() ? $button : void 0,
      rightAction : buttons,
      title : dom.createElement("a", {
        className : "_k46tg coreSpriteMobileNavTypeLogo",
        href : "/",
        onClick : this.$MobileHeader4
      })
    }), dom.createElement(th, {
      /**
       * @param {?} item
       * @return {?}
       */
      ref : function(item) {
        return self.$MobileHeader2 = item && item.getWrappedInstance();
      },
      entryPoint : "quick_cam_button"
    }));
  };
  collection = dom.Component;
  p = collection && collection.prototype;
  Object.assign(request, collection);
  /** @type {function (): ?} */
  (request.prototype = Object.create(p)).constructor = request;
  request.__superConstructor__ = collection;
  /**
   * @param {Event} self
   * @param {string} key
   * @return {?}
   */
  request.prototype.$Feed2 = function(self, key) {
    /** @type {boolean} */
    var isVisible = !!this.state.visibleItems[key];
    switch(self.type) {
      case v.d:
      ;
      case v.k:
      ;
      case v.g:
        return dom.createElement(el.a, {
          analyticsContext : _feed,
          className : "_s5vjd",
          id : self.postId,
          isVisible : isVisible,
          key : self.postId,
          showFollowOnFeed : self.fromSuggestedUser,
          variant : actions.a.feed
        });
      case v.i:
        return dom.createElement(objStr, {
          className : "_s5vjd",
          userIds : self.userIds,
          variant : this.props.variant,
          key : key
        });
      default:
        return Object(source.a)("unexpected feed item type: " + self.type), null;
    }
  };
  /**
   * @return {?}
   */
  request.prototype.render = function() {
    return dom.createElement(props.a, {
      visibleItems : this.state.visibleItems,
      onVisibleItemsChange : this.$Feed1
    }, this.props.posts.map(this.$Feed2, this));
  };
  id = dom.Component;
  proto = id && id.prototype;
  Object.assign(attributes, id);
  /** @type {function (Function): undefined} */
  (attributes.prototype = Object.create(proto)).constructor = attributes;
  attributes.__superConstructor__ = id;
  /**
   * @return {undefined}
   */
  attributes.prototype.componentWillMount = function() {
    if (this.props.willScrollToTop) {
      this.$FeedPage2();
    }
    if (this.props.justPosted) {
      this.$FeedPage3();
    }
  };
  /**
   * @param {Object} $window
   * @return {undefined}
   */
  attributes.prototype.componentWillReceiveProps = function($window) {
    if ($window.willScrollToTop) {
      this.$FeedPage2();
    }
    if (this.props.justPosted) {
      this.$FeedPage3();
    }
    if ($window.history.location.hash === parsleyItem.sharePhoto) {
      this.props.history.replace(this.props.history.location.pathname);
      this.props.onStartCreation("feed_upsell", module.a.POST);
    } else {
      if ($window.history.location.hash === parsleyItem.connectFB) {
        this.props.history.replace(this.props.history.location.pathname);
        Object(tests.f)(this.props.history.location.pathname, "feedQP");
      }
    }
    if (this.props.items.length !== $window.items.length) {
      this.$FeedPage1 = Object(l.a)();
    }
  };
  /**
   * @param {?} feed
   * @return {undefined}
   */
  attributes.prototype.componentDidUpdate = function(feed) {
    if (feed.items.length !== this.props.items.length) {
      this.props.onNextPageRendered(Object(l.a)() - this.$FeedPage1);
      /** @type {number} */
      this.$FeedPage1 = 0;
    }
  };
  /**
   * @return {undefined}
   */
  attributes.prototype.$FeedPage3 = function() {
    this.props.onClearJustPosted();
  };
  /**
   * @return {undefined}
   */
  attributes.prototype.$FeedPage2 = function() {
    window.scrollTo(0, 0);
    this.props.onScrollToTop();
  };
  /**
   * @return {?}
   */
  attributes.prototype.$FeedPage11 = function() {
    return this.state.showProfilePicAdder && dom.createElement(focus.a, {
      analyticsContext : _feed,
      className : "_nx5in",
      onHideClick : this.$FeedPage5,
      profilePicUploadIsInFlight : this.props.profilePicUploadIsInFlight,
      profilePictureUrl : this.props.viewer.profilePictureUrl
    });
  };
  /**
   * @return {?}
   */
  attributes.prototype.$FeedPage12 = function() {
    return dom.createElement(w.a, {
      campaign : "webSignup",
      onClose : this.$FeedPage7
    });
  };
  /**
   * @return {?}
   */
  attributes.prototype.$FeedPage13 = function() {
    var key = iterator({}, update.a.fbconnect, this.props.canFBConnect);
    return dom.createElement(node.a, {
      className : "_2wxtj",
      surfaceId : node.a.SURFACES.PAGE_TOP,
      currentTrigger : d.a.instagram_feed_header,
      promotions : this.props.qp,
      filter : key
    });
  };
  /**
   * @return {?}
   */
  attributes.prototype.$FeedPage15 = function() {
    /** @type {Array} */
    var code = [];
    /** @type {boolean} */
    var callback2 = true;
    /** @type {boolean} */
    var o = false;
    var bulk = void 0;
    try {
      var _ref;
      var self = this.props.items[Symbol.iterator]();
      for (;!(callback2 = (_ref = self.next()).done);callback2 = true) {
        var comment = _ref.value;
        switch(comment.type) {
          case v.d:
          ;
          case v.k:
          ;
          case v.g:
            code.push(comment.postId);
        }
      }
    } catch (fn) {
      /** @type {boolean} */
      o = true;
      bulk = fn;
    } finally {
      try {
        if (!callback2) {
          if (self.return) {
            self.return();
          }
        }
      } finally {
        if (o) {
          throw bulk;
        }
      }
    }
    return dom.createElement(params.a, {
      postIds : code,
      viewKey : cssKeys.k
    });
  };
  /**
   * @return {?}
   */
  attributes.prototype.$FeedPage16 = function() {
    return dom.createElement(a, {
      hasNextPage : this.props.hasNextPage,
      isFetching : this.props.isFetching,
      itemClassName : "_s5vjd",
      items : this.props.items,
      onNextPage : this.$FeedPage14,
      visibleCount : Math.min(this.props.maxPostsToDisplay, this.props.items.length),
      variant : this.props.viewportWidth >= foo.b.narrow ? child.a.VARIANTS.wide : child.a.VARIANTS.narrow
    });
  };
  /**
   * @return {?}
   */
  attributes.prototype.$FeedPage17 = function() {
    return post.a.lookup("feed_perf").getBoolParam("use_virtual_feed", true) ? this.$FeedPage16() : dom.createElement(child.a, {
      className : "_14b0y",
      isFetching : this.props.isFetching,
      isOldestPostLoaded : this.props.isOldestPostVisible,
      maxPostsToDisplay : this.props.maxPostsToDisplay,
      onPostLoadTargetChange : this.$FeedPage8,
      pageSize : deepDataAndEvents,
      posts : this.props.items,
      /** @type {function (): ?} */
      postsGridRenderer : request,
      scrollLoadingEnabled : true,
      shouldBeScrolledTo : this.props.justPosted && !this.props.willScrollToTop,
      variant : this.props.viewportWidth >= foo.b.narrow ? child.a.VARIANTS.wide : child.a.VARIANTS.narrow,
      viewportWidth : this.props.viewportWidth
    });
  };
  /**
   * @return {?}
   */
  attributes.prototype.$FeedPage18 = function() {
    var footer = this.props.followsSomeone && dom.createElement(self.default, {
      className : "_7axot",
      variant : self.default.VARIANTS.solid,
      disabled : !this.props.followsSomeone,
      onClick : this.$FeedPage6
    }, "Come\u00c3\u00a7ar");
    return dom.createElement(cNode.a, {
      analyticsContext : main.a.emptyFeedPage,
      className : "_7g4gl",
      items : this.props.suggestedUsers,
      key : "userlist",
      maybeShowFbConnectUnit : true,
      subHeader : "Sugest\u00c3\u00b5es para voc\u00c3\u00aa",
      viewerId : this.props.viewer.id,
      footer : footer
    });
  };
  /**
   * @return {?}
   */
  attributes.prototype.$FeedPage19 = function() {
    return Object(item.D)() && Object(obj.n)() ? dom.createElement(fieldsString, {
      key : "storyTray"
    }) : null;
  };
  /**
   * @return {?}
   */
  attributes.prototype.render = function() {
    /** @type {boolean} */
    var deep = !this.props.items.length;
    var copy = this.props.suggestedUsers && this.props.suggestedUsers.length > 0;
    if (deep) {
      if (!copy) {
        Object(source.a)("Suggested users list should never be empty when feed is empty");
      }
    }
    var i = this.props.justPosted;
    var r20 = this.props.likedByShortcode ? dom.createElement(s.a, {
      display : row.a.modal,
      onClose : this.$FeedPage9,
      shortcode : this.props.likedByShortcode
    }) : null;
    return dom.createElement(templateNode.a, {
      androidAppLink : i ? void 0 : "/_n/mainfeed/",
      footerVariant : this.$FeedPage4(this.$FeedPage10()),
      iOSAppLink : i ? void 0 : "mainfeed",
      maxWidth : Object(item.D)() || !deep ? foo.b.narrow : foo.b.wide,
      mobileHeader : dom.createElement(result, {
        history : this.props.history
      }),
      pageIdentifier : deep ? main.a.emptyFeedPage : main.a.feedPage
    }, dom.createElement(opt.a, null), dom.createElement("section", {
      className : "_owark" + (this.$FeedPage10() ? " _gsusx" : "") + (Object(item.D)() ? " _62ky5" : "")
    }, !deep && this.$FeedPage19(), (this.props.isZeroRatingNewAndResDataBannerVisible || this.props.isZeroRatingSelectDataBannerVisible) && (Object(item.D)() && dom.createElement(br.b, null)), dom.createElement("div", {
      className : this.$FeedPage10() ? "_d4oao" : ""
    }, this.$FeedPage11() || this.$FeedPage13(), deep && (!post.a.lookup("feed_vp").getBoolParam("is_hidden", false) && dom.createElement(n, {
      className : "_ouv75"
    })), deep && (copy && this.$FeedPage18()), !deep && this.$FeedPage17(), this.$FeedPage15()), this.$FeedPage10() && dom.createElement(property, null)), this.state.showAppInstallModal && this.$FeedPage12(), dom.createElement(name, null), r20);
  };
  attributes.defaultProps = {
    isZeroRatingNewAndResDataBannerVisible : r.d,
    isZeroRatingSelectDataBannerVisible : r.e
  };
  var W = Object(line.a)(Object($spy.withRouter)(attributes));
  var num = $(109);
  var outer = $(549);
  var db = $(957);
  var cell = $(294);
  var m = $(333);
  def.default = Object(b.connect)(function(self, dataAndEvents) {
    var path = Object(actual.d)(self);
    var feed = self.feed;
    var entriesContinuation3 = feed.paginationInfo;
    var items = feed.items;
    var lastTime = feed.visibleCount;
    var a = self.navigation;
    var route = a.route;
    var al = a.pageIdentifier;
    var user = Object(db.a)(self, node.a.SURFACES.PAGE_TOP);
    return null != items && null != entriesContinuation3 || isFunction()(0), {
      canFBConnect : Object(entry.f)(self),
      followsSomeone : self.relationships.valueSeq().some(function(e) {
        return e.followedByViewer.state === m.c;
      }),
      hasNextPage : entriesContinuation3.hasNextPage,
      isFetching : self.feed.isLoading,
      isOldestPostVisible : !entriesContinuation3.hasNextPage && (null != lastTime && lastTime >= items.count()),
      items : items.toArray(),
      justPosted : self.feed.justPosted,
      maxPostsToDisplay : lastTime,
      profilePicUploadIsInFlight : self.users.profilePicUploadIsInFlight,
      qp : user,
      showAppInstallModal : !!dataAndEvents.showAppInstallModal,
      suggestedUsers : self.suggestedUsers.viewerHasSuggestedUsersInFeed ? (Object(actual.c)(self, Object(entry.c)(self)) || []).map(function(user) {
        return{
          media : Object(outer.b)(self, user.id),
          relationship : Object(cell.c)(self.relationships, user.id),
          user : user
        };
      }) : null,
      viewer : path,
      viewportWidth : self.displayProperties.viewportWidth,
      willScrollToTop : self.feed.willScrollToTop,
      /**
       * @param {number} timeTaken
       * @return {undefined}
       */
      onNextPageRendered : function(timeTaken) {
        Object(num.c)({
          component : "Feed",
          eventType : "nextPage",
          pageId : al,
          route : route,
          timeTaken : timeTaken
        });
      }
    };
  }, function($sanitize) {
    return{
      /**
       * @return {undefined}
       */
      onClearJustPosted : function() {
        $sanitize(Object(cssKeys.m)());
      },
      /**
       * @param {number} deepDataAndEvents
       * @param {?} opt_attributes
       * @return {undefined}
       */
      onLoadNextPage : function(deepDataAndEvents, opt_attributes) {
        $sanitize(Object(cssKeys.o)(deepDataAndEvents, opt_attributes));
      },
      /**
       * @return {undefined}
       */
      onScrollToTop : function() {
        $sanitize(Object(cssKeys.q)());
      }
    };
  })(W);
}]));
