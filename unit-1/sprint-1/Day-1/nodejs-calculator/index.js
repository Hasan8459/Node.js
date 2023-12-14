// index.js

//  import the crypto module
const crypto = require('crypto');
const { randomInt } = require('crypto');

//  get a commands using process.argv

const operation = process.argv[2]
const enc1 = parseFloat(process.argv[3]);
const enc2 = parseFloat(process.argv[4]);

// numbers are checking valid or not

// if(operation!=='random'  ){
// if(isNaN(enc1) || isNaN(enc2)){
//   console.log("Enter Valid Numbers")
//   process.exit(1);
// }
// }

// complete the  function


let result;
switch (operation) {

   case 'add':
   result = enc1 + enc2
   console.log(`${operation} (${enc1}, ${enc2}) = ${result}`)
   break;

   case 'sub':
   result = enc1 - enc2;
   console.log(`${operation} (${enc1}, ${enc2}) = ${result}`)
   break;

   case 'mult':
   result = enc1 * enc2;
   console.log(`${operation} (${enc1}, ${enc2}) = ${result}`)
   break;

   case 'divide':
   result = enc1 / enc2;
   console.log(`${operation} (${enc1}, ${enc2}) = ${result}`)
   break;

   case 'sin':
   result = Math.sin(enc1);
   console.log(`${operation} (${enc1}) = ${result} `)
   break;

   case 'cos':
   result = Math.cos(enc1);
   console.log(`${operation} (${enc1}) = ${result} `)
   break;

   case 'tan':
   result = Math.tan(enc1);
   console.log(`${operation} (${enc1}) = ${result} `)
   break;

   case 'random':
   if(!enc1){
    console.log("Give length of random number Genration.")
   } else {
      crypto.randomBytes(enc1, (err,buffer)=>{
        if(err){
          console.log(err)
        } else {
          const min = Increase(enc1)
         result = randomInt(min,min*10)
         console.log(result)
        }
      })
   }
   break;

  default:
    console.log("Invalid operation");
  break;
}

function Increase(a){
  let b=1;
for(let i=1; i<a; i++)
{
  b = b*10
}
return b;
}