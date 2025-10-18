const convertButton = document.querySelector(".convert-button");
const currencySelect = document.querySelector(".to-currency");

function convertValues() {
  const inputCurrencyValue = document.querySelector(".input-currency").value;
  const currencyValuetoConvert = document.querySelector(".currency-value-to-convert");
  const currencyValueConverted = document.querySelector(".currency-value");

  const dolarToday = 5.2;
  const euroToday = 6.2;
  const libraToday = 6.9;

  if (currencySelect.value === "dolar") {
    currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(inputCurrencyValue / dolarToday);
  }

  if (currencySelect.value === "euro") {
    currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
      style: "currency",
      currency: "EUR",
    }).format(inputCurrencyValue / euroToday);
  }
  if (currencySelect.value === "libra"){
    currencyValueConverted.innerHTML = new Intl.NumberFormat("en-GB",{
      style: "currency",
      currency: "GBP",
   } ).format(inputCurrencyValue / libraToday);
  }

  currencyValuetoConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(inputCurrencyValue);
}

// 🔹 Agora a função está FORA de convertValues()
function changeCurrency() {
  console.log("changeCurrency mudou");
  const currencyName = document.getElementById("currency-name");
  const currencyImage = document.querySelector(".currency-img");

  if (currencySelect.value === "dolar") {
    currencyName.innerHTML = "Dólar Americano";
    currencyImage.src = "./assets/estados-unidos (1) 1.png";
  }

  if (currencySelect.value === "euro") {
    currencyName.innerHTML = "Euro";
    currencyImage.src = "./assets/designsemnome3.png";
  }
  if (currencySelect.value === "libra"){
    currencyName.innerHTML = "libra";
    currencyImage.src = "./assets/libra.png";
  }

  // Atualiza a conversão automaticamente ao trocar a moeda
  convertValues();
}

// 🔹 Agora o addEventListener consegue achar a função
currencySelect.addEventListener("change", changeCurrency);
convertButton.addEventListener("click", convertValues);
