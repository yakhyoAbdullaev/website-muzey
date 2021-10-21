<template>
   <div class="single">
      <section class="breadcrumb-area" >
    <div class="container">
        <div class="row">
            <div class="col-xl-12">
                <div class="inner-content clearfix">
                    <div class="title">
                       <h1>Yangiliklar</h1>
                    </div>
                    <div class="breadcrumb-menu">
                        <ul class="clearfix">
                            <li><router-link to="/">Asosiy</router-link></li>
                            <li class="active">Yangilik</li>
                        </ul>    
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
<!--End breadcrumb area-->

<div class="single-pages">
    <div class="container">
    <div class="row">
    <div class="col-md-13">
        <div class="pages" currency in singls >
    <h4> {{singls.title.uz}} </h4>
     <img :src="'https://muzey-backend.napaautomotive.uz/storage/' + singls.meta_image" alt="">
  <p v-html="singls.content.uz"></p>
   <div class="glases">
      <span><i class="fa fa-eye"></i>{{singls.views}} </span>
      <span><i class="fa fa-calendar"></i>{{singls.created_at.slice(0,10)}} </span>
  </div>
  <p class="keyword">Kalit so'zlar: {{singls.keyword.uz}} </p>
 </div>
</div>
  <!-- <div class="col-md-4" v-for="currency in info.slice(0, 3)" :key="currency.id">
    <div class="card" style="width: 18rem;">
  <img :src="'https://muzey-backend.napaautomotive.uz/storage/' +  currency.image" alt="">              <div class="card-body">
  <div class="card-body">
    <p class="card-text">{{currency.title.uz}} </p>
  </div>
    <div class="moreinfo pull-right">
      <router-link :to="'/single/' + currency.id">Ba'tafsil</router-link>
    </div>
</div>
    </div>
</div> -->
</div>
</div>
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
         'footera': footera,
    },
   data() {
    return {
      singls: {},
      info: '',
      id: this.$route.params.id
    };
  },
   created() {
    axios
      .get("https://muzey-backend.napaautomotive.uz/api/news/" + this.id )
      .then(response => (this.singls = response.data))
      .then(json => console.log(json))
      .catch((error) => console.log(error))
  },
//   async mounted() {
//     axios
//       .get("https://muzey-backend.napaautomotive.uz/api/news" )
//       .then(response => (this.info = response.data))
//       .then(json => console.log(json))
//       .catch((error) => console.log(error))
//   }
 
 
}
</script>

<style lang="css">
.single {
    background: #f8f9f8;
}
.single .breadcrumb-area {
    background: linear-gradient(rgba(31, 30, 30, 0.315), rgba(12, 12, 12, 0.459)), url('https://www.regalsprings.com/wp-content/uploads/2017/07/blog_fakeNews.jpg')!important;
    background-size: cover!important;
    background-repeat: no-repeat;
}
 .single .pages {
    width: 100%!important;
    margin: auto!important;
    margin-top: 3rem!important;
    background: #fff;
    border-radius: 10px;
  }
  .single .single-pages .card {
      width: 16rem;
      height: 26rem;
    margin-top: 3rem;
  }
  .single .single-pages .card img {
      height: 12rem;
    object-fit: cover;
  }
  .single .single-pages .card-text {
      line-height: 20px;
  }
  .single .pages h4 {
      text-align: left;
      padding-top: 2rem;
      width: 90%;
      margin: auto;
      margin-bottom: 2rem;
  }
  .single .pages p {
    width: 92%;
    margin: auto;
    padding-bottom: 0rem;
    line-height: 22px;
  }
   .single .pages img {
    max-height: 25rem!important;
   width: 50%;
    object-fit: cover;
    margin-bottom: 1.5rem;
   }
   .single iframe {
       height: 28rem;
   }
   .single .keyword {
       padding-bottom: 3rem!important;
       font-weight: bold;
   }

   @media (min-width: 320px) and (max-width: 480px) {
    .single .pages {
        margin-left: 0px!important;
    }
    .single .pages img {
    width: 100%;
    margin-left: 0rem;
    }
    .single .pages h4 {
    margin-bottom: 2rem!important;
    font-size: 20px;
    width: 86%;
    margin: auto;
   }
   .single .single-pages .card {
       width: 86%;
       margin: auto;
       margin-top: 3rem;
       padding: 10px;
   }
   @media (min-width: 768px) and (max-width: 1024px) {
       .single .pages {
        margin-left: 103px;
    }
    .single .pages .col-md-4 {
        margin-left: 73px;
    }
   }
   @media (min-width: 1024px) and (max-width: 1366px) {
       .single .pages .col-md-6 {
        margin-left: -103px!important;
        padding: 0px;
       }
        .single .pages {
        margin-left: 90px;
    }

   }
   
}
</style>