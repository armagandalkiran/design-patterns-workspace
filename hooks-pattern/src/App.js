import Input from "./components/input";
import useWindowWidth from "./hooks/useWindowWidth";
import useCounter from "./hooks/useCounter";

function App() {
  const counter = useCounter();
  const width = useWindowWidth();

  console.log(counter, width);
  return <Input />;
}

export default App;
