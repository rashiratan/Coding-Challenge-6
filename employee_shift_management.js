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
