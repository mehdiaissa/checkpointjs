//Return the Sum of Two Numbers
function addition(a, b) {
	return a+b
}
//Area of a Triangle
function triArea(base, height) {
	return (base * height )/2
}
//Convert Age to Days
function calcAge(age) {
	return age*365
}
//Find the Smallest and Biggest Numbers
function minMax(arr) {
	let max=arr[0];
	let min=arr[0];
	for(let i=1;i<arr.length;i++){
		if(arr[i]>max){
			max=arr[i];
		}
	}
		for(let i=1;i<arr.length;i++){
		if(arr[i]<min){
			min=arr[i];
	}
		}
		return [min,max]
}
 //Add up the Numbers from a Single Number
function addUp(num) {
	let sum=num;
	if(num>=0 && typeof(num)=== "number"){
		for(let i=0;i<num;i++){
			sum= sum+i;
		}
			return sum;
	}	
}
//Check if One Array can be Nested in Another
function canNest(arr1, arr2) {
	return (Math.min(...arr1)>Math.min(...arr2) && 
            Math.max(...arr1)<Math.max(...arr2))
}
//How Much is True?
function countTrue(arr) {
	let sum=0;
	for(let i=0;i<arr.length;i++){
		if(arr[i]===true){
			sum+=1;
		}
	}return sum
}
//Reverse Words in a String
function reverseWords(string) {
	let arr= string.split(" ").reverse();
	const str=arr.join(" ");
	return str
}
//Number of Squares in an N * N Grid
function numberSquares(n) {
	let square=0
	for(let i=1;i<=n;i++){
		square=square+Math.pow(i,2)
	}
	return square
}
//Seven Boom!
function sevenBoom(arr) {
	result="there is no 7 in the array"
	str="";
	for (let i=0;i<arr.length;i++){
		str= str+arr[i];
		if(str.includes('7')){
			result= "Boom!"
			break;
		}
	}
	return result
}