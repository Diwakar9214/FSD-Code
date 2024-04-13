// Below function console.log is used to print
console.log('Hello Student');

//Using let variable and understanding scope(block scope)
let val=12
{
let val="twelve"
console.log(val)
}
console.log(val)
//Using var variable and understanding scope(function scope-Global)
var value=100;
{
    console.log(value);
}
console.log(value);
//Using const variable and understanding scope(block scope)
{
const Number='ten';
console.log(Number);
}
console.log(Number);
// Data Type
//1.Number
    let No=21
    let no=12.5
    console.log(No,no);
//2.String
    let paragraph=`I am a student
                   I am learning Javascript`;
    console.log(paragraph,typeof paragraph); 
//3. Boolean
    let isstudent=false;
    console.log(isstudent,typeof isstudent)
//4. Object
    //4.1 Array
        let ages=[12,44,45,66,70]
        console.log(ages)
    //4.2 Json object
        let age={
                    "krish":15,
                    "ram":26,
                    "Dhinesh":55
                }
                console.log(age)
//Opertor
    //1. Arthimetic operator
        console.log(5+6)
        console.log(5-6)     
        console.log(5*6)
        console.log(5/6)
        console.log(6/4)
        console.log(5%6)
        console.log(6%4)
        console.log(3**2)
        console.log(25**0.5)
    //2. Comparsion Operator
       console.log(5<6)
       console.log(5>6)
       console.log(5>=6)
       console.log(5<=6)
       console.log(5==6)
       console.log(5!=6)
       console.log(5===6)         
       console.log(5!==6)




























