//Объявление класса отделений
class Department{
  constructor(name){     //Конструктор
    this._name = name;   //название отделения (знак "_" в начале означает закрытое свойство)
    this._projects = [];          //проекты
    this._next = null;      //следующий элемент очереди отделений
  }
  get getName(){         //Геттер, возвращающий название отделения
    return this._name;
  }
  set setName(newName){   //Сеттер, изменяющий название отделения
    this._name = newName;
  }
  addProject(projectName, projectFromList, beforeAfter){      //Метод добавления проекта
    if (this._projects.length > 0){
      let indexOfProject = this.searchProject(projectFromList);
      if (indexOfProject !== null){
        if (beforeAfter == "перед"){
          for (let i = this._projects.length; i > indexOfProject; i--){
            this._projects[i] = this._projects[i - 1];
          }
          this._projects[indexOfProject] = new Project(projectName);
        }else{
          for (let i = this._projects.length; i > indexOfProject; i--){
            this._projects[i] = this._projects[i - 1];
          }
          this._projects[indexOfProject + 1] = new Project(projectName);
        }
      }else{
        return -1;
      }
    }else{
      this._projects.push(new Project(projectName));
    }
  }
  deleteProject(projectName){       //Метод удаления проекта
    let indexOfProject = this.searchProject(projectName);
    if (indexOfProject !== null){
      for (let i = indexOfProject; i < this._projects.length; i++){
        this._projects[i] = this._projects[i + 1];
      }
      this._projects.pop();
    }else{
      return -1;
    }
  }
  searchProject(projectName){  //Метод поиска проекта
    for (let el of this._projects){
      if (el.getName == projectName){
        return this._projects.indexOf(el);
      }
    }
    return null;
  }
  countFinance(){        //Метод подсчета общего объема финансирования по отделу
    let res = 0;
    for (let el of this._projects){
      if (el.getFinance){
        res += Number(el.getFinance);
      }
    }
    return res;
  }
  get getInfo(){        //Геттер получения всей информации
    let res = "";
    for (let el of this._projects){
      res += `\t${el.getInfo}\n`;
    }
    return res;
  }
  chooseProject(projectName){       //Метод выбора проекта, с которым будем работать
    for (let el of this._projects){
      if (el.getName == projectName){
        return el;
      }
    }
    return null;
  }
  get hasProjects(){
    return this._projects.length == 0 ? false : true;
  }
  get getProjects(){
    return this._projects;
  }
}
