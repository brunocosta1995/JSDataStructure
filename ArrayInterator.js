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
//filter
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

/*reduce
some
every
findIndex
forEach*/
