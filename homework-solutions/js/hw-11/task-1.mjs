class Employee {
  #salary
  constructor(firstName, lastName, profession, salary) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.profession = profession;
    this.salary = salary;
  }

  getFullName() { return `${this.firstName} ${this.lastName}`};

  get firstName() {
    return this._firstName;
  }
  set firstName(value) {
    if (typeof value !== "string" || value.length <= 2) throw new Error("Invalid firstname");
    this._firstName = value;
  }

  get lastName() {
    return this._lastName;
  }
  set lastName(value) {
    if (typeof value !== "string" || value.length <= 2) throw new Error("Invalid lastname");
    this._lastName = value;
  }

  get profession() {
    return this._profession;
  }
  set profession(value) {
    if (typeof value !== "string") throw new Error("Invalid profession");
    this._profession = value;
  }
  get salary() {
    return this.#salary;
  }
  set salary(value) {
    if (typeof value !== "number" || value <= 0) throw new Error("Invalid salary");
    this.#salary = value;
  }

}


class Company {
  #employees
  constructor(title, phone, address, employees = []) {
    this._title = title;
    this._phone = phone;
    this._address = address;
    this.#employees = employees;
  }

  get title() {
    return this._title;
  }

  get phone() {
    return this._phone;
  }

  get address() {
    return this._address;
  }

  addEmployee(employee){
    if(employee instanceof Employee){
      this.#employees.push(employee)
    } else{
      throw new Error("Invalid employee");
    } 
  }
  getEmployees(){
    return this.#employees;
  }

  getInfo() {
     return `Компания: ${this.title}\nАдрес: ${this.address}\nКоличество сотрудников: ${this.#employees.length}` 
  }

}
const employee1 = new Employee('Dina', 'Krutko', 'QA', 2500);
const employee2 = new Employee('Alex', 'Vlll', 'Programmer', 3500);
const employee3 = new Employee('Darya', 'Biltok', 'Manager', 1500);
const wrongEmployee = {name: 'wrong'};

const company1 = new Company('SVAPS', +3758475485, 'Minsk');

company1.addEmployee(employee1);
company1.addEmployee(employee2);
//company1.addEmployee(wrongEmployee);
console.log(company1.getEmployees());
console.log(company1.getInfo());


export { Employee, Company };
