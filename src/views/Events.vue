<template>
    <div class="events">
        <!--Start breadcrumb area-->     
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
                            <li><router-link to="/">Asosiy bo'lim</router-link></li>
                            <li class="active">Tadbirlar</li>
                        </ul>    
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
<!--End breadcrumb area-->
      <div class="container">
          <div class="naviy">
              <h4>Ma'naviy-ma'rifiy tadbirlar </h4>
          </div>
	<div class="row">
  <div class="col-lg-4 col-md-4 col-sm-6" v-for="event in events.reverse().slice()" :key="event.id">
           <div class="thumbnail img-thumb-bg">
               <img :src="'https://muzey-backend.napaautomotive.uz/storage/' +  event.image" alt="">
               <div class="overlay"></div>
               <div class="caption">
                   <div class="title"><router-link :to="'/eventSingle/' + event.id"> {{event.title.uz}} </router-link></div>
                   <div class="clearfix">
                       <span class="meta-data">By <a href="#"></a> {{event.created_at.slice(0,10)}} </span>
                   </div>
               </div>
           </div>
        </div>
	</div>
</div>  
<!--Start footer Style2 area-->  
 <footera></footera>

<!--Start footer Style2 area-->  
     
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
            events: null,
            settings: ''
        };
    },
     async mounted() {
        axios
      .get("https://muzey-backend.napaautomotive.uz/api/events")
      .then(response => (this.events = response.data))
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
}
</script>

<style lang="css">
  .events  body {
  padding: 10px 0;
  background-color: #f4f4f4;
  font-family: 'Montserrat', sans-serif;
}
.events a {
  text-decoration: none;
  transition: all 0.3s ease-in-out;
}
.events
a:hover,
a:focus,
a:active {
  text-decoration: none;
}
.events .btn {
  text-transform: uppercase;
}
.events .btn.btn-lg {
  padding: 6px 30px;
}
.events .thumbnail-title {
  font-size: 20px;
  margin-top: 5px;
}
.events .img-thumb-bg {
  padding: 0;
  overflow: hidden;
  min-height: 200px;
  max-height: 216px;
  position: relative;
  border-radius: 3px;
  background-position: center;
  background-color: transparent;
  background-image: url('http://projects.mostlikers.com/_images/estate-image.jpg');
}
.events .container .naviy {
    background: #ececf1;
    margin-top: 3rem;
    margin-bottom: 3rem;
}
.events .container .naviy h4 {
    font-size: 18px;
    padding: 0 36px;
}
.events .img-thumb-bg p {
  color: #fff;
  margin-bottom: 0;
  line-height: 16px;
}
.events .img-thumb-bg .overlay {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  transition: all 0.3s ease-in-out;
  background: rgba(0, 0, 0, 0);
  background: -o-linear-gradient(top, rgba(0, 0, 0, 0) 50%, #000000 100%);
  background: -ms-linear-gradient(top, rgba(0, 0, 0, 0) 50%, #000000 100%);
  background: -moz-linear-gradient(top, rgba(0, 0, 0, 0) 50%, #000000 100%);
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0) 50%, #000000 100%);
  background: -webkit-linear-gradient(top, rgba(0, 0, 0, 0) 50%, #000000 100%);
  background: -webkit-gradient(left top, left bottom, color-stop(50%, rgba(0, 0, 0, 0)), color-stop(100%, #000000));
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#000000', endColorstr='#000000', GradientType=0);
}
.events .img-thumb-bg .caption {
  bottom: -5px;
  height: 100px;
  font-size: 12px;
  position: absolute;
  padding: 0 20px 20px;
  transition: all 0.3s ease-in-out;
}
.events .img-thumb-bg .caption .tag a {
  color: #fff;
  padding: 0 5px;
  font-size: 12px;
  border-radius: 2px;
  display: inline-block;
  /* text-transform: uppercase; */
  background-color: #2980B9;
}
.events .img-thumb-bg .caption .title {
  margin-top: 5px;
  font-size: 18px;
  line-height: 20px;
  /* text-transform: uppercase; */
}
.events .img-thumb-bg .caption .title a {
  color: #fff;
}
.events .img-thumb-bg .caption .title a:hover {
  color: #2980B9;
}
.events .img-thumb-bg .caption .meta-data {
  color: #777;
  font-size: 12px;
  line-height: 12px;
  margin-bottom: 15px;
}
.events .img-thumb-bg .caption .meta-data a {
  color: #777;
}
.events .img-thumb-bg .caption .meta-data a .fa {
  color: #2980B9;
}
.events .img-thumb-bg .caption .meta-data a:hover {
  color: #2980B9;
}
.events .img-thumb-bg .caption .content {
  display: none;
}
.events .img-thumb-bg:hover .overlay {
  background: rgba(46, 49, 58, 0.8);
}
.events .img-thumb-bg:hover .caption {
  bottom: 60px;
}
.events .img-thumb-bg:hover .caption .content {
  display: block;
}
.events .col-md-4 {
    padding: 20px;
}

</style>