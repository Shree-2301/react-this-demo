import React from "react";
import Person from "./Person";
export default function NameList() {
  const persons = [
    {
      id: 1,
      name: "shrinivas",
      age: 21,
      skill: "React"
    },
    {
      id: 2,
      name: "onkar",
      age: 24,
      skill: "Angular"
    },
    {
      id: 3,
      name: "rahul",
      age: 21,
      skill: "JQuery"
    },
    {
      id: 4,
      name: "adrita",
      age: 20,
      skill: "Vue"
    }
  ];
  const personList = persons.map((person) => (
    <Person key={person.id.toString()} person={person} />
  ));
  return <div>{personList}</div>;
}
