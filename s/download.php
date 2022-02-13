<!DOCTYPE html>
<html lang="in">
   <head>
      <meta charset="UTF-8">
      <title>Dowload Files</title>
      <link rel="stylesheet" href="style.css">
   </head>
   <body>
      <div>
         <div>
            <input type="text" id="file">
            <select id="type">
              <option value="pptx">Power Point ( pptx )</option>
              <option value="docx">Word ( docx )</option>
              <option value="png">Image ( png )</option>
            </select>
            <button onclick="Start()">Starting Download</button>
         </div>
         <div id="tamp-down">
         </div>
      </div>
      <script src="app.js"></script>
   </body>
</html>
