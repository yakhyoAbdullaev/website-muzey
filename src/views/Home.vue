<template>
  <div class="home">
<!-- <section class="bredcrumb">
  <div class="container">
    <div class="rower">
       <div class="button">
       <a  href="https://roundme.com/viewgallery/3185/571285/1850293" target="_blank">{{ $t('home.virtual') }}</a>
    </div>
    </div>
  </div>
</section> -->
    <slider-main></slider-main>
<section class="intro-area">
      <div class="container">
        <div class="row">
          <div class="col-xl-12">
            <div class="intro-box">
              <div class="inner-content">
                <!-- <p> {{$t('message')}} </p> -->
                <h3>{{ $t('home.title') }}</h3>
                <p>
                {{ $t('home.content') }}
                </p>
                <router-link class="btn-one" to="/about"> {{ $t('home.koproq') }}</router-link>
              </div>

              <div class="plan-your-visit">
                <h2>
                  {{ $t('home.tashrif') }}
                  <!-- <a href="#"
                    ><i class="fa fa-long-arrow-right" aria-hidden="true"></i
                  ></a> -->
                </h2>
                <ul>
                  <li>
                    <div class="icon-holder">
                      <span class="flaticon-clock"></span>
                    </div>
                    <div class="title-holder">
                      <h3>  {{ $t('home.hour') }}</h3>
                      <p v-html="$t('home.vaqt')"/>
                    </div>
                  </li>
                  <li>
                    <div class="icon-holder">
                      <span class="flaticon-placeholder"></span>
                    </div>
                    <div class="title-holder">
                      <h3>
                        <a
                          target="_blank"
                          href="https://www.google.com/maps/place/O'zbekiston+davlat+sa'nat+muzeyi/@41.3027455,69.2756005,17z/data=!3m1!4b1!4m5!3m4!1s0x38ae8ad73c0e7845:0xca4415881e7cee5c!8m2!3d41.3028736!4d69.2776401?hl=ru-KG"
                        >
                         {{ $t('home.adress') }} </a
                        >
                      </h3>
                      <p>
                        <a
                          target="_blank" v-html="$t('home.manzil')"
                          href="https://www.google.com/maps/place/O'zbekiston+davlat+sa'nat+muzeyi/@41.3027455,69.2756005,17z/data=!3m1!4b1!4m5!3m4!1s0x38ae8ad73c0e7845:0xca4415881e7cee5c!8m2!3d41.3028736!4d69.2776401?hl=ru-KG"
                          > </a
                        >
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!--End Intro Area-->
    <!-- news section -->
    <section class="news">
      <div class="container">
        <div class="news-title">
          <h1> {{ $t('nav.yanglik') }}</h1>
        </div>
        <div class="row">
          <div 
            class="col-md-4"  v-for="currency in info.reverse().slice(0, 3)" :key="currency.id"
            data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="1500"
          >
            <div class="card nth2">
  <img :src="'https://muzey-backend.napaautomotive.uz/storage/' +  currency.image" alt="">              
  <div class="card-body">
                <h5 class="card-title">
                 {{currency.title.uz.slice(0,120)}}...
                </h5>
                <div class="post-date pull-left">
                  <p><i class="fa fa-calendar"></i> {{currency.created_at.slice(0,10)}}</p>
                </div>
                <div class="moreinfo pull-right">
                  <router-link v-bind:to="'/single/' + currency.id">Ba'tafsil </router-link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="video">
      <div class="container">
        <h3>Muzey haqida video</h3>
        <iframe width="930" height="315" src="https://www.youtube.com/embed/2PUmPtjfBHU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </div>
    </section>
   
    <!--Start Exhibitions Area-->
    <section class="exhibitions-area">
      <div class="container">
        <div class="sec-title">
          <div class="big-title"><h1>{{$t('home.rasmlar')}}</h1></div>
        </div>
        <div class="row masonary-layout">
          <!--Start single exhibition Box-->
           <div class="col-xl-4 col-lg-6 col-md-6 col-sm  wow fadeInUp" data-aos="fade-up"
     data-aos-duration="800">
            <div class="single-exhibition-box">
              <div class="img-holder">
                <img
                 src="../assets/images/art/003.jpg"
                  alt="Awesome Image"
                />
                <div class="overlay-style-one bg1">
                  <div class="zoom-button">
                    <a
                      class="lightbox-image"
                      data-fancybox="gallery"
                      href="https://suspicious-heyrovsky-99a5e9.netlify.app/003.jpg"
                    >
                      <i class="fa fa-search-plus" aria-hidden="true"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div class="text-holder text-center">
                 <!-- <span>{{$t('home.korgazma')}}</span> -->
                <h2>
                  <a href="#">
                   {{$t('home.img-name7')}}</a
                  >
                </h2> 
                <div class="button">
                  <div class="inner">
                    <router-link class="btn-one" to="/gallery"
                      >{{$t('home.koproq')}}</router-link
                    >
                  </div>
                </div>
              </div>
            </div>
          </div>
            <div class="col-xl-4 col-lg-6 col-md-6 col-sm wow fadeInUp" data-aos="fade-up"
     data-aos-duration="800">
            <div class="single-exhibition-box">
              <div class="img-holder">
                <img
                 src="../assets/images/art/014.jpg"
                  alt="Awesome Image"
                />
                <div class="overlay-style-one bg1">
                  <div class="zoom-button">
                    <a
                      class="lightbox-image"
                      data-fancybox="gallery"
                      href="https://suspicious-heyrovsky-99a5e9.netlify.app/014.jpg"
                    >
                      <i class="fa fa-search-plus" aria-hidden="true"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div class="text-holder text-center">
                <!-- <span>{{$t('home.korgazma')}}</span> -->
                <h2>
                  <a href="#">
                   {{$t('home.img-name8')}}</a
                  >
                </h2>
                <div class="button">
                  <div class="inner">
                    <router-link class="btn-one" to="/gallery"
                      >{{$t('home.koproq')}}</router-link
                    >
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-xl-4 col-lg-6 col-md-6 col-sm wow fadeInUp" data-aos="fade-up"
     data-aos-duration="800">
            <div class="single-exhibition-box">
              <div class="img-holder">
                <img
                 src="../assets/images/art/33.jpg"
                  alt="Awesome Image"
                />
                <div class="overlay-style-one bg1">
                  <div class="zoom-button">
                    <a
                      class="lightbox-image"
                      data-fancybox="gallery"
                      href="https://suspicious-heyrovsky-99a5e9.netlify.app/33.jpg"
                    >
                      <i class="fa fa-search-plus" aria-hidden="true"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div class="text-holder text-center">
                <!-- <span>{{$t('home.korgazma')}}</span> -->
                <h2>
                  <a href="#">
                   {{$t('home.img-name')}}</a
                  >
                </h2>
                <div class="button">
                  <div class="inner">
                    <router-link class="btn-one" to="/gallery"
                      >{{$t('home.koproq')}}</router-link
                    >
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!--End single exhibition Box-->
          <!--Start single exhibition Box-->
          <div
            class="col-xl-4 col-lg-6 col-md-6 col-sm wow fadeInUp" 
            data-wow-delay="400ms"
          >
            <div class="single-exhibition-box">
              <div class="img-holder">
                <img
                  src="../assets/images/art/DSCN000.jpg"
                  alt="Awesome Image"
                />
                <div class="overlay-style-one bg1">
                  <div class="zoom-button">
                    <a
                      class="lightbox-image"
                      data-fancybox="gallery"
                      href="https://suspicious-heyrovsky-99a5e9.netlify.app/DSCN0007.jpg"
                    >
                      <i class="fa fa-search-plus" aria-hidden="true"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div class="text-holder text-center">
                <!-- <span>{{$t('home.korgazma')}}</span> -->
                <h2>
                  <a href="#"
                    >{{$t('home.img-name2')}}</a
                  >
                </h2>
                <div class="button">
                  <div class="inner">
                    <router-link class="btn-one" to="/gallery"
                      >{{$t('home.koproq')}}</router-link
                    >
                  </div>
                </div>
              </div>
            </div>
          </div>
              <div
            class="col-xl-4 col-lg-6 col-md-6 col-sm  wow fadeInUp" 
            data-wow-delay="400ms"
          >
            <div class="single-exhibition-box">
              <div class="img-holder">
                <img
                  src="../assets/images/art/60.jpg"
                  alt="Awesome Image"
                />
                <div class="overlay-style-one bg1">
                  <div class="zoom-button">
                    <a
                      class="lightbox-image"
                      data-fancybox="gallery"
                      href="https://suspicious-heyrovsky-99a5e9.netlify.app/60.jpg"
                    >
                      <i class="fa fa-search-plus" aria-hidden="true"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div class="text-holder text-center">
                <span>{{$t('home.korgazma')}}</span>
                <h2>
                  <a href="#"
                    >{{$t('home.img-name9')}}</a
                  >
                </h2>
                <div class="button">
                  <div class="inner">
                    <router-link class="btn-one" to="/gallery"
                      >{{$t('home.koproq')}}</router-link
                    >
                  </div>
                </div>
              </div>
            </div>
          </div>
              <div
            class="col-xl-4 col-lg-6 col-md-6 col-sm wow fadeInUp" 
            data-wow-delay="400ms"
          >
            <div class="single-exhibition-box">
              <div class="img-holder">
                <img
                  src="../assets/images/art/70.jpg"
                  alt="Awesome Image"
                />
                <div class="overlay-style-one bg1">
                  <div class="zoom-button">
                    <a
                      class="lightbox-image"
                      data-fancybox="gallery"
                      href="https://suspicious-heyrovsky-99a5e9.netlify.app/70.jpg"
                    >
                      <i class="fa fa-search-plus" aria-hidden="true"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div class="text-holder text-center">
                <span>{{$t('home.korgazma')}}</span>
                <h2>
                  <a href="#"
                    >{{$t('home.img-name10')}}</a
                  >
                </h2>
                <div class="button">
                  <div class="inner">
                    <router-link class="btn-one" to="/gallery"
                      >{{$t('home.koproq')}}</router-link
                    >
                  </div>
                </div>
              </div>
            </div>
          </div>
              <div
            class="col-xl-4 col-lg-6 col-md-6 col-sm wow fadeInUp" 
            data-wow-delay="400ms"
          >
            <div class="single-exhibition-box">
              <div class="img-holder">
                <img
                  src="../assets/images/art/Ў_Тансикбоев_1904_1974_Менинг_кўшиғим_1972_йил.jpg"
                  alt="Awesome Image"
                />
                <div class="overlay-style-one bg1">
                  <div class="zoom-button">
                    <a
                      class="lightbox-image"
                      data-fancybox="gallery"
                      href="https://admiring-wiles-144f3b.netlify.app/%D0%8E_%D0%A2%D0%B0%D0%BD%D1%81%D0%B8%D0%BA%D0%B1%D0%BE%D0%B5%D0%B2_1904_1974_%D0%9C%D0%B5%D0%BD%D0%B8%D0%BD%D0%B3_%D0%BA%D1%9E%D1%88%D0%B8%D2%93%D0%B8%D0%BC_1972_%D0%B9%D0%B8%D0%BB.jpg"
                    >
                      <i class="fa fa-search-plus" aria-hidden="true"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div class="text-holder text-center">
                <span>{{$t('home.korgazma')}}</span>
                <h2>
                  <a href="#"
                    >{{$t('home.img-name12')}}</a
                  >
                </h2>
                <div class="button">
                  <div class="inner">
                    <router-link class="btn-one" to="/gallery"
                      >{{$t('home.koproq')}}</router-link
                    >
                  </div>
                </div>
              </div>
            </div>
          </div>
           <div
            class="col-xl-4 col-lg-6 col-md-6 col-sm wow fadeInUp" 
            data-wow-delay="400ms"
          >
            <div class="single-exhibition-box">
              <div class="img-holder">
                <img
                  src="../assets/images/art/Р.Чорыев (1931-2004)Келин.1968 йил.jpg"
                  alt="Awesome Image"
                />
                <div class="overlay-style-one bg1">
                  <div class="zoom-button">
                    <a
                      class="lightbox-image"
                      data-fancybox="gallery"
                      href="https://admiring-wiles-144f3b.netlify.app/%D0%A0.%D0%A7%D0%BE%D1%80%D1%8B%D0%B5%D0%B2%20(1931-2004)%D0%9A%D0%B5%D0%BB%D0%B8%D0%BD.1968%20%D0%B9%D0%B8%D0%BB.jpg"
                    >
                      <i class="fa fa-search-plus" aria-hidden="true"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div class="text-holder text-center">
                <span>{{$t('home.korgazma')}}</span>
                <h2>
                  <a href="#"
                    >{{$t('home.img-name11')}}</a
                  >
                </h2>
                <div class="button">
                  <div class="inner">
                    <router-link class="btn-one" to="/gallery"
                      >{{$t('home.koproq')}}</router-link
                    >
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!--End single exhibition Box-->
          <!--Start single exhibition Box-->
          <div
            class="col-xl-4 col-lg-6 col-md-6 col-sm wow fadeInUp"
            data-wow-delay="800ms"
          >
            <div class="single-exhibition-box">
              <div class="img-holder">
                <img
                  src="../assets/images/art/art-6.jpg"
                  alt="Awesome Image"
                />
                <div class="overlay-style-one bg1">
                  <div class="zoom-button">
                    <a
                      class="lightbox-image"
                      data-fancybox="gallery"
                      href="https://eloquent-bhaskara-9a47f3.netlify.app/art-6.jpg"
                    >
                      <i class="fa fa-search-plus" aria-hidden="true"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div class="text-holder text-center">
                <span>{{$t('home.korgazma')}}</span>
                <h2><a href="#">{{$t('home.img-name3')}}</a></h2>
                <div class="button">
                  <div class="inner">
                    <router-link class="btn-one" to="/gallery"
                      >{{$t('home.koproq')}}</router-link
                    >
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!--End single exhibition Box-->

          <!--Start single exhibition Box-->
          <div
            class="col-xl-4 col-lg-6 col-md-6 col-sm wow fadeInUp" 
            data-wow-delay="400ms"
          >
            <div class="single-exhibition-box">
              <div class="img-holder">
                <img
                  src="../assets/images/art/art-8.jpg"
                  alt="Awesome Image"
                />
                <div class="overlay-style-one bg1">
                  <div class="zoom-button">
                    <a
                      class="lightbox-image"
                      data-fancybox="gallery"
                      href="https://eloquent-bhaskara-9a47f3.netlify.app/art-8.jpg"
                    >
                      <i class="fa fa-search-plus" aria-hidden="true"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div class="text-holder text-center">
                <span>{{$t('home.korgazma')}}</span>
                <h2>
                  <a href="#">{{$t('home.img-name4')}}</a>
                </h2>
                <div class="button">
                  <div class="inner">
                    <router-link class="btn-one" to="/gallery"
                      >{{$t('home.koproq')}}</router-link
                    >
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!--End single exhibition Box-->
          <!--Start single exhibition Box-->
          <div
            class="col-xl-4 col-lg-6 col-md-6 col-sm wow fadeInUp" 
            data-wow-delay="800ms"
          >
            <div class="single-exhibition-box">
              <div class="img-holder">
                <img
                  src="../assets/images/art/art-24.jpg"
                  alt="Awesome Image"
                />
                <div class="overlay-style-one bg1">
                  <div class="zoom-button">
                    <a
                      class="lightbox-image"
                      data-fancybox="gallery"
                      href="https://quirky-khorana-30862a.netlify.app/art-27.jpg"
                    >
                      <i class="fa fa-search-plus" aria-hidden="true"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div class="text-holder text-center">
                <span>{{$t('nav.gallereya')}}</span>
                <h2>
                  <a href="#">{{$t('home.img-name5')}}</a>
                </h2>
                <div class="button">
                  <div class="inner">
                    <router-link class="btn-one" to="/gallery2"
                      >{{$t('home.koproq')}}</router-link
                    >
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!--End single exhibition Box-->
          <!--Start single exhibition Box-->
          <div
            class="col-xl-4 col-lg-6 col-md-6 col-sm wow fadeInUp" 
            data-wow-delay="1200ms"
          >
            <div class="single-exhibition-box">
              <div class="img-holder">
                <img
                  src="../assets/images/art/art-11.png"
                  alt="Awesome Image"
                />
                <div class="overlay-style-one bg1">
                  <div class="zoom-button">
                    <a
                      class="lightbox-image"
                      data-fancybox="gallery2"
                      href="https://eloquent-bhaskara-9a47f3.netlify.app/art-11.png"
                    >
                      <i class="fa fa-search-plus" aria-hidden="true"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div class="text-holder text-center">
                <span>{{$t('nav.gallereya')}}</span>
                <h2><a href="#"> {{$t('home.img-name6')}} </a></h2>
                <div class="button">
                  <div class="inner">
                    <router-link class="btn-one" to="/gallery2"
                      >{{$t('home.koproq')}}</router-link
                    >
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!--End single exhibition Box-->
        </div>
      </div>
    </section>
    <!--End Exhibitions Area-->
        <hd-gallery></hd-gallery>

    <!-- news section -->

    <section class="art-area">
      <div class="container">
        <div class="row">
          <div class="col-xl-12">
            <div class="top">
              <div class="sec-title">
                <p>{{$t('home.art-title')}} </p>
                <div class="big-title"><h1>{{$t('home.art-title2')}}</h1></div>
              </div>
              <div class="view-more-button">
                <router-link class="btn-one" to="/gallery">{{$t('home.koproq')}}</router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="container art-container">
        <div class="row masonary-layout">
          <!--Start Single Art Box-->
          <div
            class="col-xl-4 col-lg-6 col-md-6 col-sm wow fadeInUp animated"
            data-wow-delay="00ms"
            data-wow-duration="1500ms"
          >
            <div class="single-art-box">
              <div class="img-holder">
                <img
                  src="../assets/images/art/photo_2021-01-26_07-55-29.jpg"
                  alt="Awesome Image"
                />
                <!-- <div class="overlay-content">
                  <div class="title">
                    <h3>
                      <a href="#" v-html="$t('home.art-title3')"></a>
                    </h3>
                  </div>
                  <div class="readmore-button">
                    <a href="#">{{$t('home.art-title4')}} </a>
                  </div>
                </div> -->
              </div>
            </div>
          </div>
          <!--End Single Art Box-->
          <!--Start Single Art Box-->
          <div
            class="col-xl-4 col-lg-6 col-md-6 col-sm wow fadeInUp animated"
            data-wow-delay="300ms"
            data-wow-duration="1500ms"
          >
            <div class="single-art-box">
              <div class="img-holder">
                <img
                  src="../assets/images/art/art-10.png"
                  alt="Awesome Image"
                />
                <!-- <div class="overlay-content">
                  <div class="title">
                    <h3>
                      <a href="#" v-html="$t('home.art-title3')"></a>
                      
                    </h3>
                  </div>
                  <div class="readmore-button">
                    <a href="#">{{$t('home.art-title4')}}</a>
                  </div>
                </div> -->
              </div>
            </div>
          </div>
          <!--End Single Art Box-->
          <!--Start Single Art Box-->
          <div
            class="col-xl-4 col-lg-6 col-md-6 col-sm wow fadeInUp animated"
            data-wow-delay="600ms"
            data-wow-duration="1500ms"
          >
            <div class="single-art-box">
              <div class="img-holder">
                <img
                  src="../assets/images/art/photo_2021-01-21_08-10-19.jpg"
                  alt="Awesome Image"
                />
                 <!-- <div class="overlay-content">
                  <div class="title">
                    <h3>
                      <a href="#" v-html="$t('home.art-title3')"></a>
                      
                    </h3>
                  </div>
                  <div class="readmore-button">
                    <a href="#">{{$t('home.art-title4')}}</a>
                  </div>
                </div>  -->
              </div>
            </div>
          </div>
          <!--End Single Art Box-->

          <!--Start Single Art Box-->
          <div
            class="col-xl-4 col-lg-6 col-md-6 col-sm wow fadeInUp animated"
            data-wow-delay="00ms"
            data-wow-duration="1500ms"
          >
            <div class="single-art-box">
              <div class="img-holder">
                <img
                  src="../assets/images/art/art-16.jpg"
                  alt="Awesome Image"
                />
                <!-- <div class="overlay-content">
                  <div class="title">
                    <h3>
                      <a href="#" v-html="$t('home.art-title3')"
                        ></a
                      >
                    </h3>
                  </div>
                  <div class="readmore-button">
                    <a href="#">{{$t('home.art-title4')}}</a>
                  </div>
                </div> -->
              </div>
            </div>
          </div>
          <!--End Single Art Box-->
          <!--Start Single Art Box-->
          <div
            class="col-xl-4 col-lg-6 col-md-6 col-sm wow fadeInUp animated"
            data-wow-delay="00ms"
            data-wow-duration="1500ms"
          >
            <div class="single-art-box">
              <div class="img-holder">
                <img
                  src="../assets/images/art/art-18.jpg"
                  alt="Awesome Image"
                />
                <!-- <div class="overlay-content">
                  <div class="title">
                    <h3>
                      <a href="#" v-html="$t('home.art-title3')"
                        ></a
                      >
                    </h3>
                  </div>
                  <div class="readmore-button">
                    <a href="#">{{$t('home.art-title4')}}</a>
                  </div>
                </div> -->
              </div>
            </div>
          </div>
          <!--End Single Art Box-->
          <!--Start Single Art Box-->
          <div
            class="col-xl-4 col-lg-6 col-md-6 col-sm wow fadeInUp animated"
            data-wow-delay="00ms"
            data-wow-duration="1500ms"
          >
            <div class="single-art-box">
              <div class="img-holder">
                <img
                  src="../assets/images/art/photo_2021-01-29_08-02-16.jpg"
                  alt="Awesome Image"
                />
                <!-- <div class="overlay-content">
                  <div class="title">
                    <h3>
                      <a href="#" v-html="$t('home.art-title3')"
                        ></a
                      >
                    </h3>
                  </div>
                  <div class="readmore-button">
                    <a href="#">{{$t('home.art-title4')}}</a>
                  </div>
                </div> -->
              </div>
            </div>
          </div>
          <!--End Single Art Box-->

          <!--Start Single Art Box-->
          <div
            class="col-xl-4 col-lg-6 col-md-6 col-sm wow fadeInUp animated"
            data-wow-delay="00ms"
            data-wow-duration="1500ms"
          >
            <div class="single-art-box">
              <div class="img-holder">
                <img
                  src="../assets/images/art/art-26.jpg"
                  alt="Awesome Image"
                />
                <!-- <div class="overlay-content">
                  <div class="title">
                    <h3>
                      <a href="#" v-html="$t('home.art-title3')"
                        ></a
                      >
                    </h3>
                  </div>
                  <div class="readmore-button">
                    <a href="#">{{$t('home.art-title4')}}</a>
                  </div>
                </div> -->
              </div>
            </div>
          </div>
          <!--End Single Art Box-->
          <!--Start Single Art Box-->
          <div
            class="col-xl-4 col-lg-6 col-md-6 col-sm wow fadeInUp animated"
            data-wow-delay="00ms"
            data-wow-duration="1500ms"
          >
            <div class="single-art-box">
              <div class="img-holder">
                <img
                  src="../assets/images/art/art-9.jpg"
                  alt="Awesome Image"
                />
                <!-- <div class="overlay-content">
                  <div class="title">
                    <h3>
                      <a href="#" v-html="$t('home.art-title3')"
                        ></a
                      >
                    </h3>
                  </div>
                  <div class="readmore-button">
                    <a href="#">{{$t('home.art-title4')}}</a>
                  </div>
                </div> -->
              </div>
            </div>
          </div>
          <!--End Single Art Box-->
          <!--Start Single Art Box-->
          <div
            class="col-xl-4 col-lg-6 col-md-6 col-sm wow fadeInUp animated"
            data-wow-delay="00ms"
            data-wow-duration="1500ms"
          >
            <div class="single-art-box">
              <div class="img-holder padding">
                <img
                  src="../assets/images/art/art-15.jpg"
                  alt="Awesome Image"
                />
                <!-- <div class="overlay-content">
                  <div class="title">
                    <h3>
                      <a href="#" v-html="$t('home.art-title3')"
                        ></a
                      >
                    </h3>
                  </div>
                  <div class="readmore-button">
                    <a href="#">{{$t('home.art-title4')}}</a>
                  </div>
                </div> -->
              </div>
            </div>
          </div>
          <!--End Single Art Box-->
        </div>
      </div>
    </section>
    <!--End Art Area-->

    <!--End Fact Counter Area-->

    <!--Start latest blog area -->
    <!--Start subscribe Area-->
    <section class="subscribe-area">
      <div class="container">
        <div class="row">
          <div class="col-xl-6">
            <div class="subscribe-title">
              <h1>{{$t('home.subcribe')}} </h1>
              <span>{{$t('home.pochta')}} </span>
            </div>
          </div>
          <div class="col-xl-6">
            <div class="subscribe-box">
               <div class="alert alert-success" v-if="isSuccess">Murojatingiz jo'natildi</div>
              <form
                class="subscribe-form"
                 @submit.prevent="onCreatepost"
                action="#"
                method="post"
              >
                <input
                  type="email"
                  name="email"
                  v-model="email"
                  placeholder="Your Email Address"
                />
                <button type="submit" @submit="submitForm">{{$t('home.obuna')}} </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
    
    <!--Start footer Style2 area-->  
  <footera></footera>

    <!--End footer area-->
    <!-- <button
      class="scroll-top scroll-to-target"
      data-target="html"
      onclick="scrollTop();"
    >
      <span class="icon-angle"></span>
    </button> -->
    <router-view />
  </div>
