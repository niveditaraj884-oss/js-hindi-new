// singleton
// object.create

// object literals

 const mySym = Symbol("Key1");

const JsUser = {
    name: "Nivedita",
    "full name": "Nivedita Rajput",
    [mySym]: "myKey1",
    age: 19,
    location: "Firozabad",
    email: "nivedita@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
};

// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser["full name"]);
// console.log(JsUser[mySym]);

JsUser.email = "nivedita@chatgpt.com";

// Object.freeze(JsUser);

JsUser.email = "nivedita@microsoft.com"; // This will not change the value

// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log('Hello JS user, ${this.name}');
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());