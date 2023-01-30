// Interface
interface usersTypes {
    id:number,
    name:string,
    email:any
}

let users:usersTypes = {
    id:1,
    name:"Aneeq",
    email:"aneeq@gmail.com"
} 

console.log(users)

// Function Interface

interface usersType {
    id:number,
    name:string,
    email:any,
    getName:()=>string
}

let usersdata:usersType = {
    id:1,
    name:"Aneeq",
    email:"aneeq@gmail.com",
    getName : function(){
        return "Ullah Khan"
    }
} 

console.log(usersdata)
console.log(usersdata.getName())