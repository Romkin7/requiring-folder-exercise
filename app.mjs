import cats from "./cats";
const { shelter, breeds, addToShelter } = cats;
breeds.map((breed) => {
  addToShelter(breed);
  console.log(`Added ${breed} cat into shelter!`);
  console.log(`Cats in Shelter: ==> ${shelter.join(", ")}.`);
  return breed;
});
