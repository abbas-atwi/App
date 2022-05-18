let text = document.querySelector(".nome")
let inp = document.querySelector("input")
let enviar = document.querySelector("button")
let listaNomes = document.querySelector(".listaNomes")
enviar.addEventListener("click", ()=>{
    if(inp.value == ""){
        alert("Campo vazio")
    }else{
         let tags = document.createElement("li")
   let del = document.createElement("button")
   del.addEventListener("click", ()=>{
       listaNomes.removeChild(tags)
   })
   listaNomes.append(tags)
   del.classList.add("deletar")
   del.innerHTML = "deletar"
   tags.append(text.value)
   tags.append(del)
   inp.value = ""
    }
  
})

