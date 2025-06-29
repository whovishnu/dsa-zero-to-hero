export class TicketCounter {
  constructor() {
    this.vipQueue = [];      // VIP users
    this.normalQueue = [];   // Normal users
  }

  enqueue(name, isVIP) {
    // TODO: Push to correct queue
  }

  serve() {
    // TODO: Remove from VIP queue first if not empty
  }

  peek() {
    // TODO: Return next person to be served
  }

  queueStatus() {
    // TODO: Return all names in serving order
  }
}