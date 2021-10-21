<template>
    <div class="buyPhoto">
        <div class="header">
            <div class="container">
                <div class="buyText">
                    <h4>Sifatli sa'nat asarlari rasmlarni sotib oling</h4>
                    <hr>
                </div>
            </div>
        </div>
          <div class="container-fluid bg-trasparent my-4 p-3" style="position: relative;">
        <div class="row row-cols-1 row-cols-xs-2 row-cols-sm-2 row-cols-lg-4 g-3">
            <div class="col">
                <div class="card h-100 shadow-sm"> <img src="../assets/images/pictures/01.jpg" class="card-img-top" alt="...">
                    <div class="card-body">
                        <div class="clearfix mb-3"> <span class="float-start badge rounded-pill bg-primary">Ko'za</span> <span class="float-end price-hp">123€</span> </div>
                        <h5 class="card-title">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam quidem eaque ut eveniet aut quis rerum. Asperiores accusamus harum ducimus velit odit ut. Saepe, iste optio laudantium sed aliquam sequi.</h5>
                        <div class="text-center my-4"> <router-link to="/card" class="btn btn-warning">Sotib Oling</router-link> </div>
                    </div>
                </div>
            </div>
            <!-- <div class="col">
                <div class="card h-100 shadow-sm"> 
                    <img src="../assets/images/pictures/03.jpg" class="card-img-top" alt="...">
                     <div class="overlay-style-one bg1">
                  <div class="zoom-button">
                    <a
                      class="lightbox-image"
                      data-fancybox="gallery"
                      :href="'https://muzey-backend.napaautomotive.uz/storage/' + galle.images"
                    >
                      <i class="fa fa-search-plus" aria-hidden="true"></i>
                    </a>
                  </div>
                </div>
                    <div class="card-body">
                        <div class="clearfix mb-3"> <span class="float-start badge rounded-pill bg-success">12.00€</span> <span class="float-end"><a href="#">Example</a></span> </div>
                        <h5 class="card-title">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam quidem eaque ut eveniet aut quis rerum. Asperiores accusamus harum ducimus velit odit ut. Saepe, iste optio laudantium sed aliquam sequi.</h5>
                        <div class="d-grid gap-2 my-4"> <router-link to="/card" class="btn btn-warning">Sotib Oling</router-link></div>
                    </div>
                </div>
            </div> -->
            <div class="col">
                <div class="card h-100 shadow-sm"> <img src="../assets/images/pictures/05.jpg" class="card-img-top" alt="...">
                    <div class="card-body">
                        <div class="clearfix mb-3"> <span class="float-start badge rounded-pill bg-success">30€</span> <span class="float-end"><a href="#" class="small text-muted">Reviews</a></span> </div>
                        <h5 class="card-title">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam quidem eaque ut eveniet aut quis rerum. Asperiores accusamus harum ducimus velit odit ut. Saepe, iste optio laudantium sed aliquam sequi.</h5>
                        <div class="text-center my-4"> <router-link to="/card" class="btn btn-warning">Sotib Oling</router-link> </div>
                        <div class="clearfix mb-1"> <span class="float-start"><i class="far fa-question-circle"></i></span> <span class="float-end"><i class="fas fa-plus"></i></span> </div>
                    </div>
                </div>
            </div>
            <div class="col">
                <div class="card h-100 shadow-sm"> <img src="../assets/images/pictures/06.jpg" class="card-img-top" alt="...">
                    <div class="card-body">
                        <div class="clearfix mb-3"> <span class="float-start price-hp">200€</span> <span class="float-end"><a class="text-muted small" href="#">Reviews</a></span> </div>
                        <h5 class="card-title">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam quidem eaque ut eveniet aut quis rerum. Asperiores accusamus harum ducimus velit odit ut. Saepe, iste optio laudantium sed aliquam sequi.</h5>
                        <div class="text-center my-4"> <router-link to="/card" class="btn btn-warning">Sotib Oling</router-link> </div>
                        <div class="clearfix mb-1"> <span class="float-start"><i class="far fa-question-circle"></i></span> <span class="float-end"><i class="fas fa-plus"></i></span> </div>
                    </div>
                </div>
            </div>
             <div class="col">
                <div class="card h-100 shadow-sm"> <img src="../assets/images/pictures/07.jpg" class="card-img-top" alt="...">
                    <div class="card-body">
                        <div class="clearfix mb-3"> <span class="float-start price-hp">54.00€</span> <span class="float-end"><a class="text-muted small" href="#">Reviews</a></span> </div>
                        <h5 class="card-title">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam quidem eaque ut eveniet aut quis rerum. Asperiores accusamus harum ducimus velit odit ut. Saepe, iste optio laudantium sed aliquam sequi.</h5>
                        <div class="text-center my-4"> <router-link to="/card" class="btn btn-warning">Sotib Oling</router-link> </div>
                        <div class="clearfix mb-1"> <span class="float-start"><i class="far fa-question-circle"></i></span> <span class="float-end"><i class="fas fa-plus"></i></span> </div>
                    </div>
                </div>
            </div>
             <div class="col">
                <div class="card h-100 shadow-sm"> <img src="../assets/images/pictures/08.jpg" class="card-img-top" alt="...">
                    <div class="card-body">
                        <div class="clearfix mb-3"> <span class="float-start price-hp">120€</span> <span class="float-end"><a class="text-muted small" href="#">Reviews</a></span> </div>
                        <h5 class="card-title">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam quidem eaque ut eveniet aut quis rerum. Asperiores accusamus harum ducimus velit odit ut. Saepe, iste optio laudantium sed aliquam sequi.</h5>
                        <div class="text-center my-4"> <router-link to="/card" class="btn btn-warning">Sotib Oling</router-link> </div>
                        <div class="clearfix mb-1"> <span class="float-start"><i class="far fa-question-circle"></i></span> <span class="float-end"><i class="fas fa-plus"></i></span> </div>
                    </div>
                </div>
            </div>
             <div class="col">
                <div class="card h-100 shadow-sm"> <img src="../assets/images/pictures/09.jpg" class="card-img-top" alt="...">
                    <div class="card-body">
                        <div class="clearfix mb-3"> <span class="float-start price-hp">12.00€</span> <span class="float-end"><a class="text-muted small" href="#">Reviews</a></span> </div>
                        <h5 class="card-title">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam quidem eaque ut eveniet aut quis rerum. Asperiores accusamus harum ducimus velit odit ut. Saepe, iste optio laudantium sed aliquam sequi.</h5>
                        <div class="text-center my-4"> <router-link to="/card" class="btn btn-warning">Sotib Oling</router-link></div>
                        <div class="clearfix mb-1"> <span class="float-start"><i class="far fa-question-circle"></i></span> <span class="float-end"><i class="fas fa-plus"></i></span> </div>
                    </div>
                </div>
            </div>
             <div class="col">
                <div class="card h-100 shadow-sm"> <img src="../assets/images/pictures/10.jpg" class="card-img-top" alt="...">
                    <div class="card-body">
                        <div class="clearfix mb-3"> <span class="float-start price-hp">120€</span> <span class="float-end"><a class="text-muted small" href="#">Reviews</a></span> </div>
                        <h5 class="card-title">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam quidem eaque ut eveniet aut quis rerum. Asperiores accusamus harum ducimus velit odit ut. Saepe, iste optio laudantium sed aliquam sequi.</h5>
                        <div class="text-center my-4"> <router-link to="/card" class="btn btn-warning">Sotib Oling</router-link></div>
                        <div class="clearfix mb-1"> <span class="float-start"><i class="far fa-question-circle"></i></span> <span class="float-end"><i class="fas fa-plus"></i></span> </div>
                    </div>
                </div>
            </div>
             <div class="col">
                <div class="card h-100 shadow-sm"> <img src="../assets/images/pictures/11.jpg" class="card-img-top" alt="...">
                    <div class="card-body">
                        <div class="clearfix mb-3"> <span class="float-start price-hp">120€</span> <span class="float-end"><a class="text-muted small" href="#">Reviews</a></span> </div>
                        <h5 class="card-title">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam quidem eaque ut eveniet aut quis rerum. Asperiores accusamus harum ducimus velit odit ut. Saepe, iste optio laudantium sed aliquam sequi.</h5>
                        <div class="text-center my-4"> <router-link to="/card" class="btn btn-warning">Sotib Oling</router-link></div>
                        <div class="clearfix mb-1"> <span class="float-start"><i class="far fa-question-circle"></i></span> <span class="float-end"><i class="fas fa-plus"></i></span> </div>
                    </div>
                </div>
            </div>
             <div class="col">
                <div class="card h-100 shadow-sm"> <img src="../assets/images/pictures/12.jpg" class="card-img-top" alt="...">
                    <div class="card-body">
                        <div class="clearfix mb-3"> <span class="float-start price-hp">120€</span> <span class="float-end"><a class="text-muted small" href="#">Reviews</a></span> </div>
                        <h5 class="card-title">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam quidem eaque ut eveniet aut quis rerum. Asperiores accusamus harum ducimus velit odit ut. Saepe, iste optio laudantium sed aliquam sequi.</h5>
                        <div class="text-center my-4"> <router-link to="/card" class="btn btn-warning">Sotib Oling</router-link></div>
                        <div class="clearfix mb-1"> <span class="float-start"><i class="far fa-question-circle"></i></span> <span class="float-end"><i class="fas fa-plus"></i></span> </div>
                    </div>
                </div>
            </div>
             <div class="col">
                <div class="card h-100 shadow-sm"> <img src="../assets/images/pictures/13.jpg" class="card-img-top" alt="...">
                    <div class="card-body">
                        <div class="clearfix mb-3"> <span class="float-start price-hp">120€</span> <span class="float-end"><a class="text-muted small" href="#">Reviews</a></span> </div>
                        <h5 class="card-title">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam quidem eaque ut eveniet aut quis rerum. Asperiores accusamus harum ducimus velit odit ut. Saepe, iste optio laudantium sed aliquam sequi.</h5>
                        <div class="text-center my-4"> <router-link to="/card" class="btn btn-warning">Sotib Oling</router-link></div>
                        <div class="clearfix mb-1"> <span class="float-start"><i class="far fa-question-circle"></i></span> <span class="float-end"><i class="fas fa-plus"></i></span> </div>
                    </div>
                </div>
            </div>
             <div class="col">
                <div class="card h-100 shadow-sm"> <img src="../assets/images/pictures/14.jpg" class="card-img-top" alt="...">
                    <div class="card-body">
                        <div class="clearfix mb-3"> <span class="float-start price-hp">120€</span> <span class="float-end"><a class="text-muted small" href="#">Reviews</a></span> </div>
                        <h5 class="card-title">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam quidem eaque ut eveniet aut quis rerum. Asperiores accusamus harum ducimus velit odit ut. Saepe, iste optio laudantium sed aliquam sequi.</h5>
                        <div class="text-center my-4"> <router-link to="/card" class="btn btn-warning">Sotib Oling</router-link></div>
                        <div class="clearfix mb-1"> <span class="float-start"><i class="far fa-question-circle"></i></span> <span class="float-end"><i class="fas fa-plus"></i></span> </div>
                    </div>
                </div>
            </div>
             <div class="col">
                <div class="card h-100 shadow-sm"> <img src="../assets/images/pictures/17.jpg" class="card-img-top" alt="...">
                    <div class="card-body">
                        <div class="clearfix mb-3"> <span class="float-start price-hp">120€</span> <span class="float-end"><a class="text-muted small" href="#">Reviews</a></span> </div>
                        <h5 class="card-title">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam quidem eaque ut eveniet aut quis rerum. Asperiores accusamus harum ducimus velit odit ut. Saepe, iste optio laudantium sed aliquam sequi.</h5>
                        <div class="text-center my-4"> <router-link to="/card" class="btn btn-warning">Sotib Oling</router-link></div>
                        <div class="clearfix mb-1"> <span class="float-start"><i class="far fa-question-circle"></i></span> <span class="float-end"><i class="fas fa-plus"></i></span> </div>
                    </div>
                </div>
            </div>
             <div class="col">
                <div class="card h-100 shadow-sm"> <img src="../assets/images/pictures/16.jpg" class="card-img-top" alt="...">
                    <div class="card-body">
                        <div class="clearfix mb-3"> <span class="float-start price-hp">120€</span> <span class="float-end"><a class="text-muted small" href="#">Reviews</a></span> </div>
                        <h5 class="card-title">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam quidem eaque ut eveniet aut quis rerum. Asperiores accusamus harum ducimus velit odit ut. Saepe, iste optio laudantium sed aliquam sequi.</h5>
                        <div class="text-center my-4"> <router-link to="/card" class="btn btn-warning">Sotib Oling</router-link></div>
                        <div class="clearfix mb-1"> <span class="float-start"><i class="far fa-question-circle"></i></span> <span class="float-end"><i class="fas fa-plus"></i></span> </div>
                    </div>
                </div>
            </div>
             <div class="col">
                <div class="card h-100 shadow-sm"> <img src="../assets/images/pictures/18.jpg" class="card-img-top" alt="...">
                    <div class="card-body">
                        <div class="clearfix mb-3"> <span class="float-start price-hp">120€</span> <span class="float-end"><a class="text-muted small" href="#">Reviews</a></span> </div>
                        <h5 class="card-title">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam quidem eaque ut eveniet aut quis rerum. Asperiores accusamus harum ducimus velit odit ut. Saepe, iste optio laudantium sed aliquam sequi.</h5>
                        <div class="text-center my-4"> <router-link to="/card" class="btn btn-warning">Sotib Oling</router-link></div>
                        <div class="clearfix mb-1"> <span class="float-start"><i class="far fa-question-circle"></i></span> <span class="float-end"><i class="fas fa-plus"></i></span> </div>
                    </div>
                </div>
            </div>
             <div class="col">
                <div class="card h-100 shadow-sm"> <img src="../assets/images/pictures/19.jpg" class="card-img-top" alt="...">
                    <div class="card-body">
                        <div class="clearfix mb-3"> <span class="float-start price-hp">120€</span> <span class="float-end"><a class="text-muted small" href="#">Reviews</a></span> </div>
                        <h5 class="card-title">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam quidem eaque ut eveniet aut quis rerum. Asperiores accusamus harum ducimus velit odit ut. Saepe, iste optio laudantium sed aliquam sequi.</h5>
                        <div class="text-center my-4"> <router-link to="/card" class="btn btn-warning">Sotib Oling</router-link></div>
                        <div class="clearfix mb-1"> <span class="float-start"><i class="far fa-question-circle"></i></span> <span class="float-end"><i class="fas fa-plus"></i></span> </div>
                    </div>
                </div>
            </div>
              <div class="col">
                <div class="card h-100 shadow-sm"> <img src="../assets/images/pictures/22.jpg" class="card-img-top" alt="...">
                    <div class="card-body">
                        <div class="clearfix mb-3"> <span class="float-start price-hp">120€</span> <span class="float-end"><a class="text-muted small" href="#">Reviews</a></span> </div>
                        <h5 class="card-title">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam quidem eaque ut eveniet aut quis rerum. Asperiores accusamus harum ducimus velit odit ut. Saepe, iste optio laudantium sed aliquam sequi.</h5>
                        <div class="text-center my-4"> <router-link to="/card" class="btn btn-warning">Sotib Oling</router-link></div>
                        <div class="clearfix mb-1"> <span class="float-start"><i class="far fa-question-circle"></i></span> <span class="float-end"><i class="fas fa-plus"></i></span> </div>
                    </div>
                </div>
            </div>
              <div class="col">
                <div class="card h-100 shadow-sm"> <img src="../assets/images/pictures/23.jpg" class="card-img-top" alt="...">
                    <div class="card-body">
                        <div class="clearfix mb-3"> <span class="float-start price-hp">120€</span> <span class="float-end"><a class="text-muted small" href="#">Reviews</a></span> </div>
                        <h5 class="card-title">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam quidem eaque ut eveniet aut quis rerum. Asperiores accusamus harum ducimus velit odit ut. Saepe, iste optio laudantium sed aliquam sequi.</h5>
                        <div class="text-center my-4"> <router-link to="/card" class="btn btn-warning">Sotib Oling</router-link></div>
                        <div class="clearfix mb-1"> <span class="float-start"><i class="far fa-question-circle"></i></span> <span class="float-end"><i class="fas fa-plus"></i></span> </div>
                    </div>
                </div>
            </div>
              <div class="col">
                <div class="card h-100 shadow-sm"> <img src="../assets/images/pictures/24.jpg" class="card-img-top" alt="...">
                    <div class="card-body">
                        <div class="clearfix mb-3"> <span class="float-start price-hp">120€</span> <span class="float-end"><a class="text-muted small" href="#">Reviews</a></span> </div>
                        <h5 class="card-title">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam quidem eaque ut eveniet aut quis rerum. Asperiores accusamus harum ducimus velit odit ut. Saepe, iste optio laudantium sed aliquam sequi.</h5>
                        <div class="text-center my-4"> <router-link to="/card" class="btn btn-warning">Sotib Oling</router-link></div>
                        <div class="clearfix mb-1"> <span class="float-start"><i class="far fa-question-circle"></i></span> <span class="float-end"><i class="fas fa-plus"></i></span> </div>
                    </div>
                </div>
            </div>
              <div class="col">
                <div class="card h-100 shadow-sm"> <img src="../assets/images/pictures/25.jpg" class="card-img-top" alt="...">
                    <div class="card-body">
                        <div class="clearfix mb-3"> <span class="float-start price-hp">120€</span> <span class="float-end"><a class="text-muted small" href="#">Reviews</a></span> </div>
                        <h5 class="card-title">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam quidem eaque ut eveniet aut quis rerum. Asperiores accusamus harum ducimus velit odit ut. Saepe, iste optio laudantium sed aliquam sequi.</h5>
                        <div class="text-center my-4"> <router-link to="/card" class="btn btn-warning">Sotib Oling</router-link></div>
                        <div class="clearfix mb-1"> <span class="float-start"><i class="far fa-question-circle"></i></span> <span class="float-end"><i class="fas fa-plus"></i></span> </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    </div>
