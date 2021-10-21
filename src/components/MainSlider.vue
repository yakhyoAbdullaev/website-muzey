<template>
    <div>
      <section id="mt_banner" class="">
          <div class="rower">
           <div class="button">
              <a  href="https://roundme.com/viewgallery/3185/571285/1850293" target="_blank">{{ $t('home.virtual') }}</a>
          </div>
          </div>
            <div class="swiper-container">
                <div class="swiper-wrapper">
                    <div class="swiper-slide" v-for="event in events" :key="event.id" >
                         <div class="slide-inner half-slide slide-overlay" v-for="event in events.reverse().slice(0,2)" :key="event.id" :index="events">
                           <div class="overlay">
                            <router-link class="events" :to="'/eventSingle/' + event.id">{{event.title.uz}} </router-link>
                             <img :src="'https://muzey-backend.napaautomotive.uz/storage/' + event.image" alt="">
                        </div>
                        </div>
                    </div>
                    <div class="swiper-slide" >
                        <div class="slide-inner pre-half-slide slide-overlay">
                        </div>
                    </div>
                </div>
                  <!-- <div class="swiper-slide" v-for="event in events" :key="event.id" >
                         <div class="slide-inner half-slide slide-overlay" v-for="event in events.reverse().slice(0,2)" :key="event.id" :index="events">
                           <div class="overlay">
                            <router-link class="events" :to="'/eventSingle/' + event.id">{{event.title.uz}} </router-link>
                             <img :src="'https://muzey-backend.napaautomotive.uz/storage/' + event.image" alt="">
                        </div>
                        </div>
                    </div> -->
            </div>
      </section>
    </div>
</template>
<script>
import '../assets/style.css'
import Swiper from 'swiper/swiper-bundle.cjs';
import axios from 'axios';
    export default {
        name: 'SliderCarousel',
        data() {
            return {
                events: '',
            };
        },
async created() {
    axios
      .get("https://muzey-backend.napaautomotive.uz/api/events")
      .then((response) => (this.events = response.data))
      .then((json) => console.log(json))
      .catch((error) => console.log(error));
  },
        methods: {
            Slider() {
            let interleaveOffset = 0.5;
                const swiper = new Swiper(".swiper-container", {
                    loop: true,
                    speed: 4000,
                    grabCursor: false,
                    watchSlidesProgress: true,
                    mousewheelControl: true,
                    keyboardControl: true,
                    // autoplay: true,
                    navigation: {},
                    autoplay: {
                        delay: 2050,
                    },
                    fadeEffect: {
                        crossFade: true
                    },
                    on: {
                        progress: function () {
                            let swipera = this;
                            for (var i = 0; i < swipera.slides.length; i++) {
                                var slideProgress = swipera.slides[i].progress;
                                var innerOffset = swipera.width * interleaveOffset;
                                var innerTranslate = slideProgress * innerOffset;
                                swipera.slides[i].querySelector(".slide-inner").style.transform =
                                    "translate3d(" + innerTranslate + "px, 0, 0)";
                            }
                        },
                        touchStart: function () {
                            let swipera = this;
                            for (var i = 0; i < swipera.slides.length; i++) {
                                swipera.slides[i].style.transition = "";
                            }
                        },
                        setTransition: function (speed) {
                            let swipera = this;
                            for (var i = 0; i < swipera.slides.length; i++) {
                                swipera.slides[i].style.transition = speed + "ms";
                                swipera.slides[i].querySelector(".slide-inner").style.transition =
                                    speed + "ms";
                            }
                            
                        },
                         
                    }
                })
                console.log(swiper)
        },
        },
        mounted() {

            this.Slider()
    },
    
    }
</script>

<style>
#mt_banner {
     background: linear-gradient(rgba(0, 0, 0, 0.219), rgba(0, 0, 0, 0.24)),
    url("../assets/images/resources/muzey-2.jpg") !important;
  background-repeat: no-repeat !important;
  background-size: cover !important;
  background-position: center !important;
  height: 600px;
}
/* .slide-inner {
    background-position: center;
    background: linear-gradient(rgba(0, 0, 0, 0.226), rgba(0, 0, 0, 0.281)), url("'https://muzey-backend.napaautomotive.uz/storage/' + event.images");
} */
#mt_banner .button {
     border: 2px solid rgb(71, 67, 67);
  border-radius: 10px;
  cursor: pointer;
  background: #000;
  opacity: 0.7;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 48px;
  transition: 0.3s ease;
}
#mt_banner .button:hover {
    border: none;
  color: #fff;
  font-size: bold;
  background: rgb(30, 77, 104);
}
#mt_banner .rower {
    width: 19%;
    margin: auto;
    padding-top: 2rem
}

#mt_banner .button a {
  text-align: center;
  font-size: 20px;
  color: #fff;
}
#mt_banner .swiper-container img {
    object-fit: cover;
}
/* #mt_banner .slide-inner:before {
    content: '';
    background: #00000038;
    height: 100%;
    /* width: 100%; */
    /* left: 0;
    right: 0; */
    /* top: 0; */

#mt_banner .events {
    position: absolute;
    text-align: center;
    font-size: 22px;
    width: 40%;
    padding-top: 7rem;
    color: #fff;
    font-weight: bold;
}

#mt_banner a:hover {
    text-decoration: underline;
}

</style>



 <div class="slide-inner half-slide slide-overlay">
      style="background-image:url(https://muzey-backend.napaautomotive.uz/storage/event_image/9hTFxsBSud5IHcLowsRQCXL4NwLd7QcW0ZdhJIHQ.jpg)"
</div>