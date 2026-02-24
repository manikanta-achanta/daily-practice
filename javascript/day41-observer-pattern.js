// Day 41: Observer Pattern (Simple Pub-Sub)

class Subject {
  constructor() {
    this.observers = [];
  }

  subscribe(observer) {
    this.observers.push(observer);
  }

  unsubscribe(observer) {
    this.observers = this.observers.filter(obs => obs !== observer);
  }

  notify(data) {
    this.observers.forEach(observer => observer(data));
  }
}

// Create subject
const news = new Subject();

// Observers
function user1(data) {
  console.log("User1 received:", data);
}

function user2(data) {
  console.log("User2 received:", data);
}

// Subscribe users
news.subscribe(user1);
news.subscribe(user2);

// Notify all subscribers
news.notify("New article published!");