</template>

<style scoped>
.buyPhoto {
    padding-top: 1rem;
    background: #f5f7f9;
}
.buyPhoto .header {
    background: rgb(245 242 239);
    height: 100px;
}
.buyPhoto h4 {
    padding-top: 36px;
    /* text-align: center; */
    font-weight: bold;
    font-size: 18px;
    color: #989292;
}
.buyPhoto .container-fluid {
    max-width: 1200px
}
.buyPhoto .row {
    margin-top: 2rem;
}
.buyPhoto .col {
    padding: 15px;
}
.card {
    background: #fff;
    box-shadow: 0 6px 10px rgba(0, 0, 0, .08), 0 0 6px rgba(0, 0, 0, .05);
    transition: .3s transform cubic-bezier(.155, 1.105, .295, 1.12), .3s box-shadow, .3s -webkit-transform cubic-bezier(.155, 1.105, .295, 1.12);
    border: 0;
    border-radius: 1rem
}
.buyPhoto .btn[data-v-a26ab748] {
    font-size: 13px;
    font-weight: 500;
    text-transform: uppercase;
    padding: 5px 50px 5px 50px;
}
.buyPhoto .card-img,
.buyPhoto  .card-img-top {
    border-top-left-radius: calc(1rem - 1px);
    border-top-right-radius: calc(1rem - 1px)
}

