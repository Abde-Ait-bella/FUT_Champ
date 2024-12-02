const terrain = document.getElementById('terrain');
const nav = document.getElementById('left_bar');
const berger_menu = document.getElementById('berger_menu');
const form = document.getElementById('form');
const icone_previus = berger_menu.childNodes[0].nextSibling;
const card = document.createElement('div');
const div_detaille = document.createElement('div');
const p = document.createElement('p')
const div_detaille_elem = document.createElement('div');
const div_natio_club = document.createElement('div');
const div_position = document.createElement('div');
const div_position_left = document.createElement('div');
const div_position_right = document.createElement('div');
const img = document.createElement('img');
const div = document.createElement('div');
const img_card = document.createElement('img');



const d = null;

fetch('./players.json')
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error('Erreur:', error));

const closeNav = () => {
    nav.classList.add("telephone:w-1/12")
}


const toggle = () => {
    nav.classList.toggle("telephone:w-1/12")

    if (nav.classList.contains("desktop:w-96")) {
        nav.classList.replace("desktop:w-96", "desktop:w-14")
        // nav.classList.remove("desktop:w-96")
        // nav.classList.add("desktop:w-14")
        // nav.classList.replace("tablet:w-5/12", "tablet:w-14")
        terrain.classList.replace("bg-right", "bg-center")
        terrain.classList.replace("w-8/12", "w-11/12")
        document.forms[0].classList.replace("w-80", "w-2")

    } else {
        // nav.classList.add("desktop:w-14")
        nav.classList.replace("desktop:w-14", "desktop:w-96")
        // nav.classList.replace("tablet:w-5/12", "tablet:w-14")
        terrain.classList.replace("bg-center", "bg-right")
        terrain.classList.replace("w-11/12", "w-8/12")
        document.forms[0].classList.replace("w-2", "w-80")
    }

    if (form.style.opacity == 1 || !form.style.opacity) {
        icone_previus.classList?.replace('fa-arrow-left', 'fa-bars')
        form.style.opacity = 0
    } else {
        icone_previus.classList.replace('fa-bars', 'fa-arrow-left')
        form.style.opacity = 1
    }

}



