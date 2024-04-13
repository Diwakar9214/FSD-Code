
let numbers=[3,4,5,6,7,8,9,10]
//iterating over an array
    let index=0;
    //while loop
    while(index<numbers.length)
    {
        console.log(numbers[index]);
        index++;
    }
    //for loop
    for (let index = 0; index < numbers.length; index++) {
        console.log(numbers[index]);
        
    }
    //do-while
    let index1=0;
    do{
        console.log(numbers[index1])
        index1++;
    }while(index1<numbers.length)
    //for..in loop
    for(let index2 in numbers){
        console.log(numbers[index2])
    }
    //for .. of loop
    for(let number of numbers)
    {
        console.log(number)
    }
    //1.function
    function sayhello() {
        console.log("hello world")
    }
    sayhello();
    //2.function with parameter
    function sayhello(name) {
        console.log("hello"+name+'!')
    }
    sayhello('krish')
    //3.function with 2 parameter adding number with return
    function add(firstno,secondno) {
        return firstno+secondno
    }
    console.log(add(5,6))
    console.log(add(7,6))
    //4.function with 2 parameter and call function only one value is passed (error Nan-Not a number)
    function add(firstno,secondno) {
        return firstno+secondno
    }
    console.log(add(5))
    //5.function with 2 parameter and call function only 3 value is passed. last value is ignored
    function add(firstno,secondno) {
        return firstno+secondno
    }
    console.log(add(5,5,6))//6 is ignored
    //6.Number in function is called rest operator
    function add(firstno1=0,secondno1=0,...numbers) {
        console.log(numbers)
        return firstno1+secondno1
    }
    console.log(add(11,12,22))//[22] 23
    //7.Spread operator known ...numbers
    function add1(firstno2=0,secondno2=0,...numbers1) {
        console.log(...numbers1)//spread operator
        console.log(7,8,9,10)
        let sum=0;
        for (const number2 of numbers1) {
            sum=sum+number2;

        }
        return firstno2+secondno2+sum;
    }
    console.log(add1(5,6,7,8,9,10))
    //8. Instead firstno,secondno will get parameters as ...numbers
    function add2(...numbers2)
    {
        let sum=0;
        for (const number22 of numbers2) {
            sum=sum+number22
        }
        return sum;
    }
    console.log(add2(5,6,7,8,9,10))
    //Different way of declaring function
    //1.Named function
    function add(a,b) {
        return a+b
    }
    console.log(add(5,6))
    //2.Nameless function
    let add22=function(a,b){
        return a+b;
    }
    console.log(add22(7,6))
    //3. Arrow function
    let add20=(a,b)=>{
        return a+b;
    }
    console.log(add20(70,6))
    //4.IIFE: Immediately Invoked Function Expression
    console.log(((a, b) => {
         return a + b;
    
        })(5, 6));
    //for each ..loop(available for array)
    //callback function:function that are passed as arguments to another function
    //1.for each
    let numbers23=[5,6,9,11,22]
    numbers23.forEach(
        function(){
            console.log("Hello")
        })
     //2. for...each loop (available only for arrays)    

         let numbers24 = [3, 4, 5, 6, 7];
        
         numbers24.forEach(
         function(value){
       console.log(value);
    }
     )
     //3.value & index
     let numbers25 = [3, 4, 5, 6, 7];
        
     numbers25.forEach(
     function(value,index22){
   console.log(value,index22);
}
 )
    //String-String is sequence of characters
    let word='hello'
    console.log(word,typeof word)
    console.log(word.length)
    console.log(word[0])
    console.log(word[2])

    //iterating a character
    for(let index=0;index<word.length;index++){
        console.log(word[index])
    }
    //for of loop
    for(char of word)
    {
        console.log(char)
    }
    //Convert string to array using split
    let word2='hello'
    word2=word2.split('')
    word2[0]='H'
    console.log(word2)
    // convert array to string using join
   word2=word2.join('');
   console.log(word2) 




















