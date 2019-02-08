var fname = "pavan";
let frstname: String = "anusha";
let age: number = 10;
let valid : Boolean =  false; // default value for boolean is undefined
let dob: Date = new Date("06-Dec-2018");

let unionType : string|number;

unionType = " pavan";
console.log("unionType : "+ unionType);
unionType = 10;
console.log("unionType : "+ unionType);

console.log("Valid : "+valid);
console.log("DOB : "+ dob);
console.log(dob);

let employee: any;
employee = 10;
employee = 'Rajesh';
employee = {id:10,name:'Ramesh',age:10};

let empname : string[] = [];
empname.push("pavan");
empname.push("kumar");
empname.push("bottle");
console.log(empname);

let empList :any[] = [];
empList.push(10);
empList.push(employee);
console.log(empList);

let departments : Array<string> = new Array<string>();
departments.push("IT");
departments.push("Marketing");
console.log(departments);

let studenList : Array<any> = new Array<any>();
studenList.push("IT");
studenList.push(employee);
console.log(studenList);

departments.forEach(function (dept){
  console.log(dept);
});

departments.forEach((dept) => {
    console.log(dept);
  });

for(let dept of departments){
    console.log(dept);
}

for (let dept in departments) {
    console.log(dept);
    console.log(departments[dept]);
}

let twodimensional : string[][] = [[]];
