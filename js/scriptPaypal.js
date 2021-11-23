var flagGumbup;
var flagCandle;
var flagCutting;
var flagSparring;
var flagCount = 0;

var nameToPay;
var mailToPay;
var countryToPay;
var dojanToPay;
var numberToPay;
var gradeToPay;
var instructorToPay;
var cathegoryGumbup;
var cathegoryCandle;
var cathegoryCutting;
var cathegorySparring;

$("#countryPaypal").on('change', function (e) {
  
    var optionSelected = $("option:selected", this);
    countryToPay = this.value;

    if (countryToPay == "Mexico") {
    	$('.paypalButtons').css('display','none');
    }
});

$("#checkGumbup").change(function() {
    if(this.checked) {
        flagGumbup = true;
        flagCount += 1;
        cathegoryGumbup = 'Gumbup';
    } else {
        flagGumbup = false;
        flagCount -= 1;
        cathegoryGumbup = '';
    }
});
$("#checkCandle").change(function() {
    if(this.checked) {
        flagCandle = true;
        flagCount += 1;
        cathegoryCandle = 'Candle';
    } else {
        flagCandle = false;
        flagCount -= 1;
        cathegoryCandle = '';
    }
});
$("#checkCutting").change(function() {
    if(this.checked) {
        flagCutting = true;
        flagCount += 1;
        cathegoryCutting = 'Cutting';
    } else {
        flagCutting = false;
        flagCount -= 1;
        cathegoryCutting = '';
    }
});
$("#checkSparring").change(function() {
    if(this.checked) {
        flagSparring = true;
        flagCount += 1;
        cathegorySparring = 'Sparring';
    } else {
        flagSparring = false;
        flagCount -= 1;
        cathegorySparring = '';
    }
});


