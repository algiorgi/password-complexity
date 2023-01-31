const PasswordComplexityValues = {
    WEAK: 'weak',
    GOOD: 'good',
    EXCELLENT: 'excellent',
}

const calculateComplexity = (password) => {

    const passwordLength = password.length;

    let complexity = passwordLength >= 8 ? PasswordComplexityValues.GOOD : PasswordComplexityValues.WEAK;
    return complexity;
}

module.exports = { calculateComplexity, PasswordComplexityValues }