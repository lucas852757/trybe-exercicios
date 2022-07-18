// ./index.ts

const readline = require("readline-sync");
import Months from "./Months";
import Seasons from "./Seasons";

//Coloca os mêses em um array
const monthsNames = Object.values(Months);

const choiceMonth = readline.keyInSelect(monthsNames, "Escolha um mês do ano");
// O método .keyInSelect mostra uma interface
// de escolha para a pessoa usuária

const seasonsSouth = {
    [Seasons.OUTONO]: [Months.Marco, Months.Abril, Months.Maio, Months.Junho],
    [Seasons.INVERNO]: [Months.Junho, Months.Julho, Months.Agosto, Months.Setembro],
    [Seasons.PRIMAVERA]: [Months.Setembro, Months.Outubro, Months.Novembro, Months.Dezembro],
    [Seasons.VERAO]: [Months.Dezembro, Months.Janeiro, Months.Fevereiro, Months.Marco],
}
// Criamos um objeto onde suas chaves são as estações
// e seus valores são os meses. Note abaixo um segundo
// objeto onde, sendo do hemisfério oposto, as estações
// são opostas também

const seasonsNorth = {
    [Seasons.PRIMAVERA]: seasonsSouth[Seasons.OUTONO],
    [Seasons.VERAO]: seasonsSouth[Seasons.INVERNO],
    [Seasons.OUTONO]: seasonsSouth[Seasons.PRIMAVERA],
    [Seasons.INVERNO]: seasonsSouth[Seasons.VERAO],
}

const hemispheres = {
    "Norte": seasonsNorth,
    "Sul": seasonsSouth
}

const choiceHemisphere = readline.keyInSelect(Object.keys(hemispheres), "Escolha um hemisfério");
// O método .keyInSelect mostra uma interface
// de escolha para a pessoa usuária

const month = Object.values(Months)[choiceMonth];

const hemisphere = Object.keys(hemispheres)[choiceHemisphere];
console.log(`Mês: \n${month}`);
console.log(`Hemisfério: \n${hemisphere}`);
console.log(`Estações:`);
const chosenHemisphereSeasons = Object.values(hemispheres)[choiceHemisphere];
Object.entries(chosenHemisphereSeasons).map((entry) => {
    const seasons = entry[0];
    const months = entry[1];
    // São os meses de cada estação. Caso esteja
    // incluído em mais de uma estação, o console
    // abaixo irá adicionar

    if (months.includes(month)) console.log(seasons);
});