var ulang = true;

while (ulang){
  alert('Selamat Datang! Di Program Kalkulator Mini yang sangat sederhana');

  var angka1 = prompt('Masukan Angka Pertama :')
  var angka2 = prompt('Masukan Angka Kedua :')

  var tambah = Number(angka1) + Number(angka2);
  var kurang = Number(angka1) - Number(angka2);
  var kali = Number(angka1) * Number(angka2);
  var bagi = Number(angka1) / Number(angka2);

  var operasi = prompt('Masukan nomor dari Jenis Operasi dibawah ini\n' + '1.Tambah\n' + '2.Kurang\n' + '3.Kali\n' + '4.Bagi'); 

  if(operasi === '1'){
    alert('Hasil Penjumlahan dari ' + angka1 + ' + ' + angka2 + ' adalah ' + tambah);
    alert('Terima Kasih sudah menjalankan program ini!!!');
  }else if (operasi === '2'){
    alert('Hasil Pengurangan dari ' + angka1 + ' - ' + angka2 + ' adalah ' + kurang);
    alert('Terima Kasih sudah menjalankan program ini!!!');
  }else if (operasi === '3'){
    alert('Hasil Perkalian dari ' + angka1 + ' x ' + angka2 + ' adalah ' + kali);
    alert('Terima Kasih sudah menjalankan program ini!!!');
  }else if (operasi === '4'){
    alert('Hasil Pembagian dari ' + angka1 + ' : ' + angka2 + ' adalah ' + bagi);
    alert('Terima Kasih sudah menjalankan program ini!!!');
  }else {
    alert('Maaf Program tidak tersedia, Silahkan masukan nomor perintah dari Jenis Operasi yang tersedia!!!')
  }
  ulang = confirm('Apakah ingin Menghitung lagi?');
}