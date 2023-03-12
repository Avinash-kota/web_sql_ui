import logo from './logo.svg';
import './App.css';
//import initSqlJs from "sql.js";
//window.initSqlJs = require("sql.js");
//const initSqlJs = require('sql.js');

import initSqlJs from "sql.js";


function App() {
  return (
    <div className="App">
      <header className="App-header">
      <textarea id="tb1"/>
        <img src={logo} className="App-logo" alt="logo" />
        <button type="button" onClick={query}>Execute</button>
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
}

export default App;


async function query(){
  console.log("db");
  const initSqlJs = require('sql.js');
  const SQL = await initSqlJs({
    // Required to load the wasm binary asynchronously. Of course, you can host it wherever you want
    // You can omit locateFile completely when running in node
    locateFile: file => `https://sql.js.org/dist/${file}`
    //locateFile: file => `https://cdnjs.cloudflare.com/ajax/libs/sql.js/1.3.0/dist/sql-asm.js`
  });
  var element = document.getElementsById('tb1');
  var text = element.value;
  let userSQLCommand = text;

  const db = new SQL.Database();
  let sqlCommand = "CREATE TABLE user (id int, name char); INSERT INTO user VALUES(0, 'Ravi');";
  /*INSERT INTO user VALUES(1, 'Kiran'); \
  INSERT INTO user VALUES(2, 'Teja'); \
  INSERT INTO user VALUES(3, 'Suresh');"*/

  db.run(sqlCommand);
  
  console.log(db.exec(userSQLCommand));
}

query().then();