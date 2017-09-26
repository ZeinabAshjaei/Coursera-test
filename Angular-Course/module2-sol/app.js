
(function () {
  'use strict';

  angular.module('ShoppingListCheckOff', [])
  .controller('ToBuyController', ToBuyController)
  .controller('AlreadyBoughtController', AlreadyBoughtController)
  .service('ShoppingListCheckOffService', ShoppingListCheckOffService);

  //To Buy list controller
  ToBuyController.$inject = ['ShoppingListCheckOffService'];
  function ToBuyController(ShoppingListCheckOffService){
    var list1 = this;

    list1.toBuy = ShoppingListCheckOffService.getToBuyItems();

    list1.removeItem = function (index) {
      ShoppingListCheckOffService.removeItem(index);
    };

    list1.message = function () {
        return (list1.toBuy == "");
     };
  }

  //bought list controller
  AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
  function AlreadyBoughtController(ShoppingListCheckOffService) {
    var list2 = this;

    list2.bought = ShoppingListCheckOffService.getBoughtItems();

    list2.message = function () {
        return (list2.bought == "");
    }
  }
  //Service function
  function ShoppingListCheckOffService(){
    var service = this;

    var toBuy = [];
    var bought = [];

    service.initialList = [
      {
        name: 'Cookies',
        quantity: '3 bags'
      },
      {
        name: 'Milk',
        quantity: '2 packs'
      },
      {
        name: 'juice',
        quantity: '2 bottles'
      },
      {
        name: 'minced meat',
        quantity: '1 kilo'
      },
      {
        name: 'Chips',
        quantity: '2 packs'
      }
    ];

    service.getToBuyItems = function () {
      toBuy = service.initialList;
      return toBuy;
    };

    service.getBoughtItems = function () {
      return bought;
    };

    service.removeItem = function functionName(index) {
      bought.push(toBuy[index]);
      toBuy.splice(index, 1);
    };
  }

})();