const data = {
    GK: [
        {
            name: "Lionel Messi",
            photo: "https://cdn.sofifa.net/players/020/801/25_120.png",
            position: "RW",
            nationality: "Argentina",
            flag: "https://cdn.sofifa.net/flags/ar.png",
            club: "Inter Miami",
            logo: "https://cdn.sofifa.net/meta/team/239235/120.png",
            rating: 93,
            pace: 85,
            shooting: 92,
            passing: 91,
            dribbling: 95,
            defending: 35,
            physical: 65,
            active: false,
        },
    ],
    CB: [
        {
            name: "Cristiano Ronaldo",
            photo: "https://cdn.sofifa.net/players/020/801/25_120.png",
            position: "ST",
            nationality: "Portugal",
            flag: "https://cdn.sofifa.net/flags/pt.png",
            club: "Al Nassr",
            logo: "https://cdn.sofifa.net/meta/team/2506/120.png",
            rating: 91,
            pace: 84,
            shooting: 94,
            passing: 82,
            dribbling: 87,
            defending: 34,
            physical: 77,
            active: false
        },
        {
            name: "Cristiano Ronaldo",
            photo: "https://cdn.sofifa.net/players/020/801/25_120.png",
            position: "ST",
            nationality: "Portugal",
            flag: "https://cdn.sofifa.net/flags/pt.png",
            club: "Al Nassr",
            logo: "https://cdn.sofifa.net/meta/team/2506/120.png",
            rating: 91,
            pace: 84,
            shooting: 94,
            passing: 82,
            dribbling: 87,
            defending: 34,
            physical: 77,
            active: false
        },
        { name: "BONO", club: "Hilal", rating: 15, img: "", shooting: "10/10", active: false },
        { name: "BONO", club: "Hilal", rating: 15, img: "", shooting: "10/10", active: false },
    ],
    LB: [
        {
            name: "Cristiano Ronaldo",
            photo: "https://cdn.sofifa.net/players/020/801/25_120.png",
            position: "ST",
            nationality: "Portugal",
            flag: "https://cdn.sofifa.net/flags/pt.png",
            club: "Al Nassr",
            logo: "https://cdn.sofifa.net/meta/team/2506/120.png",
            rating: 91,
            pace: 84,
            shooting: 94,
            passing: 82,
            dribbling: 87,
            defending: 34,
            physical: 77,
            active: false
        },
        { name: "baba", club: "Hilal", rating: 15, img: "", shooting: "10/10", active: false },
        { name: "BONO", club: "Hilal", rating: 15, img: "", shooting: "10/10", active: false },
        { name: "BONO", club: "Hilal", rating: 15, img: "", shooting: "10/10", active: false },
    ],
    RB: [
        {
            name: "Cristiano Ronaldo",
            photo: "https://cdn.sofifa.net/players/020/801/25_120.png",
            position: "ST",
            nationality: "Portugal",
            flag: "https://cdn.sofifa.net/flags/pt.png",
            club: "Al Nassr",
            logo: "https://cdn.sofifa.net/meta/team/2506/120.png",
            rating: 91,
            pace: 84,
            shooting: 94,
            passing: 82,
            dribbling: 87,
            defending: 34,
            physical: 77,
            active: false
        },
        { name: "baba", club: "Hilal", rating: 15, img: "", shooting: "10/10", active: false },
        { name: "BONO", club: "Hilal", rating: 15, img: "", shooting: "10/10", active: false },
        { name: "BONO", club: "Hilal", rating: 15, img: "", shooting: "10/10", active: false },
    ],
    CM: [
        {
            name: "Cristiano Ronaldo",
            photo: "https://cdn.sofifa.net/players/020/801/25_120.png",
            position: "ST",
            nationality: "Portugal",
            flag: "https://cdn.sofifa.net/flags/pt.png",
            club: "Al Nassr",
            logo: "https://cdn.sofifa.net/meta/team/2506/120.png",
            rating: 91,
            pace: 84,
            shooting: 94,
            passing: 82,
            dribbling: 87,
            defending: 34,
            physical: 77,
            active: false
        },
        {
            name: "Cristiano Ronaldo",
            photo: "https://cdn.sofifa.net/players/020/801/25_120.png",
            position: "ST",
            nationality: "Portugal",
            flag: "https://cdn.sofifa.net/flags/pt.png",
            club: "Al Nassr",
            logo: "https://cdn.sofifa.net/meta/team/2506/120.png",
            rating: 91,
            pace: 84,
            shooting: 94,
            passing: 82,
            dribbling: 87,
            defending: 34,
            physical: 77,
            active: false
        },
        { name: "BONO", club: "Hilal", rating: 15, img: "", shooting: "10/10", active: false },
        { name: "BONO", club: "Hilal", rating: 15, img: "", shooting: "10/10", active: false },
    ],
    RW: [
        {
            name: "Kevin De Bruyne",
            photo: "https://cdn.sofifa.net/players/192/985/25_120.png",
            position: "CM",
            nationality: "Belgium",
            flag: "https://cdn.sofifa.net/flags/be.png",
            club: "Manchester City",
            logo: "https://cdn.sofifa.net/players/239/085/25_120.png",
            rating: 91,
            pace: 74,
            shooting: 86,
            passing: 93,
            dribbling: 88,
            defending: 64,
            physical: 78,
            active: true
        },
    ],
    LW: [
        {
            name: "Cristiano Ronaldo",
            photo: "https://cdn.sofifa.net/players/020/801/25_120.png",
            position: "ST",
            nationality: "Portugal",
            flag: "https://cdn.sofifa.net/flags/pt.png",
            club: "Al Nassr",
            logo: "https://cdn.sofifa.net/meta/team/2506/120.png",
            rating: 91,
            pace: 84,
            shooting: 94,
            passing: 82,
            dribbling: 87,
            defending: 34,
            physical: 77,
            active: false
        },
    ],
    ST: [
        {
            name: "Cristiano Ronaldo",
            photo: "https://cdn.sofifa.net/players/020/801/25_120.png",
            position: "ST",
            nationality: "Portugal",
            flag: "https://cdn.sofifa.net/flags/pt.png",
            club: "Al Nassr",
            logo: "https://cdn.sofifa.net/meta/team/2506/120.png",
            rating: 91,
            pace: 84,
            shooting: 94,
            passing: 82,
            dribbling: 87,
            defending: 34,
            physical: 77,
            active: false
        },
        { name: "baba", club: "Hilal", rating: 15, img: "", shooting: "10/10", active: false },
        { name: "BONO", club: "Hilal", rating: 15, img: "", shooting: "10/10", active: false },
        { name: "BONO", club: "Hilal", rating: 15, img: "", shooting: "10/10", active: false },
    ],
}

