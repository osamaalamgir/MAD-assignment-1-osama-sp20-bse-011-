
//Problem 1 
/* Write program to print the kth digit from last. E.g. input 23617 and k=4 output 3 */

// let no= "23617";
// let kth_num=4;
// console.log("your Kth last digit is: ");
// let d=0;
// for( let i=no.length; i>=0; i--){
    
//     if (d==5){
//         console.log(no[i]);
//         break;
//     }
//     else{
//         d=d+1;
//         continue;

//     }
// }
// /* Problem 2: 
// Write program to find sum of all digits. Input 23618 output 2+3+6+1+8=20  */
// let user  = '23618';

// let array=[2,3,6,1,8];
// let arr2=[];
// for (let i=0; i<user.length; i++ ){
//     arr2[i]=parseInt(user[i]);
// }
// console.log(arr2);
// console.log(array);
// const initial = 4;
//  sum = arr2.reduce(
//     (previous, current) => previous + current
//   );
  
//   console.log(sum);
//  /*  Problem 3:
// Write program to find sum of even digits. Input 23617 output 2+6=8. */
// let input = '43158';
// let arr=[];
// for (let i=0; i<input.length; i++ ){
//     arr[i]=parseInt(input[i]);
// }

// let even= arr1.filter(a=>a%2==0);
// let sum=arr1.map(v=>v=+arr1.filter(a=>a%2==0));
// let n= even.reduce((prv, crv)=>prv+crv);
// console.log(n);

// console.log(sum.map(getsum));
// /* Problem 4:
// Write a JavaScript that calculates the squares and cubes of the numbers from 0 to 10. */
// let number=[0,1,2,3,4,5,6,7,8,9,10];
// console.log("square and cube :");
// let sqr=number.map(a=>a**2);
// console.log(sqr);
// let cube=number.map(a=>a*3);
// console.log(cube);
// /* Problem 5:
// Develop and demonstrate JavaScript script that uses functions for the following problems: 
// 1.	Parameter: A string 
// 2.	Output: The position in the string of the left-most vowel 
// 3.	Parameter: A number  
// 4.	Output: The number with its digits in the reverse order */
// function fucn(){
//     let p="dhffjfbfbb";
//     let vowel=['a','e','i','o','u'];
//     let array=[];
//     for (let i=0; i<p.length; i++ ){
//         array[i]=p[i];
//     }


//     for (let i=0; i<=array.length; i++){

//         for (let j=0; j<=vowel.length; j++){

//             if (arr1[i]==vowel[j]){
//                 console.log(array[i],i);
//                 return;
//             }
//         }
//     }
// }

// fucn()
// /* Problem 6:
// Write a JavaScript program where the program takes a random integer between 1 to 10, the user is then prompted to input a guess number. If the user input matches with guess number, the program will display a message "You WIN" otherwise display a message "Not matched".
//  */
// let n=3;
// let r=Math.floor(Math.random()*10);
// if (n==r)
// {
//     console.log("Win");
//     console.log(r,n);
// }
// else{
//     console.log("no Matched");
//     console.log(r,n);
// }
// /* Problem 7:
// Write a JavaScript program to check whether 10 appears in first or last position of a given array of integers. The array length must be greater or equal to 2.
//  */
// let array=[10,3,6,79,43,100];
// console.log(array.lastIndexOf(10)==array.length-1 || array.lastIndexOf(10)==0);
// /* Problem 8:
// Write a JavaScript function that returns a passed string with letters in alphabetical order. */
// let s='comsats';
// let a=Array.from(str);
// console.log(a.sort().join(" "))