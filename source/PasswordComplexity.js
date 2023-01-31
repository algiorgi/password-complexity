const PasswordComplexityValues = {
    WEAK: 'weak',
    GOOD: 'good',
    EXCELLENT: 'excellent',
}

const calculateComplexity = (password) => {

    const passwordLength = password.length;
    const numbers = countNumbers(password);

    let complexity = passwordLength >= 8 && numbers >= 2 ? PasswordComplexityValues.EXCELLENT : 
    (passwordLength >= 8 || numbers >= 2) ? PasswordComplexityValues.GOOD : PasswordComplexityValues.WEAK
    return complexity;
}

function countNumbers(password) {
    let count = 0;
    for (i = 0; i < password.length; i++) {
        if (isNaN(password[i]) == false) {
            count++;
        }
    }

    return count;
}

module.exports = { calculateComplexity, PasswordComplexityValues }