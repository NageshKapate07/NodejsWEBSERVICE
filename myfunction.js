
// Variable number of parametr, last parameter will be array
// nodejs function

exports.subtract=function(a,b){
    return a-b;
}

exports.addition=function(a,b,...c){
    console.log(a,b);
    console.log(c);        
    s=a+b;
    for(var i=0;i<c.length;i++){  //c is array of parametrs passed
        s+=c[i];
    }
    return s;
}