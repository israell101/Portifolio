var hora = new Date().getHours();
let texto = document.getElementById("saudacao");

if (hora >= 6 && hora < 12) {
  texto.textContent = "Bom Dia";
} else if (hora >= 12 && hora < 18) {
  texto.textContent = "Boa Tarde";
} else {
  texto.textContent = "Boa Noite";
}

//---------------------------MENU------------------------------//

let bar = document.getElementById("bar");
let lista = document.querySelector(".nav-list");


bar.addEventListener("click",function(){
   lista.style.display = "block"
});
 

