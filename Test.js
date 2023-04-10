/*
const lonT = [1, 2, 3];
lonT["bilang"] = 5;
console.log(lonT[4]);
console.log()
*/
// learn javascript
// operator logika

let x = 13;
// menyimpan angka 13 kedalam variabel x
/*
let hasil = (x % 22 == 0); //false
console.log("hasilnya : " + hasil + " hasil 1") // menampilkan hasil
// hasilnya false karena angka 13 mod nya 22 itu masih ada sisa 13. ketika 13 dibagi 22 maka akan ada sisa 13. lalu dibandingkan apakah hasilnya itu 0

hasil = (x % 22 == 13); // true
console.log("hasilnya : " + hasil + " hasil 2"); 

x = 12; // kita ubah isi variabel x 
hasil = (x % 3 == 0); // true
// karena gada sisanya jadi 0
console.log("hasilnya : " + hasil + " hasil 3")
*/

let hasil1 = (x % 2 == 0) // apakah x bilangan genap
let hasil2 = hasil1 && (x < 10) 
// apakah (hasil1) bilangan genap, (dan) x lebih kecil dari 10
// console.log("hasilnya : " + hasil2 + " hasil &&");

hasil2 = hasil1 || (x < 10) 
// console.log("hasilnya : " + hasil2 + " hasil ||");
let unary = !(x > 10); 
// console.log("hasilnya : " + unary + " hasil !");
/* 
LOGIKA
&& = AND harus true semua
|| = OR salah satu true
! = NOT kebalikan
*/

// STRING OPERATOR

let string1 = "10" + 10 + 10; // "101010"
let string2 = 10 + 10 + "10"; // "2010"
// console.log(`hasil string1 : ${string1}\n\nhasil string2 : ${string2}`);

// typeof(operand atau nilai)
let string = "aku string";
let number = 10;
let object = {}; // [] arrwy juga sama
let boolean = true;
let typeOf = typeof(string);
let typeOf1 = typeof(number);
let typeOf2 = typeof(object);
let typeOf3 = typeof(boolean);
/* console.log(`hasil dr typeOf : ${typeOf}

hasil dr typeOf1 : ${typeOf1}

hasil dr typeOf2 : ${typeOf2}

hasil dr typeOf3 : ${typeOf3}
`); */

// operator kondisiona
hasil = (x > 11) ? "yap anda benar" : "salah" // true : false
// console.log(hasil);

// variabel

var firstName = "Muhamad",
    lastName = "Fadhlan",
    fullName = "Muhamad Fadhlan";
    
 console.log(`Nama Pertama : ${firstName}\n\n Nama Kedua : ${lastName}\n\nNama Lengkap : ${fullName}`);
 
 // alert
/* alert('Hai semua'); // keyword alert dengan parameter string hai semua
var nama = prompt("Masukan Nama : ");
alert("Selamat Datang " + nama); 
var nanya = confirm("Apakah Kamu Mau Menjadi Pacarku?");
alert(nanya ? "Makasih ayangg" : "Yaudh atuh, babi ngana"); 

//  contoh program

alert("Selamat Datang....");
var lagi = true; // selagi user mengklik oke/true

while( lagi ){ // pengulanhan
  var namaloe = prompt("Masukan Nama :");
  alert("Halo " + namaloe);
  
  lagi = confirm("masih yakin dengan namamu?, jika benar klik oke. jika ingin mengulang klik batal");
}
alert("terimakasih...");
 */
 
 
 // control flow
/*
alert("Mulai..");
for(var i = 0; i < 5; i++){
  alert("Halo Dunia!");
}
alert("Selesai");
*/

// pengkodisian

/*
var angka = prompt("Masukan Angka : ");
if(angka % 2 === 0){ // jika angka yang di inputkan dibagi dengan 2, lalu ada sisanya 0. maka angka tsb genap
alert(angka + " angka ini adalah GENAP");
} else { // jika tidak
 alert(angka + " angka ini adalah GANJIL");
} */

// looping while
/*
var ulang = true;
while(ulang === true) {
  alert("Aku cinta kamuu...");
  ulang = confirm("Lagi ga?");
}
*/

var nilaiAwal = 1;
while(nilaiAwal <= 3){ // selama nilai awal kurang dari sama dengan 5
 // console.log("Ulang...");
  nilaiAwal++; // nilaiAwal = nilaiAwal + 1;
}

// latihan while src="angkot1.js";

// looping for

var nilaiAwall = 1;
for( nilaiAwall; nilaiAwall <= 10; nilaiAwall++){
  console.log("Nilai awall No. " + nilaiAwall + "x")
}


