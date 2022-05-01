const employee = {
    name: "trevon",
    streetAddress: "123 Main St"
}
function updateEmployeeWithKeyAndValue(employee, key, value) {
    const newEmployee = {...employee}
    newEmployee[key] = value
     return newEmployee
} 
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
    employee[key] = value
    return employee
}
function deleteFromEmployeeByKey(employee, key) {
    const newWorkers = {...employee}
    delete newWorkers[key]
return newWorkers
}
function destructivelyDeleteFromEmployeeByKey(employee, key){
    delete employee[key];
    return employee
}


