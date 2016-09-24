'use strict'

angular.module('app.home',['ngRoute'])
.config(['$routeProvider', function(rp) {
  rp.when('/home',{
    controller:"homectrl",
    templateUrl:"hom.html"
  })
}])

.controller('homectrl', ['$scope', '$http', function(scope, http){
    http.get('employee.json')
    .success(function(data) {
    scope.emp=data.emp;
  })
    scope.name="home";
}])

// .filter('getMyKeys',function(){
//   return function(e){
//     var a=Object.keys(e);
//     console.log(a);
//   }
// })
.directive('d1', function(){
  return {
      restrict:'EA',
      templateUrl:'home.html',
      scope:{
      emp :'='
            },
    transclude:true,
    controller:'homectrl',
    link: function(scope, attr ,ele){
      scope.tableTh = Object.keys(scope.emp[0]);
    }
  }});