const formations = [
    [
        { left: "41%", bottom: "0%" },
        { left: "9%", bottom: "27%" },
        { left: "30%", bottom: "25%" },
        { left: "52%", bottom: "25%" },
        { left: "73%", bottom: "27%" },
        { left: "20%", bottom: "54%" },
        { left: "41%", bottom: "52%" },
        { left: "62.3%", bottom: "54%" },
        { left: "21.5%", bottom: "84%" },
        { left: "41%", bottom: "84%" },
        { left: "61%", bottom: "84%" },
    ],
    [
        { left: "41%", bottom: "0%" },
        { left: "9%", bottom: "27%" },
        { left: "30%", bottom: "25%" },
        { left: "52%", bottom: "25%" },
        { left: "73%", bottom: "27%" },
        { left: "31%", bottom: "52%" },
        { left: "51%", bottom: "52%" },
        { left: "70%", bottom: "56%" },
        { left: "11.5%", bottom: "56%" },
        { left: "33%", bottom: "84%" },
        { left: "51%", bottom: "84%" },
    ]
]

const createCard = () => {

    card.classList.add('card');
    div_detaille.classList.add('card_detaille')
    div_detaille_elem.classList.add('card_detaille_elem')
    p.classList.add('card_paragraph')
    div_position.classList.add("card_position")
    img_card.classList.add('card_image')
    const div = document.createElement('div');
    div.classList.add('relative');
    div.classList.add('w-full');
    div.classList.add('grid');
    div.classList.add('justify-center');
    div_natio_club.classList.add('flex');
    div_natio_club.classList.add('gap-2');
    div_natio_club.classList.add('items-center');

    div_position.appendChild(div_position_left);
    div_position.appendChild(div_position_right);

    div_detaille.appendChild(p);
    div_detaille.appendChild(div_detaille_elem);
    div_detaille.appendChild(div_natio_club);

    div.appendChild(div_position);
    div.appendChild(div_detaille);
    card.append(div);
    div_position.children[0].classList.add('card_rating')

    appendCards(card);

}

const p_detaille = document.createElement('p')
p_detaille.style.fontWeight = "700";
p_detaille.style.fontSize = "12px";

const fill_GK_card = () => {

    const GK = document.getElementById('card_0');

    const card_GK = card.cloneNode(true)

    const GK_data = data.GK.filter((d) => d.active == true)

    var stats = [
        ['DV', 'diving'],
        ['HD', 'handling'],
        ['KC', 'kicking'],
        ['REF', 'reflexes'],
        ['SP', 'speed'],
        ['PS', 'positioning'],
    ]

    if (GK_data.length !== 0) {

        card_GK.children[0].children[0].children[0].textContent = GK_data[0].rating;
        card_GK.children[0].children[0].children[1].textContent = GK_data[0].position;
        card_GK.children[0].children[1].children[0].textContent = GK_data[0].name.toLocaleLowerCase().split(" ")[0];
        img_card.src = GK_data[0].photo;
        card_GK.children[0].appendChild(img_card.cloneNode(true));

        stats.map((stat) => {
            const div_reserve = div.cloneNode(true);
            const p_resreve = p_detaille.cloneNode(true);
            p_resreve.textContent = GK_data[0][stat[1]];
            div_reserve.textContent += stat[0];
            div_reserve.appendChild(p_resreve)
            card_GK.children[0].children[1].children[1].appendChild(div_reserve);
        })
        img.classList.add('w-[20px]');
        img.classList.add('h-fit');
        
        const img_nationalite = img.cloneNode(true);
        img_nationalite.src = GK_data[0].nationality.replace(/&amp;/g, '&');

        const img_club = img.cloneNode(true);
        img_club.src = GK_data[0].club.replace(/&amp;/g, '&');
        
        card_GK.children[0].children[1].children[2].appendChild(img_nationalite);
        card_GK.children[0].children[1].children[2].appendChild(img_club);

        card_GK.style.left = formations[window.localStorage.getItem('formation')][0].left
        card_GK.style.bottom = formations[window.localStorage.getItem('formation')][0].bottom

        GK.children[0] ? GK.children[0].replaceWith(card_GK) : GK.appendChild(card_GK);
    }
}

