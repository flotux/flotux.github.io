

function sensorFeedCalculation(clear = false) {

    if (clear) {
        document.getElementById("heroResult").style.visibility = "hidden";
        document.getElementById("sensorSpringDiam").value = "";
        document.getElementById("sensorDiamTolerance").value = "";
        document.getElementById("sensorNumberOfCoils").value = "";
        return;
    }

    const springDiam = document.getElementById("sensorSpringDiam");
    const diamTolerance = document.getElementById("sensorDiamTolerance");
    const numberOfCoils = document.getElementById("sensorNumberOfCoils");

    if (numberInputValidation(springDiam, diamTolerance, numberOfCoils)) {
        var sensorFeed = Math.floor(diamTolerance.value*2*Math.PI*numberOfCoils.value*0.80);
        if (sensorFeed > (springDiam.value*Math.PI*0.75)) {
            sensorFeed = Math.floor(springDiam.value*0.75);        
        }

        document.getElementById("sensorFeedResult").innerHTML = "Plage de palpage : " + sensorFeed + "mm";
        document.getElementById("heroResult").style.visibility = "visible";
    } else {
        document.getElementById("heroResult").style.visibility = "hidden";
    }
}

function clearInputs() {
    sensorFeedCalculation(true);
}


