// Logical operator

/*
1.Program: Given age of the person, check and tell if the person is eligible for vote or not

Eligibility Criteria:
    Age>=18

*/
//1.Code
let age=20
console.log(age>=18)
/*
2.Program: Given age of the person, whether person is having voter id card or not, 
            whether person is having aadhar card or not
            check and tell if the person is eligible for vote or not

Eligibility Criteria:
    Age>=18
    Person should have one proof aadhar or voter if
*/
//2.code
    let agee=19;
    let hasAadharcard=true;
    let hasVoterid=false;
    console.log(agee>=18&&hasAadharcard)
    // And Operator && , OR operator ||
    console.log(agee>=18&&(hasAadharcard||hasVoterid))
    // Only And operator
    console.log(agee>=18&&(hasAadharcard && hasVoterid))
    // Not operator
    console.log(!(5<6))
   
 //Conditional statement
    //1. If Statement
    /* program: Given 2 number , find & print largest number among these 2 number
     */
    let firstNo=520;
    let secondNo=66;
    if(firstNo>secondNo)
    {
        console.log(firstNo,"it is greatest number")
    }
    //2.If .. else Statement
    let Firstn1=25;
    let Secndno2=55;
    if(Firstn1>Secndno2)
    {
        console.log(Firstn1,"it is greatest number")
    }
    else
    {
        console.log(Secndno2,"is geatest number")
    }
    //3.Nested If ..else statement
    /* program: Given 3 number , find & print largest number among these 3 number
     */
    let fno=100;
    let sno=234;
    let tno=1235;
    if(fno>sno)
    {
        console.log(fno,"is the greatest number")
    }
    else{
        if (sno>tno) {
            console.log(sno,"is the greatest")
        } else {
            console.log(tno,'is the greatest number')
        }
    }
    //4.Muliple If ..else statement
    /* program: Given 3 number , find & print largest number among these 3 number
     */
    let fno1=100;
    let sno2=234;
    let tno3=1235;
    if(fno>sno)
    {
        console.log(fno1,"is the greatest number")
    }
    else if (sno>tno) {
            console.log(sno2,"is the greatest")
        } else {
            console.log(tno3,'is the greatest number')
        }
    //5. Switch case
        let value1=3;
        switch(value1)
        {
            case 1:
                console.log("it is one")
                break;
            case 2:
                console.log("it is two")
                break;
             default: 
                console.log("Neither one or two")       
        }
    /* program: Given 3 number , find & print largest number among these 3 number without using if else

     */
            let firstNumber=1000;
            let secondnumber=2330;
            let thirdnumber=2450;

            switch (firstNumber>secondnumber&&firstNumber>thirdnumber) {
                case true:{
                        console.log(firstNumber,"is the greatest number")
                    break;
                }
                case false:
                    switch (secondnumber>thirdnumber) {
                        case true:{
                                console.log(secondnumber,"is the greatest number")
                            break;
                        }
                    
                        case false:
                            {
                            console.log(thirdnumber,"is the greatest number")
                            break;
                            }
                    }
            }
        //6. Ternary operator(condition?true:false)
        let firno=145;
        let secno=244;
        firno>secno?console.log(firno,"is greatest"):console.log(secno,"is the greatest")            
        //While loop
            let count=0;
            while(count<3)
            {
                console.log('hello using while loop')
                count++;
            }
         //for loop
         for(let count=0;count<3;count++)
         {
            console.log('hello using for loop')
         }   
         //do-while
         let count1=0;
         do{
            console.log("Hello using do-while");
            count1++;
         }while(count1<3)
         //Array
            let numbers=[3,true,'hello',[1,2,3,4]]
                console.log(numbers)
             console.log(numbers[2])
             
             console.log(numbers[3][3])
         //Length of array
         let Number1=[3,4,5,6,7]
         console.log(Number1.length)
         //push an element to the end of array
         Number1.push(8);
         console.log(Number1)
         //length of the array
         console.log(Number1.push(8,9,10));
         //add a element to the begaining of the array
         Number1.unshift(20)
         console.log(Number1)
         //Removes the last element from the array
         Number1.pop();
         console.log(Number1)
         //Removes the first element from the array
         Number1.shift();
         console.log(Number1)
         //To insert or delete an elementfrom a specific index
         Number1.splice(2,0,80)
         console.log(Number1)
         //to delete an element at index
         Number1.splice(3,2)
         console.log(Number1)







































