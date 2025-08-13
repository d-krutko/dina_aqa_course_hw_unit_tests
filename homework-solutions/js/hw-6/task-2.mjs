const competitorPizzas = ['Peperoni', 'Caprichosa', 'Diablo', '4 cheeses', 'hawai'];
const myPizzasT1 = ['Peperoni', 'Margherita', 'Diablo', 'Vegetarian'];
const myPizzasT2 = ['Peperoni', 'Caprichosa', 'Diablo', '4 cheeses', 'hawai'];

let resultUnique;
let resultNull;

let competitorPizzasLower = competitorPizzas.map(pizza => pizza.toLowerCase());
const uniquePizzasT1 = [];

for (const myPizza of myPizzasT1) {
  if (!competitorPizzasLower.includes(myPizza.toLowerCase())) {
    uniquePizzasT1.push(myPizza);
  }
}

if (uniquePizzasT1.length > 0) {
  resultUnique = uniquePizzasT1;
} else {
  resultNull = null;
}

const uniquePizzasT2 = [];

for (const myPizza of myPizzasT2) {
  if (!competitorPizzasLower.includes(myPizza.toLowerCase())) {
    uniquePizzasT2.push(myPizza);
  }
}

if (uniquePizzasT2.length > 0) {
  resultUnique = uniquePizzasT2;
} else {
  resultNull = null;
}
console.log(resultUnique);
console.log(resultNull);


export { resultNull, resultUnique };
