const ageField = document.getElementById('ageField');
const ageSubmit = document.querySelector('.ageSubmit');
const userInput  = document.getElementById('userInput');

const allowedAge = 18;


// ageField.focus();

/*function myFunction() {
    var x = document.getElementById("myText").value;
    document.getElementById("demo").innerHTML = x;
}*/


function checkAge() {
    let userAge = Number(ageField.value);

    if (userAge > allowedAge) {

        userInput.textContent = 'welcome to the party!';


    }    else if (userAge < allowedAge) {


        userInput.textContent = 'your too young to party!';

    }


}


ageSubmit.addEventListener('click', checkAge);
