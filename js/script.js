$(function () {
  $(".faqs-question").on("click", function () {
    $(this).next(".faqs-answer").slideToggle();
    $(this).toggleClass("open");
  });
  // #から始まるURLがクリックされた時
  $('a[href^="#"]').click(function () {
    // .headerクラスがついた要素の高さを取得
    let header = $(".header").innerHeight();
    let speed = 300;
    let id = $(this).attr("href");
    let target = $("#" == id ? "html" : id);
    // トップからの距離からヘッダー分の高さを引く
    let position = $(target).offset().top - header;
    // その分だけ移動すればヘッダーと被りません
    $("html, body").animate(
      {
        scrollTop: position,
      },
      speed
    );
    return false;
  });

  $(".berger-icon").on("click", function () {
    $(this).toggleClass("open");
    $(".berger-list").toggleClass("open");
    $(".berger-background").toggleClass("open");
  });

  $(".berger-list a").on("click", function () {
    $(".berger-icon").removeClass("open");
    $(".berger-list").removeClass("open");
    $(".berger-background").removeClass("open");
  });

  $(".berger-background").on("click", function () {
    $(".berger-icon").removeClass("open");
    $(".berger-list").removeClass("open");
    $(".berger-background").removeClass("open");
  });

  $(".berger-list").on("click", function () {
    $(".berger-icon").removeClass("open");
    $(".berger-list").removeClass("open");
    $(".berger-background").removeClass("open");
  });

  $(".js-modal-close").on("click", function (e) {
    e.preventDefault();
    const target_close = $(this).data("target");
    $(target_close).hide();
  });
  $(".js-modal-open").on("click", function (e) {
    e.preventDefault();
    const target_open = $(this).data("target");
    $(target_open).show();
  });

  //始めにjQueryで送信ボタンを無効化する
  $("button").prop("disabled", true);

  // //始めにjQueryで必須欄を加工する
  // $("form input:required").each(function () {
  //   $(this).prev("label").addClass("required");
  // });

  // 入力欄の操作時;
  $("form input:required").change(function () {
    // 必須項目が空かどうかフラグ;
    let flag = true;
    // 必須項目をひとつずつチェック;
    $("form input:required").each(function (e) {
      // もし必須項目が空なら;
      if ($("form input:required").eq(e).val() === "") {
        flag = false;
      }
    });
    // 全て埋まっていたら;
    if (flag) {
      // 送信ボタンを復活;
      $("button").prop("disabled", false);
    } else {
      // 送信ボタンを閉じる;
      $("button").prop("disabled", true);
    }
  });
});

window.addEventListener("scroll", function () {
  let scroll = document.documentElement.scrollTop;
  if (scroll > 699) {
    document.getElementById("header").classList.add("backgroundChange");
  } else {
    document.getElementById("header").classList.remove("backgroundChange");
  }
});

const swiper = new Swiper(".swiper", {
  // Optional parameters
  // direction: "vertical",
  loop: true,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  // Navigation arrows
  // navigation: {
  //   nextEl: ".swiper-button-next",
  //   prevEl: ".swiper-button-prev",
  // },

  // And if we need scrollbar
  // scrollbar: {
  //   el: ".swiper-scrollbar",
  // },

  spaceBetween: 20,
  slidesPerView: "auto",

  breakpoints: {
    // スライドの表示枚数：767px以上の場合
    767: {
      spaceBetween: 40,
    },
  },
});

let $form = $("#form");
$form.submit(function (e) {
  $.ajax({
    url: $form.attr("action"),
    data: $form.serialize(),
    type: "POST",
    dataType: "xml",
    statusCode: {
      0: function () {
        //送信に成功したときの処理
        $form.slideUp();
        $(".form-success").slideDown();
      },
      200: function () {
        //送信に失敗したときの処理
        $form.slideUp();
        $(".form-error").slideDown();
      },
    },
  });
  e.preventDefault();
  return false;
});
