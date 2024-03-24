const grades = prompt("Enter Grade");
studentGradeGenerator(grades);


function studentGradeGenerator(inputGrade){

let grade = "E";

    if (inputGrade > 79 && inputGrade <= 100) {
       grade = "A";

    }
    else if (inputGrade >= 60 && inputGrade <=79) {
        grade = "B"
    }
    else if (inputGrade > 49 && inputGrade <= 59) {
        grade = "C"
    }
    else if (inputGrade >= 40 && inputGrade <= 49) {
        grade = "D"
    }
    else if (inputGrade < 40 && inputGrade >= 0){
        grade = "E"}
    // }else{
        // grade = "Invalid grade, must be between 0 and 100."
    // }git
    
 document.getElementById("returns").innerText = grade;
}
