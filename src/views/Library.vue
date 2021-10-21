<template>
  <div class="library">
    <!--Start breadcrumb area-->     
<section class="breadcrumb-area" style="background-image: url(../assets/images/breadcrumb/breadcrumb-4.jpg);">
    <div class="container">
        <div class="row">
            <div class="col-xl-12">
                <div class="inner-content clearfix">
                    <div class="title">
                       <h1>{{$t('nav.muzey-bolim4')}} </h1>
                    </div>
                    <div class="breadcrumb-menu">
                        <ul class="clearfix">
                            <li><router-link to="/">{{$t('nav.bolim')}}</router-link></li>
                            <li class="active">{{$t('nav.muzey-bolim4')}}</li>
                        </ul>    
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
<!--End breadcrumb area-->
<section class="details-card">
    <div class="details">
    <div class="container">
      <div class="text">
          <img src="https://static10.tgstat.ru/channels/_100/ab/ab4bd20aa38d9e2ed58f212e901fd1c2.jpg" alt="">
        <h3>{{$t('about.library')}} </h3>
      </div>
        <div class="row">
            <div class="col-md-3" v-for="book in books" :key="book.id">
                <a :href="'https://muzey-backend.napaautomotive.uz/show/' + book.id" target="_blank">
                <img :src="'https://muzey-backend.napaautomotive.uz/storage/' + book.cover_image" alt="">
                 <div class="card-desc">
                     <p>{{book.title.uz}} </p>
                 </div>
                </a>
            </div>
        </div>
        </div>
    </div>
</section>
 <!--Start footer Style2 area-->  
  <footera></footera>
  
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
      books: "",
      book: 'https://muzey-backend.napaautomotive.uz/show/',
        langs: ['uz', 'ru'] 

    };
  },
  async mounted() {
    axios
      .get("https://muzey-backend.napaautomotive.uz/api/book")
      .then(response => (this.books = response.data))
      .then(json => console.log(json))
      .catch((error) => console.log(error))
  },
  methods: {
    onclick() {
      axios({
        url: "https://muzey-backend.napaautomotive.uz/api/download",
        method: 'GET',
        responseType: 'blob'
      }).then((response) => {
        var fileUrl = window.URL.createObjectURL(new Blob([response.data]))
        var fileLink = document.createElement('a')
        fileLink.href = fileUrl

        fileLink.setAttribute('download', 'file .pdf')
        document.body.appendChild(fileLink)

        fileLink.click();
      })
  

      
    }
  },
   async created() {
    axios
      .get("https://muzey-backend.napaautomotive.uz/api/setting")
      .then(response => (this.settings = response.data))
      .then(json => console.log(json))
      .catch((error) => console.log(error))
  }
  

};
</script>

<style lang="css">
 .library .breadcrumb-area{
    padding: 355px 0;
    height: 300px!important;
    background: linear-gradient(rgba(27, 27, 27, 0.247), rgba(0, 0, 0, 0.452)), url('https://whytoread.com/wp-content/uploads/2015/03/best-books-book-youll-ever-read.jpg')!important;
      background-repeat: no-repeat!important;
    background-size: cover!important;
}


.library .details {
    background: #EBFCF4;
}
.library nav .list-unstyled {
    display: flex;
    margin-bottom: 2rem;
    margin-top: 2rem;
}
.library .details-card {
  padding-top: 4rem;

  /* background: #EBFCF4; */
}
.library .details-card h3 {
  text-align: left;
  margin-bottom: 3rem;
  font-size: 28px;
  font-weight: 400;
}
.library .card-content {
	background: #ffffff;
	border: 4px;
  height: 100%;
  width: 80%;
	box-shadow: 0 2px 5px 0 rgba(0,0,0,.16), 0 2px 10px 0 rgba(0,0,0,.12);
}

.library .card-img {
	position: relative;
	overflow: hidden;
	border-radius: 0;
	z-index: 1;
  
}
.library .page-bg {
    background: #fff;
    padding: 15px;
    margin-bottom: 236px;
    margin-top: 0rem;
    position: relative;
    left: 28rem;
    width: 46%;
}
.library .list-unstyled {
    padding-right: 0;
    list-style: none;
    display: flex;
    margin-bottom: 2rem;
}
.sidebar-menu ul {
    margin-bottom: 0;
}
.library .sidebar-menu ul li {
    border-bottom: 1px solid #1356a4;
    margin-bottom: 10px;
    padding-bottom: 10px;
}
.library .col-md-3 {
    display: flex;
    margin-right: 0px;
    margin-bottom: 8rem;
}
.library .text h3 {
    margin-left: 10px;
    padding-top: 18px;
}
.library .text {
    display: flex;
}
.library .text img {
    border: none;
    box-shadow: none;
    height: 20%;
    width: 8%;
}
.library .col-md-3 img {
    width: 190px;
   border-radius: 20px 5px 5px 20px;
    object-fit: cover;
	display: block;
    height: 268px;
    box-shadow: 6px 1px 6px 5px rgb(58 57 62 / 50%);
}
.library  img:hover {
    transform: translateY(-10px);
}
.library .card-img span {
	position: absolute;
    top: 15%;
    left: 12%;
    background: #1ABC9C;
    padding: 6px;
    color: #fff;
    font-size: 12px;
    border-radius: 4px;
    -webkit-border-radius: 4px;
    -moz-border-radius: 4px;
    -ms-border-radius: 4px;
    -o-border-radius: 4px;
    transform: translate(-50%,-50%);
}
.library .card-img span h4{
        font-size: 12px;
        margin:0;
        padding:10px 5px;
         line-height: 0;
}
.library .card-desc {
	padding: 1.25rem;
    font-size: 13px;
    text-align: center;
    /* border-bottom: 1px solid #000;
    border-radius: 18px; */
}

.library .card-desc h3 {
	color: #000000;
    font-weight: 600;
    font-size: 1.5em;
    line-height: 1.3em;
    margin-top: 0;
    margin-bottom: 5px;
    padding: 0;
}

.library .card-desc p {
	color: #747373;
    font-size: 14px;
	font-weight: 400;
	font-size: 1em;
	line-height: 16px;
	margin: 0px;
	/* margin-bottom: 20px; */
	padding: 0;
    border-bottom: 1px solid #000;
    padding-bottom: 18px;
    border-radius: 8px;
	font-family: 'Raleway', sans-serif;
}
.library .btn-card{
	background-color: #1ABC9C;
	color: #fff;
	box-shadow: 0 2px 5px 0 rgba(0,0,0,.16), 0 2px 10px 0 rgba(0,0,0,.12);
    padding: .84rem 2.14rem;
    font-size: .81rem;
    -webkit-transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,-webkit-box-shadow .15s ease-in-out;
    transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,-webkit-box-shadow .15s ease-in-out;
    -o-transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;
    transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;
    transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out,-webkit-box-shadow .15s ease-in-out;
    margin: 0;
    border: 0;
    -webkit-border-radius: .125rem;
    border-radius: .125rem;
    cursor: pointer;
    text-transform: uppercase;
    white-space: normal;
    word-wrap: break-word;
    color: #fff;
}
.library .btn-card:hover {
    background: orange;
}
.library a.btn-card {
    text-decoration: none;
    color: #fff;
}
/* End card section */

/* responsive */
@media (min-width: 320px) and (max-width: 480px) {
    .library .col-md-3 img {
        width: 200px;
        margin-left: 40px;
    }
}
</style>