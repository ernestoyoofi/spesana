var StatusAPI = "Maintenance"; var Informasi = "Terakhir Update Jumat 8 Januari 2022 14:36";
document.getElementById("status-api").innerHTML = "<p style='color: #ff9d00'>" + StatusAPI + "</p>"; document.getElementById("status-protokol").innerHTML = "<p style='color: #7aea3b'>Telah Ditetapkan</p>"; document.getElementById("status-murid").innerHTML = "<p style='color: #ff9d00'>Dibagi Menjadi 2 Sesi ( Pagi Dan Siang ) 50%</p>";	 document.getElementById("terakhir-diupdate-api").innerHTML = "Terakhir Update : " + Informasi + "";
function GetStatusAPISpesana() {
  if (confirm("Apakah Kamu Ingin Cek Status API Kami Diconsole? ")) {
    console.log("Status API : \n\n- Status API : " + StatusAPI + "\n- Terakhir Update : " + Informasi + "")
  } else {
    console.error("Get Canceled Status API")
  }
  
}
/* ERR :#ff000a , Warn :#ff9d00 , Normal :#7aea3b*/