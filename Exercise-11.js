/* Diberikan sebuah function tentukanDeretAritmatika(arr) yang menerima satu parameter berupa array yang terdiri dari angka. 
Function tersebut akan mengembalikan true jika array dari parameter tersebut merupakan deret aritmatika. 
Deret aritmatika adalah sebuah deret dimana perbedaan setiap angka di deret tersebut konsisten.
Contoh, [2, 4, 6, 8] adalah deret aritmatika dengan pertambahan nilai sebesar 2, dan [2, 4, 6, 9] bukanlah deret aritmatika 
karena perbedaan selisih antar angka yang tidak konsisten. */

function tentukanDeretAritmatika(arr) {
        var check1 = arr[1] - arr[0] ;
        //var result = '';
        for ( var i = 1 ; i < arr.length ; i++) {
           if ( arr[i] - arr[i -1] !== check1) {
            
            result = 'false';
            //return false

            if ( result = 'false' ) {
            
            return result//return false
            
            }

           }
          else {
            result = 'true';
          } 
        }
         //return true//return result// you can only write your code here!
         return result
      }
      // you can only write your code here!

  
  // TEST CASES
  console.log(tentukanDeretAritmatika([1, 2, 3, 4, 5, 6])); // true
  console.log(tentukanDeretAritmatika([2, 4, 6, 12, 24])); // false
  console.log(tentukanDeretAritmatika([2, 4, 6, 8])); // true
  console.log(tentukanDeretAritmatika([2, 6, 18, 54])); // false
  console.log(tentukanDeretAritmatika([1, 2, 3, 4, 7, 9])); // false

  console.log(tentukanDeretAritmatika([1, 2, 3, 4, 4, 4, 4, 4, 4, 5, 6])); // false // tambahan untuk revisi dan pengecekan ulang
