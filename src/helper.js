export function toNumber(key) {
  //if key is a number
  if (isNaN(key) && typeof key === "string") {
    return key.charCodeAt(0);
  }
  return key;
}
