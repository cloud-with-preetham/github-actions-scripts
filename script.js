// typing animation

const text=[
"DevOps Engineer",
"AWS Cloud Builder",
"CI/CD Pipeline Creator",
"Infrastructure Automator"
]

let i=0
let j=0
let current=""
let deleting=false

function type(){

current=text[i]

if(!deleting){
document.getElementById("typing").textContent=current.substring(0,j++)
}else{
document.getElementById("typing").textContent=current.substring(0,j--)
}

if(j===current.length){
deleting=true
setTimeout(type,1500)
return
}

if(deleting && j===0){
deleting=false
i=(i+1)%text.length
}

setTimeout(type,100)

}

type()

// GitHub repos

fetch("https://api.github.com/users/preetham-cloud/repos")
.then(res=>res.json())
.then(data=>{

let container=document.getElementById("repos")

data.slice(0,6).forEach(repo=>{

let div=document.createElement("div")

div.innerHTML=`
<h3>${repo.name}</h3>
<p>${repo.description || ""}</p>
`

container.appendChild(div)

})

})
