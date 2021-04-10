import { people, getById } from "./db";

const resolvers = {
  Query: {
    people: () => people,
    person: (id: number) => getById(id),
  },
};

export default resolvers;
