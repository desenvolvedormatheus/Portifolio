// // Modo noturno | Claro
// document.querySelector(".btnNoturno").addEventListener("click", ()=>{
//     // Pegar o elemento :root do css
//     const root = document.querySelector("html")
    
//     // pegar as variaveis css
//     const estilo = getComputedStyle(root)
//     const fundo2 = estilo.getPropertyValue("----fundo2")
//     const letras = estilo.getPropertyValue("--letras")

//     // modificar cores e elementos
//     if(letras == " #ffffff"){
//         document.querySelector(".lapwhite").style.display = "none"
//         document.querySelector(".lapblack").style.display = "initial"
//         root.style.setProperty("--fundo2", "#d6d6d6")
//         root.style.setProperty("--letras", "#000000")
//     } else{
//         document.querySelector(".lapwhite").style.display = "initial"
//         document.querySelector(".lapblack").style.display = "none"
//         root.style.setProperty("--fundo2", " #111111")
//         root.style.setProperty("--letras", " #ffffff")
//     }
// })
// // Para não ocorrer sobreposição de menus
// let lateralPerfil = false
// let lateralmenu = false

// // Menu lateral direita
// function abrirFecharMenu(){
//     if(lateralPerfil == true){
//         fecharPerfil()
//     }
//     const menu = document.querySelector(".menu")
//     const seta = document.querySelector(".setaMenu")
//     const styleMenu = getComputedStyle(menu)

//     if(styleMenu.display == "none"){
//         menu.style.display = "initial"
//         seta.classList.remove("bi-arrow-right")
//         seta.classList.add("bi-arrow-left")
//         lateralmenu = true
//     } else{
//         menu.style.display = "none"
//         seta.classList.remove("bi-arrow-left")
//         seta.classList.add("bi-arrow-right")
//         lateralmenu = false
//     }
// }
// document.querySelector(".btnMenu").addEventListener("click", ()=>{
//     abrirFecharMenu()
// })

// // Menu lateral esquerda
// function abrirPerfil() {
//     if(lateralmenu == true){
//         abrirFecharMenu()
//     }
//     document.querySelector(".lateralD").style.display = "flex"
//     document.querySelector(".btnAbrirPerfil").style.display = "none"
//     if(document.querySelector("body").clientWidth < 600){
//         document.querySelector(".centro").style.display = "none"
//         document.querySelector(".lateralD").style.width = "100%"
//     }
//     lateralPerfil = true
// }
// function fecharPerfil() {
//     document.querySelector(".lateralD").style.display = "none"
//     document.querySelector(".btnAbrirPerfil").style.display = "flex"
//     if(document.querySelector("body").clientWidth < 600){
//         document.querySelector(".centro").style.display = "initial"
//         document.querySelector(".centro").style.width = "auto"
//     }
//     lateralPerfil = false
// }
// document.querySelector(".btnAbrirPerfil").addEventListener("click", ()=>{
//     abrirPerfil()
// })
// document.querySelector(".btnFecharPerfil").addEventListener("click", ()=>{
//     fecharPerfil()
// })

// Scroll suave
const menu = document.querySelectorAll(".menu a")
function alturaElemento(ancora) {
    const id = ancora.getAttribute("href")
    return document.querySelector(id).offsetTop
}

function suaveScroll(event) {
    event.preventDefault()
    let distanciaTop = alturaElemento(event.target)
    smoothScrollTo(distanciaTop-50, 1000)
}

menu.forEach((link) =>{
    link.addEventListener("click", suaveScroll)
})

function smoothScrollTo(endY, duration) {
    const startY = document.querySelector(".centro").scrollTop;
    const distanceY = endY - startY;
    const startTime = new Date().getTime();

    duration = typeof duration !== "undefined" ? duration : 400;
  
    const easeInOutQuart = (time, from, distance, duration) => {
      if ((time /= duration / 2) < 1)
        return (distance / 2) * time * time * time * time + from;
      return (-distance / 2) * ((time -= 2) * time * time * time - 2) + from;
    };

    const timer = setInterval(() => {
      const time = new Date().getTime() - startTime;
      const newY = easeInOutQuart(time, startY, distanceY, duration);
      if (time >= duration) {
        clearInterval(timer);
      }
      document.querySelector(".centro").scroll(0, newY);
    }, 1000 / 60);
}

// Perfil mobile
document.querySelector(".btnPerfil").addEventListener("click", ()=>{
  const itens = document.querySelectorAll(".menu a")
  if(document.querySelector(".lateralD").style.display != "flex"){
    document.querySelector(".lateralD").style.display = "flex"
    itens.forEach((item) =>{
      item.style.display = "none"
    })
  } else{
    document.querySelector(".lateralD").style.display = "none"
    itens.forEach((item) =>{
      item.style.display = "flex"
    })
  }
} )
