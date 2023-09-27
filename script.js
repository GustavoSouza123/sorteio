const c = (e) => document.querySelector(e);
const cs = (e) => document.querySelectorAll(e);

const btn = c('.sortear-btn');
const nomesSorteados = c('.nome-sorteados');
let numSorteados = 0;
let nomes = [];

btn.onclick = sortear;

function sortear() {
    nomes = c('textarea').value.split(',');
    numSorteados = c('.num-sorteados').value;
    if(numSorteados == 0 || numSorteados == '') {
        return false;
    }
    if(nomes.length >= numSorteados) {
        for(let i = 0; i < numSorteados; i++) {
            let id = Math.floor(Math.random() * nomes.length);
            nomesSorteados.innerHTML += nomes[id] + "<br>";
            nomes.splice(id, 1);
            c('textarea').value = nomes;
        }
    } else if(nomes.length == 1) {
        let id = Math.floor(Math.random() * nomes.length);
        nomesSorteados.innerHTML += nomes[id] + "<br>";
        nomes.splice(id, 1);
        c('textarea').value = nomes;
    }
}

// Kauã Medeiro,Kauã Yuuki,Gustavo Souza (Cubo),João Pedro,Júlia Benedetti,Erick