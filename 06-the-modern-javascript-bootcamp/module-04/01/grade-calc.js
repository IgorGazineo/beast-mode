const gradeCalc = function (score, totalPossibleScore) {
  const perc = (score / totalPossibleScore) * 100;
  let letter = "";
  switch (true) {
    case perc >= 90:
      letter = "A";
      break;
    case perc >= 80:
      letter = "B";
      break;
    case perc >= 70:
      letter = "C";
      break;
    case perc >= 60:
      letter = "D";
      break;
    default:
      letter = "F";
  }

  return `You got a ${letter} (${perc}%)!`;
};

console.log(gradeCalc(17, 20));

// - crie uma função "gradeCalc" que calcula a média do aluno.
// - essa função deve ter 2 parâmetros: score, totalPossibleScore.
// - essa função deve retornar uma string no modelo: "You got a C (75%)!"
// - sistema de média: A 90-100 | B 80-89 | C 70-79 | D 60-69 | F 0-59
