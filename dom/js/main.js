let log = (elem) => console.log(elem);

/* 
let tableau = ['Nom', 'Prenom', 'Email', 'Message', 'Envoyer'];
let setAtt = ['text', 'text', 'email', 'text','submit'];


let frm = document.createElement("form");
frm.setAttribute('method','post');
frm.setAttribute('action',"submit.php");
frm.setAttribute('class',"form-group");


for(let j = 0; j < tableau.length; j++){

let labelNom = document.createElement("label");
labelNom.innerText = "Nom:";

let nom = document.createElement("input"); 
nom.setAttribute('type',setAtt[j]);
nom.setAttribute("name",tableau[j]);
nom.setAttribute("required","required");
nom.setAttribute("class","form-control");
j++;



let labelPrenom = document.createElement("label");
labelPrenom.innerText = "Prenom:";

let prenom = document.createElement("input"); 
prenom.setAttribute('type',setAtt[j]);
prenom.setAttribute("name",tableau[j]);
prenom.setAttribute("required","required");
prenom.setAttribute("class","form-control");
j++;

let labelEmail = document.createElement("label");
labelEmail.innerText = "Email:";

let email = document.createElement("input"); 
email.setAttribute('type',setAtt[j]);
email.setAttribute("name",tableau[j]);
email.setAttribute("required","required");
email.setAttribute("class","form-control");
j++;


let labelMessage = document.createElement("label");
labelMessage.innerText = "Message:";

let message = document.createElement("textarea"); 
message.setAttribute('type',setAtt[j]);
message.setAttribute("name",tableau[j]);
message.setAttribute("required","required");
message.setAttribute("class","form-control");
j++;


let button = document.createElement("input"); 
button.setAttribute('type',setAtt[j]);
button.setAttribute('value',tableau[j]);
button.setAttribute('class','btn btn-primary');

let space = document.createElement('br');

frm.appendChild(labelNom);
frm.appendChild(nom);
frm.appendChild(labelPrenom);
frm.appendChild(prenom);
frm.appendChild(labelEmail);
frm.appendChild(email);
frm.appendChild(labelMessage);
frm.appendChild(message);

frm.appendChild(space);
frm.appendChild(button);




document.getElementById('formulaire').appendChild(frm);
}
 */


/* function showContent(elem){
  document.getElementById('content').innerText = elem.children[1].innerText;
} */

function showCurrentPosition() {
  // Affiche la position géolocalisée de l'utilisateur à sa demande.
  // `https://www.openstreetmap.org/#map=18/${latitude}/${longitude}`
}


/* let x = document.getElementById("map");

function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else { 
    x.innerHTML = "Geolocation is not supported by this browser.";
  }
}

function showPosition(position) {
  x.innerHTML = "Latitude: " + position.coords.latitude + 
  "<br>Longitude: " + position.coords.longitude;



}
function showMap(showPosition){

  window.location.href = `https://www.openstreetmap.org/#map=18/${position.coords.latitude }/${position.coords.longitude}`
  
}
getLocation();
 */

/* document.addEventListener('mousemove',function(event){
  document.getElementById("position").innerHTML = `position: ${event.clientX} ${event.clientY}`;
  document.getElementById("popup").innerHTML = "";
})


document.body.addEventListener('mouseout', function(e) {
  if (!e.relatedTarget && !e.toElement) {
  
    document.getElementById("popup").innerHTML = "<div class='popup'><p>don't go please</p></div>";

  }
}); */








 function hoverSelector() {
  /*
    Lorsque l'utilisateur active cette option, tout les éléments du DOM
    sont selectionnés (avec une différence CSS de votre choix).
    Bien sûr, la propriété CSS se remet dans son état normal une fois le hover terminé
    (Attention aux écrasements de propr. existantes).
  */
  /* window.onload = function() {
    document.getElementById("btn-hover").onmouseover = function()
    {
        document.body.style.backgroundColor = "#9933ff";
    }

    document.getElementById("btn-hover").onmouseout = function()
    {
        document.body.style.backgroundColor = "#fff";
    }
  }*/
}  

hoverSelector();
 

 
 
function whereIAm() {
  /*
    Indique à l'utilisateur dans quel Element du DOM il se trouve.
  */
 let border =  "20px solid greenyellow";
 let border_radius = "100px";

  document.addEventListener("mousemove" , (event) => { 
    log( `Balise HTML: ${event.target.nodeName}`);
   
    event.target.style.border = border;
    event.target.style.borderRadius = border_radius;
    document.getElementById('tag').innerHTML = event.target.nodeName;
   
  });

  document.addEventListener("mouseout" , (event) => { 
    log( `Balise HTML: ${event.target.nodeName}`);
    event.target.style.border = ""
    event.target.style.borderRadius = "";
 
    document.getElementById('tag').innerHTML = "";
    

  });





}
whereIAm();


