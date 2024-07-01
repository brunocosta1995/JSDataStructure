let twentyThree = 'XXIII';
let romanNumerals = ['XXI', 'XXII'];

romanNumerals.unshift('XIX', 'XX'); //adiciona no começo do array
romanNumerals.push(twentyThree); //adiciona no final do array

console.log(romanNumerals);


let greetings = ['whats up?', 'hello', 'see ya!'];


let popped = greetings.pop(); //retorna um elemento do fim de um array

greetings.pop(); //remove um elemento do fim de um array

greetings.shift(); //remove um elemento do início
console.log(greetings);
console.log(popped);

//splice() remover qualquer número de elementos consecutivos de qualquer lugar no array.
let array2 = ['today', 'was', 'not', 'so', 'great'];
array2.splice(2, 2);
console.log(array2);

let array = ['I', 'am', 'feeling', 'really', 'happy'];
let newArray = array.splice(3, 2); 
console.log(newArray);

//splice() para substituir valores removidos
const numbers = [10, 11, 12, 12, 15];
const startIndex = 3;
const amountToDelete = 1;
numbers.splice(startIndex, amountToDelete, 13, 14);
console.log(numbers);

//slice() - extrai um determinado número de elementos para um novo array sem incluir o seu próprio
//o primeiro é o índice aonde começar a extração e o segundo é o índice no qual parar a extração (a extração ocorrerá até esse índice mas não o incluirá).
let weatherConditions = ['rain', 'snow', 'sleet', 'hail', 'clear'];
let todaysWeather = weatherConditions.slice(0, 3);
console.log(weatherConditions);
console.log(todaysWeather);


//spread operator [...array]
let thisArray = ['sage', 'rosemary', 'parsley', 'thyme'];
let thatArray = ['basil', 'cilantro', ...thisArray, 'coriander'];


//indexof() - retorna o indice de um determinado elemento no array, se o elemento não existir retorna -1
let fruits = ['apples', 'pears', 'oranges', 'peaches', 'pears'];

console.log(fruits.indexOf('dates'));
console.log(fruits.indexOf('oranges'));
console.log(fruits.indexOf('pears'));


//Objects

//Verificar propriedades dos objetos
/*users = {
    Alan: ""
}
console.log(users.hasOwnProperty('Alan')); //retorna true (ou false)
console.log('Alan' in users);*/              // retorna true (ou false)

//LAÇO for in com objetos para acessar todos as propriedades dos objetos
const refrigerator = {
    'milk': 1,
    'eggs': 12,
  };
  
  for (const food in refrigerator) {
    console.log(food, refrigerator[food]);
  }
  const users = {
    Alan: {
      online: false
    },
    Jeff: {
      online: true
    },
    Sarah: {
      online: false
    }
  }

  function countOnline(allUsers) {
  let i = 0;
  for (const user in allUsers) {
    if (allUsers[user].online) {
      i++
    }
  }
  return i;
  }
  console.log(countOnline(users));


  //Object Keys() - recebe um obj como parâmetro e retorna um array com as propriedades desse objeto
  let names = {
    Alan: {
      age: 27,
      online: false
    },
    Jeff: {
      age: 32,
      online: true
    },
    Sarah: {
      age: 48,
      online: false
    },
    Ryan: {
      age: 19,
      online: true
    }
  };
  
  function getArrayOfUsers(obj) {
    let arr = []
  return arr = Object.keys(obj);
  }
//   deve mostrar um array com ["Alan", "Jeff", "Sarah", "Ryan"]
  console.log(getArrayOfUsers(names));




