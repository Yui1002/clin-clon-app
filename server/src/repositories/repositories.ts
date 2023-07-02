import pkg from "pg";
import { Pool } from "pg";
import { v4 as uuidv4 } from 'uuid';
import dotenv from 'dotenv';
dotenv.config();
import {OwnerInterface} from "../interfaces/OwnerInterface";
import { UserInterface } from "../interfaces/UserInterface";

const pool = new Pool({
    user: process.env.USER,
    host: process.env.HOST,
    database: process.env.DATABASE,
    password: process.env.PASSWORD,
    port: Number(process.env.PORT),
})

class Repositories {
    async isOwnerRegistered(email: string) {
        const client = await pool.connect();
        try {
            const sql = "SELECT * FROM owners WHERE email_address = $1;";
            const data = await client.query(sql, [email]);
            return data.rowCount;
        } catch(err) {
            return err;
        } finally {
            client.release();
        }
    }

    async isUserRegistered(username: string) {
        const client = await pool.connect();
        try {
            const sql = "SELECT * FROM users WHERE username = $1;";
            const data = await client.query(sql, [username]);
            return data.rowCount;
        } catch(err) {
            return err;
        } finally {
            client.release();
        }
    }

    async registerOwner(owner: OwnerInterface) {
        const client = await pool.connect();
        const uuid = uuidv4();

        try {
            const sql = "INSERT INTO public.owners (owner_id, first_name, last_name, email_address, status, create_date, owner_password) VALUES ($1, $2, $3, $4, $5, $6, $7);";
            const data = await client.query(sql, [uuid, owner.firstName, owner.lastName, owner.email, owner.status, owner.createDate, owner.password]);
            return data.rowCount;
        } catch(err) {
            console.log('error: ', err);
            return err;
        } finally {
            client.release();
        }
    }

    async addUser(user: UserInterface) {
        const client = await pool.connect();
        const uuid = uuidv4();

        try {
          const sql = "INSERT INTO public.users (user_id, owner_id, first_name, last_name, user_name, rate, rate_type, status, update_date, update_by) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10);";
        } catch(err) {
            console.log('error: ', err);
            return err;
        } finally {
            client.release();
        }
    }

    async getOwnerId(email: string) {
        const client = await pool.connect();

        try {
          const sql = "SELECT owner_id FROM public.owners WHERE email_address = $1;";
          const data = await client.query(sql, [email]);
          console.log('data: ', data);
        } catch(err) {
            return err;
        } finally {
            client.release();
        }
    }
}

export default Repositories;