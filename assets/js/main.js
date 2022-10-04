$(document).ready(function(){

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
});

window.onscroll = function() {toggleNav()};

function toggleNav() {
  if (document.body.scrollTop > 350 || document.documentElement.scrollTop > 350) {
    document.getElementById("nav").style.visibility = "visible";
  } else {
    document.getElementById("nav").style.visibility = "hidden";
  }
}

   