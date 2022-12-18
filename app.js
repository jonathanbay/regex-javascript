const inputs = document.querySelectorAll(
  'input[type="text"], input[type="password"]'
);

// Logique a effectuer mais code trop répétitif

// const pseudoChecker = (value) => {
//     const pseudoContainer = document.querySelector('.pseudo-container');
//     const errorDisplay = document.querySelector('.pseudo-container > span');

//     if(value.length > 0 && (value.length < 3 || value.length > 20)) {
//         pseudoContainer.classList.add('error');
//         errorDisplay.textContent = "Le pseudo doit faire entre 3 et 20 caractéres"
//     } else if (!value.match(/^[a-zA-Z0-9_.-]*$/)) {
//         pseudoContainer.classList.add('error');
//         errorDisplay.textContent = "Le pseudo ne doit pas contenir de caractéres spéciaux";
//     } else {
//         pseudoContainer.classList.remove('error');
//         errorDisplay.textContent = "";
//     }
//  };

const progressBar = document.getElementById("progress-bar");
let pseudo, email, password, confirmPassword;

const errorDisplay = (tag, message, valid) => {
  const container = document.querySelector("." + tag + "-container");
  const span = document.querySelector("." + tag + "-container > span");

  if (!valid) {
    container.classList.add("error");
    span.textContent = message;
  } else {
    container.classList.remove("error");
    span.textContent = message;
  }
};

// Logique de validation du pseudo

const pseudoChecker = (value) => {
  if (value.length > 0 && (value.length < 3 || value.length > 20)) {
    errorDisplay("pseudo", "Le pseudo doit faire entre 3 et 20 caractéres.");
    pseudo = null;
  } else if (!value.match(/^[a-zA-Z0-9_.-]*$/)) {
    errorDisplay(
      "pseudo",
      "Le pseudo ne doit pas contenir de caractéres spéciaux."
    );
    pseudo = null;
  } else {
    errorDisplay("pseudo", "", true);
    // permet de stocker le pseudo du formulaire
    pseudo = value;
  }
};

// Logique de validation de l'email

const emailChecker = (value) => {
  if (!value.match(/^[\w_-]+@[\w-]+\.[a-z]{2,4}$/i)) {
    errorDisplay("email", "Le mail n'est pas valide.");
    email = null;
  } else {
    errorDisplay("email", "", true);
    email = value;
  }
};

// Logique de validation du password.

const passwordChecker = (value) => {
  // Regex doit contenir 1 Majuscule, 1 caractére spécial, 1 chiffre un total minimun de 8 caractéres
  if (
    !value.match(
      /^(?=.*?[A-Z])(?=(.*[a-z]){1,})(?=(.*[\d]){1,})(?=(.*[\w]){1,})(?!.*\s).{8,}$/
    )
  ) {
    errorDisplay(
      "password",
      "Minimum 8 caractéres, 1 maj, 1 chiffre et 1 caractere spé"
    );
    progressBar.classList.add("progressRed");
    password = null;
  } else if (value.length < 12) {
    progressBar.classList.add("progressBlue");
    errorDisplay("password", "", true);
    password = value;
  } else {
    progressBar.classList.add("progressGreen");
    errorDisplay("password", "", true);
    password = value;
  }
};

const confirmChecker = (value) => {
  console.log(value);
};

inputs.forEach((input) => {
  input.addEventListener("input", (e) => {
    switch (e.target.id) {
      case "pseudo":
        pseudoChecker(e.target.value);
        break;

      case "email":
        emailChecker(e.target.value);
        break;

      case "password":
        passwordChecker(e.target.value);
        break;

      case "confirm":
        confirmChecker(e.target.value);
        break;
      default:
        null;
    }
  });
});
