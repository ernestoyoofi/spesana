function mySearch() {
    var input, filter, ul, li, a, i, txtValue;
    input = document.getElementById("InputSearch");
    filter = input.value.toUpperCase();
    ul = document.getElementById("myUL");
    li = ul.getElementsByTagName("li");
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];
        txtValue = a.textContent || a.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
            document.getElementById("myUL").style.display = "inline";
            document.getElementById("searching-results").display = "none";
            document.getElementById("searching-results").innerHTML = "Halaman Ditemukan";
        } else {
            li[i].style.display = "none";
            document.getElementById("searching-results").innerHTML = "Halaman Tidak Tersedia";
            document.getElementById("searching-results").style.display = "inline";
        }
    }
}
function UlangiPencarian() {
				document.getElementById("InputSearch").value = "";
				document.getElementById("searching-results").innerHTML = "Restart";
				document.getElementById("myUL").style.display = "none";
				window.location.href = "";
				console.warn("Restarting");
}