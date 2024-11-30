
const arr = [1,2,3]
const target = 6


function subSetSum (arr,target){

  const dp = Array(arr.length + 1).fill(false)

  dp[0] = true
  
  for(let num of arr){
    for(i = target ; i>=num; i--){
      
      dp[i] = dp[i] || dp[i-num]
    }
    
  }

  return dp[target]
}

const result = subSetSum(arr,target)
console.log('result is....', result);
