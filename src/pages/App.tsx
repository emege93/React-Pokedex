import React from "react";
import logo from "../assets/logo.svg";
import "../styles/App.scss";
import useSWR from "swr";
import { fetcher } from "../helper/apiHelper";

const App: React.FC = () => {
  const { data, error } = useSWR(`https://pokeapi.co/api/v2/  `, fetcher);

  console.log(data);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
};

export default App;
