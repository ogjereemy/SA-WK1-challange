// // Constants for tax rates and deductions
// const taxBrackets = [
//     { min: 0, max: 24000, rate: 10 },
//     { min: 24001, max: 32333, rate: 15 },
//     { min: 32334, max: 40333, rate: 20 },
//     { min: 40334, max: 48333, rate: 25 },
//     { min: 48334, max: 56000, rate: 30 },
//     { min: 56001, max: Infinity, rate: 35 }
// ];

// const nhifRates = [
//     { min: 0, max: 5999, rate: 150 },
//     { min: 6000, max: 7999, rate: 300 },
//     { min: 8000, max: 11999, rate: 400 },
//     { min: 12000, max: 14999, rate: 500 },
//     { min: 15000, max: 19999, rate: 600 },
//     { min: 20000, max: 24999, rate: 750 },
//     { min: 25000, max: 29999, rate: 850 },
//     { min: 30000, max: 34999, rate: 900 },
//     { min: 35000, max: 39999, rate: 950 },
//     { min: 40000, max: 44999, rate: 1000 },
//     { min: 45000, max: 49999, rate: 1100 },
//     { min: 50000, max: 59999, rate: 1200 },
//     { min: 60000, max: 69999, rate: 1300 },
//     { min: 70000, max: 79999, rate: 1400 },
//     { min: 80000, max: 89999, rate: 1500 },
//     { min: 90000, max: 99999, rate: 1600 },
//     { min: 100000, max: Infinity, rate: 1700 }
// ];

// const nssfRate = 200;

// // Function to calculate PAYE tax
// function calculateTax(grossSalary) {
//     let remainingSalary = grossSalary;
//     let tax = 0;

//     for (const bracket of taxBrackets) {
//         if (remainingSalary <= 0) break;

//         const taxableAmount = Math.min(remainingSalary, bracket.max - bracket.min);
//         tax += (taxableAmount * bracket.rate) / 100;
//         remainingSalary -= taxableAmount;
//     }

//     return tax; 
// }
// // // Function to calculate NHIF deductions
// // function calculateNHIF(grossSalary) {
// //     for (const rate of nhifRates) {
// //         if (grossSalary >= rate.min && grossSalary <= rate.max) {
// //             return rate.rate;
// //         }
// //     }
// // }

// // // Function to calculate Net Salary
// // function calculateNetSalary(basicSalary, benefits) {
// //     const grossSalary = basicSalary + benefits;
// //     const tax = calculateTax(grossSalary);
// //     const nhif = calculateNHIF(grossSalary);
// //     const nssf = nssfRate;
// //     const deductions = tax + nhif + nssf;
// //     const netSalary = grossSalary - deductions;

// //     return {
// //         grossSalary: grossSalary,
// //         tax: tax,
// //         nhif: nhif,
// //         nssf: nssf,
// //         deductions: deductions,
// //         netSalary: netSalary
// //     };
// // }

// // // Example usage
// // const basicSalary = parseFloat(prompt("Enter basic salary:"));
// // const benefits = parseFloat(prompt("Enter benefits:"));

// // const salaryDetails = calculateNetSalary(basicSalary, benefits);
// // console.log("Gross Salary:", salaryDetails.grossSalary);
// // console.log("Tax:", salaryDetails.tax);
// // console.log("NHIF:", salaryDetails.nhif);
// // console.log("NSSF:", salaryDetails.nssf);
// // console.log("Deductions:", salaryDetails.deductions);
// // console.log("Net Salary:", salaryDetails.netSalary);



//trial one
function tax(incomeSalary){
    let taxed = 0;
    let grossTax = 0;
    let rated = 0;
    if(incomeSalary > 0 && incomeSalary <= 24000){
        grossTax = (incomeSalary*0.10)
        taxed = incomeSalary - grossTax;
    }else if(incomeSalary >= 24001 && incomeSalary <= 32333){
        rated = (incomeSalary - 24000) * 0.25;
        grossTax = 2400 + rated
        taxed = incomeSalary - grossTax;
    }else if(incomeSalary >= 32334 && incomeSalary <= 500000){
        rated = (incomeSalary - 32333) * 0.30;
        grossTax = 2400 + 2083.25 + rated
        taxed = incomeSalary - grossTax;
    }else if (incomeSalary >= 500001  && incomeSalary <= 800000){
        rated = (incomeSalary - 500000) * 0.325;
        grossTax = 2400 + 2083.25 + 140300.1 + rated
        taxed = incomeSalary - grossTax;
    }else if (incomeSalary > 800000){
        rated = (incomeSalary - 800000) * 0.35;
        grossTax = 2400 + 2083.25 + 140300.1 + 97500 + rated
        taxed = incomeSalary - grossTax;
    }
    return taxed;
}

// Function to calculate NHIF deductions
function calculateNHIF(grossSalary) {
    for (const rate of nhifRates) {
        if (grossSalary >= 0 && grossSalary <= 5999) {
            return rate;
        }
    }
}
console.log(rate(5000));