
/*Diberikan sebuah function cariMean(arr) yang menerima sebuah array angka. Function akan me-return mean dari array atau deret angka tersebut. 
Mean adalah angka rata-rata dari deret bilangan tersebut. Contoh, mean atau rata-rata dari [1, 2, 3, 4, 5] adalah 3. 
Kita perlu kemudian melakukan pembulatan angka dari hasil mean yang didapatkan (pembulatan ke atas).*/



function pasanganTerbesar(num) {
    // you can only write your code here!
    var string = num.toString();
    var arr = [];
    for (var i=0; i<string.length; i++){
      arr[i] = string[i] + string[i+1];
      //console.log(arr);
     //console.log('xxxxxxxxx')
    }
    //console.log(simpan);
    //Sorting for array looping
    var temp =0;
      //for (var j=0; j<simpan.length; j++){
        for (var k=0; k<arr.length; k++){
          //console.log(k)
          if ((arr[k]) > (arr[k+1])){
          temp = arr[k];
          //console.log(temp)
          //console.log('---------')
          //arr[k] = arr [k+1]
          //console.log(arr[k]);
          arr[k+1] = temp;
          //console.log(arr[k+1]);
            //console.log(arr);
            //console.log('++++++')
          }
        }
    //console.log(simpan);  
    return arr[arr.length -1];  // mengakses angka terbesar yang berada pada length -1 ( karena sudah di gantikan pada temp = ark[k] & arr[k+1] = temp )
  }  

  
  

/* short function
function pasanganTerbesar (num) {

    var string = num.toString();
    var arr = [];

    for (var i = 0 ; i <string.length; i++ ) {
        arr.push(string.slice(i, i + 2))
        //console.log(arr);
    }a

    arr.sort((a, b) => a - b )
    //console.log(arr)
    return arr[arr.length -1]

}
 */ 
  // TEST CASES
  console.log(pasanganTerbesar(156473)); // 73
  console.log(pasanganTerbesar(12783456)); // 83
  console.log(pasanganTerbesar(910233)); // 91
  console.log(pasanganTerbesar(71856421)); // 85
  console.log(pasanganTerbesar(79918293)); // 99