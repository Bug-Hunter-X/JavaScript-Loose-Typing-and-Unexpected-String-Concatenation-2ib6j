function foo(a,b){
  //Explicit type checking
  if(typeof a === 'number' && typeof b === 'number'){
    return a+b;
  }else{
    return String(a) + String(b);
  }
}
console.log(foo(1,2));//Expected Output:3
console.log(foo(1,"2"));//Expected Output:12
console.log(foo("1",2));//Expected Output:12
console.log(foo("1","2"));//Expected Output:12