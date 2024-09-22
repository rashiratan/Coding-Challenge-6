//Task 1:

const employees = [
    {name: 'Taylor Swift', shifts: [{ day: 'Monday', hours: 7 }, { day: 'Wednesday', hours: 4 }] },
    {name: 'Charlie Puth', shifts: [{ day: 'Tuesday', hours: 9 }, { day: 'Thursday', hours: 3 }] },
    {name: 'Ed Sheeran', shifts: [{ day: 'Friday', hours: 6 }, { day: 'Monday', hours: 4 }] },
    {name: 'Selena Gomez', shifts: [{ day: 'Thursday', hours: 8 }] }
];
//creating an array of employee objects that stores their shift details

//Task 2
function displayEmployeeShifts(employeeShift) {
    console.log(`The name of this employee is ${employeeShift.name} and they are scheduled as follows:`);
    employeeShift.shifts.forEach((shift) => 
        console.log(`day: ${shift.day}, hours: ${shift.hours}`)); 
    //using forEach and template literals to display details of the employee object input
}

//Task 3
function assignShift(employeeName, day, hours){
    let employeeFound = employees.find((employee) => employee.name === employeeName); //finding employee in employees array
    let shiftExists;
    if (!employeeFound) {
        return `Sorry, employee not found.`;
        //logging error if name does not match an employee in the array
        }
    else{
        shiftExists = employeeFound.shifts.find((shift) => shift.day === day);
        //find a match in employee's shifts
        if (shiftExists){
        return `Sorry, ${employeeName} is already working ${shiftExists.hours} hours on this day.`;
        //logging error if they are already working that day
    }
    else {
        employeeFound.shifts.push({day: day, hours: hours});
        //pushing the employee's new shift to the array
        return `Thanks! New shift has been added.`;
        //logging update to user
    }}
}

//Task 4
function calculateTotalHours(employeeName){
    let employeeFound = employees.find((employee) => employee.name === employeeName);
    if (!employeeFound) {
        return `Sorry, employee not found.`; //logging error if employee not found
        }
    else {
        let totalWorkHours = employeeFound.shifts.reduce((total, shift) => total + shift.hours, 0);
        //calculating total hours worked using reduce
        return `${employeeName} has worked ${totalWorkHours} hours in total this week.`;
        //logging output to user
    }
}

