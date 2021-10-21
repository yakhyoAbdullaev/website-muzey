<template>
    <div class="creditCard">
        <div class="container-fluid">
        <div class="creditCardForm">
            <div class="heading">
                <h1>Xaridni Tasdiqlang</h1>
            </div>
            <div class="payment">
                <form>
                    <div class="form-group owner">
                        <label for="owner">Egasi</label>
                        <input type="text" class="form-control" id="owner">
                    </div>
                    <div class="form-group CVV">
                        <label for="cvv">CVV</label>
                        <input type="text" class="form-control" id="cvv">
                    </div>
                    <div class="form-group" id="card-number-field">
                        <label for="cardNumber">Karta raqami</label>
                        <input type="text" class="form-control" id="cardNumber">
                    </div>
                    <div class="form-group" id="expiration-date">
                        <label>Amal qilish muddati</label>
                        <select>
                            <option value="01">Yanvar</option>
                            <option value="02">Fevral </option>
                            <option value="03">Mart</option>
                            <option value="04">Aprel</option>
                            <option value="05">May</option>
                            <option value="06">Iyun</option>
                            <option value="07">Iyul</option>
                            <option value="08">Avgust</option>
                            <option value="09">Sentyabr</option>
                            <option value="10">Oktyabr</option>
                            <option value="11">Noyabr</option>
                            <option value="12">Dekabr</option>
                        </select>
                        <select>
                            <option value="16"> 2021</option>
                            <option value="17"> 2020</option>
                            <option value="18"> 2022</option>
                            <option value="19"> 2023</option>
                            <option value="20"> 2024</option>
                            <option value="21"> 2025</option>
                        </select>
                    </div>
                    <div class="form-group" id="credit_cards">
                        <img src="../assets/images/creditCard/visa.jpg" id="visa">
                        <img src="../assets/images/creditCard/mastercard.jpg" id="mastercard">
                        <img src="../assets/images/creditCard/uzcard.png" id="amex">
                    </div>
                    <div class="form-group" id="pay-now">
                        <button type="submit" class="btn btn-default" id="confirm-purchase">Tasdiqlang</button>
                    </div>
                </form>
            </div>
        </div>
    </div>

    <splide>
  <splide-slide>
    <img src="image01.jpg">
  </splide-slide>
  <splide-slide>
    <img src="image02.jpg">
  </splide-slide>
  <splide-slide>
    <img src="image03.jpg">
  </splide-slide>
</splide>
    </div>
</template>

<script>
import { Splide, SplideSlide } from '@splidejs/vue-splide';
import '@splidejs/splide/dist/css/themes/splide-default.min.css';
// or
import '@splidejs/splide/dist/css/themes/splide-sea-green.min.css';
// or
import '@splidejs/splide/dist/css/themes/splide-skyblue.min.css';

export default {
    components: {
    Splide,
    SplideSlide,
  },
}
</script>


<style lang="css">

.creditCard {
    background:#f8f8f8;
    height: 120vh;
}
 .creditCard .container-fluid {
    padding-top: 2rem!important;
}
 .creditCard .container-fluid{
    padding:0;
    margin:0;
}

.creditCard header{
    box-sizing: border-box;
    text-align: center;
    width: 100%;
    padding: 25px 40px;
    background-color: #3A56B7;
    overflow: hidden;
}

.creditCard header .limiter{
    max-width: 1000px;
    margin: 0px auto;
}

.creditCard header h3{
    font: normal 24px/1.5 'Open Sans', sans-serif;
    float: left;
    color: #fff;
    margin:0;
}

.creditCard header a {
    color:#fff;
    float: right;
    text-decoration: none;
    display: inline-block;
    padding: 13px 50px;
    border-radius: 3px;
    font: bold 14px/1 'Open Sans', sans-serif;
    text-transform: uppercase;
    background-color:#F05283;
    opacity: 0.9;
}

.creditCard header a:hover{
    color: #fff;
    text-decoration: none;
    opacity: 1;
}

@media (max-width: 850px) {

    .creditCard header h3{
        float: none;
        text-align: center;
    }

    .creditCard header a{
        margin-top: 20px;
        float: none;
    }

}

.creditCardForm {
    max-width: 700px;
    background-color: #fff;
    margin: 100px auto;
    overflow: hidden;
    padding: 25px;
    color: #4c4e56;
}

.creditCardForm label {
    width: 100%;
    margin-bottom: 10px;
}

.creditCardForm .heading h1 {
    text-align: center;
    font-family: 'Open Sans', sans-serif;
    color: #4c4e56;
}

.creditCardForm .payment {
    float: left;
    font-size: 18px;
    padding: 10px 25px;
    margin-top: 20px;
    position: relative;
}

.creditCardForm .payment .form-group {
    float: left;
    margin-bottom: 15px;
}

.creditCardForm .payment .form-control {
    line-height: 40px;
    height: auto;
    padding: 0 16px;
}

.creditCardForm .owner {
    width: 63%;
    margin-right: 10px;
}

.creditCardForm .CVV {
    width: 35%;
}

.creditCardForm #card-number-field {
    width: 100%;
}

.creditCardForm #expiration-date {
    width: 49%;
}

.creditCardForm #credit_cards {
    width: 50%;
    margin-top: 25px;
    text-align: right;
}

.creditCardForm #pay-now {
    width: 100%;
    margin-top: 25px;
}

.creditCardForm .payment .btn {
    width: 100%;
    margin-top: 3px;
    font-size: 24px;
    background-color: #2ec4a5;
    color: white;
}

.creditCardForm .payment select {
    padding: 10px;
    margin-right: 15px;
}

.transparent {
    opacity: 0.2;
}

@media(max-width: 650px) {
    .creditCardForm .owner,
    .creditCardForm .CVV,
    .creditCardForm #expiration-date,
    .creditCardForm #credit_cards {
        width: 100%;
    }
    .creditCardForm #credit_cards {
        text-align: left;
    }
}

.creditCard img {
    padding: 5px;
    cursor: pointer;
}
.creditCard img:nth-child(3) {
  width: 27.9%;
}

</style>


