function threeSum(n) {
// write your code here
  let ans = "";
  while(n != 0){
	  ans = (n%2) + ans;
	  n = parseInt(n/2);
  }
	return ans;
}

module.exports = threeSum;
