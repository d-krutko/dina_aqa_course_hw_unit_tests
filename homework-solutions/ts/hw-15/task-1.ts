interface IEmployee {
    name: string;
    salary: number;
    isManager: boolean;
}

const QA: IEmployee = {
    name: 'Dina',
    salary: 5000,
    isManager: true
}


type EmployeeKeys = keyof IEmployee;
type QaKeys = keyof typeof QA;
type UserType = typeof QA;

// 9. Создайте объект с помощью Record, в ключах которого будут строки, а в значениях - 
// ключи объекта QA (Используйте Record, keyof, typeof)

type notRequiredFields = {
    name?: string;
    salary?: number;
    isManager?: boolean
}

type NameandSalary = Pick<IEmployee, 'name' | 'salary'>;
type OmitManager = Omit<IEmployee, 'isManager'>;
type ReadOnlyFields = {
    readonly name: string;
    readonly salary: number;
    readonly isManager: boolean;
}


const obj : Record<string, QaKeys> = {
    first: 'name',
    second: 'salary',
    third: 'isManager',
}


