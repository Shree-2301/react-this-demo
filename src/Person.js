import React from "react";

export default function Person({ person }) {
  return (
    <h2>
      I am {person.name}. I am {person.age} years old. I know{person.skill}
    </h2>
  );
}
