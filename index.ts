// let userName ="abdus_shobhan";
// let age =34;
// let arrat = [5,6,7]

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


let user : object[];
user =[];
let user1:{userName:string; userId:number};

user1 = {userName:"Shonhan",userId:101};

user.push(user1);
let user2 :{userName:string;userId:number};

user2 = {userName:"Abdus_Shobhan",userId:103}
user.push(user2);

console.log(user);


type RequestType = "GET"|"POST"
let getRequest:RequestType;


getRequest="GET";
console.log(getRequest);
// This is constroctor of this class...
class User{
    userName:string;
    age:number;


    constructor(userName,age){
        this.userName = userName;
        this.age= age;
    }

     display(){

       console.log(`userName: ${this.userName} and age ${this.age}`)
    }
}

// let user3= new User("shobhan",32);
// let user4 = new User("md sakib",32);

// user3.display();
// user4.display();
// This is for class method and object in TS

// this is a inherate class of ts 

class pcUser{
    userName:string;
    age:number

    constructor(userName,age){

        this.userName = userName;
        this.age = age;

    }

    display1(){
        console.log(`userName: ${this.userName} age: ${this.age}`)
    }
}

// const u = new pcUser("abdus_shobhanCSEDUET",4);
// u.display1();

class studet extends pcUser {
    studetnID:number;

    constructor(userName,age,studetnID){

        super(userName,age);

        this.studetnID = studetnID;


      

    }

    display2(){
        console.log(`userName: ${this.userName} age: ${this.age} and id ${this.studetnID}`)
    }

    

}

let student = new studet("abdus_shobhan",404,10123);

student.display2();
