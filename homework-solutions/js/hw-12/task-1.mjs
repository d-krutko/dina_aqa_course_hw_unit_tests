
function delayTwoSeconds(callback){
    setTimeout(callback,2000);
}

delayTwoSeconds (() => {
    console.log('Я выполнилась спустя 2 секунды');
});

const promise1 = new Promise((resolve, reject) => {
    resolve('Promise resolved');
});

promise1.then((message) => {
    console.log(message);
});

const promise2 = new Promise((resolve, reject) => {
 reject('Promise failed');
});

promise2.catch((message) => {
    console.log(message)
});

function promiseNumber(value) {
    return new Promise((resolve) => {
    resolve(value)
});
};

promiseNumber(3).then((result) => {
    console.log(result);
});

Promise.allSettled([promiseNumber(1), promiseNumber(2), promiseNumber(3)]).then((results) => {
  results.forEach((result) => {
    console.log(`status: ${result.status}, value: ${result.value}`);
  });
});

Promise.allSettled([promiseNumber(1), promiseNumber(2), promiseNumber(3)])
.then((values) => {
    console.log(values)
})

async function asyncFunction() {
  try {
    const results = await Promise.all([promiseNumber(1), promiseNumber(2), promiseNumber(3)]);
    results.forEach((result) => console.log(result));

    const settledResults = await Promise.allSettled([promiseNumber(1), promiseNumber(2), promiseNumber(3)]);
    settledResults.forEach((result) => {
      console.log(`status: ${result.status}, value: ${result.value}`);
    });
  } catch (error) {
    console.error(error);
  }
}
