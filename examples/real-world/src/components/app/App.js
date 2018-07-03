import React from 'react';

import './App.css';

const App = ({ repositories, error, fetchRepositories }) => (
  <div className="App">
    <header className="Header">
      <h1 className="Header__Title">Redux Thunkster Demo</h1>

      <button className="Header__Fetch" onClick={fetchRepositories}>
        Fetch repositories
      </button>
    </header>
    <div className="Content">
      {!repositories.length && (
        <button className="Content__Fetch" onClick={fetchRepositories}>
          Fetch repositories
        </button>
      )}

      {!!repositories.length && (
        <ul className="Repository__List">
          {repositories.map((repo, index) => {
            return (
              <li key={index} className="Repository__Item">
                <a
                  className="Repository__Profile"
                  href={repo.owner.html_url}
                  rel="noopener noreferrer"
                >
                  <img
                    className="Repository__Profile-Avatar"
                    src={repo.owner.avatar_url}
                    alt="github avatar"
                  />
                  <div className="Repository__Profile-Name">
                    {repo.owner.login}
                  </div>
                </a>
                <a
                  className="Repository__Name"
                  href={repo.html_url}
                  rel="noopener noreferrer"
                >
                  {repo.full_name}
                </a>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  </div>
);

export default App;
