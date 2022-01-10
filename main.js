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


let newCardB = createCard();
console.log(newCardB);
teamContainer.append();

function createCard() {
  //Crea team-card
  let newCard = document.createElement("div");
  newCard.classList.add("team-card");

  //Crea card-image e la aggiunge a team-card

  //Crea card-text e lo aggiunge a team-card

  return newCard;
}