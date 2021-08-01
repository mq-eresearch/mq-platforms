function getPageDetails(pageID) {
  for (var i = 0; i < forms.length; i++) {
    if (forms[i].page_id == pageID) {
      return forms[i];
    }
  }
}

function activateNextButton(nextPageID, nextPageType) {
  // Grab next button element
  const nextBtn = document.getElementById("nextFormBtn");
  if (nextPageType == "form") {
    nextBtn.innerText = "Next >>>";
    nextBtn.classList.remove("btn-success");
    nextBtn.classList.add("btn-info");
  } else {
    nextBtn.innerText = "Finish >>>";
    nextBtn.classList.remove("btn-info");
    nextBtn.classList.add("btn-success");
  }
  nextBtn.setAttribute("onclick", "nextPage(" + nextPageID + ")");
  nextBtn.classList.remove("invisible");
}

function hideNextButton() {
  // Grab next button element
  const nextBtn = document.getElementById("nextFormBtn");
  nextBtn.classList.add("invisible");
}

function setAnswers(answers) {
  var html = [];
  answers.forEach(function (answer) {
    myanswer = `onclick="activateNextButton(${answer["next_page_id"]}, ${answer["next_page_type"]})"`;
    var answer_html = [
      '<div class="form-check mb-2">',
      '<input class="form-check-input" type="radio"',
      'name="purposeRadio"',
      'id="' + answer["answer_code"] + '"',
      `onclick="activateNextButton(${answer["next_page_id"]}, '${answer["next_page_type"]}')"`,
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
  console.log(results);
  results.forEach(function (result) {
    var answer_html = ['<div class="mb-2">', `<p>${result}</p>`, "</div>"].join(
      "\n"
    );
    // var answer_html = [
    //   '<div class="form-check mb-2">',
    //   '<input class="form-check-input" type="radio"',
    //   'name="purposeRadio"',
    //   'id="' + answer["answer_code"] + '"',
    //   `onclick="activateNextButton(${answer["next_page_id"]}, '${answer["next_page_type"]}')"`,
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
  // Start by hiding both form and result sections and the next button
  const formBody = document.getElementById("form-body");
  formBody.style.display = "none";
  const resultBody = document.getElementById("result-body");
  resultBody.style.display = "none";
  hideNextButton();

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

  // Finally, show the form section
  const formBody = document.getElementById("form-body");
  formBody.style.display = "block";
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
  console.log(currentPage);
  console.log(resultsSection);
  results = setResults(currentPage["results"]);
  console.log(results);
  resultsSection.innerHTML = results;

  // Finally, show the results section
  const resultBody = document.getElementById("result-body");
  resultBody.style.display = "block";
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
