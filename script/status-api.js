var StatusAPI = "Error"; var Informasi = 'Selasa 11 Januari 2022 / 13:22 ( Status Dapat Diupdate Tetapi Terbatalkan Karena Pemadaman Listrik Didaerah "Jl, Nanggulan Mendut, Kalibawang, Dekso, Kulonprogo, Jogyakarta, Jawa Tengah" Selama 1 Jam 27 Menit 4 Detik [ Pada Pukul : 13:21:45 / 11 Januari 2022 / WIB ] Dan Dapat Diupdate Pukul 14:49:59 )';
document.getElementById("status-api").innerHTML = "<p style='color: #ff000a'>" + StatusAPI + "</p>"; document.getElementById("status-protokol").innerHTML = "<p style='color: #7aea3b'>Telah Ditetapkan</p>"; document.getElementById("status-murid").innerHTML = "<p style='color: #ff9d00'>Dibagi Menjadi 2 Shift ( Pagi Dan Siang ) 50%</p>";	 document.getElementById("terakhir-diupdate-api").innerHTML = "Terakhir Update : " + Informasi + "";
function GetStatusAPISpesana() {
  if (confirm("Apakah Kamu Ingin Cek Status API Kami Diconsole? ")) {
    console.log("Status API : \n\n- Status API : " + StatusAPI + "\n- Terakhir Update : " + Informasi + "")
  } else {
    console.error("Get Canceled Status API");
  }
  
}
/* ERR :#ff000a , Warn :#ff9d00 , Normal :#7aea3b*/