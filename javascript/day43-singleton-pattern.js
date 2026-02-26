// Day 43: Singleton Pattern

class Database {
  constructor() {
    if (Database.instance) {
      return Database.instance;
    }

    this.connection = "Connected to database";
    Database.instance = this;
  }

  getConnection() {
    return this.connection;
  }
}

// Creating multiple objects
const db1 = new Database();
const db2 = new Database();

console.log(db1.getConnection());
console.log(db1 === db2); // true (same instance)