function decToBin(num){
	let ans = "";
	while(num > 0){
		ans = (num%2) + ans;
		n = parseInt(n/2);
	}
	return ans;
}

module.exports = decToBin;
