!function(e){var t=new Array,n=new Array,o=function(){},i=0,a={splashVPos:"35%",loaderVPos:"75%",splashID:"#jpreContent",showSplash:!0,showPercentage:!0,autoClose:!0,closeBtnText:"Start!",onetimeLoad:!1,debugMode:!1,splashFunction:function(){}},r=function(){if(a.onetimeLoad){for(var e,t=document.cookie.split("; "),n=0;e=t[n]&&t[n].split("=");n++)if("jpreLoader"===e.shift())return e.join("=");return!1}return!1},d=function(e){if(a.onetimeLoad){var t=new Date;t.setDate(t.getDate()+e);var n=null==e?"":"expires="+t.toUTCString();document.cookie="jpreLoader=loaded; "+n}},s=function(){if(jOverlay=e("<div></div>").attr("id","jpreOverlay").css({position:"fixed",top:0,left:0,width:"100%",height:"100%",zIndex:9999999}).appendTo("body"),a.showSplash){jContent=e("<div></div>").attr("id","jpreSlide").appendTo(jOverlay);var t=e(window).width()-e(jContent).width();e(jContent).css({position:"absolute",top:a.splashVPos,left:Math.round(50/e(window).width()*t)+"%"}),e(jContent).html(e(a.splashID).wrap("<div/>").parent().html()),e(a.splashID).remove(),a.splashFunction()}jLoader=e("<div></div>").attr("id","jpreLoader").appendTo(jOverlay);var n=e(window).width()-e(jLoader).width();e(jLoader).css({position:"absolute",top:a.loaderVPos,left:Math.round(50/e(window).width()*n)+"%"}),jBar=e("<div></div>").attr("id","jpreBar").css({width:"0%",height:"100%"}).appendTo(jLoader),a.showPercentage&&(jPer=e("<div></div>").attr("id","jprePercentage").css({position:"relative",height:"100%"}).appendTo(jLoader).html("Loading...")),a.autoclose||(jButton=e("<div></div>").attr("id","jpreButton").on("click",function(){p()}).css({position:"relative",height:"100%"}).appendTo(jLoader).text(a.closeBtnText).hide())},h=function(n){e(n).find("*:not(script)").each(function(){var n="";if(-1==e(this).css("background-image").indexOf("none")&&-1==e(this).css("background-image").indexOf("-gradient")){if(n=e(this).css("background-image"),-1!=n.indexOf("url")){var o=n.match(/url\((.*?)\)/);n=o[1].replace(/\"/g,"")}}else"img"==e(this).get(0).nodeName.toLowerCase()&&"undefined"!=typeof e(this).attr("src")&&(n=e(this).attr("src"));n.length>0&&t.push(n)})},c=function(){t.length||u();for(var e=0;e<t.length;e++)l(t[e])},l=function(t){var o=new Image;e(o).load(function(){u()}).error(function(){n.push(e(this).attr("src")),u()}).attr("src",t)},u=function(){i++;var n=Math.round(i/t.length*100);if(e(jBar).stop().animate({width:n+"%"},500,"linear"),a.showPercentage&&e(jPer).text(n+"%"),i>=t.length){if(i=t.length,d(),a.showPercentage&&e(jPer).text("100%"),a.debugMode){f()}e(jBar).stop().animate({width:"100%"},500,"linear",function(){a.autoClose?p():e(jButton).fadeIn(1e3)})}},p=function(){e(jOverlay).fadeOut(800,function(){e(jOverlay).remove(),o()})},f=function(){if(n.length>0){var e="ERROR - IMAGE FILES MISSING!!!\n\r";e+=n.length+" image files cound not be found. \n\r",e+="Please check your image paths and filenames:\n\r";for(var t=0;t<n.length;t++)e+="- "+n[t]+"\n\r";return!0}return!1};e.fn.jpreLoader=function(t,n){return t&&e.extend(a,t),"function"==typeof n&&(o=n),e("body").css({display:"block"}),this.each(function(){r()?(e(a.splashID).remove(),o()):(s(),h(this),c())})}}(jQuery);