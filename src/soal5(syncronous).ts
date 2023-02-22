let a : string = 'ini variabel pertama';
let b : string = 'ini variabel kedua';

setTimeout(function Async() {
    console.log('- (ini contoh Async) - posisinya di atas, munculnya harusnya pertama, '
     + 'ini karena ada set waktu delay 100 mili detik akhirnya muncul di terakhir console, '
     + 'karna dia di prosesnya di web API terlebih dahulu dan masuk ke Callback Queue di proses oleh Event Loop');
},100)

console.log('in adalah Contoh sebuah Syncronous dan Unsyncronous  : =>>>');
console.log(a);
console.log(b);



