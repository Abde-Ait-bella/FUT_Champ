const terrain = document.getElementById('terrain');
const nav = document.getElementById('left_bar');
const berger_menu = document.getElementById('berger_menu');
const form = document.getElementById('form');
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


const card = document.createElement('div');
const div_detaille = document.createElement('div');
const p = document.createElement('p')
const div_detaille_elem = document.createElement('div');
const div_natio_club = document.createElement('div');
const div_position = document.createElement('div');
const div_position_left = document.createElement('div');
const div_position_right = document.createElement('div');
const div = document.createElement('div');
const img_card = document.createElement('img');


const closeNav = () => {
    nav.classList.add("telephone:w-1/12")
}


const toggle = () => {
    nav.classList.toggle("telephone:w-1/12")

    if (nav.classList.contains("desktop:w-96")) {
        nav.classList.remove("desktop:w-96")
        nav.classList.add("desktop:w-14")
        terrain.classList.replace("bg-right", "bg-center")
        terrain.classList.replace("w-8/12", "w-11/12")
        document.forms[0].classList.replace("w-80", "w-2")

    } else {
        nav.classList.remove("desktop:w-14")
        nav.classList.add("desktop:w-96")
        terrain.classList.replace("bg-center", "bg-right")
        terrain.classList.replace("w-11/12", "w-8/12")
        document.forms[0].classList.replace("w-2", "w-80")
    }

    if (form.style.opacity == 1 || !form.style.opacity) {
        icone_previus.classList?.replace('fa-arrow-left', 'fa-bars')
    } else {
        icone_previus.classList.replace('fa-bars', 'fa-arrow-left')
    }
    form.style.opacity == 1 || !form.style.opacity ? form.style.opacity = 0 : form.style.opacity = 1;

}

