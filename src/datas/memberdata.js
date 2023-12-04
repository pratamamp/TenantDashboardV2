import { faker } from "@faker-js/faker";

const range = (len) => {
  const arr = [];
  for (let index = 0; index < len; index++) {
    arr.push(index);
  }
  return arr;
};

const newPerson = () => {
  return {
    username: faker.person.firstName,
    email: faker.internet.email,
    lastlogin: faker.date.past,
    usertype: faker.helpers.shuffle("Creator", "Viewer")[0],
  };
};

export function makeData(...lens) {
  const makeDataLevel = (depth = 0) => {
    const len = lens[depth];
    return range(len).map((d) => {
      return {
        ...newPerson(),
        subRows: lens[depth + 1] ? makeDataLevel(depth + 1) : undefined,
      };
    });
  };

  return makeDataLevel();
}
