
const IS_PART_TIME = 1;
const IS_FULL_TIME = 2;
const PART_TIME_HOURS = 4;
const FULL_TIME_HOURS = 8;
const WAGE_PER_HOUR = 20;
const NUMBER_OF_WORKING_DAYS = 20;
const MAX_HRS_IN_MONTH = 160;

let empHrs = 0;
let totalEmpHrs = 0;
let totalWorkingDays = 0;
let empDailyWageArray = new Array();

function calDailyWage(empHrs){
    return empHrs * WAGE_PER_HOUR;
}

function getWorkingHours(empCheck){
    switch(empCheck){
        case IS_PART_TIME:
            return PART_TIME_HOURS;
        case IS_FULL_TIME:
            return FULL_TIME_HOURS;
        default:
            return 0;
    }
}

while(totalEmpHrs <= MAX_HRS_IN_MONTH && totalWorkingDays < NUMBER_OF_WORKING_DAYS){
    totalWorkingDays++;
    let empCheck = (Math.floor(Math.random()*10) % 3);
    let empHrs = getWorkingHours(empCheck);
    totalEmpHrs += empHrs;
    empDailyWageArray.push(calDailyWage(empHrs))
}
let empWage = calDailyWage(totalEmpHrs);
console.log("TotalDays: "+totalWorkingDays+"\nTotal Hrs: "+totalEmpHrs+"\nEmployee Wage: "+empWage);