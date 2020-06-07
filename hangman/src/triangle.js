// // let rows = 5;
// // for(let i=1; i<=rows; i++)
// // {
// // for(let k=1; k<=( rows-i ); k++)
// // {
// // console.log(" ");
// // }
// // for(var j=1; j<=i; j++)
// // {
// //     console.log("* ");
// // }
// // console.log(" ");
// // }

// // let i
// // let k=0

// // for(i=1; i <= 5; i++)
// //  {
 
// //   for(k=1; k<=i; k++)
// //  {
// //    console.log('*');
// //   }
// //   console.log(" ");
// //  }
//  function triangle(n) { 
//     for (let i = 1; i <= n; i++) {
//       let s = "";
//       for (let j = 1; j <= (2 * n - 1); j++) { 
//          (j >= n + 1 - i && j <= n - 1 + i) ? s += "*" : s += " "; 
//        }
//       console.log(s);
//      }
//  }
//  triangle(5);
//"OK12".substr(2) + "OK12".substr(0,2)
function sw(str1,str2) { 

for(let num =1;num<=str1.length;num++){
    let result = str1.substr(num) + str1.substr(0, num);
   if (result==str2){
       return true
   } 
   }
   
   return false
    
}


console.log( sw("abc","aaa"))
console.log( sw("abc","cab"))