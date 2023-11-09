function convertToBinary() {
    const numberInput = document.getElementById("numberInput").value;
    const binaryOutput = document.getElementById("binaryOutput");
    binaryOutput.innerText = "Binary: " + (+numberInput).toString(2);
}

function convertToOctal() {
    const numberInput = document.getElementById("numberInput").value;
    const octalOutput = document.getElementById("octalOutput");
    octalOutput.innerText = "Octal: " + (+numberInput).toString(8);
}

function convertToHexadecimal() {
    const numberInput = document.getElementById("numberInput").value;
    const hexadecimalOutput = document.getElementById("hexadecimalOutput");
    hexadecimalOutput.innerText = "Hexadecimal: " + (+numberInput).toString(16).toUpperCase();
}

function convertToDecimal() {
    const numberInput = document.getElementById("numberInput").value;
    const decimalOutput = document.getElementById("decimalOutput");

    // Validate input
    if (!numberInput.match(/^[0-9A-Fa-f]+$/)) {
        alert("Invalid input! Please enter a valid hexadecimal number.");
        return;
    }

    // Convert to decimal
    const decimalValue = parseInt(numberInput, 16);

    // Display result
    decimalOutput.innerHTML = "Decimal: " + decimalValue;
}

function resetBases() {
    document.getElementById("numberInput").value = "";
    document.getElementById("binaryList").innerHTML = "";
    document.getElementById("octalList").innerHTML = "";
    document.getElementById("hexadecimalList").innerHTML = "";
    document.getElementById("decimalValue").innerHTML = "";
}
