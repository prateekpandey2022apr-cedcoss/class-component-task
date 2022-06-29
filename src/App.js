import logo from "./logo.svg";
import "./App.css";
import Nav from "./Nav";
import Main from "./Main";

function App() {
  return (
    <>
      <div className="container">
        <h1>A React App</h1>
        <Nav />
        <Main />
      </div>
    </>
  );
}

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
