import Repositores from "../repositories/repositories";
import { OwnerInterface } from "../interfaces/OwnerInterface";
import bcrypt from 'bcrypt';

class Models {
    repositories: Repositores;

    constructor() {
        this.repositories = new Repositores();
    }

    async registerUser(user: OwnerInterface) {
        const saltRounds = 10;
        const hashedPassword = await bcrypt.hash(user.password, saltRounds);
        user.password = hashedPassword;
        return await this.repositories.registerUser(user);
    }
}

export default Models;