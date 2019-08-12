function calculateTip() {
    var billAmount = document.getElementById("in-1").value;
    var service  = document.getElementById("in-2").value;
    var numPeople = document.getElementById("in-3").value;
    
    // validation
    if (billAmount === "" || service == 0) {
        window.alert("Please Enter Empty fields!");
        return;
    }
    
    // Check the people
    if (numPeople === "" || numPeople <= 1) {
        numPeople = 1;
        
        document.getElementById("each").style.display = "none";
    } else {
        document.getElementById("each").style.display = "block";
    }
    
    // calculation
    var total = (billAmount * service) / numPeople;
    total = Math.round(total * 100) / 100;
    total = total.toFixed(2);
    
    // Display the Tip
    document.getElementById("totalTip").style.display = "block";
    document.getElementById("tip").innerHTML = total;
    
    
}

//Hide totalTip
document.getElementById("totalTip").style.display = "none";
document.getElementById("each").style.display = "none";

//clicking the Calculate button
document.getElementById("calculate").onclick = function () { calculateTip(); };


