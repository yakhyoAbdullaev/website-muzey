<template>
<div>
<footer class="footer-style2-area chnage-bg-style">
    <div class="layer-outer-bg" style="background-image:url(..assets/images/parallax-background/footer-style4-bg.jpg);"></div>
    <div class="footer" data-aos="zoom-in">
        <div class="container">
            <div class="row">
                <!--Start single footer widget-->
                <div class="col-xl-3 col-lg-4 col-md-4 col-sm-12 wow fadeInUp" data-wow-delay="100ms">
                    <div class="single-footer-widget clr-white marbtm50">
                        <div class="footer-logo">
                            <a href="index-2.html"><img src="../assets/images/resources/logo-2.png" alt="Footer Logo"></a>
                        </div>
                        <div class="text">Podcasting operational change management inside of workflows to establish a framework. Taking seamless.</div>
                    </div>
                </div>
                <!--End single footer widget-->
                <!--Start single footer widget-->
                <div class="col-xl-2 col-lg-4 col-md-4 col-sm-12 wow fadeInUp" data-wow-delay="100ms">
                    <div class="single-footer-widget clr-white marbtm50">
                        <div class="title">
                            <h3>{{$t('home.havola')}} </h3>
                        </div>
                        <ul class="social-links" v-for="setting in settings" :key="setting.id">
                            <li><a href="https://www.youtube.com/channel/UCpnUx6a0HdKq-qQZM0nG8Ig" target="_blnak">YouTube</a></li>
                            <li><a :href="'https://www.instagram.com/' + setting.instagram.uz" target="_blnak">Instagram</a></li>
                            <li><a :href="'https://t.me/' + setting.telegram.uz" target="_blnak">Telegram</a></li>
                            <li><a :href="'https://www.facebook.com/' + setting.facebook.uz" target="_blnak">Facebook</a></li>	
                        </ul>    
                    </div>
                </div>
                <!--End single footer widget-->
                <!--Start single footer widget-->
                <div class="col-xl-3 col-lg-4 col-md-4 col-sm-12 wow fadeInUp" data-wow-delay="100ms">
                    <div class="single-footer-widget clr-white">
                        <div class="title">
                            <h3>{{$t('nav.contact')}} </h3>
                        </div>
                        <div class="contact-us" v-for="setting in settings" :key="setting.id">
                            <p >{{setting.address.uz}} </p>
                            <div class="phone-num">
                                <a href="tel:1800-123-4659">{{setting.phone.uz}} <br>{{setting.phone2.uz}}</a>
                                <i class="fa fa-envelope" style="color: white;"><a href="#"> {{setting.email.uz}} </a> </i> <br>
                                <i class="fas fa-fax" style="color: white;">{{setting.fax.uz}} </i>
                            </div>
                        </div>
                    </div>
                </div>
                <!--End single footer widget-->
                <!--Start single footer widget-->
                <div class="col-xl-2 col-lg-8 col-md-8 col-sm-12 wow fadeInUp" data-wow-delay="100ms">
                    <div class="single-footer-widget clr-white opening-hours-box pdtop50">
                        <div class="title">
                            <h3 v-html="$t('home.work-day')"></h3>
                        </div>
                        <div class="opening-hours">
                            <p v-html="$t('home.vaqt')"></p>
                        </div>
                    </div>
                    <div class="single-footer-widget clr-white follow-sociallinks-widget-box">
                        <div class="title">
                            <h3>{{$t('home.networking')}} </h3>
                        </div>
                        <div class="footer-social-links"  v-for="setting in settings" :key="setting.id">
                            <ul class="social-links-style1">
                                <li>
                                    <a :href="'https://www.facebook.com/' + setting.facebook.uz"><i class="fa fa-facebook" aria-hidden="true"></i></a> 
                                </li>
                                <li>
                                    <a :href="'https://www.instagram.com/' + setting.instagram.uz"><i class="fa fa-instagram" aria-hidden="true"></i></a> 
                                </li>
                                <li>
                                    <a href="https://www.youtube.com/channel/UCpnUx6a0HdKq-qQZM0nG8Ig"><i class="fa fa-youtube-play" aria-hidden="true"></i></a>
                                </li>
                                <li>
                                   <a :href="'https://t.me/' + setting.telegram.uz"><i class="fa fa-telegram" aria-hidden="true"></i></a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <!--End single footer widget-->
                <!--Start single footer widget-->
                <div class="col-xl-2 col-lg-4 col-md-4 col-sm-12 wow fadeInUp" data-wow-delay="100ms">
                    <div class="single-footer-widget clr-white pdtop50">
                        <div class="title">
                            <h3>{{$t('home.havola')}} </h3>
                        </div>
                        <ul class="quick-links">
                            <li><router-link to="/">{{$t('nav.Asosiy')}}</router-link></li>
                            <li><router-link to="/about">{{$t('nav.muzey-bolim')}}</router-link></li>
                            <li><router-link to="/gallery">{{$t('nav.gallery')}}</router-link></li>
                            <li><router-link to="/news">{{$t('nav.yanglik2')}}</router-link></li>
                            <li><router-link to="/contact">{{$t('nav.contact')}}</router-link></li>	
                        </ul>             	  
                    </div>
                </div>
                <!--End single footer widget-->
            </div>
        </div>
    </div>
    <div class="footer-bottom-style2">
        <div class="container">
            <div class="copyright-text text-center" v-for="setting in settings" :key="setting.id">
                <p>© Copyright 2021 {{setting.name.uz}} <a href="https://napaautomotive.uz"><img src="../assets/images/arxeology/Ресурс 21.svg" alt=""></a></p>
            </div>      
        </div>    
    </div>
</footer> 
</div>
</template>

<script>
import axios from 'axios';
export default {
    data() {
        return{
            settings: ''
        };
    },
     async created() {
        axios
      .get("https://muzey-backend.napaautomotive.uz/api/setting")
      .then(response => (this.settings = response.data))
      .then(json => console.log(json))
      .catch((error) => console.log(error))
  },
}
</script>

<style>
.footer img {
    max-width: 50%;
}
.footer .contact-us .phone-num a {
    font-size: 20px;
}
 .contact-us  {
    width: 75%;
}
.contact-us p {
    margin-bottom: 1rem;
}
.footer-bottom-style2 > .container > .text-center  img {
    width: 11%!important;
    margin-left: 1rem;
}
</style>
