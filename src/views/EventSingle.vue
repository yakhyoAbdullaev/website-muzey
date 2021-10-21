<template>
   <div class="single">
      <section class="breadcrumb-area" style="background-image: url(../assets/images/breadcrumb/breadcrumb-4.jpg);">
    <div class="container">
        <div class="row">
            <div class="col-xl-12">
                <div class="inner-content clearfix">
                    <div class="title">
                       <h1>Tadbirlar</h1>
                    </div>
                    <div class="breadcrumb-menu">
                        <ul class="clearfix">
                            <li><router-link to="/">Home</router-link></li>
                            <li class="active">Tadbirlar</li>
                        </ul>    
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
<!--End breadcrumb area-->


<div class="pages" event in events >
    <h4> {{events.title.uz}} </h4>
      <img :src="'https://muzey-backend.napaautomotive.uz/storage/' + events.image" alt="">
  <p v-html="events.content.uz"></p>
  <div class="glases">
      <span><i class="fa fa-eye"></i>{{events.views}} </span>
      <span><i class="fa fa-calendar"></i>{{events.created_at.slice(0,10)}} </span>

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
        'footera': footera
    },
   data() {
    return {
      events: '',
      posts: '',      
    };
  },
  async created() {
    axios
      .get("https://muzey-backend.napaautomotive.uz/api/event/" + `${this.$route.params.id}` )
      .then(response => (this.events = response.data))
      .then(json => console.log(json))
      .catch((error) => console.log(error))
  },
   async methods() {
    axios
      .get("https://muzey-backend.napaautomotive.uz/api/post/" + `${this.$route.params.id}` )
      .then(response => (this.posts = response.data))
      .then(json => console.log(json))
      .catch((error) => console.log(error))
  },
 
}
</script>

<style lang="css">
.single {
    background: #f5f5f7;
}
 .single .pages {
   width: 97%!important;
    margin: auto!important;
    margin-top: 3rem;
    background: #fff;
  }
  .single .pages h4 {
      padding-bottom: 2rem;
      text-align: center;
      padding-top: 2rem!important;
      width: 70%;
      margin: auto;
  }
  .single .pages p  {
    width: 90%;
    margin: auto;
  }
  .single .pages img {
    width: 60%;
    margin: 0 15rem;
    margin-bottom: 2rem;
    border-radius: 13px;
  }
  .single .glases {
      margin-left: 114px;
      padding-bottom: 2rem;
      margin-top: 3rem;
  }
  .single .glases span {
      padding: 10px;
  }
  .single .glases span i {
      margin-right: 5px;
  } 
  .single .footer-style2-area.chnage-bg-style {
    margin-top: 9rem;
}
footer {
    margin-top: 6rem;
}
  @media (min-width: 320px) and (max-width: 480px) {
      .single .pages {
    width: 100%!important;
    margin: auto!important;
  }
  .single .pages img{
    width: 100%;
    height: 17rem;
    margin: 0 auto;
    margin-bottom: 1rem;
  }
  }
</style>