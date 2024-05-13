const stuff = {
    user1: {
        name: 'Maxim',
        age: 15,
        role: "frontender",
    },
    user2: {
        name: 'Roman',
        age: 15,
        role: "frontender"
    }
}
const new_coworkers = {
    user3: {
        name: 'Nikita',
        age: 16,
        role: 'backender'
    }
}

const new_stuff = {...stuff, ...new_coworkers}
console.log(new_stuff)