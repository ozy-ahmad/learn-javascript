// conto NaN
const nilaiNaN = 5 + 'a';
console.log(`nilaiNan adalah ${nilaiNaN}`);
const apakahNaN = isNaN(nilaiNaN) ? 'nilainya NaN' : 'nilainya bukan NaN'
console.log(apakahNaN);

// Nan adalah Not a Number


let nilaiUndifined;
console.log(`niai dari variable ini adalah ${nilaiUndifined}`);
//undifined artinya nilai yang belum diberikan / diisi
const siswa = {}

//contoh null
let nilaiNull = null;
console.log(`nilai dari variable nilaiNull adalah ${nilaiNull}`);
const guru = {
    nama: null
}

// contoh parseInt
let nilaiKecepatan = '200 km';
let nilainyaAja = parseInt(nilaiKecepatan)
console.log(nilainyaAja);

let nilaiNominalDidepan = 'km 20';
let nilainyaAja2 = parseInt(nilaiNominalDidepan);
console.log(nilainyaAja2);

//contoh parseFloat
let celcius ='34.5 derajat celcius';
let angkaCelcius = parseFloat(celcius);
console.log(angkaCelcius);

//decode uri
const alamatWebsite = 'https://google.com?query=belajar html'
console.log(`encode uri ${decodeURI(alamatWebsite)}`);
const alamatWebsite2 = 'https://google.com?query=belajar%20html'
console.log(`decode uri ${decodeURI(alamatWebsite2)}`);



// string object
const nama = "River"
console.log(nama);
console.log(`panjang variable nama adalah ${nama.length}`);
console.log(`karakter ke dua adalah ${nama.charAt(1)}`);
console.log(`fungsing charAt dengan -1 menghasilkan ${nama.charAt(-1)}`);
console.log(`fungsing charAt dengan parameter 10 menghasilkan ${nama.charAt(10)}`);


let namaPanjang = `${nama} Huang`;
console.log(namaPanjang);
console.log(namaPanjang.toUpperCase());
console.log(namaPanjang.toLowerCase());

//contoh searching for substring
const kalimat = 'saya ingin jago koding supaya bisa diterima di perushaan Google';
const kataPencarian = 'jago koding'
// const kataDidapat = kalimat.indexOf(kataPencarian);
console.log(kalimat);

// if (kataDidapat >= 0){
//     console.log(`kata ${kataPencarian} ditemukan di index ${kataDidapat}`);
// } else {
//     console.log(`kata ${kataPencarian} tidak ditemukan`);
// } 
    
if (kalimat.includes(kataPencarian)) {
    console.log(`kata ${kataPencarian} ditemukan`);
    console.log(`kata ${kataPencarian} ditemukan `);
    } else {
         console.log(`kata ${kataPencarian} tidak ditemukan`);
    } 

// contoh special character usually prefix with backslash "\"
console.log('newline \n \n seond newline');

console.log('dia berkata "ya itu benar" yang lain i can\'t do it');

const num = 3.14;
console.log(num.toFixed(1));

//learn array
const namaSiswaImpactByte = ['sony', 'frederick', 'ozy'];
namaSiswaImpactByte.push('evan'); //nambah item di array terakhir
console.log(namaSiswaImpactByte);
namaSiswaImpactByte.pop();
console.log(namaSiswaImpactByte);
for (let index in namaSiswaImpactByte) {
   console.log(namaSiswaImpactByte[index]);
   
}

// learn array method
const namaSiswaUIB = ['agnes', 'bill', 'evan', 'julia']
const namaSiswaGlints = namaSiswaImpactByte.concat(namaSiswaUIB); //concat gabung Array
console.log(namaSiswaGlints);
console.log(namaSiswaImpactByte);


// // learn array sorting

console.log(namaSiswaGlints.sort());

const number = [ 3,6,1,0,8,11,9 ];
    console.log(number.sort());
    

//learn array join
console.log( namaSiswaGlints.join(''));

namaSiswaGlints.forEach(function ( item, index, array) {
    console.log(`nama siswa : ${item}`);
    
})
const namaSiswaDgnAsal = namaSiswaGlints.map((item, index) => {

    return {
        id :index + 1,
        name: item,
        asal: 'Batam',
    }
});
console.log((namaSiswaDgnAsal));
const newSiswa = {
    id: 10,
    name: 'Budi',
    asal: 'Medan'
}
namaSiswaDgnAsal.push(newSiswa)

console.log(namaSiswaDgnAsal);

//contoh array find
const ditemukan = namaSiswaDgnAsal.find((item, index, array) => {
    if (item.asal == "Batam")
        return true;
    return false;
});
console.log(ditemukan);

//property value shorthand

const name = 'Babe';
const lastName = 'Gokil';

// const person = {
//     name: name,
//     lastName: lastName
// }

const person = {
    name,
    lastName
}
console.log(person,name);
console.log(person,lastName);

// object assign

const bodyMeasure = {
    height: '170 cm',
    weight: '80 kg',
    kelas: 'pekerja'
}
const databaru = {
    tanggalLahir: '1 oktober'
}
const personWithMeasure = Object.assign({}, person, bodyMeasure, databaru);
console.log(personWithMeasure)
