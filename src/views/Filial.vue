<template>
    <div class="filial">
         <section class="breadcrumb-area" >
    <div class="container">
        <div class="row">
            <div class="col-xl-12">
                <div class="inner-content clearfix">
                    <div class="title">
                       <h1>Muzey Filiali</h1>
                    </div>
                    <div class="breadcrumb-menu">
                        <ul class="clearfix">
                            <li><router-link to="/">Asosiy</router-link></li>
                            <li class="active">Filial</li>
                        </ul>    
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
<!--End breadcrumb area-->

<section class="about-style1-area">
    <div class="container">
        <div class="row">
            <div class="col-xl-12 col-lg-10">
            </div>
            <div class="col-xl-12 col-lg-12">
                <div class="about-style1-content" >
                    <div class="text-about">
                    <div class="sec-title">
                        <img src="../assets/images/resources/muzey-2.jpg" alt="Awesome Image"  data-aos="zoom-in" data-duration="3000" >
                        <div class="big-title"><h1>{{$t('about.title-filial')}} </h1></div>
                    </div>
                     <div class="rektor"  data-aos="zoom-in" data-duration="3000">
                            <img class="img-rektor" src="https://static.tuit.uz/uploads/1/720__nJRuYVqmATl34faXkFYYCGaoOydD515A.jpg" alt="">
                            <div class="rek">
                                <h4>{{$t('about.rektor')}} </h4>
                            <h5>Ravshanbek Karimov Irgashevich</h5>
                            <p>{{$t('about.qabul')}} </p>
                            <h6><i class="fa fa-phone"></i>(998971) 228-56-76</h6>
                            <h6><i class="fa fa-envelope"></i>yahyo5784@gmail.com</h6>
                           </div>
                            </div> 
                        </div>

                    <div class="inner-content" data-aos="fade-up">
                        <h3 >{{$t('about.title-content')}} </h3>
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

    </div>
</template>

<script>
import footera from '../components/footera.vue'

export default {
    components: {
        'footera': footera
    }
}
</script>

<style>
.filial .breadcrumb-area {
    background: linear-gradient(rgba(0, 0, 0, 0.438), rgba(0, 0, 0, 0.39)), url('../assets/images/resources/muzey-2.jpg')!important;
    background-size: cover!important;
    background-position: center !important;
    background-repeat: no-repeat!important;
}
.filial .sec-title img {
     width: 70%;
     object-fit: cover;
     height: 24rem;
     padding-top: 2rem;
     border-radius: 16px;
}
.filial .about-style1-content {
    padding-top: 0px;
}
.filial .rektor img {
    float: left;
    object-fit: cover;
    width: 22%;
    height: 15rem;
}
.filial .about-style1-content .inner-content {
    padding-top: 4rem!important;
    margin-bottom: 12rem;
}
.footer-style2-area.chnage-bg-style {
    margin-top: 0rem;
}
.filial .rek {
    margin-left: 18rem;
    padding-top: 30px;
}
 .rektor h4, h5, h6, p {
    line-height: 30px;
}
.filial .sec-title .big-title h1 {
    font-size: 36px;
    text-align: center;
}
.filial .sec-title img {
    margin-left: 11rem;
}
.filial .about-style1-area {
    background: #ececf9!important;
}
.filial .about-style1-content {
    background: #fff;
}
.filial .rektor {
    width: 90%;
    margin: auto;
}
.filial .inner-content h3 {
    width: 90%;
    margin: auto;
    padding-bottom: 2rem;
    margin-bottom: 2rem;
}

@media(min-width: 320px) and (max-width: 480px) {
    .filial .sec-title img {
        width: 100%;
        border-radius: inherit;
    }
    .filial .sec-title .big-title h1 {
    font-size: 23px;
    line-height: 33px;
}
.filial .rektor img {
    width: 100%;
}
.filial .rek {
    margin-left: 1rem;
    padding-top: 32px;
}
}
@media(min-width: 768px) and (max-width: 1024px) {
    .filial .rektor img {
        width: 40%!important;
       
    }
}

</style>