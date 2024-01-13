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

  if (input1 >= input2) {
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
