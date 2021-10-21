<template>
    <div class="gallery">
        <section class="breadcrumb-area" style="background-image: url(.src/assets/images/breadcrumb/breadcrumb-2.jpg);">
    <div class="container">
        <div class="row">
            <div class="col-xl-12">
                <div class="inner-content clearfix">
                    <div class="title">
                       <h1>{{$t('nav.gallereya')}} </h1>
                    </div>
                    <div class="breadcrumb-menu">
                        <ul class="clearfix">
                            <li><router-link to="/">{{$t('nav.Asosiy')}}</router-link></li>
                            <li class="active">{{$t('nav.gallereya')}}</li>
                        </ul>    
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
<!--End breadcrumb area-->

<!--Start Gallery Area-->
<section class="gallery-area">
    <div class="container">
        <div class="sortable-masonry">
            <!--Filter-->
             <div class="sec-title">           
                        <div class="big-title text-center"><h1>{{$t('gallery.gallery')}} </h1></div>
                          <!-- <div class="inner-content">
                              <p>{{$t('gallery.gallery-content')}} </p>
                          </div> -->
                    </div>
            <div class="row items-container clearfix">
             
                <!--Start Single Art Box Style2-->
                <div class="col-xl-4 col-lg-6 col-md-6 col-sm masonry-item all objects pic" >
                    <div class="single-art-box-style2 marbtm50">
                        <div class="img-holder" >
                            <img loading="lazy" src="../assets/images/art/photo_2020-07-06_15-50-06.jpg" alt="Awesome Image">
                            <div class="overlay-content">
                                <div class="zoom-button">
                                    <a class="lightbox-image" data-fancybox="gallery" href="https://festive-elion-ad98bb.netlify.app/photo_2020-07-06_15-50-06.jpg">
                                        <i class="fa fa-search-plus" aria-hidden="true"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div class="text-holder">
                            <h3><a href="#">{{$t('gallery.img2')}} </a></h3>
                          
                        </div>    
                    </div>
                </div>
                <!--End Single Art Box Style2-->
                <!--Start Single Art Box Style2-->
                <div class="col-xl-4 col-lg-6 col-md-6 col-sm masonry-item all objects insta" >
                    <div class="single-art-box-style2 marbtm50">
                        <div class="img-holder" >
                            <img loading="lazy" src="../assets/images/art/photo_2020-07-07_07-26-22.jpg" alt="Awesome Image"
                              >
                            <div class="overlay-content">
                                <div class="zoom-button">
                                    <a class="lightbox-image" data-fancybox="gallery" href="https://festive-elion-ad98bb.netlify.app/photo_2020-07-07_07-26-22.jpg">
                                        <i class="fa fa-search-plus" aria-hidden="true"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div class="text-holder">
                            <h3><a href="#">{{$t('gallery.img3')}}</a></h3>
                            
                        </div>    
                    </div>
                </div>
                <!--End Single Art Box Style2-->
                
                <!--Start Single Art Box Style2-->
                <div class="col-xl-4 col-lg-6 col-md-6 col-sm-12 masonry-item all art insta">
                    <div class="single-art-box-style2 marbtm50">
                        <div class="img-holder">
                            <img loading="lazy"
                            src="../assets/images/art/photo_2020-07-07_14-52-55.jpg" alt="Awesome Image">
                            <div class="overlay-content">
                                <div class="zoom-button">
                                    <a class="lightbox-image" data-fancybox="gallery" href="https://festive-elion-ad98bb.netlify.app/photo_2020-07-07_14-52-55.jpg">
                                        <i class="fa fa-search-plus" aria-hidden="true"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div class="text-holder">
                            <h3><a href="#">{{$t('gallery.img4')}} </a></h3>
                            
                        </div>    
                    </div>
                </div>
                <!--End Single Art Box Style2-->
                <!--Start Single Art Box Style2-->
                <div class="col-xl-4 col-lg-6 col-md-6 col-sm masonry-item all objects pic">
                    <div class="single-art-box-style2 marbtm50">
                        <div class="img-holder">
                            <img loading="lazy"
                            src="../assets/images/art/photo_2020-07-07_16-01-21.jpg" alt="Awesome Image">
                            <div class="overlay-content">
                                <div class="zoom-button">
                                    <a class="lightbox-image" data-fancybox="gallery" href="https://festive-elion-ad98bb.netlify.app/photo_2020-07-07_16-01-21.jpg">
                                        <i class="fa fa-search-plus" aria-hidden="true"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div class="text-holder">
                            <h3><a href="#">{{$t('gallery.img5')}} </a></h3>
                           
                        </div>    
                    </div>
                </div>
                <!--End Single Art Box Style2-->
                <!--Start Single Art Box Style2-->
                <div class="col-xl-4 col-lg-6 col-md-6 col-sm masonry-item all objects insta">
                    <div class="single-art-box-style2 marbtm50">
                        <div class="img-holder">
                            <img loading="lazy"
                            src="../assets/images/art/photo_2020-07-08_11-25-58.jpg" alt="Awesome Image">
                            <div class="overlay-content">
                                <div class="zoom-button">
                                    <a class="lightbox-image" data-fancybox="gallery" href="https://festive-elion-ad98bb.netlify.app/photo_2020-07-08_11-25-58.jpg">
                                        <i class="fa fa-search-plus" aria-hidden="true"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div class="text-holder">
                            <h3><a href="#">{{$t('gallery.img6')}} </a></h3>
                           
                        </div>    
                    </div>
                </div>
                <!--End Single Art Box Style2-->
                
                <!--Start Single Art Box Style2-->
                <div class="col-xl-4 col-lg-6 col-md-6 col-sm masonry-item all art insta">
                    <div class="single-art-box-style2 marbtm50">
                        <div class="img-holder">
                            <img loading="lazy"
                            src="../assets/images/art/photo_2021-01-13_20-47-35.jpg" alt="Awesome Image"
                         >

                            <div class="overlay-content">
                                <div class="zoom-button">
                                    <a class="lightbox-image" data-fancybox="gallery" href="https://festive-elion-ad98bb.netlify.app/photo_2021-01-13_20-47-35.jpg">
                                        <i class="fa fa-search-plus" aria-hidden="true"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div class="text-holder">
                            <h3><a href="#">{{$t('gallery.img7')}}</a></h3>
                        </div>    
                    </div>
                </div>
                <!--End Single Art Box Style2-->
                <!--Start Single Art Box Style2-->
                <div class="col-xl-4 col-lg-6 col-md-6 col-sm-12 masonry-item all objects pic">
                    <div class="single-art-box-style2 marbtm50">
                        <div class="img-holder">
                            <img loading="lazy" src="../assets/images/art/photo_2021-01-17_11-57-57.jpg" alt="Awesome Image">
                            <div class="overlay-content">
                                <div class="zoom-button">
                                    <a class="lightbox-image" data-fancybox="gallery" href="https://festive-elion-ad98bb.netlify.app/photo_2021-01-17_11-57-57.jpg">
                                        <i class="fa fa-search-plus" aria-hidden="true"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div class="text-holder">
                            <h3><a href="#">{{$t('gallery.img8')}}</a></h3>
                        </div>    
                    </div>
                </div>
                <!--End Single Art Box Style2-->
                <!--Start Single Art Box Style2-->
                <div class="col-xl-4 col-lg-6 col-md-6 col-sm-12 masonry-item all objects insta">
                    <div class="single-art-box-style2 marbtm50">
                        <div class="img-holder">
                            <img loading="lazy" src="../assets/images/art/photo_2021-01-18_08-06-19.jpg" alt="Awesome Image">
                            <div class="overlay-content">
                                <div class="zoom-button">
                                    <a class="lightbox-image" data-fancybox="gallery" href="https://festive-elion-ad98bb.netlify.app/photo_2021-01-18_08-06-19.jpg">
                                        <i class="fa fa-search-plus" aria-hidden="true"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div class="text-holder">
                            <h3><a href="#">{{$t('gallery.img9')}}</a></h3>
                        </div>    
                    </div>
                </div>
                <!--End Single Art Box Style2-->
              
 <!--Start Single Art Box Style2-->
                <div class="col-xl-4 col-lg-6 col-md-6 col-sm-12 masonry-item all objects insta">
                    <div class="single-art-box-style2 marbtm50">
                        <div class="img-holder">
                            <img loading="lazy" src="../assets/images/art/photo_2021-01-19_08-15-08.jpg" alt="Awesome Image">
                            <div class="overlay-content">
                                <div class="zoom-button">
                                    <a class="lightbox-image" data-fancybox="gallery" href="https://festive-elion-ad98bb.netlify.app/photo_2021-01-19_08-15-08.jpg">
                                        <i class="fa fa-search-plus" aria-hidden="true"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div class="text-holder">
                            <h3><a href="#">{{$t('gallery.img10')}}</a></h3>
                        </div>    
                    </div>
                </div>
                <!--End Single Art Box Style2-->
 <!--Start Single Art Box Style2-->
                <div class="col-xl-4 col-lg-6 col-md-6 col-sm-12 masonry-item all objects insta">
                    <div class="single-art-box-style2 marbtm50">
                        <div class="img-holder">
                            <img loading="lazy" src="../assets/images/art/photo_2021-01-20_08-12-44.jpg" alt="Awesome Image">
                            <div class="overlay-content">
                                <div class="zoom-button">
                                    <a class="lightbox-image" data-fancybox="gallery" href="https://festive-elion-ad98bb.netlify.app/photo_2021-01-20_08-12-44.jpg">
                                        <i class="fa fa-search-plus" aria-hidden="true"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div class="text-holder">
                            <h3><a href="#">{{$t('gallery.img11')}}</a></h3>
                       </div>    
                    </div>
                </div>
                <!--End Single Art Box Style2-->
 <!--Start Single Art Box Style2-->
                <div class="col-xl-4 col-lg-6 col-md-6 col-sm-12 masonry-item all objects insta">
                    <div class="single-art-box-style2 marbtm50">
                        <div class="img-holder">
                            <img loading="lazy" src="../assets/images/art/photo_2021-01-22_07-59-12.jpg" alt="Awesome Image">
                            <div class="overlay-content">
                                <div class="zoom-button">
                                    <a class="lightbox-image" data-fancybox="gallery" href="https://festive-elion-ad98bb.netlify.app/photo_2021-01-22_07-59-12.jpg">
                                        <i class="fa fa-search-plus" aria-hidden="true"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div class="text-holder">
                            <h3><a href="#"> {{$t('gallery.img12')}}</a></h3>
                        </div>    
                    </div>
                </div>
                  <div class="col-xl-4 col-lg-6 col-md-6 col-sm-12 masonry-item all objects insta">
                    <div class="single-art-box-style2 marbtm50">
                        <div class="img-holder">
                            <img loading="lazy" src="../assets/images/art/photo_2021-01-23_10-57-31.jpg" alt="Awesome Image">
                            <div class="overlay-content">
                                <div class="zoom-button">
                                    <a class="lightbox-image" data-fancybox="gallery" href="https://festive-elion-ad98bb.netlify.app/photo_2021-01-23_10-57-31.jpg">
                                        <i class="fa fa-search-plus" aria-hidden="true"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div class="text-holder">
                            <h3><a href="#"> {{$t('gallery.img13')}}</a></h3>
                        </div>    
                    </div>
                </div>
                  <div class="col-xl-4 col-lg-6 col-md-6 col-sm-12 masonry-item all objects insta">
                    <div class="single-art-box-style2 marbtm50">
                        <div class="img-holder">
                            <img loading="lazy" src="../assets/images/art/photo_2020-07-04_20-00-50.jpg" alt="Awesome Image">
                            <div class="overlay-content">
                                <div class="zoom-button">
                                    <a class="lightbox-image" data-fancybox="gallery" href="https://festive-elion-ad98bb.netlify.app/photo_2020-07-04_20-00-50.jpg">
                                        <i class="fa fa-search-plus" aria-hidden="true"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div class="text-holder">
                            <h3><a href="#"> {{$t('gallery.img16')}}</a></h3>
                        </div>    
                    </div>
                </div>
                  <div class="col-xl-4 col-lg-6 col-md-6 col-sm-12 masonry-item all objects insta">
                    <div class="single-art-box-style2 marbtm50">
                        <div class="img-holder">
                            <img loading="lazy" src="../assets/images/art/photo_2021-01-24_23-06-11.jpg" alt="Awesome Image">
                            <div class="overlay-content">
                                <div class="zoom-button">
                                    <a class="lightbox-image" data-fancybox="gallery" href="https://festive-elion-ad98bb.netlify.app/photo_2021-01-24_23-06-11.jpg">
                                        <i class="fa fa-search-plus" aria-hidden="true"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div class="text-holder">
                            <h3><a href="#"> {{$t('gallery.img14')}}</a></h3>
                        </div>    
                    </div>
                </div>
                  <div class="col-xl-4 col-lg-6 col-md-6 col-sm-12 masonry-item all objects insta">
                    <div class="single-art-box-style2 marbtm50">
                        <div class="img-holder">
                            <img loading="lazy" src="../assets/images/art/photo_2021-01-27_23-10-09.jpg" alt="Awesome Image">
                            <div class="overlay-content">
                                <div class="zoom-button">
                                    <a class="lightbox-image" data-fancybox="gallery" href="https://festive-elion-ad98bb.netlify.app/photo_2021-01-27_23-10-09.jpg">
                                        <i class="fa fa-search-plus" aria-hidden="true"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div class="text-holder">
                            <h3><a href="#"> {{$t('gallery.img15')}}</a></h3>
                        </div>    
                    </div>
                </div>
                <!--End Single Art Box Style2-->


            </div>
        </div>
        
        <!-- <div class="view-more-button text-center">
            <a class="btn-two" href="#">View More</a>
        </div> -->
    </div>
