import Models from "../models/models"

class Controllers {
    models: Models;

    constructor() {
        this.models = new Models();
    }

    async welcome(req: any, res: any) {
        res.status(200).send('welcome')
    }

    async registerOwner(req: any, res: any) {
        const isRegistered = await this.models.isOwnerRegistered(req.body.email);
        if (isRegistered) {
            res.status(400).send('Owner is already registered');
        } else {
            const response = await this.models.registerOwner(req.body);
            const token = await this.models.createToken(req.body.email);
            Number(response) > 0 ? res.status(200).json({ status: 'success', message: 'User Registered', data: {token}}) : res.sendStatus(400);
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
            const token = await this.models.createToken(req.body.email);
            res.status(200).json({ status: 'success', message: 'User Logged In', data: {token}})
        }
    }

    async getUsers(req: any, res:any) {
        console.log('helooo')
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