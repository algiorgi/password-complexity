const PasswordComplexityValues = {
    WEAK: 'weak',
    GOOD: 'good',
    EXCELLENT: 'excellent',
}

const calculateComplexity = (password) => {
    let complexity = PasswordComplexityValues.WEAK;
    if (password) {
        const minimumLengthPassed = lengthIsGreaterOrEqualThan(password, 8);
        const lettersAndAtLeastTwoNumbersPassed = containsLetters(password) && containsNumbers(password, 2);


        complexity = minimumLengthPassed && lettersAndAtLeastTwoNumbersPassed   ? PasswordComplexityValues.EXCELLENT : 
                     (minimumLengthPassed || lettersAndAtLeastTwoNumbersPassed) ? PasswordComplexityValues.GOOD : 
                                                                                  PasswordComplexityValues.WEAK
    }
    return complexity;
}

function lengthIsGreaterOrEqualThan(password, minimumLength) {
    return password.length >= minimumLength;
}

function containsNumbers(password, count) {
    const numbers = countNumbers(password);
    return numbers >= count;
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

function containsLetters(password) {
    const expression = /[a-zA-Z]/g;;
    return expression.test(password);
}

module.exports = { calculateComplexity, PasswordComplexityValues }