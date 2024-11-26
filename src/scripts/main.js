document.addEventListener('DOMContentLoaded', function () {
    // Attach event listener to the form
    document.getElementById('form-sorteador').addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent form submission and page reload

        // Get the maximum number input value
        let numeroMax = document.getElementById('numero-max').value;

        // Parse the value to an integer
        numeroMax = parseInt(numeroMax, 10);

        // Validate the input to ensure it's a number and greater than 0
        if (isNaN(numeroMax) || numeroMax <= 0) {
            alert('Please enter a valid number greater than 0.');
            return;
        }

        // Generate a random number between 1 and the maximum value
        let numeroAleatorio = Math.random() * numeroMax;
        numeroAleatorio = Math.floor(numeroAleatorio + 1);

        // Display the result
        document.getElementById('resultado-valor').innerText = numeroAleatorio;
        document.querySelector('.resultado').style.display = 'block';
    });
});
