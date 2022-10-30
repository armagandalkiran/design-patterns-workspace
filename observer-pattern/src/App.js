import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import observable from "./utils/observers";
import './App.css';

function handleClick(num) {
  observable.notify(`User clicked button ${num}`);
}

function logger(data) {
  console.log(`${Date.now()} ${data}`);
}

function toastify(data) {
  toast(data);
}

observable.subscribe(logger);
observable.subscribe(toastify);

function App() {

  return (
    <div className="App">
      <button onClick={() => handleClick(1)}>Click me!</button>
      <button onClick={() => handleClick(2)}>Click me too !</button>
      <ToastContainer/>
    </div>
  );
}

export default App;
