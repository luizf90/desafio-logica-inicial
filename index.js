const nomeHeroi = 'Luiz';
let xpHeroi = 10001;
let classificador;

switch (true) {
    case xpHeroi <= 1000:
        classificador = 'Ferro';
        break;
    case xpHeroi > 1000 && xpHeroi <= 2000:
        classificador = 'Bronze';
        break;
    case xpHeroi > 2000 && xpHeroi <= 5000:
        classificador = 'Prata';
        break;
    case xpHeroi > 5000 && xpHeroi <= 7000:
        classificador = 'Ouro';
        break;
    case xpHeroi > 7000 && xpHeroi <= 8000:
        classificador = 'Platina';
        break;
    case xpHeroi > 8000 && xpHeroi <= 9000:
        classificador = 'Ascendente';
        break;  
    case xpHeroi > 9000 && xpHeroi <= 10000:
        classificador = 'Imortal';
        break;
    case xpHeroi > 10000:
        classificador = 'Radiante';
        break;         

    default: classificador = nomeHeroi + ' não possui xp';
        break;
}

console.log('A Classificação do herói ' + nomeHeroi + ' é ' + classificador);