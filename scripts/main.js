$(window).on("load, resize",function(){$(window).width()<600&&$(".logoimg").removeClass("mr-auto").addClass("mx-auto")});

function gtag(){dataLayer.push(arguments)}window.dataLayer=window.dataLayer||[],gtag("js",new Date),gtag("config","UA-87909907-2");

var shiftWindow=function(){scrollBy(0,-100)};function load(){window.location.hash&&shiftWindow()}window.addEventListener("hashchange",shiftWindow);
