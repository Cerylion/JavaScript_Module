//console.log("hola mundo"); esto es un comentario

/* let suma = 2 + 2;

console.log(suma); */

/* //funcion con sumatorias
//funcion con strings
//como declarar

const quieroSumar = function sumar(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    console.error('algo no es un número');
    return;
  }
  let resultado = a + b;

  return resultado;
}

console.log(quieroSumar(3,42)) */

//tarea, una calculadora que suma reste multiplique y divide

/* function salute(nombre) {
  if (typeof nombre !== 'string') {
    console.error('not a real name');
    return;
  }
  console.log(`${nombre}, bienvenido al futuro`)
  return;
}

console.log(salute("Pedro")) */


/// funcion para conseguir el valor de 3 inputs y además saber cual es el mayor...

const getInputs = () => {
  let input1 = parseInt(document.getElementById("num1").value);
  let input2 = parseInt(document.getElementById("num2").value);
  let input3 = parseInt(document.getElementById("num3").value);
  let resultF;

  if (input1 >= input2 && input1 >= input3) {
    resultF = input1;
  } else if (input2 > input3) {
    resultF = input2;
  } else {resultF = input3}

  return document.getElementById("result").innerHTML = `${resultF} es el número mayor`
}

/// numero mayor ///
/*
function greaterNum(num1, num2, num3) {
  if (typeof num1 !== 'number' || typeof num2 !== 'number' || typeof num3 !== 'number') {
    console.error('Stop trying to input things that are not numbers')
    return
  }
  let greater;
  if (num1 >= num2 && num1 > num3) {
    greater = num1
  }
  if (num2 >= num3) {
    greater = num2
  } else {
    greater = num3
  }

  // /* console.log(`${greater} is the greater number here!`)
  return document.getElementById("numMay").innerHTML = `${greater} is the greater number here!`;
}

console.log(greaterNum(3, 5, 50))
console.log(greaterNum(3, 5, -50))
console.log(greaterNum(3, 75, 50))
console.log(greaterNum(7, 'B', '4j')) */

/// es o no vocal response

const getChar = () => {
  let charVal = document.getElementById("char").value;
  if (isNaN(charVal) === false)
  return document.getElementById("vowelResult").innerHTML = `${charVal} is not a letter`;
  console.log(typeof charVal);
  trueChar = charVal.toLowerCase();
  const vowelBox = ['a', 'e', 'i', 'o', 'u'];
  if (vowelBox.includes(trueChar))
  return document.getElementById("vowelResult").innerHTML = `${charVal} is a vowel`;
  return document.getElementById("vowelResult").innerHTML = `${charVal} is a consonant`;
}

///  Es O No Es Vocal
/*
function esVocal(char) {
  if (isNaN(char) === false)
  return console.error(`${char} is not a letter`);
  trueChar = char.toLowerCase();
  const vowelBox =['a', 'e', 'i', 'o', 'u']
  if (vowelBox.includes(trueChar))
  return console.log(`${char} is a vowel`);
  return console.log(`${char} is a consonant`);
}

esVocal(8)
esVocal('9')
esVocal('A')
esVocal('F')
*/

/// generar caracteres response

const multiChar = () => {
let charMander = document.getElementById("missingNo").value
let pikaChu = parseInt(document.getElementById("rareCandy").value)
let clones = charMander.repeat(pikaChu)
return document.getElementById("PokemonBlueIsBugged").innerHTML = clones
}

///  generar caracteres
/*
function generar_caracteres(num, char) {
  if (typeof num !== 'number')
  return console.error("I simply cannot do this if don't give me a number");
  return char.repeat(num);
}

console.log(generar_caracteres(8, 'n'));
console.log(generar_caracteres(3, 'F'));
console.log(generar_caracteres(5, 'g'));
console.log(generar_caracteres('b', 7));

 */

/// revisar si es o no palindrome - y quitar espacios de un string

const checkPalindrome = () => {
  let arrayReverse = '';
  let oneWord = '';
  let word = '';
  let wordReverse = '';
  let wordOne = '';


  word = document.getElementById('palindrome').value;
  oneWord = word.toLowerCase().split(' ').forEach(element => {
    wordOne += element; /// oneWord quita los espacios de los strings
  })
  arrayReverse = wordOne.split('').reverse().forEach(element => {
    wordReverse += element;
  })
  if (wordReverse == wordOne)
  return document.getElementById("palinResult").innerHTML = `${word} is a Palindrome`;
  return document.getElementById("palinResult").innerHTML = `${word} is definitely NOT a Palindrome`;
}


/// Space Destroyer

const destroySpaces = () => {
  let result = '';
  let noSpaces = document.getElementById("longPhrase").value.split(' ').forEach(word => {
    result += word;
  })
  return document.getElementById("noSpaceResult").innerHTML = result;
}


/// Largest Number in Array Finder
let numArray = []

const addToArray = () => {
  numArray.push(parseInt(document.getElementById("numToAppend").value))
  return document.getElementById("numArray").innerHTML = numArray
}

const findLargestNum = () => {
  let result = Number.NEGATIVE_INFINITY;
  for (number of numArray) {
    if (number > result) result = number
  }
  return document.getElementById("largestNumResult").innerHTML = `${result} is the Largest Number in the Array`
}

/// ONLY EVENS
const findEvens = () => {
  let evens = [];
  for (number of numArray) {
    if (number % 2 === 0) evens.push(number)
  }
  return document.getElementById("onlyEvenResult").innerHTML = evens
}


/// Verificador de existencia de string dentro de arreglo
let belly = []
const consume = () => {
  belly.push(document.getElementById("stringInput").value)
  return document.getElementById("belly").innerHTML = belly
}

const checkStomach = () => {
  let result = ''
  let stringFood = document.getElementById("stringInput").value
  for (food of belly) {
    if (food == stringFood) {
    result = true
    } else {
      result = false
    }
}
return document.getElementById("alreadyEaten").innerHTML = result
}

/// verificar si alguna letra es mayuscula en una palabra

const checkUpperCase = () => {
  let result = false
  let newWord = document.getElementById("inputWord").value
  let arrayWord = newWord.split('')
  for (letter of arrayWord) {
    if (letter === letter.toUpperCase())
      result = true
  }
  if (result == true)
  return document.getElementById("upperCaseResult").innerHTML = `${newWord} HAS UpperCases`
  return document.getElementById("upperCaseResult").innerHTML = `${newWord} does not have UpperCases`
}



/* /// contador con while

let counter = 0;

while (counter <= 4) {
  console.log(counter)
  counter++
}

/// contadopr con for

for (let i = 0; i <= 4; i++) {
  console.log(i)
}

/// for in

const letters = [
  'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i'
]

for (letter in letters) {
  console.log(letter) // esto imprime el indice de cada item
}

/// for of

for (letter of letters) {
  console.log(letter) // esto imprime el valor de cada item
}


// y con objetos?

Object.keys(objeto)  // esto da un array con los nombres de las propiedades
Object.entries(mascota) // esto da un array lleno de arrays con ['propiedad', 'valor'] */
