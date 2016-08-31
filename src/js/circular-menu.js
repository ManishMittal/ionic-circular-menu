angular.module('ionic-circular-menu', [])
.directive("circle", function() {
    return {

               scope: {
                      config:'=',
                    menuFunHandler:'&'
                   },

        restrict: 'E',
      controller:function($scope,$http)
      {
           
          /*$scope.speedDialConfig =$scope.speedDialConfig||{
          status:true,  
          submenus:[
                  {menuicon:'icon ion-social-twitter'},
                  {menuicon:'icon ion-social-facebook'}, 
                  {menuicon:'icon ion-social-googleplus'}, 
                  {menuicon:'icon ion-social-github'},
                  {menuicon:'icon ion-social-whatsapp-outline'},
                  {menuicon:'icon ion-social-buffer-outline'},
                  {menuicon:'icon ion-social-windows'}, 
                  {menuicon:'icon ion-social-html5'}
             
                  ]
    
            }*/

                  $scope.menufun = function(index){
                  $scope.menuFunHandler({data:index});        
                     //if($scope.status) $scope.status = false;
                  },



            //menu click function//
                $scope.toglefun = function($config)
                {               
                var myEl= angular.element( document.querySelector('.m'));
                myEl.toggleClass('active');

                };//end of  menu function

      },

        template : '<div class="m">' 
        +'<div class="btn trigger" ng-click="toglefun()"><span class="line" ></span></div>'
        +'<div class="rotater" ng-repeat="imageObj in config.submenus" ng-click="menufun($index+1);"><div class="btn btn-icon"><i ng-if="!imageObj.img" class="{{imageObj.menuicon}}"></i><img ng-src="{{imageObj.img}}"> </img></div></div>'
     
        +'</div>',
        replace:true
    };
});

