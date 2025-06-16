alert( "Ola mundo");

// variavel guarda valores temporariamente
// entrada dos dados
var nome="kaue";
var idade=46;
var senha="1234"

// estrutura de condidição
if (idade>17){
alert("pode votar! "+nome);

}else{
   alert("vai embora daqui!" +nome);
}
if(nome=="kaue" && senha =="1234"){
    alert("login concedido");
    
}else{
    alert("tente novamenente seu intruso");
}
//laco de repetição
contador=0;
while(contador <100){
    contador=contador +1;
    console.log(contador);
}
 var celular=document.querySelector(".celular"); //icone do menu
 var listaMenu=document.querySelector(".menu ul"); //itens do menu

celular.addEventListener("click", function(){
listaMenu.classList.toggle("mostrarMenu");
});
