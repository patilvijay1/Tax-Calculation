
function validationform() {
    const grossIncome = document.getElementById("gross-income").value.trim();
    const extraIncome = document.getElementById("extra-income").value.trim();
    const deductions = document.getElementById("deductions").value.trim();
    const age = document.getElementById("age").value;
  
    const errorIcons = document.querySelectorAll('.error-icon');
  
    // Remove active class from all error icons
    errorIcons.forEach(icon => icon.classList.remove('active'));
  
    let isValid = true;
  
    // Check for empty fields
    if (!grossIncome || isNaN(grossIncome)) {
        isValid = false;
        document.getElementById('gross-income-error').classList.add('active'); // Show error icon for gross income field
      } else {
        document.getElementById('gross-income-error').classList.remove('active'); // Hide error icon for gross income field if it's filled
      }
      
      if (!extraIncome || isNaN(extraIncome)) {
        isValid = false;
        document.getElementById('extra-income-error').classList.add('active'); // Show error icon for extra income field
      } else {
        document.getElementById('extra-income-error').classList.remove('active'); // Hide error icon for extra income field if it's filled
      }
      
      if (!deductions || isNaN(deductions)) {
        isValid = false;
        document.getElementById('deductions-error').classList.add('active'); // Show error icon for deductions field
      } else {
        document.getElementById('deductions-error').classList.remove('active'); // Hide error icon for deductions field if it's filled
      }
      
      if (!age || age === "#") {
        isValid = false;
        document.getElementById('age-error').classList.add('active'); // Show error icon for age field
      } else {
        document.getElementById('age-error').classList.remove('active'); // Hide error icon for age field if it's filled
      }
      
      return isValid;
  }

// Function to calculate tax
function calculateTax() {
    var grossIncome = parseFloat(document.getElementById("gross-income").value);
    var extraIncome = parseFloat(document.getElementById("extra-income").value);
    var age = document.getElementById("age").value;
    var deductions = parseFloat(document.getElementById("deductions").value);

    var taxableIncome = grossIncome + extraIncome - deductions;
    var tax = 0;

    if (taxableIncome > 800000) {
        if (age === "<40") {
            tax = 0.3 * (taxableIncome - 800000);
        } else if (age === ">=40 & <60") {
            tax = 0.4 * (taxableIncome - 800000);
        } else if (age === ">=60") {
            tax = 0.1 * (taxableIncome - 800000);
        }
    }

    return tax;
}

// Function to display modal with calculated tax
function showModal() {
    var tax = calculateTax();
    var modal = document.getElementById("modal");
    var modalMessage = document.getElementById("modal-message");

    modalMessage.innerHTML = "<h1>Your overall income will be: <br> " + tax.toFixed(2) + "<br><h3> after tax deductions</h3>";
    modal.style.display = "block";
}

// Close modal
document.getElementById("close-modal").addEventListener("click", function() {
    document.getElementById("modal").style.display = "none";
});

// // Event listener for form submission
document.getElementById("tax-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission
    if (validationform()) {
      calculateTax();
        showModal(); // If form is valid, calculate tax and show modal
    }
});






