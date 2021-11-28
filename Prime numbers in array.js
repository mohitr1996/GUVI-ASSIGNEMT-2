function primeArr(arr)
{
    var p=[]
    for(i=0;i<arr.length;i++)
    {
        var r = 0;
        for(j=2;j<arr[i];j++)
        {
            if(arr[i]%j==0)
            {
                r=r+1
            }
        }
        if(r===0)
        {
            p.push(arr[i])
        }
        
        
    }return p
    
}

console.log(primeArr([1,2,3,4,5,6,7,8,9]))