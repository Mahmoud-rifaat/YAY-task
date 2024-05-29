function generateRandomIndex(n) {
    if (typeof n !== 'number' || n < 0 || Math.floor(n) !== n) {
        throw new Error('n must be a non-negative integer');
    }
    const randomDecimal = Math.random();
    const randomInRange = randomDecimal * (n + 1);
    const randomDigit = Math.floor(randomInRange);

    return randomDigit;
}



module.exports = generateRandomIndex;