let h = document.getElementById("input-height");
let w = document.getElementById("input-weight");
let u = document.getElementById("input-unit");
let a;
let count = 0;
let result;

function calculator() {
    if (u.value == "") {
        count = count + 1;
        let x = document.getElementById("unit_error");
        x.style.opacity = 1;
    }
    if (h.value == "") {
        count = count + 1;
        let x = document.getElementById("height_error");
        x.style.opacity = 1;
    }
    if (w.value == "") {
        count = count + 1;
        let x = document.getElementById("weight_error");
        x.style.opacity = 1;
    }
    if (count == 0) {
        if (u.value == 'cm' || 'CM') {
            a = h.value * 0.01;

        }
        else if (u.value == 'ft' || 'FT') {
            a = h.value * 0.3048;

        }
        else if (u.value == "m" || "M") {
            a = h.value;
        }

    }
    let x = a * a;
    result = (w.value / x);
    console.log(result);
    validation();
}


function validation() {
    let newitem1 = document.createElement("div");
    // let newitem2 = result;
    if (result < 18.5) {
        newitem1.style.fontSize = "20px";
        newitem1.innerText = (result + "-" + "  " + "Underweight");
        newitem1.style.color = "red";
        // newitem2.innerText = (result);
        // document.body.appendChild(newitem2);
        document.body.appendChild(newitem1);
    }
    else if (result >= 18.5 && result <= 24.9) {
        newitem1.style.fontSize = "20px";
        newitem1.innerText = (result + " - " + "  " + "Normal Weight");
        newitem1.style.color = "red";
        document.body.appendChild(newitem1);

    }
    else if (result >= 25.00 && result <= 29.9) {
        newitem1.style.fontSize = "20px";
        newitem1.innerText = (result + " - " + "  " + "Pre-Obesity");
        newitem1.style.color = "red";
        document.body.appendChild(newitem1);

    }
    else if (result >= 30.0 && result <= 34.9) {
        newitem1.style.fontSize = "20px";
        newitem1.innerText = (result + " - " + "  " + "Obesity Class I");
        newitem1.style.color = "red";
        document.body.appendChild(newitem1);

    }
    else if (result >= 35 && result <= 39.9) {
        newitem1.style.fontSize = "20px";
        newitem1.innerText = (result + " - " + "  " + "Obesity Class II");
        newitem1.style.color = "red";
        document.body.appendChild(newitem1);

    }
    else if (result >= 40) {
        newitem1.style.fontSize = "20px";
        newitem1.innerText = (result + " - " + "  " + "Obesity Class III");
        newitem1.style.color = "red";
        document.body.appendChild(newitem1);
    }
}
