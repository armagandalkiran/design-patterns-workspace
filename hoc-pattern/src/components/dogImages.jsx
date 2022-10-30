import React from "react";
import withLoader from "./withLoader";
import useHover from "../hooks/useHover";

const DogImages = (props) => {
  const [hoverRef, hovering] = useHover();

  return (
    <div ref={hoverRef} {...props}>
      {hovering && <div id="hover">Hovering!</div>}
      <div id="list">
        {props.data.message.map((dog, i) => (
          <img src={dog} key={i} alt={i} />
        ))}
      </div>
    </div>
  );
};

export default withLoader(
  DogImages,
  "https://dog.ceo/api/breed/labrador/images/random/6"
);
