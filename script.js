function threeSum(num) {
// write your code here
  let ans = "";
  while(num > 0){
	  ans = (num%2) + ans;
	  num = parseInt(num/2);
  }
	return ans;
}

module.exports = threeSum();
