const cardHolderName = document.getElementById("fname");
const cardNumber = document.getElementById("cardNumber");
const months = document.getElementById("month");
const years = document.getElementById("year");
const cvc = document.getElementById("cvcNumber");


const cardHolderNameError = document.getElementById("cardHolderName__error");
const cardNumberError = document.getElementById("cardNumber__error");
const cardMonthsYearsError = document.getElementById("months__years__error");
const cardcvcError = document.getElementById("cvc__error");

const thankyou = document.querySelector(".complete");
const form = document.getElementById("fForm");


thankyou.style.display = "none";

 function validation(){
   

    if(cardHolderName.value === ""){
        cardHolderNameError.innerHTML = "Can't be blank";
        cardHolderName.style.borderColor = "red";
        return false;
    }if(cardNumber.value === ""){
        cardNumberError.innerHTML = "Can't be blank";
        cardNumber.style.borderColor = "red";
        return false;
    }if(months.value === ""){
        cardMonthsYearsError.innerHTML = "Can't be blank";
        months.style.borderColor = "red";
        return false;
    }if(years.value === ""){
        cardMonthsYearsError.innerHTML = "Can't be blank";
        years.style.borderColor = "red";
        return false;
    }if(cvc.value === ""){
        cardcvcError.innerHTML = "Can't be blank";
        cvc.style.borderColor = "red";
        return false;
    }if(isNaN(cardNumber.value)){
        cardNumberError.innerHTML = "Wrong Formet, number only";
        cardNumber.style.borderColor = "red";
        return false;
    }if(isNaN(months.value)){
        cardMonthsYearsError.innerHTML = "Wrong Formet, number only";
        months.style.borderColor = "red";
        return false;
    }if(isNaN(years.value)){
        cardMonthsYearsError.innerHTML = "Wrong Formet, number only";
        years.style.borderColor = "red";
        return false;
    }if(isNaN(cvc.value)){
        cardcvcError.innerHTML = "Can't be blank";
        cvc.style.borderColor = "red";
        return false;
    }
    form.style.display = "none";
    thankyou.style.display = "block";
    return false;
 }









 
 function changeName(){
   
    const changeText = document.getElementById("name__change");


    cardHolderName.style.borderColor = "black";
    cardHolderNameError.innerHTML = "";
    changeText.innerHTML= cardHolderName.value;
}


function changeCardNumber(){

    const changeText = document.getElementById("name__card");


    changeText.innerHTML= cardNumber.value;
    cardNumberError.innerHTML = "";
    cardNumber.style.borderColor = "black";
}
function changeCardMonths(){

    const changeText = document.getElementById("months");


    changeText.innerHTML= months.value;
    cardMonthsYearsError.innerHTML = "";
    months.style.borderColor = "black";
}
function changeCardYears(){

    const changeText = document.getElementById("years");
    changeText.innerHTML= years.value;
    cardMonthsYearsError.innerHTML = "";
        years.style.borderColor = "black";
}
function changeCardCvc(){
    

    const changeText = document.getElementById("cvc__code");

    changeText.innerHTML= cvc.value;
    cardcvcError.innerHTML = "";
        cvc.style.borderColor = "black";
}













