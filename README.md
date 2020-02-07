# without-propagation [![build](https://github.com/sadorlovsky/without-propagation/workflows/build/badge.svg)](#without-propagation) [![codecov](https://codecov.io/gh/sadorlovsky/without-propagation/branch/master/graph/badge.svg)](https://codecov.io/gh/sadorlovsky/without-propagation)

## You don't want a propagation, right?

```html
<div>
  <button>Click me</button>
</div>
```

```js
const div = document.querySelector('div')
const button = document.querySelector('button')

div.addEventListener('click', (e) => {
  console.log('Catch a click on the div', e)
})

button.addEventListener('click', (e) => {
  console.log('Catch a click on the button', e)
})

button.click()

// > Catch a click on the button
// > Catch a click on the div
```

## Oh my... sure I don't

```bash
yarn add without-propagation
```

You're fine now:

```js
import withoutPropagation from 'without-propagation'

const div = document.querySelector('div')
const button = document.querySelector('button')

div.addEventListener('click', (e) => {
  console.log('The event will be never fired', e)
})

button.addEventListener('click', withoutPropagation((e) => {
  console.log('Catch a click on the button only', e)
}))

button.click()

// > Catch a click on the button only
```
