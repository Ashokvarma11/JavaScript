//Example1

let rows=5;
let s="";
for(let i=1;i<=rows;i++){
    s+=" * ";
    console.log(s)

}
console.log("");


// Example3
let rows3=10;
for(let i=1;i<10;i++){
    let s2="";
    for(let j=1;j<10;j++){
        if(j==i || j==10-i){
            s2+="*";
        }
        else{
            s2+="  ";
        }
    }
    console.log(s2)
}

//example4
console.log("");
let rows4=5;
for(let i=1;i<=5;i++){
    let space="";
    let star="";
    
    for(let j=1;j<=5-i;j++){
        space+=" "
    }
    for(let k=1;k<=i;k++){
        star+="* ";

    }
    console.log(space+star);
    
}
for(let i=1;i<=5;i++){
    let space1="";
    let star1="";

for(let j=1;j<=i;j++){
    space1+=" "
}
for(let k=1;k<=5-i;k++){
    star1+="* ";

}

console.log(space1+star1);
}



///Example5
let arr=['A','S','H','O','K'];
let add=" ";
for(let i=0;i<=arr.length-1;i++){
    let emp="";
    for(let j=i;j<=i;j++){
        
        add=add+arr[i]+"  ";

    }

    
    for(let j=i;j<=arr.length-1;j++){
        
        emp=emp+" ";

    }

    console.log(emp+add)
}

console.log("")