var stats = [
    ['PC', 'pace'],
    ['SH', 'shooting'],
    ['PS', 'passing'],
    ['DR', 'dribbling'],
    ['DE', 'defending'],
    ['PH', 'physical'],
]

const fill_LB_card = () => {

    const LB = document.getElementById('card_1');

    const card_LB = card.cloneNode(true)

    const LB_data = data.LB.filter((d) => d.active == true).slice(0, 1)
    LB_data.slice(0, 1)

    if (LB_data.length !== 0) {

        card_LB.children[0].children[1].children[0].textContent = LB_data[0].name.toLocaleLowerCase().split(" ")[0]
        card_LB.children[0].children[0].children[0].textContent = LB_data[0].rating;
        card_LB.children[0].children[0].children[1].textContent = LB_data[0].position;
        img_card.src = LB_data[0].photo;
        card_LB.children[0].appendChild(img_card.cloneNode(true));

        stats.map((stat) => {
            const div_reserve = div.cloneNode(true);
            const p_resreve = p_detaille.cloneNode(true);
            p_resreve.textContent = LB_data[0][stat[1]];
            div_reserve.textContent += stat[0];
            div_reserve.appendChild(p_resreve)
            card_LB.children[0].children[1].children[1].appendChild(div_reserve);
        })

        card_LB.style.left = formations[window.localStorage.getItem('formation')][1].left;
        card_LB.style.bottom = formations[window.localStorage.getItem('formation')][1].bottom;

        LB.children[0] ? LB.children[0].replaceWith(card_LB) : LB.appendChild(card_LB);
    }
}

const fill_RB_card = () => {

    const RB = document.getElementById('card_4');

    const card_RB = card.cloneNode(true)
    const RB_data = data.RB.filter((d) => d.active == true).slice(0, 1)

    if (RB_data.length !== 0) {

        card_RB.children[0].children[1].children[0].textContent = RB_data[0].name.toLocaleLowerCase().split(" ")[0]
        card_RB.children[0].children[0].children[0].textContent = RB_data[0].rating;
        card_RB.children[0].children[0].children[1].textContent = RB_data[0].position;
        img_card.src = RB_data[0].photo;
        card_RB.children[0].appendChild(img_card.cloneNode(true));

        stats.map((stat) => {
            const div_reserve = div.cloneNode(true);
            const p_resreve = p_detaille.cloneNode(true);
            p_resreve.textContent = RB_data[0][stat[1]];
            div_reserve.textContent += stat[0];
            div_reserve.appendChild(p_resreve)
            card_RB.children[0].children[1].children[1].appendChild(div_reserve);
        })

        card_RB.style.left = formations[window.localStorage.getItem('formation')][4].left;
        card_RB.style.bottom = formations[window.localStorage.getItem('formation')][4].bottom;

        RB.children[0] ? RB.children[0].replaceWith(card_RB) : RB.appendChild(card_RB)

    }
}

const fill_CB_card = () => {

    const CB_data = data.CB.filter((d) => d.active == true).slice(0, 2)

    if (CB_data.length !== 0) {

        for (let index = 0; index < CB_data.length; index++) {

            const card_CB = card.cloneNode(true);
            card_CB.children[0].children[1].children[0].textContent = CB_data[index].name.toLocaleLowerCase().split(" ")[0]
            card_CB.children[0].children[0].children[0].textContent = CB_data[index].rating;
            card_CB.children[0].children[0].children[1].textContent = CB_data[index].position;
            img_card.src = CB_data[0].photo;
            card_CB.children[0].appendChild(img_card.cloneNode(true));

            stats.map((stat, i) => {
                const div_reserve = div.cloneNode(true);
                const p_resreve = p_detaille.cloneNode(true);

                p_resreve.textContent = CB_data[index][stat[1]];
                div_reserve.textContent += stat[0];
                div_reserve.appendChild(p_resreve)

                card_CB.children[0].children[1].children[1].appendChild(div_reserve);

            })

            card_CB.style.left = formations[window.localStorage.getItem('formation')][index + 2].left;
            card_CB.style.bottom = formations[window.localStorage.getItem('formation')][index + 2].bottom;

            terrain.children[index + 2].children[0] ? terrain.children[index + 2].children[0].replaceWith(card_CB) : terrain.children[index + 2].appendChild(card_CB)

        }
    }
}

