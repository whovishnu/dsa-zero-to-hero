const { dailyTemperatures } = require("./answer");

function test(label, actual, expected) {
  const isEqual = JSON.stringify(actual) === JSON.stringify(expected);
  if (isEqual) {
    console.log(`✅ ${label}`);
  } else {
    console.log(`❌ ${label} — got ${JSON.stringify(actual)}, expected ${JSON.stringify(expected)}`);
  }
}

function runDailyTemperaturesTests() {
  console.log("Running Daily Temperatures Tests...\n");

  test("Test 1", dailyTemperatures([73,74,75,71,69,72,76,73]), [1,1,4,2,1,1,0,0]);
  test("Test 2", dailyTemperatures([30,40,50,60]), [1,1,1,0]);
  test("Test 3", dailyTemperatures([30,60,90]), [1,1,0]);
  test("Test 4", dailyTemperatures([90,80,70,60]), [0,0,0,0]);
  test("Test 5", dailyTemperatures([50,50,50,60]), [3,2,1,0]);
  test("Test 6", dailyTemperatures([70]), [0]);
  test("Test 7", dailyTemperatures([]), []);
}

runDailyTemperaturesTests()
