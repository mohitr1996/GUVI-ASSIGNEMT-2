function medianArray(arr1,arr2)
{
  
    var join=arr1.concat(arr2);
    join.sort(function(a, b){return a-b});
    let m1=arr1.length-1;
    let m2=arr1.length;
    let median=(join[m1]+join[m2])/2;
   
    return median;

}
console.log(medianArray([2,3,25,21,16],[1,15,18,27,32]));