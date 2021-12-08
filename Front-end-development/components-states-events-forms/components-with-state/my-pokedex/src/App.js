import './App.css';
// import Pokedex from './components/Pokedex';
import Title from './components/Title';
import data from './data';
import Pokemon from './components/Pokemon';

function App() {
  return (
    <div>
    <Title />
    {/* <Pokedex data={data}/> */}
    <Pokemon data={data}/>
    </div>
  );
}

export default App;
