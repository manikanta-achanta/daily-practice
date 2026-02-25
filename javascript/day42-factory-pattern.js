// Day 42: Factory Pattern

class Developer {
  constructor(name) {
    this.name = name;
    this.role = "Developer";
  }
}

class Manager {
  constructor(name) {
    this.name = name;
    this.role = "Manager";
  }
}

class EmployeeFactory {
  static createEmployee(type, name) {
    switch (type) {
      case "developer":
        return new Developer(name);
      case "manager":
        return new Manager(name);
      default:
        throw new Error("Invalid employee type");
    }
  }
}

// Usage
const emp1 = EmployeeFactory.createEmployee("developer", "Manikanta");
const emp2 = EmployeeFactory.createEmployee("manager", "Rahul");

console.log(emp1);
console.log(emp2);