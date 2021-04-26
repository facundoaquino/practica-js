// Given a string s, find the length of the longest substring without repeating characters.
// Input: s = "abcabcbb"
// Output: 3
// Explanation: The answer is "abc", with the length of 3.

var lengthOfLongestSubstring = function (s) {
	let response = []

	for (let i = 0; i < s.length; i++) {
		let temporal = []
		for (let j = i; j < s.length; j++) {
			if (!temporal.includes(s[i])) {
				temporal.push(s[i])
			} else {
				if (!temporal.includes(s[j])) {
					temporal.push(s[j])
				} else {
					break
				}
			}
		}
		response.push(temporal)
	}
	response=response.reduce((acc,e)=>{
		if(e.length>acc){
			acc=e.length
		}
		return acc
	},0)

	return response
}

lengthOfLongestSubstring('edificio')
