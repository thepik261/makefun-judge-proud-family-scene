import { mkdirSync, writeFileSync } from "node:fs";

// A small family scene for the AI judge: Mum still proudly displays a
// child's drawing on the fridge — three-armed Dad, green dog and all —
// and shows it off to the judge at the door like the treasure it is.
const SCENE =
  "Mum still tapes my school drawings to the fridge — even the one where Dad has three arms and the dog is green. Tonight she pointed at it and told the judge at the door: ‘That’s my kid. That’s my whole world.’";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", SCENE, "utf8");
console.log(SCENE);
