const userFactory = ({ firstName, lastName, email }) => ({
  firstName,
  lastName,
  email,
  fullName() {
    return `${this.firstName} ${this.lastName}`;
  },
});

const user1 = userFactory({
    firstName: "John",
    lastName: "Doe",
    email: "john@doe.com"
});

const user2 = userFactory({
    firstName: "Jane",
    lastName: "Doe",
    email: "jane@doe.com" 
});

console.log(user1);

const createObjectFromArray = ([key, value]) => ({
    [key]: value
});

createObjectFromArray(["name","John"]);
