module.exports = {
    register: (req, res) => {
        console.log('Register Hit', req.body)
    },
    login: (req, res) => {
        const db = req.app.get("db");
        
    }
}