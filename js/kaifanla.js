/**
 * Created by bjwsl-001 on 2016/12/30.
 */

var app = angular.module('kaifanla',['ng','ngRoute']);

app.config(function ($routeProvider) {

//  添加路由
  $routeProvider
    .when('/start',{
      templateUrl:'tpl/start.html',
      controller:'startCtrl'
    })
    .when('/main',{
      templateUrl:'tpl/main.html',
      controller:'mainCtrl'
    })
    .when('/detail',{
      templateUrl:'tpl/detail.html',
      controller:'detailCtrl'
    })
    .when('/order',{
      templateUrl:'tpl/order.html',
      controller:'orderCtrl'
    })
    .when('/myOrder',{
      templateUrl:'tpl/myOrder.html',
      controller:'myOrderCtrl'
    })
    .otherwise({redirectTo:'/start'});
})

app.controller('parentCtrl',
  ['$scope','$location', function ($scope,$location) {

    $scope.jump = function (arg) {
      $location.path(arg);
    }

}]);


app.controller('startCtrl',
  ['$scope', function ($scope) {

}]);

app.controller('mainCtrl',
  ['$scope', function ($scope) {

  }]);

app.controller('detailCtrl',
  ['$scope', function ($scope) {

  }]);

app.controller('orderCtrl',
  ['$scope', function ($scope) {

  }]);

app.controller('myOrderCtrl',
  ['$scope', function ($scope) {

  }]);
