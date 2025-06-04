// 1
let apiData: unknown;

if (typeof apiData === "string") {
  console.log(apiData.toUpperCase());
} else if (typeof apiData === "number") {
  console.log(apiData * 2);
} else if (typeof apiData === "boolean") {
  apiData ? console.log("Sì") : console.log("No");
} else if (apiData === null) {
  console.log("Il dato è vuoto");
} else if (Array.isArray(apiData)) {
  console.log(apiData.length);
} else if (apiData instanceof Promise) {
  apiData.then(data => console.log(data));
} else {
  console.log("Tipo non supportato");
};