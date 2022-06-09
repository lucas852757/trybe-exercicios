"use strict";
// ./index.ts
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const readline = require("readline-sync");
const Months_1 = __importDefault(require("./Months"));
const Seasons_1 = __importDefault(require("./Seasons"));
//Coloca os mêses em um array
const monthsNames = Object.values(Months_1.default);
const choiceMonth = readline.keyInSelect(monthsNames, "Escolha um mês do ano");
// O método .keyInSelect mostra uma interface
// de escolha para a pessoa usuária
const seasonsSouth = {
    [Seasons_1.default.OUTONO]: [Months_1.default.Marco, Months_1.default.Abril, Months_1.default.Maio, Months_1.default.Junho],
    [Seasons_1.default.INVERNO]: [Months_1.default.Junho, Months_1.default.Julho, Months_1.default.Agosto, Months_1.default.Setembro],
    [Seasons_1.default.PRIMAVERA]: [Months_1.default.Setembro, Months_1.default.Outubro, Months_1.default.Novembro, Months_1.default.Dezembro],
    [Seasons_1.default.VERAO]: [Months_1.default.Dezembro, Months_1.default.Janeiro, Months_1.default.Fevereiro, Months_1.default.Marco],
};
// Criamos um objeto onde suas chaves são as estações
// e seus valores são os meses. Note abaixo um segundo
// objeto onde, sendo do hemisfério oposto, as estações
// são opostas também
const seasonsNorth = {
    [Seasons_1.default.PRIMAVERA]: seasonsSouth[Seasons_1.default.OUTONO],
    [Seasons_1.default.VERAO]: seasonsSouth[Seasons_1.default.INVERNO],
    [Seasons_1.default.OUTONO]: seasonsSouth[Seasons_1.default.PRIMAVERA],
    [Seasons_1.default.INVERNO]: seasonsSouth[Seasons_1.default.VERAO],
};
const hemispheres = {
    "Norte": seasonsNorth,
    "Sul": seasonsSouth
};
const choiceHemisphere = readline.keyInSelect(Object.keys(hemispheres), "Escolha um hemisfério");
// O método .keyInSelect mostra uma interface
// de escolha para a pessoa usuária
const month = Object.values(Months_1.default)[choiceMonth];
const hemisphere = Object.keys(hemispheres)[choiceHemisphere];
console.log('->', hemisphere);
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
    if (months.includes(month))
        console.log(seasons);
});
