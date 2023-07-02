import pkg from "pg";
import { Pool } from "pg";
import { v4 as uuidv4 } from 'uuid';
import dotenv from 'dotenv';
dotenv.config();
import {OwnerInterface} from "../interfaces/OwnerInterface";

const pool = new Pool({
    user: process.env.USER,
    host: process.env.HOST,
    database: process.env.DATABASE,
    password: process.env.PASSWORD,
    port: Number(process.env.PORT),
})

class Repositories {
    async isRegistered(email: string) {
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

    async registerUser(user: OwnerInterface) {
        const client = await pool.connect();
        const uuid = uuidv4();

        try {
            const sql = "INSERT INTO public.owners (owner_id, first_name, last_name, email_address, status, create_date, owner_password) VALUES ($1, $2, $3, $4, $5, $6, $7);";
            const data = await client.query(sql, [uuid, user.firstName, user.lastName, user.email, user.status, user.createDate, user.password]);
            console.log('successfully inserted!!', data.rowCount)
            return data.rowCount;
        } catch(err) {
            console.log('error: ', err);
            return err;
        } finally {
            client.release();
        }
    }
}

export default Repositories;