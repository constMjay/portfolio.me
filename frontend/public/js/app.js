$(document).ready(() => {
    /**
     * This is for navIcon & Nav Menu
     */
    let navIcon = false;
    $('.nav-icon').click(() => {
        if (!navIcon) {
            $('.nav-icon').addClass('active');
            $('.nav-menu').addClass('active');
            return navIcon = true
        } else {
            $('.nav-icon').removeClass('active');
            $('.nav-menu').removeClass('active');
            return navIcon = false
        }
    });

    /**
     * Contact Page
     */

    $('#myForm').submit(async (e) => {
        // Prevent from reloading page when sending info
        e.preventDefault();

        /**
         * Add class for button send to display none for style
         */
        $('.btnContainer').addClass('hide')

        /**
         * Send the form data to database
         */
        const response = await fetch('/contact', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                fullname: $('#fullname').val(),
                email: $('#email').val(),
            })
        })

        const result = await response.json();
        // Validate the input fields
        const { message } = result
        if (message) {
            inputValidation(message, 'error')
        }

        /**
         * Reset the value of input field
         */
        $('#fullname').val("")
        $('#email').val("")
    })

});
function inputValidation(errMessage, classlist) {
    const formGroupContainer = document.querySelector('.contactForm__form')
    const formContainer = document.getElementById('myForm');


    let divMsg = document.createElement('div'); //Create Div for Error messages
    divMsg.className = `${errMessage, classlist}`; //Add Class for error messages
    divMsg.appendChild(document.createTextNode(errMessage)) //Append the error messages

    formGroupContainer.insertBefore(divMsg, formContainer)
    setTimeout(() => {
        divMsg.remove();

        /**
         * Show the button again once the error message was gone
         */
        $('.btnContainer').removeClass('hide')
    }, 3000)
}