const button = document.querySelector('button')


button.addEventListener('click',() => {
    heitaNoppaa()
})

function heitaNoppaa() {
    let satunnainenNumero = arvoSatunnainenNumero(1,6)
    let noppaKuva = document.getElementById('noppaKuva')
    noppaKuva.src = './img/luku' + satunnainenNumero + ".png"
    let tekstiKentta = document.getElementById('noppaTeksti')
    tekstiKentta.textContent = "Heitit numeron " + satunnainenNumero + "!"
}

function arvoSatunnainenNumero(min, max) {
    return Math.floor(Math.random() * (max-min + 1)) + min
}