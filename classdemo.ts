import { EmployeeService } from './employeeservice';
class Employee { //Pascal case --> Employee / EmployeeInfo / StudentInfo
    private id: number;
    protected name: string;
    address: string;
    empService = new EmployeeService();

    constructor(id: number,name: string, address: string) {
        this.name = name;
        this.address = address;
    }

    get empid() : number
    {
        return this.id;
    }

    set employeeid(id:number)
    {
        this.id = id;
    }

    addEmp(name : String, address : string) {
        this.empService.addEmployee();
    }

    getEmp() : string{
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