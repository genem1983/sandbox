var app = angular.module('app-map', []);

//TODO - SECONDS_REGEXP оптимизировать огромный шаблон
var LAT_DEGREES_REGEXP = /^[+-]?([0-9]|[0-8][0-9]|[9][0])$/;
var LONG_DEGREES_REGEXP = /^[+-]?([1][8][0]|[1][0-7][0-9]|[0-9]|[0-8][0-9]|[9][0])$/;
var MINUTES_REGEXP = /^([0-9]|[0-5][0-9])$/;
//var SECONDS_REGEXP = /^(([0-9])\.?[0-9]?[0-9])|(([0-5][0-9])\.?[0-9]?[0-9])$/;
var SECONDS_REGEXP = /^([0-9][\.][0-9]|[0-9][\.][0-9][0-9]|[0-5][0-9]|[0-9]|[0-5][0-9][\.][0-9]|[0-9]|[0-5][0-9][\.][0-9][0-9])$/;
app.directive('checkRegex', function() {
  return {
    require: 'ngModel',
    link: function(scope, elm, attrs, ctrl) {
      ctrl.$validators.checkRegex = function(modelValue, viewValue) {
        if (ctrl.$isEmpty(modelValue)) {
          // consider empty models to be valid
          return true;
        }

        if (LAT_DEGREES_REGEXP.test(viewValue) && attrs.name == "latDegrees") {
          // it is valid
          return true;
        }

        if (LONG_DEGREES_REGEXP.test(viewValue) && attrs.name == "longDegrees") {
          // it is valid
          return true;
        }

        if (MINUTES_REGEXP.test(viewValue) && (attrs.name == "latMinuts" || attrs.name == "longMinuts")) {
          // it is valid
          return true;
        }

        if (SECONDS_REGEXP.test(viewValue) && (attrs.name == "latSeconds" || attrs.name == "longSeconds")) {
          // it is valid
          return true;
        }

        // it is invalid
        return false;
      };
    }
  };
});