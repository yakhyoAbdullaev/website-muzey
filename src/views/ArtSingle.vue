<template>
   <div class="singles">
      <section class="breadcrumb-area" >
    <div class="container">
        <div class="row">
            <div class="col-xl-12">
                <div class="inner-content clearfix">
                    <div class="title">
                       <h1>Ilmiy maqolalar</h1>
                    </div>
                    <div class="breadcrumb-menu">
                        <ul class="clearfix">
                            <li><router-link to="#">Asosiy</router-link></li>
                            <li class="active">Ilmiy maqolalar</li>
                        </ul>    
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
<!--End breadcrumb area-->


<div class="pages" post in posts >
    <h4> {{posts.title.uz}} </h4>
        <img :src="'https://muzey-backend.napaautomotive.uz/storage/' + posts.image" alt="">
  <p v-html="posts.content.uz"></p>
</div>





        <!--Start footer Style2 area-->  
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
      posts: '',
     
    };
  },
  async created() {
    axios
      .get("https://muzey-backend.napaautomotive.uz/api/post/" + `${this.$route.params.id}` )
      .then(response => (this.posts = response.data))
      .then(json => console.log(json))
      .catch((error) => console.log(error))
  },
 
 
}
</script>

<style lang="css">
 .singles .breadcrumb-area {
    background: linear-gradient(rgba(31, 30, 30, 0.315), rgba(12, 12, 12, 0.459)), url('https://www.regalsprings.com/wp-content/uploads/2017/07/blog_fakeNews.jpg')!important;
    background-size: cover!important;
    background-position: center;
    background-repeat: no-repeat;
}
 .singles .pages {
    width: 65%!important;
    margin: auto;
    margin-top: 3rem;
  }
  .singles .pages h4 {
      margin-bottom: 2rem;
  }
   .singles .pages img {
    max-height: 25rem!important;
    width: 90%;
    object-fit: cover;
    margin-bottom: 1.5rem;
   }

   @media (min-width: 360px) and (max-width: 740px) {
     .singles .pages {
       width: 92%!important;
     }
   }
</style>