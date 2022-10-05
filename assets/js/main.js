$(document).ready(function(){
  toggleNav()
  $(".filter-button").click(function(){
    $(".filter-button").removeClass("active")

    $(this).addClass("active");
    var value = $(this).attr('data-filter');
    
    if(value == "all")
    {
      $('.filter').show('1000');
    }
    else
    {
      $(".filter").not('.'+value).hide('3000');
      $('.filter').filter('.'+value).show('3000');
    }
  });
  $(".lang").click(function(){
    if ($(this)[0].innerText === 'عربي') {
      for (let index = 0; index < $(".lang").length; index++) {
        $(".lang")[index].innerText = 'English'
      }
      // $("#lang1")[0].innerText = 'English'
      document.body.style.direction = "rtl";
    } else {
      for (let index = 0; index < $(".lang").length; index++) {
        $(".lang")[index].innerText = 'عربي'
      }
      document.body.style.direction = "ltr";
    }
  })
});

window.onscroll = function() {toggleNav()};
window.addEventListener('resize', toggleNav());

function toggleNav() {
  const nav = document.getElementById("nav")
  if (nav) {
    if ((document.body.scrollTop > 350 || document.documentElement.scrollTop > 350) && document.body.clientWidth > 992) {
      nav.style.visibility = "visible";
    } else if (document.body.clientWidth <= 992) {
      nav.style.visibility = "visible";
    } else {
      nav.style.visibility = "hidden";
    }
  }
}

document.addEventListener("DOMContentLoaded", function(event) {
  function OTPInput() {
    const inputs = document.querySelectorAll('#otp > *[id]');
    for (let i = 0; i < inputs.length; i++) { 
      inputs[i].addEventListener('keydown', function(event) {
        if (event.key==="Backspace" ) {
          inputs[i].value='' ;
          if (i !==0) inputs[i - 1].focus();
        } else {
          if (i===inputs.length - 1 && inputs[i].value !=='' ) {
            return true;
          } else if (event.keyCode> 47 && event.keyCode < 58) {
            inputs[i].value=event.key; if (i !==inputs.length - 1) inputs[i + 1].focus(); event.preventDefault();
          } else if (event.keyCode> 64 && event.keyCode < 91) {
            inputs[i].value=String.fromCharCode(event.keyCode);
            if (i !==inputs.length - 1) inputs[i + 1].focus();
            event.preventDefault();
          }
        }
      });
    }
  }
  OTPInput();
});

   