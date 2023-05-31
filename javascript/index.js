// // Modo noturno | Claro
document.querySelector(".btnNoturno").addEventListener("click", ()=>{
    // Pegar o elemento :root do css
    const root = document.querySelector("html")
    
    // pegar as variaveis css
    const estilo = getComputedStyle(root)
    const fundo1 = estilo.getPropertyValue("--fundo1")
    const fundo2 = estilo.getPropertyValue("--fundo2")
    const letras = estilo.getPropertyValue("--letras")

    // modificar cores e elementos
    if(letras == " #ffffff"){
      root.style.setProperty("--letras", "#000000")
        document.querySelector(".lapwhite").style.display = "none"
        document.querySelector(".lapblack").style.display = "initial"
        root.style.setProperty("--fundo2", " #ffffff")
        root.style.setProperty("--fundo1", " #e6e6e6")
    } else{
      root.style.setProperty("--letras", " #ffffff")
        document.querySelector(".lapwhite").style.display = "initial"
        document.querySelector(".lapblack").style.display = "none"
        root.style.setProperty("--fundo2", " #111111")
        root.style.setProperty("--fundo1", " #050505")
    }
})

// Scroll suave
let menu = document.querySelectorAll(".menu a")
menu = [... menu].slice(1)

console.log(menu)
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
  const lateralD = document.querySelector(".lateralD")
  let itens = document.querySelectorAll(".menu a")
  itens = [... itens].slice(1)

  if(lateralD.style.display != "flex"){
    lateralD.style.display = "flex"

    itens.forEach(item =>{
      item.style.display = "none"
    })
  } else{
    lateralD.style.display = "none"
    itens.forEach(item =>{
      item.style.display = "flex"
    })
  }

})
