import React from 'react';
import './App.css';
import Pokedex from './components/Pokedex';
import data from './data'

function App() {
  return (
    <main className='container'>
      <Pokedex pokemons={data}/>
    </main>
    
  );
}

export default App;
