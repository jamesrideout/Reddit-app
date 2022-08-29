import React from 'react';
import './App.css';
import SearchBar from './features/Searchbar/Searchbar';
import Main from './features/Main/Main';
import Subreddits from './features/Subreddits/Subreddits';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        < SearchBar />
      </header>
      <main className="container">
        <Main />
        <Subreddits />
      </main>
    </div>
  );
}

export default App;
