const add = (a,b) => a+b;
const generateGreeting = (name) => `hi ${name}`

test('should add', () => {
    const result = add(3,4)
    expect(result).toBe(7)
})

test('should return name', () => {
    const result = generateGreeting('Mike')
    expect(result).toBe('hi Mike')
})