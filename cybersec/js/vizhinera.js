const vizhineraForm = document.getElementById("vizhinera-form");

function generateCipher(sourceText, textKey) {
  sourceText = sourceText.toLowerCase();
  textKey = textKey.toLowerCase();
  //const alphabet = "абвгдеёжзийклмнопрстуфхцчшщъыьэюя"
  const alphabet = 'abcdefghijklmnopqrstuvwxyz';
  let res = "";
  for (let i = 0; i < sourceText.length; i++) {
    let index = alphabet.indexOf(sourceText[i]);
    let cipheredLetter;
    if (index == -1) {
      cipheredLetter = " ";
    } else {
      let keyIndex = alphabet.indexOf(textKey[i % textKey.length]);
      let finalIndex = (index+keyIndex) % alphabet.length;
      cipheredLetter = alphabet[finalIndex];
    }
    res += cipheredLetter;
  }
  passwordApperAnimation(res, 7);
}

vizhineraForm.onsubmit = e => {
  e.preventDefault();
  const resultSelector = document.querySelector(".result-container");
  resultSelector.classList.add("result-container_active");
  const formData = new FormData(e.target);
  const sourceText = formData.get("text");
  const textKey = formData.get("key");
  generateCipher(sourceText, textKey);
}

// Start file download.
document.getElementById("export-btn").addEventListener("click", function(){
    // Generate download of hello.txt file with some content
    const res = document.querySelector("#result text");
    let fields = document.querySelectorAll(".export-field");
    let text = "";
    fields.forEach(field => {
      text += `${field.value}\n`;
    })
    text += res.textContent;
    const filename = "not-cipher.txt";

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
    const arr = str.split("\n");
    let fields = document.querySelectorAll(".export-field");
    for ( let i = 0; i < fields.length; i++ ) {
      fields[i].value = arr[i];
    }
    passwordApperAnimation(arr[2], 7);
  }
}
