import React from 'react';
import userEvent from '@testing-library/user-event';
import { render, screen } from '@testing-library/react';
import App from '../App';

const texto = 'teste';

describe('Testes do botão', () => {
  it('should button exist with "adicionar" text', () => {
    render(<App />);
    const btn = screen.getByText('Adicionar');
    expect(btn).toBeInTheDocument();
  });

  test('test if input is added in page when user clicks "adicionar" ', () => {
    render(<App />);
    const btn = screen.getByText('Adicionar');
    const task = screen.getByLabelText('Tarefa:');
    userEvent.type(task, texto);
    expect(screen.queryByText(texto)).not.toBeInTheDocument();
    userEvent.click(btn);
    expect(screen.queryByText(texto)).toBeInTheDocument();
  });
});

// Implemente os testes:

// Necessário um botão para adicionar a tarefa.
// Botão precisa conter o texto "Adicionar".
// Ao ser clicado a tarefa digitada pelo o usuário precisa ser salva.
