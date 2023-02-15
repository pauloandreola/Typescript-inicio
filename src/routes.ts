import { Router } from "express";
import userController from "./controller/userController";

const routes = Router();

routes.get('/users', userController.index);

export default routes;