let eye = document.querySelector('.bxs-hide')
let eyeShow = document.querySelector('.box-show')
let input = document.querySelector('.input')
let cases = document.querySelector('.cases')




// ?Change input types
eye.addEventListener('click', () => {
  eye.style.display = 'none';
  eyeShow.style.display = 'block'
  input.type='text'
})
eyeShow.addEventListener('click', () => {
  eye.style.display = 'block';
  eyeShow.style.display = 'none'
  input.type='password'
})

// ?Show Cases
input.addEventListener('focus', () => {
  cases.style.display = 'block'
})

// ?Input works

input.addEventListener('keyup', (e) => {
  e.preventDefault()
  let inputValue = input.value
  let moreP = document.querySelector('.more')
  let moreX = document.querySelector('.more-x')
  let moreCheck = document.querySelector('.more-check')

  let upperP = document.querySelector('.uppercase')
  let upperX = document.querySelector('.upper-x')
  let upperCheck = document.querySelector('.upper-check')

  let numberP = document.querySelector('.number')
  let numberX = document.querySelector('.number-x')
  let numberCheck = document.querySelector('.number-check')

  let specialP = document.querySelector('.special-caracter')
  let specialX = document.querySelector('.special-x')
  let specialCheck = document.querySelector('.special-check')


  if (inputValue.length >= 8) {
    moreP.style.color = '#fff'
    moreX.style.display = 'none'
    moreCheck.style.display = 'block'
  } else {
    moreP.style.color = '#999'
    moreX.style.display = 'block'
    moreCheck.style.display = 'none'
  }

  if (inputValue.match(/[A-Z]/)) {
    upperP.style.color = '#fff'
    upperX.style.display = 'none'
    upperCheck.style.display = 'block'
  } else {
    upperP.style.color = '#999'
    upperX.style.display = 'block'
    upperCheck.style.display = 'none'
  }

  if (inputValue.match(/[1-9]/)) {
    numberP.style.color = '#fff'
    numberX.style.display = 'none'
    numberCheck.style.display = 'block'
  } else {
    numberP.style.color = '#999'
    numberX.style.display = 'block'
    numberCheck.style.display = 'none'
  }

  if (inputValue.match(/[!\@\#\$\%\^\&\*\-\_\=\+\|\{\}\:\;\'\"\,\.\/\?\>\<]/)) {
    specialP.style.color = '#fff'
    specialX.style.display = 'none'
    specialCheck.style.display = 'block'
  } else {
    specialP.style.color = '#999'
    specialX.style.display = 'block'
    specialCheck.style.display = 'none'
  }
})