/*Diberikan sebuah function angkaPalindrome(angka) yang menerima satu parameter angka. 
Function akan me-return angka selanjutnya yang mengandung nilai angka palindrome. 
Contoh, jika angka adalah 27, maka function akan me-return nilai 33 karena angka 33 adalah angka palindrom.
 Jika angka dari awal sudah merupakan palindrome, maka function harus mencari angka selanjutnya yang palindrome. 
 Contoh, jika angka adalah 8, walaupun dia sudah palindrome, harus mencari angka selanjutnya yang palindrome, yaitu 9.*/


var input = '';
function palindrome(kata) {
    var result = ''; 
    for(var i = 0 ; i<kata.length ; i++) {
        result = kata[i] + result;
       }
       if (result === kata) {
        return ('true');
    }
    else {
       return ('false'); 
    } 
}
console.log(palindrome('katak')); // true
console.log(palindrome('blanket')); // false
console.log(palindrome('civic')); // true
console.log(palindrome('kasur rusak')); // true
console.log(palindrome('mister')); // false