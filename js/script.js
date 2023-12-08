
// // 1- Write a program that allow to user enter number then printit

// var userNumber=Number(window.prompt("enter your number "));
// console.log(userNumber);


// /*2-Write a program that take number from user then print yes if that number can divide by 3
// and 4 otherwise print no*/

// var userNumber=Number(window.prompt("enter your number "));
// if(userNumber%3 ===0 && userNumber%4 ===0){
//     console.log("yes");
// }else{
//     console.log("no");
// }


// // 3- Write a program that allows the user to insert 2 integers then print the max

// var num1=Number(window.prompt("enter number 1"));
// var num2=Number(window.prompt("enter number 2"));
// if(num1>num2){
//  console.log("max is "+num1);
// }else if(num2>num1){
//  console.log("max is "+num2);
// }else if(num1===num2){
//  console.log("is equal");
// }else{
//  console.log("number is not vaild");
// }



// /*4- Write a program that allows the user to insert an integer then print negative if it is
// negative number otherwise print positive.*/

// var num=Number(window.prompt("enter number"));
// if(num<0){
//     console.log("negative number");
// }else if(num>0){
//     console.log("positive number");
// }else if(num==0){
//     console.log("zero "); 
// }else{
//     console.log("not vaild"); 
// }



// /*5- Write a program that take 3 integers from user then print the max element
// and the min element.*/
// // الحل الاول لرقم 5

// var num1=Number(window.prompt("enter number1"));
// var num2=Number(window.prompt("enter number2"));
// var num3=Number(window.prompt("enter number3"));
// if (num1>num2 && num1>num3){
//     console.log("max number ="+num1);
// }else if(num2>num1 && num2>num3){
//     console.log("max number ="+num2);
// }else if(num3>num1 && num3>num2){
//     console.log("max number ="+num3);
// }else if(num1===num2&&num2===num3){
//     console.log("max number ="+num1);
// }else if((num2===num3&&num1>num2)||(num1===num3&&num3>num2)){
//     console.log("max number ="+num1);
// }else if((num1===num2&&num3>num1)||(num2===num3&&num3>num1)){
//     console.log("max number ="+num3);
// }else if((num1===num3&&num2>num1)||(num1===num2&&num2>num3)){
//     console.log("max number ="+num2);
// }else{
//     console.log("not vaild");
// }
// if (num1<num2 && num1<num3){
//     console.log("min number ="+num1);
// }else if(num2<num1 && num2<num3){
//     console.log("min number ="+num2);
// }else if(num3<num1 && num3<num2){
//     console.log("min number ="+num3);
// }else if(num1===num2&&num2===num3){
//     console.log("min number ="+num1);
// }else if((num2===num3&&num1<num2)||(num1===num3&&num3<num2)){
//     console.log("max number ="+num1);
// }else if((num1===num2&&num3<num1)||(num2===num3&&num3<num1)){
//     console.log("max number ="+num3);
// }else if((num1===num3&&num2<num1)||(num1===num2&&num2<num3)){
//     console.log("max number ="+num2);
// }else{
//     console.log("not vaild");
// }





// // حل اخر لرقم 5
// var num1=Number(window.prompt("enter number1"));
// var num2=Number(window.prompt("enter number2"));
// var num3=Number(window.prompt("enter number3"));
// var maxNum=num1;
// if(maxNum<num2){
//     maxNum=num2;
// }
// if(maxNum<num3){
//     maxNum=num3;
// }
// console.log("max number = "+maxNum);

// var minNum=num1;
// if(minNum>num2){
//     minNum=num2;
// }
// if(minNum>num3){
//     minNum=num3;
// }
// console.log("max number = "+minNum);



// /*6,7- Write a program that allows the user to insert integer number then
// check If a number is oven or odd*/

// var num=Number(window.prompt("enter number"));
// if(num%2==0){
// console.log(num+" is even number");
// }else if (num%2 != 0){
//     console.log(num+" is odd number");
// }else{
//     console.log("not vaild");
// }



// /*8- Write a program that take character from user then if it is vowel chars (a,e,I,o,u)
// then print vowel otherwise print consonant*/

// var character=window.prompt("enter character");
// if(character=="a"|| character=="e" ||character=="i" || character=="o"||character=="u" ||character=="A"||character=="E"||character=="I"||character=="O"||character=="U") {
// console.log("vowel");
// }else{
// console.log("consonant");
// }


// /*9- Writeaprogramthat allowsusertoinsertintegerthenprintallnumbersbetween1to
// that’s number*/

// var num=Number(window.prompt("enter number"));
// for(i=1;i<=num;i++){
//     console.log(i);
// }


// // 10- Write a program that allows userto insert integerthen print a multiplication table up to 12.
// var num=Number(window.prompt("enter number"));
// var result;
// for(i=1;i<=12;i++){
//     result=i*num;
//     console.log(`${num}*${i}=${result}`);
// }




