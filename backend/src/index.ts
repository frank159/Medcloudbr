import app from "./app";
import createUser from './endPoints/createPatient';
import getUser from "./endPoints/getUser";
import deleteUser from "./endPoints/deletePatient";
import getDetalhes from "./endPoints/getDetalhes";
import {createLambdaHandler} from "lbn-lambda-express";

app.post('/user/signup', createUser);
app.get('/user/get', getUser);
app.delete('/user/delete', deleteUser);
app.get('/user/:id', getDetalhes);

export const handler = createLambdaHandler(app)