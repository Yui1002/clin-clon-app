import Models from "../models/models"
// import { OwnerInterface } from "../interfaces/OwnerInterface";

class Controllers {
    models: Models;

    constructor() {
        this.models = new Models();
    }

    // async registerUser(user: OwnerInterface) {
    //     const isRegistered = await this.models.isRegistered(user.email);
    //     if (!isRegistered) {
    //         const response = await this.models.registerUser(user);
    //         return response;
    //     }
    // }

    async registerUser(req: any, res: any) {
        const isRegistered = await this.models.isRegistered(req.body.email);
        if (isRegistered) {
            res.status(400).send('User is already registered');
        } else {
            const response = await this.models.registerUser(req.body);
            Number(response) > 0 ? res.sendStatus(200) : res.sendStatus(400);
        }
    }
}

export default Controllers;