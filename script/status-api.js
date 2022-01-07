var StatusAPI = "Aman, Tidak Ada Kesalahan"; var Informasi = "Terakhir Update Rabu 5 Jan 2020 / 16:08";
document.getElementById("status-api").innerHTML = "<p style='color: #7aea3b'>" + StatusAPI + "</p>"; document.getElementById("status-protokol").innerHTML = "<p style='color: #7aea3b'>Telah Ditetapkan</p>"; document.getElementById("status-murid").innerHTML = "<p style='color: #7aea3b'>32, Siswa Dan Siswi Masuk Semua</p>";	 document.getElementById("terakhir-diupdate-api").innerHTML = "Terakhir Update : " + Informasi + "";
function GetStatusAPISpesana() {
  if (confirm("Apakah Kamu Ingin Cek Status API Kami Diconsole? ")) {
    console.log("Status API : \n\n- Status API : " + StatusAPI + "\n- Terakhir Update : " + Informasi + "")
  } else {
    console.error("Get Canceled Status API")
  }
  
}