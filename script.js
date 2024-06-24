function makeid(l) {
  // write your code here
	let ch='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
	let ans='';
	while(l>0){
		ans+=ch.charAt(Math.floor(Math.random()*ch.length));
		l--;
	}
	return ans;
}

// Do not change the code below.
const l = prompt("Enter a number.");
alert(makeid(l));