const data = {
    GK: [
        {
            name: "Lionel Messi",
            photo: "https://cdn.sofifa.net/players/158/023/25_120.png",
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
        { name: "BONO", club: "Hilal", rating: 15, img: "", shooting: "10/10", active: false },
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
        { name: "hafid", club: "Hilal", rating: 15, img: "", shooting: "10/10", active: false },
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
        { name: "baba", club: "Hilal", rating: 15, img: "", shooting: "10/10", active: false },
        { name: "BONO", club: "Hilal", rating: 15, img: "", shooting: "10/10", active: false },
        { name: "BONO", club: "Hilal", rating: 15, img: "", shooting: "10/10", active: false },
    ],
    RM: [],
    LM: [],
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

const createCard = () => {

    card.style.cssText = `
        background-image: url("./assets/img/card.webp");
        background-size: contain;
        background-repeat: no-repeat;
        height: 13rem;
        background-position: center;
        width: 10rem;
        position: relative;
        cursor: pointer;
        display: flex;
        justify-content: center;
    `

    div_detaille.style.cssText = `
        position: absolute;
        bottom: 39px;
        left: 0;
        width: 100%;
        display: flex;
        align-items: center;
        color: white;
        flex-direction: column;
    `
    div_detaille_elem.style.cssText = `
        display: flex;
        justify-content: center; 
        gap: 3px;
        font-size: 11px;
        font-weight: 500;
        font-family: system-ui;
    `

    p.style.cssText = `
        font-weight: bold;
        text-transform: capitalize;
        text-align: center;
        width : 6.5rem;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    `

    div_position.style.cssText = `
            top: 45px;
            position: absolute;
            left: 28px;
            color: white;
            font-weight: 300;
            font-family: fantasy;
            font-size: larger;
    `
    img_card.style.cssText = `
        height: 5rem;
    margin-top: 52px;
    `

    div_position.appendChild(div_position_left);
    div_position.appendChild(div_position_right);

    div_detaille.appendChild(p);
    div_detaille.appendChild(div_detaille_elem);
    div_detaille.appendChild(div_natio_club);

    card.appendChild(div_position);
    card.appendChild(div_detaille);

    appendCards(card);

}

const p_detaille = document.createElement('p')
p_detaille.style.fontWeight = "700";
p_detaille.style.fontSize = "12px";

const fill_GK_card = () => {

    const card_GK = card.cloneNode(true)

    const GK_data = data.GK.filter((d) => d.active == true)

    if (GK_data.length != 0) {

        GK.children[0].remove();

        card_GK.children[0].children[0].textContent = GK_data[0].rating;
        card_GK.children[0].children[1].textContent = GK_data[0].position;
        card_GK.children[1].children[0].textContent = GK_data[0].name.toLocaleLowerCase();
        img_card.src = GK_data[0].photo;
        card_GK.appendChild(img_card.cloneNode(true));

        var stats = [
            ['PC', 'pace'],
            ['SH', 'shooting'],
            ['PS', 'passing'],
            ['DR', 'dribbling'],
            ['DE', 'defending'],
            ['PH', 'physical'],
        ]

        stats.map((stat) => {
            const div_reserve = div.cloneNode(true);
            const p_resreve = p_detaille.cloneNode(true);
            p_resreve.textContent = GK_data[0][stat[1]];
            div_reserve.textContent += stat[0];
            div_reserve.appendChild(p_resreve)
            card_GK.children[1].children[1].appendChild(div_reserve);
        })

        GK.appendChild(card_GK);
    }
}

const fill_LB_card = () => {

    const card_LB = card.cloneNode(true)

    const LB_data = data.LB.filter((d) => d.active == true)

    if (LB_data.length != 0) {
        LB.children[0].remove();

        card_LB.children[1].children[0].textContent = LB_data[0].name.toLocaleLowerCase();
        card_LB.children[0].children[0].textContent = LB_data[0].rating;
        card_LB.children[0].children[1].textContent = LB_data[0].position;
        img_card.src = LB_data[0].photo;
        card_LB.appendChild(img_card.cloneNode(true));

        var stats = [
            ['PC', 'pace'],
            ['SH', 'shooting'],
            ['PS', 'passing'],
            ['DR', 'dribbling'],
            ['DE', 'defending'],
            ['PH', 'physical'],
        ]

        stats.map((stat) => {
            const div_reserve = div.cloneNode(true);
            const p_resreve = p_detaille.cloneNode(true);
            p_resreve.textContent = LB_data[0][stat[1]];
            div_reserve.textContent += stat[0];
            div_reserve.appendChild(p_resreve)
            card_LB.children[1].children[1].appendChild(div_reserve);
        })

        LB.appendChild(card_LB);
    }
}

const fill_RB_card = () => {

    const card_RB = card.cloneNode(true)
    const RB_data = data.RB.filter((d) => d.active == true)

    if (RB_data.length != 0) {
        RB.children[0].remove();

        card_RB.children[1].children[0].textContent = RB_data[0].name.toLocaleLowerCase();
        card_RB.children[0].children[0].textContent = RB_data[0].rating;
        card_RB.children[0].children[1].textContent = RB_data[0].position;
        img_card.src = RB_data[0].photo;
        card_RB.appendChild(img_card.cloneNode(true));

        var stats = [
            ['PC', 'pace'],
            ['SH', 'shooting'],
            ['PS', 'passing'],
            ['DR', 'dribbling'],
            ['DE', 'defending'],
            ['PH', 'physical'],
        ]

        stats.map((stat) => {
            const div_reserve = div.cloneNode(true);
            const p_resreve = p_detaille.cloneNode(true);
            p_resreve.textContent = RB_data[0][stat[1]];
            div_reserve.textContent += stat[0];
            div_reserve.appendChild(p_resreve)
            card_RB.children[1].children[1].appendChild(div_reserve);
        })

        RB.appendChild(card_RB);
    }
}

const  fill_CB_card = async() => {

    const CB_data = data.CB.filter((d) => d.active == true)

    if (CB_data.length != 0 && CB_data.length < 3) {
        
        Array.from(terrainArry[2].children[1].children).slice(0, CB_data.length).map((e, i) => {
            CB.children[i].children[0].remove();
            
            const card_CB = card.cloneNode(true);
            card_CB.children[1].children[0].textContent = CB_data[i].name.toLocaleLowerCase();
            card_CB.children[0].children[0].textContent = CB_data[i].rating;
            card_CB.children[0].children[1].textContent = CB_data[i].position;
            img_card.src = CB_data[i]?.photo;
            card_CB.appendChild(img_card.cloneNode(true));


            var stats = [
                ['PC', 'pace'],
                ['SH', 'shooting'],
                ['PS', 'passing'],
                ['DR', 'dribbling'],
                ['DE', 'defending'],
                ['PH', 'physical'],
            ]

            stats.slice(0, CB_data.length).map((stat, i) => {
                const div_reserve = div.cloneNode(true);
                const p_resreve = p_detaille.cloneNode(true);
                p_resreve.textContent = CB_data[i][stat[1]];
                div_reserve.textContent += stat[0];
                div_reserve.appendChild(p_resreve)
                card_CB.children[1].children[1].appendChild(div_reserve);
            })

            e.appendChild(card_CB)
        })
    }
}

const fill_CM_card = () => {

    const CM_data = data.CM.filter((d) => d.active == true)

    if (CM_data.length != 0 && CM_data.length < 5) {

        Array.from(terrainArry[1].children).slice(0, CM_data.length).map((e, i) => {
            CM.children[i].children[0].remove();
            
            const card_CM = card.cloneNode(true);
            card_CM.children[1].children[0].textContent = CM_data[i].name.toLocaleLowerCase();
            card_CM.children[0].children[0].textContent = CM_data[i].rating;
            card_CM.children[0].children[1].textContent = CM_data[i].position;
            img_card.src = CM_data[i].photo;
            card_CM.appendChild(img_card.cloneNode(true));

            var stats = [
                ['PC', 'pace'],
                ['SH', 'shooting'],
                ['PS', 'passing'],
                ['DR', 'dribbling'],
                ['DE', 'defending'],
                ['PH', 'physical'],
            ]

            stats.slice(0, CM_data.length).map((stat) => {
                const div_reserve = div.cloneNode(true);
                const p_resreve = p_detaille.cloneNode(true);
                p_resreve.textContent = CM_data[i][stat[1]];
                div_reserve.textContent += stat[0];
                div_reserve.appendChild(p_resreve)
                card_CM.children[1].children[1].appendChild(div_reserve);
            })

            i === 1 ? card_CM.style.marginTop = "1rem" : "";

            e.appendChild(card_CM)
        })
    }
}

const fill_ST_card = () => {

    const ST_data = data.ST.filter((d) => d.active == true)

    if (ST_data.length != 0) {
        
        Array.from(terrainArry[0].children).slice(0, ST_data.length).map((e, i) => {
            ST.children[i].children[0].remove();

            const card_ST = card.cloneNode(true);
            card_ST.children[1].children[0].textContent = ST_data[i].name.toLocaleLowerCase();
            card_ST.children[0].children[0].textContent = ST_data[i].rating;
            card_ST.children[0].children[1].textContent = ST_data[i].position;
            img_card.src = ST_data[i].photo;
            card_ST.appendChild(img_card.cloneNode(true));

            var stats = [
                ['PC', 'pace'],
                ['SH', 'shooting'],
                ['PS', 'passing'],
                ['DR', 'dribbling'],
                ['DE', 'defending'],
                ['PH', 'physical'],
            ]

            stats.slice(0, ST_data.length).map((stat) => {
                const div_reserve = div.cloneNode(true);
                const p_resreve = p_detaille.cloneNode(true);
                p_resreve.textContent = ST_data[i][stat[1]];
                div_reserve.textContent += stat[0];
                div_reserve.appendChild(p_resreve)
                card_ST.children[1].children[1].appendChild(div_reserve);
            })

            i === 1 ? card_ST.style.marginTop = "1rem" : "";

            e.appendChild(card_ST)
        })
    }
}

const terrainArry = Array.from(terrain.children)

const appendCards = () => {

    fill_GK_card();
    fill_LB_card();
    fill_RB_card();
    fill_CB_card();
    fill_CM_card();
    fill_ST_card();

    if (!GK.children[0]) {
        GK.appendChild(card.cloneNode(true));
    }
    if (!LB.children[0]) {
        LB.appendChild(card.cloneNode(true));
        LB.classList.add('mb-4');
    }
    if (!RB.children[0]) {
        RB.appendChild(card.cloneNode(true));
        RB.classList.add('mb-4');
    }
    Array.from(terrainArry[0].children).map((e, i) => {
        if (e.children.length == 0) {
            e.appendChild(card.cloneNode(true))
            i == 1 ? e.classList.add('mt-4') : ""
        }
    })

    Array.from(terrainArry[1].children).map((e, i) => {
        if (e.children.length == 0) {
            e.appendChild(card.cloneNode(true))
            i == 1 ? e.classList.add('mt-4')
                : "";
        }
    })

    Array.from(terrainArry[2].children[1].children).map((e, i) => {
        if (e.children.length == 0) {
            e.appendChild(card.cloneNode(true))
        }
    })

};

createCard();

terrain.addEventListener('click', closeNav);
berger_menu.addEventListener('click', toggle);

function animation_card() {
    Array.from(terrainArry[0].children).map((e) => {
        e.addEventListener('mouseover', (event) => {

            event.currentTarget.style.transform = "scale(1.1, 1.1)";
            event.currentTarget.style.transition = "scale 1s";
            event.currentTarget.style.filter = "drop-shadow(0 0 0.5rem #caf0f8)";
        })

        e.addEventListener('mouseout', (event) => {

            event.currentTarget.style.transform = "scale(1, 1)";
            event.currentTarget.style.filter = "drop-shadow(0 0 0)";

        })
        // }
    })

    Array.from(terrainArry[1].children).map((e) => {
        e.addEventListener('mouseover', (event) => {

            event.currentTarget.style.transform = "scale(1.1, 1.1)";
            event.currentTarget.style.filter = "drop-shadow(0 0 0.5rem #caf0f8)";

        })

        e.addEventListener('mouseout', (event) => {

            event.currentTarget.style.transform = "scale(1, 1)"
            event.currentTarget.style.filter = "drop-shadow(0 0 0)";
        })
    })

    Array.from(terrainArry[2].children[1].children).map((e) => {
        e.addEventListener('mouseover', (event) => {

            event.currentTarget.style.transform = "scale(1.1, 1.1)";
            event.currentTarget.style.filter = "drop-shadow(0 0 0.5rem #caf0f8)";

        })
        e.addEventListener('mouseout', (event) => {

            event.currentTarget.style.transform = "scale(1, 1)"
            event.currentTarget.style.filter = "drop-shadow(0 0 0)";
        })
    })
}

animation_card();

LB.addEventListener('mouseover', (event) => {
    event.currentTarget.style.transform = "scale(1.1, 1.1)";;
    event.currentTarget.style.filter = "drop-shadow(0 0 0.5rem #caf0f8)";

})
RB.addEventListener('mouseover', (event) => {
    event.currentTarget.style.transform = "scale(1.1, 1.1)";;
    event.currentTarget.style.filter = "drop-shadow(0 0 0.5rem #caf0f8)";

})
LB.addEventListener('mouseout', (event) => {
    event.currentTarget.style.transform = "scale(1, 1)";
    event.currentTarget.style.filter = "drop-shadow(0 0 0)";
})
RB.addEventListener('mouseout', (event) => {
    event.currentTarget.style.transform = "scale(1, 1)";
    event.currentTarget.style.filter = "drop-shadow(0 0 0)";
})
GK.firstChild.addEventListener('mouseover', (event) => {
    event.currentTarget.style.transform = "scale(1.1, 1.1)";;
    event.currentTarget.style.filter = "drop-shadow(0 0 0.5rem #caf0f8)";

})
GK.firstChild.addEventListener('mouseout', (event) => {
    event.currentTarget.style.transform = "scale(1, 1)";
    event.currentTarget.style.filter = "drop-shadow(0 0 0)";
})

const handleSubmit = (event) => {
    event.preventDefault();
    const position = event.target[0].value
    const name = event.target[1].value
    const image = event.target[2].value
    const club = event.target[3].value
    const nationality = event.target[4].value
    const pace = event.target[5].value
    const shooting = event.target[6].value
    const passing = event.target[7].value
    const dribbling = event.target[8].value
    const defending = event.target[9].value
    const physical = event.target[10].value
    const ligue = event.target[11].value

    switch (position) {
        case "CB":
            var status = data[`${position}`].filter((e) => e.active).length === 2 ? false : true
            break;
        case "GK":
            var status = !data[`${position}`].find((e) => e.active)
            break;
        case "LB":
            var status = !data[`${position}`].find((e) => e.active)
            break;
        case "RB":
            var status = !data[`${position}`].find((e) => e.active)
            break;
        case "CM":
            var status = data[`${position}`].filter((e) => e.active).length === 3 ? false : true
            break;
        case "ST":
            var status = data[`${position}`].filter((e) => e.active).length === 3 ? false : true
            break;
        default:
            break;
    }

    const data_create = {
        position,
        name,
        image,
        club,
        nationality,
        pace,
        shooting,
        passing,
        dribbling,
        defending,
        physical,
        ligue,
        active: status
    }

    data[`${position}`].push(data_create);


    // if (!LB.children[0]) {
    //     LB.appendChild(card.cloneNode(true));
    //     LB.classList.add('mb-4');
    // }
    // if (!RB.children[0]) {
    //     RB.appendChild(card.cloneNode(true));
    //     RB.classList.add('mb-4');
    // }
    // Array.from(terrainArry[0].children).map((e, i) => {
    //     if (e.children.length == 0) {
    //         e.appendChild(card.cloneNode(true))
    //         i == 1 ? e.classList.add('mt-4') : ""
    //     }
    // })

    // Array.from(terrainArry[1].children).map((e, i) => {
    //     if (e.children.length == 0) {
    //         e.appendChild(card.cloneNode(true))
    //         i == 1 ? e.classList.add('mt-4')
    //             : "";
    //     }
    // })

    // Array.from(terrainArry[2].children[1].children).map((e, i) => {
    //     if (e.children.length == 0) {
    //         e.appendChild(card.cloneNode(true))
    //     }
    // })

    appendCards();
    console.log(data);
}

