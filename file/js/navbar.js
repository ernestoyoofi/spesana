function NavBar() {
   let Navbar = document.getElementById("nav-link");
   if(Navbar.style.height === "0px") {
   				Navbar.style.height = "290px";
   }else {
   				Navbar.style.height = "0px";
   }
}
function embedInputText() {
  let InputKeyUp = document.getElementById("input_string").value;
      Text = document.getElementById("text_search_option");
      Txt = '<i class="fa fa-search"></i>Cari Dan Temukan Kata "'+ InputKeyUp +'"';
                     
     if(InputKeyUp ==="") {
         Text.innerHTML = '<i class="fa fa-search"></i>Search';
    }else if(InputKeyUp === "//") {
         Text.innerHTML = '<i class="fas fa-cog"></i>Settings '+ InputKeyUp.replace('//','')+'';
    }else{
         Text.innerHTML = Txt;
    }
}
