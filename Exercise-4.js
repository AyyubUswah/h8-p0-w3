var input = ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"] ;

// SECTION A //
function dataHandling2 (arr) {
  
   input.splice(1, 1, 'Roman Alamsyah Elsharawy');
   input.splice(2, 1, 'Provinsi Bandar Lampung');
   input.splice(4, 0, 'Pria');
   input.splice(5, 1, 'SMA Internasional Metro');
   
   return input; 
}   
console.log(dataHandling2(input));

//SECTION B

//var bulan = '';
var bulan = input[3].split('/');
switch (bulan[1]) {
    case '01' :
        console.log('Januari');
        break;
    case '02' :
        console.log('Februari');
        break;
    case '03' :
        console.log('Maret');
        break;
    case '04' :
        console.log('April');
        break;
    case '05' :
        console.log('Mei');
        break;
    case '06' :
        console.log('Juni');
        break;    
    case '07' :
        console.log('Juli');
        break;
    case '08' :
        console.log('Agustus');
        break;
    case '09' :
        console.log('September');
        break;
    case '10' :
        console.log('Oktober');
        break;
    case '11' :
        console.log('November');
        break;
    case '12' :
        console.log('Desember');
        break;    

}

//SECTION C

 var sortDesc = bulan ;
 //console.log(sortDesc )
 sortDesc.sort((a, b) => (b-a));
 console.log(sortDesc);

 //SECTION D
 var forJoin = input[3].split('/') ;
 var arrJoin = forJoin.join('-');
 console.log(arrJoin);
 /*function joinArr (date) {
    
    var result = date.map(Number);
    console.log (result); 

 }
 joinArr(forJoin); */

 //SECTION E
 var forSlice = input[1].toString()
 console.log(forSlice);
 forSlice = forSlice.slice(0, 15);
 console.log(forSlice);


//["0001", "Roman Alamsyah Elsharawy", "Provinsi Bandar Lampung", "21/05/1989", "Pria", "SMA Internasional Metro"]  