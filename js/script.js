var divs = document.getElementsByClassName('alert');
for(var i=0; i<divs.length; i++) {
  divs[i].addEventListener("click", highlightThis);
  /*
  divs[i].addEventListener("click", highlightThis, true);
  divs[i].addEventListener("click", highlightThis, false);*/
}

function highlightThis(event) {
    //event.stopPropagation();
  
    var backgroundColor = this.style.backgroundColor;
    this.style.backgroundColor='yellow';
    alert(this.className);
    this.style.backgroundColor=backgroundColor;
}


$(document).ready(function(){
    $( window ).scroll(function() {
        if (($(document).scrollTop()+20) >= $('.sections').offset().top) 
            {$("#inkdrop").attr('class',"inkdropped"); $("#carouselNav").attr('class',"active");}
        if (($(document).scrollTop()+20) < $('.sections').offset().top)
            {$("#inkdrop").attr('class',""); $("#carouselNav").attr('class',"");}
        if (($(document).scrollTop()+20) >= $('#about').offset().top) 
            {$("#aboutNav").attr('class',"active"); $("#carouselNav").attr('class',"");}
        if (($(document).scrollTop()+20) < $('#about').offset().top)
            {$("#aboutNav").attr('class',"");}
    });
    $(".mainNav").click(function(){
        $('html, body').animate({scrollTop: 0}, 600);
    });
    $("#aboutNav").click(function(){
        $('html, body').animate({scrollTop: (($("#about").offset().top)-10)}, 600);
    });
    $("#carouselNav").click(function(){
        $('html, body').animate({scrollTop: (($("#carousel").offset().top)-10)}, 600);
    });
});

$(document).foundation();
$(document).ready(function(){
      setInterval(function(){
            $(".fa").toggleClass('glow');
      }, 600);
    var everything_resize = function() {
        var windowWidth = $(window).width();
        var windowHeight = $(window).height();
        $('video').css({'width':windowWidth});
        $('.sections').css({'top':windowWidth*0.56});
        $('#nav_padding').css({'height':windowWidth*0.56});
        $('#nav_padding_content').css({'height':windowWidth*0.56});
        $('#nav_padding_screen').css({'height':windowWidth*0.56});
        $('#nav_padding_screen_doodle').css({'font-size':$('#nav_padding_screen_doodle').width()/19});
        $('#nav_padding_screen_doodle').css({'height':$('#nav_padding_screen_doodle').width()/8});
    }
    everything_resize();
    $( window ).resize(function() {
        everything_resize();
    });
    /*carousel(function(){
        
    });*/
});

$(document).ready(function(){
$('.carousel-disp').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  asNavFor: '.carousel'
});
$('.carousel').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  asNavFor: '.carousel-disp',
  dots: true,
  centerMode: true,
  focusOnSelect: true,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1
      }
    }
  ]
});
});
