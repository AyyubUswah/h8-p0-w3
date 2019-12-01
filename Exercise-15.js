/* Diberikan sebuah function groupAnimals(arr) yang menerima satu parameter berupa array yang berisi string. 
Function akan me-return array multidimensi dimana array tersebut berisikan kategori/kelompok array yang dikumpulkan sesuai dengan abjad depannya. 
Abjad harus berurut dari a-z (jika ada). Untuk kasus ini, anggap saja semua text lowercase.

Contoh jika animals adalah ["ayam", "kucing", "bebek", "bangau", "zebra"]

maka akan menampilkan output: [ [ "ayam" ], [ "bebek", "bangau" ], [ "kucing ], [ "zebra" ] ]

Urutan hewan dalam array setiap pengelompokan huruf tidak penting. */

function groupAnimals(animals) {
   var sortedArr = animals.sort() ;
   var groupOne = [] ;
   var groupTwo = [] ;
   //console.log(sortedArr); // you can only write your code here!
   for (var i=0 ; i<sortedArr.length ; i++ ) {

    groupOne.push(sortedArr[i]);
    //console.log(groupOne);
    console.log(i);
      if ( i < sortedArr.length -1) { 
      if (sortedArr[i][0] !== sortedArr[i +1] [0]) {
          groupTwo.push(groupOne);
          groupOne = [];
      }
   }
   else {
       groupTwo.push(groupOne);
       //groupOne = [];
   }
   }
   return groupTwo 
   }
  
  
  // TEST CASES
  console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
  // [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
  console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak' ]));
  // [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda', 'kancil'], ['unta'] ]

  