const fill_CM_card = () => {

    const CM_data = data.CM.filter((d) => d.active == true).splice(0, 3)

    if (CM_data.length !== 0) {

        CM_data.map((e, i) => {

            const card_CM = card.cloneNode(true);
            card_CM.children[0].children[1].children[0].textContent = CM_data[i].name.toLocaleLowerCase().split(" ")[0]
            card_CM.children[0].children[0].children[0].textContent = CM_data[i].rating;
            card_CM.children[0].children[0].children[1].textContent = CM_data[i].position;
            img_card.src = CM_data[0].photo;
            card_CM.children[0].appendChild(img_card.cloneNode(true));

            stats.map((stat) => {
                const div_reserve = div.cloneNode(true);
                const p_resreve = p_detaille.cloneNode(true);
                p_resreve.textContent = CM_data[i][stat[1]];
                div_reserve.textContent += stat[0];
                div_reserve.appendChild(p_resreve)
                card_CM.children[0].children[1].children[1].appendChild(div_reserve);
            })

            i === 1 ? card_CM.style.marginTop = "1rem" : "";


            card_CM.style.left = formations[window.localStorage.getItem('formation')][i + 5].left;
            card_CM.style.bottom = formations[window.localStorage.getItem('formation')][i + 5].bottom;

            terrain.children[i + 5].children[0] ? terrain.children[i + 5].children[0].replaceWith(card_CM) : terrain.children[i + 5].appendChild(card_CM)

        })
    }
}

const fill_ST_card = () => {

    const card_ST = card.cloneNode(true)
    const ST_data = data.ST.filter((d) => d.active == true).slice(0, 1)

    if (ST_data.length !== 0) {

        card_ST.children[0].children[1].children[0].textContent = ST_data[0].name.toLocaleLowerCase().split(" ")[0]
        card_ST.children[0].children[0].children[0].textContent = ST_data[0].rating;
        card_ST.children[0].children[0].children[1].textContent = ST_data[0].position;
        img_card.src = ST_data[0].photo;
        card_ST.children[0].appendChild(img_card.cloneNode(true));

        stats.map((stat) => {
            const div_reserve = div.cloneNode(true);
            const p_resreve = p_detaille.cloneNode(true);
            p_resreve.textContent = ST_data[0][stat[1]];
            div_reserve.textContent += stat[0];
            div_reserve.appendChild(p_resreve)
            card_ST.children[0].children[1].children[1].appendChild(div_reserve);
        })

        card_ST.style.left = formations[window.localStorage.getItem('formation')][9].left;
        card_ST.style.bottom = formations[window.localStorage.getItem('formation')][9].bottom;

        terrain.children[9].children[0] ? terrain.children[9].children[0].replaceWith(card_ST) : terrain.children[9].appendChild(card_ST)
    }
}

const fill_RW_card = () => {

    const card_RW = card.cloneNode(true)
    const RW_data = data.RW.filter((d) => d.active == true).slice(0, 1)

    if (RW_data.length !== 0) {

        card_RW.children[0].children[1].children[0].textContent = RW_data[0].name.toLocaleLowerCase().split(" ")[0]
        card_RW.children[0].children[0].children[0].textContent = RW_data[0].rating;
        card_RW.children[0].children[0].children[1].textContent = RW_data[0].position;
        img_card.src = RW_data[0].photo; card_RW.children[0].appendChild(img_card.cloneNode(true));

        stats.map((stat) => {
            const div_reserve = div.cloneNode(true);
            const p_resreve = p_detaille.cloneNode(true);
            p_resreve.textContent = RW_data[0][stat[1]];
            div_reserve.textContent += stat[0];
            div_reserve.appendChild(p_resreve)
            card_RW.children[0].children[1].children[1].appendChild(div_reserve);
        })

        card_RW.style.left = formations[window.localStorage.getItem('formation')][10].left;
        card_RW.style.bottom = formations[window.localStorage.getItem('formation')][10].bottom;

        ;
        terrain.children[10].children[0] ? terrain.children[10].children[0].replaceWith(card_RW) : terrain.children[10].appendChild(card_RW)
    }
}

