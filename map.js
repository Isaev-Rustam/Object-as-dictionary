const arithmetic = (a, b, operator) => {
  const match = {
    "add"(a,b){return a + b},
    "subtract"(a,b){return a - b},
    "multiply"(a,b){return a * b},
    "divide"(a,b){return a / b},
  };


  return match[operator] ? match[operator](a, b) : NaN;
};

console.log(arithmetic(5, 2, "add") );