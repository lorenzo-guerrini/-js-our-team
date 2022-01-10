const team = [
  {
    name: 'Wayne Barnett',
    role: 'Founder & CEO',
    image: 'wayne-barnett-founder-ceo.jpg',
  },
  {
    name: 'Angela Caroll',
    role: 'Chief Editor',
    image: 'angela-caroll-chief-editor.jpg',
  },
  {
    name: 'Walter Gordon',
    role: 'Office Manager',
    image: 'walter-gordon-office-manager.jpg',
  },
  {
    name: 'Angela Lopez',
    role: 'Social Media Manager',
    image: 'angela-lopez-social-media-manager.jpg',
  },
  {
    name: 'Scott Estrada',
    role: 'Developer',
    image: 'scott-estrada-developer.jpg',
  },
  {
    name: 'Barbara Ramos',
    role: 'Graphic Designer',
    image: 'barbara-ramos-graphic-designer.jpg',
  },
];

//Variabile container
let teamContainer = document.querySelector(".team-container");

//Stampa tutto il team
defaultTeamPrint();

//Crea una card per ciascun membro e lo aggiunge al teamContainer
function defaultTeamPrint() {
  for (let i = 0; i < team.length; i++) {
    let newCard = createCard(team[i].name, team[i].role, "img/" + team[i].image);
    teamContainer.append(newCard);
  }
}

function createCard(name, role, image) {
  //Crea elemento team-card
  let newCard = document.createElement("div");
  newCard.classList.add("team-card");

  //Crea elemento card-image e img contenuta
  let newCardImage = document.createElement("div");
  newCardImage.classList.add("card-image");
  let newImage = document.createElement("img");
  newImage.src = image;
  newImage.alt = name;

  //Aggiunge i suddetti a card-image e questo a team-card
  newCardImage.append(newImage);
  newCard.append(newCardImage);

  //Crea card-text e h3 e p contenuti
  let newCardText = document.createElement("div");
  newCardText.classList.add("card-text");
  let newName = document.createElement("h3");
  newName.innerHTML = name;
  let newRole = document.createElement("p");
  newRole.innerHTML = role;

  //Aggiunge i suddetti a card-text e questo a team-card
  newCardText.append(newName);
  newCardText.append(newRole);
  newCard.append(newCardText);

  //Ritorna team-card
  return newCard;
}

// ----   BONUS    -----

//Variabile bottone add
const addButton = document.getElementById("addMemberButton");
addButton.addEventListener("click", addFormCard)

//Aggiunge al team-container card generate tramite il form
function addFormCard() {
  //Variabili con nome, ruolo e immagine prese dal form
  let formName = document.getElementById("name").value;
  let formRole = document.getElementById("role").value;
  let formImage = document.getElementById("image").value;
  
  //Crea nuova card con variabili precedenti e la appende al teamContainer
  let newCard = createCard(formName, formRole, formImage);
  teamContainer.append(newCard);
}