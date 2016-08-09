$(document).ready(function() {

  var i = 0;

  // 錨點

  $('.container').on('click', '.anchor', function(event){
    event.preventDefault();
    $('html, body').animate({
        scrollTop: $( $.attr(this, 'href') ).offset().top - 60
    }, 800);
  });

  // intro 判斷高度

  // $(window).scroll(function() {
  //   if($(window).scrollTop() >= $('#profile').offset().top) {
  //     $('.profile').addClass('active');
  //     $('.skill').removeClass('active');
  //     $('.experience').removeClass('active');
  //     $('.pratice').removeClass('active');
  //   } else {
  //     $('.profile').removeClass('active');
  //   }
  // });

  $(window).scroll(function() {
    if($('.article-profile').hasClass('active') == true) {
      if($(window).scrollTop() >= $('#profile').offset().top - 60) {
        $('.profile').addClass('active');
        $('.skill').removeClass('active');
        $('.experience').removeClass('active');
        $('.pratice').removeClass('active');
      } else {
        $('.profile').removeClass('active');
      }
    }
  });

  $(window).scroll(function() {
    if($('.article-profile').hasClass('active') == true) {
      if($(window).scrollTop() >= $('#skill').offset().top - 60) {
        $('.skill').addClass('active');
        $('.profile').removeClass('active')
      }else {
        $('.skill').removeClass('active');
      }
    }
  });

  $(window).scroll(function() {
    if($('.article-profile').hasClass('active') == true) {
      if($(window).scrollTop() >= $('#experience').offset().top - 60) {
        $('.experience').addClass('active');
        $('.profile').removeClass('active');
        $('.skill').removeClass('active');
      } else {
        $('.experience').removeClass('active');
      }
    }
  });

  $(window).scroll(function() {
    if($('.article-profile').hasClass('active') == true) {
      if($(window).scrollTop() >= $('#practice').offset().top - 60) {
        $('.practice').addClass('active');
        $('.profile').removeClass('active');
        $('.skill').removeClass('active');
        $('.experience').removeClass('active');
      } else {
        $('.practice').removeClass('active');
      }
    }
  });


  // reason 判斷高度

  $(window).scroll(function() {
    if($('.article-reason').hasClass('active') == true) {
      if($(window).scrollTop() >= $('#why').offset().top - 60) {
        $('.why').addClass('active');
        $('.like').removeClass('active');
        $('.contribute').removeClass('active');
        $('.dream').removeClass('active');
      } else {
        $('.why').removeClass('active');
      }
    }
  });

  $(window).scroll(function() {
    if($('.article-reason').hasClass('active') == true) {
      if($(window).scrollTop() >= $('#like').offset().top - 60) {
        $('.like').addClass('active');
        $('.why').removeClass('active');
        $('.contribute').removeClass('active');
        $('.dream').removeClass('active');
      } else {
        $('.like').removeClass('active');
      }
    }
  });

  $(window).scroll(function() {
    if($('.article-reason').hasClass('active') == true) {
      if($(window).scrollTop() >= $('#contribute').offset().top - 60) {
        $('.contribute').addClass('active');
        $('.why').removeClass('active');
        $('.like').removeClass('active');
        $('.dream').removeClass('active');
      } else {
        $('.contribute').removeClass('active');
      }
    }
  });

  // Top-bar 選單點擊事件

  $('.intro-btn').click(function() {
    $(this).siblings().addClass('active');
    $(this).children('.arrow').removeClass('fa-angle-right');
    $(this).children('.arrow').addClass('fa-angle-down');
    $('.top-intro').addClass('show active');
    $('.top-reason').removeClass('active');
    $('.article-profile').addClass('active');
    $('.article-reason').removeClass('active');
    $('.init-content').addClass('out');
    $('.mobile').removeClass('show');
    $('.reason-btn').siblings().children('li').removeClass('active');
    $('html, body').scrollTop(0);
  });

  $('.reason-btn').click(function() {
    $(this).siblings().addClass('active');
    $(this).children('.arrow').removeClass('fa-angle-right');
    $(this).children('.arrow').addClass('fa-angle-down');
    $('.top-reason').addClass('show active');
    $('.top-intro').removeClass('active');
    $('.article-reason').addClass('active');
    $('.article-profile').removeClass('active');
    $('.init-content').addClass('out');
    $('.mobile').removeClass('show');
    $('.intro-btn').siblings().children('li').removeClass('active');
    $('html, body').scrollTop(0);
  });

  $('.top-intro').click(function() {
    $(this).addClass('active');
    $('.top-reason').removeClass('active');
    $('.article-profile').addClass('active');
    $('.article-reason').removeClass('active');
    $('html, body').scrollTop(0);
  });

  $('.top-reason').click(function() {
    $(this).addClass('active');
    $('.top-intro').removeClass('active');
    $('.article-reason').addClass('active');
    $('.article-profile').removeClass('active');
    $('html, body').scrollTop(0);
  });

  $('.top-intro span').click(function() {
    $('.top-intro').removeClass('show');
    $('.top-reason').addClass('active');
    $('.article-profile').removeClass('active');
    $('.intro-btn').siblings().children().removeClass('active');
    $('html, body').scrollTop(0);
    if( $('.top-reason').hasClass('show')==true ){
      $('.top-reason').addClass('active');
      $('.article-reason').addClass('active');
    }
    initcontent();
    abc();
    return false;
  });

  $('.top-reason span').click(function() {
    $('.top-reason').removeClass('show');
    $('.top-intro').addClass('active');
    $('.article-reason').removeClass('active');
    $('.reason-btn').siblings().children().removeClass('active');
    $('html, body').scrollTop(0);
    if( $('.top-intro').hasClass('show')==true ){
      $('.top-intro').addClass('active');
      $('.article-profile').addClass('active');
    }
    initcontent();
    abc();
    return false;
  });

  $('.mobile-click').click(function() {
    $('.mobile').toggleClass('show');
  });

  $('.intro-list li').click(function() {
    $('.mobile').removeClass('show');
  });

  $('.profile').click(function() {
    if($('.article-profile').hasClass('active') != true) {
      $(this).addClass('active');
      $('.article-profile').addClass('active');
      $('.article-reason').removeClass('active');
      $('.top-reason').removeClass('active');
      $('.top-intro').addClass('active');
      $('.reason-btn').siblings().children().removeClass('active');
    }
  });

  $('.skill').click(function() {
    if($('.article-profile').hasClass('active') != true) {
      $(this).addClass('active');
      $('.article-profile').addClass('active');
      $('.article-reason').removeClass('active');
      $('.top-reason').removeClass('active');
      $('.top-intro').addClass('active');
      $('.reason-btn').siblings().children().removeClass('active');
    }
  });

  $('.experience').click(function() {
    if($('.article-profile').hasClass('active') != true) {
      $(this).addClass('active');
      $('.article-profile').addClass('active');
      $('.article-reason').removeClass('active');
      $('.top-reason').removeClass('active');
      $('.top-intro').addClass('active');
      $('.reason-btn').siblings().children().removeClass('active');
    }
  });

  $('.practice').click(function() {
    if($('.article-profile').hasClass('active') != true) {
      $(this).addClass('active');
      $('.article-profile').addClass('active');
      $('.article-reason').removeClass('active');
      $('.top-reason').removeClass('active');
      $('.top-intro').addClass('active');
      $('.reason-btn').siblings().children().removeClass('active');
    }
  });

  $('.why').click(function() {
    if($('.article-reason').hasClass('active') != true) {
      $(this).addClass('active');
      $('.article-profile').removeClass('active');
      $('.article-reason').addClass('active');
      $('.top-reason').addClass('active');
      $('.top-intro').removeClass('active');
      $('.intro-btn').siblings().children().removeClass('active');
    }
  });

  $('.like').click(function() {
    if($('.article-reason').hasClass('active') != true) {
      $(this).addClass('active');
      $('.article-profile').removeClass('active');
      $('.article-reason').addClass('active');
      $('.top-reason').addClass('active');
      $('.top-intro').removeClass('active');
      $('.intro-btn').siblings().children().removeClass('active');
    }
  });

  $('.contribute').click(function() {
    if($('.article-reason').hasClass('active') != true) {
      $(this).addClass('active');
      $('.article-profile').removeClass('active');
      $('.article-reason').addClass('active');
      $('.top-reason').addClass('active');
      $('.top-intro').removeClass('active');
      $('.intro-btn').siblings().children().removeClass('active');
    }
  });

  $('.dream').click(function() {
    if($('.article-reason').hasClass('active') != true) {
      $(this).addClass('active');
      $('.article-profile').removeClass('active');
      $('.article-reason').addClass('active');
      $('.top-reason').addClass('active');
      $('.top-intro').removeClass('active');
      $('.intro-btn').siblings().children().removeClass('active');
    }
  });







  function blinker(){
    if(i === 0){
      $('.blink').text('Welcome to use Atom.').fadeIn().delay(3000).fadeOut();
      i = i + 1;
    }else{
      $('.blink').text('Hope you will enjoy this resume').fadeIn().delay(3000).fadeOut();
      i = i - 1;
    }
  }
  setInterval(blinker,4000);

  function blinkbar(){
    if(i == 0){
      $('.blink-bar').fadeIn();
      i = i + 1;
    }else{
      $('.blink-bar').fadeOut();
      i = i - 1;
    }
  }
  setInterval(blinkbar,300);

  function initcontent() {
    if(($('.article-profile').hasClass('active') == true) || ($('.article-reason').hasClass('active') == true)) {
      $('.init-content').addClass('out');
    }else {
      $('.init-content').removeClass('out');
    }
  }

  function abc() {
    if(($('.article-profile').hasClass('active') != true) &&  ($('.article-reason').hasClass('active') != true)) {
      $('.intro-btn').siblings().children().removeClass('active');
      $('.reason-btn').siblings().children().removeClass('active');
    }
  }

});
