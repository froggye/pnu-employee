
function getData() { // this function will get called when the save button is clicked
    var itemForm = document.getElementById('survey-form'); // getting the parent container of all the checkbox inputs
    var checkBoxes = itemForm.querySelectorAll('input[type="checkbox"]'); // get all the check box

    let error = true;
    checkBoxes.forEach(item => { // loop all the checkbox item
        if (item.checked) {  //if the check box is checked
            error = false;
        }
    });
    if (error) {
        document.getElementById('wrong').style.display = "block";
        document.getElementById('wrong').scrollIntoView();
        return false;
    }
    else {
        document.getElementById('wrong').style.display = "none";
        return true;
    }
}