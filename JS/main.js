var form = document.forms["form"];
var calculateBtn = document.querySelector("button");
var tipBox = document.getElementById("tip");

calculateBtn.addEventListener("click", calculateTip);

function calculateTip() {
    var amount = form["amount"].value;
    var serviceEval = document.querySelector("select").value;
    var numberOfPeople = form["number-of-people"].value;
    if (amount == "") {
        swal("Įveskite sumą!");
    } else if (serviceEval == 0) {
        swal("Įvertinkite aptarnavimą!");
    } else if (numberOfPeople == "") {
        swal("Įveskite žmonių skaičių!");
    } else {
        tip = (amount * serviceEval / 100) / numberOfPeople;
        tipBox.innerHTML = "Po " + tip.toFixed(2) + " eur";
        document.getElementById("footer").style.visibility = "visible";
    }

}
