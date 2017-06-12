$(function() {
    var contentImage = $('#contentImage');
    var name="";
    var countTry = 1;
    var selectCode = "";
    var points = 0;
    var sede, srcSede, imgrandom;
    $("#mySelect").on('change',function () {
      selectCode = $(this).val();

      var role = 1;
      $('#contentImage img').css({"display":"none"});
      if(selectCode == 1){
        srcSede= './assets/img/mexico/';
        sede =  state.codermex;
        imgrandom = getRandomArbitrary(1,sede.length);
        getCoder(role,imgrandom,sede,srcSede);
      }else if (selectCode == 2) {
          srcSede= './assets/img/peru/';
          sede = state.coderper;
          imgrandom = getRandomArbitrary(1,sede.length);
          getCoder(role,imgrandom,sede,srcSede);
        }
    });

    $("#btnComprobar").on('click',function () {
      var input = $("#inputname");
      var role = 1;
      countTry++;
      imgrandom ++;
      if (imgrandom == sede.length) {
          imgrandom=1;
      }

      if(input.val().toLowerCase() == name.toLowerCase()){
            alert("Excelente, Acertaste");
            input.val("");
            points += 5;
            $('#showMessage').html('<strong>'+points+'</strong>') ;
            setTimeout(function () {
              $('#contentImage img').css({"display":"none"});

              getCoder(role,imgrandom,sede,srcSede);
            },2000);
        }else{

          if(countTry <= 5){
            if(input.val().toLowerCase() == name.toLowerCase()){
                alert("Excelente, Acertaste");
                input.val("");
                points += 5;
                $('#showMessage').html('<strong>'+points+'</strong>') ;
                setTimeout(function () {
                  $('#contentImage img').css({"display":"none"});

                  getCoder(role,imgrandom,sede,srcSede);
                },2000);
            }else{
                alert("Sigue intentando, tienes 5 portunidades!");
            }
          }else{
              points--;
              $('#showMessage').html('<strong>'+points+'</strong>') ;
              $('#contentImage img').css({"display":"none"});
              getCoder(role,imgrandom,sede,srcSede);
          }

        }

    });

var getCoder = function (role,imgrandom,sede,srcSede) {
  sede.forEach(function (coder) {
    var img = $('<img id="imgCoder" src="" alt="" class="img-responsive">');
    var srcimg = srcSede+coder.image;
    img.attr("src",srcimg);
    img.attr("role-img",role)
    if(imgrandom == role){
      name = coder.name;
      contentImage.append(img);
    }
    role++;
  });
}
});

var state = {
  codermex:mexico,
  coderper:peru,
  select: null
}

function getRandomArbitrary(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}
