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

  const pickUpPhoto = (src, num)=> {
    const html = `<div class="add-box">
                    <div class="remove-btn">閉</div>
                    <a href="/images/${num}">
                      <img class="pick-photo" src="${src}" >
                    </a>
                  </div>`;
    return html;
  }

  $(".photo").click(function() {
    const src = $(this).context.src;
    const num = $(this).data('index');
    $('.pick-phot').append(pickUpPhoto(src, num));
  });
});

$(document).on('click',function(e) {
  $(".remove-btn").click(function() {
    $(".add-box").remove();
  })
  $(".add-box").click(function() {
  })
});
