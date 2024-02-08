const convertButton = document.querySelector(".convert-button")
const currencySelect = document.querySelector(".currency-select")

function convertValues() {
   const inputCurrencyValue = document.querySelector(".input-currency").value
   const currencyValueToConvert = document.querySelector(".currency-value-to-convert")
   const currencyValueConverted = document.querySelector(".currency-value")

   console.log(currencySelect.value)
   const dolarToday = 4.99
   const euroToday = 5.37

   const convertedValue = inputCurrencyValue / dolarToday

   if (currencySelect.value == "dolar") {
      currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
         style: "currency",
         currency: "USD"
      }).format(inputCurrencyValue / dolarToday)
   }
   if (currencySelect.value == "euro") {
      currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
         style: "currency",
         currency: "EUR"
      }).format(inputCurrencyValue / euroToday)
   }

   currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL"
   }).format(inputCurrencyValue)
}

function changeCurrency() {
   const currencyName = document.getElementById("currency-name")
   const currencyImage = document.querySelector(".currency-img")

   if (currencySelect.value == "dolar") {
      currencyName.innerHTML = "Dólar americano"
      currencyImage.src = "logo usa.png"

   }

   if (currencySelect.value == "euro") {
      currencyName.innerHTML = "Euro"
      currencyImage.src = "euro.png"
   }



}


currencySelect.addEventListener("change", changeCurrency)
convertButton.addEventListener("click", convertValues)