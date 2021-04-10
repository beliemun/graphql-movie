export const people = [
  {
    id: 1,
    name: "Nicolas",
    age: 18,
    gender: "Famale",
  },
  {
    id: 2,
    name: "Lynn",
    age: 36,
    gender: "Famale",
  },
  {
    id: 3,
    name: "Brian",
    age: 20,
    gender: "Male",
  },
];

export const getById = (id: number) => {
  const filteredPeople = people.filter((person) => id === person.id);
  return filteredPeople[0];
};
