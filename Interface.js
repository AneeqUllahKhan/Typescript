var users = {
    id: 1,
    name: "Aneeq",
    email: "aneeq@gmail.com"
};
console.log(users);
var usersdata = {
    id: 1,
    name: "Aneeq",
    email: "aneeq@gmail.com",
    getName: function () {
        return "Ullah Khan";
    }
};
console.log(usersdata);
console.log(usersdata.getName());
