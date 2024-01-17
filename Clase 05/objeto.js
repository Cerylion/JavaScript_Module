const saludo = 'Hola-Mundo-Con-Mas-Palabras'

console.log(saludo.split('-')) // con esto quito los espacios
console.log(saludo)
const saludoArray = saludo.split('-')
console.log(saludo)

console.log(saludoArray)
console.log(saludoArray.sort())
saludoArray.sort()
console.log(saludoArray)


// tarea : funcion que sepa si una palabra o frase es un palindromo .reverse() en la palabra con .toLowerCase()
// funcio nque quite los espacio s de un String

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
