//1.4

const esTuVieux = function (firstname, lastname, yob) {
  const currentYear = new Date().getFullYear();
  if (
    typeof firstname == "string" &&
    typeof lastname == "string" &&
    yob < currentYear
  ) {
    let age = currentYear - yob;
    let status = "";
    switch (true) {
      case age < 25:
        status = "jeune";
        break;
      case age < 50:
        status = "plus tout jeune";
        break;
      case age < 75:
        status = "vieillissant";
        break;
      case age >= 75:
        status = "vieux";
        break;
    }
    console.log(`${firstname} ${lastname} est ${status}`);
  } else console.log("Entrez des informations valides svp");
};

esTuVieux("David", "Brais", 1991);
esTuVieux(12, "Brais", 1991);
