export class blog {
    constructor() {
        this.cards = [
            {
                date: '02 de jul, 2021',
                title: 'Agora é oficial: o Windows 11 está vindo',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vestibulum auctor est. Nam vitae finibus ante. Duis lobortis tellus vel diam fringilla, eu ullamcorper ex iaculis.'
            },
            {
                date: '10 de jul, 2021',
                title: 'Tim Berners-Lee vai leiloar código-fonte da web',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vestibulum auctor est. Nam vitae finibus ante. Duis lobortis tellus vel diam fringilla, eu ullamcorper ex iaculis. Praesent et auctor justo. Vestibulum nisl orci, lacinia venenatis leo sit amet, pulvinar tincidunt risus. Phasellus nisl dui, cursus a lectus et, interdum ullamcorper libero.'
            },
            {
                date: '05 de jul, 2021',
                title: 'Tem Firefox novo no pedaço e você vai querer migrar',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vestibulum auctor est.'
            },
            {
                date: '20 de jul, 2021',
                title: 'John McAfee, criador do antivírus McAfee, morre',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vestibulum auctor est. Nam vitae finibus ante. Duis lobortis tellus vel diam fringilla, eu ullamcorper ex iaculis. Praesent et auctor justo. Vestibulum nisl orci, lacinia venenatis leo sit amet, pulvinar tincidunt risus. Phasellus nisl dui, cursus a lectus et, interdum ullamcorper libero.'
            }
        ];

        this.selectors()
        this.events()
        this.renderListCards()
    }

    selectors() {
        this.containerCards = document.querySelector(".main_wrapper-cards")
    }

    events() {
    }

    renderListCards () {
        let spotStructure = '';

        this.cards.forEach(i => {
            spotStructure += `
                <li class="main_wrapper-cards_li">
                    <div class="main_wrapper-cards_li_container-span">
                        <span class="main_wrapper-cards_li_container-span_date">${i.date}</span>
                        <img class="main_wrapper-cards_li_container-span_button" src="img/heart.svg" alt="Gostei">
                    </div>
                    <h1 class="main_wrapper-cards_li_title">${i.title}</h1>
                    <p class="main_wrapper-cards_li_description">${i.description}</p>
                </li>
            `
        })

        this.containerCards.innerHTML = spotStructure;
    }
}
