const { MinStack } = require("./answer");

function test(label, actual, expected) {
  if (actual === expected) {
    console.log(`✅ ${label}`);
  } else {
    console.log(`❌ ${label} — got ${actual}, expected ${expected}`);
  }
}

function runTests() {
  console.log("Running MinStack Tests...\n");

  // Test 1: Basic push/getMin/top/pop
  const s1 = new MinStack();
  s1.push(-2);
  s1.push(0);
  s1.push(-3);
  test("Test 1.1: getMin()", s1.getMin(), -3);
  s1.pop();
  test("Test 1.2: top()", s1.top(), 0);
  test("Test 1.3: getMin()", s1.getMin(), -2);

  // Test 2: Clean-up back to previous min
  const s2 = new MinStack();
  s2.push(3);
  s2.push(4);
  s2.push(1);
  test("Test 2.1: getMin()", s2.getMin(), 1);
  s2.pop();
  test("Test 2.2: getMin() after popping min", s2.getMin(), 3);

  // Test 3: Duplicates in min
  const s3 = new MinStack();
  s3.push(2);
  s3.push(2);
  s3.push(1);
  test("Test 3.1: getMin()", s3.getMin(), 1);
  s3.pop();
  test("Test 3.2: getMin() after one pop", s3.getMin(), 2);
  s3.pop();
  test("Test 3.3: getMin() after two pops", s3.getMin(), 2);

  // Test 4: top() and getMin() on empty stack
  const s4 = new MinStack();
  test("Test 4.1: top() on empty", s4.top(), null);
  test("Test 4.2: getMin() on empty", s4.getMin(), null);

  console.log("\nDone ✅");
}

runTests();
