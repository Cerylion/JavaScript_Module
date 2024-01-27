document.addEventListener('DOMContentLoaded', () => {
  const container = document.getElementById('container')
  const input = document.getElementById('Stuff')
  const addStuff = document.getElementById('addStuff')

  const list = document.createElement('ul')
  container.append(list)

  const adder = () => {
    const theStuff = input.value
    const listStuff = document.createElement('li')
    const deleteButton = document.createElement('button')
    listStuff.innerHTML = theStuff
    deleteButton.innerHTML = 'X'
    listStuff.append(deleteButton)
    list.append(listStuff)
    input.value = ''

    deleteButton.addEventListener('click', event => {
      const li = event.target
      li.parentNode.remove()
    })
  }
  addStuff.addEventListener('click', adder)
})
