/*var cuci = 1;
cuci=2;
console.log ("cuci erteke", cuci);
const lofasz = [
    "lofasz1" , "lofasz2"
]
const lista = [
    "alma" , "körte" , lofasz
]
console.log (lista[2]);
const szemely = {
    id:'1',
    nev:"Tibor",
    szuletesiev: "1990.01.01",
}
console.log(szemely);
console.log("A szemely neve" , szemely ['nev']); */

const ember1 = {
    id: "1",
    nev: "TIbor",
    kor: 20,
    magassag:"cm",
    suly: "70",
};
const ember2 = {
    id: "2",
    nev: "Janka",
    kor: "22",
    magassag: "134",
    suly: "55",
};
let emberLista = [ember1,ember2];
console.log("A teljes lista",emberLista);
console.log("Az",ember2.id, "neve:",ember2.nev);
console.log("A listaban a masodik ember:",emberLista[1]);
console.log("A masodik ember neve a listaban:",emberLista[1].nev);
