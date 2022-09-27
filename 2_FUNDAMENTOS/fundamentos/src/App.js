// components
import FirstComponent from './components/FirstComponets';
import TemplateExpressions from './components/TemplateExpressions';

// syles / CSS
import './App.css';
import MyComponent from './components/MyComponent';

function App() {
  return (
    <div className="App">
      <h1>Fundamentos React</h1>
      <FirstComponent />
      <TemplateExpressions />
      <MyComponent />
    </div>
  );
}

export default App;
