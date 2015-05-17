var app = angular.module('form-example1', []);


//TODO - Объединить директивы в одну. И выбирать шаблон в зависимости от входящего атрибута
//       Может эти директивы и не понадобятся. Надо потестить без них.
var INTEGER_REGEXP = /^([0-8][0-9]|[9][0])$/;
app.directive('integer', function() {
  return {
    require: 'ngModel',
    link: function(scope, elm, attrs, ctrl) {
      ctrl.$validators.integer = function(modelValue, viewValue) {
        if (ctrl.$isEmpty(modelValue)) {
          // consider empty models to be valid
          return true;
        }

        if (INTEGER_REGEXP.test(viewValue)) {
          // it is valid
          return true;
        }

        // it is invalid
        return false;
      };
    }
  };
});

var MINUTES_REGEXP = /^([0-4][0-9]|[5][9])$/;
app.directive('integer1', function() {
  return {
    require: 'ngModel',
    link: function(scope, elm, attrs, ctrl) {
      ctrl.$validators.integer1 = function(modelValue, viewValue) {
        if (ctrl.$isEmpty(modelValue)) {
          // consider empty models to be valid
          return true;
        }

        if (MINUTES_REGEXP.test(viewValue)) {
          // it is valid
          return true;
        }

        // it is invalid
        return false;
      };
    }
  };
});