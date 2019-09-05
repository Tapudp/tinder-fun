import React from "react";
import Actions from "./Actions";
import App from "../App";

const Person = ({ person, modifySuperficialChoices }) => {
  const { name, desc, age, image } = person;

  return (
    <>
      <div className="person">
        <div className="person-photo">
          <img src={`/images/users/${image}`} alt={name} />
        </div>
      </div>

      <div className="person-description">
        <div className="person-name-age">
          <p className="person-name-age">
            {name}, <span>{age}</span>
          </p>
          <p className="person-info">{desc}</p>
        </div>
      </div>

      <Actions
        person={person}
        modifySuperficialChoices={modifySuperficialChoices}
      />
    </>
  );
};

export default Person;
