//display the multiplication table of a given integer.

// let n = 9;
// for (let i = 1; i <= 10; ++i)
//     console.log(n + " X " + i + " = " + n * i);



// function isPalindrome(str) {
//     return str === str.split('').reverse().join('');
//   }
  
//   console.log(isPalindrome("madam")+ " ispalinddrome"); 
//   console.log(isPalindrome("hello") + "is not palindrome");  




// let targetStr = "kasurusak";
// let ispalindrome = true;
// let start = 0;
// let end = targetStr.length - 1 ; // -1 karena baca nya dari 0 sementara index nya ada lebih dari itu

// while (start < end ){
//     if (targetStr[start] !== targetStr[end]){  // [] untuk membaca setiap index  ! tuh tidak
//         ispalindrome = false;
//         break;
//     }
//     start++;  // fungsi nya untuk menyamakan setiap index 
//     end--; 
// }
// console.log(ispalindrome ? "palindrome" : "not a palindrome"); // consolelog tau karena dia cetak makai if else 




// convert cm to km
// let cm = 200000;
// let kilometer = cm / 100000;

// console.log(cm + " centimeter" + " - > " + kilometer + "Km");





// const Number = 1000;
// console.log(
//     new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'IDR' }).format(
//       Number,
//     ),
//   );
  
// let targetnumber = 1000;
// let converted = "Rp. " + (targetnumber / 1000).toFixed(3) + ",00"
// console.log(converted)




// let targetcapitals = "hello world";
// let result = "";
// for (let i = 0; i < targetcapitals.length; i++) {
//     if (i === 0 || targetcapitals[i - 1] === " ") {
//         result += targetcapitals[i].toUpperCase();
//         console.log(result);
//     } else {
//         result += targetcapitals[i];
//         console.log(result);
//     }
// }

// let kata = 'hello world'

// console.log(kata.replace(/ell/,''))



// let re = "an apple a day keeps the doctor away!";

// console.log(re.replaceAll('a', '*'));


let targetconvert = "tHE qUIcK bRoWn fOX";
let res = "";
// setiap kata memiliki bobot search aja asci table
for (let i = 0; i < targetconvert.length; i++) {
    if(targetconvert[i] >= 'a' && targetconvert[i] <= 'z'){  // ngecheck a-> z klo ada yg sama di upppercase 
        res += targetconvert[i].toUpperCase();
    } else if(targetconvert[i] >= 'A' && targetconvert[i] <= 'Z') { //lowercase
        res += targetconvert[i].toLowerCase();
    } else {
        res += targetconvert[i];
    }
}
console.log(res);