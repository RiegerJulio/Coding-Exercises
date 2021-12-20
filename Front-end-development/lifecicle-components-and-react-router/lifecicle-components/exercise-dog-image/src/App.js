import React from 'react';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      dogs: '',
    };

    this.fetchDogs = this.fetchDogs.bind(this);
  }

  componentDidMount() {
    this.fetchDogs();
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (nextState.dogs.message.includes('terrier')) {
      return false;
    }
    return true;
  }

  componentDidUpdate() {
    const { dogs } = this.state;
    localStorage.setItem('dogURL', dogs.message);
    const dogBreed = dogs.message.split('/')[4];
    alert(dogBreed);
  }

  fetchDogs() {
    fetch('https://dog.ceo/api/breeds/image/random')
      .then((response) => response.json())
      .then((result) => this.setState({ dogs: result }));
  }

  render() {
    const { dogs } = this.state;
    if (dogs === '') return 'loading';

    return (
      <div>
        <h1>Fetch Dogs</h1>
        <img src={ dogs.message } alt="Dog" />
        <button type="button" onClick={ this.fetchDogs }>Novo Cachorro!</button>
      </div>
    );
  }
}

export default App;
