/*
Descrizione:
Rifare l’esercizio dello slider come fatto assieme in classe.
Quindi farlo funzionare con Vue, nel modo del framework.
*/

var app = new Vue({
    el:'#container',
    data:{
        player: '',
        activeSlide: 0,
        sliders:[
            {
                image: 'img/01.jpg',
                title: 'Svezia',
                text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.'
            },
            {
                image: 'img/02.jpg',
                title: 'Svizzera',
                text: 'Lorem ipsum'
            },
            {
                image: 'img/03.jpg',
                title: 'Gran Bretagna',
                text:  'Lorem ipsum, dolor sit amet consectetur adipisicing elit.'

            },
            {
                image: 'img/04.jpg',
                title: 'Germania',
                text:'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,'
            },
            {
                image: 'img/05.jpg',
                title: 'Paradise',
                text: 'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,'
            }
        ]
        
    },
    mounted: function(){
        this.playSliders()     
    },
    // beforeDestroy(){
    //    clearInterval(this.player)
    // },
    methods: {
        nextSlide(){
            this.activeSlide === this.sliders.length-1 ? this.activeSlide = 0 : this.activeSlide++;
        },
        prevSlide(){
            this.activeSlide === 0 ? this.activeSlide = this.sliders.length-1 : this.activeSlide--;
        },
        playSliders: function(){
            //const self = this;
            this.player = setInterval( ()=> {
                // self.nextSlide();
                this.nextSlide();
            },3000)
        },
        changeSlide(index){
            this.activeSlide = index;
        }
    },
})

