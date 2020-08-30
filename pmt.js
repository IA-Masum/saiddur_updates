function pmt (rate,year,loan){

    var term = year*12;
    var rate =  rate / 1200;

    var amount = rate*-loan * Math.pow((1+rate), term) / (1- Math.pow((1+rate), term));

    return Math.floor(amount);

}

// console.log(pmt(1,1,2000));

$(document).ready(function(){
    calculation();
    $('.calField').keyup(calculation);
});


function calculation(){

    var term = $('#term').val();
    var intrst = $('#intrst').val();
    var dwnpymnt = $('#dwnpymnt').val();
    var price = $('#price').val();
    var loan = price - dwnpymnt;

    if(!isNaN(term) && !isNaN(intrst) && !isNaN(dwnpymnt) && !isNaN(price) ){
        $('#termDisplay').text(term);
        $('#intrstDisplay').text(intrst);
    
        var amount = pmt(intrst,term,loan);
    
        $('#totalCostDisplay').text('$'+amount);
        $('#piDisplay').text('$'+amount);
    }

   

}
