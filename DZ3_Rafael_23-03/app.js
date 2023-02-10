let array = [null, 123, undefined, null, "qwerty", 34, 65, undefined, null, null, 43, "aerg", "пкцйк"]
let resultat = {}



for (let i = 0; i < array.length; i++) {
    let type = typeof array[i]
    if (!resultat[type]) {
        resultat[type] = []
    }
    resultat[type].push(array[i])
}

let Sortirovka = Object.values(resultat).sort((a,b) => b.length - a.length)

console.log(Sortirovka)