const tttt = document.getElementById("fileInput");
const tt = document.getElementById("output");

tttt.addEventListener("change", function (event) {
  const file = event.target.files[0];
  if (file) {
    output.src = URL.createObjectURL(file);
  }
});


