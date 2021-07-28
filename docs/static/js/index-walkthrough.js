// Get the different question forms
const purposeForm = document.getElementById("purposeForm");
const captTypeForm = document.getElementById("captTypeForm");
const captSurvSensForm = document.getElementById("captSurvSensForm");
const captAVSensForm = document.getElementById("captAVSensForm");
const finishForm = document.getElementById("finishForm");
// const datavolumeForm = document.getElementById("datavolumeForm");
// const costForm = document.getElementById("costForm");

const formsDetails = [
  // {
  //   id: 1,
  //   formName: datacaptureTypeForm,
  //   next: sensitivityForm,
  //   nextBtnText: ">>> Data Sensitivity",
  //   helpText: "What type of data capture are you planning?",
  //   showReset: true,
  // },
  // {
  //   id: 2,
  //   formName: datacaptureTypeForm,
  //   next: sensitivityForm,
  //   nextBtnText: ">>> Data Sensitivity",
  //   helpText: "What type of data capture are you planning?",
  //   showReset: true,
  // },
  {
    id: 0,
    formName: purposeForm,
    helpText: "What are you hoping to do at this stage?",
    nextBtnText: "",
    showReset: false,
  },
  {
    id: 1,
    formName: captTypeForm,
    helpText: "What is the type of the data you're capturing?",
    nextBtnText: ">>> Data Type",
    showReset: true,
  },
  {
    id: 2,
    formName: captSurvSensForm,
    helpText: "What is the sensitivity of your survey data?",
    nextBtnText: ">>> Data Sensitivity",
    showReset: true,
  },
  {
    id: 3,
    formName: captAVSensForm,
    helpText: "What is the sensitivity of your AV data?",
    nextBtnText: ">>> Data Sensitivity",
    showReset: true,
  },
  {
    id: 4,
    formName: finishForm,
    helpText: "Press the Reset button to run this wizard again",
    nextBtnText: "Finish",
    showReset: true,
  },
  // {
  //   id: 3,
  //   formName: datavolumeForm,
  //   next: costForm,
  //   nextBtnText: ">>> Budget",
  //   helpText: "How much data do you have?",
  //   showReset: true,
  // },

  // {
  //   id: 4,
  //   formName: costForm,
  //   next: purposeForm,
  //   helpText: "How much budget do you have?",
  //   showReset: true,
  // },
];

function findForm(formName) {
  for (var i = 0; i < formsDetails.length; i++) {
    if (formsDetails[i].formName == formName) {
      return formsDetails[i];
    }
  }
}

function showForm(currentForm) {
  // Hide any present form box

  // This function will display the specified individual form ...
  currentForm.style.display = "block";

  // Get the details for the current form
  formDetails = findForm(currentForm);

  // populate the help text section, then hide it ready for info button hover show
  const helpTextDiv = document.getElementById("helpText");
  helpTextDiv.innerText = formDetails["helpText"];
  helpTextDiv.style.display = "none";

  // Populate the 'next' button with relevant text
  const nextBtn = document.getElementById("nextBtn");
  const nextBtnText = formDetails["nextBtnText"];
  currentForm.id == "costForm"
    ? (nextBtn.innerHTML = "Reset Form")
    : (nextBtn.innerHTML = nextBtnText);

  // Hide the Next button until a selection is made
  nextBtn.style.visibility = "hidden";

  // Show/Hide the Reset button depending on what form is current
  const resetBtn = document.getElementById("resetBtn");
  if (formDetails["showReset"]) {
    resetBtn.style.visibility = "visible";
  } else {
    resetBtn.style.visibility = "hidden";
  }
  // // Hide the Reset button until a selection is made
  // resetBtn = document.getElementById("resetBtn");
  // resetBtn.style.display = "none";

  // Upadte the platforms exposed on the page based on choices made
  updatePlatforms();
}

