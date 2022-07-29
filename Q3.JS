function revnum(num){
var rev=0; 
while(num != 0){
	lastDigit = num % 10;
  rev = rev * 10 + lastDigit;
  num = Math.floor(num/10);
}
return rev;
}

console.log(revnum(654));