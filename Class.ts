// Class

class App{
    
    name = "Aneeq Ullah Khan"
    getName(){
        console.log(this.name)
    }
}

let a1 = new App()
a1.getName();

// Constructor
class Apps{
 
    names:number;
    constructor(names:number){
        this.names = names
    }
    getName(){
        console.log(this.names)
    }
}

let a2 = new Apps(1)
a2.getName();

// 

class Appss{
 
    namess:string;
    constructor(namess:string){
        this.namess = namess
    }
    getName():string{
        // void is use when there is blank return
        return this.namess
    }
}

let a3 = new Appss("Aneeq Types")
console.log(a3.getName())
