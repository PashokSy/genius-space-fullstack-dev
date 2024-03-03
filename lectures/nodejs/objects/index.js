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

legolas.age = 2931;
legolas["age2"] = 2532;
delete legolas.weapon;

console.log(legolas);

for (let key in legolas) {
  console.log(key);
}
