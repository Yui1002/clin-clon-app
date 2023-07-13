import Controllers from "../controllers/controllers";

class Routes {
    controllers: Controllers;

    constructor() {
        this.controllers = new Controllers();
    }

    applyRouting(app: any) {
        app.post('/register', this.controllers.registerOwner.bind(this.controllers));
        app.post('/signin', this.controllers.signInOwner.bind(this.controllers));
        app.get('/users/:email', this.controllers.getUsers.bind(this.controllers));
        app.post('/addUser', this.controllers.addUser.bind(this.controllers));
    }
}

export default Routes;