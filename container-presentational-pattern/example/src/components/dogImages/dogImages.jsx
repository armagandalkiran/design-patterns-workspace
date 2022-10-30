import React from "react";
import useDogImages from "../../hooks/useDogImages";

export const DogImages = () => {
  const dogs = useDogImages();
  return dogs.map((dog,i) => <img src={dog} key={i} alt={i}/>);
}