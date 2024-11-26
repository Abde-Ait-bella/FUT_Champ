const terrain = document.getElementById('terrain');
const nav = document.getElementById('left_bar');
const berger_menu = document.getElementById('berger_menu');
const from = document.getElementById('form');

const closeNav = (event) =>{
    console.log(event.currentTarget)
    nav.classList.add("telephone:w-1/12")
}
const toggle = () =>{
    nav.classList.toggle("telephone:w-1/12")
    nav.classList.toggle("desktop:w-14")
    const icone_previus = berger_menu.childNodes[0].nextSibling;
    if(from.style.opacity == 1|| !from.style.opacity){
        icone_previus.classList?.replace('fa-arrow-left', 'fa-bars')
    }else{
        icone_previus.classList.replace('fa-bars', 'fa-arrow-left')
    }
    from.style.opacity == 1 || !from.style.opacity ? from.style.opacity = 0 : from.style.opacity = 1;
    
}

terrain.addEventListener('click', closeNav);
berger_menu.addEventListener('click', toggle);
