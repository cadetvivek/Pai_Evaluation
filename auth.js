function generateAuthID(studentCode,email){
//step 1 before @
let username = ''
let domain = ''
let atIndex = -1;

for(let i=0;i<email.length;i++){
    if(email[i]==='@'){
        atIndex = i;
        break;
    } 
}

for(let i=0;i<atIndex;i++){
    username+=email[i]
}

for(let i=atIndex+1;i<email.length;i++){
    domain+=email[i];
}

// return studentCode

//step 2 join all
let contatenatedString = username+studentCode+domain;
//return contatenatedString

//step3 convert charecter in their position
let convertString = '';
for(let i=0;i<contatenatedString.length;i++){
    let char = contatenatedString[i].toLowerCase();
    let charCode = char.charCodeAt(0);
    if(char>='a' && char<='z'){
        convertString+=(charCode-96)
    }else if(char>='0' && char <='9'){
        convertString +=char
    }else{
        convertString +='1'
    }
}

//return convertString
 // step 4 remove all prime
 let nonPrimes = '';
 let primes = '2357'
 for(let i=0;i<convertString.length;i++){
    let isPrimes = false;
    for(let j=0;j<primes.length;j++){
        if(convertString[i]===primes[j]){
            isPrimes = true;
            break;
        }
    }
    if(!isPrimes){
        nonPrimes+=convertString[i]
    }
 }
   return nonPrimes

   // step 5 calculate freq
//     let freq = {};
//     for(let i=0;i<nonPrimes.length;i++){
//         let char = nonPrimes[i]
//         if(freq[char]){
//             freq[char]++
//         }else{
//             freq[char] = 1;
//         }
//     }
//   // return freq
//    let finalID = '';
//    for(let i=0;i<nonPrimes.length;i++){
//     if(freq[nonPrimes[i]]===1){
//         finalID+=nonPrimes[i]
//     }
//    }
//    return finalID
}
let studentCode = 'fs39_330930'
let email = 'vk9wb60jk4d7@gmail.com'
console.log( generateAuthID(studentCode,email))