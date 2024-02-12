function generatePassword(length) {
   var result           = '';
   var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
   var charactersLength = characters.length;
   for ( var i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
   }
   return result;
}

const generatorForm = document.getElementById("generator-form");

generatorForm.onsubmit = e => {
  e.preventDefault();
  const resultSelector = document.querySelector(".result-container");
  resultSelector.classList.add("result-container_active");
  const formData = new FormData(e.target);
  const length = formData.get("length");
  for ( let i = 1; i < 11; i++ ) {
    let pas = generatePassword(length);
    let y = 10 * i - 3;
    passwordApperAnimation(pas, y);
  }
}

// Start file download.
document.getElementById("export-btn").addEventListener("click", function(){
    // Generate download of hello.txt file with some content
    let passwords = document.querySelectorAll("#result text");
    let text = "";
    passwords.forEach(pas => {
      text += `${pas.textContent}\n`;
    })
    const filename = "not-passwords.txt";

    download(filename, text);
}, false);

const importBtn = document.querySelector("input#import-btn");
importBtn.onchange = e => {
  const file = e.target.files[0];
  const reader = new FileReader();
  if (file) reader.readAsText(file);
  reader.onload = () => {
    const resultSelector = document.querySelector(".result-container");
    resultSelector.classList.add("result-container_active");
    const str = reader.result;
    const pasArr = str.split("\n");
    for ( var i = 1; i < 11; i++ ) {
      const pas = pasArr[i - 1];
      const y = 10 * i - 3;
      passwordApperAnimation(pas, y);
    }
  }
}
