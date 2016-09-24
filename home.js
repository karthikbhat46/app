'use strict'

angular.module('app.d1',['ngRoute'])

.directive('d1', function(){
  return {
      restrict:'EA',
      template:`<table padding="" border="2">
                  <tr>
                      <th ng-repeat="x in tableTh">{{x}}</th>
                  </tr>
                  <tr ng-repeat="e in emp">
                    <td ng-repeat="(key,value) in e">
                     {{value}}
                  </td>
                </tr>
                </table>
                `,
      scope:{
      emp :'='
            },
    transclude:true,
    link: function(scope, attr ,ele){
      scope.tableTh = Object.keys(scope.emp[0]);
    }
  }});