// /*11- Writeaprogramthatallowstousertoinsertnumberthenprintallevennumbers
// between 1 to this number*/
// var num=Number(window.prompt("enter number"));
// for(i=1;i<=num;i++){
//     if(i%2==0){
//         console.log(i);
//     }
// }



// //12- Writeaprogramthattaketwointegersthenprintthepower
// var num1=Number(window.prompt("enter number1"));
// var num2=Number(window.prompt("enter number2"));
// var result=num1**num2;
// console.log(result);


// /*12- Write a program to enter marks of five subjects and calculate total, average and
// percentage.*/

// var total=0;
// for(i=1;i<=5;i++){
// total+=Number(window.prompt("enter mark of subject "+ i));
// }
// var average=total/5;
// var percentage=(total/500)*100;
// console.log("total of five subjects marks = "+total);
// console.log("average of five subjects marks = "+average);
// console.log("percentage of five subjects marks = "+percentage +"%");



// /*13-Write a program to input month number and print number of days in that
// month.*/
// var month=Number(window.prompt("enter the number of month"));
// if(month==1||month==3||month==5||month==7||month==8||month==10||month==12){
//     console.log("number of days "+31);
// }else if(month==4||month==6||month==9||month==11){
//     console.log("number of days "+30);
// }else if(month==2){
//     console.log("number of days "+28);
// }else{
//     console.log("not vaild");
// }



// /*14- Write a program to input marks of five subjects
// Physics, Chemistry, Biology, Mathematics and Computer
// , Find percentage and grade*/

// var total=0;
// for(i=1;i<=5;i++){
// total+=Number(window.prompt("enter mark of subject "+ i));
// }
// var percentage=(total/500)*100;

// if(percentage >=90){
//     console.log("percentage of five subjects is "+percentage+"%" +" : Grade A");
// }else if(percentage >= 80){
//     console.log("percentage of five subjects is "+percentage+"%" +" :  Grade B"); 
// }else if(percentage >= 70){
//     console.log("percentage of five subjects is "+percentage+"%" +" :  Grade C"); 
// }else if(percentage >=60){
//     console.log("percentage of five subjects is "+percentage+"%" +" : Grade D"); 
// }else if(percentage >=40){
//     console.log("percentage of five subjects is "+percentage+"%" +" : Grade E"); 
// }else if(percentage < 40){
//     console.log("percentage of five subjects is "+percentage+"%" +" : Grade F"); 
// }else{
//     console.log("not vaild");
// }



// // 15- Write a program to print total number of days in month

// var month=Number(window.prompt("enter the number of month"));
// switch(month){
//     case 1:
//     case 3:
//     case 5:
//     case 7:
//     case 8:
//     case 10:
//     case 12:
//         console.log("total number of days in month is "+ 31);
//     break;
//     case 2:
//         console.log("total number of days in month is "+ 28);
//     break;
//     case 4:
//     case 6:
//     case 9:
//     case 11:
//         console.log("total number of days in month is "+ 30);
//     break;
//     default:
//         console.log("not vaild");
    
// }



// // 16- Write a program to check whether an alphabet is vowel or consonant
// var character=window.prompt("enter character");
// switch(character){
//     case "a":
//     case "e":
//     case "i":
//     case "o":
//     case "u":
//     case "A":
//     case "E":
//     case "I":
//     case "O":
//     case "U":
//         console.log("vowel");
//     break;
//     default:
//         console.log("consonant"); 
// }



// //17- Write a program to find maximum between two numbers

// var num1=Number(window.prompt("enter the number1"));
// var num2=Number(window.prompt("enter the number2"));
// switch(true){
//     case num1>num2:
//         console.log("max is " + num1);
//     break;
//     case num2>num1:
//         console.log("max is "+ num2);
//     break;
//     case num1===num2:
//         console.log("is equal");
//     break;
//     default:
//         console.log("not vaild");
// }




// // 18- Write a program to check whether a number is even or odd
// var num=Number(window.prompt("enter the number"));
// switch(true){
//     case num%2==0:
//         console.log("even number");
//     break;
//     case num%2!=0:
//         console.log("odd number");
//     break;
//     default:
//         console.log("not vaild");  
// }



// // 19- Write a program to check whether a number is positive or negative or zero
// var num=Number(window.prompt("enter the number"));
// switch(true){
// case num > 0:
//     console.log("positive number");
//     break;
// case num < 0:
//     console.log("negative number");
//     break;
// case num==0:
//     console.log("zero");
//     break;
// default:
//     console.log("not vaild");
// }




// //20- Write a program to create Simple Calculator
// var num1=Number(window.prompt("enter the number 1"));
// var num2=Number(window.prompt("enter the number 2"));
// var sign=window.prompt("enter your operator(+ , - , * , / , %)");

// switch (sign) {
//     case "+":
//         console.log(num1+num2);
//         break;
//     case "-":
//         console.log(num1-num2);
//         break;
//     case "*":
//         console.log(num1*num2);
//         break;
//     case "/":
//         console.log(num1/num2);
//         break;
//     case "%":
//         console.log(num1%num2);
//         break;
//     default:
//         console.log("not vaild");
//         break;
// }


