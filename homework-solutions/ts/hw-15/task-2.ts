const obj3 = {
    name: 'Dina',
    salary: 5000,
    isManager: true
}

function getKeyByValue<T extends object, V>(obj3: T, value: V): keyof T | undefined {
    for (const key in obj3) {
        if (obj3[key] === value) {
            return key
        }
    }
    return undefined
}

const example1 = console.log(getKeyByValue(obj3, 'Dina'))
const example2 = console.log(getKeyByValue(obj3, 'Din'))