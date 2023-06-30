import Repositories from "../repositories/repositories";
import { OwnerInterface } from "../interfaces/OwnerInterface";
import bcrypt from 'bcrypt';

class Models {
    repositories: Repositories;

    constructor() {
        this.repositories = new Repositories();
    }

    async registerUser(user: OwnerInterface) {
        const saltRounds = 10;
        const hashedPassword = await bcrypt.hash(user.password, saltRounds);
        user.password = hashedPassword;
        const response = await this.repositories.registerUser(user);
        console.log('lol')
        console.log('response in model: ', response);
        return response;
    }
}

export default Models;