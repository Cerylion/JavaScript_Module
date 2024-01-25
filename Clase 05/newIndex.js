document.addEventListener('DOMContentLoaded', () => {
  const heading = document.querySelector('h1')
  const heading2 = document.querySelector('#elID2')
  const heading3 = document.querySelector('.laClase')

  const headings = document.querySelectorAll('.laClase')

  console.log(heading2.offsetWidth)
  console.log(heading.innerHTML)
  console.log(heading2)
  console.log(heading3)
  console.log(headings)

  headings.forEach((head) => {
    console.log(head)
  })
  console.log(document.getElementById('elID').innerHTML)
  console.log(document.getElementsByClassName('laClase'))

  heading.style.color = 'green'

  document.getElementById('elID2').innerHTML = 'Las cosas buenas en la vida se hacen esperar'

  console.log(heading2.offsetWidth) // este no está funcionando bien ;_;
  console.log(document.getElementById('elID2').innerHTML.length)
  console.log(heading2.offsetWidth)
})
