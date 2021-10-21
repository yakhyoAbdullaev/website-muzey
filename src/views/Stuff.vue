<template>
    <div class="stuff">
        <section
      class="breadcrumb-area"
      style="
        background-image: url(https://krot.mobi/uploads/posts/2020-01/1579322803_56-111.jpg);">
      <div class="container">
        <div class="row">
          <div class="col-xl-12">
            <div class="inner-content clearfix">
              <div class="title">
                <h1>Muzey Ashyolari</h1>
              </div>
              <div class="breadcrumb-menu">
                <ul class="clearfix">
                  <li><router-link to="/">Asosiy</router-link></li>
                  <li class="active">Ashyolar</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!--End breadcrumb area-->

    <section class="items">
        <div class="container">
          <nav>
          <ul class="breadcrumb-page list-unstyled">
            <li class="breadcrumb-item"><router-link to="/">Bosh Sahifa</router-link></li>
            <li class="breadcrumb-item active">Muzey</li>             
            <li class="breadcrumb-item active">Rahbariyat</li>
          </ul>
          <div class="clearfix"></div>
        </nav>
            <div class="items-text" v-for="item in stuff" :key="item.id"> 
                <p v-html="item.content.uz"></p>
            </div>
        </div>
    </section>

  <!--Start footer Style2 area-->  
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
        return {
            stuff: null
        };
    },
     async created() {
    axios
      .get("https://muzey-backend.napaautomotive.uz/api/stuff" )
      .then(response => (this.stuff = response.data))
      .then(json => console.log(json))
      .catch((error) => console.log(error))
  }
}
</script>

<style lang="css">
.stuff .breadcrumb-area {
    background: linear-gradient(rgba(24, 23, 23, 0.356), rgba(32, 32, 32, 0.418)), url('https://krot.mobi/uploads/posts/2020-01/1579322803_56-111.jpg')!important;
    height: 330px!important;
}
.breadcrumb-area .title h1 {
    font-size: 30px;
}
.stuff .breadcrumb-page {
    overflow: hidden;
    margin-bottom: 0;
    padding: 15px 0;
    display: flex;
}
.stuff .breadcrumb-item {
    color: #1757a5 !important;
    font-size: 14px;
}
.stuff .breadcrumb-item a {
    color: #1757a5 !important;
    font-size: 14px;
}
.stuff  {
  background: rgb(229, 229, 240);
}
.stuff .items-text {
    margin-bottom: 3rem;
    background: #fff;
    box-shadow: 0px 1px 6px 5px rgb(230 222 222 / 50%);
}
.stuff .title-stuff {
    background: #ffd658;
     margin-top: 3rem;
    margin-bottom: 3rem;
}
.stuff .title-stuff  h4 {
    text-align: center;
}
.stuff .items-text p {
    width: 95%;
    margin: auto;
    padding-top: 10px;
    padding-bottom: 2rem;
}
</style>