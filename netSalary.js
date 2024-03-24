//trial one
// function tax(incomeSalary){
//     let taxed = 0;
//     let grossTax = 0;
//     let rated = 0;
//     if(incomeSalary > 0 && incomeSalary <= 24000){
//         grossTax = (incomeSalary*0.10)
//         taxed = incomeSalary - grossTax;
//     }else if(incomeSalary >= 24001 && incomeSalary <= 32333){
//         rated = (incomeSalary - 24000) * 0.25;
//         grossTax = 2400 + rated
//         taxed = incomeSalary - grossTax;
//     }else if(incomeSalary >= 32334 && incomeSalary <= 500000){
//         rated = (incomeSalary - 32333) * 0.30;
//         grossTax = 2400 + 2083.25 + rated
//         taxed = incomeSalary - grossTax;
//     }else if (incomeSalary >= 500001  && incomeSalary <= 800000){
//         rated = (incomeSalary - 500000) * 0.325;
//         grossTax = 2400 + 2083.25 + 140300.1 + rated
//         taxed = incomeSalary - grossTax;
//     }else if (incomeSalary > 800000){
//         rated = (incomeSalary - 800000) * 0.35;
//         grossTax = 2400 + 2083.25 + 140300.1 + 97500 + rated
//         taxed = incomeSalary - grossTax;
//     }
//     return taxed;
// }
// console.log(tax(20000))

// Function to calculate NHIF deductions
// function calculateNHIF(grossSalary) {
//     for (const rate of nhifRates) {
//         if (grossSalary >= 0 && grossSalary <= 5999) {
//             return rate;
//         }
//     }
// }
// console.log(rate(5000));
// function show(value){
//     console.log(value);
// }

// 

//output = tax

//output = NHIFDeductions

//output = NSSFDeductions

//output = Gross salary

//output = Net Salary
/*

gross salary = 75000
nssf = (75000 * 0.06) = 4500
nhif = 1400 //(1400 * 0.15) = 210 * 

75000 - (nssf + nhif)
let taxableIncome = 75000 - (nssf + nhif)5900 //69100
let payee = tax(taxableIncome).paye
let net salary = tax(taxableIncome).netsalary

NSSFDeductions = 4500
NHIFDeduction s = 1400
payee (i.e. Tax) = 51186.65 // tax.paye
gross salary = 75000
net salary = 17913.35 // tax.netsalary
*/
// const salary = prompt("Enter Salary");
// speedDetector(salary);

function kra(bascSal, benefit){
    let nssf = 0;
    let nhif = 0;

    function benefitsfunction(bascSal, benefit = 0){
        let  nhifDed = 0
     
         if (bascSal > 0  && bascSal <= 5999){
           nhifDed  = 150
           
         }else if (bascSal >= 6000 && bascSal <= 7999){
           nhifDed =300
     
         }else if(bascSal >= 8000 && bascSal <= 11999){
           nhifDed =400
     
         }else if(bascSal >= 12000 && bascSal <= 14999){
           nhifDed =500
         }
         else if(bascSal >= 15000 && bascSal <= 19999){
           nhifDed =600
     
         }
         else if(bascSal >= 20000 && bascSal <= 24999){
           nhifDed =750
     
         }
         else if(bascSal >= 25000 && bascSal <= 29999){
           nhifDed =850
     
         }
         else if(bascSal >= 30000 && bascSal <= 34999){
           nhifDed =900
     
         }
         else if(bascSal >= 35000 && bascSal <= 39999){
           nhifDed =950
     
         }else if(bascSal >= 40000 && bascSal <= 44999){
           nhifDed =1000
     
         }
         else if(bascSal >= 50000 && bascSal <= 59999){
           nhifDed =1200
     
         }
         else if(bascSal >= 60000 && bascSal <= 69999){
           nhifDed =1300
     
         }
         else if(bascSal >= 70000 && bascSal <= 79999){
           nhifDed =1400
     
         }
         else if(bascSal >= 80000 && bascSal <= 89999){
           nhifDed =1500
     
         }
         else if(bascSal >= 90000 && bascSal <= 99999){
           nhifDed =1600
     
         }
         else if (bascSal >= 100000){
           nhifDed =1700
         }
     
         // nssf = (benefit > 0 ) ? benefit : bascSal * 0.06;
     
         if(benefit > 0){
             nssf = benefit;
         }else{
             nssf = bascSal * 0.06;
         }
     
         nhif = nhifDed;
         taxableIncome = bascSal - (nssf + nhif);
             return{
                 nssf,
                 nhif,
                 taxableIncome, 
             }
    }    

    function tax(taxableIncome){
    let paye = 0;
    let grossTax = 0;
    let rated = 0; 
    let personalRelief = 2400;

    if(taxableIncome > 0 && taxableIncome <= 24000){
        grossTax = (taxableIncome*0.10);
    }else if (taxableIncome >= 24001 && taxableIncome <= 32333){
        rated = (taxableIncome - 24000) * 0.25;
        grossTax = 2400 + rated
    }else if (taxableIncome >= 32334 && taxableIncome <= 500000){
        rated = (taxableIncome - 32333) * 0.30;
        grossTax = 2400 + 2083.25 + rated
    }else if (taxableIncome >= 500001 && taxableIncome <= 800000){
        rated = (taxableIncome - 500000) * 0.325;
        grossTax = 2400 + 2083.25 + 140300.1 + rated  
    }else if(taxableIncome > 800000){
        rated = (taxableIncome - 800000) * 0.35;
        grossTax = 2400 + 2083.25 + 140300.1 + 97500 + rated
    }
    paye =  ~~(grossTax - personalRelief);
    netsalary = (taxableIncome - paye);
    return { paye, netsalary } 
    }
    
    let myTaxableIncome  = benefitsfunction(bascSal,benefit);
    let taxed = tax(myTaxableIncome.taxableIncome);

    return {
        NSSFDeductions:  myTaxableIncome.nssf,
        NHIFDeductions:  myTaxableIncome.nhif,
        payee:  taxed.paye,
        grosssalary:  bascSal,
        netsalary:  taxed.netsalary
    }
    
}


console.log(kra(75000))