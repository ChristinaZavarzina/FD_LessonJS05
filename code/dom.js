"use strict";

const dataExchange = {"date":`${getUserDate()} ${getUserTime()}`, "bank":"PB", "baseCurrency":980, "baseCurrencyLit":"UAH", "exchangeRate": [
  {"baseCurrency":"UAH", "currency":"AUD", "nameCurr":"Австралійський долар", "saleRateNB":24.4955000, "purchaseRateNB":24.4955000, "flag":"-623px -7px"},
  {"baseCurrency":"UAH", "currency":"AZN", "nameCurr":"Азербайджанський манат", "saleRateNB":21.5426000, "purchaseRateNB":21.5426000, "flag":"1px -55px"},
  {"baseCurrency":"UAH", "currency":"BYN", "nameCurr":"Білоруський рубль", "saleRateNB":13.2919000, "purchaseRateNB":13.2919000, "flag":"-95px -102px"},
  {"baseCurrency":"UAH", "currency":"CAD", "nameCurr":"Канадський долар", "saleRateNB":27.0138000, "purchaseRateNB":27.0138000, "flag":"-191px -102px"},
  {"baseCurrency":"UAH", "currency":"CHF", "nameCurr":"Швейцарський франк", "saleRateNB":39.9635000, "purchaseRateNB":39.9635000, "saleRate":41.2500000, "purchaseRate":39.9600000, "flag":"-431px -102px"},
  {"baseCurrency":"UAH", "currency":"CNY", "nameCurr":"Китайський юань", "saleRateNB":5.3142000, "purchaseRateNB":5.3142000, "flag":"-671px -102px"},
  {"baseCurrency":"UAH", "currency":"CZK", "nameCurr":"Чеська крона", "saleRateNB":1.6900000, "purchaseRateNB":1.6900000, "saleRate":1.7450000, "purchaseRate":1.6925000, "flag":"-287px -150px"},
  {"baseCurrency":"UAH", "currency":"DKK", "nameCurr":"Данська крона", "saleRateNB":5.3405000, "purchaseRateNB":5.3405000, "flag":"-431px -150px"},
  {"baseCurrency":"UAH", "currency":"EUR", "nameCurr":"Евро", "saleRateNB":39.7812000, "purchaseRateNB":39.7812000, "saleRate":40.9000000, "purchaseRate":39.9000000, "flag":"-191px -199px"},
  {"baseCurrency":"UAH", "currency":"GBP", "nameCurr":"Фунт стерлінгів", "saleRateNB":45.1220000, "purchaseRateNB":45.1220000, "saleRate":46.7600000, "purchaseRate":45.2800000, "flag":"-575px -199px"},
  {"baseCurrency":"UAH", "currency":"GEL", "nameCurr":"Грузинський ларі", "saleRateNB":13.9965000, "purchaseRateNB":13.9965000, "flag":"-671px -199px"},
  {"baseCurrency":"UAH", "currency":"HUF", "nameCurr":"Угорський форинт", "saleRateNB":0.1045800, "purchaseRateNB":0.1045800, "flag":"1px -294px"},
  {"baseCurrency":"UAH", "currency":"ILS", "nameCurr":"Ізраїльський шекель", "saleRateNB":10.1950000, "purchaseRateNB":10.1950000, "flag":"-191px -294px"},
  {"baseCurrency":"UAH", "currency":"JPY", "nameCurr":"Японська єна", "saleRateNB":0.2758400, "purchaseRateNB":0.2758400, "flag":"-671px -294px"},
  {"baseCurrency":"UAH", "currency":"KZT", "nameCurr":"Казахстанський теньге", "saleRateNB":0.0811950, "purchaseRateNB":0.0811950, "flag":"-431px -342px"},
  {"baseCurrency":"UAH", "currency":"MDL", "nameCurr":"Молдовський лей", "saleRateNB":1.9886000, "purchaseRateNB":1.9886000, "flag":"-335px -391px"},
  {"baseCurrency":"UAH", "currency":"NOK", "nameCurr":"Норвезька крона", "saleRateNB":3.5056000, "purchaseRateNB":3.5056000, "flag":"-431px -294px"},
  {"baseCurrency":"UAH", "currency":"PLN", "nameCurr":"Польський злотий", "saleRateNB":8.5002000, "purchaseRateNB":8.5002000, "saleRate":8.7900000, "purchaseRate":8.5200000, "flag":"-719px -487px"},
  {"baseCurrency":"UAH", "currency":"SEK", "nameCurr":"Шведська крона", "saleRateNB":3.5210000, "purchaseRateNB":3.5210000, "flag":"-719px -535px"},
  {"baseCurrency":"UAH", "currency":"SGD", "nameCurr":"Сінгапурський долар", "saleRateNB":27.5200000, "purchaseRateNB":27.5200000, "flag":"1px -582px"},
  {"baseCurrency":"UAH", "currency":"TMT", "nameCurr":"Туркменський манат", "saleRateNB":10.4482000, "purchaseRateNB":10.4482000, "flag":"-287px -631px"},
  {"baseCurrency":"UAH", "currency":"TRY", "nameCurr":"Турецька ліра", "saleRateNB":1.9077000, "purchaseRateNB":1.9077000, "flag":"-431px -631px"},
  {"baseCurrency":"UAH", "currency":"USD", "nameCurr":"Долари США", "saleRateNB":36.5686000, "purchaseRateNB":36.5686000, "saleRate":37.7500000, "purchaseRate":37.2500000, "flag":"1px -679px"}  
]
}
console.log(dataExchange);

