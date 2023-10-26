document.addEventListener('DOMContentLoaded', function () {
    const display = document.getElementById('display');
    let input = '';

    document.querySelectorAll('.number, .operator').forEach((button) => {
        button.addEventListener('click', function () {
            if (this.id === 'clear') {
                input = '';
            } else if (this.id === 'backspace') {
                input = input.slice(0, -1);
            } else if (this.id === 'equals') {
                try {
                    input = eval(input).toString();
                } catch (error) {
                    input = 'Error';
                }
            } else {
                input += this.textContent;
            }
            display.value = input;
        });
    });
});
