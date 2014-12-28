/*(function($){$.getDefaultPx||($.extend({getDefaultPx:function(){var a=Array.prototype.slice.call(arguments),b=$("body"),d=1,e=!1,f=0,c=$("<div />").css({clear:"both",display:"block",height:"1em",position:"absolute",width:"1em","z-index":"-999"});for(x in a)switch(typeof a[x]){case "boolean":e=a[x];break;case "number":d=a[x];break;case "object":a[x]instanceof jQuery?a[x].length&&(b=a[x]):$(a[x]).prop("tagName")?b=$(a[x]):(a[x].element&&("string"==typeof a[x].element?$("body").find($(a[x].element)).length&&
(b=$(a[x].element)):"object"==typeof a[x].element&&(a[x].element instanceof jQuery?b=a[x].element:$(a[x].element).prop("tagName")&&(b=$(a[x].element)))),a[x].multiplier&&(d=parseFloat(a[x].multiplier)),a[x].asObject&&(e=a[x].asObject));break;case "string":$(a[x]).length&&(b=$(a[x]))}if(1==b.length){if("body"==b.prop("tagName").toLowerCase())return parseFloat($("body").css("font-size"))*d;b.append(c);a=c.height()*d;f=!e?a:{"0":a}}else f=!e?[]:{},b.each(function(a){$(this).append(c);f[a]=c.height()*
d});$(document).find(c).length&&c.remove();return f}}),$.fn.extend({getDefaultPx:function(a,b){return $.getDefaultPx($(this),a,b)}}))})(jQuery);*/
//That's just a plugin that converts em to px via $("body").getDefaultPx();

$(document).ready(function(){
    startBackstretch("game1", {duration:2000, fade:"slow"});
    $(".left-button").backstretch("left.png");
    $(".logo").backstretch("big-logo.png");
    $(".right-button").backstretch("right.png");
    $(".scroll-down-button").backstretch("down.png");
    $(".section2").css({"width":$(window).width(), "height":$(window).height()});
});

var startBackstretch = function(current_game, settings){
    var pictures = {"game1":["http://fc01.deviantart.net/fs20/i/2007/245/0/a/The_Drill_by_tarrzan.jpg", "http://www.rawdlc.com/wp-content/uploads/2014/02/Concept-art-for-video-game-The-deep-3.jpg"]};
    
    $(".section1").backstretch("pause");
    $(".section1").backstretch(pictures[current_game], settings);
    $(".section1").backstretch("resume");
};