function updatePlatforms() {
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

  // Grab the form choices made so far
  const selections = [];
  const checkedList = document.querySelectorAll("input:checked");
  checkedList.forEach((check) => {
    selections.push(check["value"]);
  });

  if (selections.includes("purpose-capture-data")) {
    cloudstorCard.classList.add("greyed-out-card");
    cloudstorLink.removeAttribute("href");
    cloudstorLink.removeAttribute("data-bs-toggle");
    cloudstorLink.removeAttribute("data-bs-target");
    sharepointCard.classList.add("greyed-out-card");
    sharepointLink.removeAttribute("href");
    sharepointLink.removeAttribute("data-bs-toggle");
    sharepointLink.removeAttribute("data-bs-target");
    awsCard.classList.add("greyed-out-card");
    awsLink.removeAttribute("href");
    awsLink.removeAttribute("data-bs-toggle");
    awsLink.removeAttribute("data-bs-target");
    adaCard.classList.add("greyed-out-card");
    adaLink.removeAttribute("href");
    adaLink.removeAttribute("data-bs-toggle");
    adaLink.removeAttribute("data-bs-target");
    rdrCard.classList.add("greyed-out-card");
    rdrLink.removeAttribute("href");
    rdrLink.removeAttribute("data-bs-toggle");
    rdrLink.removeAttribute("data-bs-target");
    dryadCard.classList.add("greyed-out-card");
    dryadLink.removeAttribute("href");
    dryadLink.removeAttribute("data-bs-toggle");
    dryadLink.removeAttribute("data-bs-target");
    zenodoCard.classList.add("greyed-out-card");
    zenodoLink.removeAttribute("href");
    zenodoLink.removeAttribute("data-bs-toggle");
    zenodoLink.removeAttribute("data-bs-target");
    dmpCard.classList.add("greyed-out-card");
    dmpLink.removeAttribute("href");
    dmpLink.removeAttribute("data-bs-toggle");
    dmpLink.removeAttribute("data-bs-target");
    roninCard.classList.add("greyed-out-card");
    roninLink.removeAttribute("href");
    roninLink.removeAttribute("data-bs-toggle");
    roninLink.removeAttribute("data-bs-target");
  }

  if (selections.includes("purpose-store-data")) {
    redcapCard.classList.add("greyed-out-card");
    redcapLink.removeAttribute("href");
    redcapLink.removeAttribute("data-bs-toggle");
    redcapLink.removeAttribute("data-bs-target");
    qualtricsCard.classList.add("greyed-out-card");
    qualtricsLink.removeAttribute("href");
    qualtricsLink.removeAttribute("data-bs-toggle");
    qualtricsLink.removeAttribute("data-bs-target");
    limesurveyCard.classList.add("greyed-out-card");
    limesurveyLink.removeAttribute("href");
    limesurveyLink.removeAttribute("data-bs-toggle");
    limesurveyLink.removeAttribute("data-bs-target");
    labarchivesCard.classList.add("greyed-out-card");
    labarchivesLink.removeAttribute("href");
    labarchivesLink.removeAttribute("data-bs-toggle");
    labarchivesLink.removeAttribute("data-bs-target");
    adaCard.classList.add("greyed-out-card");
    adaLink.removeAttribute("href");
    adaLink.removeAttribute("data-bs-toggle");
    adaLink.removeAttribute("data-bs-target");
    rdrCard.classList.add("greyed-out-card");
    rdrLink.removeAttribute("href");
    rdrLink.removeAttribute("data-bs-toggle");
    rdrLink.removeAttribute("data-bs-target");
    dryadCard.classList.add("greyed-out-card");
    dryadLink.removeAttribute("href");
    dryadLink.removeAttribute("data-bs-toggle");
    dryadLink.removeAttribute("data-bs-target");
    zenodoCard.classList.add("greyed-out-card");
    zenodoLink.removeAttribute("href");
    zenodoLink.removeAttribute("data-bs-toggle");
    zenodoLink.removeAttribute("data-bs-target");
    dmpCard.classList.add("greyed-out-card");
    dmpLink.removeAttribute("href");
    dmpLink.removeAttribute("data-bs-toggle");
    dmpLink.removeAttribute("data-bs-target");
    roninCard.classList.add("greyed-out-card");
    roninLink.removeAttribute("href");
    roninLink.removeAttribute("data-bs-toggle");
    roninLink.removeAttribute("data-bs-target");
  }

  if (selections.includes("purpose-archive-data")) {
    cloudstorCard.classList.add("greyed-out-card");
    cloudstorLink.removeAttribute("href");
    cloudstorLink.removeAttribute("data-bs-toggle");
    cloudstorLink.removeAttribute("data-bs-target");
    sharepointCard.classList.add("greyed-out-card");
    sharepointLink.removeAttribute("href");
    sharepointLink.removeAttribute("data-bs-toggle");
    sharepointLink.removeAttribute("data-bs-target");
    awsCard.classList.add("greyed-out-card");
    awsLink.removeAttribute("href");
    awsLink.removeAttribute("data-bs-toggle");
    awsLink.removeAttribute("data-bs-target");
    redcapCard.classList.add("greyed-out-card");
    redcapLink.removeAttribute("href");
    redcapLink.removeAttribute("data-bs-toggle");
    redcapLink.removeAttribute("data-bs-target");
    qualtricsCard.classList.add("greyed-out-card");
    qualtricsLink.removeAttribute("href");
    qualtricsLink.removeAttribute("data-bs-toggle");
    qualtricsLink.removeAttribute("data-bs-target");
    limesurveyCard.classList.add("greyed-out-card");
    limesurveyLink.removeAttribute("href");
    limesurveyLink.removeAttribute("data-bs-toggle");
    limesurveyLink.removeAttribute("data-bs-target");
    labarchivesCard.classList.add("greyed-out-card");
    labarchivesLink.removeAttribute("href");
    labarchivesLink.removeAttribute("data-bs-toggle");
    labarchivesLink.removeAttribute("data-bs-target");
    dmpCard.classList.add("greyed-out-card");
    dmpLink.removeAttribute("href");
    dmpLink.removeAttribute("data-bs-toggle");
    dmpLink.removeAttribute("data-bs-target");
    roninCard.classList.add("greyed-out-card");
    roninLink.removeAttribute("href");
    roninLink.removeAttribute("data-bs-toggle");
    roninLink.removeAttribute("data-bs-target");
  }

  if (selections.includes("purpose-analyse-data")) {
    cloudstorCard.classList.add("greyed-out-card");
    cloudstorLink.removeAttribute("href");
    cloudstorLink.removeAttribute("data-bs-toggle");
    cloudstorLink.removeAttribute("data-bs-target");
    sharepointCard.classList.add("greyed-out-card");
    sharepointLink.removeAttribute("href");
    sharepointLink.removeAttribute("data-bs-toggle");
    sharepointLink.removeAttribute("data-bs-target");
    awsCard.classList.add("greyed-out-card");
    awsLink.removeAttribute("href");
    awsLink.removeAttribute("data-bs-toggle");
    awsLink.removeAttribute("data-bs-target");
    redcapCard.classList.add("greyed-out-card");
    redcapLink.removeAttribute("href");
    redcapLink.removeAttribute("data-bs-toggle");
    redcapLink.removeAttribute("data-bs-target");
    qualtricsCard.classList.add("greyed-out-card");
    qualtricsLink.removeAttribute("href");
    qualtricsLink.removeAttribute("data-bs-toggle");
    qualtricsLink.removeAttribute("data-bs-target");
    limesurveyCard.classList.add("greyed-out-card");
    limesurveyLink.removeAttribute("href");
    limesurveyLink.removeAttribute("data-bs-toggle");
    limesurveyLink.removeAttribute("data-bs-target");
    labarchivesCard.classList.add("greyed-out-card");
    labarchivesLink.removeAttribute("href");
    labarchivesLink.removeAttribute("data-bs-toggle");
    labarchivesLink.removeAttribute("data-bs-target");
    adaCard.classList.add("greyed-out-card");
    adaLink.removeAttribute("href");
    adaLink.removeAttribute("data-bs-toggle");
    adaLink.removeAttribute("data-bs-target");
    rdrCard.classList.add("greyed-out-card");
    rdrLink.removeAttribute("href");
    rdrLink.removeAttribute("data-bs-toggle");
    rdrLink.removeAttribute("data-bs-target");
    dryadCard.classList.add("greyed-out-card");
    dryadLink.removeAttribute("href");
    dryadLink.removeAttribute("data-bs-toggle");
    dryadLink.removeAttribute("data-bs-target");
    zenodoCard.classList.add("greyed-out-card");
    zenodoLink.removeAttribute("href");
    zenodoLink.removeAttribute("data-bs-toggle");
    zenodoLink.removeAttribute("data-bs-target");
    dmpCard.classList.add("greyed-out-card");
    dmpLink.removeAttribute("href");
    dmpLink.removeAttribute("data-bs-toggle");
    dmpLink.removeAttribute("data-bs-target");
  }

  if (selections.includes("purpose-plan-data")) {
    cloudstorCard.classList.add("greyed-out-card");
    cloudstorLink.removeAttribute("href");
    cloudstorLink.removeAttribute("data-bs-toggle");
    cloudstorLink.removeAttribute("data-bs-target");
    sharepointCard.classList.add("greyed-out-card");
    sharepointLink.removeAttribute("href");
    sharepointLink.removeAttribute("data-bs-toggle");
    sharepointLink.removeAttribute("data-bs-target");
    awsCard.classList.add("greyed-out-card");
    awsLink.removeAttribute("href");
    awsLink.removeAttribute("data-bs-toggle");
    awsLink.removeAttribute("data-bs-target");
    redcapCard.classList.add("greyed-out-card");
    redcapLink.removeAttribute("href");
    redcapLink.removeAttribute("data-bs-toggle");
    redcapLink.removeAttribute("data-bs-target");
    qualtricsCard.classList.add("greyed-out-card");
    qualtricsLink.removeAttribute("href");
    qualtricsLink.removeAttribute("data-bs-toggle");
    qualtricsLink.removeAttribute("data-bs-target");
    limesurveyCard.classList.add("greyed-out-card");
    limesurveyLink.removeAttribute("href");
    limesurveyLink.removeAttribute("data-bs-toggle");
    limesurveyLink.removeAttribute("data-bs-target");
    labarchivesCard.classList.add("greyed-out-card");
    labarchivesLink.removeAttribute("href");
    labarchivesLink.removeAttribute("data-bs-toggle");
    labarchivesLink.removeAttribute("data-bs-target");
    adaCard.classList.add("greyed-out-card");
    adaLink.removeAttribute("href");
    adaLink.removeAttribute("data-bs-toggle");
    adaLink.removeAttribute("data-bs-target");
    rdrCard.classList.add("greyed-out-card");
    rdrLink.removeAttribute("href");
    rdrLink.removeAttribute("data-bs-toggle");
    rdrLink.removeAttribute("data-bs-target");
    dryadCard.classList.add("greyed-out-card");
    dryadLink.removeAttribute("href");
    dryadLink.removeAttribute("data-bs-toggle");
    dryadLink.removeAttribute("data-bs-target");
    zenodoCard.classList.add("greyed-out-card");
    zenodoLink.removeAttribute("href");
    zenodoLink.removeAttribute("data-bs-toggle");
    zenodoLink.removeAttribute("data-bs-target");
    roninCard.classList.add("greyed-out-card");
    roninLink.removeAttribute("href");
    roninLink.removeAttribute("data-bs-toggle");
    roninLink.removeAttribute("data-bs-target");
  }

  if (selections.includes("sens-highly-sensitive")) {
    cloudstorCard.classList.add("greyed-out-card");
    qualtricsCard.classList.add("greyed-out-card");
    rdrCard.classList.add("greyed-out-card");
    dryadCard.classList.add("greyed-out-card");
    zenodoCard.classList.add("greyed-out-card");
    dmpCard.classList.add("greyed-out-card");
  }

  return selections;
}

