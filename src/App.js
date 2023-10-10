import './App.css';
import React from 'react';
import SearchBox from './component/SearchBox';

function App() {

  const onSearchChange = () => {

  };

  const onSearchFocus = () => {

  };
  
  return (
    <div className="App">
      <h1>
        <SearchBox searchChange = {onSearchChange}
        latestTrand = {onSearchFocus}/>
      </h1>
    </div>
  );
}

export default App;
