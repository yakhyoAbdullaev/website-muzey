<template>
  <div class="video">
    <section
      class="breadcrumb-area"
      style="
        background-image: url(../assets/images/breadcrumb/breadcrumb-4.jpg);
      "
    >
      <div class="container">
        <div class="row">
          <div class="col-xl-12">
            <div class="inner-content clearfix">
              <div class="title">
                <h1>Video</h1>
              </div>
              <div class="breadcrumb-menu">
                <ul class="clearfix">
                  <li><router-link to="/">Asosiy</router-link></li>
                  <li class="active">Videolar</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <div class="container">
      <h4>Muzey haqida videolar</h4>
      <div class="row">
        <div class="col-md-6" v-for="videos in video" :key="videos.id">
          <div class="card">
            <div class="card-image">
              <iframe width="560" height="315" :src="'https://www.youtube.com/embed/' + videos.link.uz" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
          </div>
            <div class="card-content">
              <span class="card-title">{{videos.title.uz}} </span>
            </div>
          </div>
      </div>
    </div>

    <footera class="footer"></footera>
  </div>
</template>


<script>
import axios from "axios";
import footera from '../components/footera.vue';
// import LazyYoutubeVideo from 'vue-lazy-youtube-video'



export default  {
  components: {
    'footera': footera,
    //  LazyYoutubeVideo,

  },
  data() {
    return {
      video: ""
    };
  },
  async mounted() {
    axios
      .get("https://muzey-backend.napaautomotive.uz/api/video")
      .then((response) => (this.video = response.data))
      .then((json) => console.log(json))
      .catch((error) => console.log(error));
  },
   methods: {
    handleClick(event, ref) {
      this.$refs[ref][event]()
    },
    // handleSearch(e, platform) {
    //   if(platform === 'youtube')
    //     this.youtubeLink = e.target.value;
    //   else
    //     this.vimeoLink = e.target.value;
    // }
  }
}
</script>

<style lang="css">
@import url(//maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css);
.video .card .card-image {
  overflow: hidden;
  -webkit-transform-style: preserve-3d;
  -moz-transform-style: preserve-3d;
  -ms-transform-style: preserve-3d;
  -o-transform-style: preserve-3d;
  transform-style: preserve-3d;
}
.video .breadcrumb-area {
  height: 700px;
}
.video {
  margin-top: 5rem;
}
.video .card {
  margin-top: 10px;
  position: relative;
  -webkit-box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16),
    0 2px 10px 0 rgba(0, 0, 0, 0.12);
  -moz-box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16),
    0 2px 10px 0 rgba(0, 0, 0, 0.12);
  box-shadow: 4 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12);
}

.video .card .card-content {
  padding: 10px;
}

.video .card .card-content .card-title,
.card-reveal .card-title {
  font-size: 24px;
  font-weight: 200;
}

.video .card .card-action {
  padding: 20px;
  border-top: 1px solid rgba(160, 160, 160, 0.2);
}
.video .card .card-action a {
  font-size: 15px;
  color: #ffab40;
  text-transform: uppercase;
  margin-right: 20px;
  -webkit-transition: color 0.3s ease;
  -moz-transition: color 0.3s ease;
  -o-transition: color 0.3s ease;
  -ms-transition: color 0.3s ease;
  transition: color 0.3s ease;
}
.video .card .card-action a:hover {
  color: #ffd8a6;
  text-decoration: none;
}

.video .card .card-reveal {
  padding: 20px;
  position: absolute;
  background-color: #fff;
  width: 100%;
  overflow-y: auto;
  /*top: 0;*/
  left: 0;
  bottom: 0;
  height: 100%;
  z-index: 1;
  display: none;
}

.video .card .card-reveal p {
  color: rgba(0, 0, 0, 0.71);
  margin: 20px;
}
.video .col-md-6 {
  margin-bottom: 7rem;
}
.video .btn-custom {
  background-color: transparent;
  font-size: 18px;
}

</style>