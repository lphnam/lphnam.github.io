/*
var fixmeTop = $(".header").offset().top;
$(window).scroll(function() {
  var currScroll = $(window).scrollTop();
  if (currScroll >= fixmeTop) {
    $(".header").css({
      position: "fixed",
      top: "0", left: "0", right: "0",
      padding: "30px 0 20px",
      margin: "0 auto 0 auto"
    });
  } else {
    $(".header").css({
      position: "static"
    });
  }
});
*/
$(document).ready(function() {
    var scrollBody = function(flag) {
        if (flag === true) {
            $("body").css("overflow", "scroll");
        } else {
            $("body").css("overflow", "hidden");
        }
    };

    var currIndex;
    var showImageFunc = function(currIndex, isFirst) {
        var element = $(".image-item")[currIndex];
        var imgURL = $(element).css('background-image').slice(5, -2);
        imgURL = "url('" + imgURL + "')";
        scrollBody(false);

        if (isFirst === true) {
            $("showImage").animate("opacity: '0.9'");
            $("#showImage").css("background-image", imgURL);
            $("#showImage").css("background-repeat", "no-repeat");
            $("#showImage").fadeIn("slow", function() {
                $("#divShow").css("display", "block");
                $("#showImage").css("display", "block");
                $("showImage").animate("opacity: '0'");
            });
        } else {
            $("#showImage").css("background-image", imgURL);
            $("#showImage").css("background-repeat", "no-repeat");
        }
    };

    var slideIndex = function(currImage) {
        var count = $(".image-item").length;
        var index;
        for (index = 0; index < count; index++) {
            if ($(".image-item")[index] == currImage) {
                return index;
            }
        }
    };

    $(".image-item").on("click", function() {
        currIndex = slideIndex(this);
        showImageFunc(currIndex, true);
    }); /* Set button */
    $("#btn-close").on("click", function() {
        $("#showImage").css("display", "none");
        $("#divShow").css("display", "none");
        scrollBody(true);
    });
    $("#btn-left").on("click", function() {
        currIndex += -1;
        if (currIndex <
            0) {
            currIndex = $(".image-item").length - 1;
        }
        showImageFunc(currIndex, false);
    });
    $("#btn-right").on("click", function() {
        currIndex += 1;
        if (currIndex === $(".image-item").length) {
            currIndex = 0;
        }
        showImageFunc(currIndex, false);
    });
    $(document).on("keydown", function(e) {
            switch (e.keyCode) {
                case 27:
                    {
                        $("#divShow").css("display", "none");
                        $("#showImage").css("display", "none");
                        scrollBody(true);
                        break;
                    }
                case 37:
                    {
                        currIndex += -1;
                        if (currIndex < 0) {
                            currIndex = $(".image-item").length - 1;
                        }
                        showImageFunc(currIndex, false);
                        break;
                    }
                case 39:
                    {
                        currIndex += 1;
                        if (currIndex === $(".image-item").length) {
                            currIndex = 0;
                        }
                        showImageFunc(currIndex, false);
                    }
                default:
                    break;
            }
        });
});
/* //Js function getURL(element) { var url=e lement.style.backgroundImage; return url; } function onClick(element)
   { var url=g etURL(element).slice(5,-2); //.replace(/ "/g, " ");
         var myImg = document.getElementById("myImage ");
         var myDivImg = document.getElementById("showImage ");
         //myImg.src = url;
         url = "url( '" + url + "') ";
         console.log(url);
         //myImg.alt = element.alt;

         myDivImg.style.backgroundImage = url;
         myDivImg.style.backgroundRepeat = "no-repeat ";
         myDivImg.style.display = "block ";
       }
         */
