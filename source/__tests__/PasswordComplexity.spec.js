const { calculateComplexity, PasswordComplexityValues } = require("../PasswordComplexity")

describe('Password complexity tests', () => {
    it('should be excellent', () => {
        const complexity = calculateComplexity('password123')
        expect(complexity).toEqual(PasswordComplexityValues.EXCELLENT)
    })

    it('should be good', () => {
        const complexity = calculateComplexity('password')
        expect(complexity).toEqual(PasswordComplexityValues.GOOD)
    })
    
    it('should be weak', () => {
        const complexity = calculateComplexity('pass')
        expect(complexity).toEqual(PasswordComplexityValues.WEAK)
    })

    const theories = [
        {description: 'password 12 should be weak', password: '12', expected: PasswordComplexityValues.WEAK},
        {description: 'empty password should be weak', password: '', expected: PasswordComplexityValues.WEAK},
        {description: 'undefined should be weak', password: undefined, expected: PasswordComplexityValues.WEAK},
        {description: 'password 12345678 should be weak', password: '12345678', expected: PasswordComplexityValues.GOOD},
        {description: 'password 1abcdeft should be good', password: '1abcdeft', expected: PasswordComplexityValues.GOOD},
    ];

    theories.forEach(theory => {
        it(theory.description, () => {
            const complexity = calculateComplexity(theory.password)
            expect(complexity).toEqual(theory.expected)
        })
    });
})