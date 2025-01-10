boton_trucos = document.getElementById("boton_trucos")
textos = document.getElementsByTagName("p")
botones = document.getElementsByClassName("boton")
claves = document.getElementById("claves")

var texto_visible = false;
boton_trucos.addEventListener("click", function(){
    if(texto_visible){
        for(var i = 0; i < textos.length; i++){
            botones[i].style.width = "50px";
            textos[i].style.visibility = "hidden";
            claves.style.width = "550px";
        }
        texto_visible = false;
    }
    else{
        for(var i = 0; i < textos.length; i++){
            botones[i].style.width = "300px";
            textos[i].style.visibility = "visible";
            claves.style.width = "300px";
        }
        texto_visible = true;
    }
})

autos = document.getElementById("autos")
salud = document.getElementById("salud")
armas = document.getElementById("armas")
habilidades = document.getElementById("habilidades")
busqueda = document.getElementById("busqueda")
entorno = document.getElementById("entorno")

tabla_autos = document.getElementById("tabla_autos")
tabla_salud = document.getElementById("tabla_salud")
tabla_armas = document.getElementById("tabla_armas")
tabla_habilidades = document.getElementById("tabla_habilidades")
tabla_busqueda = document.getElementById("tabla_busqueda")
tabla_entorno = document.getElementById("tabla_entorno")

autos.style.backgroundColor = "#b3e5ec";

autos.addEventListener("click", function(){
    tabla_autos.classList.remove("noVisible")
    tabla_salud.classList.add("noVisible")
    tabla_armas.classList.add("noVisible")
    tabla_habilidades.classList.add("noVisible")
    tabla_busqueda.classList.add("noVisible")
    tabla_entorno.classList.add("noVisible")

    autos.style.backgroundColor = "#b3e5ec";
    salud.style.backgroundColor = "white";
    armas.style.backgroundColor = "white";
    habilidades.style.backgroundColor = "white";
    busqueda.style.backgroundColor = "white";
    entorno.style.backgroundColor = "white";
})
salud.addEventListener("click", function(){
    tabla_autos.classList.add("noVisible")
    tabla_salud.classList.remove("noVisible")
    tabla_armas.classList.add("noVisible")
    tabla_habilidades.classList.add("noVisible")
    tabla_busqueda.classList.add("noVisible")
    tabla_entorno.classList.add("noVisible")

    autos.style.backgroundColor = "white";
    salud.style.backgroundColor = "#b3e5ec";
    armas.style.backgroundColor = "white";
    habilidades.style.backgroundColor = "white";
    busqueda.style.backgroundColor = "white";
    entorno.style.backgroundColor = "white";
})
armas.addEventListener("click", function(){
    tabla_autos.classList.add("noVisible")
    tabla_salud.classList.add("noVisible")
    tabla_armas.classList.remove("noVisible")
    tabla_habilidades.classList.add("noVisible")
    tabla_busqueda.classList.add("noVisible")
    tabla_entorno.classList.add("noVisible")

    autos.style.backgroundColor = "white";
    salud.style.backgroundColor = "white";
    armas.style.backgroundColor = "#b3e5ec";
    habilidades.style.backgroundColor = "white";
    busqueda.style.backgroundColor = "white";
    entorno.style.backgroundColor = "white";
})
habilidades.addEventListener("click", function(){
    tabla_autos.classList.add("noVisible")
    tabla_salud.classList.add("noVisible")
    tabla_armas.classList.add("noVisible")
    tabla_habilidades.classList.remove("noVisible")
    tabla_busqueda.classList.add("noVisible")
    tabla_entorno.classList.add("noVisible")

    autos.style.backgroundColor = "white";
    salud.style.backgroundColor = "white";
    armas.style.backgroundColor = "white";
    habilidades.style.backgroundColor = "#b3e5ec";
    busqueda.style.backgroundColor = "white";
    entorno.style.backgroundColor = "white";
})
busqueda.addEventListener("click", function(){
    tabla_autos.classList.add("noVisible")
    tabla_salud.classList.add("noVisible")
    tabla_armas.classList.add("noVisible")
    tabla_habilidades.classList.add("noVisible")
    tabla_busqueda.classList.remove("noVisible")
    tabla_entorno.classList.add("noVisible")

    autos.style.backgroundColor = "white";
    salud.style.backgroundColor = "white";
    armas.style.backgroundColor = "white";
    habilidades.style.backgroundColor = "white";
    busqueda.style.backgroundColor = "#b3e5ec";
    entorno.style.backgroundColor = "white";
})
entorno.addEventListener("click", function(){
    tabla_autos.classList.add("noVisible")
    tabla_salud.classList.add("noVisible")
    tabla_armas.classList.add("noVisible")
    tabla_habilidades.classList.add("noVisible")
    tabla_busqueda.classList.add("noVisible")
    tabla_entorno.classList.remove("noVisible")

    autos.style.backgroundColor = "white";
    salud.style.backgroundColor = "white";
    armas.style.backgroundColor = "white";
    habilidades.style.backgroundColor = "white";
    busqueda.style.backgroundColor = "white";
    entorno.style.backgroundColor = "#b3e5ec";
})
