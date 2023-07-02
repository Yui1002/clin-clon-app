import Controllers from "../controllers/controllers";

class Routes {
    controllers: Controllers;

    constructor() {
        this.controllers = new Controllers();
    }

    applyRouting(app: any) {
        // app.post('/register', async (req: any, res: any) => {
        //     const response = await this.controllers.registerUser(req.body);
        //     const status = (Number(response) > 0) ? 200 : 400;
        //     res.sendStatus(status);
        // })

        app.post('/register', this.controllers.registerUser.bind(this.controllers))
    }
}

export default Routes;