function getUserDate(t=new Date()) {
  let y = t.getFullYear();
  let m = addZero(t.getMonth() + 1);
  let d = addZero(t.getDate());
  return `${d} ${m}`;
}
function getUserTime(t=new Date()) {
  let h = addZero(t.getHours());
  let min = addZero(t.getMinutes());
  return `${h} ${min}`;
}
function addZero(zero) {
  return (zero < 10) ? '0' + zero : zero;
}

function createCurrency(data) {
  function createHeader(data) {
    const headerBlock = document.createElement('header');
    const body = document.body;
    body.prepend(headerBlock);
    const divContainer = document.createElement('div');
    divContainer.className = 'container';
    headerBlock.prepend(divContainer)


    function createRedHeader(data) {
      const divBlock = document.createElement('div');
      divBlock.className = 'datetime';
      divContainer.prepend(divBlock);
      const divText = document.createElement('div');
      divText.textContent = `Дата Date`;
      divBlock.prepend(divText);
      const divDate = document.createElement('div');
      divDate.className = 'date__time';
      divDate.textContent = `${getUserDate()}`;
      divText.after(divDate);
      const divText1 = document.createElement('div');
      divText1.textContent = 'Час Time';
      divDate.after(divText1);
      const divTime = document.createElement('div');
      divTime.className = 'date__time';
      divTime.textContent = `${getUserTime()}`;
      divText1.after(divTime);
    }
    createRedHeader(data);
  
    function createWhiteHeader(data) {
      const divBlock = document.createElement('div');
      divBlock.className = 'header__title';
      divContainer.append(divBlock);
      const divText = document.createElement('div');
      divText.textContent = `КУРСИ ОБМІНУ ВАЛЮТ`;
      divBlock.prepend(divText);
      const divText1 = document.createElement('div');
      divText1.className = 'text__eng';
      divText1.textContent = `EXCHANGE RATES`;
      divText.after(divText1);
    }
    createWhiteHeader(data);
  }
  createHeader(data);

  function createMain(data) {
    const headBlock = document.querySelector("header");
    const mainBlock = document.createElement('main');
    headBlock.after(mainBlock);

    function createTable(data) {
      const divContainer = document.createElement('div');
      divContainer.className = 'container';
      mainBlock.prepend(divContainer);
      const tableBlock = document.createElement('table');
      divContainer.prepend(tableBlock);

      function thead(data) {
        const theadBlock = document.createElement('thead');
        tableBlock.prepend(theadBlock);
        const trBlock = document.createElement('tr');
        theadBlock.append(trBlock);
        for (let i = 0; i < 5; i++) {
          const thBlock = document.createElement('th');
          const spanTh = document.createElement('span');
          if (i === 3) { 
            thBlock.textContent = `Покупка`;
            spanTh.textContent = 'We buy at';
            thBlock.append(spanTh);
          } 
          if (i === 4) {
            thBlock.textContent = `Продажа`;
            spanTh.textContent = 'We set at';
            thBlock.append(spanTh);
          }
          trBlock.append(thBlock);
        }
      }
      thead(data);

      function tbody(data) {
        const tbodyBlock = document.createElement('tbody');
        tableBlock.append(tbodyBlock);
        data.exchangeRate.forEach(elemArr => {
          const trBlock = document.createElement('tr');
          tbodyBlock.append(trBlock);
          const tdBlock1 = document.createElement('td');
          trBlock.append(tdBlock1);
          const divBlock1 = document.createElement('div');
          divBlock1.className = 'flag__img';
          divBlock1.style.backgroundPosition = `${elemArr.flag}`;
          tdBlock1.append(divBlock1);

          const tdBlock2 = document.createElement('td');
          tdBlock2.className = 'name';
          tdBlock2.textContent = `${elemArr.nameCurr}`;
          tdBlock1.after(tdBlock2);

          const tdBlock3 = document.createElement('td');
          tdBlock3.className = 'curr';
          tdBlock3.textContent = `${elemArr.currency}`;
          tdBlock2.after(tdBlock3);

          const tdBlock4 = document.createElement('td');
          tdBlock4.className = 'sale';
          tdBlock4.textContent = addZero(`${elemArr.saleRateNB.toFixed(2)}`);
          tdBlock3.after(tdBlock4);

          const tdBlock5 = document.createElement('td');
          tdBlock5.className = 'purchase';
          tdBlock5.textContent = addZero(`${elemArr.purchaseRateNB.toFixed(2)}`);
          tdBlock4.after(tdBlock5);
        })
      }
      tbody(data);
    }
    createTable(data);
  }
  createMain(data);
}
createCurrency(dataExchange);