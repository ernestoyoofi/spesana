// const test = require("./db")
// console.log(test.getJadwal(new data()))

const db = require("./db.js")
function Minsearch(searchInput, searchResults) {
    var input, filter, ul, li, a, i, p, txtValue;
    input = document.getElementById(searchInput);
    filter = input.value.toUpperCase();
    ul = document.getElementById(searchResults);
    li = ul.getElementsByTagName("li");
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];
        txtValue = a.textContent || a.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "inline-block";
        } else {
            li[i].style.display = "none";
        }
    }
}