$.getJSON('https://spesana-nanggulan.vercel.app/data/data-comment-G26u7la0p.json', function(json) {
    $.each(json, function(i, json) {
        $("#result-text-comments").append("<div style='overflow: hidden;'><b>"+ json.name +"</b><p>"+ json.text +"</p><p class='time'>" + json.date + "</p></div>");
    });
    
});

function PostComment() {
   const months = ["Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember"];
   const d = new Date();
   let month = months[d.getMonth()];
   const Times = ["Minggu","Senin", "Selasa"," Rabu","Kamis","Jum'at"];
   const clock = new getDay();
   let times = times[a.getDay()];
   const a = new Day();
   var year = getFullYear();
   var Timed = new getMinutes();
   
   
   let NamePost = document.getElementById("name");
       TextPost = document.getElementById("comments");
       DatePost = times + ", " + clock + "" + mounth + "" + year + ", " + Timed ;
       Comments = '{"name":"' + NamePost + '", "text":"' + TextPost + '", "date":"' + DatePost + '"},';
  
  return false;
  SendInfo.push(Comments);
}