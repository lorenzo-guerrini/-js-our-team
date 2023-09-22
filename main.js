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

//Stampa tutto il team e afferma di averlo fatto
let defaultTeamPrinted = false;
defaultTeamPrint();

//Crea una card per ciascun membro e lo aggiunge al teamContainer
function defaultTeamPrint() {
  for (let i = 0; i < team.length; i++) {
    let newCard = createCard(team[i]);
    teamContainer.append(newCard);
  }

  defaultTeamPrinted = true;
}

//Crea una card dato un oggetto teamMember
function createCard(teamMember) {
  //Crea elemento team-card
  let newCard = document.createElement("div");
  newCard.classList.add("team-card");

  //Crea elemento card-image e img contenuta
  let newCardImage = document.createElement("div");
  newCardImage.classList.add("card-image");
  let newImage = document.createElement("img");
  if (!defaultTeamPrinted) { //le immagini del default team sono nella cartella img, altre eventualmente no
    newImage.src = "img/" + teamMember.image;
  } else {
    newImage.src = teamMember.image;
  }
  newImage.alt = teamMember.name;

  //Aggiunge i suddetti a card-image e questo a team-card
  newCardImage.append(newImage);
  newCard.append(newCardImage);

  //Crea card-text e h3 e p contenuti
  let newCardText = document.createElement("div");
  newCardText.classList.add("card-text");
  let newName = document.createElement("h3");
  newName.innerHTML = teamMember.name;
  let newRole = document.createElement("p");
  newRole.innerHTML = teamMember.role;

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
  //Crea oggetto newMember e lo aggiunge all'array team
  let newMember = {
    name: document.getElementById("name").value,
    role: document.getElementById("role").value,
    image: document.getElementById("image").value,
  }

  team.push(newMember);

  //Pulisce il form
  clearForm()

  //Crea nuova card con variabili precedenti e la appende al teamContainer
  let newCard = createCard(newMember);
  teamContainer.append(newCard);
}

//Pulisce il form
function clearForm() {
  document.getElementById("name").value = "";
  document.getElementById("role").value = "";
  document.getElementById("image").value = "";
}