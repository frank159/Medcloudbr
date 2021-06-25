import { Request, Response } from "express";
import connection from "../connection";
import { user } from "../types";
import { generateId } from "../services/idGenerator";
import { generateToken } from "../services/authenticator";

export default async function createUser(
   req: Request,
   res: Response
): Promise<void> {
   try {

      const { name, email, age, birthday, historic, mothersName, entrance, released } = req.body

      if (!name || !email || !age || !birthday || !historic || !mothersName || !entrance) {
         res.statusCode = 422
         throw new Error("Preencha os campos 'name, email, age, birthday, historic, mothersName, entrance")
      }

      const [user] = await connection('patient')
         .where({ email })

      if (user) {
         res.statusCode = 409
         throw new Error('Email já cadastrado')
      }

      const id: string = generateId();

      const newUser: user = {
         id,
         name,
         email,
         age,
         birthday,
         historic,
         mothersName,
         entrance,
         released
      }

      await connection('patient')
         .insert(newUser);

      const token: string = generateToken({
         id
      });

      res.status(201).send({ patient: newUser, token });

   } catch (error) {
      res.status(400).send({ message: error.message })
   }
}