import './App.css';
import Input from "./components/input";
import Fahrenheit from './components/fahrenheit';
import Kelvin from './components/kelvin';

function App() {
  return (
    <div className="App">
      {console.log("render")}
      <h1>Temperature Converter</h1>
      <Input>
        {value => (
          <>
            <Kelvin value={value}/>
            <Fahrenheit value={value}/>
          </>
        )}
      </Input>
    </div>
  );
}

export default App;
