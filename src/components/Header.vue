<template>
    <div>
        <header class="main-header main-header-style4">
   
    <!--Start header top Style3 -->
    <div class="header-top-style3">
        <div class="container">
            <div class="outer-box clearfix">
                <!--Top Left-->
                <div class="header-top-left-style3 float-left">
                    <div class="login-register-box">
                        <div class="icon-holder">
                            <span class="flaticon-user"></span> 
                        </div>
                        <ul>
                            <li><router-link :to="'/register'">{{$t('nav.register')}} </router-link></li>
                            <li><router-link :to="'/login'">{{$t('nav.sign')}} </router-link></li>
                        </ul>   
                    </div>
                </div>
                 <div class="banner-settings">
                    
                </div>
                <!--Top Right-->
                <div class="header-top-right-style3 float-right">
                    <div class="header-social-links">
                        <ul class="sociallinks-style-two">
                            <li>
                                <a href="#"><i class="fa fa-youtube"></i></a>
                            </li>
                           
                            <li>
                                <a href="https://www.facebook.com/stateartmuseum.uz" target="_blank"><i class="fa fa-facebook" aria-hidden="true"></i></a> 
                            </li>
                            <li>
                                <a href="https://www.instagram.com/davlat_sanat_muzeyi/" target="_blank"><i class="fa fa-instagram" aria-hidden="true"></i></a> 
                            </li>
                            <li>
                                <a href="https://t.me/state_art_museum" target="_blank"><i class="fa fa-telegram" aria-hidden="true"></i></a>
                            </li>
                        </ul>
                      <button class="lang-btn">      
                           <select v-model="$i18n.locale" >
                            <option  v-for="(lang, i) in langs" :key="`Lang${i}`" :value="lang">
                                {{ lang }} 
                            </option>
                            </select>
                      </button>
                    </div>    
                </div>
                
            </div>  
        </div>
    </div>
    
    <!--End header top Style3-->
   
    <!--Start Header upper Style4-->
    <div class="header-upper-style4">
        <div class="container clearfix">
            <div class="outer-box clearfix"> 
                <div class="header-upper-left-style4 clearfix float-left">
                    <div class="logo">
                        <router-link :to="'/'">
                        <img src="../assets/images/resources/logo-1.png" alt="Awesome Logo" title="">
                        </router-link>
                    </div>
                </div>
                <div class="header-upper-right-style4 float-right clearfix">
                    <div class="nav-outer clearfix">
                        <!-- Main Menu -->
                        <nav class="main-menu style4 navbar-expand-lg">
                            <div class="navbar-header">
                                <!-- Toggle Button -->      
                                <button type="button" 
                                class="navbar-toggle" data-toggle="collapse" 
                                data-target="#navbarSupportedContent" 
                                aria-controls="navbarSupportedContent" 
                                aria-expanded="false" 
                                aria-label="Toggle navigation">
                                <span class="icon-bar"></span>
                                <span class="icon-bar"></span>
                                <span class="icon-bar"></span>
                                </button>
                            </div>

                            <div class="navbar-collapse collapse clearfix" id="navbarSupportedContent">
                                <ul class="navigation clearfix">
                                    <li class="dropdown"><a class="active" href="#"> <p> {{ $t('nav.Asosiy') }} </p> </a>
                                        <ul>
                                            <li><router-link :to="'/'">{{ $t('nav.bolim') }}</router-link></li>
                                            <li><router-link :to="'/directors'">{{ $t('nav.bolim2') }}</router-link></li>
                                        </ul>
                                    </li>
                                    <li><a href="#">{{ $t('nav.muzey') }}</a>
                                    <ul>
                                            <li><router-link :to="'/about'">{{ $t('nav.muzey-bolim') }}</router-link></li>
                                            <li><router-link :to="'/article'">{{ $t('nav.muzey-bolim2') }}</router-link></li>
                                           <li><router-link :to="'/stuff'">{{ $t('nav.muzey-bolim3') }}</router-link></li>
                                           <li><router-link :to="'/library'">{{ $t('nav.muzey-bolim4') }}</router-link></li>
                                         <li><router-link to="/buklets">Bukletlar</router-link></li>
                                        </ul>
                                    </li>
                                    <li><a href="#">{{ $t('nav.gallereya') }}</a>
                                   <ul>
                                            <li><router-link :to="'/gallery'">{{ $t('nav.gallery') }}</router-link></li>
                                            <li><router-link :to="'/gallery4'">{{ $t('nav.gallery2') }}</router-link></li>
                                            <li><router-link to="/gradus">{{ $t('nav.gallery4') }}</router-link></li>
                                        </ul>
                                    </li>
                                    <li class="pages" ><a href="#">{{ $t('nav.bolimlar') }}</a>
                                        <ul >
                                           <!-- <li ><router-link :to="'/gallery/'">Oʻzbekiston amaliy sa'nati</router-link></li>
                                            <li><router-link :to="'/gallery2'">O‘zbekiston rang-tasvir san’ati</router-link></li>
                                            <li><router-link :to="'/gallery3'">Rus va G’arbiy Yevropa san’ati</router-link></li>
                                            <li><router-link :to="'/gallery3'">Xorijiy sharq mamlakatlari sa'nati</router-link></li> -->
                                            <li v-for="categories in category" :key="categories.id">
                                            <router-link :to="'/category/'+ categories.id"> 
                                            {{categories.title.uz}}
                                            </router-link>
                                            </li>
                                            
                                        </ul>
                                            </li>
                                   <li class="dropdown"><a href="#">{{ $t('nav.yanglik') }}</a>
                                <ul>
                                    <li class="dropdown"><router-link :to="'/news'">{{ $t('nav.yanglik2') }}</router-link></li>
                                    <li class="dropdown"><router-link :to="'/events'">{{ $t('nav.tadbirlar') }}</router-link></li>
                                    <li class="dropdown"><router-link :to="'/video'">Videolar</router-link></li>
                                </ul>
                                </li>
                                    <!-- <li class="dropdown"><router-link :to="'/filial'">{{ $t('nav.filial') }}</router-link></li> -->
                                    <li><router-link :to="'/contact'">{{ $t('nav.contact') }}</router-link></li>
                                </ul>
                            </div>
                        </nav>                        
                        <!-- Main Menu End-->
                         <div class="menu-right-content-style4">
                            <div class="outer-search-box-style1">
                                <div class="seach-toggle"><i class="fa fa-search"></i></div>
                                <ul class="search-box">
                                    <li>
                                        <form method="post" action="">
                                            <div class="form-group">
                                                <input type="search" name="search" placeholder="Search Here" required>
                                                <button type="submit"><i class="fa fa-search"></i></button>
                                            </div>
                                        </form>
                                    </li>
                                </ul>
                            </div> 
                            <div class="buy-ticket-button"> 
                                <router-link :to="'/tickets'">{{ $t('nav.bilet') }}</router-link>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

        </div>
    </div>
    <!--End Header Upper Style4-->
   
    <!--Sticky Header-->
    
