function palindrome(arr){
    var arr2=[];
    
    for(i=0;i<arr.length;i++)
    {
        var x=arr[i].split("");
        var y=x.length;
        var z=[];
        
        for(j=y;j>=0;j--)
        {
            z.push(x[j]);

            
        }
        var rev=z.join("");
        if(rev==arr[i])
        arr2.push(arr[i]);
    
    }
    
    return arr2;

}
console.log(palindrome(["hello","abcdcba","mohit","1234321"]));