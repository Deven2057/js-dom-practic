// Q.1 creat a navbar and change the color of its 1st elemnt to red
//method1

let nav1=document.body.firstElementChild
console.log(nav1)

let color=()=>{
  nav1.firstElementChild.style.color="red"
}

color()

// method2

 document.getElementsByTagName("nav")[0].firstElementChild.style.color="red"

//creat an element of 3 children and put the color of 1st and last element green

let a=document.getElementsByClassName("span1")[0]
console.log(a)
let colorFirst=()=>{
  a.firstElementChild.style.background="green"
  a.lastElementChild.style.background="green"
}
colorFirst()


// color all li tag backgrround
Array.from(document.getElementsByTagName("li")).forEach((element)=>{
  element.style.background="cyan";
})


document.getElementsByTagName("li")[1].style.background="red"
