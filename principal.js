$(document).ready(function() {
// código para pegar o nome da página atual.

// pegar endereço da página
	var paginaAtual = window.location.href.split('/').pop().split('.')[0];

	console.log(paginaAtual)

    var currentMenuItem = $("."+paginaAtual)

    currentMenuItem.addClass("menuAtual")

    var nome = $("#nome")

    nome.hide()
    nome.fadeToggle()

$("#enviar").on("click", function(){
        alert("Mensagem enviada!")

        });

});