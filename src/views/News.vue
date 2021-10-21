<template>
<div>
    <div class="news-template">
        <section class="breadcrumb-area" style="background-image: url(../assets/images/breadcrumb/breadcrumb-4.jpg);">
    <div class="container">
        <div class="row">
            <div class="col-xl-12">
                <div class="inner-content clearfix">
                    <div class="title">
                       <h1>{{$t('nav.yanglik')}} </h1>
                    </div>
                    <div class="breadcrumb-menu">
                        <ul class="clearfix">
                            <li><router-link to="/">{{$t('nav.Asosiy')}}</router-link></li>
                            <li class="active">{{$t('nav.yanglik')}}</li>
                        </ul>    
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
<!--End breadcrumb area-->

<div class="all-news">
    <div class="container">
        <div class="bg-dark" style="color: #fff">
              <div class="all-text">
            <p style="text-align: left;">{{$t('gallery.news')}}</p>
        </div>
        </div>
      
        <div class="row" >
            <div class="col-md-3" v-for="currency in info.reverse().slice()" :key="currency.id">
                <div class="card news-item press-card">
                           <img :src="'https://muzey-backend.napaautomotive.uz/storage/' +  currency.image" alt="">
                   <div class="press-date">
                       <span> {{currency.created_at.slice(0,10)}} </span>
                       <div class="card-body">
                           <p class="card-text">
                             <router-link :to="`/single/${currency.id}` ">
                               {{currency.title[$i18n.locale].slice(0,123)}}...
                             </router-link>
                           </p>
                           <p> <i class="fa fa-eye"></i> {{currency.views}} </p>
                            <div class="moreinfo pull-right">
                    </div>
                       </div>
                   </div>
                </div>
            </div>
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
      info: '',
    };
  },
  async mounted() {
    axios
      .get("https://muzey-backend.napaautomotive.uz/api/news")
      .then(response => (this.info = response.data))
      .then(json => console.log(json))
      .catch((error) => console.log(error))
  }
 
  
};

</script>

<style lang="css">
.news-template .breadcrumb-area{
      background: linear-gradient(rgba(27, 27, 27, 0.541),rgba(27, 27, 27, 0.541)), url('../assets/images/resources/muzey-2.jpg')!important;
      background-position: center;
      background-repeat: no-repeat;
      background-size: cover!important;
  }
  .news-template {
      background: #f2f2f977!important;
  }
.all-news {
    margin-top: 4rem;
    padding-bottom: 6rem;
}
.news-template .logo img {
     width: 120px;
    height: 50px;
    object-fit: contain;
}
    .news-template .press-date span {
    position: absolute;
    color: #fff;
    background: #1a5ba7;
    padding: 3px 10px;
    font-size: 11px;
    border-top-right-radius: 7px;
    border-bottom-right-radius: 7px;
    margin-top: -11px;
    text-transform: lowercase;
    }
    .news-template .card {
        width: 100%;
        margin: auto;
        margin-bottom: 30px;
        height: 100%;
        border: none;
        border-radius: 10px;
        box-shadow: 0px 1px 6px 5px rgb(230 222 222 / 50%);
    } 
    .news-template .card-body {
    height: 100%;
    padding-right: 15px;
    padding-left: 15px
    }
    .news-template img {
        height: 160px;
    object-fit: cover
    
    }
    .news-template .col-md-3 {
        padding: 10px;
    }
    .news-template .card-text {
        text-align: left;
        font-size: 13px;
        height: 100%;
        width: 100%;
        padding-top: 10px;
        margin-bottom: -25px;
        line-height: 18px;
        cursor: pointer;
    }
     .news-template .card-text a:hover {
         text-decoration: underline;
     }
    .news-template .footer-logo img {
        width: 140%;
    height: 30%;
    }
    .news-template .moreinfo {
       min-height: 37px;
    }
     .news-template .pagination-main .active {
         background-color: rgb(160, 160, 214);
         color: #fff;
     }
    
</style>