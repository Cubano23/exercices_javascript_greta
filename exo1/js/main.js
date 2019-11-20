// https://developer.mozilla.org
// https://www.w3schools.com/



function checkArrayData(array, elem) {
  /*
    Retourne un objet contenant :
    length: la longueur du tableau en argument,
    hasElem: un booléen indiquant si le tableau contient l'élément passé en argument,
    asString: le tableau sous forme de string,
    randomElem: un élément aléatoire du tableau.
  */

  let obj = {
    length: array.length,
    welcome: elem != undefined ? true : false,
    asString: array.toString(),
    randomElem: array[Math.floor(Math.random() * array.length)]
  }
  return console.log(obj)
}


//let arr = ['This is a string', 420, 'Another string', true];

//checkArrayData(arr, "hello");






const areWeLucky = function (array) {
  /*
    Choisis un élément aléatoire du tableau, puis avec une chance de 50%,
    le retourne corrompu en y rajoutant de la donnée dedans.
    ex: areWeLucky(array) => 'Another string'.
        areWeLucky(array) => 'Another string **corrupted**'.
        areWeLucky(array) => 'Another string **corrupted**'.
        areWeLucky(array) => 'Another string'.
  */
  const array = ['This is a string', 420, 'Another string **corrupted', true, string];
}








const printObject = (obj) => {
  // Affiche l'objet sous la forme clé : valeur.
  // ex: printObject(obj) => length : 9 , randomElem : true, hasElem : true, etc...

  let person = {
    name: "Jhon",
    age: 25,
    profession: "développeur",
    langue: "fr",
    pays: "France",
    ville: "Paris"

  }
  for (let key in person) {
    let value = person[key];
    console.log(key + " = " + value + '\n');
  }
}

function askAge() {

  let age = parseInt(prompt("entrer votre age"));

  age < 18 ? stop() :
    age < 50 ? alert("vous êtes entre 18 et 49 ans") :
    age < 80 ? alert("vous êtes entre 50 et 79 ans") :
    alert("vous avez plus que 79 ans");


}
//askAge();


let arr = ["A", "B", "C", "D", "E", "F"];

function getNArray(array, index) {
  let res = array.slice(index - 1, index)
  return res;

}
let nElem = getNArray(arr, 4);

/* "" + 1 + 0
"" - 1 + 0
true + false
6 / "3"
"2" * "3"
4 + 5 + "px"
"$" + 4 + 5
"4" - 2
"4px" - 2
7 / 0
"  -9  " + 5
"  -9  " - 5
null + 1
undefined + 1
" \t \n" - 2 */





const check = (a, b) => {
  if (typeof a != "number") {
    a = +a;
  }
  if (typeof b != "number") {
    b = +b;
  }
  return console.log(a + b);

}

//check(12,"24");



const iterate = (array) => {
  let i = 0;
  let result = [];
  for (i; i < array.length; i++) {

    result.push(array[i])

  }
  return console.log(result)
}

//iterate(["A","B","C","D"]);

/* let some = 0;

while(true){

    let nombre = prompt("un nombre");
    some += +nombre;
    if(!nombre){
      
        alert(`some:  ${some}`);
        break;
    }

} */

function checkVariable(x) {

  switch (true) {

    case (typeof x == "number"):
      alert("This is a number!");
      break;


    case (typeof x == "string"):
      alert("This is a string!");
      break;


    case (typeof x == "object"):
      alert("This is a object!");
      break;


    default:
      alert("Inconnu!");
  }



}
//checkVariable(2n);

/* let student = {};

student.name = "John";
student.classe = 5;
student.age = 25;
student.majeur = true;
student.mineur = false;

console.log(student.name+"\n"+student.classe+"\n"+student.age+"\n"+student.majeur+"\n"+student.mineur+"\n")

delete student.mineur;
console.log(student.mineur+"\n")

Object.size = function(obj) {
  let size = 0, key;
  for (key in obj) {
      if (obj.hasOwnProperty(key)) size++;
  }
  return size;
};


let size = Object.size(student);

console.log(size); */



/*
  Pour tout ces objets :
  1 - Si le livre à été lu, alors : 
    Afficher ce message : Livre déjà lu: 'Nom du livre' by 'Auteur'.
  2 - Sinon : 
    Afficher ce message : Tu dois lire ce livre: 'Nom du livre' by 'Auteur'.
*/

const book = function () {
  const library = [{
      title: 'Bill Gates',
      author: 'The Road Ahead',
      readingStatus: true
    },
    {
      title: 'Steve Jobs',
      author: 'Walter Isaacson',
      readingStatus: true
    },
    {
      title: 'Mockingjay: The Final Book of The Hunger Games',
      author: 'Suzanne Collins',
      readingStatus: false
    }
  ];

  for (let i = 0; i < library.length; i++) {

    if (library[i].readingStatus) {
      console.log("Livre déjà lu:" + library[i].title + " by " + library[i].author);
    } else {
      console.log("Tu dois lire ce livre:" + library[i].title + " by " + library[i].author)
    }
  }


}

//book();

let user = {
  name: 'John',
  age: 30,

  sayHi() {
    console.log(this);
  },
  presentMe() {
    console.log('Hello I am ' + this.name);
  }
}

