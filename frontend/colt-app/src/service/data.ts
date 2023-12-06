import { v4 as uuidv4 } from "uuid";
import { fakerDE as faker } from "@faker-js/faker";

import iMember from "../Interfaces/iMember";
//mockdata
const generateRandomMembership = () => {
  const memberships = ["Bow", "Air", "Fire"];
  const randomIndex = Math.floor(Math.random() * memberships.length);
  return memberships[randomIndex];
};

function generateMockMemberData(): iMember {
  let randomNum = Math.floor(Math.random() * 100) + 10;
  return {
    id: uuidv4(),
    firstName: faker.person.firstName(),
    lastName: faker.person.lastName(),
    birthDate: faker.date.past(),
    memberships: [generateRandomMembership()],
    attend_progress: Math.round((randomNum * 100) / 100),
  };
}
export default function getMockData(): iMember[] {
  let data: iMember[] = [];
  for (let index = 0; index < 1000; index++) {
    const mock = generateMockMemberData();
    data.push(mock);
  }
  return data;
}
