const objectLiteral = {};
const objectConstructor = new Object();

const legolas = {
  name: "Legolas",
  race: "elf",
  weapon: "bow and arrows",
  greet: function () {
    return `Greeting, I'm ${this.name}`;
  },
};

const entries = Object.entries(legolas);

const additionalInfo = {
  age: 2900,
};

const merge = { ...legolas, ...additionalInfo };
console.log(merge);

entries.forEach((entry) => {
  let key = entry[0];
  let value = entry[1];

  console.log({ key, value });
});

const user = {
  username: "Gimli",
  password: "dwarf123",
};

const newUser = Object.freeze(user);
newUser.password = "*****";
newUser.active = true;

console.log(newUser);

console.log(Object.isFrozen(newUser));
