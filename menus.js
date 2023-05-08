// Carregamento da pagina
window.onload = ()=>{
    document.querySelector("main").style.opacity = "1"
    document.querySelector(".carregando").style.display = "none"
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