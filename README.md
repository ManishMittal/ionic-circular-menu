# ionic-circular-menu

Sass based Animted and Fully dynamic circular Menu for ionic platform.

## Features

* Multiple submenus
* Mange the click events of submenus
* Dynamic ionic icons and\ or Images
 
## Usage

Get the files from github or install from bower:
```
bower install ionic-circular-menu
```


Include `circular-menu.js` in your index.html:

```html

<script src="lib/ionic-circular-menu/src/js/circular-menu.js"></script>
```
Include `menu.scss` and `ionic-icon.scss`  in your ionic.app.scss: 

```html
@import "www/lib/ionic-circular-menu/src/scss/menu"
@import "www/lib/ionic-circular-menu/src/scss/ionic-icon"


```
Add the module `ionic-circular-menu` to your application dependencies in your app.js

```javascript

angular.module('starter', ['ionic', 'starter.controllers','ionic-circular-menu'])

```

## Usage: ionic-circular-menu

![Alt ion-circular-menu](/src/image/ion-circular-menu.png?raw=true)

And you're ready to go.


## Directives

### circular-menu

This directive will transform the element into a  circular menu . By clicking the main circle icon sub items of circular menu will be opened . You can also handle the click of menu items.
For this to work the following conditions must apply:

* The element you use this directive must be clickable.
* The directive requires an inner attribute "menuHander" to be set on the element to manage the menu item click events.
* The directive expects an inner attribute "config" to define the basic configuration .
* If image will be present icon tag does not show ,otherwise icon will be load by default .

Add the below directive to your template file. 
```
<circle menuFunHandler="menuHander(data);" config="circularMenuConfig"></circle>
```
#### Config
* __status__: Menu open or close status [true/false]
* __submenus__: Submenu objects separated by comma for sub items  . e.g`submenus:[ {menuicon:'icon ion-social-twitter',img:'img/twitter.png'}, {menuicon:'icon ion-social-facebook',img:'img/facebook.png'}]`


## Usage: ion-circular-menu

![Alt ion-circular-menu](/src/image/screen_01.png)
![Alt ion-circular-menu](/src/image/screen_02.png)



Example of config and event override of menu  in controller.
```
 $scope.circularMenuConfig ={
    status:true,
   submenus:[
   {menuicon:'icon ion-social-twitter',img:'image file path'},
  
    {menuicon:'icon ion-social-facebook',img:''}, 
   
   {menuicon:'icon ion-social-googleplus',img:''}, 
   
   {menuicon:'icon ion-social-github',img:''},
   {menuicon:'icon ion-social-whatsapp-outline',img:''},
   {menuicon:'icon ion-social-buffer-outline',img:''},
   {menuicon:'icon ion-social-windows',img:''}, 
   {menuicon:'icon ion-social-html5',img:''}

   ]


    
 }

 $scope.menuHander = function(subMenuindex){ 
    switch(subMenuindex){
        case 1: console.log('twitter'); break;
        case 2: console.log('facebook');break;    
        case 2: console.log('googleplus');break;
        case 4: console.log('github');break;
        case 5: console.log('whatsapp');break;
        case 6: console.log('buffer');break;
        case 7: console.log('window');break;
        case 8: console.log('html');break;
        default : break;
    }
}

```