const fill_LW_card = () => {

    const card_LW = card.cloneNode(true)
    const LW_data = data.LW.filter((d) => d.active == true).slice(0, 1)

    if (LW_data.length !== 0) {

        card_LW.children[0].children[1].children[0].textContent = LW_data[0].name.toLocaleLowerCase().split(" ")[0]
        card_LW.children[0].children[0].children[0].textContent = LW_data[0].rating;
        card_LW.children[0].children[0].children[1].textContent = LW_data[0].position;
        img_card.src = LW_data[0].photo; card_LW.children[0].appendChild(img_card.cloneNode(true));

        stats.map((stat) => {
            const div_reserve = div.cloneNode(true);
            const p_resreve = p_detaille.cloneNode(true);
            p_resreve.textContent = LW_data[0][stat[1]];
            div_reserve.textContent += stat[0];
            div_reserve.appendChild(p_resreve)
            card_LW.children[0].children[1].children[1].appendChild(div_reserve);
        })

        card_LW.style.left = formations[window.localStorage.getItem('formation')][8].left;
        card_LW.style.bottom = formations[window.localStorage.getItem('formation')][8].bottom;

        terrain.children[8].children[0] ? terrain.children[8].children[0].replaceWith(card_LW) : terrain.children[8].appendChild(card_LW)
    }
}

const terrainArry = Array.from(terrain.children)

const defaultCardShow = () => {
    const typeF = window.localStorage.getItem('formation')
    document.getElementById('formation_selected').value = typeF;

    formations[typeF].map((e, i) => {

        const div = document.createElement('div');
        div.setAttribute("id", `card_${i}`)
        div.style.position = "absolute"
        div.style.left = formations[typeF][i].left
        div.style.bottom = formations[typeF][i].bottom
        div.classList.add('transition-all')
        div.classList.add('duration-700')
        div.classList.add('ease-in-out')
        terrain.appendChild(div.cloneNode(true));
    })
}

function handleForamtion(event) {

    formations[event.currentTarget.value].map((p, i) => {
        terrain.children[i].style.left = p.left
        terrain.children[i].style.bottom = p.bottom
    })
    window.localStorage.setItem("formation", event.currentTarget.value)
}

const appendCards = () => {

    defaultCardShow();
    fill_GK_card();
    fill_LB_card();
    fill_RB_card();
    fill_CB_card();
    fill_CM_card();
    fill_ST_card();
    fill_RW_card();
    fill_LW_card();

    Array.from(terrain.children).map((e, i) => {
        if (!e.children[0]) {
            card.style.left = formations[window.localStorage.getItem('formation')][i].left
            card.style.bottom = formations[window.localStorage.getItem('formation')][i].bottom
            e.appendChild(card.cloneNode(true));
        }
    })
};

createCard();

terrain.addEventListener('click', closeNav);
berger_menu.addEventListener('click', toggle);

function animation_card() {
    Array.from(terrain.children).map((e) => {
        e.addEventListener('mouseover', (event) => {
            event.currentTarget.style.transform = "scale(1.1, 1.1)";
            event.currentTarget.style.transition = "scale 1s";
            event.currentTarget.style.filter = "drop-shadow(0 0 0.5rem #caf0f8)";
            event.currentTarget.style.filter = "transition: scale 1s ease-in-out  ";
        })

        e.addEventListener('mouseout', (event) => {
            event.currentTarget.style.transform = "scale(1, 1)";
            event.currentTarget.style.filter = "drop-shadow(0 0 0)";

        })
    })
}

animation_card();

const toggleForm = (event) => {
    if (event.currentTarget.value == "GK") {
        const GK_form = document.getElementById('GK_carater')
        GK_form.classList.replace('hidden', 'grid')
        const player_form = document.getElementById('player_carater')
        player_form.classList.replace('grid', 'hidden')
    } else {
        const GK_form = document.getElementById('GK_carater')
        GK_form.classList.replace('grid', 'hidden')
        const player_form = document.getElementById('player_carater')
        player_form.classList.replace('hidden', 'grid')
    }
}

const validation = (data, keys, position) => {

    const caracter_validation = /^[1-9][0-9]|99$/

    const carater = [
        ["rating", "pace", "shooting", "passing", "dribbling", "defending", "physical"],
        ["rating", "diving", "handling", "kicking", "reflexes", "speed", "positioning"]
    ];
    const type_car = position == "GK" ? 1 : 0

    for (const key in keys) {
        if (data[key] != "") {
            validate = true;
        } else {
            return validate = `${key} is not complete`;
        }
    }

    for (let i = 0; i < 7; i++) {
        if (caracter_validation.test(data[carater[type_car][i]])) {
            validate = true;
        } else {
            return validate = `${carater[type_car][i]} is not valide`;
        }
    }

    return validate;

}

