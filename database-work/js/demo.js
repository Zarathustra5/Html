//-----Глобальные переменные------
let dialogueInput = document.querySelector(".dialogue_input");
let dialogueForm = document.querySelector(".dialogue__form");
  let dialogueInputNumber = document.querySelector(".dialogue_input-number");
  let dialogueFormNumber = document.querySelector(".dialogue__form-number");
let dialogueOutput = document.querySelector(".dialogue_output");

let answer;
let currentDepartment = null;
let currentProject = null;

let tableCompany = document.querySelector(".table_company");
let tableDepartment = document.querySelector(".table_department");
let tableCompanyTitle = document.querySelector(".table_company th span");
let tableDepartmentTitle = document.querySelector(".table_department th span");

//Кнопка открыть панель
let openBtn = document.querySelector("button.open-panel");
openBtn.onclick = () => {
  let company = document.querySelector(".window.company");
  company.classList.add("_active");
}

//Кнопка сохранить в файл
let saveBtn = document.querySelector("button.save");
saveBtn.onclick = () => {
  input("Введите название нового файла");
  submit(answer => {
    let obj = JSON.stringify(itCompany);
    localStorage.setItem(answer, obj);
    console.log("save done");
  });
}

//Кнопка выгрузки из файла
let downloadBtn = document.querySelector("button.download");
downloadBtn.onclick = () => {
  input("Введите название файла");
  submit(answer => {
    let obj = localStorage.getItem(answer);
    obj = JSON.parse(obj);
    itCompany = new Company(obj._name);
    itCompany.downloadCompany(obj);
    console.log("download done");
    console.dir(itCompany);
    tableCompanyTitle.textContent = itCompany.getName;
    tableCompany.lastElementChild.remove();
    tableCompany.insertAdjacentHTML("beforeend", `<tbody></tbody>`);
    let pTemp = itCompany.getCaption._next;
    while (pTemp != null){
      tableCompany.lastElementChild.insertAdjacentHTML("beforeend", `<tr class="${pTemp.getName}" title="Кликните для просмотра проектов"><td>${pTemp.getName}</td><td>${pTemp.getProjects.length}</td><td>${pTemp.countFinance()}$</td></tr>`);
      pTemp = pTemp._next;
    }
  });
}

//Кнопка закрыть
let closeBtn = document.querySelectorAll("hr.close");
closeBtn.forEach(el => {
  el.onclick = () => {
    let closedWindow = el.parentElement.parentElement.parentElement;
    closedWindow.classList.remove("_active");
    if (closedWindow.classList.contains("plan")){
      closedWindow.querySelector("select").remove();
    }
  }
});

//Кнопка раскрыть на полный экран
let fullscreenBtn = document.querySelectorAll("hr.fullscreen");
fullscreenBtn.forEach(el => {
  el.onclick = () => {
    el.parentElement.parentElement.parentElement.classList.toggle("_fullscreen");
  }
});

//Ассинхронность выбора элемента
function choose(callback){
  let projects = document.querySelectorAll(".table_department tbody tr");
  projects.forEach(el => {
    el.onclick = () => callback(el); 
  });
}

//Асинхронность ввода текста
function submit(callback){
  dialogueForm.onsubmit = () => callback(answer); 
}

//Данные формы ввода текста
dialogueForm.addEventListener("submit", e => {
  e.preventDefault();     
  let formData = new FormData(dialogueForm);
  if (formData.get("answer") != ""){
    dialogueInput.classList.remove("_active");
    answer = formData.get("answer");
    dialogueForm.querySelector(".input").value = "";
  }
});

//Асинхронность для ввода цифр
function submitNumber(callback){
  dialogueFormNumber.onsubmit = () => callback(answer); 
}

//Данные формы ввода цифр
dialogueFormNumber.addEventListener("submit", e => {
  e.preventDefault();     
  let formData = new FormData(dialogueFormNumber);
  if (formData.get("answer") != ""){
    dialogueInputNumber.classList.remove("_active");
    answer = formData.get("answer");
    dialogueFormNumber.querySelector(".input").value = "";
  }
});

//Функция ввода текста
function input(text){
  dialogueInput.querySelector(".label").textContent = text;
  dialogueInput.classList.add("_active");
}
//Функция ввода цифр
function inputNumber(text){
  dialogueInputNumber.querySelector(".label").textContent = text;
  dialogueInputNumber.classList.add("_active");
}
//Функция вывода
function output(text){
  dialogueOutput.classList.add("_active");
  dialogueOutput.lastElementChild.lastElementChild.textContent = text;
}

//Создание объекта предприятия
let itCompany;
submit(answer => {
  itCompany = new Company(answer)
  tableCompanyTitle.textContent = answer;
});

//--------------Панель управления предприятием------------------------------------

//1.Изменить название предприятия
function companySetName() {
  input("Введите новое название предприятия: ");
  submit(answer => {
    itCompany.setName = answer
    tableCompanyTitle.textContent = answer;
  });
}

//2.Добавить отдел
function addDepartment() {
  input("Введите название отдела");
  submit(answer => {
    itCompany.addDepartment = answer;
    tableCompany.lastElementChild.insertAdjacentHTML("beforeend", `<tr class="${answer}" title="Кликните для просмотра проектов"><td>${answer}</td><td>0</td><td>0$</td></tr>`);
  });
}

//3.Удалить отдел
function deleteDepartment() {
  if (itCompany.deleteDepartment()){
    tableCompany.lastElementChild.firstElementChild.remove();
  }else{
    output("Отделы не найдены");
  }
}

