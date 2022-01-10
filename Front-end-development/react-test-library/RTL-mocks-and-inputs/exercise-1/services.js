const service = require("./services");

describe('mockar e testar o retorno', () => {
  test('should return exact value, the function calling and how many times it was called', () => {
    service.randomNum = jest.fn().mockReturnValue(10);

    expect(service.randomNum()).toBe(10);
    expect(service.randomNum).toHaveBeenCalled();
    expect(service.randomNum).toHaveBeenCalledTimes(1);
  })
  
  test('should the function be called, test return and how many times', () => {
    service.randomNum = jest.fn().mockImplementationOnce((a, b) => a / b);

    expect(service.randomNum(20, 2)).toBe(10);
    expect(service.randomNum).toHaveBeenCalled();
    expect(service.randomNum).toHaveBeenCalledTimes(1);
    expect(service.randomNum).toHaveBeenCalledWith(20, 2)
  })
  
})


// Exercicios

// 1 - Crie uma função que gere um número aleatório

// Defina uma função que gere um número aleatório entre 0 e 100.

// Desenvolva os testes para essa função.

// Utilize o mock e defina o retorno padrão como 10.

// Teste se a função foi chamada, qual seu retorno e quantas vezes foi chamada.

// 2 - Com a mesma função do exercício anterior, utilizando o mock, crie uma nova implementação, que deve receber dois parâmetros e retornar a divisão do primeiro pelo segundo. Essa implementação deve ocorrer uma única vez.

// Defina o mock da função para a nova funcionalidade da função.

// Teste se a função foi chamada e a nova implementação de divisão foi aplicada.

// Verifique se a aplicação da nova implementação acontece apenas uma vez.

// 3 - Use a mesma função do primeiro exercício

// Utilize o mock e desenvolva uma nova implementação que receba três parâmetrosRetorne a multiplicação dos parâmetros.

// Realize os testes que achar necessário.

// Resete sua implementação e crie uma nova, que receba apenas um parâmetro e retorne o dobro.

// Faça os testes que achar necessário.