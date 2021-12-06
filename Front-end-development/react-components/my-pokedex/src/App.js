import './App.css';
import Pokedex from './components/Pokedex';
import Title from './components/Title';
import data from './data';

function App() {
  return (
    <div>
    <Title />
    <Pokedex data={data}/>
    </div>
  );
}

export default App;
