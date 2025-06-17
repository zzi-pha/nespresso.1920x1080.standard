$(document).ready(function () {
  // navOn
  let link = $("#navbar .nav>li>a.dot");
  link.click(function (e) {
    e.preventDefault();

    let target = $($(this).attr("href"));

    $("html,body").stop().animate({ scrollTop: target.offset().top }, 600);

    link.removeClass("navOn");
    $(this).addClass("navOn");
  });

  $(window).scroll(function () {
    $("section").each(function () {
      if ($(this).offset().top - $(window).scrollTop() < 20) {
        link.removeClass("navOn");
        $("#navbar")
          .find("[data-scroll='" + $(this).attr("id") + "']")
          .addClass("navOn");
      }
    });
  });

  // container1

  let i = 0;
  let count = $(".con_wrap>li").length;

  $(".container1>p.arrow_r").click(function () {
    if (i == count - 1) {
      i = 0;
    } else {
      i++;
    }
    $(".con_wrap>li").stop().fadeOut(200);
    $(".con_wrap>li").eq(i).stop().fadeIn(100);
  });

  $(".container1>p.arrow_l").click(function () {
    if (i == 0) {
      i = count - 1;
    } else {
      i--;
    }
    $(".con_wrap>li").stop().fadeOut(200);
    $(".con_wrap>li").eq(i).stop().fadeIn(100);
  });

  $(".base>li").mouseenter(function () {
    $(this).children(".sub").stop().fadeIn(200);
  });
  $(".base>li").mouseleave(function () {
    $(this).children(".sub").stop().fadeOut(200);
  });

  // gnb>li
  $(".gnb > li").mouseenter(function () {
    $(".inner_wrap").stop().animate({ height: "620px" }, 300);
    $(this).children(".base").stop().fadeIn(200);
    if ($(this).children(".base").addClass("baseOn")) {
      $(this).children(".base").find(".subOn").stop().fadeIn(200);
    }
    $(this).children(".img").stop().fadeIn(200);
  });
  $(".gnb > li").mouseleave(function () {
    $(".inner_wrap").stop().animate({ height: "120px" }, 300);
    $(this).children(".base").stop().fadeOut(200);
    $(this).children(".base").find(".subOn").stop().fadeOut(200);
    $(this).children(".img").stop().fadeOut(200);
  });

  // etc>li
  $(".etc>li.search").click(function (event) {
    if ($(event.target).is("input")) return;

    var $sub = $(this).children("input");
    if ($sub.is(":visible")) {
      $sub.stop().fadeOut(200);
    } else {
      $sub.stop().fadeIn(200);
    }
  });

  $(".etc>li").mouseenter(function () {
    $(this).children(".sub").stop().fadeIn(200);
  });
  $(".etc>li").mouseleave(function () {
    $(this).children(".sub").stop().fadeOut(100);
  });

  // .con .color
  $(".con1 .color>li").click(function () {
    let colors = $(this).index();
    $(".con1 .color>li").removeClass("colorOn");
    $(".con1 .color>li").eq(colors).addClass("colorOn");
    $(".con1 .machinesimg>li").removeClass("machinesimgOn");
    $(".con1 .machinesimg>li").eq(colors).addClass("machinesimgOn");
    $(".con1 .machinesbg>li").removeClass("machinesbgOn");
    $(".con1 .machinesbg>li").eq(colors).addClass("machinesbgOn");
  });
  $(".con2 .color>li").click(function () {
    let colors = $(this).index();
    $(".con2 .color>li").removeClass("colorOn");
    $(".con2 .color>li").eq(colors).addClass("colorOn");
    $(".con2 .machinesimg>li").removeClass("machinesimgOn");
    $(".con2 .machinesimg>li").eq(colors).addClass("machinesimgOn");
    $(".con2 .machinesbg>li").removeClass("machinesbgOn");
    $(".con2 .machinesbg>li").eq(colors).addClass("machinesbgOn");
  });
  $(".con3 .color>li").click(function () {
    let colors = $(this).index();
    $(".con3 .color>li").removeClass("colorOn");
    $(".con3 .color>li").eq(colors).addClass("colorOn");
    $(".con3 .machinesimg>li").removeClass("machinesimgOn");
    $(".con3 .machinesimg>li").eq(colors).addClass("machinesimgOn");
    $(".con3 .machinesbg>li").removeClass("machinesbgOn");
    $(".con3 .machinesbg>li").eq(colors).addClass("machinesbgOn");
  });

  // container2
  $(".capsules_list>li").click(function () {
    let capsulelist = $(this).index();
    $(".capsules_list>li").removeClass("listOn");
    $(".capsules_list>li").eq(capsulelist).addClass("listOn");
    $(".capsules>li").stop().fadeOut();
    $(".capsules>li").eq(capsulelist).stop().fadeIn();
  });

  $(".capsules_img>li>a").click(function (e) {
    e.preventDefault();
  });

  // container2, 4 .arrow

  let l = 3;
  let count2 = $(".cap1 .capsules_img>li").length;

  $(".container2>p.arrow_r").click(function () {
    if (l == count2 - 1) {
      l = 0; // 마지막 항목을 가리키고 있으면 처음 항목으로 이동
    } else {
      l++; // 그렇지 않으면 다음 항목으로 이동
    }

    $(".cap1 .capsules_img")
      .stop()
      .animate({ "margin-left": "-260px" }, function () {
        $(".cap1 .capsules_img>li").first().appendTo(".cap1 .capsules_img");
        $(".cap1 .capsules_img").css({ "margin-left": "0px" });
        $(".cap1 .capsules_img>li").removeClass("capsulesimgOn");
        $(".cap1 .capsules_img>li").eq(3).addClass("capsulesimgOn");
        $(".cap1 .capsules_img>li .text_wrap").eq(3).show();

        $(".cap1 .capsules_bg>li").stop().fadeOut(300);
        $(".cap1 .capsules_bg>li").eq(l).stop().fadeIn(300);

        $(".cap1 .calli>li").removeClass("calliOn");
        $(".cap1 .calli>li").eq(l).addClass("calliOn");
      });

    $(".cap2 .capsules_img")
      .stop()
      .animate({ "margin-left": "-260px" }, function () {
        $(".cap2 .capsules_img>li").first().appendTo(".cap2 .capsules_img");
        $(".cap2 .capsules_img").css({ "margin-left": "0px" });
        $(".cap2 .capsules_img>li").removeClass("capsulesimgOn");
        $(".cap2 .capsules_img>li").eq(3).addClass("capsulesimgOn");
        $(".cap2 .capsules_img>li .text_wrap").eq(3).show();

        $(".cap2 .capsules_bg>li").stop().fadeOut(300);
        $(".cap2 .capsules_bg>li").eq(l).stop().fadeIn(300);

        $(".cap2 .calli>li").removeClass("calliOn");
        $(".cap2 .calli>li").eq(l).addClass("calliOn");
      });
  });

  $(".container2>p.arrow_l").click(function () {
    if (l == 0) {
      l = count2 - 1; //만약 l이 0이면, l에 counts - 1의 값을 할당. 마지막 항목으로 이동.
    } else {
      l--; //그렇지 않으면, l을 감소, 이전 항목으로 이동
    }

    $(".cap1 .capsules_img")
      .stop()
      .animate({ "margin-left": "260px" }, function () {
        $(".cap1 .capsules_img>li").last().prependTo(".cap1 .capsules_img");
        $(".cap1 .capsules_img").css({ "margin-left": "0px" });
        $(".cap1 .capsules_img>li").removeClass("capsulesimgOn");
        $(".cap1 .capsules_img>li").eq(3).addClass("capsulesimgOn");
        $(".cap1 .capsules_img>li .text_wrap").hide();
        $(".cap1 .capsules_img>li .text_wrap").eq(3).show();

        $(".cap1 .capsules_bg>li").stop().fadeOut(300);
        $(".cap1 .capsules_bg>li").eq(l).stop().fadeIn(300);

        $(".cap1 .calli>li").removeClass("calliOn");
        $(".cap1 .calli>li").eq(l).addClass("calliOn");
      });

    $(".cap2 .capsules_img")
      .stop()
      .animate({ "margin-left": "260px" }, function () {
        $(".cap2 .capsules_img>li").last().prependTo(".cap2 .capsules_img");
        $(".cap2 .capsules_img").css({ "margin-left": "0px" });

        $(".cap2 .capsules_img>li").removeClass("capsulesimgOn");
        $(".cap2 .capsules_img>li").eq(3).addClass("capsulesimgOn");
        $(".cap2 .capsules_img>li .text_wrap").hide();
        $(".cap2 .capsules_img>li .text_wrap").eq(3).show();

        $(".cap2 .capsules_bg>li").stop().fadeOut(300);
        $(".cap2 .capsules_bg>li").eq(l).stop().fadeIn(300);

        $(".cap2 .calli>li").removeClass("calliOn");
        $(".cap2 .calli>li").eq(l).addClass("calliOn");
      });
  });

  // .container4 .arrow
  let g = 0;
  let count4 = $(".galleryimgSmall>li").length;

  $(".container4 .arrow_r").click(function () {
    if (g == count4 - 1) {
      g = 0;
    } else {
      g++;
    }
    $(".galleryimgSmall")
      .stop()
      .animate({ "margin-left": "-420px" }, function () {
        $(".galleryimgSmall>li").first().appendTo(".galleryimgSmall");
        $(".galleryimgSmall").css({ "margin-left": "0px" });
        // $(".galleryimgLarge>li").removeClass("largeOn");
        // $(".galleryimgLarge>li").eq(g).addClass("largeOn");
        $(".galleryimgLarge>li").stop().fadeOut();
        $(".galleryimgLarge>li").eq(g).stop().fadeIn();
      });
  });

  $(".container4 .arrow_l").click(function () {
    if (g == 0) {
      g = count4 - 1;
    } else {
      g--;
    }
    $(".galleryimgSmall")
      .stop()
      .animate({ "margin-left": "420px" }, function () {
        $(".galleryimgSmall>li").last().prependTo(".galleryimgSmall");
        $(".galleryimgSmall").css({ "margin-left": "0px" });
        // $(".galleryimgLarge>li").removeClass("largeOn");
        $(".galleryimgLarge>li").stop().fadeOut();
        // $(".galleryimgLarge>li").eq(g).addClass("largeOn");
        $(".galleryimgLarge>li").eq(g).stop().fadeIn();
      });
  });

  // keyboard event
  // $(document).keydown(function(event) {
  //   if (event.which == 39) {
  //   $(".cap1 .capsules_img").stop().animate({"margin-left":"-280px"},function(){
  //     $(".cap1 .capsules_img>li").first().appendTo(".cap1 .capsules_img");
  //     $(".cap1 .capsules_img").css({"margin-left":"0px"});
  //   });
  //   $(".cap2 .capsules_img").stop().animate({"margin-left":"-280px"},function(){
  //     $(".cap2 .capsules_img>li").first().appendTo(".cap2 .capsules_img");
  //     $(".cap2 .capsules_img").css({"margin-left":"0px"});
  //   });
  //   $(".galleryimgSmall").stop().animate({"margin-left":"-420px"},function(){
  //     $(".galleryimgSmall>li").first().appendTo(".galleryimgSmall");
  //     $(".galleryimgSmall").css({"margin-left":"0px"});
  //   });
  //   }
  //   if (event.which == 37) {
  //     $(".cap1 .capsules_img").stop().animate({"margin-left":"280px"},function(){
  //       $(".cap1 .capsules_img>li").last().prependTo(".cap1 .capsules_img");
  //       $(".cap1 .capsules_img").css({"margin-left":"0px"});
  //     });
  //     $(".cap2 .capsules_img").stop().animate({"margin-left":"280px"},function(){
  //       $(".cap2 .capsules_img>li").last().prependTo(".cap2 .capsules_img");
  //       $(".cap2 .capsules_img").css({"margin-left":"0px"});
  //     });
  //     $(".galleryimgSmall").stop().animate({"margin-left":"420px"},function(){
  //       $(".galleryimgSmall>li").last().prependTo(".galleryimgSmall");
  //       $(".galleryimgSmall").css({"margin-left":"0px"});
  //     });
  //   }
  // });

  // container5 .instar_wrap

  let instarWrap1 = document.querySelector(".instar_wrap1");
  let instarWrap2 = document.querySelector(".instar_wrap2");

  let roller1 = document.querySelector(".instar_rolling1");
  let roller2 = document.querySelector(".instar_rolling2");

  let clone1 = roller1.cloneNode(true);
  let clone2 = roller2.cloneNode(true);

  let rollerWidth1 = document.querySelector(".instar_rolling1 ul").offsetWidth;
  let rollerWidth2 = document.querySelector(".instar_rolling2 ul").offsetWidth;

  roller1.id = "roller1";
  clone1.id = "roller2";

  roller2.id = "roller3";
  clone2.id = "roller4";

  instarWrap1.appendChild(clone1);
  instarWrap2.insertBefore(clone2, instarWrap2.firstChild);

  document.querySelector("#roller1").style.left = "0px";
  document.querySelector("#roller2").style.left = rollerWidth1 + "px";

  document.querySelector("#roller3").style.right = rollerWidth2 + "px";
  document.querySelector("#roller4").style.right = "0px";

  roller1.classList.add("original");
  clone1.classList.add("clone");
  roller2.classList.add("original");
  clone2.classList.add("clone");

  // $(".instar1").hover(
  //   function() {
  //     $(".instar1").css("animation-play-state", "paused");
  //   },
  //   function() {
  //     $(".instar1").css("animation-play-state", "running");
  //   }
  // );

  // footer
  $(".footer_wrap>ul>li>a, .footer_inner>ul>li>a").click(function (e) {
    e.preventDefault();
  });
});
