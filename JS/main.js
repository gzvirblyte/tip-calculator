var form = document.forms["form"];
var calculateBtn = document.querySelector("button");

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
        var tipBox = document.createElement("p");
        tipBox.innerHTML = "Arbatpinigiai<br>" + "Po " + tip.toFixed(2) + " eur<br>" + "kiekvienam!";
        var footer = document.getElementById("footer");
        footer.appendChild(tipBox);
        footer.style.display = "block";
        document.querySelector(".container").style.height = "475px";
    }
    calculateBtn.removeEventListener("click", calculateTip);
}


