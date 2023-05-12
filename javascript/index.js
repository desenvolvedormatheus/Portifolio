// Modo noturno | Claro
document.querySelector(".btnNoturno").addEventListener("click", ()=>{
    // Pegar o elemento :root do css
    const root = document.querySelector("html")
    
    // pegar as variaveis css
    const estilo = getComputedStyle(root)
    const fundo2 = estilo.getPropertyValue("----fundo2")
    const letras = estilo.getPropertyValue("--letras")

    // modificar cores e elementos
    if(letras == " #ffffff"){
        document.querySelector(".lapwhite").style.display = "none"
        document.querySelector(".lapblack").style.display = "initial"
        root.style.setProperty("--fundo2", "#d6d6d6")
        root.style.setProperty("--letras", "#000000")
    } else{
        document.querySelector(".lapwhite").style.display = "initial"
        document.querySelector(".lapblack").style.display = "none"
        root.style.setProperty("--fundo2", " #111111")
        root.style.setProperty("--letras", " #ffffff")
    }
})
// Para não ocorrer sobreposição de menus
let lateralPerfil = false
let lateralmenu = false

// Menu lateral direita
function abrirFecharMenu(){
    if(lateralPerfil == true){
        fecharPerfil()
    }
    const menu = document.querySelector(".menu")
    const seta = document.querySelector(".setaMenu")
    const styleMenu = getComputedStyle(menu)

    if(styleMenu.display == "none"){
        menu.style.display = "initial"
        seta.classList.remove("bi-arrow-right")
        seta.classList.add("bi-arrow-left")
        lateralmenu = true
    } else{
        menu.style.display = "none"
        seta.classList.remove("bi-arrow-left")
        seta.classList.add("bi-arrow-right")
        lateralmenu = false
    }
}
document.querySelector(".btnMenu").addEventListener("click", ()=>{
    abrirFecharMenu()
})

// Menu lateral esquerda
function abrirPerfil() {
    if(lateralmenu == true){
        abrirFecharMenu()
    }
    document.querySelector(".lateralD").style.display = "initial"
    document.querySelector(".btnAbrirPerfil").style.display = "none"
    if(document.querySelector("body").clientWidth < 600){
        document.querySelector(".centro").style.display = "none"
        document.querySelector(".lateralD").style.width = "100%"
    }
    lateralPerfil = true
}
function fecharPerfil() {
    document.querySelector(".lateralD").style.display = "none"
    document.querySelector(".btnAbrirPerfil").style.display = "flex"
    if(document.querySelector("body").clientWidth < 600){
        document.querySelector(".centro").style.display = "initial"
        document.querySelector(".centro").style.width = "auto"
    }
    lateralPerfil = false
}
document.querySelector(".btnAbrirPerfil").addEventListener("click", ()=>{
    abrirPerfil()
})
document.querySelector(".btnFecharPerfil").addEventListener("click", ()=>{
    fecharPerfil()
})