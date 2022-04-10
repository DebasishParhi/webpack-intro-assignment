

import {sum} from "./calc"

import "./index.css"

import logo from "./todo.jpg"

// const sum =require("./calc")


// const MyKey="1234"

console.log(sum(1,3));


// console.log(sum(3,4));

// console.log(sum(3,9));


const root= document.getElementById("root")

const h1=document.createElement("h1")
//  h1.innerText="Hello World"
h1.setAttribute("class","color")

// image 

const image=document.getElementById("image")
const img=document.createElement("img")
img.setAttribute("class","image")

img.src=logo
image.append(img)
root.append(h1 ,image)


//tex area

// const text=document.getElementById("text")

