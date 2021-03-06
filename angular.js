// Generated by CoffeeScript 1.11.0
(function() {
  var extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty;

  (function(root, factory) {
    if (typeof define === 'function' && define.amd) {
      return define(['angular', './core'], factory);
    } else if (typeof exports === 'object') {
      return factory(require('angular'), require('./core'));
    } else {
      return factory(root.angular, root.PinejsClientCore);
    }
  })(this, function(angular, PinejsClientCore) {
    var i, len, method, ref, utils;
    utils = {
      isBoolean: function(v) {
        return (v === true || v === false) || (angular.isObject(v) && Object.prototype.toString.call(v) === '[object Boolean]');
      }
    };
    ref = ['isString', 'isNumber', 'isObject', 'isArray'];
    for (i = 0, len = ref.length; i < len; i++) {
      method = ref[i];
      utils[method] = angular[method];
    }
    return angular.module('resin.pinejs', []).service('pinejs-client', [
      '$http', '$q', function($http, Promise) {
        var PinejsClientAngular;
        PinejsClientAngular = (function(superClass) {
          extend(PinejsClientAngular, superClass);

          function PinejsClientAngular() {
            return PinejsClientAngular.__super__.constructor.apply(this, arguments);
          }

          PinejsClientAngular.prototype._request = function(params) {
            params.data = params.body;
            delete params.body;
            return Promise.when($http(params)).then(function(arg) {
              var data;
              data = arg.data;
              return data;
            }, function(arg) {
              var data;
              data = arg.data;
              return Promise.reject(new Error(data));
            });
          };

          return PinejsClientAngular;

        })(PinejsClientCore(utils, Promise));
        return PinejsClientAngular;
      }
    ]);
  });

}).call(this);