//4.Подсчет объема финансирования предприятия
function countFinance() {
  output(itCompany.countFinance() + "$");
}

//5.Выбрать отдел
function chooseDepartment() {
  input("Введите название отдела: ");
  submit(answer => {
    let searchResult = itCompany.chooseDepartment(answer); 
    if (searchResult){
      document.querySelector(".department").classList.add("_active");
      currentDepartment = searchResult;
      tableDepartmentTitle.textContent = answer;
      tableDepartment.lastElementChild.remove();
      tableDepartment.insertAdjacentHTML("beforeend", `<tbody></tbody>`);
      for (let el of currentDepartment.getProjects){
        tableDepartment.lastElementChild.insertAdjacentHTML("beforeend", `<tr class="${el.getName}" title="Кликните для просмотра проектов"><td>${el.getName}</td><td>${el.getFinance}$</td></tr>`);
      }
    }else{
      output("Отдел не найден");
    }
  });
}

//--------------Панель управления отделом------------------------------------

//1.Изменить название отдела
function departmentSetName() {
  input("Введите новое название отдела: ");
  submit(answer => {
    let department = tableCompany.querySelector(`.${currentDepartment.getName}`);
    department.firstElementChild.textContent = answer;
    department.classList.add(`${answer}`);
    department.classList.remove(`${currentDepartment.getName}`);
    currentDepartment.setName = answer;
    tableDepartmentTitle.textContent = answer;
  });
}

//2.Добавить проект
function addProject() {
  let beforeAfter;
  let projectFromList;
  if (currentDepartment.hasProjects){
    input("перед/после: ");
    submit(answer => {
      beforeAfter = answer;
      output("Кликните по элементу из таблицы");
      choose(answer => {
        dialogueOutput.classList.remove("_active");
        projectFromList = answer.className;
        input("Введите название проекта: ");
        submit(answer => {
          let result = currentDepartment.addProject(answer, projectFromList, beforeAfter); 
          if (result == -1){
            output("Проект не найден");
          }else{
            let projectAmount = Number(tableCompany.querySelector(`.${currentDepartment.getName}`).firstElementChild.nextElementSibling.textContent);
            tableCompany.querySelector(`.${currentDepartment.getName}`).firstElementChild.nextElementSibling.textContent = ++projectAmount;
            if (beforeAfter == "перед"){
              tableDepartment.querySelector(`.${projectFromList}`).insertAdjacentHTML("beforebegin", `<tr class="${answer}" title="Кликните для просмотра проектов"><td>${answer}</td><td>0$</td></tr>`);
            }else{
              tableDepartment.querySelector(`.${projectFromList}`).insertAdjacentHTML("afterend", `<tr class="${answer}" title="Кликните для просмотра проектов"><td>${answer}</td><td>0$</td></tr>`);
            }
          }
        });
      });
    });
  }else{
    input("Введите название проекта: ");
    submit(answer => {
      let result = currentDepartment.addProject(answer); 
      tableDepartment.lastElementChild.insertAdjacentHTML("beforeend", `<tr class="${answer}" title="Кликните для просмотра проектов"><td>${answer}</td><td>0$</td></tr>`);
      let projectAmount = Number(tableCompany.querySelector(`.${currentDepartment.getName}`).firstElementChild.nextElementSibling.textContent);
      tableCompany.querySelector(`.${currentDepartment.getName}`).firstElementChild.nextElementSibling.textContent = ++projectAmount;
    });
  }
}

//3.Удалить проект
function deleteProject() {
  if (currentDepartment.hasProjects){
    input("Введите название проекта: ");
    submit(answer => {
      let result = currentDepartment.deleteProject(answer); 
      if (result == -1){
        output("Проект не найден");
      }else{
        let projectAmount = Number(tableCompany.querySelector(`.${currentDepartment.getName}`).firstElementChild.nextElementSibling.textContent);
        tableCompany.querySelector(`.${currentDepartment.getName}`).firstElementChild.nextElementSibling.textContent = --projectAmount;
        tableCompany.querySelector(`.${currentDepartment.getName}`).lastElementChild.textContent = currentDepartment.countFinance() + "$";
        tableDepartment.querySelector(`.${answer}`).remove();
      }
    });
  }else{
    output("Проектов нет");
  }
}

//4.Выбрать проект
function chooseProject() {
  input("Введите название проекта: ");
  submit(answer => {
    let searchResult = currentDepartment.chooseProject(answer); 
    if (searchResult){
      document.querySelector(".project").classList.add("_active");
      currentProject = searchResult;
    }else{
      output("Проект не найден");
    }
  });
}

//--------------Панель управления проектом------------------------------------

//1.Изменить название проекта
function projectSetName() {
  input("Введите новое название проекта: ");
  submit(answer => {
    let project = tableDepartment.querySelector(`.${currentProject.getName}`);
    project.firstElementChild.textContent = answer;
    project.classList.add(`${answer}`);
    project.classList.remove(`${currentProject.getName}`);
    currentProject.setName = answer;
  });
}

//2.Изменение объема финансов
function setFinance() {
  inputNumber("Введите новое название проекта: ");
  submitNumber(answer => {
    tableDepartment.querySelector(`.${currentProject.getName}`).lastElementChild.textContent = answer + "$";
    currentProject.setFinance = answer;
    tableCompany.querySelector(`.${currentDepartment.getName}`).lastElementChild.textContent = currentDepartment.countFinance() + "$";
  });
}
