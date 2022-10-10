import './App.css';
import MyComponent from './components/MyComponent';
import {useState} from "react";

function App() {
  const n = 9;

  const [name] = useState('Matheus');

  return (
    <div className="App">
      {/* Global */}
      <h1>React com css</h1>
      {/* CSS de componente */}
      <MyComponent />
      <p>Este paragrafo é do App.js</p>
      {/* Inline CSS */}
      <p style={{color: "blue", padding: "25px", borderTop: "2px solid red"}}>
        Este elemento foi estilizado de form inline
      </p>
      {/* CSS Inline dinâmico */}
      <h2 style={n < 10 ? {color: 'purple'} : {color: 'pink'}}>Css dinâmico</h2>
      <h2
        style={
          name === "a" ?
            {color: "green", backgroundColor: "#000"}
            : null
        }
      >
        Teste nome
      </h2>
    </div>
  );
}

export default App;
