// Check for saved theme preference in local storage
const currentTheme = localStorage.getItem('theme');
if (currentTheme) {
  document.body.classList.add(currentTheme);
}

// Dark mode toggle function
function toggleDarkMode() {
  document.body.classList.toggle('dark-mode');
  
  // Save the user's theme preference to local storage
  const theme = document.body.classList.contains('dark-mode') ? 'dark-mode' : '';
  localStorage.setItem('theme', theme);
}

// Event listener for dark mode toggle button
const darkModeToggle = document.getElementById('darkModeToggle');
darkModeToggle.addEventListener('click', toggleDarkMode);




// form-control
const form = document.getElementById("form");
const firstName = document.getElementById("fullName");
const email = document.getElementById("Email");

// successbox
const DismissButton = document.getElementById('button');
const successMessage = document.querySelectorAll('.success-message');

// function that shows error
function showError(input, message){
    // to target the iput in the parent element
    const formControl = input.parentElement;
    // to add the class and make it visible
    formControl.className = 'form-control error';
    const p = formControl.querySelector('p');
    p.innerText = message;
}

// function to check required field
 function checkRequiredField(inputArr){
   inputArr.forEach(function (input){
    if(input.value.trim() ===""){
        showError(input, `${getFieldName(input)} can't be empty`);
    }
    else{
        showSuccess();
     }
   });
 }

//  function to get field name
function getFieldName(input){
  return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

// even listener for submitting form, when the submit button is clicked
 form.addEventListener('submit', function(e){
    e.preventDefault();
    checkRequiredField([fullName, email])
 })



//  function that shows the success box
function showSuccess(){
    successMessage[0].classList.add('success');
    successMessage[1].classList.add('success');

}

// function that removes success class
function removeSuccess(){
  successMessage[0].classList.remove('success');
  successMessage[1].classList.remove('success');
}

// Event listener listening for the click dismissal event
 DismissButton.addEventListener('click', function(e){
  // e.preventDefault()
  // console.log('frank');
  if (successMessage[1].classList.contains("success")) {
      removeSuccess();
    }
})



