import logo from "./logo.svg";
import "./App.css";
import Nav from "./Nav";
import Main from "./Main";
import Card from "./Card";

function App() {
  return (
    <>
      <div className="container">
        <div className="row mt-5 mb-5">
          <Card title="Console" path="./img_1.jpg" />
          <Card title="Playground" path="./img_2.jpg" />
          <Card title="Adventure" path="./img_3.jpg" />
        </div>
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
