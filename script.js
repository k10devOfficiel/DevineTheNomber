
console.log("js actif");

// création du nombre aléatoire
function NombreCreat(max){
    return Math.floor(Math.random()*(max  + 1))
}

let resultat = NombreCreat(10)
console.log(resultat)

let nombreDevine = document.querySelector(".nombreDevine")
let nombreDevineH2 = document.querySelector("h2")
let message = document.getElementById("message")
let btnDevine = document.querySelector('.btnDevine')
let input = document.querySelector('input[type="text"]')

console.log(btnDevine);

let i = 0
let maxEssai = 3

nombreDevineH2.textContent = resultat
nombreDevineH2.style.display = 'none'  // cacher le nombre au départ

btnDevine.addEventListener("click", ()=>{

      function verifie (n){
        if (Number(n)===resultat) {
            return true
        }
        return false
}

    function SASIR(){
        let n = input.value.trim()  
        input.value = ""      // vider le champ
        input.focus()         // remettre le curseur
        console.log(n);
        return verifie(n)
    }

    if (i < maxEssai){

        if (SASIR()){
            message.textContent = 'Vous avez deviné'
            message.style.color = "green"
            nombreDevineH2.style.display = 'block'
            nombreDevineH2.style.color = 'green'
        } else {
            i++
            message.textContent = 'Désolé pas de chance ' + i + "/3"
            message.style.color = "red"
        }

    } else if (i === maxEssai){
        message.textContent = "Vos trois essais sont terminés " + i + "/3. Le nombre était " + resultat
        message.style.color = "red"
        nombreDevineH2.style.display = 'block'
        nombreDevineH2.style.color = 'red'

    }

})

