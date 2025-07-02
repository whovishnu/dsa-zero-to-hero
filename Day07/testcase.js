const { MyQueue } = require("./answer");

function test(label, actual, expected) {
  if (actual === expected) {
    console.log(`✅ ${label}`);
  } else {
    console.log(`❌ ${label} — got ${actual}, expected ${expected}`);
  }
}

function runMyQueueTests() {
  console.log("Running Queue using Stacks Tests...\n");

  const queue = new MyQueue();

  queue.push(1);
  queue.push(2);
  queue.push(3);
  test("Test 1: Peek after 3 pushes", queue.peek(), 1);
  test("Test 2: Pop returns 1", queue.pop(), 1);
  test("Test 3: Peek after one pop", queue.peek(), 2);
  test("Test 4: Pop returns 2", queue.pop(), 2);
  test("Test 5: Pop returns 3", queue.pop(), 3);
  test("Test 6: Queue is empty", queue.empty(), true);

  queue.push(4);
  test("Test 7: Peek after pushing 4", queue.peek(), 4);
  queue.push(5);
  queue.pop();
  test("Test 8: Peek after popping 4", queue.peek(), 5);
  test("Test 9: Empty check (should be false)", queue.empty(), false);
}

runMyQueueTests();
