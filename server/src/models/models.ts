import Repositories from "../repositories/repositories";
import { OwnerInterface } from "../interfaces/OwnerInterface";
import { UserInterface } from "../interfaces/UserInterface";
import bcrypt from 'bcrypt';

class Models {
    repositories: Repositories;

    constructor() {
        this.repositories = new Repositories();
    }

    async isOwnerRegistered(email: string) {
        const dataCount = await this.repositories.isOwnerRegistered(email);
        return dataCount > 0;
    }

    async isUserRegistered(username: string) {
        const dataCount = await this.repositories.isUserRegistered(username);
        return dataCount > 0;
    }

    async registerOwner(owner: OwnerInterface) {
        if (owner.password !== null) {
            const saltRounds = 10;
            const hashedPassword = await bcrypt.hash(owner.password, saltRounds);
            owner.password = hashedPassword;
        }
        return await this.repositories.registerOwner(owner);
    }

    async getOwnerId(email: string) {
        return await this.repositories.getOwnerId(email);
    }

    async getUsers(email: string) {
        const ownerId = await this.getOwnerId(email);
        return await this.repositories.getUsers(ownerId);
    }

    async addUser(user: UserInterface) {
        // need to get the belonged owner from the owner's email
        const ownerId = await this.getOwnerId(user.ownerEmail);
        user.ownerId = ownerId;
        user.updateBy = user.ownerEmail;
        return await this.repositories.addUser(user);
    }
}

export default Models;