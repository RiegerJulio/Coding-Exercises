type Slices = 4 | 6 | 8;

interface Pizza {
  slices: Slices;
  flavor: string;
}

// const calabresa: Pizza = {
//   slices: 8,
//   flavor: "Calabresa",
// };

// const marguerita: Pizza = {
//   slices: 6,
//   flavor: "Marguerita",
// }

// const nutella: Pizza = {
//   slices: 4,
//   flavor: "Nutella",
// };

type Common = "Calabresa" | "Frango" | "Portuguesa";
type Vegetarian = "Marguerita" | "Palmito" | "Shitake";
type Sweet = "Nutella" | "Mineira" | "Chocolate Branco";

interface CommonFlavors extends Pizza {
  flavor: Common
}

interface VegetarianFlavors extends Pizza {
  flavor: Vegetarian
}

interface SweetFlavors extends Pizza {
  flavor: Sweet,
  slices: 4,
}

const calabresa: CommonFlavors = {
  flavor: "Calabresa",
  slices: 8
}

const palmito: VegetarianFlavors = {
  flavor: "Palmito",
  slices: 6
}

const chocolateBranco: SweetFlavors = {
  flavor: "Chocolate Branco",
  slices: 4
}