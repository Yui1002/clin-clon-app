import Models from "../models/models"
import { OwnerInterface } from "../interfaces/OwnerInterface";

class Controllers {
    models: Models;

    constructor() {
        this.models = new Models();
    }

    async registerUser(user: OwnerInterface) {
        const response = await this.models.registerUser(user);
        return response;
    }
}

export default Controllers;