/**
 *
 *    *  .  . *       *    .        .        .   *    ..
 .    *        .   ###     .      .        .            *
    *.   *        #####   .     *      *        *    .
  ____       *  ######### *    .  *      .        .  *   .
 /   /\  .     ###\#|#/###   ..    *    .      *  .  ..  *
/___/  ^8/      ###\|/###  *    *            .      *   *
|   ||%%(        # }|{  #
|___|,       MAKE IT AWESOME    }|{
 *
 */

/**
 * @description Returns fake user api data
 * @returns {Object[]} The user data
 */
const getData = () => [
  {
    firstName: "Jacob",
    lastName: "Hawkins",
    job: "Senior Editor",
    location: "New York Times",
    profile: "./imgs/jacob-hawkins.png"
  },
  {
    firstName: "Esther",
    lastName: "Black",
    job: "Editor in Chief",
    location: "Wall Street Journal",
    profile: "./imgs/esther-black.png"
  },
  {
    firstName: "Philip",
    lastName: "Miles",
    job: "Senior Writer",
    location: "Washington Post",
    profile: "./imgs/philip-miles.png"
  }
];

/**
 * @description Creates the user cards
 * @param {Object[]} userData The data from the fake api
 * @returns {HTMLElement[]} The cards to be inserted into the app
 */
const createCards = userData =>
  userData.map(contact => {
    // Initializing elements
    const cardButton = document.createElement("button");
    const userInfoContainer = document.createElement("div");
    const userImage = document.createElement("img");
    const userCredentials = document.createElement("div");
    const userName = document.createElement("h1");
    const userTitle = document.createElement("p");
    const userCompany = document.createElement("p");
    const card = document.createElement("section");

    // Creating text
    const buttonText = document.createTextNode(
      `Read ${contact.firstName}'s Bio`
    );
    const nameText = document.createTextNode(
      `${contact.firstName} ${contact.lastName}`
    );
    const titleText = document.createTextNode(`${contact.job}`);
    const companyText = document.createTextNode(`${contact.location}`);

    // Add attributes
    cardButton.classList.add("cards-container__card-button");
    userInfoContainer.classList.add(
      "cards-container__card-user-info-container"
    );
    userImage.classList.add("cards-container__card-image");
    userImage.setAttribute("src", `${contact.profile}`);
    userImage.setAttribute("alt", `${contact.firstName} ${contact.lastName}`);
    userCredentials.classList.add(
      "cards-container__card-user-info-credentials"
    );
    userName.classList.add("cards-container__card-user-name");
    userTitle.classList.add("cards-container__card-user-title");
    userCompany.classList.add("cards-container__card-user-company");
    card.classList.add("cards-container__card");

    // Appending user info text
    cardButton.appendChild(buttonText);
    userCompany.appendChild(companyText);
    userTitle.appendChild(titleText);
    userName.appendChild(nameText);

    // Appending user info to parent
    userCredentials.appendChild(userName);
    userCredentials.appendChild(userTitle);
    userCredentials.appendChild(userCompany);
    userInfoContainer.appendChild(userImage);
    userInfoContainer.appendChild(userCredentials);

    card.appendChild(userInfoContainer);
    card.appendChild(cardButton);
    return card;
  });

/**
 * @description This is the starting point of the app.
 */
const main = () => {
  const mainContainer = document.querySelector(".cards-container");

  // Simulating a fetch request to show a loader.
  setTimeout(() => {
    document.querySelector(".loader").classList.remove("loader");
    const cards = createCards(getData());
    cards.forEach(card => mainContainer.appendChild(card));
  }, 1500);
};

window.onload = main();
