import nodeColor from './color';

export function toNumber(key) {

  const offset = 96;
  //if key is not a number
  if (isNaN(key) && typeof key === "string") {
    const keyToLower = key.toLowerCase();
    if (keyToLower.length > 1) {
      let number = '';
      //converting each letter to a number
      for (let ch of keyToLower) {
        number += ch.charCodeAt(0) - offset + '';
      }
      return parseInt(number);
    }
    return keyToLower.charCodeAt(0) - offset;
  }
  return key;
}

export function isNilNode(node) {
  return node == null || (node.key == null && node.value == null
         && node.color === nodeColor.BLACK
         && node.left == null && node.right == null);
}
