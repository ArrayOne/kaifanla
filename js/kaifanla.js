//1建立模板空间
var app=angular.module('myApp',['ng','ngRoute']);

//2配置路由
app.config(function($routeProvider){
  $routeProvider
    .when('/detail',{ templateUrl:'tpl/detail.html'})
    .when('/main',{templateUrl:'tpl/main.html'})
    .when('/myOrder',{templateUrl:'tpl/myOrder.html'})
    .when('/order',{templateUrl:'tpl/order.html'})
    .when('/start',{templateUrl:'tpl/start.html'})
    .otherwise({redirectTo:'/start'})
    .otherwise({redirectTo:'/start'});
});

//3建立一个父级控制器，便于页面之间的相互跳转(行内注入，在文件压缩时候不易出错)
app.controller('parentCtrl',['$scope','$location',function($scope,$location){
 /*定义一个jump方法，用于跳转页面*/
  $scope.jump=function(arg){
    $location.href=arg;
  }
}]);

//4分别为每个模块，建立控制器，便于数据操作

app.controller('detailCtrl',['$scope',function(){


}]);

app.controller('mainCtrl',['$scope',function(){


}]);

app.controller('myOrderCtrl',['$scope',function(){


}]);

app.controller('orderCtrl',['$scope',function(){


}]);

app.controller('startCtrl',['$scope',function(){


}]);


