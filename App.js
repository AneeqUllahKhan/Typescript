// export{}
// Checking TS Is Working Or Not
var check = "Hello TypeScript";
console.log(check);
var App = /** @class */ (function () {
    function App() {
    }
    App.prototype.test = function () {
        console.log("Hello World Type");
    };
    return App;
}());
var a1 = new App();
a1.test();
// Object
