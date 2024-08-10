//alert("Movic Tech says, good morning")
//alert("WELCOME TO MOVIC COUNTER APP")


//let myCount=document.getElementById("countr")
//let mySave=document.getElementById("saveLE")
let count = 0
//target the increment btn
function increment(){
    count += 1
    document.getElementById("countr").textContent=count
    //console.log(count)
}

//target the decrement btn
function decrement(){
    count += -1
    document.getElementById("countr").textContent=count
}
//target the save btn
function save(){
    let savrr = count + " - "
    document.getElementById("saveLE").textContent +=savrr
    document.getElementById("countr").textContent= 0
    count = 0
}