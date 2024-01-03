const inputTemperature = document.getElementById("input-temperature");
const inputUnit = document.getElementById("input-unit");
const outputTemperature = document.getElementById("output-temperature");
const convertButton = document.getElementById("convert-button");

convertButton.addEventListener("click", function() {
  const inputValue = parseFloat(inputTemperature.value);
  const inputUnitValue = inputUnit.value;
  let outputValue;

  if (inputUnitValue === "celsius") {
    outputValue = (inputValue * 9/5) + 32;
    outputUnitValue = "Fahrenheit";
  } else {
    outputValue = (inputValue - 32) * 5/9;
    outputUnitValue = "Celsius";
  }

  outputTemperature.textContent = `${outputValue.toFixed(2)} ${outputUnitValue}`;
});