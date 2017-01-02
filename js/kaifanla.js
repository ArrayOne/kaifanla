//1建立模板空间
var app=angular.module('myApp',['ng','ngRoute']);

//2配置路由
app.config(function($routeProvider){
  $routeProvider
    .when('/detail',{ templateUrl:'tpl/detail.html'})//用于无参数
    .when('/detail/:obj',{templateUrl:'tpl/detail.html',controller:'detailCtrl'})//用于有参数de情况

    .when('/main',{templateUrl:'tpl/main.html',controller:'mainCtrl'})

    .when('/myOrder',{templateUrl:'tpl/myOrder.html'})

    .when('/order',{templateUrl:'tpl/order.html'})

    .when('/start',{templateUrl:'tpl/start.html'})

    .otherwise({redirectTo:'/start'});
});

//3建立一个父级控制器，便于页面之间的相互跳转(行内注入，在文件压缩时候不易出错)
app.controller('parentCtrl',['$scope','$location',function($scope,$location){
 /*定义一个jump方法，用于跳转页面*/
  $scope.jump=function(arg){
    $location.path(arg);
  }
}]);

//4分别为每个模块，建立控制器，便于数据操作

app.controller('detailCtrl',['$scope','$routeParams','$http',function($scope,$routeParams,$http){
  var tmp=parseInt($routeParams.obj);
   //console.log($scope.tmp);
    //alert(tmp);

  $http.get(`data/dish_getbyid.php?did=${tmp}`).success(function(data){
    $scope.detailObj=data;
   // alert($scope.detailObj);
   // console.log($scope.detailObj);
  });

}]);

app.controller('mainCtrl',['$scope','$http',function($scope,$http){
  $scope.mainGetData=function(begin,kWord){//用于在用户没有输入搜索框的加载数据
    $http.get(`data/dish_getbypage.php?start=${begin}&kw=${kWord}`).success(function(data){
      $scope.list=data.data;
      console.log($scope.list);
      $scope.totalNum=parseInt(data.recordCount);//数据库中的总数据数
    });
  }


  $scope.begin=0;//起始的数据加载点从0 开始
  $scope.keyWord='';//搜索关键字
  //在打开main页面时候，自动加载五条数据到页面上
   $scope.mainGetData($scope.begin,$scope.keyWord);

  /*点击加载更多数据*/
  $scope.loadMore=function(){
    /*每点击一次就加载3个数据*/
    $scope.begin+=3;
    $scope.mainGetData($scope.begin,$scope.keyWord);
  }


  //==========当用户在输入框中输入关键子的是否对应查询数据显示在页面==========
   //1:给回车键监听事件
  document.onkeyup=function(e){

    e.preventDefault();
    //alert(e.keyCode);
    switch(e.keyCode){//输入管键字点击回车键，进行搜索
      case 13: {
        $scope.begin=0;
        $scope.mainGetData($scope.begin,$scope.keyWord);
        //当用户键入搜索字的时候，就获取关键字(如果没有就为空)
        $scope.keyWord=document.querySelector('[name="searchKey"]').value;
      }break;
      default:
    }
  }

}]);



app.controller('myOrderCtrl',['$scope',function(){


}]);

app.controller('orderCtrl',['$scope',function(){


}]);

app.controller('startCtrl',['$scope',function(){


}]);


