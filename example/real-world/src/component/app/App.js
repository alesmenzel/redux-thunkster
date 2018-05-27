import React from 'react';

import './App.css';

const App = ({ repositories, error, fetchRepositories }) => (
  <div className="App">
    <header className="App-header">
      <h1 className="App-title">Redux Thunkster Demo</h1>
    </header>
    <div className="App-intro">
      <button onClick={fetchRepositories}>Fetch users</button>

      <ul className="Repository__List">
        {repositories.map((repo, index) => {
          return (
            <li key={index}>
              {index + 1} - {repo.full_name}
            </li>
          );
        })}
      </ul>
    </div>
  </div>
);

export default App;
