//Calculo fatorial
function factorialize(num) {
    let fatorial = num;
    if (num > 0) {
      for (let i = 1; i < num; i++) {
        fatorial *= i;
      }
    }
    else {
      fatorial = 1;
    }
    return fatorial;
  }
  factorialize(5);


//   Encontrar palavra com maior quantidade de caracteres
  function findLongestWordLength(str) {
    let retorno = 0;
    let arr = str.split(' ');
    arr.map(word => {
      let currentWordLength = word.length;
      retorno = Math.max(retorno, currentWordLength);
    })
    
    return retorno;
  }
  findLongestWordLength("The quick brown fox jumped over the lazy dog");

// Obter maior valor de um array de 2 dimensões e retornar o array com os maiores valores de cada array
  function largestOfFour(arr) {
    const results = [];
    for (let i = 0; i < arr.length; i++) {
      let largestNumber = arr[i][0];
      for (let j = 1; j < arr[i].length; j++) {
        if (arr[i][j] > largestNumber) {
          largestNumber = arr[i][j];
        }
      }
      results.push(largestNumber);
    }
    console.log(results)
  
    return results;
  }
  largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);

// Verifica final da string
  function confirmEnding(str, target) {
    //função endsWith() - é a alternativa
    const tam = (target.length) * -1; //para saber tamanho
    const val = str.slice(tam);
    const result = val.localeCompare(target);
    if (result === 0) {
      return true;
    } else {
      return false;
    }
  }
  confirmEnding("Bastian", "a");



  