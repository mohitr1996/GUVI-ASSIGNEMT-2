function sumNumbers(arr){
    var sum = 0
    for(var i=0;i<arr.length;i++)
    {
        sum = sum+arr[i]
    }
    return sum
}
console.log(sumNumbers([4,3,2,5,7]))