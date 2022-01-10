import React from 'react';
import userEvent from '@testing-library/user-event';
import { render, screen } from '@testing-library/react';
import App from '../App';
import Item from '../Item';

const batata = 'batata';

describe('Test the application ', () => {
  it('should test the task and expected them to appear. ', () => {
    render(<App />);
    const listTodo = ['Realizar CR', 'Ler Post no Medium', 'Beber água'];
    const input = screen.getByLabelText('Tarefa:');
    const btn = screen.getByText('Adicionar');
    listTodo.forEach((task) => {
      userEvent.type(input, task);
      userEvent.click(btn);
      expect(screen.getByText(task)).toBeInTheDocument();
    });
  });
  it('test item component and prop', () => {
    render(<Item content={ batata } />);
    expect(screen.getByText(batata)).toBeInTheDocument();
  });
});
