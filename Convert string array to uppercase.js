function upperArr(arr){
    var a=[]
    for(var i=0;i<arr.length;i++)
    {
       var c=arr[i].toUpperCase(); 
       a.push(c)
    }
    return a
}
console.log(upperArr(['convert','array','to','uppercase']))