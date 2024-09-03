const standard = [
    ['I', 1],
	['V', 5], 
	['X', 10], 
	['L', 50], 
	['C', 100],
    ['D', 500], 
    ['M',1000]
    ];
function convertToRoman(n) {
  	for(let i=0; i< standard.length; i++){
	let currentVal =standard[i][1];
	if(currentVal ===n){
		return standard[i];
	}
	if(currentVal > n){
		return standard[i-1];
	}
}     
 return standard[standard.length-1];  
	
 let  ans="";
	while(n!=0){
		let roman =convertToRoman(n);
		ans+= roman[0];
		n-= roman[1];
  }
	console.log(ans);

	
	

  //your code here
	

}
// You can test your code by running the above function and printing it to console by pressing the run button at the top. To run it with input 36, uncomment the following line

// console.log(convertToRoman(36));




// do not edit below this line
module.exports = convertToRoman
