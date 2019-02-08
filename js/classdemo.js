"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const employeeservice_1 = require("./employeeservice");
class Employee {
    constructor(id, name, address) {
        this.empService = new employeeservice_1.EmployeeService();
        this.name = name;
        this.address = address;
    }
    get empid() {
        return this.id;
    }
    set employeeid(id) {
        this.id = id;
    }
    addEmp(name, address) {
        this.empService.addEmployee();
    }
    getEmp() {
        return this.empService.getEmployee();
    }
}
//IIFE --> immediate invoke function expression is want we see in javascript 
//annyomous is other name 
//Constructor overloading is not allowed
//Access modifiers are 
// private
// protected
// public
// readOnly
//include is the may we will include another javascript file into other.
/*let emp = new Employee('Rajesh','carsoncity');
emp.employeeid(10);*/ 
//# sourceMappingURL=classdemo.js.map