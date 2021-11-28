function oddArray(arr){
    
    for(var i=0;i<arr.length;i++)
    {
        if(arr[i]%2===0)
        {
            var arr1=arr.splice(i,1)
            
        }
        
    }
    return arr
    }
    console.log(oddArray([4,3,2,5,7]))