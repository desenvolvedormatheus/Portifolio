// Modo Noturno
// Notebook
const radio = document.querySelector('.radio');
radio.addEventListener('click', function() {
    const lapwhite = document.querySelector('.lapwhite')
    const lapblack = document.querySelector('.lapblack')
    const btn = document.querySelector('.radio span');
    let ativo = '2.58rem';
    let inativo = '0.28rem';
    
    if(btn.style.left === inativo){
        btn.style.left = ativo;
        document.documentElement.style.setProperty('--fundo', '#000');
        document.documentElement.style.setProperty('--texto', '#fff');
        if(window.innerWidth > 800){
            lapblack.style.display = 'none'
            lapwhite.style.display = 'initial'
        }
    } else {
        btn.style.left = inativo;
        document.documentElement.style.setProperty('--fundo', '#fff');
        document.documentElement.style.setProperty('--texto', '#000');
        if(window.innerWidth > 800){
            lapwhite.style.display = 'none'
            lapblack.style.display = 'initial'
        }
    };
});
// Btn segundaria do do site
const aplicarCor = document.querySelector('.aplicarCor')
aplicarCor.addEventListener('click', function(){
    const caixaCor = document.querySelector('#cor').value
    document.documentElement.style.setProperty('--segundaria', caixaCor)
    alert('Algumas cores como preto, branco e cores claras podem não dar um bom contraste, mas fica ao seu critério')
})
// Btn para voltar ao topo
const seta = document.querySelector('.bi-arrow-up')
seta.addEventListener('click', function(){
        window.scrollTo(0, 0);
})
function conferirseta(){
    let scroll = window.pageYOffset;
    if(scroll === 0){
        seta.style.display = 'none'
    } else{
        seta.style.display = 'initial'
    }
}
setInterval(conferirseta, 100)

// Menu max-width 680px
const menu = document.querySelector('.haburguer')
menu.addEventListener('click', function(){
    const ul = document.querySelector('ul')
    ul.style.top = '6rem'
});
const fecharMenu = document.querySelector('.fechar')

fecharMenu.addEventListener('click', function(){  
    const ul = document.querySelector('ul')
    ul.style.top = '-30rem'
})
