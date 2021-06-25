import connection from "../connection";
import { Request, Response } from "express";

export default async function getDetalhes( req: Request, res: Response ): Promise<void> {

    try {
        const result = await connection.raw(`
        SELECT * from patient WHERE id LIKE "%${req.params.id}%";
        `
        );
        res.status(200).send({ patient: result[0]})
    }catch (error) {
        res.status(400).send(error.message);
      }
}