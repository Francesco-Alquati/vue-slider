const slides = [
{
    image: 'img/01.webp',
        title: 'Marvel\'s Spiderman Miles Morale',
        text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
    }, {
        image: 'img/02.webp',
        title: 'Ratchet & Clank: Rift Apart',
        text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
    }, {
        image: 'img/03.webp',
        title: 'Fortnite',
        text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
    }, {
        image: 'img/04.webp',
        title: 'Stray',
        text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
    }, {
        image: 'img/05.webp',
        title: "Marvel's Avengers",
        text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
    }
];

console.log(slides);

// Creo un'istanza Vue e definisco le proprietà dei data
const { createApp } = Vue;

createApp({
    data() {
        return{
            // Array di oggetti
            slides: slides,

            // Oggetto attualmente selezionato
            selectedSlide: slides[0],

            // Indice della diapositiva attualmente selezionata
            currentSlideIndex: 0,

            // creo un valore null
            scroll: null,

        };
    },
    created(){
        this.autoScroll();
    },
        // Metodo per cambiare la diapositiva selezionata
        methods: {
            changeSlide(slide) {
                this.selectedSlide = slide;
            },

            // Metodo per andare alla diapositiva precedente
            prevSlide() {
                if (this.currentSlideIndex === 0) {
                    this.currentSlideIndex = this.slides.length - 1;
                } else {
                    this.currentSlideIndex--;
                }
                this.selectedSlide = this.slides[this.currentSlideIndex];
            },

            // Metodo per andare alla diapositiva successiva
            nextSlide() {
                if (this.currentSlideIndex === this.slides.length - 1) {
                    this.currentSlideIndex = 0;
                } else {
                    this.currentSlideIndex++;
                }
                this.selectedSlide = this.slides[this.currentSlideIndex];
            },

            // metodo per far partire automaticamente il cambio immagine
            autoScroll() {
                this.scroll = setInterval(() => {
                  this.nextSlide();
                }, 3000);
            },
            // metto in pausa l'autoscroll
            pauseAutoplay() {
            clearInterval(this.scroll);
            },
            // riprendo lo scorrimento
            resumeAutoplay() {
            this.autoScroll(); 
            },
        },
// "Monto" l'istanza Vue sull'elemento '#app'
}).mount('#app');
