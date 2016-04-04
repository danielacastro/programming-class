var sumbit = document.getElementById("submit");
submit.onclick = tipCalculate;

$(document).ready(function(){ 
$().each(function(tipCalculate)) {


}

var totalBill = document.getElementById("bill").value;

var tipPerc = getPercentChecked();
 if(!isNaN(totalBill)){
  	var tipAmount = Math.floor(totalBill * tipPerc * 100) / 100;
  var roundedAmount = tipAmount.toFixed(2);
  var tipBox = document.getElementById("tipamount");
  tipBox.innerHTML = "$" + roundedAmount;
  } else { 
  	alert("Please enter numbers only");
  }

var percentages = [15,20,25];
$.each(percentages,function(index,item){});

var percBtns = document.getElementsByClassName('tip-btn');