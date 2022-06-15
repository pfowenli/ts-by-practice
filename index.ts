import axios from 'axios';

const url = 'https://jsonplaceholder.typicode.com/users/1';

interface User {
    id: number;
    name: string;
    email: string;
}

axios.get(url).then(response => {
    const user = response.data as User;

    const id = user.id;
    const name = user.name;
    const email = user.email;

    console.log(`
        The User with ID: ${id}
        Is called by name: ${name}
        Has email: ${email}
    `);
});
