<template>
    <div class="bukeelts">
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

<div class="secter" buklet in buklets>
    <div class="container">
        <div class="conter">
    <img :src="'https://muzey-backend.napaautomotive.uz/storage/' + buklets.images" alt="">
    <!-- <embed :src="'https://muzey-backend.napaautomotive.uz/storage/' + buklets.images " type="application/pdf"   height="700px" width="500"> -->
    <div class="textarea">
    <!-- <h3>{{buklets.category_buklet.title.uz}} </h3> -->
    <p v-html="buklets.category_buklet.content.uz"></p>
    </div>
</div>
</div>
</div>

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
      .get("https://muzey-backend.napaautomotive.uz/api/buklet/"  + `${this.$route.params.id}`  )
      .then(response => (this.buklets = response.data))
      .then(json => console.log(json))
      .catch((error) => console.log(error))
  },
 
};

</script>

<style lang="css">
.bukleets .conter {
    width: 50%;
    margin: auto;
}
.conter {
    background-color: #f7f7f7!important
}
 .conter img {
    width: 50%;
    height: 30rem;
    object-fit: cover;
    margin-left: 12rem;
    margin-top: 3rem;
}
.conter .textarea {
    padding-top: 2rem;
    width: 90%;
    margin: auto;
    margin-bottom: 7rem;
}
@media(min-width: 320px) and (max-width: 480px) {
    .conter img {
        width: 100%;
    height: 15rem;
    margin-left: 0rem;
    }
}

</style>