</section>
<!--End Gallery Area-->

   
<!--Start footer Style2 area-->  
 <footera></footera>
  
<!--End footer Style2 area-->





    </div>
</template>

<script>
import footera from '../components/footera.vue'

// import lazyload from '../directives/lazyload'

export default {
     components: {
        'footera': footera,
    },
    data(){
        return{

        }
    },
    mounted: function() {
        const images = document.querySelectorAll("[data-src]");

function preloadImage(img) {
    const src = img.getAttribute("data-src");
    if(!src) {
        return;
    }
    img.src = src;  

}
const imgOptions = {};

const imgObserver = new IntersectionObserver((entries,
    imgObserver) => {
        entries.forEach(entry => {
            if(!entry.isIntersecting) {
                return;
            }else {
                preloadImage(entry.target);
                imgObserver.unobserve(entry.target);
            }
        });
    }, imgOptions);

    images.forEach(image => {
        imgObserver.observe(image);
    });
    }
   }

</script>
 
<style lang="css">

.breadcrumb-area{
    background: linear-gradient(rgba(27, 27, 27, 0.329),rgba(27, 27, 27, 0.349)), url('../assets/images/breadcrumb/breadcrumb-5.jpg') !important;
}
.breadcrumb-area {
    margin-top: -246px;
}
.gallery .big-title h1 {
    font-size: 28px;
}
.gallery .inner-content p {
    text-align: left;
}
.gallery .filters {
    margin-bottom: 0;
}
.filter a {
    color: #000;
}
.gallery-area .active {
    color: orange;
}
.gallery-area .single-art-box-style2 .text-holder {
    padding: 43px 0 26px;
}
.gallery-area .single-art-box-style2 .text-holder h3 a {
    font-size: 16px;
}
.gallery-area .img-holder img {
    cursor: pointer;
    width: 100%;
    object-fit: cover;
    height: auto;
}
</style>