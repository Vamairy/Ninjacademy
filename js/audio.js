/* AUDIOS ESPADA AGUDA PARA NAVBARS */
 
function clickQuienesSomos() {
    let sonido_espada = document.getElementById("audioQuienesSomos");
    sonido_espada.play();
    setTimeout(()=> location.href="./index.html",900);
    }; 

function clickQuieroSer() {
   let sonido_espada = document.getElementById("audioQuieroSer");
   sonido_espada.play();
   setTimeout(()=> location.href="./quiero-ser-ninja.html",900);
}

function clickNovedades() {
   let sonido_espada = document.getElementById("audioNovedades");
   sonido_espada.play();
   setTimeout(()=> location.href="./novedades.html",900);
}

function clickEmpresas() {
   let sonido_espada = document.getElementById("audioEmpresas");
   sonido_espada.play();
   setTimeout(()=> location.href="./empresas.html",900);
}

/* AUDIOS COMBATE HUYA PARA INICIAR SESION */

function clickIniciarSesion() {
   let sonido_huya = document.getElementById("audioIniciarSesion");
   sonido_huya.play();
   setTimeout(()=> window.open('https://ninjacademy.com.mx/login','_blank'),800);
}

/* AUDIOS HOVER PARA YA LO TENGO | AUN NO */

function hoverYaTengo(){
   let sonido_espada = document.getElementById("audioYaTengo");
   sonido_espada.play();
}

function hoverAunNo(){
   let sonido_huya = document.getElementById("audioAunNo");
   sonido_huya.play();
}

/* AUDIO HOVER OVER HEADER EMPRESAS */

function overInfoEmpresa(){
   let sonido_empresa = document.getElementById("audioInfoEmpresas");
   sonido_empresa.play();
}

function leaveInfoEmpresa(){
   let sonido_empresa = document.getElementById("audioInfoEmpresas");
   sonido_empresa.pause();
}

/* AUDIO HOVER OVER HEADER SOMOS NINJAS */

function overSomos(){
   let sonido_somos = document.getElementById("audioSomos");
   sonido_somos.play();
}

/* AUDIO CLICK IMAGENES EMPRESAS | NOVEDADES*/

function clickImgEmpresa(){
   let sonido_empresa = document.getElementById("audioImgEmpresa");
   sonido_empresa.play();
}

function clickImgNovedades(){
   let sonido_novedades = document.getElementById("audioImgNovedades");
   sonido_novedades.play();
}

/* HOVER PARA BOTONES BLANCOS */

function hoverBtnBlanco(){
   let sonido_novedades = document.getElementById("audioBtnBlanco");
   sonido_novedades.play();
}

/* SCROLL/SWIP PARA MOBILE  */

function scrollSomos(){
   let sonido_somos = document.getElementById("audioSomos");
   sonido_somos.play();
}

function scrollEmpresa(){
   let sonido_empresa = document.getElementById("audioInfoEmpresas");
   sonido_empresa.play();
}




