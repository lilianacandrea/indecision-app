//poti crea mai multe variabile cu acelasi nume, care se pot suprascrie
var nameVar = 'Lili';
var nameVar = 'Mike';
console.log('nameVar', nameVar);

// let nu permite crearea a 2 variabile cu acelasi nume, dar poti sa le reassing alte valori.
let nameLet = 'Jen';
nameLet = 'Julie';
console.log('nameLet', nameLet);

// constantele nu pot fi reassing. Vor genera erori daca incerci sa le atribui alte valori decat cele initiale. Valoare nu se schimba. 
const nameConst = 'Frank';
// nameConst = 'Ana';
console.log('nameConst', nameConst);

// function getPetName() {
//     const petName = 'Hal';
//     return petName;
// }

// const petName = getPetName();
// console.log(petName);

// Block scoping
const fullName = 'Lili Candrea';
let firstName;

if (fullName) {
    firstName = fullName.split(' ')[0];
    console.log(firstName);
}

console.log(firstName);
