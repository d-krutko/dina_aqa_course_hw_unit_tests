// Напишите асинхронную функцию createTodo, принимающая на вход тело создаваемой тудушки.
//    Внутри функции шлите пост запрос на "https://jsonplaceholder.typicode.com/todos" используя fetch.
//    После получения респонса проверьте что статус === 201. Если статус не 201 - пробросить ошибку
//    Преобразуйте респонс из JSON в объект
//    Проверьте, что айди в респонсе === 201
//    Функция должна возвращать полученный объект из респонса
//    Обрабатывайте ошибки с помощью try/cath, в конце выведите в консоль текст, что работа функции завершена

async function createTodo(todo) {
try {
        const response = await fetch("https://jsonplaceholder.typicode.com/todos", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(todo),
        });

if (response.status !== 201) {
            throw new Error(`Ошибка: статус ${response.status}`);
        }

        const data = await response.json();

        if (data.id !== 201) {
            throw new Error(`Ошибка: ID в ответе не равен 201, получен ${data.id}`);
        }

        return data;
    } catch (error) {
        console.error("Ошибка:", error.message);
    } finally {
        console.log("Работа функции завершена.");
    }
}