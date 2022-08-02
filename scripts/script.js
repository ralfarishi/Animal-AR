const Scene = require("Scene");
const TouchGestures = require("TouchGestures");
const Material = require("Materials");

export const Diagnostics = require("Diagnostics");

var materials = [
  "fakta-unik-gajah-mat",
  "fakta-unik-elang-mat",
  "fakta-unik-kucing-mat",
  "fakta-unik-serigala-mat",
  "fakta-unik-kelinci-mat",
];

var count = 0;

TouchGestures.onTap().subscribe(() => {
  if (count == 5) {
    count = 0;
  }

  Scene.root.find("plane").material = Material.get(materials[count]);
  count++;
});
