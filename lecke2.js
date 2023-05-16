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
/*
const ember1 = {
    id: "1",
    nev: "TIbor",
    kor: 20 +"év",
    magassag:170+"cm",
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


//nem jo

// var lofasz = "valami";

// definialas
// 1
// var : variable
// let : valtoztathato variable
// const : nem megvaltoztathato variable
// 2
// lofasz : nev
// 3
// = : initialization/assignment
// 4
// 'valami' : adat

//jo

let lofasz1 = "valami";
const lofasz2 = "valami"; // 99%

// kivetel
const youre = "you\"'re";
const temp = `you're""`;

// pelda

let osszeg;
const egy = 1;
const negy = 4;
osszeg = negy + egy + egy + negy;

/* 
number = szám - 7, 7.1, -1
boolean = igaz/hamis - true/false
string = szöveg - "szia"/'szia'  'you\'re'
array = lista - []/[1,2,3]
object = objektum - {}/{cica:4}
null = semmi - null
undefined = nem definialt - undefined
*/

// lista
// ha el akarod erni egy bizonyos lista adatat
// lista[0]
// az index szamok mindig nullatol indulnak

const lista = ["cigi", "sor", "ja nem", "cevap"];

//console.log(lista[negy-egy]);

// objektum
// id : kulcs/key
// '1' : ertek/value

const objektum = {
  id: "1",
  name: "Kiki",
  dogName: "Boby",
};

// null vs. undefined

const semmi = null;
const semmien = undefined;

//console.log(lista[4])
//console.log(objektum.cica)

//console.log('### Itt az objektum', objektum['id'], objektum.name)
//console.log(Object.values(objektum))

// legyen egy lista amibe van ket ember, az embernek legyen neve, kora, magassaga, sulya, id

// gusztus

/*
const korhazRossz = {
  neve: "szarhaz",
  doktorok: [
    {
      nev: "guszi",
      paciensek: [
        {
          neve: "Bence",
          kor: 25,
          magasssag: 175 + "cm",
          sulya: 99 + "kg",
          id: 1,
        },
        {
          neve: "Guszi",
          kor: 25,
          magasssag: 175 + "cm",
          sulya: 99 + "kg",
          id: 1,
        },
      ],
    },
    {
      nev: "peti",
      paciensek: [
        {
          neve: "Mari",
          kor: 25,
          magasssag: 175 + "cm",
          sulya: 99 + "kg",
          id: 1,
        },
        {
          neve: "Cicok",
          kor: 25,
          magasssag: 175 + "cm",
          sulya: 99 + "kg",
          id: 1,
        },
      ],
    },
  ],
};

console.log(korhazRossz.doktorok[1].paciensek[1].neve); */

// Ebbol minel kompaktabb korházat
// consol logloni mind a 4 paciens nevet es korat, ugy hogy a korhazbol indulunk

let Doktor1Paciensek = [];

const Doktor1Paciens1 = {
    id: "1",
    nev: "Mari",
    kor: "26",
};

const Doktor1Paciens2 = {
    id: "2",
    nev: "Peti",
    kor: "43",
};

let Doktor2Paciensek = [];

const Doktor2Paciens1 = {
    id: "3",
    nev: "Julcsa",
    kor: "23",
};

const Doktor2Paciens2 = {
    id: "4",
    nev: "Jani",
    kor: "55",
};

Doktor1Paciensek = [Doktor1Paciens1,Doktor1Paciens2];

Doktor2Paciensek = [,Doktor2Paciens1,Doktor2Paciens2];

//console.log (Doktor1Paciensek);
// console.log (Doktor2Paciensek);

let Doktor1 = {
    id: "5",
    nev:"Dr,Janos",
}

Doktor1Paciensek = [Doktor1.nev,"elso paciense",Doktor1Paciens1,Doktor1.nev ,"masodik paciense:",Doktor1Paciens2]
 
console.log("Az elso doktor adatai:",Doktor1);
 
  Doktor1 = {
    id: "5",
    nev:"Dr,Janos",
    paciensek: Doktor1Paciensek,
}

console.log(Doktor1Paciensek)

let Doktor2 =  {
    id: "6",
    nev: "Dr. Dezső",
}
console.log("A masodik doktor adatai:",Doktor2);

Doktor2Paciensek = [Doktor2.nev, "elso paciense",Doktor2Paciens1,Doktor2.nev,"masodik paciense:",Doktor2Paciens2]

Doktor2= {
    id: "6",
    nev: "Dr. Dezső",
    paciensek:Doktor2Paciensek
}

console.log(Doktor2Paciensek);

let doktorokLista = [Doktor1.nev,Doktor2.nev]
let paciensekLista = [Doktor1Paciens1.nev,Doktor1Paciens2.nev,Doktor2Paciens1.nev,Doktor2Paciens2.nev]
let Korhaz = {
    nev: "Szent Korhaz",
    doktorok: doktorokLista,
    paciensek: paciensekLista,
}

console.log ("A korhaz adatai",Korhaz);