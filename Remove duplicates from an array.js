function removeDuplicate(arr)
{
    var arr2=[];
    for(let i=0;i<arr.length;i++)
    {
        var temp=0;
        for(let j=0;j<i;j++)
        {
            if(arr[i]==arr[j])
            {
                temp=temp+1
            }
            
        }
        if(temp===0)
        {
            arr2.push(arr[i])
        }
    }
    return arr2;
}

console.log(removeDuplicate([1,1,2,3,3,4,4,5,6,7,7,8,9,9,0]))