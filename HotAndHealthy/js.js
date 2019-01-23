$(document).ready(function(){
var w = window.innerWidth;
var h = window.innerHeight;
console.log("window width: " + w + " and widow height: " + h);
$('#videoContainer').hide();
  window.onload = function(){
    // This is for Desktop
    if(w > h){
    $("#featuredVids").height('90%');
    $("#featuredVids").width('15%');
    document.getElementById("featuredVids").style.left = "3%";
    document.getElementById("featuredVids").style.top = "5%";
    $('#featuredHeader2').hide();
    }
    if(h > w){
      //This is for Mobile
      $("#featuredVids").height('15%');
      $("#featuredVids").width('90%');
      document.getElementById("featuredVids").style.left = "5%";
      document.getElementById("featuredVids").style.top = "3%";
      $('#featuredHeader').hide();
    }
  };

getViewPort = function(){
  screenHeight = $(window).height();
  screenWidth = $(window).width();
}
window.onresize = function(){
  getViewPort();
  if(screenWidth > screenHeight){
      // This is for Desktop
      $("#featuredVids").height('90%');
      $("#featuredVids").width('15%');
      document.getElementById("featuredVids").style.left = "3%";
      document.getElementById("featuredVids").style.top = "5%";
      //new
      $("#videoContainer").height('90%');
      $("#videoContainer").width('70%');
      document.getElementById("videoContainer").style.left = "25%";
      document.getElementById("videoContainer").style.top = "5%";
      //for the video in menu
      $("#blocker").height('25%');
      $("#blocker").width('100%');
      document.getElementById("blocker").style.left = "0%";
      document.getElementById("blocker").style.top = "15%";
  }
  if(screenHeight > screenWidth){
        //This is for Mobile
      $("#featuredVids").height('15%');
      $("#featuredVids").width('90%');
      document.getElementById("featuredVids").style.left = "5%";
      document.getElementById("featuredVids").style.top = "3%";
      // new
      $("#videoContainer").height('70%');
      $("#videoContainer").width('90%');
      document.getElementById("videoContainer").style.left = "5%";
      document.getElementById("videoContainer").style.top = "25%";
      //for the video in menu
      $("#blocker").height('90%');
      $("#blocker").width('30%');
      document.getElementById("blocker").style.left = "1.5%";
      document.getElementById("blocker").style.top = "10%";
  }
}
getViewPort();
if(screenWidth > screenHeight){
        // This is for Desktop
  $("#videoContainer").height('90%');
  $("#videoContainer").width('70%');
  document.getElementById("videoContainer").style.left = "25%";
  document.getElementById("videoContainer").style.top = "5%";
  //for the video in menu
  $("#blocker").height('25%');
  $("#blocker").width('100%');
  document.getElementById("blocker").style.left = "0%";
  document.getElementById("blocker").style.top = "15%";
}
if(screenHeight > screenWidth){
      //This is for Mobile
    $("#videoContainer").height('70%');
    $("#videoContainer").width('90%');
    document.getElementById("videoContainer").style.left = "5%";
    document.getElementById("videoContainer").style.top = "25%";
    //for the video in menu
    $("#blocker").height('100%');
    $("#blocker").width('20%');
    document.getElementById("blocker").style.left = "2.5%";
    document.getElementById("blocker").style.top = "0%";
}
$('#blocker').click(function(){
  $('#videoContainer').show();
});
$('#blocker2').click(function(){
  $('#videoContainer').hide();
});
})
