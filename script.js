const numbersToWordsMap = [
  "cero", "uno", "dos", "tres", "cuatro", "cinco", "seis", "siete", "ocho", "nueve", "diez",
  "once", "doce", "trece", "catorce", "quince", "dieciséis", "diecisiete", "dieciocho", "diecinueve", "veinte",
  "veintiuno", "veintidós", "veintitrés", "veinticuatro", "veinticinco", "veintiséis", "veintisiete", "veintiocho", "veintinueve", "treinta",
  "treinta y uno", "treinta y dos", "treinta y tres", "treinta y cuatro", "treinta y cinco", "treinta y seis", "treinta y siete", "treinta y ocho", "treinta y nueve", "cuarenta",
  "cuarenta y uno", "cuarenta y dos", "cuarenta y tres", "cuarenta y cuatro", "cuarenta y cinco", "cuarenta y seis", "cuarenta y siete", "cuarenta y ocho", "cuarenta y nueve", "cincuenta",
  "cincuenta y uno", "cincuenta y dos", "cincuenta y tres", "cincuenta y cuatro", "cincuenta y cinco", "cincuenta y seis", "cincuenta y siete", "cincuenta y ocho", "cincuenta y nueve", "sesenta",
  "sesenta y uno", "sesenta y dos", "sesenta y tres", "sesenta y cuatro", "sesenta y cinco", "sesenta y seis", "sesenta y siete", "sesenta y ocho", "sesenta y nueve", "setenta",
  "setenta y uno", "setenta y dos", "setenta y tres", "setenta y cuatro", "setenta y cinco", "setenta y seis", "setenta y siete", "setenta y ocho", "setenta y nueve", "ochenta",
  "ochenta y uno", "ochenta y dos", "ochenta y tres", "ochenta y cuatro", "ochenta y cinco", "ochenta y seis", "ochenta y siete", "ochenta y ocho", "ochenta y nueve", "noventa",
  "noventa y uno", "noventa y dos", "noventa y tres", "noventa y cuatro", "noventa y cinco", "noventa y seis", "noventa y siete", "noventa y ocho", "noventa y nueve", "cien"
];

let currentMode = "numbersToWords";
let currentQuestion = null;

function setMode(mode) {
  currentMode = mode;
  generateQuestion();
}

function generateQuestion() {
  const randomNumber = Math.floor(Math.random() * 101); // Número aleatorio entre 0 y 100

  if (currentMode === "numbersToWords") {
    currentQuestion = randomNumber;
    document.getElementById("question").textContent = `Escribe en letras: ${randomNumber}`;
  } else if (currentMode === "wordsToNumbers") {
    currentQuestion = numbersToWordsMap[randomNumber];
    document.getElementById("question").textContent = `Escribe en números: ${numbersToWordsMap[randomNumber]}`;
  } else if (currentMode === "mixed") {
    if (Math.random() > 0.5) {
      currentQuestion = randomNumber;
      document.getElementById("question").textContent = `Escribe en letras: ${randomNumber}`;
    } else {
      currentQuestion = numbersToWordsMap[randomNumber];
      document.getElementById("question").textContent = `Escribe en números: ${numbersToWordsMap[randomNumber]}`;
    }
  }
}

function checkAnswer() {
  const userAnswer = document.getElementById("answer").value.trim().toLowerCase();
  let correctAnswer;

  if (currentMode === "numbersToWords" || (currentMode === "mixed" && typeof currentQuestion === "number")) {
    correctAnswer = numbersToWordsMap[currentQuestion];
  } else {
    correctAnswer = numbersToWordsMap.indexOf(currentQuestion).toString();
  }

  if (userAnswer === correctAnswer) {
    document.getElementById("result").textContent = "¡Correcto!";
    document.getElementById("result").style.color = "green";
  } else {
    document.getElementById("result").textContent = `Incorrecto. La respuesta correcta era: ${correctAnswer}`;
    document.getElementById("result").style.color = "red";
  }

  document.getElementById("answer").value = "";
  generateQuestion();
}

// Generar una pregunta inicial al cargar la página
window.onload = generateQuestion;
