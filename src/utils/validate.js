const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const passwordRegex = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;
const userNameRegex = /^(?=.*?[A-Z])(?=.*?[a-z])/

export const validateFormData = (email, password, userName) => {
    const isValidEmail = emailRegex.test(email);
    const isValidPassword = passwordRegex.test(password);

    if(!isValidEmail) {
        return 'Email id is invalid';
    }
    if(!isValidPassword) {
        return 'Password is invalid';
    }
    console.log('user name:', userName);
    if(userName) {
        const isValidUserName = userNameRegex.test(userName);

        return isValidUserName ? null : 'Invalid User Name'
    }
    return null;
};

export const validateEmailAddress = (email) => {
    const isValidEmail = emailRegex.test(email);

    return isValidEmail ? null : 'Email id is invalid';
}

export const validatePassword = (password) => {
    const isValidPassword = passwordRegex.test(password);

    return isValidPassword ? null : 'Password is invalid';
}