.buyPhoto  .card h5 {
    overflow: hidden;
    height: 56px;
    font-weight: 900;
    font-size: 1rem
}
.buyPhoto  .card-img-top {
    width: 100%;
    height: 280px;
    object-fit: cover;
    padding: 20px
}
.buyPhoto .text-center {
    padding-top: 28px;
}
.buyPhoto  .card h2 {
    font-size: 1rem
}

.buyPhoto  .card:hover {
    transform: scale(1.05);
    box-shadow: 0 10px 20px rgba(0, 0, 0, .12), 0 4px 8px rgba(0, 0, 0, .06)
}

.buyPhoto  .label-top {
    position: absolute;
    background-color: #8bc34a;
    color: #fff;
    top: 8px;
    right: 8px;
    padding: 5px 10px 5px 10px;
    font-size: .7rem;
    font-weight: 600;
    border-radius: 3px;
    text-transform: uppercase
}

.top-right {
    position: absolute;
    top: 24px;
    left: 24px;
    width: 90px;
    height: 90px;
    border-radius: 50%;
    font-size: 1rem;
    font-weight: 900;
    background: #ff5722;
    line-height: 90px;
    text-align: center;
    color: white
}

.top-right span {
    display: inline-block;
    vertical-align: middle
}

@media (max-width: 768px) {
    .card-img-top {
        max-height: 250px
    }
}

