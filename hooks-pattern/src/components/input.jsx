import React from "react";
import useKeyPress from "../hooks/useKeyPress";

const Input = () => {
  const [input, setInput] = React.useState("");
  const pressQ = useKeyPress("q");
  const pressW = useKeyPress("w");
  const pressL = useKeyPress("l");

  React.useEffect(() => {
    console.log(`The user pressed Q!`)
  }, [pressQ])

  React.useEffect(() => {
    console.log(`The user pressed W!`)
  }, [pressW])

  React.useEffect(() => {
    console.log(`The user pressed L!`)
  }, [pressL])

  React.useEffect(() => {
    console.log(`The user typed ${input}`)
  },[input])

  return (
    <input
      onChange={(e) => setInput(e.target.value)}
      value={input}
      placeholder="giriniz"
    />
  );
};

export default Input;
