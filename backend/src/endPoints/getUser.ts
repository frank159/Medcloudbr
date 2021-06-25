import connection from "../connection";
import { Request, Response } from "express";

export default async function getUser( req: Request, res: Response ): Promise<void> {

    try {

            const result = await connection.raw(`
              SELECT * FROM patient 
            `)
            res.send({ patient: result[0]})

    } catch (error) {
        console.log(error.message);
        res.status(500).send("ERROR")
    }
}