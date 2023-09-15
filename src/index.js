// variables
// function findX() {
//   let x = 1
//   {
//     let x= 2
//     console.log('example 1:' + x)
//   } 
//   console.log('example 2:' + x )
// }
// findX()

// IF STATEMENTS
// const a = 5
// if (true) {
//   console.log('it is truth!')
// } else {
//   console.log('it is false!')
// }

// ELSE IF
// const time = 19

// if (time < 12) {
//   console.log('Good morning!')
// } else if(time === 12) {
//   console.log('oh its moon!')
// } else if(time > 12 && time < 18) {
//   console.log('good afternoon')
// } else {
//   console.log('good evening')
// }

// logical opertor
// fruit = ['apple','banana', 'grape']
// console.log(fruit)

// and
// console.log('first statement',fruit.includes('coconut'))
// console.log('second statemnet' ,fruit.includes('apple'))
// if (fruit.includes('coconut') && fruit.includes('apple')) {
//   console.log('both exist!')
// }
//  or
// if (fruit.includes('coconut') || fruit.includes('apple')) {
//   console.log('atleast one fruit exist!' )
// }
//  not
// if (!fruit.includes('cherry')) {
//   console.log('cherry is missing!')
// }
// Ternary Opertors
// let isGameOver = false

// // if (isGameOver == true) {
// //   console.log('sorry you lost!')
// // } else {
// //   console.log('carry on playing')
// // }
// isGameOver ? console.log('sorry u lost!') : console.log('carry on playing')


// x divisible by 
// let x = 15

// if (x % 15 === 0) {
//   console.log('fizz buzz')
// } else if (x % 5 === 0) {
//   console.log('buzz')
// } else if (x % 3 === 0) {
//   console.log('fizz')
// } else {
//   console.log(x)
// }

//  for loops
//  for(let i = 0; i < 20; i++) 
     // code
//    if ((i + 1 ) % 15 === 0) {
//     console.log('fizz buzz')
//   } else if ((i + 1 ) % 5 === 0) {
//    console.log('buzz')
//   } else if ((i + 1 ) % 3 === 0) {
//      console.log('fizz')
//  } else {
//     console.log(i + 1 )
//   }
// }

//  arrays
//  let books = ['lisa', 'jennie', 'jisoo', 'rose', 'jennie']
 
//  let count = 0
//  for(let i = 0; i < books.length; i++) {
//   console.log(books[i])
//   if(books[i] === 'jennie') {
//     count = count + 1
//     console.log(count)
//   }
//  }

//  objects in arrays

//  const users = [
//   {
//     username: 'Mo24',
//     followers: 234421,
//     is_followed: true
//   },
//   {
//     username: 'RsAN',
//     followers: 45345,
//     is_followed: true
//   },
//  ]
//  console.log(users[0].username)

//  for(let i = 0; i < users.length; i++){
//   if(users[i].is_followed === true) {
//     console.log('Hi, ' + users[i].username + ' how are u?')
//   }
//  }

//  functions
//   CAMELCASE for  naming functions - best practice
//  function sendText(name , time) {
//   console.log('Hey ' + name + 'do u want to hang out? at' + time)
//  }
//  sendText('Jennie',' 7 pm')

//  let name = 'Lisa'
//  let count = 1

// eg#2
 const bob = document.querySelector('.face')
 let move = 0

 function moveBob(){
  move += 30
  console.log(move)
  bob.style.left = move + 'px'

 }
bob.addEventListener('click', moveBob)
// // eg#3
// const body = document.querySelector('body')
// function speak() {
//   console.log('greetings!')
// }

// let hello;
// hello = () => "Hello World!"
// console.log(hello());


// .concat()
// this,method does not change the existing arrays 
// it returns new array
const string = 'cheese,'
const string2= 'rose,'
const string3= 'lisa'

const newArray = string.concat(string2,string3)
console.log(newArray)

// .join
// return a NEW string
const textDisplay = document.querySelector('.text')

