// Function Type

function calc():number{
    return 12 + 12
}

console.log(calc())

// Function And Parameter Type
function calce(e:number):number{
    return e
}

console.log(calce(10))

console.log(calc())

// Function With Two Parameter Type
function ca(e:number, d?:number):number{
    return d?e+d:e;
}

console.log(ca(10,20))

// Function With String Type 
function cal():any{
    return "Hello"
}

console.log(cal())