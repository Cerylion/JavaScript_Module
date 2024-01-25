/* const saludo = 'Hola-Mundo-Con-Mas-Palabras'

console.log(saludo.split('-')) // con esto quito los espacios
console.log(saludo)
const saludoArray = saludo.split('-')
console.log(saludo)

console.log(saludoArray)
console.log(saludoArray.sort())
saludoArray.sort()
console.log(saludoArray) */

// tarea : funcion que sepa si una palabra o frase es un palindromo .reverse() en la palabra con .toLowerCase()
// funcio nque quite los espacio s de un String
/*
let word = "deified"
let otherWord = "Intensity"
const phrase = "Is This The Real World?"

let reverseArray = otherWord.split('').reverse()
let wordReverse = ''

reverseArray.forEach(element => {
  wordReverse = wordReverse + element
});
console.log(wordReverse)

//console.log(wordReverse)

let numArray = []
numArray.push(2)
console.log(numArray)

console.log(word.toUpperCase())
 */

/* for (num of nums) {
  newNum.push(num*2)
  console.log(newNum)
} */
const nums = [1, 2, 3, 4, 5, 6, 7, 8]

const doubleNum = nums.reduce((prev, curr) => {
  prev.push(curr * 2)
  return prev
}, [])
console.log(doubleNum)

const double = []
// console.log(newNum)
