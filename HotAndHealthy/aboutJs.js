$(document).ready(function(){

  var screenHeight = $(window).height();
  var screenWidth = $(window).width();
  console.log("height: " + screenHeight + " && width: " + screenWidth);
  var getThat = document.getElementById('infoContainer');
  var height = getThat.offsetHeight;
  var sizer = window.getComputedStyle(getThat, null). getPropertyValue('font-size');
  var fontSize = parseFloat(sizer);

  var width = document.getElementById('infoContainer').offsetWidth;
  getTextSize = function(){
    sizer = window.getComputedStyle(getThat, null). getPropertyValue('font-size');
    fontSize = parseFloat(sizer);
  }
  getViewPort = function(){
    screenHeight = $(window).height();
    screenWidth = $(window).width();
  }
  getWidth = function(){
    width = document.getElementById('infoContainer').offsetWidth;
  }
  getHeight = function(){
    height = getThat.offsetHeight;
  }
  getViewPort();
  getWidth();
  resizer = function(){
    if( screenHeight < screenWidth ){
    if(width > 980 ){
      getThat.style.fontSize = "30px";
    }
    if(width < 980){
      getThat.style.fontSize = "28px";
    }
    if(width < 775){
      getThat.style.fontSize = "25px";
    }
    if(width < 670){
      getThat.style.fontSize = "23px";
    }
    if(width < 590){
      getThat.style.fontSize = "20px";
    }
    if(width < 275){
      getThat.style.fontSize = "18px";
    }
    if(width < 170){
      getThat.style.fontSize = "14px";
    }
  }
  if( screenHeight > screenWidth){
    getThat.style.fontSize = "25px";
  }
  }
  outputWidth = function(){
    console.log("Width: " + width + " :: Size: " + fontSize);
  }
  window.onload = function(){
    resizer();
  }
  window.onresize = function(event){
    getTextSize();
    getWidth();
    getHeight();
    resizer();
    outputWidth();
  }
});
