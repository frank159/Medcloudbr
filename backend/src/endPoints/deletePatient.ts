import connection from "../connection";
import { Request, Response } from "express";

export default async function deleteUser( req: Request, res: Response ): Promise<void> {

    try {

        const { id } = req.body;
        
            const result = await connection.raw(`
            DELETE FROM patient 
            WHERE id = "${id}"
            `)

            res.status(200).send({patient: result[0]})
            
    } catch (error) {
        console.log(error.message);
        res.status(500).send("ERROR")
    }
}
