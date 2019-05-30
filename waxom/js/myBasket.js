var services = ['customize', 'develop', 'web desing', 'app desing', 'seo'];
var prices = [299.99, 500, 200, 400, 12];
var quantities = [2, 1, 3, 1, 2];

var nrRow = '';
/*var item = {
    service: services[nrRow],
    price: prices[nrRow],
    quantity: quantities[nrRow],
    countServices: prices[nrRow] * quantities[nrRow]
};*/

var basket = {
    createBasket: function (serv, pr, quant) {
      for (let i = 0; i < pr.length; i++) {
          let newItem = {
              service: serv[i],
              price: pr[i],
              quantity: quant[i],
              countServices: pr[i] * quant[i]
          }
          nrRow = i;
          console.log(nrRow);
          //let newItem = item;
          basket.items.push(newItem);
      }
    },
    countBasketPrice: function (arr) {
        let summ = 0;
        for (let i = 0; i < arr.length; i++) {
            summ += (arr[i].price * arr[i].quantity);
        }
        return summ;
    },
    items: []
}
