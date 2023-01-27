// Simple Objects

let users = {
    name:"Aneeq",
    age:30,
    address:"USA"
}

users.name = "Arham"
console.log(users)

// Type Define Object

interface usersTypes {
    name : string,
    age : number,
    address: any
}

let userdata :usersTypes = {
    name:"Typescript",
    age: 3,
    address:"168 Microsoft"
}

userdata.name = "Arham"
console.log(userdata)

// Any Data Type Object 

let usersdata :any = {
    name:"Typescript",
    age: 3,
    address:"168 Microsoft"
}
usersdata.name = 1
console.log(usersdata)