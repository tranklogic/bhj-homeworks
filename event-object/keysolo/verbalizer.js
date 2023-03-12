(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.verbalizer = factory());
})(this, (function () { 'use strict';

  function _typeof(obj) {
    "@babel/helpers - typeof";

    return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
      return typeof obj;
    } : function (obj) {
      return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    }, _typeof(obj);
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _toPrimitive(input, hint) {
    if (_typeof(input) !== "object" || input === null) return input;
    var prim = input[Symbol.toPrimitive];
    if (prim !== undefined) {
      var res = prim.call(input, hint || "default");
      if (_typeof(res) !== "object") return res;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return (hint === "string" ? String : Number)(input);
  }

  function _toPropertyKey(arg) {
    var key = _toPrimitive(arg, "string");
    return _typeof(key) === "symbol" ? key : String(key);
  }

  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor);
    }
  }
  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    Object.defineProperty(Constructor, "prototype", {
      writable: false
    });
    return Constructor;
  }

  function _assertThisInitialized(self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self;
  }

  function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) {
      o.__proto__ = p;
      return o;
    };
    return _setPrototypeOf(o, p);
  }

  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function");
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        writable: true,
        configurable: true
      }
    });
    Object.defineProperty(subClass, "prototype", {
      writable: false
    });
    if (superClass) _setPrototypeOf(subClass, superClass);
  }

  function _possibleConstructorReturn(self, call) {
    if (call && (_typeof(call) === "object" || typeof call === "function")) {
      return call;
    } else if (call !== void 0) {
      throw new TypeError("Derived constructors may only return object or undefined");
    }
    return _assertThisInitialized(self);
  }

  function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) {
      return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _getPrototypeOf(o);
  }

  function _defineProperty(obj, key, value) {
    key = _toPropertyKey(key);
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }
    return obj;
  }

  function _arrayWithHoles(arr) {
    if (Array.isArray(arr)) return arr;
  }

  function _iterableToArray(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
  }

  function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
    return arr2;
  }

  function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
  }

  function _nonIterableRest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }

  function _toArray(arr) {
    return _arrayWithHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableRest();
  }

  function ownKeys$6(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
  function _objectSpread$6(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys$6(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys$6(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
  var consoleLogger = {
    type: 'logger',
    log: function log(args) {
      this.output('log', args);
    },
    warn: function warn(args) {
      this.output('warn', args);
    },
    error: function error(args) {
      this.output('error', args);
    },
    output: function output(type, args) {
      if (console && console[type]) console[type].apply(console, args);
    }
  };
  var Logger = function () {
    function Logger(concreteLogger) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      _classCallCheck(this, Logger);
      this.init(concreteLogger, options);
    }
    _createClass(Logger, [{
      key: "init",
      value: function init(concreteLogger) {
        var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        this.prefix = options.prefix || 'i18next:';
        this.logger = concreteLogger || consoleLogger;
        this.options = options;
        this.debug = options.debug;
      }
    }, {
      key: "setDebug",
      value: function setDebug(bool) {
        this.debug = bool;
      }
    }, {
      key: "log",
      value: function log() {
        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }
        return this.forward(args, 'log', '', true);
      }
    }, {
      key: "warn",
      value: function warn() {
        for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
          args[_key2] = arguments[_key2];
        }
        return this.forward(args, 'warn', '', true);
      }
    }, {
      key: "error",
      value: function error() {
        for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
          args[_key3] = arguments[_key3];
        }
        return this.forward(args, 'error', '');
      }
    }, {
      key: "deprecate",
      value: function deprecate() {
        for (var _len4 = arguments.length, args = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
          args[_key4] = arguments[_key4];
        }
        return this.forward(args, 'warn', 'WARNING DEPRECATED: ', true);
      }
    }, {
      key: "forward",
      value: function forward(args, lvl, prefix, debugOnly) {
        if (debugOnly && !this.debug) return null;
        if (typeof args[0] === 'string') args[0] = "".concat(prefix).concat(this.prefix, " ").concat(args[0]);
        return this.logger[lvl](args);
      }
    }, {
      key: "create",
      value: function create(moduleName) {
        return new Logger(this.logger, _objectSpread$6(_objectSpread$6({}, {
          prefix: "".concat(this.prefix, ":").concat(moduleName, ":")
        }), this.options));
      }
    }, {
      key: "clone",
      value: function clone(options) {
        options = options || this.options;
        options.prefix = options.prefix || this.prefix;
        return new Logger(this.logger, options);
      }
    }]);
    return Logger;
  }();
  var baseLogger = new Logger();

  var EventEmitter = function () {
    function EventEmitter() {
      _classCallCheck(this, EventEmitter);
      this.observers = {};
    }
    _createClass(EventEmitter, [{
      key: "on",
      value: function on(events, listener) {
        var _this = this;
        events.split(' ').forEach(function (event) {
          _this.observers[event] = _this.observers[event] || [];
          _this.observers[event].push(listener);
        });
        return this;
      }
    }, {
      key: "off",
      value: function off(event, listener) {
        if (!this.observers[event]) return;
        if (!listener) {
          delete this.observers[event];
          return;
        }
        this.observers[event] = this.observers[event].filter(function (l) {
          return l !== listener;
        });
      }
    }, {
      key: "emit",
      value: function emit(event) {
        for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
          args[_key - 1] = arguments[_key];
        }
        if (this.observers[event]) {
          var cloned = [].concat(this.observers[event]);
          cloned.forEach(function (observer) {
            observer.apply(void 0, args);
          });
        }
        if (this.observers['*']) {
          var _cloned = [].concat(this.observers['*']);
          _cloned.forEach(function (observer) {
            observer.apply(observer, [event].concat(args));
          });
        }
      }
    }]);
    return EventEmitter;
  }();

  function defer() {
    var res;
    var rej;
    var promise = new Promise(function (resolve, reject) {
      res = resolve;
      rej = reject;
    });
    promise.resolve = res;
    promise.reject = rej;
    return promise;
  }
  function makeString(object) {
    if (object == null) return '';
    return '' + object;
  }
  function copy(a, s, t) {
    a.forEach(function (m) {
      if (s[m]) t[m] = s[m];
    });
  }
  function getLastOfPath(object, path, Empty) {
    function cleanKey(key) {
      return key && key.indexOf('###') > -1 ? key.replace(/###/g, '.') : key;
    }
    function canNotTraverseDeeper() {
      return !object || typeof object === 'string';
    }
    var stack = typeof path !== 'string' ? [].concat(path) : path.split('.');
    while (stack.length > 1) {
      if (canNotTraverseDeeper()) return {};
      var key = cleanKey(stack.shift());
      if (!object[key] && Empty) object[key] = new Empty();
      if (Object.prototype.hasOwnProperty.call(object, key)) {
        object = object[key];
      } else {
        object = {};
      }
    }
    if (canNotTraverseDeeper()) return {};
    return {
      obj: object,
      k: cleanKey(stack.shift())
    };
  }
  function setPath(object, path, newValue) {
    var _getLastOfPath = getLastOfPath(object, path, Object),
      obj = _getLastOfPath.obj,
      k = _getLastOfPath.k;
    obj[k] = newValue;
  }
  function pushPath(object, path, newValue, concat) {
    var _getLastOfPath2 = getLastOfPath(object, path, Object),
      obj = _getLastOfPath2.obj,
      k = _getLastOfPath2.k;
    obj[k] = obj[k] || [];
    if (concat) obj[k] = obj[k].concat(newValue);
    if (!concat) obj[k].push(newValue);
  }
  function getPath(object, path) {
    var _getLastOfPath3 = getLastOfPath(object, path),
      obj = _getLastOfPath3.obj,
      k = _getLastOfPath3.k;
    if (!obj) return undefined;
    return obj[k];
  }
  function getPathWithDefaults(data, defaultData, key) {
    var value = getPath(data, key);
    if (value !== undefined) {
      return value;
    }
    return getPath(defaultData, key);
  }
  function deepExtend(target, source, overwrite) {
    for (var prop in source) {
      if (prop !== '__proto__' && prop !== 'constructor') {
        if (prop in target) {
          if (typeof target[prop] === 'string' || target[prop] instanceof String || typeof source[prop] === 'string' || source[prop] instanceof String) {
            if (overwrite) target[prop] = source[prop];
          } else {
            deepExtend(target[prop], source[prop], overwrite);
          }
        } else {
          target[prop] = source[prop];
        }
      }
    }
    return target;
  }
  function regexEscape(str) {
    return str.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, '\\$&');
  }
  var _entityMap = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#39;',
    '/': '&#x2F;'
  };
  function escape(data) {
    if (typeof data === 'string') {
      return data.replace(/[&<>"'\/]/g, function (s) {
        return _entityMap[s];
      });
    }
    return data;
  }
  var isIE10 = typeof window !== 'undefined' && window.navigator && typeof window.navigator.userAgentData === 'undefined' && window.navigator.userAgent && window.navigator.userAgent.indexOf('MSIE') > -1;
  var chars = [' ', ',', '?', '!', ';'];
  function looksLikeObjectPath(key, nsSeparator, keySeparator) {
    nsSeparator = nsSeparator || '';
    keySeparator = keySeparator || '';
    var possibleChars = chars.filter(function (c) {
      return nsSeparator.indexOf(c) < 0 && keySeparator.indexOf(c) < 0;
    });
    if (possibleChars.length === 0) return true;
    var r = new RegExp("(".concat(possibleChars.map(function (c) {
      return c === '?' ? '\\?' : c;
    }).join('|'), ")"));
    var matched = !r.test(key);
    if (!matched) {
      var ki = key.indexOf(keySeparator);
      if (ki > 0 && !r.test(key.substring(0, ki))) {
        matched = true;
      }
    }
    return matched;
  }

  function ownKeys$5(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
  function _objectSpread$5(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys$5(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys$5(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
  function _createSuper$3(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$3(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
  function _isNativeReflectConstruct$3() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
  function deepFind(obj, path) {
    var keySeparator = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '.';
    if (!obj) return undefined;
    if (obj[path]) return obj[path];
    var paths = path.split(keySeparator);
    var current = obj;
    for (var i = 0; i < paths.length; ++i) {
      if (!current) return undefined;
      if (typeof current[paths[i]] === 'string' && i + 1 < paths.length) {
        return undefined;
      }
      if (current[paths[i]] === undefined) {
        var j = 2;
        var p = paths.slice(i, i + j).join(keySeparator);
        var mix = current[p];
        while (mix === undefined && paths.length > i + j) {
          j++;
          p = paths.slice(i, i + j).join(keySeparator);
          mix = current[p];
        }
        if (mix === undefined) return undefined;
        if (mix === null) return null;
        if (path.endsWith(p)) {
          if (typeof mix === 'string') return mix;
          if (p && typeof mix[p] === 'string') return mix[p];
        }
        var joinedPath = paths.slice(i + j).join(keySeparator);
        if (joinedPath) return deepFind(mix, joinedPath, keySeparator);
        return undefined;
      }
      current = current[paths[i]];
    }
    return current;
  }
  var ResourceStore = function (_EventEmitter) {
    _inherits(ResourceStore, _EventEmitter);
    var _super = _createSuper$3(ResourceStore);
    function ResourceStore(data) {
      var _this;
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
        ns: ['translation'],
        defaultNS: 'translation'
      };
      _classCallCheck(this, ResourceStore);
      _this = _super.call(this);
      if (isIE10) {
        EventEmitter.call(_assertThisInitialized(_this));
      }
      _this.data = data || {};
      _this.options = options;
      if (_this.options.keySeparator === undefined) {
        _this.options.keySeparator = '.';
      }
      if (_this.options.ignoreJSONStructure === undefined) {
        _this.options.ignoreJSONStructure = true;
      }
      return _this;
    }
    _createClass(ResourceStore, [{
      key: "addNamespaces",
      value: function addNamespaces(ns) {
        if (this.options.ns.indexOf(ns) < 0) {
          this.options.ns.push(ns);
        }
      }
    }, {
      key: "removeNamespaces",
      value: function removeNamespaces(ns) {
        var index = this.options.ns.indexOf(ns);
        if (index > -1) {
          this.options.ns.splice(index, 1);
        }
      }
    }, {
      key: "getResource",
      value: function getResource(lng, ns, key) {
        var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
        var keySeparator = options.keySeparator !== undefined ? options.keySeparator : this.options.keySeparator;
        var ignoreJSONStructure = options.ignoreJSONStructure !== undefined ? options.ignoreJSONStructure : this.options.ignoreJSONStructure;
        var path = [lng, ns];
        if (key && typeof key !== 'string') path = path.concat(key);
        if (key && typeof key === 'string') path = path.concat(keySeparator ? key.split(keySeparator) : key);
        if (lng.indexOf('.') > -1) {
          path = lng.split('.');
        }
        var result = getPath(this.data, path);
        if (result || !ignoreJSONStructure || typeof key !== 'string') return result;
        return deepFind(this.data && this.data[lng] && this.data[lng][ns], key, keySeparator);
      }
    }, {
      key: "addResource",
      value: function addResource(lng, ns, key, value) {
        var options = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : {
          silent: false
        };
        var keySeparator = this.options.keySeparator;
        if (keySeparator === undefined) keySeparator = '.';
        var path = [lng, ns];
        if (key) path = path.concat(keySeparator ? key.split(keySeparator) : key);
        if (lng.indexOf('.') > -1) {
          path = lng.split('.');
          value = ns;
          ns = path[1];
        }
        this.addNamespaces(ns);
        setPath(this.data, path, value);
        if (!options.silent) this.emit('added', lng, ns, key, value);
      }
    }, {
      key: "addResources",
      value: function addResources(lng, ns, resources) {
        var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {
          silent: false
        };
        for (var m in resources) {
          if (typeof resources[m] === 'string' || Object.prototype.toString.apply(resources[m]) === '[object Array]') this.addResource(lng, ns, m, resources[m], {
            silent: true
          });
        }
        if (!options.silent) this.emit('added', lng, ns, resources);
      }
    }, {
      key: "addResourceBundle",
      value: function addResourceBundle(lng, ns, resources, deep, overwrite) {
        var options = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : {
          silent: false
        };
        var path = [lng, ns];
        if (lng.indexOf('.') > -1) {
          path = lng.split('.');
          deep = resources;
          resources = ns;
          ns = path[1];
        }
        this.addNamespaces(ns);
        var pack = getPath(this.data, path) || {};
        if (deep) {
          deepExtend(pack, resources, overwrite);
        } else {
          pack = _objectSpread$5(_objectSpread$5({}, pack), resources);
        }
        setPath(this.data, path, pack);
        if (!options.silent) this.emit('added', lng, ns, resources);
      }
    }, {
      key: "removeResourceBundle",
      value: function removeResourceBundle(lng, ns) {
        if (this.hasResourceBundle(lng, ns)) {
          delete this.data[lng][ns];
        }
        this.removeNamespaces(ns);
        this.emit('removed', lng, ns);
      }
    }, {
      key: "hasResourceBundle",
      value: function hasResourceBundle(lng, ns) {
        return this.getResource(lng, ns) !== undefined;
      }
    }, {
      key: "getResourceBundle",
      value: function getResourceBundle(lng, ns) {
        if (!ns) ns = this.options.defaultNS;
        if (this.options.compatibilityAPI === 'v1') return _objectSpread$5(_objectSpread$5({}, {}), this.getResource(lng, ns));
        return this.getResource(lng, ns);
      }
    }, {
      key: "getDataByLanguage",
      value: function getDataByLanguage(lng) {
        return this.data[lng];
      }
    }, {
      key: "hasLanguageSomeTranslations",
      value: function hasLanguageSomeTranslations(lng) {
        var data = this.getDataByLanguage(lng);
        var n = data && Object.keys(data) || [];
        return !!n.find(function (v) {
          return data[v] && Object.keys(data[v]).length > 0;
        });
      }
    }, {
      key: "toJSON",
      value: function toJSON() {
        return this.data;
      }
    }]);
    return ResourceStore;
  }(EventEmitter);

  var postProcessor = {
    processors: {},
    addPostProcessor: function addPostProcessor(module) {
      this.processors[module.name] = module;
    },
    handle: function handle(processors, value, key, options, translator) {
      var _this = this;
      processors.forEach(function (processor) {
        if (_this.processors[processor]) value = _this.processors[processor].process(value, key, options, translator);
      });
      return value;
    }
  };

  function ownKeys$4(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
  function _objectSpread$4(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys$4(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys$4(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
  function _createSuper$2(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$2(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
  function _isNativeReflectConstruct$2() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
  var checkedLoadedFor = {};
  var Translator = function (_EventEmitter) {
    _inherits(Translator, _EventEmitter);
    var _super = _createSuper$2(Translator);
    function Translator(services) {
      var _this;
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      _classCallCheck(this, Translator);
      _this = _super.call(this);
      if (isIE10) {
        EventEmitter.call(_assertThisInitialized(_this));
      }
      copy(['resourceStore', 'languageUtils', 'pluralResolver', 'interpolator', 'backendConnector', 'i18nFormat', 'utils'], services, _assertThisInitialized(_this));
      _this.options = options;
      if (_this.options.keySeparator === undefined) {
        _this.options.keySeparator = '.';
      }
      _this.logger = baseLogger.create('translator');
      return _this;
    }
    _createClass(Translator, [{
      key: "changeLanguage",
      value: function changeLanguage(lng) {
        if (lng) this.language = lng;
      }
    }, {
      key: "exists",
      value: function exists(key) {
        var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
          interpolation: {}
        };
        if (key === undefined || key === null) {
          return false;
        }
        var resolved = this.resolve(key, options);
        return resolved && resolved.res !== undefined;
      }
    }, {
      key: "extractFromKey",
      value: function extractFromKey(key, options) {
        var nsSeparator = options.nsSeparator !== undefined ? options.nsSeparator : this.options.nsSeparator;
        if (nsSeparator === undefined) nsSeparator = ':';
        var keySeparator = options.keySeparator !== undefined ? options.keySeparator : this.options.keySeparator;
        var namespaces = options.ns || this.options.defaultNS || [];
        var wouldCheckForNsInKey = nsSeparator && key.indexOf(nsSeparator) > -1;
        var seemsNaturalLanguage = !this.options.userDefinedKeySeparator && !options.keySeparator && !this.options.userDefinedNsSeparator && !options.nsSeparator && !looksLikeObjectPath(key, nsSeparator, keySeparator);
        if (wouldCheckForNsInKey && !seemsNaturalLanguage) {
          var m = key.match(this.interpolator.nestingRegexp);
          if (m && m.length > 0) {
            return {
              key: key,
              namespaces: namespaces
            };
          }
          var parts = key.split(nsSeparator);
          if (nsSeparator !== keySeparator || nsSeparator === keySeparator && this.options.ns.indexOf(parts[0]) > -1) namespaces = parts.shift();
          key = parts.join(keySeparator);
        }
        if (typeof namespaces === 'string') namespaces = [namespaces];
        return {
          key: key,
          namespaces: namespaces
        };
      }
    }, {
      key: "translate",
      value: function translate(keys, options, lastKey) {
        var _this2 = this;
        if (_typeof(options) !== 'object' && this.options.overloadTranslationOptionHandler) {
          options = this.options.overloadTranslationOptionHandler(arguments);
        }
        if (!options) options = {};
        if (keys === undefined || keys === null) return '';
        if (!Array.isArray(keys)) keys = [String(keys)];
        var returnDetails = options.returnDetails !== undefined ? options.returnDetails : this.options.returnDetails;
        var keySeparator = options.keySeparator !== undefined ? options.keySeparator : this.options.keySeparator;
        var _this$extractFromKey = this.extractFromKey(keys[keys.length - 1], options),
          key = _this$extractFromKey.key,
          namespaces = _this$extractFromKey.namespaces;
        var namespace = namespaces[namespaces.length - 1];
        var lng = options.lng || this.language;
        var appendNamespaceToCIMode = options.appendNamespaceToCIMode || this.options.appendNamespaceToCIMode;
        if (lng && lng.toLowerCase() === 'cimode') {
          if (appendNamespaceToCIMode) {
            var nsSeparator = options.nsSeparator || this.options.nsSeparator;
            if (returnDetails) {
              resolved.res = "".concat(namespace).concat(nsSeparator).concat(key);
              return resolved;
            }
            return "".concat(namespace).concat(nsSeparator).concat(key);
          }
          if (returnDetails) {
            resolved.res = key;
            return resolved;
          }
          return key;
        }
        var resolved = this.resolve(keys, options);
        var res = resolved && resolved.res;
        var resUsedKey = resolved && resolved.usedKey || key;
        var resExactUsedKey = resolved && resolved.exactUsedKey || key;
        var resType = Object.prototype.toString.apply(res);
        var noObject = ['[object Number]', '[object Function]', '[object RegExp]'];
        var joinArrays = options.joinArrays !== undefined ? options.joinArrays : this.options.joinArrays;
        var handleAsObjectInI18nFormat = !this.i18nFormat || this.i18nFormat.handleAsObject;
        var handleAsObject = typeof res !== 'string' && typeof res !== 'boolean' && typeof res !== 'number';
        if (handleAsObjectInI18nFormat && res && handleAsObject && noObject.indexOf(resType) < 0 && !(typeof joinArrays === 'string' && resType === '[object Array]')) {
          if (!options.returnObjects && !this.options.returnObjects) {
            if (!this.options.returnedObjectHandler) {
              this.logger.warn('accessing an object - but returnObjects options is not enabled!');
            }
            var r = this.options.returnedObjectHandler ? this.options.returnedObjectHandler(resUsedKey, res, _objectSpread$4(_objectSpread$4({}, options), {}, {
              ns: namespaces
            })) : "key '".concat(key, " (").concat(this.language, ")' returned an object instead of string.");
            if (returnDetails) {
              resolved.res = r;
              return resolved;
            }
            return r;
          }
          if (keySeparator) {
            var resTypeIsArray = resType === '[object Array]';
            var copy = resTypeIsArray ? [] : {};
            var newKeyToUse = resTypeIsArray ? resExactUsedKey : resUsedKey;
            for (var m in res) {
              if (Object.prototype.hasOwnProperty.call(res, m)) {
                var deepKey = "".concat(newKeyToUse).concat(keySeparator).concat(m);
                copy[m] = this.translate(deepKey, _objectSpread$4(_objectSpread$4({}, options), {
                  joinArrays: false,
                  ns: namespaces
                }));
                if (copy[m] === deepKey) copy[m] = res[m];
              }
            }
            res = copy;
          }
        } else if (handleAsObjectInI18nFormat && typeof joinArrays === 'string' && resType === '[object Array]') {
          res = res.join(joinArrays);
          if (res) res = this.extendTranslation(res, keys, options, lastKey);
        } else {
          var usedDefault = false;
          var usedKey = false;
          var needsPluralHandling = options.count !== undefined && typeof options.count !== 'string';
          var hasDefaultValue = Translator.hasDefaultValue(options);
          var defaultValueSuffix = needsPluralHandling ? this.pluralResolver.getSuffix(lng, options.count, options) : '';
          var defaultValue = options["defaultValue".concat(defaultValueSuffix)] || options.defaultValue;
          if (!this.isValidLookup(res) && hasDefaultValue) {
            usedDefault = true;
            res = defaultValue;
          }
          if (!this.isValidLookup(res)) {
            usedKey = true;
            res = key;
          }
          var missingKeyNoValueFallbackToKey = options.missingKeyNoValueFallbackToKey || this.options.missingKeyNoValueFallbackToKey;
          var resForMissing = missingKeyNoValueFallbackToKey && usedKey ? undefined : res;
          var updateMissing = hasDefaultValue && defaultValue !== res && this.options.updateMissing;
          if (usedKey || usedDefault || updateMissing) {
            this.logger.log(updateMissing ? 'updateKey' : 'missingKey', lng, namespace, key, updateMissing ? defaultValue : res);
            if (keySeparator) {
              var fk = this.resolve(key, _objectSpread$4(_objectSpread$4({}, options), {}, {
                keySeparator: false
              }));
              if (fk && fk.res) this.logger.warn('Seems the loaded translations were in flat JSON format instead of nested. Either set keySeparator: false on init or make sure your translations are published in nested format.');
            }
            var lngs = [];
            var fallbackLngs = this.languageUtils.getFallbackCodes(this.options.fallbackLng, options.lng || this.language);
            if (this.options.saveMissingTo === 'fallback' && fallbackLngs && fallbackLngs[0]) {
              for (var i = 0; i < fallbackLngs.length; i++) {
                lngs.push(fallbackLngs[i]);
              }
            } else if (this.options.saveMissingTo === 'all') {
              lngs = this.languageUtils.toResolveHierarchy(options.lng || this.language);
            } else {
              lngs.push(options.lng || this.language);
            }
            var send = function send(l, k, specificDefaultValue) {
              var defaultForMissing = hasDefaultValue && specificDefaultValue !== res ? specificDefaultValue : resForMissing;
              if (_this2.options.missingKeyHandler) {
                _this2.options.missingKeyHandler(l, namespace, k, defaultForMissing, updateMissing, options);
              } else if (_this2.backendConnector && _this2.backendConnector.saveMissing) {
                _this2.backendConnector.saveMissing(l, namespace, k, defaultForMissing, updateMissing, options);
              }
              _this2.emit('missingKey', l, namespace, k, res);
            };
            if (this.options.saveMissing) {
              if (this.options.saveMissingPlurals && needsPluralHandling) {
                lngs.forEach(function (language) {
                  _this2.pluralResolver.getSuffixes(language, options).forEach(function (suffix) {
                    send([language], key + suffix, options["defaultValue".concat(suffix)] || defaultValue);
                  });
                });
              } else {
                send(lngs, key, defaultValue);
              }
            }
          }
          res = this.extendTranslation(res, keys, options, resolved, lastKey);
          if (usedKey && res === key && this.options.appendNamespaceToMissingKey) res = "".concat(namespace, ":").concat(key);
          if ((usedKey || usedDefault) && this.options.parseMissingKeyHandler) {
            if (this.options.compatibilityAPI !== 'v1') {
              res = this.options.parseMissingKeyHandler(this.options.appendNamespaceToMissingKey ? "".concat(namespace, ":").concat(key) : key, usedDefault ? res : undefined);
            } else {
              res = this.options.parseMissingKeyHandler(res);
            }
          }
        }
        if (returnDetails) {
          resolved.res = res;
          return resolved;
        }
        return res;
      }
    }, {
      key: "extendTranslation",
      value: function extendTranslation(res, key, options, resolved, lastKey) {
        var _this3 = this;
        if (this.i18nFormat && this.i18nFormat.parse) {
          res = this.i18nFormat.parse(res, _objectSpread$4(_objectSpread$4({}, this.options.interpolation.defaultVariables), options), resolved.usedLng, resolved.usedNS, resolved.usedKey, {
            resolved: resolved
          });
        } else if (!options.skipInterpolation) {
          if (options.interpolation) this.interpolator.init(_objectSpread$4(_objectSpread$4({}, options), {
            interpolation: _objectSpread$4(_objectSpread$4({}, this.options.interpolation), options.interpolation)
          }));
          var skipOnVariables = typeof res === 'string' && (options && options.interpolation && options.interpolation.skipOnVariables !== undefined ? options.interpolation.skipOnVariables : this.options.interpolation.skipOnVariables);
          var nestBef;
          if (skipOnVariables) {
            var nb = res.match(this.interpolator.nestingRegexp);
            nestBef = nb && nb.length;
          }
          var data = options.replace && typeof options.replace !== 'string' ? options.replace : options;
          if (this.options.interpolation.defaultVariables) data = _objectSpread$4(_objectSpread$4({}, this.options.interpolation.defaultVariables), data);
          res = this.interpolator.interpolate(res, data, options.lng || this.language, options);
          if (skipOnVariables) {
            var na = res.match(this.interpolator.nestingRegexp);
            var nestAft = na && na.length;
            if (nestBef < nestAft) options.nest = false;
          }
          if (options.nest !== false) res = this.interpolator.nest(res, function () {
            for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
              args[_key] = arguments[_key];
            }
            if (lastKey && lastKey[0] === args[0] && !options.context) {
              _this3.logger.warn("It seems you are nesting recursively key: ".concat(args[0], " in key: ").concat(key[0]));
              return null;
            }
            return _this3.translate.apply(_this3, args.concat([key]));
          }, options);
          if (options.interpolation) this.interpolator.reset();
        }
        var postProcess = options.postProcess || this.options.postProcess;
        var postProcessorNames = typeof postProcess === 'string' ? [postProcess] : postProcess;
        if (res !== undefined && res !== null && postProcessorNames && postProcessorNames.length && options.applyPostProcessor !== false) {
          res = postProcessor.handle(postProcessorNames, res, key, this.options && this.options.postProcessPassResolved ? _objectSpread$4({
            i18nResolved: resolved
          }, options) : options, this);
        }
        return res;
      }
    }, {
      key: "resolve",
      value: function resolve(keys) {
        var _this4 = this;
        var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        var found;
        var usedKey;
        var exactUsedKey;
        var usedLng;
        var usedNS;
        if (typeof keys === 'string') keys = [keys];
        keys.forEach(function (k) {
          if (_this4.isValidLookup(found)) return;
          var extracted = _this4.extractFromKey(k, options);
          var key = extracted.key;
          usedKey = key;
          var namespaces = extracted.namespaces;
          if (_this4.options.fallbackNS) namespaces = namespaces.concat(_this4.options.fallbackNS);
          var needsPluralHandling = options.count !== undefined && typeof options.count !== 'string';
          var needsZeroSuffixLookup = needsPluralHandling && !options.ordinal && options.count === 0 && _this4.pluralResolver.shouldUseIntlApi();
          var needsContextHandling = options.context !== undefined && (typeof options.context === 'string' || typeof options.context === 'number') && options.context !== '';
          var codes = options.lngs ? options.lngs : _this4.languageUtils.toResolveHierarchy(options.lng || _this4.language, options.fallbackLng);
          namespaces.forEach(function (ns) {
            if (_this4.isValidLookup(found)) return;
            usedNS = ns;
            if (!checkedLoadedFor["".concat(codes[0], "-").concat(ns)] && _this4.utils && _this4.utils.hasLoadedNamespace && !_this4.utils.hasLoadedNamespace(usedNS)) {
              checkedLoadedFor["".concat(codes[0], "-").concat(ns)] = true;
              _this4.logger.warn("key \"".concat(usedKey, "\" for languages \"").concat(codes.join(', '), "\" won't get resolved as namespace \"").concat(usedNS, "\" was not yet loaded"), 'This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!');
            }
            codes.forEach(function (code) {
              if (_this4.isValidLookup(found)) return;
              usedLng = code;
              var finalKeys = [key];
              if (_this4.i18nFormat && _this4.i18nFormat.addLookupKeys) {
                _this4.i18nFormat.addLookupKeys(finalKeys, key, code, ns, options);
              } else {
                var pluralSuffix;
                if (needsPluralHandling) pluralSuffix = _this4.pluralResolver.getSuffix(code, options.count, options);
                var zeroSuffix = "".concat(_this4.options.pluralSeparator, "zero");
                if (needsPluralHandling) {
                  finalKeys.push(key + pluralSuffix);
                  if (needsZeroSuffixLookup) {
                    finalKeys.push(key + zeroSuffix);
                  }
                }
                if (needsContextHandling) {
                  var contextKey = "".concat(key).concat(_this4.options.contextSeparator).concat(options.context);
                  finalKeys.push(contextKey);
                  if (needsPluralHandling) {
                    finalKeys.push(contextKey + pluralSuffix);
                    if (needsZeroSuffixLookup) {
                      finalKeys.push(contextKey + zeroSuffix);
                    }
                  }
                }
              }
              var possibleKey;
              while (possibleKey = finalKeys.pop()) {
                if (!_this4.isValidLookup(found)) {
                  exactUsedKey = possibleKey;
                  found = _this4.getResource(code, ns, possibleKey, options);
                }
              }
            });
          });
        });
        return {
          res: found,
          usedKey: usedKey,
          exactUsedKey: exactUsedKey,
          usedLng: usedLng,
          usedNS: usedNS
        };
      }
    }, {
      key: "isValidLookup",
      value: function isValidLookup(res) {
        return res !== undefined && !(!this.options.returnNull && res === null) && !(!this.options.returnEmptyString && res === '');
      }
    }, {
      key: "getResource",
      value: function getResource(code, ns, key) {
        var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
        if (this.i18nFormat && this.i18nFormat.getResource) return this.i18nFormat.getResource(code, ns, key, options);
        return this.resourceStore.getResource(code, ns, key, options);
      }
    }], [{
      key: "hasDefaultValue",
      value: function hasDefaultValue(options) {
        var prefix = 'defaultValue';
        for (var option in options) {
          if (Object.prototype.hasOwnProperty.call(options, option) && prefix === option.substring(0, prefix.length) && undefined !== options[option]) {
            return true;
          }
        }
        return false;
      }
    }]);
    return Translator;
  }(EventEmitter);

  function capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  var LanguageUtil = function () {
    function LanguageUtil(options) {
      _classCallCheck(this, LanguageUtil);
      this.options = options;
      this.supportedLngs = this.options.supportedLngs || false;
      this.logger = baseLogger.create('languageUtils');
    }
    _createClass(LanguageUtil, [{
      key: "getScriptPartFromCode",
      value: function getScriptPartFromCode(code) {
        if (!code || code.indexOf('-') < 0) return null;
        var p = code.split('-');
        if (p.length === 2) return null;
        p.pop();
        if (p[p.length - 1].toLowerCase() === 'x') return null;
        return this.formatLanguageCode(p.join('-'));
      }
    }, {
      key: "getLanguagePartFromCode",
      value: function getLanguagePartFromCode(code) {
        if (!code || code.indexOf('-') < 0) return code;
        var p = code.split('-');
        return this.formatLanguageCode(p[0]);
      }
    }, {
      key: "formatLanguageCode",
      value: function formatLanguageCode(code) {
        if (typeof code === 'string' && code.indexOf('-') > -1) {
          var specialCases = ['hans', 'hant', 'latn', 'cyrl', 'cans', 'mong', 'arab'];
          var p = code.split('-');
          if (this.options.lowerCaseLng) {
            p = p.map(function (part) {
              return part.toLowerCase();
            });
          } else if (p.length === 2) {
            p[0] = p[0].toLowerCase();
            p[1] = p[1].toUpperCase();
            if (specialCases.indexOf(p[1].toLowerCase()) > -1) p[1] = capitalize(p[1].toLowerCase());
          } else if (p.length === 3) {
            p[0] = p[0].toLowerCase();
            if (p[1].length === 2) p[1] = p[1].toUpperCase();
            if (p[0] !== 'sgn' && p[2].length === 2) p[2] = p[2].toUpperCase();
            if (specialCases.indexOf(p[1].toLowerCase()) > -1) p[1] = capitalize(p[1].toLowerCase());
            if (specialCases.indexOf(p[2].toLowerCase()) > -1) p[2] = capitalize(p[2].toLowerCase());
          }
          return p.join('-');
        }
        return this.options.cleanCode || this.options.lowerCaseLng ? code.toLowerCase() : code;
      }
    }, {
      key: "isSupportedCode",
      value: function isSupportedCode(code) {
        if (this.options.load === 'languageOnly' || this.options.nonExplicitSupportedLngs) {
          code = this.getLanguagePartFromCode(code);
        }
        return !this.supportedLngs || !this.supportedLngs.length || this.supportedLngs.indexOf(code) > -1;
      }
    }, {
      key: "getBestMatchFromCodes",
      value: function getBestMatchFromCodes(codes) {
        var _this = this;
        if (!codes) return null;
        var found;
        codes.forEach(function (code) {
          if (found) return;
          var cleanedLng = _this.formatLanguageCode(code);
          if (!_this.options.supportedLngs || _this.isSupportedCode(cleanedLng)) found = cleanedLng;
        });
        if (!found && this.options.supportedLngs) {
          codes.forEach(function (code) {
            if (found) return;
            var lngOnly = _this.getLanguagePartFromCode(code);
            if (_this.isSupportedCode(lngOnly)) return found = lngOnly;
            found = _this.options.supportedLngs.find(function (supportedLng) {
              if (supportedLng.indexOf(lngOnly) === 0) return supportedLng;
            });
          });
        }
        if (!found) found = this.getFallbackCodes(this.options.fallbackLng)[0];
        return found;
      }
    }, {
      key: "getFallbackCodes",
      value: function getFallbackCodes(fallbacks, code) {
        if (!fallbacks) return [];
        if (typeof fallbacks === 'function') fallbacks = fallbacks(code);
        if (typeof fallbacks === 'string') fallbacks = [fallbacks];
        if (Object.prototype.toString.apply(fallbacks) === '[object Array]') return fallbacks;
        if (!code) return fallbacks["default"] || [];
        var found = fallbacks[code];
        if (!found) found = fallbacks[this.getScriptPartFromCode(code)];
        if (!found) found = fallbacks[this.formatLanguageCode(code)];
        if (!found) found = fallbacks[this.getLanguagePartFromCode(code)];
        if (!found) found = fallbacks["default"];
        return found || [];
      }
    }, {
      key: "toResolveHierarchy",
      value: function toResolveHierarchy(code, fallbackCode) {
        var _this2 = this;
        var fallbackCodes = this.getFallbackCodes(fallbackCode || this.options.fallbackLng || [], code);
        var codes = [];
        var addCode = function addCode(c) {
          if (!c) return;
          if (_this2.isSupportedCode(c)) {
            codes.push(c);
          } else {
            _this2.logger.warn("rejecting language code not found in supportedLngs: ".concat(c));
          }
        };
        if (typeof code === 'string' && code.indexOf('-') > -1) {
          if (this.options.load !== 'languageOnly') addCode(this.formatLanguageCode(code));
          if (this.options.load !== 'languageOnly' && this.options.load !== 'currentOnly') addCode(this.getScriptPartFromCode(code));
          if (this.options.load !== 'currentOnly') addCode(this.getLanguagePartFromCode(code));
        } else if (typeof code === 'string') {
          addCode(this.formatLanguageCode(code));
        }
        fallbackCodes.forEach(function (fc) {
          if (codes.indexOf(fc) < 0) addCode(_this2.formatLanguageCode(fc));
        });
        return codes;
      }
    }]);
    return LanguageUtil;
  }();

  var sets = [{
    lngs: ['ach', 'ak', 'am', 'arn', 'br', 'fil', 'gun', 'ln', 'mfe', 'mg', 'mi', 'oc', 'pt', 'pt-BR', 'tg', 'tl', 'ti', 'tr', 'uz', 'wa'],
    nr: [1, 2],
    fc: 1
  }, {
    lngs: ['af', 'an', 'ast', 'az', 'bg', 'bn', 'ca', 'da', 'de', 'dev', 'el', 'en', 'eo', 'es', 'et', 'eu', 'fi', 'fo', 'fur', 'fy', 'gl', 'gu', 'ha', 'hi', 'hu', 'hy', 'ia', 'it', 'kk', 'kn', 'ku', 'lb', 'mai', 'ml', 'mn', 'mr', 'nah', 'nap', 'nb', 'ne', 'nl', 'nn', 'no', 'nso', 'pa', 'pap', 'pms', 'ps', 'pt-PT', 'rm', 'sco', 'se', 'si', 'so', 'son', 'sq', 'sv', 'sw', 'ta', 'te', 'tk', 'ur', 'yo'],
    nr: [1, 2],
    fc: 2
  }, {
    lngs: ['ay', 'bo', 'cgg', 'fa', 'ht', 'id', 'ja', 'jbo', 'ka', 'km', 'ko', 'ky', 'lo', 'ms', 'sah', 'su', 'th', 'tt', 'ug', 'vi', 'wo', 'zh'],
    nr: [1],
    fc: 3
  }, {
    lngs: ['be', 'bs', 'cnr', 'dz', 'hr', 'ru', 'sr', 'uk'],
    nr: [1, 2, 5],
    fc: 4
  }, {
    lngs: ['ar'],
    nr: [0, 1, 2, 3, 11, 100],
    fc: 5
  }, {
    lngs: ['cs', 'sk'],
    nr: [1, 2, 5],
    fc: 6
  }, {
    lngs: ['csb', 'pl'],
    nr: [1, 2, 5],
    fc: 7
  }, {
    lngs: ['cy'],
    nr: [1, 2, 3, 8],
    fc: 8
  }, {
    lngs: ['fr'],
    nr: [1, 2],
    fc: 9
  }, {
    lngs: ['ga'],
    nr: [1, 2, 3, 7, 11],
    fc: 10
  }, {
    lngs: ['gd'],
    nr: [1, 2, 3, 20],
    fc: 11
  }, {
    lngs: ['is'],
    nr: [1, 2],
    fc: 12
  }, {
    lngs: ['jv'],
    nr: [0, 1],
    fc: 13
  }, {
    lngs: ['kw'],
    nr: [1, 2, 3, 4],
    fc: 14
  }, {
    lngs: ['lt'],
    nr: [1, 2, 10],
    fc: 15
  }, {
    lngs: ['lv'],
    nr: [1, 2, 0],
    fc: 16
  }, {
    lngs: ['mk'],
    nr: [1, 2],
    fc: 17
  }, {
    lngs: ['mnk'],
    nr: [0, 1, 2],
    fc: 18
  }, {
    lngs: ['mt'],
    nr: [1, 2, 11, 20],
    fc: 19
  }, {
    lngs: ['or'],
    nr: [2, 1],
    fc: 2
  }, {
    lngs: ['ro'],
    nr: [1, 2, 20],
    fc: 20
  }, {
    lngs: ['sl'],
    nr: [5, 1, 2, 3],
    fc: 21
  }, {
    lngs: ['he', 'iw'],
    nr: [1, 2, 20, 21],
    fc: 22
  }];
  var _rulesPluralsTypes = {
    1: function _(n) {
      return Number(n > 1);
    },
    2: function _(n) {
      return Number(n != 1);
    },
    3: function _(n) {
      return 0;
    },
    4: function _(n) {
      return Number(n % 10 == 1 && n % 100 != 11 ? 0 : n % 10 >= 2 && n % 10 <= 4 && (n % 100 < 10 || n % 100 >= 20) ? 1 : 2);
    },
    5: function _(n) {
      return Number(n == 0 ? 0 : n == 1 ? 1 : n == 2 ? 2 : n % 100 >= 3 && n % 100 <= 10 ? 3 : n % 100 >= 11 ? 4 : 5);
    },
    6: function _(n) {
      return Number(n == 1 ? 0 : n >= 2 && n <= 4 ? 1 : 2);
    },
    7: function _(n) {
      return Number(n == 1 ? 0 : n % 10 >= 2 && n % 10 <= 4 && (n % 100 < 10 || n % 100 >= 20) ? 1 : 2);
    },
    8: function _(n) {
      return Number(n == 1 ? 0 : n == 2 ? 1 : n != 8 && n != 11 ? 2 : 3);
    },
    9: function _(n) {
      return Number(n >= 2);
    },
    10: function _(n) {
      return Number(n == 1 ? 0 : n == 2 ? 1 : n < 7 ? 2 : n < 11 ? 3 : 4);
    },
    11: function _(n) {
      return Number(n == 1 || n == 11 ? 0 : n == 2 || n == 12 ? 1 : n > 2 && n < 20 ? 2 : 3);
    },
    12: function _(n) {
      return Number(n % 10 != 1 || n % 100 == 11);
    },
    13: function _(n) {
      return Number(n !== 0);
    },
    14: function _(n) {
      return Number(n == 1 ? 0 : n == 2 ? 1 : n == 3 ? 2 : 3);
    },
    15: function _(n) {
      return Number(n % 10 == 1 && n % 100 != 11 ? 0 : n % 10 >= 2 && (n % 100 < 10 || n % 100 >= 20) ? 1 : 2);
    },
    16: function _(n) {
      return Number(n % 10 == 1 && n % 100 != 11 ? 0 : n !== 0 ? 1 : 2);
    },
    17: function _(n) {
      return Number(n == 1 || n % 10 == 1 && n % 100 != 11 ? 0 : 1);
    },
    18: function _(n) {
      return Number(n == 0 ? 0 : n == 1 ? 1 : 2);
    },
    19: function _(n) {
      return Number(n == 1 ? 0 : n == 0 || n % 100 > 1 && n % 100 < 11 ? 1 : n % 100 > 10 && n % 100 < 20 ? 2 : 3);
    },
    20: function _(n) {
      return Number(n == 1 ? 0 : n == 0 || n % 100 > 0 && n % 100 < 20 ? 1 : 2);
    },
    21: function _(n) {
      return Number(n % 100 == 1 ? 1 : n % 100 == 2 ? 2 : n % 100 == 3 || n % 100 == 4 ? 3 : 0);
    },
    22: function _(n) {
      return Number(n == 1 ? 0 : n == 2 ? 1 : (n < 0 || n > 10) && n % 10 == 0 ? 2 : 3);
    }
  };
  var deprecatedJsonVersions = ['v1', 'v2', 'v3'];
  var suffixesOrder = {
    zero: 0,
    one: 1,
    two: 2,
    few: 3,
    many: 4,
    other: 5
  };
  function createRules() {
    var rules = {};
    sets.forEach(function (set) {
      set.lngs.forEach(function (l) {
        rules[l] = {
          numbers: set.nr,
          plurals: _rulesPluralsTypes[set.fc]
        };
      });
    });
    return rules;
  }
  var PluralResolver = function () {
    function PluralResolver(languageUtils) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      _classCallCheck(this, PluralResolver);
      this.languageUtils = languageUtils;
      this.options = options;
      this.logger = baseLogger.create('pluralResolver');
      if ((!this.options.compatibilityJSON || this.options.compatibilityJSON === 'v4') && (typeof Intl === 'undefined' || !Intl.PluralRules)) {
        this.options.compatibilityJSON = 'v3';
        this.logger.error('Your environment seems not to be Intl API compatible, use an Intl.PluralRules polyfill. Will fallback to the compatibilityJSON v3 format handling.');
      }
      this.rules = createRules();
    }
    _createClass(PluralResolver, [{
      key: "addRule",
      value: function addRule(lng, obj) {
        this.rules[lng] = obj;
      }
    }, {
      key: "getRule",
      value: function getRule(code) {
        var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        if (this.shouldUseIntlApi()) {
          try {
            return new Intl.PluralRules(code, {
              type: options.ordinal ? 'ordinal' : 'cardinal'
            });
          } catch (_unused) {
            return;
          }
        }
        return this.rules[code] || this.rules[this.languageUtils.getLanguagePartFromCode(code)];
      }
    }, {
      key: "needsPlural",
      value: function needsPlural(code) {
        var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        var rule = this.getRule(code, options);
        if (this.shouldUseIntlApi()) {
          return rule && rule.resolvedOptions().pluralCategories.length > 1;
        }
        return rule && rule.numbers.length > 1;
      }
    }, {
      key: "getPluralFormsOfKey",
      value: function getPluralFormsOfKey(code, key) {
        var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
        return this.getSuffixes(code, options).map(function (suffix) {
          return "".concat(key).concat(suffix);
        });
      }
    }, {
      key: "getSuffixes",
      value: function getSuffixes(code) {
        var _this = this;
        var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        var rule = this.getRule(code, options);
        if (!rule) {
          return [];
        }
        if (this.shouldUseIntlApi()) {
          return rule.resolvedOptions().pluralCategories.sort(function (pluralCategory1, pluralCategory2) {
            return suffixesOrder[pluralCategory1] - suffixesOrder[pluralCategory2];
          }).map(function (pluralCategory) {
            return "".concat(_this.options.prepend).concat(pluralCategory);
          });
        }
        return rule.numbers.map(function (number) {
          return _this.getSuffix(code, number, options);
        });
      }
    }, {
      key: "getSuffix",
      value: function getSuffix(code, count) {
        var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
        var rule = this.getRule(code, options);
        if (rule) {
          if (this.shouldUseIntlApi()) {
            return "".concat(this.options.prepend).concat(rule.select(count));
          }
          return this.getSuffixRetroCompatible(rule, count);
        }
        this.logger.warn("no plural rule found for: ".concat(code));
        return '';
      }
    }, {
      key: "getSuffixRetroCompatible",
      value: function getSuffixRetroCompatible(rule, count) {
        var _this2 = this;
        var idx = rule.noAbs ? rule.plurals(count) : rule.plurals(Math.abs(count));
        var suffix = rule.numbers[idx];
        if (this.options.simplifyPluralSuffix && rule.numbers.length === 2 && rule.numbers[0] === 1) {
          if (suffix === 2) {
            suffix = 'plural';
          } else if (suffix === 1) {
            suffix = '';
          }
        }
        var returnSuffix = function returnSuffix() {
          return _this2.options.prepend && suffix.toString() ? _this2.options.prepend + suffix.toString() : suffix.toString();
        };
        if (this.options.compatibilityJSON === 'v1') {
          if (suffix === 1) return '';
          if (typeof suffix === 'number') return "_plural_".concat(suffix.toString());
          return returnSuffix();
        } else if (this.options.compatibilityJSON === 'v2') {
          return returnSuffix();
        } else if (this.options.simplifyPluralSuffix && rule.numbers.length === 2 && rule.numbers[0] === 1) {
          return returnSuffix();
        }
        return this.options.prepend && idx.toString() ? this.options.prepend + idx.toString() : idx.toString();
      }
    }, {
      key: "shouldUseIntlApi",
      value: function shouldUseIntlApi() {
        return !deprecatedJsonVersions.includes(this.options.compatibilityJSON);
      }
    }]);
    return PluralResolver;
  }();

  function ownKeys$3(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
  function _objectSpread$3(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys$3(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys$3(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
  var Interpolator = function () {
    function Interpolator() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      _classCallCheck(this, Interpolator);
      this.logger = baseLogger.create('interpolator');
      this.options = options;
      this.format = options.interpolation && options.interpolation.format || function (value) {
        return value;
      };
      this.init(options);
    }
    _createClass(Interpolator, [{
      key: "init",
      value: function init() {
        var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        if (!options.interpolation) options.interpolation = {
          escapeValue: true
        };
        var iOpts = options.interpolation;
        this.escape = iOpts.escape !== undefined ? iOpts.escape : escape;
        this.escapeValue = iOpts.escapeValue !== undefined ? iOpts.escapeValue : true;
        this.useRawValueToEscape = iOpts.useRawValueToEscape !== undefined ? iOpts.useRawValueToEscape : false;
        this.prefix = iOpts.prefix ? regexEscape(iOpts.prefix) : iOpts.prefixEscaped || '{{';
        this.suffix = iOpts.suffix ? regexEscape(iOpts.suffix) : iOpts.suffixEscaped || '}}';
        this.formatSeparator = iOpts.formatSeparator ? iOpts.formatSeparator : iOpts.formatSeparator || ',';
        this.unescapePrefix = iOpts.unescapeSuffix ? '' : iOpts.unescapePrefix || '-';
        this.unescapeSuffix = this.unescapePrefix ? '' : iOpts.unescapeSuffix || '';
        this.nestingPrefix = iOpts.nestingPrefix ? regexEscape(iOpts.nestingPrefix) : iOpts.nestingPrefixEscaped || regexEscape('$t(');
        this.nestingSuffix = iOpts.nestingSuffix ? regexEscape(iOpts.nestingSuffix) : iOpts.nestingSuffixEscaped || regexEscape(')');
        this.nestingOptionsSeparator = iOpts.nestingOptionsSeparator ? iOpts.nestingOptionsSeparator : iOpts.nestingOptionsSeparator || ',';
        this.maxReplaces = iOpts.maxReplaces ? iOpts.maxReplaces : 1000;
        this.alwaysFormat = iOpts.alwaysFormat !== undefined ? iOpts.alwaysFormat : false;
        this.resetRegExp();
      }
    }, {
      key: "reset",
      value: function reset() {
        if (this.options) this.init(this.options);
      }
    }, {
      key: "resetRegExp",
      value: function resetRegExp() {
        var regexpStr = "".concat(this.prefix, "(.+?)").concat(this.suffix);
        this.regexp = new RegExp(regexpStr, 'g');
        var regexpUnescapeStr = "".concat(this.prefix).concat(this.unescapePrefix, "(.+?)").concat(this.unescapeSuffix).concat(this.suffix);
        this.regexpUnescape = new RegExp(regexpUnescapeStr, 'g');
        var nestingRegexpStr = "".concat(this.nestingPrefix, "(.+?)").concat(this.nestingSuffix);
        this.nestingRegexp = new RegExp(nestingRegexpStr, 'g');
      }
    }, {
      key: "interpolate",
      value: function interpolate(str, data, lng, options) {
        var _this = this;
        var match;
        var value;
        var replaces;
        var defaultData = this.options && this.options.interpolation && this.options.interpolation.defaultVariables || {};
        function regexSafe(val) {
          return val.replace(/\$/g, '$$$$');
        }
        var handleFormat = function handleFormat(key) {
          if (key.indexOf(_this.formatSeparator) < 0) {
            var path = getPathWithDefaults(data, defaultData, key);
            return _this.alwaysFormat ? _this.format(path, undefined, lng, _objectSpread$3(_objectSpread$3(_objectSpread$3({}, options), data), {}, {
              interpolationkey: key
            })) : path;
          }
          var p = key.split(_this.formatSeparator);
          var k = p.shift().trim();
          var f = p.join(_this.formatSeparator).trim();
          return _this.format(getPathWithDefaults(data, defaultData, k), f, lng, _objectSpread$3(_objectSpread$3(_objectSpread$3({}, options), data), {}, {
            interpolationkey: k
          }));
        };
        this.resetRegExp();
        var missingInterpolationHandler = options && options.missingInterpolationHandler || this.options.missingInterpolationHandler;
        var skipOnVariables = options && options.interpolation && options.interpolation.skipOnVariables !== undefined ? options.interpolation.skipOnVariables : this.options.interpolation.skipOnVariables;
        var todos = [{
          regex: this.regexpUnescape,
          safeValue: function safeValue(val) {
            return regexSafe(val);
          }
        }, {
          regex: this.regexp,
          safeValue: function safeValue(val) {
            return _this.escapeValue ? regexSafe(_this.escape(val)) : regexSafe(val);
          }
        }];
        todos.forEach(function (todo) {
          replaces = 0;
          while (match = todo.regex.exec(str)) {
            var matchedVar = match[1].trim();
            value = handleFormat(matchedVar);
            if (value === undefined) {
              if (typeof missingInterpolationHandler === 'function') {
                var temp = missingInterpolationHandler(str, match, options);
                value = typeof temp === 'string' ? temp : '';
              } else if (options && options.hasOwnProperty(matchedVar)) {
                value = '';
              } else if (skipOnVariables) {
                value = match[0];
                continue;
              } else {
                _this.logger.warn("missed to pass in variable ".concat(matchedVar, " for interpolating ").concat(str));
                value = '';
              }
            } else if (typeof value !== 'string' && !_this.useRawValueToEscape) {
              value = makeString(value);
            }
            var safeValue = todo.safeValue(value);
            str = str.replace(match[0], safeValue);
            if (skipOnVariables) {
              todo.regex.lastIndex += value.length;
              todo.regex.lastIndex -= match[0].length;
            } else {
              todo.regex.lastIndex = 0;
            }
            replaces++;
            if (replaces >= _this.maxReplaces) {
              break;
            }
          }
        });
        return str;
      }
    }, {
      key: "nest",
      value: function nest(str, fc) {
        var _this2 = this;
        var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
        var match;
        var value;
        var clonedOptions;
        function handleHasOptions(key, inheritedOptions) {
          var sep = this.nestingOptionsSeparator;
          if (key.indexOf(sep) < 0) return key;
          var c = key.split(new RegExp("".concat(sep, "[ ]*{")));
          var optionsString = "{".concat(c[1]);
          key = c[0];
          optionsString = this.interpolate(optionsString, clonedOptions);
          var matchedSingleQuotes = optionsString.match(/'/g);
          var matchedDoubleQuotes = optionsString.match(/"/g);
          if (matchedSingleQuotes && matchedSingleQuotes.length % 2 === 0 && !matchedDoubleQuotes || matchedDoubleQuotes.length % 2 !== 0) {
            optionsString = optionsString.replace(/'/g, '"');
          }
          try {
            clonedOptions = JSON.parse(optionsString);
            if (inheritedOptions) clonedOptions = _objectSpread$3(_objectSpread$3({}, inheritedOptions), clonedOptions);
          } catch (e) {
            this.logger.warn("failed parsing options string in nesting for key ".concat(key), e);
            return "".concat(key).concat(sep).concat(optionsString);
          }
          delete clonedOptions.defaultValue;
          return key;
        }
        while (match = this.nestingRegexp.exec(str)) {
          var formatters = [];
          clonedOptions = _objectSpread$3({}, options);
          clonedOptions = clonedOptions.replace && typeof clonedOptions.replace !== 'string' ? clonedOptions.replace : clonedOptions;
          clonedOptions.applyPostProcessor = false;
          delete clonedOptions.defaultValue;
          var doReduce = false;
          if (match[0].indexOf(this.formatSeparator) !== -1 && !/{.*}/.test(match[1])) {
            var r = match[1].split(this.formatSeparator).map(function (elem) {
              return elem.trim();
            });
            match[1] = r.shift();
            formatters = r;
            doReduce = true;
          }
          value = fc(handleHasOptions.call(this, match[1].trim(), clonedOptions), clonedOptions);
          if (value && match[0] === str && typeof value !== 'string') return value;
          if (typeof value !== 'string') value = makeString(value);
          if (!value) {
            this.logger.warn("missed to resolve ".concat(match[1], " for nesting ").concat(str));
            value = '';
          }
          if (doReduce) {
            value = formatters.reduce(function (v, f) {
              return _this2.format(v, f, options.lng, _objectSpread$3(_objectSpread$3({}, options), {}, {
                interpolationkey: match[1].trim()
              }));
            }, value.trim());
          }
          str = str.replace(match[0], value);
          this.regexp.lastIndex = 0;
        }
        return str;
      }
    }]);
    return Interpolator;
  }();

  function ownKeys$2(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
  function _objectSpread$2(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys$2(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys$2(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
  function parseFormatStr(formatStr) {
    var formatName = formatStr.toLowerCase().trim();
    var formatOptions = {};
    if (formatStr.indexOf('(') > -1) {
      var p = formatStr.split('(');
      formatName = p[0].toLowerCase().trim();
      var optStr = p[1].substring(0, p[1].length - 1);
      if (formatName === 'currency' && optStr.indexOf(':') < 0) {
        if (!formatOptions.currency) formatOptions.currency = optStr.trim();
      } else if (formatName === 'relativetime' && optStr.indexOf(':') < 0) {
        if (!formatOptions.range) formatOptions.range = optStr.trim();
      } else {
        var opts = optStr.split(';');
        opts.forEach(function (opt) {
          if (!opt) return;
          var _opt$split = opt.split(':'),
            _opt$split2 = _toArray(_opt$split),
            key = _opt$split2[0],
            rest = _opt$split2.slice(1);
          var val = rest.join(':').trim().replace(/^'+|'+$/g, '');
          if (!formatOptions[key.trim()]) formatOptions[key.trim()] = val;
          if (val === 'false') formatOptions[key.trim()] = false;
          if (val === 'true') formatOptions[key.trim()] = true;
          if (!isNaN(val)) formatOptions[key.trim()] = parseInt(val, 10);
        });
      }
    }
    return {
      formatName: formatName,
      formatOptions: formatOptions
    };
  }
  function createCachedFormatter(fn) {
    var cache = {};
    return function invokeFormatter(val, lng, options) {
      var key = lng + JSON.stringify(options);
      var formatter = cache[key];
      if (!formatter) {
        formatter = fn(lng, options);
        cache[key] = formatter;
      }
      return formatter(val);
    };
  }
  var Formatter = function () {
    function Formatter() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      _classCallCheck(this, Formatter);
      this.logger = baseLogger.create('formatter');
      this.options = options;
      this.formats = {
        number: createCachedFormatter(function (lng, options) {
          var formatter = new Intl.NumberFormat(lng, options);
          return function (val) {
            return formatter.format(val);
          };
        }),
        currency: createCachedFormatter(function (lng, options) {
          var formatter = new Intl.NumberFormat(lng, _objectSpread$2(_objectSpread$2({}, options), {}, {
            style: 'currency'
          }));
          return function (val) {
            return formatter.format(val);
          };
        }),
        datetime: createCachedFormatter(function (lng, options) {
          var formatter = new Intl.DateTimeFormat(lng, _objectSpread$2({}, options));
          return function (val) {
            return formatter.format(val);
          };
        }),
        relativetime: createCachedFormatter(function (lng, options) {
          var formatter = new Intl.RelativeTimeFormat(lng, _objectSpread$2({}, options));
          return function (val) {
            return formatter.format(val, options.range || 'day');
          };
        }),
        list: createCachedFormatter(function (lng, options) {
          var formatter = new Intl.ListFormat(lng, _objectSpread$2({}, options));
          return function (val) {
            return formatter.format(val);
          };
        })
      };
      this.init(options);
    }
    _createClass(Formatter, [{
      key: "init",
      value: function init(services) {
        var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
          interpolation: {}
        };
        var iOpts = options.interpolation;
        this.formatSeparator = iOpts.formatSeparator ? iOpts.formatSeparator : iOpts.formatSeparator || ',';
      }
    }, {
      key: "add",
      value: function add(name, fc) {
        this.formats[name.toLowerCase().trim()] = fc;
      }
    }, {
      key: "addCached",
      value: function addCached(name, fc) {
        this.formats[name.toLowerCase().trim()] = createCachedFormatter(fc);
      }
    }, {
      key: "format",
      value: function format(value, _format, lng, options) {
        var _this = this;
        var formats = _format.split(this.formatSeparator);
        var result = formats.reduce(function (mem, f) {
          var _parseFormatStr = parseFormatStr(f),
            formatName = _parseFormatStr.formatName,
            formatOptions = _parseFormatStr.formatOptions;
          if (_this.formats[formatName]) {
            var formatted = mem;
            try {
              var valOptions = options && options.formatParams && options.formatParams[options.interpolationkey] || {};
              var l = valOptions.locale || valOptions.lng || options.locale || options.lng || lng;
              formatted = _this.formats[formatName](mem, l, _objectSpread$2(_objectSpread$2(_objectSpread$2({}, formatOptions), options), valOptions));
            } catch (error) {
              _this.logger.warn(error);
            }
            return formatted;
          } else {
            _this.logger.warn("there was no format function for ".concat(formatName));
          }
          return mem;
        }, value);
        return result;
      }
    }]);
    return Formatter;
  }();

  function ownKeys$1(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
  function _objectSpread$1(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys$1(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys$1(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
  function _createSuper$1(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$1(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
  function _isNativeReflectConstruct$1() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
  function removePending(q, name) {
    if (q.pending[name] !== undefined) {
      delete q.pending[name];
      q.pendingCount--;
    }
  }
  var Connector = function (_EventEmitter) {
    _inherits(Connector, _EventEmitter);
    var _super = _createSuper$1(Connector);
    function Connector(backend, store, services) {
      var _this;
      var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
      _classCallCheck(this, Connector);
      _this = _super.call(this);
      if (isIE10) {
        EventEmitter.call(_assertThisInitialized(_this));
      }
      _this.backend = backend;
      _this.store = store;
      _this.services = services;
      _this.languageUtils = services.languageUtils;
      _this.options = options;
      _this.logger = baseLogger.create('backendConnector');
      _this.waitingReads = [];
      _this.maxParallelReads = options.maxParallelReads || 10;
      _this.readingCalls = 0;
      _this.maxRetries = options.maxRetries >= 0 ? options.maxRetries : 5;
      _this.retryTimeout = options.retryTimeout >= 1 ? options.retryTimeout : 350;
      _this.state = {};
      _this.queue = [];
      if (_this.backend && _this.backend.init) {
        _this.backend.init(services, options.backend, options);
      }
      return _this;
    }
    _createClass(Connector, [{
      key: "queueLoad",
      value: function queueLoad(languages, namespaces, options, callback) {
        var _this2 = this;
        var toLoad = {};
        var pending = {};
        var toLoadLanguages = {};
        var toLoadNamespaces = {};
        languages.forEach(function (lng) {
          var hasAllNamespaces = true;
          namespaces.forEach(function (ns) {
            var name = "".concat(lng, "|").concat(ns);
            if (!options.reload && _this2.store.hasResourceBundle(lng, ns)) {
              _this2.state[name] = 2;
            } else if (_this2.state[name] < 0) ; else if (_this2.state[name] === 1) {
              if (pending[name] === undefined) pending[name] = true;
            } else {
              _this2.state[name] = 1;
              hasAllNamespaces = false;
              if (pending[name] === undefined) pending[name] = true;
              if (toLoad[name] === undefined) toLoad[name] = true;
              if (toLoadNamespaces[ns] === undefined) toLoadNamespaces[ns] = true;
            }
          });
          if (!hasAllNamespaces) toLoadLanguages[lng] = true;
        });
        if (Object.keys(toLoad).length || Object.keys(pending).length) {
          this.queue.push({
            pending: pending,
            pendingCount: Object.keys(pending).length,
            loaded: {},
            errors: [],
            callback: callback
          });
        }
        return {
          toLoad: Object.keys(toLoad),
          pending: Object.keys(pending),
          toLoadLanguages: Object.keys(toLoadLanguages),
          toLoadNamespaces: Object.keys(toLoadNamespaces)
        };
      }
    }, {
      key: "loaded",
      value: function loaded(name, err, data) {
        var s = name.split('|');
        var lng = s[0];
        var ns = s[1];
        if (err) this.emit('failedLoading', lng, ns, err);
        if (data) {
          this.store.addResourceBundle(lng, ns, data);
        }
        this.state[name] = err ? -1 : 2;
        var loaded = {};
        this.queue.forEach(function (q) {
          pushPath(q.loaded, [lng], ns);
          removePending(q, name);
          if (err) q.errors.push(err);
          if (q.pendingCount === 0 && !q.done) {
            Object.keys(q.loaded).forEach(function (l) {
              if (!loaded[l]) loaded[l] = {};
              var loadedKeys = q.loaded[l];
              if (loadedKeys.length) {
                loadedKeys.forEach(function (ns) {
                  if (loaded[l][ns] === undefined) loaded[l][ns] = true;
                });
              }
            });
            q.done = true;
            if (q.errors.length) {
              q.callback(q.errors);
            } else {
              q.callback();
            }
          }
        });
        this.emit('loaded', loaded);
        this.queue = this.queue.filter(function (q) {
          return !q.done;
        });
      }
    }, {
      key: "read",
      value: function read(lng, ns, fcName) {
        var _this3 = this;
        var tried = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
        var wait = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : this.retryTimeout;
        var callback = arguments.length > 5 ? arguments[5] : undefined;
        if (!lng.length) return callback(null, {});
        if (this.readingCalls >= this.maxParallelReads) {
          this.waitingReads.push({
            lng: lng,
            ns: ns,
            fcName: fcName,
            tried: tried,
            wait: wait,
            callback: callback
          });
          return;
        }
        this.readingCalls++;
        var resolver = function resolver(err, data) {
          _this3.readingCalls--;
          if (_this3.waitingReads.length > 0) {
            var next = _this3.waitingReads.shift();
            _this3.read(next.lng, next.ns, next.fcName, next.tried, next.wait, next.callback);
          }
          if (err && data && tried < _this3.maxRetries) {
            setTimeout(function () {
              _this3.read.call(_this3, lng, ns, fcName, tried + 1, wait * 2, callback);
            }, wait);
            return;
          }
          callback(err, data);
        };
        var fc = this.backend[fcName].bind(this.backend);
        if (fc.length === 2) {
          try {
            var r = fc(lng, ns);
            if (r && typeof r.then === 'function') {
              r.then(function (data) {
                return resolver(null, data);
              })["catch"](resolver);
            } else {
              resolver(null, r);
            }
          } catch (err) {
            resolver(err);
          }
          return;
        }
        return fc(lng, ns, resolver);
      }
    }, {
      key: "prepareLoading",
      value: function prepareLoading(languages, namespaces) {
        var _this4 = this;
        var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
        var callback = arguments.length > 3 ? arguments[3] : undefined;
        if (!this.backend) {
          this.logger.warn('No backend was added via i18next.use. Will not load resources.');
          return callback && callback();
        }
        if (typeof languages === 'string') languages = this.languageUtils.toResolveHierarchy(languages);
        if (typeof namespaces === 'string') namespaces = [namespaces];
        var toLoad = this.queueLoad(languages, namespaces, options, callback);
        if (!toLoad.toLoad.length) {
          if (!toLoad.pending.length) callback();
          return null;
        }
        toLoad.toLoad.forEach(function (name) {
          _this4.loadOne(name);
        });
      }
    }, {
      key: "load",
      value: function load(languages, namespaces, callback) {
        this.prepareLoading(languages, namespaces, {}, callback);
      }
    }, {
      key: "reload",
      value: function reload(languages, namespaces, callback) {
        this.prepareLoading(languages, namespaces, {
          reload: true
        }, callback);
      }
    }, {
      key: "loadOne",
      value: function loadOne(name) {
        var _this5 = this;
        var prefix = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
        var s = name.split('|');
        var lng = s[0];
        var ns = s[1];
        this.read(lng, ns, 'read', undefined, undefined, function (err, data) {
          if (err) _this5.logger.warn("".concat(prefix, "loading namespace ").concat(ns, " for language ").concat(lng, " failed"), err);
          if (!err && data) _this5.logger.log("".concat(prefix, "loaded namespace ").concat(ns, " for language ").concat(lng), data);
          _this5.loaded(name, err, data);
        });
      }
    }, {
      key: "saveMissing",
      value: function saveMissing(languages, namespace, key, fallbackValue, isUpdate) {
        var options = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : {};
        var clb = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : function () {};
        if (this.services.utils && this.services.utils.hasLoadedNamespace && !this.services.utils.hasLoadedNamespace(namespace)) {
          this.logger.warn("did not save key \"".concat(key, "\" as the namespace \"").concat(namespace, "\" was not yet loaded"), 'This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!');
          return;
        }
        if (key === undefined || key === null || key === '') return;
        if (this.backend && this.backend.create) {
          var opts = _objectSpread$1(_objectSpread$1({}, options), {}, {
            isUpdate: isUpdate
          });
          var fc = this.backend.create.bind(this.backend);
          if (fc.length < 6) {
            try {
              var r;
              if (fc.length === 5) {
                r = fc(languages, namespace, key, fallbackValue, opts);
              } else {
                r = fc(languages, namespace, key, fallbackValue);
              }
              if (r && typeof r.then === 'function') {
                r.then(function (data) {
                  return clb(null, data);
                })["catch"](clb);
              } else {
                clb(null, r);
              }
            } catch (err) {
              clb(err);
            }
          } else {
            fc(languages, namespace, key, fallbackValue, clb, opts);
          }
        }
        if (!languages || !languages[0]) return;
        this.store.addResource(languages[0], namespace, key, fallbackValue);
      }
    }]);
    return Connector;
  }(EventEmitter);

  function get() {
    return {
      debug: false,
      initImmediate: true,
      ns: ['translation'],
      defaultNS: ['translation'],
      fallbackLng: ['dev'],
      fallbackNS: false,
      supportedLngs: false,
      nonExplicitSupportedLngs: false,
      load: 'all',
      preload: false,
      simplifyPluralSuffix: true,
      keySeparator: '.',
      nsSeparator: ':',
      pluralSeparator: '_',
      contextSeparator: '_',
      partialBundledLanguages: false,
      saveMissing: false,
      updateMissing: false,
      saveMissingTo: 'fallback',
      saveMissingPlurals: true,
      missingKeyHandler: false,
      missingInterpolationHandler: false,
      postProcess: false,
      postProcessPassResolved: false,
      returnNull: true,
      returnEmptyString: true,
      returnObjects: false,
      joinArrays: false,
      returnedObjectHandler: false,
      parseMissingKeyHandler: false,
      appendNamespaceToMissingKey: false,
      appendNamespaceToCIMode: false,
      overloadTranslationOptionHandler: function handle(args) {
        var ret = {};
        if (_typeof(args[1]) === 'object') ret = args[1];
        if (typeof args[1] === 'string') ret.defaultValue = args[1];
        if (typeof args[2] === 'string') ret.tDescription = args[2];
        if (_typeof(args[2]) === 'object' || _typeof(args[3]) === 'object') {
          var options = args[3] || args[2];
          Object.keys(options).forEach(function (key) {
            ret[key] = options[key];
          });
        }
        return ret;
      },
      interpolation: {
        escapeValue: true,
        format: function format(value, _format, lng, options) {
          return value;
        },
        prefix: '{{',
        suffix: '}}',
        formatSeparator: ',',
        unescapePrefix: '-',
        nestingPrefix: '$t(',
        nestingSuffix: ')',
        nestingOptionsSeparator: ',',
        maxReplaces: 1000,
        skipOnVariables: true
      }
    };
  }
  function transformOptions(options) {
    if (typeof options.ns === 'string') options.ns = [options.ns];
    if (typeof options.fallbackLng === 'string') options.fallbackLng = [options.fallbackLng];
    if (typeof options.fallbackNS === 'string') options.fallbackNS = [options.fallbackNS];
    if (options.supportedLngs && options.supportedLngs.indexOf('cimode') < 0) {
      options.supportedLngs = options.supportedLngs.concat(['cimode']);
    }
    return options;
  }

  function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
  function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
  function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
  function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
  function noop() {}
  function bindMemberFunctions(inst) {
    var mems = Object.getOwnPropertyNames(Object.getPrototypeOf(inst));
    mems.forEach(function (mem) {
      if (typeof inst[mem] === 'function') {
        inst[mem] = inst[mem].bind(inst);
      }
    });
  }
  var I18n = function (_EventEmitter) {
    _inherits(I18n, _EventEmitter);
    var _super = _createSuper(I18n);
    function I18n() {
      var _this;
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var callback = arguments.length > 1 ? arguments[1] : undefined;
      _classCallCheck(this, I18n);
      _this = _super.call(this);
      if (isIE10) {
        EventEmitter.call(_assertThisInitialized(_this));
      }
      _this.options = transformOptions(options);
      _this.services = {};
      _this.logger = baseLogger;
      _this.modules = {
        external: []
      };
      bindMemberFunctions(_assertThisInitialized(_this));
      if (callback && !_this.isInitialized && !options.isClone) {
        if (!_this.options.initImmediate) {
          _this.init(options, callback);
          return _possibleConstructorReturn(_this, _assertThisInitialized(_this));
        }
        setTimeout(function () {
          _this.init(options, callback);
        }, 0);
      }
      return _this;
    }
    _createClass(I18n, [{
      key: "init",
      value: function init() {
        var _this2 = this;
        var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        var callback = arguments.length > 1 ? arguments[1] : undefined;
        if (typeof options === 'function') {
          callback = options;
          options = {};
        }
        if (!options.defaultNS && options.defaultNS !== false && options.ns) {
          if (typeof options.ns === 'string') {
            options.defaultNS = options.ns;
          } else if (options.ns.indexOf('translation') < 0) {
            options.defaultNS = options.ns[0];
          }
        }
        var defOpts = get();
        this.options = _objectSpread(_objectSpread(_objectSpread({}, defOpts), this.options), transformOptions(options));
        if (this.options.compatibilityAPI !== 'v1') {
          this.options.interpolation = _objectSpread(_objectSpread({}, defOpts.interpolation), this.options.interpolation);
        }
        if (options.keySeparator !== undefined) {
          this.options.userDefinedKeySeparator = options.keySeparator;
        }
        if (options.nsSeparator !== undefined) {
          this.options.userDefinedNsSeparator = options.nsSeparator;
        }
        function createClassOnDemand(ClassOrObject) {
          if (!ClassOrObject) return null;
          if (typeof ClassOrObject === 'function') return new ClassOrObject();
          return ClassOrObject;
        }
        if (!this.options.isClone) {
          if (this.modules.logger) {
            baseLogger.init(createClassOnDemand(this.modules.logger), this.options);
          } else {
            baseLogger.init(null, this.options);
          }
          var formatter;
          if (this.modules.formatter) {
            formatter = this.modules.formatter;
          } else if (typeof Intl !== 'undefined') {
            formatter = Formatter;
          }
          var lu = new LanguageUtil(this.options);
          this.store = new ResourceStore(this.options.resources, this.options);
          var s = this.services;
          s.logger = baseLogger;
          s.resourceStore = this.store;
          s.languageUtils = lu;
          s.pluralResolver = new PluralResolver(lu, {
            prepend: this.options.pluralSeparator,
            compatibilityJSON: this.options.compatibilityJSON,
            simplifyPluralSuffix: this.options.simplifyPluralSuffix
          });
          if (formatter && (!this.options.interpolation.format || this.options.interpolation.format === defOpts.interpolation.format)) {
            s.formatter = createClassOnDemand(formatter);
            s.formatter.init(s, this.options);
            this.options.interpolation.format = s.formatter.format.bind(s.formatter);
          }
          s.interpolator = new Interpolator(this.options);
          s.utils = {
            hasLoadedNamespace: this.hasLoadedNamespace.bind(this)
          };
          s.backendConnector = new Connector(createClassOnDemand(this.modules.backend), s.resourceStore, s, this.options);
          s.backendConnector.on('*', function (event) {
            for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
              args[_key - 1] = arguments[_key];
            }
            _this2.emit.apply(_this2, [event].concat(args));
          });
          if (this.modules.languageDetector) {
            s.languageDetector = createClassOnDemand(this.modules.languageDetector);
            if (s.languageDetector.init) s.languageDetector.init(s, this.options.detection, this.options);
          }
          if (this.modules.i18nFormat) {
            s.i18nFormat = createClassOnDemand(this.modules.i18nFormat);
            if (s.i18nFormat.init) s.i18nFormat.init(this);
          }
          this.translator = new Translator(this.services, this.options);
          this.translator.on('*', function (event) {
            for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
              args[_key2 - 1] = arguments[_key2];
            }
            _this2.emit.apply(_this2, [event].concat(args));
          });
          this.modules.external.forEach(function (m) {
            if (m.init) m.init(_this2);
          });
        }
        this.format = this.options.interpolation.format;
        if (!callback) callback = noop;
        if (this.options.fallbackLng && !this.services.languageDetector && !this.options.lng) {
          var codes = this.services.languageUtils.getFallbackCodes(this.options.fallbackLng);
          if (codes.length > 0 && codes[0] !== 'dev') this.options.lng = codes[0];
        }
        if (!this.services.languageDetector && !this.options.lng) {
          this.logger.warn('init: no languageDetector is used and no lng is defined');
        }
        var storeApi = ['getResource', 'hasResourceBundle', 'getResourceBundle', 'getDataByLanguage'];
        storeApi.forEach(function (fcName) {
          _this2[fcName] = function () {
            var _this2$store;
            return (_this2$store = _this2.store)[fcName].apply(_this2$store, arguments);
          };
        });
        var storeApiChained = ['addResource', 'addResources', 'addResourceBundle', 'removeResourceBundle'];
        storeApiChained.forEach(function (fcName) {
          _this2[fcName] = function () {
            var _this2$store2;
            (_this2$store2 = _this2.store)[fcName].apply(_this2$store2, arguments);
            return _this2;
          };
        });
        var deferred = defer();
        var load = function load() {
          var finish = function finish(err, t) {
            if (_this2.isInitialized && !_this2.initializedStoreOnce) _this2.logger.warn('init: i18next is already initialized. You should call init just once!');
            _this2.isInitialized = true;
            if (!_this2.options.isClone) _this2.logger.log('initialized', _this2.options);
            _this2.emit('initialized', _this2.options);
            deferred.resolve(t);
            callback(err, t);
          };
          if (_this2.languages && _this2.options.compatibilityAPI !== 'v1' && !_this2.isInitialized) return finish(null, _this2.t.bind(_this2));
          _this2.changeLanguage(_this2.options.lng, finish);
        };
        if (this.options.resources || !this.options.initImmediate) {
          load();
        } else {
          setTimeout(load, 0);
        }
        return deferred;
      }
    }, {
      key: "loadResources",
      value: function loadResources(language) {
        var _this3 = this;
        var callback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : noop;
        var usedCallback = callback;
        var usedLng = typeof language === 'string' ? language : this.language;
        if (typeof language === 'function') usedCallback = language;
        if (!this.options.resources || this.options.partialBundledLanguages) {
          if (usedLng && usedLng.toLowerCase() === 'cimode') return usedCallback();
          var toLoad = [];
          var append = function append(lng) {
            if (!lng) return;
            var lngs = _this3.services.languageUtils.toResolveHierarchy(lng);
            lngs.forEach(function (l) {
              if (toLoad.indexOf(l) < 0) toLoad.push(l);
            });
          };
          if (!usedLng) {
            var fallbacks = this.services.languageUtils.getFallbackCodes(this.options.fallbackLng);
            fallbacks.forEach(function (l) {
              return append(l);
            });
          } else {
            append(usedLng);
          }
          if (this.options.preload) {
            this.options.preload.forEach(function (l) {
              return append(l);
            });
          }
          this.services.backendConnector.load(toLoad, this.options.ns, function (e) {
            if (!e && !_this3.resolvedLanguage && _this3.language) _this3.setResolvedLanguage(_this3.language);
            usedCallback(e);
          });
        } else {
          usedCallback(null);
        }
      }
    }, {
      key: "reloadResources",
      value: function reloadResources(lngs, ns, callback) {
        var deferred = defer();
        if (!lngs) lngs = this.languages;
        if (!ns) ns = this.options.ns;
        if (!callback) callback = noop;
        this.services.backendConnector.reload(lngs, ns, function (err) {
          deferred.resolve();
          callback(err);
        });
        return deferred;
      }
    }, {
      key: "use",
      value: function use(module) {
        if (!module) throw new Error('You are passing an undefined module! Please check the object you are passing to i18next.use()');
        if (!module.type) throw new Error('You are passing a wrong module! Please check the object you are passing to i18next.use()');
        if (module.type === 'backend') {
          this.modules.backend = module;
        }
        if (module.type === 'logger' || module.log && module.warn && module.error) {
          this.modules.logger = module;
        }
        if (module.type === 'languageDetector') {
          this.modules.languageDetector = module;
        }
        if (module.type === 'i18nFormat') {
          this.modules.i18nFormat = module;
        }
        if (module.type === 'postProcessor') {
          postProcessor.addPostProcessor(module);
        }
        if (module.type === 'formatter') {
          this.modules.formatter = module;
        }
        if (module.type === '3rdParty') {
          this.modules.external.push(module);
        }
        return this;
      }
    }, {
      key: "setResolvedLanguage",
      value: function setResolvedLanguage(l) {
        if (!l || !this.languages) return;
        if (['cimode', 'dev'].indexOf(l) > -1) return;
        for (var li = 0; li < this.languages.length; li++) {
          var lngInLngs = this.languages[li];
          if (['cimode', 'dev'].indexOf(lngInLngs) > -1) continue;
          if (this.store.hasLanguageSomeTranslations(lngInLngs)) {
            this.resolvedLanguage = lngInLngs;
            break;
          }
        }
      }
    }, {
      key: "changeLanguage",
      value: function changeLanguage(lng, callback) {
        var _this4 = this;
        this.isLanguageChangingTo = lng;
        var deferred = defer();
        this.emit('languageChanging', lng);
        var setLngProps = function setLngProps(l) {
          _this4.language = l;
          _this4.languages = _this4.services.languageUtils.toResolveHierarchy(l);
          _this4.resolvedLanguage = undefined;
          _this4.setResolvedLanguage(l);
        };
        var done = function done(err, l) {
          if (l) {
            setLngProps(l);
            _this4.translator.changeLanguage(l);
            _this4.isLanguageChangingTo = undefined;
            _this4.emit('languageChanged', l);
            _this4.logger.log('languageChanged', l);
          } else {
            _this4.isLanguageChangingTo = undefined;
          }
          deferred.resolve(function () {
            return _this4.t.apply(_this4, arguments);
          });
          if (callback) callback(err, function () {
            return _this4.t.apply(_this4, arguments);
          });
        };
        var setLng = function setLng(lngs) {
          if (!lng && !lngs && _this4.services.languageDetector) lngs = [];
          var l = typeof lngs === 'string' ? lngs : _this4.services.languageUtils.getBestMatchFromCodes(lngs);
          if (l) {
            if (!_this4.language) {
              setLngProps(l);
            }
            if (!_this4.translator.language) _this4.translator.changeLanguage(l);
            if (_this4.services.languageDetector && _this4.services.languageDetector.cacheUserLanguage) _this4.services.languageDetector.cacheUserLanguage(l);
          }
          _this4.loadResources(l, function (err) {
            done(err, l);
          });
        };
        if (!lng && this.services.languageDetector && !this.services.languageDetector.async) {
          setLng(this.services.languageDetector.detect());
        } else if (!lng && this.services.languageDetector && this.services.languageDetector.async) {
          if (this.services.languageDetector.detect.length === 0) {
            this.services.languageDetector.detect().then(setLng);
          } else {
            this.services.languageDetector.detect(setLng);
          }
        } else {
          setLng(lng);
        }
        return deferred;
      }
    }, {
      key: "getFixedT",
      value: function getFixedT(lng, ns, keyPrefix) {
        var _this5 = this;
        var fixedT = function fixedT(key, opts) {
          var options;
          if (_typeof(opts) !== 'object') {
            for (var _len3 = arguments.length, rest = new Array(_len3 > 2 ? _len3 - 2 : 0), _key3 = 2; _key3 < _len3; _key3++) {
              rest[_key3 - 2] = arguments[_key3];
            }
            options = _this5.options.overloadTranslationOptionHandler([key, opts].concat(rest));
          } else {
            options = _objectSpread({}, opts);
          }
          options.lng = options.lng || fixedT.lng;
          options.lngs = options.lngs || fixedT.lngs;
          options.ns = options.ns || fixedT.ns;
          options.keyPrefix = options.keyPrefix || keyPrefix || fixedT.keyPrefix;
          var keySeparator = _this5.options.keySeparator || '.';
          var resultKey;
          if (options.keyPrefix && Array.isArray(key)) {
            resultKey = key.map(function (k) {
              return "".concat(options.keyPrefix).concat(keySeparator).concat(k);
            });
          } else {
            resultKey = options.keyPrefix ? "".concat(options.keyPrefix).concat(keySeparator).concat(key) : key;
          }
          return _this5.t(resultKey, options);
        };
        if (typeof lng === 'string') {
          fixedT.lng = lng;
        } else {
          fixedT.lngs = lng;
        }
        fixedT.ns = ns;
        fixedT.keyPrefix = keyPrefix;
        return fixedT;
      }
    }, {
      key: "t",
      value: function t() {
        var _this$translator;
        return this.translator && (_this$translator = this.translator).translate.apply(_this$translator, arguments);
      }
    }, {
      key: "exists",
      value: function exists() {
        var _this$translator2;
        return this.translator && (_this$translator2 = this.translator).exists.apply(_this$translator2, arguments);
      }
    }, {
      key: "setDefaultNamespace",
      value: function setDefaultNamespace(ns) {
        this.options.defaultNS = ns;
      }
    }, {
      key: "hasLoadedNamespace",
      value: function hasLoadedNamespace(ns) {
        var _this6 = this;
        var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        if (!this.isInitialized) {
          this.logger.warn('hasLoadedNamespace: i18next was not initialized', this.languages);
          return false;
        }
        if (!this.languages || !this.languages.length) {
          this.logger.warn('hasLoadedNamespace: i18n.languages were undefined or empty', this.languages);
          return false;
        }
        var lng = this.resolvedLanguage || this.languages[0];
        var fallbackLng = this.options ? this.options.fallbackLng : false;
        var lastLng = this.languages[this.languages.length - 1];
        if (lng.toLowerCase() === 'cimode') return true;
        var loadNotPending = function loadNotPending(l, n) {
          var loadState = _this6.services.backendConnector.state["".concat(l, "|").concat(n)];
          return loadState === -1 || loadState === 2;
        };
        if (options.precheck) {
          var preResult = options.precheck(this, loadNotPending);
          if (preResult !== undefined) return preResult;
        }
        if (this.hasResourceBundle(lng, ns)) return true;
        if (!this.services.backendConnector.backend || this.options.resources && !this.options.partialBundledLanguages) return true;
        if (loadNotPending(lng, ns) && (!fallbackLng || loadNotPending(lastLng, ns))) return true;
        return false;
      }
    }, {
      key: "loadNamespaces",
      value: function loadNamespaces(ns, callback) {
        var _this7 = this;
        var deferred = defer();
        if (!this.options.ns) {
          callback && callback();
          return Promise.resolve();
        }
        if (typeof ns === 'string') ns = [ns];
        ns.forEach(function (n) {
          if (_this7.options.ns.indexOf(n) < 0) _this7.options.ns.push(n);
        });
        this.loadResources(function (err) {
          deferred.resolve();
          if (callback) callback(err);
        });
        return deferred;
      }
    }, {
      key: "loadLanguages",
      value: function loadLanguages(lngs, callback) {
        var deferred = defer();
        if (typeof lngs === 'string') lngs = [lngs];
        var preloaded = this.options.preload || [];
        var newLngs = lngs.filter(function (lng) {
          return preloaded.indexOf(lng) < 0;
        });
        if (!newLngs.length) {
          if (callback) callback();
          return Promise.resolve();
        }
        this.options.preload = preloaded.concat(newLngs);
        this.loadResources(function (err) {
          deferred.resolve();
          if (callback) callback(err);
        });
        return deferred;
      }
    }, {
      key: "dir",
      value: function dir(lng) {
        if (!lng) lng = this.resolvedLanguage || (this.languages && this.languages.length > 0 ? this.languages[0] : this.language);
        if (!lng) return 'rtl';
        var rtlLngs = ['ar', 'shu', 'sqr', 'ssh', 'xaa', 'yhd', 'yud', 'aao', 'abh', 'abv', 'acm', 'acq', 'acw', 'acx', 'acy', 'adf', 'ads', 'aeb', 'aec', 'afb', 'ajp', 'apc', 'apd', 'arb', 'arq', 'ars', 'ary', 'arz', 'auz', 'avl', 'ayh', 'ayl', 'ayn', 'ayp', 'bbz', 'pga', 'he', 'iw', 'ps', 'pbt', 'pbu', 'pst', 'prp', 'prd', 'ug', 'ur', 'ydd', 'yds', 'yih', 'ji', 'yi', 'hbo', 'men', 'xmn', 'fa', 'jpr', 'peo', 'pes', 'prs', 'dv', 'sam', 'ckb'];
        var languageUtils = this.services && this.services.languageUtils || new LanguageUtil(get());
        return rtlLngs.indexOf(languageUtils.getLanguagePartFromCode(lng)) > -1 || lng.toLowerCase().indexOf('-arab') > 1 ? 'rtl' : 'ltr';
      }
    }, {
      key: "cloneInstance",
      value: function cloneInstance() {
        var _this8 = this;
        var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        var callback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : noop;
        var mergedOptions = _objectSpread(_objectSpread(_objectSpread({}, this.options), options), {
          isClone: true
        });
        var clone = new I18n(mergedOptions);
        if (options.debug !== undefined || options.prefix !== undefined) {
          clone.logger = clone.logger.clone(options);
        }
        var membersToCopy = ['store', 'services', 'language'];
        membersToCopy.forEach(function (m) {
          clone[m] = _this8[m];
        });
        clone.services = _objectSpread({}, this.services);
        clone.services.utils = {
          hasLoadedNamespace: clone.hasLoadedNamespace.bind(clone)
        };
        clone.translator = new Translator(clone.services, clone.options);
        clone.translator.on('*', function (event) {
          for (var _len4 = arguments.length, args = new Array(_len4 > 1 ? _len4 - 1 : 0), _key4 = 1; _key4 < _len4; _key4++) {
            args[_key4 - 1] = arguments[_key4];
          }
          clone.emit.apply(clone, [event].concat(args));
        });
        clone.init(mergedOptions, callback);
        clone.translator.options = clone.options;
        clone.translator.backendConnector.services.utils = {
          hasLoadedNamespace: clone.hasLoadedNamespace.bind(clone)
        };
        return clone;
      }
    }, {
      key: "toJSON",
      value: function toJSON() {
        return {
          options: this.options,
          store: this.store,
          language: this.language,
          languages: this.languages,
          resolvedLanguage: this.resolvedLanguage
        };
      }
    }]);
    return I18n;
  }(EventEmitter);
  _defineProperty(I18n, "createInstance", function () {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var callback = arguments.length > 1 ? arguments[1] : undefined;
    return new I18n(options, callback);
  });
  var instance = I18n.createInstance();
  instance.createInstance = I18n.createInstance;

  instance.createInstance;
  instance.dir;
  instance.init;
  instance.loadResources;
  instance.reloadResources;
  instance.use;
  instance.changeLanguage;
  instance.getFixedT;
  instance.t;
  instance.exists;
  instance.setDefaultNamespace;
  instance.hasLoadedNamespace;
  instance.loadNamespaces;
  instance.loadLanguages;

  var adm_div$1 = "administrative division";
  var building_name$1 = "building name";
  var prompt$1 = " for screenreder users. Press Spase or Enter for usage.";
  var purpose_name$1 = "purpose";
  var subtype_name$1 = "subtype";
  var tts$2 = "speech syntesys";
  var floor$1 = [
  	"floor",
  	"floors"
  ];
  var degree$1 = [
  	"degree",
  	"degrees"
  ];
  var hour$1 = [
  	"hour",
  	"hours"
  ];
  var item_one$1 = "{{count}} item";
  var item_other = "{{count}} items";
  var en = {
  	adm_div: adm_div$1,
  	building_name: building_name$1,
  	prompt: prompt$1,
  	purpose_name: purpose_name$1,
  	subtype_name: subtype_name$1,
  	"to the": "to the ",
  	tts: tts$2,
  	floor: floor$1,
  	degree: degree$1,
  	hour: hour$1,
  	item_one: item_one$1,
  	item_other: item_other,
  	"km ": [
  	"kilometer",
  	"kilometers"
  ],
  	"m ": [
  	"meter",
  	"meters"
  ]
  };

  var language = "язык";
  var globals = "общие";
  var East = "восток";
  var Fri = "пятница";
  var Mon = "понедельник";
  var North = "север";
  var Northeast = "северо-восток";
  var Northwest = "северо-запад";
  var Sat = "суббота";
  var South = "юг";
  var Southeast = "юго-восток";
  var Southwest = "юго-запад";
  var Sun = "воскресенье";
  var Thu = "четверг";
  var Tue = "вторник";
  var Wed = "среда";
  var West = "запад";
  var accuracy = "точность";
  var actions$1 = "действия";
  var additionally = "дополнительно";
  var address = "адрес";
  var adm_div = "территория";
  var again = "снова";
  var attraction = "ориентиры";
  var authors = "авторство";
  var azimuth = "азимут";
  var back = "назад";
  var building = "здания";
  var building_name = "название здания";
  var checked = "отмечено";
  var clock = "часы";
  var collapse = "свернуть";
  var comment = "комментарий";
  var contacts = "контакты";
  var dates = "даты";
  var degrees = "градусы";
  var description = "описание";
  var details = "подробности";
  var disable = "отключить";
  var disabled = "недоступно";
  var distance = "дистанция";
  var down = "вниз";
  var enable = "включить";
  var enabled = "включено";
  var environs = "объекты вокруг";
  var expand = "развернуть";
  var find = "искать";
  var floors = "этажи";
  var from = "из";
  var geodata = "геоданные";
  var geolocation = "геолокация";
  var heading = "направление";
  var help = "справка";
  var left = "влево";
  var length = "длина";
  var locations = "локации";
  var menu = "меню";
  var name = "название";
  var noname = "без названия";
  var organisation = "Организации в здании ";
  var phone = "телефон";
  var pitch = "высота тона";
  var position = "позиция";
  var postcode = "почтовый индекс";
  var project = "проект";
  var prompt = " для пользователей скринридеров. Нажмите пробел или энтер для просмотра.";
  var purpose_name = "назначение";
  var radius = "радиус";
  var rate = "скорость";
  var right = "вправо";
  var rubrics = "рубрики";
  var schedule = "расписание";
  var search = "поиск";
  var selected = "выбрано";
  var settings = "настройки";
  var speed = "скорость";
  var status = "статус";
  var step = "шаг";
  var street = "улица";
  var subtype_name = "тип объекта";
  var tts$1 = "синтез речи";
  var up = "вверх";
  var volume = "громкость";
  var windrose = "стороны света";
  var zoomIn = "приблизить ";
  var zoomOut = "отдалить ";
  var floor = [
  	"этаж",
  	"этажа",
  	"этажей"
  ];
  var degree = [
  	"градус",
  	"градуса",
  	"градусов"
  ];
  var hour = [
  	"час",
  	"часа",
  	"часов"
  ];
  var item = "элемент";
  var item_one = "{{count}} элемент";
  var item_few = "{{count}} элемента";
  var item_many = "{{count}} элементов";
  var km = [
  	"километр",
  	"километра",
  	"километров"
  ];
  var m = [
  	"метр",
  	"метра",
  	"метров"
  ];
  var ru = {
  	language: language,
  	globals: globals,
  	East: East,
  	Fri: Fri,
  	Mon: Mon,
  	North: North,
  	Northeast: Northeast,
  	Northwest: Northwest,
  	Sat: Sat,
  	South: South,
  	Southeast: Southeast,
  	Southwest: Southwest,
  	Sun: Sun,
  	Thu: Thu,
  	Tue: Tue,
  	Wed: Wed,
  	West: West,
  	accuracy: accuracy,
  	actions: actions$1,
  	additionally: additionally,
  	address: address,
  	adm_div: adm_div,
  	again: again,
  	attraction: attraction,
  	authors: authors,
  	azimuth: azimuth,
  	"azimuth format": "формат азимута",
  	back: back,
  	building: building,
  	building_name: building_name,
  	"center by": "центр карты к позиции ",
  	checked: checked,
  	"choice action": "выбор действия",
  	"choice value": "выбор значения",
  	clock: clock,
  	collapse: collapse,
  	comment: comment,
  	contacts: contacts,
  	dates: dates,
  	degrees: degrees,
  	description: description,
  	details: details,
  	disable: disable,
  	"disable accessability": "Отключить специальные возможности",
  	disabled: disabled,
  	distance: distance,
  	down: down,
  	enable: enable,
  	"enable accessability": "Включить специальные возможности",
  	enabled: enabled,
  	environs: environs,
  	expand: expand,
  	"false": "нет",
  	find: find,
  	floors: floors,
  	"for blinds": "для незрячих",
  	from: from,
  	geodata: geodata,
  	"geodata source": "источник геоданных",
  	geolocation: geolocation,
  	heading: heading,
  	help: help,
  	"include in request": "включать в запрос",
  	"last message": "крайнее сообщение",
  	left: left,
  	length: length,
  	"list view": "просмотр списка",
  	locations: locations,
  	"map bound": "граница карты",
  	"map hight": "высота карты ",
  	"map view": "просмотр карты",
  	"map width": "ширина карты ",
  	menu: menu,
  	"main menu": "главное меню",
  	name: name,
  	"no data": "нет данных",
  	noname: noname,
  	"not found": "ничего не найдено",
  	organisation: organisation,
  	phone: phone,
  	pitch: pitch,
  	position: position,
  	"position off the map": "Позиция за границей видимой области карты ",
  	postcode: postcode,
  	project: project,
  	prompt: prompt,
  	purpose_name: purpose_name,
  	radius: radius,
  	rate: rate,
  	right: right,
  	rubrics: rubrics,
  	schedule: schedule,
  	search: search,
  	"search results": "результаты поиска",
  	selected: selected,
  	"select value": "выбор значения",
  	settings: settings,
  	"sort order": "порядок сортировки",
  	speed: speed,
  	status: status,
  	step: step,
  	"step in": "увеличить шаг ",
  	"step out": "уменьшить шаг ",
  	street: street,
  	subtype_name: subtype_name,
  	"to center": "позицию в центр карты ",
  	"to the": "на ",
  	"true": "да",
  	tts: tts$1,
  	"under cursor": "под курсором",
  	up: up,
  	"use tts": "включить синтез речи",
  	"User denied geolocation prompt": "нет разрешения на геолокацию. Проверьте настройки браузера для этого сайта.",
  	volume: volume,
  	windrose: windrose,
  	"zoom ": "зум ",
  	zoomIn: zoomIn,
  	zoomOut: zoomOut,
  	floor: floor,
  	degree: degree,
  	hour: hour,
  	item: item,
  	item_one: item_one,
  	item_few: item_few,
  	item_many: item_many,
  	km: km,
  	m: m
  };

  /*

  */

  const locales = {
  	en: {
  		translation: en
  	},
  	ru: {
  		translation: ru
  	}
  };

  const supported = Object.keys(locales);
  Object.defineProperty(supported, 'has', {
  	value: function(lang) {
  		lang = lang.slice(0, 2);
  		return this.filter(l=>lang === l.slice(0, 2)).length
  	},
  	innumerable: false
  });

  const context = window.speechSynthesis;
  const tts = {
  	get context(){ return context },
  	get busy() {
  		return context.speaking || context.paused || context.pending
  	},
  	cancel() { context.cancel(); },
  	speak(source) {
  		if (!context) return;
  		if (this.busy) {
  			if (source.priority || this._fraze.priority === 1) {
  				this._fraze.addEventListener('ended', this.speak.bind(this, source));
  			} else {
  				this.cancel();
  			}
  		}

  		this._fraze = new window.SpeechSynthesisUtterance();
  		context.speak(Object.assign(this._fraze, source));
  		return this._fraze;
  	}
  };
  if (context) {
  	context.getVoices();
  	context.onvoiceschanged = function() {
  	//setTimeout(()=>fw.log(tts.convolve(context.getVoices())), 0)
  	};
  }

  tts.convolve = function convolve(v) {
  	return v.reduce(function(memo, item) {
  		const lang = item.lang.slice(0, 2);
  		if (!memo[lang]) memo[lang] = [];
  		memo[lang].push(item);
  		return memo;
  	}, {});
  };

  const AC = window.AudioContext || window.webkitAudioContext;
  let audioContext = null;

  class AudioPlayer {

  	constructor(options) {
  		if (!audioContext && AC) audioContext = new AC();

  		this.options = Object.assign(defaults, options);
  		this._buffers = {};
  		this.play = this.play.bind(this);
  		this.options.base64 && this.preload(this.options.base64);
  	}

  	loadFile(id, url) {
  		url = url || this.options.folder + id + this.options.format;
  		return audioBufferFromURL(url);
  	}

  	preload(source) {
  		if (typeof(source) === 'string' && source.indexOf('.json') !==-1) {
  			this._base64hashe = fetch(source)
  			.then(res=>res.json())
  			.then(function(res){
  				for (let k in res) this._buffers[k] = audioBufferFromBase64(res[k]);
  				return this._buffers;
  			}.bind(this));
  		}
  		if (typeof(source) === 'object') {
  			for (let k in source) this._buffers[k] = audioBufferFromBase64(source[k]);
  			this._base64hashe = Promise.resolve( this._buffers);
  		}
  	}

  	getBuffer(id) {
  		if (this._buffers[id]) return this._buffers[id];
  		if (this._base64hashe) {
  			return  this._base64hashe.then(function(res){
  				if (id in res) return res[id];
  				else return this._buffers[id] = this.loadFile(id)
  			}.bind(this))
  			.finally(function(){delete this._base64hashe;}.bind(this))
  		} else return this._buffers[id] = this.loadFile(id)
  	}

  	play(id, options) {
  		options = Object.assign({}, this.options.playback, options);
  		return this.getBuffer(id)
  		.then(function(buffer) {
  			return playBuffer(buffer, options)
  		})
  	}
  	
  }

  function playBuffer(buffer, options) { // (AudioBuffer, Object)
  	if (!audioContext) {
  		throw new TypeError('Invalid AudioContext.')
  	}
  	if (!(buffer instanceof AudioBuffer)) {
  		throw new TypeError('Invalid AudioBuffer.')
  	}

  	options =  options || {};
  	const gain = audioContext.createGain();
  	gain.gain.value = options.volume || 1;
  	const source = audioContext.createBufferSource();
  	source.buffer = buffer;
  	source.connect(gain);
  	if (options.position) {
  		const panner = audioContext.createPanner();
  		options.panner && Object.assign(panner, options.panner);
  		panner.setPosition.apply(panner, options.position);
  		gain.connect(panner);
  		panner.connect(audioContext.destination);
  	} else gain.connect(audioContext.destination);
  	(typeof options.onended === 'function') && source.addEventListener('ended', options.onended);
  	source.start();
  	return source
  }

  function decode(audioData) {
  	if (!audioContext) throw new Error('AudioContext not supported.')
  	return new Promise(function(resolve, reject) {
  		audioContext.decodeAudioData(audioData, resolve, reject);
  	})
  }

  function arrayBufferToBase64(buffer) {
  	const bytes = new window.Uint8Array(buffer);
  	const len = buffer.byteLength;
  	let binary = '';
  	for (let i = 0; i < len; i++) {
  		binary += String.fromCharCode(bytes[i]);
  	}
  	return window.btoa(binary);
  }

  function base64ToArrayBuffer(buffer) {
  	const binary = window.atob(buffer);
  	buffer = new window.ArrayBuffer(binary.length);
  	const bytes = new window.Uint8Array(buffer);
  	for (let i = 0; i < buffer.byteLength; i++) {
  		bytes[i] = binary.charCodeAt(i) & 0xFF;
  	}
  	return buffer;
  }

  function audioBufferFromBase64(data) {
  		return decode(base64ToArrayBuffer(data))
  }

  function audioBufferFromURL(url) {
  	return fetch(url)
  	.then(res=>res.arrayBuffer())
  	.then(decode)
  }

  function base64FromURL(url) {
  	return fetch(url)
  	.then(res=>res.arrayBuffer())
  	.then(arrayBufferToBase64)
  }

  const defaults= {
  	base64: 'soundslib.json',
  	folder: '',
  	format: '',
  	playback: {
  		volume: 1,
  		position: [0, 0, 0],
  		panner: {
  			distanceModel: 'linear',
  			maxDistance: 1000,
  			rolloffFactor: 1
  		}
  	}
  };

  class ProgressIndicator {
  	constructor(){
  		this.signal = this.signal.bind(this);
  		this.int = null;
  		this.progress = 0;
  		this.octava=3;
  		this.gamma = 'CDEFGAB';
  	}
  	start() {
  		this.progress=0;
  		this.octava=3;
  		this.signal();
  		this.int = setInterval(this.signal, 250);
  	}
  	signal() {
  		nota(this.gamma[this.progress]+this.octava);
  		this.progress++;
  		if(this.progress === 6) {
  			this.progress=0; 
  			this.octava++;
  		}
  		if (this.octava === 7) this.octava = 3;
  	}
  	stop() {
  		clearInterval(this.int);
  	}
  }


  function nota(freq) {
  	freq = frequency(freq);
  	if (!audioContext && AC) audioContext = new AC();
  	const oscillator = audioContext.createOscillator();
  	const gainNode = audioContext.createGain();

  	oscillator.connect(gainNode);
  	gainNode.connect(audioContext.destination);
  	oscillator.type = 'sine';
  	oscillator.frequency.value = freq;
  	gainNode.gain.setValueAtTime(0, audioContext.currentTime);
  	gainNode.gain.linearRampToValueAtTime(1, audioContext.currentTime + 0.01);
              
  	oscillator.start(audioContext.currentTime);

  	gainNode.gain.exponentialRampToValueAtTime(0.001, audioContext.currentTime + 0.1);
  	oscillator.stop(audioContext.currentTime + 0.1);
  }


  function frequency(key) {
  	const note = key[0].toUpperCase(),
  	octave = parseInt(key[1]),
  	sharp = key[2] == '#' ? true : false;
  	if (sharp) {
  		return controctave[note + '#'] * Math.pow(2, octave-1);
  	} else {
  		return controctave[note] * Math.pow(2, octave-1);
  	}
  }
  const controctave = {
  	'C': 32.703,
  	'C#': 34.648,
  	'D': 36.708,
  	'D#': 38.891,
  	'E': 41.203,
  	'F': 43.654,
  	'F#': 46.249,
  	'G': 48.999,
  	'G#': 51.913,
  	'A': 55,
  	'A#': 58.27,
  	'B': 61.735,
  };

  var soundkit = /*#__PURE__*/Object.freeze({
    __proto__: null,
    AudioPlayer: AudioPlayer,
    base64FromURL: base64FromURL,
    ProgressIndicator: ProgressIndicator,
    nota: nota
  });

  const dom = {
  	$: function $(v) {
  		return v instanceof Element ? v : document.querySelector(v)
  	},
  	$$: function $$(v) {
  		return document.querySelectorAll(v)
  	},
  	create: function create(tagName, setup, target){
  		if(!tagName || !is.string(tagName)) throw new TypeError('DomUtil.create: Invalid tag name');
  		let el = document.createElement(tagName);
  		switch(typeof setup){
  			case "object": 
  			for(let key in setup) el[key]=setup[key];
  			break;
  			case "function":
  			setup(el);
  			break;
  			case "null" : break;
  			default: el.innerHTML=setup;
  		}
  		if(is.element(target)) target.appendChild(el);
  		return el;
  	},

  	style: function style(el, css) {
  		if (!is.element(el)) throw new TypeError('(domUtil.style) Argument 0: HTML element expected');
  		if (is.string(css)) css = strToObj(css, ':', ';');
  		if (!is.plainObject(css)) throw new TypeError('(domUtil.style) Argument 1: Object or String expected');
  		for (let k in css) el.style[k] = css[k];
  		return el
  	},

  	connected: function connected(el) {
  		return ((el instanceof HTMLElement) && domUtil.connected(el.parentNode)) || el instanceof HTMLDocument
  	},

  	on: function on(target, e, h) {
  		(typeof e === 'string' && typeof h === 'function') && target.addEventListener(e, h);
  		(typeof e === 'object') && Object.entries(e).forEach(function(i){
  			target.addEventListener(i[0], i[1]);
  		});
  		return this
  	},
  	off: function off(target, e, h) {
  		(typeof e === 'string' && typeof h === 'function') && target.removeEventListener(e, h);
  		(typeof e === 'object') && Object.entries(e).forEach(function(i){
  			target.removeEventListener(i[0], i[1]);
  		});
  		return this
  	},
  	dispatch: function dispatch(target, type, data) {
  		if (target instanceof HTMLElement && typeof type === 'string') {
  			let event = new Event(type, {bubbles: true, cancelable: true});
  			Object.assign(event, data || {});
  			return target.dispatchEvent(event);
  		}
  	},
  };

  const math = {
  	round(num, precision) {
  		const m = precision ? Math.pow(10, precision) : 1;
  		return num && Math.round(num*m)/m;
  	},

  	clamp(t,e,i) {
  		let o=e[1],n=e[0],r=o-n;return t===o&&i?t:((t-n)%r+r)%r+n
  	},

  	range(min, max, step) {
  		min = min || 0;
  		max = max || 10;
  		step = step || 1;
  		let precision = (''+step%1).length - 2;
  		if (precision< 0) precision=0;
  		const result = [];
  		for (let i = min; i<= max; i+=step) {
  			result.push(+i.toFixed(precision));
  		}
  		return result;
  	},
  };

  function getClass(obj) {
  return Object.prototype.toString.call(obj).slice(8, -1);
  }
  function is(arg, _class) {
  	return _class === getClass(arg)
  }
  is.element = function isElement(arg) { return arg instanceof Element};
  is.function = function isFunction(arg) { return typeof arg ==='function' };
  is.string = function isString(arg) { return typeof arg ==='string' };
  is.nil = function isNil(arg) { return arg ===undefined || arg ===null };
  is.plainObject = function isPlainObject(arg) { return is(arg, 'Object') && (arg.constructor === Object || arg.constructor === undefined) };
  is.emptyObject = function isEmptyObject(arg) { if(arg && typeof arg === 'object') return Object.keys(arg).length === 0 };
  is.primitive = function isPrimitive(arg) {
  	const type = typeof arg;
  	return !arg || !(type === 'function' || type === 'object')
  };
  is.numeric = function isNumeric(n) {
  	return !isNaN(parseFloat(n)) && isFinite(n);
  };

  function extract(obj, keys){
  	if(is.nil(obj)) return obj;
  	if(!Array.isArray(keys)) {
  		keys=Object.getOwnPropertyNames(obj).concat(Object.getOwnPropertySymbols(obj));
  		keys.push('__proto__');
  	}
  	return keys.reduce(function(memo, i){
  		try{memo[i.toString()]=obj[i];}
  		catch(err){
  			try{memo[i.toString()]=Object.getOwnPropertyDescriptor(obj, i);}
  			catch(err){memo[i.toString()] = err;}
  		}
  		return memo
  	}, Object.create(null));
  }
  function strToObj(s, s1='=', s2='&') {
  	let result = {};
  	typeof s === 'string' && s.split(s2).forEach(function(i) {
  		try {
  		let [key, val=''] = i.split(s1);
  		if (!key) return;
  		result[key] = val;
  		} catch(err) {
  			err.item = i;
  			result._errors ? result._errors.push(err) : result._errors = [err];
  		}
  	});
  	return result
  }

  function  template(props = {}) {
  	return `
	<style>
	* {
		-moz-box-sizing: border-box;
		box-sizing: border-box;
	}

	div {
		margin: 0;
	}

	:host {
		display: block;
		max-width: var(--verbalizer-width, 40em);
		border: 2px outset black;
		border-radius: 0.5em;
		padding: calc(0.5em - 2px);
		line-height: 1.5;
		font-family: Arial, Verdana;
		font-size: var(--verbalizer-font-size, 16px);
		background: #a0a0a0;
	}


	:host(.top-left) {
		position: fixed;
		top: 0;
		left: 0;
	}
	:host(.top-right) {
		position: fixed;
		top: 0;
		right: 0;
	}
	:host(.bottom-right) {
		position: fixed;
		right: 0;
		bottom: 0;
	}
	:host(.bottom-left) {
		position: fixed;
		bottom: 0;
		left: 0;
	}
	:host(.outside) {
		position: absolute;
		top: -500px;
		left: 0;
		max-height: 480px;
		overflow: hidden;
	}

	#panel {
		position: relative;
		display: flex;
		justify-content: flex-start;
		align-items: flex-start;
		background: #a0a0a0;
	}

	#console {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 3em;
		height: 3em;
		margin-right: 1em;
		border: 2px outset #000000;
		border-radius: 50%;
		background-color: #ffffff;
		overflow: hidden;
	}

	#console::before {
		content: attr(data-glyph);
	}

	#console:hover {
		color: #00ff00;
	}

	#console:focus {
		border: 2px inset #000000;
	}

	slot[name="header"] {
		flex: 1;
		display: flex;
		justify-content: center;
	}

	[data-out="cursor"] {
		max-height: 4.5em;
		background-color: #ffffff;
		overflow: auto;
	}

	[data-out="status"] {
		border-top: 1px dotted #000000;
	}

	.visually-hidden {
		position: absolute;
		width: 1px;
		height: 1px;
		margin: -1px;
		padding: 0;
		border: 0;
		clip: rect(0 0 0 0);
		overflow: hidden;
	}

	[hidden] {
		display: none;
	}

	[tabindex] {
		cursor: pointer;
	}
</style>

	<div id="panel">
		<div 
		id="console" 
		title="${props.title}"
		data-out="console"
		role="application" 
		tabindex="0" >
			
		</div>
		<div id="informer" class="visually-hidden">
			<div data-out="cursor" aria-live="${props.live || 'polite'}" >${props.cursor || "no data"}</div>
			<div data-out="status" aria-live="${props.live || 'polite'}" >${props.status || "waiting your commands..."}</div>
		</div>
		<slot name="header"></slot>
	</div>
	<slot></slot>
	`
  }
  /*
   "${props.consoleBlur || '😃'}";
  */

  /*

  */
  const config = {
  	globals: {
  		lang: {
  			name: 'language',
  			type: 'enum',
  			attr: 'lang',
  			values: ['en', 'ru'],
  			default: 'en'
  		},
  		layout: {
  			name: 'layout',
  			type: 'enum',
  			attr: 'data-layout',
  			values: ['auto', 'outside', 'top-left', 'top-right', 'bottom-right', 'bottom-left'],
  			default: 'auto'
  		},
  		size: {
  			name: 'size',
  			type: 'enum',
  			attr: 'data-size',
  			values: ['small', 'normal', 'large'],
  			default: 'normal',
  		},
  	},
  	tts: {
  		tts: {
  			name: 'use tts',
  			type: 'enum',
  			attr: 'data-tts-enabled',
  			values: ['screenreader', 'browser'],
  			default: 'screenreader',
  		},
  		volume: {
  			name: 'volume',
  			type: 'range',
  			attr: 'data-tts-volume',
  			min: 0.1,
  			max: 1,
  			step: 0.1,
  			default: 1
  		},
  		pitch: {
  			name: 'pitch',
  			type: 'range',
  			attr: 'data-tts-pitch',
  			min: 0,
  			max: 2,
  			step: 0.1,
  			default: 1
  		},
  		rate: {
  			name: 'rate',
  			type: 'range',
  			attr: 'data-tts-rate',
  			min: 1,
  			max: 3,
  			step: 0.1,
  			default: 1.5
  		}
  	},

  };

  class ObjectiveItem {

  	constructor(data, options) {
  		this.data = data;
  		this.options = options || {};
  		this._name='';
  		this._type='';
  		this.init();
  	}

  	init() {
  		this._type = getClass(this.data);
  		this._name = this.options.key
  		|| this.options.name  
  		|| (this.data && this.data.name)
  		|| 'noname';
  	}

  	get checked() {
  		let ch = this.options.checked || false;
  		return typeof ch === 'function' ? ch(this) : ch
  	}

  	check(v) {
  		if (typeof this.options.checked === 'function') {
  			return this.options.checked(this)
  		}
  		if (is.nil(v)) {
  			this.options.checked = !this.options.checked;
  		} else {
  			this.options.checked = !!v;
  		}
  		return this.options.checked
  	}

  	get selected() {
  		let selected = this.options.selected || false;
  		return typeof selected === 'function' ? selected(this) : selected
  	}

  	select(v) {
  		if (typeof this.options.selected === 'function') {
  			return this.options.selected(this)
  		}
  		if (is.nil(v)) {
  			this.options.selected = !this.options.selected;
  		} else {
  			this.options.selected = !!v;
  		}
  		return this.options.selected
  	}

  	get app() {
  		return this.options.app || this.collection.app
  	}

  	get collection() {
  		return this.options.collection
  	}

  	get name() {
  		return this._name
  	}

  	get key() {
  		return this.options.key
  	}

  	get parent() {
  		return this.options.parent || this.collection.parent;
  	}

  	get path() {
  		return ancestry(this).map(i=>i.key)
  	}

  	get root() {
  		return ancestry(this)[0].collection;
  	}

  	get info() {
  		if ('info' in this.options) {
  			return this.options.info
  		}
  		if (is.primitive(this.data) && !is.nil(this.data)) {
  			return ' : ' + this.data.toString()
  		}
  		return ''
  	}

  	get keys() {
  		const index=[];
  		if (this.data) {
  			for(let i in this.data) index.push(i);
  		}
  		return index
  	}

  	get size() {
  		return getClass(this.data) === 'Collection' ? this.data.size : 
  		(this.data && typeof(this.data)==='object') ? this.keys.length : 
  		(this.data && this.data.length) ? this.data.length : ''
  	}
  get xsize() {
  		return  is.nil(this.data) ? '' : 
  		Object.getOwnPropertyNames(this.data).length + Object.getOwnPropertySymbols(this.data).length;
  	}

  	get details() {
  			return this._details
  	}

  	detalize() {
  		if(!this._details) {
  			
  		this._details = this.collection.branch({
  			purpose: 'detail view',
  			cyclic: false,
  			data: {
  				open: new ObjectiveItem(this.action.bind(this), {name: this.summary()}),
  				info: new ObjectiveItem(this.expand.bind(this), {
  					name: this._type,
  					info: ` ${(this.data && this.data.name) || ""} [${this.size}]`
  				}),
  				own: new ObjectiveItem(this.expose.bind(this), {
  					name: 'discover',
  					info: ` [${this.xsize}]`,
  				})
  			}
  		});
  		}
  		return this._details
  	}

  	shift(i) {
  			return this.details ? this.details.shift(i) : this
  	}

  	summary() {
  		const selected = this.selected ? ' selected' : '';
  		const checked = this.checked ? ' checked' : '';
  		return this.name + this.info + selected + checked
  	}

  	toString() {
  		return this.summary()
  	}

  	expand(options) {
  		if (getClass(this.data) === 'Collection') return this.data;
  		if (is.primitive(this.data)) return;
  		
  		options = options || {};
  		const defaults = {
  			name: this.name,
  			data: extract(this.data, this.keys),
  			parent: this
  		};
  		options = Object.assign(defaults, options);
  		if (options.data && typeof options.data === 'object') return this.collection.branch(options)
  	}

  	expose() {
  		try {
  		if (is.nil(this.data)) return;
  		return this.collection.branch({
  			name: this.name,
  			data: extract(this.data),
  			parent: this
  		})
  		}catch(err){
  			return this.expand({data: extract(err)})
  		}
  	}

  	action() {
  		try {
  		return is.function(this.options.action) ? this.options.action(this) :
  		is.function(this.data) ? this.data(this) :
  		this.expand()
  		} catch(err) {
  			err.emitter = this;
  			return this.expand({data: extract(err)})
  		}
  	}

  }ObjectiveItem.prototype[Symbol.toStringTag] = 'ObjectiveItem';

  function ancestry(item, memo) {
  	if (!memo) memo = [];
  	if (!item) return memo.reverse();
  	memo.push(item);
  	return ancestry(item.parent, memo)
  }

  class CollectionItem extends ObjectiveItem {

  /*	constructor(data, options) {
  		this.data = data;
  		this.options = options || {};
  		this._name='';
  		this._type='';
  		this.init()
  	}
  */
  	init() {
  		this._type = (this.data && this.data.type) || getClass(this.data);
  		this._name = this.options.name  
  		|| (this.data && this.data.name)
  		|| this.options.key
  		|| this.data
  		|| this._type 
  		|| 'noname';
  	}

  	get name() {
  		return this.t(this._name)
  	}

  	get info() {
  		if ('info' in this.options) {
  			return this.options.info
  		}
  		if (is.primitive(this.data) && !is.nil(this.data)) {
  			return ' : ' + this.data
  		}
  		return ''
  	}

  	detalize() {}

  	summary() {
  		const selected = this.selected ? ' '+this.t('selected') : '';
  		const checked = this.checked ? ' '+this.t('checked') : '';
  		return this.name + this.info + selected + checked
  	}

  	toString() {
  		return this.summary()
  	}

  	expand(options) {
  		if (getClass(this.data) === 'Collection') return this.data;
  		if (is.primitive(this.data)) return;
  		options = options || {};
  		const defaults = {
  			name: this.name,
  			data: (options.allProps || this.options.allProps) ? extract(this.data) : this.data,
  			parent: this
  		};
  		options = Object.assign(defaults, options);
  		if (options.data && typeof options.data === 'object') return this.collection.branch(options)
  	}

  	action() {
  		try {
  		return is.function(this.options.action) ? this.options.action(this) :
  		is.function(this.data) ? this.data(this) :
  		this.expand()
  		} catch(err) {
  			err.emitter = this;
  			return err
  		}
  	}

  	t() {
  		return (is.function(this.app.t) && this.app.t(...arguments)) || arguments[0]
  	}

  }CollectionItem.prototype[Symbol.toStringTag] = 'CollectionItem';

  class ControlItem extends CollectionItem {

  	init() {
  		this.select = this.select.bind(this);
  		this._type = this.data.type;
  		this._name =   this.data.name
  		|| this.options.key;
  	}

  	get value() {
  		return this.app.getAttribute(this.data.attr) || this.data.default;
  	}
  	set value(v) {
  		this.app.setAttribute(this.data.attr, v);
  		return v
  	}
  	get name() {
  		return this.t(this._name)
  	}

  	get info() {
  		return ' : ' + this.tValue
  	}

  	action() {
  		if (this.data.disabled) return;
  		if (this.branch) return this.branch;
  		let values;
  		const config = this.data;

  		switch (config.type) {
  			case 'range':
  			values = math.range(config.min, config.max, config.step);
  			break;
  			case 'set':
  			this.multiselect = true;
  			case 'enum':
  			values = config.values;
  			break;
  			default:
  			values = [false, true];
  		}
  		let pointer = 0;
  	values = values.map(function(item, i) {
  		const option = new CollectionItem(item, {
  			type: 'option',
  				name: item.toString(),
  				info: '',
  				action: this.select
  			});
  			const value = this.value;
  			if (value == item || (this.multiselect && value.indexOf(item) !== -1)) {
  				option.select(true);
  				pointer = i;
  			}
  			return option;
  		}, this);

  		this.branch = this.expand({
  			purpose: 'select value',
  			data: values
  		});
  		if (!this.multiselect) this.branch._pointer = pointer;
  		return this.branch
  	}
  	select(item) {
  		if (this.multiselect) {
  			item.select();
  			this.value = item.collection.filter('selected', true)
  			.map(i=>i.data)
  			.join(',');
  			this.app.play(item.selected ? 'open' : 'close');
  		}else {
  			if(item.selected) return;
  			item.collection.getBy('selected', true).select(false);
  			item.select(true);
  			this.value = item.data;
  			this.app.play('check');
  		}
  		return item.collection
  	}
  	get tValue() {
  		if (this.multiselect) {
  			return this.value.split(',')
  			.map(function(item) {
  				return this.t(item)
  			}, this)
  			.join(',')
  		}
  		return this.t(this.value)
  	}

  	toString() {
  		return this.summary()
  	}

  }ControlItem.prototype[Symbol.toStringTag] = 'ControlItem';

  function isItem(o) {
  	return  o && o instanceof ObjectiveItem
  }

  const models = {
  	default: CollectionItem,
  	enum: ControlItem,
  	set: ControlItem,
  	range: ControlItem,
  	control: ControlItem,
  	object: ObjectiveItem,
  	dominfo: ObjectiveItem,
  };

  class Collection {

  	constructor(options) {
  		this.options = Object.assign({
  			name: '',
  			purpose: 'list view',
  			cyclic: true,
  			models: options.precursor && options.precursor.models,
  		}, options);
  		this.setup(this.options.data);
  	}

  	setup(data) {
  		this.clear();
  		if (data && typeof data === 'object') {
  			this._items = Object.entries(data).map(function(item) {
  				return this.createItem(item[1], {
  					collection: this,
  					key: item[0],
  				})
  			}.bind(this));
  			this._pointer = 0;
  		}
  		//this.sort();
  		return this
  	}

  	add(data, options) {
  		this._items.push(this.createItem(data, Object.assign(options || {}, {
  			collection: this,
  		})));
  		return this
  	}

  	clear() {
  		this._items = [];
  		this._pointer = -1;
  		return this
  	}

  	sort(fn) {
  		if (typeof fn === 'function' ) this.options.sort = fn;
  		typeof this.options.sort === 'function' && this._items.sort(this.options.sort);
  		return this
  	}

  	cursor(n) {
  		if (!isNaN(parseInt(n)) && isFinite(n)) {
  			n--;
  			this._pointer = n < 0 ? 0 : n >= this.size ? this.size - 1 : n;
  		}
  		return this._pointer + 1
  	}

  	current() {
  		return this._items[this._pointer]
  	}

  	shift(n) {
  		if (!isNaN(parseInt(n)) && isFinite(n)) {
  			const i = this._pointer + n;
  			this._pointer = this.options.cyclic ? math.clamp(i, [0, this.size]) :
  			i < 0 ? 0 : i >= this.size ? this.size - 1 : i;
  		}
  		return this.current()
  	}

  	next() {
  		return this.shift(1)
  	}

  	prev() {
  return this.shift(-1)
  	}

  	getByIndex(i) {
  		return this._items[i]
  	}

  	getBy(prop, value) {
  		return this.filter(prop, value)[0]
  	}

  	filter(prop, value) {
  		if (!prop || typeof prop !== 'string' || value === undefined) {
  			return []
  		}
  		return this._items.filter(function(item) {
  			return  item[prop] === value;
  		})
  	}

  	status() {
  		return this.t(this.options.name) +'. '+ this.t(this.options.purpose) +': '+ this.t('item', this.size)
  	}

  	info() {
  		const item = this.current();
  		return !item ? this.status() : item + ' ' + this.cursor() +' '+ this.t('from') +' '+ this.size
  	}

  	toString() {
  		return this.status();
  	}

  	t() {
  		return this.app.t(...arguments)
  	}

  	branch(options) {
  		return new Collection(Object.assign(options, {
  			app: this.app,
  			precursor: this
  		}))
  	}

  	createItem(data, options) {
  		options = options || {};
  		if (isItem(data)) {
  			Object.assign(data.options, options);
  			return data
  		}
  	const ItemClass = ( data && this.models[data.type]) 
  	|| this.models[options.type] 
  	|| this.models[this.options.defaultModel] 
  	|| this.models['default'];
  		return new ItemClass(data, options)
  	}

  	get models() {
  		return this.options.models || models;
  	}

  	get size() {
  		return this._items && this._items.length || 0
  	}

  	get app() {
  		return this.options.app
  	}

  	get precursor() {
  		return this.options.precursor
  	}
  set precursor(collection) {
  		return this.options.precursor = collection
  	}

  	get parent() {
  		return this.options.parent
  	}

  }

  Collection.prototype[Symbol.toStringTag] = 'Collection';

  function actions() {

  	return {

  		setAction: function(commands, fn, context) {
  			if (typeof fn !== 'function') {
  				const err = new TypeError('setAction(): Invalid argument. Function expected.');
  				err.emitter = this;
  				err.args = arguments;
  				throw err
  			}
  			if (!this._actions) {
  				this._actions = {};
  			}
  			if (context) {
  				fn = fn.bind(context);
  			}
  			if (!Array.isArray(commands)) {
  				commands = typeof commands === 'string' ? commands.split(',') : [];
  			}
  			commands.forEach(function(k) {
  				this._actions[k] = fn;
  			}, this);
  			return this
  		},

  		getAction: function(command) {
  			if (this._actions && (command in this._actions)) {
  				return this._actions[command]
  			}
  		},

  		run: function(match) {
  			let fn;
  			if (typeof match === 'string') {
  				fn = this.getAction(match);
  			} else if (match && typeof match === 'object') {
  				fn = this.getAction(match.command) 
  				|| this.getAction(match.char);
  			}
  			if (fn) {
  				fn(match);
  				return true
  			}
  			return this.idle(match);
  		},

  		idle: function() {
  			return false
  		},

  		[Symbol.toStringTag]: 'actionset'

  	}

  }

  class Handler {

  	constructor(props) {
  		this.props = props || {};
  		this._init();
  	}

  	_init() {}
  	_start() {}
  	_stop() {}

  	enable(auto) {
  		if (!this.enabled) {
  			if (auto && !this.props.autoStart) return this;
  			this._start();
  			this.props.enabled = true;
  		}
  		 return this
  	}

  	disable(auto) {
  		if (this.enabled) {
  			this._stop();
  			this.props.enabled = false;
  			if (auto) {
  				this.props.autoStart = true;
  			} else {
  				this.props.autoStart = false;
  			}
  		}
  		 return this
  	}

  	toggle() {
  		this.enabled ? this.disable() : this.enable();
  	}

  	get enabled() {
  		return this.props.enabled
  	}

  	get autoStart() {
  		return this.props.autoStart
  	}

  	get app() {
  		return this.props.app
  	}

  }
  Handler.prototype[Symbol.toStringTag] = 'Handler';

  class Controller extends Handler {

  	get hasControl() {
  		return this.app.controller === this
  	}

  }

  Object.assign(Controller.prototype, actions());
  Controller.prototype[Symbol.toStringTag] = 'Controller';

  class Explorer extends Controller{

  	_init() {
  		this.list = this.list.bind(this);
  		this.setAction('Backspace', this.collapse, this);
  		this.setAction('Enter', this.expand, this);
  		this.setAction('Up,Down,PageUp,PageDown,Home,End,Space', this.view, this);
  		this.setAction('Left,Right', this.details, this);
  	}
  	_start() {
  		this.render();
  	}
  render(reset) {
  		if (!this.collection.current() && this.collection.size) {
  			this.collection.cursor(1);
  		}

  		!reset && this.app.play('listview');
  		this.app.echo('status', this.collection.status());
  		this.app.echo('cursor', this.collection.info(), true);
  		return this
  	}

  	view(e) {
  		e = e || {};
  		switch (e.command) {
  			case 'Up' : this.collection.prev(); break;
  			case 'Down' : this.collection.next(); break;
  			case 'PageUp' : this.collection.shift(- this.pageSize); break;
  			case 'PageDown' : this.collection.shift(this.pageSize); break;
  			case 'Home' : this.collection.cursor(1); break;
  			case 'End' : this.collection.cursor(this.collection.size); break;
  		}
  		const item = this.collection.current();
  		e && item && item.details && item.details.cursor(1);
  		this.app.echo('cursor', this.collection.info());
  		return this
  	}

  	details(e) {
  		const item = this.collection.current();
  		if (!item) return this.view();
  		item.detalize();
  		this.app.echo('cursor', item.shift(e.keyCode -38));
  		return this
  	}

  	collapse() {
  		if (this.collection.precursor) {
  			this.collection  =this.collection.precursor ;
  			return this.render()
  		}
  	}

  	expand(e) {
  		e && e.cursor && this.collection.cursor(e.cursor);
  		if (!this.app.debug || (e && e.command === 'Enter')) {
  			return this.open()
  		}
  		const item = this.collection.current();
  		const child = item && item.expand({
  			allProps: e && e.shift
  		});
  		if (child instanceof Collection) {
  			this.list(child);
  		} else {
  			this.app.play('bound');
  			this.view();
  		}
  	}

  	open() {
  		let item = this.collection.current();
  		if (item.details ) item = item.details.current();
  		const res = item && item.action();
  		if (!res) {
  			this.app.play('bound');
  			return this.view();
  		}
  		if (is(res, 'Collection')) {
  			return this.list(res)
  		}
  		if (res instanceof Promise) {
  			return res.then(this.list, this.list)
  		}
  	}

  	list(collection) {
  		if (is(collection, 'Collection')) {
  			if (!collection.precursor) collection.precursor  = this.collection;
  			const restart = this.collection === collection;
  			this.collection = collection;
  			!this.app.hasControl(this) ? this.app.setControl(this) : this.render(restart);
  		}
  		return this
  	}

  	get pageSize() {
  		return this.props.pageSize || 12
  	}

  	get collection() {
  		return this.props.collection
  	}
  	set collection(collection) {
  		return this.props.collection = collection;
  	}
  }

  class Verbalizer extends HTMLElement {
  	
  	constructor() {
  		super();
  		this.i18n = instance.cloneInstance();
  		this.$store = {
  			onclick: onclick.bind(this),
  			consoleHandlers: {
  				keyup: onkeyup.bind(this),
  				keydown: onkeydown.bind(this),
  				focus: onfocus.bind(this),
  				blur: onblur.bind(this)
  			}
  		};
  		
  		this.$store.root = new Collection({
  			app: this,
  			name: 'main menu',
  			data: {
  				settings: config,
  			},
  		});
  		this.$store.handlers = [];
  		this.$store.controllers = {};
  		this.$store.controller = this.$store.controllers.explorer = new Explorer({
  			app: this,
  			collection: this.$store.root
  		});
  		
  		this.$store.actions = actions();
  		//this.$actions.setAction('Space', this.repeat, this);
  		this.$store.actions.setAction('ctrl', tts.cancel);
  		this.$store.actions.setAction('CtrlM', ()=> this.dataset.ttsEnabled = this.dataset.ttsEnabled !== 'browser' ? 'browser' : 'screenreader');
  		this.$store.actions.setAction('CtrlBackspace', ()=>this.$store.controllers.explorer.list(this.$store.root));


  	}
  	connectedCallback() {
  		this.$store._pressedKeys = {};
  		!this.lang && this.setAttribute('lang', window.navigator.language);
  		!this.dataset.ttsEnabled && this.setAttribute('data-tts-enabled', 'screenreader');
  		!this.dataset.glyphIdle && this.setAttribute('data-glyph-idle', '😃');
  		!this.dataset.glyphBusy && this.setAttribute('data-glyph-busy', '');
  		!this.dataset.glyphStandby && this.setAttribute('data-glyph-standby', '😴');
  		if (!this.shadowRoot) {
  			this.attachShadow({mode: 'open'});
  			this.shadowRoot.innerHTML = template({
  				title: this.dataset.prompt,
  				live: this.dataset.ttsEnabled !== 'browser' ? 'polite' : 'none',
  			});
  			this.$ = {};
  			this.shadowRoot.querySelectorAll('[data-out]').forEach(el=>{
  				this.$[el.dataset.out] = el;
  			});
  			this.setAttribute('role', 'region');
  			this.setAttribute('aria-label', 'verbalizer');
  			this.$.console.setAttribute('data-glyph', this.dataset.glyphStandby);
  		}
  		dom.on(this.$.console, this.$store.consoleHandlers);
  		dom.on(this, 'command', this.run);
  //		dom.on(this, 'command', e=>this.$.console.setAttribute('data-glyph', this.dataset.glyphBusy));
  		this.$store.handlers.forEach(h=>h.enable(true));
  		
  	}
  	disconnectedCallback() {
  		this.$store.handlers.forEach(h=>h.disable(true));
  		dom.off(this, 'command', this.run);
  		dom.off(this.$.cursor, 'click', this.$store.onclick);
  	}

  	static get observedAttributes() { return [
  		'lang',
  		'data-layout',
  		'data-size',
  		'data-tts-enabled',
  	];
  	}
  	attributeChangedCallback(name, oldValue, newValue) {
  		switch (name) {
  			case 'data-tts-enabled' :
  			this.shadowRoot && this.shadowRoot.querySelectorAll('[aria-live]')
  			.forEach(el=>el.setAttribute('aria-live', newValue !== 'browser' ? 'polite' : 'none'));
  			break;
  		case 'lang' :
  			if (supported.has(newValue)) {
  				this.i18n.changeLanguage(newValue);
  			} else {
  				console.log(`Language "${newValue}" is not supported`);
  				this.lang = oldValue || 'en';
  			}
  			this.dataset.prompt = this.i18n.t('prompt');
  			break;
  			case 'data-layout' :
  			console.log('event: layout=' + newValue);
  			this.classList.remove(oldValue);
  			newValue !== 'auto' && this.classList.add(newValue);
  			break;
  		}
  	}

  	say(t, priority) {
  		tts.speak({
  			text: t,
  			lang: this.lang,
  			priority: priority,
  			volume: this.dataset.ttsVolume || 1,
  			pitch: this.dataset.ttsPitch || 1,
  			rate: this.dataset.ttsRate || 1.5
  		});
  		return this
  	}

  	echo(view, text, delay) {
  		if (!this.$ || !this.$[view]) return this;
  		this.dataset.ttsEnabled === 'browser' && this.say(text, delay);
  		if(this.$[view].innerHTML === text) text += '.';
  		if (delay) {
  			setTimeout(()=>this.$[view].innerHTML = text, 500);
  			return this
  		}
  		this.$[view].innerHTML = text;
  		return this
  	}

  	t(text, count) {
  		return this.i18n.t(text, {count})
  	}

  	play() {}

  	setControl(controller, props) {
  		if (typeof controller === 'string') {
  			controller = this.$store.controllers[controller];
  		}
  		if (controller instanceof Controller) {
  			this.$store.controller && this.$store.controller.disable();
  			this.$store.controller = controller.enable(props);
  		}
  		return this
  	}

  	getControl() {
  		return this.$store.controller;
  	}

  	hasControl(controller) {
  		return this.$store.controller === controller;
  	}

  	get controller() {
  		return this.$store.controller;
  	}

  	set controller(controller) {
  		return this.$store.controller = controller;
  	}

  	run(e) {
  		try {
  		this.$store.actions.run(e)
  		|| this.$store.controller.run(e);
  		} catch(err) {
  			console.log(err);
  		}
  	}

  	use(handler) {
  		this.$store.handlers.push(handler);
  		this.shadowRoot && handler.enable(true);
  	}

  	dispatch(type, data) {
  		dom.dispatch(this, type, data);
  	}

  	get root() {
  		return this.$store.root;
  	}

  	get [Symbol.toStringTag]() { return 'VerbalizerHTMLCustomElement' } 

  }
  function onclick(e) {
  	e.stopPropagation();
  	this.$.console.focus();
  }

  function onfocus(e) {
  	this.$.console.title = '';
  	this.$.console.setAttribute('data-glyph', this.dataset.glyphIdle);
  	this.$store.controller.enable();
  	dom.dispatch(this, 'console.focus');
  }
  function onblur(e) {
  	this.$store._pressedKeys = {};
  	this.$.console.setAttribute('data-glyph', this.dataset.glyphStandby);
  	this.$.console.title = this.dataset.prompt;
  	this.$store.controller.disable();
  	dom.dispatch(this, 'console.blur');
  }
  function onkeydown(e) {
  	if (e.keyCode !== 9) {
  		e.preventDefault();
  		e.stopPropagation();
  	}
  	if (e.keyCode === 27) return e.target.blur();
  	if (e.keyCode && this.$store._pressedKeys[e.keyCode]) return;
  	this.$store._pressedKeys[e.keyCode] = 1;
  	let event = new CommandEvent(e);
  	if (event.isModKey) return;
  	dom.dispatch(this, 'command', event);
  }
  function onkeyup(e) {
  	this.$store._pressedKeys[e.keyCode] = 0;
  }

  function CommandEvent(e) {
  	this._e = e || {};
  	this.key = this._e.key;
  	this.keyCode = this._e.keyCode;
  	this.glyph = this.key.length === 1 ? this._e.key : (CommandEvent.glyphs[this.keyCode] || '');
  	this.char = CommandEvent.Matches[this.keyCode] || (this._e.key.length === 1 ? String.fromCharCode(this.keyCode) : this.key) || '';
  	this.ctrl = this._e.ctrlKey ? 'Ctrl' : '';
  	this.alt = this._e.altKey ? 'Alt' : '';
  	this.shift = this._e.shiftKey ? 'Shift' : '';
  	this.mode = this.ctrl + this.alt + this.shift;
  	this.command = this.mode + this.char;
  	this.isModKey = this[this.char] ? true : false;
  }
  CommandEvent.Matches = {
  	13: 'Enter',
  	16: 'shift',
  	17: 'ctrl',
  	18: 'alt',
  	32: 'Space',
  	33: 'PageUp',
  	34: 'PageDown',
  	35: 'End',
  	36: 'Home',
  	37: 'Left',
  	38: 'Up',
  	39: 'Right',
  	40: 'Down',
  	46: 'Delete',
  };

  CommandEvent.glyphs = {
  	32: '_',
  	33: '⇑',
  	34: '⇓',
  	35: '⇒',
  	36: '⇐',
  	37: '←',
  	38: '↑',
  	39: '→',
  	40: '↓',
  };

  if (window && !window.customElements.get('web-verbalizer')) {
  	customElements.define('web-verbalizer', Verbalizer);
  	instance.init({
  //		debug: true,
  		lng: 'en',
  		supportedLngs: Object.keys(locales),
  		resources: locales
  	});
  }

  var verbalizer = {
  	dom,
  	math,
  	is,
  	soundkit,
  	Verbalizer,
  	Handler,
  	Controller,
  	Explorer,
  	Collection,
  	actions,
  	create: function() {
  		return document.createElement('web-verbalizer')
  	}
  };

  //export default verbalizer;

  return verbalizer;

}));
