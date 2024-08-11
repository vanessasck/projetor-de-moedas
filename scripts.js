const convertButton = document.querySelector(".convert-button");
const currencySelect = document.querySelector(".currency-select");

function convertValues() {

    const inputCurrencyValue = document.querySelector(".input-currency").value;
    const currencyValueToConvert = document.querySelector(".currency-value-to-convert");
    const currencyValueConverted = document.querySelector(".currency-value");
    
    console.log(currencySelect.value);
   
    const dolarToday = 5.2;
    const euroToday = 6.2;
    const libraToday = 7.2;
    const bitcoinToday = 6.53;

if (currencySelect.value == "dolar") {
    currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
    }).format(inputCurrencyValue / dolarToday); 
}
if (currencySelect.value == "euro") {
    currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
        style: "currency",
        currency: "EUR",
    }).format(inputCurrencyValue / euroToday);
}
if (currencySelect.value == "libra") {
    currencyValueConverted.innerHTML = new Intl.NumberFormat("en-UK",{
        style: "currency",
        currency:"GBP",
    }).format(inputCurrencyValue / libraToday);
}
if (currencySelect.value == "bitcoin"){
    currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US",{
        style: "currency",
        currency:"BTC",
    }).format(inputCurrencyValue / bitcoinToday);
}
currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
}).format(inputCurrencyValue);
}
function changeCurrency() {
    const currencyName = document.getElementById("currency-name");
    const currencyImage = document.querySelector(".currency-img");

    if (currencySelect.value == "dolar") {
        currencyName.innerHTML= "Dólar americano";
        currencyImage.src = "./img/estados-unidos (1) 1.png";
    }
    if (currencySelect.value == "euro") {
        currencyName.innerHTML= "Euro";
        currencyImage.src = "./img/euro.png";
    }
    if (currencySelect.value == "libra"){
        currencyName.innerHTML= "Libra";
        currencyImage.src = "./img/libra 1.png";
    }
    if (currencySelect.value == "bitcoin") {
        currencyName.innerHTML= "Bitcoin";
        currencyImage.src = "./img/bitcoin 1.png";
    }

    convertValues()

}


currencySelect.addEventListener("change", changeCurrency);
convertButton.addEventListener("click", convertValues);

