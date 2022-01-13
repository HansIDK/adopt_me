import React from "react";
import Pet from "./Pet";

export function Result({ pets }) {
  return (
    <div className="search">
      {!pets.length ? (
        <h2>No Pets found</h2>
      ) : (
        pets.map(({ animal, id, name, breed, images, city, state }) => (
          <Pet
            animal={animal}
            key={id}
            name={name}
            images={images}
            city={city}
            state={state}
            id={id}
            breed={breed}
          />
        ))
      )}
    </div>
  );
}

export default Result;
