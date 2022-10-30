import "./App.css";
import FlyOutMenu from "./components/flyOutMenu";
import { useState } from "react";

function App() {
  const [open, setOpen] = useState(false);

  return (
    <div className="App">
      <FlyOutMenu show={open} onChange={setOpen}/>
    </div>
  );
}

export default App;
