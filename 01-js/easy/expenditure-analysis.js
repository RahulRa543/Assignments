/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]
*/

/*function calculateTotalSpentByCategory(transactions) {
  // Create a Map to store total spending per category
  let categoryMap = new Map();

  // Iterate through each transaction
  transactions.forEach((transaction) => {
    const { category, price } = transaction;

    // If the category exists in the Map, add the price to the existing total
    if (categoryMap.has(category)) {
      categoryMap.set(category, categoryMap.get(category) + price);
    } else {
      // If the category doesn't exist, create a new entry with the price
      categoryMap.set(category, price);
    }
  });

  // Convert the Map to an array of objects
  let resultArray = Array.from(categoryMap.entries()).map(([category, totalAmount]) => ({
    category:category,
    totalSpent: totalAmount,
  }));
  return resultArray;
}
*/

function calculateTotalSpentByCategory(transactions) {
  let resultArray = [];

  transactions.forEach((transaction) => {
    const { category, price } = transaction;

    // Find the index of the category in the resultArray
    const categoryIndex = resultArray.findIndex((item) => item.category === category);

    if (categoryIndex !== -1) {
      // If the category already exists, add the price to the totalSpent
      resultArray[categoryIndex].totalSpent += price;
    } else {
      // If the category doesn't exist, create a new object
      resultArray.push({ category, totalSpent: price });
    }
  });

  return resultArray;
}



 module.exports = calculateTotalSpentByCategory;
