<template>
    <div class="register">
<div class="container">
            <form class="form-horizontal" role="form">
                <h2>Ro'yxatdan o'tish</h2>
                <div class="form-group">
                    <label for="firstName" class="col-sm-3 control-label">To'liq ism</label>
                    <div class="col-sm-9">
                        <input type="text" id="firstName" placeholder="To'liq ism" class="form-control" autofocus>
                        <span class="help-block">Familiya, ism, masalan: Smit, Garri</span>
                    </div>
                </div>
                <div class="form-group">
                    <label for="email" class="col-sm-3 control-label">Email</label>
                    <div class="col-sm-9">
                        <input type="email" id="email" placeholder="Email" class="form-control">
                    </div>
                </div>
                <div class="form-group">
                    <label for="password" class="col-sm-3 control-label">Parol</label>
                    <div class="col-sm-9">
                        <input type="password" id="password" placeholder="Parol" class="form-control">
                    </div>
                </div>
                <div class="form-group">
                    <label for="birthDate" class="col-sm-3 control-label">Tug'ilgan sana</label>
                    <div class="col-sm-9">
                        <input type="date" id="birthDate" class="form-control">
                    </div>
                </div>
                <div class="form-group">
                    <label for="country" class="col-sm-3 control-label">Mamlakat</label>
                    <div class="col-sm-9">
                        <select id="country" class="form-control">
                            <option>O'zbekiston</option>
                            <option>Afg'oniston</option>
                            <option>AQSH</option>
                            <option>Armaniya</option>
                            <option>Angliya</option>
                            <option>Avstraliya</option>
                            <option>Argentina</option>
                            <option>Braziliya</option>
                            <option>Daniya</option>

                        </select>
                    </div>
                </div> <!-- /.form-group -->
               
            
                <div class="form-group">
                    <div class="col-sm-9 col-sm-offset-3">
                        <button type="submit" class="btn btn-primary btn-block">Ro'yxatdan o'tish</button>
                    </div>
                </div>
                 <div class="footer-link padding-top--24">
            <span>Hisobingiz bormi? <router-link to="/login">Kirish</router-link></span>
                 </div>
            </form> <!-- /form -->
        </div> <!-- ./container -->




    </div>
</template>

<script>

</script>
 


<style scoped>
.register  {
     background: linear-gradient(rgba(0, 0, 0, 0.658), rgba(0, 0, 0, 0.514)), url('../assets/images/resources/register-1.jpg')!important;
  background-size: cover!important;
  background-position: center;
  background-repeat: no-repeat;
  height: 100%;
}
.register {
    padding-top: 6rem;
}
 
.register h2 {
    position: relative;
    top: 0;
    left: -32px;
    width: 100%
}
.register *[role="form"] {
    max-width: 530px;
    padding: 15px;
    margin: 0 auto;
    background-color: #fff;
    border-radius: 0.3em;
}
.register .form-group {
    margin-left: 70px;
    width: 100%;
}
.register *[role="form"] h2 {
    margin-left: 5em;
    margin-bottom: 1em;
}
.register .footer-link {
    text-align: center;
}


</style>