function initPayPalButton() {
  paypal.Buttons({
    style: {
      shape: 'pill',
      color: 'black',
      layout: 'vertical',
      label: 'paypal',
      
    },

    createOrder: function(data, actions) {
        var promoCode = $('#codePaypal').val();

        if (promoCode == '1USD'){
            return actions.order.create({
                purchase_units: [{
                    "description":"Coliseum Payment",
                    "amount":{"currency_code":"USD",
                              "value":1}
                          }]
              });
        } 

        if (flagCount == 1 && promoCode != 'SNBCOLISEUMMT'){
            return actions.order.create({
                purchase_units: [{
                    "description":"Coliseum Payment",
                    "amount":{"currency_code":"USD",
                              "value":15}
                          }]
              });
        } else if (flagCount == 2  && promoCode != 'SNBCOLISEUMMT'){
            return actions.order.create({
                purchase_units: [{
                    "description":"Coliseum Payment",
                    "amount":{"currency_code":"USD",
                              "value":22.5}
                          }]
              });
        } else if (flagCount == 3  && promoCode != 'SNBCOLISEUMMT'){
            return actions.order.create({
                purchase_units: [{
                    "description":"Coliseum Payment",
                    "amount":{"currency_code":"USD",
                              "value":30}
                          }]
              });
        } else if (flagCount == 4  && promoCode != 'SNBCOLISEUMMT'){
            return actions.order.create({
                purchase_units: [{
                    "description":"Coliseum Payment",
                    "amount":{"currency_code":"USD",
                              "value":37.5}
                          }]
              });
        } else if (flagCount == 1  && promoCode == 'SNBCOLISEUMMT'){
            return actions.order.create({
                purchase_units: [{
                    "description":"Coliseum Payment",
                    "amount":{"currency_code":"USD",
                              "value":10}
                          }]
              });
        } else if (flagCount == 2  && promoCode == 'SNBCOLISEUMMT'){
            return actions.order.create({
                purchase_units: [{
                    "description":"Coliseum Payment",
                    "amount":{"currency_code":"USD",
                              "value":15}
                          }]
              });
        } else if (flagCount == 3  && promoCode == 'SNBCOLISEUMMT'){
            return actions.order.create({
                purchase_units: [{
                    "description":"Coliseum Payment",
                    "amount":{"currency_code":"USD",
                              "value":20}
                          }]
              });
        } else if (flagCount == 4  && promoCode == 'SNBCOLISEUMMT'){
            return actions.order.create({
                purchase_units: [{
                    "description":"Coliseum Payment",
                    "amount":{"currency_code":"USD",
                              "value":25}
                          }]
              });
        } 

    },

    onApprove: function(data, actions) {
      return actions.order.capture().then(function(orderData) {
        
        // Full available details
        alert('Transaction completed by ' + details.payer.name.given_name);
        console.log('Capture result', orderData, JSON.stringify(orderData, null, 2));

        nameToPay = $('#namePaypal').val();
        mailToPay = $('#mailPaypal').val();
        dojanToPay = $('#dojangPaypal').val();
        numberToPay = $('#numberPaypal').val();
        gradeToPay = $('#gradePaypal').val();
        instructorToPay = $('#instructorPaypal').val();

        var cathegories = '';
        if (flagGumbup){
            cathegories += cathegoryGumbup + ' ';
        }

        if (flagCandle){
            cathegories += cathegoryCandle + ' ';
        }

        if (flagCutting){
            cathegories += cathegoryCutting + ' ';
        }

        if (flagSparring){
            cathegories += cathegorySparring + '';
        }


        // Show a success message within this page, e.g.
        const element = document.getElementById('paypal-button-container');
        element.innerHTML = '';
        element.innerHTML = '<h3>Thank you for your payment!</h3>';

        console.log();

         $.post("correoPagoExitoso.php",  { name: ''+nameToPay, mail: ''+mailToPay, dojang: ''+dojanToPay, pais: ''+countryToPay, numero: ''+numberToPay, grado: ''+gradeToPay, instructor: ''+instructorToPay, categorias: ''+cathegories } );
         $.post("correoInscriptor.php",  { name: ''+nameToPay, mail: ''+mailToPay, dojang: ''+dojanToPay, pais: ''+countryToPay, numero: ''+numberToPay, grado: ''+gradeToPay, instructor: ''+instructorToPay, categorias: ''+cathegories } );

        // Or go to another URL:  actions.redirect('thank_you.html');
        
      });
    },

    onError: function(err) {
      console.log(err);

        nameToPay = $('#namePaypal').val();
        mailToPay = $('#mailPaypal').val();
        dojanToPay = $('#dojangPaypal').val();
        numberToPay = $('#numberPaypal').val();
        gradeToPay = $('#gradePaypal').val();
        instructorToPay = $('#instructorPaypal').val();

        var cathegories = '';
        if (flagGumbup){
            cathegories += cathegoryGumbup + ' ';
        }

        if (flagCandle){
            cathegories += cathegoryCandle + ' ';
        }

        if (flagCutting){
            cathegories += cathegoryCutting + ' ';
        }

        if (flagSparring){
            cathegories += cathegorySparring + '';
        }


        // Show a success message within this page, e.g.
        const element = document.getElementById('paypal-button-container');
        element.innerHTML = '';
        element.innerHTML = '<h3>Thank you for your payment!</h3>';

        $.post("correoPagoExitoso.php",  { name: ''+nameToPay, mail: ''+mailToPay, dojang: ''+dojanToPay, pais: ''+countryToPay, numero: ''+numberToPay, grado: ''+gradeToPay, instructor: ''+instructorToPay, categorias: ''+cathegories } );
        $.post("correoInscriptor.php",  { name: ''+nameToPay, mail: ''+mailToPay, dojang: ''+dojanToPay, pais: ''+countryToPay, numero: ''+numberToPay, grado: ''+gradeToPay, instructor: ''+instructorToPay, categorias: ''+cathegories } );

    }
  }).render('#paypal-button-container');
}
initPayPalButton();