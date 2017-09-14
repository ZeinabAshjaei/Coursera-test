
(function () {
'use strict';

  angular.module('LunchCheck' , [])
    .controller('LunchCheckController', LunchCheckController);

    LunchCheckController.$inject = ['$scope'];
    function LunchCheckController($scope) {

      $scope.displayMsg = function () {
        var numOfItems = $scope.itemString.split(',').length;

        if ($scope.itemString === "" || $scope.itemString === undefined || numOfItems == 0)
          $scope.myMsg = "Please Enter Data First!";

        else if(numOfItems <= 3)
            $scope.myMsg = "Enjoy!";
        else
          $scope.myMsg = "Too Much!";
      };
    }
})();
