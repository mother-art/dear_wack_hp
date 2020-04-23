$(document).on('click',function(e) {
  const pickUpPhoto = (src)=> {
    const html = `<div class="add-box">
                    <div class="remove-btn">消</div>
                    <img class="pick-photo" src="${src}" >
                  </div>`;
    return html;
  }

  $(".photo").click(function() {
    console.log($(this).context.src);
    const src = $(this).context.src;
    $('.pick-phot').append(pickUpPhoto(src));
  })

  $(".remove-btn").click(function() {
    $(".add-box").remove();
  })
  // if(!$(e.target).closest('.pick-phot').length) {
  //   // ターゲット要素の外側をクリックした時の操作

  //   console.log("外からきてます")
  // } else {
  //   console.log("中からきてます")
  //   // ターゲット要素をクリックした時の操作
  // }
});



