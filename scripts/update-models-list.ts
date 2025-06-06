import { readdirSync, writeFileSync } from "node:fs";

const names = readdirSync("public").filter(
  (v) => v.endsWith(".glb") || v.endsWith(".gltf"),
);

const data = `//autogenerated by "pnpm watch"
export const modelsList = [
  "${names.join(`",
  "`)}",
];
`;
writeFileSync("./src/modelsList.ts", data, null);
console.log("updated models list");
