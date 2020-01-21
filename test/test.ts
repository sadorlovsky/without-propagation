import test from 'ava'
import sinon from 'sinon'
import { JSDOM } from 'jsdom'
import withoutPropagation from '../source'

test('stops propagation', t => {
  const { window } = new JSDOM()

  const div = window.document.createElement('div')
  const button = window.document.createElement('button')
  div.append(button)

  const divClickSpy = sinon.spy()
  const buttonClickSpy = sinon.spy()

  div.addEventListener('click', divClickSpy)
  button.addEventListener('click', withoutPropagation(buttonClickSpy))

  button.click()

  t.true(buttonClickSpy.calledOnce)
  t.true(divClickSpy.notCalled)
})
