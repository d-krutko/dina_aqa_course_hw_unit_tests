// Напишите дженерик функцию getAvgSalary принимающая через запятую любой набор 
// объектов у которых есть как минимум поле salary: number, и возвращается среднее арифметическое 
// зарплат всех переданных объектов

interface IEmployee {
    salary: number
}

function getAvgSalary<T extends IEmployee[]>(...employees: T) {
    const totalSalary = employees.reduce((sum, employee) => sum + employee.salary, 0);
    return totalSalary / employees.length;
}


const averageSalary = getAvgSalary({ name: "Dina", salary: 70000 }, { name: "Alex", salary: 80000 }, { name: "Darya", salary: 60000 });
console.log(`Средняя зарплата: ${averageSalary}`); 
