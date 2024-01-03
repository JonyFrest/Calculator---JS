function createCalculator() {
    let calculatorContainer = document.createElement('div');
    calculatorContainer.style.width = '250px';
    calculatorContainer.style.margin = '50px auto';
    calculatorContainer.style.border = '1px solid #ccc';
    calculatorContainer.style.borderRadius = '10px';
    calculatorContainer.style.backgroundColor = '#f8f8f8';
    calculatorContainer.style.boxShadow = '0 0 10px rgba(0, 0, 0, 0.1)';
    document.body.appendChild(calculatorContainer);

    let display = document.createElement('input');
    display.setAttribute('type', 'text');
    display.setAttribute('id', 'display');
    display.setAttribute('readonly', 'readonly');
    display.style.width = '92%';
    display.style.height = '40px';
    display.style.marginBottom = '10px';
    display.style.textAlign = 'right';
    display.style.padding = '10px';
    display.style.fontSize = '18px';
    display.style.border = 'none';
    display.style.borderRadius = '9px';
    display.style.backgroundColor = '#ececec';
    calculatorContainer.appendChild(display);

    let buttons = [
        '7', '8', '9', '/',
        '4', '5', '6', '*',
        '1', '2', '3', '-',
        '0', 'C', '=', '+'
    ];

    for (let i = 0; i < buttons.length; i++) {
        let button = document.createElement('button');
        button.innerHTML = buttons[i];
        button.style.width = '50px';
        button.style.height = '50px';
        button.style.margin = '5px';
        button.style.fontSize = '18px';
        button.style.border = '1px solid rgb(111,111,111)';
        button.style.borderRadius = '5px';
        button.style.cursor = 'pointer';

        if (['/', '*', '-', '+', '='].includes(buttons[i])) {
            button.style.backgroundColor = '#ff8c00';
            button.style.color = 'white';

            button.addEventListener('mouseenter', function () {
                button.style.backgroundColor = '#e07d00';
            });

            button.addEventListener('mouseleave', function () {
                button.style.backgroundColor = '#ff8c00';
            });
        } else {
            button.style.backgroundColor = '#f0f0f0';

            button.addEventListener('mouseenter', function () {
                button.style.backgroundColor = '#d0d0d0';
            });

            button.addEventListener('mouseleave', function () {
                button.style.backgroundColor = '#f0f0f0';
            });
        }

        button.addEventListener('click', function () {
            onButtonClick(button.innerHTML);
        });
        calculatorContainer.appendChild(button);
    }

    function onButtonClick(value) {
        if (value === '=') {
            calculateResult();
        } else if (value === 'C') {
            clearDisplay();
        } else {
            appendToDisplay(value);
        }
    }

    function appendToDisplay(value) {
        display.value += value;
    }

    function clearDisplay() {
        display.value = '';
    }

    function calculateResult() {
        try {
            let result = eval(display.value);
            display.value = result;
        } catch (error) {
            display.value = 'Error';
        }
    }
}

createCalculator();
