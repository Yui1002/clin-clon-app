import Models from "../models/models"
import { OwnerInterface } from "../interfaces/OwnerInterface";

class Controllers {
    models: Models;

    constructor() {
        this.models = new Models();
    }

    async registerUser(user: OwnerInterface) {
        return await this.models.registerUser(user);
    }
}

export default Controllers;