window.addEventListener("load", function () {
    const content = document.getElementById("for-load");
    const disContent = document.getElementById("load-for");
    const img = document.getElementById("for-load-img");
    content.style.display = "inline";
    img.style.display = "inline";
    disContent.style.display ="none";
});
function SendEmail() {
				document.getElementById("display-email").style.marginTop = "0px";
}
function CloseSendEmail() {
				document.getElementById("display-email").style.marginTop = "-500px";
}
function SendMassage() {
				var User = "akuyetta2@gmail.com"
				var YourEmail = document.getElementById("your-email").value;
				var Subject = document.getElementById("subject-text").value;
				var Text = document.getElementById("text-area").value;
				
				window.location.href = "mailto:" + User + "?from=" + YourEmail + "&subject=" + Subject + "body=" + Text ;
}