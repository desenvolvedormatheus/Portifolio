// Menu lateral
let widthJanela = window.innerWidth;
if (widthJanela > 500){
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
} else{
    let btnMenu = document.querySelector(".btnMenu")
    btnMenu.addEventListener("click", ()=>{
        if (getComputedStyle(document.querySelector(".lateralE")).getPropertyValue("width") == "48px"){
            document.querySelector(".lateralE").style.width = "96%"
            document.querySelector(".menu").style.paddingRight = "0rem"
        } else{
            document.querySelector(".lateralE").style.width = "4rem"
            document.querySelector(".menu").style.paddingRight = "15rem"
        }
    })
}

// Abrir perfil em telas menores
document.querySelector(".abrirPerfil").addEventListener("click", ()=>{
    if(document.querySelector(".abrirPerfil").style.position != "absolute"){
        document.querySelector(".lateralD").style.right = "1rem"
        document.querySelector(".abrirPerfil").style.position = "absolute"
        document.querySelector(".abrirPerfil").style.fontSize = "1rem"
        document.querySelector(".perfil h2").style.display = "initial"
        document.querySelector(".perfil").style.transform = "scale(1)"
        document.querySelector(".perfil").style.position = "initial"
        document.querySelector(".perfil").style.background = "var(--fundoperfil)"
    } else{
        document.querySelector(".lateralD").style.right = "-20rem"
        document.querySelector(".abrirPerfil").style.position = "initial"
        document.querySelector(".abrirPerfil").style.fontSize = "1.5rem"
        document.querySelector(".perfil h2").style.display = "none"
        document.querySelector(".perfil").style.transform = "scale(0.6)"
        document.querySelector(".perfil").style.position = "absolute"
        document.querySelector(".perfil").style.background = "transparent"
    }
})