const emotions = ['happy ', ' sad ' ,' blessed']
const newWord = emotions.join('-')
// console.log(emotions.join(''))

textDisplay.innerHTML = newWord


// .pop()
// changes the length of the array 
// const display = document.querySelector('.display')

// const movies = ['Argo','Aliens','Fear']
// console.log(movies)
// movies.pop()
// display.innerHTML = movies

// shift
// changes the length of an array
//  const display = document.querySelector('.display')

//  const movies = ['wolf', 'jumnji', 'titanic']
//  movies.shift()
//  display.innerHTML = movies

 // unshift
 // this will change the array
//  const display = document.querySelector('.display')

//  const plays = ['Hamilton']
//  plays.unshift('Wicked', 'Cats')
//  console.log(plays)
//  display.innerHTML = plays


 // .push()
 // changes the original aarray
//  const display = document.querySelector('.display')

//  const actors = ['Angelina Jolie']
//  actors.push('Rihanna')
//  display.innerHTML = actors

 // .slice
 // it does NOT mutate arrays, it produces NEW ones

//  const maleartist = artists.slice(2,3)
//  console.log(maleartist)
//  display.innerHTML = artists

//  .splice
//  const display = document.querySelector('.display')

//  const movies = ['Titanic', 'Elf', 'Hero']
//  movies.splice(1,1, 'Mulan')
//  display.innerHTML = movies

//  let spliceArray = array.splice(start,deleteCount,replacement)


// .some()
// checks if some items in an array match a certain rule
// const display = document.querySelectorAll('.display')

// // const scores = [23, 26, 76, 59]
// // console.log(scores.some(score => score > 50))

// const countries = ['Paris', 'Philippines', 'UK']
// console.log(countries.some(country => country === 'Poland'))


// .map()
// creates a NEW Array
// Syntax:const  values2 = values.map(value => value)

// const housemates2016 = [
//   { 
//     name: 'Lisa',
//     age: 26
//   },
//   {
//     name: 'Jennie',
//     age: 27
//   },
// ]

// const housemates2023 = housemates2016.map(housemate => housemate.age + 2)
// console.log(housemates2023)


// .filter()
// creates a new array

const shows = ['ST', 'Friends', 'Naruto']

const displayShows = shows.filter((word) => word.length > 1)
console.log(displayShows)
const showDisplay = document.querySelector('.display')
showDisplay.innerHTML = displayShows

// const shows = [
//   {
//     name: 'Friends',
//     series: 1,
//     episodes: 5
//   },
//   {
//     name: 'Naruto',
//     series: 2,
//     episodes: 4
//   },
// ]
// const displayShows = shows.filter(show => show.series > 0)
// console.log(displayShows)
// const showDisplay = document.querySelector('.display')


// .reduce()

// add all the numbers together
// const scores = [4, 5, 6, 7]
// // Syntax:scores.reduce((accumulator, currentValue) => accumulator + currentValue)

// const total = scores.reduce((total, score) => total + score)
// console.log(total)

// .every()
// if everything in our array matches a rule, return value

// const animals = ['cat' , 'dog', 'rat']
// write code will return T or F if every string in array is equal to 3 in length

// const animalTotal = animals.every(animal => animal.length === 3)
// console.log(animalTotal)    

// .split()

const sentence = 'I love blackpink'

const words = sentence.split(' ')  // no space ('') if you want to get each letters
console.log(words[1])














// Array work!

// Using 'map' write a function that converts farenheit to celcius.
// eg: getCalculus([23, 140, 212, 41]) => [-5, 60, 100, 5]
// (num − 32) × 5/9 = C

// const farenheit = [23, 140, 212, 41]
// function getCelcius() {
//   return farenheit.map(value => (value - 32) * 5/9)
// }
// console.log(getCelcius())


// Using 'some' write a function that checks an array for a 'false' value
// eg: checkForFalse([11, NaN, [], {'Angels'}]) => true

