const mission = process.argv[2];

if (mission === "learn") {
  console.log(`Time to write some Node code!`);
} else {
  console.log(`Is ${mission} really more fun?`);
}

// 2 - faça com que o valor de "mission" seja passado por linha de comando utilizando a propriedade
// "argv" do objeto global "process".

// execute o arquivo passando como terceiro argumento o valor "explore".
