const { removeDuplicates } = require("./answer");

function test(label, actual, expected) {
  if (actual === expected) {
    console.log(`✅ ${label}`);
  } else {
    console.log(`❌ ${label} — got "${actual}", expected "${expected}"`);
  }
}

function runRemoveDuplicatesTests() {
  console.log("Running Remove Duplicates Tests...\n");

  test("Test 1", removeDuplicates("abbaca"), "ca");
  test("Test 2", removeDuplicates("azxxzy"), "ay");
  test("Test 3", removeDuplicates("aabcca"), "ba");
  test("Test 4", removeDuplicates("a"), "a");
  test("Test 5", removeDuplicates("aa"), "");
  test("Test 6", removeDuplicates(""), "");
  test("Test 7", removeDuplicates("abccba"), "");
  test("Test 8", removeDuplicates("abcddcba"), "");
  test("Test 9", removeDuplicates("aabbaacc"), "");
  test("Test 10", removeDuplicates("abbaa"), "a");

  console.log("\nDone ✅");
}

runRemoveDuplicatesTests();
