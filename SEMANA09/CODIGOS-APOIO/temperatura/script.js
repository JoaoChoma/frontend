function converterCelsiusToFahrenheit() {
    let celsiusInput = document.getElementById("celsius");
    let fahrenheitInput = document.getElementById("fahrenheit");
    
    if (celsiusInput.value !== "") {
        let celsius = parseFloat(celsiusInput.value);
        let fahrenheit = (celsius * 9/5) + 32;
        fahrenheitInput.value = fahrenheit.toFixed(2);
    } else {
        fahrenheitInput.value = "";
    }
}

function converterFahrenheitToCelsius() {
    let celsiusInput = document.getElementById("celsius");
    let fahrenheitInput = document.getElementById("fahrenheit");
    
    if (fahrenheitInput.value !== "") {
        let fahrenheit = parseFloat(fahrenheitInput.value);
        let celsius = (fahrenheit - 32) * 5/9;
        celsiusInput.value = celsius.toFixed(2);
    } else {
        celsiusInput.value = "";
    }
}
