function speedDetector(inputSpeed){
    let answer = "";
    let demerits;

    if(inputSpeed < 0){
        answer = "null"
    }else if(inputSpeed >= 0 && inputSpeed <= 70){
        answer = "OK";
    }else{
        let points = 5;
        let diff = inputSpeed - 70;
        demerits = Math.floor(diff / points);
        answer = "Points:" + demerits;

        if(demerits > 12){
            answer = "License suspended " + demerits;
        }
    }
    return answer;
}
console.log(speedDetector(160))