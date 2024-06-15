import express from "express";
import { create ,getAllUsers,getUser,deletUser } from "../controllers/userController";


const route = express.Router()


route.post("/create",create);
route.get("/users",getAllUsers);
route.get("/users/:id",getUser);
route.delete("/users/:id",deletUser);

export default route;