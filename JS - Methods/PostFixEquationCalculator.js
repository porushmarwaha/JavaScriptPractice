equationCalculator = (test) => {
  if (test.length === 0 || test.length === 1) {
    console.log("Wrong Input");
    return 0;
  }
  const result = [];
  let second = 0;
  let first = 0;
  for (key of test) {
    if (typeof key === "number") result.push(key);
    if (key === "+") {
      first = result.pop();
      second = result.pop();
      result.push(second + first);
    }
    if (key === "-") {
      first = result.pop();
      second = result.pop();
      result.push(second - first);
    }
    if (key === "/") {
      first = result.pop();
      second = result.pop();
      result.push(second / first);
    }
    if (key === "*") {
      first = result.pop();
      second = result.pop();
      result.push(second * first);
    }
  }
  return result.pop();
}
const test2 = [1];
const test = [15, 7, 1, 1, "+", "-", "/", 3, "*", 2, 1, 1, "+", "+", "-"];
console.log(equationCalculator(test2));