</template>
 <script>
 import hdGallery from '../components/hdgallery.vue'
import SliderMain from '../components/MainSlider.vue'
import footera from '../components/footera.vue'
import axios from "axios";
// import {ref} from "vue";
// import LazyLoad from "LazyLoad"
export default {
  // setup() {
  //   const loading = ref (true);
  // },
  data() {
    return {
      info: "",
      email: "",
      events: "",
      isSuccess: false,
      submitForm: '',
      
    };
  },
  components:{
  'sliderMain': SliderMain,
  'footera': footera,
  'hdGallery': hdGallery
  // 'LazyLoad': LazyLoad
  },
  async created() {
    axios
      .get("https://muzey-backend.napaautomotive.uz/api/news")
      .then((response) => (this.info = response.data))
      .then((json) => console.log(json))
      .catch((error) => console.log(error));
  },
  // async mounted() {
  //   axios
  //     .get("https://muzey-backend.napaautomotive.uz/api/events")
  //     .then((response) => (this.events = response.data))
  //     .then((json) => console.log(json))
  //     .catch((error) => console.log(error));
  // },
  // methods: {
  //     onCreatepost() {
  //     axios
  //     .post("https://muzey-backend.napaautomotive.uz/api/contact/store",
  //     { email: this.email},
  //     )
  //       .then((response) => {
  //         this.isSuccess = true;
  //         console.log(response);
  //       });
  //   },
  // },
};
</script>
<style lang="css">
.bredcrumb {
  background: linear-gradient(rgba(0, 0, 0, 0.527), rgba(0, 0, 0, 0.432)),
    url("../assets/images/resources/muzey-2.jpg") !important;
  background-repeat: no-repeat !important;
  background-size: cover !important;
  background-position: center !important;
  height: 600px;
}
.boxed_wrapper {
  min-height: 139px;
}
.carousel-item {
  /* height: 415px; */
  background-size: cover;
}
.carousel-item:before {
  content: "";
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.671);
  opacity: 0.7;
}
.bredcrumb .rower {
  padding-top: 3rem;
  width: 21%;
  margin: auto;
}

