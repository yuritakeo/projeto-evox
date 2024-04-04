var image1 = document.getElementById("teste1")

image1.setAttribute('src', 'images/foto3-removebg-preview.png');

var indexImage = 0

setInterval(
    () => 
        {
            indexImage++;   
            if (indexImage == 4 ){
                indexImage=1
            }
            image1.setAttribute('src', 'images/foto'+indexImage+'-removebg-preview.png');
        }
    ,
    2000
  );

  //Ai é só definir o tempo que quer, show de bola nossa que top kkk celular tá ligando

  // quer acertar mais alguma coisa?
  //nao, só isso mesmo, dessa forma eu consigo fazer o responsivo né ? Sim
  // a foto daqui sumiu kkk
  // qual foto que era? 

  image1