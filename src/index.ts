// console.log("hello AB ...")

  function  addNum1(items:number[]): void {
    const total = items.reduce((a,c) => a+c, 0)
    // console.log(total)
  }
  addNum1([1,2,3,4])

  let age
  let things: any[] = ['ab', 3, false]

  things.push({id: 2})

  // console.log(things)

//   functions and any

function addNum(value: any): any {
    return value + value
}

const resOne = addNum('hello ')
 // console.log(resOne)
const resTwo = addNum(3)
// console.log(resTwo)

function addNum2(a: number, b: number): [number, number] {
  let c = b;
  let d = a;
  return [c,d]
}
  const [c,d] = addNum2(4, 5)
 console.log("CHANGE",`${c}` ," ", `${d}` )

// Tuples

function  useCoords(): [number, number] {
  const lat = 100
  const long = 50
  return [lat, long]
}
 const [lat, long] = useCoords()


let user: [name: string, age: number]

user = ['peach', 22]
// console.log(user[0])

// Interface

interface Author {
  name: string,
  avatar: string
}
interface Author2 {
  name2: string,
  avatar2: string
}
const authorOne: Author = {name: 'Abdi', avatar: '/img/ab.png'}
const authorTwo: Author2[] = [ 
  {name2: 'Abdi2', avatar2: '/img/ab.png'}, 
  {name2: 'Abdi3', avatar2: '/img/ab3.png'} 
]


// use interface in another interface

interface Post {
  title: string,
  tags: string[],
  author: Author,
  author2: Author2[],
  create_at: Date
}

const newPost: Post = {
  title: 'my first post',
  tags: ['gaming', 'tech'],
  create_at: new Date(),
  author: authorOne,
  author2: authorTwo
}

// console.log(newPost)

function createPost(post:Post): void {
   // console.log(`post title  ${post.title} and post Author  ${post.author.name}`)
  }

 createPost(newPost)

//  with arrays
// let posts: Post[] = []
let posts = [] // it is already declared in createPost

// posts.push({title: 'Tech'})
posts.push(newPost)
// console.log(posts)

// type Aliases

type Rgb = [number, number, number]

function getRandomColor(): Rgb {
  const r = Math.floor(Math.random()*255)
  const g = Math.floor(Math.random()*255)
  const b = Math.floor(Math.random()*255)
   
  return [r,g,b]
}
const colorOne = getRandomColor()
const colorTwo = getRandomColor()

// console.log(colorOne, colorTwo)

type User = {
  name: string,
  score: number
}
const userOne: User = {
  name: 'Abdi',
  score: 95
}
 function formatUser(user:User): void {
  // console.log(`${user.name} and ${user.score}`)
  
 }

 formatUser(userOne)
 formatUser({name: 'ab', score: 99})

//  Union types

let someId: number | string 

someId = 1
someId = '2'

let email: string | null = null

type Id = number | string
let anotherId: Id

anotherId = 5

