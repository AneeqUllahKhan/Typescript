// Class
var App = /** @class */ (function () {
    function App() {
        this.name = "Aneeq Ullah Khan";
    }
    App.prototype.getName = function () {
        console.log(this.name);
    };
    return App;
}());
var a1 = new App();
a1.getName();
// Constructor
var Apps = /** @class */ (function () {
    function Apps(names) {
        this.names = names;
    }
    Apps.prototype.getName = function () {
        console.log(this.names);
    };
    return Apps;
}());
var a2 = new Apps(1);
a2.getName();
var Appss = /** @class */ (function () {
    function Appss(namess) {
        this.namess = namess;
    }
    Appss.prototype.getName = function () {
        // void is use when there is blank return
        return this.namess;
    };
    return Appss;
}());
var a3 = new Appss("Aneeq Types");
console.log(a3.getName());
