//lesson 40 - Interfaces
interface IPerson {
  readonly firstName: string;
  lastName?: string;
}
type Person41 = {
  firstName: string;
  lastName: string;
};
function getFullName(person: IPerson) {
  return `${person.firstName} ${person.lastName}`;
}
let person40 = { firstName: "Eric", lastName: "Hoi Dan IT" };
console.log(getFullName(person40)); // Eric Hoi Dan IT
