
function Start() {
  console.log("Starting")
  var Name = document.getElementById("file").value;
  var Type = document.getElementById("type").value;
  
  var File = Name +"."+ Type ;
  console.log(File)
  
  window.location.href = "https://storage-spesana.vercel.app/s/"+Type+"/"+File;
}
