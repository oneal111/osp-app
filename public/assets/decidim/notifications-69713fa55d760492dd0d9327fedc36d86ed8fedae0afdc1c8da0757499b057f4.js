"use strict";$(function(){var t=$(".title-bar .topbar__notifications"),n=$(".tabs-content"),i=n.find("#notifications"),e=$(".empty-notifications"),a=n.find("ul.pagination"),o=500,r=function(){return n.find(".card--widget").length>0},c=function(){r()||(i.remove(),e.removeClass("hide"))};i.on("click",".mark-as-read-button",function(t){var n=$(t.target).parents(".card--widget");n.fadeOut(o,function(){n.remove(),c()})}),n.on("click",".mark-all-as-read-button",function(){i.fadeOut(o,function(){a.remove(),t.removeClass("is-active"),n.find(".card--widget").remove(),c()})}),c()});