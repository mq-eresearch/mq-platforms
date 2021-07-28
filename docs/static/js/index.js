// Identify platform cards
const cloudstorCard = document.getElementById("cloudstorCard");
const sharepointCard = document.getElementById("sharepointCard");
const redcapCard = document.getElementById("redcapCard");
const qualtricsCard = document.getElementById("qualtricsCard");
const limesurveyCard = document.getElementById("limesurveyCard");
const labarchivesCard = document.getElementById("labarchivesCard");
const adaCard = document.getElementById("adaCard");
const rdrCard = document.getElementById("rdrCard");
const dryadCard = document.getElementById("dryadCard");
const zenodoCard = document.getElementById("zenodoCard");
const dmpCard = document.getElementById("dmpCard");
const awsCard = document.getElementById("awsCard");
const roninCard = document.getElementById("roninCard");

// Identify platform link headings
const cloudstorLink = document.getElementById("cloudstorLink");
const sharepointLink = document.getElementById("sharepointLink");
const redcapLink = document.getElementById("redcapLink");
const qualtricsLink = document.getElementById("qualtricsLink");
const limesurveyLink = document.getElementById("limesurveyLink");
const labarchivesLink = document.getElementById("labarchivesLink");
const adaLink = document.getElementById("adaLink");
const rdrLink = document.getElementById("rdrLink");
const dryadLink = document.getElementById("dryadLink");
const zenodoLink = document.getElementById("zenodoLink");
const dmpLink = document.getElementById("dmpLink");
const awsLink = document.getElementById("awsLink");
const roninLink = document.getElementById("roninLink");

function removeCard(card, link, modal) {
  card.classList.add("greyed-out-card");
  link.removeAttribute("href");
  link.removeAttribute("data-bs-toggle");
  link.removeAttribute("data-bs-target");
}

function addCard(card, link, modal) {
  card.classList.remove("greyed-out-card");
  link.setAttribute("href", "#");
  link.setAttribute("data-bs-toggle", "modal");
  link.setAttribute("data-bs-target", modal);
}

function updatePlatformCards() {
  // Grab the form choices made so far
  const selections = [];
  const checkedList = document.querySelectorAll("input:checked");
  checkedList.forEach((check) => {
    selections.push(check["value"]);
  });

  console.log(selections);

  // To begin, turn off all cards
  removeCard(cloudstorCard, cloudstorLink, "#cloudstorModal");
  removeCard(sharepointCard, sharepointLink, "#sharepointModal");
  removeCard(labarchivesCard, labarchivesLink, "#labarchivesModal");
  removeCard(limesurveyCard, limesurveyLink, "#limesurveyModal");
  removeCard(qualtricsCard, qualtricsLink, "#qualtricsModal");
  removeCard(awsCard, awsLink, "#awsModal");
  removeCard(adaCard, adaLink, "#adaModal");
  removeCard(rdrCard, rdrLink, "#rdrModal");
  removeCard(redcapCard, redcapLink, "#redcapModal");
  removeCard(dryadCard, dryadLink, "#dryadModal");
  removeCard(zenodoCard, zenodoLink, "#zenodoModal");
  removeCard(dmpCard, dmpLink, "#dmpModal");
  removeCard(roninCard, roninLink, "#roninModal");

  // Switch cards on based on sensitivity
  if (selections.includes("general")) {
    addCard(cloudstorCard, cloudstorLink, "#cloudstorModal");
    addCard(sharepointCard, sharepointLink, "#sharepointModal");
    addCard(labarchivesCard, labarchivesLink, "#labarchivesModal");
    addCard(limesurveyCard, limesurveyLink, "#limesurveyModal");
    addCard(qualtricsCard, qualtricsLink, "#qualtricsModal");
    addCard(awsCard, awsLink, "#awsModal");
    addCard(adaCard, adaLink, "#adaModal");
    addCard(rdrCard, rdrLink, "#rdrModal");
    addCard(redcapCard, redcapLink, "#redcapModal");
    addCard(dryadCard, dryadLink, "#dryadModal");
    addCard(zenodoCard, zenodoLink, "#zenodoModal");
    addCard(dmpCard, dmpLink, "#dmpModal");
    addCard(roninCard, roninLink, "#roninModal");
  }

  if (selections.includes("sensitive")) {
    addCard(cloudstorCard, cloudstorLink, "#cloudstorModal");
    addCard(sharepointCard, sharepointLink, "#sharepointModal");
    addCard(labarchivesCard, labarchivesLink, "#labarchivesModal");
    addCard(limesurveyCard, limesurveyLink, "#limesurveyModal");
    addCard(qualtricsCard, qualtricsLink, "#qualtricsModal");
    addCard(awsCard, awsLink, "#awsModal");
    addCard(adaCard, adaLink, "#adaModal");
    addCard(redcapCard, redcapLink, "#redcapModal");
    addCard(dmpCard, dmpLink, "#dmpModal");
    addCard(roninCard, roninLink, "#roninModal");
  }

  if (selections.includes("highly-sensitive")) {
    addCard(sharepointCard, sharepointLink, "#sharepointModal");
    addCard(labarchivesCard, labarchivesLink, "#labarchivesModal");
    addCard(limesurveyCard, limesurveyLink, "#limesurveyModal");
    addCard(awsCard, awsLink, "#awsModal");
    addCard(adaCard, adaLink, "#adaModal");
    addCard(dmpCard, dmpLink, "#dmpModal");
    addCard(redcapCard, redcapLink, "#redcapModal");
    addCard(roninCard, roninLink, "#roninModal");
  }

  // Switch cards off based on data lifecycle type
  if (!selections.includes("data-capture")) {
    removeCard(labarchivesCard, labarchivesLink, "#labarchivesModal");
    removeCard(limesurveyCard, limesurveyLink, "#limesurveyModal");
    removeCard(qualtricsCard, qualtricsLink, "#qualtricsModal");
    removeCard(redcapCard, redcapLink, "#redcapModal");
  }

  if (!selections.includes("data-management")) {
    removeCard(dmpCard, dmpLink, "#dmpModal");
  }

  if (!selections.includes("data-storage")) {
    removeCard(cloudstorCard, cloudstorLink, "#cloudstorModal");
    removeCard(sharepointCard, sharepointLink, "#sharepointModal");
    removeCard(labarchivesCard, labarchivesLink, "#labarchivesModal");
  }

  if (!selections.includes("data-compute")) {
    removeCard(awsCard, awsLink, "#awsModal");
    removeCard(roninCard, roninLink, "#roninModal");
  }

  if (!selections.includes("data-archival")) {
    removeCard(adaCard, adaLink, "#adaModal");
    removeCard(rdrCard, rdrLink, "#rdrModal");
    removeCard(dryadCard, dryadLink, "#dryadModal");
    removeCard(zenodoCard, zenodoLink, "#zenodoModal");
  }
}

updatePlatformCards();
