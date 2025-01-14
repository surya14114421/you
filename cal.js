
    // Append value to the display
    function appendToDisplay(value) {
      document.getElementById('display').value += value;
    }

    // Clear the display
    function clearDisplay() {
      document.getElementById('display').value = '';
    }

    // Calculate the result
    function calculateResult() {
      let expression = document.getElementById('display').value;
      try {
        // Evaluate the expression and show the result
        document.getElementById('display').value = eval(expression);
      } catch (error) {
        document.getElementById('display').value = 'Error';
      }
    }