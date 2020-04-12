$(function() {
  $(".menu__biography").hover(function() {
    $(".menu__biography__list:not(:animated)", this).slideDown();
  }, function() {
    $(".menu__biography__list", this).slideUp();
    });
  
  $(".menu__sns").hover(function() {
    $(".menu__sns__list:not(:animated)", this).slideDown();
  }, function() {
    $(".menu__sns__list", this).slideUp();
    });
  
  $(".menu__live").hover(function() {
    $(".menu__live__list:not(:animated)", this).slideDown();
  }, function() {
    $(".menu__live__list", this).slideUp();
    });

  $(".menu__youtube").hover(function() {
    $(".menu__youtube__list:not(:animated)", this).slideDown();
  }, function() {
    $(".menu__youtube__list", this).slideUp();
  });
});