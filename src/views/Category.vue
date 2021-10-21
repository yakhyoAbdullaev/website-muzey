<template>
    <div class="caregories">
    <section class="breadcrumb-area" style="background-image: url(../assets/images/breadcrumb/breadcrumb-4.jpg);">
    <div class="container">
        <div class="row">
            <div class="col-xl-12">
                <div class="inner-content clearfix">
                    <div class="title" > 
                       <h1>{{category.title.uz}}</h1> 
                     </div> 
                    <div class="breadcrumb-menu">
                        <ul class="clearfix">
                            <li><router-link to="/">Asosiy</router-link></li>
                            <li class="active">Gallereya</li>
                        </ul>    
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
<div class="category" categories in category>
    <div class="container">
    <h3>{{title}}</h3>
  <p  v-html="category.content.uz"></p>
</div>
</div>
<section class="exhibitions-area">
    <div class="container">
        <div class="row masonary-layout">
           <div class="col-xl-4 col-lg-6 col-md-6 col-sm-12 wow fadeInUp" data-aos="fade-up" v-for="galle in gallery" :key="galle.id"
     data-aos-duration="800">
            <div class="single-exhibition-box">
              <div class="img-holder">
                <img 
                  :src="'https://muzey-backend.napaautomotive.uz/storage/' + galle.images"
                  alt="Awesome Image"
                />
                <div class="overlay-style-one bg1">
                  <div class="zoom-button">
                    <a
                      class="lightbox-image"
                      data-fancybox="gallery"
                      :href="'https://muzey-backend.napaautomotive.uz/storage/' + galle.images"
                    >
                      <i class="fa fa-search-plus" aria-hidden="true"></i>
                    </a>
                  </div>
                </div>
              </div>
              <!-- <div class="text-holder text-center">
                <span>{{$t('home.korgazma')}}</span>
                <h2>
                  <a href="#">
                   {{$t('home.img-name')}}</a
                  >
                </h2>
                <div class="button">
                  <div class="inner">
                    <router-link class="btn-one" to="/gallery"
                      >{{$t('home.koproq')}}</router-link
                    >
                  </div>
                </div>
              </div> -->
            </div>
          </div>
        </div>
    </div>
</section>
<!--Start footer Style2 area-->  
<footera></footera>
<!--Start footer Style2 area-->  
 
    </div>
</template>
<script>
import axios from "axios";
import footera from '../components/footera.vue'
import lazyload from '../directives/lazyload'


export default {
    components: {
        'footera': footera
    },
   data() {
    return {
      category: '',
      gallery: '',
      title: '',
      content: ''
    };
  },
  directives: {
    lazyload
  },
  async created() {
    axios
      .get("https://muzey-backend.napaautomotive.uz/api/gcategory/" + `${this.$route.params.id}`,
       {
    headers: {
    'Content-Type': 'application/json'
    }
       }
      )
      .then(response => (
        this.category = response.data,
       this.title = response.data.title.uz,
       this.content = response.data.title.uz

       
       ))
      .then(json => console.log(json))
      .catch((error) => console.log(error))
  },
   async mounted() {
    axios
      .get("https://muzey-backend.napaautomotive.uz/api/gallery")
      .then(response => (this.gallery = response.data.filter((value) =>  this.$route.params.id.includes(value.gcategory_id) )),
            console.log(this.gallery)
      )
      .then(json => console.log(json))
      .catch((error) => console.log(error))
  }


//   mounted(){
//   this.created
//   this.category
//   }
}
</script>

<style lang="css">
    .grid-column .img-holder img {
    width: 150%;
    height: 18rem;
    object-fit: cover;
    border-radius: 20px;
    padding: 7px;
    }
    .category p {
        width: 100%;
        margin: auto;
        margin-bottom: 2rem;
    }
    .caregories .single-exhibition-box .img-holder img {
      height: 30rem;
      object-fit: cover;
    }
    .category h3 {
    text-align: center;
    font-size: 30px;
    padding-top: 2rem;
    }
    .grid-column img:hover {
         transform: translateY(-10px);
    }
    @media(min-width: 320px) and (ma-width: 420px) {
        .grid-column img {
            width: -3%;
            margin: auto;
        }
    }
</style>