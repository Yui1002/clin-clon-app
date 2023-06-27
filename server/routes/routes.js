class Routes {
    constructor() {

    }

    applyRouting(app) {
        app.post('/register', (req, res) => {
            res.send('Hello from server');
        })
    }
}

export default Routes;