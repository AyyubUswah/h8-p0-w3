
function balikString(str) {
    var hasil = '';
    for ( var i = 0 ; i<str.length ; i++) {
    hasil = str[i] + hasil;
    
}
return hasil
} 

console.log (balikString('hello world!'));


