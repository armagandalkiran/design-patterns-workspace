import React from "react";
import { FlyOutContext } from "../context/flyOut";
import { useContext } from "react";

export const FlyOut = ({ children, show, onChange }) => {
  return (
    <FlyOutContext.Provider value={{ show, onChange }}>
      {children}
    </FlyOutContext.Provider>
  );
};

const Toggle = () => {
  const { show, onChange } = useContext(FlyOutContext);
  return (
    <div onClick={() => onChange(!show)}>
      <i>icon</i>
    </div>
  );
};

const List = ({ children }) => {
  const { show } = useContext(FlyOutContext);
  return show && <ul>{children}</ul>;
};

const Item = ({ children }) => {
  return <li>{children}</li>;
};

FlyOut.Toggle = Toggle;
FlyOut.List = List;
FlyOut.Item = Item;
