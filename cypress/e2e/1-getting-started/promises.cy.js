//Task 1


function printTextAfterSomeTime(text, time){
    setTimeout(function() {
        console.log(text);
    }, time);
}

printTextAfterSomeTime("Some Text", 4000)


//Task 2

function getTodo() {
    return new Promise((resolve, reject) => {
        fetch('https://jsonplaceholder.typicode.com/todos/1')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response with error');
                }
                return response.json();
            })
            .then(todo => {
                console.log('Recived todo:', todo);
               resolve(todo);
            })
            .catch(error => {
                console.error('Error when revieving the todo:', error);
                reject(error);
            });
    });
}

getTodo();

function getUser() {
    return new Promise((resolve, reject) => {
        fetch('https://jsonplaceholder.typicode.com/users/1')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response with error');
                }
                return response.json();
            })
            .then(user => {
                console.log('Recived user:', user);
               resolve(user);
            })
            .catch(error => {
                console.error('Error when revieving the user:', error);
                reject(error);
            });
    });
}
getUser();

const promiseAllResult = Promise.all([getTodo(), getUser()]);
const promiseRaceResult = Promise.race([getTodo(), getUser()]);

promiseAllResult.then(([todoResult, userResult]) => {
    console.log('Result of PromiseAll:', todoResult, userResult);
}).catch(error => {
    console.error('Error with PromiseAll:', error);
});

promiseRaceResult.then(result => {
    console.log('Result of PromiseRace:', result);
}).catch(error => {
    console.error('Error with PromiseRace:', error);
});


//Task3

async function getTodo() {
   
        const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
        const todo = await response.json();
        console.log('Received todo:', todo);
        return todo;
}

async function getUser() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users/1');
        if (!response.ok) {
            throw new Error('Network response with error');
        }
        const user = await response.json();
        console.log('Received user:', user);
        return user;
    } catch (error) {
        console.error('Error when receiving the user:', error);
        throw error;
    }
}

getTodo();
getUser();