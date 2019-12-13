import test from 'ava'
import * as Window from 'window'
import withoutPropagation from '../source'

test('stops propagation', t => {
  const window = new Window()

  const div = window.document.createElement('div')
  const button = window.document.createElement('button')
  const p = window.document.createElement('p')

  div.append(button)
  div.append(p)

  div.addEventListener('click', () => {
    p.textContent = 'click on div'
  })

  button.addEventListener(
    'click',
    withoutPropagation(() => {
      p.textContent = 'click on button'
    })
  )

  button.click()

  t.is(p.textContent, 'click on button')
})
