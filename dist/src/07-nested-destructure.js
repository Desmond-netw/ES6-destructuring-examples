"use strict";
// in this example we use destruture on nested objects
const employeeInfo = {
    id: 1,
    info: { Epname: "Sandra", position: "HR-Manager" },
};
const { info: { Epname, position }, } = employeeInfo;
console.log("Employee Name: " + Epname);
console.log("Employee Position: " + position);
