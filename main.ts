import { mkdirSync, writeFileSync } from "node:fs";

// A small family scene for the AI judge: Mum still proudly displays a
// child's drawing on the fridge — three-armed Dad, green dog and all —
// shows it off to the judge at the door like the treasure it is, and Dad
// claims the extra arm was his idea all along.
const SCENE =
  "Mum still tapes my school drawings to the fridge — even the one where Dad has three arms and the dog is green. Tonight she pointed at it and told the judge at the door: ‘That’s my kid. That’s my whole world.’ Dad nodded: ‘The third arm was my idea.’";

// The gate: /output/entry.txt must be UTF-8 text of 1–280 characters,
// not only white space. Fail loudly here instead of shipping a bad entry.
const chars = [...SCENE];
if (SCENE.trim().length === 0 || chars.length > 280) {
  throw new Error(
    `Scene must be 1-280 non-blank characters, got ${chars.length}`,
  );
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", SCENE, "utf8");
console.log(SCENE);
