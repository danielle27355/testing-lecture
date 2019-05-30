module.exports = {
    sum(a, b){
        return a + b;
    },
    phrase(){
        return 'Danielle is the greatest'
    },
    checkCallback(str, cb){
        cb(str)
    }
}