</header>
    </div>
</template>
<script>
import axios from 'axios';
export default {
    name: 'Header',
        data() {
        return{
            category: '',
             langs: ['uz', 'ru', 'en'] 
        };
    },
    async mounted() {
    axios
      .get("https://muzey-backend.napaautomotive.uz/api/gcategory")
      .then(response => (this.category = response.data))
      .then(json => console.log(json))
      .catch((error) => console.log(error))
  },
//   methods:{LangeChange(langename) { loacalStroge.setItem('leng',langename ) 
// request({
// url: 'url',
//  methodname: "get or put or post ", 
// params: {langename: langename}})}}
}
</script>












<style lang="css">

.header-upper-style4 {
    position: relative;
    display: block;
    background: #2d353d;
}
.header-upper-left-style4 .logo a img {
    width: 70%;
}
.fixed-header .sticky-header {
    height: 87px;
}
.header-top-style3 {
     background: #2d353d;
}
.header-social-links {
    display: flex;
}
.lang-btn {
    width: 63px;
}
.lang-btn select {
    color: #fff;
    background: transparent;
    border-radius: 6px;
}
.lang-btn select option {
    background: #2d353d;
}
.navbar-collapse li a:hover {
    background:#E3B33A;
    color: #fff;
    height: 100%;
}
.main-menu.style4 .navigation>li > a {
    padding: 20px 7px 20px!important;
    font-size: 15px;
}
.main-header-style4 {
    line-height: 0px;
}
   .language {
       display: inline-block;
       margin-left: 10px;
   }
   .language select {
       border-radius: 5px;
       color: rgb(66, 74, 184);
   }
   .tparrows.tp-leftarrow:before {
    content: '';
}
.tparrows.tp-rightarrow:before {
    content: '';
}
   .tparrows {
       background: transparent!important;
   }
   .banner-settings {
       margin-left: 41rem;
       display: inline-block;
   }
   .banner-settings a i{
    color: #fff;
   }
  .main-menu .navigation>li:hover ul{
      display: block;
  }
  .main-menu .navigation .pages ul li {
      display: none;
  }
  .main-menu .navigation .pages:hover ul li {
      display: block;
  }
</style>
