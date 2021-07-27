const languages = ['javascrit', 'python', 'c', 'c++']

console.log(languages.length);

console.log(languages[2])

languages.push('rust');
languages.unshift('typescript');
languages.shift()
console.log(languages);


for (let i = 0; i <= 10; i++) {
    const element = i;
    console.log(element)
}

const actors = [
    {
        name: 'Actor1',
        payment: 100
    },
    {
        name: 'Actor2',
        payment: 200
    },
    {
        name: 'Actor3',
        payment: 300
    }
];

// for Loop
for (let i = 0; i < 1; i++) {
    actors[0].payment = actors[0].payment - 10;
    actors[1].payment = actors[1].payment - 20;
    actors[2].payment = actors[2].payment - 30;
}
console.log(actors)


// forEach Loop

actors.forEach((actor) => {
    actor.payment = actor.payment - 10;

});
console.log(actors)



// forOf Loop

for (const actor of actors) {
    actor.payment = actor.payment - 10;
    // console.log(actor)
}

console.log(actors)


// filter Loop

const students = [
    {
        name: 'student 1',
        marks: 45
    },
    {
        name: 'student 2',
        marks: 38
    },
    {
        name: 'student 3',
        marks: 64
    },
];


//filter return new array//
const result = students.filter((student) => student.marks < 45);

console.log(result);


const users = [
    {
        fName: 'Minhaj',
        lName: 'Sadik'
    },
    {
        fName: 'Sadik',
        lName: 'Uddin'
    }
]


const finalUsers = users.map((user) => {
    return {
        fullName: `${user.fName} ${user.lName}`
    }
})
console.log(finalUsers)

// Reduce Loop
const movies = [
    {
        name: 'mad-max',
        budget: 100
    },
    {
        name: 'metrix',
        budget: 300
    },
    {
        name: 'avengers',
        budget: 400
    },
    {
        name: 'deen the day',
        budget: 200
    }
    
];

// forEach to check difference between reduce

let total = 0;
movies.forEach((movie)=> {
    total += movie.budget;
})


// reduce loop 

const total = movies.reduce((acc, movie)=> {
    acc += movie.budget;
    return acc;
}, 0)


console.log(total)



const admins = [2, 1, 2, 5];

const user = {
    name:'xYz',
    id:5
}

const isAdmin = admins.indexOf(user.id);
console.log(isAdmin);







