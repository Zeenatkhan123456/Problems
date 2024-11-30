// Write a function to find the largest numberin an array?

console.log(findLargestNumber([2,4, 6, 7 ,10,15]));
function findLargestNumber(arr){
let largest = arr[0];
    for(let i=0; i<arr.length; i++){
        if(arr[i]>largest){
            largest=arr[i];
        }
       
    }
    return largest;
}