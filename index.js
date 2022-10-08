const fieldset = document.getElementById('fieldset')
const title = document.getElementById('title');
const form = document.getElementById('form');
const email = document.getElementById('email');
const country = document.getElementById('country');
const zip = document.getElementById('zip');
const password = document.getElementById('password');
const confirmPassword = document.getElementById('confirmPassword');
const errorMessage = document.querySelector('.error')



form.addEventListener('submit', e =>{
    e.preventDefault();

    validateInputs();
});

const setError = (element, message) => {
    element.classList.add('errorBorder');
    element.classList.remove('success');
    element.nextElementSibling.innerHTML = message;
}

const setSuccess = element => {
    element.classList.add('success');
    element.classList.remove('errorBorder');
    element.nextElementSibling.innerHTML = '';

}

const isValidEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    return re.test(String(email).toLowerCase())
}


const validateInputs = () => {
    const emailValue = email.value.trim();
    const countryValue = country.value.trim();
    const zipValue = zip.value.trim();
    const passwordValue = password.value.trim();
    const confirmPasswordValue = confirmPassword.value.trim();

    if(emailValue === ''){
        setError(email, 'email is required')
    }else if(!isValidEmail(emailValue)){
        setError(email, 'provide a valide email address');
    }else{
        setSuccess(email);
    }

    if(countryValue === ''){
        setError(country, 'country is required');
    }else{
        setSuccess(country);
    }

    if(zipValue === ''){
        setError(zip, 'zip is required');
    }else{
        setSuccess(zip);
    }

    if(passwordValue === ''){
        setError(password, 'password is required');
    }else if(passwordValue.length < 8){
        setError(password, 'password must be at least 8 characters long');
    }else{
        setSuccess(password);
    }

    if(confirmPasswordValue === ''){
        setError(confirmPassword, 'Confirm your password');
    }else if(confirmPasswordValue !== passwordValue){
        setError(confirmPassword, 'passwords do not match');
    }else{
        setSuccess(confirmPassword);
    }
}