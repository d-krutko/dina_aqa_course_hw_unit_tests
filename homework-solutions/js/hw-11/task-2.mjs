class Employee {
  #salary
  constructor(firstName, lastName, profession, salary) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.profession = profession;
    this.salary = salary;
  }

  getFullName() { return `${this.firstName} ${this.lastName}` };

  get firstName() {
    return this._firstName;
  }
  set firstName(value) {
      if (typeof value !== 'string' || value.length < 2 || value.length > 50 || !/^[a-zA-Z]+$/.test(value) ) {
          throw new Error(`${value} is invalid input`)
      }
      return this._firstName = value
  }

  get lastName() {
    return this._lastName;
  }
  set lastName(value) {
    if (typeof value !== 'string' || value.length < 2 || value.length > 50 || !/^[a-zA-Z ]+$/.test(value)) throw new Error('Invalid firstname');
    this._lastName = value;
  }

  get profession() {
    return this._profession;
  }
  set profession(value) {
    if (!isNaN(value) || typeof value !== 'string' || !/^[a-zA-Z ]+$/.test(value)) throw new Error('Invalid profession');
    this._profession = value;
  }
  get salary() {
    return this.#salary;
  }
  set salary(value) {
    if (typeof value !== 'number' || isNaN(value) || value <= 0 || value >= 10000) throw new Error("Invalid salary");
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

  findEmployeeByName(firstName) {
      const getEmployee = this.#employees.find(el => el.firstName === firstName);
      if (!getEmployee) {
          throw new Error(`Invalid name`)
      }
      return getEmployee;
  }

  removeEmployee(firstName) {
    let indexOfRemovedEmployee = this.#getEmployeeIndex(firstName)
    if (indexOfRemovedEmployee == -1) {
      throw new Error("Employee does not exist");
    }

    this.#employees.splice(indexOfRemovedEmployee, 1);
  }

  #getEmployeeIndex(firstName) {
    const indx = this.#employees.findIndex(el => el.firstName === firstName)
    return indx;
  }

  getTotalSalary() {
    const totalSalary = this.#employees.reduce((acc, el) => acc += el.salary, 0)
    return totalSalary;
  }
}



const employee1 = new Employee('Dina', 'Krutko', 'QA', 2500);
const employee2 = new Employee('Alex', 'Vlll', 'Programmer', 3500);
const employee3 = new Employee('Darya', 'Biltok', 'Manager', 1500);
const wrongEmployee = { name: 'wrong' };

const company1 = new Company('SVAPS', +3758475485, 'Minsk');

company1.addEmployee(employee1);
company1.addEmployee(employee2);
company1.addEmployee(employee3); 
company1.removeEmployee('Alex');

console.log(company1.getTotalSalary());
console.log(company1.getEmployees());



export { Employee, Company };

