// 1 - Crie uma função que retorne um objeto no formato { nomeCompleto, email } representando uma nova pessoa contratada. Passe sua função como parâmetro da HOF newEmployees para criar cada pessoa contratada em seu respectivo id . A sua função deve receber como parâmetro o nome completo da pessoa funcionária e a partir dele gerar automaticamente um email no formato nome_da_pessoa@trybe.com .

const newPerson = (fullName) => {
const email = fullName.toLowerCase().split(' ').join('');
return {name: fullName, email: `${email}@trybe.com`};
}

const newEmployees = (newPerson) => {
  const employees = {
    id1: newPerson('Pedro Guerra'), // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
    id2: newPerson('Luiza Drumond'), // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
    id3: newPerson('Carla Paiva'), // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
  }
  return employees;
};

console.log(newEmployees(newPerson));

// 2 -

const numberGenerator = () => {
  const number = Math.floor((Math.random() * 5) + 1);

  return number;
};

const numberChecker = (numberGenerator, number) => {
  const numberGenerated = numberGenerator();
  
  if(numberGenerated === number) {
    return 'You Win!';
  } else {
    return 'You loss, try again';
  };
};

console.log(numberChecker(numberGenerator, 5));