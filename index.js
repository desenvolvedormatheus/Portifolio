// Modo noturno | Claro
document.querySelector(".btnNoturno").addEventListener("click", ()=>{
    if (document.documentElement.style.getPropertyValue('--fundoperfil') != '#fff'){
        document.querySelector(".sol").style.display = "none"
        document.querySelector(".displayN").style.display = "initial"
        document.documentElement.style.setProperty('--fundoperfil', '#fff');
        document.documentElement.style.setProperty('--letras', '#0a0a0a');
        document.querySelector(".lapblack").style.display = "flex"
        document.querySelector(".lapwhite").style.display = "none"
        
    }else{
        document.querySelector(".sol").style.display = "initial"
        document.querySelector(".displayN").style.display = "none"
        document.documentElement.style.setProperty('--fundoperfil', '#111111');
        document.documentElement.style.setProperty('--letras', '#fff');
        document.querySelector(".lapblack").style.display = "none"
        document.querySelector(".lapwhite").style.display = "flex"
    }
})

// Menu lateral
let btnMenu = document.querySelector(".btnMenu")
btnMenu.addEventListener("click", ()=>{
    if (getComputedStyle(document.querySelector(".lateralE")).getPropertyValue("width") == "48px"){
        document.querySelector(".lateralE").style.width = "17rem"
        document.querySelector(".menu").style.paddingRight = "0rem"
    } else{
        document.querySelector(".lateralE").style.width = "4rem"
        document.querySelector(".menu").style.paddingRight = "15rem"
    }
})