.over-bg {
    background: rgba(53, 53, 53, 0.85);
    box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
    backdrop-filter: blur(0.0px);
    -webkit-backdrop-filter: blur(0.0px);
    border-radius: 10px
}

.buyPhoto  .btn {
    font-size: 1rem;
    font-weight: 500;
    text-transform: uppercase;
    padding: 5px 50px 5px 50px
}

.box .btn {
    font-size: 1.5rem
}

@media (max-width: 1025px) {
    .btn {
        padding: 5px 40px 5px 40px
    }
}

@media (max-width: 250px) {
    .btn {
        padding: 5px 30px 5px 30px
    }
}

.btn-warning {
    background: none #f7810a;
    color: #ffffff;
    fill: #ffffff;
    border: none;
    text-decoration: none;
    outline: 0;
    box-shadow: -1px 6px 19px rgba(247, 129, 10, 0.25);
    border-radius: 100px
}
.btn-warning:hover {
    background: none #ff962b;
    color: #ffffff;
    box-shadow: -1px 6px 13px rgba(255, 150, 43, 0.35)
}

.bg-success {
    font-size: 1rem;
    background-color: #f7810a !important
}

.bg-danger {
    font-size: 1rem
}

.price-hp {
    font-size: 1rem;
    font-weight: 600;
    color: darkgray
}

