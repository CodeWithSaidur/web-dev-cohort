function Create_Counter(s = 1, i = 0) {
  return () => {
    i = i + s;
    return i;
  };
}

let n = Create_Counter();
console.log(n());
console.log(n());
