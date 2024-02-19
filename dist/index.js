"use strict";
// console.log("hello AB ...")
function addNum1(items) {
    const total = items.reduce((a, c) => a + c, 0);
    // console.log(total)
}
addNum1([1, 2, 3, 4]);
let age;
let things = ['ab', 3, false];
things.push({ id: 2 });
// console.log(things)
//   functions and any
function addNum(value) {
    return value + value;
}
const resOne = addNum('hello ');
// console.log(resOne)
const resTwo = addNum(3);
// console.log(resTwo)
function addNum2(a, b) {
    let c = b;
    let d = a;
    return [c, d];
}
const [c, d] = addNum2(4, 5);
// console.log("CHANGE",`${c}` ," ", `${d}` )
// Tuples
function useCoords() {
    const lat = 100;
    const long = 50;
    return [lat, long];
}
const [lat, long] = useCoords();
let user;
user = ['peach', 22];
const authorOne = { name: 'Abdi', avatar: '/img/ab.png' };
const authorTwo = [
    { name2: 'Abdi2', avatar2: '/img/ab.png' },
    { name2: 'Abdi3', avatar2: '/img/ab3.png' }
];
const newPost = {
    title: 'my first post',
    tags: ['gaming', 'tech'],
    create_at: new Date(),
    author: authorOne,
    author2: authorTwo
};
// console.log(newPost)
function createPost(post) {
    // console.log(`post title  ${post.title} and post Author  ${post.author.name}`)
}
createPost(newPost);
//  with arrays
// let posts: Post[] = []
let posts = []; // it is already declared in createPost
// posts.push({title: 'Tech'})
posts.push(newPost);
function getRandomColor() {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    return [r, g, b];
}
const colorOne = getRandomColor();
const colorTwo = getRandomColor();
const userOne = {
    name: 'Abdi',
    score: 95
};
function formatUser(user) {
    console.log(`${user.name} and ${user.score}`);
}
formatUser(userOne);
formatUser({ name: 'ab', score: 99 });
