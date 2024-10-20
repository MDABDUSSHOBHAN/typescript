// let userName ="abdus_shobhan";
// let age =34;
// let arrat = [5,6,7]
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// console.log(userName);
// console.log(age);
// console.log(arrat);
// let userId:number
// let firstName:string
// let lastName:string
// let isActivate :true
// userId = 12;
// firstName= "Abdus";
// lastName=" Shobhan";
// isActivate= true
// console.log(`Youre User id ${userId} and your name ${firstName} ${lastName} and status ${isActivate}`);
// function display(){
//     console.log("Hi i am void");
// }
// display();
// Here is emplement User Defiend Data Type in typeScript 
// let Userid :(number|string|boolean);
// Userid:"Shobhan";
// Userid:101;
// isActive:true;
// function displayuser(Userid){
//     console.log(Userid)
// }
// displayuser("shobhan")
// displayuser(101)
// array decleration in TS
// let UserNames:string[];
// UserNames = ["anis","rabu","Pinky","Shobhan","fuck"];
// console.log(UserNames);
// Here is emplement the object type data Basic
var user;
user = [];
var user1;
user1 = { userName: "Shonhan", userId: 101 };
user.push(user1);
var user2;
user2 = { userName: "Abdus_Shobhan", userId: 103 };
user.push(user2);
console.log(user);
var getRequest;
getRequest = "GET";
console.log(getRequest);
// This is constroctor of this class...
var User = /** @class */ (function () {
    function User(userName, age) {
        this.userName = userName;
        this.age = age;
    }
    User.prototype.display = function () {
        console.log("userName: ".concat(this.userName, " and age ").concat(this.age));
    };
    return User;
}());
// let user3= new User("shobhan",32);
// let user4 = new User("md sakib",32);
// user3.display();
// user4.display();
// This is for class method and object in TS
// this is a inherate class of ts 
var pcUser = /** @class */ (function () {
    function pcUser(userName, age) {
        this.userName = userName;
        this.age = age;
    }
    pcUser.prototype.display1 = function () {
        console.log("userName: ".concat(this.userName, " age: ").concat(this.age));
    };
    return pcUser;
}());
// const u = new pcUser("abdus_shobhanCSEDUET",4);
// u.display1();
var studet = /** @class */ (function (_super) {
    __extends(studet, _super);
    function studet(userName, age, studetnID) {
        var _this = _super.call(this, userName, age) || this;
        _this.studetnID = studetnID;
        return _this;
    }
    studet.prototype.display2 = function () {
        console.log("userName: ".concat(this.userName, " age: ").concat(this.age, " and id ").concat(this.studetnID));
    };
    return studet;
}(pcUser));
var student = new studet("abdus_shobhan", 404, 10123);
student.display2();
