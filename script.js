const text = [
"DevOps Engineer",
"AWS Cloud Builder",
"CI/CD Pipeline Creator",
"Infrastructure Automator"
]

let i=0
let j=0
let current=""
let isDeleting=false

function type(){

current=text[i]

if(isDeleting){
document.getElementById("typing").textContent=current.substring(0,j--)
}else{
document.getElementById("typing").textContent=current.substring(0,j++)
}

if(!isDeleting && j===current.length){
isDeleting=true
setTimeout(type,1500)
return
}

if(isDeleting && j===0){
isDeleting=false
i=(i+1)%text.length
}

setTimeout(type,isDeleting?50:100)

}

type()
