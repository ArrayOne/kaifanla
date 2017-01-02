//建立模板空间
var app=angular.module('myApp',['ng','ngRoute']);

//配置路由
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

//建立一个父级控制器，便于页面之间的相互跳转