const handleSubmit = (event) => {
    const { target } = event;
    event.preventDefault();
    const data_create = {};
    const keys = {};
    const position = target[0].value;


    for (let index = 0; index < 21; index++) {
        if (position != "GK" && index < 15) {
            if (index == 3 || index == 6) {
                continue;
            }
            keys[target[index].name] = "";
        } else if (position == "GK") {
            if (index == 3 || index == 6) {
                continue;
            }
            index < 9 || index > 14 ? keys[target[index].name] = "" : ""
        }
    }

    console.log(keys);
    

    for (const key in keys) {
        data_create[key] = key == "nationality" ? target[key].value :  target[key].value;
    }
    console.log(data_create);


    switch (data_create.position) {
        case "CB":
            var status = data[data_create.position].filter((e) => e.active).length === 2 ? false : true
            break;
        case "GK":
            var status = !data[data_create.position].find((e) => e.active)
            break;
        case "LB":
            var status = !data[data_create.position].find((e) => e.active)
            break;
        case "RB":
            var status = !data[data_create.position].find((e) => e.active)
            break;
        case "CM":
            var status = data[data_create.position].filter((e) => e.active).length === 3 ? false : true
            break;
        case "ST":
            var status = !data[data_create.position].find((e) => e.active)
            break;
        case "LW":
            var status = !data[data_create.position].find((e) => e.active)
            break;
        case "RW":
            var status = !data[data_create.position].find((e) => e.active)
            break;
        default:
            break;
    }
    

    const blob = new Blob([target[4].files[0]], { type: 'image/png' });
    data_create['photo'] = URL.createObjectURL(blob)
    data_create['active'] = status;

    const isValidat = validation(data_create, keys, position);


    if (isValidat === true) {
        data[data_create.position].push(data_create);
    } else {
        Swal.fire({
            icon: "warning",
            title: `${isValidat}`,
            text: isValidat == `${isValidat} is not valide` ? "test" : '',
            customClass: {
                confirmButton: 'btn-confirm',
                htmlContainer: 'custom-text'
            }
        });
    }
    appendCards();
}

new TomSelect('#select-nation', {
    valueField: 'img',
    labelField: 'name',
    searchField: 'name',
    load: function (query, callback) {
        fetch("./Api/nation.json")
            .then(response => response.json())
            .then(json => {
                callback(json);
                console.log(json);
            }).catch(() => {
                callback();
            });
    },
    render: {
        option: function (item, escape) {
            return `<div class="flex w-ful gap-2 rounded-md ">
                    <img src="${item.img}" alt="" class="w-[2rem] h-[20px] rounded-md" >
                    <h1 class="text-slate-700">${item.name}</h1>
                    </div>`;
        },
        item: function (item, escape) {
            return `<div class="flex gap-2 " style="display: flex;align-items: center;">
                    <img src="${item.img}" id="img_selected" alt="" class="Flag w-[2rem] h-[20px] rounded-md" >
                    <span class="text-slate-700 opacity-90">${item.name}</span>
                    </div>`;

        }
    },
});

new TomSelect('#select-club', {
    valueField: 'img',
    labelField: 'name',
    searchField: 'name',
    load: function (query, callback) {
        fetch("./Api/teams.json")
            .then(response => response.json())
            .then(json => {
                callback(json);
                console.log(json);
            }).catch(() => {
                callback();
            });
    },
    render: {
        option: function (item, escape) {
            return `<div class="flex w-ful gap-2 rounded-md ">
                    <img src="${item.img}" alt="" class="w-[1rem] h-[20px] rounded-md" >
                    <h1 class="text-slate-700">${item.name}</h1>
                    </div>`;
        },
        item: function (item, escape) {
            return `<div class="flex gap-2 " style="display: flex;align-items: center;">
                    <img src="${item.img}" id="img_selected" alt="" class="Flag w-[1rem] h-[20px] rounded-md" >
                    <span class="text-slate-700 opacity-90">${item.name}</span>
                    </div>`;

        }
    },
});
