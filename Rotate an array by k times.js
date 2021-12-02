function rotateArr(arr,k)
{
    for(let i=0;i<=k;i++)
    {
        var end=arr.shift();
        arr.push(end)
    }
return arr
}
console.log(rotateArr([1,2,3,4,5,6],4));