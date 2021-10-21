<template>
 <div class="buklet">
     <section class="breadcrumb-area" style="background-image: url(../assets/images/breadcrumb/breadcrumb-4.jpg);">
    <div class="container">
        <div class="row">
            <div class="col-xl-12">
                <div class="inner-content clearfix">
                    <div class="title" >
                       <h1>{{$t('nav.buklets')}} </h1>
                    </div>
                    <div class="breadcrumb-menu">
                        <ul class="clearfix">
                            <li><router-link to="/">{{$t('nav.Asosiy')}}</router-link></li>
                            <li class="active">{{$t('nav.buklets')}}</li>
                        </ul>    
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

<section class="buklets">
    <div class="container">
        <h4>{{$t('nav.buklets')}}</h4>
        <div class="homeBuk">
        <div class="row">
            <div class="col-md-3" v-for="buklet in buklets" :key="buklet.id">
                <router-link :to="'/buklet/' + buklet.id">
                <img :src="'https://muzey-backend.napaautomotive.uz/storage/' + buklet.images" alt="">
                  <div class="card-body">
                  <p>{{buklet.category_buklet.title.uz}} </p>
                  </div>
                   </router-link>
            </div>
            </div>
        </div>
    </div>
</section>

<!--Start footer Style2 area-->  
  <footera></footera>

<!--End footer Style2 area-->
 </div>
</template>

<script>
import axios from "axios";
import footera from '../components/footera.vue'

export default {
     components: {
        'footera': footera
    },
  data() {
    return {
      buklets: '',
    };
  },
       async created() {
    axios
      .get("https://muzey-backend.napaautomotive.uz/api/buklets" )
      .then(response => (this.buklets = response.data))
      .then(json => console.log(json))
      .catch((error) => console.log(error))
  },
 
};

</script>

<style lang="css">
.buklet .breadcrumb-area {
    background: linear-gradient(rgba(0, 0, 0, 0.438), rgba(0, 0, 0, 0.39)), url('../assets/images/breadcrumb/breadcrumb-6.jpg')!important;
    background-size: cover!important;
    background-position: center !important;
    background-repeat: no-repeat!important;
    height: 800px;
}
.buklets img {
    width: 41rem;
    height: 19rem;
    object-fit: cover;
}
.homeBuk {
        margin-bottom: 6rem;
}
.buklets a {
    color: #000;
    transition: 0.4s ease;
}
.buklets a:hover {
    color: blue;
    text-decoration: underline;
}
.buklets h4 {
    margin-bottom: 3rem;
    /* padding-top: 3rem; */
    background: #d0d0d4;
    margin-top: 1rem;
    /* text-align: center; */
    font-size: 29px;
    font-weight: 600
}

</style>