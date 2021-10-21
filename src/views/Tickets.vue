<template>
  <div>
    <!--Start breadcrumb area-->     
<section class="breadcrumb-area" style="background-image: url(../assets/images/breadcrumb/breadcrumb-4.jpg);">
    <div class="container">
        <div class="row">
            <div class="col-xl-12">
                <div class="inner-content clearfix">
                    <div class="title">
                       <h1>Chipta Olish</h1>
                    </div>
                    <div class="breadcrumb-menu">
                        <ul class="clearfix">
                            <li><router-link to="/">Asosiy</router-link></li>
                            <li class="active">Chiptalar</li>
                        </ul>    
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
<!--End breadcrumb area-->

    <section class="buy-tickets-area">
      <div class="container">
        <div class="row">
          <div class="col-xl-12">
            <div class="buy-tickets-content">
              <div class="row">
                <div class="col-xl-12">
                  <div class="sec-title" style="background: #efefef;">
                    <div class="big-title">
                      <h1>Muzeyga Kirish Chiptalari</h1>
                      <p>O'z chiptalaringizga oldindan buyurtma bering</p>
                    </div>
                  </div>
                  <div class="visit-day-select">
                    <div class="visit-day-tab tabs-box">
                      <div class="tabs-content">
                        <div class="row">
                          <div class="col-xl-6">
                            <div class="select-tickets-box">
                              <h3>Chiptalaringizni tanlang</h3>
                              <form action="#">
                                <ul>
                                  <li>
                                    <div class="left">
                                      <h4>Kattalar</h4>
                                    </div>
                                    <div class="input-box">
                                      <span>20 000 Uzs</span>
                                      <input
                                        class="quantity-spinner"
                                        type="text"
                                        value="0"
                                        name="quantity"
                                      />
                                    </div>
                                  </li>
                                  <li>
                                    <div class="left">
                                      <h4>Talabalar</h4>
                                      <!-- <p>Shaxsiy guvohnoma bilan to'liq kunlik</p> -->
                                    </div>
                                    <div class="input-box">
                                      <span>10 000 Uzs</span>
                                      <input
                                        class="quantity-spinner"
                                        type="text"
                                        value="0"
                                        name="quantity"
                                      />
                                    </div>
                                  </li>
                                  <li>
                                    <div class="left">
                                      <h4>Keksalar</h4>
                                      <p>65 va undan kattalar</p>
                                    </div>
                                    <div class="input-box">
                                      <span>5000 Uzs</span>
                                      <input
                                        class="quantity-spinner"
                                        type="text"
                                        value="0"
                                        name="quantity"
                                      />
                                    </div>
                                  </li>
                                  <li class="free">
                                    <div class="left">
                                      <h4>Bolalar</h4>
                                      <p>16 dan kichiklar</p>
                                    </div>
                                    <div class="input-box">
                                      <span>Bepul</span>
                                      <input
                                        class="quantity-spinner"
                                        type="text"
                                        value="0"
                                        name="quantity"
                                      />
                                    </div>
                                  </li>
                                </ul>
                              </form>
                            </div>
                          </div>
                          <div class="col-xl-6">
                            <div class="tickets-Payment-box">
                              <div class="text"></div>
                              <div class="select-tickets-box">
                                <form class="form-horizontal" role="form">
                                  <div class="form-group">
                                    <label
                                      for="firstName"
                                      class="col-sm-3 control-label"
                                      >Ism</label
                                    >
                                    <div class="col-sm-9">
                                      <input
                                        type="text"
                                        id="firstName"
                                        class="form-control"
                                        autofocus />
                                    </div>
                                  </div>
                                  <div class="form-group">
                                    <label
                                      for="last"
                                      class="col-sm-3 control-label"
                                      >Familiya</label
                                    >
                                    <div class="col-sm-9">
                                      <input
                                        type="text"
                                        id="email"
                                        class="form-control"
                                      />
                                    </div>
                                  </div>
                                  <div class="form-group">
                                    <label
                                      for="phone"
                                      class="col-sm-3 control-label"
                                      >Telefon</label
                                    >
                                    <div class="col-sm-9">
                                      <input
                                        type="text"
                                        id="password"
                                        class="form-control"
                                        value="(+998)"
                                      />
                                    </div>
                                  </div>
                                  <div class="form-group">
                                    <label
                                      for="birthDate"
                                      class="col-sm-3 control-label"
                                      >Tashrif sa'nasi</label
                                    >
                                    <div class="col-sm-9">
                                      <input
                                        type="date"
                                        id="birthDate"
                                        class="form-control"
                                      />
                                    </div>
                                  </div>
                                  <!-- /.form-group -->
                                  <div class="payment-button">
                                    <a class="btn-one" href="#">Jo'natish</a>
                                 </div>
                                </form>
                              </div>
                              <div class="bottom-text">
                                <p>
                               Agar sizda qo'shimcha savollar tug'ilgan bo'lsa mana shu raqamlarga murojaat qilishingiz mumkin (+99871) 246 97 24
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    
  </div>
</template>

<script>

</script>

 