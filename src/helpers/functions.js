export function flattenArray(arr) {
  let resultArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === "object" && !Array.isArray(arr[i])) {
      const objValuesArr = Object.values(arr[i]);
      resultArr.push(...objValuesArr);
    } else if (Array.isArray(arr[i])) {
      const flatInnerArr = flattenArray(arr[i]);
      resultArr.push(...flatInnerArr);
    } else {
      resultArr.push(arr[i]);
    }
  }
  return resultArr;
}

export function flattenObject(obj) {
  const resultObj = {};
  function traverse(currentObj, currentKey = "") {
    for (let key in currentObj) {
      const newKey = currentKey ? key : key;
      if (typeof currentObj[key] === "object") {
        traverse(currentObj[key], newKey);
      } else {
        resultObj[newKey] = currentObj[key];
      }
    }
  }
  traverse(obj);
  return resultObj;
}