user.presentMe();






/*
read() Demande 2 valeurs, et les stocke en tant que 
propriétés de l'objet.
sum() Retourne la somme des 2 valeurs stockées
mul() Retourne la multiplication des 2 valeurs sotckéess*/






let calculator = {

  read() {
    this.n1 = +prompt("Number 1:");
    this.n2 = +prompt("Number 2:");
  },
  sum() {

     alert("Somme: " + parseInt(this.n1 + this.n2));
   

  },
  mul() {

     alert("Mult: " + this.n1 * this.n2);

  }

};
/* calculator.read();
calculator.sum();
calculator.mul(); */




 
let ladder = {
  step: 0,
  up() {
    this.step++;
    return this;
  },
  down() {
    this.step--;
    return this;
  },
  showStep: function() {
    alert( this.step );
  }
};

//ladder.up().up().down().showStep()
 

 
/*
  Modifiez ladder pour qu'on puisse faire ceci:
  ladder.up().up().down().showStep(); // 1
*/


















/* 
let last = function(array, n = 1) {
  
  let last_element = "";

  if(n < array.length){

    last_element = array.slice(Math.max(array.length - n, 1));

  }else{

  last_element = array;

  }
  return last_element;
 
}

*/


let last = function(array, n = 1) {

if(n === undefined || typeof n != "number")
  return array[array.length - 1];
    return array.slice(array.length -n, array.length)

 
}
// La fonction last retourne le dernier element du tableau.
// Si n est spécifié, elle retourne les n elements du tableau.

/* console.log(last([7, 9, 0, -2])); // -2
console.log(last([7, 9, 0, -2],3)); // [9, 0, -2]
console.log(last([7, 9, 0, -2],6)); // [7, 9, 0, -2] */




let filterArray = (array) => {
  let newArray = [];
  for(let i = 0; i < array.length; i++){
    if(array[i] % 2 != 0 && typeof array[i] == "number"){
      newArray.push(array[i]);
    }
  }
  return console.log(newArray);


}
// La fonction filter array doit retourner un nouveau tableau ne
// contenant que les nombres impairs du tableau passé en paramètres.
let arrayToFilter = [1, 2, 3, 4, "oups", 5, 6, 7, true, 8, 9, 10];
 filterArray(arrayToFilter) // 1, 3, 5, 7, 9;

 
 
let longArray = [true, '🐑', '🐑', '🐑', '🐑', '🐑', '🐑', '🐑', '🐑', '097934875', '🐑', '🐑', '🐑', '🐑', '🐑', '🐑', '🐑', '🐑', '🐑', '🐑', '🐑', '🐑', '🐑', '🐑', '🐑', '🐑', 'xyz', '🐑', '🐑', '🐑', '🐑', '🐑', '🐑', '🐑', '🐑', '🐑', '🐑', '🐑', '🐑', '🐑', '🐑', '🐑', '🐑', 'abc', '🐑', '🐑', '🐑', '🐑', '🐑', '🐑', '🐑', 'def', '🐑', '🐑', '🐑', '🐑', '🐑', '🐑', 'hij', '🐑', '🐑', '🐑', '🐑', '🐑', '🐑', '🐑', '🐑', '🐑', '🐑', '🐑', '🐑', '🐑', '🐑', 5843];
 
function testForString(longArray,string) {
 
if(longArray.includes(string)){
  alert(true);
}else{
  alert(false);
}




}
//testForString(longArray, 'abc');
 
// la fonction testForString retourne un booléen indiquant si oui ou non
// la string en paramètres à été trouvée 
// dans le tableau en paramètres








let Personna = {};
let cardNumber;
let randomString;

 
do {
  cardNumber = makeId(4,3);
} while (Number.isNaN(+cardNumber) || typeof(+cardNumber) != 'number')

console.log(cardNumber)

Personna.cardNumber = cardNumber;
Personna.randomString = makeId(30);
 
function reverse_a_number(n)
{
  n = n + "";
  return n.split("").reverse().join("");
}

 
function uppercase(string) {
// Met une majuscule à chaque début de mot, et le reste du mot en minuscule
}
 
function makeId(length, numberOfStrings) {

  // Génère une string de longueur length aléatoire,
  // pouvant contenir toutes les lettres de l'alphabet (minuscules et majuscules), ainsi que les chiffres 0 a 9
  // numberOfStrings permet de specifier le nombre de strings générées, séparées par un espace

    let result           = '';
    let characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let charactersLength = characters.length;
    for(let j = 0; j < numberOfStrings; j++){

      for ( var i = 0; i < length; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength) );
     }
      result += " ";
    }
    return result;
 


 



}
 
function FindAllMethods(obj) {
}
 
// Dans personna, stocke cardNumber de type number, contenant une suite de 3 nombres générés par makeId
// Dans personna, stocke randomString de type string, contenant une suite de 30 caractères générés par makeId
// Reverse cardNumber avec la fonction reverseNumber
// Avec upperCase, Personna.randomString devra avoir des majuscules à tout ses débuts de phrases,
// et que des minuscules au reste du mot
// Finalement, affiche la liste des méthodes disponibles de Personna





