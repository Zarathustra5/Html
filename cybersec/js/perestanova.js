const perestanovaForm = document.getElementById("perestanova-form");

function renderTableHead(order2, isSorted = true) {
  let res = `<thead><tr><td></td>`;
  for ( let i = 0; i < order2.length; i++ ) {
    let el = isSorted ? i + 1 : order2[i];
    res += `<td>${el}</td>`;
  }
  res +=  `</tr></thead>`;
  return res;
}

function renderSourceTable(sourceText, order1, order2) {
  let modOrder1, modOrder2;
  let count = 0;
  let res = renderTableHead(order2, false);
  for ( let i = 0; i < order1.length; i++ ) {
    res += `<tr><td>${order1[i]}</td>`;
    for ( let j = 0; j < order2.length; j++ ) {
      res += count < sourceText.length ? `<td>${sourceText[count]}</td>` : `<td></td>`;
      count++;
    }
    res += `</tr>`;
  }
  const sourceTable = document.querySelector("#source-table");
  sourceTable.innerHTML = res;
}

function renderModTable(sourceText, order1, order2) {
  let modOrder2 = [];
  let count = 0;
  let res = renderTableHead(order2);
  let isSorted = false;
  for ( let i = 0; i < order1.length; i++ ) {
    for ( let j = 0; j < order2.length; j++ ) {
      let coef = order2.length * i;
      let num = Number(order2[j]);
      let el = sourceText[count];
      modOrder2[num - 1 + coef] = el;
      count++;
    }
  }
  count = 0;
  for ( let i = 0; i < order1.length; i++ ) {
    res += `<tr><td>${order1[i]}</td>`;
    for ( let j = 0; j < order2.length; j++ ) {
      let el = modOrder2[count];
      res += el ? `<td>${el}</td>` : `<td></td>`;
      count++;
    }
    res += `</tr>`;
  }
  const modTable = document.querySelector("#mod-table");
  modTable.innerHTML = res;
  return modOrder2;
}

function renderResTable(sourceText, order1, order2, modOrder2) {
  let modOrder1 = [];
  let count = 0;
  let res = renderTableHead(order2);
  let isSorted = false;
  for ( let i = 0; i < order1.length; i++ ) {
    for ( let j = 0; j < order2.length; j++ ) {
      let coef = order1.length * (order1[i] - 1);
      let num = Number(order1[j]);
      let el = sourceText[count];
      modOrder1[num - 1 + coef] = el;
      count++;
    }
  }
  count = 0;
  resTotal = "";
  for ( let i = 0; i < order1.length; i++ ) {
    res += `<tr><td>${i+1}</td>`;
    for ( let j = 0; j < order2.length; j++ ) {
      let el = modOrder1[count];
      resTotal += el ? el : " ";
      res += el ? `<td>${el}</td>` : `<td></td>`;
      count++;
    }
    res += `</tr>`;
  }
  const modTable = document.querySelector("#res-table");
  modTable.innerHTML = res;
  const resTotalSelector = document.querySelector("#res-total");
  resTotalSelector.innerHTML = resTotal;
  const resTotalField = document.querySelector("#res-total-field");
  resTotalField.value = resTotal;
}

perestanovaForm.onsubmit = e => {
  e.preventDefault();
  const resultSelector = document.querySelector(".result-container");
  resultSelector.classList.add("result-container_active");
  const formData = new FormData(e.target);
  const sourceText = formData.get("text");
  const order1 = formData.get("order1").split("");
  const order2 = formData.get("order2").split("");
  renderSourceTable(sourceText, order1, order2);
  const modOrder2 = renderModTable(sourceText, order1, order2);
  renderResTable(sourceText, order1, order2, modOrder2);
}

// Start file download.
document.getElementById("export-btn").addEventListener("click", function(){
    // Generate download of hello.txt file with some content
    let fields = document.querySelectorAll(".export-field");
    let text = "";
    fields.forEach(field => {
      text += `${field.value}\n`;
    })
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
    for ( let i = 0; i < fields.length - 1; i++ ) {
      fields[i].value = arr[i];
    }
    renderSourceTable(arr[0], arr[1], arr[2]);
    const modOrder2 = renderModTable(arr[0], arr[1], arr[2]);
    renderResTable(arr[0], arr[1], arr[2], modOrder2);
  }
}
