// Dato un array di oggetti letterali con: - url dell’immagine - titolo - descrizione
// Creare un carosello come nella foto allegata.
// Milestone 0:
// Come nel primo carosello realizzato, focalizziamoci prima sulla creazione del markup statico: costruiamo il container e inseriamo l’immagine grande in modo da poter stilare lo slider.
// Milestone 1:
// Ora rimuoviamo i contenuti statici e usiamo l’array di oggetti letterali per popolare dinamicamente il carosello.   Al click dell’utente sulle frecce verso sinistra o destra, l’immagine attiva diventerà visibile e dovremo aggiungervi titolo e testo.
// Milestone 2:
// Aggiungere il **ciclo infinito** del carosello. Ovvero se la miniatura attiva è la prima e l’utente clicca la freccia verso destra, la miniatura che deve attivarsi sarà l’ultima e viceversa per l’ultima miniatura se l’utente clicca la freccia verso sinistra.

const images = [ 
    { 
        image: 'img/01.webp', 
        title: 'Marvel\'s Spiderman Miles Morale', 
        text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.', 
    }, 
    { 
        image: 'img/02.webp', 
        title: 'Ratchet & Clank: Rift Apart', 
        text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.', 
    }, 
    {
        image: 'img/03.webp', 
        title: 'Fortnite', 
        text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.", 
    }, 
    { 
        image: 'img/04.webp', 
        title: 'Stray', 
        text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city', 
    }, 
    { 
        image: 'img/05.webp', 
        title: "Marvel's Avengers", 
        text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.', 
    } 
];

// seleziono dall'html l'elemento contenitore
const container = document.querySelector(".col_big");
const sideContainer = document.querySelector(".col_small");


images.forEach(element => {
    // creo l'elemento da inserire in html
    let item = 
        `
        <div class="item">
            <img src="${element.image}" alt="${element.title}">
        </div>

        `;
    // inserisco l'elemento creato in pagina
    container.innerHTML += item;

    let itemSmall =
        `
        <div class="img_small">
            <img src="${element.image}" alt="${element.title}">
        </div>

        `;

    sideContainer.innerHTML += itemSmall;
    
});

const items = document.getElementsByClassName("item");
console.log(items);

let activeItem = 0;

// aggiungo classe active all'elemento ativo
items[activeItem].classList.add("active");

// Al click dell’utente sulle frecce, il programma cambierà l’immagine attiva, che quindi verrà visualizzata al posto della precedente.

// seleziono il bottone

const buttonNext = document.getElementById("next");

// gestisco l'interazione dell'utente al click 
buttonNext.addEventListener("click",
    function () {

        if (activeItem < images.length - 1) {
            // rimuovo la classe dal precedente
            items[activeItem].classList.remove("active");

            activeItem++;

            // aggiungo classe active all'elemento ativo
            items[activeItem].classList.add("active");

        }  else {
            items[activeItem].classList.remove("active");

            activeItem = 0;

            // aggiungo classe active all'elemento ativo
            items[activeItem].classList.add("active");
        }
    }

    
);

const buttonPrev = document.getElementById("prev");

// gestisco l'interazione dell'utente al click 
buttonPrev.addEventListener("click",
    function () {

        if (activeItem > 0) {
            // rimuovo la classe dal precedente
            items[activeItem].classList.remove("active");

            activeItem--;

            // aggiungo classe active all'elemento ativo
            items[activeItem].classList.add("active");

        } else {
            items[activeItem].classList.remove("active");

            activeItem = images.length - 1;

            // aggiungo classe active all'elemento ativo
            items[activeItem].classList.add("active");

        }
        
    }

)



