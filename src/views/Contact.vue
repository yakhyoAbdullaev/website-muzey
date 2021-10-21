<template>
  <div class="contact">
    <!--Start breadcrumb area-->
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
                <h1>{{$t('nav.contact')}} </h1>
              </div>
              <div class="breadcrumb-menu">
                <ul class="clearfix">
                  <li><router-link to="/">{{$t('nav.Asosiy')}}</router-link></li>
                  <li class="active">{{$t('nav.contact')}}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!--End breadcrumb area-->

    <!--Start Contact Form Section-->
   <section class="contact-form-area">
      <div class="auto-container">
        <div class="sec-title text-center">
          <div class="big-title"><h1>{{$t('contact.aloqa')}} </h1></div>
          <p v-html="$t('contact.aloqa2')"></p>
         
        </div>
        <div class="row clearfix">
          <div class="col-xl-12 col-lg-12 col-md-12">
            <div class="contact-form">
              <div class="inner-box">
                <div class="alert alert-success" v-if="isSuccess">Murojatingiz jo'natildi</div>
                <form
                  id="contact-form"
                  name="contact_form"
                  class="default-form2"
                @submit.prevent="onCreatepost"
                  method="post"
                >
                  <div class="row">
                    <div class="col-xl-6">
                      <div class="input-box">
                        <input
                          type="text"
                          placeholder="Ism"
                          required=""
                          name="ФИО"
                          v-model="full_name"
                        />
                      </div>
                    </div>
                    <div class="col-xl-6">
                      <div class="input-box">
                        <input
                          type="email"
                          placeholder="Email"
                          required=""
                          name="EMAIL"
                          v-model="email"
                        />
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-xl-6">
                      <div class="input-box">
                        <input
                          type="text"
                          placeholder="Mavzu"
                          name="МАВЗУ"
                          v-model="subject"
                        />
                      </div>
                    </div>
                    <!-- <div class="col-xl-6">
                      <div class="input-box">
                        <input
                          type="text"
                          v-model="phone"
                          placeholder="Telefon"
                        />
                      </div>
                    </div> -->
                  </div>
                  <div class="row">
                    <div class="col-xl-12">
                      <div class="input-box">
                        <textarea
                          placeholder="Qisqacha ma'lumot"
                          required=""
                          name="ХАБАР"
                          v-model="message"
                        ></textarea>
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-xl-12">
                      <div class="button-box text-center">
                        
                        <button
                          type="submit"
                          @submit="submitForm"
                          data-loading-text="Please wait..."
                        >
                           Jo'natish
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!--End Contact Form Section-->
<div class="maps">
     <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2997.2567338517993!2d69.27758299999999!3d41.3032782!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8ad73c0e7845%3A0xca4415881e7cee5c!2sO&#39;zbekiston%20davlat%20sa&#39;nat%20muzeyi!5e0!3m2!1sru!2s!4v1625656409611!5m2!1sru!2s"
            width="50%"
            height="500"
            style="border: 0"
            allowfullscreen=""
            loading="lazy"
          ></iframe>
          </div>

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
        full_name: "",
        email: "",
        subject: "",
        message: "",
       isSuccess: false,
    };
  },
   methods: {
      onCreatepost() {
      axios
      .post("https://muzey-backend.napaautomotive.uz/api/contact/store", 
      {full_name: this.full_name, email: this.email, subject: this.subject, message: this.message},
      )
        .then((response) => {
          this.isSuccess = true;
          console.log(response);
        });
    },
  },
};
</script>


<style lang="css">
.contact .breadcrumb-area {
  background-image: url("../assets/images/breadcrumb/breadcrumb-4.jpg") !important;
}
.contact-form form {
  width: 100%;
}
/* .contact img {
  width: 120px;
  height: 50px;
  object-fit: contain;
} */
.partner-style3-area {
  margin-top: 4rem;
  height: 340px;
  padding-top: 45px;
}
.contact iframe {
  width: 100%;
    margin-bottom: 7rem;
}
.phone-num {
  padding-top: 1rem;
}
.phone-num a {
  font-size: 18px!important;
}

/* responsive */

@media (min-width: 315px) and (max-width: 480px) {
  .contact .google-map-area iframe {
    width: 100%;
    margin-left: 0px;
  }
}
@media (min-width: 768px) and (max-width: 1025px) {
  .contact .google-map-area iframe {
    width: 100%;
    margin-left: 0px;
  }
}
</style>