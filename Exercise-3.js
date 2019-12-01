

var input = [
    ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"],
    ["0002", "Dika Sembiring", "Medan", "10/10/1992", "Bermain Gitar"],
    ["0003", "Winona", "Ambon", "25/12/1965", "Memasak"],
    ["0004", "Bintang Senjaya", "Martapura", "6/4/1970", "Berkebun"]
]

function dataHandling (array) {
    if (array === input[0]) {
    console.log('Nomor ID: ' + input[0][1]);
    console.log('Nama Lengkap: ' + input[0][2]);
    console.log('TTL: ' + input[0][3]);
    console.log('Hobi: ' + input[0][4]);
    }
    else if (array === input[1]) {
    console.log('Nomor ID: ' + input[1][1]);
    console.log('Nama Lengkap: ' + input[1][2]);
    console.log('TTL: ' + input[1][3]);
    console.log('Hobi: ' + input[1][4]);
    }
    else if (array === input[2]) {
    console.log('Nomor ID: ' + input[2][1]);
    console.log('Nama Lengkap: ' + input[2][2]);
    console.log('TTL: ' + input[2][3]);
    console.log('Hobi: ' + input[2][4]);
    }
    else if ( array === input[3]) {
    console.log('Nomor ID: ' + input[3][1]);
    console.log('Nama Lengkap: ' + input[3][2]);
    console.log('TTL: ' + input[3][3]);
    console.log('Hobi: ' + input[3][4]);      
    }
}

dataHandling (input[0]);
console.log('');
dataHandling (input[1]);
console.log('');
dataHandling (input[2]);
console.log('');
dataHandling (input[3]);
