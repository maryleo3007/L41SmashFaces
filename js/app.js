$(function() {
    var contentImage = $('#contentImage');
    var name="";
    var countTry = 1;
    $("#mySelect").on('change',function () {
      var selectCode = $(this).val();

      var imgrandom = getRandomArbitrary(1,state.codermex.length);
      var role = 1;

      state.codermex.forEach(function (coder) {
        var img = $('<img id="imgCoder" src="" alt="" class="img-responsive">');
        var srcimg = './assets/img/mexico/'+coder.image;
        img.attr("src",srcimg);
        img.attr("role-img",role)
        if(imgrandom == role){
          name = coder.name;
          contentImage.append(img);
        }
        role++;
      });
    });
    $("#btnComprobar").on('click',function () {
      var input = $("#inputname");
      countTry++;
      if(countTry <= 5){
        if(input.val() == name){
            alert("Acertaste");
        }else{
            alert("vuekve a intetntarlo");
        }
      }else{
        alert("volver a pintar");
      }

    });


});

function getRandomArbitrary(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}
var state = {
  codermex:mexico,
  coderper:peru,
  select: null
}
