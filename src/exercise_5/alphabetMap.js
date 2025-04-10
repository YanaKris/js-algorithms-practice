function alphabetMap(rawString, mapCount) {
  const rules = {
    a: "def",
    b: "efc",
    c: "abe",
    d: "cba",
    e: "fba",
    f: "dcb",
  };
  let res = rawString;
  while (mapCount >= 1) {
    res = res
      .split("")
      .map((char) => rules[char] || char)
      .join("");
    mapCount--;
  }

  return res;
}

console.log(alphabetMap("abcdef", 1));
console.log(alphabetMap("aa", 2));
console.log(alphabetMap("bad", 1));
