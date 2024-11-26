const terrain = document.getElementById('terrain');
const nav = document.getElementById('left_bar');
const berger_menu = document.getElementById('berger_menu');
const from = document.getElementById('form');
const icone_previus = berger_menu.childNodes[0].nextSibling;
const GK = document.getElementById('GK');

const DF = document.getElementById('DF');
const LB = DF.firstChild.nextSibling;
const CB = DF.children.CB;
const RB = document.getElementById('RB');

const CM = document.getElementById('CM');
const CM1 = CM.firstChild;
const CM2 = CM.children[1];
const CM3 = CM.lastChild;

const ST = document.getElementById('ST');
const ST1 = ST.children[0];
const ST2 = ST.children[1];
const ST3 = ST.children[2];

const closeNav = (event) => {
    console.log(event.currentTarget)
    nav.classList.add("telephone:w-1/12")
}

const data = {
    GK: [{ nom: "BONO", club: "Hilal", shouting: "10/10", active: true }],
    CB: [
        { nom: "BONO", club: "Hilal", shouting: "10/10", active: true },
        { nom: "BONO", club: "Hilal", shouting: "10/10", active: true },
    ],
    LB: [],
    RB: [],
    CM: [],
    RM: [],
    LM: [],
    ST: [],
}

const Add = () => {
    createCard(data)

    // data.GK.map((j)=>{
    // })


}

const toggle = () => {
    nav.classList.toggle("telephone:w-1/12")

    if (nav.classList.contains("desktop:w-96")) {
        nav.classList.remove("desktop:w-96")
        nav.classList.add("desktop:w-14")
        terrain.classList.replace("bg-right", "bg-center")
        terrain.classList.replace("w-8/12", "w-11/12")
    } else {
        nav.classList.remove("desktop:w-14")
        nav.classList.add("desktop:w-96")
        terrain.classList.replace("bg-center", "bg-right")
        terrain.classList.replace("w-11/12", "w-8/12")
    }

    if (from.style.opacity == 1 || !from.style.opacity) {
        icone_previus.classList?.replace('fa-arrow-left', 'fa-bars')
    } else {
        icone_previus.classList.replace('fa-bars', 'fa-arrow-left')
    }
    from.style.opacity == 1 || !from.style.opacity ? from.style.opacity = 0 : from.style.opacity = 1;

}

const appendCards = (card) => {
    const cardclone = card.cloneNode(true)
    GK.appendChild(cardclone);
    const terrainArry = Array.from(terrain.children)
    
    console.log(terrainArry[0].children);
    Array.from(terrainArry[0].children).map((e)=>{
        e.appendChild(cardclone.cloneNode(true))
    })

    Array.from(terrainArry[1].children).map((e)=>{
        e.appendChild(cardclone.cloneNode(true))
    })

    console.log(terrainArry[2].children);
    

    // Array.from(terrainArry[2].children.children).map((e)=>{
    //     e.appendChild(cardclone.cloneNode(true))
    // })
        
        // .map((e)=>{
        //     console.log('test',e.children);
        // })
    
        

    // LB.appendChild(cardclone)
    // RB.appendChild(cardclone)
    // CB1.appendChild(cardclone)
    // CB2.appendChild(cardclone)

};

const createCard = () => {

    console.log(data);

    const card = document.createElement('div');
    const div_detaille = document.createElement('div');
    const p = document.createElement('p')
    const div_detaille_elem = document.createElement('div');
    const div_natio_club = document.createElement('div');
    const div_position = document.createElement('div');
    const div_position_left = document.createElement('div');
    const div_position_right = document.createElement('div');

    card.style.cssText = `
        background-image: url("./assets/img/card.webp");
        background-size: contain;
        background-repeat: no-repeat;
        height: 9rem;
        background-position: center;
        width: 6rem
    `

    div_position.appendChild(div_position_left);
    div_position.appendChild(div_position_right);

    div_detaille.appendChild(p);
    div_detaille.appendChild(div_detaille_elem);
    div_detaille.appendChild(div_natio_club);

    card.appendChild(div_position);
    card.appendChild(div_detaille)

    appendCards(card);
}

createCard();




terrain.addEventListener('click', closeNav);
berger_menu.addEventListener('click', toggle);
