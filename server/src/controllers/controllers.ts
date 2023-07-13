import Models from "../models/models"

class Controllers {
    models: Models;

    constructor() {
        this.models = new Models();
    }

    async registerOwner(req: any, res: any) {
        const isRegistered = await this.models.isOwnerRegistered(req.body.email);
        if (isRegistered) {
            res.status(400).send('Owner is already registered');
        } else {
            const response = await this.models.registerOwner(req.body);
            Number(response) > 0 ? res.sendStatus(200) : res.sendStatus(400);
        }
    }

    async signInOwner(req: any, res: any) {
        const isRegistered = await this.models.isOwnerRegistered(req.body.email);
        if (!isRegistered) {
            res.status(400).send('Owner does not exist');
        } else {
            const isPasswordMatch = await this.models.isPasswordMatch(req.body.email, req.body.password);
            if (!isPasswordMatch) {
                res.status(400).send('Password does not match');
                return;
            }
            res.status(200).send('Logined successfully');
        }
    }

    async getUsers(req: any, res:any) {
        const users = await this.models.getUsers(req.params.email);
        res.send(users);
    }

    async addUser(req: any, res: any) {
        const isRegistered = await this.models.isUserRegistered(req.body.username);
        if (isRegistered) {
            res.status(400).send('User is already registered');
        } else {
            const response = await this.models.addUser(req.body);
            Number(response) > 0 ? res.sendStatus(200) : res.sendStatus(400);
        }
    }
}

export default Controllers;