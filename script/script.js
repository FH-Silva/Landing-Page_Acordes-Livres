var equipe1 = document.querySelectorAll(".equipe"); //Selecionar todos os elementos com essa classe
var conatos1 = document.querySelectorAll(".contatos");

equipe1.forEach(function(equipe){ //Ele percorre cada elemento do array e executa uma função que você especifica para cada elemento.
    equipe.addEventListener("click", function(){ //Adiciona um evento quando o usuario clicar
        alert("Opção indisponivel no momento");
    });
});

conatos1.forEach(function(contatos, index){
    contatos.addEventListener("click", function(){
        alert("Contatos indisponiveis no momento")
    });
});