// Day 39: Deep Copy vs Shallow Copy

// 🔹 Shallow Copy Example
const original = {
  name: "Manikanta",
  address: {
    city: "Hyderabad"
  }
};

const shallowCopy = { ...original };

shallowCopy.address.city = "Mumbai";

console.log("Original (Shallow):", original.address.city); 
// Output: Mumbai (because nested object is shared)


// 🔹 Deep Copy Example
const original2 = {
  name: "Rahul",
  address: {
    city: "Delhi"
  }
};

const deepCopy = JSON.parse(JSON.stringify(original2));

deepCopy.address.city = "Chennai";

console.log("Original (Deep):", original2.address.city); 
// Output: Delhi (separate copy)