// const array = [11, NaN, [], 'Angels']

// function checkForFalse() {
//   return array.some(element => !element)
// }
// console.log(checkForFalse())


//  Using 'reduce' write a function that will return the total number of characters in an array of strings
// eg: getTotal(['Rabbit, 'Football', 'Cracking]) => 22

// const words = ['Rabbit', 'Football', 'Cracking']
// function getTotal() {
//   return words.reduce((total, word) => total + word.length, 0)
// }
// console.log(getTotal())

// Using 'every' checks whether every number in an array is a square number
// eg: checkSquares([9, 16, 81]) => true

// const numbers = [9, 16, 81]
// function checkSquares(numbers) {
//   return numbers.every(number => Math.sqrt(number) % 1 === 0)
// }
// console.log(checkSquares(numbers))


// Using an array  method, write a function that retuens the string elements of an array
// that have a given length or larger
// eg: getWords(['Florida', 'dog', 'phone'], 5) => ['Florida', 'phone']

// function getWords(array, number) {
//   return array.filter(word => word.length >= number)
// }
// console.log(getWords(['Florida', 'dog', 'phone'], 5))

// Using an array method, write a function that converts an array of cm values,
// as strings, into an array of numbers.
// eg: getValues(['23cm', '5.6cm', '1000cm']) => [25, 5.6, 1000]

// function getValues(cm){
//   return cm.map(value => parseFloat(value))
// }
// console.log(getValues(['23cm', '5.6cm', '1000cm']))

// Using 'split' and 'filter' write a function that counts the number of vowels in  sentence
// eg: getVowelCount('In West Philadelphia, born and raised') => 12

// const sentence = 'In West Philadelphia, born and raised'
// const vowels = ['a', 'e', 'i', 'o', 'u','A', 'E', 'I', 'O', 'U' ]
// function getVowelCount() {
//   return sentence.split('').filter(letter => vowels.includes(letter))
// }
// console.log(getVowelCount())

// Using 'split' , 'map' , 'join' write a function that capaitalizes the 1st letterof each word 
//in a sentence
// eg: capitalise('the queens gambit') => ['The Queens Gambit']

function capitalise(title){
  return title.split(' ').map(word => word.charAt(0).toUpperCase() + word.substring(1)).join(' ')
}
console.log(capitalise('the queens gambit'))
// The End





// .addEventListener()
// Syntax: target.addEventListener(event,function)
// document.addEventlistener('DOMContentLoaded'. () = > {}) --other way of picking up javascript from html file

// const body = document.querySelector('body')

// body.addEventListener('click', function () { 
//   console.log('clicked')
// })

// remove EventListener
const circle = document.querySelector('.face')
let count = 0

function toggleColor(){
  circle.classList.toggle('yellow-face')
  count++
  console.log(count)
  if(count > 10 ) {
    circle.removeEventListener('click', toggleColor)
  } 
}
circle.addEventListener('click', toggleColor)
// eg # 2
const face = document.querySelector('.face')
let height= 0

function moveCircle() {
  height += 10
  face.style.bottom = height + 'px'
  if(height > 10 ) {
    face.removeEventListener('click', moveCircle)
  } 
}
face.addEventListener('click', moveCircle)

// .querySelector() - to get a node list
// const face = document.querySelector('.face')
// console.log(face)

// .queryElementId()
const redcircle = document.getElementById('#main')
console.log(redcircle)

const movemouth = document.querySelector('.face')
const mouth = document.querySelector('#mouth')

function control(e) {
  switch (e.key) {
    case 'ArrowUp' :
      console.log('pressed up')
      mouth.classList.remove('sad-mouth')
      mouth.classList.add('happy-mouth')
      break
    case 'ArrowDown':
       console.log('pressed down')
       mouth.classList.remove('happy-mouth')
       mouth.classList.add('sad-mouth')
       break
    default:
      console.log('key not recognised')
  }
}
document.addEventListener('keydown' , control)

















