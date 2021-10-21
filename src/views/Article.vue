<template>
    <div class="article">
        <div class="casing">
            <div class="container">
                <nav>
          <ul class="breadcrumb-page list-unstyled">
            <li class="breadcrumb-item"><router-link to="/">Bosh Sahifa</router-link></li>
            <li class="breadcrumb-item active">Muzey</li>             
            <li class="breadcrumb-item active">Ilmiy maqolalar</li>
          </ul>
          <div class="clearfix"></div>
        </nav>
            </div>
            <div class="content col-md-3">
                <section>
                    <div class="card" v-for="post in posts" :key="post.id">
                    <hr>
                    <div class="maqola">
                         <img :src="'https://muzey-backend.napaautomotive.uz/storage/' + post.image" alt="">
                    <div class="card-body">
                        <h5 class="card-title"> {{post.title.uz}} </h5>
                        <router-link :to="'/artSingle/' + post.id" class="btn btn-primary">{{ $t('home.article') }}</router-link>
                        <div class="dteails">
                            <span><i class="fa fa-eye"></i> {{post.views}} </span>
                            <span><i class="fa fa-calendar"></i> {{post.created_at.slice(0,10)}} </span>
                        </div>
                        </div>
                        </div>
                    </div>
                </section>
                <div class="col-md-3">
            <div class="sidebar-menu page-bg">
<ul class="list-unstyled">
  <li><router-link to="/about" class="">{{ $t('nav.muzey-bolim') }}</router-link></li>
 <li><router-link to="/article" class="active">{{ $t('nav.muzey-bolim2') }}</router-link></li>
 <li><router-link to="/staff" class="">{{ $t('nav.muzey-bolim3') }}</router-link></li>
 <li><router-link to="/library" class="">{{ $t('nav.muzey-bolim4') }}</router-link></li>
 <li><router-link to="/gallery" class="">{{ $t('nav.gallereya') }}</router-link></li>
<li><router-link to="/news" class="">{{ $t('nav.yanglik') }}</router-link></li>
<li><router-link to="/events" class="">{{ $t('nav.tadbirlar') }}</router-link></li>
<li><router-link to="/contact" class="">{{ $t('nav.contact') }}</router-link></li>
    </ul>
</div>        </div>
            </div>
        </div>
    <!--Start footer Style2 area-->  
  <footera></footera>
<!--End footer Style2 area-->

</div>
</template>

<script>
import axios from 'axios';
import footera from '../components/footera.vue'

export default {
    components: {
        'footera': footera
    },
    data() {
        return{
            posts: ''
        };
    },
    async mounted() {
    axios
      .get("https://muzey-backend.napaautomotive.uz/api/posts")
      .then(response => (this.posts = response.data))
      .then(json => console.log(json))
      .catch((error) => console.log(error))
  }
}
</script>


<style lang="css">
.article {
    background: #f1f1f1;
}
.article .breadcrumb-page {
    overflow: hidden;
    margin-bottom: 0;
    padding: 15px 0;
    display: flex;
}
.article .breadcrumb-item {
    color: #1757a5 !important;
    font-size: 14px;
}

.article .content {
    padding-top: 0rem;
}
.article .col-md-3 {
    display: flex;
}
.article .col-md-3:nth-child(2) {
    margin-left: 0rem;
}
.article .maqola {
    display: flex;
}
.article .maqola img {
    width: 34%;
    height: 10rem;
    object-fit: cover;
} 
.article section {
    margin-bottom: 8rem;
}
.article .card {
    width: 55rem!important;
    border: none;
    margin: 0 20px;
    box-shadow: 0px 1px 6px 5px rgb(230 222 222 / 50%);
    margin: 20px;
    padding: 36px;
}
/* .article .span12 {
    position: relative;
    left: 45rem;
    top: 3rem;
}  */
.dteails span:nth-child(2) {
    margin-left: 3rem;
}
.dteails {
    padding-top: 20px;
}
.article .btn {
    background: #585555e6;
    border: none;
    cursor: pointer;
}
.article .col-md-3 {
    flex: 0 0 100%;
    max-width: 78%;
}
.article .page-bg {
    background: #fff;
    padding: 15px;
    margin-bottom: 236px;
    margin-top: 1rem!important;
    position: relative!important;
    left: 1rem!important;
    width: 46%!important;
}
.article .list-unstyled {
    padding-right: 0;
    list-style: none;
}
.sidebar-menu ul {
    margin-bottom: 0;
}
.article .sidebar-menu ul li {
    border-bottom: 1px solid #1356a4;
    margin-bottom: 10px;
    padding-bottom: 10px;
}

@media(min-width: 320px) and (max-width: 480px) {
    .article .card {
       width: 24rem !important;
    }
    .article .col-md-3:nth-child(2) {
    margin-left: -3rem;
}
.dteails span:nth-child(2) {
    margin-left: 0rem;
}
.article .maqola {
    flex-direction: column;
}
.article .maqola img {
    width: 89%;
    height: 10rem;
}
.article .card-body {
    width: 308px;
}
.card-title {
    width: 100%;
}
}
@media(min-width: 320px) and (max-width: 568px) {
     .article .card {
       width: 24rem !important;
    }
    .article .col-md-3:nth-child(2) {
    margin-left: -3rem;
}
.dteails span:nth-child(2) {
    margin-left: 0rem;
}
.article .maqola {
    flex-direction: column;
}
.article .maqola img {
    width: 89%;
    height: 10rem;
}
.article .card-body {
    width: 308px;
}
.card-title {
    width: 100%;
}
}
@media(min-width: 375px) and (max-width: 736px) {
    .article .card {
       width: 24rem !important;
    }
    .article .col-md-3:nth-child(2) {
    margin-left: -3rem;
}
.dteails span:nth-child(2) {
    margin-left: 0rem;
}
.article .maqola {
    flex-direction: column;
}
.article .maqola img {
    width: 89%;
    height: 10rem;
}
.article .card-body {
    width: 308px;
}
.card-title {
    width: 100%;
}
}
@media(min-width: 414px) and (max-width: 740px) {
   .article .card {
       width: 24rem !important;
    }
    .article .col-md-3:nth-child(2) {
    margin-left: -3rem;
}
.dteails span:nth-child(2) {
    margin-left: 0rem;
}
.article .maqola {
    flex-direction: column;
}
.article .maqola img {
    width: 89%;
    height: 10rem;
}
.article .card-body {
    width: 308px;
}
.card-title {
    width: 100%;
}
}
@media(min-width: 574px) and (max-width: 740px) {
     .article .card {
       width: 24rem !important;
    }
    .article .col-md-3:nth-child(2) {
    margin-left: -3rem;
}
.dteails span:nth-child(2) {
    margin-left: 0rem;
}
.article .maqola {
  display: flex;
}
.article .maqola img {
    width: 89%;
    height: 10rem;
}
.article .card-body {
    width: 308px;
}
.card-title {
    width: 100%;
}
.article .page-bg {
    background: #fff;
    padding: 15px;
    margin-bottom: 236px;
    margin-top: 1rem !important;
    position: relative !important;
    left: 1rem !important;
    width: 65% !important;
}
}
/* @media(min-width: 1024px) and (max-width: 1366px) {
   .article .card {
       width: 24rem !important;
    }
    .article .col-md-3:nth-child(2) {
    margin-left: -3rem;
}
.dteails span:nth-child(2) {
    margin-left: 0rem;
}
.article .maqola {
    flex-direction: column;
}
.article img {
    width: 89%;
    height: 10rem;
}
.article .card-body {
    width: 308px;
}
.card-title {
    width: 100%;
}
} */
</style>