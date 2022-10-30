import { useState } from "react";

function Input(props) {
  const [value, setValue] = useState("");

  return (
    <>
      <div style={{position:"relative"}}>
        <input
            type="text"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            placeholder="Temp in C"
        />
        <p style={{position:"absolute"}}>{value.length}</p>
        {props.children(value)} 
    </div>
    </>
  );
}

export default Input;
