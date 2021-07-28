const forms = [
  {
    form_id: 0,
    question: "What do you want to do?",
    help_text: "Tell us what you want to do",
    answers: [
      {
        answer_id: "1",
        answer_code: "capture-data",
        answer_block: "capture-data",
        answer_text: "Capture Data",
        next_form_id: 1,
      },
      {
        answer_id: "2",
        answer_code: "store-data",
        answer_text: "Store Data",
        next_form_id: 1,
      },
      {
        answer_id: "3",
        answer_code: "analyse-data",
        answer_text: "Analyse Data",
        next_form_id: 1,
      },
      {
        answer_id: "4",
        answer_code: "archive-data",
        answer_text: "Archive Data",
        next_form_id: 1,
      },
    ],
  },
  {
    form_id: 1,
    question: "What is the sensitivity of your data?",
    help_text:
      "The choice of platforms available to you are dependent on the sensitivity of your data",
    answers: [
      {
        answer_id: "1",
        answer_code: "general",
        answer_text: "General",
        next_form_id: 2,
      },
      {
        answer_id: "2",
        answer_code: "sensitive",
        answer_text: "Sensitive",
        next_form_id: 2,
      },
      {
        answer_id: "3",
        answer_code: "highly-sensitive",
        answer_text: "Highly Sensitive",
        next_form_id: 2,
      },
    ],
  },
];

function getFormDetails(formID) {
  for (var i = 0; i < forms.length; i++) {
    if (forms[i].form_id == formID) {
      return forms[i];
    }
  }
}

function activateNextButton(answer_code, nextFormID) {
  // Grab next button element
  const nextBtn = document.getElementById("nextFormBtn");
  nextBtn.removeAttribute("disabled");
  nextBtn.setAttribute(
    "onclick",
    "populateForm(" + answer_code + "," + nextFormID + ")"
  );
}

function disableNextButton() {
  // Grab next button element
  const nextBtn = document.getElementById("nextFormBtn");
  nextBtn.setAttribute("disabled", "");
}

function setAnswers(answers) {
  var html = [];
  answers.forEach(function (answer) {
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

function nextForm() {
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

populateForm(0);
