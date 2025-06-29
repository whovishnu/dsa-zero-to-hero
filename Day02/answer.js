class TicketCounter {
  constructor() {
    this.vipQueue = []; // VIP users
    this.normalQueue = []; // Normal users
  }

  enqueue(name, isVIP) {
    if (isVIP) {
      this.vipQueue.push(name);
    } else {
      this.normalQueue.push(name);
    }
  }

  serve() {
    let serverPersonName = null;

    if (this.vipQueue.length) {
      serverPersonName = this.vipQueue[0];
      this.vipQueue = this.vipQueue.slice(1);
      return serverPersonName;
    } else if (this.normalQueue.length) {
      serverPersonName = this.normalQueue[0];
      this.normalQueue = this.normalQueue.slice(1);
    }

    return serverPersonName;
  }

  peek() {
    if (this.vipQueue.length) return this.vipQueue[0];
    else if (this.normalQueue.length) return this.normalQueue[0];
    else return null;
  }

  queueStatus() {
    return [...this.vipQueue, ...this.normalQueue];
  }
}

module.exports = TicketCounter;
