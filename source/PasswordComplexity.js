const PasswordComplexityValues = {
    WEAK: 'weak',
    GOOD: 'good',
    EXCELLENT: 'excellent',
}

const calculateComplexity = (password) => {
    return PasswordComplexityValues.WEAK;
}

module.exports = { calculateComplexity, PasswordComplexityValues }