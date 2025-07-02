const { backspaceCompare } = require("./answer");

function test(label, actual, expected) {
  if (actual === expected) {
    console.log(`✅ ${label}`);
  } else {
    console.log(`❌ ${label} — got ${actual}, expected ${expected}`);
  }
}

function runBackspaceCompareTests() {
  console.log("Running Backspace Compare Tests...\n");

  test("Test 1", backspaceCompare("ab#c", "ad#c"), true);
  test("Test 2", backspaceCompare("a#c", "b"), false);
  test("Test 3", backspaceCompare("a##c", "#a#c"), true);
  test("Test 4", backspaceCompare("xyz##", "x"), true);
  test("Test 5", backspaceCompare("a###b", "b"), true);
  test("Test 6", backspaceCompare("bxj##tw", "bxo#j##tw"), true);
  test("Test 7", backspaceCompare("bx#x", "b"), false);
  test("Test 8", backspaceCompare("a#b#c#d", "d"), true);
  test("Test 9", backspaceCompare("abc#d", "abzz##d"), true);
  test("Test 10", backspaceCompare("a#b#c#d#", ""), true);

  console.log("\nDone ✅");
}

runBackspaceCompareTests()