import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Menu from './components/Nav';
import PlayersList from './components/PlayersList';

function App() {
  return (
    <div className="App bg-light">
      <Menu />
      <PlayersList />
    </div>
  );
}

export default App;
