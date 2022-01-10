import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

describe('Teste da aplicação toda', () => {
  afterEach(() => jest.clearAllMocks());

  test('test elements on screen', () => {
    render(<App />)

    const input = screen.getByRole('textbox');
    const btn = screen.getByText(/search digimon/i);
    const header = screen.getByRole('heading');

    expect(input).toBeInTheDocument();
    expect(btn).toBeInTheDocument();
    expect(header).toBeInTheDocument();
    expect(input).toHaveTextContent('');
  })

  test('testing input events', () => {
    render(<App />)

    const input = screen.getByRole('textbox');

    userEvent.type(input, 'greymon');
    expect(input).toHaveValue('greymon');
  })
  
  test('testing the api with the input', async () => {
    const digimon = [{
      name: 'Greymon',
      level: 'Champion',
      image: 'https://digimon.shadowsmith.com/img/greymon.jpg'
    }]

    global.fetch = jest.fn(() => Promise.resolve({
      json: () => Promise.resolve(digimon),
    }))

    render(<App />);

    const input = screen.getByRole('textbox');
    userEvent.type(input, 'greymon');
    expect(input).toHaveValue('greymon');

    const btn = screen.getByRole('button')
    userEvent.click(btn);

    await screen.findByText('level: Champion')
    const greymonName = screen.getByText(/greymon/i);
    const greymonImg = screen.getByAltText('Greymon');

    expect(greymonName).toBeInTheDocument();
    expect(greymonImg).toBeInTheDocument();
    expect(global.fetch).toHaveBeenCalledTimes(1);
    expect(global.fetch).toHaveBeenCalledWith('https://digimon-api.vercel.app/api/digimon/name/greymon')
  })

});

// Cobrindo Testes unitarios
