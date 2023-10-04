const form = document.getElementById('form');
form.addEventListener('submit', handleSubmit)

const inputValue = document.getElementById('metros');
const selectedDecimal = document.getElementById('unidades');
const result = document.getElementById('total');
let valueConverted = 0;
let resultArredondado = result.toFixed(4);

function handleSubmit(e) {
    e.preventDefault();

    if(!inputValue.value) {
        alert('Informe um valor válido!');
        return;
    }
    else if(!selectedDecimal.value) {
        alert('Selecione uma unidade de medida!');
        return;
    }

    converter();
};

function converter() {
    if(selectedDecimal.value === 'km') {
        valueConverted = inputValue.value / 1000;
        result.innerHTML = valueConverted;

    } else if(selectedDecimal.value === 'cm') {
        valueConverted = inputValue.value * 100;
        result.innerHTML = valueConverted;

    } else if(selectedDecimal.value === 'mm') {
        valueConverted = inputValue.value * 1000;
        result.innerHTML = valueConverted;

    } else if(selectedDecimal.value === 'Mm') {
        valueConverted = inputValue.value * 1e+6;
        result.innerHTML = valueConverted;

    } else if(selectedDecimal.value === 'nm') {
        valueConverted = inputValue.value * 1e+9;
        result.innerHTML = valueConverted;

    } else if(selectedDecimal.value === 'mil') {
        valueConverted = inputValue.value / 1609;
        result.innerHTML = valueConverted;

    } else if(selectedDecimal.value === 'ja') {
        valueConverted = inputValue.value * 1.094;
        result.innerHTML = valueConverted;

    } else if(selectedDecimal.value === 'pe') {
        valueConverted = inputValue.value * 3.281;
        result.innerHTML = valueConverted;

    } else if(selectedDecimal.value === 'po') {
        valueConverted = inputValue.value * 39.37;
        result.innerHTML = valueConverted;

    }

    inputValue.value = ''; 
    selectedDecimal = '';
};
