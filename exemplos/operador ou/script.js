let condicao
let idade

idade = parseInt(prompt("Quantos anos você tem?"))
condicao = String(prompt("Você é habilitado? ou não?"))

if (idade > 18 || condicao == "habilitado"){
    alert ("Pode dirigir agora.")
}
else{
    alert("Não pode dirigir agora")
}