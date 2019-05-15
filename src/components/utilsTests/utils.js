module.exports = {
    sum(a, b) {
        return a + b
    },
    phrase() {
        return 'Sean is the greatest'
    },
    checkCallback(str, cb) {
        cb(str)
    },
    combineCaps(firstName, lastName) {
        // Concatenates two strings and make sure their first letters are capitalized
        return `${firstName} ${lastName}`;
    }
}