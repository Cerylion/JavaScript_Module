document.addEventListener('DOMContentLoaded', () => {
  const container = document.querySelector('#container')

  const h1 = document.createElement('h1')
  const p = document.createElement('p')

  const name = 'Clase'

  const scrollLocationP = p.offsetTop
  const scrollLocationH = h1.offsetTop

  h1.innerHTML = `Hola ${name}, ${scrollLocationH}px`
  p.innerHTML = `este es un parrafo cool, ${scrollLocationP}px`
  h1.style.color = 'Green'
  h1.setAttribute('id', 'titulo')
  // h1.removeAttribute('style') // esto le quitaría el color, porque borra el estilo

  container.append(p)
  container.prepend(h1) // esto va a agregar h1 al inicio del container
})
