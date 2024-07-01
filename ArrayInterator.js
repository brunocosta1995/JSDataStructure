//Map
//Normalização de dados em um array de objetos:
const produtos = [
  { nome: "laptop", preco: 1200 },
  { nome: "TV", preco: 500 },
  { nome: "geladeira", preco: 2000 },
];
const newProdutos = produtos.map((prodItem) => ({
  ...prodItem,
  preco: prodItem.preco * 0.9,
}));
const showData = () => {
  return newProdutos.map((item) => item.preco);
};
console.log(showData());
/*-------------------------------------------------------------------------------------------------------------*/
//filter - retorna um array
// Filtrar números pares de um array:
const numbers = [1, 2, 3, 4, 5, 6];
const evenNumbers = numbers.filter((num) => num % 2 === 0);
// evenNumbers será [2, 4, 6]
// Filtrar elementos de uma matriz com base em uma condição:
const students = [
  { name: "Alice", grade: 80 },
  { name: "Bob", grade: 55 },
  { name: "Charlie", grade: 90 },
];

const passedStudents = students.filter((student) => student.grade >= 60);
// passedStudents será [{ name: 'Alice', grade: 80 }, { name: 'Charlie', grade: 90 }]

// Filtrar strings com mais de três caracteres:
const words = ["apple", "banana", "grape", "kiwi", "orange"];
const longWords = words.filter((word) => word.length > 3);
// longWords será ['apple', 'banana', 'grape', 'orange']

// Filtrar objetos com base em múltiplos critérios:
const products = [
  { name: "Laptop", price: 1200, inStock: true },
  { name: "Mouse", price: 25, inStock: true },
  { name: "Keyboard", price: 60, inStock: false },
  { name: "Headphones", price: 40, inStock: true },
];
console.log(products.filter((item) => item.inStock && item.price > 50));

// Filtrar itens de uma lista com base em uma entrada de usuário:
const tasks = [
  { id: 1, description: "Comprar mantimentos" },
  { id: 2, description: "Estudar JavaScript" },
  { id: 3, description: "Fazer exercícios de programação" },
  { id: 4, description: "Pagar contas" },
];
const keyWord = "javascript";
const newItem = tasks.filter((item) =>
  item.description.toLowerCase().includes(keyWord.toLowerCase())
);
console.log(newItem);

function numPrimo(valor) {
  for (let i = 2; i < valor; i++) {
    if (valor % i === 0) return false;
  }
  return valor > 1;
}

const arrNum = [2, 3, 4, 5, 6, 7, 8, 9, 10];

const primos = arrNum.filter(numPrimo);
console.log(primos);
/*---------------------------------------------------------------------------*/
//find - primeiro elemento dentro do array que satisfaz uma condição especificada
const nums = [1, 3, 5, 4, 7, 8];
const firstEven = nums.find((num) => num % 2 === 0);
console.log(firstEven); // Saída: 4

// Encontrar o primeiro objeto em um array com uma propriedade específica:
const persons = [
  { name: "Alice", age: 30 },
  { name: "Bob", age: 25 },
  { name: "Charlie", age: 35 },
];
const person = persons.find((p) => p.age === 25);
console.log(person); // Saída: { name: 'Bob', age: 25 }

//   Encontrar o primeiro elemento que satisfaça uma condição complexa:
const numss = [30, 45, 60, 75, 90, 55];

const firstNumber = numss.find(
  (num) => num % 3 === 0 && num % 5 === 0 && num > 50
);
console.log(firstNumber); // Saída: 60

// Buscar em um array de objetos aninhados:
const dataStudents = [
  { name: "Alice", courses: ["Physics", "Mathematics", "Chemistry"] },
  { name: "Bob", courses: ["Biology", "Mathematics", "History"] },
  { name: "Charlie", courses: ["Mathematics", "Literature", "Art"] },
];

const findStudent = dataStudents.find((student) =>
  student.courses.includes("Mathematics")
);
console.log(findStudent); // Saída: { name: 'Alice', courses: ['Physics', 'Mathematics', 'Chemistry'] }

/*---------------------------------------------------------------------------*/
/*reduce - utilizada para iterar sobre um array e acumular um resultado final.
array.reduce(callback(acumulador, valorAtual, índice, array), valorInicial);*/

//soma
const numeros = [1, 2, 3, 4, 5];
const soma = numeros.reduce((acumulador, valorAtual) => {
  return acumulador + valorAtual;
}, 0);
console.log(soma); // Saída: 15

//Encontrando o valor máximo em um array
const arNum = [1, 2, 3, 4, 5];

const maximo = arNum.reduce((acumulador, valorAtual) => {
  return Math.max(acumulador, valorAtual);
}, -Infinity);
console.log(maximo); // Saída: 5

// Contando a ocorrência de elementos em um array
const frutas = ['banana', 'maçã', 'laranja', 'maçã', 'banana', 'maçã'];

const contagemFrutas = frutas.reduce((acumulador, fruta) => {
  if (acumulador[fruta]) {
    acumulador[fruta]++;
  } else {
    acumulador[fruta] = 1;
  }
  return acumulador;
}, {});

console.log(contagemFrutas); // Saída: { banana: 2, maçã: 3, laranja: 1 }

//Agrupando objetos por uma propriedade
const pessoas = [
  { nome: 'Alice', idade: 21 },
  { nome: 'Bob', idade: 25 },
  { nome: 'Carlos', idade: 21 },
  { nome: 'Daniela', idade: 25 },
];

const agrupadoPorIdade = pessoas.reduce((acumulador, pessoa) => {
  const idade = pessoa.idade;
  if (!acumulador[idade]) {
    acumulador[idade] = [];
  }
  acumulador[idade].push(pessoa);
  return acumulador;
}, {});

console.log(agrupadoPorIdade);
// Saída: 
// {
//   '21': [ { nome: 'Alice', idade: 21 }, { nome: 'Carlos', idade: 21 } ],
//   '25': [ { nome: 'Bob', idade: 25 }, { nome: 'Daniela', idade: 25 } ]
// }

/*---------------------------------------------------------------------------*/
/*findIndex - usada para encontrar o índice do primeiro elemento em um array que satisfaz uma função de teste fornecida
array.findIndex(callback(element[, index[, array]])[, thisArg])*/

//Encontrar o índice de um número em um array
const numb = [4, 9, 16, 25, 29];
const index = numb.findIndex((num) => num > 10);
console.log(index); // Saída: 2

//Encontrar o índice de um objeto em um array de objetos
const people = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 },
  { name: "Charlie", age: 35 },
  { name: "David", age: 40 }
];
const ind = people.findIndex((person) => person.age > 30);
console.log(ind); // Saída: 2

//Uso com thisArg
const arNumb = [10, 20, 30, 40];
const obj = {
  threshold: 25,
  isAboveThreshold: function(element) {
    return element > this.threshold;
  }
};
const findInd = arNumb.findIndex(function(element) {
  return this.isAboveThreshold(element);
}, obj);
console.log(findInd); // Saída: 2
/*---------------------------------------------------------------------------*/


/*
some
every

forEach*/
