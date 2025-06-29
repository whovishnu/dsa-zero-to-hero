const TicketCounter = require("./answer.js");

function runTicketCounterTests() {
  const tc = new TicketCounter();

  // Test 1: Enqueue and Serve (VIP First)
  tc.enqueue("Alice", false); // Normal
  tc.enqueue("Bob", true); // VIP
  tc.enqueue("Charlie", false); // Normal

  let passed = 0;

  // Check initial peek (should be Bob)
  if (tc.peek() === "Bob") passed++;
  else console.error("❌ Test 1.1 failed");

  // Serve order
  if (tc.serve() === "Bob") passed++;
  else console.error("❌ Test 1.2 failed");
  if (tc.serve() === "Alice") passed++;
  else console.error("❌ Test 1.3 failed");
  if (tc.serve() === "Charlie") passed++;
  else console.error("❌ Test 1.4 failed");

  // Test 2: Mixed re-enqueue
  tc.enqueue("Zara", true);
  tc.enqueue("Liam", false);
  tc.enqueue("Nina", true);

  // Status check
  const expectedStatus = ["Zara", "Nina", "Liam"];
  const actualStatus = tc.queueStatus();
  if (JSON.stringify(actualStatus) === JSON.stringify(expectedStatus)) {
    passed++;
  } else {
    console.error("❌ Test 2.1 failed", actualStatus);
  }

  // Serve all
  if (tc.serve() === "Zara") passed++;
  else console.error("❌ Test 2.2 failed");
  if (tc.serve() === "Nina") passed++;
  else console.error("❌ Test 2.3 failed");
  if (tc.serve() === "Liam") passed++;
  else console.error("❌ Test 2.4 failed");
  if (tc.serve() === null) passed++;
  else console.error("❌ Test 2.5 failed");

  console.log(`✅ ${passed}/9 test cases passed.`);
}

runTicketCounterTests();
