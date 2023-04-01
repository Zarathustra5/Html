//Объявление класса проектов
class Project{
  constructor(name){     //Конструктор
    this._name = name;   //название проекта (знак "_" в начале означает закрытое свойство
    this._finance = 0;          //объем финансирования
  }
  get getName(){         //Геттер, возвращающий название проекта
    return this._name;
  }
  set setName(newName){   //Сеттер, изменяющий название проекта
    this._name = newName;
  }
  get getFinance(){         //Геттер, возвращающий объем финансирования
    return this._finance;
  }
  set setFinance(newFinance){         //Сеттер, изменяющий объем финансирования
    this._finance = newFinance;
  }
  get getInfo(){   //Геттер, возвращающий полную информацию
    return `Проект: ${this._name}\n\tОбъем финансирования: ${this._finance}`;
  }
}
