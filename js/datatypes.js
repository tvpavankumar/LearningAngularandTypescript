"use strict";
var fname = "pavan";
let frstname = "anusha";
let age = 10;
let valid = false; // default value for boolean is undefined
let dob = new Date("06-Dec-2018");
let unionType;
unionType = " pavan";
console.log("unionType : " + unionType);
unionType = 10;
console.log("unionType : " + unionType);
console.log("Valid : " + valid);
console.log("DOB : " + dob);
console.log(dob);
let employee;
employee = 10;
employee = 'Rajesh';
employee = { id: 10, name: 'Ramesh', age: 10 };
let empname = [];
empname.push("pavan");
empname.push("kumar");
empname.push("bottle");
console.log(empname);
let empList = [];
empList.push(10);
empList.push(employee);
console.log(empList);
let departments = new Array();
departments.push("IT");
departments.push("Marketing");
console.log(departments);
let studenList = new Array();
studenList.push("IT");
studenList.push(employee);
console.log(studenList);
departments.forEach(function (dept) {
    console.log(dept);
});
departments.forEach((dept) => {
    console.log(dept);
});
for (let dept of departments) {
    console.log(dept);
}
for (let dept in departments) {
    console.log(dept);
    console.log(departments[dept]);
}
let twodimensional = [[]];
//# sourceMappingURL=datatypes.js.map