var locationHref = window.location.pathname;
console.log("Log : Success Access To " + locationHref );
function OpenNavBar() {
  document.getElementById("navbar-link").style.width = "250px";
  document.getElementById("CLSBar").style.display = "inline";
}
function CloseNavBar() {
  document.getElementById("navbar-link").style.width = "0";
  document.getElementById("CLSBar").style.display = "none";
}
function  SorryDisableBtn() {
 var TextERRPages = "Halaman In Tidak Tersedia Atau Sudah Dihapus, Atau Disable Sementara"
	document.getElementById("pop-up-error").style.bottom =  "10px";
document.getElementById("pop-up-error-content").innerHTML = TextERRPages ;
 console.error( TextERRPages );
}
function ShowTentangKami() {
 var ShowTentangKami = document.getElementById("TentangKami");
 if(ShowTentangKami.style.display === "none") {
								ShowTentangKami.style.display = "inline";
				}else {
								ShowTentangKami.style.display = "none";
 }
}
function ShowAPISpesana() {
 var ShowAPISpesana = document.getElementById("APISpesana");
 if(ShowAPISpesana.style.display === "none") {
								ShowAPISpesana.style.display = "inline";
				}else {
								ShowAPISpesana.style.display = "none";
 }
}
function ClearAllCookie() {
  var txt;
  if (confirm("Apakah kamu ingin membersihkan atau mengulang kembali cookie?\n")) {
    window.location.href = "";
    document.cookie.split(";").forEach(function(c) { document.cookie = c.replace(/^ +/, "").replace(/=.*/, "=;expires=" + new Date().toUTCString() + ";path=/"); });
    console.log("Log :Tunggu Sebentar"); console.warn("Warn : Package Reset All To Default");
  } else {
    console.log("Anda Mengbatalkan Penghapus Cookie");
  }
  
}
function GetInfo() {
	var URLFile = window.location.pathname;
	var Hosting = window.location.hostname;
	var License = "https://www.apache.org/licenses/LICENSE-2.0";
	var Runtime = "Unknown";
	var Publicer = "https://github.com/ernestoyoofi";
	var Database = "Json, MySQL, Ajax, Js";
	var Repository = " https://github.com/ernestoyoofi/spesana/";
	var HttpsAccess = "Yes, Database in can be used for sharing or called 'Public API'"
	console.log("Info :\n\n- Hosting Name : " + Hosting + "\n- Publiser : " + Publicer + "\n- File Location : " + URLFile + "\n- License : " + License + "\n- Runtime : " + Runtime + "\n- Database : " + Database + "\n- Name Repository : " + Repository +" \n- Https Request : " + HttpsAccess + "\n- API Status : Call Status Whit Code 'GetStatusAPISpesana()' \n"); console.warn("Information is only obtained in 'Console Logs' and when the API is running smoothly");
}
window.addEventListener("load", function () {
    console.log("Finished Loading & Rendering");
});
