<template>
    <div class="directors">
        <div class="container profile-page">
            <nav>
          <ul class="breadcrumb-page list-unstyled">
            <li class="breadcrumb-item"><router-link to="/">Bosh Sahifa</router-link></li>
            <li class="breadcrumb-item active">Muzey</li>             
            <li class="breadcrumb-item active">Rahbariyat</li>
          </ul>
          <div class="clearfix"></div>
        </nav>
    <div class="row">
        <div class="col-xl-6 col-lg-7 col-md-12" v-for="get in gets" :key="get.id">
            <div class="card profile-header">
                <div class="body">
                    <div class="row">
                        <div class="col-lg-4 col-md-4 col-12">
                            <div class="profile-image float-md-right"> <img :src="'https://muzey-backend.napaautomotive.uz/storage/' + get.avatar" alt=""> </div>
                        </div>
                        <div class="col-lg-8 col-md-8 col-12">
                    <h4 class="m-t-0 m-b-0"><strong> {{get.position.uz}} </strong></h4>
                       <span class="job_post"> {{get.full_name.uz}} </span>
                            <p> Qabul kunlari: {{get.work_day.uz}} <br>
                                <i class="fa fa-phone"> {{ get.phone.uz}} </i> <br>
                                <i class="fa fa-envelope">{{ get.email.uz}} </i>
                            </p> 
                            <!-- <p class="social-icon m-t-5 m-b-0">
                                <a title="Twitter" href="javascript:void(0);"><i class="fa fa-twitter"></i></a>
                                <a title="Facebook" href="javascript:void(0);"><i class="fa fa-facebook"></i></a>
                                <a title="Google-plus" href="javascript:void(0);"><i class="fa fa-twitter"></i></a>
                                <a title="Telegram" href="javascript:void(0);"><i class="fa fa-telegram"></i></a>
                                <a title="Instagram" href="javascript:void(0);"><i class="fa fa-instagram "></i></a>
                            </p> -->
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
import footera from '../components/footera.vue'
import axios from "axios";
export default {
   components: {
        'footera': footera
    },
  data() {
    return {
      gets: null,
      settings: null
    };
  },
  async mounted() {
    axios
      .get("https://muzey-backend.napaautomotive.uz/api/staff")
      .then(response => (this.gets = response.data))
      .then(json => console.log(json))
      .catch((error) => console.log(error))
  },
  async created() {
    axios
      .get("https://muzey-backend.napaautomotive.uz/api/setting")
      .then(response => (this.settings = response.data))
      .then(json => console.log(json))
      .catch((error) => console.log(error))
  }
};

</script>

<style scoped>
.directors {
   background: #f8f8f8;
   padding-top: 1rem;
}
.directors .container {
    max-width: 1287px;
}
.directors .breadcrumb-page {
    overflow: hidden;
    margin-bottom: 0;
    padding: 15px 0;
    display: flex;
}
.directors .breadcrumb-item {
    color: #1757a5 !important;
    font-size: 14px;
}
.directors .breadcrumb-item a {
    color: #1757a5 !important;
    font-size: 14px;
}
.directors a {
    color: #2D353D;
    padding: 11px;
    font-size: 28px;
}
.directors a i {
    font-size: 18px;
    transition: 0.4s ease;
   
}
.directors .col-xl-6 {
    padding: 15px;
} 
.directors a i:hover {
    color: blue;
     transform: scale(2, 2);
}
  .m-t-5{
    margin-top: 5px;   
}
.directors .card img {
   border-radius: 10px;
   height: 12rem!important;
   object-fit: cover;
   margin-right: 2rem;
}
.directors .card {
   background: #fff;
    margin-bottom: 30px;
    transition: .5s;
    border: 0;
    border-radius: .1875rem;
    display: inline-block;
    position: relative;
    width: 100%;
    box-shadow: none;
    max-height: 14rem;
    box-shadow: 0px 1px 6px 5px rgb(230 222 222 / 50%);
}
.directors .card .body {
    font-size: 14px;
    color: #424242;
    padding: 20px;
    font-weight: 400;
}
.directors .profile-page .profile-header {
    position: relative
}
.directors .footer-style2-area.chnage-bg-style {
    margin-top: 7rem;
}

@media(min-width: 320px) and (max-width: 480px) {
    .directors .card {
        max-height: 34rem;
    max-width: 1000%;
    margin: auto;
    }
    .directors .card img {
        margin-bottom: 1rem;
        height: 16rem!important;
        width: 100%;
    }
    .directors .col-xl-6 {
        padding: 15px;
    }
}
@media(min-width: 414px) and (max-width: 736px) {
    .directors .card {
      max-height: 34rem;
    max-width: 100%;
    margin: auto;
    }
    .directors .card img {
        margin-bottom: 1rem;
        height:16rem!important;
    }
}
@media(min-width: 375px) and (max-width: 812px) {
    .directors .card {
       max-height: 34rem;
    max-width: 100%;
    margin: auto;
    }
    .directors .card img {
    margin-bottom: 1rem;
    width: 100%;
    object-fit: cover;
     height: 16rem!important;
    }
}
@media(min-width: 768px) and (max-width: 1024px) {
    .directors .card {
       max-height: 34rem;
    max-width: 100%;
    margin: auto;
    }
    .directors .card img {
        margin-bottom: 1rem;
         height: 16rem!important;
    }
}
</style>