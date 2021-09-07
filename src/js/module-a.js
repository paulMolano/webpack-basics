class animal {
  constructor(properties) {
    this.type = properties.type;
    this.kind = properties.kind;
    this.legs = properties.legs;
    this.name = properties.name;
  }
}

const animalist = [];
const animalpropertiesList = [
  {
    type: "reptile",
    kind: "cocodrile",
    legs: 4,
    name: "Juancho",
  },
  {
    type: "mammal",
    kind: "bear",
    legs: 4,
    name: "Winnie the Pooh",
  },
];

animalpropertiesList.forEach((animalProperties) => {
  animalist.push(new animal(animalProperties));
});

animalist.forEach((animal) => {
  console.log(`${animal.name} is a ${animal.kind}, so it has ${animal.legs}`);
});