.amz-hp {
    font-size: .7rem;
    font-weight: 600;
    color: darkgray
}

.fa-question-circle:before {
    color: darkgray
}

.fa-plus:before {
    color: darkgray
}

.box {
    border-radius: 1rem;
    background: #fff;
    box-shadow: 0 6px 10px rgb(0 0 0 / 8%), 0 0 6px rgb(0 0 0 / 5%);
    transition: .3s transform cubic-bezier(.155, 1.105, .295, 1.12), .3s box-shadow, .3s -webkit-transform cubic-bezier(.155, 1.105, .295, 1.12)
}



.thumb-sec {
    max-width: 300px
}

@media (max-width: 576px) {
    .box-img {
        max-width: 200px
    }

    .thumb-sec {
        max-width: 200px
    }
}

.inner-gallery {
    width: 60px;
    height: 60px;
    border: 1px solid #ddd;
    border-radius: 3px;
    margin: 1px;
    display: inline-block;
    overflow: hidden;
    -o-object-fit: cover;
    object-fit: cover
}

@media (max-width: 370px) {
    .box .btn {
        padding: 5px 40px 5px 40px;
        font-size: 1rem
    }
}

.disclaimer {
    font-size: .9rem;
    color: darkgray
}

.related h3 {
    font-weight: 900
}

</style>