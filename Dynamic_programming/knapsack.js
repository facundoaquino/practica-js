

const items = [2,3,4]
const values = [10,20,30]

const capacity = 4

function knapsack(items, values, capacity){

  const dp = Array(items.length).fill(0).map(arr=>Array(capacity+1).fill(0))

  

  // Recorrer los elementos
  for (let i = 0; i < items.length; i++) {
    for (let j = 0; j <= capacity; j++) {
      if (items[i] <= j) {
        const includeItem = values[i] + (i > 0 ? dp[i - 1][j - items[i]] : 0);
        const excludeItem = i > 0 ? dp[i - 1][j] : 0;
        dp[i][j] = Math.max(includeItem, excludeItem);
      } else {
        dp[i][j] = i > 0 ? dp[i - 1][j] : 0;
      }
    }
  }

  console.log(dp);
}

knapsack(items, values, capacity)