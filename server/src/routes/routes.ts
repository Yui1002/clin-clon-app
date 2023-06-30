import Controllers from "../controllers/controllers";

class Routes {
    controllers: Controllers;

    constructor() {
        this.controllers = new Controllers();
    }

    applyRouting(app: any) {
        app.post('/register', async (req: any, res: any) => {
            const response = await this.controllers.registerUser(req.body);
            console.log(response)
            const status = (Number(response) > 0) ? 200 : 400;
            console.log('status: ', status)
            res.sendStatus(status);
        })
    }
}

export default Routes;