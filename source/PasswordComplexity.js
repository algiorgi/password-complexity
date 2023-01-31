const PasswordComplexityValues = {
    WEAK: 'weak',
    GOOD: 'good',
    EXCELLENT: 'excellent',
}

const calculateComplexity = (password) => {
    let complexity = PasswordComplexityValues.WEAK;
    if (password) {
        const passwordLength = password.length;
        const numbers = countNumbers(password);
        const containsLetters = hasLetters(password);

        complexity = passwordLength >= 8 && (numbers >= 2 && containsLetters) ? PasswordComplexityValues.EXCELLENT : 
        (passwordLength >= 8 || (numbers >= 2 && containsLetters)) ? PasswordComplexityValues.GOOD : PasswordComplexityValues.WEAK
    }
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

function hasLetters(password) {
    const expression = /[a-zA-Z]/g;;
    return expression.test(password);
}

module.exports = { calculateComplexity, PasswordComplexityValues }