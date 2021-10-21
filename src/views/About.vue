<template>
  <div class="about">
<section class="breadcrumb-area">
    <div class="container">
        <div class="row">
            <div class="col-xl-12">
                <div class="inner-content clearfix">
                    <div class="title">
                       <h1>{{$t('home.title')}} </h1>
                    </div>
                    <div class="breadcrumb-menu">
                        <ul class="clearfix">
                            <li><router-link to="/">{{$t('nav.Asosiy')}}</router-link></li>
                            <li class="active">{{$t('home.title')}}</li>
                        </ul>    
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
<!--End breadcrumb area-->

<!--Start About Style1 Area-->
<section class="about-style1-area">
    <div class="container">
        <div class="row">
            <div class="col-xl-12 col-lg-10">
               
            </div>
            <div class="col-xl-12 col-lg-12">
                <div class="about-style1-content">
                    <div class="sec-title">
                        <img src="../assets/images/resources/muzey-2.jpg" alt="Awesome Image">     
                        <div class="big-title"><h1>{{$t('about.title-muzey')}} </h1></div>
                    </div>
                    <div class="inner-content">
                        <h3>{{$t('about.title-content')}} </h3>
                        <!-- <div class="text">{{$t('about.content2')}}</div> -->
                        <div class="bottom-box">
                            <!-- <div class="button">
                                <a class="btn-one" href="#">Learn More</a>    
                            </div> -->
                        </div> 
                    </div>    
                </div>   
            </div>
            
        </div> 
    </div>    
</section>

   
<!--Start footer Style2 area-->  
 <footera></footera>
<!--End footer Style2 area-->
<router-view/>
  </div>
</template>

<script>
import footera from '../components/footera.vue'
export default {
    components: {
        'footera': footera
    },
    data() {
        return{
            settings: ''
        };
    },
     
}
</script>


<style lang="css">
.about .breadcrumb-area{
      background: linear-gradient(rgba(27, 27, 27, 0.541),rgba(27, 27, 27, 0.541)), url('../assets/images/resources/muzey-2.jpg')!important;
      background-position: center;
      background-repeat: no-repeat;
      background-size: cover!important;
  }
  .about {
      background: #f6f6f9;
  }
  /* .footer-logo a img {
    object-fit: contain;
    width: 10rem;
    height: 91px;
} */
  .breadcrumb-area .title h1 {
      font-size: 28px;
      width: 100%;
  }
 /* .about .about-style1-area {
      background: #f8f9fa;
  } */
  .about .sec-title img {
      margin-bottom: 0px;
    height: 22rem;
    width: 100%;
    object-fit: cover;
    padding-top: 20px;
  }
  .about .sec-title .big-title h1 {
      font-size: 30px;
      text-align: center;
  }
  .about .about-style1-left-content .img-box:before {
    position: absolute;
    top: 0px;
    left: 0;
    right: 0;
    width: 0px;
    height: 0px;
    margin: 0 auto;
    border: 0px solid #e7e7e6;
    background: #d2d1d0;
    
}
.about .about-style1-content {
    padding-top: 0px;
    background: #fff;
    width: 90%;
    margin-bottom: 7rem;
}
.about .about-style1-content .inner-content h3 {
    width: 90%;
    margin: auto;
    padding-bottom: 4rem;
}
.about .about-style1-content .inner-content .text {
    padding-top: 40px;
}
/* .single-footer-widget .contact-us {
    position: relative;
    display: block;
    margin-top: -5px;
    width: 67%;
} */
</style>
