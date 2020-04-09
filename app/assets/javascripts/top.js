$(function() {

  $(".menu__know").hover(function() {
    console.log("s")
    $(".menu__know__list:not(:animated)", this).slideDown();
    console.log($(this).children(".menu__know__list"))
  }, function() {
    $(".menu__know__list", this).slideUp();
    });
  
  $(".menu__sns").hover(function() {
    console.log("s")
    $(".menu__sns__list:not(:animated)", this).slideDown();
    console.log($(this).children(".menu__sns__list"))
  }, function() {
    $(".menu__sns__list", this).slideUp();
    });
  
  $(".menu__live").hover(function() {
    console.log("s")
    $(".menu__live__list:not(:animated)", this).slideDown();
    console.log($(this).children(".menu__live__list"))
  }, function() {
    $(".menu__live__list", this).slideUp();
    });

  $(".menu__youtube").hover(function() {
    console.log("s")
    $(".menu__youtube__list:not(:animated)", this).slideDown();
    console.log($(this).children(".menu__youtube__list"))
  }, function() {
    $(".menu__youtube__list", this).slideUp();
    });
});