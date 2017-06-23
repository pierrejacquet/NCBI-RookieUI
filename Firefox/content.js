var images = document.getElementsByTagName('img');
//for (var i = 0, l = images.length; i < l; i++) {
//  images[i].src = 'http://placekitten.com/' + images[i].width + '/' + images[i].height;
//}
var fullURLblue = browser.extension.getURL("blue.css");
var fullURLorange = browser.extension.getURL("orange.css");
var fullURLindigo = browser.extension.getURL("indigo.css");
var fullURLgreen = browser.extension.getURL("green.css");
var fullURLrookiemax = browser.extension.getURL("ROOKIEMAX.png");
var cssblue = '"'+fullURLblue+'"';
var cssorange = '"'+fullURLorange+'"';
var cssindigo = '"'+fullURLindigo+'"';
var cssgreen = '"'+fullURLgreen+'"';
if(localStorage.getItem('theme') !== null){
  var lclStorage = localStorage.getItem('theme')
}
else {
  var lclStorage = cssindigo
}

  //use headerpad to block refresh extension
if($('.headerpad').length == 0){
    $('head').append(' <link id="theme" rel="stylesheet" href='+lclStorage+'>');

    //CREATE A MIN HEIGHT DIV TO PUSH CONTENT UNDER NAVBAR

        if($("div[data-section='header']").length > 0){
          $("div[data-section='header']").after('<div class="headerpad" style="height:120px; width:100%; background:white; clear:both;"></div>');
        }
        else{
            $('.header').after('<div  class="headerpad" style="height:120px; width:100%; background:white; clear:both;"></div>');
        }

    $('body').append('<button id="myBtn"><img src="'+fullURLrookiemax+'" class="rookieui"></img></button>');
    $('body').append('<div id="myModal" class="modal"><div class="modal-content"><span class="close">&times;</span><p>Theme:</p><div id="colors"><br><div class="box"id="blue" data-theme='+cssblue+'></div><div class="box"id="orange" data-theme='+cssorange+'></div><div class="box"id="indigo" data-theme='+cssindigo+'></div><div class="box"id="green" data-theme='+cssgreen+'></div></div><p class="creditPJ">NCBI RookieUI<br>by Pierre JACQUET</p></div></div>');
    load=0;
}


$(document).ready(function() {
//COLOR PICKER
$("div[data-theme]").click(function() {
    $("head link#theme").attr("href", $(this).data("theme"));
    localStorage.setItem('theme', $(this).data("theme"));
});
});



//SCROLL TOP
$(document).ready(function() {
$(window).scroll(function() {
var $uniheader = $('#universal_header');
  if ($(window).scrollTop() < 50) { $('#universal_header').slideDown(1);$('.res_tagline').css("display", "block");$('.header').css("padding-bottom", "1.5em");$('.header').css("top", $uniheader.height());$('.search').css("padding", "1.2em 0 .7em");$('.NLMLogo').show();$('#myBtn').css('top', '35px');
  }
  if ($(window).scrollTop() > 50) { $('#universal_header').slideUp(1);$('.res_tagline').css("display", "none");$('.header').css("padding-bottom", "0em");$('.header').css("top", "0px");$('.search').css('padding', '0.7em 0.7em');$('.NLMLogo').hide();$('#myBtn').css('top', '5px');
  }
});

});

//CLOSE SETTINGS
$(window).scroll(function() {
$('.close').click();
});

$(document).ready(function() {
if($('#myModal').css('display') == 'block'){
  $('body').click(function() {
$('.close').click();
});
}
});


//SEARCH EFFECT
$(document).ready(function() {
if (window.location.href.indexOf("?term=") > -1) {
$(".rprt:not(tr)").addClass("searchbump");
}
});



//COLOR NUC
var clic = 0;
$(document).on('click', "h1", function () {
if(clic == 0){
line = 0;
var stop = false


    while (stop == false){
    var span = document.querySelectorAll('span.ff_line')[line];

            text = span.innerHTML.split('').map(function(el) {
                return '<span class="char-' + el.toLowerCase() + '">' + el + '</span>';
            }).join('');

    span.innerHTML = text;
    if (document.querySelectorAll('span.ff_line')[line+1] == null){
      stop = true;
    }
    line = line + 1;
    }

clic = 1;
}

});


$(document).ready(function() {
// Get the modal
var modal = document.getElementById('myModal');
// Get the button that opens the modal
var btn = document.getElementById("myBtn");
// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];
// When the user clicks the button, open the modal
btn.onclick = function() {
    modal.style.display = "block";
}
// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}
// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
});






if (window.location.href.indexOf("www.ncbi.nlm.nih.gov/gene/") > -1) {
$(document).ready(function() {
document.getElementById("sidecontent_2_pullout").click();
});
}