.bredcrumb .button {
  border: 2px solid rgb(71, 67, 67);
  border-radius: 10px;
  cursor: pointer;
  background: #000;
  opacity: 0.7;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 48px;
  transition: 0.3s ease;
}
.bredcrumb .button:hover {
  border: none;
  color: #fff;
  font-size: bold;
  background: rgb(30, 77, 104);
}
.bredcrumb .button a {
  text-align: center;
  font-size: 20px;
  color: #fff;
}

.main-slider {
  background: linear-gradient(rgba(0, 0, 0, 0.534), rgba(0, 0, 0, 0.527)),
    url("../assets/images/slides/muzey-1.png") !important;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 600px;
}
.intro-area {
  padding-top: 5rem;
}
/* slider carousel */
.home .btn.btn-lg {
  padding: 6px 30px;
}

.home .video {
  padding-top: 4rem;
}
.home .video .container h3 {
  font-size: 28px;
  margin-bottom: 2rem;
  font-family: monospace;
}
.home iframe {
  width: 100%;
  height: 35rem !important;
}
.inner-content p {
  text-align: left;
}
.title-holder {
  display: inline-block;
}
.title-holder a {
  color: #fff;
}
.title-holder p {
  text-align: left;
}
.plan-your-visit ul li:last-child {
  cursor: pointer;
}
.home .card-body {
  box-shadow: 0px 1px 6px 5px rgb(230 222 222 / 50%);
}
.contact-us p {
  display: inline;
}
/* vide-card section */
.video_card {
  margin-top: 10rem;
}
.video_card .card {
  width: 30%;
}
.video_card iframe {
  height: 210px;
}
/* vide-card end */
.opening-hours p {
  display: inline;
}
.news {
  margin-bottom: 8rem;
}
.home .news img {
  height: 12rem;
  object-fit: cover;
}
.img-holder img {
  /* height: 30rem; */
    object-fit: cover;
}
/* .home .nth2 {
  height: 480px;
} */
/* .home .nth3 {
  height: 9rem;
  object-fit: cover;
} */
.home .card {
  height: 100%;
  width: 100%;
}
.home .card-title {
  max-height: 137px;
  font-size: 16px;
  text-align: left;
}
.home .news {
  margin-top: 7rem;
  margin-bottom: 0;
}
.home .single-exhibition-box .text-holder h2 {
  font-size: 20px;
}
.home .news-title {
  margin-bottom: 4rem;
  text-align: center;
}
.home .news-title h1 {
  font-size: 41px;
  font-weight: bold;
}
.sec-title {
  text-align: center;
}
.home .events-area {
  margin-top: 3rem;
}
/* .home .exhibitions-area {
  background-image: url('https://www.zastavki.com/pictures/1280x800/2012/Backgrounds_Background_with_curls_035530_.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
} */
.home .exhibitions-area .single-exhibition-box:nth-child(6) {
  padding-top: 43px;
}
.home .footer-area {
  background-image: url("../assets/images/pattern/pattern-bg2.png") !important;
  background-size: cover;
  background-position: center;
}
/* slider carousel */

/* slider carousel end */
@media (min-width: 320px) and (max-width: 480px) {
  .subscribe-area .subscribe-form button {
    width: 30%;
    height: 100%;
  }
  .home .intro-area {
    padding-top: 1rem;
  }
  #mt_banner .button {
    height: 56px;
    width: 112px;
  }
  #mt_banner .swiper-container img {
    height: 19rem;
    object-fit: cover;
  }
  #mt_banner .events {
   font-size: 15px;
    width: 44%;
    padding-top: 2rem;
  }
}
</style>
