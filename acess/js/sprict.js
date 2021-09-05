/* 

© Copyright 2020-2021 by OPTeam. All Rights Reserved
Author : Thành Quang Long(binbo9315) -  Fouder OPTeam 

 */

/* When user clicks a link */
$(document).ready(function () {
  /***************** Waypoints ******************/

  $("#wp1").waypoint(
    function () {
      $("#left").addClass("left");
      $("#right").addClass("right");
      $("#intro").addClass("up");
    },
    {
      offset: "100%",
    }
  );
  $("#wp2").waypoint(
    function () {
      $("#left_st").addClass("left");
      $("#right_st").addClass("right");
      $("#up_st").addClass("up");
      $("#up_st2").addClass("up");
    },
    {
      offset: "100%",
    }
  );
  $("#wp3").waypoint(
    function () {
      $("#up_phone").addClass("up");
      $("#up_phone2").addClass("up");
    },
    {
      offset: "110%",
    }
  );

  $("#video").waypoint(
    function () {
      $("#video").removeClass("hidded");
    },
    {
      offset: "100%",
    }
  );
  /***************** VideoYoutube Function******************/
    $(".player").YTPlayer();



  /***************** Pic Function******************/
  let altimg = document.getElementById("pic");
  let altinner = document.getElementById("alt");

  altinner.innerHTML = altimg.alt;

  /***************** Funtion trans page smotth ******************/

  $(function () {
    $("a[href*=#]:not([href=#])").click(function () {
      if (
        location.pathname.replace(/^\//, "") ===
          this.pathname.replace(/^\//, "") &&
        location.hostname === this.hostname
      ) {
        var target = $(this.hash);
        target = target.length
          ? target
          : $("[name=" + this.hash.slice(1) + "]");
        if (target.length) {
          $("html,body").animate(
            {
              scrollTop: target.offset().top - 90,
            },
            2000
          );
          return false;
        }
      }
    });
  });
});
