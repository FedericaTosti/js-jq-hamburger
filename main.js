// Creare un hamburger menu con l’utilizzo di Html, Css e JavaScript/jQuery
// prendo lo zip che dopo vi allego e senza toccare l’HTML faccio funzionare l’hamburger menù;
// primo click, appare il menù;
// se cliccko che è già visibile, invece scompare.

// per visualizzare

$('.fa-bars').click(

  function(){
    $('.hamburger-menu').show();
  }
)

// per nascondere

$('.fa-times').click(

  function(){
    $('.hamburger-menu').hide();
  }
)
