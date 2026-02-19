import express from "express"
import employees from "./db/employees.js"

const app = express();

export default app;

app.get("/",welcome);

app.get("/employees", getEmployees)
app.get("/employees/random", getEmployeeByRandom);
app.get("/employees/:id", getEmployeeByID)




function welcome(req,res){
    res.send("Hello employees!");
}

function getEmployees(req,res){
    res.send(employees)
}

function getEmployeeByID(req,res){
    const { id } = req.params;
    const employee = employees[id];

    if (!employee) {
        res.status(404).send("this is not a valid employee");
    }
    res.send (employee) 
}

function getEmployeeByRandom(req,res){
    const random = Math.floor(Math.random()*employees.length);
    const employee = employees[random];
    res.send(employee)
}
    