console.log(`hello`)
fetch(`https://jsonplaceholder.typicode.com/todos`).then(give=>give.json()).then(random=>console.log(random));
