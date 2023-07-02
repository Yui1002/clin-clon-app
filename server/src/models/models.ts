import Repositories from "../repositories/repositories";
import { OwnerInterface } from "../interfaces/OwnerInterface";
import bcrypt from 'bcrypt';

class Models {
    repositories: Repositories;

    constructor() {
        this.repositories = new Repositories();
    }

    async isRegistered(email: string) {
        const dataCount = await this.repositories.isRegistered(email);
        console.log('data count: ', dataCount);
        return dataCount > 0;
    }

    async registerUser(user: OwnerInterface) {
        if (user.password !== null) {
            const saltRounds = 10;
            const hashedPassword = await bcrypt.hash(user.password, saltRounds);
            user.password = hashedPassword;
        }
        return await this.repositories.registerUser(user);
    }
}

export default Models;