// function loadNextForm() {
//   // Hide the current Form:
//   currentForm.style.display = "none";
//   // Change current form to the next form:
//   formDetails = findForm(currentForm);
//   currentForm = formDetails["next"];
//   showForm(currentForm);
// }

// function loadNextForm(nextForm) {
//   // Hide the current Form:
//   currentForm.style.display = "none";
//   // Change current form to the next form:
//   formDetails = findForm(nextForm);
//   currentForm = formDetails["formName"];
//   showForm(currentForm);
// }

function resetForm() {
  window.location.reload();
}

function showNextBtn(nextForm) {
  // Get the details of the next form
  const nextFormDetails = findForm(nextForm);
  const nextBtnText = nextFormDetails["nextBtnText"];
  // Set up the 'next' button
  const nextBtn = document.getElementById("nextBtn");
  nextBtn.onclick = function () {
    currentForm.style.display = "none";
    showForm(nextForm);
    currentForm = nextForm;
  };
  nextBtn.innerHTML = nextBtnText;
  nextBtn.style.visibility = "visible";
}

function showHelpText() {
  const helpTextDiv = document.getElementById("helpText");
  helpTextDiv.style.display = "block";
}

function hideHelpText() {
  const helpTextDiv = document.getElementById("helpText");
  helpTextDiv.style.display = "none";
}

function startForms() {
  // Switch the header text
  document.getElementById("intro-text").style.display = "none";

  // Start by exposing the initial form
  showForm(currentForm);
}

// Initialise things with the first form to be used

let currentForm = purposeForm;
