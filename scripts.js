const url = "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/usd.json";
let rate = document.querySelector("h2");
let currency = "eur"
const currencyList = document.querySelectorAll("ul li");
const spanTag = document.querySelector("span")


const getRate = function() {
    //fetch data
    fetch(url)
        .then(response => response.json())
        .then(data => {
            rate.innerHTML = data.usd[currency];
        })
}
//run this on load 
getRate();

currencyList.forEach(link => {
    link.addEventListener("click", function(){
        currency = link.getAttribute("data-currency");
        getRate();

        currencyList.forEach(link => link.classList.remove("selected"))
        link.classList.add("selected");
        spanTag.innerHTML = currency.toUpperCase();

    })

})