//createELement()
// const body = document.querySelector('body')
// const image = document.createElement('img')
// body.appendChild(body)
// body.appendChild(image)

//.setAttribute() - can make html elements using javascript
// image.setAttribute('src', 'src/images/naruto.jpg')
// image.setAttribute('data-id', 4)

// .getAttribute()
// const imagePath = image.getAttribute('src')

// const imageId  = image.getAttribute('data-id')

// console.log(imagePath)
// console.log(imageId)
// console.log(body)

document.addEventListener('DOMContentLoaded', () => {
  //card options
  const cardArray = [
  {
    name: 'fries',
    img: 'src/images/fries.png',
  },
  {
    name: 'cheeseburger',
    img: 'src/images/cheeseburger.png',
  },
  {
    name: 'hotdog',
    img: 'src/images/hotdog.png',
  },
  {
    name: 'ice-cream',
    img: 'src/images/ice-cream.png',
  },
  {
    name: 'milkshake',
    img: 'src/images/milkshake.png',
  },
  {
    name: 'pizza',
    img: 'src/images/pizza.png',
  },
  {
    name: 'fries',
    img: 'src/images/fries.png',
  },
  {
    name: 'cheeseburger',
    img: 'src/images/cheeseburger.png',
  },
  {
    name: 'hotdog',
    img: 'src/images/hotdog.png',
  },
  {
    name: 'ice-cream',
    img: 'src/images/ice-cream.png',
  },
  {
    name: 'milkshake',
    img: 'src/images/milkshake.png',
  },
  {
    name: 'pizza',
    img: 'src/images/pizza.png',
  },
]
  cardArray.sort(() => 0.5 - Math.random())
  console.log(cardArray)
  
  const grid = document.querySelector('.grid')
  const resultDisplay = document.querySelector('#result')

  let cardsChosen = []
  let cardsChosenIds = []
  let cardsWon = []

  function createBoard(){
    for (let i = 0; i < cardArray.length; i++){
      const card = document.createElement('img')
      card.setAttribute('src', 'src/images/blank.png')
      card.setAttribute('data-id' , i)
      card.addEventListener('click', flipCard)
      grid.appendChild(card)
    }
  }

  function flipCard(){
    let cardId = this.getAttribute('data-id')
    cardsChosen.push(cardArray[cardId].name)
    cardsChosenIds.push(cardId) // make array for cards IDs
    this.setAttribute('src', cardArray[cardId].img)
    if (cardsChosen.length === 2) {
      setTimeout(checkForMatch, 500)
    }
    console.log(cardsChosenIds)
  }

  function checkForMatch() {
    const cards = document.querySelectorAll('img')
    const optionOneId = cardsChosenIds[0]
    const optionTwoId = cardsChosenIds[1]

    if (optionOneId == optionTwoId) {
      alert('You have clicked the same image!')
      cards[optionOneId].setAttribute('src', 'src/images/blank.png')
      cards[optionTwoId].setAttribute('src', 'src/images/blank.png')
    } else if (cardsChosen[0] === cardsChosen[1]){
      alert('You have foun a match!')
      cards[optionOneId].setAttribute('src', 'src/images/white.png')
      cards[optionTwoId].setAttribute('src', 'src/images/white.png')  
      cards[optionOneId].removeEventListener('click', flipCard)
      cards[optionTwoId].removeEventListener('click', flipCard)
      cardsWon.push(cardsChosen)
    } else {
      cards[optionOneId].setAttribute('src','src/images/blank.png')
      cards[optionTwoId].setAttribute('src','src/images/blank.png')
      alert('Sorry, try again!')
    }
    cardsChosen = []
    cardsChosenIds = []
    resultDisplay.textContent = cardsWon.length
    if(cardsWon.length === cardArray.length/2) {
      resultDisplay.textContent = 'Congrats! You have won!'
    }

    console.log(cardsChosen)
    console.log(cardsWon)
  }
  createBoard()
})
