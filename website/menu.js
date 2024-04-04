
var div_Menu = document.getElementById('menu-mobile')

var suamensagem = document.getElementById('suamensagem')
var nomeusuario = document.getElementById('nomeusuario')
var assunto = document.getElementById('assunto')
var contato = document.getElementById('contato')

function fecharmenu(){
    div_Menu.style.width='0%'
}


function abrirmenu(){
    div_Menu.style.width='100%'
}





function testandoform(){
    window.open("mailto:evox@diesel.com.br?subject=" + 
    assunto.value +"&amp?body=Olá, me chamo " + 
    nomeusuario.value + "%0D%0A%0D%0A" + 
    suamensagem.value + "%0D%0A%0D%0A" +
    "Meu Contato é: " + contato.value
    )
}

















