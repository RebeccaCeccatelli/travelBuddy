function saveForm(formType) {
    var fieldValue = document.getElementById(formType).querySelector('input').value;

    if (!fieldValue) {
        alert("This field cannot be empty.");
        return;
    }

    var valid = true;

    if (valid) {
        alert('Save successful!');
        clearFields(formType);
    } else {
        alert('Please complete the required fields or fix validation errors.');
    }
}

function clearFields(formType) {
    document.getElementById(formType).querySelector('input').value = '';
}

document.getElementById("finishButton").addEventListener("click", function() {
    window.close();
});