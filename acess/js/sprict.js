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

  $("#wp4").waypoint(
    function () {
      $("#YTwrapper").removeClass("hidded");
    },
    {
      offset: "50%",
    }
  );
  /***************** VideoYoutube Function******************/
    $(".player").mb_YTPlayer();
    console.log('initialized');




  /***************** Pic Function******************/
  let slider = document.querySelector(".slider");
  let wrapper = document.querySelector(".wrapper");
  let next = document.querySelector(".arrow-next");
  let prev = document.querySelector(".arrow-prev");
  let item = document.querySelectorAll(".item");
  let currdeg = 0;
  let active = 0;
  next.addEventListener("click", () => {
    slider.classList.toggle("zoom");

    currdeg = currdeg - 360 / item.length;

    if (active === item.length - 1) {
      active = 0;
    } else {
      active++;
    }

    toggle();
  });
 $(function()
  {
    $(".player").mb_YTPlayer();
    console.log('initialized');
  });



  prev.addEventListener("click", () => {
    slider.classList.toggle("zoom");

    currdeg = currdeg + 360 / item.length;

    if (active === 0) {
      active = item.length - 1;
    } else {
      active--;
    }

    toggle();
  });

  let toggle = () => {
    setTimeout(() => {
      for (let i = 0; i < item.length; i++) {
        item[i].classList.remove("active");
      }

      item[active].classList.add("active");
      wrapper.style.transform = "rotateY(" + currdeg + "deg)";
    }, 900);

    setTimeout(() => {
      slider.classList.toggle("zoom");
    }, 1900);
  };

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
