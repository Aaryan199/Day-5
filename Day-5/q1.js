console.log(`hello there`);
let arr=[];
while (true) {
let num=prompt("Enter the number",0)
if (num<=0){
break
}
arr.push(num)
}
let oddcube=arr.filter(el=>el%2!==0).map(el=>el**3);
console.log(oddcube);
