function getFormDetails(formID) {
  for (var i = 0; i < forms.length; i++) {
    if (forms[i].form_id == formID) {
      return forms[i];
    }
  }
}

function activateNextButton(nextFormID) {
  // Grab next button element
  const nextBtn = document.getElementById("nextFormBtn");
  nextBtn.removeAttribute("disabled");
  nextBtn.setAttribute("onclick", "nextForm(" + nextFormID + ")");
}

function disableNextButton() {
  // Grab next button element
  const nextBtn = document.getElementById("nextFormBtn");
  nextBtn.setAttribute("disabled", "");
}

function setAnswers(answers) {
  var html = [];
  answers.forEach(function (answer) {
    // myanswer = `onclick="activateNextButton(${answer["answer_code"]}, ${answer["next_form_id"]})"`;
    var answer_html = [
      '<div class="form-check mb-2">',
      '<input class="form-check-input" type="radio"',
      'name="purposeRadio"',
      'id="' + answer["answer_code"] + '"',
      'onclick="activateNextButton(' + answer["next_form_id"] + ')"',
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

function nextForm(formID) {
  populateForm(formID);
}

function populateForm(formID) {
  // Grab form details
  const currentForm = getFormDetails(formID);

  // Grab form html elements
  const formQuestion = document.getElementById("form-question");
  const helpText = document.getElementById("help-text");
  const formAnswers = document.getElementById("form-answers");

  // Disable Next Button
  disableNextButton();

  // Populate form html
  formQuestion.innerText = currentForm["question"];
  helpText.innerText = currentForm["help_text"];
  answers = setAnswers(currentForm["answers"]);
  formAnswers.innerHTML = answers;
}

fetch("forms.json")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    forms = data;
    populateForm(1);
  })
  .catch((err) => {
    // Do something for an error here
  });
