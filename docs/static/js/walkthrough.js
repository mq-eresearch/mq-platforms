function getPageDetails(pageID) {
  for (var i = 0; i < forms.length; i++) {
    if (forms[i].page_id == pageID) {
      return forms[i];
    }
  }
}

function showNextButton(nextPageID, nextPageType) {
  // Grab next button element
  const nextBtn = document.getElementById("nextFormBtn");
  if (nextPageType == "form") {
    nextBtn.innerHTML = "Next <i class='bi-arrow-right-circle'></i>";
    nextBtn.classList.remove("btn-success");
    nextBtn.classList.add("btn-info");
  } else {
    nextBtn.innerHTML = "Finish <i class='bi-arrow-right-circle'></i>";
    nextBtn.classList.remove("btn-info");
    nextBtn.classList.add("btn-success");
  }
  nextBtn.setAttribute("onclick", "nextPage(" + nextPageID + ")");
  nextBtn.removeAttribute("disabled");
}

function disableNextButton() {
  // Grab next button element
  const nextBtn = document.getElementById("nextFormBtn");
  nextBtn.setAttribute("disabled", "");
}

function hideNextButton() {
  // Grab next button element
  const nextBtn = document.getElementById("nextFormBtn");
  nextBtn.classList.add("d-none");
}

function showBackButton(previousPageID) {
  const backBtn = document.getElementById("backBtn");
  backBtn.setAttribute("onclick", `nextPage(${previousPageID})`);
  backBtn.classList.remove("d-none");
}

function hideBackButton() {
  const backBtn = document.getElementById("backBtn");
  backBtn.removeAttribute("onclick");
  backBtn.classList.add("d-none");
}

function showResetButton() {
  const backBtn = document.getElementById("resetBtn");
  // backBtn.setAttribute("onclick", `nextPage(${previousPageID})`);
  backBtn.innerHTML = 'Reset <i class="bi-arrow-repeat"></i>';
  backBtn.classList.remove("d-none");
}

function hideResetButton() {
  const backBtn = document.getElementById("resetBtn");
  backBtn.classList.add("d-none");
}

function setAnswers(answers) {
  var html = [];
  answers.forEach(function (answer) {
    var answer_html = [
      '<div class="form-check mb-2">',
      '<input class="form-check-input" type="radio"',
      'name="purposeRadio"',
      'id="' + answer["answer_code"] + '"',
      `onclick="showNextButton(${answer["next_page_id"]}, '${answer["next_page_type"]}')"`,
      'value="' + answer["answer_code"] + '"',
      "/>",
      '<label class="form-check-label" for="' + answer["answer_code"] + '">',
      answer["answer_text"],
      "</label>",
      "</div>",
    ].join("\n");
    html += answer_html;
  });

  return html;
}

function setResults(results) {
  var html = [];
  results.forEach(function (result) {
    var answer_html = ['<div class="mb-2">', `<p>${result}</p>`, "</div>"].join(
      "\n"
    );
    // var answer_html = [
    //   '<div class="form-check mb-2">',
    //   '<input class="form-check-input" type="radio"',
    //   'name="purposeRadio"',
    //   'id="' + answer["answer_code"] + '"',
    //   `onclick="showNextButton(${answer["next_page_id"]}, '${answer["next_page_type"]}')"`,
    //   'value="' + answer["answer_code"] + '"',
    //   "/>",
    //   '<label class="form-check-label" for="' + answer["answer_code"] + '">',
    //   answer["answer_text"],
    //   "</label>",
    //   "</div>",
    // ].join("\n");
    html += answer_html;
  });

  return html;
}

function nextPage(pageID) {
  // Start by hiding both form and result sections, disabling the next button, and hiding the back button and reset button
  const formBody = document.getElementById("form-body");
  formBody.style.display = "none";
  const resultBody = document.getElementById("result-body");
  resultBody.style.display = "none";
  hideBackButton();
  hideResetButton();
  disableNextButton();

  const nextPage = getPageDetails(pageID);
  if (nextPage["page_type"] == "form") {
    populateForm(nextPage);
  } else {
    populateResult(nextPage);
  }
}

function populateForm(page) {
  // Grab form details
  const currentForm = getPageDetails(page["page_id"]);

  // Grab form html elements
  const formQuestion = document.getElementById("form-question");
  const helpText = document.getElementById("help-text");
  const formAnswers = document.getElementById("form-answers");

  // Populate form html
  formQuestion.innerText = currentForm["question"];
  helpText.innerText = currentForm["help_text"];
  answers = setAnswers(currentForm["answers"]);
  formAnswers.innerHTML = answers;

  // Show the form section
  const formBody = document.getElementById("form-body");
  formBody.style.display = "block";

  // // Finally populate and show the back button if applicable

  // // Shohideorm section
  // const formBody = document.getElementById("form-body");
  // formBody.style.display = "block";
  // Finally populate and show the back button if applicable
  if (currentForm["previous_page_id"]) {
    showBackButton(currentForm["previous_page_id"]);
  }
}

function populateResult(page) {
  // Hide form section
  // const formBody = document.getElementById("form-body");
  // formBody.style.display = "none";

  // Grab result details
  const currentPage = getPageDetails(page["page_id"]);

  // // Grab form html elements
  // const formQuestion = document.getElementById("form-question");
  // const helpText = document.getElementById("help-text");
  const resultsSection = document.getElementById("results-text");

  // // Populate form html
  // formQuestion.innerText = currentPage["question"];
  // helpText.innerText = currentPage["help_text"];

  results = setResults(currentPage["results"]);
  resultsSection.innerHTML = results;

  // Finally, show the results section
  const resultBody = document.getElementById("result-body");
  resultBody.style.display = "block";

  // Finally handle the next, back and reset buttons if applicable
  hideNextButton();
  showResetButton();
  // if (currentPage["previous_page_id"]) {
  showBackButton(currentPage["previous_page_id"]);
  // }
}

fetch("forms.json")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    forms = data;
    // const nextPage = getPageDetails(1);
    // populateForm(nextPage);
    nextPage(1);
  })
  .catch((err) => {
    // Do something for an error here
  });
