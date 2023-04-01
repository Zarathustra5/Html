//Объявление класса IT-предприятий
class Company{
  constructor(name){     //Конструктор
    this._name = name;   //название предприятия (знак "_" в начале означает закрытое свойство)
    this._pCaption = new Department();    //ссылка на заголовок очереди отделений
    this._pLast = null;    //ссылка на последний элемент очереди отделений 
  }
  get getName(){         //Геттер, возвращающий название предприятия
    return this._name;
  }
  set setName(newName){   //Сеттер, изменяющий название предприятия
    this._name = newName;
  }
  set addDepartment(departmentName){       //Метод добавления отделения
    if (this._pCaption._next != null){
      this._pLast._next = new Department(departmentName);
      this._pLast = this._pLast._next;
    }else{
      this._pCaption._next = new Department(departmentName);
      this._pLast = this._pCaption._next;
    }
  }
  deleteDepartment(){       //Метод удаления отделения
    if (this._pCaption._next != null){
      this._pCaption._next = this._pCaption._next._next;
      return 1;
    }else{
      return 0;
    }
  }
  countFinance(){        //Метод подсчета общего объема финансирования
    let pTemp = this._pCaption._next;
    let res = 0
    while (pTemp != null){
      res += pTemp.countFinance();
      pTemp = pTemp._next;
    }
    return res;
  }
  get getInfo(){        //Геттер получения всей информации
    let res = "";
    let pTemp = this._pCaption._next;
    while (pTemp != null){
      res += `Отдел: ${pTemp.getName}\n${pTemp.getInfo}\n`;
      pTemp = pTemp._next;
    }
    return res;
  }
  chooseDepartment(departmentName){       //Метод выбора отделения, с которым будем работать
    let pTemp = this._pCaption._next;
    while (pTemp != null){
      if (pTemp.getName == departmentName){
        return pTemp;
      }
      pTemp = pTemp._next;
    }
    return null;
  }
  downloadCompany(obj){
    let pTemp = obj._pCaption._next;
    if (pTemp != null){
      this._pCaption._next = new Department(pTemp._name);
      this._pLast = this._pCaption._next;
      for (let el of pTemp._projects){
        this._pLast._projects.push(new Project(el._name));
        this._pLast._projects[this._pLast._projects.length - 1].setFinance = el._finance;
      }
    }
    pTemp = obj._pCaption._next._next;
    while (pTemp != null){
      this._pLast._next = new Department(pTemp._name);
      this._pLast = this._pLast._next;
      for (let el of pTemp._projects){
        this._pLast._projects.push(new Project(el._name));
        this._pLast._projects[this._pLast._projects.length - 1].setFinance = el._finance;
      }
      pTemp = pTemp._next;
    }
  }
  get getCaption(){
    return this._pCaption;
  }
}
